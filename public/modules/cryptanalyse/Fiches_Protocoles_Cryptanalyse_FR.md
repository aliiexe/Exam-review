# TRACE — Protocoles de sécurité et cryptanalyse

## Fiches de révision en français

100 fiches établies à partir des quatre présentations fournies et du TD. Les références C1–C4 suivent la position réelle dans chaque fichier, non le numéro imprimé. TD renvoie aux pages du PDF de révision. Les exemples calculés sont des résolutions pédagogiques ; ils ne constituent pas un corrigé officiel.

## Supports

- Chapitre1.pptx : 35 diapositives
- Cahpitre2-.pptx : 32 diapositives
- Chapitre3.pptx : 40 diapositives
- Chapitre4-.pptx : 41 diapositives
- TD de révision.pdf : 7 pages

# Chapitre 1 — Le protocole SSL / TLS

De la connexion TCP aux données protégées : comprendre chaque rôle.

## 1. Rôle et architecture

### Pourquoi protéger HTTP avec TLS ?

TLS protège les échanges contre l’écoute, la modification et l’usurpation, mais ne répare pas l’application.

- Confidentialité : rendre le contenu illisible à un tiers sur le trajet. Intégrité : détecter une altération. Authentification : vérifier l’identité du serveur et, éventuellement, du client.
- Les données sensibles citées sont les identifiants, cookies, cartes et jetons d’API.
- Un XSS, une injection SQL, un serveur malveillant ou un poste déjà compromis restent hors de cette protection de communication.

**Point de vigilance.** Une connexion chiffrée ne prouve pas que l’application ou le serveur est digne de confiance.

**À expliquer sans regarder.** Citer les trois objectifs de TLS et deux limites.

*Sources : C1, diapo 2 ; C1, diapo 27.*


### De SSL à TLS : les repères du cours

SSL est présenté comme historique et obsolète ; le cours privilégie TLS 1.3 avec TLS 1.2 pour la compatibilité.

- Chronologie donnée : SSL 2.0 (1995), SSL 3.0 (1996), TLS 1.0 (1999), TLS 1.1 (2006), TLS 1.2 (2008), TLS 1.3 (2018).
- Le support recommande de désactiver SSLv2, SSLv3, TLS 1.0 et TLS 1.1.
- Pour l’examen, distinguer la famille SSL/TLS, le nom historique « SSL » et la version effectivement négociée.

**Point de vigilance.** Ces repères reprennent la diapositive 3 : ce site n’est pas un audit de configuration de production.

**À expliquer sans regarder.** Quelle distinction faire entre le nom historique SSL et le protocole utilisé dans le cours ?

*Sources : C1, diapo 3.*


### La place de TLS dans la pile

Dans le cas classique étudié : HTTP → TLS → TCP → IP → liaison.

- HTTPS utilise ici le port TCP 443. Le port appartient à TCP ; TLS se situe au-dessus de cette couche de transport.
- La connexion TCP est établie avant le handshake TLS : SYN, SYN/ACK, ACK, puis ClientHello.
- TLS protège une connexion applicative ; IPsec protège des paquets IP selon une politique réseau.

**Point de vigilance.** Le handshake TLS ne remplace pas le three-way handshake TCP. La fiche suit le cas TCP du support.

**À expliquer sans regarder.** Reconstituer l’ordre DNS, TCP, TLS puis HTTP.

*Sources : C1, diapo 4 ; C1, diapo 22.*


### Les briques logiques de TLS

Le Handshake prépare la sécurité ; le Record Protocol protège les échanges transportés.

- Handshake Protocol : versions, algorithmes, paramètres, authentification et secrets.
- Alert Protocol : erreurs, alertes et fermeture. Application Data : données de l’application après établissement des clés, dans le cas standard.
- Record Protocol : fragmentation, protection, numérotation ou nonce et encapsulation. La protection présentée pour TLS 1.3 est AEAD.

**Point de vigilance.** Handshake et Record Protocol n’ont pas la même fonction : négocier ne signifie pas protéger chaque donnée applicative.

**À expliquer sans regarder.** Associer Handshake, Alert, Application Data et Record à leur rôle.

*Sources : C1, diapo 5 ; C1, diapo 6.*


### AEAD et protection d’un record

Le chiffrement authentifié AEAD fournit confidentialité et intégrité/authenticité des données.

- Le flux présenté est : données applicatives → records → protection AEAD → en-tête TLS → transmission TCP.
- Exemples du support : AES-GCM et ChaCha20-Poly1305.
- Dans TLS 1.3, les suites n’utilisent plus les anciennes constructions CBC avec MAC séparé. Un record altéré ne doit pas être accepté.

**Point de vigilance.** Le hash SHA256 d’une suite TLS 1.3 n’est pas, à lui seul, le chiffrement du contenu.

**À expliquer sans regarder.** Quel mécanisme protège les données et quelle conséquence attendre d’un record modifié ?

*Sources : C1, diapo 6 ; C1, diapo 16 ; C1, diapo 27.*


## 2. Handshake TLS 1.3

### Les cinq objectifs du handshake

Le handshake négocie, établit un secret, authentifie, dérive les clés puis vérifie la négociation.

- Négociation : version, suites et extensions. Échange ECDHE : secret partagé.
- Authentification : certificat et signature. HKDF : dérivation des clés de trafic.
- Finished vérifie la possession des secrets attendus et l’intégrité du transcript. Les données standard sont ensuite protégées par des clés symétriques.

**Point de vigilance.** Certificat, ECDHE, HKDF et AEAD répondent à quatre questions différentes.

**À expliquer sans regarder.** Expliquer le rôle de chaque étape sans réciter uniquement les noms.

*Sources : C1, diapo 7.*


### Le handshake TLS 1.3 standard

La séquence présentée est un handshake 1-RTT sans authentification du client.

- Le client envoie ClientHello ; le serveur répond ServerHello, puis EncryptedExtensions, Certificate, CertificateVerify et Finished.
- Le client envoie son Finished, puis les Application Data sont échangées dans le modèle standard du cours.
- Après ServerHello, davantage de messages du handshake TLS 1.3 sont chiffrés. Une capture passive ne rend donc pas tout le contenu lisible.

**Point de vigilance.** Ne pas confondre l’ordre logique des messages avec leur visibilité en clair dans Wireshark.

**À expliquer sans regarder.** Placer CertificateVerify et Finished dans l’ordre du handshake.

*Sources : C1, diapo 8 ; C1, diapo 18.*


### ClientHello : les propositions du client

ClientHello annonce des capacités et des paramètres, pas le mot de passe du client.

- supported_versions annonce les versions ; cipher_suites les suites ; supported_groups les groupes ou courbes.
- key_share contient une clé publique éphémère ECDHE. signature_algorithms indique les signatures acceptées.
- server_name porte le SNI, nom DNS demandé. ALPN indique un protocole applicatif, par exemple HTTP/2.

**Point de vigilance.** SNI, SAN et ALPN ne sont pas interchangeables : demande de nom, noms du certificat, protocole applicatif.

**À expliquer sans regarder.** Où chercher version proposée, clé éphémère, nom demandé et protocole applicatif ?

*Sources : C1, diapo 9.*


### ServerHello : les choix du serveur

Le serveur retient une version, une suite commune et son key_share.

- Les propositions et la politique des deux extrémités doivent être compatibles.
- Chaque côté utilise les key_share pour calculer le même secret ECDHE.
- Le secret partagé n’est pas envoyé sur le réseau ; les valeurs publiques éphémères, elles, sont échangées.

**Point de vigilance.** Voir les key_share n’équivaut pas à connaître les secrets privés ou les clés de trafic.

**À expliquer sans regarder.** Distinguer ce qui est proposé, choisi, échangé publiquement et calculé localement.

*Sources : C1, diapo 10.*


### ECDHE : retrouver le même secret

Les deux participants calculent ab·G à partir de leurs secrets privés et des valeurs publiques échangées.

- Client : a reste privé, A = a·G est public. Serveur : b reste privé, B = b·G est public. G est un point générateur public.
- Le client calcule a·B ; le serveur calcule b·A. Les résultats sont égaux à ab·G.
- Ce secret devient une entrée de HKDF. X25519 et secp256r1 sont des exemples cités dans le support.

**Point de vigilance.** ECDHE établit un secret ; ce n’est ni la signature du certificat, ni le chiffrement AES des Application Data.

**À expliquer sans regarder.** Pourquoi les deux calculs donnent-ils le même secret sans le transmettre ?

*Sources : C1, diapo 11 ; C1, diapo 30.*


### Perfect Forward Secrecy

Les clés éphémères limitent l’effet d’une compromission ultérieure de la clé privée de longue durée.

- Avec ECDHE dans le scénario étudié, voler plus tard la clé privée du certificat ne révèle pas automatiquement les anciennes sessions.
- La clé de signature du serveur et les secrets éphémères de l’échange ne doivent pas être confondus.
- Cette propriété concerne la confidentialité passée face à une compromission future de clé longue durée, pas l’invulnérabilité générale.

**Point de vigilance.** « Forward secrecy » ne veut pas dire qu’un client compromis ou des clés de session volées deviennent sans danger.

**À expliquer sans regarder.** Quelle compromission la forward secrecy rend-elle moins dommageable pour les sessions passées ?

*Sources : C1, diapo 11 ; C1, diapo 27 ; C1, diapo 30.*


## 3. Certificats et authentification

### Le certificat X.509

Le certificat relie une identité à une clé publique sous la signature d’une autorité de certification.

- Champs à reconnaître : Subject, Issuer, Not Before/Not After, SAN, clé publique, algorithme de signature et signature de l’autorité.
- Les extensions Key Usage et EKU indiquent les usages. SAN contient les noms à vérifier pour le serveur demandé.
- Le certificat ne contient jamais la clé privée du serveur.

**Point de vigilance.** Posséder une copie du certificat public ne permet pas de prouver la possession de sa clé privée.

**À expliquer sans regarder.** Quel champ porte les noms autorisés, qui signe et quelle clé n’apparaît jamais ?

*Sources : C1, diapo 12 ; C1, diapo 14.*


### Les vérifications du client

La validation ne se réduit pas à vérifier qu’une signature est mathématiquement correcte.

- Le client vérifie que le nom DNS appartient au SAN et que la date est comprise dans la validité.
- Il contrôle la chaîne de confiance, les signatures, les usages, les algorithmes et la révocation selon la politique.
- Une horloge système fausse peut faire apparaître un certificat comme expiré ou pas encore valide.

**Point de vigilance.** Un certificat signé pour un autre nom ne doit pas être accepté pour le nom demandé.

**À expliquer sans regarder.** Quels contrôles restent nécessaires après une signature valide ?

*Sources : C1, diapo 12 ; C1, diapo 13 ; C1, diapo 25.*


### La chaîne PKI

La chaîne relie le certificat du serveur à une autorité racine approuvée par le client.

- Exemple du support : CA racine → CA intermédiaire → certificat serveur.
- Le serveur envoie généralement son certificat et les intermédiaires nécessaires. Le client dispose déjà de racines approuvées.
- La clé publique de l’émetteur vérifie la signature portée par le certificat qu’il a émis.

**Point de vigilance.** Une racine auto-signée n’est pas automatiquement approuvée : elle doit faire partie des racines de confiance du client.

**À expliquer sans regarder.** Dans une chaîne à un intermédiaire, quelle clé vérifie la signature du certificat serveur ?

*Sources : C1, diapo 13.*


### CertificateVerify

CertificateVerify prouve que le serveur possède la clé privée correspondant à son certificat.

- Une signature liée au transcript du handshake courant est produite avec la clé privée du serveur.
- Le client la vérifie avec la clé publique du certificat. Recopier un certificat sans sa clé privée ne suffit donc pas.
- Les données applicatives sont ensuite chiffrées avec des clés symétriques de session, pas avec la clé RSA du certificat.

**Point de vigilance.** La signature de la CA sur le certificat et CertificateVerify sont deux signatures avec deux rôles et clés de vérification différents.

**À expliquer sans regarder.** Distinguer « identité liée à une clé » et « possession de la clé privée dans cette session ».

*Sources : C1, diapo 14.*


### Finished et le transcript

Finished confirme l’intégrité du handshake et la possession des secrets dérivés attendus.

- Le schéma utilise le hash des messages du handshake, une clé Finished et un HMAC vérifiable.
- Si un message de la négociation change, le transcript change et la vérification doit échouer.
- CertificateVerify est une preuve par signature de clé privée ; Finished repose sur les secrets dérivés du handshake.

**Point de vigilance.** Finished n’envoie pas les clés de session en clair pour les comparer.

**À expliquer sans regarder.** Pourquoi une modification du handshake est-elle détectable à cette étape ?

*Sources : C1, diapo 7 ; C1, diapo 20.*


### MITM et limites de la confiance

Une interception du trajet ne permet pas normalement d’usurper un serveur dont le certificat est correctement validé.

