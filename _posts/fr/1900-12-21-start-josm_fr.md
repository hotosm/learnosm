---
layout: doc
Title: Débuter avec JOSM
permalink: /fr/josm/start-josm/
lang: fr
category: josm
published: true
---

Débuter avec JOSM
=============================  

Ce guide peut être téléchargé à [josm_start-josm_fr.odt](/files/josm_start-josm_fr.odt) ou [josm_start-josm_fr.pdf](/files/josm_start-josm_fr.pdf)  
> Examiné 2015-07-12  

Comment télécharger et installer JOSM, changer les paramètres de l'éditeur Java OpenStreetMap, ouvrir une carte d'exemple et
apprendre quelques opérations de base du logiciel. Vous vous rappelez dans le
chapitre d'introduction lorsque nous vous demandions de dessiner une carte de votre ville ou 
de votre village? Nous allons conclure ce chapitre en redessinant la carte à nouveau, cette
fois numériquement. Après cela vous devriez avoir une bonne compréhension sur la façon de
dessiner une carte avec JOSM.

Télécharger JOSM
-------------

- Si vous avez une copie de JOSM sur un lecteur de CD ou clé USB, vous pouvez passer à l'étape suivante,
  Installer JOSM.
- Si vous ne disposez pas déjà de l'application JOSM, ou que vous voulez la dernière version, ouvrez
  dans votre navigateur web - ceci peut être Firefox, Chrome, Opera, ou Internet
  Explorer.
- Dans la barre d'adresse au sommet du navigateur, entrez le texte suivant
  et appuyez sur Entrée: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Vous pouvez aussi trouver le site web de JOSM en cherchant sur Internet "JOSM".
Le site devrait ressembler à ceci :

  ![JOSM website][]

- Si vous utilisez Windows, cliquez sur le lien «Installeur Windows» pour télécharger JOSM.

  ![Windows installer][]

Si vous avez un autre système d'exploitation,
  cliquez sur le lien adéquat. Votre téléchargement devrait
  démarrer. Dans ce chapitre nous supposerons que vous utilisez Windows,
  mais les instructions sont similaire pour les autres systèmes d'exploitations.

Installer JOSM
------------

