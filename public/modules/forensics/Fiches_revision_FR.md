# TRACE — Digital Forensics : fiches de révision

121 fiches · 5 séances · 197 pages sources

Les pages indiquées sont les pages des fichiers PDF, non les numéros imprimés. Les reformulations et exercices sont des outils de révision, pas des sujets officiels. Les divergences sont conservées dans la section finale.

## Séance 1 — Introduction au Digital Forensics

Le vocabulaire, les méthodes et le raisonnement de l’enquêteur.

### 1. Définition & positionnement

#### Définition et exigence scientifique

Le Digital Forensics applique une méthode scientifique aux preuves numériques, de leur identification à leur présentation.

- Il cherche à reconstruire les faits : entrée de l’attaquant, chronologie, systèmes et comptes compromis, données consultées ou exfiltrées.
- Reproductibilité : un tiers doit pouvoir refaire l’analyse. Intégrité : préserver les données. Traçabilité : documenter les actions. Objectivité : partir des preuves.
- Le résultat attendu n’est pas seulement une liste de traces : ce sont des faits contextualisés et défendables.

**Point de vigilance :** Une hypothèse plausible ne remplace pas une preuve documentée.

**À expliquer sans regarder :** Définir le DF et citer ses quatre exigences scientifiques.

*Source : séance 1, pages PDF 7.*

#### Trois découpages méthodologiques à distinguer

Le support présente successivement quatre phases NIST, cinq piliers pédagogiques et six étapes d’investigation.

- Page 7 : Collection → Examination → Analysis → Reporting pour NIST SP 800-86.
- Page 8 : Identifier → Collecter → Préserver → Analyser → Présenter : les cinq piliers.
- Page 20 : Identification → Collecte → Préservation → Analyse → Documentation → Présentation : le processus en six étapes du cours.
- ISO/IEC 27037 est associé à l’identification, la collecte, l’acquisition et la préservation ; RFC 3227 à la collecte et à l’ordre de volatilité.

**Point de vigilance :** Le cours emploie plusieurs découpages : préciser celui demandé plutôt que mélanger quatre, cinq et six.

**À expliquer sans regarder :** Restituer séparément les quatre phases, les cinq piliers et les six étapes.

*Source : séance 1, pages PDF 7, 8, 20.*

#### SOC, IR, DFIR et CTI

Ces disciplines répondent à des questions différentes et se transmettent des informations.

- SOC : détecter et qualifier ; « l’alerte est-elle réelle ? ». Incident Response : contenir et éradiquer ; « comment arrêter l’attaque ? ».
- Digital Forensics : comprendre et prouver ; « que s’est-il passé exactement ? ». CTI : contextualiser les menaces, acteurs, IOC et TTP.
- Le SOC L1 surveille et trie ; le L2 analyse et évalue le périmètre ; le DFIR acquiert, corrèle et produit une timeline ; l’analyste malware étudie le programme.
- La CTI traverse tous les niveaux et reçoit aussi les indicateurs découverts pendant l’enquête.

**Point de vigilance :** Ne pas confondre arrêt de l’incident et démonstration de son déroulement.

**À expliquer sans regarder :** Associer chaque équipe à sa mission et à ses livrables.

*Source : séance 1, pages PDF 9, 10.*

#### Les cinq postures de défense

Le cours distingue prévention, recherche proactive, détection, réaction et correction.

- Préventif : hardening, correctifs, MFA, segmentation, sensibilisation. Proactif : threat hunting, veille, CTI, red/purple team.
- Détectif : SIEM, EDR/XDR, IDS/IPS, surveillance et triage. Réactif : réponse à incident, confinement, éradication, investigation, notification.
- Correctif : restauration, correction des failles, renforcement, retour d’expérience et mise à jour des playbooks.
- SOC : détection et hunting. CERT/CSIRT : coordination de la réponse. CTI : renseignement. DFIR : investigation et preuve.

**Point de vigilance :** Une même équipe peut intervenir dans plusieurs postures.

**À expliquer sans regarder :** Classer une action de sécurité dans la bonne posture.

*Source : séance 1, pages PDF 11.*

#### Écosystème d’outils et certifications du support

Les outils se mémorisent d’abord par fonction : collecter, analyser un disque, analyser la mémoire, le réseau ou un malware.

- Acquisition : KAPE, FTK Imager, dd, Paladin. Disque : Autopsy, The Sleuth Kit, X-Ways. Mémoire : Volatility 3, WinPmem, LiME.
- Réseau : Wireshark, Zeek, NetworkMiner. Malware : PEStudio, Ghidra, CAPA, Any.Run.
- Références du cours : FOR500/GCFE (Windows), FOR508/GCFA (IR et hunting), FOR610 (malware), FOR578/GCTI (CTI), CHFI.
- Les chapitres suivants précisent les rôles : WinPmem/LiME collectent la RAM, Volatility 3 l’analyse ; KAPE est du triage ciblé.

**Point de vigilance :** Les regroupements de l’introduction ne signifient pas que tous les outils font la même chose.

**À expliquer sans regarder :** Associer outil, domaine et étape d’investigation.

*Source : séance 1, pages PDF 4.*

### 2. Menaces & frameworks

#### Types d’incidents et pistes d’investigation

Le type d’incident guide les premières sources à examiner.

- Ransomware : chiffrement, double extorsion possible, note de rançon, Prefetch, Event Logs et suppressions de shadow copies.
- APT/espionnage : persistance, authentifications, mouvement latéral, communications C2 et présence prolongée.
- Insider threat : USB, DLP, accès anormaux, exfiltration. BEC : messages, règles Outlook et logs de messagerie. Data breach : accès aux données et trafic sortant.
- Les pourcentages des pages 2 et 13 décrivent des présentations différentes ; ils ne forment pas une seule statistique homogène.

**Point de vigilance :** Les chiffres sont des chiffres du support, pas des statistiques actuelles vérifiées.

**À expliquer sans regarder :** Choisir les premières familles d’artefacts selon le scénario.

*Source : séance 1, pages PDF 2, 13.*

#### Profils d’attaquants

Le support compare les attaquants par motivation, accès et sophistication.

- Nation-State/APT : espionnage, sabotage, propriété intellectuelle ; moyens avancés et présence durable.
- Cybercriminels : gain financier, fraude, ransomware et modèle d’affiliés. Insiders : accès légitime, erreur ou malveillance interne.
- Hacktivistes : idéologie, perturbation, notoriété. Script kiddies : opportunisme et usage d’outils publics.
- Le profil oriente les hypothèses et le hunting, mais doit être étayé par les éléments collectés.

**Point de vigilance :** L’outil utilisé, à lui seul, ne suffit pas à établir l’identité d’un attaquant.

**À expliquer sans regarder :** Distinguer motivation et sophistication.

*Source : séance 1, pages PDF 14.*

#### MITRE ATT&CK : tactiques, techniques, artefacts

ATT&CK est présenté comme une base de connaissances des comportements observés chez les attaquants.

- Les 14 tactiques listées : Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact.
- Le cours associe des techniques à des traces concrètes : PowerShell T1059.001 → EventID 4104, Prefetch, ConsoleHost_history.txt ; Run Keys T1547.001 → Run/RunOnce, Autoruns, Amcache.
- LSASS Memory T1003.001 → accès à lsass.exe et dump ; Application Layer C2 T1071 → proxy, PCAP, beaconing, JA3.
- Les nombres de techniques sont ceux de la version v15 mentionnée dans le support.

**Point de vigilance :** Apprendre le lien comportement → technique → artefact ; ne pas présenter les chiffres v15 comme ceux d’une version actuelle.

**À expliquer sans regarder :** Associer PowerShell, Run Keys, LSASS et C2 à leurs traces.

*Source : séance 1, pages PDF 15.*

#### Cyber Kill Chain : les sept étapes

La Kill Chain organise la séquence d’une intrusion.

- Reconnaissance : repérer la cible. Weaponization : préparer l’arme. Delivery : livrer le payload. Exploitation : exploiter une faiblesse.
- Installation : implanter le mécanisme persistant. Command & Control : établir le canal C2. Actions on Objectives : atteindre l’objectif, par exemple exfiltration ou impact.
- Elle aide à situer l’étape de détection et à rechercher ce qui a précédé. ATT&CK décrit plus finement les techniques.

**Point de vigilance :** Ne pas remplacer les sept étapes de la Kill Chain par les tactiques ATT&CK.

**À expliquer sans regarder :** Restituer la séquence et expliquer l’utilité du modèle.

*Source : séance 1, pages PDF 16.*

#### Diamond Model : les quatre sommets

Le Diamond Model relie l’adversaire, ses capacités, son infrastructure et sa victime.

- Adversary : qui attaque ? Capability : avec quelles capacités, quels outils et quelles TTP ?
- Infrastructure : IP, domaines, serveurs C2. Victim : cible, secteur, actifs concernés.
- Le cours l’utilise pour la corrélation de campagne et la CTI. Kill Chain = séquence ; ATT&CK = techniques ; Diamond = relations et attribution.

**Point de vigilance :** L’infrastructure correspond aux moyens techniques utilisés, pas aux outils/malwares de la catégorie Capability.

**À expliquer sans regarder :** Identifier les quatre sommets dans un scénario.

*Source : séance 1, pages PDF 16.*

#### APT et difficultés d’investigation

Advanced Persistent Threat désigne, dans le cours, une menace avancée et durable, souvent associée à un État.

- Advanced : outils sur mesure et techniques sophistiquées. Persistent : objectifs et présence à long terme.
- Difficultés : anti-forensics, outils légitimes détournés (living-off-the-land), code fileless, traces disque limitées. D’où l’intérêt de la mémoire et du threat hunting.
- Exemples du support : APT29/SolarWinds, Lazarus/WannaCry, APT41/espionnage et cybercrime, Sandworm/NotPetya.

**Point de vigilance :** Les attributions sont celles du support ; elles ne doivent pas être déduites d’un seul indice technique.

**À expliquer sans regarder :** Expliquer pourquoi la mémoire compte face aux menaces fileless.

*Source : séance 1, pages PDF 17.*

#### Taxonomie des malwares

Une famille se reconnaît par son comportement et par les traces recherchées.

- Ransomware : chiffre et réclame une rançon. Wiper : détruit les données. RAT/backdoor : fournit un accès distant persistant.
- Rootkit : dissimule sa présence. Cryptominer : détourne CPU/GPU. Infostealer : vole identifiants et données.
- Botnet : ensemble de machines contrôlées, avec persistance et communications C2. Fileless : activité principalement présentée comme résidant en mémoire.
- Exemples du cours : XMRig (minage), RedLine/Vidar (vol d’informations), AsyncRAT/Remcos (accès distant).

**Point de vigilance :** Distinguer objectif financier, destruction, furtivité et mode de résidence.

**À expliquer sans regarder :** Associer comportement, famille et artefacts.

*Source : séance 1, pages PDF 18.*

### 3. Processus d’investigation

#### Identification et collecte

On délimite l’incident avant d’acquérir les preuves selon leur volatilité.

- Identification : confirmer l’alerte, déterminer in-scope/out-of-scope, repérer les sources, vérifier l’autorisation et préparer les outils.
- Collecte : capturer les données volatiles avant le disque, utiliser une protection en écriture et créer les copies utiles.
- Chaque action doit indiquer quoi, quand et par qui. Le cours insiste sur la copie de travail et sur KAPE pour le triage rapide.

**Point de vigilance :** Délimiter le périmètre fait partie de l’identification, pas de la conclusion du rapport.

**À expliquer sans regarder :** Expliquer les décisions à prendre avant la collecte.

*Source : séance 1, pages PDF 20, 21.*

#### Préserver puis analyser

La préservation garantit l’intégrité ; l’analyse exploite les artefacts et leurs relations.

- Préserver : calculer les empreintes, documenter la Chain of Custody, chiffrer et contrôler l’accès au stockage.
- Le cours recommande trois copies : travail, archive, original scellé. Les transferts sont signés.
- Analyser : examiner les artefacts, construire la super-timeline, rechercher les IOC, corréler disque/mémoire/réseau/malware et mapper les TTP.

**Point de vigilance :** Stockage sécurisé, preuve d’intégrité et analyse sont complémentaires, pas interchangeables.

**À expliquer sans regarder :** Différencier une mesure de préservation d’une action d’analyse.

*Source : séance 1, pages PDF 22.*

#### Documentation et rapport

La documentation conserve la trace de l’enquête ; la présentation rend les résultats compréhensibles et vérifiables.

