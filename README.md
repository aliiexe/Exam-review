# TRACE Campus

Un seul site de révision, entièrement en français, prêt à héberger sur Vercel.

## Contenu conservé

| Module | Chapitres / séances | Fiches | Questions | Examens blancs |
|---|---:|---:|---:|---:|
| Digital Forensics | 5 | 121 | 400 | 10 |
| Protocoles de sécurité & cryptanalyse | 4 | 100 | 400 | 10 |
| Audit de sécurité des systèmes d’information | 7 | 116 | 400 | 10 |
| Gestion des risques en cybersécurité | 8 | 80 | 80 | 2 |
| **Total** | **24** | **417** | **1 280** | **32** |

Les trente-deux sujets comportent chacun 40 questions. Les fiches, les questions, les corrigés, les références, les ateliers NeoCare, le TD de cryptanalyse et les outils de calcul / matrices des trois sites sont conservés. Les fichiers `CONTENT_INTEGRITY.json` et `scripts/validate.py` permettent de vérifier les collections pédagogiques.

## Le campus commun

- Accueil commun avec accès aux quatre modules et reprise de la dernière vue.
- Navigation unique, barre latérale rétractable et menu mobile.
- Recherche globale dans 689 fiches, repères, commandes et ateliers.
- Catalogue commun des trente-deux examens avec lancement direct et durée configurable.
- Tableau de progression et historique de résultats, tous modules confondus.
- Bibliothèque : 19 PDF (711 pages), les 4 PowerPoint originaux et les guides Markdown.
- Thèmes clair / sombre et Google Sans via Google Fonts, avec police système de secours.
- Un seul espace Focus : 25/5, 50/10, durées personnalisées, pauses, objectif de séance, minutes de travail, historique et notes « Pour plus tard ».
- Spotify et bruit doux restent dans le cadre principal : changer de module ne recrée pas le lecteur.
- Mode épuré (F ; Échap pour quitter), recherche (⌘K / Ctrl K).
- Export global JSON et import des anciennes sauvegardes de chaque module.

## Déploiement Vercel

Le dossier contenant **ce README, `vercel.json` et `public/`** est la racine du projet.

1. Décompresser l’archive.
2. Mettre **le contenu du dossier `TRACE_Campus_Vercel`** dans un dépôt GitHub, GitLab ou Bitbucket. Ne pas déposer seulement le ZIP, ni seulement `index.html`.
3. Importer le dépôt dans Vercel avec **Add New → Project**.
4. Sélectionner les paramètres suivants ; `vercel.json` les fournit déjà :

| Paramètre | Valeur |
|---|---|
| Framework Preset | **Other** |
| Root Directory | **.** — le dossier contenant `vercel.json` |
| Build Command | **Vide / désactivée** |
| Output Directory | **public** |
| Install Command | **Vide / désactivée** |
| Environment Variables | **Aucune** |

5. Lancer **Deploy**.

Si le dépôt contient un dossier parent supplémentaire, sélectionner comme Root Directory le dossier qui contient réellement `vercel.json`.

**Ne pas sélectionner Next.js, React ou Vite.** Ce projet est un site statique en HTML, CSS et JavaScript, sans `npm install` ni compilation. Ne pas saisir `public` comme Root Directory : c’est le dossier de sortie.

Autre méthode, depuis la racine du projet avec Node.js installé :

```bash
npx vercel --prod
```

Se connecter au compte Vercel et suivre l’association du projet. Aucun déploiement n’a été réalisé depuis la conversation ; le projet a été testé sur un serveur HTTP local.

Références officielles utilisées pour les paramètres de déploiement :
- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/cli/deploy

## Tester en local

Depuis la racine du projet :

```bash
python3 -m http.server 8000 --directory public
```

Puis ouvrir `http://localhost:8000`.

**Ne pas ouvrir `index.html` par double-clic.** Le campus charge son catalogue et son index de recherche via HTTP. Cette version est conçue pour être hébergée. Aucun mode hors ligne complet / service worker n’est installé.

## Récupérer la progression des anciens sites

Dans chaque ancien fichier HTML : **Ma progression → Exporter en JSON**. Dans le nouveau campus : **Ma progression → Importer**. Importer les trois fichiers un par un.

Une importation de module remplace seulement la progression de ce module, après confirmation. Les imports sont validés avant application. Pour les changements suivants, **Tout exporter** produit un seul fichier JSON pour les quatre modules, le Focus commun et les préférences globales.

Les anciens historiques Focus restent dans les données propres à chaque module importé. Ils ne sont pas artificiellement additionnés aux nouvelles statistiques du minuteur commun.

