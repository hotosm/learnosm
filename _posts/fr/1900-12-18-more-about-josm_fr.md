---
layout: doc
title: Éditer avec JOSM
permalink: /fr/josm/more-about-josm/
lang: fr
category: josm
---

Éditer avec JOSM
========================


Dans la section précédente, vous avez installé JOSM et commencé à dessiner vos premiers points, lignes et formes. Vous avez ajouté des préréglages à ces objets afin de joindre des informations à leur sujet. A la fin, vous étiez capable de dessiner votre propre carte dans JOSM.

C'était une bonne pratique, et maintenant nous sommes prêts à éditer OpenStreetMap.

Dans cette section, nous allons examiner de plus près l'interface de JOSM, et voir comment nous pouvons l'utiliser pour éditer la carte sur OpenStreetMap.

Le cycle de l'édition
---------------------
L'édition d'OpenStreetMap avec JOSM est similaire à l'édition avec l'éditeur iD que nous avons vu précédemment. Mais comme JOSM est une application de bureau, il fonctionne un peu différemment. Le processus d'édition et d'ajout à OpenStreetMap avec JOSM sera toujours le suivant :

1. **Téléchargez** les données cartographiques actuelles de l'OSM
2. **Modifiez-le** en utilisant l'imagerie satellite, le GPS, les Field Papers et les notes comme guide
3. **Sauvegarder** les modifications sur OpenStreetMap

Télécharger les données OSM
--------------------
La première étape de l'édition consiste à télécharger les données de la région du monde que l'on souhaite améliorer. N'oubliez pas que vous devez effectuer cette opération chaque fois que vous souhaitez apporter des modifications à la carte, car celle-ci est souvent mise à jour par d'autres utilisateurs.

- Cliquez sur "Fichier" dans le coin supérieur gauche de JOSM et cliquez sur "Télécharger depuis OSM". La fenêtre de téléchargement s'ouvre alors. Vous pouvez accéder à cette fenêtre plus simplement en cliquant sur le bouton de téléchargement, illustré ici :

![JOSM Download Button][]

- Lorsque la fenêtre de téléchargement s'ouvre, vous devriez voir une carte. Si vous ne voyez pas la carte, cliquez sur l'onglet marqué "Carte glissante".

![JOSM Download Dialog][]

- Utilisez votre souris pour effectuer un panoramique et un zoom sur une zone que vous connaissez très bien, comme votre ville natale ou votre quartier. Les commandes sont les mêmes que dans la fenêtre de la carte JOSM. Le bouton droit de la souris vous permet de faire glisser la carte, et la molette de défilement vous permet d'effectuer un zoom avant et arrière.

> Parfois, si vous travaillez sur un ordinateur portable, il peut être difficile de faire défiler les pages. Travailler dans JOSM est beaucoup plus facile si vous disposez d'une souris, mais la plupart des ordinateurs portables modernes vous permettent de faire défiler les pages à l'aide du pavé tactile.

- Dessinez une boîte autour de la zone que vous souhaitez télécharger. Pour dessiner une nouvelle boîte, cliquez sur la carte, maintenez le bouton gauche de la souris enfoncé et faites glisser votre souris pour créer une boîte. Relâchez le bouton de la souris pour terminer le dessin de la boîte.
- Lorsque vous êtes satisfait de la taille et de l'emplacement de la boîte, cliquez sur "Télécharger" en bas de la fenêtre. JOSM obtiendra les données de cette zone à partir d'OpenStreetMap et les ouvrira dans votre fenêtre cartographique pour les modifier.

### Ajouter des images
Si vous avez suivi l'ajout de nos premiers points avec l'éditeur iD, vous vous souvenez qu'en dessous des données cartographiques se trouvait une image satellite qui nous a aidés à identifier les objets au sol. Cette image provient de Microsoft Bing, qui fournit généreusement ses images aux utilisateurs d'OpenStreetMap pour qu'ils puissent s'y référer tout en contribuant à la carte.

- Pour ajouter l'imagerie satellite Bing dans JOSM, cliquez sur "Imagerie" dans le menu supérieur de JOSM et sélectionnez "Bing Sat".

> Si vous ne voyez pas Bing Sat dans le menu Imagerie, vous devez peut-être l'activer dans les préférences de JOSM. Allez dans Edit -> Preferences et cliquez sur l'icône qui dit "WMS TMS". Vous devrez peut-être cliquer sur la flèche vers le bas pour la trouver.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Cliquez sur "Bing Sat". Cliquez ensuite sur "Activer".


### Visite du JOSM
Maintenant que nous avons téléchargé les données d'OpenStreetMap et ajouté l'imagerie satellite de Bing, regardons à nouveau l'interface de JOSM.

![JOSM layout][]

La fenêtre principale vous est déjà familière - c'est la fenêtre de la carte, et c'est là que la plupart des actions se déroulent. C'est ici que vous allez visualiser, modifier et ajouter des données à OpenStreetMap.

À droite de la fenêtre de la carte se trouve une série de panneaux, chacun ayant sa propre fonction. En général, lorsque vous installez JOSM pour la première fois, plusieurs panneaux sont affichés par défaut, tels que Couches, Propriétés et Sélection. Lorsque vous sélectionnez un point, une ligne ou une forme dans la fenêtre de la carte, il s'affiche dans le panneau Sélection. Les informations sur l'objet seront affichées dans le panneau Propriétés, et le nom d'utilisateur de l'auteur de cet objet sera affiché dans le panneau Auteurs.

