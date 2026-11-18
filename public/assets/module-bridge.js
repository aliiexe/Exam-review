/* Same-origin adapter. The three learning engines retain independent storage keys. */
(() => {
  'use strict';
  const slug = document.documentElement.dataset.module;
  if (window.parent === window) {
    location.replace('/#/module/' + slug + '/' + (location.hash.replace(/^#\/?/, '') || 'home'));
    return;
  }
  const host = window.parent.TraceCampus;
  if (!host) return;
  const originalSave = save;
  save = function () { originalSave(); host.changed(slug); };
  window.TraceModule = {
    snapshot: () => JSON.parse(JSON.stringify(state)),
    validate: raw => sanitizeState(raw),
    import: raw => {
      state = sanitizeState(raw);
      state.theme = host.theme();
      state.zen = false;
      filters.flashDeck = [];
      save(); render();
    },
    navigate: (path, query) => {
      closeDialogs();
      if (query && path === 'atlas') { filters.atlasQ = query; filters.atlasCh = 'all'; }
      if (query && path === 'commands') { filters.cmdQ = query; filters.cmdCh = 'all'; }
      go(path || 'home');
      if (location.hash === '#/' + path) render();
    },
    setAppearance: (theme, zen) => {
      state.theme = theme;
      document.documentElement.dataset.theme = theme;
      document.body.classList.toggle('campus-zen', zen);
    },
    exam: async (id, minutes) => {
      const ex = EX.find(x => x.id === id);
      if (ex) await startQuiz(ex.questions, ex.title, {mode: 'exam', examId: ex.id, minutes});
    },
    printExam: id => {
      const ex = EX.find(x => x.id === id);
      if (ex) printPaper(ex.questions, ex.title);
    },
    source: (id, page) => openSource(id, page || 1),
    focus: () => document.getElementById('main').focus({preventScroll: true})
  };
  // Keyboard commands are shared even while the reading canvas has focus.
  document.addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.target.isContentEditable;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); e.stopImmediatePropagation(); host.search();
    } else if (!typing && !document.querySelector('dialog[open]') && e.key.toLowerCase() === 'f' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault(); e.stopImmediatePropagation(); host.toggleZen();
    } else if (!typing && e.key === 'Escape' && !document.querySelector('dialog[open]')) {
      host.exitZen();
    }
  }, true);
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href="#/focus"]');
    if (a) { e.preventDefault(); e.stopImmediatePropagation(); host.go('focus'); }
  }, true);
  window.addEventListener('hashchange', () => host.moduleRoute(slug, location.hash.replace(/^#\/?/, '') || 'home'));
  host.moduleReady(slug);
})();