- Un attaquant qui n’a pas la clé privée légitime ne peut pas simplement recopier le certificat et réussir la preuve de possession.
- Un certificat auto-signé non approuvé ou destiné à un autre nom doit faire échouer la validation.
- Ignorer une alerte ou ajouter abusivement une CA approuvée peut contourner le modèle. La sécurité dépend aussi de la PKI, des clés, de la configuration et du client.

**Point de vigilance.** TLS peut rester utile quand le trafic est détourné, mais ne supprime pas le détournement réseau lui-même.

**À expliquer sans regarder.** Pourquoi un MITM ne gagne-t-il pas seulement en présentant une copie du certificat ?

*Sources : C1, diapo 26 ; C1, diapo 27.*


## 4. Clés, suites et versions

### HKDF : dériver des clés distinctes

HKDF transforme le secret partagé en secrets distincts selon la phase et la direction du trafic.

- HKDF-Extract construit un secret pseudorandom ; HKDF-Expand dérive les secrets séparés dans la présentation du cours.
- On distingue les handshake traffic secrets et les application traffic secrets, ainsi que client → serveur et serveur → client.
- Le transcript intervient dans la dérivation ; KeyUpdate permet le renouvellement des clés de trafic.

**Point de vigilance.** La session n’utilise pas directement le secret ECDHE comme une unique clé AES commune à tous les usages.

**À expliquer sans regarder.** Quelles séparations de clés faut-il retenir et à quoi sert KeyUpdate ?

*Sources : C1, diapo 15 ; C1, diapo 30 ; C1, diapo 31.*


### Lire TLS_AES_128_GCM_SHA256

Une suite TLS 1.3 indique ici le mécanisme AEAD et le hash, pas tout le handshake.

- AES_128 : chiffrement symétrique AES avec clé de 128 bits. GCM : mode AEAD.
- SHA256 : fonction de hachage utilisée notamment dans HKDF et pour le transcript.
- L’échange de clés et l’algorithme de signature sont négociés séparément par les extensions en TLS 1.3.

**Point de vigilance.** L’absence de ECDHE dans le nom de cette suite ne prouve pas qu’ECDHE est absent du handshake.

**À expliquer sans regarder.** Décomposer la suite et citer deux éléments qu’elle ne code plus.

*Sources : C1, diapo 16.*


### Lire une suite TLS 1.2

TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 associe plusieurs rôles dans son nom.

- ECDHE : échange de clés. RSA : authentification/signature dans cette suite précise.
- AES_128_GCM : protection des données. SHA256 : PRF/hash selon la suite, selon la formulation du support.
- Le cours recommande ECDHE + AEAD et présente TLS 1.2 comme contenant davantage de variantes historiques.

**Point de vigilance.** RSA dans cette suite ECDHE_RSA ne désigne pas le chiffrement de chaque donnée applicative.

**À expliquer sans regarder.** Identifier échange, authentification et protection dans cette suite précise.

*Sources : C1, diapo 17.*


### TLS 1.2 et TLS 1.3 : comparer

TLS 1.3 simplifie la négociation et impose AEAD pour ses suites.

- Le handshake standard TLS 1.3 est présenté comme 1-RTT ; TLS 1.2 comporte davantage de variantes et de messages.
- TLS 1.2 peut utiliser des constructions historiques selon la suite ; TLS 1.3 négocie séparément les éléments d’échange et de signature.
- TLS 1.3 chiffre davantage le handshake après ServerHello et permet du 0-RTT avec reprise, avec une limite anti-rejeu.

**Point de vigilance.** Ne pas attribuer toutes les propriétés de TLS 1.3 à n’importe quelle session appelée « TLS ».

**À expliquer sans regarder.** Comparer protection, nom des suites, visibilité du handshake et 0-RTT.

*Sources : C1, diapo 17 ; C1, diapo 18.*


## 5. Reprise, mTLS et diagnostic

### Reprise de session et ticket

La reprise réduit le travail d’une connexion suivante en utilisant un secret de reprise.

- Après une connexion initiale, le serveur peut envoyer NewSessionTicket ; le client conserve les informations correspondantes.
- À la connexion suivante, le client propose une reprise fondée sur un PSK/ticket ; le serveur peut l’accepter ou la refuser.
- De nouveaux secrets de trafic sont dérivés. La reprise peut fonctionner sans 0-RTT.

**Point de vigilance.** Reprendre une session n’est pas simplement reprendre l’ancienne clé AES.

**À expliquer sans regarder.** Distinguer ticket, PSK, nouvelle dérivation et Early Data.

*Sources : C1, diapo 19 ; C1, diapo 32.*


### 0-RTT : latence contre risque de rejeu

Les Early Data peuvent être envoyées avant la fin du nouveau handshake lors d’une reprise.

- Le client possède déjà un PSK de reprise et peut joindre les données à son ClientHello.
- Le gain recherché est la réduction de latence. Les garanties anti-rejeu sont plus faibles dans certains scénarios.
- Le support demande d’éviter les opérations non idempotentes : paiement, changement de mot de passe, création unique ou action irréversible.

**Point de vigilance.** Plus rapide ne signifie pas mêmes garanties pour toutes les actions. Le cours ne dit pas que toute reprise est 0-RTT.

**À expliquer sans regarder.** Pourquoi un paiement est-il un mauvais exemple d’opération à envoyer en 0-RTT ?

*Sources : C1, diapo 19 ; C1, diapo 33.*


### mTLS : authentifier les deux côtés

mTLS ajoute l’authentification cryptographique du client à celle du serveur.

- Le serveur envoie CertificateRequest ; le client fournit son certificat et une preuve de possession de sa clé privée.
- Dans la séquence simplifiée, le certificat et CertificateVerify du client précèdent son Finished.
- Usages cités : API inter-services, microservices, accès administratifs ou industriels. L’autorisation des actions reste une décision distincte.

**Point de vigilance.** Authentifier le client ne lui donne pas automatiquement tous les droits.

**À expliquer sans regarder.** Qu’ajoute mTLS et quelle décision ne remplace-t-il pas ?

*Sources : C1, diapo 21 ; C1, diapo 34 ; C1, diapo 35.*


### Lire une capture Wireshark TLS

On suit la chronologie TCP puis TLS et on distingue messages visibles et données protégées.

- Filtres du support : tcp.port == 443 ; tls ; tls.handshake.type == 1 pour ClientHello ; tls.handshake.type == 2 pour ServerHello.
- Observer version, suite, SNI s’il est visible, certificat selon version/capture, Application Data et FIN/RST.
- Sur le TP local en 8443, le filtre de port devient tcp.port == 8443. Un port n’est pas un message de handshake.

**Point de vigilance.** Le contenu d’Application Data n’est pas lisible en clair dans la capture du scénario sans les secrets nécessaires.

**À expliquer sans regarder.** Où chercher la suite négociée et comment distinguer le premier message TLS d’un SYN ?

*Sources : C1, diapo 23 ; C1, diapo 28.*


### OpenSSL : comprendre les options affichées

s_server crée le serveur de démonstration ; s_client joue le client pour examiner la session.

- L’exemple s_server écoute sur 127.0.0.1:8443 et utilise serveur.crt et serveur.key ; -tls1_3 impose la version de l’exemple.
- -servername localhost envoie SNI. -verify_hostname localhost vérifie le nom autorisé par le certificat. -verify_return_error arrête la validation en cas d’erreur.
- Le TP vise à observer certificat, handshake et capture. Cette édition demande de lire ces options, pas d’écrire ou d’exécuter les commandes.

**Point de vigilance.** Envoyer SNI ne remplace pas la vérification du nom. Les espaces typographiques de la diapositive ne doivent pas être copiés aveuglément.

**À expliquer sans regarder.** Quelle option envoie le nom et laquelle le vérifie ?

*Sources : C1, diapo 24 ; C1, diapo 29.*


### Diagnostiquer un échec de handshake

La cause peut concerner les capacités, l’identité, la confiance ou l’horloge.

- Version incompatible : aucune version commune, piste protocol_version. Suite incompatible : aucune combinaison commune acceptable.
- Certificat expiré ou mauvais nom : examiner validité et SAN. CA inconnue : vérifier la chaîne vers une racine approuvée.
- SNI absent ou incorrect peut produire un mauvais certificat sur un serveur multi-sites. Une horloge erronée fausse le contrôle des dates.

**Point de vigilance.** Une erreur de certificat ne se résout pas en désactivant arbitrairement toute validation.

**À expliquer sans regarder.** Relier un symptôme à une vérification précise plutôt qu’à « TLS ne fonctionne pas ».

*Sources : C1, diapo 25.*


### La chaîne à réciter avec le bon sens

Certificat = identité ; ECDHE = secret ; HKDF = clés ; AEAD = protection des données.

- CertificateVerify complète le certificat par la preuve de possession de la clé privée dans ce handshake.
- Finished confirme les secrets et l’intégrité de la négociation.
- Cette séparation permet d’expliquer une capture sans confondre chiffrement, signature, échange et dérivation.

**Point de vigilance.** Un seul nom d’algorithme ne répond pas à toutes les questions de sécurité d’une session.

**À expliquer sans regarder.** Présenter en une minute la chaîne complète et la fonction de chaque composant.

*Sources : C1, diapo 30 ; C1, diapo 31.*


# Chapitre 2 — IPv6 et sécurisation des communications

Lire une adresse, suivre les messages et reconnaître une annonce suspecte.

## 1. Motivations et adressage

### Pourquoi IPv6 a été introduit

Le cours oppose les adresses IPv4 sur 32 bits aux adresses IPv6 sur 128 bits.

- IPv4 est présenté avec espace limité, usage massif du NAT et plusieurs mécanismes de découverte/configuration.
- IPv6 apporte un en-tête de base simplifié et extensible et des mécanismes autour d’ICMPv6/NDP.
- IPv6 n’utilise pas de broadcast. NDP/ICMPv6 remplace notamment la fonction de résolution locale associée à ARP en IPv4.

**Point de vigilance.** 128 bits ne signifient pas que toutes les communications sont automatiquement chiffrées.

**À expliquer sans regarder.** Comparer taille, broadcast et découverte locale entre IPv4 et IPv6.

*Sources : C2, diapo 4 ; C2, diapo 6.*


### Écrire et simplifier une adresse

Une adresse IPv6 contient huit groupes hexadécimaux de 16 bits.

- Les zéros en tête de chaque groupe peuvent être supprimés : 0db8 devient db8, 0212 devient 212.
- Une suite continue de groupes nuls peut être remplacée par ::, mais cette écriture ne peut apparaître qu’une fois.
- Exemple du cours : 2001:0db8:0000:0000:0212:34ff:fe56:789a devient 2001:db8::212:34ff:fe56:789a.

**Point de vigilance.** On retire les zéros de tête, pas les zéros à l’intérieur d’un groupe non nul. Deux :: rendent le nombre de groupes ambigu.

**À expliquer sans regarder.** Développer une adresse compressée jusqu’à huit groupes.

*Sources : C2, diapo 7.*


### Préfixe et identifiant d’interface

Le /64 du modèle courant partage l’adresse en 64 bits de préfixe et 64 bits d’identifiant.

- Dans 2001:db8:1234:10::25/64, les quatre premiers groupes sont le préfixe 2001:db8:1234:10.
- L’IID est 0000:0000:0000:0025 dans cet exemple.
- Le support indique que /64 est très courant sur les réseaux locaux ; le TD demande également de raisonner sur d’autres longueurs de préfixe.

**Point de vigilance.** Le nombre après / est un nombre de bits, pas un nombre de groupes ou d’hôtes.

**À expliquer sans regarder.** Séparer les deux moitiés d’une adresse /64 et expliquer le nombre 64.

*Sources : C2, diapo 8 ; C2, diapo 18.*


### Unicast global, link-local et ULA

Le type d’adresse détermine le périmètre et l’usage attendus dans le cours.

- Global Unicast : 2000::/3, présenté pour les communications globales. Link-local : FE80::/10, limité au lien.
- Unique Local : FC00::/7, souvent FD00::/8, pour un usage privé interne.
- Le TD précise le cas 2001:db8::/32 : documentation malgré sa forme située dans 2000::/3.

**Point de vigilance.** L’exemple 2001:db8 utilisé sur les diapositives ne doit pas être confondu avec une adresse publique attribuée pour un déploiement.

**À expliquer sans regarder.** Classer fe80::25, fd12:3456::8 et 2001:db8::10 en indiquant le cas documentaire.

*Sources : C2, diapo 9 ; C2, diapo 10 ; TD de révision, p. 5.*


### Link-local et identifiant de zone

L’adresse link-local sert à communiquer sur le lien, notamment avec les voisins et routeurs.

- Elle n’est pas routée vers Internet dans le modèle du cours.
- NDP l’utilise et le routeur par défaut peut être identifié par une adresse link-local.
- Un identifiant de zone peut être nécessaire dans certaines commandes : fe80::1%12 est l’exemple fourni.

