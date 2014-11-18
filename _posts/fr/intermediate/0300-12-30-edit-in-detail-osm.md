---
layout: doc
title: Edition avancée
permalink: /fr/intermediate/editing-in-detail/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---

Edition avancée
=================

Introduction
------------

Dans ce chapitre, nous allons décrire les relations, les outils
d'édition JOSM, et des techniques d'édition plus avancées.

Bien que ce chapitre ne requiert pas un niveau très avancé, il est plus
difficile que les chapitres précédents. Si vous sentez que vous n'avez
pas bien compris les leçons précédentes, vous pouvez les pratiquer
davantage avant de continuer.

Les sujets abordés dans ce chapitre :

1.  Outils d'édition : les Outils, le Greffon Immeubles, et les
    Raccourcis
2.  Relations : Description et comment modifier et ajouter des attributs
3.  Techniques d'édition : Les A faire et Ne pas faire

1. Outils d'édition JOSM
------------------------

Il y a plusieurs manières d'accéder aux outils d'édition supplémentaires
dans JOSM. Nous allons examiner de plus près les outils par défaut et
certains greffons. Il peut parfois être gênant de cliquer à plusieurs
reprises pour sélectionner différentes options et menus successifs dans
JOSM. Heureusement, il y a des touches de raccourci sur le clavier qui
simplifient votre travail et vous permettent de faire de nombreuses
tâches courantes. Dans cette documentation, nous facilitons le repérage
des Menus et raccourcis Clavier correspondants en les affichant
successivement de la façon suivante : Menu Clavier. Un sommaire des
menus et raccourcis est aussi présenté en annexe.

### A. Outils de dessin

JOSM offre des outils supplémentaires pour faciliter le traçage des
lignes et des polygones. Ces outils se trouvent dans le menu Outils en
haut de JOSM.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image51.png)

Afin d'appliquer les outils de ce menu, vous devez d'abord sélectionner
un point, une ligne ou un polygone dans la Fenêtre Carte. Quelques-uns
des outils les plus utiles sont décrits ci-dessous.

-   Couper un chemin P : Cet outil vous permet de diviser une ligne en
    deux lignes distinctes. C’est utile si vous souhaitez par exemple
    ajouter des attributs distincts pour différentes sections d'une
    route, comme un pont. Pour utiliser cet outil, sélectionnez un point
    au milieu de la ligne que vous voulez partager puis sélectionnez
    Couper le chemin P dans le menu Outils, et votre ligne sera scindée
    en deux.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image31.png)

-   Fusionner les chemins C : Cet outil fait le contraire de l'outil
    Couper le chemin P . Pour combiner deux lignes en une seule, elles
    doivent partager un seul point. Pour utiliser cet outil,
    sélectionnez les deux lignes que vous souhaitez combiner. Si vous
    voulez fusionner plusieurs segments d'une ligne continue, maintenez
    enfoncée la touche Maj de votre clavier et cliquez sur chaque ligne.
    Après avoir sélectionné ces segments de lignes, sélectionnez
    Fusionner les chemins C dans le menu Outils.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image41.png)

Si vous tentez de fusionner des routes qui ont des directions
différentes, le message d'avertissement suivant s'affichera :

![image](/images/fr/0300-12-30-edit-in-detail-osm/image16.png)

Si les routes sont connectées et ne vont pas dans la même direction,
choisissez alors Inverser et fusionner.

-   Inverser le chemin R : Cela va changer la direction de la ligne. Si
    la direction de cette ligne ne représente pas correctement le sens
    d'une rivière ou une route à sens unique, vous voudrez sans doute
    changer sa direction. A moins que quelqu'un ait délibérément créé un
    chemin avec l'attribut sens unique (oneway=yes), vous n'avez
    généralement pas à vous soucier de modifier l'instruction parce que
    les chemins dans OSM peuvent par défaut aller dans les deux sens.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image14.png)

-   Simplifier le chemin Maj + Y : Si votre ligne a trop de points et
    que vous souhaitez la simplifier, cela va enlever quelques-uns des
    points de la ligne.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image45.png)

