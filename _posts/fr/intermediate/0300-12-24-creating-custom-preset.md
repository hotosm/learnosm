---
layout: doc
title: XML et les modèles d’attributs JOSM
permalink: /fr/intermediate/creating-custom-preset/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---

XML et les modèles d’attributs JOSM
=====================================

Introduction
--------------

A présent, vous avez probablement une bonne compréhension de la façon
dont les objets sont dessinés dans JOSM et comment ajouter des
informations pour les décrire. Vous pouvez ajouter des attributs à un
point, une ligne ou un polygone. Le menu Modèles d’attributs de JOSM
vous aide à attacher les bons attributs à un objet. Vous y recherchez le
type d’objet que vous voulez créer, puis dans le formulaire vous
remplissez les informations appropriées. Dans ce chapitre, nous allons
une fois de plus voir les attributs et les modèles d’attributs puis
apprendre comment nous pouvons créer nos propres menus dans JOSM.

1. Attributs et modèles d’attributs
--------------------------------------

Rappelez-vous que lorsque vous dessinez un objet sur la carte dans JOSM,
vous devez lui associer des attributs pour décrire ce qu’est l’objet,
son nom et toutes les autres informations qui le décrivent. Par exemple,
lorsque vous voulez créer un magasin de vêtements avec le nom "Mami
Diarra Couture", vous avez besoin de deux attributs : un pour décrire le
point qu’est le magasin et l’autre pour contenir le nom. Dans JOSM, les
attributs sont affichés dans la fenêtre latérale Attributs
/Appartenances lorsqu’un objet est sélectionné.

![image](/images/fr/0300-12-24-creating-custom-preset/image20.png)

Les attributs sont constitués de deux parties, la clé et la valeur. La
clé définit généralement la catégorie d’information que vous associez et
la valeur définit le type spécifique dans cette catégorie d’information.
Ici nous avons deux attributs, donc deux paires de clés et de valeurs.

**CLE = VALEUR**

**name = Mami Diarra Couture**

**shop = clothes**

Lorsqu’on crée un point avec ces attributs, JOSM va afficher l’objet
comme ceci :

![image](/images/fr/0300-12-24-creating-custom-preset/image06.png)

Sur le site de OpenStreetMap, on observe que l’objet est représenté
ainsi :

![image](/images/fr/0300-12-24-creating-custom-preset/image00.png)

Cela fonctionne parce que nous avons appliqué les attributs appropriés.

OpenStreetMap est tellement ouvert que n’importe qui peut ajouter ce
qu’il souhaite. Mais qu’arrive-t-il si les cartographes OSM en
Angleterre sont en désacord avec ceux du Japon sur la meilleure façon de
de donner des attributs à des objets ? Par exemple, il est important que
toutes les écoles aient le même attribut les décrivant comme des écoles.
Si certaines personnes identifient les écoles comme amenity=school et
d’autres comme education=school, cela pose problème. Par conséquent, les
contributeurs doivent s’accorder sur les attributs.

