# TRACE — TD de révision : corrigé proposé

**Statut :** les énoncés viennent du TD fourni. Les réponses, calculs et justifications ci-dessous ont été produits pour la révision. Aucun corrigé officiel n’était joint.

**Références :** C1–C4 = position dans les présentations ; TD = page du PDF. Les compléments EUI-64 et écriture canonique sont explicitement référencés aux RFC correspondantes.

# Exercice 1 · TLS 1.3 et PKI

Réponses courtes : un terme ou OUI/NON, puis la justification.

Un étudiant ouvre https://portail.emsi.ma. Le scénario fixe la date du test au 14/11/2026 : ne pas la remplacer par la date du jour.

| Champ | Valeur du scénario |
| --- | --- |
| Subject CN | portail.emsi.ma |
| SAN | DNS:portail.emsi.ma ; DNS:intranet.emsi.ma |
| Émetteur | CA-Intermédiaire-EMSI |
| Chaîne | CA-Intermédiaire-EMSI → Racine-EMSI, présente dans le magasin de confiance |
| Validité | 01/09/2026 au 01/09/2027 |
| Date du test | 14/11/2026 |
| Preuve de possession | Signature TLS CertificateVerify valide |



## 1. Le certificat est-il valide pour le nom portail.emsi.ma ?

**Réponse proposée :** OUI

1. portail.emsi.ma figure explicitement dans le SAN.
2. La question vise le nom ; le scénario fournit aussi une période et une chaîne cohérentes.

*Sources : TD de révision, p. 1 ; C1, diapo 12.*


## 2. Quelle clé permet de vérifier la signature du certificat émis par CA-Intermédiaire-EMSI ?

**Réponse proposée :** La clé publique de CA-Intermédiaire-EMSI

1. Le certificat serveur a été signé par cette CA intermédiaire.
2. Ne pas répondre « clé publique du serveur » : celle-ci sert à vérifier CertificateVerify du serveur, pas la signature de son émetteur.

*Sources : TD de révision, p. 1 ; C1, diapo 13 ; C1, diapo 14.*


## 3. Quel message TLS 1.3 prouve la possession de la clé privée du serveur ?

**Réponse proposée :** CertificateVerify

1. Le scénario indique que sa signature est valide.
2. Ce message relie la preuve de possession au handshake courant.

*Sources : TD de révision, p. 1 ; C1, diapo 14.*


## 4. Quel mécanisme d’échange de clés éphémères permet d’établir le secret partagé dans TLS 1.3 ?

**Réponse proposée :** ECDHE

1. Réponse attendue selon le handshake du chapitre 1 : échange Diffie–Hellman éphémère sur courbes elliptiques.
2. Nuance d’énoncé : ce terme n’est pas dans le tableau du scénario. Cette réponse mobilise aussi le cours, malgré la consigne « exclusivement les données du scénario ».

*Sources : TD de révision, p. 1 ; C1, diapo 7 ; C1, diapo 11.*


## 5. Le certificat du serveur authentifie-t-il à lui seul l’étudiant ?

**Réponse proposée :** NON

1. Il authentifie l’identité du serveur auprès du client.
2. mTLS ajoute un certificat et une preuve du client ; une authentification applicative peut également intervenir, mais elle n’est pas donnée dans le scénario.

*Sources : TD de révision, p. 1 ; C1, diapo 21 ; C1, diapo 34.*


# Exercice 2 · Kasiski et indice de coïncidence

Conserver les valeurs du TD, détailler les calculs et nuancer la conclusion.

Un message est chiffré par Vigenère. Le TD fournit les répétitions ci-dessous, puis les effectifs de trois colonnes pour m=3.

| Séquence | 1re position | 2e position |
| --- | --- | --- |
| XQF | 8 | 32 |
| MTR | 15 | 51 |
| BKL | 22 | 70 |
| ZNP | 31 | 91 |


| Lettre | C1 | C2 | C3 |
| --- | --- | --- | --- |
| A | 4 | 1 | 3 |
| B | 3 | 4 | 1 |
| C | 2 | 2 | 3 |
| D | 2 | 3 | 2 |
| E | 1 | 2 | 3 |
| F | 0 | 0 | 0 |