-   Créer un cercle Maj + O ou Placer les nœuds en cercle O : Si vous
    essayez de créer une forme circulaire, vous pouvez dessinez le
    cercle du mieux que vous pouvez, puis sélectionnez trois noeuds.
    Sélectionnez ensuite dans le menu Outils, la fonction Placer les
    nœuds en cercle O . Elle aidera à organiser vos points dans un
    cercle. Le résultat est cependant moins régulier que si vous
    utilisez la fonction Créer un cercle Maj + O après avoir seulement
    tracé son diamètre avec une ligne à deux points.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image48.png)

-   Aligner les nœuds L sur une ligne : Cet outil permet d'aligner une
    série de points sur une ligne droite. Avec de longues lignes, il est
    préférable de sélectionner les sections de la ligne à redresser.
    Soyez prudent car cela a tendance à déplacer la ligne un peu. Si
    besoin, découpez auparavant la ligne pour ne sélectionner que la
    section qui doit être alignée. Vous pouvez ensuite fusionner à
    nouveau les différentes sections

.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image27.png)

-   Rendre une forme Orthogonale Q : Cette fonction est très utile pour
    dessiner des formes régulières comme les bâtiments. Après avoir
    dessiné un polygone qui doit avoir une forme avec des angles droits,
    cet outil permet de la remodeler pour avoir des coins carrés. Cet
    outil est aussi très utile pour divers objets de forme régulière,
    comme les cours de tennis, cours d'habitation, etc. ou les zones
    d'utilisation du sol. (À noter que l'utilisation du greffon
    bâtiment, qui sera expliquée ci-dessous, est souvent plus facile d'utilisation).

![image](/images/fr/0300-12-30-edit-in-detail-osm/image38.png)

-   Séparer un chemin G : Lorsque deux chemins adjacents sont connectés,
    cet outil vous permet de détacher les nœuds qui sont connectés.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image28.png)

La ligne et le noeud n'apparaîtront pas effectivement séparés comme la
dernière capture d'écran l'implique. Pour valider, cliquez sur un des
segments. Celui-ci sera mis en évidence.

-   Modifier les surfaces (Note : cette section a été ajoutée dans la
    version française) : Ce mode de traçage permet de modifier la forme
    des surfaces en déplaçant un segment de lignes entre deux points. On
    peut ainsi allonger, déformer un objet. On démarre ce mode à l'aide
    du bouton ![image](/images/fr/0300-12-30-edit-in-detail-osm/image25.png) Créer des surfaces X dans la
    barre d'outils à gauche de l'écran de JOSM. On termine ce mode en
    sélectionnant le mode Sélection S dans la barre d'outils à gauche.

-   Tracer en respectant des angles définis : cet outil vous permet de
    créer des formes avec des angles à 90 degrés en seulement trois
    clics. Tout d'abord, vous tracez un côté à l'aide de deux points,
    puis vous faites glisser la ligne à l'aide du curseur de la souris
    pour dimensionner et simplement créer un polygone.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image50.png)

-   Modifier des formes complexes : cliquer sur un segment de ligne
    entre deux points et déplacez-le en gardant le bouton de la souris
    enfoncée. Notons qu’il est possible de déplacer la souris dans
    différentes directions.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image53.png)

### B. Greffons utiles

-   Greffon Immeubles : Tout comme la fonction Modifier la surface, ce
    greffon est de loin l'un des plus utiles parmi les outils d'édition
    (numérisation). Il permet aussi de tracer des rectangles en
    seulement trois clics. Un autre avantage est qu'il permet d'ajouter
    automatiquement les attributs pour définir les
    immeubles.![image](/images/fr/0300-12-30-edit-in-detail-osm/image05.png)

![image](/images/fr/0300-12-30-edit-in-detail-osm/image17.png)

Vous pouvez également créer des bâtiments plus complexes à l'aide de
l'option de fusion. Créez votre plan de construction, sélectionnez tous
les polygones, appuyez sur Maj pour tous les mettre en évidence) et
ensuite Maj + J pour fusionner les objets (Magique!).