Les données restent dans le stockage local du navigateur ; il n’y a **ni compte, ni base de données, ni synchronisation cloud**. Un nouveau domaine Vercel, un autre navigateur ou un autre appareil possède un stockage différent. Exporter avant de changer de domaine ou de vider les données du navigateur. Les clés propres aux quatre modules sont conservées pour éviter toute collision entre leurs identifiants de fiches et de questions.

Le chronomètre d’un examen ne s’arrête pas lors d’un changement de vue, de module ou d’onglet. Son échéance reste absolue ; la copie est remise lorsque le module traite l’expiration. Le minuteur Focus est indépendant. Fermer la page coupe naturellement le lecteur audio ; le minuteur peut reprendre son état grâce à son échéance sauvegardée.

## Hébergement et confidentialité

Le contenu pédagogique et les PDF sont des fichiers statiques. **Ce projet ne contient pas d’authentification.** Un dépôt Git privé ne constitue pas à lui seul une protection du site publié.

`robots.txt`, la balise robots et l’en-tête `X-Robots-Tag` demandent la non-indexation, mais ne bloquent pas l’accès. Vérifier les droits de diffusion des supports avant de partager l’adresse. Pour un usage strictement personnel, configurer une protection d’accès effective dans Vercel, en vérifiant que son périmètre couvre aussi le domaine de production.

Documentation : https://vercel.com/docs/deployment-protection

Aucun outil d’analyse d’audience ni envoi de notes à un serveur n’a été ajouté. Google Fonts est un service externe. Spotify ne se charge qu’après une action explicite et reçoit alors les requêtes de son lecteur intégré. La lecture Spotify en direct et le chargement de Google Fonts n’ont pas pu être validés dans l’environnement de test ; le lecteur est configuré et la police de secours est prévue. Le bruit doux est généré localement dans le navigateur.

## Architecture

```text
TRACE_Campus_Vercel/
├── vercel.json                 # Autoconfiguration Vercel, sortie public/
├── README.md
├── VALIDATION.md
├── CONTENT_INTEGRITY.json      # Empreintes des collections pédagogiques
├── scripts/
│   └── validate.py             # Validation statique, sans dépendance
└── public/
    ├── index.html              # Cadre commun du campus
    ├── 404.html
    ├── robots.txt
    ├── assets/
    │   ├── campus.css
    │   ├── campus.js
    │   ├── catalog.json
    │   ├── search-index.json
    │   ├── module-bridge.js
    │   ├── module-frame.css
    │   └── favicon.svg
    └── modules/
        ├── forensics/
        ├── cryptanalyse/
        └── audit/
```

Chaque module garde son moteur pédagogique dans un cadre de même origine, chargé à la demande. Le campus masque la navigation dupliquée et gère les préférences, la musique et le minuteur communs. Les cadres déjà ouverts sont conservés pendant la navigation ; les sessions restent distinctes.

Les routes du campus utilisent des fragments, par exemple `/#/module/audit/chapter/7`. Aucun mécanisme de réécriture global qui pourrait intercepter les PDF n’est nécessaire. Les images des supports, auparavant encodées dans les HTML, sont maintenant des fichiers séparés chargés lorsqu’une page source est consultée.

### Ajouter un module ultérieurement

La structure n’est pas un outil d’import automatique de PDF. Un nouveau module nécessite son contenu structuré et son moteur pédagogique, puis une entrée dans `assets/catalog.json` et l’index de recherche. Ne pas simplement déposer un PDF en attendant la génération de fiches.

### Vérifier le contenu

```bash
python3 scripts/validate.py
```

Les sujets et corrigés d’entraînement ne sont pas des annales officielles. Cette intégration conserve les distinctions et avertissements déjà présents dans les trois modules ; elle ne constitue pas une nouvelle vérification académique des cours.

## Module ajouté : Gestion des risques en cybersécurité

Le support de Pr. Nada MOUCHFIQ (2026-2027, 188 pages) est intégré au module `risques` : huit chapitres, 80 fiches sourcées, 80 questions expliquées, deux examens blancs distincts de 40 questions, quatre ateliers (10 réponses) et un brouillon de registre. Les 188 pages sont lisibles dans le module et le PDF original est téléchargeable. Les sujets sont des entraînements créés pour la révision, pas des annales officielles. Le périmètre détaillé couvre les ateliers EBIOS RM 1 et 2 du support fourni.

Les trois modules précédents restent inchangés, fichier par fichier. `ORIGINAL_MODULE_FILES.json` conserve leurs empreintes SHA-256 et `python3 scripts/validate.py` les vérifie, en plus des collections pédagogiques et du nouveau catalogue. Les compteurs communs s’adaptent au catalogue ; le module Risques possède sa propre clé de progression `trace-risques-revision-v1`.