Ces panneaux peuvent être ouverts ou fermés en cliquant sur les différents boutons situés dans la partie inférieure gauche de JOSM. Au-dessus de ces boutons, en haut à droite, se trouvent des outils qui modifient ce que vous pouvez faire avec votre souris. Vous êtes déjà familier avec certains d'entre eux, l'outil Sélectionner et l'outil Dessiner. En dessous de ces boutons se trouvent des outils qui facilitent le zoom, la suppression d'un objet, le dessin d'une forme ou la création d'une ligne parallèle à une autre ligne.


Edition
----
Nous avons donc terminé la première étape du processus d'édition - le téléchargement. Nous avons préparé le JOSM avec l'imagerie satellite comme référence. L'étape suivante consiste à éditer la carte et à ajouter de nouveaux éléments.

En fonction de la zone que vous avez choisi de télécharger, il peut y avoir beaucoup ou très peu de données cartographiques existantes. Mais remarquez qu'il s'agit du même type de données que celles que nous avons vues précédemment : des points, des lignes et des surfaces qui représentent des lieux réels.

- Utilisez les techniques que vous avez déjà apprises pour ajouter quelques points sur la carte des lieux que vous connaissez. Si tu vois des erreurs, essaie de les corriger.
- Vous n'avez pas besoin d'être trop agressif pendant votre apprentissage. Si vous n'êtes pas sûr de quelque chose, il est préférable de le laisser tel quel.
- Si vous voulez déplacer un point, une ligne ou une surface, utilisez l'outil **sélectionner**. Cliquez sur un objet et faites-le glisser là où il doit être. Cela peut être utilisé pour corriger l'emplacement d'éléments qui ont été placés au mauvais endroit.

![JOSM select tool][]

- Utilisez l'**outil dessin** pour dessiner de nouveaux points, lignes et surfaces. Décrivez ces objets en les sélectionnant dans le menu Presets, comme vous l'avez fait dans la section précédente.

> Ne modifiez jamais la carte en dehors de la zone que vous avez téléchargée. Vous pouvez voir que la zone rectangulaire que vous avez téléchargée a un fond plein, tandis que la zone que vous n'avez pas téléchargée a des lignes diagonales rayées.
>
> ![JOSM area downloaded][]

Enregistrer les modifications
--------------
La troisième et dernière étape pour terminer nos modifications consiste à transférer les changements que nous avons effectués dans la base de données OpenStreetMap. Pour enregistrer les modifications, nous devons être connectés à l'Internet.

- Cliquez sur "Fichier" dans le menu supérieur, puis sur " Transférer les données ". La fenêtre de transfert s'ouvre alors. Vous pouvez accéder à cette fenêtre plus simplement en cliquant sur le bouton de transfert, illustré ici :

    ![JOSM Upload Button][]

- La fenêtre qui s'affiche présente une liste des objets que vous ajoutez et des objets que vous modifiez ou supprimez. Dans le cadre situé en bas de la fenêtre, il vous est demandé de fournir un commentaire sur les modifications que vous effectuez. Saisissez ici une description de vos modifications.

    ![JOSM Upload Dialog][]

- Cliquez sur "Charger les modifications".

- Si c'est la première fois que vous enregistrez des modifications dans OpenStreetMap, il vous sera demandé votre nom d'utilisateur et votre mot de passe OpenStreetMap.
- Saisissez-les dans la fenêtre qui s'affiche. Si vous cochez la case dans cette fenêtre, votre nom d'utilisateur et votre mot de passe seront enregistrés et vous n'aurez pas besoin de les saisir à nouveau à l'avenir. Cliquez sur "Authentifier".

    ![JOSM Authenticate][]

- Vous devrez attendre quelques secondes pour que vos modifications soient téléchargées, puis vous aurez terminé ! Vous avez modifié la carte sur OpenStreetMap.

> Lorsque vous éditez, veillez toujours à télécharger vos modifications avant de fermer JOSM. Même si vous avez encore des modifications à faire, téléchargez-les, puis recommencez le processus plus tard lorsque vous aurez le temps d'éditer. Vous ne voulez pas perdre votre travail !

Voir vos modifications sur la carte
---------------------------
- Ouvrez votre navigateur internet et allez sur [http://openstreetmap.org/](http://openstreetmap.org/)
- Déplacez la carte vers la zone que vous avez modifiée.
- Vous devriez voir vos modifications apparaître sur la carte ! Si ce n'est pas le cas, essayez d'appuyer sur CTRL+R pour rafraîchir la page Web. Parfois, la carte ne se met pas à jour correctement et doit être rechargée.
- Que faire si vous ne voyez pas vos modifications ? Ne vous inquiétez pas, il faut parfois quelques minutes pour que les modifications apparaissent sur la carte. Vérifiez également vos ajouts dans JOSM pour vous assurer que vous les avez ajoutés correctement. En règle générale, si votre point a une icône dans JOSM, il devrait être visible sur la carte principale du site Web d'OpenStreetMap.

Résumé
-------
Maintenant que vous avez vu comment ajouter des données à OpenStreetMap, quelle est la suite ? L'édition, c'est bien, mais ce n'est pas le seul aspect de la création de cartes. Bien sûr, vous devez également apprendre à sortir et à collecter des informations sur les lieux sur le terrain.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png
