---
layout: doc
title: Gestionnaire des Tâches
permalink: /fr/intermediate/tasking-manager/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---

Gestionnaire des Tâches (Tasking Manager)
==========================================

Introduction
---------------

Dans le chapitre précédent, nous avons exposé différentes approches de
contrôle de qualité au service de la contribution à OpenStreetMap. Dans
ce chapitre, nous allons focaliser sur le Gestionnaire des tâches de
HOT. C’est un outil qui permet à plusieurs cartographes OSM de
travailler de manière organisée pour cartographier une zone qui sera
divisée selon une grille composée de cellules de plus petite taille
appelées dalles.

La coordination de plusieurs cartographes OSM impliqués dans des
activités de cartographie terrain ou de cartographie à distance
(utilisant de l’imagerie satellite ou important une base de données
libres) a été un constant défi pour les membres du projet OpenStreetMap.
A cet effet, HOT a développé un outil de gestion de tâches, le
Gestionnaire des Tâches (Tasking Manager), qui permet à des
administrateurs de définir des zones d’intérêt pour la cartographie OSM
et de déléguer la réalisation du travail de tâches cartographiques aux
contributeurs OSM. L'idée derrière cet outil est que pour cartographier
une zone, une ville par exemple, deux groupes de cartographes OSM, l’un
actif sur le terrain et l’autre à distance en utilisant l'imagerie
satellite, pourraient disposer d’un outil qui créerait une grille
couvrant toute la zone d’intérêt et constituée de plusieurs carrés
appelés dalles. Les contributeurs pourraient alors sélectionner et
réserver la dalle de la grille sur laquelle ils désireraient travailler.
Une fois leurs tâches accomplies, ils pourraient alors indiquer le
statut de leur dalle comme accomplie. Une équipe de
plusieurs personnes peut ainsi travailler ensemble pour cartographier
l'ensemble de la grille. Lors de l’activation humanitaire pour le typhon
Haiyan aux Philippines en novembre 2013, des contributeurs de 82 pays
ont pu ainsi travailler simultanément et coordonner leurs efforts tout
en évitant de créer des conflits d’édition lorsque plus d’une personne
édite dans une zone.

Nous allons voir comment utiliser le Gestionnaire des Tâches (GT).