**Point de vigilance.** %12 désigne une zone/interface dans cet exemple, pas une longueur de préfixe IPv6.

**À expliquer sans regarder.** Pourquoi une adresse link-local peut-elle nécessiter un identifiant de zone ?

*Sources : C2, diapo 10.*


### Multicast et anycast

Multicast vise un groupe ; anycast sélectionne une instance par le routage.

- Le préfixe multicast est FF00::/8. ff02::1 désigne tous les nœuds IPv6 du lien ; ff02::2 tous les routeurs du lien.
- Une même adresse anycast est attribuée à plusieurs interfaces ; le routage choisit une instance proche.
- Le TD insiste sur le fait qu’une adresse anycast peut avoir la même syntaxe qu’une unicast.

**Point de vigilance.** Anycast ne duplique pas chaque paquet vers tous les serveurs ; c’est le comportement de groupe qu’il faut distinguer du multicast.

**À expliquer sans regarder.** À qui un paquet ff02::2 est-il destiné ? Et une requête anycast ?

*Sources : C2, diapo 9 ; C2, diapo 11 ; TD de révision, p. 4 ; TD de révision, p. 5.*


## 2. ICMPv6 et Neighbor Discovery

### ICMPv6 : un rôle essentiel

ICMPv6 transporte des messages de contrôle et d’erreur et supporte Neighbor Discovery.

- Il contribue à la découverte des routeurs, à la résolution des voisins et à la détection des doublons.
- Le support identifie ICMPv6 par Next Header = 58 dans les fiches NDP.
- Un filtrage indistinct de tout ICMPv6 peut empêcher le fonctionnement normal d’IPv6.

**Point de vigilance.** ICMPv6 ne se résume pas à ping ; le bloquer intégralement n’est pas la contre-mesure proposée.

**À expliquer sans regarder.** Citer trois fonctions nécessaires qui dépendent d’ICMPv6/NDP.

*Sources : C2, diapo 12 ; C2, diapo 28.*


### Les cinq messages NDP

RS 133, RA 134, NS 135, NA 136 et Redirect 137 sont les repères du cours.

- RS/RA : demander puis annoncer les paramètres des routeurs.
- NS/NA : rechercher une adresse de voisin puis annoncer les informations associées.
- Redirect indique une meilleure route dans la synthèse. Le cours développe surtout les quatre premiers messages.

**Point de vigilance.** Les nombres 133 à 137 sont des types ICMPv6, pas des ports TCP ou UDP.

**À expliquer sans regarder.** Associer chaque sigle à son nombre et sa fonction.

*Sources : C2, diapo 13.*


### RS : Router Solicitation

Un hôte envoie RS pour solliciter rapidement les routeurs du lien.

- Type ICMPv6 = 133 ; destination ff02::2 ; source link-local de l’hôte ou :: dans certains cas décrits.
- Il n’existe pas de champ Target Address dans RS. L’option Source Link-Layer Address peut être présente.
- La fiche donne Next Header = 58 et Hop Limit = 255.

**Point de vigilance.** La destination multicast est le groupe des routeurs, pas l’adresse du voisin que l’on cherche à résoudre avec NS.

**À expliquer sans regarder.** Donner type, destination et présence ou absence de Target Address dans RS.

*Sources : C2, diapo 14 ; C2, diapo 28.*


### RA : Router Advertisement

Le routeur annonce les informations utiles à la configuration du poste.

- Type = 134 ; source link-local du routeur ; destination ff02::1 ou unicast de l’hôte en réponse.
- Les paramètres cités sont le préfixe, une durée de vie, le routeur par défaut, les flags et la MTU.
- RA n’a pas de Target Address ; Next Header = 58 et Hop Limit = 255 dans la fiche.

**Point de vigilance.** Une annonce RA contient des paramètres de configuration ; sa seule réception n’est pas une preuve d’identité du routeur.

**À expliquer sans regarder.** Quel message apporte le préfixe et la route par défaut ?

*Sources : C2, diapo 14 ; C2, diapo 29.*


### NS : Neighbor Solicitation

NS sert à rechercher un voisin, vérifier son accessibilité ou effectuer DAD.

- Type = 135. Target Address désigne l’adresse IPv6 recherchée.
- La fiche détaillée donne une destination multicast solicited-node correspondant à la cible ; la source est une adresse de l’émetteur, ou :: pendant DAD.
- L’option Source Link-Layer Address est indiquée hors DAD. Next Header = 58 ; Hop Limit = 255.

**Point de vigilance.** La diapositive 27 dessine ff02::1 pour NS, contrairement à la fiche détaillée 30. Les questions sur la destination précisent qu’elles suivent la diapositive 30.

**À expliquer sans regarder.** Distinguer adresse source, destination et adresse cible d’un NS.

*Sources : C2, diapo 15 ; C2, diapo 16 ; C2, diapo 30.*


### NA : Neighbor Advertisement

NA répond à NS ou annonce spontanément une modification.

- Type = 136 ; Target Address désigne l’adresse concernée par l’annonce.
- La source est l’adresse du nœud qui annonce ; la destination est le demandeur, parfois ff02::1 pour une annonce non sollicitée.
- L’option Target Link-Layer Address porte l’information de liaison ; les flags R/S/O sont cités. Next Header = 58 ; Hop Limit = 255.

**Point de vigilance.** La cible annoncée et le destinataire du paquet sont deux champs de sens différent.

**À expliquer sans regarder.** Quel message fournit les informations du voisin après un NS ?

*Sources : C2, diapo 15 ; C2, diapo 31.*


### Source, destination et cible

Trois questions différentes : qui envoie, à qui l’on transmet et quelle adresse l’on recherche ou annonce.

- Source : émetteur du paquet IPv6, par exemple fe80::10.
- Destination : destinataire IPv6 du paquet, par exemple ff02::2.
- Target : adresse recherchée ou annoncée dans NS/NA, par exemple 2001:db8::20. RS/RA n’ont pas ce champ.

**Point de vigilance.** La destination multicast d’un NS ne remplace pas la cible IPv6 indiquée dans son contenu.

**À expliquer sans regarder.** Lire les trois champs d’un paquet sans les intervertir.

*Sources : C2, diapo 32.*


## 3. DAD et SLAAC

### DAD : détecter les doublons

DAD vérifie l’unicité d’une adresse candidate sur le lien.

- L’hôte construit une adresse candidate puis envoie une Neighbor Solicitation.
- Si une réponse indique que cette adresse est déjà utilisée, elle ne doit pas être activée ; sinon, elle peut l’être selon le déroulé du support.
- La fiche NS précise que la source vaut :: pendant DAD.

**Point de vigilance.** DAD n’est pas un mécanisme d’authentification et ne prouve pas que les voisins sont légitimes.

**À expliquer sans regarder.** Que fait l’hôte lorsqu’un doublon est détecté ?

*Sources : C2, diapo 16 ; C2, diapo 30.*


### SLAAC : le déroulé simplifié

SLAAC combine les annonces du routeur et un identifiant d’interface pour configurer le poste.

- Le schéma du cours donne : adresse link-local → DAD → RS → RA → adresse globale.
- Le RA apporte un préfixe /64 et la route ; l’hôte combine le préfixe avec son identifiant.
- Exemple : 2001:db8:100:20::/64 et ::25 donnent 2001:db8:100:20::25.

**Point de vigilance.** C’est la vue simplifiée du support, pas une description exhaustive de toutes les variantes de configuration IPv6.

**À expliquer sans regarder.** Reconstituer l’ordre de la figure et former l’adresse de l’exemple.

*Sources : C2, diapo 17 ; C2, diapo 18.*


### Ce que la configuration automatique met en jeu

RA influence la route par défaut ; NS/NA intervient dans la découverte du voisin ; SLAAC configure le poste.

- Un faux RA peut modifier le chemin suivi par les paquets.
- Une usurpation de voisin peut perturber ou intercepter les communications locales.
- Le fait que ces mécanismes soient automatiques explique leur intérêt fonctionnel et la nécessité de les encadrer.

**Point de vigilance.** Automatique ne veut pas dire authentifié ; DAD ne remplace pas les contrôles contre un faux routeur.

**À expliquer sans regarder.** Relier chaque mécanisme automatique à un risque du cours.

*Sources : C2, diapo 17 ; C2, diapo 19.*


## 4. Sécurité et lien avec IPsec

### Rogue RA et RA Guard

Un attaquant local peut envoyer des annonces de routeur non autorisées pour influencer le trafic.

- Le scénario vise une route par défaut malveillante et un détournement possible vers l’attaquant.
- La contre-mesure proposée est RA Guard : filtrer les RA non autorisés sur les ports d’accès, avec une segmentation adaptée.
- Le TD complète l’analyse avec Router Lifetime et Router Preference ; il demande d’observer la source des annonces.

**Point de vigilance.** RA Guard ne chiffre pas les données et TLS ne transforme pas un faux routeur en routeur légitime.

**À expliquer sans regarder.** Quel contrôle réseau vise les faux RA et quelle protection conserve un rôle pour les données ?

*Sources : C2, diapo 19 ; C2, diapo 20 ; C2, diapo 24.*


### IPv6 et IPsec : deux rôles

IPv6 fournit le réseau ; IPsec est présenté comme la protection des paquets au niveau réseau.

- La diapositive 5 évoque une implémentation de base d’IPsec et SEND ; les suivantes montrent néanmoins des risques liés aux mécanismes locaux.
- Le chapitre ne fournit pas de procédure SEND ni de preuve que toutes les communications IPv6 utilisent IPsec.
- Pour deux sites sur un trajet non fiable, le tableau propose IPsec en mode tunnel ; pour les faux RA, RA Guard et segmentation.

**Point de vigilance.** Ne pas transformer la formule « plus de sécurité » de la diapositive 5 en « IPv6 chiffre automatiquement tout ».

**À expliquer sans regarder.** Pourquoi distinguer protection des échanges IP et contrôle des annonces locales ?

*Sources : C2, diapo 5 ; C2, diapo 19 ; C2, diapo 21 ; C2, diapo 24.*


### Next Header : le pont vers IPsec

Next Header indique ce qui suit l’en-tête IPv6.

- Valeurs à reconnaître dans le support : 6 pour TCP, 50 pour ESP, 51 pour AH et 58 pour ICMPv6.
- Les schémas montrent IPv6 → TCP, IPv6 → ESP → TCP et IPv6 → AH → TCP.
- Ces nombres identifient des protocoles ou en-têtes, pas des ports applicatifs.

**Point de vigilance.** Next Header = 50 ne signifie ni « port 50 » ni « type ICMPv6 50 ».

**À expliquer sans regarder.** Lire la chaîne d’en-têtes correspondant à une valeur donnée.

*Sources : C2, diapo 22 ; C2, diapo 23 ; C2, diapo 28.*


## 5. Méthodes demandées dans le TD

### Préfixes et sous-réseaux : méthode du TD

Pour les exercices de préfixe, conserver les bits réseau puis raisonner sur les bits disponibles.

- Méthode de calcul dérivée des exercices du TD : passer de /p à /q donne 2^(q−p) sous-réseaux lorsque q ≥ p.
- De /48 à /64 : 2^16 = 65 536. De /60 à /64 : 2^4 = 16.
- Pour 2001:db8:cafe:00a0::/60, les quatre derniers bits du quatrième groupe varient de 0 à f : dernier /64 = 2001:db8:cafe:00af::/64.

**Point de vigilance.** Ces calculs sont une résolution pédagogique du TD, pas un corrigé fourni par l’enseignant.

**À expliquer sans regarder.** Trouver le nombre de /64 et la dernière valeur du groupe variable.

*Sources : C2, diapo 8 ; TD de révision, p. 5 ; TD de révision, p. 7.*


### Compression canonique : précision pour le TD

Le TD demande parfois une forme canonique, au-delà des règles de base de la diapositive 7.

- Complément externe de méthode, identifié comme tel : RFC 5952, §4. Supprimer les zéros en tête, écrire les lettres en minuscules et comprimer la plus longue suite de groupes nuls.
- À longueur égale, retenir la première suite à gauche ; ne pas compresser un seul groupe nul avec :: dans la forme canonique.
- Exemple du TD : 2001:0DB8:0000:0000:0001:0000:0000:0001 devient 2001:db8::1:0:0:1.

**Point de vigilance.** Une écriture peut être valide sans être la forme canonique. Ce complément n’est pas présenté comme un passage des diapositives.

**À expliquer sans regarder.** Pourquoi la première suite de deux groupes nuls est-elle retenue dans cet exemple ?

*Sources : C2, diapo 7 ; TD de révision, p. 4.*

**Complément de méthode, distinct des supports :** RFC 5952 — section 4 — https://www.rfc-editor.org/rfc/rfc5952.html#section-4


### EUI-64 modifié : lire le calcul

Le TD exige de former un identifiant à partir d’une MAC ; les quatre supports de cours ne détaillent pas cette recette.

