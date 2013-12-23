---
layout: doc
title: Configuration du serveur WMS
permalink: /fr/advanced/wms-service-configuration/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Configuration du serveur WMS
=============================

Introduction
------------

Dans ce chapitre, nous allons apprendre comment mettre en place un
serveur WMS (Web Map Service) qui nous permettra d’héberger des images
et d’offrir un service de cartes via Internet utilisant le protocole
HTTP. Les images elles-mêmes sont créées par un serveur qui lit les
données vectorielles SIG, qui peuvent être dans une base de données,
dans des fichiers shapefile (.shp) ou d’autres formats de données
géographiques. Les serveurs WMS sont efficaces pour transmettre les
cartes au format raster sur Internet. Les services WMS peuvent être
utilisés comme couches raster (image) dans QGIS, ArcGIS et JOSM ou
encore dans des API telles que Openlayers et Leaflet pour l’affichage de
cartes sur internet.

![image](/images/fr/0400-12-26-wms-service-configuration/image12.png)

D’un point de vue pratique, nous allons apprendre à installer et
configurer MapServer
([http://www.mapserver.org/](http://www.mapserver.org/)), une
plate-forme open-source pour la publication de données géographiques au
format raster, et l'utiliser comme notre propre serveur WMS.

Nous nous appuierons sur le tutoriel précédent dans lequel nous avons
créé une base de données PostGIS et y avons chargé des données
OpenStreetMap. Dans l'annexe de ce chapitre, nous allons aussi passer en
revue les étapes nécessaires pour mettre en place MapServer avec les
données OpenStreetMap sur Ubuntu.

Ce chapitre comprend les sections suivantes :

1. Installer le logiciel MapServer

2. Créer le fichier Mapfile

3. Changer le Mapfile

4. Tester WMS

5. Ajouter une couche WMS dans QGIS

6. Ajouter une couche WMS dans JOSM

1. Installer le logiciel Mapserver
----------------------------------

-   Installez MapServer et le serveur web Apache sur Windows en
    utilisant le programme d'installation MS4W téléchargeable à
    l’adresse
    [http://www.maptools.org/ms4w/](http://www.maptools.org/ms4w/).
    Cliquez sur l'onglet Téléchargements pour obtenir le l’archive
    ms4w\_3.0.x.zip.

![image](/images/fr/0400-12-26-wms-service-configuration/image01.png)

-   Décompressez l'archive et copiez le dossier MS4W à la racine de
    votre disque, probablement C:\\

![image](/images/fr/0400-12-26-wms-service-configuration/image23.png)

-   Ouvrez le dossier et double-cliquez sur apache-install. Si vous avez
    déjà exécuté cette installation auparavant, vous devrez peut-être
    exécuter apache-uninstall en premier lieu.

![image](/images/fr/0400-12-26-wms-service-configuration/image21.png)

-   Ouvrez votre navigateur Web et accédez à
    [http://localhost](http://localhost). Vous devriez voir une page
    comme celle-ci :

![image](/images/fr/0400-12-26-wms-service-configuration/image08.png)

-   Rendez-vous ensuite à http:// localhost/cgi-bin/mapserv.exe. Vous
    devriez voir apparaître ce message :

![image](/images/fr/0400-12-26-wms-service-configuration/image22.png)

-   Ce message confirme que le serveur web Apache est en cours
    d'exécution et que MapServer fonctionne correctement.

Pour information, l’adresse [http://localhost](http://localhost) est
celle du serveur Web installé localement sur votre ordinateur. Avec
cette adresse, vous accédez à partir d'Apache à une page Web sur votre
serveur Web local.

2. Créer le fichier Mapfile
---------------------------

MapServer utilise un fichier Mapfile pour servir les fichiers images. Le
fichier Mapfile contient de nombreuses informations liées à votre carte,
notamment les données à afficher, les styles disponibles, ou les
informations sur la projection. L’écriture d’un fichier Mapfile peut
être un peu compliquée, mais bien heureusement il existe une extension
de QGIS qui permet de créer automatiquement un tel fichier.

-   Ouvrir QGIS et ouvrir le menu Extensions -\> Installateur
    d’extension python pour QGIS.
-   Trouver l’extension MapServer Export et l’installer si elle n’est
    pas déjà installée.

![image](/images/fr/0400-12-26-wms-service-configuration/image03.png)

-   Chargez maintenant les couches PostGIS que vous avez créées dans le
    premier chapitre, en allant dans "Ajouter une couche PostGIS"

![image](/images/fr/0400-12-26-wms-service-configuration/image07.png)

-   Avant de créer notre fichier Mapfile, nous allons effectuer un
    changement sur les propriétés de nos couches. L’extension ne
    fonctionne pas avec certaines fonctionnalités de QGIS, donc nous
    avons besoin de changer la symbologie de chacune de nos couches pour
    qu’elles utilisent “l’Ancienne symbologie”. Avec la souris, faire un
    clic-droit sur chaque couche et choisir “Propriétés”.

![image](/images/fr/0400-12-26-wms-service-configuration/image27.png)

-   Dans l’onglet “Style” cliquez sur ![image](/images/fr/0400-12-26-wms-service-configuration/image15.png) dans
    le coin supérieur droit

-   Répondez “Oui” et cliquez sur OK.
-   Répéter cette opération pour chaque couche
-   Maintenant, nous sommes prêts à ouvrir l’extension. Allez à
    Extension-\> MapServer Export...-\> MapServer Export. Cela peut
    aussi être aussi sous Web -\> MapServer Export ou en cliquant sur ce
    bouton-ci : ![image](/images/fr/0400-12-26-wms-service-configuration/image25.png)

-   Cette extension crée automatiquement pour nous un fichier Mapfile,
    mais nous devons au préalable définir quelques options. Donnez le
    nom et la destination du fichier, tel que C:\\test.map. Définissez
    le type de l'image comme png puis la largeur et la hauteur à 700.
    Enfin, indiquez que l'URL de MapServer est
    http://localhost/cgi-bin/mapserv.exe. Lorsque vous avez terminé,
    cliquez sur OK.

![image](/images/fr/0400-12-26-wms-service-configuration/image24.png)

-   Vous pouvez être invité à enregistrer votre projet. Faites-le
    maintenant.
-   Ouvrez votre navigateur et rendez-vous à :

http://localhost/cgi-bin/mapserv.exe?MAP=C:\\test.map&LAYERS=ALL&MODE=MAP

-   Si votre fichier Mapfile est à un autre emplacement, changez la
    partie en gras par son emplacement.
-   Vous verrez apparaître l’erreur suivante:

![image](/images/fr/0400-12-26-wms-service-configuration/image14.png)

NOTE : Vous pouvez également obtenir une erreur de type
“loadStyle():General error message. Invalid WIDTH…” Dans ce cas, vous
devrez peut-être changer la largeur de la ligne dans le mapfile de 0.91
à 1 ou plus.

-   Le problème est que notre Mapfile fait l’hypothèses que nous aurions
    un couple de fichiers préparés avec des symboles et des polices.
    Nous allons enlever manuellement ces paramètres sur notre fichier
    Mapfile de sorte que nous pouvons voir que tout fonctionne.
-   Trouver le fichier Mapfile sur votre ordinateur et ouvrez-le avec un
    éditeur de texte.
-   Mettre en commentaire les lignes commençant par “FONTSET” and
    “SYMBOLSET” en insérant un symbole \# devant ces lignes.

![image](/images/fr/0400-12-26-wms-service-configuration/image13.png)

-   Défilez le texte jusqu'à la fin du fichier et commentez la ligne
    commençant par "SYMBOL", qui sinon va provoquer une erreur.

![image](/images/fr/0400-12-26-wms-service-configuration/image18.png)

-   Enregistrez le fichier, puis rechargez la page dans votre
    navigateur. MapServer devrait maintenant rendre correctement votre
    carte.

![image](/images/fr/0400-12-26-wms-service-configuration/image04.png)

3. Modifier le fichier Mapfile
------------------------------

Il est possible de faire de nombreux ajustements au style de votre carte
en modifiant le fichier Mapfile. La meilleure façon de changer
l'épaisseur et la couleur des lignes pourrait être de les changer dans
QGIS puis recréer le fichier Mapfile, mais il est également facile de
faire des ajustements dans le fichier directement.

Si vous ouvrez votre fichier Mapfile dans le Bloc-notes, vous
remarquerez qu’il y a beaucoup d’informations en haut. Vous reconnaîtrez
sans doute quelques-unes d’entre elles, dont la ligne “SIZE 700 700”.
Rappelons que vous avez dit plutôt à l’extension de QGIS de rendre
l’image à la dimension 700 sur 700 pixels.

Nous ne discuterons pas plus en détail du fichier mapfile. Il contient
quatre sections qui débutent par le mot “LAYER” et finissent par “END”.
Chacune de ces sections décrit tout ce que Mapserver a besoin de savoir
à propos de chacune des couches qui composent notre carte. La couche des
routes ressemble à ceci :

![image](/images/fr/0400-12-26-wms-service-configuration/image16.png)

Remarquons le bloc de fin qui commence par “STYLE”. Ici vous pouvez
changer l'épaisseur des lignes dans cette couche, et la couleur des
lignes. On notera que les trois chiffres de l’attribut couleur
représentent successivement les valeurs de rouge, vert et bleu. Chaque
nombre peut aller jusqu'à 255. Par exemple, 0 0 255 serait complètement
bleu, tandis que 255 0 255 serait pourpre (mélange de rouge et de bleu).

En outre, remarquez que notre couche de points n’est pas affichée comme
nous le souhaitions car nous avons supprimé les symboles dans notre
fichier Mapfile. Afin d’afficher l’icône de notre couche de points, nous
devons définir les fichiers image que nous voulons utiliser. Pour ce
faire, créons un bloc dans notre fichier Mapfile au-dessus des sections
LAYER. Le bloc ressemblera à ceci:

![image](/images/fr/0400-12-26-wms-service-configuration/image17.png)

![image](/images/fr/0400-12-26-wms-service-configuration/image20.png)

circle.png

Ceci définit une icône avec le nom de "circle" liée à l'image
circle.png. L’icône doit être stockée dans le même dossier que l’image.
Ensuite, nous pouvons utiliser cette définition dans notre couche de
points et les points seront rendus avec l'icône. Enlevons les
commentaires sur la ligne "SYMBOLE" puis actualisons la page dans le
navigateur.

![image](/images/fr/0400-12-26-wms-service-configuration/image02.png)

![image](/images/fr/0400-12-26-wms-service-configuration/image09.png)

Rendu de la carte avec l’icône des points

4. Tester le serveur WMS
------------------------

Nous allons maintenant tester si notre serveur WMS est bien configuré.
Comme nous l'avons déjà vu, le WMS fonctionne sur le protocole HTTP.
Nous pouvons ainsi utiliser un lien dans notre navigateur Web pour
tester les capacités de notre serveur. Cette requête GetCapabilities
permet de connaître un service WMS particulier.

-   Ouvrez votre navigateur web et allez sur:

[http://localhost/cgi-bin/mapserv.exe?map=C:\\test.map&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities)

-   Cela devrait permettre de télécharger un fichier décrivant le
    service WMS. Ouvrez-le avec un éditeur de texte pour voir des
    informations associées à votre serveur et votre fichier Mapfile.
    Rechercher dans le fichier le mot «error». Il ne devrait pas y en
    avoir.

5. Ajouter une couche WMS dans QGIS
-----------------------------------

-   Vous pouvez ajouter une couche WMS dans QGIS avec le bouton "Ajouter
    une couche WMS"

![image](/images/fr/0400-12-26-wms-service-configuration/image10.png)

-   Pour ajouter votre serveur WMS, cliquez sur "Nouveau".

-   Donnez un nom à votre serveur et pour l'URL saisissez :

[http://localhost/cgi-bin/mapserv.exe?map=C:/test.map](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map)

![image](/images/fr/0400-12-26-wms-service-configuration/image00.png)

[](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map)

-   Cliquez OK.
-   Maintenant cliquez sur "connexion" pour voir les couches qui sont
    disponibles. Ce sont les quatre couches qui ont été définies dans le
    fichier Mapfile.

![image](/images/fr/0400-12-26-wms-service-configuration/image05.png)

-   Vous pouvez ajouter n'importe laquelle de ces couches comme une
    couche raster dans QGIS. Rappelez-vous que ces couches WMS sont des
    images, et non des données vectorielles, donc vous ne pourrez pas
    les modifier. Mais c'est un excellent moyen de fournir des images de
    référence.

6. Ajouter des couches WMS dans JOSM
------------------------------------

Nous pouvons aussi ajouter facilement nos cartes WMS en tant que couches
dans JOSM.

-   Ouvrir JOSM et allez dans le menu Préférences.

-   Cliquez sur l’onglet “WMS TMS.”

![image](/images/fr/0400-12-26-wms-service-configuration/image06.png)

-   En bas cliquez sur le bouton +.
-   Dans “Adresse web du service”, entrez
    [http://localhost/cgi-bin/mapserv.exe?map=C:/test.map](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map)

![image](/images/fr/0400-12-26-wms-service-configuration/image26.png)

[](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map)

-   Cliquez sur "Obtenir les calques". Vous verrez une liste de quatre
    couches sur votre serveur WMS.

-   Sélectionnez un calque et cliquez sur OK et à nouveau sur OK.
-   Après avoir téléchargé des données OSM, vous serez en mesure de
    charger vos couches WMS. Allez à menu "Imagerie" et trouvez votre
    nouvelle couche, qui est appelée «couche d'imagerie sans nom» (à
    moins que vous l'ayiez nommée).

![image](/images/fr/0400-12-26-wms-service-configuration/image19.png)

-   Cliquez sur votre nouvelle couche à ajouter en tant que couche de
    fond.

Résumé
------

Un WMS est un protocole couramment utilisé pour offrir un service de
cartes image à travers internet. Un utilisateur effectue une requête
pour obtenir une carte image avec certains paramètres, tels que la
largeur et la hauteur, et MapServer fournit cette image.

Dans ce chapitre, nous avons appris comment mettre en place MapServer et
le configurer en tant que serveur WMS en utilisant pour cela des données
importées de PostGIS pour créer des cartes images. Vous pouvez obtenir
plus d'informations sur l'architecture WMS à mcette adresse:
[http://docs.geoserver.org/latest/en/user/services/wms/reference.html](http://docs.geoserver.org/latest/en/user/services/wms/reference.html).
Dans les chapitres suivants, nous allons examiner d'autres façons de
transmettre des cartes à travers internet. Si vous êtes intéressé par
des instructions pour la mise en place de MapServer sur Ubuntu, voir
l'annexe qui suit.

* * * * *

Annexe - Installation de MapServer sur Ubuntu
---------------------------------------------

Dans cette annexe, nous allons passer en revue les étapes d'installation
pour la mise en place de MapServer sur Ubuntu. Ces étapes font suite à
l'annexe dans le premier chapitre, et nous supposons que vous avez déjà
installé PostGIS et importé les données OpenStreetMap en utilisant
osm2pgsql.

### 1. Installer Mapserver et Apache / Install MapServer and Apache

Pour installer MapServer sur Ubuntu 11.04 (Natty Narwhal), exécutez les
commandes suivantes:

**sudo apt-get -y install apache2

sudo apt-get -y install python-software-properties

sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable

sudo apt-get update

sudo apt-get -y install cgi-mapserver mapserver-bin

Pour installer MapServer sur Ubuntu\> = 11.10:

sudo apt-get -y install apache2

sudo apt-get -y install cgi-mapserver mapserver-bin**

Si vous visitez
[http://localhost/cgi-bin/mapserv](http://localhost/cgi-bin/mapserv), le
serveur devrait vous répondre “No query information to decode.
QUERY\_STRING is set, but empty”. Notez que si vous accédez à partir
d'un autre ordinateur (si vous configurez sur un serveur distant),
remplacez localhost par l'adresse IP du serveur.

### 2. Créer un fichier Mapfile

L'installation de MapServer est terminée, maintenant tout ce dont nous
avons besoin est un fichier Mapfile qui contient les informations
correctes sur nos couches. Comme nous configurons MapServer à partir
d’un serveur Ubuntu, nous ne pouvons pas ici utiliser QGIS pour créer le
fichier Mapfile comme nous l'avons fait sur Windows. Voici ci-dessous un
fichier Mapfile qui fonctionnera avec la configuration que nous avons
créée. Notez que nous avons seulement inclus des informations pour une
couche, mais vous pouvez facilement ajouter des couches supplémentaires
en utilisant la même structuration.

/var/www/test.map

MAP

NAME "My-Test-Map"

\# Map image size

SIZE 700 700

UNITS meters

EXTENT 3756680.934870 3642952.056250 3899342.315130 3723789.193750

PROJECTION

'proj=longlat'

'datum=WGS84'

'no\_defs'

END

\# Background color for the map canvas -- change as desired

IMAGECOLOR 255 255 255

IMAGEQUALITY 95

IMAGETYPE png

OUTPUTFORMAT

NAME png

DRIVER 'GD/PNG'

MIMETYPE 'image/png'

IMAGEMODE RGBA

EXTENSION 'png'

END

WEB

IMAGEPATH '/tmp/'

IMAGEURL '/tmp/'

\# WMS server settings

METADATA

'ows\_title' 'My-Test-Map'

'ows\_onlineresource'
'http://198.61.205.151/cgi-bin/mapserv?MAP=/var/www/test.map'

'ows\_srs' 'EPSG:4326'

END

TEMPLATE 'fooOnlyForWMSGetFeatureInfo'

END

LAYER

NAME 'planet\_osm\_line'

TYPE LINE

DUMP true

TEMPLATE fooOnlyForWMSGetFeatureInfo

UNITS METERS

EXTENT 3756680.934870 3642952.056250 3899342.315130 3723789.193750

CONNECTIONTYPE postgis

CONNECTION "dbname='osm' user='postgres' sslmode=disable"

DATA 'way FROM "planet\_osm\_line" USING UNIQUE osm\_id USING
srid=900913'

METADATA

'ows\_title' 'planet\_osm\_line'

END

STATUS OFF

TRANSPARENCY 100

PROJECTION

'proj=longlat'

'datum=WGS84'

'no\_defs'

END

CLASS

NAME 'planet\_osm\_line'

STYLE

WIDTH 0.91

COLOR 46 195 130

END

END

END

END

Notez que vous devrez vous assurer de modifier les lignes “EXTENT” en
fonction de l'emplacement de vos données. Les extensions ont des unités
en mètres, parce que nos données sont projetées en Mercator.

Vous allez maintenant être en mesure d'accéder à votre WMS dans QGIS et
JOSM. Voir les parties 6 et 7 de ce chapitre pour plus d'informations.
Votre adresse WMS sera :

http://<YOUR\_SERVER\_IP\>/cgi-bin/mapserv?MAP=/var/www/test.map


