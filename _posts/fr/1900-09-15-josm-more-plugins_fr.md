---
layout: doc
title: Outils de construction JOSM et plugins Utilsplugin2
permalink: /fr/josm/josm-more-plugins/
lang: fr
category: josm
---

Outils de construction JOSM et plugins Utilsplugin2
============

> Révisé le 12 septembre 2016  

Les plugins **buildings_tools** et **utilsplugin2** ajoutent de nombreuses fonctionnalités à JOSM. Dans cette section, nous allons examiner de plus près les fonctions qu'ils fournissent.  

Le plugin Buildings Tools
--------------------------

Si vous ne l'avez pas encore fait, installez ce plugin en suivant les instructions de [JOSM Plugins](/fr/josm/josm-plugins).  

![Buildings tools plugin][]

Le plugin Buildings Tools est très utile pour numériser des bâtiments. Il vous permet de tracer un côté d'un bâtiment rectangulaire, et d'étendre facilement la forme. Si vous numérisez de nombreux bâtiments, ce plugin vous permettra d'économiser des clics, et donc du temps.  

Une fois que le plugin a été installé, vous verrez un nouveau bouton sur le côté gauche de JOSM, qui ressemble à ceci : ![Bouton Buildings tools][]{ : height="29px"}

Lancez JOSM et téléchargez une zone où vous souhaitez tracer des bâtiments.  

* Sélectionnez l'outil de construction et cliquez deux fois pour tracer une ligne sur la carte.  

![Draw edge][]

* Puis étendez la souris et cliquez à nouveau pour dessiner un rectangle.  

![Extend building][]

* Cette méthode permet non seulement de créer un rectangle en trois clics, mais aussi d'appliquer automatiquement la balise **building=yes** à la forme.  

### Bâtiments complexes

Vous pouvez également créer des bâtiments plus complexes en commençant par dessiner plusieurs bâtiments qui se chevauchent, puis en les fusionnant.  

* Dessinez deux bâtiments qui se chevauchent, de sorte qu'ils forment une figure en L.  
* Sélectionnez les deux bâtiments (maintenez SHIFT pour sélectionner plus d'un objet).  
* Allez dans Outils->Joindre les zones qui se chevauchent ou appuyez sur SHIFT+J sur votre clavier.  

![Merge buildings][]

### Paramètres d'édition

En outre, vous pouvez modifier les paramètres par défaut du plugin.  

* Allez dans Data->Set buildings size. ![Définir la taille des bâtiments][]{ : height="39px"}  

* Si vous créez de nombreux bâtiments de taille similaire, vous pouvez définir des dimensions spécifiques de largeur et de hauteur des bâtiments, par exemple 6 x 10 mètres (l'unité est en mètres).  

![Set buildings size dialog][]

* En définissant les dimensions, vous n'aurez besoin que de deux clics pour créer des bâtiments de taille précise.  

Enfin, vous pouvez cliquer sur le bouton Avancé si vous souhaitez ajouter des balises supplémentaires qui seront automatiquement appliquées à chaque bâtiment. Par exemple, si chaque bâtiment que vous dessinez se trouve dans la même rue, vous pouvez ajouter une balise identifiant la rue qui sera automatiquement appliquée.  

![Buildings advanced][]


Utilsplugin2
-------------

* Si vous ne l'avez pas encore fait, installez ce plugin en suivant les instructions de [JOSM Plugins](/en/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Après avoir installé le plugin et redémarré JOSM, vous aurez un nouveau menu en haut de l'écran appelé "More Tools".  

![More tools menu][]

Créez un nouveau calque et expérimentez certains des nouveaux outils. Nous décrivons ici certains des nouveaux outils les plus utiles :  

1. **Ajouter des nœuds aux intersections:** Cet outil est très utile pour ajouter les nœuds manquants aux intersections des voies sélectionnées. Il est de bonne pratique que les routes aient toujours des nœuds communs à leur intersection.  

    ![Nodes interesection][]

2. **Copier les balises de la sélection précédente:** Cette fonction facilite la copie des balises. Si vous souhaitez créer plusieurs objets avec les mêmes balises, dessinez d'abord les objets. Ensuite, ajoutez les balises à un objet. Cliquez sur un autre objet et appuyez sur Shift + R pour copier les balises de l'objet précédemment sélectionné. Vous pouvez procéder ainsi pour tous les objets que vous souhaitez marquer. N'oubliez pas que les balises seront copiées à partir de l'objet précédemment sélectionné. Par conséquent, si vous cliquez sur un objet non balisé, puis sur un autre objet non balisé, vous ne pourrez pas copier de balises.  

    ![Copy tags][]

3. **Add Source Tag:** Cet outil simplifie l'ajout d'une balise source. Il se souvient de la dernière source spécifiée et l'ajoute à vos objets comme balise source mémorisée. Vous pouvez insérer la source en un seul clic.  

4. **Remplacer la géométrie:** Cet outil est idéal si vous voulez redessiner un objet mal dessiné, mais que vous souhaitez conserver l'historique, les attributs et le numéro d'identification de cet objet. Par exemple, si vous tombez sur un bâtiment compliqué et mal dessiné, alors au lieu de modifier péniblement chaque nœud, vous pouvez redessiner l'objet, sélectionner l'ancien et le nouvel objet, et sélectionner ¨Replace Geometry¨ pour transférer toutes les informations.  

    ![Replace geometry][]


### Plus d'outils de sélection

**Utilsplugin2** fournit également plus d'outils dans le menu "Sélection". Essayez de les expérimenter.  

![Selection menu][]

L'un de nos outils de sélection préférés est **Unselect Nodes:** Cet outil désélectionne tous les nœuds. Cela peut être utile si vous dessinez une boîte pour sélectionner de nombreux objets, mais que vous ne voulez pas sélectionner les nœuds contenus dans toutes les lignes et formes.  

![Unselect nodes][]

Bonne chance !  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

