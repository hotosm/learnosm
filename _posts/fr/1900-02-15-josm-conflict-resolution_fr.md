---
layout: doc
title: JOSM Résolution des conflits
permalink: /fr/josm/josm-conflict-resolution/
lang: fr
category: josm
---

JOSM Résolution des conflits
====================

> Révisé le 27 septembre 2016  

Parfois, vous travaillez dans JOSM et, lorsque vous téléchargez toutes vos belles modifications, vous recevez un message désagréable vous informant d'un conflit.  
![conflict detected][]  
Ce qui s'est passé, c'est que vous avez téléchargé un ensemble de données, qui comprenait un point que nous appellerons Node A. Puis, pendant que vous étiez en train d'éditer, quelqu'un d'autre a également téléchargé le Node A, l'a modifié et a sauvegardé les changements sur OpenStreetMap. Maintenant, lorsque vous essayez de télécharger votre version du nœud A, elle est différente de celle enregistrée sur OSM. Par conséquent, le JOSM ne sait pas quelle version du nœud A doit être sauvegardée.  

Conflits
----------

Parfois, JOSM est capable de résoudre les conflits tout seul, et il vous donnera un message comme celui-ci :  
![resolved automatically][]  
Cela signifie que la JOSM a automatiquement décidé que les éléments de votre jeu de données local ne seront pas téléchargés vers le serveur principal parce qu'ils ont déjà été supprimés par un autre utilisateur. Dans certains conflits, cependant, il n'y a pas d'action facile à prendre pour la JOSM et elle laisse donc à l'utilisateur le soin de déterminer la meilleure marche à suivre. Cela signifie que c'est à vous de résoudre les conflits.  

Cela vous indique de regarder tous vos conflits de la couche 1 dans la boîte **Liste de dialogues** :  
![warning unresolved][]  

Cette fenêtre vous avertit si vous risquez de rencontrer un conflit avec vos modifications. Si vous vérifiez sur le serveur, vous serez en mesure de résoudre les problèmes d'édition qui pourraient survenir :  
![check on server][]  

Cet avertissement vous indique que JOSM n'a pas réussi à supprimer un nœud car il est toujours référencé d'une certaine manière. Pour y remédier, l'utilisateur doit retourner dans la JOSM et résoudre le conflit avant de télécharger les données :  
![still in use][]  

Résolution des conflits
--------------------

Le processus de résolution d'un conflit est assez simple, même s'il peut sembler déroutant au début dans JOSM. En gros, pour chaque conflit, JOSM vous présente deux choix : votre version d'un objet et celle qui se trouve sur le serveur. Vous devez choisir si vous voulez conserver votre version ou si la nouvelle version sur le serveur doit être conservée.  
Vous pourriez penser, "bien sûr, ma version sera meilleure !" Et vous avez peut-être raison. Mais repensez à notre exemple au début de ce chapitre. Peut-être que pendant que vous étiez occupé à éditer, un autre cartographe a ajouté beaucoup d'informations à l'un des nœuds de votre ensemble de données. Si vous choisissez votre version plutôt que la sienne, vous perdrez toutes les informations précieuses qu'il a ajoutées. Vous devez donc envisager de conserver sa version ou de la fusionner avec la vôtre.  
Lorsque vous obtenez une fenêtre de conflit, il est préférable de choisir le bouton "Synchroniser ... seulement". Vous devrez peut-être le faire pour plusieurs objets, mais il est préférable de résoudre les conflits un par un.  
![synchronize node][]  
Une fois que vous aurez cliqué sur ce bouton, vous obtiendrez une fenêtre pop-up qui détaillera votre conflit. Le message d'erreur peut sembler compliqué, mais il est plutôt simple. Vous saurez quel type de conflit vous avez grâce au symbole du carré rouge dans l'onglet supérieur. Dans l'exemple ci-dessous, le conflit porte sur les propriétés, telles que l'emplacement et l'existence de l'objet. C'est pourquoi les coordonnées et l'état supprimé sont indiqués.  

**Types de conflits:**

- **Propriétés:** L'objet a été déplacé (coordonnées) ou supprimé  
- **Balises:** Les balises ne correspondent pas  
- **Nœuds:** Il y a des différences dans la liste des nœuds de deux façons  
- **Membres:** Il y a une différence dans la liste des membres d'une relation  
![properties with conflicts][]  

Les conflits n'apparaissent qu'avec deux modifications différentes à la fois. S'il y a trois conflits ou plus, une chaîne de conflits apparaîtra. C'est pourquoi vous devez choisir ou fusionner avec seulement deux conflits à la fois. Vous pouvez choisir votre version, l'autre version ou, parfois, fusionner les deux.  

Dans l'exemple ci-dessous, vous n'avez pas la possibilité de fusionner. Cliquez sur la première colonne, ou Ma version, si vous pensez que vos modifications sont correctes. Cliquez sur Leur version si vous pensez que les autres modifications sont meilleures.  
![conflicts resolved][]  