![image](/images/fr/0300-12-30-edit-in-detail-osm/image07.png)

En outre, vous pouvez modifier les paramètres par défaut (taille et
attributs) à partir du menu Modifier et au bas de la liste l'item
Définir la grandeur des bâtiments. Vous sélectionnez ensuite en bas du
panneau Définir la dimension de l'immeuble.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image30.png)

Si vous traitez une série d'immeubles de dimension similaire, vous
pouvez modifier la taille des immeubles pour une certaine dimension,
soit par exemple 5 x 6 mètres (l'unité est en mètres). Plus encore, si
vous numérisez des infrastructures similaires, telles que des bungalows
dans une même zone, vous pouvez éditer les attributs pour être tous
identiques à partir de l'onglet Avancé.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image04.png)![image](/images/fr/0300-12-30-edit-in-detail-osm/image44.png)

-   Utilsplugin2 (Plus d'outils) : Ce greffon a quelques fonctionnalités
    qui peuvent être utiles pour éditer.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image26.png)

Après l'installation du greffon et le redémarrage de JOSM, le menu
suivant sera ajouté : Plus d'outils :

![image](/images/fr/0300-12-30-edit-in-detail-osm/image11.png)

Les outils suivants se sont révélés être les plus utiles :

-   Ajout de nœuds aux intersections : cet outil est très utile pour
    ajouter des nœuds manquants aux intersections de voies
    sélectionnées. Il est nécessaire que les routes et les rivières
    aient toujours des nœuds communs à leur intersection.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image49.png)

Copiez les attributs de la sélection précédente : cette fonction
facilite la copie des attributs. Si vous voulez créer plusieurs objets
avec les mêmes attributs, dessinez d'abord les objets. Puis ajoutez les
attributs à l'un de ces objets. Cliquez ensuite sur un autre objet et
appuyez sur Maj + R pour copier les attributs de l'objet précédemment
sélectionné. Vous pouvez répéter cette opération pour tous les objets
auxquels vous souhaitez ajouter les attributs. Rappelez-vous que les
attributs seront copiés à partir de l'objet sélectionné précédemment.
Donc, si vous cliquez sur un objet sans attribut puis à nouveau sur un
autre objet sans attribut, vous ne serez pas en mesure de copier des
attributs !

![image](/images/fr/0300-12-30-edit-in-detail-osm/image08.png)

-   Ajouter un attribut source : cet outil simplifie l'ajout d'un
    attribut source. Il se souvient de la source qui a été spécifiée en
    dernier et il ajoute cet attribut source à vos objets. Vous pouvez
    insérer la source avec un seul clic.

-   Remplacer la Géométrie Ctrl + Maj + G : cet outil est idéal si vous
    voulez redessiner un objet mal dessiné tout en conservant
    l'historique, les attributs et l'ID de l'objet. Par exemple, si vous
    voulez redessiner un immeuble qui est compliqué et mal dessiné,
    alors au lieu de l'opération pénible consistant à déplacer chaque
    nœud, vous pouvez (2) juste dessiner à nouveau l'objet, (3) puis
    sélectionnez à la fois l'objet ancien et le nouveau (4) sélectionnez
    Remplacer la Géométrie Ctrl + Maj + G pour remplacer la géométrie
    avec le nouvel objet et transférer tous les attributs sur ce nouvel
    objet.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image39.png)

-   Utilsplugin2 (Sélection) : Après l'installation du greffon et le
    redémarrage de JOSM, le menu suivant sera également ajouté :
    Sélection

[](#)[](#)

![image](/images/fr/0300-12-30-edit-in-detail-osm/image34.png)

Les outils suivants se sont révélés être les plus utiles :

-   Désélectionner les nœuds Maj + U : Cet outil vous permet de
    désélectionner les nœuds, ce qui rend utile pour ajouter des
    attributs des objets sélectionnés. Cet outil est nécessaire si vous
    avez numérisé plusieurs objets polygonaux avec des attributs
    similaires et tenez à modifier les attributs des objets sans ajouter
    ces attributs aux nœuds. Pour ce faire, sélectionnez tous les objets
    - des polygones, des chemins et des relations, dé-sélectionnez les
    nœuds et ajoutez ensuite les attributs de manière appropriée.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image47.png)

