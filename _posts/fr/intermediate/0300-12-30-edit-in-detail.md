---
layout: doc
title: Edition avancée
permalink: /fr/intermediate/editing-in-detail/
lang: fr
category: intermediate
---

# Edition avancée

## Introduction

Dans ce chapitre, nous allons décrire les relations, les outils d'édition JOSM, et des techniques d'édition plus avancées.

> Bien que ce chapitre ne requiert pas un niveau très avancé, il est plus difficile
> que les chapitres précédents. Si vous sentez que vous n'avez pas bien compris 
> les leçons précédentes, vous pouvez pratiquer un peu plus 
> avant de continuer.

Les sujets abordés dans ce chapitre :

- Outils d'édition : Outils, le greffon Immeubles, et les raccourcis

- Relations : Description et comment modifier et ajouter des attributs

- Techniques d'édition : Les **A faire** et **Ne pas faire**

## Outils d'édition JOSM

Il y a plusieurs manières d'accéder à des outils d'édition supplémentaires dans JOSM. Nous allons
examiner de plus près les outils par défaut, certains greffons, puis les raccourcis clavier d'édition.

### Outils de dessin

JOSM a des outils supplémentaires pour faciliter le traçage des lignes et des polygones. Ces outils se trouvent dans le menu "Outils" en haut de JOSM.

![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image12.png)

Afin d'appliquer les outils de ce menu, vous devez d'abord sélectionner un
point, une ligne ou un polygon dans la fenêtre Carte. Quelques-uns des outils les plus utiles sont décrits ci-dessous :

1. Couper un chemin: Cela vous permet de diviser une ligne en deux lignes distinctes.
     Ceci est utile si vous souhaitez ajouter des attributs différents pour différentes sections d'une route, comme un pont. Pour utiliser cet outil, sélectionnez un0
     point au milieu de la ligne que vous voulez partager, Sélectionnez **Couper le chemin** dans le menu Outils, et votre ligne sera scindée en deux.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image38.png)

2. Fusionner les chemins : Cet outil fait le contraire de l'outil Couper un chemin. Pour combiner deux 
     lignes en une seule, elles doivent partager un seul point. Pour utiliser
     cet outil, sélectionnez les deux lignes que vous souhaitez combiner. Vous pouvez
     sélectionner plus d'un objet en maintenant enfoncée la touche MAJ de votre
     clavier et en cliquant sur chaque ligne. Lorsque vous avez sélectionné les deux
     lignes, sélectionnez **Fusionner les chemins** dans le menu Outils.
      
    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image28.png)

    > Si vous tentez de fusionner des routes qui ont des directions différentes,
    > le message d'avertissement suivant s'affichera :

    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image15.png)

    Si les routes sont connectées et ne vont pas dans la même direction, choisissez alors
    «Inverser et fusionner».

3.  Inverser le chemin : Cela va changer la direction de la ligne. Si la direction de cette ligne ne représente pas correctement le sens d'une rivière ou une route à sens unique, vous voudrez sans doute changer sa direction. A moins que quelqu'un ait délibérément créé un chemin avec attribut sens unique, vous n'avez généralement pas à vous soucier de modifier
     l'instruction parce que les chemins dans OSM peuvent par défaut aller dans les deux sens.
     ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image26.png)

4.  Simplifiez le chemin : Si votre ligne a trop de points et que vous souhaitez la simplifier, cela va enlever quelques-uns des points de la ligne.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image41.png)

5.  Créer un cercle OU aligner les nœuds en cercle : Si vous essayez de faire une forme circulaire, vous pouvez dessinez le cercle du mieux que vous pouvez, puis sélectionnez
     trois noeuds et la fonction ALigner les nœuds en cercle. Elle aidera à organiser vos points dans un cercle. Le résultat est cependant moins régulier que si vous utilisez Créer un cercle après avoir seulement tracé son diamètre avec une ligne à deux points.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image04.png)

6.  Aligner les nœuds sur une ligne : Cet outil permet d'aligner une série de points
     sur une ligne droite. Avec de longues lignes, il est préférable de sélectionner les sections
     de la ligne à redresser. Soyez prudent car cela a tendance à déplacer la ligne un peu. Si besoin, découpez auparavant la ligne pour ne sélectionner que la section qui doit être alignée. Vous pouvez ensuite fusionner à nouveau les différentes sections. 
	 ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image17.png)

