# TRACE — Audit de sécurité des systèmes d’information

Révision fondée sur les séances 1 à 7 et le mini-cas NeoCare fournis. Les pages citées sont celles des fichiers PDF. Les séances suivantes et les textes normatifs complets ne sont pas inclus.

## Séance 1 — Fondamentaux, périmètre et logique d’audit

Comprendre ce qu’un audit démontre, avec quels critères et quelles preuves.

### Ce qu’un audit doit démontrer

Un audit compare une situation observée à des critères établis sur un périmètre défini.

- La direction attend une assurance objective ; le RSSI veut repérer les écarts ; les métiers veulent protéger leurs activités.
- L’auditeur examine méthodiquement la situation, collecte des preuves vérifiables et évalue la portée des écarts.
- La formule du cours est : critères + preuves + jugement professionnel.

**Point de vigilance :** Une impression de sécurité ou une liste d’outils installés ne remplace pas la démonstration.

**Rappel actif :** Quels sont les trois éléments de la formule de l’audit ?

**Source :** Seance_1.pdf, p. 4, 5

### Les quatre finalités

Assurance, conformité, maîtrise et amélioration répondent à des besoins complémentaires.

- Assurance : vérifier que les contrôles prévus existent et fonctionnent.
- Conformité : vérifier le respect d’exigences définies.
- Maîtrise : identifier les faiblesses et les risques associés.
- Amélioration : prioriser les actions correctives et suivre leur réalisation.

**Point de vigilance :** Trouver une faiblesse n’est pas l’unique finalité : le suivi des actions fait aussi partie de la démarche.

**Rappel actif :** Associer chaque finalité à sa question centrale.

**Source :** Seance_1.pdf, p. 6

### Les quatre dimensions de l’audit

La sécurité s’examine sous les angles organisationnel, humain, physique et technique.

- Organisationnel : gouvernance, politiques, processus et responsabilités.
- Humain : habilitations, sensibilisation et séparation des rôles.
- Physique : locaux, accès, équipements et protection environnementale.
- Technique : réseaux, systèmes, applications, configurations et journaux.

**Point de vigilance :** Réduire l’audit aux serveurs fait oublier des dimensions explicitement présentes dans le cours.

**Rappel actif :** Classer une politique SSI, une formation, un contrôle d’accès aux locaux et une configuration réseau.

**Source :** Seance_1.pdf, p. 7

### Les périmètres possibles

Le périmètre peut couvrir des processus, des systèmes ou leurs interfaces, sans forcément couvrir tout le SI.

- Le cours cite gouvernance SSI, identités, comptes et privilèges, architecture réseau, segmentation, pare-feu, VPN et Wi-Fi.
- Il cite aussi serveurs, postes, applications Web, API, bases de données et services cloud.
- Journalisation, supervision, réponse aux incidents, sauvegardes, fournisseurs et sécurité physique font également partie des domaines possibles.

**Point de vigilance :** Une liste de domaines possibles n’est pas un engagement à tout auditer dans une mission donnée.

**Rappel actif :** Donner quatre périmètres techniques et deux périmètres non exclusivement techniques.

**Source :** Seance_1.pdf, p. 8

### Reconnaître le type d’audit

Le type d’audit dépend de l’objet examiné et de la question posée.

- Organisationnel : politiques, processus, responsabilités ; conformité : exigences normatives, internes ou contractuelles.
- Architecture : conception, flux, segmentation, exposition ; configuration : paramètres et durcissement.
- Technique : réseaux, systèmes, applications ; vulnérabilités : recherche et qualification des faiblesses.

**Point de vigilance :** Architecture et configuration sont proches mais ne portent pas sur le même niveau d’examen.

**Rappel actif :** Quel type privilégier pour vérifier les flux entre zones ? Et pour vérifier des paramètres de durcissement ?

**Source :** Seance_1.pdf, p. 9

### Audit interne et audit externe

Interne et externe décrivent le cadre de réalisation, pas un relâchement possible de la méthode.

- L’audit interne est réalisé pour le compte de l’organisation afin d’évaluer son dispositif et soutenir l’amélioration.
- L’audit externe est mené par une entité extérieure indépendante selon un mandat défini.
- Dans les deux cas, clarifier objectifs, périmètre, critères, responsabilités et confidentialité.
- Indépendance, impartialité et compétence conditionnent la crédibilité des conclusions.

**Point de vigilance :** Un audit interne doit lui aussi préserver l’objectivité et la crédibilité de ses conclusions.

**Rappel actif :** Quels éléments doivent être clarifiés dans les deux formes d’audit ?

**Source :** Seance_1.pdf, p. 10

### Audit, risques, scan et pentest

Ces démarches ne posent pas la même question et ne produisent pas le même résultat.

- Audit : les exigences et contrôles sont-ils respectés et efficaces ? Résultat : constatations et recommandations.
- Analyse de risques : quels scénarios menacent les actifs ? Résultat : risques et traitements.
- Scan : quelles faiblesses sont détectables ? Résultat : liste de vulnérabilités.
- Pentest : quelles faiblesses sont exploitables ? Résultat : preuves d’exploitation et impacts.

**Point de vigilance :** Un scan et un pentest ne sont pas des synonymes d’audit.

**Rappel actif :** Associer les quatre démarches à leur résultat attendu.

**Source :** Seance_1.pdf, p. 11

### La carte des référentiels du cours

Les référentiels couvrent différents besoins : méthode, exigences, mesures, tests et conformité sectorielle.

- ISO 19011 : méthodologie et principes d’audit ; ISO/IEC 27001 et 27002 : SMSI et mesures de sécurité.
- NIST SP 800-115 : tests et évaluations techniques ; CIS Controls et Benchmarks : contrôles opérationnels et durcissement.
- PCI DSS illustre la conformité sectorielle.
- Un référentiel fournit des critères mais ne remplace pas le jugement de l’auditeur.

**Point de vigilance :** Ne pas présenter tous les référentiels comme des outils de scan ou comme des exigences identiques.

**Rappel actif :** Expliquer le rôle d’ISO 19011, de CIS et de NIST SP 800-115.

**Source :** Seance_1.pdf, p. 12

### Les acteurs de la mission

Chaque acteur contribue à la mission sans avoir la même responsabilité.

- Le commanditaire exprime le besoin, fixe les objectifs et mandate la mission.
- Le responsable d’audit et l’équipe préparent, collectent, analysent et concluent ; l’audité est le processus, service, système ou organisme examiné.
- RSSI, DSI et administrateurs fournissent preuves, explications et accès autorisés.
- Les métiers expliquent enjeux, processus et impacts ; la direction arbitre les priorités et valide le traitement des écarts.

**Point de vigilance :** Le fournisseur de preuves n’est pas automatiquement celui qui décide de la conclusion d’audit.

**Rappel actif :** Distinguer commanditaire, auditeur, audité et direction.

**Source :** Seance_1.pdf, p. 13

### La posture de l’auditeur

Un audit crédible repose sur une posture professionnelle, pas sur la volonté de piéger l’audité.

- La séance 1 cite intégrité, objectivité, indépendance, confidentialité, compétence et preuves.
- L’auditeur cherche à comprendre et démontrer les faits.
- La crédibilité des conclusions dépend de la qualité de la posture autant que de la collecte.

**Point de vigilance :** La séance 2 détaillera sept principes d’ISO 19011 : ne pas confondre sa liste avec les six repères introductifs de cette page.

**Rappel actif :** Citer les six repères de posture de la séance 1.

**Source :** Seance_1.pdf, p. 14

### Critère → preuve → constat → risque → recommandation

La constatation est une comparaison traçable ; le risque explique son importance et la recommandation propose une action.

- Critère : ce qui doit être. Preuve : ce qui est observé.
- Constat : résultat de la comparaison entre critère et preuve.
- Risque : pourquoi la situation est importante. Recommandation : que faire.
- Sans critère, l’écart n’est pas démontrable ; sans preuve, la constatation n’est pas robuste.

**Point de vigilance :** Une recommandation ne remplace ni le critère ni la preuve manquante.

**Rappel actif :** Reconstituer la chaîne et expliquer chaque maillon.

**Source :** Seance_1.pdf, p. 15

### Collecter les preuves

Plusieurs techniques de collecte se complètent pour comprendre la situation réelle.

- Documents : politiques, procédures, contrats, rapports.
- Entretiens : responsables, administrateurs et utilisateurs ; observation : pratiques en situation.
- Technique : configurations, journaux, scans et captures.
- Échantillonnage : sélectionner des éléments représentatifs à examiner.

**Point de vigilance :** La preuve n’est pas obligatoirement une capture d’écran ni exclusivement technique.

**Rappel actif :** Choisir une technique pour une procédure écrite, une pratique réelle et un état de configuration.

**Source :** Seance_1.pdf, p. 16

### Exemple : comptes d’un collaborateur sortant

Le test relie une règle de révocation aux états techniques et permet de formuler un constat ciblé.

- Critère du cours : les accès des sortants doivent être révoqués selon la procédure.
- Test : sélectionner un échantillon de départs et vérifier AD et VPN.
- Dans l’exemple pédagogique, un ancien collaborateur possède encore un compte VPN actif ; le constat porte sur une révocation non systématique.
- Action proposée : corriger le compte et fiabiliser le workflow RH–IAM.

**Point de vigilance :** Cet exemple de cours n’est pas un résultat vérifié sur les systèmes réels de NeoCare.

**Rappel actif :** Identifier critère, test, preuve, constat et action dans l’exemple.

**Source :** Seance_1.pdf, p. 17

### Les outils assistent, ils ne concluent pas

Un résultat technique peut devenir une preuve après vérification, contextualisation et interprétation.

- Nessus et OpenVAS servent à détecter et qualifier des vulnérabilités.
- Wireshark sert à observer et analyser les communications réseau.
- Event Viewer, Syslog et SIEM servent à rechercher traces et événements.
- Les données d’un outil ne remplacent pas la méthode d’audit.

**Point de vigilance :** Un rapport de scan seul ne constitue pas un audit.

**Rappel actif :** Pourquoi un résultat automatique doit-il être contextualisé ?

**Source :** Seance_1.pdf, p. 18

### Les sept étapes de la mission

Le cycle va du cadrage au suivi et vise l’amélioration continue.

- Ordre du cours : cadrage, préparation, collecte, analyse, constats, rapport, suivi.
- La collecte alimente l’analyse ; les constats doivent être soutenus par les preuves.
- Le rapport n’est pas la fin : les actions correctives doivent être suivies et leur efficacité vérifiée.

