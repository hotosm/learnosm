---
layout: doc
title: Relations JOSM
permalink: /fr/josm/josm-relations/
lang: fr
category: josm
---

Relations
==========

> Révisé le 6 juin 2017  

Dans le [Guide du débutant](/fr/beginner), nous avons expliqué qu'il existe trois types d'objets pouvant être dessinés dans OpenStreetMap : les points (nœuds), les lignes (voies) et les polygones (voies fermées). Les lignes contiennent de nombreux points, et la ligne elle-même porte les attributs qui définissent ce qu'elle représente. Les polygones sont identiques aux lignes, sauf que la ligne doit se terminer là où elle commence afin de former une forme.  

En fait, nous vous avons menti, car il existe un autre type d'objet dans OpenStreetMap, appelé relations. De la même manière qu'une ligne est constituée d'autres
points, une relation contient un groupe d'autres objets, qu'il s'agisse de points, de lignes ou de polygones. Si vous cherchez à améliorer vos compétences en matière d'édition, il est important de comprendre et de savoir comment éditer correctement les relations.  

Par exemple, imaginez que vous voulez cartographier un bâtiment dont le centre est constitué de cours intérieures. Vous devrez dessiner un polygone autour de l'extérieur du bâtiment et d'autres polygones autour des cours pour indiquer qu'elles ne font pas partie du bâtiment. Ceci est un exemple de relation. La relation contiendrait plusieurs polygones - et les attributs du bâtiment seraient attachés à la relation, pas aux polygones.  

![An example of a multipolygon][]

Les relations sont utilisées pour représenter tout ce qui nécessite une collection d'objets à définir. D'autres exemples sont les lignes de bus (une collection de lignes), les objets longs et complexes (rivières ou routes), ou plusieurs polygones qui font tous partie d'un même lieu (comme les bâtiments d'une université).  

Il y a principalement quatre types de relations que vous rencontrerez dans OSM : les multipolygones, les routes, les limites et les restrictions (telles que l'interdiction de tourner à gauche). Dans cette section, nous couvrirons les Multipolygones et les Routes.  

Création de relations multi-polygones
-------------------------------

Voyons comment créer une relation multipolygone comme celle illustrée ci-dessus.  

- Tout d'abord, dessinez vos formes. Dans ce cas, nous allons dessiner trois polygones, un rectangle extérieur et deux rectangles plus petits.

![Multipolygon ways][]

- Sélectionnez tous les polygones. N'oubliez pas que vous pouvez sélectionner plusieurs objets en maintenant la touche SHIFT enfoncée et en cliquant sur chacun d'eux.  
- Choisissez *Outils->Créer un multipolygone* dans le menu.  
- La fenêtre des balises contient maintenant le nouveau multipolygone.

![New mp object][]

- Cliquez sur le bouton d'édition.  

- Vous devriez maintenant voir la fenêtre de l'éditeur de relations. C'est un peu complexe parce que maintenant vous ajoutez des balises à une ensemble de voies.  

![Building relation][]

- Observez qu'en haut du panneau se trouvent les balises de la relation. Ces balises fonctionnent de la même façon que les balises fonctionnent toujours.  
- En bas de la page se trouve une liste des membres de la relation. Cette relation a trois membres - c'est-à-dire les trois voies qui font partie de notre relation.  
- Remarquez que nous avons déjà une balise définie pour nous, *type=multipolygon*. Nous devons ajouter un autre tag qui définit le type d'objet que la relation représente. Nous devons ajouter une balise qui dit *building=yes*.  
- Cliquez dans la case de la balise et ajoutez cette balise.  

![Building yes][]

- Les **rôles** ont déjà été correctement attribués aux voies. Chaque membre d'une relation a un rôle, qui indique quel est le but de ce membre. Dans ce cas, le rôle du polygone extérieur doit être défini comme **outer** et le rôle des deux polygones intérieurs doit être défini comme **inner**. Ce sont les rôles qui sont disponibles pour les membres d'un multipolygone.  

- Cliquez sur OK et votre relation multipolygone est terminée !  

![New multipolygon][]

Lorsque vous créez un multipolygone comme celui-ci, il sera rendu sur la carte de la manière suivante :  

![Multipolygon in Mapnik][]

Les multipolygones peuvent être utilisés pour tout objet complexe qui nécessite des polygones intérieurs et extérieurs, comme un bâtiment ou une rivière avec des parcelles de terre à l'intérieur. Des informations détaillées sur les multipolygones sont disponibles sur le [OSM Wiki] (http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Relations de route
----------------

Les relations sont également très utiles pour représenter de longs itinéraires. Par exemple, un itinéraire de bus ou de vélo suit plusieurs segments de route. Pour définir un tel itinéraire, nous pouvons créer une relation qui contient tous les segments de route qui font partie de l'itinéraire. Des caractéristiques supplémentaires, telles que les arrêts de bus, peuvent également être membres d'une relation d'itinéraire.  

![Route relation][]

Voyons comment créer une relation pour une ligne de bus dans JOSM :  

- Tout d'abord, sélectionnez toutes les voies que l'itinéraire emprunte. Vous devrez peut-être diviser certaines rues en segments séparés si une partie seulement d'entre elles appartient à la relation. Vous pouvez le faire en utilisant l'outil "Split Way".  
- Lorsque tous les segments sont sélectionnés, allez dans *Presets->Transport->Transport public->Route de transport public (bus)*.  

![Public transport preset][]

- Une nouvelle fenêtre s'ouvre dans laquelle vous pouvez saisir les informations qui s'appliquent à l'ensemble de l'itinéraire.

![New route relation][]

Il est important de sélectionner le type d'itinéraire spécifique dans le menu déroulant en haut de la page. Pour les lignes de bus, deux options sont disponibles, bus et trolleybus. En règle générale, vous devez également saisir le nom, le numéro de référence, le point de départ et le point d'arrivée.

- Cliquez sur "New Relation". Vous verrez apparaître la fenêtre de relation, comme lorsque vous créez un multipolygone.  

![Bus route relation][]

- Remarquez qu'il existe déjà des balises qui définissent la relation comme une route. Au lieu de *type=multipolygone*, nous avons *type=route*. Nous avons également une balise qui la définit comme une ligne de bus, par opposition à un autre type de ligne.  
- Vous vous demandez peut-être maintenant quel devrait être le **rôle** des membres ? Eh bien, dans le cas d'un itinéraire, nous n'avons pas besoin de définir le rôle des membres. En laissant le rôle vide, le logiciel sait qu'ils font simplement partie de l'itinéraire. Nous pourrions également définir le rôle de chaque segment comme **route**, mais ce n'est pas nécessaire.  
- Cliquez sur OK et votre relation de route sera complète !  

> Si vous voulez une liste de toutes les relations sur la carte, vous pouvez ouvrir le panneau des relations en cliquant sur ce bouton à gauche : ![bouton du panneau des relations][]{ : height="30px"}. Cela ouvrira un panneau où vous pourrez sélectionner, modifier et créer de nouvelles relations.  

Résumé
-------

Les relations peuvent être difficiles à comprendre et ne doivent pas être utilisées souvent, mais il est nécessaire de les connaître. De temps en temps, vous pouvez vous rendre compte que vous avez besoin d'une relation pour cartographier quelque chose correctement. Vous pouvez utiliser ces connaissances, et trouver plus d'informations sur le wiki OSM, pour vous aider à cartographier les relations correctement.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png