- Complément externe limité à la méthode du TD : RFC 4291, annexe A. Insérer FF:FE au milieu des six octets de la MAC, puis inverser le bit U/L du premier octet.
- Cette inversion se calcule par XOR avec 0x02. 02 devient 00 ; 3C devient 3E ; 9A devient 98. On ne fait donc pas toujours « +2 ».
- Exemple 02:AA:BB:CC:DD:EE : 00:AA:BB:FF:FE:CC:DD:EE, soit IID 00AA:BBFF:FECC:DDEE.

**Point de vigilance.** Il s’agit du mécanisme EUI-64 demandé, pas d’une affirmation que tous les IID de tous les systèmes sont toujours construits ainsi.

**À expliquer sans regarder.** Expliquer les deux transformations et les effectuer dans le bon ordre.

*Sources : TD de révision, p. 5 ; TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


### EUI-64 : adresse complète et sens inverse

Le TD demande aussi d’ajouter un /64 à l’IID ou de retrouver la MAC de départ.

- Avec FD12:3456:789A:BCDE::/64 et 06:10:20:30:40:50 : l’IID calculé est 0410:20FF:FE30:4050.
- L’adresse complète est FD12:3456:789A:BCDE:0410:20FF:FE30:4050.
- En sens inverse, pour un IID construit par cette méthode, retirer FF:FE au milieu et réinverser le bit U/L. 0211:22FF:FE33:4455 correspond ainsi à 00:11:22:33:44:55.

**Point de vigilance.** Ce raisonnement inverse suppose explicitement que l’IID a été produit par EUI-64 modifié.

**À expliquer sans regarder.** Retrouver la MAC sans confondre le FF:FE inséré et les octets d’origine.

*Sources : TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


# Chapitre 3 — IPsec : architecture, AH, ESP, SA et IKE

Relier le protocole, le mode, la politique et les paramètres actifs.

## 1. Architecture et services

### Pourquoi protéger IP ?

IP seul ne fournit pas toutes les propriétés de sécurité attendues.

- Observer un paquet menace la confidentialité ; le modifier menace l’intégrité ; usurper sa source menace l’authentification.
- Capturer puis retransmettre un paquet valide constitue un rejeu.
- IPsec ajoute au niveau réseau des mécanismes de protection et un contrôle d’accès fondé sur une politique.

**Point de vigilance.** Un paquet valide à l’origine n’est pas nécessairement acceptable lorsqu’il est rejoué.

**À expliquer sans regarder.** Associer écoute, altération, usurpation et duplication à leur propriété de sécurité.

*Sources : C3, diapo 3 ; C3, diapo 6.*


### Positionnement d’IPsec

IPsec agit sur le trafic IP, indépendamment de l’application.

- HTTP, FTP, DNS ou SSH peuvent bénéficier de la protection sans être modifiés dans l’architecture présentée.
- Les communications peuvent être hôte–hôte, hôte–passerelle ou passerelle–passerelle.
- IPsec fonctionne avec IPv4 et IPv6 ; SA, SPI, séquence, AH/ESP et IKE restent les notions centrales.

**Point de vigilance.** TLS et IPsec ne se situent pas au même endroit et ne protègent pas le même objet logique.

**À expliquer sans regarder.** Où agit IPsec et qui peut en être une extrémité ?

*Sources : C3, diapo 4 ; C3, diapo 38.*


### Les quatre briques de l’architecture

AH et ESP protègent ; SA décrit les paramètres ; IKE négocie.

- AH apporte intégrité, authentification et anti-rejeu, sans confidentialité.
- ESP peut apporter le chiffrement et, dans les configurations usuelles, intégrité/authentification et anti-rejeu.
- La SA représente le contexte actif d’une direction ; IKE gère négociation, authentification et établissement du matériel de clé.

**Point de vigilance.** IKE n’est pas le protocole qui encapsule chaque paquet applicatif protégé.

**À expliquer sans regarder.** Associer chaque brique à un verbe : protéger, décrire ou négocier.

*Sources : C3, diapo 5 ; C3, diapo 6.*


## 2. AH et ESP

### AH : protection sans chiffrement

Authentication Header ajoute une protection d’intégrité/authentification, pas un chiffrement du contenu.

- AH calcule une ICV, typiquement avec un mécanisme de type HMAC.
- Le calcul couvre la charge utile et les champs IP immuables ou prévisibles ; les champs mutables sont traités spécialement.
- Le contenu reste lisible, même lorsque l’authentification et l’anti-rejeu sont présents.

**Point de vigilance.** AH seul ne suffit pas à un besoin de confidentialité.

**À expliquer sans regarder.** Pourquoi peut-on lire la charge utile d’un paquet AH tout en détectant son altération ?

*Sources : C3, diapo 7 ; C3, diapo 8.*


### Lire les champs AH

Le format simplifié contient Next Header, Payload Len, Reserved, SPI, Sequence Number et Authentication Data.

- SPI sert à retrouver la SA utilisée pour traiter le paquet.
- Sequence Number participe à l’anti-rejeu.
- Authentication Data contient l’ICV calculée sur les éléments protégés.

**Point de vigilance.** Le SPI n’est pas la clé et la séquence n’est pas une valeur de chiffrement.

**À expliquer sans regarder.** Dans quel champ chercher l’ICV, l’identifiant de contexte et le compteur anti-rejeu ?

*Sources : C3, diapo 9.*


### AH et les champs mutables

Une représentation normalisée est utilisée pour calculer l’ICV sans confondre évolution normale et altération.

- En IPv4, le TTL diminue à chaque routeur et Header Checksum est recalculé.
- Émetteur et récepteur appliquent les règles de normalisation pour le calcul/vérification.
- Le paquet transmis conserve les valeurs nécessaires au routage ; un TTL réel de 64 n’est pas expédié avec TTL=0 à cause de la normalisation.

**Point de vigilance.** La représentation logique de calcul n’est pas une modification équivalente du paquet envoyé.

**À expliquer sans regarder.** Pourquoi AH ne peut-il pas authentifier tous les bits IP tels quels ?

*Sources : C3, diapo 10 ; C3, diapo 11.*


### ESP : protéger le contenu

Encapsulating Security Payload est présenté comme le protocole de protection dominant pour les VPN du cours.

- Il peut chiffrer le contenu et fournir intégrité et authentification de l’origine selon la suite choisie.
- Le numéro de séquence fournit le mécanisme anti-rejeu.
- ESP ne protège pas l’en-tête IP externe de la même manière qu’AH ; NAT-T permet des scénarios avec traduction d’adresses.

**Point de vigilance.** Les services précis dépendent de la configuration : le mot ESP ne suffit pas à décrire chaque algorithme et option.

**À expliquer sans regarder.** Pourquoi ESP convient-il à un VPN qui exige la confidentialité ?

*Sources : C3, diapo 12 ; C3, diapo 14.*


### Lire le format ESP

SPI et Sequence Number restent lisibles ; la charge utile fait partie de la zone typiquement chiffrée.

- Champs présentés : SPI, Sequence Number, Payload Data, Padding, Pad Len, Next Header et Auth/ICV.
- SPI et séquence sont nécessaires pour reconnaître le contexte et traiter le paquet.
- Le schéma distingue la zone chiffrée du champ d’authentification ; le détail dépend de la suite cryptographique.

**Point de vigilance.** « ESP chiffre le contenu » ne veut pas dire que tous les octets externes du paquet, y compris le SPI, sont cachés.

**À expliquer sans regarder.** Quels deux champs restent lisibles pour identifier et traiter la SA ?

*Sources : C3, diapo 13.*


### Comparer AH et ESP

Le besoin de confidentialité et la compatibilité avec le trajet orientent le choix.

- AH : intégrité, authentification, anti-rejeu, sans chiffrement. ESP : confidentialité et protections associées dans les configurations usuelles.
- AH est sensible aux modifications d’en-tête dues au NAT ; le cours présente ESP avec NAT-T.
- Les protocoles sont négociés ou configurés entre les extrémités selon la politique.

**Point de vigilance.** AH/ESP sont des protocoles ; transport/tunnel sont des modes. Il faut faire les deux choix séparément.

**À expliquer sans regarder.** Comparer services et conséquence d’une traduction d’adresses.

*Sources : C3, diapo 7 ; C3, diapo 14 ; C3, diapo 40.*


## 3. Transport, tunnel et extrémités

### Mode transport

L’en-tête IP original reste utilisé pour le routage.

- Le schéma est : en-tête IP original → ESP/AH → TCP/UDP et données applicatives.
- La protection porte principalement sur la charge utile. Les adresses originales restent visibles.
- Le scénario typique présenté est hôte–hôte ; le mode transport évite un nouvel en-tête IP externe.

**Point de vigilance.** Mode transport ne signifie pas « protection de la couche transport » : IPsec reste une architecture de couche réseau.

**À expliquer sans regarder.** Qu’est-ce qui reste visible et quel en-tête guide le routage ?

*Sources : C3, diapo 15 ; C3, diapo 16 ; C3, diapo 37.*


### Mode tunnel

Le paquet IP original entier devient la charge utile d’un nouveau paquet IP.

- Le schéma est : nouvel en-tête IP → ESP/AH → en-tête IP original → TCP/UDP et données.
- Le nouvel en-tête permet le routage entre les extrémités du tunnel.
- C’est le mode typique du site-à-site entre passerelles et il convient aussi à hôte–passerelle dans le cours.

**Point de vigilance.** Tunnel n’est pas un synonyme du protocole ESP ; le mode et le protocole décrivent deux dimensions différentes.

**À expliquer sans regarder.** Quelle partie est encapsulée et à quoi sert l’en-tête extérieur ?

*Sources : C3, diapo 15 ; C3, diapo 17 ; C3, diapo 35.*


### Les extrémités de la protection

Une extrémité IPsec construit ou traite les paquets AH/ESP.

- Elle peut être un hôte, un routeur, un pare-feu ou une passerelle VPN.
- Dans le site-à-site, R1 et R2 appliquent et retirent la protection ; les machines des LAN peuvent ignorer le tunnel.
- Le schéma utilise les LAN 2001:db8:10::/64 et 2001:db8:20::/64 avec un tunnel entre les passerelles.

**Point de vigilance.** La zone protégée d’un tunnel entre passerelles ne doit pas être confondue avec une protection automatique de tous les segments internes.

**À expliquer sans regarder.** Identifier les extrémités IPsec d’un scénario LAN A — R1 — Internet — R2 — LAN B.

*Sources : C3, diapo 18 ; C3, diapo 35 ; C3, diapo 36.*


## 4. SA, SPI, SPD et SAD

### Security Association : un contexte par sens

Une SA décrit comment protéger le trafic dans une direction donnée.

- Elle contient le protocole AH/ESP, les algorithmes, les clés, les durées de vie, les compteurs et les paramètres anti-rejeu.
- Une SA IPsec est unidirectionnelle. Une communication bidirectionnelle nécessite au minimum deux SA.
- Cette séparation permet de gérer indépendamment les clés et compteurs dans chaque sens.

**Point de vigilance.** « Le VPN existe dans les deux sens » n’implique pas « une SA unique bidirectionnelle ».

**À expliquer sans regarder.** Pourquoi faut-il au moins deux SA pour un échange bidirectionnel ?

*Sources : C3, diapo 19 ; C3, diapo 21.*


### SPI : retrouver la SA

Security Parameters Index est un identifiant de contexte présent dans AH ou ESP.

- Le titre du support associe SPI, destination et protocole de sécurité pour identifier une SA.
- Le SPI aide le récepteur à retrouver les paramètres actifs ; sa signification est locale au contexte, pas universelle.
- Chaque récepteur choisit ou associe le SPI de la SA entrante qu’il doit reconnaître. Les deux sens peuvent donc afficher des SPI différents.

**Point de vigilance.** SPI n’est ni une clé secrète, ni une adresse, ni une garantie universelle d’unicité.

**À expliquer sans regarder.** Pourquoi deux SPI différents peuvent-ils appartenir au même VPN ?

*Sources : C3, diapo 9 ; C3, diapo 20 ; C3, diapo 21.*


### SAD : les paramètres actifs

La Security Association Database contient les SA établies et leurs paramètres opérationnels.

- À la réception AH/ESP, l’équipement retrouve le contexte correspondant.
- La SA indique les clés, l’algorithme et les paramètres de vérification, déchiffrement et anti-rejeu.
- La SAD répond à « comment traiter ce paquet avec l’état actif ? ».

**Point de vigilance.** La SAD n’est pas la liste des décisions de politique BYPASS/DISCARD/PROTECT : c’est le rôle de la SPD.

**À expliquer sans regarder.** Où chercher la clé et le compteur associés à un SPI ?

*Sources : C3, diapo 22 ; C3, diapo 24.*


### SPD : la politique de sécurité

La Security Policy Database décide ce qu’il faut faire d’un flux.

