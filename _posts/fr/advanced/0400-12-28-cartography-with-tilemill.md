---
layout: doc
title: Cartographie avec TileMill
permalink: /fr/advanced/cartography-with-tilemill/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Cartographie avec TileMill
=============================


Introduction
------------

Des interfaces de visualisation de données géographiques comme la carte
glissante d’OpenStreetMap aux fonctionnalités de navigation avancées
sont très largement utilisées par les sites web pour afficher des cartes
sur internet. Un des grands avantages d’OpenStreetMap tient aux
nombreuses options de personnalisation de ses nombreux rendus
cartographiques ainsi qu’à la richesse de ses moyens d’affichage. Dans
les deux chapitres suivants, nous vous présenterons plusieurs outils de
visualisation des données OSM sur le web. Nous allons d’abord apprendre
dans ce chapitre à utiliser l’outil de cartographie TileMill, pour
ensuite, dans le chapitre suivant, apprendre à intégrer ces cartes sur
des sites Web à l'aide de la suite technique MapBox. Ce chapitre
couvrira en détail les étapes de la création de styles cartographiques
complexes pour soutenir votre production cartographique. Si vous
souhaitez savoir concevoir vos propres cartes à partir des seules
données d’OpenStreetMap, vous pouvez vous rendre directement au chapitre
suivant pour commencer à apprendre à utiliser MapBox pour produire des
cartes simples.

Dans ce chapitre, nos rendus cartographiques seront basés sur un type de
service web connu sous l’acronyme TMS, ou Tile Map Service. Un TMS
ressemble à un WMS, ou Web Map Service, à la différence que les images
sont toutes créées selon des carreaux de 256x256 pixels, livrés à un
utilisateur et affichées ensemble. Les TMS présentent de nombreux
avantages par rapport aux WMS, et leur popularité s’est envolée depuis
l'émergence de la carte glissante OSM. Quand vous la regardez, vous
regardez en réalité un jeu de fichiers images qui sont assemblées pour
être affichées sous forme de carte sur le web.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image17.png)

La carte glissante d’OSM est constituée de plusieurs tuiles d’images
individuelles.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image25.png)

TileMill est une application de cartographie puissante et sophistiquée
destinée à la production de cartes et non à l'édition ou à l’analyse de
données. Avec TileMill vous utilisez :

-   des données de la base de données OpenStreetMap ou des fichiers
    shapefile.
-   des icônes de banques d’icônes existantes que vous pouvez avoir
    conçues vous-mêmes.

TileMill fournit une plate-forme dans laquelle vous pouvez définir
d’élégants styles de rendu de vos données applicable à vos propres
icônes. Vous pouvez ensuite exporter votre carte comme une image ou
choisir le format MBTiles, qui peut être hébergé sur MapBox et intégré à
votre site web comme une carte interactive.

Ce chapitre dédié à TileMill est composé des parties suivantes :

1.  Installation
2.  Exploration (Carte, Légende, Bandeau, CartoCSS)
3.  Ajout de données (fichiers Shapefile et base de données OSM), et
    édition des données d’OSM avec le greffon JOSM.
4.  Création de style avec CartoCSS (Styles des lignes, polygones,
    points, Niveaux de zoom, Variables de couleur et Commentaires)
5.  Création de légende
6.  Export des cartes (image png et MBTiles)

![image](/images/fr/0400-12-28-cartography-with-tilemill/image11.png)

1. Installer TileMill
---------------------

Nous allons commencer par apprendre à installer TileMill sur Windows.
Vous pouvez télécharger les installateurs pour d'autres systèmes
d'exploitation à cette adresse :
[http://mapbox.com/tilemill/](http://mapbox.com/tilemill/).

-   Aller à [http://mapbox.com/tilemill/](http://mapbox.com/tilemill/)
    et télécharger le fichier d'installation pour Windows TileMill.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image04.png)

-   Lancez le programme d'installation pour mettre en place TileMill sur
    votre ordinateur en suivant les options par défaut proposées par
    l’assistant d'installation.
-   Une fois TileMill installé, allez dans le menu Démarrer et cliquez
    sur “Start TileMill”.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image15.png)

-   L'onglet Projects de l’application se charge. TileMill fournit
    plusieurs exemples des projets que vous pouvez utiliser pour
    commencer.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image05.png)

