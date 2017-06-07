---
layout: doc
title: Utiliser l'imagerie aérienne
permalink: /fr/josm/aerial-imagery/
lang: fr
category: josm
otherguides: "Les autres niveaux"
---

Utiliser l'imagerie aérienne
============================

Tracer à partir d'images aériennes est un moyen simple et efficace de
contribuer à OSM. Si la résolution est élevée et que le ciel est clair,
c'est un bon moyen pour mettre en place le squelette de la carte OSM. C'est
une étape très utile, qui rend plus facile la vérification et la collecte
des données sur le terrain. 

Néanmoins, utiliser les images aériennes demande quelques précautions pour
ne pas tracer les objets au mauvais endroit. En particulier, deux aspects
doivent être considérés avec attention:

1.  La résolution: la résolution détermine la précision d'une image, en 
    d'autres termes le nombre de pixels qui la composent. Un pixel 
    représente la plus petite unité d'une image. Plus le pixel est petit, 
    plus la résolution est élevée. De plus petits pixels permettent de mieux
    distinguer les objets au sol, comme le montre l'infographie ci-dessous.
    Sur la gauche, une image de basse résolution, donc moins de pixels. 
    Distinguer la pièce de puzzle n'est pas évident puisque l'image est
    presque entièrement recouverte par sa représentation. De son côté,
    l'image de droite, de haute résolution, a un pixel plus petit, 
    permettant de mieux distinguer les contours de la pièce de puzzle.
    Avec OSM, vous utiliserez généralement des images de haute
    résolution. Les images provenant des satellites civils ont une
    résolution inférieure à "1 mètre", ce qui veut dire que chaque pixel
    représente un carré d'un mètre carré. C'est pas mal!

    ![puzzle][]

2.  Le géoréférencement: le géoréférencement représente l'alignement de
    l'image, ou en d'autres termes les pixels de l'image sont proches
    des points correspondants sur le terrain. C'est un processus complexe,
    et plus le terrain a de variation et de relief, plus le géoréférencement
    sera complexe. Les satellites sont à des centaines de kilomètres de la
    surface de la Terre, et leurs photos "aplatissent" une planète ronde,
    ce qui conduit forcément à des distorsions et des décalages. Les
    décalages sont particulièrement visibles quand on peut passer d'une
    image à une autre couvrant la même zone, par exemple en zoomant ou
    dézoomant. Pouvez-vous percevoir des variations dans les objets
    affichés?

Pour mieux comprendre pourquoi il y a des décalages, vous pouvez faire
l'expérience suivante: prenez la photo d'une statue et essayez de la
déformer pour lui donner la forme de la statue. C'est en gros ce en quoi
consiste le géoréférencement.

Heureusement, la précision des instruments des satellites va en s'améliorant
et donc la résolution est toujours plus élevée (l'unité est souvent en
centimètres). D'un autre côté, le géoréférencement souffre encore d'un
manque de précision, ce qui fait que la résolution des images finales est
toujours supérieure à un mètre. Un géoréférencement de 5 à 10 mètres est
considéré de bonne qualité.

Si vous voulez cartographier avec précision une zone en utilisant les images
satellite, ayez en tête que leur résolution n'est pas le seul paramètre
qui permet un positionnement précis. Presque tous les objets de la carte
sont décalés par rapport à leur réelle position.

Des méthodes permettent de réduire l'imprécision des images aériennes. Elles
dépendent de deux principaux cas de figure:

1. vous cartographiez une zone qui a déjà été en partie cartographiée dans
OSM

2. vous cartographiez une zone pour laquelle aucune donnée n'existe dans OSM


Gérer l'alignement quand il y a déjà des données dans OSM
---------------------------------------------------------

Parfois, après avoir chargé les données OSM, ajouté les images aériennes, et
zoomé jusqu'à la meilleure résolution, vous réalisez que les données d'OSM,
en particulier les routes, ne sont pas parfaitement alignés avec les images.

![existing data][]

Beaucoup de mappeurs débutants pensent que les routes ont mal été tracées et
donc les déplacent vers ce qui leur semble un meilleur positionnement. C'était peut-être une __TRÈS__ mauvaise idée! Il est tout à fait probable
que les images soient moins bien alignées que les données OSM.

Une façon de vérifier le décalage des images est d'utiliser des traces GPS.
Pour cela, ajoutez des __traces déjà existantes__ (les vôtres ou celles
d'autres mappeurs -- pour plus d'informations sur le sujet, consulter le
document [AddingGPSDatatoOSMserver](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit))
pour la zone en cours d'édition. Cliquez sur ![download][], puis
sélectionnez «Données GPS» en haut de la fenêtre «Télécharger». Une fois
les données téléchargées, un nouveau claque «Données GPS téléchargées»
doit apparaître.

![downloaded GPX][]