- Consigner découvertes, preuves associées, actions horodatées en UTC, captures, exports, pistes négatives et erreurs.
- Résumé exécutif : impact et recommandations pour la direction, sans jargon. Méthodologie : périmètre, outils, procédures et limitations.
- Analyse technique : artefacts, IOC, timeline et mapping ATT&CK. Annexes : hash, logs bruts, CoC et règles YARA/Sigma.
- Chaque affirmation doit renvoyer à un élément qui la soutient.

**Point de vigilance :** Ne pas réserver la documentation à la fin : elle accompagne les actions.

**À expliquer sans regarder :** Placer une information dans la bonne section du rapport.

*Source : séance 1, pages PDF 23.*

### 4. Artefacts & preuves

#### Artefact ≠ preuve

Un artefact est une trace brute ; une preuve est un artefact validé, contextualisé et documenté démontrant un fait.

- La trace peut provenir du système, d’un utilisateur, d’une application ou d’un attaquant.
- Passer à la preuve exige de relier la trace à un fait, un contexte et une traçabilité.
- L’exemple du cours part d’un fichier Prefetch et aboutit à un fait daté et attribué ; les séances spécialisées insistent sur le recoupement pour l’attribution.

**Point de vigilance :** La seule présence d’un fichier ne répond pas automatiquement à toutes les questions « qui, quand, comment ».

**À expliquer sans regarder :** Donner la différence entre observation brute et conclusion étayée.

*Source : séance 1, pages PDF 25.*

#### Volatilité et priorité de collecte

Les données volatiles disparaissent avec l’arrêt du système ; les données persistantes restent sur les supports.

- Volatil : RAM, processus, connexions, sessions, clés en mémoire. Non-volatil : disque, ruches, EVTX, historiques, Prefetch, logs et tâches.
- Ordre de la page 27 : registres CPU/cache → RAM → état réseau → processus → disque → amovibles/cloud → archives/sauvegardes.
- Le principe commun aux séances est de capturer le volatil avant l’extinction et le disque.
- La séance 5 présente un ordre pratique Linux où processus et réseau sont inversés : les questions de séquence précisent la séance.

**Point de vigilance :** Ne pas confondre registre Windows, persistant dans les ruches, et registres CPU.

**À expliquer sans regarder :** Classer les sources par volatilité et distinguer live/dead.

*Source : séance 1, pages PDF 26, 27.*

#### Chain of Custody : la vie de la preuve

La chaîne de possession documente l’origine, la conservation et les transferts d’une preuve.

- Champs du support : Evidence ID, type, source, collecteur, date/heure UTC, SHA-256, stockage, transferts, signatures.
- L’émetteur et le récepteur signent les transferts ; les accès et manipulations sont tracés.
- Hash avant/après, copies distinctes, stockage chiffré et scellé complètent cette traçabilité.
- Le cours souligne qu’une rupture peut rendre la preuve contestable et compromettre la crédibilité du rapport.

**Point de vigilance :** Le hash contrôle l’intégrité des données ; il ne remplace pas l’historique des personnes et manipulations.

**À expliquer sans regarder :** Citer les informations indispensables d’un transfert.

*Source : séance 1, pages PDF 28.*

#### Carte initiale des artefacts Windows et Linux

L’introduction fournit une première carte des emplacements, approfondie dans les séances 4 et 5.

- Windows : SAM et SYSTEM dans System32\config ; NTUSER.DAT dans le profil ; Prefetch dans C:\Windows\Prefetch ; EVTX dans System32\winevt\Logs.
- MFT à la racine NTFS ; USN sous $Extend\$UsnJrnl ; tâches sous C:\Windows\System32\Tasks ; SRUM sous System32\sru.
- Linux : /var/log/auth.log ou secure ; /etc/passwd et shadow ; ~/.bash_history ; ~/.ssh/authorized_keys ; /etc/cron* ; /etc/systemd/system/.
- La séance 1 décrit ShimCache comme un historique d’exécution, alors que la séance 4 dit explicitement « présence, pas exécution » : cette divergence est signalée dans les sources.

**Point de vigilance :** Pour une question sur la force probante d’un artefact Windows, identifier la formulation et la séance visées.

**À expliquer sans regarder :** Associer une question d’enquête à un premier emplacement.

*Source : séance 1, pages PDF 29, 30, 31.*

#### Hashing et super-timeline

Le hash sert au contrôle d’intégrité ; la timeline sert à reconstruire la chronologie.

- Le support distingue SHA-256 (référence du cours), MD5 et SHA-1 (dépréciés pour les collisions), et ssdeep/TLSH (fuzzy hashes pour comparer des variantes).
- sha256sum calcule une empreinte ; sha256sum -c vérifie un fichier de sommes.
- Plaso/log2timeline agrège les événements ; Timesketch permet l’analyse de timeline ; Autopsy dispose d’une vue intégrée.

**Point de vigilance :** Un fuzzy hash de similarité ne remplace pas un hash d’intégrité.

**À expliquer sans regarder :** Expliquer à quoi servent hashing, fuzzy hashing et timeline.

*Source : séance 1, pages PDF 32.*

### 5. Malware analysis

#### Analyse statique : triage sans exécution

L’analyse statique examine le fichier sans lancer le malware.

- PEStudio : en-têtes PE, imports, sections, entropie. CAPA : capacités du programme et correspondances ATT&CK.
- strings : chaînes lisibles ; FLOSS : chaînes désobfusquées. VirusTotal : réputation de hash, IP ou domaine et informations associées.
- Ordre du cours : hash → réputation → structure/imports/entropie → capacités CAPA → chaînes FLOSS → ressources → documentation des IOC.
- Objectif final : extraire des indicateurs actionnables et des signatures, pas nécessairement expliquer chaque instruction.

**Point de vigilance :** Analyse statique et analyse dynamique ne se distinguent pas par l’outil graphique, mais par l’exécution ou non du programme.

**À expliquer sans regarder :** Reconnaître le rôle de PEStudio, CAPA et FLOSS.

*Source : séance 1, pages PDF 34, 35.*

#### Structure PE et indices statiques

Le format Portable Executable organise le code, les données, les imports et les ressources d’un exécutable Windows.

- DOS Header : signature MZ et pointeur e_lfanew. PE Header : architecture, timestamp, flags. IAT : DLL et API importées.
- .text/.data : code et données ; .rsrc : ressources pouvant contenir des payloads. Certificat : signature Authenticode.
- L’entropie est présentée sur une échelle de 0 à 8 ; le support mentionne > 7,0 puis > 7,2 comme indices de packing/chiffrement probable.
- Imports cités : VirtualAllocEx/WriteProcessMemory (injection), InternetOpenUrl/WinHttpConnect (réseau/C2), CryptEncrypt/CryptGenKey (crypto).

**Point de vigilance :** Entropie, imports et signature sont des indices à interpréter ; le support donne lui-même deux seuils d’entropie.

**À expliquer sans regarder :** Relier section, contenu et indice recherché.

*Source : séance 1, pages PDF 36.*

#### Obfuscation, packing et unpacking

L’analyse avancée vise à retrouver un code examinable derrière le packing ou l’obfuscation.

- Packing : entropie et noms de sections. Chaînes XOR/Base64/chiffrées : recherche de motifs, FLOSS et autres outils cités.
- DIE/Detect-It-Easy identifie le packer ; IDA/Ghidra analysent le code ; x64dbg observe au débogueur ; Scylla aide au dump et à la reconstruction de l’IAT.
- Workflow présenté : détecter le packer → localiser l’OEP → point d’arrêt sur VirtualAlloc → dump du PE → reconstruire l’IAT.

**Point de vigilance :** Retenir le rôle des étapes et des outils ; aucun exercice de rédaction de procédure d’évasion n’est demandé ici.

**À expliquer sans regarder :** Associer OEP, IAT, unpacking et outils d’analyse.

*Source : séance 1, pages PDF 37.*

#### Lire une règle YARA

YARA détecte et classe des fichiers ou échantillons à partir de motifs.

- meta : informations descriptives comme auteur et description. strings : motifs texte, hexadécimaux ou expressions régulières.
- condition : logique qui décide du déclenchement ; « 2 of them » exprime un nombre de motifs devant être satisfaits.
- Le support montre des chaînes wide/ascii et un motif hexadécimal avec ??, puis une condition combinée.
- Les usages cités sont hunting, classification et partage de signatures entre équipes.

**Point de vigilance :** Il s’agit de comprendre les blocs et la logique affichée, pas d’écrire une règle ni de supposer que l’exemple est directement exécutable.

**À expliquer sans regarder :** Identifier meta, strings et condition dans un extrait.

*Source : séance 1, pages PDF 38.*

#### Analyse dynamique et monitoring

L’analyse dynamique observe un programme exécuté dans un environnement isolé.

- Sandboxes citées : Any.Run, Cuckoo, Joe Sandbox, Hybrid Analysis.
- Process Monitor observe les activités système ; Process Hacker montre processus, DLL et handles ; Regshot compare le registre avant/après.
- FakeNet-NG simule des services réseau comme DNS/HTTP pour observer les communications.
- Comportements recherchés : persistance, C2, beaconing, DGA, chaîne winword → cmd → powershell, traces d’injection.

**Point de vigilance :** Ne pas confondre « rien observé dans la sandbox » et « absence de comportement malveillant ».

**À expliquer sans regarder :** Associer un comportement à l’outil d’observation adapté.

*Source : séance 1, pages PDF 39.*

#### Reconnaître évasion et injection

Le support décrit les obstacles à l’observation et les familles d’injection, au niveau de leur reconnaissance.

- Évasion : détection de VM, de debugger, délais/timing checks, attente d’activité humaine, reconnaissance de l’environnement.
- Classic DLL Injection : combinaison VirtualAllocEx, WriteProcessMemory, CreateRemoteThread ; le cours propose de surveiller ce dernier appel.
- Process Hollowing : processus suspendu et remplacement de son contenu ; comparer le PE mémoire au PE disque.
- Reflective Injection : chargeur en mémoire ; rechercher via analyse mémoire et malfind.

**Point de vigilance :** Une sandbox silencieuse peut être évitée par le malware ; compléter les sources d’analyse.

**À expliquer sans regarder :** Associer famille d’injection et type de détection cité.

*Source : séance 1, pages PDF 40.*

#### Reverse engineering et similarité de code

Le reverse engineering étudie la logique du binaire : protocoles, configuration, chiffrement et évasion.

- Progression du support : triage → unpacking → imports → point d’entrée et flux → chaînes → protocole C2 → configuration → signature YARA.
- IDA/Ghidra : désassemblage/décompilation ; x64dbg : débogage ; Binary Ninja : représentation intermédiaire ; Radare2/Cutter : framework RE ; WinDbg : noyau et drivers.
- BinDiff compare des binaires ; ssdeep compare leur similarité ; YARA recherche des motifs partagés.

**Point de vigilance :** Similarité de code, comportement et contexte se recoupent : ce ne sont pas des preuves d’identité interchangeables.

**À expliquer sans regarder :** Expliquer la différence entre triage rapide et analyse de logique interne.

*Source : séance 1, pages PDF 41.*

### 6. Aspects juridiques

#### Cadre légal et éthique : à apprendre selon le cours

Le support exige une autorisation adaptée au contexte et une investigation limitée, confidentielle et traçable.

- Exemples d’autorisation du cours : direction/RH/juriste en entreprise ; réquisition en procédure pénale ; ordonnance pour cloud/ISP ; accord ou mandat pour BYOD.
- La page 43 mentionne RGPD art. 33 et 72 h, minimisation, DPO, chiffrement des données personnelles et durée de rétention. Il s’agit de la formulation pédagogique du support, pas d’un conseil juridique actualisé.
- CERT/CSIRT coordonnent la réponse ; FIRST est présenté comme forum international ; MISP/OpenCTI servent au partage/croisement d’IOC.
- Éthique : neutralité, confidentialité, transparence, compétence, objectivité. Admissibilité : authenticité, intégrité, fiabilité, légalité, reproductibilité.

**Point de vigilance :** Ne pas transformer les raccourcis juridiques du cours en règles universelles applicables à toute situation.

**À expliquer sans regarder :** Relier autorisation, intégrité, traçabilité et reproductibilité.

*Source : séance 1, pages PDF 43, 44.*

### 7. Études de cas & CTI

#### Quatre études de cas du support

Les cas servent à distinguer vecteur initial, propagation, nature de l’impact et leçon défensive.

- WannaCry (2017) : EternalBlue/SMBv1, propagation de type ver, domaine killswitch ; importance des correctifs et de la segmentation.
- SolarWinds (2020) : Orion/SUNBURST, mise à jour compromise et signée ; risque supply chain et intérêt du hunting.
- NotPetya (2017) : M.E.Doc compromis, destruction présentée comme un ransomware, MBR réécrit ; distinction wiper/ransomware.
- Colonial Pipeline (2021) : identifiants VPN compromis sans MFA selon le support ; ransomware et impact opérationnel.

