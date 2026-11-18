# NeoCare & ateliers — réponses proposées

Les huit fichiers fournis constituent la base. Les réponses au mini-cas autonome sont proposées et non officielles. Les ateliers reprennent les pistes de correction des séances en les développant. Aucun audit réel n’a été réalisé.

## Mini-cas NeoCare · cadrer la mission

Énoncé fourni : NeoCare développe et exploite des solutions numériques pour la santé, avec 250 collaborateurs, AD, Microsoft 365, VPN, réseaux collaborateurs/visiteurs, DMZ, serveurs Windows/Linux, application Web, cloud, sauvegardes et journaux. Cinq signaux concernent accès, segmentation, correctifs, tests de sécurité applicative et exploitation des logs. Il faut préparer la mission, sans pentest ni exécution d’outils. Livrable : cadrage de 3 à 5 pages. Les réponses ci-dessous sont proposées, non officielles.

### Question 1 — Formuler trois objectifs précis et vérifiables. Barème fourni : 3 points.

Évaluer le retrait des accès ; vérifier la segmentation ; évaluer la maîtrise des vulnérabilités et la traçabilité des services exposés.

- Objectif 1 : évaluer l’efficacité de la révocation des accès des sortants dans AD, Microsoft 365, VPN et les applications concernées, en rapprochant événements RH, tickets et états techniques sur une période à valider.
- Objectif 2 : vérifier que les flux entre visiteurs, collaborateurs, DMZ et serveurs sensibles respectent les règles de segmentation approuvées, à partir de schémas, configurations et vérifications autorisées.
- Objectif 3 : vérifier que les correctifs reportés et les tests de sécurité de l’application exposée sont suivis selon les règles retenues, et que les événements nécessaires sont centralisés, conservés et exploités conformément aux critères définis.
- À expliciter dans la copie : ces objectifs ne promettent pas une sécurité totale. Les délais, période et exigences précises doivent être validés ; ils ne sont pas inventés comme des faits déjà connus.

Sources : Mini-cas, p. 2, S3, p. 6, S3, p. 21, S7, p. 20

### Question 2 — Définir inclusions, exclusions et limites, puis les justifier. Barème : 3 points.

Inclure les composants et processus des cinq préoccupations ; borner les systèmes tiers et les tests susceptibles de perturber la production.

- Inclus proposés : gestion RH–IAM, AD/M365/VPN et droits applicatifs ; réseau, Wi-Fi, DMZ et règles de filtrage ; serveurs Windows/Linux et processus de correctifs ; application Web ; journaux, supervision et interfaces avec le cloud.
- Inclure aussi les documents de gouvernance, responsabilités, contrats et preuves nécessaires pour juger ces domaines. Les sauvegardes peuvent être examinées comme dépendance et mesure de maîtrise de la mission.
- Exclusions proposées à faire approuver : systèmes clients non administrés par NeoCare, infrastructure interne du prestataire hors mandat, tests destructifs, interruption volontaire et exploitation intrusive non explicitement autorisée.
- Limiter la collecte des données médicales et identifiantes au nécessaire ; définir période d’observation, fenêtres, contacts et arrêt. Le mini-cas ne fixe pas un calendrier de 10 jours : cette contrainte appartient à l’atelier S3.
- Justification : confidentialité, intégrité, disponibilité, accès distants et exposition Internet orientent le périmètre. Une exclusion n’annule pas l’examen des responsabilités et dépendances.

Sources : Mini-cas, p. 1, Mini-cas, p. 2, S3, p. 7, S3, p. 8, S4, p. 16

### Question 3 — Choisir cinq domaines prioritaires et les points à examiner. Barème : 3 points.

Accès ; réseau/segmentation ; vulnérabilités/correctifs ; sécurité applicative ; journalisation/supervision.

- Accès : comptes des sortants, propriétaires, droits, sessions VPN, tickets de retrait et délais de la procédure.
- Réseau : cohérence des schémas, séparation collaborateurs/visiteurs/serveurs sensibles, exposition DMZ, règles et flux autorisés.
- Vulnérabilités : inventaire des serveurs, reports de correctifs, justification, décisions, état réel et qualification des résultats techniques.
- Application : exigences retenues, preuves des tests de sécurité, suivi des anomalies et vérifications autorisées sur le périmètre métier exposé.
- Journaux : sources attendues, centralisation, conservation, alertes, exploitation et capacité à relier événements et actions. Ces axes correspondent aux cinq signaux de l’énoncé, pas à des écarts déjà démontrés.

