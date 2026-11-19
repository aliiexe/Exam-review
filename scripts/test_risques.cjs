/* Regression checks for risk-module state, navigation, scoring and deadlines. */
const {readFileSync}=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=require('node:path').resolve(__dirname,'..');
const read=p=>readFileSync(root+'/'+p,'utf8');
const data=JSON.parse(read('public/modules/risques/data.js').split('window.TRACE_DATA = ')[1].trim().replace(/;$/,''));
const elements=new Map(),listeners={},intervals=[],stored=new Map();
const element=selector=>{
 if(!elements.has(selector))elements.set(selector,{innerHTML:'',textContent:'',dataset:{},open:false,hidden:false,style:{},classList:{toggle(){}},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;},focus(){},scrollIntoView(){},append(){},remove(){},click(){}});
 return elements.get(selector);
};
const document={querySelector:s=>s==='dialog[open]'?[...elements.values()].find(e=>e.open)||null:element(s),querySelectorAll:s=>s==='dialog[open]'?[...elements.values()].filter(e=>e.open):[],getElementById:id=>element('#'+id),documentElement:{dataset:{}},body:{classList:{toggle(){}},append(){}},createElement:()=>element('created'),addEventListener:(name,fn)=>(listeners[name]??=[]).push(fn)};
let hash='#/home', api;
const events={};
const host={theme:()=> 'light',changed(){},moduleReady(){},moduleRoute(){},search(){},toggleZen(){},exitZen(){}};
const window={TRACE_DATA:data,parent:{TraceCampus:host},addEventListener:(name,fn)=>events[name]=fn,print(){}};
const location={get hash(){return hash;},set hash(v){hash=v;events.hashchange?.();}};
const context=vm.createContext({window,document,location,localStorage:{getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)},Date,Math,JSON,Number,String,Object,Array,Set,Map,Promise,Error,Blob,URL,setInterval:fn=>intervals.push(fn),setTimeout:()=>0,clearTimeout(){},requestAnimationFrame:fn=>fn()});
vm.runInContext(read('public/modules/risques/app.js'),context);api=window.TraceModule;
const click=async(action,attrs={})=>{
 const target={dataset:{action,...attrs},disabled:false,closest:()=>target};
 for(const fn of listeners.click||[])await fn({target});
};
const basic=()=>({app:'TRACE-RISQUES',version:1});
(async()=>{
 assert.equal(api.snapshot().app,'TRACE-RISQUES');
 assert.throws(()=>api.validate({app:'TRACE-AUDIT',version:1}));
 const cleaned=api.validate({...basic(),mastered:['c1-01','invalid','c1-01'],bookmarks:['c8-10','invalid'],notes:{'c1-01':'Note','invalid':'Bad'},lastCard:'invalid'});
 assert.equal(cleaned.mastered.length,1);assert.equal(cleaned.bookmarks.length,1);assert.equal(cleaned.notes['c1-01'],'Note');assert.equal(cleaned.lastCard,null);
 const routes=['home','chapters','chapter/1','chapter/8/c8-10','atlas','commands','flashcards','exams','progress','bookmarks','errors','td','td/biotech','methods','sources','labs','chapter/999','result/missing'];
 for(const route of routes){api.navigate(route);assert.ok(element('#main').innerHTML.includes('TRACE'),route);assert.ok(!element('#main').innerHTML.includes('undefined'),route);}
 api.source(1,188);assert.ok(element('#source-dialog').innerHTML.includes('course-188.jpg'));
 api.source(1,999);assert.ok(element('#source-dialog').innerHTML.includes('course-188.jpg'));element('#source-dialog').close();
 // Untimed hub launch, 40 distinct questions, no hidden timer.
 await api.exam('exam-1',0);let state=api.snapshot();assert.equal(state.active.qids.length,40);assert.equal(state.active.deadline,null);
 const first=state.active.qids[0],q=data.questions.find(q=>q.id===first);
 await click('answer',{index:String(q.answer)});assert.equal(api.snapshot().active.answers[first],q.answer);
 // A correct practice answer contributes once, including after submission.
 const now=Date.now(),q1=data.questions[0];
 api.import({...basic(),active:{id:'attempt-practice',qids:[q1.id],answers:{[q1.id]:q1.answer},mode:'practice',startedAt:now,current:0}});
 await click('check');assert.equal(api.snapshot().stats[q1.id].tries,1);
 const pending=click('submit');await click('confirm-yes');await pending;
 assert.equal(api.snapshot().attempts.length,1);assert.equal(api.snapshot().stats[q1.id].tries,1);assert.equal(api.snapshot().active,null);
 // Timed-out sessions submit automatically, preserving answers and treating blanks as errors.
 api.import({...basic(),active:{id:'attempt-timeout',qids:[q1.id,data.questions[1].id],answers:{[q1.id]:q1.answer},mode:'exam',examId:'exam-1',startedAt:now-61000,duration:60,deadline:now-1000,current:0}});
 state=api.snapshot();assert.equal(state.active,null);assert.equal(state.attempts.length,1);assert.equal(state.attempts[0].timeout,true);assert.equal(state.stats[q1.id].lastCorrect,true);assert.equal(state.stats[data.questions[1].id].lastCorrect,false);
 for(const fn of intervals)fn();assert.equal(api.snapshot().attempts.length,1);
 // Four-option validation, deduplication and reload preservation.
 const invalid=api.validate({...basic(),active:{id:'attempt-invalid',qids:[q1.id,q1.id,'unknown'],answers:{[q1.id]:99},current:500,mode:'exam'}});
 assert.equal(invalid.active.qids.length,1);assert.equal(Object.keys(invalid.active.answers).length,0);assert.equal(invalid.active.current,0);
 api.import({...basic(),mastered:['c1-01'],notes:{'c1-01':'Persist'},workbench:{value:'R&D',decision:'Réduire'}});
 const saved=JSON.parse(stored.get('trace-risques-revision-v1'));assert.equal(saved.notes['c1-01'],'Persist');assert.equal(api.validate(saved).workbench.value,'R&D');
 assert.deepEqual([...stored.keys()],['trace-risques-revision-v1']);
 console.log('OK risques: all routes, sources, isolated storage, import validation, untimed exams, practice scoring, submission and deadline expiry.');
})().catch(e=>{console.error(e);process.exitCode=1;});