Au long de ses années d’existence, le projet OpenStreetMap a vu
s’établir des normes, acceptées par la communauté, pour identifier la
plupart des types d’objets à cartographier. Ces normes sont listées sur
cette page web du Wiki OSM :
[http://wiki.openstreetmap.org/wiki/Map\_Features.](http://wiki.openstreetmap.org/wiki/Map_Features)

[](http://wiki.openstreetmap.org/wiki/Map_Features)

Cette page web a augmenté en taille au fil des années dans la mesure où
les contributeurs ont cherché à cartographier de plus en plus d’objets
différents et ont eu besoin de leur donner des attributs. Il est
impossible de se souvenir de tous ces attributs, et il serait également
laborieux de devoir de consulter les Map Features à chaque fois que vous
en avez besoin. C’est pourquoi JOSM possède un menu de modèles
d’attributs qui rend beaucoup plus facile l’ajout d’attributs corrects à
un objet. Dans le menu de modèle d’attributs, nous pouvons facilement
trouver l’élément pour les écoles, entrer des informations dans son
formulaire et ne pas nous soucier si l’attribut correct est
amenity=école ou education=école ou autre chose encore. En effet,
lorsque vous utilisez le menu de modèle d’attributs, les attributs
corrects sont automatiquement ajoutés dans la fenêtre latérale
"Attributs et appartenance" à droite.

![image](/images/fr/0300-12-24-creating-custom-preset/image05.png)

JOSM est livré avec la plupart des attributs les plus courants, mais
parfois, vous voudrez ajouter vos propres attributs pour des données
spécifiques. Le reste de ce chapitre expliquera comment créer un menu
d’attributs personnalisé.

2. Introduction à XML
-------------------------

Afin de créer notre propre menu d’attributs, nous devons d’abord
comprendre un langage appelé XML. XML, qui signifie "Extensible Mark-up
Language", est un langage similaire à HTML. La seule difference est que
XML est conçu pour transmettre des données, pas les afficher. De
nombreuses applications sur Internet utilisent XML pour transmettre des
données, y compris OpenStreetMap. XML utilise des élements et chaque
élément peut contenir des éléments enfant. Par exemple, imaginons que
nous voulons créer un fichier XML qui contient des données sur un menu
de restaurant. Nous devons créer un élément racine pour contenir toutes
les données se rapportant à notre menu. Notre élément racine aura une
balise ouvrante et une balise fermante, comme ceci :

![image](/images/fr/0300-12-24-creating-custom-preset/image19.png)

L’information est contenue dans des balises <item\> (élément), et au
sein de chacun d’elles, on peut trouver plusieurs descripteurs.

![image](/images/fr/0300-12-24-creating-custom-preset/image29.png)

Dans cet exemple, nous avons placé deux éléments <item\> dans notre
élément <menu\> pour décrire deux éléments differents qui sont dans le
menu. Chaque élément <item\> contient deux autres éléments, <cost\> et
<description\>. Notez également que nous avons écrit name = "Hamburger"
à l'intérieur de la balise ouvrante <item\>. Il s’agit d’un attribut, et
cela ajoute des informations sur l’élément.


#Terminologie XML

élément racine : l’élément le plus élevé dans un document XML, qui
décrit son contenu, <menu\> dans notre exemple

élément : tout objet XML contenu dans les balises ouvrante et fermante
comme

**<item\> … données … </item\>**

attribut : elle va ajouter une information à l’élément dans lequel elle
est incluse. Dans notre exemple, les balises <cost\> et <description\>
jouent ce rôle. Chacune possède une balise d’ouverture (exemple :
<description\>) et une balise de fermeture (exemple : </description\>).

paramètre : un paramètre contenu dans une balise tel que
name="Hamburger"

* * * * *

XML est efficace pour contenir et transmettre des données parce qu'il
est facile pour les ordinateurs de le comprendre. Pour donner un exemple
supplémentaire, la structure XML du point que nous avons créé auparavant
dans JOSM est affichée ci-dessous :

![image](/images/fr/0300-12-24-creating-custom-preset/image02.png)

Cette structure XML contient un élément racine <osm\> qui indique que
les données OpenStreetMap sont contenues à l’intérieur. Ensuite, il
possède un élément <node\> qui est la manière de OpenStreetmap de
décrire un point. Le nœud a de nombreux attributs y compris un numéro
d’identification unique, les coordonnées du point, le nom de
l’utilisateur qui a créé le point et quelques informations
supplémentaires dont nous ne discuterons pas maintenant. Entre la balise
d’ouverture <node\> et la balise de fermeture </node\>, il y a deux
éléments de type <tag\>. Chaque élément <tag\> a un attribut k et un
attribut v. Ce sont les clés et les valeurs que nous avons ajoutées dans
JOSM. Notez que les éléments <tag\> n’ont pas de balise de fermeture
</tag\> car ils ne contiennent pas d’autres éléments. Dans ce cas-ci,
une barre oblique inverse (anti-slash) indique la fermeture de l’élément
<tag ...attributs /\>.

3. Fichiers de modèles d’attributs (presets) JOSM
---------------------------------------------------

Comme vous l’avez déjà découvert, JOSM est préchargé avec un menu
prédéfini qui contient les attributs les plus courants. Mais parfois,
vous voulez ajouter des attributs supplémentaires pour des informations
spécifiques que vous souhaitez éditer. Vous avez alors peut-être besoin
de créer votre propre modèle d’attributs en l’écrivant en XML, puis de
le charger dans JOSM. Il est possible qu’un modèle d’attributs qui
corresponde à ce besoin existe déjà. Nous allons voir comment charger
des modèles d’attributs supplémentaires déjà existant dans JOSM.

-   Lancez JOSM et ouvrir le menu Préférences en allant dans Edition
    --\> Préférences.
-   Cliquez sur la troisième icône à partir du haut qui ressemble à
    ceci:![image](/images/fr/0300-12-24-creating-custom-preset/image01.png)

-   Cliquez sur le troisième onglet intitulé modèles d’attributs.
-   Sélectionnez "Buildings Indonesia by Kate Chapman" et cliquez sur le
    bouton flèche droite pour l'ajouter aux modèles actifs.

![image](/images/fr/0300-12-24-creating-custom-preset/image23.png)

-   Cliquez sur OK.
-   Redémarrez JOSM.
-   Créez un nouveau calque en allant dans Fichier --\> Nouveau calque.
-   Créez un point et assurez-vous qu’il est sélectionné.
-   Allez dans le menu modèle d’attributs. Vous devriez voir les modèles
    d’attributs que vous avez ajoutés en bas. Cliquez sur "Bâtiment"
    pour voir s’afficher son formulaire d’attributs.

![image](/images/fr/0300-12-24-creating-custom-preset/image24.png)

![image](/images/fr/0300-12-24-creating-custom-preset/image08.png)

Lorsque nous avons ajouté ces nouveaux modèles d’attributs dans le menu
Préférences, nous avons en fait ajouté un fichier XML qui décrit le
nouveau menu. Dans les sections suivantes, nous allons apprendre à créer
notre propre fichier XML de modèle d’attributs que nous pouvons
télécharger dans JOSM.

4. Un exemple de fichier de modèle d’attributs
-----------------------------------------------

Pour comprendre comment un fichier de modèle d’attributs doit être
écrit, nous allons d’abord regarder le fichier XML de l’un des modèles
d’attributs pré-chargé dans JOSM. Lorsque vous allez dans le menu
attributs et sélectionnez Equipements --\> Culture --\> Lieu de culte,
vous allez voir s’afficher ce formulaire :

![image](/images/fr/0300-12-24-creating-custom-preset/image11.png)

Le XML de ce formulaire ressemble à ceci :

** *```<item name="Place of Worship" icon="presets/church.png" type="node,closedway,relation">```* **
**  *```<link href="http://wiki.openstreetmap.org/wiki/Tag:amenity=place_of_worship" />```* **
** *```<label text="Edit Place of Worship" />```* **
** *```<key key="amenity" value="place_of_worship" />```* **
** *```<text key="name" text="Name" default="" delete_if_empty="true" />```* **

** *```<combo key="religion" text="Religion"```* **
** *```values="bahai,buddhist,christian,hindu,jain,jewish,muslim,sikh,spiritualist,taoist,unitarian,zoroastrian" default="" delete if _empty="true" />```* **

** *```<combo key="denomination" text="Denomination"```* **
** *```values=" anglican,baptist,catholic,evangelical,jehovahs_witness,lutheran,methodist,mormon,orthodox,pentecostal,presbyterian,protestant,quaker,shia,sunni" default="" delete_if_empty="true" />```* **

** *```<combo key="service_times" text="Service Times" values="Su 10:00,Su 10:30,Su 11:00" default="" delete_if_empty="true" />```* **

** *```<combo key="opening_hours" text="Opening Hours for visiting" values="24/7,Mo-Fr 08:30-20:00,Tu-Su 08:00-15:00;Sa 08:00-12:00" default="" delete_if_empty="true" />```* **

** *```</item>```* **

Cela n’est pas aussi compliqué qu’il peut paraître. Passons en revue le
script XML ligne par ligne.

La première ligne est la balise d'ouverture de notre élément racine
<item\\>. Il existe plusieurs attributs décrivant l'élément.

[](#)[](#)

![image](/images/fr/0300-12-24-creating-custom-preset/items-description.png)

La deuxième ligne fournit un lien vers la page wiki d'OpenStreetMap pour
ce type d’objet.

<link
href="http://wiki.openstreetmap.org/wiki/Tag:amenity=place\_of\_worship"
/\>

La troisième ligne avec la balise <label\> décrit le texte qui doit être
affiché en haut du formulaire.

<label text="Edit Place of Worship" /\>

La quatrième ligne décrit un attribut qui sera automatiquement appliqué
à l'objet lorsque le modèle d’attributs sera sélectionné. Dans ce cas,
nous voulons que l'objet ait l’attribut amenity = place\_of\_worship.

<key key="amenity" value="place\_of\_worship" /\>

La cinquième ligne décrit la première chose qui sera affichée sur notre
formulaire, et quel type d’attribut sera créé par l’utilisateur. La
balise est <text\> et va créer une zone de texte à remplir par
l’utilisateur. L’attribut key="name" décrit quelle clé sera utilisée
pour cet attribut. La valeur sera ce que l’utilisateur entre dans la
zone de texte. L’attribut text="Name" décrit ce qui doit être écrit dans
le formulaire à côté de la zone de texte. default="" indique qu’il n’y a
pas de valeur par défaut. Le dernier attribut indique qu’aucun attribut
ne doit être créé si la zone de texte est vide.

<text key="name" text="Name" default="" delete\_if\_empty="true" /\>

Les lignes suivantes sont similaires mais au lieu des zones de texte,
sont créées des listes déroulantes dans lesquelles l’utilisateur peut
choisir parmi différentes options. La balise utilisée pour cela est
<combo\>.

La dernière ligne du XML est la balise de fermeture </item\>.

5. Création de son propre modèle d’attributs
-----------------------------------------------

Nous allons aborder maintenant la création de notre propre modèle
d’attributs. Nous allons créer un exemple de menu de modèle d’attributs
qui nous permettra de donner des attributs à des bâtiments ou des points
selon le type d’équipement dont ils disposent. Pour cela nous allons
inventer de nouveaux attributs :

[](#)[](#)

![image](/images/fr/0300-12-24-creating-custom-preset/own-preset.png)

Lorsque le modèle d’attributs que nous avons créé est sélectionné, nous
voulons également que l’attribut building=yes soit ajouté
automatiquement, et nous allons créer un attribut avec la clé name que
l’utilisateur peut remplir à l’aide d’une zone de texte.

Maintenant, regardons les attributs possibles que nous avons décrits
dans le tableau ci-dessus pour déterminer la meilleure façon de
représenter chacun d’eux sur le formulaire. En ce qui concerne name,
nous aurons à créer une zone de texte afin que l’utilisateur puisse
entrer le nom qu’il souhaite pour cet attribut. Pour utility:water,
utility:phone et utility:internet, il y a quatre valeurs possibles que
l’utilisateur peut sélectionner sur notre formulaire, de fait la
meilleure façon de les ajouter est avec un combobox, qui crée une zone
de liste déroulante dans laquelle l’utilisateur peut sélectionner l’une
des options. L’attribut utility:electrical n’a que deux valeurs
possibles yes ou no, ainsi la meilleure façon de l’afficher dans notre
formulaire est avec un checkbox (case à cocher), bien que nous pourrions
aussi utiliser une liste déroulante. Une fois terminé, notre formulaire
devrait ressembler à ceci :

![image](/images/fr/0300-12-24-creating-custom-preset/image07.png)

-   Ouvrez un éditeur de texte et suivez pendant que nous créons le XML
    pour ce modèle d’attributs. Un éditeur simple et commun à utiliser
    sur Windows est Notepad.

![image](/images/fr/0300-12-24-creating-custom-preset/image16.png)

Il est cependant préférable d’utiliser un éditeur comme
[Notepad++](http://notepad-plus-plus.org/). NE PAS utiliser des
programmes de traitement de texte comme LibreOffice Writer ou Microsoft
Word.

-   Tout d'abord, nous devons créer un élément racine dans notre XML
    afin que JOSM sache qu’il s’agit d’un fichier de modèle d’attributs.

![image](/images/fr/0300-12-24-creating-custom-preset/image27.png)

-   Ensuite, nous allons créer un élément appelé <group\>. Ce n’est pas
    vraiment nécessaire pour notre exemple, car nous ne faisons que
    créer un modèle d’attributs simple, mais nous le faisons pour
    montrer comment nous pouvons créer des sous-menus avec de nombreuses
    options différentes à partir du menu des modèles d’attributs.
    N’oubliez pas d'ajouter les balises de fermeture respectives
    </group\> et </ presets\> à vos éléments.

![image](/images/fr/0300-12-24-creating-custom-preset/image09.png)

-   Maintenant, nous pouvons ajouter un élément <item\> dans notre menu.
    Celui-ci sera placé à l'intérieur de l'élément <group\>. Et à
    l'intérieur de l'élément <item\>, nous allons ajouter la zone de
    texte, les zones de liste déroulante, la case à cocher que nous
    voulons avoir dans notre formulaire. Lorsque vous aurez terminé, le
    fichier ressemblera à ceci :

![image](/images/fr/0300-12-24-creating-custom-preset/image17.png)

Beaucoup d’éléments sont similaires à ce que vous avez vu auparavant.
Nous allons les analyser. Dans l'élément <item\> nous avons créé six
autres balises :

- **<key\>**
- **<text\>**
- **<combo\>**
- **<check\>**
- **<combo\>**
- **<combo\>**

Pouvez-vous deviner ce que fait chacune de ces balises ? Elles créent
des attributs dans notre formulaire de modèle d’attributs pour JOSM. La
première ligne, <key key="building" value="yes"/\> n'affiche rien dans
le formulaire, mais dit à JOSM d’appliquer automatiquement l’attribut
building=yes à notre objet lorsque ce modèle d’attributs est
sélectionné.

La deuxième ligne, <text key="name" text="Name" default=""
delete\_if\_empty="true" /\>, crée un champ de texte avec key name,
comme nous l'avons vu lorsque nous avons examiné le modèle d’attributs
dans la précédente section.

Nous avons trois balises <combo\> et chacun de ces éléments possède
plusieurs attributs. key indique quelle clé doit être créée pour
l’attribut. text indique quel texte doit être affiché sur notre
formulaire. values indique les valeurs possibles que l’utilisateur peut
sélectionner dans la liste déroulante. Et nous avons ajouté quelque
chose de nouveau - le paramètre display\_values - qui dans les listes
déroulantes, va afficher à l’utilisateur des textes différents des
valeurs qui seront appliquées dans l’attribut une fois le formulaire
validé. Ceci est utile si nous voulons que le formulaire soit plus
descriptif sur les options qu’un utilisateur peut sélectionner ou si
nous voulons afficher les valeurs dans une langue différente de
l’anglais.

Enfin, nous avons ajouté une nouvelle balise <check\> pour une case à
cocher. Le code est simple <check key="utility:electrical"
text="Electricity Access" /\>. Il crée une case à cocher sur notre
formulaire. Lorsque la case est cochée, JOSM va ajouter à notre objet un
attribut utility:electrical=yes.

-   Nous allons maintenant enregistrer le fichier XML de sorte que nous
    puissions le charger dans JOSM. Dans le Bloc-notes, cliquez sur
    Fichier -\> Enregistrer
-   Tapez household\_access.xml comme nom de fichier.
-   Dans la liste "Type :" assurez-vous de sélectionner "Tous les
    fichiers", parce que nous ne voulons pas enregistrer le fichier en
    tant que document texte, mais plutôt comme un document XML.
-   Cliquez sur Enregistrer

6. Test du modèle d’attributs
--------------------------------

Nous allons maintenant ouvrir notre fichier dans JOSM et voir à quoi il
ressemble.

-   Ouvrez les préférences dans JOSM et cliquez sur le menu "Modèles
    d’attributs", comme vous l’avez fait auparavant.
-   Sur le côté droit, à côté de "Modèles actifs", cliquez sur le bouton
    ![image](/images/fr/0300-12-24-creating-custom-preset/image13.png)

-   Tapez "Accès Ménages" dans le champ "Nom".
-   À côté de "Adresse web / fichier", ouvrez le fichier XML que vous
    venez de créer.
-   Cliquez sur Valider, et à nouveau sur Valider pour enregistrer vos
    préférences.
-   Redémarrez JOSM.
-   Créez un nouveau calque et ajoutez un point.
-   Allez dans le menu Attributs. Vous devriez voir le menu que vous
    venez de créer.

![image](/images/fr/0300-12-24-creating-custom-preset/image10.png)

Résumé
---------

Ce chapitre fournit des explications sur les attributs, les modèles
d’attributs, et la manière de créer son propre modèle d’attributs XML,
dans le but de créer de nombreuses options pour ajouter des attributs
spécifiques aux données.

La plupart des éléments possibles dans un modèle d’attributs sont
couverts, mais pas l’intégralité. Dans le cas où vous voulez créer un
éléments dans votre formulaire que nous n'avons pas abordé ici,
consultez l'annexe ci-dessous pour une liste plus complète des éléments
que vous pouvez mettre dans votre modèle d’attributs XML.

* * * * *

Appendice A - Liste des éléments XML des modèles d’attributs
==============================================================

Voici une liste de tous les éléments dont vous avez besoin dans votre
modèles d’attributs en XML. Il existe également une description
condensée sur le wiki de JOSM à la page suivante :
[http://josm.openstreetmap.de/wiki/TaggingPresets](http://josm.openstreetmap.de/wiki/TaggingPresets).

1. Éléments du menu
---------------------

Voici les éléments (items) qui forment le squelette du menu Attributs.

![image](/images/fr/0300-12-24-creating-custom-preset/image04.png)

**<group\>** Utilisé pour regrouper des éléments (items) dans les
sous-menus.

name est requis, icon est facultatif.

**<item\>** Chaque item est un modèle d’attributs qu’il est possible de
sélectionner.

name est nécessaire, icon est facultatif.

**<separator/\>** Insère une ligne de séparation dans le menu (ici après
Transformateur).

2. Format des éléments d’un modèle d’attributs
------------------------------------------------

Dans cette section sont présentés les différents types de balises XML
permettant d’ajouter des attributs et la manière dont ces balises
apparaissent dans le menu des modèles d’attributs.

**<label\>** Ajoute un texte statique à afficher dans le formulaire.

Le paramètre text est requis.

![image](/images/fr/0300-12-24-creating-custom-preset/label-text.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image15.png)

**<optional\>** Utilisé pour regrouper les éléments optionnels d’un item.


![image](/images/fr/0300-12-24-creating-custom-preset/optional-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image26.png)

**<space/\>** Ajoute une ligne vide dans le formulaire.

![image](/images/fr/0300-12-24-creating-custom-preset/space-item-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image12.png)

**<link\>** Ajoute un lien web pour ce type d’objet.

href est requis.

![image](/images/fr/0300-12-24-creating-custom-preset/link-item-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image03.png)

**<text\>** Une balise pour ajouter n’importe quel texte par l’utilisateur.

Le paramètre key est requis ; text, default et required sont
facultatifs.

![image](/images/fr/0300-12-24-creating-custom-preset/text-item-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image21.png)

**<combo\>** Affiche une liste déroulante à choix unique. Si modifiable est
vrai (choix par défaut), les listes déroulantes peuvent être éditées
comme si elles étaient des champs de texte (en plus de la fonction de
liste déroulante). Les listes déroulantes non modifiables ne peuvent
contenir qu'une des valeurs spécifiées.

Les paramètres key et values sont requis ; text, default, editable et
required sont facultatifs.

![image](/images/fr/0300-12-24-creating-custom-preset/combo-item-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image14.png)

**<multiselect\>** Affiche une liste à partir de laquelle zéro ou plusieurs
valeurs peuvent être sélectionnées par l’utilisateur en maintenant la
touche Ctrl enfoncée. Les valeurs sélectionnées seront concaténées avec
le séparateur spécifié (par défaut le point-virgule) en un seul
attribut. Lorsque le formulaire est ouvert depuis le menu du modèle
d’attributs, si une ou des valeurs sont déjà existantes pour la clé
concernée, <multiselect\> tentera alors d’indiquer la ou les valeurs
existantes dans la liste comme sélectionnées. Si la valeur de l’attribut
préexistant ne peut pas être représentée par une combinaison des choix
dans la liste, la liste sera désactivée afin que l'utilisateur ne puisse
pas remplacer accidentellement la valeur pré-existante. Contrairement à
la balise <combo\>, <multiselect\> s’attend à ce que la liste des
valeurs utilise le séparateur spécifié, par défaut un point-virgule. En
ce cas, si vous voulez utiliser un autre séparateur comme la virgule, il
faudra alors également l’utiliser dans le paramètre values pour séparer
les différentes valeurs possibles (A1,A,B,BE,C dans l’exemple
ci-dessous).

Les paramètres key et values sont requis ; text, default, delimiter et
required sont facultatifs.

![image](/images/fr/0300-12-24-creating-custom-preset/multiselect-item-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image25.png)

**<check\>** Une case à cocher que l'utilisateur peut sélectionner ou
désélectionner.

Le paramètre key est requis ; text, default et required sont
facultatifs.

![image](/images/fr/0300-12-24-creating-custom-preset/check-item-usage.png)
![image](/images/fr/0300-12-24-creating-custom-preset/image18.png)

<key\> key est un paramètre toujours requis dans les balises, que ce
soit <text\>, <combo\> ou <multiselect\>. C’est aussi une balise pour
fixer une valeur à la clé. Elle n’ajoute rien sur le formulaire, mais
ajoute automatiquement un attribut lorsque l’élément (item) est
sélectionné dans le modèle d’attributs. Par exemple, si vous cliquez sur
l’élément Bâtiment du modèle d’attributs, l’attribut "building=yes" sera
appliqué automatiquement à l’objet. Cette balise définit donc une valeur
spécifique à une clé.

![image](/images/fr/0300-12-24-creating-custom-preset/image28.png)

3. Attributs
--------------

Les couples clé, valeurs des attributs ci-dessous ont la signification
suivante :

**name="a\_name"**

Permet d’indiquer un nom d'affichage pour un élément. Ce nom sera
affiché dans la fenêtre qui s’ouvre pour modifier l’objet.

Ex. *```<item name="bridge"\>```*

**fr.name="un\_nom"**

Il est possible d’inclure une traduction de l’affichage des noms. Elle
sera prise en compte automatiquement par JOSM dans les formulaires de
modèles d’attributs si la langue a été choisie dans les préférences de
JOSM comme celle de l’interface du logiciel. Conservez le paramètre name
en anglais et ajoutez à la suite la ou les traductions. Il est possible
de mettre plusieurs traductions dans un même modèle d’attributs.

Ex. *```<item name="bridge" fr.name="pont" pt.name="ponte" es.name="puente"\>```*

**name\_context="context"**

Fournit des éléments de contexte relatifs au nom d'un objet et permet
ainsi une plus grande clarté quand plusieurs objets partagent le même
nom. C’est le cas par exemple des stations-services pour motos qui sont
ainsi différenciées des stations-services pour voitures.

Ex. *```<item name="Gas\_Station" fr.name="Station service"```*
*```name\_context="Motorcycle" fr.name\_context="Motos"\> OR <item```*
*```name="Gas\_Station" fr.name="Station-service" name\_context="Car"```*
*```fr.name\_context="Autos"\>```*

**type="data\_type"**

Utilisé pour que dans le modèle d’attributs ne puissent être
sélectionnés que les objets d’un type donné. Les filtres de sélection
peuvent être "nodes" (noeuds), "relations", "way" (chemin), et
"closed\_way" (chemins fermé, c’est-à-dire polygone) ainsi que toute
combinaison de ces éléments séparés par une virgule.

Ex.*``` <item name="Highway" type="way"\>```*

**icon="iconname"**

Permet de spécifier l'icône qui sera utilisée dans la fenêtre du modèle
d’attributs. Le nom de l'icône doit être dans un chemin de classe dans
le sous-répertoire / images / symboles. Vous pouvez aussi charger des
greffons qui fournissent des images. L'image sera utilisée comme icône
affichée dans le menu des modèles d’attributs. L'icône doit être de
forme carrée.

Ex.*``` <item name="Construction" icon="presets/construction.png" type="way"\>```*

Consultez [](http://mapbox.com/maki/)[http://mapbox.com/maki/](http://mapbox.com/maki/)
pour des icônes.

**key="some\_key"**

Spécifie la clé de l’attribut.

Ex. *```<key key="junction" value="roundabout" /\> OR <check key="tunnel" text="Tunnel" default="off" /\>```*
*```<key key=\>, <text key= \>, <check key= \>, <combo key= \>,```*

**text="Any text"***

Ce texte est la description qui va être affichée avant ou après
l'élément (cas des cases à cocher, sélections multiples, etc.). Vous
pouvez saisir ce que vous voulez, mais il est préférable de rester
concis et d’utiliser l’anglais. Pour afficher le texte dans d’autres
langues (exemple : le français), voir le paramètre suivant.

Ex. *```<check key="lit" text="Lit" default="off" delete\_if\_empty="true"/\>```*

*```<check key="oneway" text="Oneway" default="off" delete\_if\_empty="true"/\>```*
*```<combo key="foot" text="Foot" values="yes,designated,official,no"\>```*


**fr. text="n’importe quel texte"**

Il est possible d’inclure une traduction de l’affichage des textes. Elle
sera prise en compte automatiquement par JOSM dans les formulaires de
modèles d’attributs si la langue a été choisie dans les préférences de
JOSM comme celle de l’interface du logiciel. Conservez le paramètre text
en anglais et ajoutez à la suite la ou les traductions. Il est possible
de mettre plusieurs traductions dans un même modèle d’attributs.

Ex. *```<check key="oneway" text="Oneway" fr.text="Sens unique" default="off" delete\_if\_empty="true" /\>```*

**text\_context="context"**

Comme name\_context, cet attribut fournit un contexte explicatif à des
contenus textuels. Il permet de différencier les attributs de texte qui
utilisent les mêmes mots, mais ont des significations différentes.

Ex. *```<combo key="fuel" text="Fuel" text\_context="grill"\>```*
*```values="charcoal,electric,wood" OR <label text="Edit Goods"```*
*```text\_context="aerialway" /\>```


**default="default\_value"**

La valeur par défaut pour un élément. Si elle n'est pas spécifiée, la
valeur actuelle de la clé est choisie par défaut (le cas échéant). Le
plus souvent, ce paramètre est spécifié comme <default=""\>.

Ex. *```<combo key="parking" text="Type"```*
*```values="multi-storey,surface,underground" default="surface"```*
*```delete\_if\_empty="true" /\> OR <combo key="park\_ride" text="Park and```*
*```Ride" values="yes,no" default="" delete\_if\_empty="true" /\>```*

**delete\_if\_empty="true"**

Si la boîte de texte (ou combo) est laissée vide, la clé n’apparait pas
dans les attributs car elle ne peut avoir une valeur vide. Par défaut,
la valeur associée à cette clé est "false".

Ex. *```<combo key="fee" text="Fee" values="yes,no" default=""```*
*```delete\_if\_empty="true" /\> OR <check key="motorroad" text="Motorroad"```*
*```default="off" delete\_if\_empty="true" /\>```*

**values="entry1,entry2,entry3"**

Une liste d'entrées pour des menus de liste déroulante <combo\> et des
sélections multiples <multiselect\>. La liste de choix doit être séparée
par des virgules dans <combo\> ou par le séparateur spécifié dans
<multiselect\>. Si une valeur contient le séparateur, le séparateur peut
être une barre oblique inverse. Si une valeur contient une barre oblique
inverse, il faut aussi terminer avec une barre oblique inverse.

Ex. *```<combo key="surface" text="Surface"```*
*```values="paved,unpaved,asphalt,concrete,metal,```*
*```wood,paving\_stones,cobblestone,gravel,pebblestone,compacted,grass\_paver,grass,sand,ground"\>```*

**values\_context="context"**

Contexte explicatif pour le nom d’attribut, pour séparer les mêmes mots
avec des significations différentes.

Ex. *```<combo key="location" text="Location"```*
*```values="underground,underwater,overground" values\_context="pipeline"```*
*```default="" delete\_if\_empty="true" /\>```*

**display\_values="Entry1,Entry2,Entry3"**

Une liste d'entrées qui est affichée à l'utilisateur. Doit comporter le
même nombre d'entrées, dans le même ordre, que les valeurs listées dans
values, et le paramètre editable doit être faux (false) ou non spécifié.
La liste de choix doit être séparée par des virgules dans <combo\> ou
par le séparateur spécifié dans <multiselect\>. Si une valeur contient
le séparateur, le séparateur peut être une barre oblique inverse. Si une
valeur contient une barre oblique inverse, il faut aussi terminer avec
une barre oblique inverse.

Ex. *```<check key="lit" text="Lit" default="off" delete\_if\_empty="true"/\>```*
*```<check key="oneway" text="Oneway" default="off" delete\_if\_empty="true"/\>```*

*```<combo key="foot" text="Foot" fr.txt="Piéton"```*
*```values="yes,designated,official,no,not\_specified"```*
*```display\_values="yes,designated,official,no, not specified" \>```*

**fr.display\_values="Entrée1,Entrée2,Entrée3"**

Il est possible d’inclure une traduction de l’affichage des valeurs
d’une liste. Elle sera prise en compte automatiquement par JOSM dans les
formulaires de modèles d’attributs si la langue a été choisie dans les
préférences de JOSM comme celle de l’interface du logiciel. Conservez le
paramètre display\_values en anglais et ajoutez à la suite la ou les
traductions. Il est possible de mettre plusieurs traductions dans un
même modèle d’attributs.

Ex. *```<check key="lit" text="Lit" default="off" delete\_if\_empty="true"/\>```*
*```<check key="oneway" text="Oneway" default="off" delete\_if\_empty="true"/\>```*

*```<combo key="foot" text="Foot" fr.txt="Piéton"```*
*```values="yes,designated,official,no,not\_specified"```*
*```display\_values="yes,designated,official,no, not specified"```*
*```fr.display\_values="oui,désigné, officiel,non, non spécifié" \>```*

**value="value"**

Spécifie une valeur d’une clé pour un attribut.

Ex. *```<key key="man\_made" value="crane" /\>```*

**value\_on="true\_value"**

Spécifie la valeur "true" appliquée pour la clé de cet attribut ("yes"
par défaut).

**value\_off="false\_value"**

Spécifie la valeur "false" appliquée pour la clé de cet attribut ("no"
par défaut).

**editable="false"**

Affiche la liste déroulante en lecture seule, l'utilisateur peut
seulement sélectionner un élément de la liste et ne peut saisir de
texte.

**use\_last\_as\_default="true"**

Spécifie pour une liste déroulante et les champs de texte que la
dernière valeur choisie sera utilisée par défaut. Utiliser "force" pour
également appliquer ce comportement à des objets possédant déjà des
attributs avec cette clé.

Ex. *```<text key="addr:street" text="Street name"```*
*```use\_last\_as\_default="true" delete\_if\_empty="true" /\> OR```*

*```<text key="addr:city" text="City name" use\_last\_as\_default="true"```*
*```delete\_if\_empty="true" /\> OR <text key="addr:postcode" text="Post```*
*```code" use\_last\_as\_default="true" delete\_if\_empty="true" /\> OR```*

*```<combo key="addr:country" text="Country code"```*
*```values="AT,CH,DE,FR,GB,IT,US" use\_last\_as\_default="true"```*
*```delete\_if\_empty="true" /\>```*

**required="true"**

Le formulaire du modèle d’attributs ne peut être validé si une valeur
n’est pas saisie ou choisie pour cette clé.

Ex. *```<combo key="bridge" text="Bridge" values="yes,viaduct,swing,aqueduct" required="true" default="yes" /\>```*

**rows="count"**

Spécifie le nombre de lignes dans un <multiselect\>.

Ex. *```<multiselect key="building:material" text="Building materials"```*
*```values="straw;wood;concrete" default="" delete\_if\_empty="true"```*
*```rows="3" /\>```*
