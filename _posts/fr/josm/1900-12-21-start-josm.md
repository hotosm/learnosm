---
layout: doc
title: Premiers pas avec JOSM
permalink: "/fr/josm/start-josm/"
lang: fr
category: josm
otherguides: Les autres niveaux
published: true
---

Premiers pas avec JOSM
======================

Dans ce chapitre, nous allons voir pas à pas comment télécharger et installer
JOSM, l'éditeur d'OpenStreetMap en Java. Nous allons aussi changer quelques
paramètres pour que JOSM soit plus facile à utiliser. Ensuite nous allons
télécharger une carte de test, qui va nous permettre d'apprendre
les rudiments du logiciel. Vous vous souvenez quand vous avez dû tracer la
carte de votre ville ou village dans le chapitre 1 ? A la fin de ce chapitre,
nous allons de nouveau en tracer la carte, mais cette fois sur l'ordinateur.
Vous aurez alors une bonne vue d'ensemble de la création de carte avec JOSM.

Télécharger JOSM
----------------

> Si vous avez une copie de JOSM sur un CD ou une clé USB, vous pouvez
> directement passer à la section 2, «Installer JOSM».

-   Si vous n'avez pas encore JOSM, ou si vous voulez mettre à jour votre
    version, lancer votre navigateur Internet — ce peut être Firefox, Chrome,
    Opera, ou Internet Explorer.