2. Explorer TileMill
--------------------

Jetons un coup d'œil à un des projets installés par défaut avec
l’application pour nous faire une idée des fonctionnalités de TileMill
et sur ce qu’il nous permet de faire. Ouvrez le projet nommé "Geography
Class". Le chargement de la carte peut prendre quelques minutes.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image18.png)

### A. La carte

La fenêtre de la carte affiche votre carte en fonction de votre style
actuel. Elle se mettra à jour lorsque vous modifierez les données et le
style de votre projet. Vous devez cliquer sur
![image](/images/fr/0400-12-28-cartography-with-tilemill/image16.png) pour enregistrer les modifications.
L’affichage d’un jeu de données OSM peut parfois prendre du temps
laissant une grille vide à l’écran pendant quelques minutes.

### B. Légende

Vous pouvez créer une légende de votre carte en HTML. Pour voir et
modifier le code HTML utilisé pour créer la légende, cliquez sur le
bouton avec la main ![image](/images/fr/0400-12-28-cartography-with-tilemill/image24.png) en bas à gauche.
Utilisez les projets d’exemple, comme Open Streets DC, comme source
d’inspiration pour la création de votre légende.

### C. Bandeau

Le bandeau définit des fenêtres d’aperçu ou des informations qui
s’afficheront pendant vos déplacements et vos sélections à la souris sur
la carte. Il est créé en HTML comme la légende. Sur cette carte, le
bandeau change de drapeau en fonction du pays sur lequel l'utilisateur
passe sa souris.

### D. CartoCSS

Cette section est la partie la plus importante de TileMill en termes de
rendu cartographique. Chaque projet TileMill aura un certain nombre de
fichiers de ce type. Ils décrivent la façon dont les données de la carte
doivent être rendus ou affichés. Le langage utilisé est appelé CartoCSS,
parce qu’il est similaire à du CSS, mais développé spécifiquement pour
définir les rendus cartographiques. Plus tard dans ce chapitre nous
examinerons CartoCSS de plus près, mais regardons pour l’instant les
trois fichiers qui sont utilisés pour définir le rendu de la carte
“Geography Class”.

Le premier fichier, style.mss, contient le code qui constitue le style
de base de la carte, définissant la couleur des masses d'eau et le
contour des continents. labels.mss décrit comment les noms de pays
doivent être affichés. Il comprend des informations sur la police des
caractères, la taille du texte, et plus. Il indique aussi que lorsque
l'utilisateur fait un zoom arrière assez loin, la carte devrait afficher
des abréviations des pays au lieu de leurs noms complets. Enfin,
rainbow.mss décrit comment chaque pays doit être coloré. Dans ce
fichier, presque tous les pays se sont vus attribuer une couleur.
N'hésitez pas à jouer avec les projets d’exemple pour voir comment les
différents dispositifs fonctionnent. Chaque fois que vous modifiez les
fichiers CartoCSS, vous pouvez recharger la carte en cliquant sur
![image](/images/fr/0400-12-28-cartography-with-tilemill/image16.png). Pendant que la carte se recharge, vos
changements seront incorporés dans le style. TileMill est intelligent,
il vous avertira à l’enregistrement, en cas d’erreur dans votre CSS.

Si vous souhaitez modifier les paramètres du projet, cliquez sur la clé
![image](/images/fr/0400-12-28-cartography-with-tilemill/image30.png) dans le coin en haut à droite. Le projet
“Geography Class” ne vous laisse pas zoomer trop près dans la carte. Si
vous changez les paramètres, vous pouvez régler le niveau de zoom pour
aller plus loin. Essayez de le déplacer de 0 à 8 et 0 à 12. Cela vous
permettra de zoomer plus près dans la carte.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image23.png)

3. Ajouter des données
----------------------

Le projet comporte déjà un certain nombre de couches que vous pouvez
consulter en cliquant sur le bouton "Layers" dans la partie inférieure
gauche de la page.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image19.png)

