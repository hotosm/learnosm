---
layout: doc
title: Intégrer des cartes dans un site web
permalink: /fr/advanced/putting-maps-on-a-website/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Intégrer des cartes dans un site web
======================================

Introduction
------------

Dans le dernier chapitre, nous avons découvert les fondements de
TileMill, et avons appris à exporter des tuiles. Les tuiles, comme vous
le savez, sont les composantes essentielles d'une carte glissante sur
internet. Elles fournissent les images à mesure qu’un utilisateur fait
glisser la carte d’un endroit à un autre ou qu’il zoome en avant et en
arrière.

Il y a plusieurs façons d’héberger et de servir des tuiles ainsi que
différents services commerciaux dédiés parmi lesquels MapBox, le service
d'hébergement en ligne de Development Seed. Vous pouvez vous créer un
compte sur cette plateforme, y faire monter vos données et vos styles de
rendus, pour y créer vos tuiles, et rendre vos cartes facilement
intégrables dans des sites web. Dans ce chapitre, nous allons prendre en
main MapBox et apprendre à intégrer facilement nos cartes sur une page
web. Nous allons également examiner les greffons MapBox pour Wordpress
et Drupal.

1. Utilisation de MapBox
------------------------

MapBox est une plateforme conçue par Developpement Seed pour rendre
aussi simple que possible la conception et l’affichage des cartes
personnalisées sur votre site web. Pour débuter avec MapBox, visitez le
site web [http://mapbox.com/](http://mapbox.com/) et cliquez sur “sign
up” pour vous inscrire. Pour les besoins de l’exercice, vous choisirez
l’option d’hébergement gratuit.

Notez que lorsque vous ouvrez un compte, vous acceptez d’accorder à
MapBox les conditions d’utilisations suivantes : une license non
exclusive dans le monde entier qui lui permet d’utiliser, de copier, de
mettre en cache, de publier, de diffuser, de distribuer, de modifier, de
créer des travaux dérivés, et de stocker, d’abonner, et de permettre à
d’autres de le faire, afin de fournir les services. De fait, il est
préférable de ne pas utiliser des données privées et/ou sensibles.

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image06.png)

Une fois que vous vous êtes inscrit, vous devrez confirmer votre compte
en cliquant sur le lien que MapBox a envoyé dans votre boite
électronique. Vous pouvez maintenant créer vos cartes.

Une fois que vous êtes connectés, cliquez sur “New Project” pour créer
votre carte : un nouveau projet dans lequel vous pouvez éditer votre
style de cartes sera créé. Pour modifier votre style de carte, cliquez
en bas sur ![image](/images/fr/0400-12-30-putting-maps-on-a-website/image05.png).

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image03.png)

La page suivante s’ouvre :

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image10.png)

-   Faites un zoom dans la zone qui vous intéresse et ajustez les
    paramètres avec le panneau de contrôle à gauche. Vous pouvez
    également changer la couleur des rues, des surfaces, de l’eau et des
    terres en cliquant sur les paramètres des couleurs pour chaque
    élément.
-   Jouez avec les outils de contrôle sur la gauche. Si vous cliquez sur
    l'onglet "Info", vous pouvez modifier certaines des configurations
    de votre carte.
-   Si vous passez à l'onglet marqueurs, vous pouvez créer des marqueurs
    sur votre carte pour identifier les emplacements spécifiques.

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image09.png)

-   Pour ajouter un marqueur à la carte, cliquez sur la carte.
-   Notez que chaque fois que vous modifiez un paramètre, l'image de la
    carte sur la gauche est rechargée pour refléter vos modifications.
-   Pour une aide détaillée sur la carte de style, vous pouvez visiter
    l'aide de MapBox à l’adresse suivante : [http://mapbox.com/help/ \#
    creating\_a\_new\_map](http://mapbox.com/help/).
-   Vous pouvez enregistrer votre carte en cliquant sur le bouton
    "Save", et vous pouvez obtenir un lien intégrable pour votre page
    web en cliquant sur "Share" puis "Embed".

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image00.png)

Lorsque vous copiez/collez le code HTML dans votre site web, la carte
que vous avez enregistré ici sera affichée dans une fenêtre sur votre
site.

2. Charger des tuiles depuis TileMill
-------------------------------------