Sélectionnez les derniers nœuds modifiés Maj + Z : cet outil vous permet
de revenir aux nœuds que vous avez récemment modifiés. C'est comme une
opération Annuler une partie des objets sélectionnés.

Amusez-vous à les utiliser!

2. Relations
------------

Dans le Guide du débutant, nous avons appris qu'il y a trois types
d'objets qui peuvent être dessinés dans OpenStreetMap - des points
(nœuds), des lignes (chemins), et des polygones (chemins fermés). Les
Lignes contiennent de nombreux points, et la ligne elle-même porte les
attributs qui définissent ce que cet ensemble de nœuds représente. Les
Polygones sont similaires aux lignes, à l'exception que la ligne est
tracée de façon à ce qu'elle se termine là ou elle a commencé, afin de
former un polygone.

En fait, il y a un autre type d'objet dans OpenStreetMap, et celui-ci
est appelé Relation. De la même manière qu'une ligne comprend une série
de points, une relation contient un groupe d'autres objets, qu'il
s'agisse de points, de lignes ou de polygones. Si vous voulez développer
des compétences d'édition avancée, il est important de comprendre les
relations et de savoir les éditer.

Par exemple, imaginez que vous souhaitiez numériser un bâtiment qui ait
des cours ou jardins en son centre. Vous avez besoin de dessiner un
polygone à l'extérieur de l'immeuble, et d’indiquer que les polygones
autour des cours ne font pas partie de l'édifice. Cet exemple implique
l’utilisation d’une relation. Celle-ci va contenir plusieurs polygones.
Étant donné que c'est la relation qui définit cet immeuble, notez que
les attributs de l'immeuble doivent être fixés à la relation et non à
chaque polygone.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image13.png)

Les relations sont utilisées pour représenter tout ce qui nécessite de
définir une collection d'objets. Différentes collections d'objets
peuvent être définies avec une relation, par exemple pour des lignes de
bus (une collection de lignes et de points), des objets longs et complexes (rivières
ou routes), ou des polygones multiples qui font tous partie du même
endroit (comme les bâtiments d'une université).

Il existe principalement quatre types de relations que vous rencontrerez
dans OSM :

-   Multipolygones,
-   Routes,
-   Frontières, et
-   Restrictions (telles que : pas de virage à gauche).

Dans cette section, nous allons passer en revue les multipolygones et
Routes.

### A. Éditez les Relations

Le multipolygone ci-dessus contient un polygone pour les limites
extérieures du bâtiment et deux autres pour marquer les cours
intérieures. Pour créer une relation avec ces trois polygones, vous
devez :

- Sélectionnez tous les polygones.
- Aller à Outils et près du bas Créer un multipolygone Ctrl + Alt + A

![image](/images/fr/0300-12-30-edit-in-detail-osm/image01.png)

- Ces membres sont alors automatiquement ajoutés dans la relation
    Multipolygone, et l'ensemble de ces objets est maintenant reconnu en
    tant que multipolygone.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image37.png)

