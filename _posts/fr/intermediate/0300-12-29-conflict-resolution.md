---
layout: doc
title: Résoudre les conflits
permalink: /fr/intermediate/conflict-resolution/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---




Résoudre les conflits
=====================

Introduction
------------

Parfois lorsque vous travaillez sur JOSM et que vous voulez envoyer sur
le serveur (upload) les modifications de la base liées à vos éditions,
vous obtenez ce message inquiétant :

![image](/images/fr/0300-12-29-conflict-resolution/image43.png)

Il vous indique que l'envoi n'a pas fonctionné parce qu'un autre
utilisateur a envoyé ses éditions qui concernent certains des objets que
vous avez également édités. Le message précise que vous avez téléchargé
la zone en premier donc vous possédez la version 1, mais le serveur a
une version 2 plus récente. Plus spécifiquement, le nœud 2 549 547 834
est la source du problème. C'est cet objet qui a été modifié par
quelqu'un d'autre entre le moment où vous l'avez téléchargé et le moment
où vous avez voulu envoyer vos modifications.

Cette boîte de dialogue est spécifique aux conflits dans JOSM. Dans ce
logiciel, un conflit correspond à une incapacité du serveur OSM à
déterminer quelles éditions envoyées doivent être considérées pour
mettre à jour la base de données. Fondamentalement, le serveur OSM a
reçu des éditions qui ont modifié des objets identiques ou similaires et
JOSM ne sait lesquelles doivent être choisies.

![image](/images/fr/0300-12-29-conflict-resolution/image45.png)

Les sujets abordés dans ce chapitre:

1.  Notion de conflits dans OSM
2.  Résolution des conflits
3.  Bonnes pratiques pour éviter les conflits

1. Notion de conflits dans OSM
------------------------------

Lorsque vous éditez dans JOSM, vous êtes en train d'éditer une copie, ou
un clone, de la carte principale. JOSM charge des objets OSM depuis le
serveur principal et les garde en mémoire sur votre ordinateur. Vous
rencontrez des conflits lorsque vous envoyez sur le serveur principal
des éléments modifiés, ajoutés ou supprimés sur votre carte que
quelqu'un d'autre a également édités dans l'intervalle entre votre
téléchargement et l'envoi de vos modifications.

En effet, dans la mesure où vous travaillez sur une copie locale d'OSM
sur votre ordinateur, d'autres utilisateurs peuvent aussi récupérer,
éditer et remonter des donnés vers le serveur OSM (upload) concernant
les mêmes objets OSM que vous. Vous n'avez pas la possession des objets
sur lesquels vous êtes en train de travailler : vous les partagez.
Ainsi, lorsque des objets que l'autre utilisateur et vous même avez
envoyés sur le serveur principal à des moments différents, celui-ci ne
sait pas quel envoi doit être conservé et utilisé et vous informe donc
sur ce conflit. JOSM est capable de résoudre seul certains conflits, et
parfois vous pourrez rencontrer un message d'erreur tel que celui-ci :

![image](/images/fr/0300-12-29-conflict-resolution/image01.png)

Ce message indique que JOSM a supprimé certains des objets de l'extrait
téléchargé dans JOSM car ils ont depuis été supprimés sur le serveur

Cela signifie que JOSM a décidé automatiquement que des objets de votre
extrait local de données ne seront pas envoyés sur le serveur principal
parce qu'ils ont été supprimés par un autre utilisateur.

Cependant, pour certains conflits, il n'y a pas pour JOSM de décision
simple à prendre et le logiciel laisse alors à l'utilisateur le choix de
prendre la meilleure décision. Ainsi, le conflit a besoin d'être
résolu​​​​​ :

![image](/images/fr/0300-12-29-conflict-resolution/image27.png)

Ce message vous informe de la nécessité de regarder les conflits du
Calque de données dans la boîte de dialogue des Conflits.

![image](/images/fr/0300-12-29-conflict-resolution/image53.png)

Ce message vous fournit un avertissement sur le fait que vous allez
probablement rencontrer des conflits avec vos éditions. Si vous cliquez
sur "Vérifier sur le serveur", vous allez être en mesure de corriger les
erreurs d'édition que le serveur va avoir mis en évidence .

2. Résolution des conflits
--------------------------