Sources : Mini-cas, p. 2, S3, p. 16, S1, p. 8, S1, p. 18

### Question 4 — Choisir les références et distinguer méthode, critères et tests. Barème : 3 points.

ISO 19011 pour la conduite ; politiques/27001/27002/CIS selon le besoin pour les critères ; NIST SP 800-115 pour organiser les tests.

- Méthode d’audit : ISO 19011 structure préparation, conduite, principes, équipe et restitution.
- Exigences : politiques internes et engagements pertinents ; 27001 si les exigences du SMSI font partie du mandat. Ne pas présenter automatiquement cette mission comme un audit de certification.
- Mesures et critères : 27002 et CIS Controls pour sélectionner des contrôles ; CIS Benchmarks pour confronter paramètres de durcissement attendus et observés.
- Tests : NIST SP 800-115 organise les vérifications techniques. Un scanner ou Wireshark est un moyen de collecte, pas le critère.
- PCI DSS n’est pas imposé sur la seule présence d’informations financières : le périmètre de données de cartes n’est pas établi dans l’énoncé. Ne pas ajouter d’exigence légale précise ou de numéro de contrôle absent des supports.

Sources : Mini-cas, p. 3, S2, p. 3, S2, p. 9, S2, p. 11, S2, p. 12, S3, p. 9

### Question 5 — Demander six documents ou ensembles de preuves et expliquer leur utilité. Barème : 3 points.

Demander six ensembles traçables qui couvrent règles, périmètre, accès, réseau, vulnérabilités/application et journaux.

- 1. Politiques et procédures applicables : déterminer critères d’accès, segmentation, correctifs et journalisation, versions et approbations.
- 2. Inventaires et schémas : vérifier composants, propriétaires, dépendances et réalité du périmètre technique.
- 3. Départs RH, tickets et exports AD/M365/VPN : rapprocher personnes, dates et états techniques pour tester le retrait des accès.
- 4. Configurations et règles réseau : confronter les flux effectivement autorisés à la segmentation attendue.
- 5. Dossiers de correctifs, reports, tests de sécurité applicative et suivi des anomalies : vérifier décisions et exécution sur les systèmes exposés.
- 6. Politique de logs, sources configurées, journaux et alertes représentatifs : vérifier centralisation, conservation et exploitation. Présenter ces six ensembles comme demandes à adapter, pas comme pièces déjà reçues.

Sources : Mini-cas, p. 3, S3, p. 12, S3, p. 16, S4, p. 15, S7, p. 20

### Question 6 — Proposer trois vérifications avec objectif, composant, méthode et preuve attendue. Barème : 3 points.

Revue des accès sortants ; revue de segmentation ; évaluation technique autorisée des systèmes exposés avec analyse de leurs traces.

- Test 1 — Révocation : sur l’échantillon de départs autorisé, comparer dates RH, tickets, états AD/M365 et VPN. Méthode : revue documentaire et consultation/export en lecture. Preuve : tableau horodaté des écarts éventuels au délai prévu, avec exceptions et références.
- Test 2 — Segmentation : comparer schémas et règles des réseaux collaborateurs, visiteurs et serveurs sensibles ; utiliser une observation réseau ou une vérification non destructive prévue au plan. Preuve : matrice de flux attendus/observés et références des configurations, sans accès inutile aux données médicales.
- Test 3 — Vulnérabilités : réaliser, seulement dans le cadre autorisé, un scan non destructif des composants sélectionnés, puis valider les résultats avec versions, correctifs et dossiers d’anomalies. Nessus/OpenVAS peuvent assister cette collecte. Examiner les journaux associés au besoin.
- Les trois tests sont des propositions de protocole, pas des opérations déjà réalisées. Les paramètres, outils, dates, échantillons, conditions d’arrêt et limitations doivent être documentés. Un résultat automatique ne devient pas une anomalie confirmée sans analyse.