## 1. Calculer les distances entre les occurrences des séquences répétées.

**Réponse proposée :** 24, 36, 48 et 60

1. XQF : 32−8=24. MTR : 51−15=36.
2. BKL : 70−22=48. ZNP : 91−31=60.

*Sources : TD de révision, p. 1 ; C4, diapo 26.*


## 2. Décomposer les distances en facteurs premiers et déterminer leur PGCD.

**Réponse proposée :** PGCD = 12

1. 24 = 2³×3 ; 36 = 2²×3² ; 48 = 2⁴×3 ; 60 = 2²×3×5.
2. Facteurs communs aux plus petits exposants : 2²×3=12.

*Sources : TD de révision, p. 1 ; C4, diapo 29.*


## 3. En déduire les longueurs de clé candidates et justifier.

**Réponse proposée :** 1, 2, 3, 4, 6 et 12 sont les diviseurs candidats du PGCD.

1. Les distances sont compatibles avec une période divisant 12.
2. 1 correspond au cas César. Kasiski ne prouve pas la longueur ; les répétitions peuvent être fortuites. La suite ne teste explicitement que m=3.

*Sources : TD de révision, p. 1 ; C4, diapo 29.*


## 4. Vérifier que chaque colonne contient N=12 caractères.

**Réponse proposée :** N₁=N₂=N₃=12

1. C1 : 4+3+2+2+1+0=12.
2. C2 : 1+4+2+3+2+0=12. C3 : 3+1+3+2+3+0=12.

*Sources : TD de révision, p. 2.*


## 5. Calculer S=Σ fᵢ(fᵢ−1) pour chaque colonne en détaillant les produits.

**Réponse proposée :** S₁=22 ; S₂=22 ; S₃=20

1. C1 : 4×3 + 3×2 + 2×1 + 2×1 + 1×0 + 0×(−1) = 12+6+2+2=22.
2. C2 : 1×0 + 4×3 + 2×1 + 3×2 + 2×1 + 0×(−1) = 0+12+2+6+2=22.
3. C3 : 3×2 + 1×0 + 3×2 + 2×1 + 3×2 + 0×(−1) = 6+0+6+2+6=20.

*Sources : TD de révision, p. 2 ; C4, diapo 30.*


## 6. Calculer IC pour chaque colonne à quatre décimales.

**Réponse proposée :** IC₁=0,1667 ; IC₂=0,1667 ; IC₃=0,1515

1. Le dénominateur commun vaut N(N−1)=12×11=132.
2. IC₁=IC₂=22/132=1/6≈0,1666667. IC₃=20/132=5/33≈0,1515152.

*Sources : TD de révision, p. 2 ; C4, diapo 30.*


## 7. Calculer l’indice de coïncidence moyen.

**Réponse proposée :** IC moyen = 16/99 ≈ 0,1616

1. (22/132 + 22/132 + 20/132)/3 = 64/396 = 16/99.
2. Calculer la moyenne avant l’arrondi évite de cumuler les erreurs numériques.

*Sources : TD de révision, p. 2 ; C4, diapo 30.*


## 8. Comparer à 0,0385 (aléatoire) et 0,0778 (français). Peut-on confirmer m=3 ?

**Réponse proposée :** Pas fermement avec ces seuls effectifs.

1. 0,1616 est nettement supérieur aux deux repères, et non proche de 0,0778.
2. Les colonnes n’ont que 12 lettres ; le tableau est concentré sur A à E. La forte concentration explique un IC élevé sans prouver une période.
3. Conclusion pédagogique proposée : m=3 reste une candidate de Kasiski, mais la confirmation nécessite d’autres longueurs et un déchiffrement cohérent. On ne remplace pas les effectifs et on ne conclut pas non plus que m=3 est impossible.

*Sources : TD de révision, p. 2 ; C4, diapo 29 ; C4, diapo 30 ; C4, diapo 36.*


# Exercice 3 · Rogue Router Advertisement

Lire les paramètres, attribuer les paquets et séparer détournement réseau et chiffrement.