- BYPASS laisse passer sans la protection IPsec demandée par une règle PROTECT ; DISCARD rejette ; PROTECT exige IPsec selon les exigences.
- Les sélecteurs peuvent inclure adresses, protocoles, ports et directions.
- Une règle peut déterminer protocole et mode ; lorsque la protection est nécessaire, IKE peut négocier les SA correspondantes.

**Point de vigilance.** La décision de protéger n’est pas déjà la clé de chiffrement active.

**À expliquer sans regarder.** Associer BYPASS, DISCARD et PROTECT à leur conséquence.

*Sources : C3, diapo 23 ; C3, diapo 24.*


### SPD et SAD : lire un traitement

La politique exprime le besoin ; l’association active décrit la manière de le réaliser.

- Déclenchement : un trafic correspond à une règle SPD exigeant une protection.
- Si nécessaire, IKE négocie et crée les SA. La SAD contient ensuite les paramètres utiles.
- AH/ESP protège le trafic de données conformément à ce contexte.

**Point de vigilance.** Ne pas inverser « quelles exigences ? » et « quels paramètres actifs ? ».

**À expliquer sans regarder.** Suivre un flux de la règle de politique à la protection du paquet.

*Sources : C3, diapo 24 ; C3, diapo 31.*


## 5. Anti-rejeu et intégrité

### Séquence et anti-rejeu

Chaque paquet d’une SA porte un numéro de séquence croissant.

- Le récepteur mémorise ce qui a déjà été accepté afin de détecter les duplications.
- Un paquet ancien retransmis peut ainsi être identifié et rejeté.
- Le mécanisme utilise une fenêtre pour tolérer certains paquets arrivés dans le désordre.

**Point de vigilance.** Un numéro inférieur au maximum reçu n’est pas systématiquement un rejeu : il faut regarder la fenêtre et le bitmap.

**À expliquer sans regarder.** Pourquoi mémoriser uniquement le plus grand numéro ne suffit-il pas ?

*Sources : C3, diapo 25.*


### Fenêtre glissante anti-rejeu

Elle permet d’accepter un retard encore admissible sans accepter une duplication.

- Dans la fenêtre : un numéro jamais reçu peut être accepté sous réserve des autres contrôles ; un numéro déjà reçu est rejeté.
- À gauche de la fenêtre : le paquet est trop ancien. Au-delà du maximum : un nouveau numéro valide fait avancer la fenêtre.
- Exemple du cours : fenêtre 1248 à 1263 ; une nouvelle copie de 1255 déjà reçu est un rejeu.

**Point de vigilance.** Ne pas déplacer la fenêtre sur la seule confiance dans un numéro non vérifié : les autres contrôles du paquet restent nécessaires.

**À expliquer sans regarder.** Décider pour 1247, 1255 déjà reçu et 1260 encore manquant dans la fenêtre de l’exemple.

*Sources : C3, diapo 26 ; C3, diapo 27.*


### HMAC et ICV

L’ICV est la valeur d’intégrité/authentification comparée par les extrémités.

- Les deux côtés partagent une clé d’authentification liée à la SA.
- L’émetteur calcule le HMAC sur les données définies par le protocole ; la valeur ou une forme tronquée prévue devient l’ICV.
- Le récepteur recalcule avec la même clé. Si les valeurs diffèrent, le paquet est considéré comme altéré ou non authentique.

**Point de vigilance.** HMAC authentifie et contrôle l’intégrité ; ce calcul ne rend pas à lui seul le contenu confidentiel.

**À expliquer sans regarder.** Pourquoi le récepteur peut-il comparer une ICV sans que HMAC soit un chiffrement ?

*Sources : C3, diapo 8 ; C3, diapo 28.*


## 6. Négociation IKE et scénarios

### Pourquoi IKE ?

Internet Key Exchange automatise l’établissement et la gestion des associations de sécurité.

- Les pairs doivent s’authentifier, choisir des paramètres compatibles et établir du matériel de clé de façon sûre.
- IKE crée, renouvelle et supprime les SA ; il établit un canal de négociation sécurisé.
- Le cours présente un échange de type Diffie–Hellman et les SA de trafic qui seront utilisées par AH/ESP.

**Point de vigilance.** IKE négocie ; AH/ESP protège les données. Envoyer les clés de session en clair n’est pas le mécanisme décrit.

**À expliquer sans regarder.** Quels problèmes la configuration manuelle de toutes les SA poserait-elle ?

*Sources : C3, diapo 29 ; C3, diapo 30.*


### Authentifier les pairs IKE

L’objectif est d’éviter l’établissement du tunnel avec un faux pair.

- Une PSK est une clé pré-partagée, simple mais difficile à gérer à grande échelle selon le support.
- Les certificats conviennent à une organisation structurée avec PKI.
- D’autres méthodes peuvent exister selon l’implémentation et le scénario, sans détail supplémentaire dans le chapitre.

**Point de vigilance.** Un échange Diffie–Hellman ne remplace pas à lui seul la vérification de l’identité du pair.

**À expliquer sans regarder.** Comparer les deux moyens d’authentification explicitement développés.

*Sources : C3, diapo 32.*


### Diffie–Hellman dans IKE

Chaque pair combine sa valeur privée et les valeurs publiques pour établir un secret commun.

- Les valeurs publiques sont échangées ; les valeurs privées restent locales.
- Un observateur ne doit pas pouvoir retrouver facilement le secret à partir des seules informations publiques.
- Le secret contribue à la dérivation des clés de négociation et de protection des SA.

**Point de vigilance.** Le secret calculé et un certificat d’identité n’ont pas le même rôle.

**À expliquer sans regarder.** Qu’est-ce qui traverse le réseau et qu’est-ce qui sert à dériver les clés ?

*Sources : C3, diapo 30 ; C3, diapo 33.*


### IKEv1 et IKEv2 : le niveau attendu

Le chapitre donne des repères conceptuels plutôt qu’une trace détaillée de tous les messages IKEv2.

- Pour IKEv1 : Main Mode, Aggressive Mode, Quick Mode, ISAKMP/Oakley et deux phases historiques sont cités.
- IKEv2 est présenté comme une simplification et une modernisation de la négociation.
- Le support privilégie généralement IKEv2 pour un nouveau déploiement compatible.

**Point de vigilance.** Le détail des champs d’IKE_SA_INIT ou d’IKE_AUTH n’est pas fourni ici ; il n’est pas ajouté comme exigence du cours.

**À expliquer sans regarder.** Quels noms appartiennent aux anciens repères IKEv1 ?

*Sources : C3, diapo 34.*


### Choisir dans un scénario

Le choix combine extrémités, mode, protocole et proposition cryptographique compatible.

- Deux réseaux privés reliés via Internet : passerelles comme extrémités, mode tunnel, ESP et au minimum deux SA pour les deux sens.
- Deux hôtes supportant IPsec : le mode transport peut éviter l’en-tête externe tout en laissant les adresses originales visibles.
- Les suites ne sont pas figées par IPsec ; les extrémités doivent avoir au moins une proposition commune acceptable par leur politique.

**Point de vigilance.** Un désaccord d’algorithmes ne se résout pas parce que les deux équipements annoncent simplement le nom IPsec.

**À expliquer sans regarder.** Justifier les quatre choix d’un VPN site-à-site sans confondre mode et protocole.

*Sources : C3, diapo 35 ; C3, diapo 37 ; C3, diapo 39.*


# Chapitre 4 — Cryptanalyse : des coûts aux statistiques

Poser une hypothèse, calculer, puis vérifier plutôt que deviner.

## 1. Objectifs, coûts et modèles d’attaque

### Cryptographie, cryptanalyse et cryptologie

La cryptographie conçoit les protections ; la cryptanalyse confronte leur résistance aux attaques.

- Le cryptanalyste peut rechercher une clé ou un clair, exploiter des régularités ou montrer que la résistance réelle est inférieure à celle annoncée.
- Cryptologie = cryptographie + cryptanalyse dans la synthèse du cours.
- Trouver une faiblesse peut conduire à corriger, renforcer ou abandonner un mécanisme.

**Point de vigilance.** La cryptanalyse ne se résume pas à deviner un mot de passe pour franchir une authentification.

**À expliquer sans regarder.** Expliquer les deux disciplines et leur complémentarité.

*Sources : C4, diapo 3 ; C4, diapo 10 ; C4, diapo 11.*


### Que veut dire « casser » ?

Une attaque peut être significative sans restituer exactement toute la clé.

- Retrouver tout ou partie du clair, réduire fortement l’espace de recherche ou distinguer une structure d’un comportement aléatoire sont des objectifs possibles.
- Une complexité inférieure à la force brute est un résultat important dans le cadre présenté.
- Le cours distingue l’importance théorique du résultat et la possibilité pratique de l’exécuter.

**Point de vigilance.** Un résultat meilleur que la force brute ne signifie pas automatiquement que l’attaque est réalisable avec les ressources disponibles.

**À expliquer sans regarder.** Citer trois résultats cryptanalytiques autres que « retrouver toute la clé ».

*Sources : C4, diapo 13.*


### Temps, mémoire et données

La faisabilité dépend simultanément des ressources en calcul, en stockage/mémoire et en observations.

- Temps : opérations et débit, ou durée déjà exprimée. Mémoire : valeurs intermédiaires et espace nécessaire.
- Données : quantité de messages ou observations indispensable. Une machine rapide ne compense pas automatiquement un manque de données.
- Un compromis temps/mémoire peut déplacer le coût, sans supprimer la contrainte totale.

**Point de vigilance.** RAM et stockage ne sont pas interchangeables dans l’exercice de faisabilité.

**À expliquer sans regarder.** Pourquoi une attaque très rapide peut-elle rester irréalisable ?

*Sources : C4, diapo 5 ; C4, diapo 7 ; C4, diapo 8.*


### Force brute : calculer le coût

Une clé de n bits donne 2^n possibilités dans le modèle de recherche exhaustive du cours.

- Temps maximal = nombre d’essais / débit. Avec 20 bits et 100 000 clés/s : 1 048 576 / 100 000 ≈ 10,49 s.
- Pour une durée en heures, diviser les secondes par 3 600. Les limites doivent être comparées après conversion dans les mêmes unités.
- La diapositive 6 oppose ce petit exemple à 2^128 ≈ 3,4 × 10^38 possibilités.

**Point de vigilance.** Ne pas utiliser n à la place de 2^n et ne pas oublier de distinguer le temps maximal de toute autre estimation.

**À expliquer sans regarder.** Calculer un temps à partir d’un espace de clés et d’un débit.

*Sources : C4, diapo 6 ; C4, diapo 9.*


### Le modèle minimal et Kerckhoffs

Le modèle note C = Eₖ(M) et M = Dₖ(C) ; le secret attendu est la clé K.

- M est le clair, C le texte chiffré, E le chiffrement et D le déchiffrement.
- Le cryptanalyste connaît généralement l’algorithme. La connaissance du fonctionnement ne doit pas suffire à compromettre le système sous ses hypothèses de sécurité.
- On peut remplacer une clé sans devoir dissimuler ou modifier l’algorithme.

**Point de vigilance.** La complexité apparente et le secret de l’algorithme ne remplacent pas une analyse de résistance.

**À expliquer sans regarder.** Expliquer Kerckhoffs en le distinguant de « publier la clé ».

*Sources : C4, diapo 12.*


### COA, KPA, CPA et CCA

Le modèle d’attaque décrit les informations et possibilités dont dispose l’attaquant.

- COA : textes chiffrés seuls. KPA : certains couples clair/chiffré connus.
- CPA : choix de clairs et obtention des chiffrés correspondants. CCA : choix de certains chiffrés et observation de leur déchiffrement.
- Le cassage César/Vigenère du cours est principalement COA, aidé par les statistiques du français.

**Point de vigilance.** Connaître un clair déjà existant n’est pas équivalent à choisir les clairs soumis au chiffrement.

**À expliquer sans regarder.** Identifier le modèle à partir d’un scénario en une phrase.

*Sources : C4, diapo 14.*


## 2. César et analyse fréquentielle

### Pourquoi les fréquences aident

Une langue naturelle présente des fréquences non uniformes, conservées globalement par une substitution monoalphabétique.

- Le chiffrement déplace les lettres mais laisse des régularités exploitables.
- Le tableau français donne E ≈ 17,39 %, puis des lettres fréquentes comme A, S, I, T et N.
- Les valeurs sont indicatives et dépendent du corpus ; les textes longs donnent généralement des statistiques plus utiles.

**Point de vigilance.** La lettre la plus fréquente d’un petit texte ne représente pas forcément E.

**À expliquer sans regarder.** Pourquoi une substitution peut-elle conserver une signature statistique ?

*Sources : C4, diapo 15 ; C4, diapo 16.*


### César : les deux formules

Une même clé k décale toutes les lettres, codées A=0 à Z=25.

- Chiffrement : C = (M + k) mod 26. Déchiffrement : M = (C − k) mod 26.
- Avec k=3, A devient D et X devient A par retour modulo 26.
- Il y a 26 décalages possibles dans le modèle du support : la force brute est déjà facile.