Cette liste affiche toutes les couches du projet. Une icône située à
gauche de chaque nom de couche indique s’il s'agit d’un point, d’un
chemin, ou d’un polygone. A droite de chaque nom de couche, des boutons
permettent d’afficher les données de la couche ou d’accéder aux
paramètres de modification.

### A. Ajoutez une nouvelle couche shapefile

Pour ajouter une nouvelle couche à la carte à partir d’un fichier
shapefile :

-   Cliquez sur ![image](/images/fr/0400-12-28-cartography-with-tilemill/image32.png)

![image](/images/fr/0400-12-28-cartography-with-tilemill/image28.png)

-   Choisir “l’ID” de la couche. L’ID est le nom que vous voulez donner
    à votre couche, qui ne peut contenir que des lettres, des chiffres,
    des tirets et caractères de soulignement. Il ne peut pas avoir le
    même nom qu'une autre couche de votre projet.
-   Associer des “Classes” à une couche. Vous pouvez associer un certain
    nombre de classes à votre couche. Une classe permet d'identifier des
    couches quand vous définirez le style CSS. Par exemple, si vous avez
    beaucoup de couches qui contiennent des polygones relatifs à
    l’hydrologie, vous pouvez associer à chaque couche la classe “eau”.
    Vous pourrez ensuite utiliser ce nom de classe pour leur appliquer à
    toutes un style dans votre CSS.
-   Spécifier la source des données. La source des données (ou
    Datasource) est le fichier que vous chargez en tant que couche dans
    TileMill. Cela peut être un fichier CSV, shapefile, GeoJSON, KML, ou
    GeoTIFF. Dans cet exemple, nous utilisons un fichier shapefile
    contenant les polygones des régions de Géorgie. Ce champ doit être
    renseigné pour créer une nouvelle couche.
-   Le système de référence spatiale (ou SRS) de vos données. Dans la
    plupart des cas, TileMill détecte automatiquement le SRS de votre
    couche.
-   Cliquez sur “Save” pour valider l’ajout de cette nouvelle couche au
    projet. En cliquant sur "Save & Style", le programme créera
    automatiquement un style de base associé à cette nouvelle couche.
-   Votre nouveau calque s’affiche dans l'onglet des couches, cliquez
    alors sur le bouton “Zoom to extent”.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image10.png)

-   TileMill va alors zoomer sur la nouvelle couche. Si vous avez
    sélectionné "Save & Style", à cette couche sera associé un style CSS
    de base.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image33.png)

-   Notez que cette nouvelle couche s’affiche au-dessus des autres
    couches. Si vous vouliez l’afficher au-dessous de la couche
    d’étiquettes, il vous faut la sélectionner avec la souris dans
    l’onglet des couches en sélectionnant l'icône située à côté du nom
    de votre couche et la faire descendre sous les autres couches.
    N'oubliez pas que vous devez enregistrer votre projet pour que la
    carte soit mise à jour.

### B. Ajoutez de la donnée OSM depuis une base de données PostGIS

Pour ajouter des données OSM stockées dans une base de données PostGIS
selon les instructions données dans le chapitre 1 du guide avancé,
procédez de la façon suivante :

-   Allez dans l’onglet “Layers” et cliquez sur “Add Layer”.
-   Cliquez sur ![image](/images/fr/0400-12-28-cartography-with-tilemill/image31.png)

La procédure est similaire à l’ajout d’une couche de fichier shapefile
(voir ci-dessus), à la différence qu’il faut se connecter à la base de
données PostGIS. Pour cela, suivez les instructions ci-dessous :

![image](/images/fr/0400-12-28-cartography-with-tilemill/image08.png)

-   Dans la boîte “Connection”, saisissez la commande suivante :
    host=localhost dbname=osm user=postgres password=my\_password

-   Remplacez my\_password par le mot de passe adéquat.
-   Dans la boîte “Table or subquery”, entrez le nom d’une table de
    votre base PostGIS. Par exemple, planet\_osm\_roads ; vous auriez
    aussi pu saisir une autre table (planet\_osm\_point,
    planet\_osm\_line, ou planet\_osm\_polygon) ainsi qu’un
    sous-ensemble de cette table défini par une requête SQL.