7.  Rendre une forme Orthogonale : Cette fonction est très utile pour dessiner des
     formes régulières comme les bâtiments. Après avoir dessiné un polygone qui doit avoir une forme avec des angles droits, cet outil permet de la remodeler pour avoir des coins carrés. Cet outil est aussi très
     utile pour divers objets de forme régulière, comme les cours de tennis,
     cours d'habitation, etc. ou les zones d'utilisation du sol. (L'utilisation du greffon bâtiment, qui sera
     expliqué ci-dessous, peut être plus facile d'utilisation).

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image45.png)

8.  Décoller un chemin : Lorsque deux chemins adjacents sont connectés, cet outil vous permet de détacher les nœuds qui sont connectés.
	 
    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image59.png)

    > La ligne et le noeud n'apparaîtront pas effectivement séparés comme la dernière capture d'écran l'implique.

### Greffons

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image25.png)

A.  Greffon Immeubles: Ce greffon est de loin l'un des plus utiles parmi les outils d'édition (numérisation). Cet outil vous permet de créer des formes
avec des angles à 90 degrés avec seulement trois clics. Tout d'abord, vous tracez le
bord de votre bâtiment, puis vous faites glisser sur la ligne pour créer un polygone.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image58.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image19.png)

Vous pouvez également créer des bâtiments plus complexes à l'aide de l'option de fusion.
 Créez votre plan de construction, sélectionnez tous les polygones (appuyez sur MAJ pour tous les mettre en évidence) et ensuite MAJ + J pour fusionner les objets (Magique!).

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image03.png)

En outre, vous pouvez modifier les paramètres par défaut (taille et attributs) à partir du menu
«Edit». Vous sélectionnez ensuite au bas du panneau “Définir la dimension de l'immeuble”.  

![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image07.png)

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image11.png)

Si vous traitez une série d'immeubles de dimension similaire, vous pouvez modifier la taille des immeubles pour une certaine dimension, soit par exemple 5 x 6 mètres (l'unité est en mètres).  Encore plus, si vous numérisez des infrastructures similaires, telles que des bungalows dans une même zone, vous pouvez éditer les attributs pour être tous identiques à partir de l'onglet «Avancé».

![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image13.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image64.png)

B. Utilsplugin2 (Plus d'outils) : Ce greffon a quelques fonctionnalités qui peuvent être utiles pour éditer.  

![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image47.png)

Après l'installation du greffon et le redémarrage de JOSM, le menu suivant sera ajouté :  «Plus d'outils»:

![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image24.png)

Les outils suivangs se sont révélés être les plus utiles :

1. Ajout de nœuds aux intersections : Cet outil est très utile pour ajouter
     des nœuds manquants aux intersections de voies sélectionnées. Il est nécessaire que les routes et les rivières aient toujours des nœuds communs à leur intersection.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image43.png)

2. Copiez les attributs de la sélection précédente : Cette fonction facilite la copie des attributs. Si vous voulez créer plusieurs objets avec les mêmes attributs,
     dessinez d'abord les objets. Puis ajoutez les attributs à l'un de ces objet. Cliquez ensuite sur un autre objet et appuyez sur Maj + R pour copier les attributs de l'objet précédemment sélectionné. Vous pouvez répéter cette opération pour tous les objets auxquels vous souhaitez ajouter les attributs. Rappelez-vous que les attributs seront copiés à partir de l'objet sélectionné précédemment. Donc, si vous cliquez sur un objet sans attribut
     puis à nouveau sur un autre objet sans attribut, vous ne serez pas en mesure de copier des attributs !

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image05.png)

3. Ajouter un Attribut Source : Cet outil simplifie l'ajout d'un Attribut Source. Il
     se souvient de la source qui a été spécifiée en dernier et il ajoute cet attribut source à vos objets. Vous pouvez insérer la source avec un seul clic.

    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image63.png)

4. Remplacer la Géométrie : Cet outil est idéal si vous voulez redessiner un objet mal dessiné tout en conservant l'historique, les attributs et l'ID de l'objet. Par exemple, si vous voulez redessiner un immeuble
     qui est compliqué et mal dessiné, alors au lieu de l'opération pénible consistant à déplacer chaque nœud, vous pouvez (2) juste dessiner à nouveau l'objet,
     (3) puis sélectionnez à la fois l'objet ancien et le nouveau (4) appuyez sur ¨Remplacer la géométrie¨ pour remplacer la géométrie avec le nouvel objet et transférer tous les attributs sur ce nouvel objet.

C. Utilsplugin2 (Sélection) :

Après l'installation du greffon et le redémarrage de JOSM, le menu suivant sera égalelemt ajouté :  «Sélection»
![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image55.png)

