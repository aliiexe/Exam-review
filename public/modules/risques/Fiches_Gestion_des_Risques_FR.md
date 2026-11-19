# Gestion des risques en cybersécurité
Pr. Nada MOUCHFIQ · cours 2026-2027
Fiches de révision proposées à partir du PDF fourni. Quiz non officiels.

## Du problème technique au risque cyber

### Reconstituer la chaîne du risque
Un scénario relie un actif, une menace, une vulnérabilité, une attaque, un incident et ses impacts.

- Actif : ce qui a de la valeur. Menace : cause potentielle d’un incident.
- L’incident est un événement ; l’impact est sa conséquence pour l’organisation.

Piège : Une faiblesse technique seule ne décrit pas encore toutes les conséquences métier.
Sources PDF : p. 2, p. 5, p. 6

### Identifier un actif
Un actif est un élément ayant de la valeur pour l’organisation et devant être protégé.

- Les données et les transactions sont des exemples d’actifs du scénario bancaire.
- Les actifs ne se limitent pas aux machines : des informations ou des processus ont aussi de la valeur.

Piège : Le nom de l’attaquant n’est pas un actif de l’organisation.
Sources PDF : p. 5, p. 9, p. 23

### Définir une menace
Une menace est une cause potentielle d’incident pouvant porter atteinte à un actif.

- Le cours distingue les origines humaines, naturelles ou techniques.
- Une menace peut être intentionnelle ou non ; elle n’est pas toujours un pirate.

Piège : La présence d’une menace ne prouve pas qu’un incident s’est produit.
Sources PDF : p. 5, p. 14, p. 15

### Reconnaître une vulnérabilité technique
Une vulnérabilité est une faiblesse exploitable d’un système ou de son environnement.

- Elle peut toucher logiciels, matériels et configurations.
- L’exploitation d’une faiblesse permet à une menace de produire des effets.

Piège : L’existence de la faiblesse ne signifie pas son exploitation effective.
Sources PDF : p. 16, p. 17

### Les faiblesses humaines et organisationnelles
Les comportements et les procédures peuvent créer des vulnérabilités autant que la technologie.

- Une formation insuffisante expose aux manipulations.
- Des responsabilités ou des politiques mal définies affaiblissent l’organisation.

Piège : Ajouter un outil ne corrige pas automatiquement un défaut de procédure.
Sources PDF : p. 18

### Vraisemblance et impact
Le niveau de risque dépend de la vraisemblance du scénario et de son impact.

- La vraisemblance exprime la possibilité de réalisation.
- L’impact décrit les conséquences ; les contraintes métier guident les priorités.

Piège : La formule fonctionnelle du cours ne fixe pas à elle seule une multiplication numérique universelle.
Sources PDF : p. 8, p. 19

### Les conditions d’une attaque
Le support associe l’attaque à une faiblesse exploitable, une menace capable et une opportunité.

- L’opportunité peut être un accès ou une fenêtre temporelle.
- Décrire ces conditions permet de comprendre un scénario.

Piège : Une liste de conditions n’est pas la preuve d’une attaque réussie.
Sources PDF : p. 20

### Attaque passive ou active
Une attaque passive observe les échanges ; une attaque active les modifie ou les perturbe.

- L’écoute vise notamment la confidentialité.
- La modification ou la destruction peut toucher intégrité ou disponibilité.

Piège : Le caractère discret d’une attaque ne suffit pas à la classer comme passive.
Sources PDF : p. 21

### Attaques réseau et applicatives
Le classement dépend de la cible et du mécanisme de l’attaque.

- Les attaques réseau ciblent les communications.
- Les attaques applicatives exploitent des faiblesses des applications.

Piège : Les catégories peuvent se recouper dans un même scénario.
Sources PDF : p. 22

### Analyser plusieurs objectifs compromis
Un même incident peut toucher confidentialité, intégrité et disponibilité.