**Point de vigilance :** Les chiffres, attributions et mappings sont ceux des diapositives. Les exercices portent surtout sur les distinctions techniques qu’elles enseignent.

**À expliquer sans regarder :** Comparer les quatre cas par vecteur et nature de l’impact.

*Source : séance 1, pages PDF 46, 47, 48.*

#### IOC, CTI et Pyramid of Pain

Tous les indicateurs n’ont pas la même stabilité ni le même coût de remplacement pour l’attaquant.

- IOC réseau : IP, domaines, URL, JA3. Fichier : hash, nom, taille. Hôte : clés de registre, mutex, services. Comportement : TTP et séquences.
- VirusTotal : réputation. MISP : partage d’IOC. OpenCTI : corrélation de campagnes/acteurs. ATT&CK : référentiel commun de TTP.
- Ordre simplifié du cours, du moins au plus coûteux à changer : hash → IP/domaines → artefacts hôte/réseau → outils → TTP.

**Point de vigilance :** Bloquer un hash et détecter une TTP ne couvrent pas le même niveau de comportement.

**À expliquer sans regarder :** Expliquer pourquoi les TTP sont au sommet de la pyramide.

*Source : séance 1, pages PDF 49.*

## Séance 2 — Acquisition & préservation

Collecter ce qui compte, sans perdre ni altérer la preuve.

### 1. Fondamentaux de l’acquisition

#### Copie logique et image bit-à-bit

Une copie logique prend des fichiers sélectionnés ; l’image bit-à-bit vise les secteurs du support.

- Copier-coller, robocopy et xcopy sont cités comme copies de fichiers visibles. FTK Imager, dd et dc3dd comme outils d’imagerie.
- L’image physique permet d’inclure l’espace non alloué, le slack, les fichiers et partitions cachés dans le périmètre acquis.
- Le support oppose fortement les deux méthodes pour l’objectif d’imagerie complète. Sa séance sur KAPE présente aussi une collecte ciblée complémentaire.

**Point de vigilance :** La formulation « copie logique non recevable » appartient au support ; ne pas la transformer en conclusion juridique universelle.

**À expliquer sans regarder :** Expliquer ce qu’une copie de fichiers risque d’omettre.

*Source : séance 2, pages PDF 4, 5.*

#### Alloué, non alloué, slack, HPA/DCO

Le disque contient davantage que les fichiers visibles.

- Espace alloué : associé aux fichiers actifs. Non alloué : marqué libre et susceptible de contenir des données supprimées non écrasées.
- Slack : espace résiduel à la fin d’une unité d’allocation ; le cours distingue file slack et RAM slack.
- HPA : Host Protected Area. DCO : Device Configuration Overlay. Le support les présente comme des zones cachées pouvant intéresser l’enquête.

**Point de vigilance :** Ne pas confondre un espace libre au niveau logique avec des octets nécessairement effacés.

**À expliquer sans regarder :** Associer chaque zone à sa définition et à son intérêt forensique.

*Source : séance 2, pages PDF 5.*

#### HDD, SSD et TRIM

Le support oppose la conservation des données supprimées sur HDD au risque de perte rapide sur SSD avec TRIM.

- HDD : plateaux magnétiques et tête de lecture/écriture ; les données supprimées peuvent rester tant qu’elles ne sont pas réécrites.
- SSD : mémoire NAND, contrôleur et cache ; le cours décrit TRIM comme réduisant fortement la possibilité de récupération après suppression.
- Conséquence pédagogique : ne pas fonder l’enquête uniquement sur la récupération future de fichiers supprimés ; préserver rapidement les sources disponibles.

**Point de vigilance :** Les expressions « quelques secondes/minutes » et « perdu définitivement » sont les simplifications du support ; aucun délai garanti n’est inféré ici.

**À expliquer sans regarder :** Expliquer pourquoi une stratégie de récupération HDD ne se transpose pas simplement au SSD.

*Source : séance 2, pages PDF 6.*

#### Les quatre principes d’acquisition

Le support présente quatre règles sous les références ACPO/NIST.

- Ne pas altérer les données originales.
- Si un accès à l’original est nécessaire, disposer de la compétence et justifier les actions.
- Conserver un enregistrement vérifiable par un tiers.
- Le responsable garantit le respect du cadre légal et des principes.

**Point de vigilance :** Une opération nécessaire en live laisse des traces : le cours demande de les limiter et de les expliquer, pas de les dissimuler.

**À expliquer sans regarder :** Reconnaître le principe concerné par une erreur de manipulation.

*Source : séance 2, pages PDF 7.*

### 2. Live vs dead acquisition

#### Live vs dead : le compromis

Dead favorise un support figé ; live conserve les informations du système encore actif.

- Dead : système éteint, disque retiré ou démarrage sur environnement forensique, write blocker ; volatil perdu.
- Live : RAM, réseau, processus et disque d’un système allumé ; les outils modifient légèrement son état.
- Dead convient au contexte d’un support pouvant être arrêté. Live répond au besoin de volatil, au chiffrement actif ou à la continuité de production.

**Point de vigilance :** Live et dead ne sont pas deux formats de fichiers image.

**À expliquer sans regarder :** Comparer le gain et la limite de chaque approche.

*Source : séance 2, pages PDF 9.*

#### Choisir la stratégie et l’ordre du chapitre 2

L’arbre de décision du cours interroge le chiffrement, le besoin de volatil et la possibilité d’arrêt.

- Chiffrement actif, malware fileless, connexions C2, serveur critique ou stockage complexe orientent vers le live dans le support.
- Page 11 : RAM → état réseau (connexions, ARP, DNS) → processus → disque → extinction et dead imaging si possible.
- L’enjeu est de ne pas perdre clés, processus ou sessions avant de les capturer.

**Point de vigilance :** La séance 5 inverse réseau et processus dans son exemple Linux : préciser la référence pour une question d’ordre exact.

**À expliquer sans regarder :** Justifier live/dead à partir d’un cas, puis citer l’ordre de la page 11.

*Source : séance 2, pages PDF 10, 11.*

### 3. Contexte d’incident

#### Évaluer la situation à l’arrivée

Six questions orientent les premières décisions selon le support.

- Le malware est-il actif ? Le poste est-il isolé ? Le chiffrement est-il en cours ou terminé ?
- Le serveur peut-il être arrêté ? Le disque est-il protégé par un chiffrement tel que BitLocker ?
- Les réponses déterminent les sources urgentes, le confinement et les contraintes de continuité.
- La documentation de l’état initial accompagne cette évaluation.

**Point de vigilance :** Ces questions servent à décider, pas à lancer immédiatement une analyse exhaustive du disque.

**À expliquer sans regarder :** Identifier la donnée menacée par une extinction précipitée.

*Source : séance 2, pages PDF 13.*

#### Scénario du cours : ransomware + BitLocker

Le scénario met l’accent sur la perte des clés et de l’activité en mémoire lors d’une extinction.

- Séquence de la diapositive : capturer la RAM → chercher la clé dans le dump → capturer le réseau → imager le disque.
- La RAM peut contenir les processus actifs et les éléments permettant d’exploiter ensuite l’image chiffrée.
- Le cours met en garde contre l’extinction réflexe et l’attente sans décision.

**Point de vigilance :** Cette fiche restitue le scénario pédagogique ; elle n’est pas un protocole universel de gestion d’un ransomware actif.

**À expliquer sans regarder :** Expliquer pourquoi le cours donne la priorité au dump mémoire dans ce cas.

*Source : séance 2, pages PDF 14.*

#### Isolement et gestion de la scène

Le confinement vise à interrompre propagation et exfiltration tout en documentant l’état du système.

- Options citées : isolement logique du port/VLAN ou containment EDR ; noter l’heure exacte.
- Photographier écran, connexions, périphériques ; relever ce qui est allumé, éteint ou connecté ; identifier les supports.
- Le cours décrit un risque de réaction du malware à la perte réseau : l’isolement doit donc être réfléchi et documenté.
- À la saisie : lieu, UTC, identité du collecteur, témoins, état, numéros de série, Evidence ID et scellé.

**Point de vigilance :** Un isolement réseau n’est pas une extinction électrique.

**À expliquer sans regarder :** Reconnaître les informations à consigner avant de déplacer le matériel.

*Source : séance 2, pages PDF 15, 16.*

#### Scellés et transport des preuves

Chaque pièce doit être identifiable et toute ouverture ultérieure doit être traçable.

- Evidence ID unique, étiquette datée, collecteur et description.
- Sachet antistatique pour les supports et scellé tamper-evident : une ouverture doit être visible.
- Le sachet de Faraday est présenté pour isoler un appareil mobile des signaux réseau, notamment face à un effacement distant.
- Toute ouverture et tout transfert doivent figurer au registre des preuves.

**Point de vigilance :** Le sachet de Faraday traite l’exposition radio ; l’antistatique traite un autre risque.

**À expliquer sans regarder :** Associer protection physique, radio et traçabilité au bon dispositif.

*Source : séance 2, pages PDF 16.*

### 4. Write blockers

#### Write blocker matériel et logiciel

La protection en écriture empêche les modifications du support pendant sa lecture.

- Matériel : boîtier entre disque et station, indépendant de l’OS ; Tableau, WiebeTech et CRU sont cités.
- Logiciel : WriteProtect sous Windows ; mount -o ro,noload ou blockdev --setro sous Linux.
- Le cours alerte sur les écritures automatiques de l’OS : indexation, horodatages, répertoires système.
- Flux : disque suspect → write blocker → station → image et empreintes.

**Point de vigilance :** La séance 2 cite noload, alors que les exemples simplifiés des séances 3/5 ne le montrent pas toujours. Reconnaître les options sans transformer les exemples en recette de lab.

**À expliquer sans regarder :** Expliquer à quel moment le write blocker intervient et ce qu’il bloque.

*Source : séance 2, pages PDF 18.*

### 5. Formats d’images

#### RAW, E01/EWF et AFF4

Le format détermine le conteneur, les métadonnées et les fonctions de stockage de l’image.

- RAW/dd : données brutes, forte compatibilité, pas de compression ni de métadonnées intégrées selon le tableau ; hash séparé.
- E01/EWF : compression, métadonnées de cas/examinateur/date, hash intégré, segmentation .E01/.E02.
- AFF4 : format ouvert présenté pour gros volumes, acquisitions non linéaires/partielles et cloud, avec compression et métadonnées.
- Le cours retient E01 comme choix par défaut dans sa synthèse.

**Point de vigilance :** Une image compressée peut représenter une acquisition complète ; compression et sélection logique sont deux notions différentes.

**À expliquer sans regarder :** Comparer formats par compression, métadonnées, hash et usage.

*Source : séance 2, pages PDF 20.*

### 6. Acquisition mémoire

#### Acquérir la RAM : outils et précautions

La RAM peut révéler ce qui ne figure pas sur le disque.

- Sources recherchées : processus actifs/cachés, connexions C2, credentials, clés de chiffrement et code injecté.
- Windows : WinPmem, DumpIt, FTK Imager Capture Memory. Linux : LiME (module noyau), AVML.
- VM : le support cite .sav/dumpvmcore pour VirtualBox et .vmem pour VMware au snapshot/suspend.
- L’outil occupe lui-même de la RAM : réduire l’empreinte et écrire le dump sur un support externe.

**Point de vigilance :** Volatility 3 est présenté dans le schéma d’ensemble comme outil d’analyse du dump, pas comme remplaçant systématique de l’outil de capture.

**À expliquer sans regarder :** Distinguer capture RAM, fichier de dump et analyse mémoire.

*Source : séance 2, pages PDF 22.*

#### Lire les commandes de collecte live

Il faut reconnaître l’information capturée, sans rédiger la commande.

- netstat -anob : connexions actives et processus ; arp -a : cache ARP ; ipconfig /displaydns : cache DNS.
- ss -tunap sous Linux : connexions, ports et PID. tasklist /v : processus et utilisateur Windows ; ps aux : processus Linux et arguments.
- Process Hacker : processus, DLL, handles. pslist : détail des processus.
- La redirection > vers un support externe conserve la sortie ; elle ne transforme pas le relevé en image disque.

**Point de vigilance :** Écrire les résultats sur la source analysée ajoute des modifications à cette source.

**À expliquer sans regarder :** Associer chaque commande à la catégorie de données collectée.

*Source : séance 2, pages PDF 23.*

### 7. Acquisition disque

#### FTK Imager : logique d’une acquisition

Le support montre la création d’une image à partir d’un Physical Drive.

- Choisir le disque source, le format E01, les métadonnées, puis une destination sur un support séparé.
- Physical Drive vise le disque entier ; ne pas confondre disque source et destination.
- Le message « destination cannot be on the disk being imaged » est une protection.
- Le support décrit un calcul et une vérification d’empreintes après acquisition.