> Vous pouvez avoir des problèmes pour installer JOSM si Java n'est pas déjà
> installé sur votre ordinateur. Si vous avez des soucis avec cette partie,
> essayez de télécharger et installer Java. Vous pouvez le télécharger ici :
>  [http://www.java.com/fr/download/](http://www.java.com/fr/download/)

> Les utilisateurs Mac peuvent avoir des versions obsolètes de Java. Voir [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) pour les options pour OSX 10.6 et 10.7.3+.

- Trouvez le fichier d'installation JOSM que vous avez téléchargé sur votre ordinateur. Double-cliquez pour
  commencer l'installation.
- Cliquez sur 'OK', 'Suivant', 'J'accepte', et 'Installer'. Quand l'installation
   est terminée, cliquez sur 'Terminer' pour lancer JOSM pour la première fois.
  Plus tard, quand vous voulez lancer JOSM, vous pouvez le faire en cliquant sur le
  Menu Démarrer dans le coin en bas à gauche de votre ordinateur, et en cliquant
  sur le programme JOSM.
- Vous voyez peut-être un pop-up qui vous demande si vous voulez mettre à jour le
  logiciel. Vous n'avez pas besoin de le mettre à jour puisqu'il est nouveau. Cliquez sur le
  bouton qui indique “Annuler.”  Si vous ne souhaitez plus voir cela
  message, cochez la case en bas juste avant d'appuyer sur "Annuler".
- Lorsque JOSM démarre, voici à quoi cela ressemble :

  ![JOSM splash page][]

Les préférences de JOSM
--------------------

Il y a de nombreux réglages que vous pouvez personnaliser dans JOSM. 
Un réglage que vous voudriez changer est la langue. JOSM a
été traduit dans de nombreuses langues, et vous pourriez préférer
travailler dans une différente.

- Pour accéder à la fenêtre des Préférences, cliquez sur Éditer -\> Préférences.

  ![Preferences window][]

- Sur le côté gauche, cliquez sur l'icône qui ressemble à un pot de peinture et
  un pinceau.
- En haut de la fenêtre, cliquez sur l'onglet "Apparence".
- Choisissez votre langue dans la boîte déroulante à côté du mot
  "Langue".
  
  ![Look and feel][]

- Cliquez sur Valider.
- Vous devez redémarrer JOSM pour sauvegarder vos réglages. Cliquez sur "Fichier" dans le coin en haut à gauche,
  et cliquez sur "Redémarrer" en bas de ce menu.

Apprendre les bases du tracé avec JOSM
-----------------------------

- Maintenant ouvrons un fichier OSM d'exemple que nous allons utiliser pour apprendre les
  bases pour tracer une carte avec JOSM. Notez que cette carte n'est pas réelle, 
  c'est a dire que ce n'est pas une vraie carte d'un endroit réel, donc nous n'allons pas l'enregistrer
  sur OpenStreetMap.
- Télécharger le fichier ici : [sample.osm](/files/sample.osm)
- Ouvrons maintenant le fichier d'exemple dans JOSM, Cliquez sur le
  bouton “Ouvrir” en haut à gauche.

  ![Open file][]

- Trouvez le fichier **sample.osm**. Il se trouvre probablement dans votre dossier "Téléchargement",
  sauf si vous l'avez enregistrer ailleurs. Sélectionnez le, et cliquez sur “Ouvrir”.
- Vous devriez maintenant voir une carte d'exemple qui ressemble à ça :

  ![Sample file][]

- Vous allez utiliser ces données pour essayer plusieurs techniques d’édition.
  *Il est cependant très important que vous n'envoyez pas ces données fictives vers la base de donnée OSM.*

### Opérations de base

- Pour déplacer la carte vers la gauche, la droite, le haut ou le bas, garder le bouton droit
  de votre souris enfoncé et déplacez votre souris.
- Il y a plusieurs moyens de zoomer et dézommer la carte. Si vous avez une
  souris, vous pouvez utiliser la molette pour zoomer et dézoomer. Si vous
  utilisez un ordinateur portable et n'avez pas de souris, vous pouvez utiliser
  la barre d’échelle qui se trouve dans le coin en haut a gauche de la carte. Faites glisser la barre vers la gauche
  ou la droite en maintenant le bouton gauche de votre souris appuyé et en déplaçant la barre vers la gauche ou
  la droite avec votre souris.

  ![Scale bar][]

- Regardez la carte d'exemple. Il y a quelques types d'objets différents.
  Il y a une rivière, une forêt, quelques bâtiments, plusieurs routes et
  deux commerces. Pour sélectionner un objet, cliquez dessus avec le bouton gauche
  de votre souris.

### Points, lignes et polygones

- Lorsque vous cliquez sur des objets differents sur le carte d'exemple, notez qu'il y
  a 3 types d'objets différents sur la carte. Il y a des nœuds,
  des chemins et des polygones.
- Les nœuds représentent un seul emplacement par des symboles. Sur cette carte d'exemple,
  il y a deux nœud, une boutique de chaussure et un supermarché. La
  boutique de chaussure est représentée par un symbole de chaussure, et le supermarché est
  représenté par un chariot.
- Il y a aussi différents chemins sur la carte qui représentent des routes.
  Si vous y regardez de plus près, vous verrez que les chemins sont composés de
  nœuds eux aussi. Ces nœuds n'ont pas de symbole ou d'autre
  information associées a eux, mais ils aident a définir ou les
  chemins sont localisés.
- Enfin, il y a de nombreux polygones sur la carte d'exemple, representant
  des lieux - une forêt, une rivière, un parc, des bâtiments. Un polygone
  est utilisé pour représenter une surface, telle qu'un champs ou un bâtiment. Un polygone est
  exactement comme un chemin - la seule différence est que le chemin commence au
  même nœud où il se termine.

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

Dessiner votre propre carte
------------------

Maintenant dessinons une carte histoire de pratiquer les techniques que vous avez
  apprises. Vous souhaitez sans doute redessiner la carte précédemment dessinée sur papier.
-   À l'aide du bouton droit de votre souris, déplacez-vous dans une zone de la
    carte totalement vide.
-   Utilisé l'outil de tracé pour créer des points, des lignes et des polygones.
    N'oubliez pas de définir les objets en utilisant le menu «Attributs».
-   Quand vous aurez fini, vous devriez avoir une carte similaire à celle que
    nous avons chargée avec le fichier «sample.osm».

En résumé
---------

Excellent ! Si tout s'est bien passé, vous avez appris comment mettre en place JOSM sur votre
ordinateur, et les outils de base pour dessiner des cartes. Dans le prochain chapitre nous allons
regarder de plus près le processus d'édition de la carte OSM avec JOSM.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png