**Point de vigilance :** Terminer le rapport sans suivi laisse la boucle d’amélioration incomplète.

**Rappel actif :** Réciter les sept étapes et expliquer pourquoi le suivi est nécessaire.

**Source :** Seance_1.pdf, p. 19

### Les sept questions avant de commencer

Un premier cadrage clarifie le besoin, les limites, les références et la faisabilité.

- Pourquoi l’audit est-il demandé et quel est son objectif exact ?
- Quel périmètre est inclus ou exclu ? Quels critères et référentiels seront utilisés ?
- Qui sont les interlocuteurs et responsables ? Quelles preuves et quels accès seront nécessaires ?
- Quelles contraintes de temps, confidentialité et disponibilité existent ?

**Point de vigilance :** Une demande vague de « vérifier la sécurité » ne suffit pas à cadrer les tests.

**Rappel actif :** Citer les sept questions de cadrage.

**Source :** Seance_1.pdf, p. 20

### Ce qu’une mission doit laisser

La mission doit produire un cadrage cohérent, des constatations priorisées et un plan d’amélioration suivi.

- La correction guidée NeoCare cite plan d’audit, constatations priorisées, rapport et plan d’actions.
- Les preuves proposées incluent politiques, procédures, comptes, habilitations, configurations, logs et scans.
- Il n’existe pas une seule bonne réponse de cadrage : elle doit être cohérente avec le besoin, les risques, le temps et les ressources.

**Point de vigilance :** La qualité d’une réponse ne se mesure pas au nombre de référentiels cités mais à sa cohérence.

**Rappel actif :** Quels livrables servent à préparer, communiquer puis suivre la mission ?

**Source :** Seance_1.pdf, p. 23, 24

## Séance 2 — Référentiels & méthodologies d’audit

Choisir la bonne référence sans confondre méthode, exigences et tests.

### Les trois couches complémentaires

Un audit défendable articule méthode d’audit, critères de sécurité et techniques de vérification.

- Méthode : comment conduire la mission ? Le cours associe ISO 19011 à cette couche.
- Critères : à quoi comparer la réalité ? Le cours cite ISO/IEC 27001–27002, CIS et PCI DSS.
- Vérification : comment obtenir des preuves ? NIST SP 800-115 et les outils techniques contribuent à cette couche.

**Point de vigilance :** Un guide de test ne suffit pas à définir toutes les exigences de sécurité applicables.

**Rappel actif :** Associer « comment conduire », « à quoi comparer » et « comment obtenir les preuves » à leurs couches.

**Source :** Seance_2.pdf, p. 3

### Un référentiel n’est pas universel

Un référentiel structure et justifie l’évaluation, mais doit être adapté au contexte.

- Il sert à fixer des critères, structurer la démarche et harmoniser les pratiques.
- Il aide à justifier les conclusions et à assurer leur traçabilité.
- Il peut être combiné avec d’autres références ; le jugement professionnel reste indispensable.

**Point de vigilance :** Ne pas recopier une checklist sans examiner l’objectif et le périmètre.

**Rappel actif :** Donner trois apports d’un référentiel et une limite.

**Source :** Seance_2.pdf, p. 4

### ISO 19011 : la méthode

ISO 19011 répond principalement à la question de la conduite correcte de l’audit.

- Il aide à structurer principes, programme d’audit, préparation et conduite d’une mission.
- Il traite aussi des compétences de l’équipe.
- Son rôle méthodologique est distinct du contenu technique des mesures de sécurité.

**Point de vigilance :** ISO 19011 n’est pas un catalogue de paramètres de configuration Windows ou Linux.

**Rappel actif :** Pour quelles activités d’une mission ISO 19011 est-il utile ?

**Source :** Seance_2.pdf, p. 5, 6

### Les sept principes d’ISO 19011 dans le cours

La séance détaille sept principes qui rendent l’audit méthodique et impartial.

- Intégrité ; présentation impartiale ; diligence professionnelle ; confidentialité.
- Indépendance ; approche fondée sur les preuves ; approche fondée sur les risques.
- L’audit est présenté comme une discipline de preuve, de méthode et d’impartialité.

**Point de vigilance :** L’approche par les risques ne dispense pas de recueillir des preuves.

**Rappel actif :** Citer les sept principes, sans les confondre avec la liste introductive de la séance 1.

**Source :** Seance_2.pdf, p. 7

### ISO/IEC 27001 : exigences du SMSI

La question est de savoir si le SMSI satisfait les exigences et fonctionne efficacement.

- Examiner contexte et périmètre, responsabilités et leadership, approche par les risques et objectifs de sécurité.
- Examiner fonctionnement, surveillance et amélioration continue.
- L’audit ne se limite pas à l’Annexe A.

**Point de vigilance :** Cocher une liste de contrôles techniques ne couvre pas tout le système de management.

**Rappel actif :** Citer quatre sujets à auditer au-delà des seuls contrôles de l’Annexe A.

**Source :** Seance_2.pdf, p. 8

### 27002, Annexe A et SoA

Ces trois éléments sont liés mais n’ont pas le même rôle.

- ISO/IEC 27002 : guide de mise en œuvre et bonnes pratiques concernant les mesures.
- Annexe A : référence des mesures de sécurité associées à ISO/IEC 27001.
- SoA : document précisant quelles mesures sont applicables, justifiées et mises en œuvre.
- La SoA relie risques, traitement et mesures de sécurité.

**Point de vigilance :** La SoA n’est ni un outil de scan ni une simple copie de toutes les mesures sans justification.

**Rappel actif :** Expliquer chaque élément et le lien assuré par la SoA.

**Source :** Seance_2.pdf, p. 9

### NIST SP 800-115 : vérifications techniques

Le guide complète les référentiels organisationnels par une démarche de tests techniques.

- Le support présente la séquence : planifier, découvrir, examiner, tester, analyser, rapporter.
- Le guide aide à structurer scans, analyses et validations techniques.
- Il relie les résultats techniques à une mission d’audit formelle.

**Point de vigilance :** Un test techniquement réussi reste à rattacher au critère et à l’objectif de la mission.

**Rappel actif :** Quel guide choisir pour structurer des vérifications techniques ?

**Source :** Seance_2.pdf, p. 10

### CIS Controls et CIS Benchmarks

Controls aide à prioriser les contrôles ; Benchmarks fournit des critères de durcissement concrets.

- CIS Controls : contrôles prioritaires, vision opérationnelle, priorisation des vérifications, maturité de base.
- CIS Benchmarks : recommandations de durcissement pour configurations Windows, Linux, cloud, etc.
- Dans l’audit de configuration, comparer paramètres attendus et paramètres observés.

**Point de vigilance :** Controls et Benchmarks ne désignent pas exactement le même niveau de détail.

**Rappel actif :** Quelle référence choisir pour examiner des paramètres de durcissement Linux ?

**Source :** Seance_2.pdf, p. 11

### PCI DSS : conformité sectorielle

Le cours présente PCI DSS pour un périmètre qui stocke, traite ou transmet des données de cartes de paiement.

- Il illustre un audit contraint par une référence sectorielle précise.
- Il permet de travailler périmètre, preuves attendues et conformité explicite.
- La conformité sectorielle ne remplace pas l’évaluation globale du risque.

**Point de vigilance :** Ne pas ajouter PCI DSS automatiquement à NeoCare : le cas mentionne des informations financières, pas explicitement un périmètre de données de cartes.

**Rappel actif :** Dans quel contexte du cours PCI DSS est-il pertinent ?

**Source :** Seance_2.pdf, p. 12

### Combiner sans empiler

La combinaison doit répondre aux besoins réels de la mission.

- ISO 19011 : méthode ; 27001 : exigences du SMSI.
- 27002 ou CIS : contrôles ; NIST SP 800-115 : tests techniques.
- PCI DSS n’est ajouté que si le périmètre le justifie.
- Le cours insiste : le bon audit utilise les bons référentiels, pas nécessairement tous.

**Point de vigilance :** Une longue liste de normes sans rôle expliqué n’est pas une justification.

**Rappel actif :** Proposer une combinaison pour une mission SMSI incluant des vérifications techniques.

**Source :** Seance_2.pdf, p. 13

### Choisir à partir de la question

La question d’audit oriente la référence principale.

- Conduire la mission : ISO 19011. Vérifier les exigences du SMSI : ISO/IEC 27001.
- Choisir les contrôles : ISO/IEC 27002 ou CIS Controls. Vérifier le durcissement : CIS Benchmarks.
- Choisir les tests techniques : NIST SP 800-115. Vérifier le périmètre cartes : PCI DSS.

**Point de vigilance :** « Comment tester ? » n’est pas la même question que « quelle exigence vérifier ? ».

**Rappel actif :** Associer les six questions d’audit à leur référence.

**Source :** Seance_2.pdf, p. 14

### Justifier son choix en une phrase

Les corrections du cours associent chaque choix à un objectif explicite.

- Audit interne du SMSI avant certification : 27001 + 19011, pour exigences et conduite.
- Durcissement Linux : CIS Benchmarks. Infrastructure exposée : NIST SP 800-115 + critères de sécurité.
- Environnement de paiement : PCI DSS + 19011. Préparation globale d’une mission : 19011.
- Un référentiel devient utile lorsqu’il produit des critères vérifiables.

**Point de vigilance :** Ces associations sont les réponses guidées du cours, pas une liste obligatoire pour toutes les missions.

**Rappel actif :** Justifier le couple 27001 + 19011 pour un audit interne du SMSI.

**Source :** Seance_2.pdf, p. 15, 16, 17

## Séance 3 — Planification d’une mission d’audit

Transformer un besoin en objectifs vérifiables et en plan réalisable.

### Planifier avant de tester

Le cadrage donne une légitimité, des limites et une organisation aux vérifications.

- Sans mandat : pas de légitimité. Sans périmètre : dérive ou interruption possible.
- Sans critères : conclusions difficiles à justifier. Sans plan de preuves : constats fragiles. Sans calendrier : perturbation des opérations.
- Huit décisions : commanditaire, objectifs, périmètre, critères, risques, méthodes, ressources et calendrier.

**Point de vigilance :** La disponibilité d’un outil ne constitue pas une autorisation de test.

**Rappel actif :** Citer les huit décisions de cadrage et l’intérêt de planifier avant de tester.

**Source :** Seance_3.pdf, p. 3, 4

### Le commanditaire et le mandat

La lettre de mission transforme la demande en intervention autorisée et organisée.