-   Dans la barre d'adresse en haut de la fenêtre, entrez le texte suivant puis
    appuyez sur entrée: [josm.openstreetmap.de](http://josm.openstreetmap.de)
-   Vous pouvez aussi trouver ce site en cherchant «JOSM» dans un moteur de
    recherche
-   Le site doit ressembler à ça:

    ![]({{site.baseurl}}/images/start_josm_image05_fr.png)

-   Si vous utilisez Windows, cliquez sur le lien «Installeur Windows». Si vous
    avez un autre système d'exploitation, cliquez sur le lien adéquat. Le
    téléchargement devrait commencer. Dans ce chapitre, nous allons voir la
    procédure pour Windows, mais les instructions sont les mêmes pour les autres
    systèmes d'exploitation.

Installer JOSM
--------------

-   Si Java n'est pas installé sur votre ordinateur, l'installation va échouer.
    Si c'est le cas, essayez de télécharger et installer Java. Vous pouvez le
    télécharger ici:
    [http://www.java.com/fr/download/](http://www.java.com/fr/download/)
-   Localiser l'installeur JOSM sur votre ordinateur. Double-cliquez dessus pour
    lancer l'installation.
-   Cliquez sur «OK», puis «Suivant», «J'accepte», et enfin «Installer». Quand
    l'installation est finie, cliquez sur «Finir» pour lancer JOSM pour la
    première fois. A l'avenir, pour lancer JOSM, utilisez le menu Lancement dans
    le coin en bas à gauche de votre ordinateur, et sélectionnez le programme
    JOSM.
-   Si une fenêtre vous propose de mettre à jour le logiciel, ce n'est pas la
    peine puisque vous venez d'installer la dernière version. Cliquez sur le
    bouton «Annuler». Si vous ne voulez plus voir ce message, cochez la case
    à côté du bouton «Annuler» avant d'appuyer.
-   Quand JOSM est lancé, voici à quoi il ressemble:

    ![]({{site.baseurl}}/images/start_josm_image08_en.png)

Changer les paramètres de JOSM
------------------------------

Avant de commencer à l'utiliser, on va changer quelques paramètres qui vont
rendre son utilisation plus facile. Pour cela, cliquez sur «Modifier» dans la
barre de menu du haut, puis choisissez «Préférences».

![]({{site.baseurl}}/images/start_josm_image13_en.png)

### Ajouter des modèles d'attributs

Si vous avez un fichier qui doit être ajouté aux modèles d'attributs, c'est
le moment de l'utiliser. Par exemple, un tel fichier pourrait être nommé
«buildings.xml».

-   Toujours dans la fenêtre des préférences, cliquez sur l'icône qui ressemble
    à une grille.

    ![]({{site.baseurl}}/images/start_josm_image09_en.png)

-   Cliquez sur l'onglet «Modèles d'attributs» en haut de la fenêtre.
-   Cliquez sur le bouton «+» en haut à droite de la fenêtre.
-   Cliquez sur le bouton qui ressemble à un dossier, à droite du deuxième
    champ. Naviguez jusqu'au fichier que vous voulez ajouter, par exemple
    «buildings.xml».
-   Cliquez sur «OK».

### Ajouter le greffon Walking Papers

Plus loin dans ce guide, nous allons apprendre à utiliser un outil appelé
«Walking Papers», qui nous permettra d'imprimer la carte d'une zone, pour
tracer dessus et prendre des notes, et enfin la charger comme arrière-plan
dans JOSM. Ceci nous permettra d'ajouter nos dessins et nos notes dans
OpenStreetMap. Nous allons donc ajouter maintenant le greffon Walking
Papers.

-   Si vous avez fermé la fenêtre des préférences, vous pouvez l'ouvrir à
    nouveau via le menu «Modifier», en choisissant «Préférences».
-   Sur la partie gauche, cliquez sur l'icône qui ressemble à une prise.

    ![]({{site.baseurl}}/images/start_josm_image04_en.png)

-   Cliquez sur «Télécharger la liste». La liste des greffons disponibles va
    être téléchargée, et devrait apparaître dans la fenêtre.
-   Dans le champ de recherche en haut de la fenêtre, tapez «walking». Seuls les
    greffons ayant «walking» dans le titre devraient maintenant apparaître.
-   Cochez la case à côté du plugin «walkingpapers», et appuyez sur «Valider» en
    bas de la fenêtre.
-   Le greffon Walking Papers va maintenant être téléchargé et installé.

### Changer la langue

JOSM a été traduit dans de nombreuses langues. S'il a été traduit dans votre
langue, vous pouvez l'activer via les préférences.

-   Si vous avez fermé la fenêtre des préférences, vous pouvez l'ouvrir via le
    menu «Modifier» puis «Préférences».
-   Sur la partie gauche de la fenêtre, cliquez sur l'icône avec un rouleau et
    un pot de peinture.
-   Cliquez, en haut de la fenêtre, sur l'onglet «Apparence».
-   Choisissez votre langue dans le menu déroulant à gauche du mot «Langue».
-   Cliquez sur «Valider»
  
    ![]({{site.baseurl}}/images/start_josm_image01_en.png)

-   Il faut maintenant relancer JOSM pour que vos modifications soient prises
    en compte. Via le menu «Fichier» de la barre du haut, choisissez «Quitter».
-   Vous pouvez relancer JOSM via le menu «Démarrer», dans le coin en bas à
    gauche de votre écran. Localisez JOSM et cliquez dessus pour le lancer.

Les bases du tracé avec JOSM
----------------------------

-   Commençons par télécharger une carte OSM de test que nous allons
    utiliser pour apprendre les rudiments de JOSM. Notez que ceci n'est pas une
    carte réelle, et que donc nous n'allons pas ajouter nos modifications à
    OpenStreetMap pour le moment.
-   Si votre instructeur a mis des fichiers à votre disposition, vous avez
    certainement déjà le fichier dont nous aurons besoin, nommé «sample.osm».
-   Si ce n'est pas le cas, vous pouvez le télécharger ici :
    [sample.osm](/files/sample.osm)

-   Maintenant, ouvrons le fichier dans JOSM. Ouvrez JOSM. Cliquez sur le bouton
    «Ouvrir», dans le coin en haut à gauche.

    ![]({{site.baseurl}}/images/start_josm_image12_en.png)

-   Naviguez jusqu'au fichier «sample.osm», sélectionnez-le, puis cliquez sur
    «Ouvrir».
-   Vous devriez maintenant voir une carte similaire à:

    ![]({{site.baseurl}}/images/start_josm_image03_en.png)

### Opérations de base

-   Pour déplacer la carte de droite à gauche ou de haut en bas, utilisez le
    bouton droit de votre souris, que vous devez laissez appuyé tout en
    déplaçant votre souris.
-   Il y a plusieurs façons de zoomer ou dézoomer la carte. Si vous avez une
    molette sur votre souris, vous pouvez l'utiliser. Sinon, vous pouvez
    utiliser le curseur dans le coin en haut à gauche de la carte. Déplacer la
    barre vers la gauche ou vers la droite avec votre souris pour zoomer ou
    dézoomer.

  ![]({{site.baseurl}}/images/start_josm_image14_en.png)

-   Prenez le temps de regarder la carte de test. Notez les différents types
    d'objets: il y a une rivière, une forêt, quelques bâtiments, des routes, et
    quelques magasins. Pour sélectionner un objet, faites un clic gauche dessus
    avec votre souris.

### Points, lignes et polygones

-   En cliquant sur les différents objets de la carte, notez qu'il y a trois
    types d'objets: des points, des lignes et des polygones.
-   Les points sont des lieux simples, représentés par des symboles. Dans notre
    carte d'exemple, nous avons deux points: une boutique de vêtements et un
    marché. La boutique de vêtements est représentée par une image de maillot et
    le marché, par un panier de courses.
-   Il y a aussi des lignes sur la carte, qui représentent des routes. Si vous
    regardez attentivement vous remarquerez que les lignes contiennent des
    points. Aucune information et aucun symbole n'est associé avec ces points:
    leur rôle est de déterminer le tracé de la ligne.
-   Enfin, il y a différents polygones, qui représentent plusieurs lieux: une
    forêt, une rivière, et des bâtiments. Un polygone représente généralement une
    aire, par exemple un champ ou un bâtiment. Le polygone est en fait une
    ligne avec une caractéristique notable: dans le cas d'un polygone, la ligne
    commence et finit sur le même point.
-   Vous avez peut-être remarqué la fenêtre «Attributs» qui apparaît sur la
    droite quand vous sélectionnez un objet. Celle-ci liste ce qu'on appelle les
    tags. Les tags sont associés un point, une ligne ou un polygone, et
    permettent de les définir. Nous en apprendrons un peu plus sur les tags dans
    le chapitre 7, «Édition avancée avec JOSM». Pour le moment, retenez que
    les tags servent à déterminer si un objet est une forêt, une rivière, un
    bâtiment, ou autre chose.
-   Pensez au cartes dessinées à la main, est-ce qu'on utilise pas là aussi
    des points, des lignes et des polygones ? Quels lieux peuvent être
    représentés par des points ? par des lignes ? par des polygones ?

### Modifier les objets

-   Sélectionnez la forêt qui est sur la gauche de la carte. Faites bien
    attention de cliquer sur la ligne qui entoure la forêt, et pas sur un des
    points qui la constituent. En maintenant votre clic droit enfoncé et en
    déplaçant votre souris, vous devriez être capable de changer la forêt de
    position.
-   Cliquez maintenant sur un des points constituant le polygone de la forêt.
    À l'aide de votre souris, en maintenant le clic gauche enfoncé, vous devriez
    pouvoir déplacer ce point. C'est la façon de faire si vous avez besoin de
    changer la forme d'un polygone, ou tout simplement pour changer la position
    d'un point.

### Tracer

Tout à gauche de la fenêtre de JOSM, il y a une barre d'outils. Une partie
de ces boutons permettent d'ouvrir des fenêtres à droite qui affichent des
informations supplémentaires sur la carte. Mais les boutons qui nous
intéressent pour le moment sont en haut de cette barre d'outils. Ces boutons
permettent de définir ce que vous pouvez faire avec votre souris.

Les quatre boutons du haut sont les plus importants. Ils vous permettent de:

-   Sélectionner
-   Tracer
-   Zoomer
-   Effacer

-   Jusqu'à présent, vous avez utilisé l'outil de sélection, qui ressemble à
    ceci:

    ![]({{site.baseurl}}/images/start_josm_image00_en.png)

-   Avant de commencer à tracer, assurez-vous que rien n'est sélectionné. Pour
    cela, toujours avec l'outil de sélection, cliquez dans une zone vide de la
    carte.
-   Vous pouvez maintenant cliquer sur le deuxième bouton, celui pour tracer.

    ![]({{site.baseurl}}/images/start_josm_image10_en.png)

-   Dans une zone vide de la carte, double-cliquez avec le bouton gauche de
    votre souris. Vous venez de créer un point.
-   Pour tracer une ligne, faites un simple clic avec votre souris. Déplacez
    votre souris et cliquez de nouveau. Continuez jusqu'à que vous ayez obtenu
    le résultat souhaité. Pour finir la ligne, double-cliquez avec votre souris.
-   Le procédé est le même pour tracer un polygone, mais vous devez finir le
    polygone en double-cliquant sur le premier point de la ligne.

### Utiliser les modèles d'attributs

Nous savons désormais comment tracer des points, des lignes et des polygones,
mais pour l'instant nous n'avons pas défini ce qu'ils représentent. Nous voulons
être capable de dire qu'un point est une boutique, une école, ou autre chose, et
de même si nos polygones sont des champs, des bâtiments, ou autre chose.

-   Dans la barre d'outils à gauche, cliquez de nouveau sur l'outil de
    sélection.

    ![]({{site.baseurl}}/images/start_josm_image00_en.png)

-   Sélectionnez un des objets que vous venez de tracer. Dans le menu du haut,
    cliquez sur «Attributs». Déplacer votre souris dans les sous-menus jusqu'à
    trouver le type de lieu que vous souhaitez.
-   Après avoir sélectionné un modèle d'attributs, une fenêtre devrait s'ouvrir
    pour vous permettre d'ajouter des informations. Tous les champs ne sont pas
    obligatoires, mais vous voudrez certainement ajouter les plus importants,
    par exemple le nom de votre lieu.
-   Quand vous avez renseigné toutes les informations voulues, appuyer sur
    «Appliquer les attributs». Si tout s'est bien passé, votre point, ligne ou
    polygone devrait changer de couleur ou afficher un symbole. C'est parce que
    vous avez maintenant défini de quoi il s'agit.

Tracer votre carte
------------------

C'est le moment de tracer une carte pour mettre en pratique ce que l'on vient
d'apprendre. Vous pouvez par exemple tracer la carte que vous aviez dessiné dans
le chapitre 1.

-   À l'aide du bouton droit de votre souris, déplacez-vous dans une zone de la
    carte totalement vide.
-   Utilisé l'outil de tracé pour créer des points, des lignes et des polygones.
    N'oubliez pas de définir les objets en utilisant le menu «Attributs».
-   Quand vous aurez fini, vous devriez avoir une carte similaire à celle que
    nous avons chargée avec le fichier «sample.osm».

En résumé
---------

Excellent ! Si tout s'est bien passé, vous avez appris comment installer JOSM
sur votre ordinateur, et vous connaissez maintenant les outils de base pour
tracer une carte. Dans les deux prochains chapitres, vous apprendrez à utiliser
un GPS et des Walking Papers pour tracer la carte de votre ville ou de votre
village. Dans le chapitre 6, nous retournerons sur JOSM pour utiliser les
informations récoltées, et les ajouter à OpenStreetMap.