**Point de vigilance :** Le but de l’exercice est de reconnaître source, sortie, vérification et erreur de destination.

**À expliquer sans regarder :** Expliquer pourquoi une image ne doit pas être écrite sur son disque source.

*Source : séance 2, pages PDF 25.*

#### dd, dc3dd et dcfldd : lire les paramètres

Ces outils produisent une copie brute ; les variantes forensiques ajoutent des fonctions de suivi.

- if= désigne l’entrée ; of= la sortie ; bs= la taille des blocs dans l’exemple dd.
- conv=noerror,sync apparaît dans le cours pour poursuivre malgré les erreurs et conserver la structure de la copie.
- dc3dd ajoute hash=sha256 et log=acquisition.log ; dcfldd montre hashlog=hash.txt.
- L’intérêt mis en avant est le hash pendant la copie, la journalisation et le suivi des erreurs.

**Point de vigilance :** Inverser if et of est une confusion critique de source et destination. Ces exemples sont à interpréter, pas à exécuter depuis le site.

**À expliquer sans regarder :** Identifier entrée, sortie, empreinte et journal dans une commande affichée.

*Source : séance 2, pages PDF 26.*

#### Guymager et disques de machines virtuelles

Guymager est l’outil graphique Linux d’acquisition présenté dans le support.

- Formats cités : RAW, E01 et AFF ; hashing intégré et parallélisation.
- Une VM éteinte fournit un disque virtuel figé, à copier et vérifier. VirtualBox : .vdi ; VMware : .vmdk.
- VBoxManage clonemedium ... --format RAW convertit une copie de disque VirtualBox en RAW ; qemu-img convert est cité pour VMware.
- Le résultat RAW est exploitable par FTK Imager, Autopsy et TSK.

**Point de vigilance :** Une conversion de conteneur n’est pas un simple renommage d’extension.

**À expliquer sans regarder :** Reconnaître VDI, VMDK, RAW et les outils de conversion cités.

*Source : séance 2, pages PDF 27.*

### 8. Hashing & intégrité

#### Triple vérification des empreintes

Le modèle du cours compare les empreintes avant, pendant et après acquisition.

- Avant : référence de la source. Pendant : hash calculé à la volée. Après : hash des données de l’image.
- Le cours attend la concordance des trois dans le scénario d’une acquisition stable et comparable.
- sha256sum : calcul d’une empreinte ; hashdeep : traitement récursif d’une arborescence ; MD5 est conservé comme complément legacy dans le support.
- Conserver résultats, algorithme, sources et contexte de calcul.

**Point de vigilance :** Ne pas supposer que des objets différents, comme un conteneur compressé et un disque brut, ont des octets identiques ; le cours vise la vérification de l’acquisition.

**À expliquer sans regarder :** Identifier la fonction de chaque moment de vérification.

*Source : séance 2, pages PDF 29.*

#### Divergence de hash : quoi conclure ?

Une divergence doit être diagnostiquée et documentée, jamais cachée.

- Causes citées : secteurs défectueux, lectures instables, source modifiée, câble/transfert défectueux, destination corrompue.
- Conduite : noter précisément, réacquérir si possible, consigner une image partielle et ses limitations si nécessaire.
- Le support privilégie la transparence et la justification plutôt qu’une fausse déclaration d’intégrité.

**Point de vigilance :** Un hash différent n’identifie pas à lui seul la cause du problème.

**À expliquer sans regarder :** Donner des causes possibles et la conduite attendue.

*Source : séance 2, pages PDF 30.*

### 9. Chain of Custody

#### Remplir le registre de preuves

Le formulaire relie chaque acquisition à un identifiant, une source, une méthode et un stockage.

- Exemple du support : Evidence ID, type/capacité, machine source, collecteur, UTC, empreintes source et image, méthode et lieu de stockage.
- Chaque transfert ajoute qui, quand, pourquoi et vers qui, avec signatures.
- Toute ouverture du scellé produit une nouvelle ligne ; conserver une description permettant d’identifier la pièce sans ambiguïté.

**Point de vigilance :** La description du matériel ne suffit pas : il faut aussi la chaîne des actions humaines.

**À expliquer sans regarder :** Repérer les champs manquants dans une fiche de saisie.

*Source : séance 2, pages PDF 32.*

### 10. Triage KAPE

#### Triage KAPE et chaîne collecte → analyse

KAPE collecte rapidement des artefacts connus ; ce n’est pas une image complète du disque.

- Targets : quoi collecter. Modules : quoi traiter/parser après collecte. !SANS_Triage est la cible citée. gkape est l’interface graphique, kape.exe la CLI.
- Triage : plus rapide et léger, adapté au parc et à l’urgence, moins exhaustif. Image complète : plus lourde, couvre le disque.
- Dans le schéma page 34 : FTK Imager capture la RAM ; KAPE fait le triage ; Autopsy/Volatility 3 analysent Windows/RAM ; SIFT regroupe Autopsy, TSK et Plaso pour Linux.
- Les TP détaillés seront traités séparément ; ici on retient le rôle de chaque étape et les livrables attendus.

**Point de vigilance :** Un module de parsing et une cible de collecte ne sont pas interchangeables.

**À expliquer sans regarder :** Distinguer collecter, parser, imager et analyser.

*Source : séance 2, pages PDF 34, 35, 37, 38.*

## Séance 3 — Analyse des systèmes de fichiers

Comprendre où vivent les données et ce qui survit à leur suppression.

### 1. Fondamentaux & anatomie

#### Du disque au fichier

Un système de fichiers organise les données, leur allocation, leur nommage et leurs métadonnées.

- Chaîne du support : disque physique → MBR/GPT → partitions → système de fichiers → clusters/blocs → fichiers.
- Secteur : unité de base citée à 512 octets ou 4 Ko. Cluster/bloc : unité d’allocation regroupant des secteurs.
- Le FS gère allocation, hiérarchie, métadonnées, espace libre et éventuellement journalisation.

**Point de vigilance :** Une table de partitionnement n’est pas un système de fichiers.

**À expliquer sans regarder :** Remettre les couches dans l’ordre et définir secteur/cluster.

*Source : séance 3, pages PDF 4, 5.*

#### MBR vs GPT

Les deux schémas décrivent les partitions d’un disque.

- MBR : schéma historique BIOS, table au secteur 0, quatre partitions primaires et limite de 2 To dans le cours.
- GPT : schéma associé à UEFI, disques au-delà de 2 To, jusqu’à 128 partitions dans la comparaison et copie de la table en fin de disque.
- La copie GPT peut aider si la table principale est corrompue ; l’analyse peut révéler des partitions cachées.

**Point de vigilance :** Les valeurs sont celles de la comparaison pédagogique du support.

**À expliquer sans regarder :** Expliquer l’intérêt forensique de la copie de secours GPT.

*Source : séance 3, pages PDF 6.*

#### Panorama des systèmes de fichiers

Le chapitre approfondit NTFS, FAT/exFAT et EXT4.

- NTFS : Windows, MFT, ADS et métadonnées riches. FAT32 : supports amovibles et simplicité, pas de journalisation dans le tableau.
- exFAT : gros fichiers/supports amovibles ; EXT4 : Linux, inodes et journal.
- APFS et HFS+ sont seulement situés dans le monde macOS par le tableau du support ; ils ne sont pas développés dans les séances fournies.

**Point de vigilance :** Ne pas créer un chapitre macOS détaillé à partir d’une simple ligne de panorama.

**À expliquer sans regarder :** Associer environnement, structure et richesse d’artefacts.

*Source : séance 3, pages PDF 7.*

### 2. NTFS en profondeur

#### MFT : le catalogue NTFS

La Master File Table référence les fichiers et dossiers avec leurs métadonnées et la localisation des données.

- Le cours décrit des entrées de 1 024 octets, une signature FILE, des flags et une série d’attributs.
- Une entrée comporte un indicateur actif/supprimé et un numéro.
- Données résidentes : contenues dans l’entrée ; non résidentes : situées dans des clusters externes référencés.
- Un petit contenu résident supprimé peut subsister dans la MFT tant que l’entrée n’est pas réutilisée.

**Point de vigilance :** « Supprimé » dans la MFT ne signifie pas nécessairement contenu détruit.

**À expliquer sans regarder :** Distinguer résident/non-résident et expliquer l’intérêt de parser la MFT.

*Source : séance 3, pages PDF 9.*

#### Attributs MFT et MACB

Deux jeux de timestamps et plusieurs attributs sont à reconnaître.

- $STANDARD_INFORMATION ($SI) : timestamps, flags, propriétaire. $FILE_NAME ($FN) : nom et autre jeu de timestamps.
- $DATA : données résidentes ou références aux données externes. $ATTRIBUTE_LIST : liste des attributs répartis sur plusieurs entrées.
- MACB : M = modification du contenu ; A = accès ; C = modification de l’entrée MFT ; B = création.
- Le support distingue les conditions de modification de $SI et $FN pour analyser des incohérences.

**Point de vigilance :** C signifie Changed, pas Created : la création est B (Born) dans ce chapitre.

**À expliquer sans regarder :** Associer attribut, information et timestamp.

*Source : séance 3, pages PDF 10.*

#### Timestomping et recoupement

Le timestomping modifie des dates pour fausser la chronologie apparente d’un fichier.

- Le support recommande de comparer $SI et $FN ; des dates anciennes dans l’un et récentes dans l’autre sont un signal à examiner.
- Autres signaux : dates trop rondes, séquences illogiques, dates antérieures à l’OS, rafales de modifications.
- MFTECmd expose les jeux de dates ; logs, Prefetch et registre permettent de recouper.
- Une anomalie doit être documentée et replacée dans le contexte.

**Point de vigilance :** Le cours parle notamment de manipulation « probable » ; ne pas conclure uniquement sur une date isolée.

**À expliquer sans regarder :** Expliquer la comparaison $SI/$FN et les sources de corroboration.

*Source : séance 3, pages PDF 11, 28.*

#### ADS et Mark-of-the-Web

NTFS peut associer plusieurs flux de données à un même fichier.

- Le flux principal est visible ; les Alternate Data Streams ne sont pas montrés par une vue classique de l’Explorateur.
- Le support montre un flux nommé après « : », par exemple secret.txt:hidden.exe.
- dir /r, Streams, Get-Item -Stream * et Autopsy sont cités pour révéler les flux.
- Zone.Identifier est un ADS légitime associé au Mark-of-the-Web ; un ADS n’est donc pas systématiquement malveillant.

**Point de vigilance :** Reconnaître la présence d’un flux ne suffit pas à décider de son contenu ou de son intention.

**À expliquer sans regarder :** Identifier un ADS, l’outil de détection et le rôle de Zone.Identifier.

*Source : séance 3, pages PDF 12.*

#### Les cinq métafichiers NTFS

Chaque métafichier répond à une question différente.

- $MFT : quels fichiers existent ou ont existé et quelles métadonnées ?
- $LogFile : transactions récentes du FS. $UsnJrnl ($J) : historique des changements, créations, suppressions, renommages.
- $Bitmap : allocation des clusters, libres ou occupés. $Boot : paramètres du volume, dont taille de cluster.
- Pour récupérer, croiser les références de fichiers avec l’état des clusters et les journaux disponibles.

**Point de vigilance :** Le journal USN n’est pas le contenu intégral des fichiers ; $Bitmap n’est pas un catalogue de noms.

**À expliquer sans regarder :** Choisir le bon métafichier selon la question d’enquête.

*Source : séance 3, pages PDF 13.*

### 3. FAT32 / exFAT

#### FAT32 et exFAT

La structure FAT est plus simple et moins riche en métadonnées que NTFS dans le support.

- Boot sector, tables FAT d’allocation, zone de données et entrées de répertoire (nom, cluster de départ, taille).
- Suppression FAT : le premier caractère est marqué 0xE5 et les clusters sont libérés ; une récupération dépend de ce qui reste et des réécritures.
- Les timestamps sont présentés en heure locale pour FAT, contre UTC pour NTFS : attention à la corrélation.
- exFAT répond aux gros fichiers sur supports amovibles, au-delà de la limite de 4 Go évoquée pour FAT32.

**Point de vigilance :** Le cours simplifie la conservation des chaînes de clusters : ne pas promettre une récupération complète.

**À expliquer sans regarder :** Reconnaître 0xE5 et le piège du fuseau horaire.

*Source : séance 3, pages PDF 15.*

### 4. EXT4

#### EXT4 : superblock, groupes de blocs, inodes

L’inode contient les métadonnées et références du fichier, mais pas son nom.

