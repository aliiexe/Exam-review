# Vérifications de livraison — TRACE Campus

Date : 18 novembre 2026.

## Contenu

Les collections `chapters`, `cards`, `questions`, `exams`, `artifacts`, `commands`, `notes`, `td` et `externals`, lorsqu’elles existent, ont été comparées aux trois HTML Focus livrés précédemment. Elles sont identiques. Leurs empreintes SHA-256 figurent dans `CONTENT_INTEGRITY.json`.

Les 337 fiches, 1 200 questions et 30 examens de 40 questions sont présents. Chaque module possède 400 identifiants de questions distincts répartis entre ses dix examens. Les identifiants sont volontairement séparés par module, même lorsque leur forme est identique.

Les chemins des 18 PDF, des 4 PowerPoint originaux et des images de pages ont été vérifiés. Les liens PDF / PowerPoint de la bibliothèque ont été ouverts via HTTP local avec une réponse 200.

## Tests navigateur exécutés

Tests fonctionnels réalisés avec Chromium automatisé via Playwright, sur un serveur HTTP local.

- Ouverture des trois modules et de leurs chapitres ; absence de navigation dupliquée.
- Marquage de maîtrise, favoris et notes dans les trois modules ; aucune collision entre les mêmes identifiants de fiches.
- Ouverture des références sources et chargement des images disponibles.
- Affichage des trente examens dans le catalogue commun.
- Lancement d’un examen depuis le campus, choix d’une réponse, remise et affichage du corrigé pour chacun des trois modules.
- Résultats agrégés dans la progression commune.
- Recherche globale et navigation vers une fiche.
- Raccourci Ctrl K depuis le contenu d’un module.
- Mode épuré : disparition de la navigation commune et du sommaire du chapitre.
- Minuteur Focus conservant la même échéance après changement de module et rechargement.
- Fin de minuteur enregistrée une seule fois ; aucune pause démarrée automatiquement.
- Export valide même avant d’avoir ouvert les modules.
- Export global après progression ; import d’un ancien JSON de module sans modifier les autres ; réimport du JSON global.
- Thème commun propagé aux modules.
- Barre latérale rétractable conservant sa préférence après rechargement.
- TD de cryptanalyse et ateliers NeoCare : révélation des corrigés ; saisie d’une réponse.
- Brouillon d’audit : saisie d’un critère et composition du résultat.
- Vue des calculs guidés de cryptanalyse conservée.
- Lecteur Spotify conservé dans le DOM lors d’un changement de module et de thème, et après fermeture du panneau sonore.
- Affichage mobile à 390 px : accueil, menu, Focus et quiz, sans débordement horizontal après stabilisation de la mise en page.
- Rechargement d’une route profonde d’examen.
- Revue visuelle des écrans de bureau et mobiles, en clair et en sombre. Une surcharge de fond clair dans les modules sombres a été corrigée.

Aucune erreur JavaScript n’a été observée dans ces parcours.

## Limites des tests

Le site n’a pas été déployé dans un compte Vercel depuis cette conversation. Les paramètres de déploiement sont fondés sur la documentation officielle consultée. La lecture audio réelle de Spotify et le téléchargement de Google Sans depuis Google Fonts n’ont pas pu être testés ; leurs requêtes externes ont été bloquées pendant les tests locaux. Les captures de contrôle utilisent donc la police de secours. La conservation du lecteur Spotify a été testée, pas son service de diffusion.

Tous les calculateurs n’ont pas fait l’objet d’une nouvelle validation mathématique exhaustive ; les contenus et moteurs pédagogiques antérieurs sont conservés. L’intégration ne promet pas une synchronisation entre appareils, une protection par mot de passe, une installation hors ligne, ni une validation officielle des sujets.

Les données de test et les sauvegardes de test ne sont pas incluses dans le site livré. Le stockage du navigateur d’un nouvel utilisateur commence vide.

## Ajout du module Gestion des risques

- `python3 scripts/validate.py` : quatre modules, 417 fiches, 1 280 questions, 32 examens et 19 PDF ; toutes les pages sources présentes.
- SHA-256 des 366 fichiers des trois modules précédents : identiques aux empreintes prises avant l’ajout. Les entrées précédentes du catalogue et de la recherche sont conservées.
- `node scripts/test_risques.cjs` : navigation, source, stockage séparé, import, lancement sans chronomètre, correction, remise et expiration des examens.
- Vérification dans le navigateur local : ouverture du module, chapitre, lecture de la page PDF, quiz avec réponse expliquée, conservation après rechargement, remise et corrigé, recherche globale EBIOS et ouverture de la fiche.

Le module conserve le PDF de 188 pages à l’identique et offre 188 images de pages, 80 fiches, 80 questions distinctes et deux examens de 40 questions sans répétition entre sujets. Aucun déploiement distant n’est effectué par cet ajout.

## Ajout du module Gestion des risques (novembre 2026)

- 188 pages sources, 8 chapitres, 80 fiches, 80 questions et 2 examens distincts de 40 questions.
- Quatre ateliers avec 10 réponses et brouillon de registre, intégrés aux sources, à la recherche et à la progression du campus.
- `python3 scripts/validate.py` : collections, correspondances du catalogue, pages sources et empreintes des 366 fichiers des trois modules précédents.
- `node scripts/test_risques.cjs` : routes, validation des imports, stockage isolé, lancement sans chronomètre, correction des entraînements, remise et expiration automatique des sessions.
- Vérification dans le navigateur : ouverture du module, navigation de chapitre, lecteur de page PDF, réponse et correction d’un quiz, récupération de la session après rechargement, remise et score, recherche globale et lien vers la fiche.
- Le fichier PDF intégré est identique au fichier fourni (SHA-256 vérifié). Les trois modules existants et leurs entrées de catalogue/recherche sont inchangés.
- Ajout local dans le projet Vercel ; aucun déploiement réalisé.