Les outils suivangs se sont révélés être les plus utiles :

1. Désélectionner les nœuds : Cet outil vous permet de désélectionner les nœuds, ce qui rend
     utile pour ajouter des attributs des objets sélectionnés. Cet outil est nécessaire si
     vous avez numérisé plusieurs objets polygonaux avec des attributs similaires et
     tenez à modifier les attributs des objets sans ajouter ces attributs aux nœuds. Pour ce faire,
     sélectionnez tous les objets - des polygones, des chemins et des relations, dé-sélectionnez
     les nœuds et ajoutez ensuite les attributs de manière appropriée.
	 ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image50.png)

2. Sélectionnez les derniers nœuds modifiés : Cet outil vous permet de revenir aux
     nœuds que vous avez récemment modifiés. C'est comme une opération Annuler: style de nœud.
     

Amusez-vous à les utiliser!

## Relations

Dans le Guide du débutant, nous avons appris qu'il y a trois types d'objets
qui peuvent être dessinés dans OpenStreetMap - des points (nœuds), des lignes (voies), et
des polygones. Les Lignes contiennent de nombreux points, et la ligne elle-même porte
les attributs qui définissent ce que cet ensemble de nœuds représente. Les Polygones sont similaires aux
lignes, à l'exception que la ligne est tracée de façon à ce qu'elle se termine là ou elle a commencé, afin de former un polygone.

En fait, il y a un autre type d'objet dans OpenStreetMap, et celui-ci est appelé Relation. De la même manière qu'une ligne comprend une série de points, une relation contient un groupe d'autres objets, qu'il s'agisse de points,
de lignes ou de polygones. Si vous voulez développer des compétences d'édition avancée, il est important de comprendre les relations et de savoir les éditer.

Par exemple, imaginez que vous souhaitez numériser un bâtiment qui a des cours ou jardins en son centre. Vous avez besoin de dessiner un polygone à l'extérieur du
l'immeuble, et indiquer que les polygones autour des cours ne font pas partie de l'édifice. Ceci est un exemple où s'applique une relation. Cette relation va contenir plusieurs polygones. Étant donné que c'est la relation qui définit cet immeuble, les attributs de l'immeuble doivent êtres fixés à la relation et non à chaque polygone.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image42.png)

Les relations sont utilisées pour représenter tout ce qui nécessite de définir une collection d'objets. Différentes collections d'objets peuvent être définies avec une relation, par exemple pour des lignes de bus (une collections de lignes), des objets longs et complexes (rivières ou routes), ou des polygones multiples qui font tous partie du même endroit (comme les bâtiments d'une université).

Il existe principalement quatre types de relations que vous rencontrerez dans OSM :
Multipolygones, Routes, Frontières, et restrictions (telles que : pas de virage à gauche). Dans cette section, nous allons passer en revue les multipolygones et Routes.

A. Éditez les Relations : Le multipolygone ci-dessus contient un polygone pour les
limites extérieures du bâtiment et deux autres pour marquer les cours intérieures.
Pour créer une relation avec ces trois polygones, vous devez :

1. Sélectionnez tous les polygones.

2. Allez dans le menu *Outils* et sélectionnez en bas *Créer un multipolygone*
    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image49.png)

3. Les polygones doivent automatiquement être créés en tant que multipolygones.

     ! [] ({{}} site.baseurl / images/intermediate/fr_edit_in_detail_image14.png)

Vous verrez alors votre bâtiment représenté avec une surface solide et les polygones intérieurs représentés avec des vides. Les données sous-jacentes de la relation dans cet
exemple sont visibles sur OpenStreetMap:[http://www.openstreetmap.org/browse/relation/2435797](http://www.openstreetmap.org/browse/relation/2435797).
Le bâtiment est rendu par Mapnik comme sur cette image:

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image00.png)

