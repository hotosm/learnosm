---
layout: doc
title: Modifier les données de terrain
permalink: /fr/josm/editing-with-josm/
lang: fr
category: josm
---

Modifier les données de terrain
==================


Nous avons maintenant couvert tous les éléments constitutifs de la cartographie avec OpenStreetMap. Dans la section [Cartographier avec un smartphone, un GPS ou du papier](/fr/mobile-mapping/), vous pouvez voir comment utiliser des outils mobiles pour cartographier une zone.

Dans ce chapitre, nous allons revenir une fois de plus à JOSM et examiner quelques nouveaux concepts que nous n'avons pas encore abordés jusqu'à présent.

Couches JOSM
-----------
Si vous avez suivi jusqu'ici, vous avez peut-être remarqué que nous pouvons ajouter toutes sortes de choses différentes dans JOSM. Nous pouvons télécharger des données OSM, ajouter des images satellites Bing, charger des traces et des points de repère GPS, et ajouter des Field Papers - tout cela s'affiche dans la fenêtre cartographique de JOSM.

Vous avez peut-être aussi remarqué que chaque fois que vous ajoutez quelque chose de nouveau à JOSM, un élément supplémentaire est ajouté au panneau des calques sur le côté droit de JOSM. En fonction de ce que vous avez ouvert, votre panneau des calques peut ressembler à ceci :

![Layers panel][]

Chaque élément de cette liste représente une source différente de données que vous avez ouverte dans la fenêtre de votre carte. Dans cet exemple, "Couche de données 1" correspond aux données OpenStreetMap que nous sommes en train d'éditer. "Field Papers" est la couche créée lorsque nous avons ajouté notre Field Paper dans le JOSM.

Si vous ajoutez l'imagerie satellite de Bing, une nouvelle couche apparaîtra dans le panneau des couches, appelée "Bing Sat".

L'idée des couches peut souvent être difficile à comprendre. Une bonne façon de l'imaginer est que chaque couche est comme une feuille de papier semi-transparente, et qu'elles sont toutes empilées les unes sur les autres. Chaque feuille de papier contient un certain type d'informations et peut être réorganisée comme vous le souhaitez.

Les couches utilisées comme références, telles que l'imagerie satellitaire, les traces GPS et les Field Papers, sont souvent appelées "couches de base". La couche de données OSM est la couche avec laquelle vous travaillez réellement.

- Pour déplacer un calque, cliquez dessus dans le panneau Calques et cliquez sur la flèche vers le haut ou vers le bas pour le déplacer.

![Layers up down][]

- Pour masquer un calque, sélectionnez-le avec votre souris et cliquez sur le bouton Afficher/Masquer :

![Layers show hide][]

- Vous devriez voir la couche que vous avez sélectionnée disparaître dans la fenêtre de la carte. Cliquez à nouveau sur Afficher/Masquer, et elle réapparaîtra.
- Vous pouvez supprimer une couche en la sélectionnant et en utilisant le bouton de suppression :

![Layers delete][]

- Enfin, il est important de savoir que vous ne pouvez modifier que la couche qui est considérée comme *active* par JOSM. Si vous ne parvenez pas à modifier la carte dans votre fenêtre de carte, c'est probablement parce que vous n'avez pas défini la bonne couche comme active. La plupart des couches, comme les points GPS, les Field Papers et l'imagerie satellite, ne peuvent pas être modifiées. Les seules couches qui peuvent être modifiées sont les données d'OpenStreetMap, qui sont généralement appelées "Couche de données 1".
- Pour rendre un calque actif, sélectionnez-le dans le panneau Calques, puis cliquez sur le bouton Activer :

![Layers activate][]


Utilisation des données GPS et des Field Papers
-------------------------------
Dans les chapitres [Cartographier avec un Smartphone, un GPS ou un papier](/fr/mobile-mapping/), nous avons vu comment collecter des données avec un GPS et des Field Papers, et comment les charger dans JOSM sous forme de couche.

Une fois que vous avez effectué un levé à l'aide de l'un de ces outils, vous devez encore ajouter les informations dans OpenStreetMap sous forme numérique.

Pour ce faire, vous utilisez le même processus que celui que vous avez appris précédemment : **télécharger, modifier, enregistrer**. La différence est qu'au lieu d'utiliser uniquement l'imagerie satellite comme couche de base, vous pouvez également utiliser vos données GPS, vos Field Papers, vos notes ou une combinaison de tous ces éléments.

- Par exemple, supposons que vos points de repère GPS constituent une couche d'arrière-plan dans JOSM, que vous avez enregistré un point de repère sur votre GPS avec le nom 030, et que vous avez écrit dans votre carnet que 030 est une école. Pour ajouter ce point dans OpenStreetMap, vous allez sélectionner l'outil de dessin, et double-cliquer sur le dessus du point 030 dans la fenêtre de votre carte. Cela créera un point. Ensuite, allez dans le menu Préréglages, et trouvez le préréglage pour l'école. Entrez le nom de l'école et cliquez sur " Appliquer le préréglage ". Faites de même pour ajouter des lignes et des surfaces.