R1 légitime et Kali sont reliés à SW1 avec les postes Windows PC1 et PC2. Kali utilise radvd. PC1 possède initialement 2001:DB8:100:1:200:FF:FEAA:1111 et la route par défaut FE80::1.

| Paramètre | R1 légitime | Kali / attaquant |
| --- | --- | --- |
| Link-local | FE80::1 | FE80::BAD:1 |
| Préfixe | 2001:DB8:100:1::/64 | 2001:DB8:666:1::/64 |
| Router Lifetime | 1800 s | 9000 s |
| Router Preference | Medium | High |
| Type ICMPv6 | 134 | 134 |


| Paquet | Source | Destination | Type |
| --- | --- | --- | --- |
| P1 | FE80::1 | FF02::1 | 134 |
| P2 | FE80::BAD:1 | FF02::1 | 134 |
| P3 | FE80::A1 | FF02::2 | 133 |
| P4 | FE80::BAD:1 | FF02::1 | 134 |


## 1. A1. Quel est le rôle d’un Router Advertisement dans SLAAC ?

**Réponse proposée :** Annoncer les paramètres de configuration IPv6.

1. Le RA apporte notamment le préfixe et les informations de routeur par défaut.
2. L’hôte combine le préfixe avec son IID dans le modèle SLAAC étudié.

*Sources : TD de révision, p. 2 ; C2, diapo 17 ; C2, diapo 18 ; C2, diapo 29.*


## 2. A2. Pourquoi Kali peut-il émettre des RA alors qu’il n’est pas le routeur légitime ?

**Réponse proposée :** Parce que l’émission d’un message RA n’est pas réservée par sa seule syntaxe à un équipement autorisé.

1. Le scénario suppose qu’une machine locale envoie ces messages via radvd.
2. Le type 134 indique le rôle du message, pas une preuve cryptographique de légitimité. Aucun contrôle d’authentification efficace n’est décrit dans ce scénario.

*Sources : TD de révision, p. 2 ; C2, diapo 19 ; C2, diapo 20.*


## 3. A3. Pourquoi SW1 transmet-il ces annonces aux clients ?

**Réponse proposée :** Dans le scénario, aucun filtrage RA non autorisé efficace n’est décrit sur les ports concernés.

1. Le scénario suppose que les annonces atteignent les postes ; on en déduit que SW1 les relaie sur le lien.
2. Il ne faut pas inventer une configuration détaillée de SW1. RA Guard est précisément la contre-mesure demandée plus loin.

*Sources : TD de révision, p. 2 ; TD de révision, p. 3 ; C2, diapo 20.*


## 4. A4. Distinguer les messages ICMPv6 de type 133 et 134.

**Réponse proposée :** 133 = RS ; 134 = RA.

1. RS : un hôte sollicite les routeurs, vers FF02::2 dans la fiche.
2. RA : un routeur annonce ses paramètres, vers FF02::1 ou en unicast selon la fiche.

*Sources : TD de révision, p. 2 ; C2, diapo 28 ; C2, diapo 29.*


## 5. B1. Identifier précisément l’attaque.

**Réponse proposée :** Rogue Router Advertisement : annonces de routeur IPv6 frauduleuses.

1. Kali annonce un préfixe et des paramètres de routeur non autorisés.
2. Le risque étudié est l’influence de la configuration et de la route par défaut, avec un détournement possible.

*Sources : TD de révision, p. 2 ; TD de révision, p. 3 ; C2, diapo 20.*


## 6. B2. PC1 peut-il posséder simultanément des adresses issues des deux préfixes ? Justifier.

**Réponse proposée :** Oui, les deux ensembles d’adresses peuvent coexister tant que leurs conditions de validité le permettent.

1. Réponse raisonnée au scénario : un nouveau préfixe annoncé n’implique pas l’effacement immédiat des adresses de l’ancien.
2. Distinguer l’existence des adresses de la sélection de la route par défaut. Les détails de temporisation des préfixes ne sont pas tous fournis.

*Sources : TD de révision, p. 2 ; TD de révision, p. 3 ; C2, diapo 17 ; C2, diapo 29.*