Sources : Mini-cas, p. 3, S1, p. 18, S3, p. 11, S3, p. 21, S4, p. 12, S7, p. 17

### Question 7 — Décrire les livrables finaux et leur utilité. Barème : 2 points.

Plan d’audit ; feuilles de travail/preuves ; constatations priorisées ; rapport exécutif et technique ; plan d’actions et suivi.

- Le plan et le cadrage explicitent objectifs, périmètre, exclusions, critères, méthodes, équipe, planning et autorisations.
- Les feuilles de travail et références de preuves rendent les résultats traçables et reproductibles, avec exceptions et limites.
- Le rapport donne à la direction une synthèse des priorités et aux responsables techniques le détail critère–condition–preuve–risque–recommandation.
- Le plan d’actions précise responsables, échéances et modalités de vérification ; le suivi contrôle réalisation et efficacité. Un constat non démontré doit rester présenté comme une piste à vérifier.

Sources : Mini-cas, p. 3, S1, p. 19, S1, p. 23, S4, p. 15, S5, p. 22, S6, p. 28

### Réflexion — « Pare-feu + antivirus + sauvegarde : notre SI est donc sécurisé. » Comment répondre ?

L’existence d’une mesure ne démontre ni son adaptation, ni son application, ni son efficacité.

- Commencer par reconnaître ces moyens, puis demander quelles exigences ils doivent satisfaire et sur quel périmètre.
- Pour le pare-feu : examiner règles, flux et segmentation attendus/observés. Pour les autres protections : demander preuves de fonctionnement et suivi adaptées au mandat, sans présumer leur efficacité.
- Pour la sauvegarde : demander des comptes rendus de restauration/reprise et confronter les résultats aux objectifs métier validés. Une copie disponible ne démontre pas la capacité de reprendre.
- Conclure seulement sur des critères explicites, preuves vérifiables et limites documentées. Les outils sont des moyens, pas une garantie de sécurité totale. Cette question est hors du barème détaillé de 20 points des sept rubriques.

Sources : Mini-cas, p. 4, S1, p. 18, S5, p. 16, S6, p. 18, S6, p. 19

## Atelier séance 2 · choisir un référentiel

Cinq situations de la séance 2. Consigne du support : choisir le ou les référentiels et justifier en une phrase. Les réponses reprennent la correction guidée, en explicitant les rôles.

### A — Audit interne du SMSI avant certification.

ISO/IEC 27001 + ISO 19011.

- 27001 fournit les exigences du SMSI à examiner.
- 19011 structure la conduite de la mission.

Sources : S2, p. 16, S2, p. 8

### B — Vérification du durcissement de serveurs Linux.

CIS Benchmarks.

- Ils fournissent des critères de configuration sécurisée.
- Comparer les paramètres attendus à la configuration observée.

Sources : S2, p. 11, S2, p. 16

### C — Tests techniques d’une infrastructure exposée.

NIST SP 800-115 + critères de sécurité.

- Le guide structure les vérifications techniques.
- Les critères doivent préciser les exigences à évaluer ; la méthode de test ne les remplace pas.

Sources : S2, p. 10, S2, p. 16

### D — Audit d’un environnement de paiement.

PCI DSS + ISO 19011.

- PCI DSS apporte la conformité sectorielle pour le périmètre pertinent.
- 19011 organise la mission ; préciser les preuves attendues et les limites.

Sources : S2, p. 12, S2, p. 16

### E — Préparation et conduite globale d’une mission.

ISO 19011.

- Son rôle concerne principes, programme, préparation, conduite et compétences.
- Le contenu technique de sécurité est sélectionné avec d’autres critères selon l’objet.

Sources : S2, p. 6, S2, p. 16

## Atelier séance 3 · plan d’audit d’une page

Contraintes du support : 10 jours ouvrés ; 2 auditeurs ; 1 spécialiste externe disponible 2 jours ; application en production 24 h/24 ; aucun test intrusif sans autorisation écrite ; rapport exécutif et actions priorisées. Les éléments de calendrier ci-dessous sont une proposition d’organisation, pas un planning donné par l’enseignante.