Vous verrez alors votre bâtiment représenté avec une surface solide et
les polygones intérieurs représentés avec des vides. Les données
sous-jacentes de la relation dans cet exemple sont visibles sur
OpenStreetMap
: [http://www.openstreetmap.org/browse/relation/2435797](http://www.openstreetmap.org/browse/relation/2435797).
Le bâtiment est rendu par Mapnik comme sur cette image :

![image](/images/fr/0300-12-30-edit-in-detail-osm/image06.png)

[OSM Wiki: Relation:
MultiPolygon](http://wiki.openstreetmap.org/wiki/FR:Relation:multipolygon#Un_anneau_externe_et_un_anneau_interne)

[](http://wiki.openstreetmap.org/wiki/FR:Relation:multipolygon#Un_anneau_externe_et_un_anneau_interne)

### B. Autre type de MultiPolygone

Le segment de rivière illustré ci-dessous est un autre exemple de
multipolygone. En effet, cette relation (waterway=riverbank) est
similaire à l'exemple de l'immeuble, mais avec un plus grand nombre de
membres et couvrant une superficie beaucoup plus grande. Elle définit
les contours de la rivière et les éléments à exclure (les îles). Ce
multipolygone comprend dix lignes avec les rôles inner et outer.

La relation peut être consultée sur le site OpenStreetMap ici
: [](http://www.openstreetmap.org/browse/relation/1046961.)[http://www.openstreetmap.org/browse/relation/1046961](http://www.openstreetmap.org/browse/relation/1046961).

![image](/images/fr/0300-12-30-edit-in-detail-osm/image12.png)![image](/images/fr/0300-12-30-edit-in-detail-osm/image42.png)

[](#)[](#)

### C. Relations de Lignes

Les relations sont également très utiles pour la création, l'étiquetage
et l'édition de longues lignes, par exemple, des lignes de bus, des
sentiers pédestres, des pistes cyclables, etc. Les relations définissant
des polygones étaient composées d’éléments de même type représentant des
surfaces. Une relation de lignes peut contenir des éléments de
différents types, soit une ligne de bus représentée par une série de
chemins, soit aussi des arrêts de bus le long du parcours représentés
par des nœuds distincts. Encore ici, chaque type d’élément aura un rôle
particulier dans la relation.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image40.png)![image](/images/fr/0300-12-30-edit-in-detail-osm/image46.png)

- Assurez-vous que tous les chemins par lesquels la route passe
    possèdent les bons attributs. Par exemple, highway=residential.
- Sélectionnez toutes les routes ou chemins que prend le bus. Si vous
    voulez seulement sélectionner certaines parties du chemin, là,
    malheureusement, vous devrez diviser le chemin dans la section que
    vous souhaitez sélectionner. Cette opération nécessite plus de
    travail, mais vous pouvez facilement le faire avec l'outil Couper le
    chemin P .
- Une fois que tous ou une partie des chemins sont
    sélectionnés, vous pouvez créer votre nouvelle relation en cliquant
    sur Créer dans le panneau d'édition de Relation. La boîte de dialogue
    d'Édition de Relation apparaîtra. En utilisant une des icônes avec une
    flèche bleue, faites basculer les éléments présents dans la liste
    Sélection en bas à droite vers la liste Membres à gauche. Puis cliquez
    sur Valider. Dans le panneau d'édition de Relation, cliquez sur le
    dernier icône à droite Sélectionner les membres.
- Allez dans le menu Attributs et sélectionnez successivement dans le
    menu déroulant : Transport, puis Transport Public, puis Public
    transport route ou Itinéraire maitre. L'Itinéraire maitre est
    l'itinéraire principal, tandis que la route est une variante de
    l'itinéraire du bus.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image52.png)![image](/images/fr/0300-12-30-edit-in-detail-osm/image10.png)

- Remplissez les informations correspondantes relativement à la ligne
    de bus, puis cliquez sur le bouton Appliquer les attributs. Si ce
    bouton est désactivé c'est que vous n'aviez pas sélectionné les
    membres de la relation au préalable.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image10.png)

- Une autre possibilité pour créer la relation après avoir sélectionné les
    chemins est de passer directement par le menu Attributs, Transports,
    Transports Publics, Itinéraire Maître, remplir les informations puis
    cliquer sur le bouton Nouvelle Relation. Cela ouvrira la boîte de
    dialogue d'édition des relations avec les attributs renseignés et les
    membres déjà ajoutés. Il ne reste plus qu'à cliquer sur Valider.

Les relations sont parfois difficiles à comprendre et n'ont pas
nécessairement à être utilisées souvent. Il est cependant important de
les connaitre. À mesure que vous développez vos compétences avec OSM et
voulez créer des objets plus complexes, comme par exemple les immeubles,
rivières et routes, les relations seront utiles.

3. Techniques d'édition : Les A faire et Ne pas faire
-----------------------------------------------------

Dans cette section, nous couvrirons quelques erreurs communes dans JOSM
et fournirons quelques trucs d'édition pour rendre votre travail dans
JOSM plus efficient !

### A. Certains objets ne doivent pas être connectés

Lorsque vous créez des polygones et des lignes qui ne sont pas censés
être connectés, assurez-vous qu'ils ne sont pas fusionnés ensemble en
partageant un nœud. Par exemple, les nœuds routiers ne doivent pas être
accrochés aux bâtiments, parce que personne n'aime une route qui mène
directement dans un mur! Si vous voulez démêler deux ou plusieurs objets
qui partagent le même nœud, sélectionnez le nœud, puis sélectionner dans
le menu Outils, sélectionnez l'item Séparer les chemins G .

![image](/images/fr/0300-12-30-edit-in-detail-osm/image19.png)![image](/images/fr/0300-12-30-edit-in-detail-osm/image29.png)

Mais par contre, certains objets doivent se connecter.

Toutefois, certains objets doivent toujours se connecter ! Les
Intersections de routes devraient toujours être connectées. Si deux
routes ne partagent pas un noeud commun, alors les outils de navigation
n'ont aucun moyen de savoir que les routes se connectent l’une à
l'autre.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image15.png)

### B. Chevauchement des objets

Une erreur courante est de faire chevaucher des polygones alors que les
objets qu'ils représentent ne se chevauchent pas dans la vraie vie. Un
bâtiment ne peut pas chevaucher un autre bâtiment. Cette erreur est
souvent faite avec des bâtiments et les polygones landuse. Par exemple,
un polygone dessiné pour représenter un parc à l'extérieur d'un bâtiment
ne doit pas se chevaucher avec le bâtiment. Au contraire, il doit être
aligné sur le côté du bâtiment.

Il y a quelques exceptions à cette règle, comme les écoles, commerces,
infrastructures et zones résidentielles. Dans une cour d'école par
exemple, vous pourriez identifier les bâtiments individuels en utilisant
des polygones. Vous pourriez également vouloir créer un polygone autour
de la cour de l'école tout entière. Dans ce cas, il est acceptable que
les polygones se chevauchent, mais la règle à suivre ici est de
s'assurer que les bâtiments sont complètement à l'intérieur du polygone
landuse.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image33.png)![image](/images/fr/0300-12-30-edit-in-detail-osm/image21.png)

Nous faisons tous des erreurs, et plus vous tracerez des objets, moins
vous en ferez ! N'oubliez pas que même si vous téléchargez des données
qui contiennent des erreurs, il est facile de corriger vos erreurs et de
sauvegarder les modifications. C'est ce qui est formidable avec OSM :
vous pouvez toujours faire mieux !

### C. Tracer correctement

OSM peut réaliser des choses étonnantes en déterminant où les objets se
terminent et quels attributs ils devraient avoir, mais il a besoin de
votre aide pour le faire. Par exemple, si vous créez une route qui se
transforme en une autre route sans un nœud distinct, alors JOSM
conservera les attributs précédents pour cette route. Par conséquent, il
est nécessaire que vous créiez tous vos objets et routes de la façon la
plus claire et précise possible.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image35.png)

Nous terminerons ce chapitre avec ce bonus :

-   Pivoter un objet : Si vous maintenez les touches Maj + Ctrl
    enfoncées et faites glisser votre souris, bouton gauche enfoncé,
    vous pouvez faire pivoter les objets sélectionnés.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image20.png)