Les outils d’édition de MapBox sont quelque peu limités, mais le
véritable intérêt réside dans le fait de pouvoir héberger les tuiles que
vous produisez avec TileMill. Vous pouvez envoyer des fichiers MBTiles
dans votre compte MapBox de deux manières.

Depuis la page principale, cliquez l’onglet "Data" puis sur “Add to your
Data” pour voir apparaitre la fenêtre ci-dessous pour envoyer des
données sur votre compte MapBox.

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image02.png)

De là, vous pouvez envoyer des fichiers MBTiles que vous avez exportés
depuis TileMill.

Sinon vous pouvez envoyer directement vos fichiers MBTiles de TileMill
vers votre compte MapBox. Pour ce faire, depuis TileMill, sélectionnez
Export -\> Upload.

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image04.png)

Une fois que vous avez envoyé vos fichiers MBTiles, vous verrez un
projet apparaître sur votre page MapBox.

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image11.png)

Vous pouvez ouvrir ce projet et sélectionner les différents onglets.
Vous pouvez activer/désactiver la légende et bien d’autres propriétés de
la carte.

3. Intégrer une carte sur votre site web
----------------------------------------

Vous avez déja vu comment intégrer une carte à l’aide de HTML, mais si
vous avez un site basé sur un CMS, vous pouvez avoir besoin d’un greffon
qui vous permet facilement d’ajouter des cartes à votre site.

Dans ce chapitre, nous traiterons de cette question à partir de deux
outils particuliers, MapBox et WordPress.

### A. Intégrer votre carte sur un site web (Wordpress) avec le greffon WordPress de MapBox.

Nous verrons comment intégrer simplement votre carte sur votre site
Wordpress avec le greffon Wordpress développé par Mapbox disponible pour
téléchargement à l’adresse suivante :

[http://wordpress.org/extend/plugins/mapbox/](http://wordpress.org/extend/plugins/mapbox/).

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image07.png)

Ce greffon permet de copier et d’intégrer des lignes de codes dans
WordPress et d’ajouter des cartes.

### B. Intégrer votre carte sur un site web (dont le CMS est Drupal) avec MapBox

Pour ajouter des cartes MapBox à des CMS Drupal, vous pouvez y coller le
code source directement. Cependant, assurez-vous de rechercher le format
d’édition “Full HTML” ou “Extended HTML”, sinon Drupal peut ne pas
accepter l’utilisation de la balise <iframe\>. Pour plus d’informations
rendez-vous à
[http://mapbox.com/help/\#embedding\_on\_drupal](http://mapbox.com/help/#embedding_on_drupal).

### C. API personnalisée

Si vous souhaitez faire plus que d’intégrer des cartes, vous pouvez
consulter le guide de l’API. Celui-ci revient en détails sur les moyens
dont vous disposez pour changer le flux de travail (workflow), le style
et d’autres propriétés de votre carte. Pour plus de details, rendez-vous
sur : [http://mapbox.com/help/](http://mapbox.com/help/).

### D. Cartes statiques

Vous pouvez aussi exporter des cartes statiques depuis TileMill et les
intégrer à votre site web. Pour ce faire, vous allez exporter une image
de votre carte depuis TileMill et l’intégrer à votre site comme si vous
y ajoutiez une image.

Dans les chapitres précédents, nous avons fait le tour sur les options
d’export que TileMill offre. En cliquant sur le bouton d'exportation
dans le coin supérieur droit, vous pouvez exporter dans un fichier PNG.

![image](/images/fr/0400-12-30-putting-maps-on-a-website/image08.png)

Une fois que vous avez exporté un fichier PNG depuis TileMill, vous
pouvez intégrer cette image dans votre site Web en y ajoutant une balise
HTML d'image :

<img src=“CHEMIN\_IMAGE” alt=“My Map”\>

Remplacez CHEMIN\_IMAGE par le chemin d’accès au fichier image en y
incluant l’extension .png.

Si vous utilisez un CMS comme WordPress, vous devez être capable
d’envoyer des images à l’aide du gestionnaire d’images du CMS.

Résumé
------

Dans les deux derniers chapitres, nous avons vu comment concevoir des
cartes en utilisant des données de différentes sources incluant OSM et
comment créer des tuiles d’images qui peuvent être mises en ligne selon
différentes modalités.