- Superblock : métadonnées globales du FS, avec copies. Block groups : groupes de blocs. Table d’inodes : entrées de fichiers/dossiers. Journal : transactions.
- L’inode contient taille, permissions, propriétaire, timestamps, pointeurs vers les données et identifiant.
- Le nom se trouve dans le répertoire parent.
- atime : accès ; mtime : contenu modifié ; ctime : inode modifié ; crtime : création EXT4.

**Point de vigilance :** Sous Linux, ctime n’est pas la date de création.

**À expliquer sans regarder :** Localiser le nom, les métadonnées et les quatre dates.

*Source : séance 3, pages PDF 17.*

#### NTFS vs EXT4 après suppression

Les structures résiduelles n’offrent pas les mêmes possibilités de récupération.

- NTFS : entrée MFT et nom dans $FILE_NAME ; EXT4 : inode et nom dans le parent.
- NTFS : $LogFile/$UsnJrnl ; EXT4 : journal jbd2 dans le tableau.
- Le cours décrit une entrée MFT marquée libre, alors que les pointeurs de blocs EXT4 sont souvent effacés.
- Le journal peut aider à retrouver des références récentes ; le carving devient utile quand les métadonnées ne suffisent plus.

**Point de vigilance :** La disparition de pointeurs ne signifie pas que le carving conserve le nom et les dates.

**À expliquer sans regarder :** Expliquer pourquoi l’undelete peut être plus limité sous EXT4.

*Source : séance 3, pages PDF 18.*

### 5. Récupération

#### Récupération par métadonnées vs carving

Les deux approches sont complémentaires.

- Métadonnées : suivre les références MFT/inodes encore exploitables ; récupérer nom, dates et structure quand ils subsistent. Outils : fls/icat, Autopsy.
- Carving : chercher les signatures de contenu, indépendamment du FS ; exemples JPEG FF D8…FF D9 et PDF %PDF…%%EOF.
- Outils de carving : PhotoRec, Scalpel, foremost.
- Le carving reconstruit un contenu mais ne restitue pas, par lui-même, les métadonnées originales du système de fichiers.

**Point de vigilance :** Ne pas confondre signature de format et extension de nom de fichier.

**À expliquer sans regarder :** Choisir l’approche selon la présence des métadonnées.

*Source : séance 3, pages PDF 20.*

#### Slack et espace non alloué

Ces deux zones peuvent contenir des restes, mais elles ne désignent pas le même emplacement.

- Non alloué : clusters marqués libres ; terrain du carving.
- Slack : espace entre la fin logique du fichier et la fin de son dernier cluster.
- L’illustration montre 1,2 Ko de fichier dans un cluster de 4 Ko, soit 2,8 Ko restants dans son exemple.
- blkls extrait l’espace non alloué ; blkls -s est cité pour le slack.

**Point de vigilance :** Un slack appartient à la fin d’un cluster alloué, pas à un ensemble entier de clusters libres.

**À expliquer sans regarder :** Distinguer localisation, calcul illustratif et outil d’extraction.

*Source : séance 3, pages PDF 21.*

#### Fragmentation : la limite du carving simple

Un fichier peut être réparti dans des clusters qui ne se suivent pas.

- Fichier contigu : le parcours header → footer est plus simple.
- Fichier fragmenté : les morceaux sont dispersés ; un carving qui ne connaît pas l’ordre peut produire une sortie partielle ou corrompue.
- Les métadonnées, quand elles subsistent, sont précieuses parce qu’elles décrivent l’emplacement et l’ordre des données.

**Point de vigilance :** Supprimé ne signifie ni intégralement récupérable ni irrécupérable par principe.

**À expliquer sans regarder :** Justifier l’échec d’une récupération malgré la présence d’une signature.

*Source : séance 3, pages PDF 22.*

#### VSS : versions antérieures du volume

Les shadow copies sont des instantanés pouvant préserver un état historique.

- Le support cite fichiers modifiés, supprimés ou chiffrés depuis le snapshot, mais aussi MFT et ruches historiques.
- Outils mentionnés : Arsenal Image Mounter, FTK Imager, modules Autopsy/KAPE.
- vssadmin list shadows liste les copies. La commande de suppression montrée dans le support sert d’indicateur de destruction des possibilités de restauration.
- Comparer plusieurs états contribue à la chronologie.

**Point de vigilance :** Un snapshot représente un instant, pas une garantie que tous les événements intermédiaires ont été conservés.

**À expliquer sans regarder :** Identifier l’intérêt de VSS et le sens d’une commande affichée.

*Source : séance 3, pages PDF 23.*

#### SSD/TRIM : conséquence pour la récupération

Le support rappelle que les données supprimées sur SSD peuvent devenir indisponibles très rapidement.

- Il oppose le marquage libre sur HDD à la perte possible des blocs supprimés sur SSD avec TRIM.
- La fenêtre de récupération est décrite comme très courte, voire inexistante ; mémoire et autres traces conservées prennent de l’importance.
- Cette fiche reprend le modèle du cours sans promettre un résultat de récupération ni un délai exact.

**Point de vigilance :** Ne pas répondre « on récupère toujours avec PhotoRec » : fragmentation, écrasement et SSD limitent le résultat.

**À expliquer sans regarder :** Citer plusieurs raisons pour lesquelles un fichier supprimé peut ne pas être récupérable.

*Source : séance 3, pages PDF 24.*

### 6. Timeline

#### Super-timeline et normalisation UTC

Une super-timeline rassemble des sources horodatées différentes dans une chronologie unique.

- Sources : timestamps FS, Event Logs, registre, Prefetch, navigateur, journal USN.
- Plaso/log2timeline agrège ; Timesketch sert à l’analyse visuelle/collaborative ; fls -m produit les éléments d’une timeline de fichiers.
- Normaliser en UTC et tenir compte des fuseaux et de l’heure d’été avant de comparer.
- Questions : qui, quoi, quand et dans quel ordre ?

**Point de vigilance :** Des horodatages affichés dans des fuseaux différents peuvent créer une fausse contradiction.

**À expliquer sans regarder :** Distinguer timeline FS et super-timeline multi-sources.

*Source : séance 3, pages PDF 26.*

#### Lire une séquence d’attaque

Le scénario de la page 27 associe chaque étape à des traces.

- Téléchargement : création dans Downloads et historique navigateur. Exécution : Prefetch et EventID 4688.
- Persistance : clé Run ou tâche planifiée, EventID 4698. Communication C2 : connexion sortante à corréler.
- Chiffrement : nombreuses modifications proches dans le temps et création d’une note.
- L’objectif est de raconter une chronologie à partir des artefacts, pas de déduire toute l’attaque d’un seul fichier.

**Point de vigilance :** Un événement de création de fichier n’est pas automatiquement un événement d’exécution.

**À expliquer sans regarder :** Associer chaque étape de la chaîne à sa famille d’artefacts.

*Source : séance 3, pages PDF 27.*

### 7. Outils d’analyse

#### The Sleuth Kit : mmls → fls → istat → icat

TSK permet une exploration directe de l’image.

- mmls : partitions et secteur de début. fls : noms/fichiers, notamment supprimés selon les options.
- istat : métadonnées d’une entrée MFT/inode. icat : extraction du contenu de l’entrée choisie.
- blkls : espace non alloué. -o indique l’offset de partition dans les exemples TSK.
- Le workflow du support commence par le partitionnement pour choisir le bon point de départ de l’analyse.

**Point de vigilance :** Ne pas confondre un numéro d’inode avec un offset de partition.

**À expliquer sans regarder :** Interpréter le rôle de la commande affichée sans la rédiger.

*Source : séance 3, pages PDF 30.*

#### Autopsy, FTK et lecture seule

Les interfaces graphiques complètent les outils en ligne de commande.

- Autopsy : interface au-dessus de TSK, modules d’ingest, recherche, hashing, carving, timeline, récupération et rapports.
- FTK Imager : aperçu d’image, arborescence, export de fichiers, espace non alloué.
- Le support exige une ouverture/montage en lecture seule, avec contrôle d’intégrité.
- Les exemples mount sont pédagogiques ; la préparation et validation du montage seront reprises dans la partie labs.

**Point de vigilance :** Monter une image et parser directement l’image avec TSK sont deux façons différentes d’y accéder.

**À expliquer sans regarder :** Choisir entre acquisition, exploration, parsing et corrélation.

*Source : séance 3, pages PDF 31.*

## Séance 4 — Investigation Windows Forensics

Relier une activité à ses artefacts, à un compte et à une chronologie.

### 1. Le Registre Windows

#### Registre et LastWriteTime

Le registre est une base hiérarchique de configuration système, logiciel et utilisateur.

- Il peut renseigner nom/version/fuseau, périphériques, applications, comptes, réseau et persistance.
- Chaque clé possède un LastWriteTime : date de dernière écriture, stockée en UTC/FILETIME 64 bits selon le support.
- Registry Explorer et RegRipper exploitent cette information pour la chronologie.

**Point de vigilance :** Le LastWriteTime est celui d’une clé : ne pas l’attribuer sans contexte à toute action possible sur la machine.

**À expliquer sans regarder :** Définir ruche, clé et LastWriteTime.

*Source : séance 4, pages PDF 5.*

#### Les ruches système et utilisateur

Le registre est réparti dans plusieurs fichiers.

- SYSTEM : services, USB, fuseau, arrêt. SOFTWARE : logiciels, version OS et Run. SAM : comptes locaux, RID et logons. SECURITY : politiques et secrets LSA.
- Ces ruches système se trouvent dans %SystemRoot%\System32\config.
- NTUSER.DAT : C:\Users\<user>\, activité de l’utilisateur. UsrClass.dat : profil AppData\Local, notamment ShellBags dans la suite du chapitre.
- Le tableau de la page 6 associe aussi Jump Lists à UsrClass.dat, mais la page 21 les localise dans Recent\...Destinations : divergence conservée dans les notes.

**Point de vigilance :** Un nom de ruche système ne désigne pas une clé de registre unique.

**À expliquer sans regarder :** Associer la question posée à la bonne ruche et à son emplacement.

*Source : séance 4, pages PDF 6.*

#### Dirty hives et transaction logs

Une ruche peut ne pas contenir les modifications les plus récentes tant que ses journaux n’ont pas été rejoués.

- Collecter la ruche avec ses .LOG1/.LOG2, par exemple SYSTEM.LOG1.
- Les journaux servent de tampon avant intégration ; le support parle de ruche « dirty ».
- Registry Explorer détecte cet état et propose le replay/fusion.
- Oublier les logs peut faire manquer une clé récente ou conduire à une conclusion fausse.

**Point de vigilance :** L’absence dans une ruche non fusionnée ne démontre pas l’absence dans l’état réel capturé.

**À expliquer sans regarder :** Expliquer pourquoi on collecte les .LOG en même temps que la ruche.

*Source : séance 4, pages PDF 7.*

#### Identifier la machine et son fuseau

Le premier cadrage technique évite une chronologie décalée.

- SYSTEM\...\ComputerName : nom. SYSTEM\...\TimeZoneInformation : fuseau.
- SOFTWARE\Microsoft\Windows NT : version/build/date d’installation dans le tableau. SYSTEM\...\Windows\ShutdownTime : dernier arrêt.
- SYSTEM\...\Tcpip\Interfaces : IP/DHCP/passerelle ; SOFTWARE\...\NetworkList : réseaux connus.
- Les « ... » sont des chemins abrégés du support, pas des chemins complets à copier.

**Point de vigilance :** Vérifier le fuseau avant de convertir et de corréler les heures.

**À expliquer sans regarder :** Reconnaître la ruche et le nom de clé correspondant à chaque information.

*Source : séance 4, pages PDF 8.*

#### SAM : comptes et compteurs

SAM renseigne les comptes locaux et leur activité de connexion décrite par le cours.

- RID 500 : administrateur intégré. RID ≥ 1000 : comptes créés localement dans la présentation.
- Dernier logon, compteur de logons, dernier échec, groupes et état actif/désactivé.
- Un compte récent peu utilisé ou des échecs nombreux méritent un recoupement avec 4624/4625.
- ProfileList dans SOFTWARE lie SID et profil/nom.

**Point de vigilance :** Un compte suspect est une piste à vérifier, pas une conclusion obtenue par son seul compteur.

**À expliquer sans regarder :** Distinguer RID, SID, SAM et ProfileList.

*Source : séance 4, pages PDF 9.*

#### Outils du registre

Les outils interactifs et automatisés se complètent.

- Registry Explorer : exploration graphique, LastWrite, décodage, bookmarks, recherche/export et replay des logs.
- RegRipper : plugins spécialisés et extraction scriptable ; l’exemple samparse extrait les comptes SAM.
- RECmd : CLI ; Regshot : comparaison avant/après ; reg query : interrogation native live ; KAPE : collecte.
- Le choix dépend de l’étape : acquérir, explorer, extraire ou comparer.