- Clarifier pourquoi l’audit est demandé, qui autorise l’intervention et qui reçoit les conclusions.
- Clarifier les contraintes de confidentialité.
- Formaliser le mandat, les responsabilités, interlocuteurs et autorisations de vérification.
- Définir communication et escalade.

**Point de vigilance :** Le besoin exprimé oralement ne remplace pas la formalisation du cadre de mission.

**Rappel actif :** Que faut-il clarifier puis formaliser avant la collecte ?

**Source :** Seance_3.pdf, p. 5

### Formuler un objectif opérationnel

Un objectif explique ce que l’audit cherche à établir, de façon ciblée et vérifiable.

- Le support oppose « vérifier que NeoCare est sécurisée » à l’évaluation de l’efficacité du retrait des accès AD, M365 et VPN des sortants.
- L’objectif vague est trop large et non mesurable.
- L’objectif opérationnel précise le processus et les composants concernés.

**Point de vigilance :** Un objectif n’est pas seulement une liste d’outils ou de systèmes à examiner.

**Rappel actif :** Reformuler « vérifier la sécurité » en objectif concernant les accès sortants.

**Source :** Seance_3.pdf, p. 6

### Les dimensions du périmètre

Un périmètre explicite couvre les limites organisationnelles, techniques, fonctionnelles et temporelles.

- Organisation : sites, départements et entités. Technique : réseaux, applications, systèmes et cloud.
- Fonctionnel : processus et données critiques. Temporel : période d’observation et fenêtre de tests.
- Les exclusions doivent être justifiées, documentées et approuvées.

**Point de vigilance :** Une période d’observation et une fenêtre de tests sont deux limites temporelles à préciser.

**Rappel actif :** Quelles dimensions faut-il définir et comment traiter une exclusion ?

**Source :** Seance_3.pdf, p. 7

### Périmètre NeoCare : inclus et exclus

Le support propose un périmètre étendu mais borné, avec des exclusions soumises à validation.

- Inclus : AD, Microsoft 365, VPN, Wi-Fi, segmentation, serveurs Windows/Linux, application métier, logs et sauvegardes.
- Hors périmètre ou limites : systèmes clients non administrés par NeoCare et infrastructure interne du prestataire cloud.
- Tests destructifs et interruption volontaire sont exclus dans l’exemple.
- Ces exclusions doivent être validées ; elles ne suppriment pas la nécessité d’examiner les interfaces et responsabilités concernées.

**Point de vigilance :** Le cloud n’autorise pas l’auditeur à tester librement l’infrastructure propre du prestataire.

**Rappel actif :** Citer trois inclusions et deux limites du périmètre présenté.

**Source :** Seance_3.pdf, p. 8

### Critères et méthode

Le critère est la référence de jugement ; la méthode explique comment conduire les travaux.

- Exigences : ISO/IEC 27001, contrats, politiques internes et exigences légales applicables.
- Bonnes pratiques : 27002, CIS Controls, CIS Benchmarks, guides éditeurs.
- Méthode : ISO 19011 pour l’audit, NIST SP 800-115 pour les tests.
- Il faut choisir la référence adaptée à l’objet réellement évalué.

**Point de vigilance :** Nommer Wireshark ou un scanner ne définit pas le critère attendu.

**Rappel actif :** Distinguer une politique d’accès, ISO 19011 et une revue de configuration.

**Source :** Seance_3.pdf, p. 9

### Prioriser par les risques

Les actifs critiques, l’exposition et les impacts déterminent l’attention à consacrer à chaque zone.

- Identifier actifs et processus critiques.
- Évaluer exposition, impact et incidents connus.
- Prioriser domaines et échantillonnage ; adapter l’intensité des tests aux enjeux.
- Le support demande de ne pas confondre risque d’audit et risque cyber.

**Point de vigilance :** Prioriser ne signifie ni ignorer les critères ni tester de façon intrusive sans accord.

**Rappel actif :** Quels facteurs servent à prioriser les domaines et les comptes à examiner ?

**Source :** Seance_3.pdf, p. 10

### Maîtriser les risques de la mission

L’audit lui-même peut perturber l’activité ou exposer des données ; ces risques doivent être anticipés.

- Risques cités : indisponibilité, perturbation du personnel, charge excessive des équipes et fuite de données pendant la collecte.
- Mesures : fenêtres validées, sauvegardes et retour arrière.
- Prévoir canal sécurisé pour les preuves, contacts et procédure d’arrêt.

**Point de vigilance :** Ces mesures concernent la conduite de la mission, pas seulement les risques cyber préexistants.

**Rappel actif :** Associer deux risques de mission à leurs mesures de maîtrise.

**Source :** Seance_3.pdf, p. 11

### Choisir la technique de collecte

L’objectif et le type de preuve attendu guident le choix entre documents, interactions et vérifications.

- Documents : politiques, procédures, inventaires, schémas, journaux et tickets.
- Interactions : entretiens, observations, démonstrations et échantillonnage.
- Vérifications : configuration, droits, scans autorisés et corroboration.

**Point de vigilance :** Multiplier les techniques sans les relier à l’objectif ne garantit pas une preuve pertinente.

**Rappel actif :** Quelle combinaison permet de vérifier un processus de départ ?

**Source :** Seance_3.pdf, p. 12

### Dimensionner l’équipe

La mission doit mobiliser des compétences adaptées tout en préservant indépendance et confidentialité.

- Responsable d’audit : coordination et arbitrage.
- Auditeur gouvernance : processus, politiques et conformité. Auditeur technique : réseau, systèmes, IAM et applications.
- Experts ponctuels : cloud, développement ou métier.
- Vérifier compétences, indépendance et confidentialité de l’équipe.

**Point de vigilance :** Le nombre d’auditeurs ne suffit pas : leurs compétences doivent couvrir le périmètre.

**Rappel actif :** Distinguer le rôle du responsable, du spécialiste gouvernance et du spécialiste technique.

**Source :** Seance_3.pdf, p. 13

### Construire le calendrier

Le calendrier organise les travaux avant, pendant et après la phase de vérification.

- Avant : mandat, réunion de lancement, demande documentaire et validation du périmètre.
- Préparer plan de tests et autorisations.
- Pendant et après : entretiens, vérifications, revue quotidienne des preuves et validation factuelle des constats.
- Prévoir restitution et rapport final.

**Point de vigilance :** Un calendrier ignorant les contraintes de production n’est pas réaliste.

**Rappel actif :** Placer préparation des autorisations, collecte, validation factuelle et restitution dans l’ordre.

**Source :** Seance_3.pdf, p. 14

### Les six rubriques du plan d’audit

Le plan doit décrire ce qui sera fait, pourquoi, par qui et dans quelles conditions.

- 1. Contexte, mandat et objectifs. 2. Périmètre, exclusions et critères.
- 3. Domaines, méthodes et échantillonnage. 4. Équipe, rôles, calendrier et interlocuteurs.
- 5. Risques de mission, autorisations et communication. 6. Livrables, confidentialité et escalade.

**Point de vigilance :** La liste des tests seule n’est pas un plan d’audit complet.

**Rappel actif :** Reconstituer les six rubriques du plan recommandé.

**Source :** Seance_3.pdf, p. 15

### La matrice domaine–critère–preuve–vérification

Une matrice de travail relie chaque domaine à une attente et à un moyen de la vérifier.

- IAM : politique d’accès → comptes et RH → échantillon de départs.
- Réseau : segmentation → schéma et règles → revue des flux et ACL.
- Systèmes : CIS ou politique → configurations → contrôle du durcissement.
- Logs : politique SIEM → journaux et alertes → tests de traçabilité.

**Point de vigilance :** Écrire seulement « IAM : faire un scan » omet critère et preuve attendue.

**Rappel actif :** Construire une ligne de matrice pour les logs ou les accès.

**Source :** Seance_3.pdf, p. 16

### La réunion d’ouverture

Elle aligne auditeurs et interlocuteurs sur les conditions réelles de la mission.

- Présenter l’équipe et les interlocuteurs, rappeler mandat, objectifs et périmètre.
- Valider planning, accès et règles de test.
- Confirmer canaux de communication et d’escalade.
- Prévoir gestion des désaccords, changements et incidents.

**Point de vigilance :** La réunion d’ouverture ne sert pas à annoncer des conclusions avant la collecte.

**Rappel actif :** Quels sujets doivent être confirmés à l’ouverture ?

**Source :** Seance_3.pdf, p. 17

### Les contraintes de l’atelier de planification

La séance 3 donne des contraintes précises à respecter dans son plan NeoCare.

- Le plan d’une page doit contenir 3 objectifs, périmètre/exclusions, 4 critères, 5 preuves, 3 vérifications, équipe/calendrier et 2 risques de mission.
- L’audit dure 10 jours ouvrés avec 2 auditeurs ; un spécialiste externe est disponible 2 jours.
- L’application métier fonctionne 24 h/24 ; aucun test intrusif sans autorisation écrite.
- La direction attend un rapport exécutif et un plan d’actions priorisé.

**Point de vigilance :** Ces contraintes sont propres à l’atelier de la séance 3 ; elles ne figurent pas toutes dans le mini-cas autonome de 4 pages.

**Rappel actif :** Comment adapter le plan aux ressources et à la production continue ?

**Source :** Seance_3.pdf, p. 18, 19

### Défendre son cadrage

Le plan doit répondre aux questions de méthode et aux attentes du commanditaire.

- Le jury examine clarté des objectifs et du périmètre, justification des critères et suffisance des preuves.
- Le commanditaire doit savoir ce qui sera examiné, quand il recevra les résultats et quoi faire face à un risque critique.
- La correction indicative cible accès sortants, segmentation et maîtrise des vulnérabilités.
- Les tests proposés incluent revue de comptes, configuration réseau et scan non destructif autorisé.

**Point de vigilance :** Une correction indicative illustre une réponse cohérente ; elle n’établit aucun résultat réel.

**Rappel actif :** Sur quels arguments défendre le choix d’un domaine prioritaire ?

**Source :** Seance_3.pdf, p. 20, 21

### Les erreurs de planification

Les erreurs classiques portent sur les autorisations, les limites et les promesses excessives.

- Ne pas démarrer de scan avant autorisation.
- Ne pas confondre outil, méthode et critère ; ne pas écrire « tout le SI » sans priorisation.
- Ne pas oublier exclusions et responsabilités cloud.
- Ne pas ignorer la production dans le calendrier et ne pas promettre une sécurité garantie.