Résumé
------

Comme vous pouvez le voir, il y a de nombreuses fonctionnalités
supplémentaires qui font de JOSM un puissant outil de cartographie.
Rappelez-vous que plus vous utiliserez ces outils, plus vous réussirez à
ajouter des informations utiles et précises à OpenStreetMap.

* * * * *

Annexe
------

### A. Raccourcis clavier

Parfois, il peut être gênant de cliquer à plusieurs reprises pour
sélectionner différents options et menus successifs dans JOSM.
Heureusement, il existe des touches de raccourci sur le clavier qui
simplifient votre travail et vous permettent de faire de nombreuses
tâches courantes (nous recommandons fortement le raccourci DEL). Voici
une liste de quelques-unes des touches de raccourcis les plus couramment
utilisées, avec une courte description de ce qu'elles font :

S Choisir un outil de sélection

Del Effacer les objets sélectionnés

A Choisir un outil de dessin

Z Choisir l'outil de zoom

+ Zoom +

- Zoom -

P Couper un chemin

C Fusionner des chemins

O Aligner en cercle

L Aligner sur une ligne

Q Orthogonaliser (créer une forme rectangulaire)

### B. Plus d'information sur les outils de Sélection.

Source de ces informations :
[http://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2).

-   Sélection des Noeuds adjacents E : sélectionne les nœuds voisins de
    nœuds ou de chemins déjà sélectionnés. La sélection s'étend chaque
    fois que l'outil est relancé

Cas 1 : un ou plusieurs nœuds sont sélectionnés. L'outil sélectionne les
nœuds adjacents en prenant d'abord en compte les nœuds appartenant au(x)
même(s) chemins, avant de continuer sur les nœuds d'autres chemins.

Cas 2 : un ou des nœuds et un ou plusieurs chemins sont sélectionnés. La
sélection et sa progression à chaque relance de l'outil se restreignent
aux chemins sélectionnés au départ.

Cas 3 : seulement un ou des chemins sont sélectionnés (pas de nœuds).
L'outil va sélectionner uniquement les noeuds et désélectionner les
chemins.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image09.png)