![GPS in JOSM][]

Étiquettes
----
Lorsque vous dessinez un point, une ligne ou une surface, il a un emplacement, mais aucune information sur ce qu'il est. En d'autres termes, nous savons **où** il se trouve, mais pas **ce qu'il est**. Jusqu'à présent, nous avons utilisé les éléments du menu Presets pour définir **ce qu'il est**. La façon dont OpenStreetMap sait **ce qu'est** un objet est en utilisant des **balises**.

Une étiquette est comme un label que l'on peut mettre sur quelque chose. Par exemple, si nous dessinons un carré, ce n'est qu'un carré. Mais nous lui ajoutons ensuite des attributs qui décrivent ce qu'il est : ce carré est un bâtiment ; le nom du bâtiment est "Menara Thamrin" ; le bâtiment a 16 niveaux de hauteur.

Vous pouvez ajouter autant de balises que vous le souhaitez à un objet. Les balises sont enregistrées sous forme de paires de textes, appelées **clés** et les **valeurs**. Dans OpenStreetMap, les tags écrits ci-dessus seraient en fait :

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Si vous sélectionnez un objet dans le JOSM, vous pouvez voir toutes les balises qui lui sont attachées dans le panneau Propriétés à droite.

![Properties panel][]

### Édition des étiquettes

Vous pouvez ajouter, modifier et supprimer des balises à partir du panneau Propriétés. Cependant, les balises sont traditionnellement en anglais et peuvent parfois prêter à confusion, il est donc souvent plus facile d'utiliser le menu Préréglages. Lorsque vous ajoutez ou modifiez des balises, les attributs de l'objet sont modifiés.

- Pour modifier les balises d'un objet, il faut d'abord le sélectionner.
- Modifiez ensuite les balises de l'une des deux manières suivantes : (1) utilisez le menu Presets, ou (2) modifiez les balises directement dans la fenêtre Propriétés à droite.

#### Erreur courante : Marquer des nœuds alors que vous voulez marquer des lignes ou des polygones

Lorsque vous modifiez les attributs d'un point, vous devez d'abord sélectionner le point, puis ajouter des balises soit par le biais du menu Préréglages, soit directement dans le panneau Propriétés. On commet souvent l'erreur d'ajouter des attributs à une ligne ou à une forme. Lorsque vous sélectionnez l'objet, il est important que vous
sélectionner la ligne, et NON les points qui la composent.

Cela se produit souvent parce que les éditeurs utilisent l'outil de sélection JOSM pour dessiner une boîte autour d'un objet, ce qui fait que tout, à la fois la ligne **et** les nœuds, est sélectionné, et lorsque vous ajoutez des balises, elles sont également appliquées aux nœuds. Veillez à **seulement** sélectionner les lignes lorsque vous voulez y ajouter des balises.

![Nodes mistake][]

Sauvegarde des fichiers OSM
----------------
Lorsque vous éditez dans le JOSM, il est toujours bon de télécharger, d'éditer et de transférer les modifications dans un laps de temps raisonnablement court. Vous ne voulez pas télécharger des données un jour, puis attendre quelques jours plus tard pour transférer vos modifications. Et si quelqu'un d'autre modifie la même zone pendant ce temps ? Cela entraînera des erreurs et des conflits.

N'ayez pas peur de transférer fréquemment vos modifications. Cela garantit que vos modifications seront enregistrées dans la base de données et que vous ne perdrez pas le fruit de votre travail.

Si vous travaillez dans une seule zone, il est judicieux de télécharger les données cartographiques chaque fois que vous souhaitez les modifier, au cas où un autre utilisateur aurait apporté des changements.

Bien que vous deviez toujours essayer de télécharger les données OSM lorsque vous êtes prêt à les modifier et de transférer vos modifications fréquemment, il peut arriver que vous souhaitiez enregistrer les données OSM sur votre ordinateur. Par exemple, si votre connexion à Internet est intermittente, vous pouvez télécharger les données, les enregistrer, les modifier et transférer vos modifications ultérieurement.

- Pour enregistrer un fichier OSM, assurez-vous qu'il s'agit de la couche active dans le panneau des couches. Cliquez sur "Fichier" dans le menu supérieur, puis sur "Enregistrer". Choisissez un emplacement pour le fichier et donnez-lui un nom. Vous pouvez également enregistrer en cliquant sur ce bouton :

![JOSM save button][]

- Vous pouvez maintenant fermer JOSM et vos données seront sauvegardées. Lorsque vous souhaitez ouvrir à nouveau le fichier, il suffit d'ouvrir JOSM, d'aller dans le menu "Fichier" et de cliquer sur "Ouvrir...".

Résumé
-------
Dans ce chapitre, nous avons examiné de plus près l'interface JOSM et nous avons appris à connaître les couches et les étiquettes. Vous devriez maintenant avoir une base solide sur la façon de cartographier et d'éditer OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png