**Point de vigilance :** Un audit apporte des conclusions étayées sur un périmètre, pas une garantie d’absence de vulnérabilités.

**Rappel actif :** Citer quatre erreurs classiques de cadrage.

**Source :** Seance_3.pdf, p. 22

## Séance 4 — Techniques et preuves d’audit

Collecter, recouper et documenter une démonstration défendable.

### La chaîne complète du raisonnement

L’objectif et la technique complètent la chaîne critère–preuve–constat–risque–recommandation.

- Ordre du support : objectif → critère → technique → preuve → constatation → risque → recommandation.
- Chaque constat doit être rattaché à un critère explicite et une preuve traçable.
- Une suspicion n’est pas une non-conformité démontrée.

**Point de vigilance :** Ne pas transformer un signalement en constat certain avant vérification.

**Rappel actif :** Reconstituer les sept maillons et identifier ce qui manque à une simple suspicion.

**Source :** Seance_4.pdf, p. 3

### Définir une preuve d’audit

Une preuve est une information vérifiable utilisée pour évaluer un critère d’audit.

- Elle peut être documentaire, déclarative, observée ou issue d’un test.
- Elle doit être pertinente par rapport au critère et suffisamment fiable.
- Son format n’est pas imposé : une capture d’écran n’est qu’une possibilité.

**Point de vigilance :** Une information intéressante n’est pas automatiquement une preuve du critère examiné.

**Rappel actif :** Qu’est-ce qui transforme une information en preuve utilisable ?

**Source :** Seance_4.pdf, p. 4

### Les quatre qualités d’une preuve

Pertinence, fiabilité, suffisance et traçabilité répondent à quatre questions distinctes.

- Pertinence : répond-elle réellement au critère ?
- Fiabilité : source, intégrité, origine et contexte sont-ils crédibles ?
- Suffisance : volume et couverture permettent-ils de conclure ?
- Traçabilité : peut-on retrouver la source, la date et la méthode ?

**Point de vigilance :** Une preuve fiable peut être insuffisante pour couvrir toute la population.

**Rappel actif :** Distinguer fiabilité et suffisance à partir d’un seul compte examiné.

**Source :** Seance_4.pdf, p. 5

### Les cinq techniques de collecte

Revue documentaire, entretiens, observation, échantillonnage et tests apportent des regards complémentaires.

- La revue examine politiques, registres, configurations et tickets.
- Les entretiens éclairent pratiques, responsabilités et exceptions ; l’observation regarde l’exécution concrète.
- L’échantillonnage sélectionne des éléments de façon raisonnée.
- Les tests sont des vérifications techniques ou fonctionnelles autorisées.

**Point de vigilance :** La meilleure technique dépend de la question d’audit, pas de la facilité d’accès à un outil.

**Rappel actif :** Choisir une technique pour chacun des cinq besoins du panorama.

**Source :** Seance_4.pdf, p. 6

### Revue documentaire : contrôler l’écrit et sa mise en œuvre

Un document conforme ne démontre pas à lui seul que la procédure est appliquée.

- Partir des critères pour identifier les documents attendus.
- Contrôler version, approbation, périmètre, propriétaire et date.
- Comparer la procédure écrite aux traces d’exécution.
- Exemple : rapprocher procédure de retrait d’accès et tickets RH/IT.

**Point de vigilance :** Une politique signée ne suffit pas à prouver un retrait effectif dans les délais.

**Rappel actif :** Quels contrôles faire sur un document avant de l’utiliser ?

**Source :** Seance_4.pdf, p. 7

### Conduire un entretien utile

L’entretien fait émerger des pratiques et doit conduire à des faits vérifiables.

- Préparer des questions ouvertes, non suggestives, et identifier le rôle de l’interlocuteur.
- Demander exemples récents et preuves associées ; reformuler et faire confirmer les faits.
- Pour les départs : notification RH, autorisation AD/M365/VPN, délais, exceptions et dossiers récents.
- Ne pas traiter une simple déclaration comme preuve unique.

**Point de vigilance :** « Tous les comptes sont bien désactivés, n’est-ce pas ? » oriente la réponse au lieu d’établir les faits.

**Rappel actif :** Formuler deux questions ouvertes sur le retrait d’accès.

**Source :** Seance_4.pdf, p. 8, 9

### Observer sans surinterpréter

L’observation montre un cas d’exécution réel, pas nécessairement toute la population.

- Observer l’application d’une procédure ou d’un contrôle.
- Noter date, contexte, système, participants et déroulement.
- Éviter de perturber l’activité ou d’exposer des données sensibles.
- Une démonstration de création puis révocation d’accès est un exemple du cours.

**Point de vigilance :** Un cas observé ne démontre pas que toutes les exécutions ont été identiques.

**Rappel actif :** Que documenter pendant une observation et quelle limite annoncer ?

**Source :** Seance_4.pdf, p. 10

### Construire un échantillon défendable

La sélection doit être documentée, justifiée et orientée par les risques.

- Définir la population, par exemple tous les départs des six derniers mois.
- Identifier privilèges, accès distants et criticité.
- Justifier la taille et la méthode de sélection.
- Relever les exceptions et étendre les travaux si nécessaire ; ne pas généraliser abusivement un résultat non statistique.

**Point de vigilance :** « Aucun écart sur trois dossiers » ne prouve pas automatiquement l’absence d’écart sur tous les dossiers.

**Rappel actif :** Comment définir population, sélection et limites de l’échantillon ?

**Source :** Seance_4.pdf, p. 11

### Tests autorisés et reproductibles

Le test compare un état effectif à un critère et conserve ce qui permet de refaire la vérification.

- Contrôler un compte, une règle firewall, un journal ou un correctif.
- Privilégier des vérifications non destructives et autorisées.
- Consigner paramètres, version des outils, date et résultats.
- Distinguer résultat automatisé et anomalie confirmée.

**Point de vigilance :** Un résultat de scanner n’est pas une anomalie confirmée par le seul fait qu’il est affiché.

**Rappel actif :** Quelles informations conserver pour rendre un test reproductible ?

**Source :** Seance_4.pdf, p. 12

### Corroborer : confronter plusieurs sources

La conclusion se construit après confrontation de la déclaration, du document, des traces et du test.

- Déclaration de l’exemple : tous les comptes sortants sont supprimés.
- Document : procédure imposant un retrait sous 24 h ; traces : tickets et horodatages de désactivation.
- Test : vérification d’un échantillon AD/M365/VPN.
- Le délai de 24 h appartient à cet exemple de procédure ; le critère réel doit être établi pour la mission.

**Point de vigilance :** Ne pas appliquer automatiquement un délai pédagogique à tous les contextes.

**Rappel actif :** Quelles quatre sources croiser dans l’exemple de révocation ?

**Source :** Seance_4.pdf, p. 13

### MFA : une politique peut masquer des exceptions

La conclusion doit préciser le périmètre exact des exceptions constatées dans les preuves.

- Un responsable peut annoncer que le MFA est actif pour tous, avec une politique approuvée.
- Un export de configuration peut cependant révéler des exceptions.
- La force d’une preuve dépend du critère évalué.
- Le constat doit décrire les exceptions effectivement examinées, sans extrapoler.

**Point de vigilance :** La seule existence d’une politique ne démontre pas la couverture réelle.

**Rappel actif :** Que faire si l’export MFA contredit l’entretien ?

**Source :** Seance_4.pdf, p. 14

### La feuille de travail d’audit

Elle rend le test traçable depuis l’objectif jusqu’au résultat et à ses limites.

- Consigner identifiant du test, objectif et critère.
- Indiquer population, échantillon et méthode de sélection.
- Noter technique, date, intervenant et système.
- Référencer et protéger les preuves ; décrire résultat, limites, exceptions et validation.

**Point de vigilance :** Une capture isolée sans contexte ne constitue pas une feuille de travail complète.

**Rappel actif :** Citer les rubriques minimales d’une feuille de travail.

**Source :** Seance_4.pdf, p. 15

### Confidentialité et conservation

La collecte doit être limitée, protégée et accompagnée d’une provenance documentée.

- Collecter seulement ce qui est nécessaire et masquer les données personnelles dans les supports pédagogiques.
- Protéger exports, captures et journaux.
- Documenter provenance et transformations éventuelles.
- Prévoir conservation, accès et suppression selon les règles applicables.

**Point de vigilance :** La traçabilité des preuves ne justifie pas de diffuser des données sensibles sans limite.

**Rappel actif :** Quelles précautions prendre pour conserver et partager un export ?

**Source :** Seance_4.pdf, p. 16

### Rédiger un constat conditionnel

Sans résultats vérifiés, utiliser une formulation conditionnelle et indiquer les preuves à examiner.

- Critères de l’atelier : accès retirés dans le délai prévu et aucune session VPN active après départ.
- Preuves : procédure, registre RH, tickets, exports AD/M365, journaux VPN.
- Le mini-exemple « 2 comptes sur 15 dépassent 24 h » est explicitement fictif et à confirmer.
- Le risque cité est le maintien d’accès non autorisés ; l’action proposée fiabilise notification et exceptions.

**Point de vigilance :** Ne jamais transformer les chiffres fictifs du support en résultat réel de NeoCare.

**Rappel actif :** Comment formuler un écart potentiel sans inventer de preuve ?

**Source :** Seance_4.pdf, p. 19, 20

## Séance 5 — Audit du SMSI selon ISO/IEC 27001

Relier exigences, risques, SoA et efficacité réellement démontrée.

### Ce que l’audit du SMSI examine

Le SMSI est un système de management : processus, responsabilités et pilotage de la sécurité de l’information.

- Il comprend appréciation des risques, traitement et amélioration.
- L’audit examine conformité aux exigences et mise en œuvre effective.
- Le support utilise ISO/IEC 27001:2022 pour les exigences certifiables, 27002:2022 pour les recommandations et 19011:2018 pour la méthode.
- Une certification ne garantit pas l’absence de vulnérabilités.

**Point de vigilance :** Ce site reprend les éditions nommées dans le cours, sans affirmer qu’elles constituent une veille normative à jour.

**Rappel actif :** Quel est l’objet d’un audit du SMSI et quelle limite a la certification ?

**Source :** Seance_5.pdf, p. 3, 4

### Les clauses 4 à 10

Le cours organise les exigences du SMSI en sept familles.

- 4 : contexte et périmètre. 5 : leadership, politique et responsabilités. 6 : risques, traitement et objectifs.
- 7 : ressources, compétences, communication et documentation. 8 : fonctionnement opérationnel.
- 9 : évaluation des performances et audit interne. 10 : amélioration et traitement des non-conformités.