- Des virements non autorisés posent une question d’intégrité.
- Un portail inaccessible touche la disponibilité ; la divulgation touche la confidentialité.

Piège : Le scénario bancaire ne permet pas d’affirmer une fuite sans élément correspondant.
Sources PDF : p. 2, p. 3, p. 4, p. 9

## Reconnaître les attaques et leurs effets

### La reconnaissance
La reconnaissance collecte des informations pour comprendre une cible et son exposition.

- Le support cite les informations personnelles et les adresses IP.
- La découverte de systèmes et services peut préparer d’autres actions.

Piège : Une information collectée ne prouve pas une compromission.
Sources PDF : p. 24, p. 25, p. 26

### L’ingénierie sociale
L’ingénierie sociale manipule une personne pour obtenir une information ou une action.

- Elle exploite les comportements, la confiance ou la curiosité.
- Les mesures de protection incluent la vigilance et des procédures adaptées.

Piège : La victime n’a pas nécessairement subi une exploitation logicielle.
Sources PDF : p. 27

### Le phishing
L’hameçonnage cherche à dérober des informations sensibles en trompant le destinataire.

- Les identifiants et données de paiement sont des cibles possibles.
- Un message trompeur peut déclencher une action dangereuse.

Piège : L’apparence familière d’un message ne démontre pas son authenticité.
Sources PDF : p. 28

### L’accès non autorisé
Une attaque d’accès tente d’obtenir ou de manipuler une ressource sans autorisation.

- L’accès peut concerner données, comptes ou systèmes.
- Il faut distinguer identité déclarée et droits effectivement accordés.

Piège : Une connexion réussie n’implique pas que toutes les actions soient autorisées.
Sources PDF : p. 29

### L’attaque par dictionnaire
Une attaque par dictionnaire essaie des candidats issus d’une liste de mots de passe possibles.

- Les candidats sont testés successivement.
- Des secrets prévisibles facilitent cette catégorie de tentative.

Piège : Une liste de candidats n’est pas une recherche exhaustive de toutes les combinaisons.
Sources PDF : p. 30

### L’interception MITM
Dans une attaque de l’homme du milieu, un intermédiaire se place entre deux correspondants.

- Il peut écouter ou modifier les échanges selon le scénario.
- Les pages suivantes illustrent usurpation et passage des flux par la machine intermédiaire.

Piège : Le nom MITM ne prouve pas à lui seul qu’une modification a eu lieu.
Sources PDF : p. 31, p. 32, p. 33

### L’usurpation d’expéditeur
L’e-mail spoofing falsifie l’apparence de l’origine d’un message.

- Le support illustre des messages malveillants semblant venir d’adresses existantes.
- L’adresse affichée doit être distinguée de l’identité vérifiée.

Piège : Reconnaître le nom affiché ne suffit pas à valider l’expéditeur.
Sources PDF : p. 32

### Le sniffing
Le sniffing consiste à observer ou analyser le trafic réseau.

- Dans un contexte d’attaque, il peut exposer des informations sensibles.
- Le chiffrement protège le contenu lorsqu’il est correctement mis en œuvre.

Piège : Analyser des paquets ne signifie pas toujours pouvoir lire leur contenu chiffré.
Sources PDF : p. 34, p. 35

### DoS et DDoS
Un déni de service cherche à rendre une machine, un réseau ou un service indisponible.

- La distribution des sources caractérise un DDoS.
- La conséquence directe porte sur l’accès au service.

Piège : Un DDoS ne démontre pas automatiquement le vol de données.
Sources PDF : p. 36

### Des menaces qui évoluent
La sécurité des réseaux doit suivre l’évolution des failles, des attaques et de l’organisation.

- Les politiques insuffisantes créent aussi des difficultés.
- La surveillance et l’adaptation complètent les protections initiales.

Piège : Une configuration sûre à une date donnée n’est pas une garantie permanente.
Sources PDF : p. 38, p. 39, p. 40