Ouvrez votre navigateur et allez à
l’adresse [](http://tasks.hotosm.org)[tasks.hotosm.org](http://tasks.hotosm.org).
Vous verrez une page comme celle-ci :![image](/images/fr/0300-12-26-tasking-manager/image03.png)

Cliquez sur "Connectez-vous en utilisant votre compte OpenStreetMap"
(Log in using your OpenStreetMap account).

Acceptez que l’application puisse accéder à votre compte OpenStreetMap
en cliquant sur "Enregistrer les modifications" (Save Changes)

![image](/images/fr/0300-12-26-tasking-manager/image08.png)

La liste des projets en cours va alors s’afficher. Ce sont les
différentes zones d’intérêt de par le monde où des activités de
cartographie sont coordonnées avec le Gestionnaire de Tâches de HOT. Il
est possible d’y visualiser tous les projets ou de n’afficher que ceux
prioritaires (le terme Featured est utilisé dans le Gestionnaire de
tâches lorsque l’interface est en anglais).

![image](/images/fr/0300-12-26-tasking-manager/image06.png)

-   Cliquez sur le nom d’un projet pour obtenir plus d’informations.

![image](/images/fr/0300-12-26-tasking-manager/image01.png)

S’ouvre une page qui présente tout ce que vous devez savoir à propos du
projet sélectionné. Sur le côté gauche de la page, l’onglet
"Description" présente le projet et l’organisation du travail
cartographique qu’il engage. Les autres onglets vous fournissent des
informations contextuelles plus précises. La moitié droite de la page
est consacrée à une interface cartographique qui montre la zone à
cartographier divisée en dalles de couleurs différentes :

-   Le rouge indique les dalles pour lesquelles le travail a été achevé,
-   Le vert signale celles pour lesquelles le travail a été achevé et
    contrôlé (par un cartographe OSM avancé)
-   le gris enfin signale les dalles qui restent à cartographier ou pour
    lesquelles un travail est en cours, lorsqu’elles sont marquées par
    un contour orange

L'onglet "Flux de travail" (Workflow), détaille aux contributeurs la
méthodologie requise pour la réalisation du travail cartographique dans
un éditeur tel que ID ou JOSM. L’onglet "Tâche" (Task) permet au
contributeur de sélectionner une dalle de la grille qui lui sera
réservée pendant cent vingt minutes pour y travailler. Il est également
possible de s’en faire attribuer une au hasard par l’outil en cliquant
sur Take a task.

![image](/images/fr/0300-12-26-tasking-manager/image00.png)

La dalle située au centre de la carte avec un contour orange correspond
à la zone à cartographier que vous avez sélectionnée ou qui vous a été
attribuée par l’outil. Vous pouvez l’ouvrir dans JOSM ou ID ou encore
créer une carte scannée ("Walking Paper") correspondant à son emprise
spatiale.

Le bouton JOSM vous permet de communiquer avec JOSM et d’y transférer
les données OSM de la dalle. Pour que cela fonctionne, assurez-vous
d’abord que le paramètre "Contrôle à distance" de JOSM est activé. Pour
ce faire, ouvrez JOSM et rendez-vous dans menu Modifier --\>
Préférences. Cliquez sur l'onglet "Contrôle à distance" et cochez la
case "Activer le contrôle à distance" comme indiqué ci-dessous.

![image](/images/fr/0300-12-26-tasking-manager/image07.png)

Cliquez sur OJ puis redémarrez JOSM.

Revenez vers le GT et choisissez JOSM. Si vous avez JOSM ouvert et que
vous avez bien activé le contrôle à distance, la donnée OSM
correspondant à votre dalle sera automatiquement chargée sous forme d’un
calque dans JOSM.

Vous pouvez maintenant éditer cette zone en suivant les instructions des
onglets Description et Workflow du GT relatives à ce projet.

Pour bien se coordonner avec les autres collaborateurs, une fois cette
tâche achevée, retournez sur le site du GT pour ajouter d’éventuels
commentaires à vos modifications dans la zone et signaler que cette
tâche est terminée. Cliquez sur "Mark task as done" qui signifie que la
tâche est complétée. Les autres collaborateurs sont ainsi en mesure de
savoir que vous avez terminé cette dalle de la grille.

Si vous n’êtes pas en mesure de compléter votre tâche (et de
cartographier toute la dalle), retournez au GT et cliquez sur "Unlock
it" pour que la tâche soit de nouveau disponible pour d’autres
contributeurs.

Si vous n’êtes pas en mesure de compléter votre tâche (et de
cartographier toute la dalle), retournez au GT et cliquez sur "Unlock
it" pour que la tâche soit de nouveau disponible pour d’autres
contributeurs.![image](/images/fr/0300-12-26-tasking-manager/image04.png)

Si vous n’êtes pas en mesure de compléter votre tâche (et de
cartographier toute la dalle), retournez au GT et cliquez sur "Unlock
it" pour que la tâche soit de nouveau disponible pour d’autres
contributeurs. Si la tâche à accomplir dépasse le temps que vous pouvez
y consacrer, il est possible de la diviser par quatre en cliquant sur
![image](/images/fr/0300-12-26-tasking-manager/image05.png).

-   Sitôt une tâche marquée comme achevée ("Task marked as done"), elle
    apparaît en couleur rouge dans la grille de l’interface
    cartographique indiquant par là que le travail a été réalisé.
-   Un contributeur plus avancé pourra alors procéder à une validation
    de votre travail en utilisant le GT. Il sélectionnera une dalle
    cartographiée de couleur rouge (en l’occurrence la vôtre), l’ouvrira
    dans JOSM où il utilisera des outils de validation. Une fois cela
    fait, il retournera dans le GT validera cette dalle en cliquant sur
    "Validez cette tâche" ("Validate Task"). La dalle revêtira alors une
    couleur verte indiquant à tous que le travail cartographique requis
    par le projet a bien été réalisé pour cette dalle.

Résumé :
--------

Le gestionnaire des tâches est très utile pour cartographier rapidement,
à plusieurs et de façon coordonnée une zone d’intérêt tout en assurant
l'exhaustivité et la qualité des données produites, en évitant des
phénomènes de duplication.