**Point de vigilance.** Le déchiffrement soustrait ; le modulo doit ramener le résultat dans l’intervalle 0 à 25.

**À expliquer sans regarder.** Expliquer E=4 et H=7, puis calculer la clé de E vers H.

*Sources : C4, diapo 4 ; C4, diapo 17.*


### Une hypothèse fréquentielle se vérifie

Si H domine, on peut tester E → H, soit k = 7 − 4 = 3.

- Compter les lettres, formuler la correspondance, calculer k puis déchiffrer avec ce décalage.
- Sur l’exemple OH PHVVDJH…, le début devient LE MESSAGE… puis un texte français cohérent.
- La cohérence du résultat valide l’hypothèse ; elle ne doit pas être supposée avant le déchiffrement.

**Point de vigilance.** Le support est explicite : la fréquence propose une hypothèse, pas une preuve automatique.

**À expliquer sans regarder.** Quelles étapes suivent le choix de la lettre dominante ?

*Sources : C4, diapo 16 ; C4, diapo 18.*


### Exercice César du chapitre

Le texte fourni se déchiffre avec un décalage de 3.

- Énoncé : FUBSWRJUDSKLH HW FUBSWDQDOBVH VRQW FRPSOHPHQWDLUHV.
- Résolution calculée ici avec la formule du cours : CRYPTOGRAPHIE ET CRYPTANALYSE SONT COMPLEMENTAIRES.
- F=5, 5−3=2 donne C ; U=20, 20−3=17 donne R. La vérification porte sur tout le message.

**Point de vigilance.** Cette résolution est produite pour réviser ; la diapositive fournit l’exercice, pas ce corrigé détaillé.

**À expliquer sans regarder.** Montrer le calcul des trois premières lettres et vérifier le sens de la phrase.

*Sources : C4, diapo 19.*


## 3. Vigenère et périodicité

### Vigenère : plusieurs César

La clé répétée applique différents décalages selon la position.

- Avec une clé de longueur m, les positions se répartissent en m sous-textes, chacun soumis à un décalage constant.
- Pour CLE : positions 1,4,7… utilisent C ; 2,5,8… utilisent L ; 3,6,9… utilisent E.
- Le mélange global des fréquences rend l’analyse directe moins efficace ; on cherche d’abord la période puis les colonnes.

**Point de vigilance.** Il ne suffit pas de soustraire la première lettre de clé à tout le message.

**À expliquer sans regarder.** Pourquoi une longueur de clé connue ramène-t-elle le problème à plusieurs César ?

*Sources : C4, diapo 20 ; C4, diapo 23.*


### Formule de Vigenère et indice cyclique

Le décalage dépend de la lettre de clé affectée à chaque position, et la clé se répète.

- Avec un indice i commençant à 0 : Cᵢ = (Mᵢ + K[i mod m]) mod 26 et Mᵢ = (Cᵢ − K[i mod m]) mod 26.
- Avec les positions du support commençant à 1, utiliser la lettre de clé d’indice (i−1) mod m dans une table indexée à 0.
- Cette notation explicite le sens de la répétition décrite par le cours ; la diapositive écrit « Kᵢ mod m » de façon typographiquement ambiguë.

**Point de vigilance.** On applique le modulo m à l’indice de la clé, pas à la valeur alphabétique de la lettre de clé.

**À expliquer sans regarder.** Quelle lettre de CLE protège la position 7 lorsque les positions commencent à 1 ?

*Sources : C4, diapo 23.*


### Former les colonnes

Pour une longueur candidate m, la colonne j contient j, j+m, j+2m… dans la numérotation à partir de 1.

- Pour m=3, les colonnes commencent respectivement aux positions 1, 2 et 3.
- Chaque colonne est censée avoir subi un même décalage si la longueur candidate est pertinente.
- On compte alors A à Z dans chaque colonne, et non uniquement dans le texte entier.

**Point de vigilance.** Mélanger les colonnes détruit le raisonnement qui permet de retrouver chaque lettre de clé.

**À expliquer sans regarder.** Écrire les quatre premières positions de la deuxième colonne pour m=3.

*Sources : C4, diapo 20 ; C4, diapo 30 ; C4, diapo 32.*


## 4. Kasiski et indice de coïncidence

### Kasiski : les étapes

Kasiski exploite les distances entre des séquences répétées pour proposer des périodes.

- Chercher des séquences répétées d’au moins trois lettres et noter leur position de départ.
- Calculer les distances, puis les PGCD et diviseurs communs.
- Tester les longueurs candidates avec l’IC et vérifier ensuite le clair.

**Point de vigilance.** Une répétition peut être fortuite. Kasiski suggère une longueur sans la prouver.

**À expliquer sans regarder.** Passer des positions répétées à une liste de longueurs candidates.

*Sources : C4, diapo 26 ; C4, diapo 28 ; C4, diapo 29.*


### Kasiski : exemple des diapositives

Le support retient les distances 42, 18 et 21.

- IUP : positions 15 et 57, distance 42. PVV : 62 et 80, distance 18. IPEPGD : 72 et 93, distance 21.
- PGCD(42,18)=6 puis PGCD(6,21)=3 ; diviseurs de 3 : 1 et 3.
- La longueur 3 est candidate ; 1 correspond à un César. Les sous-séquences d’un même bloc répété ne sont pas des preuves indépendantes.

**Point de vigilance.** Ne pas annoncer « la clé est 3 » : 3 désigne ici une longueur candidate, pas les lettres de la clé.

**À expliquer sans regarder.** Calculer le PGCD et expliquer ce qu’il permet, et ne permet pas, de conclure.

*Sources : C4, diapo 28 ; C4, diapo 29.*


### Indice de coïncidence : le sens

L’IC estime la probabilité que deux lettres tirées dans un texte soient identiques.

- Pour des effectifs nᵢ et une longueur N : IC = Σ nᵢ(nᵢ−1) / [N(N−1)].
- La formule tient compte du tirage sans reprendre le même caractère. Pour une colonne de 35 lettres, le dénominateur vaut 35×34=1190.
- Une colonne de moins de deux caractères ne permet pas ce calcul avec un dénominateur non nul.

**Point de vigilance.** nᵢ est un effectif dans cette formule, pas un pourcentage déjà normalisé.

**À expliquer sans regarder.** Expliquer le numérateur et le dénominateur avant de calculer.

*Sources : C4, diapo 30 ; C4, diapo 31.*


### IC théorique et repères

Le support distingue l’IC empirique et les repères théoriques basés sur les probabilités des lettres.

- La formule théorique illustrée est IC_langue = Σ pᵢ².
- Repères affichés : aléatoire uniforme sur 26 lettres ≈ 1/26 ≈ 0,03846 ; français ≈ 0,0778 ; anglais ≈ 0,0667.
- La diapositive 36 rappelle que l’IC français est souvent autour de 0,07–0,08 et que les textes courts fluctuent.

**Point de vigilance.** Un repère statistique n’est pas une valeur exacte obligatoire pour chaque extrait.

**À expliquer sans regarder.** Pourquoi un petit texte français peut-il avoir un IC éloigné de 0,0778 ?

*Sources : C4, diapo 31 ; C4, diapo 36.*


### IC moyen et comparaison des périodes

On calcule les IC des colonnes d’une longueur candidate, puis leur moyenne.

- Pour l’exemple du support, la diapositive 35 affiche 0,14118 ; 0,08403 ; 0,06723 et une moyenne de 0,09748.
- La diapositive 36 compare m=1,2,3,6,7 et présente m=3 comme candidat prioritaire.
- Le recomptage du texte et des tableaux 33–34 retrouve les numérateurs 168, 100 et 80, puis la moyenne affichée à l’arrondi près.

**Point de vigilance.** Vérifier les effectifs et calculer la moyenne à partir des valeurs non arrondies évite de propager les erreurs d’arrondi.

**À expliquer sans regarder.** Quelles étapes permettent de comparer deux longueurs candidates sans tirer de conclusion automatique ?

*Sources : C4, diapo 30 ; C4, diapo 35 ; C4, diapo 36.*


### Longueur fondamentale et multiples

Une période multiple de la vraie période peut elle aussi produire un IC élevé.

- Une clé de trois lettres répétée deux fois donne une clé équivalente de six lettres.
- Dans l’exemple, Kasiski propose 3 et les IC pour 3 et 6 sont élevés.
- Le cours teste d’abord m=3 puis valide par déchiffrement.

**Point de vigilance.** Le plus grand IC brut n’est pas, à lui seul, une preuve de la longueur fondamentale.

**À expliquer sans regarder.** Pourquoi CLE et CLECLE peuvent-ils décrire le même chiffrement périodique ?

*Sources : C4, diapo 36 ; C4, diapo 37.*


### Retrouver les lettres de clé

L’analyse fréquentielle est appliquée séparément à chaque colonne puis contrôlée par le clair.

- Dans le tableau du support : G supposé issu de E donne 6−4=2, donc C ; P donne 15−4=11, donc L ; I donne 8−4=4, donc E.
- La clé candidate est CLE. Déchiffrer les premières lettres NLWGNYTTX donne LA SECURIT…
- Le message final du support évoque la sécurité des réseaux, l’analyse des journaux, les alertes et la protection des données.

**Point de vigilance.** La lettre dominante fournit une hypothèse de clé ; seule la vérification du déchiffrement complète le raisonnement.

**À expliquer sans regarder.** Démontrer les trois décalages et tester les neuf premières lettres.

*Sources : C4, diapo 38 ; C4, diapo 39 ; C4, diapo 40.*


## 5. Exemples, calculs et vérification

### Exercice de faisabilité : les quatre attaques

Comparer séparément temps, mémoire/stockage et données aux limites : 10 h, 32 Go RAM, 1 To stockage, 40 000 messages.

- A : 2^30/(2×10^5) = 5 368,70912 s ≈ 1,4913 h ; 16 Go ; 25 %×40 000=10 000 messages. Réalisable.
- B : 2^16 s ≈ 18,2044 h ; 500 Go ; 2^4×2 000=32 000. Non : temps. C : 3×10^9/10^5=30 000 s ≈ 8,3333 h ; 2^5=32 Go ; 5 000 messages. Réalisable, RAM exactement à la limite.
- D : 1,5×10^9/10^6=1 500 s ≈ 0,4167 h ; 1,2 To ; 30 000 messages. Non : stockage. Calculs effectués ici à partir de l’énoncé.

**Point de vigilance.** La ressource limitante suffit à rendre une attaque non réalisable, même si les autres sont dans les limites.

**À expliquer sans regarder.** Justifier chaque verdict par les trois comparaisons.

*Sources : C4, diapo 9.*


### Hash jouet : tester les candidats

L’exercice définit H(M) = somme ASCII(M) mod 100 et cherche une valeur 33.

- Calculs produits ici : DOG = 68+79+71 = 218 → 18 ; SUN = 83+85+78 = 246 → 46.
- KEY = 75+69+89 = 233 → 33 ; RED = 82+69+68 = 219 → 19 ; CAT = 67+65+84 = 216 → 16.
- KEY est le candidat correspondant parmi cette liste. La fonction n’a que 100 résultats possibles et ne garantit pas l’unicité d’un mot hors de la liste.

**Point de vigilance.** Ce hash jouet est une fonction pédagogique de l’exercice, pas un mécanisme de stockage de mots de passe à utiliser.

**À expliquer sans regarder.** Pourquoi le candidat compatible n’est-il pas une preuve d’unicité de l’antécédent ?

*Sources : C4, diapo 22.*


### Vigenère avec MOT : vérifier l’énoncé

Le texte « VS LGWL UBZQBBQIK » et la clé MOT sont fournis deux fois, sans corrigé.

- En répétant MOT sur les lettres seulement (espaces conservés mais non comptés), la formule donne « JE SUIS INGENIEUR ».
- Début : V(21)−M(12)=J(9) ; S(18)−O(14)=E(4) ; L(11)−T(19)=−8 ≡18, donc S.
- Cette résolution précise sa convention de gestion des espaces ; les diapositives ne la détaillent pas.

**Point de vigilance.** Toujours expliciter l’alignement de la clé, surtout si le texte contient des espaces.

**À expliquer sans regarder.** Calculer les trois premières lettres et poursuivre avec la clé répétée.

*Sources : C4, diapo 21 ; C4, diapo 24.*


### La méthode complète de cryptanalyse

La réponse attendue doit montrer une démarche reproductible, pas seulement une clé devinée.

- Répétitions → positions → distances → PGCD/diviseurs → longueurs candidates.
- Colonnes → effectifs A à Z → IC de chaque colonne → IC moyen → période plausible.
- Hypothèses fréquentielles → lettres de clé → déchiffrement → vérification linguistique et contrôle des données.

**Point de vigilance.** Un tableau incohérent ou un résultat non français doit être signalé ; on ne force pas les nombres pour obtenir la réponse souhaitée.