## Objectifs de sécurité et maîtrise des accès

### La confidentialité
La confidentialité limite l’accès aux informations aux entités autorisées.

- TLS illustre la protection des échanges dans le support.
- Le chiffrement des données stockées répond à un autre contexte d’exposition.

Piège : Protéger un canal ne protège pas automatiquement tous les stockages et terminaux.
Sources PDF : p. 41, p. 42, p. 43

### L’intégrité
L’intégrité protège l’exactitude des informations contre une altération non autorisée.

- Le destinataire veut recevoir un contenu non falsifié.
- Le support illustre la vérification de fichiers.

Piège : Un contenu intact n’est pas nécessairement confidentiel.
Sources PDF : p. 44, p. 45

### La disponibilité
Une ressource disponible reste accessible et utilisable à la demande des utilisateurs autorisés.

- Le support illustre un service bancaire en ligne.
- L’accès doit correspondre au besoin métier, pas seulement à une machine allumée.

Piège : Un serveur actif peut héberger une application inutilisable.
Sources PDF : p. 46, p. 47

### CIA : les objectifs
CIA rassemble confidentialité, intégrité et disponibilité.

- Ces propriétés expriment ce que la sécurité cherche à garantir.
- Une même mesure peut contribuer à plusieurs objectifs, avec des limites.

Piège : Une propriété de sécurité n’est pas le nom d’un outil.
Sources PDF : p. 48, p. 49, p. 61

### Authentifier une identité
L’authentification vérifie l’identité annoncée avant l’accès.

- Le support donne les exemples du mot de passe et du second facteur.
- Elle répond à la question : qui cherche à accéder ?

Piège : Authentifier quelqu’un ne définit pas tous ses droits.
Sources PDF : p. 50, p. 51, p. 52, p. 53

### Autoriser une action
L’autorisation détermine les ressources et actions permises à une identité.

- Elle intervient après l’authentification dans le déroulé du cours.
- Lire et modifier un fichier peuvent être deux droits distincts.

Piège : Un compte authentifié ne doit pas recevoir automatiquement tous les privilèges.
Sources PDF : p. 54, p. 55

### Accounting : tracer l’activité
La traçabilité enregistre les actions pour permettre leur suivi et leur examen.

- Les traces peuvent inclure accès, refus et opérations.
- Elles servent à l’analyse et à l’audit des activités.

Piège : La présence d’un journal n’atteste pas à elle seule que ses traces sont complètes et fiables.
Sources PDF : p. 56, p. 57

### La non-répudiation
La non-répudiation vise à empêcher qu’une partie nie une action ou un engagement.

- La signature d’un contrat électronique illustre le besoin dans le support.
- Le support rapproche ce besoin de la traçabilité.

Piège : Une simple ligne de journal n’est pas automatiquement une preuve suffisante de non-répudiation.
Sources PDF : p. 58, p. 59

### Distinguer CIA et AAA
CIA exprime des objectifs ; AAA organise des mécanismes de contrôle des accès et des traces.

- AAA : authentification, autorisation, accounting.
- Les deux modèles sont complémentaires.

Piège : La disponibilité n’est pas l’un des trois A du modèle AAA.
Sources PDF : p. 60, p. 61

### Relier cryptographie et objectifs
Le support relie chiffrement, contrôle d’intégrité et signatures aux besoins de sécurité.

- Le chiffrement protège la confidentialité selon son usage.
- Les mécanismes doivent être choisis en fonction de la propriété attendue.

Piège : Le chiffrement seul ne garantit pas toutes les propriétés de sécurité.
Sources PDF : p. 62, p. 63, p. 64

## Prioriser, traiter et suivre les risques

### Décider des priorités
La gestion des risques détermine où concentrer les efforts de sécurité.

- Elle relie vraisemblance, impacts et enjeux métier.
- La sécurité met en œuvre les protections ; les approches se complètent.