### Définir trois objectifs et un périmètre réaliste.

Cibler accès sortants, segmentation et maîtrise des vulnérabilités.

- Reprendre les objectifs de la correction S3 et les formuler comme résultats à vérifier.
- Inclure AD/M365/VPN, réseau, serveurs, application et logs.
- Proposer et faire approuver les limites sur systèmes clients non administrés, infrastructure interne du fournisseur et tests destructifs.

Sources : S3, p. 6, S3, p. 8, S3, p. 21

### Choisir quatre critères ou ensembles de critères et expliquer les méthodes associées.

Politiques internes ; exigences 27001 pertinentes ; mesures 27002 ; critères CIS adaptés.

- Préciser pour chaque critère l’attendu vérifiable, pas seulement le nom d’une norme.
- 19011 cadre la méthode d’audit ; NIST SP 800-115 structure les tests, sans les confondre avec les quatre ensembles de critères.

Sources : S3, p. 9, S3, p. 18, S3, p. 21

### Définir cinq preuves et trois vérifications.

Inventaire ; schémas/règles ; habilitations ; tickets ; journaux.

- Test 1 : rapprocher RH/tickets et états AD/M365/VPN sur des départs sélectionnés.
- Test 2 : revoir schéma, flux et ACL de segmentation.
- Test 3 : scan non destructif autorisé, suivi d’une validation contextualisée des résultats.
- Chaque ligne doit préciser objectif, critère, preuve, méthode et limites.

Sources : S3, p. 16, S3, p. 18, S3, p. 21

### Répartir l’équipe et proposer un calendrier sur 10 jours ouvrés.

Proposition : préparation J1–J2 ; collecte/vérifications J3–J6 ; analyse J7–J8 ; restitution/rapport J9–J10.

- Un auditeur coordonne gouvernance et preuves ; l’autre couvre les vérifications techniques, selon leurs compétences réelles.
- Positionner les deux jours de l’expert sur les sujets nécessitant sa compétence et sur des créneaux validés, par exemple J4–J5 : ce choix est une hypothèse d’organisation.
- Prévoir revues quotidiennes des preuves et validation factuelle avant restitution. Aucun test ne doit interrompre la production 24 h/24 sans cadre explicite.

Sources : S3, p. 13, S3, p. 14, S3, p. 19

### Présenter deux risques de mission et leurs mesures.

Indisponibilité de production ; fuite de données lors de la collecte.

- Pour l’indisponibilité : fenêtres validées, tests non destructifs, sauvegarde/retour arrière, contacts et arrêt.
- Pour la fuite : collecte minimale, canal sécurisé, droits d’accès, protection et règles de conservation/suppression.

Sources : S3, p. 11, S4, p. 16

### Assembler le plan en six rubriques.

Contexte/mandat/objectifs ; périmètre/exclusions/critères ; méthodes ; équipe/planning ; risques/communication ; livrables/confidentialité.

- La page doit rester synthétique mais justifier les priorités.
- Prévoir autorisations, escalade, exceptions et interlocuteurs.
- Ne pas promettre une sécurité garantie ; indiquer comment le rapport et le plan d’actions seront remis.

Sources : S3, p. 15, S3, p. 17, S3, p. 22

## Atelier séance 4 · protocole de preuve

Signal donné : certains comptes d’anciens salariés seraient encore actifs. Objectif : vérifier l’efficacité de la révocation. L’atelier demande un protocole sans accès réel aux systèmes. La correction du support est indicative.

### Formuler deux critères précis.

Retrait des accès dans le délai prévu ; absence de session VPN active après départ selon le critère retenu.

- Établir le délai à partir de la procédure effectivement applicable.
- Ne pas importer automatiquement le délai de 24 h du mini-exemple comme une règle universelle.

Sources : S4, p. 19, S4, p. 20

### Demander six preuves et expliquer leur usage.

Procédure ; registre RH ; tickets ; export AD ; export M365 ; journaux VPN.

- La procédure fournit le critère, le registre RH l’événement et la date.
- Les tickets tracent le traitement ; les exports montrent les états à une date donnée.
- Les journaux VPN éclairent l’usage et les sessions ; les preuves doivent être croisées.