**À expliquer sans regarder.** Expliquer la chaîne complète et situer l’étape qui vérifie l’hypothèse.

*Sources : C4, diapo 41.*


# Repères & messages

## supported_versions

**Où / valeur :** ClientHello

Annonce les versions TLS prises en charge.

**À distinguer :** Versions proposées ≠ version choisie.

**Limite :** Le serveur doit trouver une version commune.

*Sources : C1, diapo 9.*

## cipher_suites

**Où / valeur :** ClientHello

Liste les suites proposées au serveur.

**À distinguer :** Choix final dans ServerHello.

**Limite :** Le nom des suites ne se lit pas de la même façon en TLS 1.2 et 1.3.

*Sources : C1, diapo 9.*

## key_share

**Où / valeur :** ClientHello et ServerHello

Transporte une contribution publique éphémère ECDHE.

**À distinguer :** Secret calculé localement.

**Limite :** Ce n’est pas la clé privée ou le secret partagé transmis en clair.

*Sources : C1, diapo 9 ; C1, diapo 10.*

## supported_groups

**Où / valeur :** ClientHello

Annonce les groupes/courbes acceptés.

**À distinguer :** Exemples approfondis : X25519, secp256r1.

**Limite :** À distinguer des algorithmes de signature.

*Sources : C1, diapo 9.*

## signature_algorithms

**Où / valeur :** ClientHello

Annonce les algorithmes de signature acceptés.

**À distinguer :** Authentification, pas chiffrement de données.

**Limite :** Ne remplace pas la validation du certificat.

*Sources : C1, diapo 9.*

## SNI / server_name

**Où / valeur :** ClientHello ; option -servername

Annonce le nom DNS demandé au serveur.

**À distinguer :** Demander un nom.

**Limite :** Envoyer le SNI n’est pas vérifier le SAN.

*Sources : C1, diapo 9 ; C1, diapo 24.*

## ALPN

**Où / valeur :** Négociation TLS, exemple HTTP/2

Négocie le protocole applicatif.

**À distinguer :** Protocole au-dessus de TLS.

**Limite :** Ce n’est ni un nom DNS ni un champ de certificat.

*Sources : C1, diapo 9.*

## Subject Alternative Name

**Où / valeur :** Certificat X.509

Contient les noms autorisés à comparer au nom attendu.

**À distinguer :** SAN = noms du certificat.

**Limite :** Un nom absent du SAN ne devient pas valide parce que SNI le demande.

*Sources : C1, diapo 12.*

## Issuer

**Où / valeur :** Certificat X.509

Identifie l’autorité émettrice.

**À distinguer :** Émetteur de la signature du certificat.

**Limite :** À distinguer de Subject, l’identité du titulaire.

*Sources : C1, diapo 12.*

## Not Before / Not After

**Où / valeur :** Certificat X.509

Délimitent sa période de validité.

**À distinguer :** Contrôle avec la date du test.

**Limite :** Une horloge erronée peut fausser l’évaluation.

*Sources : C1, diapo 12.*

## Key Usage / EKU

**Où / valeur :** Extensions X.509

Décrivent les usages de clé.

**À distinguer :** Usage approprié lors de la validation.

**Limite :** Une signature valide ne dispense pas du contrôle d’usage.

*Sources : C1, diapo 12.*

## CA racine

**Où / valeur :** Magasin de confiance du client

Termine une chaîne de confiance approuvée.

**À distinguer :** Racine déjà détenue par le client.

**Limite :** Auto-signée ne signifie pas automatiquement approuvée.

*Sources : C1, diapo 13.*

## CertificateVerify

**Où / valeur :** Handshake TLS

Prouve la possession de la clé privée.

**À distinguer :** Signature liée au handshake courant.

**Limite :** Le certificat public seul ne constitue pas cette preuve.

*Sources : C1, diapo 14.*

## HKDF

**Où / valeur :** Dérivation des secrets TLS 1.3

Produit des secrets distincts par direction et phase.

**À distinguer :** Extract puis Expand.

**Limite :** Ne réalise pas à lui seul le chiffrement des données.

*Sources : C1, diapo 15.*

## Finished

**Où / valeur :** Fin des échanges de handshake

Confirme secrets dérivés et intégrité du transcript.

**À distinguer :** HMAC avec une clé Finished.

**Limite :** Ne confondre ni avec CertificateVerify ni avec une donnée HTTP.

*Sources : C1, diapo 20.*

## NewSessionTicket

**Où / valeur :** Après une connexion initiale TLS

Fournit des informations permettant une reprise ultérieure.

**À distinguer :** PSK / ticket.

**Limite :** La reprise peut être refusée et ne réutilise pas simplement l’ancienne clé AES.

*Sources : C1, diapo 32.*

## CertificateRequest

**Où / valeur :** Handshake mTLS, côté serveur

Demande un certificat client.

**À distinguer :** Authentification mutuelle.

**Limite :** L’autorisation des actions reste distincte.

*Sources : C1, diapo 34.*

## FE80::/10

**Où / valeur :** Préfixe link-local

Communiquer sur le lien et joindre des voisins.

**À distinguer :** Portée locale.

**Limite :** Non routé vers Internet dans le modèle étudié.

*Sources : C2, diapo 9 ; C2, diapo 10.*

## FC00::/7

**Où / valeur :** Préfixe ULA

Adressage privé interne, souvent FD00::/8.

**À distinguer :** Unique Local.

**Limite :** Ne pas confondre FD et le multicast FF.

*Sources : C2, diapo 9.*

## 2000::/3

**Où / valeur :** Préfixe Global Unicast du tableau

Repère de la catégorie globale.

**À distinguer :** Nuance 2001:db8 dans le TD.

**Limite :** Le préfixe documentaire n’est pas une attribution de production.

*Sources : C2, diapo 9 ; TD de révision, p. 5.*

## FF00::/8

**Où / valeur :** Préfixe multicast

Un paquet vise un groupe d’interfaces.

**À distinguer :** Pas de broadcast IPv6.

**Limite :** Le groupe exact précise les destinataires.

*Sources : C2, diapo 9.*

## ff02::1

**Où / valeur :** Destination multicast locale

Tous les nœuds IPv6 du lien.

**À distinguer :** Destination possible des RA.

**Limite :** Ne signifie pas tous les hôtes d’Internet.

*Sources : C2, diapo 11.*

## ff02::2

**Où / valeur :** Destination multicast locale

Tous les routeurs IPv6 du lien.

**À distinguer :** Destination des RS du support.

**Limite :** À distinguer de tous les nœuds.

*Sources : C2, diapo 11.*

## RS — type 133

**Où / valeur :** ICMPv6 / Neighbor Discovery

Solliciter rapidement un routeur.

**À distinguer :** Hôte → ff02::2.

**Limite :** Pas de Target Address.

*Sources : C2, diapo 28.*

## RA — type 134

**Où / valeur :** ICMPv6 / Neighbor Discovery

Annoncer préfixe et paramètres de configuration.

**À distinguer :** Routeur link-local → ff02::1 ou unicast.

**Limite :** Une annonce ne prouve pas l’autorisation du routeur.

*Sources : C2, diapo 29.*

## NS — type 135

**Où / valeur :** ICMPv6 / Neighbor Discovery

Résoudre un voisin, vérifier son accessibilité ou effectuer DAD.

**À distinguer :** Cible recherchée ; source :: pendant DAD.

**Limite :** Suivre la fiche 30 pour la destination, l’infographie 27 est divergente.

*Sources : C2, diapo 30.*

## NA — type 136

**Où / valeur :** ICMPv6 / Neighbor Discovery

Répondre à NS ou annoncer une modification.

**À distinguer :** Target Link-Layer Address.

**Limite :** Source, destination et cible peuvent désigner des objets différents.

*Sources : C2, diapo 31.*

## Redirect — type 137

**Où / valeur :** Tableau des messages NDP

Indiquer une meilleure route.

**À distinguer :** Cinquième message de la synthèse.

**Limite :** Non développé en procédure complète dans le chapitre.

*Sources : C2, diapo 13.*

## Target Address

**Où / valeur :** Contenu de NS ou NA

Désigne l’adresse recherchée ou annoncée.

**À distinguer :** Ni source, ni forcément destination IPv6.

**Limite :** Ce champ n’existe pas dans RS/RA comme dans NS/NA.

*Sources : C2, diapo 32.*

## Next Header

**Où / valeur :** En-tête IPv6

Identifie l’en-tête/protocole suivant.

**À distinguer :** 6 TCP ; 50 ESP ; 51 AH ; 58 ICMPv6 dans les fiches.

**Limite :** Ce n’est pas un port TCP/UDP.

*Sources : C2, diapo 22 ; C2, diapo 23 ; C2, diapo 28.*

## DAD

**Où / valeur :** Avant l’activation de l’adresse candidate

Vérifier l’absence de doublon.

**À distinguer :** Neighbor Solicitation.

**Limite :** Ne fournit pas l’authentification du voisin.

*Sources : C2, diapo 16.*

## SLAAC

**Où / valeur :** Autoconfiguration du poste IPv6

Former l’adresse à partir du préfixe et de l’IID.

**À distinguer :** RS/RA, préfixe et route par défaut.

**Limite :** Le déroulé fourni est une vue simplifiée.

*Sources : C2, diapo 17 ; C2, diapo 18.*

## RA Guard

**Où / valeur :** Contrôle des ports d’accès réseau

Filtrer les RA non autorisés.

**À distinguer :** Protection contre Rogue RA.

**Limite :** Ne chiffre pas le contenu applicatif.

*Sources : C2, diapo 20 ; C2, diapo 24.*

## AH

**Où / valeur :** En-tête de sécurité IPsec

Intégrité, authentification et anti-rejeu.

**À distinguer :** Pas de chiffrement.

**Limite :** Sensible à certaines modifications d’en-tête liées au NAT.

*Sources : C3, diapo 8.*

## ESP

**Où / valeur :** Protection du trafic IPsec

Confidentialité et protections associées selon la suite.

**À distinguer :** SPI et séquence visibles.

**Limite :** Les services exacts dépendent de la configuration.

*Sources : C3, diapo 12 ; C3, diapo 13.*

## Security Association

**Où / valeur :** Contexte actif IPsec par sens

Décrire clés, algorithmes, durée de vie et anti-rejeu.

**À distinguer :** Unidirectionnelle.

**Limite :** Au moins deux SA pour une communication bidirectionnelle simple.

*Sources : C3, diapo 19.*

## SPI

**Où / valeur :** En-tête AH ou ESP

Retrouver le contexte SA au récepteur.

**À distinguer :** SPI + destination + protocole.

**Limite :** Ce n’est pas une clé cryptographique ni un identifiant universel.

*Sources : C3, diapo 20.*

## Sequence Number

**Où / valeur :** AH/ESP, par SA

Participer au contrôle anti-rejeu.

**À distinguer :** Numéro croissant et mémoire des réceptions.

**Limite :** Ne chiffre rien.

*Sources : C3, diapo 9 ; C3, diapo 25.*

## SAD

**Où / valeur :** Security Association Database

Conserver les SA actives et paramètres opérationnels.

**À distinguer :** Quelle clé, quel algorithme, quel compteur ?

**Limite :** N’exprime pas à elle seule les règles de sélection du trafic.

*Sources : C3, diapo 22.*

## SPD

**Où / valeur :** Security Policy Database

Décider BYPASS, DISCARD ou PROTECT pour les flux.

**À distinguer :** Politique avant état actif.

**Limite :** À distinguer des clés et compteurs de la SAD.

*Sources : C3, diapo 23.*

## Fenêtre anti-rejeu

**Où / valeur :** État du récepteur pour une SA

Tolérer le désordre sans réaccepter les doublons.

**À distinguer :** Borne gauche, maximum, bitmap.

**Limite :** Les autres contrôles de validité du paquet restent nécessaires.

*Sources : C3, diapo 26 ; C3, diapo 27.*

## ICV

**Où / valeur :** Authentication Data / contrôle d’intégrité

Valeur calculée puis comparée par le récepteur.

**À distinguer :** HMAC ou forme prévue par la suite dans le modèle.

**Limite :** Une ICV valide ne remplace pas le contrôle anti-rejeu.

*Sources : C3, diapo 8 ; C3, diapo 28.*

## Mode transport

**Où / valeur :** IPsec entre hôtes dans le cas typique

Protéger la charge utile sous l’en-tête original.

**À distinguer :** Adresses originales visibles.

**Limite :** Mode ≠ protocole AH/ESP.

*Sources : C3, diapo 15 ; C3, diapo 16.*

## Mode tunnel

**Où / valeur :** IPsec entre extrémités de tunnel

Encapsuler le paquet IP original dans un nouveau paquet.

**À distinguer :** En-tête externe pour le trajet du tunnel.

**Limite :** Ne pas supposer une protection de tous les segments internes.

*Sources : C3, diapo 15 ; C3, diapo 17.*

## IKE

**Où / valeur :** Négociation liée à IPsec