Piège : Le nombre de protections ne suffit pas à justifier une priorité.
Sources PDF : p. 65, p. 68

### Les limites des contrôles
Pare-feu, antivirus, chiffrement et MFA réduisent l’exposition sans supprimer toute possibilité d’incident.

- Les erreurs humaines et les dépendances fournisseurs persistent.
- Les logiciels et configurations évoluent.

Piège : Un contrôle déployé ne signifie pas risque nul.
Sources PDF : p. 66

### Partir des enjeux métier
L’analyse identifie les actifs essentiels et les conséquences de leur atteinte.

- Le cours inclut données, services, personnes, fournisseurs et confiance.
- Pour chaque actif, demander ce qui arriverait s’il était divulgué, modifié ou indisponible.

Piège : Se limiter au matériel oublie une partie de la valeur de l’organisation.
Sources PDF : p. 67, p. 69, p. 70

### Arbitrer avec des ressources limitées
Les ressources se répartissent selon la criticité des actifs et des scénarios.

- Le cours propose : actifs critiques, scénarios, probabilité et impact, traitement priorisé.
- Le temps, le budget et les compétences limitent les possibilités.

Piège : Traiter tous les actifs de façon identique ne reflète pas leurs enjeux.
Sources PDF : p. 71

### Éviter un risque
Éviter consiste à supprimer l’activité ou l’exposition à l’origine du risque.

- L’option porte sur le scénario identifié.
- La décision doit être justifiée, validée et réexaminée.

Piège : Ajouter un contrôle sans supprimer l’exposition relève plutôt de la réduction.
Sources PDF : p. 72

### Réduire un risque
Réduire consiste à agir sur le scénario par des mesures de sécurité.

- Les mesures peuvent réduire la possibilité de réalisation ou les conséquences.
- La décision s’inscrit dans un suivi.

Piège : Réduire ne signifie pas supprimer tout risque.
Sources PDF : p. 72

### Transférer et accepter
Transférer partage des conséquences avec un tiers ; accepter conserve un risque jugé tolérable.

- Ces options doivent être documentées et validées.
- Une acceptation fait l’objet d’un réexamen.

Piège : Le transfert ne rend pas l’incident impossible ; accepter n’est pas oublier le risque.
Sources PDF : p. 72

### Le cycle et le registre
Le cycle va du contexte à l’identification, l’analyse, l’évaluation, le traitement et la surveillance.

- Le registre rassemble les risques et leurs décisions.
- La surveillance et le réexamen assurent la continuité de la démarche.

Piège : La remise d’un registre n’est pas la fin définitive du travail.
Sources PDF : p. 73, p. 76

### ISO/IEC 27005 dans le cours
Le support présente ISO/IEC 27005 comme un cadre de gestion des risques lié au SMSI.

- Le processus structure identification, appréciation et traitement.
- La page 78 souligne l’intérêt d’une méthode concrète pour son application.

Piège : La fiche décrit le support ; elle ne reproduit pas le texte normatif ni une procédure de certification.
Sources PDF : p. 75, p. 76, p. 78

### Situer NIST et les thèmes annoncés
Le support cite le NIST CSF et NIST SP 800-30, puis annonce d’autres thèmes de gestion des risques.

- Les pages 77-78 présentent cinq fonctions CSF : identifier, protéger, détecter, répondre, récupérer.
- FAIR, continuité et cadre juridique marocain sont annoncés page 74 sans développement complet dans ce PDF.

Piège : Cette présentation à cinq fonctions est celle du support ; elle n’affirme pas décrire la version actuelle du CSF.
Sources PDF : p. 74, p. 77, p. 78

## Les fondements d’EBIOS Risk Manager

### La finalité d’EBIOS RM
EBIOS Risk Manager est présenté comme une méthode d’appréciation et de traitement du risque numérique.