Sources : S4, p. 13, S4, p. 19

### Préparer quatre questions d’entretien ouvertes.

Comment le départ est-il notifié ? Qui valide ? Dans quel délai agit-on ? Comment gère-t-on les exceptions ?

- Demander des exemples récents et les pièces associées.
- Reformuler et faire confirmer les faits importants.
- Éviter une question qui impose d’avance la réponse « tout est correct ».

Sources : S4, p. 8, S4, p. 9, S4, p. 19

### Choisir un échantillon et en justifier les limites.

Départs récents, comptes privilégiés et utilisateurs VPN, à partir d’une population définie.

- Documenter période, population, méthode et taille retenue.
- Prioriser les risques et étendre les travaux si des exceptions le justifient.
- Ne pas présenter une sélection non statistique comme représentative à un taux exact de toute l’entreprise.

Sources : S4, p. 11, S4, p. 19

### Proposer deux vérifications non destructives.

Comparer dates de départ/désactivation ; vérifier états des comptes, groupes et sessions concernées.

- Test 1 : rapprocher chronologie RH, tickets et horodatages techniques au critère de délai.
- Test 2 : examiner en lecture les comptes et appartenances puis confronter l’accès VPN aux journaux.
- Conserver paramètres, date, contexte, outil et références des preuves.

Sources : S4, p. 12, S4, p. 15, S4, p. 19

### Rédiger un constat hypothétique sans résultat inventé.

« Si des accès restent actifs au-delà du délai prévu sans exception approuvée, l’efficacité de la révocation serait à remettre en cause. »

- Indiquer les pièces et l’échantillon à vérifier avant confirmation.
- Risque plausible : maintien d’un accès non autorisé.
- Action proposée : fiabiliser notification RH–IT et traitement des exceptions, puis vérifier l’efficacité sur de nouveaux dossiers.
- Les valeurs X comptes sur Y restent des champs à renseigner après collecte, pas des résultats simulés à présenter comme vrais.

Sources : S4, p. 19, S4, p. 20

## Atelier séance 5 · SoA et fonctionnement réel

Le support donne une procédure de départ existante, des anciens comptes qui seraient actifs, une SoA déclarant le contrôle d’accès mis en œuvre et aucune vérification récente d’efficacité documentée. Il s’agit de préparer des preuves, des tests et un constat conditionnel.

### Sélectionner quatre exigences pertinentes selon la correction du support.

Repères cités : 6.1.3, 8.1, 9.1 et 10.2 selon le périmètre audité.

- Relier traitement des risques/SoA, fonctionnement, surveillance et amélioration au scénario.
- Les numéros sont ceux du support ; la séance ne fournit pas le texte normatif complet.
- Pour la rédaction, expliquer le critère attendu au lieu de se limiter à quatre numéros.

Sources : S5, p. 21, S5, p. 8, S5, p. 13, S5, p. 14, S5, p. 15

### Identifier cinq preuves à collecter.

SoA ; procédure de départ ; liste RH ; tickets IT ; états AD/VPN.

- La SoA indique la déclaration de mise en œuvre.
- La procédure fournit l’attendu ; RH, tickets et états techniques permettent la comparaison.
- Selon le périmètre, compléter par M365 et journaux sans prétendre que ces pièces sont déjà disponibles.

Sources : S5, p. 21, S5, p. 16

### Proposer trois vérifications non destructives et autorisées.

Comparer les dates ; contrôler les exceptions ; confronter états techniques et déclaration de mise en œuvre.

- Vérifier les délais à partir d’un échantillon justifié.
- Examiner justification, approbation et durée des exceptions.
- Vérifier la cohérence de la SoA sur les contrôles sélectionnés et la présence de mesures d’efficacité.

Sources : S5, p. 20, S5, p. 21, S4, p. 12

### Expliquer comment tester la cohérence de la SoA.

Suivre risques → contrôles choisis → SoA → procédures → résultats sur le terrain.

- Examiner justification d’inclusion/exclusion et état de mise en œuvre.
- Comparer les contrôles nécessaires à l’Annexe A pour rechercher les omissions.
- Vérifier le résultat réel d’un contrôle déclaré mis en œuvre, sans confondre document et efficacité.