Une fois que vous avez sélectionné la version qui vous semble la meilleure, cliquez sur "Appliquer la résolution". Quelques fenêtres supplémentaires s'ouvriront et vous serez en mesure de télécharger vos modifications. Faites encore quelques modifications. Cliquez ensuite sur "Télécharger". Vous obtiendrez une fenêtre pop-up qui dit :  
![command stack][]  

Dans votre menu Windows, vous avez une fenêtre de dialogue Liste des conflits . Cette fenêtre affiche une liste de conflits. Le nombre total de conflits non résolus est indiqué dans l'en-tête. Vous pouvez sélectionner ou résoudre un conflit en cliquant dessus. Cette fonction est utile lorsque vous avez de nombreux conflits à gérer.  
![one unresolved][]  
Vous ne pouvez pas télécharger vos modifications tant que cette liste n'est pas vide.  

Les moyens d'éviter les conflits
------------------------

### Téléchargement fréquent

Pour minimiser les risques de conflits et leur nombre, il est important de télécharger régulièrement vos modifications. Les conflits sont plus fréquents pour ceux qui ont tendance à sauvegarder la zone sur laquelle ils travaillent sur leur serveur local et à attendre un certain temps avant de la télécharger. Il est préférable de télécharger la zone sur laquelle vous travaillez, de la modifier, puis de la télécharger immédiatement. Plus le temps s'écoule entre le téléchargement des données et le chargement des modifications apportées à ces données, plus il est probable que quelqu'un ait modifié quelque chose entre-temps. Si vous participez à un Mapathon et que vous modifiez un élément tel qu'une autoroute sur laquelle d'autres personnes peuvent également travailler, téléchargez très fréquemment, peut-être toutes les 6 modifications !  

### Modifier dans la zone que vous téléchargez

L'édition dans la zone spécifique que vous avez téléchargée minimise le risque de conflit. Veillez à ne pas éditer en dehors de la zone que vous avez téléchargée. Vous pouvez facilement voir les zones situées en dehors de votre zone de téléchargement dans JOSM, car l'arrière-plan est constitué de lignes diagonales au lieu d'être noir uni.  

![edit outside area][]  

Résumé
--------
Lorsque vous éditez dans JOSM, vous courez le risque d'entrer en conflit. Les conflits surviennent lorsqu'un objet a été modifié par deux personnes au même moment. En comprenant ce qu'est un conflit et comment le gérer, vous serez en mesure de vous assurer que les meilleures modifications possibles sont enregistrées dans OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Annexe. Conflits plus spécifiques

### Conflits de balises

Si les balises d'une version d'un objet sont différentes de celles
une autre version, la boîte de dialogue Conflit affiche un ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
onglet Balises. Cliquez sur l'onglet pour afficher une boîte de dialogue permettant de résoudre les balises
en conflits.

Trois tableaux sont affichés dans cette boîte de dialogue, de gauche à droite :

1. Ma version : montre les balises de la première version de l'objet participant
    dans ce conflit. Ce sont généralement les balises de la version de l'objet
    dans votre ensemble de données locales.
2. Version fusionnée : montre les balises fusionnées. Ce tableau est initialement
    vides. Plus vous résolvez de conflits de balises, plus le nombre de valeurs de balises sera
    serons affichés dans ce tableau.
3. Leur version : montre les balises de la deuxième version de l'objet
    participant à ce conflit. Ce sont généralement les étiquettes de la
    version de l'objet actuellement stockée sur le serveur.

Dans l'exemple ci-dessous, les deux versions ont une balise "name". Les valeurs dans les
deux versions d'objets sont différentes, cependant, et JOSM affiche donc
la ligne avec un fond rouge. La valeur de la première version est
"Secondary School", la version opposée a une valeur "Elementary
School". Vous devez maintenant décider lesquelles de ces valeurs vous souhaitez conserver
et ceux que vous voulez rejeter.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Cliquez sur la valeur que vous voulez conserver, dans l'exemple sur la
valeur sur la gauche. Si vous double-cliquez sur la valeur ou si vous cliquez sur
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), vous décidez de garder la valeur et d'écarter la
valeur opposée. Le tableau du milieu affiche maintenant la valeur à conserver.
et la couleur de fond devient verte.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Lorsque le bouton Appliquer la résolution est activé, vous pouvez appliquer votre décision.
Les valeurs que vous avez choisies seront appliquées et la boîte de dialogue sera fermée.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Résolution des différences dans la liste des nœuds de deux versions d'une voie

Si vous voyez le symbole ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) dans l'onglet Nœuds, puis vous
devez résoudre les différences dans la liste de
[nœuds](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) de deux
[voies](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). Il 
y a trois colonnes dans le panneau respectif (voir la capture d'écran ci-dessous) :

1.  the leftmost table displays the list of nodes of the the local
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png