Authentifier et négocier les paramètres et SA.

**À distinguer :** DH ; création, renouvellement, suppression.

**Limite :** AH/ESP, et non IKE, protègent le trafic de données.

*Sources : C3, diapo 29 ; C3, diapo 30.*

## PSK

**Où / valeur :** Authentification des pairs IKE

Utiliser une clé pré-partagée.

**À distinguer :** Simple dans le modèle du cours.

**Limite :** Gestion difficile à grande échelle.

*Sources : C3, diapo 32.*

## COA / KPA / CPA / CCA

**Où / valeur :** Modèles d’attaque

Décrire l’information et le contrôle disponibles.

**À distinguer :** Chiffré seul ; clair connu ; clair choisi ; chiffré choisi.

**Limite :** Connaître des statistiques linguistiques n’équivaut pas à connaître les clairs exacts.

*Sources : C4, diapo 14.*

## César

**Où / valeur :** Chiffrement monoalphabétique à décalage

Appliquer une même clé à toutes les lettres.

**À distinguer :** A=0 ; addition/soustraction modulo 26.

**Limite :** Seulement 26 décalages dans le modèle.

*Sources : C4, diapo 17.*

## Vigenère

**Où / valeur :** Clé répétée et positions périodiques

Appliquer plusieurs décalages de César.

**À distinguer :** Une colonne par position de clé.

**Limite :** Le mélange global des fréquences masque les sous-distributions.

*Sources : C4, diapo 20 ; C4, diapo 23.*

## Kasiski

**Où / valeur :** Analyse des séquences répétées

Proposer une période à partir des distances.

**À distinguer :** PGCD puis diviseurs.

**Limite :** Une suggestion n’est pas une preuve de longueur.

*Sources : C4, diapo 26 ; C4, diapo 29.*

## IC empirique

**Où / valeur :** Effectifs par colonne

Estimer les coïncidences de lettres.

**À distinguer :** Σ nᵢ(nᵢ−1) / N(N−1).

**Limite :** Exige N≥2 ; sensible aux petits échantillons.

*Sources : C4, diapo 30.*

## IC théorique

**Où / valeur :** Probabilités de lettres d’une langue

Fournir un repère de distribution.

**À distinguer :** Σ pᵢ² ; aléatoire ≈0,03846 ; français ≈0,0778.

**Limite :** Les repères ne sont pas des seuils absolus pour chaque texte.

*Sources : C4, diapo 31.*

## Période fondamentale

**Où / valeur :** Comparaison de plusieurs longueurs de clé

Distinguer vraie période et multiples.

**À distinguer :** CLE et CLECLE peuvent être équivalentes.

**Limite :** Un grand IC seul ne suffit pas.

*Sources : C4, diapo 36 ; C4, diapo 37.*

# Lire les commandes et filtres

## `tcp.port == 443`

Afficher le trafic utilisant le port TCP 443 dans le cas HTTPS étudié.

- tcp.port : champ de port TCP.
- == 443 : test de valeur.

**Précaution :** Un filtre ne prouve pas à lui seul que le contenu est un handshake TLS réussi.

*Sources : C1, diapo 23.*

## `tls`

Afficher le trafic reconnu comme TLS par l’analyseur.

- tls : protocole ciblé par le filtre.

**Précaution :** Filtrer n’est pas déchiffrer les Application Data.

*Sources : C1, diapo 23.*

## `tls.handshake.type == 1`

Repérer les ClientHello.

- handshake.type : type de message de handshake.
- 1 : ClientHello dans le filtre du support.

**Précaution :** Ce n’est pas le SYN TCP, qui précède TLS dans le scénario.

*Sources : C1, diapo 23.*

## `tls.handshake.type == 2`

Repérer les ServerHello.

- 2 : ServerHello dans les filtres fournis.

**Précaution :** Les choix négociés sont à distinguer des propositions du client.

*Sources : C1, diapo 23.*

## `ipv6.addr == … && tls`

Combiner une sélection d’adresse IPv6 et le protocole TLS.

- ipv6.addr == … : emplacement de l’adresse à comparer.
- && tls : condition TLS conjointe.

**Précaution :** Les points de suspension sont un emplacement à compléter dans le support, pas une adresse exécutable.

*Sources : C1, diapo 23.*

## `tcp.port == 8443`

Cibler le port du serveur de démonstration local.

- 8443 : port utilisé par le TP local OpenSSL.

**Précaution :** Changer le filtre ne change pas le port d’écoute du serveur.

*Sources : C1, diapo 23 ; C1, diapo 24.*

## `openssl s_server -accept 127.0.0.1:8443 -cert serveur.crt -key serveur.key -www -tls1_3`

Jouer le serveur TLS 1.3 local de l’exemple.

- s_server : rôle serveur.
- -accept : adresse et port d’écoute.
- -cert / -key : certificat et clé du serveur.
- -tls1_3 : version imposée.

**Précaution :** Espaces rétablis pour la lecture depuis la diapositive. Aucun serveur n’est lancé par ce site.

*Sources : C1, diapo 24.*

## `openssl s_client -connect 127.0.0.1:8443 -servername localhost -CAfile serveur.crt -verify_hostname localhost -verify_return_error -tls1_3`

Jouer le client local et valider le nom dans l’exemple du cours.

- -connect : cible de connexion.
- -servername : envoi SNI.
- -CAfile : fichier utilisé comme base de confiance dans cet exemple local.
- -verify_hostname / -verify_return_error : contrôles explicités par le support.

**Précaution :** Le scénario de certificat local n’est pas une politique générale de confiance de production ; lecture seulement.

*Sources : C1, diapo 24.*

## `-servername localhost`

Envoyer le nom localhost en SNI.

- Le nom demandé est annoncé au serveur.

**Précaution :** Envoyer le SNI ne remplace pas le contrôle de correspondance au SAN.

*Sources : C1, diapo 24.*

## `-verify_hostname localhost`

Vérifier que le certificat autorise le nom localhost.

- Le support relie explicitement cette option au SAN.

**Précaution :** À distinguer de -servername, qui annonce le nom sans effectuer ce contrôle à sa place.

*Sources : C1, diapo 24.*

## `-verify_return_error`

Arrêter la validation lorsqu’une erreur de certificat est rencontrée.

- La vérification ne doit pas simplement être ignorée.

**Précaution :** L’option ne répare ni la date, ni le nom, ni la chaîne du certificat.

*Sources : C1, diapo 24.*

## `-tls1_3`

Imposer TLS 1.3 dans les exemples locaux.

- Le TP propose ensuite de comparer avec TLS 1.2.

**Précaution :** Une version imposée peut conduire à un échec s’il n’y a pas de compatibilité.

*Sources : C1, diapo 24 ; C1, diapo 29.*

# Notes de lecture des supports

## Références : ordre réel des diapositives, pas numéro imprimé

Les quatre présentations comptent 35, 32, 40 et 41 diapositives. Le TD compte 7 pages. Les références C1–C4 utilisent la position dans le fichier ; plusieurs numéros imprimés sont décalés ou recommencent. Les images intégrées permettent de contrôler les schémas et équations.

*Sources : C1, diapo 30 ; C2, diapo 6 ; C4, diapo 25 ; TD de révision, p. 1.*


## NS : deux représentations différentes dans le chapitre IPv6

L’infographie de C2 diapo 27 indique ff02::1 comme destination de NS, alors que la fiche détaillée 30 indique le multicast solicited-node correspondant à la cible. Les deux originaux sont conservés. Les questions sur ce champ précisent qu’elles suivent la fiche 30 ; le site ne prétend pas que les deux dessins sont identiques.

*Sources : C2, diapo 27 ; C2, diapo 30.*


## IPv6 et « plus de sécurité » : ne pas en déduire une protection universelle

C2 diapo 5 évoque une implémentation de base d’IPsec et SEND, mais le même chapitre présente les faux RA, l’usurpation de voisin et les contrôles correspondants. Les supports ne décrivent ni un déploiement SEND ni l’activation d’IPsec pour chaque flux. La synthèse distingue donc réseau, protection du contenu et contrôle des annonces.

*Sources : C2, diapo 5 ; C2, diapo 19 ; C2, diapo 20 ; C2, diapo 24.*


## 2001:db8 : exemple d’adressage et préfixe documentaire

Le chapitre emploie 2001:db8 dans ses exemples de Global Unicast. Le TD, question 12, précise que 2001:db8::/32 est réservé à la documentation malgré sa forme dans 2000::/3. Cette précision est issue du TD, pas d’une substitution silencieuse du cours.

*Sources : C2, diapo 9 ; C2, diapo 25 ; TD de révision, p. 5.*


## EUI-64 et écriture canonique : compléments identifiés

Le TD teste EUI-64 modifié et la forme canonique ; les quatre présentations ne détaillent pas entièrement ces recettes. Deux compléments de méthode sont donc explicitement distingués du cours : RFC 4291, annexe A, pour FF:FE et le bit U/L ; RFC 5952, §4, pour l’écriture canonique. Ils servent à résoudre le TD, sans élargir silencieusement le programme.

*Sources : TD de révision, p. 4 ; TD de révision, p. 5 ; TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A ; RFC 5952 — section 4 — https://www.rfc-editor.org/rfc/rfc5952.html#section-4


## Validité syntaxique, forme canonique et appartenance à un préfixe

Le QCM IPv6 change parfois de question : une écriture valide (question 3) n’est pas nécessairement canonique (question 4). Les questions 1 et 5 raisonnent sur l’appartenance binaire au préfixe FE80::/10. Leur correction n’est pas présentée comme une validation exhaustive de tous les champs ou usages d’une adresse réellement déployée.

*Sources : TD de révision, p. 3 ; TD de révision, p. 4.*


## Vigenère : la répétition porte sur l’indice de la clé

C4 diapo 23 écrit « Kᵢ mod m », avec une notation ambiguë. Les explications et la clé répétée CLECLE… donnent le sens retenu : pour un indice i commençant à 0, K[i mod m]. Cette réécriture pédagogique est signalée ; elle ne remplace pas l’image source.

*Sources : C4, diapo 20 ; C4, diapo 23.*


## Exemple cryptanalyse : les chiffres ont été recomptés

Le texte de 105 lettres des diapositives 25–27 donne trois colonnes de 35 caractères. Les sommes nᵢ(nᵢ−1) sont bien 168, 100 et 80 ; les IC sont 0,141176…, 0,084034… et 0,067227… ; la moyenne est 0,097479… . Ces calculs reproduisent les arrondis des diapositives 35–36. Le déchiffrement avec CLE retrouve le message de la diapositive 40.

*Sources : C4, diapo 25 ; C4, diapo 32 ; C4, diapo 35 ; C4, diapo 36 ; C4, diapo 40.*


## TD, exercice 2 : IC élevé ne veut pas dire longueur prouvée

En utilisant strictement les effectifs du TD, les trois N valent 12, les sommes valent 22, 22 et 20, et l’IC moyen vaut 16/99 ≈ 0,1616. Ce n’est pas 0,0778. Le tableau est concentré sur A–E et les colonnes sont courtes. Le corrigé proposé ne confirme pas fermement m=3 sur ce seul résultat et ne le rejette pas définitivement ; il demande les autres comparaisons et la validation du clair. Le fichier fourni ne contient pas de corrigé officiel.

*Sources : TD de révision, p. 1 ; TD de révision, p. 2 ; C4, diapo 30 ; C4, diapo 36.*


## TD, TLS : la question ECDHE mobilise aussi le chapitre

L’exercice 1 demande des réponses fondées exclusivement sur le scénario, mais sa question 4 demande le nom du mécanisme d’échange, qui n’est pas donné dans le tableau du scénario. Le corrigé distingue les réponses directement lues dans le tableau et ECDHE, rappel de C1 diapositives 7 et 11.

*Sources : TD de révision, p. 1 ; C1, diapo 7 ; C1, diapo 11.*


## TD : corrigé produit pour réviser, non fourni par l’enseignant

Le TD original comporte quatre exercices, sans correction jointe. Les réponses courtes, calculs, justifications et lettres de QCM du site sont des résolutions pédagogiques. Les hypothèses sont précisées : alignement de MOT sur les lettres, autres contrôles réussis avant un verdict anti-rejeu, sélection éventuelle du routeur plutôt qu’automatique. Les dix examens sont des entraînements, pas des annales.

*Sources : TD de révision, p. 1 ; TD de révision, p. 2 ; TD de révision, p. 3 ; C4, diapo 21 ; C3, diapo 26.*


## Commandes : lecture des extraits, pas un TP exécuté

Le chapitre TLS contient des exemples OpenSSL locaux et des filtres Wireshark. Les espaces entre options ont été rétablis dans la vue de lecture lorsque l’extraction les collait. Les images originales restent disponibles. Le site n’exécute aucune commande et ne prétend pas valider un laboratoire réel.

*Sources : C1, diapo 23 ; C1, diapo 24 ; C1, diapo 29.*