-   Dans la boîte “SRS”, définir WGS84.
-   Cliquez sur “Save & Style” : votre nouvelle couche est ajoutée au
    projet et un style de rendu de base va lui être associé.
-   Zoomez sur la couche pour voir le rendu des données.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image29.png)

### C. Le greffon pour JOSM

TileMill dispose d’un greffon pour JOSM qui permet d’y lancer une
session de travail dans laquelle est chargée un calque contenant les
données OSM correspondant à votre zone de travail dans TileMill. Cela
peut être utile pour corriger dans JOSM les erreurs affectant la base de
données OSM que vous auriez repérées en travaillant dans TileMill la
définition du style de rendu de vos cartes. Vous pouvez ignorer cette
section si vous n’en voyez pas l’utilité.

Pour activer ce greffon :

-   Allez à l’onglet “Plugins” et installez l’éditeur de JOSM.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image02.png)

-   Ouvrez JOSM. Notez que vous devez avoir préalablement activé la
    fonction de contrôle à distance dans les préférences de JOSM.
-   Retournez dans TileMill pour naviguer jusqu’à la zone dont vous
    souhaitez modifier les données.
-   Cliquez sur “Edit in JOSM”.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image22.png)

JOSM va télécharger les données OSM correspondant à votre zone de
travail dans TileMill pour que vous puissiez les modifier et les envoyer
sur le serveur. Ces modifications ne seront visibles dans TileMill
qu’une fois enregistrées dans la base OSM et une fois que votre couche
de données OSM dans TileMill est mise à jour.

4. Définir un style avec CartoCSS
---------------------------------

Il s’agit maintenant de définir le style de rendu de notre carte.
TileMill utilise pour cela un langage appelé CartoCSS qui sera familier
à ceux d’entre vous qui connaissent déjà le langage CSS, tout en restant
abordable pour les autres.

TileMill vous permet de définir de différentes manières le style de
rendu de vos couches de données.

-   Couches des lignes : vous pouvez définir le style de la ligne et ses
    étiquettes, créer un motif à l'intérieur de la ligne, ajouter des
    marqueurs, et ajouter un bouclier, là où vous voulez mettre un
    nombre sur une route.
-   Couches de polygones : vous pouvez définir le style du polygone et
    ses étiquettes, créer un motif à l'intérieur du polygone ou à
    l'intérieur de la ligne extérieure et ajouter des marqueurs.
-   Couches de points : vous pouvez définir le style des points et ses
    étiquettes, et ajouter des boucliers ou des marqueurs.

Il existe différents fichiers dans le projet “Geography Class”. On peut
pour raisons de confort travailler avec de nombreux fichiers qui seront
tous intégrés à la même feuille de style. Il est conseillé de travailler
ainsi en conservant ensemble dans un même fichier certaines informations
de style comme par exemple les étiquettes.

### A. Définir le style des lignes

Quand nous avons ajouté la couche de planet\_osm\_roads de notre base de
données PostGIS, TileMill a automatiquement créé un style de rendu de
base qui se situe à la fin du fichier de style style.mss.

*\#planetosmroads {*

*line-width:1;*

*line-color:\#168;*

*}*

Ce code est assez simple :

-   \# planetosmroads est un sélecteur qui, dans ce cas, signifie
    "sélectionnez tout avec l'identité planetosmroads et appliquer les
    modèles suivants".

Nous l’avons utilisé ensuite pour spécifier les objets pour lesquels
nous définissons notre style de rendu. Ce sont à ces objets que nous
associons les éléments du style de rendu de base de TileMill :

-   line-width:1; indique que les lignes doivent être d'un pixel
    d'épaisseur.
-   line-color:\#168; indique que les lignes doivent être d'une couleur
    bleuâtre. Les couleurs sont définies en utilisant hex, et peuvent
    être au format \#xxx ou \#xxxxxx.

Attention ! Si vous associez plusieurs styles de rendu similaires à une
même couche, TileMill utilisera le dernier élément de style
(déclaration) que vous aurez défini. Ainsi, dans l’exemple ci-dessous,
la couche sera colorée avec \#861 et la première déclaration sera
ignorée.

*\#planetosmroads {*

*line-width:1;*

*line-color:\#168;*