Résoudre les conflits est nécessaire, sinon aucune de vos éditions ne
pourra être envoyée sur le serveur OSM. Pour résoudre un conflit, vous
devez choisir la meilleure option pour chaque édition. Lorsque vous êtes
confronté à cette fenêtre de détection des conflits, il vaut mieux
toujours choisir le premier bouton à gauche, intitulé "Synchroniser le
nœud x xxx xxx xxx" ou "Synchroniser seulement les chemins xxx xxx xxx".
Cette option vous permet de gagner du temps et d'éviter des maux de tête
dans la mesure où un seul conflit va être considéré à la fois. Si vous
choisissez "Synchroniser tout le jeu de données", JOSM communiquera avec
le serveur principal à propos de toutes les éditions et tous les objets.
Cette option est seulement nécessaire lorsque vous avez un grand nombre
de conflits et d’éditions et a l’inconvénient d’engendrer parfois de la
confusion.

![image](/images/fr/0300-12-29-conflict-resolution/image13.png)

Le conflit apparait alors dans la fenêtre latérale "Conflits" à droite
au sein du panneau des fenêtres latérales. Dans la barre d'outils
verticale à gauche, l’icône ![image](/images/fr/0300-12-29-conflict-resolution/image09.png) permet
d’afficher/désafficher cette fenêtre, de même que le raccourci clavier
SHIFT+ALT+C. Cette fenêtre liste les conflits existants, dont le nombre
total apparaît en haut dans la zone de titre de la boîte. Vous ne pouvez
pas envoyer vos modifications avant que cette liste ne soit vide.

![image](/images/fr/0300-12-29-conflict-resolution/image08.png)

Au passage de la souris sur la fenêtre, deux boutons s’affichent :

![image](/images/fr/0300-12-29-conflict-resolution/image41.png)

Avant de commencer à résoudre, il est intéressant de visualiser le nœud
pour comprendre la raison du conflit. Cliquer d’abord sur le conflit
puis sur le bouton ![image](/images/fr/0300-12-29-conflict-resolution/image48.png). Faites un clic droit
sur le conflit à résoudre, et cliquer sur "Zoomer sur conflit".

![image](/images/fr/0300-12-29-conflict-resolution/image20.png)

La carte dans JOSM va être centrée sur le nœud en conflit qui apparaît
sélectionné en rouge. Vous pouvez ainsi le voir et vous remémorer quand
vous l’avez créé ou modifié. Cliquez ensuite sur le bouton
![image](/images/fr/0300-12-29-conflict-resolution/image40.png) qui va ouvrir une fenêtre qui détaille
votre conflit et permet d’effectuer sa résolution.

![image](/images/fr/0300-12-29-conflict-resolution/image21.png)

Le message d'erreur qui apparaît peut sembler compliqué, mais il est en
fait assez simple. Vous saurez à quel type de conflit vous êtes
confronté grâce au symbole![image](/images/fr/0300-12-29-conflict-resolution/image02.png) dans les onglets
en haut :

-   Propriétés : sur le serveur OSM, le nœud a une nouvelle version de
    ses coordonnées ou de son état (supprimé/non supprimé).
-   Attributs : sur le serveur OSM, le nœud a une nouvelle version de
    ses attributs (ajoutés, modifiés ou supprimés).
-   Nœuds : sur le serveur OSM, le nœud s’il y a des différences entre
    les deux listes de nœuds d’un même chemin (way), par exemple une
    route. Cette possibilité n’existe que pour ce type d’objets et
    seulement si vous avez préalablement cliqué sur "Synchroniser tout
    le jeu de données".
-   Membres : sur le serveur OSM, le nœud s’il y a des différences entre
    les deux listes de membres d'une relation.

### A. Conflits sur les propriétés

Les propriétés concernent l'emplacement ou l'existence de l'objet. C'est
pourquoi les coordonnées et l'état (non supprimé ou supprimé) de l’objet
sont listés.

![image](/images/fr/0300-12-29-conflict-resolution/image26.png)