Sources : S5, p. 9, S5, p. 10, S5, p. 16

### Rédiger un constat conditionnel.

« Si des accès restent actifs contrairement à la règle et à la déclaration de mise en œuvre, un écart entre SoA, procédure et terrain serait à confirmer. »

- Rattacher critère explicite, condition à vérifier, preuves, échantillon et risque.
- Ne pas affirmer qu’un ancien compte a été utilisé ni qu’une donnée a été divulguée sans preuve.
- La proposition conserve le caractère conditionnel demandé par l’exercice.

Sources : S5, p. 20, S5, p. 21, S5, p. 22

### Proposer une action corrective et un indicateur.

Fiabiliser/automatiser le traitement des départs et suivre le respect du délai.

- La correction suggère automatisation, gestion des exceptions et mesure des délais.
- Indicateur proposé : part des départs examinés avec tous les accès concernés retirés dans le délai prévu ; définir population et règle de calcul avant mesure.
- Ajouter responsable, échéance et vérification de l’efficacité ; aucune valeur chiffrée de performance n’est disponible dans le scénario.

Sources : S5, p. 21, S5, p. 15, S6, p. 28

## Atelier séance 6 · gouvernance et résilience

Scénario fictif : politique âgée de trois ans sans preuve de rediffusion, inventaire incomplet, sortie d’un prestataire sans revue formalisée, exercice de reprise échoué et sensibilisation suivie seulement par présence. La correction demande des conclusions conditionnelles jusqu’à vérification.

### Identifier six risques organisationnels possibles.

Règles mal comprises ; actifs non maîtrisés ; responsabilités floues ; accès tiers persistants ; reprise insuffisante ; sensibilisation inefficace.

- Les risques sont des conséquences possibles des signaux, pas des incidents démontrés.
- Séparer, pour le fournisseur, défaut de propriétaire/suivi et maintien potentiel des accès.
- Relier chaque risque à un domaine et à une preuve à demander.

Sources : S6, p. 3, S6, p. 23, S6, p. 25

### Définir un critère et deux preuves pour quatre domaines.

Politiques ; actifs ; fournisseurs ; continuité.

- Politique : règle approuvée et diffusée → version approuvée + traces de diffusion/révision.
- Actifs : inventaire et propriétaires attendus → inventaire + rapprochement achats/cloud/postes.
- Fournisseurs : suivi défini → contrat/registre des tiers + revues et accès techniques.
- Continuité : objectifs validés et capacité testée → objectifs/plan + comptes rendus de reprise et suivi des écarts. Les critères doivent être confirmés au cadrage.

Sources : S6, p. 6, S6, p. 9, S6, p. 15, S6, p. 19

### Proposer un échantillon RH et fournisseurs.

Sélection orientée risque, justifiée par criticité et événements récents.

- RH : départs récents, profils privilégiés et prestataires.
- Fournisseurs : tiers critiques ou accédant aux données sensibles, dont la relation signalée.
- Définir population, exclusions et taille selon les volumes réellement disponibles ; le scénario ne les donne pas.

Sources : S6, p. 13, S6, p. 14, S4, p. 11

### Préparer trois questions d’entretien RSSI/métiers.

Comment les règles sont-elles rediffusées ? Qui possède les actifs/tiers ? Comment les écarts de reprise sont-ils suivis ?

- Demander des décisions et exemples récents, avec pièces associées.
- Faire expliquer la validation des priorités et objectifs métier de reprise.
- Ne pas induire qu’une politique de trois ans est forcément non conforme : rechercher changements, règles de révision et preuves.

Sources : S6, p. 5, S6, p. 7, S6, p. 19, S4, p. 8

### Formuler deux constats conditionnels et actions.

Un sur la maîtrise des actifs ; un sur la capacité de reprise.