**Point de vigilance :** Un outil de collecte n’est pas automatiquement l’outil d’interprétation final.

**À expliquer sans regarder :** Interpréter rip.exe -r ... -p samparse et distinguer les outils.

*Source : séance 4, pages PDF 10.*

### 2. Preuves d’exécution

#### Présence ≠ exécution

Le chapitre demande de qualifier précisément ce que démontre chaque artefact.

- Prefetch : exécution et dates ; UserAssist : exécution interactive via GUI.
- ShimCache : présence/rencontre du fichier, pas preuve d’exécution seule selon cette séance. Amcache : présence + SHA1 dans le tableau de synthèse.
- BAM/DAM : exécution récente liée au SID ; SRUM : consommation réseau par application.
- Corréler plusieurs sources pour répondre séparément à quoi, quand, qui et origine.

**Point de vigilance :** L’introduction et la diapositive Amcache emploient des formulations plus larges : les examens indiquent la synthèse S4 quand cette nuance est évaluée.

**À expliquer sans regarder :** Dire ce que l’on peut et ne peut pas conclure à partir d’un artefact isolé.

*Source : séance 4, pages PDF 12, 18.*

#### Prefetch : quoi, combien et quand

Les fichiers .pf sont présentés comme une trace de lancement de programme.

- Emplacement : C:\Windows\Prefetch. Nom de type NOTEPAD.EXE-XXXXXXXX.pf.
- Le suffixe est un hash du chemin d’exécution, pas l’empreinte du contenu du binaire.
- Contenu du cours : compteur, jusqu’à huit dernières dates (Win8+), fichiers/DLL chargés et volumes.
- PECmd parse vers CSV ; le support mentionne une rétention et une possible désactivation, donc une absence doit être contextualisée.

**Point de vigilance :** Ne pas prendre le hash du nom Prefetch pour le SHA1 Amcache.

**À expliquer sans regarder :** Associer Prefetch, PECmd, run count et timestamps.

*Source : séance 4, pages PDF 13.*

#### ShimCache/AppCompatCache

Le cache de compatibilité décrit des exécutables rencontrés par Windows.

- Emplacement : ruche SYSTEM, ControlSet dans le support.
- Informations : chemin, taille, dernière modification ; séquence d’entrées et références pouvant survivre à la suppression.
- Le cours décrit un stockage mémoire puis un flush à l’arrêt.
- AppCompatCacheParser est l’outil associé ; une entrée seule ne prouve pas l’exécution selon cette séance.

**Point de vigilance :** La séance 1 le nomme historique d’exécution : divergence explicitement signalée, pas effacée.

**À expliquer sans regarder :** Répondre à une question de présence sans surinterpréter l’exécution.

*Source : séance 4, pages PDF 14.*

#### Amcache et pivot SHA1

Amcache.hve conserve des informations de programmes et un SHA1 utile au renseignement sur la menace.

- Emplacement : ...\AppCompat\Programs\. Informations : chemin, taille, éditeur et empreinte SHA1 selon le cours.
- AmcacheParser produit un CSV. Le hash permet un pivot vers réputation, familles et IOC de campagne, même si le binaire n’est plus disponible.
- Attention : la page 15 parle de première exécution, mais le tableau page 18 retient « présence + SHA1 » ; les questions de force probante précisent cette synthèse.

**Point de vigilance :** Un SHA1 stocké pour identifier un binaire et SHA-256 pour contrôler une acquisition remplissent ici des usages différents.

**À expliquer sans regarder :** Identifier la valeur du SHA1 sans l’assimiler à une preuve autonome d’exécution.

*Source : séance 4, pages PDF 15, 18.*

#### UserAssist : lancement par interface graphique

UserAssist se trouve dans NTUSER.DAT et concerne l’activité interactive via l’interface.

- Le support cite programmes lancés, compteur, dernier lancement et temps de focus.
- Les noms sont encodés en ROT13 ; Registry Explorer les décode.
- Les lancements via menu Démarrer, bureau ou Explorateur sont visés ; pas les lancements en ligne de commande selon la diapositive.
- L’artefact relie l’activité au profil utilisateur ; le raisonnement reste multi-sources.

**Point de vigilance :** ROT13 est un encodage à reconnaître, pas une protection cryptographique à casser.

**À expliquer sans regarder :** Distinguer lancement GUI et lancement CLI.

*Source : séance 4, pages PDF 16.*

#### BAM/DAM et SRUM

Ces sources décrivent des aspects différents de l’activité des applications.

- BAM/DAM : dernière exécution par SID, ruche SYSTEM, fenêtre courte de quelques jours selon le cours.
- SRUM : System Resource Usage Monitor ; base SRUDB.dat, pas une ruche de registre.
- Le support indique 30–60 jours et les octets entrants/sortants par application, ainsi que l’activité/énergie.
- SrumECmd est associé au parsing dans le tableau de synthèse.

**Point de vigilance :** Une quantité d’octets par application est une source de corrélation, pas le contenu des données transmises.

**À expliquer sans regarder :** Choisir BAM/DAM pour l’utilisateur récent et SRUM pour l’activité réseau applicative.

*Source : séance 4, pages PDF 17.*

### 3. Activité utilisateur

#### Fichiers LNK : cible, volume et ouverture

Les raccourcis peuvent conserver des informations sur une cible même disparue.

- Contenu : chemin cible, timestamps de la cible au moment de la création/observation décrite, taille, volume serial number (VSN), type de lecteur, machine.
- Emplacements cités : ...\Recent\ et bureau. Outil : LECmd.
- Le VSN aide à relier un fichier ouvert à un volume USB ou autre support.
- La cible peut avoir été déplacée ou supprimée alors que le raccourci reste.

**Point de vigilance :** Le numéro de série du volume n’est pas à confondre avec le numéro de série physique USBSTOR.

**À expliquer sans regarder :** Identifier ce que le LNK conserve et à quoi sert son VSN.

*Source : séance 4, pages PDF 20.*

#### Jump Lists : historique par application

Les Jump Lists recensent des éléments récents et épinglés associés à une application.

- AutomaticDestinations : générés par l’OS. CustomDestinations : gérés par l’application selon le support.
- AppID identifie l’application ; les fichiers contiennent des structures LNK internes.
- Emplacement de cette page : ...\Recent\...Destinations\ ; parser : JLECmd.
- Elles peuvent subsister après la disparition des fichiers visés.

**Point de vigilance :** La page détaillée situe les Jump Lists dans des fichiers dédiés, malgré la formulation du tableau des ruches page 6.

**À expliquer sans regarder :** Distinguer LNK isolé, Jump List et AppID.

*Source : séance 4, pages PDF 21.*

#### ShellBags, MRU et recherches

Différentes traces répondent à « quel dossier », « quel fichier » ou « quelle recherche ».

- ShellBags : préférences/navigation de dossiers, y compris USB/réseau ou dossiers supprimés ; UsrClass.dat ; SBECmd.
- RecentDocs : fichiers récents. TypedPaths : chemins saisis dans l’Explorateur. WordWheelQuery : recherches Windows.
- RunMRU : commandes saisies dans Exécuter. OpenSavePidlMRU : boîtes ouvrir/enregistrer. Ces MRU sont rattachées à NTUSER.DAT dans le cours.

**Point de vigilance :** Dossier parcouru, fichier ouvert et texte recherché ne sont pas le même fait.

**À expliquer sans regarder :** Choisir l’artefact selon la formulation précise de la question.

*Source : séance 4, pages PDF 22.*

#### Corbeille : $I, $R et SID

La corbeille rassemble contenu et métadonnées de suppression par utilisateur.

- Emplacement : C:\$Recycle.Bin\<SID>\.
- $I : nom/chemin d’origine, taille et date de suppression. $R : contenu réel.
- Le dossier SID rattache l’ensemble à un compte. RBCmd sert au parsing.
- Vider la corbeille n’est pas synonyme, dans le modèle HDD du cours, d’écrasement immédiat de toutes les données.

**Point de vigilance :** Ne pas inverser $I (information) et $R (contenu).

**À expliquer sans regarder :** Retrouver où lire la date, le contenu et le compte associé.

*Source : séance 4, pages PDF 23.*

#### Navigateurs et chaîne du téléchargement

Le navigateur aide à dater l’origine d’un fichier.

- Historique : URL et dates ; téléchargements : fichier, source et moment.
- Stockage cité : SQLite, History ou places.sqlite ; profils Chrome/Edge dans ...\User Data\Default\.
- Hindsight et DB Browser for SQLite sont les outils mentionnés.
- Chaîne : téléchargement navigateur → création MFT dans Downloads → Zone.Identifier → Prefetch d’exécution.

**Point de vigilance :** Téléchargement et exécution sont deux étapes différentes, étayées par des sources différentes.

**À expliquer sans regarder :** Reconstituer l’origine et le lancement sans les confondre.

*Source : séance 4, pages PDF 24.*

### 4. USB, Event Logs & persistance

#### USB : identité, lettre, VSN et fichier

La corrélation USB rapproche plusieurs identifiants et événements.

- USBSTOR dans SYSTEM\...\Enum : marque, modèle, numéro de série du périphérique. MountedDevices : correspondance lettre/périphérique.
- Windows Portable Devices : nom convivial/lettre. setupapi.dev.log dans C:\Windows\INF : installation/première connexion telle que présentée.
- EMDMgmt dans SOFTWARE : VSN du volume ; LNK : accès à une cible liée à ce VSN.
- Chaîne du cours : identité → connexion → lettre → VSN → fichier ouvert depuis le support.

**Point de vigilance :** La dernière étape décrit un accès/ouverture ; conserver cette précision lorsque le cours emploie plus largement le terme exfiltration.

**À expliquer sans regarder :** Choisir l’artefact qui relie la clé physique au volume et au fichier.

*Source : séance 4, pages PDF 26, 27.*

#### Event IDs incontournables

Les identifiants orientent immédiatement la recherche dans les journaux.

- Security : 4624 connexion réussie ; 4625 échec ; 4672 privilèges spéciaux ; 4688 création de processus ; 4720 création de compte ; 1102 effacement du journal de sécurité.
- System : 7045 installation d’un service. PowerShell : 4104 bloc de script selon le cours.
- La persistance par tâche planifiée est associée à 4698 dans la page 30.
- EvtxECmd est le parser des EVTX présenté dans la chaîne Zimmerman.

**Point de vigilance :** 4624 indique un succès ; le Logon Type explique comment. Ne pas confondre Event ID et type de connexion.

**À expliquer sans regarder :** Associer ID, journal et signification sans devoir les générer.

*Source : séance 4, pages PDF 28.*

#### Logon Types : comment la session est ouverte

Le champ Logon Type précise le mode d’accès dans un événement de connexion.

- 2 Interactive : clavier/session locale. 3 Network : accès réseau, par exemple SMB.
- 4 Batch : tâche planifiée. 5 Service : service. 7 Unlock : déverrouillage.
- 10 RemoteInteractive : bureau à distance/RDP. 11 CachedInteractive : identifiants en cache.
- Les types 3 et 10 sont particulièrement intéressants pour les accès distants dans le cours.

**Point de vigilance :** Le type 3 n’est pas le type RDP : RDP correspond à 10 dans le tableau.

**À expliquer sans regarder :** Interpréter un 4624 avec son Logon Type.

*Source : séance 4, pages PDF 29.*

#### Persistance Windows : où vérifier ?

La persistance cherche un relancement au démarrage ou à la connexion.

- Run/RunOnce : SOFTWARE ou NTUSER.DAT pour la portée utilisateur.
- Services : ruche SYSTEM, chemins des exécutables et événement 7045. Tâches : System32\Tasks et 4698.
- Autres points du cours : Startup, Winlogon Shell/Userinit, souscriptions WMI (survol).
- Autoruns propose une vue unifiée ; corréler chaque entrée avec les traces du programme.

**Point de vigilance :** Trouver une entrée de démarrage ne prouve pas à elle seule que son exécutable a tourné.

**À expliquer sans regarder :** Associer mécanisme, emplacement et événement éventuel.

*Source : séance 4, pages PDF 30.*

#### Anti-forensics Windows : traces du nettoyage

Le nettoyage peut laisser des incohérences et des événements propres.

- Effacement Security : 1102. Timestomping : comparaison $SI/$FN.
- Prefetch vidé/désactivé, MRU absents en bloc, traces d’outils de nettoyage.
- USN supprimé/tronqué : rupture de séquence.
- Le cours insiste sur l’absence anormale d’artefacts ; la qualifier exige de la relier au contexte et aux autres sources.

