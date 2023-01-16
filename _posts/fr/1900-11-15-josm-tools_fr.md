---
layout: doc
title: Outils d'édition du JOSM
permalink: /fr/josm/josm-tools/
lang: fr
category: josm
---

Outils d'édition du JOSM
==================

> Révisé le 09 juin 2017  

- TOC
{:toc}

Dans le [guide de démarrage de JOSM](/fr/josm/start-josm/), nous couvrons les bases du dessin dans JOSM, mais de nombreux outils et techniques ne sont pas démontrés.

Nous examinerons ici certains des outils et techniques de base disponibles pour dessiner des éléments de carte dans JOSM. Dans les chapitres suivants, nous examinerons plus en profondeur les outils de dessin avancés.

Obtenir le fichier d'exemple
-------------------

- Si vous souhaitez suivre et vous entraîner à utiliser les outils JOSM, téléchargez [tools_menu_sample.osm](/files/tools_menu_sample.osm). Lancez JOSM et ouvrez le fichier. Il devrait ressembler à ceci :

![tools_menu_sample.osm][]

Outils de dessin
-------------

Si vous cliquez sur le menu "Outils" en haut de JOSM, vous verrez qu'il existe de nombreuses fonctions qui peuvent vous aider à dessiner des lignes et des surfaces, et à modifier les objets sur la carte.

JOSM dispose de quelques outils supplémentaires pour faciliter le dessin de lignes et de surfaces. Ces outils se trouvent dans le menu "Outils" en haut de JOSM.

![Tools menu][]

Afin d'appliquer les fonctions de ce menu, vous devez d'abord sélectionner un point, une ligne ou une surface dans la fenêtre de la carte. Le fichier d'exemple contient divers éléments qui sont étiquetés avec les noms des différents outils du menu.

### Alignement des noeuds dans un cercle  

- Essayez de sélectionner l'un des éléments du fichier. Ensuite, allez dans le menu Outils et cliquez sur la fonction qui est identifiée à côté de l'élément que vous avez sélectionné. Par exemple, cliquez sur le cercle mal dessiné pour le sélectionner.

![Align nodes in circle][]

- Ensuite, allez dans Outils->Aligner les nœuds en cercle. Le cercle mal dessiné deviendra plus circulaire.

Expérimentez chacun des outils à l'aide de ce fichier d'exemple. Une description de certains de ces outils est fournie ci-dessous.

### Méthode de fractionnement  

Cela vous permet de diviser une ligne en deux lignes distinctes. Cette fonction est utile si vous souhaitez ajouter des attributs différents à différentes parties d'une route, comme un pont. Pour utiliser cette fonction, sélectionnez un point au milieu de la ligne que vous souhaitez diviser, puis sélectionnez Diviser le chemin dans le menu Outils, et votre ligne devrait être divisée en deux.


### Méthode de combinaison

Cela fait l'inverse de la méthode de fractionnement. Pour combiner deux lignes en une seule, elles doivent partager un seul point. Pour utiliser cette fonction, sélectionnez les deux lignes que vous souhaitez combiner. Vous pouvez sélectionner plusieurs objets en maintenant la touche SHIFT de votre clavier et en cliquant sur chaque ligne. Lorsque vous avez sélectionné les deux lignes, sélectionnez Combiner les lignes dans le menu Outils.

![Combine way][]


### Inverser et combiner  

Si vous combinez des routes qui ont des directions différentes, vous pouvez recevoir cet avertissement :

![Reverse and combine][]

Si les routes sont reliées et vont dans la même direction, choisissez "Inverser et continuer".


### Voie inverse

Cela changera la direction de la ligne. Toutes les lignes dans OSM ont une direction, qui est indiquée dans JOSM par les flèches sur la ligne. La direction n'a généralement pas d'importance, sauf dans le cas de routes à sens unique et de rivières qui coulent dans une certaine direction. Dans ce cas, vous devrez peut-être inverser le sens de la ligne pour qu'elle aille dans la bonne direction.

![Way direction][]

### Simplifier la voie

Si votre ligne comporte trop de points et que vous souhaitez la simplifier, cette fonction permet de supprimer certains des points d'une ligne.

![Simplify way][]


### Créer un cercle

Utilisez cet outil, qui permettra de créer un cercle plus parfait. Tracez une ligne qui représente le diamètre de votre cercle, puis appliquez cet outil.

![Create circle][]


### Aligner les noeuds en ligne

Cette fonction permet d'aligner une série de points en une ligne droite. Pour les longues lignes, il est préférable de sélectionner des sections de la ligne à redresser. Faites attention car cette fonction a tendance à décaler un peu la ligne.

![Align nodes in line][]

### Orthogonaliser la surface

Cette fonction est très utile pour dessiner des formes régulières telles que des bâtiments (**Mais voir aussi [Outils de construction JOSM](/fr/josm/josm-more-plugins/)**). Après avoir dessiné une zone, cette fonction la remodèlera pour qu'elle ait des coins carrés.

![Orthagonalize][]


### Méthode de décollage

Cet outil vous permet de détacher des nœuds qui sont connectés. Il est utile lorsque deux objets partagent un nœud alors qu'ils ne devraient pas. Par exemple, une erreur courante est qu'une route partage un noeud avec le coin d'un bâtiment. Bien sûr, les routes ne se heurtent généralement pas aux bâtiments, il s'agit donc d'une erreur, et vous pouvez décoller les objets l'un de l'autre.

![Unglue way][]

*La ligne et le nœud n'apparaîtront réellement séparés que lorsque vous les déplacerez.*

Raccourcis clavier
------------------

Lorsque vous commencerez à éditer beaucoup, vous vous rendrez compte que vous perdez beaucoup de temps à cliquer sur les menus et sous-menus. Pour remédier à ce problème, JOSM propose des raccourcis clavier pour pratiquement tout.

Cela signifie qu'au lieu de cliquer sur un objet puis de passer par un long processus de menu, vous pouvez simplement sélectionner l'objet et appuyer sur une touche de votre clavier.

Tous les outils mentionnés dans la section précédente ont des touches de raccourci, qui sont répertoriées dans le menu Outils, à droite du nom de chaque outil. Par exemple, "O" est le
raccourci pour aligner les nœuds dans un cercle. "L" est le raccourci pour les aligner en ligne. L'apprentissage des touches de raccourci peut prendre un certain temps, mais vous constaterez qu'il permet de gagner 
beaucoup de temps à long terme.

Voici d'autres touches de raccourci (en **gras**) qui sont parmi les plus importantes.

1. Activez l'outil de sélection - **S**
2. Activez l'outil Dessin - **A**
3. Activez l'outil de zoom - **Z**
4. Supprimer le ou les objets sélectionnés - **Delete**
5. Zoom avant - **+**
6. Zoom arrière - **-**


Échelle et rotation
----------------

Une question fréquente est de savoir comment faire pivoter une ligne ou une forme après qu'elle ait été dessinée.

Pour faire pivoter un objet, commencez par le sélectionner. Maintenez les touches **SHIFT+CTRL** enfoncées sur votre clavier. Cliquez et faites glisser la souris pour le faire pivoter.

![Rotate demo][]

Pour mettre un objet à l'échelle (le rendre plus grand ou plus petit), suivez le même processus, mais en maintenant ALT+CTRL à la place.

Ces instructions sont affichées dans la barre d'information au bas du JOSM :

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png