[OSM Wiki: Relation:
MultiPolygon](http://wiki.openstreetmap.org/wiki/FR:Relation:multipolygon#Un_anneau_externe_et_un_anneau_interne)

B. Autre type de MultiPolygone

Cette rivière est un autre exemple de multipolygone. En effet, il est similaire à l'exemple de l'immeuble, mais avec un plus grand nombre de membres et
couvrant une superficie beaucoup plus grande. Il peut être consulté sur le site OpenStreetMap
ici :
[http://www.openstreetmap.org/browse/relation/1046961](http://www.openstreetmap.org/browse/relation/1046961.).

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image61.png)![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image23.png)

Cette rivière contient dix lignes qui sont connectées comme un long polygone.

C. Relations de Lignes

Les relations sont également très utiles pour la création, l'étiquetage et l'édition de longues lignes, par exemple, des lignes de bus, des sentiers pédestres, des pistes cyclables, etc.
  Elles se distinguent des multipolygones parce qu'elles sont des relations qui possèdent différents
membres, contrairement aux multipolygones qui sont des surfaces complexes. Une relation de lignes pourrait simplement être une
ligne avec plusieurs membres, ceux-ci étant intégrés dans la relation comme tels. Des
caractéristiques supplémentaires, comme les arrêts de bus représentés par des nœuds distincts peuvent également être intégrés en tant que membres de la relation.
![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image27.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image37.png)

1. Assurez-vous que tous les chemins par lesquels la route passe possèdent les bons attributs. Par exemple, highway= footway.

2. Sélectionnez toutes les routes ou chemins que prend le bus. Si vous
     voulez seulement sélectionner certaines parties du chemin, là, malheureusement, vous
     devrez diviser le chemin dans la section que vous souhaitez sélectionner. Cela
     crée plus de travail, mais vous pouvez facilement le faire avec l'outil ¨Couper le chemin¨. Une fois que tous ou une partie des chemins sont sélectionnés, cliquez sur *Modifier* dans le panneau d'édition de Relation. La boîte de dialogue d'Édition de Relation apparaîtra.

3. Allez dans le menu *Attributs* et
	sélectionnez successivement dans le menu déroulant : *Transport*, puis *Transport Public*, puis *Public transport route* ou *Itinéraire maitre*. L'Itinéraire maitre est l'itinéraire principal, tandis que la route est une variante de l'itinéraire du bus.
    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image54.png)

4. Remplissez les informations correspondantes relativement à la ligne de bus.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image60.png)

Les relations sont parfois difficiles à comprendre et n'ont pas nécessairement à être utilisées souvent. Il est cependant important de les connaitre. À mesure que vous développez vos compétences avec OSM et voulez créer des objets plus complexes, soit par exemple les immeubles, rivières et routes, les relations seront utiles.

## Techniques d'édition : Les **A faire** et **Ne pas faire**

Dans cette section, nous couvrirons quelques erreurs communes dans JOSM et fournirons quelques trucs d'édition pour rendre votre travail dans JOSM plus efficient !

A. Certains objets ne doivent pas être connectés

Lorsque vous créez des polygones et des lignes qui ne sont pas censés être
connectés, assurez-vous qu'ils ne sont pas fusionnés ensemble en partageant un
nœud. Par exemple, les nœuds routiers ne doivent pas être accrochés aux bâtiments,
parce que personne n'aime une route qui mène directement dans un mur! Si vous
voulez démêler deux ou plusieurs objets qui partagent le même nœud, sélectionnez
le nœud, puis appuyez sur «G».  

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image32.png)  ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image62.png)

*Mais par contre, certains objets doivent se connecter.*

Toutefois, certains objets doivent toujours se connecter ! Les Intersections de routes devraient
toujours être connectées. Si deux routes ne partagent pas un noeud commun, alors les outils de navigation n'ont aucun moyen de savoir que les routes se connectent une à l'autre.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image20.png)

B. Chevauchement des objets

Une erreur courante est de faire chevaucher des polygones alors que les objets qu'ils
représentent ne se chevauchent pas dans la vraie vie. Un bâtiment ne peut pas chevaucher
un autre bâtiment. Cette erreur est souvent faite avec des bâtiments et les polygones
LANDUSE. Par exemple, un polygone dessiné pour représenter un parc
à l'extérieur d'un bâtiment ne doit pas se chevaucher avec le bâtiment. Au contraire, il
doit être aligné sur le côté du bâtiment.

Il y a quelques exceptions à cette règle, comme les écoles. Dans une
cour d'école, vous pourriez identifier les bâtiments individuels en utilisant des polygones.
Vous pourriez également vouloir créer un polygone autour de la cour de l'école tout entière.
  Dans ce cas, il est acceptable que les polygones se chevauchent, mais la règle à
suivre ici est de s'assurer que les bâtiments sont complètement à l'intérieur du
polygone LANDUSE.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image46.png)  ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image18.png)

Nous faisons tous des erreurs, et plus vous tracerez des objets, moins vous en ferez !
  N'oubliez pas que même si vous téléchargez des données qui contiennent des erreurs, il
est facile de corriger vos erreurs et de sauvegarder les modifications. C'est
ce qui est formidable avec OSM : vous pouvez toujours faire mieux !

