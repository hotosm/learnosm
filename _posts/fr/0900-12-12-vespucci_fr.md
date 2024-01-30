---
layout: doc
title: Vespucci
permalink: /fr/mobile-mapping/vespucci/
lang: fr
category: mobile-mapping
---

Vespucci
==============

Vespucci est un outil gratuit pour éditer les données OpenStreetMap et connu pour fonctionner sur une large gamme d'appareils comme les Smartphones, les Tablettes. Il prend en charge la plupart des opérations disponibles dans les éditeurs OSM de bureau. Cependant, cette application n'est disponible que pour les appareils Android et fonctionne pour toutes les versions d'Android depuis 4.0.

Vous pouvez la télécharger sur Google Play Store, Amazon ou F-Droid. Les versions APK et bêta de l'application sont également disponibles dans son dépôt GitHub.

## Fonctionnalités

-   Créer, modifier et supprimer des nœuds, des voies et des liaisons.
-   Déplacer des nœuds
- Déplacer et tourner les chemins
- Ajouter des nœuds à un chemin
- Extraire un nœuds d'un chemin
- Améliorer la géométrie des voies
- Orthogonaliser les voies
- Déplacer plusieurs éléments
- Supporte les multi-polygones
- Créer, modifier et supprimer des étiquettes
- Fonctions Annuler et Rétablir
- Modifier les relations et créer de nouvelles restrictions de tour
- Support des préréglages JOSM
- Télécharger et stocker des tuiles d'imagerie de fond
- Téléchargement et chargement sur le serveur OSM
- Sauvegarde et lecture de fichiers de données OSM au format JOSM
- Montrer les problèmes de validation et les FIXMEs
- Étiquettes et noms de rue manquants
- Ajouter, commenter et fermer les bugs OSM Notes et Osmose
- Charger, enregistrer et télécharger des traces GPX
- Afficher des photographies géoréférencées
- Supporte les données MapSplit OSM en tuiles
- Prise en charge de la lecture des fichiers de données OSM au format PBF
- ...et bien d'autres encore

## Cartographie à l'aide de Vespucci

Les données OSM dans Vespucci sont appelées objets. Les points sont appelés nœuds, les lignes sont appelées voies, et les polygones sont appelés circuits fermés.

Pour ajouter des données OSM à l'aide de Vespucci, vous devez vous connecter à votre compte OpenStreetMap. Connectez-vous en appuyant sur l'icône "Plus d'options" (située dans la partie inférieure droite de l'écran) et en sélectionnant "Autoriser OAuth" sous "Outils...". Saisissez votre nom d'utilisateur OSM (ou votre adresse e-mail) et votre mot de passe, puis appuyez sur "Connexion". Si vous n'avez pas de compte OSM, sélectionnez " s'inscrive maintenant " à la place.

![Login][]

Vespucci devra avoir accès à votre compte. Pour autoriser l'accès à votre compte, appuyez sur "Accorder l'accès" après vous être connecté. Veillez à ce que toutes les cases soient cochées pour maximiser vos possibilités dans Vespucci.

![Allow][]

Après vous être connecté, localisez la zone qui vous intéresse à l'aide de l'icône "GPS" ou en cliquant sur "Trouver" sous "Autres options". Changez l'arrière-plan de la carte pour l'imagerie de votre choix en cliquant sur les trois lignes dans le coin supérieur droit et en cliquant sur "OpenStreetMap(Standard)", car c'est l'imagerie par défaut, ce qui vous donnera la liste de toutes les imageries disponibles.

![SelectImagery][]

Pour effectuer des modifications hors ligne, sélectionnez "Télécharger la vue actuelle" ou "Effacer et télécharger la vue actuelle" sous l'icône "Transfert". Cela vous permettra de télécharger et de modifier la zone affichée sur votre écran avec une image d'arrière-plan de votre choix. L'édition hors ligne vous empêchera d'éditer les données OSM en même temps que d'autres cartographes et évitera ainsi les problèmes de qualité des données qui pourraient survenir.

![Offline][]

Déverrouillez la carte pour pouvoir commencer à ajouter des données. Pour ce faire, appuyez sur l'icône de verrouillage dans le coin supérieur gauche de l'écran. Appuyez longuement sur l'icône de déverrouillage puis sur Normal pour pouvoir ajouter et modifier des nœuds, des chemins et des balises. Si vous sélectionnez l'option "Balises uniquement", vous pourrez uniquement modifier les balises.

![StartEditing][]

### Ajout et modification de balises

Pour ajouter ou modifier des balises, tapez sur l'objet de votre choix. Une nouvelle série d'icônes apparaît au bas de l'écran. Appuyez sur l'icône "Ajouter un préréglage" ou sur l'icône "Modifier les propriétés" pour ajouter ou modifier des balises.

![EditTags][]

### Ajout/création de nouveaux objets

Pour ajouter un nouvel objet, appuyez sur le gros bouton vert dans le coin inférieur droit de l'écran et sélectionnez ce que vous voulez ajouter. Faites un zoom avant et touchez l'endroit où vous voulez placer l'objet.

![AddObject][]

Pour créer un nouveau nœud, choisissez Ajouter un nœud et tapez sur la zone où vous voulez placer le nœud.

![AddNode][]

Pour créer une voie, choisissez ajouter une voie et tapez continuellement sur votre écran jusqu'à ce que vous obteniez le résultat souhaité.

![AddWay][]

Pour créer un chemin/polygone fermé, créez des chemins et tapez simplement sur le premier nœud du premier chemin que vous avez créé pour fermer le polygone. Touchez l'icône " Ajouter un préréglage " pour ajouter des balises à votre polygone. Les voies non balisées sont de couleur fushia, tandis que les voies balisées sont colorées en fonction de leurs balises/propriétés (par exemple, les bâtiments balisés sont beiges, les cours d'eau balisés sont bleus, etc.)