**Point de vigilance :** L’Annexe A n’est pas un remplacement de ces exigences de management.

**Rappel actif :** Associer chaque numéro de clause de 4 à 10 à sa famille.

**Source :** Seance_5.pdf, p. 5

### Clause 4 : contexte et périmètre

Vérifier que l’organisation connaît ses enjeux, ses exigences et les limites du SMSI.

- Examiner enjeux internes/externes et parties intéressées avec leurs exigences.
- Le périmètre doit être défini et documenté.
- Interfaces et dépendances doivent être prises en compte.
- Preuves : analyse de contexte, exigences, cartographie et périmètre approuvé.

**Point de vigilance :** Un périmètre décrit sans ses dépendances peut masquer des interfaces importantes.

**Rappel actif :** Quelles preuves demander pour auditer la clause 4 ?

**Source :** Seance_5.pdf, p. 6

### Clause 5 : leadership

L’engagement de la direction doit être visible dans la politique, les responsabilités et les décisions.

- La politique SSI doit être établie, communiquée et appropriée.
- Les rôles doivent être attribués et compris.
- Les objectifs SSI doivent être alignés sur l’organisation.
- Preuves : politique, organigramme, comptes rendus, décisions et entretiens.

**Point de vigilance :** La présence d’un document de politique n’épuise pas la question de l’engagement réel.

**Rappel actif :** Comment chercher des preuves d’engagement et de responsabilités comprises ?

**Source :** Seance_5.pdf, p. 7

### Clause 6 : planification

La planification lie appréciation des risques, traitement, applicabilité et objectifs.

- Définir et appliquer les processus d’appréciation et de traitement des risques SSI.
- Produire une SoA et un plan de traitement.
- Définir des objectifs mesurables lorsque cela est possible.
- Preuves : méthodologie, registre de risques, décisions, SoA et plan d’action.

**Point de vigilance :** Une méthodologie disponible mais non appliquée ne démontre pas le fonctionnement du processus.

**Rappel actif :** Quels documents relient risques, décisions et traitement ?

**Source :** Seance_5.pdf, p. 8

### Du risque au traitement

La traçabilité permet de suivre le raisonnement de l’actif jusqu’au contrôle et au suivi.

- Actif ou processus → scénario de risque → niveau de risque.
- Définir critères de risque et critères d’acceptation.
- Décider de réduire, éviter, partager ou accepter selon la méthode retenue.
- Contrôles choisis → SoA → plan de traitement → suivi ; vérifier approbations et acceptation du risque résiduel.

**Point de vigilance :** L’auditeur ne doit pas confondre un risque résiduel avec une décision d’acceptation effectivement approuvée.

**Rappel actif :** Reconstituer la chaîne et citer les quatre décisions de traitement du cours.

**Source :** Seance_5.pdf, p. 9

### La déclaration d’applicabilité

La SoA explique les contrôles nécessaires, leur justification et leur état de mise en œuvre.

- Lister les contrôles nécessaires au traitement des risques.
- Indiquer applicabilité et justifications d’inclusion ou d’exclusion.
- Préciser si les contrôles nécessaires sont mis en œuvre.
- Comparer à l’Annexe A pour éviter les omissions, puis confronter SoA, risques, procédures et terrain.

**Point de vigilance :** « Mis en œuvre » dans la SoA est une déclaration à vérifier, pas une preuve suffisante de fonctionnement.

**Rappel actif :** Comment vérifier qu’une SoA est cohérente avec les risques et le terrain ?

**Source :** Seance_5.pdf, p. 10

### Annexe A : les 93 contrôles du support

La séance présente quatre thèmes : organisation, personnes, physique et technologie.

- A.5 : 37 contrôles organisationnels.
- A.6 : 8 contrôles liés aux personnes.
- A.7 : 14 contrôles physiques. A.8 : 34 contrôles technologiques.
- Le total est 93 ; l’audit porte sur applicabilité et efficacité, pas sur le simple cochage des cases.

**Point de vigilance :** Les nombres sont ceux de l’édition 2022 citée dans le cours ; le texte intégral des contrôles n’est pas fourni.

**Rappel actif :** Associer A.5, A.6, A.7 et A.8 à leur thème et leur nombre.

**Source :** Seance_5.pdf, p. 11

### Clause 7 : support

Le SMSI a besoin de ressources, de compétences, de communication et d’informations maîtrisées.

- Vérifier disponibilité des ressources et détermination/maintien des compétences.
- Examiner sensibilisation et communication.
- Contrôler la maîtrise des informations documentées.
- Preuves : plan de formation, évaluations, communications et gestion des versions.

**Point de vigilance :** Un document non maîtrisé ou une compétence non évaluée limite l’assurance apportée.

**Rappel actif :** Quels éléments de preuve correspondent à la clause 7 ?

**Source :** Seance_5.pdf, p. 12

### Clause 8 : fonctionnement

L’audit vérifie que les processus planifiés sont réellement exécutés et maîtrisés.

- Examiner exécution des processus et renouvellement des appréciations de risques selon les règles définies.
- Vérifier mise en œuvre des plans de traitement.
- Examiner maîtrise des changements et des processus externalisés.
- Preuves : tickets, journaux, contrôles, comptes rendus et rapports d’exécution.

**Point de vigilance :** Un plan de traitement approuvé ne prouve pas que les actions ont été exécutées.

**Rappel actif :** Comment vérifier le passage d’un plan à une exécution effective ?

**Source :** Seance_5.pdf, p. 13

### Clause 9 : évaluation des performances

Il faut mesurer, auditer et revoir les résultats du SMSI.

- Définir quoi mesurer, comment, quand et par qui.
- Réaliser des audits internes planifiés, objectifs et impartiaux.
- Effectuer des revues de direction et conserver leurs résultats.
- Preuves : indicateurs, programmes d’audit, rapports, revues et décisions.

**Point de vigilance :** Audit interne et revue de direction sont deux mécanismes distincts ; l’un ne rend pas l’autre inutile.

**Rappel actif :** Quelles preuves montrent que la performance est évaluée et revue ?

**Source :** Seance_5.pdf, p. 14

### Clause 10 : amélioration

La réaction à une non-conformité doit se prolonger par l’analyse des causes et la vérification des actions.

- Maîtriser les conséquences des non-conformités.
- Analyser les causes et décider d’actions adaptées.
- Vérifier l’efficacité des actions mises en œuvre.
- Conserver preuves des constats, actions et résultats ; rechercher l’amélioration continue.

**Point de vigilance :** Clôturer une action sur la seule déclaration « terminé » ne démontre pas son efficacité.

**Rappel actif :** Quelles étapes suivent l’identification d’une non-conformité ?

**Source :** Seance_5.pdf, p. 15

### Document, mise en œuvre, efficacité

Le cours distingue l’existence approuvée d’une procédure, son exécution et le résultat obtenu.

- Conformité documentaire de l’exemple : la procédure de retrait existe et est approuvée.
- Mise en œuvre : les demandes RH sont réellement traitées.
- Efficacité : les comptes sont désactivés dans les délais définis.
- Test : rapprocher départs RH, tickets et états AD/M365.

**Point de vigilance :** La présence d’un document ne suffit pas à conclure sur l’efficacité.

**Rappel actif :** Expliquer les trois niveaux sur l’exemple des comptes sortants.

**Source :** Seance_5.pdf, p. 16

### La méthode d’audit du SMSI

La démarche part du cadre, puis suit gouvernance, risques, contrôles et résultats.

- 1. Définir objectifs, périmètre, critères et échantillonnage.
- 2. Examiner contexte, gouvernance et risques. 3. Vérifier SoA et plan de traitement.
- 4. Tester l’exécution des contrôles pertinents et la surveillance.
- 5. Documenter les constats et conduire la restitution.

**Point de vigilance :** Choisir un contrôle sans lien avec le périmètre et les risques fragilise le raisonnement.

**Rappel actif :** Reconstituer les cinq étapes proposées.

**Source :** Seance_5.pdf, p. 17

### Relier clause, preuve et test

La matrice du support transforme les repères de clauses en vérifications concrètes.

- 4.3 : périmètre approuvé → vérifier limites et dépendances.
- 6.1.2 : méthodologie et registre → vérifier l’application ; 6.1.3 : SoA et plan → rapprocher risques et contrôles.
- 9.2 : programme et rapports → vérifier suivi et impartialité.
- Le support associe « 10.2 Correctifs » au registre et au contrôle cause–action–efficacité. Ce repère est reproduit comme présenté dans la diapositive, sans validation indépendante du texte normatif.

**Point de vigilance :** La matrice est un support de cours, pas le texte intégral de la norme : ne pas lui attribuer des exigences absentes du document.

**Rappel actif :** Pour chaque ligne, nommer le document puis l’action de vérification.

**Source :** Seance_5.pdf, p. 18

### NeoCare : vérifier une SoA déclarative

Le scénario signale des anciens comptes potentiellement actifs alors que le contrôle d’accès est déclaré mis en œuvre.

- Demander SoA, procédure de départ, liste RH, tickets IT et états AD/VPN.
- Comparer dates RH, tickets et désactivation ; contrôler les exceptions.
- Le constat à confirmer porte sur d’éventuels écarts entre SoA, procédures et accès réels.
- La correction indicative propose d’automatiser les départs, gérer les exceptions et mesurer les délais.

**Point de vigilance :** « Des comptes seraient actifs » reste un signal, pas une preuve de non-conformité.

**Rappel actif :** Quelles preuves demandées permettraient de confronter la SoA au terrain ?

**Source :** Seance_5.pdf, p. 19, 20, 21

### Les cinq composantes d’un constat défendable

Une rédaction robuste relie une exigence, une observation vérifiée et une action réalisable.

- Critère : exigence explicite ou règle interne.
- Condition : situation réellement observée et vérifiée. Preuve : source, date, échantillon et feuille de travail.
- Risque : conséquence plausible pour l’organisation.
- Recommandation : mesure réalisable, priorisée et vérifiable.

**Point de vigilance :** Ne pas remplacer une condition réellement vérifiée par une hypothèse présentée comme un fait.

**Rappel actif :** Distinguer condition, preuve, risque et recommandation.

**Source :** Seance_5.pdf, p. 22

## Séance 6 — Audit organisationnel et gouvernance SSI

Vérifier les décisions, les responsabilités et les processus dans la pratique.

### L’objet de l’audit organisationnel