*}*

*\#planetosmroads {*

*line-width:1;*

*line-color:\#861;*

*}*

TileMill permet de nombreuses options pour les styles de rendu des
couches linéraires (voir exemple ci-dessous).

*\#planetosmroads {*

*line-width: 0.5; // sets the line width to 0.5 pixels*

*line-color: \#1a6e8a; // sets the line color to \#1a6e8a*

*line-opacity: 0.8; // makes the line 80% opaque (20% transparent)*

*line-join: round; // lines will be rounded at the end*

*line-dasharray: 6,2,2,2; // lines will be a series of dashes; in this case, the dashes will go 6px line,* 
* } 2px empty, // 2px line, 2px empty, and then repeat*

### B. Définir le style des polygones

La création de style de rendu pour les couches polygones est semblable
aux couches linéaires avec la possibilité de pouvoir utiliser des
attributs spécifiques à ce type d’objets présentant des caractéristiques
relatives au contour (polyligne) et à son intérieur (polygone).
Considérons l’exemple ci-dessous :

*\#georgia\_regions {*

*line-color:\#000;*

*line-dasharray: 6,6;*

*line-width:0.5;*

*polygon-opacity:0.5;*

*polygon-fill:\#ae8;*

*}*

Ce code se traduit graphiquement par l’image ci-dessous :

![image](/images/fr/0400-12-28-cartography-with-tilemill/image12.png)

Pour influer sur la couleur de remplissage, nous utilisons
“polygon-fill”, et pour changer sa transparence “polygon-opacity”.

### C. Définir le style des points

Pour les couches des points, il se peut que vous souhaitiez utiliser vos
propres icônes ou des icônes que vous avez l’habitude d’utiliser
provenant de banques d’icônes libres. Il suffit pour cela de fournir
l’URL menant à votre icône dans le fichier CartoCSS associé à votre
style de rendu. Par exemple :

*\#cities {*

*point-file: url(icons/star-10.png);*

*}*

Vous pouvez obtenir une liste complète des attributs de style de
TileMill en cliquant sur ​​le bouton ![image](/images/fr/0400-12-28-cartography-with-tilemill/image06.png) en bas
à gauche.

* * * * *

Intermezzo : Un mot sur les tuiles

Comprenons mieux le fonctionnement des cartes glissantes et notamment la
notion de “niveaux de zoom”. L’interface de TileMill (partie supérieure
gauche) contient des boutons de zoom et une boîte de dialogue spécifiant
le niveau de zoom auquel des données sont affichées. TileMill gère
l’affichage de données des zooms 0 à 22 ; pour rappel, à un niveau de
zoom 0, vous verrez le monde entier.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image13.png)

Comme mentionné dans l'introduction, les cartes glissantes fonctionnent
en créant des assemblages de petites tuiles d'images à différents
niveaux de zoom. Chaque tuile est une image de 256 pixels par 256
pixels. Au niveau de zoom 0, TileMill génère seulement une tuile qui
contient le monde. Au niveau de zoom 1, cette seule tuile est divisée en
quatre tuiles. Au niveau de zoom 2, chacun des quatre carreaux est
divisé en quatre autres, résultant en 16 carreaux et ainsi de suite pour
les autres niveaux de zoom.

Les niveaux de zoom sont importants à comprendre pendant vous définissez
le style, parce que, comme nous le verrons dans la section suivante,
parfois vous voulez appliquer des styles différents selon les niveaux de
zoom.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image27.png) ![image](/images/fr/0400-12-28-cartography-with-tilemill/image07.png)

Niveau de Zoom 0 - Une Tuile Niveau de Zoom 1 - Quatre Tuiles


### D. Sélecteurs complexes

Nous allons apprendre à faire un usage plus approfondi des sélecteurs
pour la définition de styles de rendu de couches d’objets. Nous avons
déjà vu comment utiliser les ID de couche pour sélectionner des couches
spécifiques et leur appliquer des déclarations de style :

*\#cities {*

*point-file: url(icons/star-10.png);*

*}*