![AddPolygon][]

### Ajout d'un nœud à une voie

Sélectionnez la voie où vous souhaitez ajouter un nœud. Appuyez sur le grand bouton vert dans le coin inférieur droit de l'écran et sélectionnez ajouter un nœud. Touchez l'endroit où vous souhaitez que le nouveau nœud apparaisse. Un nouveau nœud sera ajouté à l'emplacement sélectionné.

![AddNodeToWay][]

### Modifier et déplacer des objets

Pour déplacer un objet, touchez-le une fois et déplacez-le à l'endroit souhaité.

Pour quadriller un polygone, sélectionnez-le puis choisissez "quadriller" sous l'icône "Plus d'options".

![ModifyObject][]

### Annuler/Refaire

Pour annuler vos modifications, appuyez sur l'icône "Annuler" dans le coin inférieur gauche de l'écran. En appuyant sur cette icône, vous annulerez vos modifications les plus récentes.

![Undo][]

Pour refaire, appuyez longuement sur l'icône "Annuler". Une liste des opérations que vous avez annulées apparaît. Sélectionnez ce que vous voulez refaire.

![Redo][]

### Téléchargement de vos modifications

Pour télécharger vos modifications, appuyez sur l'icône "Transfert" dans la partie inférieure de l'écran et sélectionnez "Télécharger les données vers le serveur OSM". Une liste de vos modifications s'affiche. Appuyez sur "Propriétés" pour saisir vos commentaires sur les modifications, puis appuyez sur "Télécharger". Si le transfert est réussi, vos modifications apparaîtront immédiatement dans OSM.

![Upload][]

Pour télécharger vos modifications sur OpenSteetMap, vous devez être connecté à Internet et à votre compte OSM. Assurez-vous d'être connecté avant d'effectuer vos modifications.

## Recherche de lieux

Pour localiser votre emplacement actuel, appuyez sur l'icône "GPS" dans la partie inférieure de l'écran et sélectionnez " Aller à l'emplacement actuel ". L'écran fera automatiquement un zoom sur votre position. Notez que le GPS de votre appareil doit être activé pour que cela fonctionne.

![Goto][]

Pour localiser d'autres lieux, appuyez sur l'icône "Autres options" et sélectionnez Rechercher. Tapez le nom du lieu souhaité et sélectionnez Rechercher. Assurez-vous que vous recherchez "avec la fonction Nominatim" pour effectuer une recherche Nominatim des lieux.

![Search][]

## Autres paramètres de Vespucci

Pour modifier les propriétés de l'arrière-plan de votre carte, touchez l'icône "Préférences" dans la partie inférieure de votre écran. Une fenêtre de paramètres d'interface utilisateur apparaît. Choisissez ce que vous voulez ajuster dans la liste. Cette option vous permet également de modifier les paramètres de l'interface utilisateur, les paramètres de données et d'édition, les paramètres d'emplacement et de serveur, etc.

![Preferences][]

Certains paramètres peuvent être ajustés sous l'icône "Plus d'options". Pour aligner la couche de fond de votre carte (s'il y a un décalage), touchez "Aligner le fond" sous "Outils...". Cette opération nécessite une connectivité réseau.

![AlignImagery][]

Pour vider vos caches de tuiles téléchargées, sélectionnez Outils ; Autres outils d'imagerie ; Vider tous les caches de tuiles. Cette opération videra tous les caches de tuiles que vous avez sur votre appareil.

![ClearTiles][]

Vous pouvez également faire part de vos commentaires aux développeurs de Vespucci en utilisant votre compte GitHub ou OSM sous l'icône "Plus d'options".

![Feedback][]

[Login]:        /images/mobile-mapping/vespucci-login.png
[Allow]:        /images/mobile-mapping/vespucci-allow.png
[SelectImagery]:/images/mobile-mapping/vespucci-select-imagery.png
[Offline]:      /images/mobile-mapping/vespucci-offline.png
[StartEditing]: /images/mobile-mapping/vespucci-start-editing.png
[EditTags]:     /images/mobile-mapping/vespucci-edit-tags.png
[AddObject]:    /images/mobile-mapping/vespucci-add-object.png
[AddNode]:      /images/mobile-mapping/vespucci-add-node.png
[AddWay]:       /images/mobile-mapping/vespucci-add-way.png
[AddPolygon]:   /images/mobile-mapping/vespucci-add-polygon.png
[AddNodeToWay]: /images/mobile-mapping/vespucci-add-node-to-way.png
[ModifyObject]: /images/mobile-mapping/vespucci-modify-object.png
[Undo]:         /images/mobile-mapping/vespucci-undo.png
[Redo]:         /images/mobile-mapping/vespucci-redo.png
[Goto]:         /images/mobile-mapping/vespucci-goto.png
[Search]:       /images/mobile-mapping/vespucci-search.png
[Upload]:       /images/mobile-mapping/vespucci-upload.png
[Preferences]:  /images/mobile-mapping/vespucci-preferences.png
[AlignImagery]: /images/mobile-mapping/vespucci-align-imagery.png
[ClearTiles]:   /images/mobile-mapping/vespucci-clear-tile-cache.png
[Feedback]:     /images/mobile-mapping/vespucci-feedback.png