**Point de vigilance :** Ne pas transformer « absence anormale » en « toute absence prouve une attaque ».

**À expliquer sans regarder :** Reconnaître les indices de nettoyage et choisir les sources de recoupement.

*Source : séance 4, pages PDF 31.*

### 5. Méthodologie & corrélation

#### Workflow Windows : collecter, parser, normaliser, corréler

La chaîne du cours industrialise l’extraction des artefacts.

- KAPE : collecte ciblée, par exemple !SANS_Triage.
- Parsing : PECmd, LECmd, JLECmd, AmcacheParser, EvtxECmd et autres modules.
- Normaliser les sorties horodatées en UTC ; organiser les CSV.
- Timeline Explorer : tri, filtres et tags pour corréler les résultats.

**Point de vigilance :** Accumuler des CSV n’est pas encore une conclusion : il faut relier les événements.

**À expliquer sans regarder :** Distinguer cible KAPE, parser et outil de corrélation.

*Source : séance 4, pages PDF 33.*

#### Construire une conclusion Windows

L’exemple evil.exe montre comment plusieurs sources répondent à plusieurs morceaux de la question.

- Edge : provenance et téléchargement. MFT/Zone.Identifier : fichier créé et origine Internet. Prefetch : lancement.
- Amcache : empreinte du binaire pour le renseignement ; UserAssist : activité GUI liée au profil.
- La cheat sheet propose de partir de la question d’investigation, puis de choisir artefact, emplacement et outil.
- Le tableau de l’exemple indique 09:16:41 pour Prefetch et 09:17:10 pour UserAssist : conserver les heures distinctes au lieu de les fusionner artificiellement.

**Point de vigilance :** Le titre « trois artefacts » de la page 34 accompagne cinq lignes de sources : compter les éléments réellement présentés.

**À expliquer sans regarder :** Rédiger mentalement une conclusion en distinguant origine, exécution et attribution au profil.

*Source : séance 4, pages PDF 34, 35, 36.*

## Séance 5 — Investigation Linux Forensics

Savoir où chercher parmi les fichiers, journaux et traces du système vivant.

### 1. Fondamentaux Linux

#### Linux : une carte de fichiers plutôt qu’un registre

Le changement principal est la dispersion des configurations et des traces.

- Configuration dans /etc ; journaux texte ou journald ; informations du système vivant dans /proc.
- Permissions POSIX utilisateur/groupe/autres et rwx ; noms sensibles à la casse ; UID 0 pour root.
- L’historique shell et les logs deviennent des sources centrales.
- Il faut savoir où chercher avant de choisir la commande de lecture.

**Point de vigilance :** « Tout est fichier » ne veut pas dire que tout est du texte : journald, wtmp et btmp sont présentés comme binaires.

**À expliquer sans regarder :** Comparer les sources centrales Windows et Linux.

*Source : séance 5, pages PDF 5.*

#### FHS : les répertoires à connaître

Chaque répertoire concentre des catégories de sources.

- /etc : configuration, comptes, sudoers, cron, SSH. /var/log : journaux, authentification et connexions.
- /home/<user> : données, historiques et configuration du profil ; /root : home de l’administrateur.
- /tmp et /var/tmp : temporaires et payloads potentiels.
- /proc : processus, fichiers ouverts et réseau du système vivant, pas une archive persistante sur disque.

**Point de vigilance :** Le chemin /root n’est pas la racine / du système de fichiers.

**À expliquer sans regarder :** Répondre rapidement à « où chercher ? » selon la question.

*Source : séance 5, pages PDF 6.*

#### Comptes, groupes et privilèges

Les fichiers d’identité permettent de comprendre qui existe et qui détient des droits.

- /etc/passwd : comptes, UID, GID, shell, home. /etc/shadow : hashes de mots de passe. /etc/group : groupes et membres.
- UID 0 : root ; seuils <1000/≥1000 présentés pour comptes système/humains.
- Autre compte UID 0, shell interactif inattendu ou modification récente : signaux à recouper.
- Les membres sudo/wheel sont liés aux possibilités d’élévation présentées dans le chapitre.

**Point de vigilance :** Les seuils et signaux sont ceux du support ; un indicateur doit être replacé dans la configuration étudiée.

**À expliquer sans regarder :** Associer passwd, shadow et group à leur contenu.

*Source : séance 5, pages PDF 7.*

#### EXT4 : lire les quatre timestamps

L’inode porte les dates utiles à la chronologie Linux.

- atime : lecture ; mtime : contenu ; ctime : modification de l’inode ; crtime : création.
- stat affiche les métadonnées/dates ; debugfs examine l’inode ; istat fait une lecture TSK de l’image.
- find -mtime sélectionne des fichiers selon leur modification.
- Le cours utilise les incohérences ctime/mtime dans l’analyse anti-forensics.

**Point de vigilance :** ctime ne signifie pas création ; l’écart entre dates est une piste, à croiser avec d’autres sources.

**À expliquer sans regarder :** Associer le besoin de lecture à stat, debugfs ou istat.

*Source : séance 5, pages PDF 8.*

#### sudo : configuration et traces

L’usage de privilèges se lit dans les règles d’autorisation et les journaux.

- /etc/sudoers : règles principales ; /etc/sudoers.d/ : règles additionnelles.
- NOPASSWD indique une exécution autorisée sans saisie de mot de passe dans la règle concernée.
- Le support recherche les entrées sudo dans auth.log ; COMMAND= indique la commande lancée.
- Échecs, règles trop larges et changements récents orientent l’investigation.

**Point de vigilance :** Une règle d’autorisation et la trace d’un usage réel de sudo répondent à deux questions différentes.

**À expliquer sans regarder :** Identifier où lire « qui peut » et où lire « qui a fait ».

*Source : séance 5, pages PDF 9.*

#### Accès forensique en lecture seule

Le cours demande de protéger l’image et de contrôler son intégrité.

- ro : lecture seule ; loop : accès à un fichier comme périphérique ; noexec : empêche l’exécution depuis le montage dans l’exemple.
- TSK analyse directement l’image ; Autopsy donne une interface ; ewfmount intervient pour E01.
- Hash avant/après et copie de travail accompagnent l’accès.
- La séance 2 cite aussi noload : les exemples ne sont pas uniformes et les labs devront valider le montage exact.

**Point de vigilance :** Ne pas confondre montage lecture seule et vérification de hash : l’un prévient, l’autre contrôle.

**À expliquer sans regarder :** Expliquer les options affichées sans composer une commande de montage.

*Source : séance 5, pages PDF 10.*

### 2. Activité utilisateur

#### Historique shell : valeur et limites

L’historique renseigne les commandes enregistrées d’un utilisateur, mais peut être incomplet.

- ~/.bash_history pour Bash ; ~/.zsh_history pour Zsh ; vérifier aussi /root.
- Le cours indique l’absence de dates Bash par défaut et l’écriture à la fermeture de session ; HISTTIMEFORMAT est cité pour les dates.
- Téléchargements, exécutions et ordre des commandes peuvent être utiles.
- Historique désactivé ou redirigé vers /dev/null : piste de nettoyage à comparer aux autres traces.

**Point de vigilance :** Historique vide ne signifie pas automatiquement absence d’activité ; commande enregistrée ne prouve pas à elle seule que son action a réussi.

**À expliquer sans regarder :** Expliquer pourquoi bash_history n’est pas un journal exhaustif horodaté.

*Source : séance 5, pages PDF 12.*

#### ~/.ssh et fichiers cachés

Les fichiers SSH distinguent les accès autorisés et les hôtes connus.

- authorized_keys : clés publiques autorisées à se connecter au compte. known_hosts : serveurs SSH déjà connus/contactés dans le cours.
- id_rsa : clé privée de l’utilisateur.
- ~/.bashrc et ~/.profile : initialisation du shell, point de persistance possible. ~/.config et ~/.local : état/configuration applicative.
- Une clé ajoutée ou un hôte inattendu doit être rapproché des connexions et du contexte utilisateur.

**Point de vigilance :** authorized_keys est une liste d’autorisation, pas la liste des clés privées ; known_hosts ne doit pas être confondu avec les accès entrants autorisés.

**À expliquer sans regarder :** Distinguer rôle, sens de connexion et intérêt de chaque fichier.

*Source : séance 5, pages PDF 13.*

#### wtmp, btmp, lastlog et sessions

Ces sources binaires se lisent avec leurs outils dédiés.

- /var/log/wtmp : connexions réussies, lecture via last. /var/log/btmp : échecs, lecture via lastb.
- /var/log/lastlog : dernière connexion par utilisateur ; commande lastlog.
- who et w montrent les utilisateurs actuellement connectés.
- last -i -f /var/log/wtmp affiche les informations de la source choisie avec IP selon l’exemple.

**Point de vigilance :** Ces journaux ne se traitent pas comme un fichier texte auth.log avec un simple cat.

**À expliquer sans regarder :** Associer fichier, commande et type de connexion.

*Source : séance 5, pages PDF 14.*

#### Cron et tâches planifiées

Cron déclenche des actions périodiques ; une entrée anormale peut assurer une relance persistante.

- /etc/crontab : tâches globales ; /etc/cron.d/ : fragments ; /etc/cron.daily et .hourly : scripts ; /var/spool/cron/ : tâches utilisateur.
- crontab -l liste les tâches du compte concerné. Les timers systemd sont une autre source à vérifier.
- Signaux du cours : script dans /tmp, commande obfusquée, fréquence inhabituelle, modification récente.
- Corréler la configuration aux journaux d’exécution cron.

**Point de vigilance :** Une ligne configurée ne prouve pas à elle seule toutes les exécutions attendues.

**À expliquer sans regarder :** Localiser les tâches système/utilisateur et reconnaître une commande de listing.

*Source : séance 5, pages PDF 15.*

#### Corbeille XDG et montages

L’environnement de bureau et les montages donnent des traces de suppression et de supports.

- ~/.local/share/Trash/files/ : contenus ; info/ : chemins d’origine et dates de suppression.
- C’est le parallèle pédagogique de $R et $I Windows. RecentlyUsed.xbel est cité pour les fichiers récents.
- /etc/fstab : montages configurés ; /proc/mounts : montages actifs. /media et /mnt : points de montage.
- syslog, dmesg et journald peuvent aider à dater les branchements USB.

**Point de vigilance :** fstab décrit une configuration ; /proc/mounts décrit l’état vivant.

**À expliquer sans regarder :** Associer information de suppression et information de montage au bon endroit.

*Source : séance 5, pages PDF 16.*

### 3. Logs système & journald

#### Syslog vs journald

Deux modes de journalisation sont présentés et doivent être examinés.

- Syslog traditionnel : texte dans /var/log, lisible via cat/grep/awk/less, fichiers par catégorie et rotation .1/.2.gz.
- journald : binaire structuré ; utiliser journalctl. Métadonnées : unité, PID, UID, boot.
- Journal volatile sous /run ou persistant sous /var/log/journal selon le support.
- Le cours cite FSS (Forward Secure Sealing) comme mécanisme de détection d’altération.

**Point de vigilance :** Un journal en mode volatile peut manquer à l’image disque après l’arrêt ; ne pas chercher uniquement des .log texte.

**À expliquer sans regarder :** Comparer format, emplacement, interrogation et persistance.

*Source : séance 5, pages PDF 18.*

#### Quel log répond à quelle question ?

Les noms dépendent notamment de la famille de distribution.

- auth.log (Debian/Ubuntu) / secure (RHEL) : login, sudo, SSH.
- syslog / messages : activité générale ; kern.log/dmesg : noyau, périphériques et anomalies.
- cron/cron.log : tâches ; faillog : échecs d’authentification ; apache2/nginx : service web.
- Identifier la distribution avant de chercher un nom de journal précis.

**Point de vigilance :** L’absence d’auth.log ne justifie pas d’ignorer secure ou journald.

**À expliquer sans regarder :** Choisir le journal selon authentification, système, noyau ou web.

*Source : séance 5, pages PDF 19.*

#### Lire les filtres journalctl

Les filtres permettent de réduire le journal aux événements pertinents.

- -u : unité/service ; --since et --until : intervalle temporel ; -p : priorité ; -b : démarrage.
- _UID= et _PID= ciblent utilisateur et processus.
- L’exemple journalctl -u ssh --since yesterday -p warning combine service, date et priorité ; il ne teste pas directement à lui seul le texte « Failed password ».
- Le support cite --vacuum-time et suppression de fichiers comme pistes d’anti-forensics, ainsi que des trous de séquence.

**Point de vigilance :** Un filtre de priorité et un filtre sur le résultat d’authentification sont deux critères différents.

**À expliquer sans regarder :** Décrire ce que sélectionne chaque option affichée.

*Source : séance 5, pages PDF 20.*