-   Chemins adjacents Maj + E : si certains chemins ou nœuds sont
    sélectionnés, l'outil sélectionne les chemins adjacents. Chaque
    relance de l'outil sélectionne des chemins supplémentaires.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image24.png)

-   Tous les chemins connectés (Ctrl + Maj + E) : si certains chemins ou
    nœuds sont sélectionnés, l'outil sélectionne tous les chemins
    connectés.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image02.png)

-   Chemins s'entrecoupant (I) : si certains chemins sont sélectionnés,
    l'outil ajoute les chemins qui les intersectent à la sélection. Est
    utile avec l'outil Ajouter des nœuds aux intersections.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image22.png)

-   Tous les chemins s'entrecoupant (Ctrl + Shift + I) : si certains
    chemins sont sélectionnés, l'outil sélectionne de manière récursive
    tous les chemins s'interconnectant à partir de la sélection de
    départ. Utile pour sélectionner les différentes parties d'un
    bâtiment à fusionner.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image54.png)

### C. Précisions à propos des relations

Chaque objet dans une relation est étiqueté comme ayant un rôle et ces
rôles définissent ce que chaque objet fait au sein d'une relation.
Ainsi, le polygone autour de l'extérieur du bâtiment se voit attribuer
le rôle outer (externe) pour indiquer qu'il est à l'extérieur, et le(s)
polygone(s) intérieur(s) se voit(ent) attribuer le rôle inner qui
indique qu'ils sont des trous à l'intérieur du bâtiment.

-   La relation multi-polygone : exemple d'un bâtiment avec deux cours
    intérieures.

Pour créer une relation entre le polygone des limites extérieures et les
deux polygones délimitant les cours intérieures, il faut :

- Utilisez l'outil de sélection pour dessiner un cadre autour de ces
    trois polygones et les sélectionner tous à la fois.
- Cliquez sur le menu Attributs et sélectionnez successivement
    Relations et Multipolygone. Dans le panneau de dialogue Modifier le
    polygone, cliquez ensuite sur le bouton + Nouvelle relation.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image36.png)

![image](/images/fr/0300-12-30-edit-in-detail-osm/image23.png)

- S'ouvre alors la fenêtre des propriétés de la relation :

![image](/images/fr/0300-12-30-edit-in-detail-osm/image18.png)