Il examine décisions, responsabilités, processus et contrôles humains, en complément de l’audit technique.

- Comparer règles établies et pratiques.
- Rechercher les zones grises : pas de propriétaire, de validation ou de suivi.
- S’appuyer sur décisions, registres, tickets, exercices et entretiens.
- Les huit domaines développés sont politiques, responsabilités, actifs, RH, fournisseurs, incidents, continuité et sensibilisation.

**Point de vigilance :** L’audit organisationnel ne se réduit ni à la lecture de politiques ni à une revue de configuration.

**Rappel actif :** Citer les huit domaines et expliquer ce qu’est une zone grise.

**Source :** Seance_6.pdf, p. 3, 4

### Auditer une politique SSI

Une politique doit être approuvée, adaptée, accessible, comprise et effectivement appliquée.

- Examiner approbation, risques, activités et exigences applicables ; vérifier la cohérence des règles opérationnelles.
- Contrôler l’accès à la politique, la compréhension et sa révision après changements importants.
- Preuves : version approuvée, historique, diffusion et accusés de lecture.
- Échantillonner accès distant, classification ou usage acceptable puis comparer aux dossiers d’exécution et exceptions.

**Point de vigilance :** Un document publié ou un accusé de lecture ne prouve pas, seul, l’application effective de chaque règle.

**Rappel actif :** Quelles preuves relient politique, diffusion et pratiques ?

**Source :** Seance_6.pdf, p. 5, 6

### Responsabilités et RACI

La gouvernance doit préciser qui agit, décide, est consulté et est informé.

- Identifier direction, RSSI, DSI, métiers, RH, juridique et fournisseurs.
- Examiner responsabilités formalisées et délégations de décision.
- Le support développe RACI : Responsible, Accountable, Consulted, Informed.
- Rechercher activités sans responsable final, validations conflictuelles et mécanismes d’escalade insuffisants.

**Point de vigilance :** Une matrice RACI disponible doit être confrontée aux décisions réellement prises.

**Rappel actif :** Que signifie RACI et quels défauts l’auditeur cherche-t-il ?

**Source :** Seance_6.pdf, p. 7

### Séparer demande, approbation, exécution et contrôle

La séparation des tâches réduit les conflits de validation sur les décisions sensibles.

- Distinguer les quatre fonctions de la chaîne.
- Exemple : un administrateur ne devrait pas approuver seul ses propres privilèges.
- Dans une petite équipe, examiner les compensations prévues.
- Preuves : RACI, habilitations, tickets et revues ; test proposé : reconstituer trois décisions sensibles de bout en bout.

**Point de vigilance :** Une petite équipe n’efface pas le besoin de contrôle ; elle nécessite d’examiner les compensations.

**Rappel actif :** Comment tester concrètement la séparation des tâches ?

**Source :** Seance_6.pdf, p. 8

### Inventaire et propriété des actifs

L’audit vérifie exhaustivité, propriétaires, classification et dépendances des actifs.

- Inclure données, logiciels, matériels et services cloud.
- Attribuer propriétaire métier et responsable opérationnel.
- Contrôler classification, usage autorisé, localisation et dépendances.
- Rapprocher inventaire officiel, achats, gestion des postes et cloud ; vérifier entrées et sorties des actifs.

**Point de vigilance :** Un inventaire officiel n’est pas automatiquement exhaustif ni à jour.

**Rappel actif :** Quelles sources croiser pour tester l’exhaustivité de l’inventaire ?

**Source :** Seance_6.pdf, p. 9

### Classification de l’information

Les niveaux de classification doivent se traduire en règles appliquées.

- Le support cite public, interne, confidentiel et sensible comme niveaux à adapter.
- Vérifier stockage, partage, transmission et destruction.
- Contrôler marquage et exceptions.
- Échantillonner dossiers métier et espaces collaboratifs.

**Point de vigilance :** Une classification écrite ne démontre pas une protection effectivement appliquée.

**Rappel actif :** Que vérifier après avoir identifié la classification d’un dossier ?

**Source :** Seance_6.pdf, p. 10

### Le cycle de vie des actifs

La sécurité doit être vérifiée à l’acquisition, l’exploitation, le transfert et la fin de vie.

- Acquisition : enregistrement, propriétaire et exigences.
- Exploitation : changements, maintenance et accès.
- Transfert : autorisation, traçabilité et protection des données.
- Fin de vie : retrait des accès, effacement ou destruction, avec preuve.

**Point de vigilance :** Une sortie d’inventaire sans preuve du traitement des données ne couvre pas toute la fin de vie.

**Rappel actif :** Associer chaque phase à ses contrôles attendus.

**Source :** Seance_6.pdf, p. 11

### Sécurité RH : avant, pendant, après

Le processus RH doit prendre en compte obligations, changements et fin de relation.

- Avant : vérifications adaptées et clauses de confidentialité applicables.
- Pendant : obligations, formation, changements de fonction et sanctions prévues.
- Après : restitution des actifs, révocation et rappel des obligations.
- Inclure externes et intérimaires ; comparer dossiers RH, demandes IT et validations des managers.

**Point de vigilance :** Limiter le contrôle aux salariés permanents oublie des populations citées dans le cours.

**Rappel actif :** Quelles vérifications sont attendues avant, pendant et après la relation ?

**Source :** Seance_6.pdf, p. 12

### Auditer un départ

Un dossier de départ se reconstitue à partir des événements RH, des notifications et des actions techniques.

- Choisir des départs récents, dont privilégiés et prestataires.
- Relever date effective, notification et désactivation.
- Vérifier restitution du matériel et suppression des droits métier.
- Examiner écarts de délai, exceptions et justificatifs ; conclure sur la population examinée et ses limites.

**Point de vigilance :** La désactivation d’un seul compte ne démontre pas le retrait de tous les droits métier associés.

**Rappel actif :** Quelles dates et quelles actions rapprocher sur un départ ?

**Source :** Seance_6.pdf, p. 13

### Gouvernance des fournisseurs

L’externalisation nécessite des exigences, des responsabilités et un suivi sur toute la relation.

- Identifier les tiers accédant aux données ou services critiques.
- Évaluer les risques avant contrat et lors de changements majeurs.
- Examiner exigences d’accès, confidentialité, incidents et sous-traitance.
- Suivre performance, audits contractuels et actions correctives ; prévoir réversibilité et traitement des données à la sortie.

**Point de vigilance :** L’existence d’un contrat n’établit pas à elle seule un suivi effectif.

**Rappel actif :** Quels points examiner au début, pendant et à la fin d’une relation fournisseur ?

**Source :** Seance_6.pdf, p. 14

### Les preuves d’un suivi fournisseur

Les preuves doivent couvrir criticité, exigences, évaluations et accès réels.

- Demander registre des tiers et classement de criticité.
- Examiner contrats, annexes sécurité et accords de traitement applicables.
- Consulter évaluations initiales/périodiques, attestations et plans d’action.
- Examiner accès techniques tiers et dates d’expiration ; suivre un fournisseur critique de l’entrée à la sortie.

**Point de vigilance :** Un accès fournisseur ne devient pas justifié simplement parce qu’un contrat a existé.

**Rappel actif :** Citer quatre catégories de preuves pour auditer un tiers critique.

**Source :** Seance_6.pdf, p. 15

### La chaîne de gestion des incidents

L’audit suit l’incident de son signalement au contrôle des actions après rétablissement.

- Détection et signalement : canaux connus et seuils d’escalade.
- Qualification : gravité, impact, responsabilités et décisions.
- Confinement, investigation, remédiation et rétablissement.
- Communication interne/externe et obligations applicables ; retour d’expérience avec causes, actions et efficacité.

**Point de vigilance :** Un dossier fermé ne prouve pas que le retour d’expérience et les actions correctives ont été menés.

**Rappel actif :** Reconstituer les principales étapes du processus incident.

**Source :** Seance_6.pdf, p. 16

### Tester le processus incident de bout en bout

Les chronologies et décisions doivent montrer que le processus a réellement fonctionné.

- Sélectionner des incidents de natures et gravités différentes.
- Comparer heures de détection, déclaration, escalade et clôture.
- Examiner chronologie, décisions, preuves et communications.
- Vérifier actions correctives et capacité de mobilisation à travers exercices autorisés.

**Point de vigilance :** Un seul incident très bien documenté ne représente pas nécessairement tous les types de cas.

**Rappel actif :** Quelles dates et quels documents servent à vérifier un traitement complet ?

**Source :** Seance_6.pdf, p. 17

### Continuité : partir des activités métier

La capacité de reprise doit être appréciée par rapport aux activités critiques et à leurs dépendances.

- Examiner BIA, impacts d’interruption et priorités de reprise.
- Vérifier que les objectifs RTO/RPO sont définis et validés par les métiers.
- Contrôler articulation PCA, PRA, gestion de crise et prestataires.
- Une sauvegarde existante ne démontre pas la capacité de reprise.

**Point de vigilance :** Les sigles BIA, RTO/RPO, PCA/PRA sont cités ici ; la séance ne développe pas toutes leurs définitions détaillées.

**Rappel actif :** Pourquoi faut-il relier les objectifs de reprise aux métiers plutôt qu’aux seules sauvegardes ?

**Source :** Seance_6.pdf, p. 18

### Prouver la capacité de continuité

Des exercices et mesures permettent de comparer la capacité réelle aux objectifs de reprise.

- Vérifier scénarios, rôles, contacts et solutions de repli.
- Examiner comptes rendus d’exercices et tests de restauration/reprise.
- Comparer résultats mesurés à RTO/RPO et aux objectifs métier.
- Contrôler traitement des écarts et actualisation après changements d’architecture ou de processus.

**Point de vigilance :** Un PCA seulement rédigé n’est pas une preuve de reprise opérationnelle.

**Rappel actif :** Quelles preuves demander après l’échec d’un exercice ?

**Source :** Seance_6.pdf, p. 19

### Sensibilisation : au-delà de la présence

Le programme doit cibler les rôles et les risques, puis être ajusté selon les effets observés.

- Vérifier intégration des nouveaux arrivants et prestataires.
- Examiner supports, calendrier, couverture et relances.
- Mesurer compréhension, comportements et remontées d’incidents.
- Adapter les actions aux résultats, pas seulement au taux de participation.

**Point de vigilance :** Un taux de présence de 100 % ne démontre pas une compréhension de 100 %.

**Rappel actif :** Comment passer d’un suivi de présence à une évaluation d’efficacité ?