## 7. B3. Expliquer Router Lifetime=9000 et Router Preference=High.

**Réponse proposée :** 9000 s est la durée de validité annoncée du routeur ; High favorise ce candidat dans la sélection.

1. 9000 s = 150 minutes = 2 h 30, contre 1800 s = 30 minutes pour R1.
2. Une préférence élevée influence la sélection mais ne prouve pas à elle seule que PC1 a choisi Kali. Le TD demande ensuite « si PC1 choisit Kali ».
3. La lifetime de routeur ne doit pas être confondue avec toutes les durées de validité des adresses ou préfixes.

*Sources : TD de révision, p. 2 ; TD de révision, p. 3 ; C2, diapo 29.*


## 8. B4. Si PC1 choisit Kali comme routeur par défaut, expliquer le risque d’interception vers un réseau distant.

**Réponse proposée :** Le trafic distant peut transiter par Kali.

1. L’attaquant peut observer le trafic qui passe effectivement par lui et tenter une perturbation ou une modification.
2. Cela ne prouve pas qu’il déchiffre une session TLS correctement validée. La possibilité de modifier la route et la possibilité de lire le contenu sont distinctes.

*Sources : TD de révision, p. 3 ; C2, diapo 20 ; C1, diapo 26.*


## 9. C1. Identifier les paquets du routeur légitime et ceux de l’attaquant.

**Réponse proposée :** R1 : P1. Kali : P2 et P4. P3 est un RS émis par un hôte.

1. Comparer la source du paquet avec le tableau des adresses légitimes et malveillantes.
2. P3 a la source FE80::A1 et le type 133 : ce n’est pas un RA de R1 ou de Kali.

*Sources : TD de révision, p. 3.*


## 10. C2. Expliquer FF02::1 et FF02::2.

**Réponse proposée :** FF02::1 : tous les nœuds du lien ; FF02::2 : tous les routeurs du lien.

1. Les deux destinations ont une portée locale au lien dans le cours.
2. Ne pas interpréter ces groupes comme tous les hôtes d’Internet.

*Sources : TD de révision, p. 3 ; C2, diapo 11.*


## 11. C3. Pourquoi P3 est-il envoyé à FF02::2 ?

**Réponse proposée :** Parce que P3 est un Router Solicitation adressé aux routeurs du lien.

1. Le type 133 identifie RS.
2. L’hôte sollicite des annonces de configuration des routeurs.

*Sources : TD de révision, p. 3 ; C2, diapo 28.*


## 12. C4. Quel indice suggère un routeur non autorisé ?

**Réponse proposée :** Des RA type 134 proviennent de FE80::BAD:1, distinct de la source légitime FE80::1 du scénario.

1. Les paquets P2 et P4 portent cette source.
2. L’attribution comme non autorisée repose sur le contexte fourni, pas sur une règle universelle disant qu’une adresse contenant BAD est malveillante.

*Sources : TD de révision, p. 2 ; TD de révision, p. 3.*


## 13. D1. Expliquer le rôle de RA Guard.

**Réponse proposée :** Filtrer les RA non autorisés sur les ports d’accès.

1. Le but est d’empêcher qu’une machine cliente non autorisée influence les hôtes par ses annonces de routeur.
2. Ce contrôle ne chiffre pas les données applicatives.

*Sources : TD de révision, p. 3 ; C2, diapo 20 ; C2, diapo 24.*


## 14. D2. Pourquoi TLS reste-t-il utile même si Kali détourne le trafic ?

**Réponse proposée :** Il protège le contenu, l’intégrité et l’authentification du serveur si la validation est correcte.

1. Un intermédiaire ne possède pas automatiquement la clé privée du serveur légitime.
2. Un certificat non approuvé ou pour un mauvais nom doit être refusé. Ignorer les alertes peut contourner la confiance ; TLS ne supprime pas l’attaque RA ou une interruption de service.

*Sources : TD de révision, p. 3 ; C1, diapo 2 ; C1, diapo 26 ; C1, diapo 27.*


## 15. D3. Après l’arrêt de radvd, les clients suppriment-ils immédiatement Kali de leur liste de routeurs ?