Cet exemple montre que les traces GPS (en rouge) permettent de vérifier que
les données existantes (en l'occurrence, les routes) sont correctement
positionnées. Ce sont donc les images qui ne sont pas correctement
géoréférencées, et qui sont donc décalées par rapport à la réalité. Ceci
doit être ajusté.

> Ne soyez par surpris parce que les différentes traces GPS ne sont pas
> parfaitement superposées. La plupart des GPS ont une précision de 2 à
> 5 mètres, ce qui est suffisant pour les routes puisqu'on ne conduit ou
> marche pas au milieu de la route. Considérez que la route réelle se trouve
> sur la médiane des traces.

Pour réaligner les images aériennes, faites un clic droit sur le calque
de l'imagerie, ou, dans le menu «Imagerie», sélectionnez «Décalage de
l'imagerie», ou utilisez le bouton d'ajustement de l'imagerie
![adjust button][] sur la barre d'outils de gauche. Faites ensuite glisser
les images de sorte à les aligner correctement avec les traces. Notez que
pour certains projets, il est d'usage de publier les décalages nécessaires,
par exemple dans le wiki, de sorte à ce que plusieurs personnes travaillant
sur le même projet puisse utiliser les mêmes valeurs. Si vous pensez
réutiliser le même offset plus tard, vous pouvez compléter le champ «Nom du signet» pour le mettre en favori. Vous pourrez le réactiver via le menu «Décalage de l'imagerie».

![adjust window][]

![downloaded GPX][]

Maintenant que l'imagerie est correctement alignée, vous pouvez l'utiliser
pour tracer. Si les traces GPS vous gênent pour travailler, vous pouvez
masquer le calque «Données GPS téléchargées».

![adding to existing data][]

Une dernière chose à avoir en tête: le décalage peut ne pas être homogène
pour la zone sur laquelle vous travaillez! Ceci est particulièrement vrai
pour les régions avec un important relief. Il faudra donc peut-être répéter
tout le processus si les images semblent décalées de nouveau.

Gérer l'alignement quand aucune donnée OSM n'existe
---------------------------------------------------

Il peut arriver que vous soyez le premier à cartographier une zone, par
exemple dans les régions rurales reculées ou dans les pays en voies de
développement. En conséquence, aucune donnée ou trace GPS ne peut être
téléchargée.

![no data][]

Comment faire puisque vous n'avez aucune référence permettant de vérifier
le décalage de l'imagerie? Il y a deux pistes possibles:

1.  Aller sur place: si vous (ou quelqu'un d'autre) avez la possibilité
    d'utiliser un GPS sur la zone couverte, prenez des waypoints des
    principales infrastructures ou d'objets remarquables qui seront
    visibles sur l'imagerie, ou prenez les traces des routes, et ajoutez
    ces données dans JOSM.

2.  Utiliser des données tierces: si vous ne pouvez pas aller sur le 
    terrain, une autre option est de collecter d'autres __données sous
    licence ODbl (Open Database License)__. Le mieux étant de pouvoir
    contrôler les images à partir d'autres images. Dans ce cas, le plus
    facile est d'utiliser la transparence. Pour cela, cliquez simplement
    sur la ligne de gradient et changez l'opacité du calque.

    ![change opacity][]

En général, les images provenant de l'administration ont une très basse
résolution, et peuvent donc être de moins bonne qualité que l'imagerie à
disposition.

Si vous avez accès à des données vectorielles, les routes, lacs, rivières
et bâtiments sont les meilleures options pour mesurer le décalage de
l'imagerie. Tâchez de ne pas utiliser les limites administratives, elles
sont rarement fiables pour ce besoin précis.

En résumé
---------

Tracer avec une imagerie est une technique permettant de cartographie de
façon rapide et efficace. Néanmoins, cette technique demande de précision
et précaution. Il arrive que les images à votre disposition pour
cartographie une zone ne donnent pas satisfaction. Que soit parce qu'elles
sont de faible résolution ou parce qu'elles sont mal géoréférencées, il y a
des méthodes pour travailler avec des images manquant de précision. La
principale consiste à utiliser des données GPS pour les recaler.

[puzzle]: {{site.baseurl}}/images/offset_puzzle_en.png
[existing data]: {{site.baseurl}}/images/offset_existing_data_en.png
[download]: {{site.baseurl}}/images/offset_tool_download_en.png
[downloaded GPX]: {{site.baseurl}}/images/offset_downloaded_gpx_en.png
[adjust button]: {{site.baseurl}}/images/offset_tool_adjust_en.png
[adjust window]: {{site.baseurl}}/images/offset_adjust_window_en.png
[adding to existing data]: {{site.baseurl}}/images/offset_add_to_data_en.png
[no data]: {{site.baseurl}}/images/offset_no_data_en.png
[change opacity]: {{site.baseurl}}/images/offset_change_opacity_en.png