La fenêtre des conflits présente seulement deux différentes éditions à
la fois. Votre version, nommée "Ma version", apparaît à gauche. La
“Version du serveur” apparait à droite. Au centre la "Version fusionnée"
sera le résultat de la résolution. Lorsque le conflit concerne les
propriétés, il est important d’avoir regardé auparavant l’objet concerné
afin de déterminer si ses coordonnées ou son état correspondent à la
réalité. Si votre version vous semble la meilleure, cliquez sur
![image](/images/fr/0300-12-29-conflict-resolution/image05.png). Si vous pensez qu’au contraire, c’est
celle du serveur, cliquez sur ![image](/images/fr/0300-12-29-conflict-resolution/image17.png). Lorsque vous
avez cliqué, la version choisie apparait comme la version fusionné et la
couleur de fond passe du rouge ou vert, de mêtre que devant l’onglet, il
y a désormais un ![image](/images/fr/0300-12-29-conflict-resolution/image18.png).

![image](/images/fr/0300-12-29-conflict-resolution/image24.png)

Lorsque les conflits sur les propriétés ont tous été résolus, cliquez
sur le bouton ![image](/images/fr/0300-12-29-conflict-resolution/image12.png)s’il n’est plus grisé. Les
valeurs que vous avez choisies seront appliquées et la fenêtre se
fermera. Le conflit est résolu et disparait de la liste des conflits.
Lorsque la liste est vide, il est possible d’envoyer les modifications
au serveur OSM. Si un autre onglet est marqué du symbole
![image](/images/fr/0300-12-29-conflict-resolution/image02.png), il faut d’abord le résoudre.

### B. Conflits sur les attributs

Si les attributs d'une version sont différents des attributs d'une autre
version, la boite de dialogue pour Résoudre les conflits affiche un
![image](/images/fr/0300-12-29-conflict-resolution/image02.png) dans l'onglet “Attributs”. Cliquez sur
l'onglet pour afficher la fenêtre de résolution des conflits spécifiques
aux attributs. Il y a trois tableaux affichés dans cette fenêtre, de
gauche à droite :

-   “Ma version” : montre les attributs de la première version
    participant au conflit de l'objet. Il s'agit habituellement de votre
    calque de données.
-   “Version fusionnée” : montre les attributs fusionnés. Ce tableau est
    vide au départ. Plus vous résolvez des conflits d’attributs, plus
    des attributs vont apparaître dans ce tableau.
-   “Version du serveur” : montre les attributs de la deuxième version
    participant au conflit de l'objet. Ce sont habituellement les
    attributs de la version de l'objet actuellement enregistrée sur le
    serveur OSM.

Dans l'exemple ci-dessous, les deux versions ont un tag avec la clé
"name". Cependant, les valeurs sont différentes pour les deux versions
de l'objet. La valeur de la première version est "Eglise Ste Thérèse",
et la version opposée possède la valeur "Eglise Sainte-Thérèse".

![image](/images/fr/0300-12-29-conflict-resolution/image37.png)

Vous devez maintenant décider quelle est la valeur que vous voulez
conserver et celle que vous allez rejeter. Dans le cas présent, "Eglise
Sainte-Thérèse" respecte les règles des noms d’objets en cartographie,
alors que la version abrégée "Eglise Ste Thérèse" est incorrecte. La
version de droite ("Version du serveur") va ainsi être celle qui va être
conservée en cliquant sur le bouton ![image](/images/fr/0300-12-29-conflict-resolution/image17.png).

![image](/images/fr/0300-12-29-conflict-resolution/image22.png)

En cas d’erreur, sélectionner l’attribut à annuler dans le tableau
central "Version fusionnée" et cliquer sur le bouton
![image](/images/fr/0300-12-29-conflict-resolution/image16.png).

Le deuxième attribut en conflit est d’un type différent : "Ma version"
ajoute un attribut dont la clé n’existe pas dans la "Version du
serveur", qui apparait ainsi comme “<non défini\>”. Il s’agit de
déterminer si cet attribut supplémentaire est pertinent. Si c’est le
cas, cliquez sur ![image](/images/fr/0300-12-29-conflict-resolution/image05.png), sinon cliquez sur
![image](/images/fr/0300-12-29-conflict-resolution/image17.png). Dans l’exemple ci-dessous, "Ma version" a
été conservée.

![image](/images/fr/0300-12-29-conflict-resolution/image19.png)

Tous les attributs en conflit ont été résolus et la couleur de fond
devient verte.