- Le support l’attribue à l’ANSSI.
- Elle peut renforcer un processus de management des risques ou éclairer un projet.

Piège : La méthode n’est pas un logiciel de protection.
Sources PDF : p. 80, p. 81, p. 82

### Les cinq ateliers
La démarche s’organise en cinq ateliers allant du cadrage au traitement du risque.

- Ateliers 1 et 2 : cadrage et socle, puis sources de risque.
- Ateliers 3, 4 et 5 : scénarios stratégiques, scénarios opérationnels, traitement.

Piège : Ce fichier développe les ateliers 1 et 2 ; les suivants ne sont pas fournis en détail.
Sources PDF : p. 83, p. 84, p. 108

### L’événement et ses effets
Le risque associe la possibilité d’un événement redouté à des effets sur une mission.

- L’exemple de la voiture part de la mission : arriver à destination.
- L’analyse relie événement et conséquences, pas seulement la cause technique.

Piège : Un risque n’est pas uniquement le nom d’une menace.
Sources PDF : p. 86, p. 87, p. 88

### Distinguer gravité et vraisemblance
La gravité concerne les conséquences ; la vraisemblance concerne la possibilité du scénario.

- L’exposition et les faiblesses influencent la vraisemblance.
- La valeur de l’objet et les effets de l’accident éclairent la gravité.

Piège : Une conséquence grave n’est pas nécessairement un événement fréquent.
Sources PDF : p. 89, p. 90, p. 91, p. 92, p. 93

### Des métriques cohérentes
Des échelles partagées rendent les évaluations comparables dans l’organisation.

- Les mêmes métriques doivent être réutilisées pour les analyses transverses.
- L’importance de l’objet et les conséquences éclairent la gravité ; l’exposition et les capacités éclairent la vraisemblance.

Piège : Des scores issus d’échelles différentes ne se comparent pas directement.
Sources PDF : p. 96, p. 97, p. 98

### Actifs et vulnérabilités de plusieurs natures
Les actifs peuvent être informationnels, applicatifs, physiques ou humains.

- Les vulnérabilités peuvent concerner matériel, logiciel, réseau, personnel, site ou organisation.
- L’absence de revue des accès peut favoriser un accès non autorisé après un départ.

Piège : Une analyse centrée sur les logiciels oublie des dépendances importantes.
Sources PDF : p. 100, p. 102, p. 103

### Un processus itératif
L’appréciation et le traitement peuvent être réexaminés lorsque les résultats sont insuffisants.

- Communication et concertation accompagnent le processus.
- La surveillance, la revue et les informations documentées sont transverses.

Piège : La gestion des risques n’est pas une simple chaîne réalisée une seule fois.
Sources PDF : p. 104, p. 105

### Conformité et scénarios se complètent
Le socle de sécurité et l’analyse par scénarios répondent à des dimensions complémentaires du risque.

- Le support relie conformité aux risques non délibérés et scénarios aux risques délibérés.
- L’hygiène et les exigences applicables constituent une base.

Piège : Respecter un socle ne suffit pas à écarter les scénarios ciblés.
Sources PDF : p. 105, p. 109, p. 110, p. 112

### Changer de point de vue
La méthode alterne regard de l’organisation et regard de l’attaquant.

- Les métiers décrivent ce qui compte et ce qu’ils redoutent.
- Les sources de risque et leurs intentions complètent cette vue.

Piège : Le regard de l’attaquant ne remplace pas les enjeux métier.
Sources PDF : p. 107, p. 113

### Efficace plutôt qu’exhaustif
L’étude vise les risques importants et une compréhension partagée avec les décideurs.

- Les résultats doivent être accessibles et utiles à l’action.
- Une analyse rend les risques visibles ; les mesures et décisions doivent ensuite suivre.

Piège : Produire un document ne protège pas automatiquement l’organisation.
Sources PDF : p. 106, p. 107, p. 114

## Atelier 1 : cadrage, missions et valeurs métier