- Actifs : si des composants sensibles sont absents de l’inventaire et sans propriétaire confirmé, la maîtrise du périmètre serait insuffisante. Action proposée : rapprochement des sources, attribution des propriétaires et contrôle des mises à jour.
- Continuité : si l’échec documenté n’est pas analysé et suivi d’une correction vérifiée, la capacité attendue reste non démontrée. Action : analyser causes/impact, traiter l’écart et refaire un test autorisé.
- Ne pas annoncer la résolution ni une exposition réelle sans les pièces correspondantes.

Sources : S6, p. 9, S6, p. 19, S6, p. 25, S6, p. 26

### Proposer quatre indicateurs pour la direction.

Propriété/classification des actifs ; clôture des accès tiers ; correction des écarts de reprise ; compréhension après sensibilisation.

- Définir pour chacun population, règle de calcul, responsable et fréquence avant de produire une valeur.
- Les métriques proposées prolongent les vérifications du cours, sans données chiffrées inventées.
- Ne pas limiter la sensibilisation à la présence ; compléter avec questionnaires, signalements et évolution des écarts.

Sources : S6, p. 21, S6, p. 22, S6, p. 28

## Atelier séance 7 · droits effectifs et revues

Scénario pédagogique : 12 départs sur le trimestre, accès distant conservé par un prestataire, trois administrateurs utilisant leur compte habituel pour des tâches élevées, exclusions MFA mal documentées et revue d’accès sans preuve de clôture. Aucun résultat fictif ne doit devenir une preuve réelle.

### Définir six tests IAM avec critères et sources.

Départs ; privilèges ; MFA ; dormance ; services ; recertification.

- Départs : règle de révocation → RH/tickets/AD/VPN → dates et exceptions.
- Privilèges : besoins et liste autorisée → groupes, imbrications, délégations et justifications.
- MFA : politique → configurations et logs → couverture réellement imposée.
- Dormance : seuil interne → activité/propriétaire → dépendances et cas à confirmer.
- Services : droits nécessaires → inventaire/usages/protection des secrets. Recertification : décisions → tickets/états → retraits réellement exécutés.

Sources : S7, p. 20, S7, p. 23, S7, p. 12

### Sélectionner 15 comptes et justifier.

Correction indicative : 5 départs + 3 privilégiés + 3 prestataires + 2 dormants + 2 services.

- Cette répartition est celle du support, pas un échantillon statistique universel.
- Justifier la sélection par exposition, sensibilité, changements de droits et propriétaires.
- Définir les identifiants sans double-compter un compte présent dans plusieurs catégories ; adapter la sélection au périmètre réel et documenter les limites.

Sources : S7, p. 16, S7, p. 23

### Établir deux conflits de séparation des rôles à rechercher.

Demande/approbation d’accès ; administration/revue indépendante.

- Reconstituer la décision et ses validations dans les tickets et habilitations.
- Examiner les contrôles compensatoires si la séparation organisationnelle n’est pas complète.
- Ne pas conclure à un conflit sur les seuls intitulés de postes sans vérifier les opérations.

Sources : S7, p. 13, S7, p. 23, S6, p. 8

### Construire une grille de revue des accès à cinq colonnes.

Identité ; droits effectifs ; propriétaire ; décision ; preuve de retrait.

- Cette grille reprend les cinq colonnes de la correction.
- Décisions possibles : maintenir, réduire, supprimer ou investiguer.
- La dernière colonne relie une décision de retrait à son exécution ; ne pas la remplir uniquement avec la date de la réunion.

Sources : S7, p. 14, S7, p. 23

### Rédiger deux constats conditionnels et recommandations.

Accès distant tiers non justifié ; privilèges utilisés sans séparation adaptée.

- Constat 1 proposé : si un accès prestataire demeure actif après sa fin approuvée sans justification, confirmer l’écart avec contrat, ticket, expiration et journaux. Action : expiration, validation du propriétaire et revue selon la règle retenue.
- Constat 2 proposé : si les règles exigent des comptes dédiés et que les usages privilégiés du compte habituel sont confirmés, documenter l’écart et ses traces. Action : séparer les comptes, revoir les habilitations et mesurer l’application.
- Les recommandations s’inspirent du cours ; les critères doivent être confirmés. Les nombres du scénario n’établissent ni une intrusion ni une fuite.

Sources : S7, p. 9, S7, p. 21, S7, p. 23, S7, p. 24