**Réponse proposée :** Pas nécessairement.

1. L’arrêt du service signifie que les annonces cessent ; il ne constitue pas une annonce de retrait reçue par les clients.
2. La durée annoncée peut rester pertinente jusqu’à expiration, et d’autres mécanismes peuvent influer sur l’état. Le scénario ne permet pas d’annoncer une suppression instantanée ni un temps réel exact pour tous les clients.

*Sources : TD de révision, p. 3 ; C2, diapo 29.*


# Exercice 4 · QCM IPv6 et EUI-64

Les 20 questions du document fourni, avec explications et réponse unique.

Répondre sans regarder le corrigé. Les questions d’EUI-64 sont des transformations des octets donnés. La méthode détaillée est identifiée comme complément de cours.



## 1. Quelle est la dernière adresse appartenant au préfixe link-local FE80::/10 ?

A. FEBF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF
B. FEFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF
C. FE8F:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF
D. FE7F:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF

**Réponse proposée :** A — FEBF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF

1. /10 fixe les dix premiers bits. Les six bits restants du premier groupe peuvent aller à 1 : FE80 à FEBF. Puis tous les autres bits valent 1 pour la dernière adresse.

*Sources : TD de révision, p. 3.*


## 2. Parmi ces adresses, laquelle appartient à FC00::/7 sans appartenir à FD00::/8 ?

A. FE00::1
B. FCAB:1234::1
C. FDAB:1234::1
D. FBFF::1

**Réponse proposée :** B — FCAB:1234::1

1. FC00::/7 couvre les premiers octets FC et FD. FCAB est dans la partie FC, pas dans FD00::/8.

*Sources : TD de révision, p. 3.*


## 3. Quelle adresse est correctement compressée et représente exactement huit groupes de 16 bits ?

A. 2001:DB8::1::5
B. 2001:DB8:0:0:0:0:0:0:1
C. 2001:DB8::0:0:0:1
D. 2001:DB8:0:0:0:0:0:0:0

**Réponse proposée :** C — 2001:DB8::0:0:0:1

1. C a six groupes explicites et :: représente les deux manquants. Elle est syntaxiquement valide, mais pas la forme canonique maximale. A comporte deux :: ; B et D ont neuf groupes.

*Sources : TD de révision, p. 4.*


## 4. Quelle est la forme canonique compressée de 2001:0DB8:0000:0000:0001:0000:0000:0001 ?

A. 2001:db8::1::1
B. 2001:db8:0:0:1::0:1
C. 2001:db8:0:0:1:0:0:1
D. 2001:db8::1:0:0:1

**Réponse proposée :** D — 2001:db8::1:0:0:1

1. Complément RFC 5952 : à égalité de longueur entre deux suites de zéros, comprimer la première à gauche. La réponse D est canonique ; la simple validité syntaxique n’est pas le critère demandé.

*Sources : TD de révision, p. 4.*

**Complément de méthode, distinct des supports :** RFC 5952 — section 4 — https://www.rfc-editor.org/rfc/rfc5952.html#section-4


## 5. Une interface possède FE90::ABCD. Quelle affirmation est correcte ?

A. Elle est link-local car FE90 appartient à FE80::/10
B. Elle est ULA car FE90 est voisin de FC00
C. Elle est multicast car elle commence par FE
D. Elle est global unicast dans 2000::/3

**Réponse proposée :** A — Elle est link-local car FE90 appartient à FE80::/10

1. Réponse A dans le raisonnement d’appartenance au /10 du TD : FE90 se trouve entre FE80 et FEBF. Ce test de préfixe n’est pas présenté comme une validation exhaustive de toutes les contraintes d’une adresse déployée.

*Sources : TD de révision, p. 4.*


## 6. Quel est le préfixe réseau /64 de FD7A:12BC:34DE:0056:ABCD:0000:0000:0001 ?

A. FD7A:12BC:34DE::/64
B. FD7A:12BC:34DE:56::/64
C. FD7A:12BC:34DE:56:ABCD::/64
D. FD7A:12BC::/64

**Réponse proposée :** B — FD7A:12BC:34DE:56::/64