**Source :** Seance_6.pdf, p. 20

### Les indicateurs de sensibilisation

Les métriques complètent le taux de participation et demandent une interprétation prudente.

- Couverture des formations par population critique.
- Résultats des questionnaires et progression après formation.
- Délai de signalement des messages suspects ou incidents.
- Évolution des écarts récurrents liés aux pratiques humaines, sans stigmatiser les personnes.

**Point de vigilance :** Un indicateur isolé ne permet pas d’attribuer automatiquement une faute à une personne.

**Rappel actif :** Citer quatre indicateurs proposés et une précaution d’interprétation.

**Source :** Seance_6.pdf, p. 21

### La matrice d’audit organisationnel

Chaque domaine s’associe à une preuve et à une vérification de fonctionnement.

- Politique → version approuvée → diffusion et application. Responsabilités → RACI → décision sensible.
- Actifs → inventaire → propriétaire et classification. RH → départs → retrait effectif des accès et actifs.
- Fournisseurs → contrat → exigences, revues et accès réels.
- Incidents/PCA → dossiers et exercices → suivi des écarts.

**Point de vigilance :** La colonne « preuve » ne suffit pas : il faut encore décrire ce qu’on vérifie avec elle.

**Rappel actif :** Construire une ligne de matrice pour un fournisseur ou un exercice PCA.

**Source :** Seance_6.pdf, p. 22

### Les signaux organisationnels de NeoCare

Le scénario fictif propose des sujets à investiguer, pas des conclusions d’audit déjà démontrées.

- Politique âgée de trois ans sans preuve de rediffusion ; équipements absents de l’inventaire.
- Départ d’un prestataire sans revue formalisée ; exercice de reprise échoué sur une application critique.
- Sensibilisation suivie par présence, sans mesure de compréhension.
- La correction guide les preuves et demande de garder les conclusions conditionnelles jusqu’à vérification.

**Point de vigilance :** L’âge d’un document seul ne prouve pas sa non-conformité : examiner les règles, changements et preuves.

**Rappel actif :** Pour chaque signal, proposer une preuve et une vérification.

**Source :** Seance_6.pdf, p. 23, 25

### Un constat fournisseur bien limité

Une recommandation utile indique une action, un responsable, une échéance et une vérification.

- Critère de l’exemple : tout fournisseur critique doit faire l’objet d’une revue définie.
- Preuves attendues : registre des tiers, contrat, comptes rendus et suivi.
- Condition hypothétique : aucune revue documentée depuis la date prévue ; risque : expositions non identifiées sur des données sensibles.
- Action proposée : désigner un propriétaire, planifier la revue et suivre les écarts.

**Point de vigilance :** Le support demande de ne pas transformer le scénario fictif en non-conformité avérée.

**Rappel actif :** Formuler un constat fournisseur conditionnel et une action vérifiable.

**Source :** Seance_6.pdf, p. 26, 28

## Séance 7 — Audit IAM & Active Directory

Reconstruire les droits effectifs et vérifier leur justification.

### Identité, compte, habilitation, rôle, session

Ces notions décrivent différents niveaux de la gestion des accès.

- Identité : personne, service ou charge de travail reconnue par l’organisation.
- Compte : représentation technique dans AD, Entra ID, VPN ou application.
- Habilitation : autorisation pour une ressource et une action ; rôle/groupe : attribution indirecte de droits.
- Session : usage effectif de l’identité après authentification.

**Point de vigilance :** Un compte désactivé et une session révoquée ne désignent pas la même opération dans le cycle présenté.

**Rappel actif :** Distinguer les cinq notions avec un exemple d’accès médical.

**Source :** Seance_7.pdf, p. 3

### Cartographier les chemins d’accès

L’auditeur relie identités, comptes, groupes/rôles et ressources dans un SI hybride.

- AD DS : comptes, OU, groupes et GPO.
- Entra ID : identités cloud, rôles et accès conditionnel.
- Inclure VPN, applications métier, bases de données et comptes locaux.
- Inclure externes, prestataires, services et identités non humaines ; produire la matrice identité → compte → groupe/rôle → ressource.

**Point de vigilance :** Limiter l’audit à AD peut laisser de côté des droits cloud et applicatifs.

**Rappel actif :** Quelles sources et quelles populations inclure dans la cartographie ?

**Source :** Seance_7.pdf, p. 4

### Joiner, Mover, Leaver

Arrivée, mobilité et départ doivent être reliés aux approbations et aux états techniques.

- Arrivée : demande, approbation, attribution minimale et date de début.
- Mobilité : retirer les anciens droits avant ou pendant l’ajout des nouveaux.
- Départ : désactiver, révoquer les sessions et retirer les accès associés.
- Inclure congés longs, prestataires, départ urgent et réembauche ; rapprocher RH, tickets et états horodatés.

**Point de vigilance :** Ajouter les nouveaux droits sans traiter les anciens laisse un cumul possible.

**Rappel actif :** Quelles vérifications distinguent arrivée, mobilité et départ ?

**Source :** Seance_7.pdf, p. 5

### Moindre privilège et besoin métier

L’habilitation doit correspondre aux opérations réellement nécessaires au profil métier.

- Choisir un processus critique : dossier médical, paie ou administration.
- Identifier lecture, écriture, export et suppression autorisés.
- Comparer profil attendu et droits effectifs ; repérer droits hérités, cumulés ou directs hors processus.
- Vérifier propriétaire métier, justification et échéance des exceptions.

**Point de vigilance :** Le nom d’un profil ou d’un groupe ne prouve pas à lui seul le besoin de tous les droits obtenus.

**Rappel actif :** Comment tester la justification métier d’un droit d’export ?

**Source :** Seance_7.pdf, p. 6

### Les points d’entrée d’un audit AD

L’audit porte sur la structure, les délégations, les stratégies et les droits effectifs.

- Inventorier domaines, contrôleurs, forêts et relations de confiance.
- Examiner OU et délégations : qui peut modifier comptes, groupes et objets ?
- Examiner GPO, paramètres appliqués, ordre de priorité et exceptions.
- Contrôler membres directs, imbriqués et délégations des groupes à privilèges ; distinguer lecture de configuration et modification.

**Point de vigilance :** Une vérification en lecture ne doit pas être confondue avec un test modifiant l’annuaire.

**Rappel actif :** Citer quatre points d’entrée pour auditer Active Directory.

**Source :** Seance_7.pdf, p. 7

### Groupes sensibles et droits réels

Les noms de groupes orientent l’examen mais les droits effectifs doivent être vérifiés.

- Le cours cite Domain Admins, Enterprise Admins et Administrators selon le périmètre.
- Il cite aussi Account Operators, Backup Operators et d’autres délégations puissantes.
- Analyser imbrications et chemins d’élévation.
- Contrôler les comptes nominatifs dédiés à l’administration.

**Point de vigilance :** Un compte absent d’un groupe connu peut disposer d’autres délégations puissantes.

**Rappel actif :** Pourquoi ne pas s’arrêter aux membres directs de Domain Admins ?

**Source :** Seance_7.pdf, p. 8

### Comptes privilégiés et traçabilité

Les privilèges élevés doivent être séparés, bornés et traçables.

- Séparer compte bureautique et compte d’administration.
- Accorder les privilèges pour un besoin et une durée définis.
- Imposer un MFA résistant au phishing quand cela est pertinent et possible.
- Tracer élévations, connexions et modifications ; examiner protection, usage, revue et tests des comptes d’urgence.

**Point de vigilance :** Les comptes d’urgence ne doivent pas disparaître de l’analyse au prétexte qu’ils sont exceptionnels.

**Rappel actif :** Quels contrôles demander pour un compte d’administration ou d’urgence ?

**Source :** Seance_7.pdf, p. 9

### MFA enregistré versus MFA imposé

La couverture réelle se vérifie dans les politiques et les journaux, pas seulement dans un taux d’enregistrement.

- Identifier applications, populations et méthodes couvertes.
- Vérifier exclusions, comptes d’urgence et protocoles hérités.
- Tester accès conditionnel et ordre d’application.
- Examiner journaux : MFA exigé, satisfait ou contourné.

**Point de vigilance :** Un MFA enregistré ne signifie pas qu’il est imposé à chaque accès.

**Rappel actif :** Quelles preuves permettent de mesurer la couverture réelle du MFA ?

**Source :** Seance_7.pdf, p. 10

### Compte dormant et compte orphelin

Dormance décrit une absence d’activité observée ; orphelin décrit une absence de rattachement légitime.

- Le seuil de dormance doit être défini pour l’analyse.
- Examiner la dernière connexion avec ses limites de réplication.
- Distinguer comptes humains, services, techniques et secours.
- Avant de désactiver, confirmer dépendances, propriétaire et criticité.

**Point de vigilance :** Une date ancienne ou absente ne prouve pas une absence totale d’usage.

**Rappel actif :** Que faut-il vérifier avant de proposer la désactivation d’un compte dormant ?

**Source :** Seance_7.pdf, p. 11

### Comptes de service

L’audit doit relier le compte à ses usages, ses droits, ses secrets et son propriétaire.

- Inventorier machines, applications, usages et propriétaires.
- Vérifier permissions minimales et absence d’interactivité inutile.
- Contrôler stockage, rotation et protection des secrets.
- Le cours recommande gMSA lorsque adapté à Windows et demande de rechercher les comptes partagés ou non suivis.

**Point de vigilance :** Un compte technique sans propriétaire n’est pas dispensé de justification ; le support ne détaille pas le fonctionnement de gMSA.

**Rappel actif :** Quels éléments examiner sur un compte de service privilégié ?

**Source :** Seance_7.pdf, p. 12

### Conflits de séparation des rôles

Le cumul de fonctions incompatibles doit être identifié et accompagné de contrôles compensatoires.

- Créer un utilisateur et approuver soi-même ses droits.
- Développer puis déployer seul en production ; initier puis valider un paiement.
- Administrer les journaux et contrôler seul leur intégrité.
- Formaliser une matrice de conflits et les compensations.

**Point de vigilance :** La seule présence de deux intitulés de poste ne prouve pas une séparation réelle des opérations.

**Rappel actif :** Citer deux conflits SoD et expliquer ce qu’il faut documenter.

**Source :** Seance_7.pdf, p. 13

### Revues périodiques et recertification

Une revue n’est efficace que si ses décisions sont effectivement exécutées.

- Définir population, périodicité et propriétaires responsables.
- Donner aux réviseurs les droits effectifs et le contexte métier.
- Tracer décisions : maintenir, réduire, supprimer, investiguer.
- Vérifier l’exécution des révocations et mesurer couverture, retards, décisions sans justification et exceptions.