### Les sorties de l’atelier 1
L’atelier 1 définit cadre, périmètre, événements redoutés et socle de sécurité.

- Il implique notamment direction, métiers, RSSI et DSI.
- Une précédente analyse peut fournir des éléments d’entrée.

Piège : La liste des couples SR/OV retenus est une sortie de l’atelier 2.
Sources PDF : p. 117, p. 118

### Fixer le cadre de l’étude
Le cadrage précise rôles, cycles, ateliers, granularité, contraintes et hypothèses.

- La mise à jour peut dépendre d’un incident ou d’une évolution du périmètre.
- Les choix doivent être adaptés à l’objet étudié.

Piège : Un périmètre implicite rend les conclusions difficiles à interpréter.
Sources PDF : p. 119

### RACI : réaliser et approuver
R réalise concrètement le travail ; A assume la responsabilité finale et valide.

- Ces rôles rendent les décisions et les tâches lisibles.
- L’exemple du support répartit les contributions entre plusieurs fonctions.

Piège : R et A ne désignent pas la même responsabilité.
Sources PDF : p. 120

### RACI : consulter et informer
C apporte son expertise avant la décision ; I reçoit l’information sur les résultats.

- La matrice se lit activité par activité.
- La page 137 propose une répartition pédagogique propre à l’exercice.

Piège : La matrice de l’exercice n’est pas un organigramme universel imposé à toute entreprise.
Sources PDF : p. 120, p. 136, p. 137

### Définir la mission
La mission exprime la finalité de l’objet étudié.

- Elle sert de point de départ à l’identification des valeurs métier.
- Dans le cas de biotechnologie : identifier et fabriquer des vaccins.

Piège : Un nom de serveur décrit un moyen, pas la finalité de l’organisation.
Sources PDF : p. 121, p. 122, p. 123

### Reconnaître une valeur métier
Une valeur métier est un processus ou une information important pour accomplir la mission.

- Le support cite services, étapes de processus, informations et savoir-faire.
- Les métiers doivent reconnaître la valeur de l’élément retenu.

Piège : Un équipement technique est généralement un support de la valeur, pas la valeur elle-même.
Sources PDF : p. 122, p. 124

### Reconnaître un bien support
Un bien support est une composante du SI sur laquelle repose une valeur métier.

- Il peut être numérique, physique ou organisationnel.
- Applications, réseaux, ressources humaines et locaux sont des exemples.

Piège : Les supports ne se limitent pas aux équipements informatiques.
Sources PDF : p. 125

### Limiter le périmètre utile
Le périmètre retient les valeurs et supports importants pour l’étude.

- Le cours ne demande pas un inventaire exhaustif de toute l’organisation.
- Les liens valeur-support doivent rester compréhensibles.

Piège : Réduire le nombre d’éléments ne justifie pas d’ignorer une dépendance critique.
Sources PDF : p. 126, p. 127, p. 128

### Les valeurs du cas biotechnologie
Le cas distingue R&D, fabrication des vaccins, traçabilité et contrôle.

- R&D et fabrication sont des processus dans la correction.
- Traçabilité et contrôle est une information ; des propriétaires sont indiqués.

Piège : La faible maturité annoncée est un élément du cas fictif, pas un constat d’audit réel.
Sources PDF : p. 131, p. 133, p. 134

### Relier valeurs et propriétaires
La cartographie associe les valeurs métier à leurs supports et à leurs propriétaires.

- Les données R&D s’appuient notamment sur des serveurs internes et externes.
- Les laboratoires et fournisseurs introduisent des dépendances.

Piège : Le propriétaire d’une valeur métier n’est pas nécessairement le propriétaire technique de tous ses supports.
Sources PDF : p. 134, p. 135

## Atelier 1 : événements redoutés et socle

### Formuler un événement redouté
Un événement redouté porte atteinte à un besoin de sécurité d’une valeur métier.