1. Un /64 garde les quatre premiers groupes : FD7A:12BC:34DE:0056. Le groupe 0056 peut s’écrire 56.

*Sources : TD de révision, p. 4.*


## 7. Un paquet est destiné à FF02::2. Quelle interprétation est exacte ?

A. Tous les hôtes sur Internet
B. Tous les nœuds du lien
C. Tous les routeurs IPv6 du lien
D. Le routeur le plus proche par anycast

**Réponse proposée :** C — Tous les routeurs IPv6 du lien

1. FF02::2 désigne tous les routeurs IPv6 du lien ; FF02::1 vise tous les nœuds.

*Sources : TD de révision, p. 4.*


## 8. Un administrateur configure la même adresse IPv6 sur trois serveurs avec routage anycast. Quel résultat attend-on ?

A. Chaque paquet est dupliqué vers les trois serveurs
B. Une adresse multicast FF00::/8 est automatiquement créée
C. Les trois serveurs doivent partager la même MAC
D. Le routage sélectionne une destination parmi les trois

**Réponse proposée :** D — Le routage sélectionne une destination parmi les trois

1. Anycast sélectionne une instance via le routage, contrairement au multicast de groupe.

*Sources : TD de révision, p. 4.*


## 9. Quelle affirmation distingue correctement anycast et unicast ?

A. Une adresse anycast peut avoir la même syntaxe qu’une unicast : la différence dépend de son attribution et du routage
B. Une adresse anycast commence toujours par FF
C. Une adresse unicast ne peut jamais être globale
D. Anycast impose un IID de 48 bits

**Réponse proposée :** A — Une adresse anycast peut avoir la même syntaxe qu’une unicast : la différence dépend de son attribution et du routage

1. La différence est liée à l’attribution à plusieurs interfaces et au comportement du routage, pas à un préfixe FF obligatoire.

*Sources : TD de révision, p. 5.*


## 10. Combien de sous-réseaux /64 peut-on former à partir du préfixe 2001:DB8:1234::/48 ?

A. 256
B. 65 536
C. 4 096
D. 1 024

**Réponse proposée :** B — 65 536

1. 64−48=16 bits supplémentaires de sous-réseau ; 2^16=65 536.

*Sources : TD de révision, p. 5.*


## 11. Pour le préfixe 2001:DB8:ABCD:1200::/56, quelle adresse appartient au même /56 ?

A. 2001:DB8:ABCD:1300::1
B. 2001:DB8:ABCE:12FF::1
C. 2001:DB8:ABCD:12FF::1
D. 2001:DB8:ABCD:1101::1

**Réponse proposée :** C — 2001:DB8:ABCD:12FF::1

1. Les 48 premiers bits fixent 2001:DB8:ABCD ; les 8 suivants fixent 12 au début du quatrième groupe. Il varie de 1200 à 12FF.

*Sources : TD de révision, p. 5.*


## 12. Quelle proposition décrit correctement 2001:DB8::/32 ?

A. Une plage ULA utilisable sur Internet
B. Une plage multicast globale
C. Une plage link-local
D. Un préfixe réservé à la documentation, malgré sa forme dans 2000::/3

**Réponse proposée :** D — Un préfixe réservé à la documentation, malgré sa forme dans 2000::/3

1. Le TD précise expressément la réservation documentaire de ce préfixe très utilisé dans les exemples.

*Sources : TD de révision, p. 5.*


## 13. MAC 02:AA:BB:CC:DD:EE : quel IID EUI-64 modifié obtient-on ?

A. 00AA:BBFF:FECC:DDEE
B. 02AA:BBFF:FECC:DDEE
C. 00AA:BBFE:FFCC:DDEE
D. 04AA:BBFF:FECC:DDEE

**Réponse proposée :** A — 00AA:BBFF:FECC:DDEE

1. Insérer FF:FE après les trois premiers octets. Premier octet : 02 XOR 02 = 00. Résultat : 00:AA:BB:FF:FE:CC:DD:EE.

*Sources : TD de révision, p. 5.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 14. MAC 3C:52:82:10:20:30 : quel IID EUI-64 modifié est correct ?