**Point de vigilance :** Un compte rendu de revue sans preuve des suppressions ne démontre pas la clôture des actions.

**Rappel actif :** Quelles pièces prouvent qu’une revue a produit un retrait effectif ?

**Source :** Seance_7.pdf, p. 14

### Audit des délégations AD

Les capacités d’administration peuvent se trouver dans des permissions déléguées moins visibles.

- Examiner les permissions sur OU et objets sensibles.
- Identifier qui peut réinitialiser des mots de passe.
- Analyser modification des groupes ou GPO critiques et privilèges des comptes de service.
- Prioriser les chemins d’administration non évidents.

**Point de vigilance :** Contrôler seulement les groupes les plus connus ne couvre pas toutes les délégations.

**Rappel actif :** Quelles capacités sensibles rechercher au-delà des groupes classiques ?

**Source :** Seance_7.pdf, p. 15

### Échantillonnage IAM orienté risque

La sélection doit couvrir les populations où les conséquences d’un écart sont importantes.

- Examiner tous les comptes hautement privilégiés si le volume est raisonnable.
- Inclure départs récents, prestataires et mobilités sensibles.
- Inclure comptes au-delà du seuil d’inactivité et sans propriétaire.
- Inclure services à privilèges ou secrets non gérés ; documenter population, exclusions et sélection.

**Point de vigilance :** Une sélection orientée risque n’est pas une preuve de représentativité statistique de tous les comptes.

**Rappel actif :** Quelles populations justifient une attention prioritaire ?

**Source :** Seance_7.pdf, p. 16

### Reconnaître les quatre commandes du cours

Les exemples PowerShell sont des tests AD en lecture seule, sous conditions d’accès et de périmètre.

- Get-ADUser avec -Filter * et -Properties Enabled,LastLogonDate : demander les utilisateurs et propriétés citées.
- Get-ADGroupMember avec Domain Admins et -Recursive : examiner les membres avec l’imbrication visée par l’option.
- Get-ADUser avec -Identity utilisateur et -Properties MemberOf : examiner les informations d’appartenance demandées pour ce compte.
- Get-ADDefaultDomainPasswordPolicy : consulter la politique de mot de passe par défaut du domaine.

**Point de vigilance :** Il faut module AD, droits appropriés et validation du périmètre. Le site ne lance aucune commande.

**Rappel actif :** Associer chaque commande à son objet sans écrire une commande de mémoire.

**Source :** Seance_7.pdf, p. 17

### Les limites des exports AD

Les exports sont des éléments à contextualiser et à recouper, pas des conclusions automatiques.

- LastLogonDate est une approximation et non une preuve d’absence totale d’usage.
- Un groupe imbriqué peut fournir des droits invisibles au premier niveau.
- Des comptes hybrides peuvent conserver des accès dans plusieurs annuaires.
- Minimiser et protéger les exports sensibles ; confronter tickets, propriétaires et journaux.

**Point de vigilance :** Un export AD isolé n’établit pas l’état de tous les accès VPN, cloud et applicatifs.

**Rappel actif :** Pourquoi croiser un export avec des journaux et des données RH ?

**Source :** Seance_7.pdf, p. 18

### Les journaux utiles à IAM

Les journaux montrent les événements à comparer aux approbations attendues.

- Connexions réussies ou échouées, avec contexte et système cible.
- Ajout/retrait de membres de groupes privilégiés.
- Création, désactivation et modification de comptes.
- Changements MFA et accès conditionnel ; comparer événements observés au processus d’approbation.

**Point de vigilance :** Le support ne donne pas de numéros d’événement : ils ne sont pas ajoutés comme connaissances exigées ici.

**Rappel actif :** Quelles familles d’événements examiner pour vérifier la traçabilité IAM ?

**Source :** Seance_7.pdf, p. 19

### Matrice de tests IAM

Chaque contrôle combine un critère explicite avec plusieurs sources complémentaires.

- Départs : règle de révocation → RH + AD/VPN → délais et exceptions.
- Privilèges : liste autorisée → groupes AD → membres et justification.
- MFA : politique → paramètres + journaux → couverture réelle.
- Dormance : seuil interne → activité + propriétaire → cas à confirmer ; revue : procédure → décisions + tickets → suppressions exécutées.

**Point de vigilance :** Ne pas confondre le seuil interne de dormance avec un délai universel non fourni par le cours.

**Rappel actif :** Construire une ligne de test pour MFA, privilèges ou recertification.

**Source :** Seance_7.pdf, p. 20

### NeoCare : atelier IAM et constat conditionnel

L’atelier demande des tests précis et des conclusions proportionnées aux preuves disponibles.

- Le scénario mentionne 12 départs, un prestataire avec accès distant, trois administrateurs utilisant leur compte habituel, des exclusions MFA mal documentées et une revue sans preuve de clôture.
- La correction propose 15 comptes : 5 départs, 3 privilégiés, 3 prestataires, 2 dormants et 2 services.
- Grille : identité, droits effectifs, propriétaire, décision, preuve de retrait.
- Exemple conditionnel : si l’accès distant d’un prestataire reste actif sans justification après la fin approuvée, confirmer l’écart par contrat, ticket, expiration et logs VPN.

**Point de vigilance :** Les chiffres et faits du scénario sont pédagogiques ; aucun résultat fictif ne doit être présenté comme preuve réelle.

**Rappel actif :** Quels six tests proposer et quelles cinq colonnes utiliser pour la revue ?

**Source :** Seance_7.pdf, p. 21, 22, 23, 24

## Repères & précautions

### Périmètre exact : sept séances et un mini-cas

Le cours annonce 15 séances, mais seuls les supports des séances 1 à 7 ont été fournis. Cette application couvre ces sept séances et le mini-cas NeoCare de quatre pages. Elle ne prétend pas couvrir les séances suivantes ni un programme d’examen confirmé.

Sources : S1, p. 1, S7, p. 26, Mini-cas, p. 1

### Les pages citées suivent le fichier PDF

S1–S7 renvoient au numéro réel de page dans chaque PDF. Certaines pages de la séance 4 affichent deux paginations différentes. Le lecteur intégré conserve l’image originale ; les références du site ne suivent pas les pieds de page contradictoires.

Sources : S4, p. 3, S4, p. 22

### Signal, hypothèse et non-conformité démontrée

Le mini-cas présente des signaux à investiguer. Les ateliers utilisent aussi des situations et chiffres fictifs. Les réponses proposées emploient des formulations conditionnelles tant que les preuves nécessaires n’ont pas été vérifiées. Aucun audit réel de NeoCare n’a été effectué.

Sources : Mini-cas, p. 2, S4, p. 20, S6, p. 26, S7, p. 22

### Le mini-cas autonome et les ateliers n’ont pas les mêmes contraintes

Le mini-cas autonome demande un cadrage de 3 à 5 pages, comporte 7 questions notées et une réflexion, pour 45 à 60 minutes en groupe. L’atelier S3 demande un plan d’une page et donne 10 jours ouvrés, 2 auditeurs et un expert disponible 2 jours. Les contraintes S3 ne sont pas attribuées silencieusement au mini-cas autonome.

Sources : Mini-cas, p. 1, Mini-cas, p. 3, S3, p. 18, S3, p. 19

### Délais et tailles d’échantillons : exemples, pas règles universelles

Le retrait sous 24 h et les « 2 comptes sur 15 » sont un exemple pédagogique de la séance 4 ; le second chiffre est explicitement fictif. Les 15 comptes de l’atelier S7 suivent une sélection indicative. Pour un autre cas, établir le critère interne, la population et la justification avant de choisir le délai ou l’échantillon.

Sources : S4, p. 13, S4, p. 20, S7, p. 23

### Référentiels : versions et repères selon les supports

La séance 5 cite ISO/IEC 27001:2022, 27002:2022 et ISO 19011:2018. Les nombres de l’Annexe A et les repères de clauses sont repris selon cette présentation. Le support mentionne notamment « 10.2 Correctifs » dans sa matrice : cette notation est conservée comme repère du cours, sans prétendre vérifier le texte normatif. Aucune mise à jour externe des normes n’est intégrée.

Sources : S5, p. 4, S5, p. 11, S5, p. 18, S5, p. 21

### Des repères de posture différents selon la séance

S1 donne six repères introductifs : intégrité, objectivité, indépendance, confidentialité, compétence et preuves. S2 énumère sept principes d’ISO 19011, dont présentation impartiale, diligence professionnelle et approche fondée sur les risques. Les questions précisent la séance quand elles demandent la liste.

Sources : S1, p. 14, S2, p. 7

### PCI DSS n’est pas automatiquement applicable à NeoCare

Le cours le présente pour un périmètre qui stocke, traite ou transmet des données de cartes de paiement. Le mini-cas mentionne des informations financières et contractuelles mais ne décrit pas explicitement de données de cartes. La sélection de PCI DSS nécessiterait donc une clarification du périmètre.

Sources : S2, p. 12, Mini-cas, p. 1

### Sigles cités sans développement détaillé

BIA, RTO/RPO, PCA/PRA, PAM ou gMSA apparaissent dans les supports à un niveau de synthèse. Le site conserve leur rôle tel que présenté, sans ajouter de cours externe ni poser des questions exigeant un mécanisme détaillé absent des documents. Les supports ne donnent pas non plus de numéros d’événements Windows à mémoriser.

Sources : S6, p. 18, S6, p. 19, S7, p. 9, S7, p. 12, S7, p. 19

### Corrections guidées et réponses proposées sont distinguées

Les ateliers des séances possèdent des corrections indicatives que les réponses reformulent et développent en restant dans les supports. Le mini-cas autonome ne contient pas de corrigé : sa résolution est une proposition pédagogique, pas la réponse officielle de l’enseignante. Les examens blancs sont entièrement créés pour cet entraînement.

Sources : S1, p. 23, S2, p. 16, S3, p. 21, S4, p. 19, S5, p. 21, S6, p. 25, S7, p. 23, Mini-cas, p. 3

### Pas de manipulation des systèmes dans cet espace

Les quatre commandes PowerShell servent à la lecture et à l’interprétation. Le site n’exécute aucune commande, ne se connecte à aucun annuaire et ne produit pas de preuve réelle. La partie pratique reste distincte de la théorie et du protocole d’audit proposé.

Sources : S7, p. 17, S4, p. 17, Mini-cas, p. 2