- Il doit traduire une crainte compréhensible des métiers.
- Une expression courte ou un scénario permet de décrire le préjudice.

Piège : « Un pirate » désigne un acteur ; ce n’est pas un événement redouté.
Sources PDF : p. 138, p. 139

### Relier événement et impacts
L’événement est l’atteinte ; les impacts en sont les conséquences sur l’organisation.

- Des résultats scolaires erronés peuvent affecter les parcours et l’image.
- La gravité dépend des effets, pas uniquement de la technique d’attaque.

Piège : Ne pas confondre cause, événement et préjudice.
Sources PDF : p. 140, p. 141, p. 142

### Les catégories d’impacts
Le support distingue missions, personnes et biens, gouvernance, finances, juridique et image.

- Plusieurs catégories peuvent concerner le même événement.
- L’analyse doit restituer les effets utiles à la décision métier.

Piège : Un incident cyber ne se réduit pas à un coût de remplacement matériel.
Sources PDF : p. 142, p. 143, p. 144, p. 145, p. 146, p. 147, p. 148

### Lire G1 et G2
Dans l’échelle fournie, G1 est mineur et G2 significatif.

- G1 : l’organisation surmonte la situation sans trop de difficultés.
- G2 : performances dégradées et fonctionnement en mode dégradé.

Piège : Cette échelle est un exemple à reprendre ou adapter au contexte.
Sources PDF : p. 149

### Lire G3 et G4
G3 correspond à une forte dégradation ; G4 peut menacer la survie de l’organisation.

- Le cours nomme ces niveaux important et critique.
- Des impacts graves sur personnes ou biens peuvent renforcer la gravité.

Piège : Une étiquette G4 doit être reliée aux conséquences décrites.
Sources PDF : p. 149, p. 150

### Justifier les niveaux du cas
La correction attribue des gravités aux événements du cas biotechnologie.

- L’arrêt de production pendant un pic d’épidémie et l’altération des contrôles qualité sont notés 4.
- L’altération d’une formule de vaccin et la fuite de données R&D sont notées 3.

Piège : Ces valeurs appartiennent au contexte du cas ; elles ne sont pas des constantes universelles.
Sources PDF : p. 151, p. 152, p. 153

### Distinguer les événements de R&D
La correction ne donne pas le même niveau à toutes les atteintes à la R&D.

- La perte ou destruction d’informations est notée 2 dans ce cas.
- La fuite d’informations et l’altération aboutissant à une formule erronée sont notées 3.

Piège : La valeur métier seule ne suffit pas à déterminer la gravité de tous les événements.
Sources PDF : p. 153

### Définir le socle de sécurité
Le socle rassemble les référentiels applicables, leur application, les écarts et leurs justifications.

- Le support associe cadre réglementaire, normes et règles d’hygiène.
- L’analyse par scénarios complète cette base.

Piège : Nommer un référentiel ne démontre pas sa mise en œuvre.
Sources PDF : p. 154, p. 155, p. 156

### Documenter les écarts
L’exemple de revue du RGS associe exigences, notes et détails d’écart.

- Les justifications expliquent l’état observé ou les travaux prévus.
- Un audit planifié est différent d’un audit achevé avec actions appliquées.

Piège : Une action annoncée ne constitue pas une mise en œuvre terminée.
Sources PDF : p. 157

### Vérifier l’applicabilité
L’exercice propose plusieurs référentiels à examiner pour le cas de biotechnologie.

- La pertinence dépend du périmètre, des activités et des exigences réellement applicables.
- La page 159 propose une liste sans correction remplie.

Piège : Ne pas présenter toute la liste comme une obligation juridique applicable à tous.
Sources PDF : p. 158, p. 159, p. 160

## Atelier 2 : sélectionner les couples SR/OV

### Les sorties de l’atelier 2
L’atelier 2 identifie, évalue et sélectionne les couples source de risque / objectif visé.