C. Tracer correctement

OSM peut faire des choses étonnantes en déterminant où les objets se terminent et quels attributs ils devraient avoir, mais il a besoin de votre aide pour le
faire. Par exemple, si vous créez une route qui se transforme en une autre
route sans un nœud distinct, alors JOSM conservera les attributs précédents pour cette route. Par conséquent, il est nécessaire que vous créiez tous vos objets et routes de la façon la plus claire et précise possible.

^[[a]](#cmnt1)^

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image57.png)

Nous terminerons ce chapitre avec ce bonus :

- Pivoter un objet : Si vous maintenez les touches MAJ + CTRL enfoncées et faites glisser votre souris, bouton gauche enfoncé, vous pouvez faire pivoter les objets sélectionnés.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image31.png)


## Résumé

Comme vous pouvez le voir, il y a de nombreuses fonctionnalités supplémentaires qui rendent JOSM un outil puissant pour faire des cartes. Rappelez-vous que plus vous pratiquez avec
ces outils, plus vous réussirez à ajouter des informations utiles et précises à OpenStreetMap.

## Annexe 

### Raccourcis clavier

Parfois, il peut être gênant de cliquer à plusieurs reprises pour sélectionner différents
options et menus successifs dans JOSM. Heureusement, il y a des touches de raccourci sur le clavier qui simplifient votre travail et vous permettent de faire de nombreuses tâches courantes (nous recommandons fortement le
raccourci DEL). Voici une liste de quelques-unes des touches de raccourcis les plus couramment utilisées, avec une courte description de ce qu'elles font :
        

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image10.png)Choisir un outil de sélection

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image08.png)Effacer les objets sélectionnés

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image30.png)Choisir un outil de dessin

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image36.png)Choisir l'outil de zoom

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image21.png)Zoom +

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image09.png)Zoom -

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image01.png)Couper un chemin

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image34.png)Fusionner des chemins

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image29.png)Aligner en cercle

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image53.png)Aligner sur une ligne

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image40.png)Orthogonaliser (créer une forme carrée)

### Plus d'information sur les outils de «Selection».  Cette information provient de : 
[http://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2).
 

A. Sélection des noeuds adjacents (e) : Sélectionne les nœuds voisins de nœuds ou de chemins déjà sélectionnés. La sélection s'étend chaque fois que l'outil est relancé
Cas 1 : un ou plusieurs nœuds sont sélectionnés.
L'outil sélectionne les nœuds adjacents en prenant d'abord en compte les nœuds appartenant au(x) même(s) chemins, avant de continuer sur les nœuds d'autres chemins.

Cas 2 : un ou des nœuds et un ou plusieurs chemins sont sélectionnés.
La sélection et sa progression à chaque relance de l'outil se restreint aux chemins sélectionnés au départ.

Cas 3 : seulement un ou des chemins sont sélectionnés (pas de nœuds)
L'outil va sélectionner uniquement les noeuds et désélectionner les chemins.


![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image52.png)


B. Chemins adjacents (Maj + E) : Si certains chemins ou nœuds sont sélectionnés, l'outil 
sélectionne les chemins adjacents. Chaque relance de l'outil sélectionne des chemins supplémentaires.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image33.png)

C. Tous les chemins connectés (Ctrl-Shift-E) : Si certains chemins ou nœuds sont
sélectionnés, l'outil sélectionne tous les chemins connectés.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image51.png)

D. Chemins s'entrecoupant (I) : Si certains chemins sont sélectionnés, l'outil ajoute les chemins qui les intersectent à la sélection.
Est utile avec l'outil Ajouter des nœuds aux intersections.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image39.png)

E. Tous les chemins s'entrecoupant (Ctrl + pavé numérique *) : Si certains chemins sont sélectionnés, l'outil sélectionne de manière récursive tous les chemins s'interconnectant à partir de la sélection de départ. 
Utile pour sélectionner les différentes parties d'un bâtiment à fusionner. 

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image16.png)

### Précisions à propos des relations

Chaque objet dans une relation est étiqueté comme ayant un **rôle** et ces
rôles définissent ce que chaque objet fait au sein d'une relation. Ainsi, par exemple, le polygone autour de l'extérieur du bâtiment se voit attribuer
le rôle **outer** (externe) pour indiquer qu'il est à l'extérieur, et le(s) polygone(s) intérieur(s) se voit attribuer
le rôle **inner** qui indique qu'ils sont des trous à l'intérieur du bâtiment.

