---
layout: doc
title: Préréglage JOSM
permalink: /fr/josm/josm-presets/
lang: fr
category: josm
---

Préréglage JOSM
============

> Révisé le 17 septembre 2016  

Si vous utilisez JOSM depuis longtemps, vous connaissez maintenant un peu les balises et les préréglages. Chaque objet est défini par deux éléments : d'une part, sa géométrie (qu'il s'agisse d'un point, d'une ligne ou d'une forme et de son emplacement) et, d'autre part, ses attributs qui se présentent sous la forme de balises.  

Lorsque vous tracez un objet et que vous effectuez une sélection dans le menu Préréglages, les balises correctes sont automatiquement appliquées à l'objet.  

Si vous aimez utiliser les préréglages, que se passe-t-il lorsque vous voulez ajouter des balises qui ne sont pas contenues dans le menu, ou lorsque vous voulez personnaliser vos propres balises ?  

Dans ce cas, vous pouvez ajouter des éléments de menu personnalisés aux préréglages. Dans cette section, nous verrons comment le faire. Dans le [chapitre suivant](/fr/josm/creating-presets), nous verrons comment créer vos propres fichiers de préréglages personnalisés.  


Ajouter des préréglages
-----------

Les menus et sous-menus qui composent le menu Presets sont stockés dans des fichiers qui décrivent comment créer les menus et les formulaires qui s'affichent lorsque vous cliquez sur un préréglage, et comment définir les balises qui sont ajoutées à un objet en fonction de la façon dont le formulaire est rempli.  

Les fichiers de préréglage peuvent être soit ajoutés à partir d'une archive en ligne, soit enregistrés sur votre ordinateur en local et ajoutés dans JOSM.  

* Pour ajouter une nouvelle entrée au menu Presets, ouvrez JOSM et allez dans Édition->Préférences.  
* Cliquez sur le troisième onglet en bas, qui ressemble à une grille couvrant la planète.  

![tagging presets tab][]

* En haut, cliquez sur "Tagging Presets".  

![tagging presets menu][]

* Ajouter un fichier de préréglage depuis l'internet en le sélectionnant dans la liste sur 	à gauche, et en cliquant sur la flèche bleue. Dans cet exemple, nous allons ajouter le préréglage nommé "Nouvelles balises".  

![example presets][]

* Vous verrez un nouvel élément apparaître dans la liste de droite.  
* Cliquez sur OK.  
* Vous devrez redémarrer JOSM.  
* Créez un nouveau calque et ajoutez un point ou une forme.  
* Allez dans le menu Préréglages. Vous verrez une entrée supplémentaire en bas de la page qui offre plusieurs options non couvertes par l'installation standard de JOSM.  

![additional tags preset][]

* La plupart des présélections couvrent des cas d'utilisation assez spécifiques. Parcourez la liste si vous en trouvez une qui correspond à vos intérêts.  

* Si vous avez reçu un fichier de préréglages personnalisés, vous pouvez l'ajouter au menu de la même manière. Il suffit de revenir au menu Préférences et, au lieu de choisir dans la liste, de cliquer sur le bouton (+) en haut à droite.  

![plus button][]

* Localisez votre fichier et donnez-lui un nom si vous le souhaitez.  
* Cliquez sur OK.  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets2.png
[additional tags preset]: /images/josm/new-tags-preset.png
[plus button]: /images/josm/plus-button.png