Pour sélectionner certains objets de cette couche selon des
caractéristiques spécifiques, il faut changer notre sélecteur en y
intégrant un argument utilisant notre tableau de données. Le texte de
l’exemple ci-dessous permet d’afficher les villes de l'Uruguay en leur
associant des icônes en étoiles. Ceci peut être appliqué à n'importe
quelle colonne de la table attributaire d'une couche d’objets.

*\#cities[SOV0NAME='Uruguay'] {*

*point-file: url(icons/star-10.png);*

*}*

Le fichier labels.mss utilise déjà ce type de sélecteur pour définir le
style des villes en y ajoutant le niveau de zoom auquel ce style de
rendu sera affiché par TileMill. Nous comprenons ainsi pourquoi les noms
de villes n’apparaissent pas sur la carte aux premiers niveaux de zoom.

*\#cities[ADM0CAP=1][zoom\>3] {*

*...*

*}*

![image](/images/fr/0400-12-28-cartography-with-tilemill/image14.png)

Niveau de zoom 5

![image](/images/fr/0400-12-28-cartography-with-tilemill/image09.png)

Niveau de zoom 3

Dans le style de rainbow.mss qui ressemble à ceci, vous remarquerez un
autre type de sélection :

*\#country::land-glow-outer[zoom\>1] {*

*line-color:\#000;*

*line-width:5;*

*line-opacity:0.1;*

*line-join:round;*

*}*

La couche que ces déclarations affectent est \#country, qui est conçue
pour fonctionner uniquement au-dessus du niveau de zoom 1. Pour
comprendre à quoi sert l’expression ::land-glow-outer, rappelons-nous
que les premières déclarations du code suivant seront ignorées :

*\#country {*

*line-color: \#000;*

*line-width: 6;*

*}*

*\#country {*

*line-color: \#999;*

*line-width: 3;*

*}*

Ceci a pour effet de faire afficher les lignes pertinentes (par rapport
à la sélection) avec une épaisseur de 3 pixels et une couleur
correspondant au code \#999. Mais vous pouvez avoir besoin de rendre
(faire afficher) la même couche plusieurs fois. Vous pouvez vouloir
dessiner une ligne avec un contour ou demander à TileMill de dessiner
d’abord une ligne épaisse sur laquelle sera apposée une ligne plus
mince. Il convient pour cela de sélectionner les couches avec des
attachments qui permettent de rendre une couche d’information avec
plusieurs styles de rendu.

*\#country::outline {*

*line-color: \#000;*

*line-width: 6;*

*}*

*\#country::fill {*

*line-color: \#999;*

*line-width: 3;*

*}*

Dans cet exemple, nous utilisons les attachments ::outline et ::fill
pour créer des copies de la même couche, et pouvoir ainsi les rendre
deux fois. TileMill va ainsi d’abord dessiner la couche de lignes en
leur associant la couleur \#000 et en lui assignant une largeur de 6
pixels. Dans un second temps, il redessinera ces objets linéaires avec
une couleur \#999 et une largeur de 3 pixels. Dans le fichier de
rainbow.mss, cette caractéristique est utilisée pour créer un halo
externe et interne pour chaque pays.

Pour plus d'informations sur les sélecteurs, cliquez en bas à gauche sur
![image](/images/fr/0400-12-28-cartography-with-tilemill/image06.png) et regardez "Intro".

### E. Variables de couleur

Les variables de couleurs (fichier rainbow.mss) permettent dans TileMill
de stocker votre charte graphique. Dans un style de rendu complexe, les
mêmes couleurs peuvent être réutilisées plusieurs fois pour différentes
couches ainsi que pour des objets aux caractéristiques spécifiques. S’il
vous faut plus tard réviser votre style de rendu et modifier certaines
couleurs, il vous faudra modifier votre code à chaque mention des
couleurs dans le texte du fichier. C’est pourquoi il vaut mieux utiliser
un fichier de variables de couleurs pour représenter ces couleurs
spécifiques et l’appeler à partir de votre fichier de style de rendu ;
votre fichier de variable de couleurs pourra en plus être associé à
d’autres fichiers CartoCSS.

Ci-dessous, voici un exemple de fichier rainbow.mss :

*@white: \#F0F8FF; /\* blue-tinted, for Antarctica \*/*

*@red: \#fdaf6b;*