A. La relation multi-polygone : 
Exemple d'un bâtiment avec deux cours intérieures. Pour créer une relation entre le polygone des limites extérieures et les deux polygones délimitant les cours intérieures, il faut :

1. Utilisez l'outil de sélection pour dessiner un cadre autour de ces trois polygones et les sélectionner tous à la fois.
	 
2.  Cliquez sur le menu «Attributs», «Relations», «Multipolygone».

    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image56.png)


3.  Cliquez sur le bouton “Nouvelle relation”

    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image35.png)


4.  S'ouvre alors la fenêtre des propriétés de la relation :

    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image02.png)


La partie la plus importante se trouve en haut de la fenêtre avec un tableau de lignes d'attributs. Le reste peut être ignoré.

    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image22.png)

5. C'est dans ce tableau qu'il faut ajouter les attibuts (tags) pour la relation. Les chemins n'ont pas besoin d'être étiquetés individuellement, à moins qu'il n'y ait quelque chose de spécifique, comme différentes sources de données.

6. Ensuite, vous devez définir les rôles au sein de votre relation. Pour un
     multipolygone vous devez définir les chemins extérieurs et intérieurs.
     En fait, JOSM a besoin de savoir quels sont les polygones qui délimitent la partie externe et
     ceux qui délimitent la partie interne de manière à pouvoir déterminer quelle surface constitue le multipolygone. Sélectionnez les chemins qui délimitent les cours intérieures et inscrivez *inner* dans la case de leur rôle, puis sélectionnez la partie externe et marquez *outer* dans la case de son rôle.
	 
    ![]({{site.baseurl}}/images/intermediate/fr_edit_in_detail_image44.png)

7. Cliquez sur "OK" et la fenêtre se ferme. Vous verrez alors votre bâtiment comme une forme solide avec les polygones intérieurs formant des trous. La
     donnée illustrant la relation dans cet exemple est visible sur OpenStreetMap :
    [http://www.openstreetmap.org/browse/relation/2435797](http://www.openstreetmap.org/browse/relation/2435797).
Le bâtiment est rendu dans Mapnik comme sur cette image:

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image00.png)

[OSM Wiki: Relation:
MultiPolygone](http://wiki.openstreetmap.org/wiki/FR:Relation:multipolygon#Un_anneau_externe_et_un_anneau_interne)

B. Relation cours d'eau : l'exemple d'un cours d'eau nécessite que vous créiez les berges internes et externes, de même que la surface d'eau à l'intérieur. Les berges internes et externes ont été dessinées, puis connectées et étiquetées comme relation. Comme vous pouvez le voir ci-dessous, il n'y a qu'un seul chemin qui possède un rôle "outer" car c'est le seul polygone externe dessiné. 
Tous les autres polygones représentent des parties internes, soit des embranchements de la rivière, soit des trous dans le multi-polygone.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image48.png)

Relation arrêt d'un itinéraire : ici les rôles que les membres jouent dans la relation ne sont pas inner/outer, mais "forward" (en avant), "backward" (en arrière) ou "stop" (arrêter). Stop
correspond à l'endroit où il y a un arrêt et forward/backward correspondent à la direction que prend le moyen de transport le long de l'itinéraire.

1.  Assurez-vous que tous les chemins que suit l'itinéraire sont étiquetés de manière appropriée. Par exemple, highway=footway.

2.  Ouvrez le panneau des relations (Alt + Maj + R) et cliquez sur le bouton "+" dans le panneau pour céer une nouvelle relation.  

3.  Saisissez les bons attributs dans la fenêtre.  Pour un itinéaire routier (exemple : ligne de bus appelée Route 5), il s'agit de type=route et name=Route 5.

4.  Cliquez sur "OK".

5.  Sélectionnez tous les voies et chemins pris par le moyen de transport (exemple : le bus). Si vous voulez sélectionner seulement certaines parties d'un chemin, vous devez malheureusement le diviser pour obtenir la section voulue. Cela ajoute une tâche supplémentaire, mais cela peut être fait facilement avec l'outil "Couper le chemin".
    Une fois que tous les chemins ou certains d'entre eux sont sélectionnés, cliquez sur le bouton "Modifiez la relation dans l'éditeur de relation" dans le panneau des relations. La fenêtre des propriétés de la relation s'ouvre alors.  

6. Cliquez sur l'un des boutons "Ajouter les objets avant le premier membre" ou "Ajouter les objets après le dernier membre" pour ajouter les chemins sélectionnés à la relation existante.  