- Il part des valeurs métier et événements redoutés de l’atelier 1.
- Il distingue couples retenus et secondaires à surveiller si possible.

Piège : La gravité métier de l’atelier 1 ne remplace pas la caractérisation des couples.
Sources PDF : p. 162, p. 163

### Identifier la source de risque
La source de risque représente l’acteur susceptible de porter atteinte aux missions.

- Le support cite notamment État, crime organisé, activiste, concurrent, amateur et vengeur.
- La source doit être considérée en lien avec un objectif.

Piège : Une vulnérabilité ou une conséquence n’est pas une source de risque.
Sources PDF : p. 164, p. 166

### Identifier l’objectif visé
L’objectif visé décrit l’effet recherché par la source de risque.

- Le cours cite espionnage, prépositionnement, influence, entrave, lucratif et amusement.
- Une même source peut poursuivre plusieurs objectifs.

Piège : L’objectif de l’attaquant n’est pas nécessairement formulé comme l’événement redouté du métier.
Sources PDF : p. 167, p. 168

### Le cas du collégien : modifier les notes
Le cas sépare acteur, objectif, valeur métier et système support.

- La source est l’adolescent ; l’objectif est de modifier ses résultats.
- Les résultats scolaires sont la valeur ; le système de gestion est le support.

Piège : Les notes et l’application qui les gère sont deux objets distincts.
Sources PDF : p. 169, p. 170

### Le cas du collégien : se venger
Le second épisode vise les échanges et la continuité du service.

- La même source cherche cette fois à se venger.
- Le support décrit une saturation de courriels et plusieurs jours d’indisponibilité.

Piège : La source identique n’impose pas un objectif ou un événement identique.
Sources PDF : p. 171, p. 172

### Caractériser un couple SR/OV
La caractérisation repose sur motivation, ressources et éventuellement activité.

- Le jugement d’experts et les retours d’expérience sont mobilisés.
- Dans le cas du collégien, motivation forte, simple ordinateur et activité non évaluée sont indiqués.

Piège : La pertinence d’un couple n’est pas la gravité d’un événement redouté.
Sources PDF : p. 173, p. 174, p. 175, p. 176

### Lire la matrice de pertinence
La matrice croise les niveaux de motivation et de ressources.

- Fortement motivé avec ressources importantes : très pertinent.
- Peu motivé avec ressources limitées : peu pertinent.

Piège : Il faut lire la cellule du croisement, pas additionner des mots ou des scores inventés.
Sources PDF : p. 178

### Sélectionner dans le cas biotechnologie
La correction retient les couples très pertinents ou plutôt pertinents dans ce contexte.

- Concurrent / vol d’informations : très pertinent.
- Activiste / sabotage de la vaccination : plutôt pertinent ; le couple cybercriminel présenté est peu pertinent.

Piège : Un seuil de sélection dépend du cadre de l’étude ; l’étiquette d’acteur seule ne suffit pas.
Sources PDF : p. 179, p. 180, p. 181, p. 182

### Confronter les deux points de vue
La fin de l’atelier 2 rapproche les événements les plus graves et les couples les plus pertinents.

- Les événements et leur gravité représentent le regard métier.
- Les sources et leurs objectifs apportent le regard attaquant pour la suite.

Piège : Un couple pertinent n’est pas encore un scénario stratégique complet.
Sources PDF : p. 183, p. 184

### Marriott et Pathé : garder les limites
Les exercices finaux entraînent à classifier le vocabulaire sur des récits historiques du support.

- Pour Marriott, la correction conserve une source inconnue et un objectif lucratif interrogatif.
- Pour Pathé, le support indique escrocs, fraude lucrative, usurpation d’identité et impacts financiers et d’image.

Piège : Ces pages sont des cas de cours datés ; ne pas transformer une hypothèse d’attribution en certitude.
Sources PDF : p. 185, p. 186, p. 187, p. 188