*@orange: \#fdc663;*

*@yellow: \#fae364;*

*@green: \#d3e46f;*

*@turquoise: \#aadb78;*

*@blue: \#a3cec5;*

*@purple: \#ceb5cf;*

*@pink: \#f3c1d3;*

*@f00: \#f00;*

Chaque fois que vous utilisez les variables définies ici (comme @green
ou @pink), elles seront remplacées par les valeurs de couleur qui sont
définis.

### F. Commentaires

Vous pouvez ajouter des commentaires dans vos fichiers CartoCSS. Tout
texte placé entre /\* et \*/ sera ignoré par TileMill. Aussi, si vous
utilisez deux barres obliques, le reste de la ligne sera considéré comme
un commentaire (voir exemple ci-dessous) :

/\* This is

a comment \*/

// this is a comment too!

5. Création d’une légende
-------------------------

Il est facile de créer une légende en HTML avec TileMill. Il suffit de
cliquer sur le symbole ![image](/images/fr/0400-12-28-cartography-with-tilemill/image24.png) dans la partie
inférieure gauche de la page pour ouvrir la fenêtre de légende. Dans
l’onglet "Legend" vous verrez le code HTML qui compose la barre de
légende située dans la partie inférieure droite de la carte. Si vous
connaissez HTML, vous pouvez facilement faire votre propre légende.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image01.png)

Votre légende sera affichée ici.

6. Exporter votre carte
-----------------------

Une fois votre carte produite, TileMill vous permet de pouvoir
l'exporter dans différents formats. Cliquez sur “Export” pour voir les
différents formats d’export proposés :

![image](/images/fr/0400-12-28-cartography-with-tilemill/image20.png)

### A. Exporter votre carte en fichier image PNG (.png)

Pour exporter un fichier d’image PNG :

-   Cliquez sur “Export”.
-   Sélectionnez “PNG”.
-   Choisissez la zone que vous souhaitez exporter : définir le niveau
    de zoom pertinent, puis maintenir une pression continue sur la
    touche SHIFT en dessinant à la souris la zone à imprimer.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image34.png)

-   Dans le panneau à droite, vous pouvez modifier le nom du fichier
    image ainsi que les dimensions en pixels de l'image.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image00.png)

-   Cliquez sur "Export".
-   TileMill procède au rendu de l’image et vous permet d’enregistrer
    l'image en cliquant sur "Save".

![image](/images/fr/0400-12-28-cartography-with-tilemill/image21.png)

### B. Exporter votre carte au format MBtiles

MBTiles est un format de stockage des tuiles d'images et nous verrons
dans le chapitre suivant comment utiliser ces fichiers MBTiles pour
publier facilement nos cartes sur le web en utilisant la plate-forme
MapBox de la compagnie Development Seed.

Pour exporter des tuiles :

-   Cliquez sur “Export”.
-   Sélectionnez “MBTiles” dans le menu “Export”.
-   Choisissez la zone que vous souhaitez exporter : définir le niveau
    de zoom pertinent, puis maintenir une pression continue sur la
    touche SHIFT en dessinant à la souris la zone à imprimer.
-   Pensez à ajuster le niveau de zoom afin pour que votre fichier ne
    soit pas trop grand. N'oubliez pas que chaque niveau de zoom a
    quatre fois plus de tuiles que le niveau de zoom précédent, de sorte
    que le nombre de tuiles d'images croît très rapidement.

![image](/images/fr/0400-12-28-cartography-with-tilemill/image26.png)

### C. Plus d’informations

Development Seed, la compagnie de développement logiciel qui est à
l’origine de TileMill, a produit une excellente documentation et assure
un support technique de qualité pour ces outils. Consultez ces
ressources à
[http://mapbox.com/tilemill/docs/crashcourse/introduction/](http://mapbox.com/tilemill/docs/crashcourse/introduction/).

Résumé
------

Dans ce chapitre, nous avons appris à utiliser TileMill, une puissante
application de cartographie pour la création de styles de rendus
cartographiques. Dans le chapitre suivant, nous verrons comment utiliser
MapBox pour servir sur internet les cartes associées à ces styles de
rendu cartographiques.