Lorsque les conflits sur les attributs ont tous été résolus, cliquez sur
le bouton ![image](/images/fr/0300-12-29-conflict-resolution/image12.png)s’il n’est plus grisé. Les valeurs
que vous avez choisies seront appliquées et la fenêtre se fermera. Le
conflit est résolu et disparait de la liste des conflits. Lorsque la
liste est vide, il est possible d’envoyer les modifications au serveur
OSM. Si un autre onglet est marqué du symbole
![image](/images/fr/0300-12-29-conflict-resolution/image02.png), il faut d’abord le résoudre.

### C. Conflits sur les nœuds

Les conflits sur les
[nœuds](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) ne
concernent ni les objets représentés par un point, ni ceux représentés
par un polygone, mais ceux représntés par un chemin, par exemple une
route. Le message de détection du conflit va mentionner ceci, comme dans
l’exemple ci-dessous :

![image](/images/fr/0300-12-29-conflict-resolution/image36.png)

Il s’agit ici de résoudre les différences dans la liste des
[nœuds](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) de deux
[chemins](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) : cela
ne concerne ni les objets représentés par un point, ni ceux représentés
par un polygone. Cliquez sur "Synchroniser seulement les chemins xxx xxx
xxx". Dans la fenêtre latérale "Conflits" à droite au sein du panneau
des fenêtres latérales apparait en conflit à la fois le chemin complet
et chacun des nœuds en conflit. Dans l’exemple ci-dessous, des conflits
concernent trois nœuds d’un chemin qui apparait en bas de la liste.

![image](/images/fr/0300-12-29-conflict-resolution/image49.png)

Comme expliqué plus haut, il est conseillé de regarder les nœuds
affectés en les sélectionnant, puis en faisant un clic droit pour
pouvoir accéder à ![image](/images/fr/0300-12-29-conflict-resolution/image38.png). Dans notre exemple, le
conflit concerne une section de route primaire de plusieurs dizaines de
km de long, ce qui est un cas courant de création de conflits de chemin.
En effet, compte tenu de la longueur de l’objet, il est tout à fait
possible qu’un autre utilisateur l’ait édité en dehors de la zone
téléchargée, comme montré dans l’exemple ci-dessous.

![image](/images/fr/0300-12-29-conflict-resolution/image52.png)

La zone téléchargée fait moins d’un km de large et comprend deux
sections de routes primaires.

![image](/images/fr/0300-12-29-conflict-resolution/image54.png)

Ces sections de route primaire font en fait plusieurs dizaines de km de
long.

Réglez d’abord tous les conflits de propriétés des nœuds comme indiqué
plus haut, puis passez à l’objet chemin, généralement en bas de la
liste.

![image](/images/fr/0300-12-29-conflict-resolution/image30.png)

Le symbole![image](/images/fr/0300-12-29-conflict-resolution/image02.png) est présent devant l'onglet
“Nœuds en conflits”. Il y a trois tableaux affichés dans cette fenêtre,
de gauche à droite :

-   “Ma version” : montre la liste des nœuds de la première version
    participant au conflit de l'objet. Il s'agit habituellement de votre
    calque de données.
-   “Version fusionnée” : montre la liste des nœuds fusionnés. Ce
    tableau est vide au départ. Plus vous résolvez des conflits de
    nœuds, plus des nœuds vont apparaître dans ce tableau.
-   “Version du serveur” : montre la liste des nœuds de la deuxième
    version participant au conflit de l'objet. Ce sont habituellement
    les attributs de la version de l'objet actuellement enregistrée sur
    le serveur OSM.

A la différence de la résolution des conflits de attributs (voir plus
haut), l’ordre des nœuds dans le tableau de la version fusionnée est
important, car il conditionne l’ordre dans lequel les nœuds se relient
les uns aux autres dans l’objet chemin.