La partie la plus importante se trouve en haut de la fenêtre avec un
tableau de lignes d'attributs. Le reste peut être ignoré.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image00.png)

- C'est dans ce tableau qu'il faut ajouter les attributs pour la
    relation. Les chemins n'ont pas besoin d'être étiquetés
    individuellement, à moins qu'il n'y ait quelque chose de spécifique,
    comme différentes sources de données.
- Ensuite, vous devez définir les rôles au sein de votre relation.
    Pour un multipolygone vous devez définir les chemins extérieurs et
    intérieurs. En fait, JOSM a besoin de savoir quels sont les
    polygones qui délimitent la partie externe et ceux qui délimitent la
    partie interne à exclure de manière à pouvoir déterminer quelle
    surface constitue le multipolygone. Sélectionnez les chemins qui
    délimitent les cours intérieures et inscrivez inner dans la case de
    leur rôle, puis sélectionnez la partie externe et marquez outer dans
    la case de son rôle.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image43.png)

- Cliquez sur OK et la fenêtre se ferme. Vous verrez alors votre
    bâtiment comme une forme solide avec les polygones intérieurs
    formant des trous. La donnée illustrant la relation dans cet exemple
    est visible sur OpenStreetMap
    : [](http://www.openstreetmap.org/browse/relation/2435797)[http://www.openstreetmap.org/browse/relation/2435797](http://www.openstreetmap.org/browse/relation/2435797).
    Le bâtiment est rendu dans Mapnik comme sur cette image:

![image](/images/fr/0300-12-30-edit-in-detail-osm/image06.png)

Source : [OSM Wiki: Relation:
MultiPolygone](http://wiki.openstreetmap.org/wiki/FR:Relation:multipolygon#Un_anneau_externe_et_un_anneau_interne)

[](http://wiki.openstreetmap.org/wiki/FR:Relation:multipolygon#Un_anneau_externe_et_un_anneau_interne)

**Relation cours d'eau.**

L'exemple d'un cours d'eau nécessite que vous créiez les berges internes
et externes, de même que les surfaces exclues à l'intérieur. De même
façon que nous avons procédé avec l'exemple immeubles, il faudra ajouter
chacun de ces éléments dans la relation et définir leurs rôles
respectifs.

**Relation arrêt d'un itinéraire**

Ici les rôles que les membres jouent dans la relation ne sont pas
inner/outer, mais "forward" (en avant), "backward" (en arrière) ou
"stop" (arrêter). Stop correspond à l'endroit où il y a un arrêt et
forward/backward correspondent à la direction que prend le moyen de
transport le long de l'itinéraire.

![image](/images/fr/0300-12-30-edit-in-detail-osm/image03.png)

- Assurez-vous que tous les chemins que suit l'itinéraire sont
    étiquetés de manière appropriée. Par exemple, highway=street.
- Ouvrez le panneau pour Afficher la liste des relations Alt + Maj + R
    et cliquez sur le bouton + dans le panneau pour créer une nouvelle
    relation.
- Saisissez les bons attributs dans la fenêtre. Pour un itinéraire
    routier (exemple : ligne de bus appelée Route 5), il s'agit de
    type=route et name=Route 5.
- Cliquez sur OK.
- Sélectionnez tous les voies et chemins pris par le moyen de
    transport (exemple : le bus). Si vous voulez sélectionner seulement
    certaines parties d'un chemin, vous devez malheureusement le diviser
    pour obtenir la section voulue. Cela ajoute une tâche
    supplémentaire, mais cela peut être fait facilement avec l'outil
    Couper le chemin P. Une fois que tous les chemins ou certains
    d'entre eux sont sélectionnés, cliquez sur le bouton "Modifiez la
    relation dans l'éditeur de relation" dans le panneau des relations.
    La fenêtre des propriétés de la relation s'ouvre alors.
- Cliquez sur l'un des boutons Ajouter les objets avant le premier
    membre ou Ajouter les objets après le dernier membre pour ajouter
    les chemins sélectionnés à la relation existante.