A. 3C52:82FF:FE10:2030
B. 3E52:82FF:FE10:2030
C. 3A52:82FF:FE10:2030
D. 3E52:82FE:FF10:2030

**Réponse proposée :** B — 3E52:82FF:FE10:2030

1. 3C XOR 02 = 3E ; insérer FF:FE, pas FE:FF. Résultat 3E52:82FF:FE10:2030.

*Sources : TD de révision, p. 5 ; TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 15. MAC A4:5E:60:11:22:33 : quel IID EUI-64 modifié est correct ?

A. A45E:60FF:FE11:2233
B. A65E:60FE:FF11:2233
C. A65E:60FF:FE11:2233
D. A25E:60FF:FE11:2233

**Réponse proposée :** C — A65E:60FF:FE11:2233

1. A4 XOR 02 = A6 ; l’insertion centrale est FF:FE. Résultat A65E:60FF:FE11:2233.

*Sources : TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 16. MAC FF:00:01:02:03:04 : quel IID EUI-64 modifié est correct ?

A. FF00:01FF:FE02:0304
B. FD00:01FE:FF02:0304
C. 0100:01FF:FE02:0304
D. FD00:01FF:FE02:0304

**Réponse proposée :** D — FD00:01FF:FE02:0304

1. Appliquer la transformation aux octets de l’exercice : FF XOR 02 = FD ; ajouter FF:FE au milieu. Il s’agit d’un calcul sur les octets fournis, pas d’une validation d’usage de cette MAC.

*Sources : TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 17. Préfixe FD12:3456:789A:BCDE::/64 et MAC 06:10:20:30:40:50 : quelle adresse EUI-64 modifiée obtient-on ?

A. FD12:3456:789A:BCDE:0410:20FF:FE30:4050
B. FD12:3456:789A:BCDE:0610:20FF:FE30:4050
C. FD12:3456:789A:BCDE:0410:20FE:FF30:4050
D. FD12:3456:789A:BCDE:0810:20FF:FE30:4050

**Réponse proposée :** A — FD12:3456:789A:BCDE:0410:20FF:FE30:4050

1. 06 XOR 02=04 ; IID 0410:20FF:FE30:4050. Le /64 fournit les quatre groupes du préfixe, puis on ajoute cet IID.

*Sources : TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 18. Une MAC commence par 0x9A. Quelle valeur prend le premier octet de l’IID après inversion du bit U/L ?

A. 0x98
B. 0x9C
C. 0x9B
D. 0x1A

**Réponse proposée :** A — 0x98

1. 9A = 10011010₂. XOR 00000010₂ donne 10011000₂ = 98. Inverser n’est pas toujours ajouter 2.

*Sources : TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 19. Un IID EUI-64 modifié vaut 0211:22FF:FE33:4455. Quelle MAC 48 bits peut lui correspondre ?

A. 02:11:22:33:44:55
B. 00:11:22:FF:33:44
C. 00:11:22:33:44:55
D. 02:11:22:FE:33:44

**Réponse proposée :** C — 00:11:22:33:44:55

1. Retirer FF:FE au milieu puis réinverser le premier octet : 02 XOR 02=00. On obtient 00:11:22:33:44:55.

*Sources : TD de révision, p. 6.*

**Complément de méthode, distinct des supports :** RFC 4291 — annexe A — https://www.rfc-editor.org/rfc/rfc4291.html#appendix-A


## 20. Un réseau 2001:DB8:CAFE:00A0::/60 est subdivisé en /64. Quel est le dernier préfixe /64 inclus ?

A. 2001:DB8:CAFE:00FF::/64
B. 2001:DB8:CAFE:00A8::/64
C. 2001:DB8:CAFE:00B0::/64
D. 2001:DB8:CAFE:00AF::/64

**Réponse proposée :** D — 2001:DB8:CAFE:00AF::/64

1. /60 laisse quatre bits avant /64. Le quatrième groupe varie de 00A0 à 00AF, soit seize /64. 00B0 est déjà hors de ce /60.

*Sources : TD de révision, p. 7.*