Il peut être difficile de voir la différence entre les différentes
listes de nœuds des trois tableaux, en particulier pour les chemins
comprenant un grand nombre de nœuds. La fenêtre des conflits permet de
voir les différences en comparant deux des trois tableaux de nœuds ("Ma
version", "Version fusionnée", "Version du serveur") et montre les
différences avec des fonds de couleur différents. Les couleurs ont la
signification suivante :

-   ![image](/images/fr/0300-12-29-conflict-resolution/image29.png) indique que ce nœud du chemin
    n’engendre pas de conflit.
-   ![image](/images/fr/0300-12-29-conflict-resolution/image04.png) indique que ce nœud du chemin existe
    dans les deux listes, mais à une position différente dans l’ordre
    des nœuds.
-   ![image](/images/fr/0300-12-29-conflict-resolution/image03.png) indique que ce nœud du chemin n’existe
    que dans une seule version.

A partir de la liste déroulante, vous pouvez sélectionner quelles listes
de nœud vont être comparées :

![image](/images/fr/0300-12-29-conflict-resolution/image14.png)

#### Procédure standard

Pour résoudre les conflits de chemin, la procédure standard comprend
trois étapes :

-   Choisissez les nœuds à conserver parmi les entre "Ma version" et
    "Version du serveur" et changez l’ordre des nœuds si nécessaire. Des
    explications sont fournies plus bas.
-   Figer la liste fusionnée qui en résulte en cliquant sur le bouton
    ![image](/images/fr/0300-12-29-conflict-resolution/image10.png). Vous indiquez ainsi à JOSM que la
    liste des conflits pour cet objet a été résolue.
-   Appliquer la résolution.

#### Procédure simple : conserver l’intégralité de la liste des nœuds d’une version

La procédure la plus simple est celle où vous décidez de conserver tous
les nœuds d’une des deux versions, la vôtre ou celle du serveur. Elle a
l’inconvénient de ne rien conserver des ajouts ou améliorations faites
dans l’autre version.

Cliquez sur ![image](/images/fr/0300-12-29-conflict-resolution/image39.png)(ou
![image](/images/fr/0300-12-29-conflict-resolution/image44.png)si vous avez sélectionné tous les nœuds de
la version du serveur) ou sélectionnez d’abord tous les nœuds (avec la
souris ou Ctrl-A) d’une des deux tables, à droite ou à gauche (à gauche
dans l’exemple).

![image](/images/fr/0300-12-29-conflict-resolution/image06.png)

Cliquez ensuite sur ![image](/images/fr/0300-12-29-conflict-resolution/image28.png)(ou
![image](/images/fr/0300-12-29-conflict-resolution/image32.png) si vous avez sélectionné tous les nœuds de
la version du serveur) pour que tous ces nœuds apparaissent dans la
table de la version fusionnée au centre :

![image](/images/fr/0300-12-29-conflict-resolution/image50.png)

Enfin, cliquez sur ![image](/images/fr/0300-12-29-conflict-resolution/image10.png) pour figer la version
fusionnée de la liste de nœuds.

![image](/images/fr/0300-12-29-conflict-resolution/image11.png)

Le symbole devant l’onglet est désormais ![image](/images/fr/0300-12-29-conflict-resolution/image18.png) et
vous pouvez cliquer sur le bouton ![image](/images/fr/0300-12-29-conflict-resolution/image12.png)s’il n’est
plus grisé. Les valeurs que vous avez choisies seront appliquées et la
fenêtre sera fermée. Le conflit est résolu et disparait de la liste des
conflits. Lorsque la liste est vide, il est possible d’envoyer les
modifications au serveur OSM.

#### Procédure avancée : sélectionner la meilleure version de chaque nœud

Cette procédure vise à ne pas supprimer l’ensemble des éditions d’une
des deux versions, mais de conserver le meilleur des deux. Elle
nécessite de traiter tous les nœuds en faisant attention à leur ordre
dans la version fusionnée. L’exemple ci-dessous va montrer pas à pas
comment procéder.

![image](/images/fr/0300-12-29-conflict-resolution/image07.png)

La liste des conflits des nœuds parait complexe mais est en fait
relativement simple. Tout d’abord, les 8 premiers nœuds, en vert, ne
pose pas de problème. Le 9ème nœud de "Ma version" est un nouveau nœud
créé dans la sessions d’édition en cours, comme le montre le fait que ce
nœud n’a pas encore d'identifiant. Ce nouveau nœud, qui s’insère entre
les noeuds ![image](/images/fr/0300-12-29-conflict-resolution/image51.png) et ![image](/images/fr/0300-12-29-conflict-resolution/image23.png),
crée de fait un décalage par rapport à la "Version du serveur" qui ne le
comprend pas. De fait, l’ordre des nœuds n’est plus le même et tous les
nœuds qui suivent sont de couleur orange, à l’exception des nouveaux
nœuds : le nœud de la ligne 15 à gauche et de la ligne 14 à droite. Nous
allons conserver tous les nœuds communs aux deux versions, ainsi que les
nouveaux créés dans chacune des deux versions. Nous allons d’abord
sélectionner les huit premiers nœuds, communs aux deux versions, par
exemple à gauche, et les placer dans le tableau de la “Version
fusionnée” en cliquant sur ![image](/images/fr/0300-12-29-conflict-resolution/image28.png).

![image](/images/fr/0300-12-29-conflict-resolution/image15.png)

Puis dans l’exemple, il convient de sélectionner le nouveau nœud de la
ligne 9 à gauche et cliquez sur ![image](/images/fr/0300-12-29-conflict-resolution/image35.png)pour le
placer à la suite des autres dans la "Version fusionnée".

![image](/images/fr/0300-12-29-conflict-resolution/image47.png)

"Il convient ensuite de continuer de la même manière pour les nœuds
suivants : 9 à 14 à droite, 15 à 22 à gauche, etc. de sorte que tous les
nœuds soient placés dans la "Version fusionnée" en prenant garde à bien
respecter leur ordre (par exemple ne pas mettre le nœud 12 avant le nœud
11 dans l’exemple ci-dessus). En cas d'erreur, il est possible de
sélectionner un nœud dans la "Version fusionnée" et de le déplacer avec
![image](/images/fr/0300-12-29-conflict-resolution/image31.png)ou ![image](/images/fr/0300-12-29-conflict-resolution/image34.png), ou bien le
supprimer de cette liste avec ![image](/images/fr/0300-12-29-conflict-resolution/image25.png).

Une fois cela fait, cliquez sur ![image](/images/fr/0300-12-29-conflict-resolution/image10.png) puis sur
![image](/images/fr/0300-12-29-conflict-resolution/image12.png). Les valeurs que vous avez choisies seront
appliquées et la fenêtre sera fermée. Le conflit est résolu et disparait
de la liste des conflits. Lorsque la liste est vide, il est possible
d’envoyer les modifications au serveur OSM.

3. Bonnes pratiques pour éviter les conflits
--------------------------------------------

Les conflits apparaissent plus fréquemment pour ceux qui :

-   ont tendance à sauvegarder leur zone de travail sur leur serveur
    local et attendent un certain temps avant de l'envoyer sur le
    serveur principal (upload). Il est préférable de télécharger votre
    zone de travail, de l'éditer et d'envoyer les modifications
    immédiatement.
-   travaillent sur des zones traversées par des objets plus grand que
    la zone de téléchargement. Les routes sont un cas fréquent.

Pour minimiser les chances de rencontrer des conflits ou en limiter le
nombre, il est utile :

-   d’éditer uniquement sur la zone que vous avez téléchargée.
    Assurez-vous de ne jamais éditer en dehors de cette zone de
    téléchargement.
-   d'envoyer les modifications régulièrement en cliquant sur
    ![image](/images/fr/0300-12-29-conflict-resolution/image42.png). Afin d’éviter la multiplication des
    groupes de modification (changesets), veuillez configurer l’onglet
    "Groupe de modifications" de la fenêtre d’envoi en décochant "Fermer
    le groupe après l’envoi". Envoyez les données et au prochain envoi,
    configurez "Envoyer vers un groupe existant" comme montré ci-dessous
    :

![image](/images/fr/0300-12-29-conflict-resolution/image46.png)

-   de mettre à jour les données régulièrement en allant dans le menu
    “Fichier” et cliquer sur ![image](/images/fr/0300-12-29-conflict-resolution/image33.png) .

Résumé
------

Lorsque vous éditez dans JOSM, qui télécharge des extraits de la carte
OSM, vous prenez le risque de engendrer des conflits. Les conflits se
produisent lorsqu'un même objet a été édité par deux personnes à des
moments proches. Ces conflits doivent être résolus avant de pouvoir
envoyer les modifications de vos éditions au serveur OSM. Ce chapitre a
présenté une approche détaillée de la résolution des conflits dans JOSM.