#### Lire les traces SSH

Les messages d’authentification distinguent essais, succès et méthode d’accès.

- Failed password : échec ; Accepted password : succès par mot de passe ; Accepted publickey : clé acceptée.
- Invalid user : nom de compte inexistant essayé ; session opened/closed : ouverture/fermeture.
- sudo ... COMMAND renseigne une action privilégiée.
- Le scénario du cours corrèle une rafale d’échecs puis un succès avec btmp/wtmp et l’activité du compte.

**Point de vigilance :** Un succès après des échecs est une hypothèse de brute-force à contextualiser ; une clé acceptée n’est pas malveillante par nature.

**À expliquer sans regarder :** Interpréter un extrait de logs et proposer les artefacts à croiser.

*Source : séance 5, pages PDF 21.*

#### auditd : audit fin et outils

auditd fournit une source détaillée lorsque la collecte et les règles sont actives.

- Le cours cite execve, accès fichiers et changements de comptes comme événements recherchés.
- Règles : /etc/audit/rules.d/ ; journal : /var/log/audit/audit.log.
- ausearch : recherche ciblée ; ausearch -k : clé de règle ; aureport : synthèse.
- ausearch -m execve -i cible les événements execve enregistrés ; vérifier d’abord l’existence et l’activité de l’audit.

**Point de vigilance :** On ne peut pas supposer que des événements non enregistrés apparaîtront rétroactivement.

**À expliquer sans regarder :** Associer emplacement, règle, recherche et rapport.

*Source : séance 5, pages PDF 22.*

#### Logs web et autres services

Une application exposée peut constituer le point d’entrée.

- access.log : requêtes HTTP ; error.log : erreurs et traces associées.
- Le support examine URL inattendues, .php suspect, User-Agent anormal et réponses à corréler.
- Chaîne proposée : requête web → fichier déposé dans le webroot (mtime) → commandes observées dans auditd/historique.
- Les logs de bases, FTP, mail et applications complètent ; leur analyse approfondie relève d’une séance 8 non fournie.

**Point de vigilance :** Les supports 1–5 ne constituent pas un cours complet de Network Forensics ou d’analyse malware de séance 8.

**À expliquer sans regarder :** Identifier la première source à consulter pour une entrée web.

*Source : séance 5, pages PDF 23.*

### 4. Investigation d’intrusion

#### Panorama de la persistance Linux

Il faut examiner plusieurs points de relance plutôt qu’un seul.

- cron : /etc/cron* et /var/spool/cron. systemd : fichiers .service/.timer, avec /etc/systemd/system/ cité dans l’introduction.
- Shell RC : ~/.bashrc, ~/.profile, /etc/profile ; rc.local : /etc/rc.local.
- ld.so.preload : /etc/ld.so.preload, chargement/injection de bibliothèque dans la présentation.
- Modules noyau/LKM et rootkits sont seulement survolés dans ce chapitre.

**Point de vigilance :** Ne pas limiter la recherche de persistance à cron ou oublier les timers.

**À expliquer sans regarder :** Associer mécanisme, fichier et moment de relance.

*Source : séance 5, pages PDF 25.*

#### /proc : observer le système vivant

/proc est un système de fichiers virtuel exposant les processus et leur état en mémoire.

- /proc/<PID>/exe : lien vers l’exécutable ; cmdline : ligne de commande ; cwd : répertoire courant ; fd/ : fichiers ouverts ; maps : cartographie mémoire.
- Un binaire supprimé mais encore exécuté peut rester accessible via /proc/<PID>/exe dans le cas présenté.
- Cette possibilité disparaît avec l’arrêt du processus/système ; elle ne se retrouve pas comme un dossier normal dans une image disque.
- ss, lsof et netstat complètent l’observation réseau et des fichiers ouverts.

**Point de vigilance :** Un chemin /proc présent en live n’est pas une donnée persistante à attendre après extinction.

**À expliquer sans regarder :** Choisir la sous-entrée /proc adaptée à la question.

*Source : séance 5, pages PDF 26.*

#### Contrôles de compromission

Le cours complète les logs par des vérifications de fichiers, droits et intégrité.

- SUID/SGID inattendus, fichiers récents dans /tmp ou /dev, noms cachés inhabituels et binaires modifiés.
- find / -perm -4000 -type f ... sélectionne les fichiers SUID dans l’exemple.
- debsums : vérification des paquets Debian ; rpm -V : paquets RHEL ; chkrootkit/rkhunter : recherche de rootkits.
- Comparer à une baseline propre et documenter les écarts.

**Point de vigilance :** L’outil signale des écarts à analyser ; un résultat de contrôle n’est pas à lui seul l’histoire complète de la compromission.

**À expliquer sans regarder :** Associer outil, distribution et type d’anomalie.

*Source : séance 5, pages PDF 27.*

#### Anti-forensics Linux

Les incohérences entre sources peuvent révéler un nettoyage.

- Logs vidés/tronqués : trous temporels ou taille inhabituelle. Historique désactivé ou redirigé : incohérence avec un compte actif.
- Timestomping : le cours oppose mtime/atime manipulables par touch au ctime géré par le noyau ; rechercher un décalage significatif.
- Effacement sécurisé et modifications en masse sont cités ; examiner ce qui subsiste dans les journaux et autres sources.
- Le parallèle Windows est la comparaison $SI/$FN.

**Point de vigilance :** Un ctime récent et un mtime ancien sont un signal à recouper, pas une explication unique.

**À expliquer sans regarder :** Identifier technique, indice et source complémentaire.

*Source : séance 5, pages PDF 28.*

#### Timeline Linux

La chronologie combine les dates du système de fichiers et celles des journaux.

- EXT4 : atime/mtime/ctime/crtime ; logs : auth, syslog, journald ; connexions : wtmp/btmp ; auditd : exécutions.
- L’historique shell ne fournit une chronologie datée que lorsque les données correspondantes sont disponibles.
- fls -m et mactime : timeline FS ; Plaso/log2timeline : agrégation ; Timesketch : exploration visuelle.
- Normaliser en UTC et utiliser les recoupements pour tester les incohérences.

**Point de vigilance :** Une timeline des seuls fichiers n’inclut pas automatiquement tous les événements SSH ou auditd.

**À expliquer sans regarder :** Choisir les sources nécessaires à une super-timeline Linux.

*Source : séance 5, pages PDF 29.*

### 5. Méthodologie & synthèse

#### Workflow Linux sur SIFT

Le support organise l’analyse en quatre verbes.

- Monter : lecture seule ou accès TSK direct. Trier : /etc, /var/log, /home, .ssh et cron.
- Parser : grep/awk, journalctl, ausearch, stat. Corréler : super-timeline UTC.
- SIFT est la station d’analyse qui regroupe TSK, Autopsy, Plaso et les utilitaires. ewfmount traite l’accès E01.
- Les commandes ne remplacent pas le choix de la source pertinente.

**Point de vigilance :** SIFT est l’environnement d’analyse, pas un format d’image ni un artefact de la victime.

**À expliquer sans regarder :** Restituer monter → trier → parser → corréler.

*Source : séance 5, pages PDF 31.*

#### Live response Linux : ordre du support

La page 32 fournit un ordre pratique propre à cette séance.

- 1. RAM : LiME/AVML. 2. Processus : ps aux, /proc, lsof. 3. Réseau : ss -tunap, netstat, lsof -i.
- 4. Sessions : who, w, last. 5. Disque : image dd/E01.
- La motivation : processus, connexions et binaires supprimés encore ouverts disparaissent à l’arrêt.
- Les séances 1/2 placent le réseau avant les processus ; les exercices précisent le tableau visé ou évaluent le principe commun volatil avant disque.

**Point de vigilance :** Ne pas apprendre deux ordres incompatibles comme une règle unique non contextualisée.

**À expliquer sans regarder :** Expliquer quelles sources sont perdues à l’extinction.

*Source : séance 5, pages PDF 32.*

#### Corréler une intrusion SSH

Le scénario enchaîne plusieurs sources plutôt que de faire reposer la conclusion sur un seul log.

- btmp/auth.log : échecs puis succès ; authorized_keys : clé ajoutée ; historique/auditd : téléchargement et exécution.
- cron : tâche ajoutée ; ss/journald : connexion sortante ; dates et fichiers : activité finale à corréler.
- La cheat sheet relie chaque question à une source et un outil.
- Comparaisons : registre ↔ /etc ; EVTX ↔ syslog/journald ; MFT ↔ inodes ; Run/services/tâches ↔ cron/systemd/RC.

**Point de vigilance :** Dans un exercice, distinguer les faits explicitement fournis des étapes seulement supposées, notamment l’exfiltration.

**À expliquer sans regarder :** Construire un récit en citant le rôle de chaque source.

*Source : séance 5, pages PDF 33, 34, 35.*

#### Lire la démo VMDK → RAW → image

La dernière page présente une chaîne de conversion et d’acquisition de VM.

- Le fichier descripteur VMDK et ses segments doivent être présents ; qemu-img convert -f vmdk -O raw produit une représentation RAW.
- dc3dd crée ensuite ubuntu_evidence.dd avec hash et journal.
- mmls donne le secteur de début. Dans l’exemple : 1 054 720 × 512 = 540 016 640 octets.
- Le paramètre offset du montage est en octets dans cette démo ; le -o TSK est un décalage en secteurs.

**Point de vigilance :** Le calcul ×512 repose sur la taille de secteur de cet exemple. Cette fiche interprète le support, sans demander de reconstruire la procédure de lab.

**À expliquer sans regarder :** Distinguer conversion, acquisition, secteur de début et offset en octets.

*Source : séance 5, pages PDF 36.*

## Notes de lecture : divergences des supports

### Quatre phases, cinq piliers, six étapes
S1 p.7 donne quatre phases NIST ; p.8 cinq piliers ; p.20 six étapes du processus pédagogique. Les questions indiquent le découpage évalué.
Sources : S1 p.7, S1 p.8, S1 p.20

### ShimCache : formulation introductive et chapitre spécialisé
S1 p.29 emploie « historique d’exécution ». S4 p.12, 14 et 18 distingue explicitement présence et exécution. Les questions consacrées à la force probante citent S4.
Sources : S1 p.29, S4 p.12, S4 p.14, S4 p.18

### Amcache : première exécution ou présence ?
S4 p.15 mentionne une première exécution ; p.18 le classe « présence + SHA1 ». Cette tension est conservée : pas de question ambiguë attribuant à Amcache seul une exécution certaine.
Sources : S4 p.15, S4 p.18

### Ordre réseau / processus
S1 p.27 et S2 p.11 placent réseau avant processus ; S5 p.32 inverse les deux et ajoute les sessions. Le principe partagé est de collecter le volatil avant le disque et avant extinction.
Sources : S1 p.27, S2 p.11, S5 p.32

### Jump Lists et UsrClass.dat
S4 p.6 rattache notamment les Jump Lists à UsrClass.dat. La page détaillée 21 les situe dans des fichiers Recent\...Destinations. Les questions de localisation renvoient à cette page détaillée.
Sources : S4 p.6, S4 p.21

### Montage : options différentes selon les pages
S2 p.18 cite ro,noload ; S3 p.31 montre ro,loop ; S5 p.10 ajoute noexec. Le site explique les options, sans transformer ces exemples simplifiés en procédure de lab validée.
Sources : S2 p.18, S3 p.31, S5 p.10

### Entropie : seuils pédagogiques distincts
S1 p.36 affiche >7,0 dans le tableau et >7,2 dans le texte pour un packing/chiffrement probable. Les exercices évaluent « entropie élevée = indice », pas un seuil universel.
Sources : S1 p.36

### Exemple evil.exe : heures à conserver
S4 p.34 affiche 09:16:41 pour Prefetch et 09:17:10 pour UserAssist, puis une conclusion simplifiée à 09:16. Le titre dit trois artefacts mais le tableau comporte cinq lignes. Les exercices ne fusionnent pas ces informations.
Sources : S4 p.34

### Chemins abrégés et noms variables
Les « ... » dans les clés Windows sont les abréviations du cours. Les noms auth.log/secure ou syslog/messages varient selon la distribution présentée. Les fiches ne prétendent pas fournir des chemins complets lorsqu’ils ne sont pas donnés.
Sources : S4 p.8, S5 p.19

### Portée : support de cours, pas audit technique ou juridique
Statistiques, versions ATT&CK, seuils, délais, jugements de recevabilité et prescriptions opérationnelles sont restitués comme éléments des PDF. Ils n’ont pas été remplacés par de la recherche externe. Les exercices sont créés pour réviser, pas fournis ou validés par l’enseignant.
Sources : S1 p.13, S1 p.15, S1 p.43, S2 p.4, S2 p.14, S3 p.24
