---
layout: doc
title: osm2pgsql
permalink: /fr/osm-data/osm2pgsql/
lang: fr
category: osm-data
---

osm2pgsql
==========


Dans le chapitre précédent, nous avons vu comment configurer Postgresql avec PostGIS sous Windows et comment configurer une base de données et la charger avec des données shapefile. Afin d'obtenir des données OpenStreetMap dans une base de données, vous pouvez obtenir les données au format shapefile et utiliser le chargeur de shapefile, mais cela peut vous laisser sans toutes les données que vous voulez. Dans ce chapitre, nous allons apprendre à utiliser **osm2pgsql**, un programme en ligne de commande pour charger des données OSM brutes dans une base de données PostGIS.  

Nous allons suivre les étapes de la configuration de osm2pgsql sous Windows, bien que les étapes devraient être à peu près les mêmes sur un autre système d'exploitation, en supposant que vous avez configuré correctement votre ou vos bases de données PostGIS.  

Obtenir osm2pgsql
-------------

Pour télécharger la version Windows de osm2pgsql, naviguez dans votre navigateur Web jusqu'à <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Téléchargez le fichier nommé **osm2pgsql.zip**.  
- Décompressez le fichier sur votre système. Vous devez déplacer le dossier dézippé à un endroit où vous ne le déplacerez pas plus tard, car nous devons ajouter son emplacement au chemin d'accès du système.  

![unzip it][]

- Dans le répertoire osm2pgsql que vous avez décompressé se trouve un fichier appelé osm2pgsql.exe. Il s'agit d'un programme que nous allons exécuter pour importer les données, mais pour que Windows puisse le trouver, nous devons ajouter son emplacement au chemin du système. Cliquez sur le menu Démarrer et tapez " system path ".  

![system path][]

- Vous devriez voir une option appelée "Modifier les variables d'environnement du système". Cliquez dessus.  

![edit variables][]

- Vous devriez voir une option appelée "Modifier les variables d'environnement du système". Cliquez dessus.  

![env variables][]

- En bas, trouvez la variable nommée "**Chemin**" et cliquez sur "**Modifier...**".  

![find path][]

- Vous devez ajouter le répertoire où se trouve osm2pgsql.exe à la variable Path.  

![edit path][]

- Ajoutez un point-virgule à la fin du répertoire précédent, puis saisissez le chemin d'accès complet de osm2pgsql.exe. Par exemple, si vous placez le dossier **osm2pgsql** directement dans le répertoire **C:\\**, le chemin sera le suivant :  
	
**C:\osm2pgsql\Win32**  

- Cliquez plusieurs fois sur OK pour enregistrer les nouveaux paramètres.  
- **osm2pgsql** devrait fonctionner maintenant. Vérifions-le.  
- Ouvrez l'invite de commande Windows. Vous pouvez le faire en cliquant sur le menu Démarrer et en tapant "**cmd**". L'application Invite de commandes s'affiche et vous pouvez appuyer sur Entrée ou cliquer dessus.  

![cmd][]

- Dans la fenêtre de commande noire qui s'ouvre, tapez :  

**osm2pgsql**

- Si tout fonctionne correctement, vous devriez obtenir un message comme celui-ci :  

![osm2pgsql test][]

- Si vous ne voyez pas de message d'erreur comme celui-ci, et qu'il indique qu'il ne peut pas trouver l'application **osm2pgsql**, alors vous avez peut-être entré la variable Path de manière incorrecte.  

Acquisition de données brutes OSM
---------------------
Avant de pouvoir exécuter **osm2pgsql**, nous devons disposer de données OSM brutes à importer dans une base de données. Si vous n'avez pas déjà un fichier **.osm** que vous pouvez utiliser, essayez de télécharger un fichier sur <https://download.bbbike.org/osm/bbbike/>. Ce site héberge de nombreux extraits OSM pour différentes villes. Trouvez une ville à importer et téléchargez le fichier PBF correspondant. Les fichiers PBF sont des versions compressées des fichiers normaux **.osm**. Vous pouvez utiliser l'un des services d'extraction répertoriés dans le chapitre sur [l'obtention de données](/fr/osm-data/getting-data), si vous souhaitez obtenir les données brutes d'une autre zone.  

Obtenir le fichier de style
------------------
**osm2pgsql** nécessite l'utilisation d'un fichier de style personnalisé pour définir quelles étiquettes sont incluses dans la base de données pendant l'importation. Vous pouvez télécharger le fichier de style par défaut [ici] (/files/default.style).  

Importation de données
-------------------
Ouvrez PgAdmin III et créez une nouvelle base de données nommée **osm**, comme vous l'avez fait dans le chapitre précédent. Pour importer les données, nous allons exécuter le programme **osm2pgsql** via la ligne de commande. 

- Cliquez sur le menu Démarrer et tapez "cmd" et Entrée pour ouvrir l'invite de commande.  

![command prompt][]

Ici, nous allons exécuter l'application **osm2pgsql** avec plusieurs options. Nous devons au moins lui fournir :  

- L'emplacement du fichier de données OSM  
- Le nom de la base de données, et le nom d'utilisateur de la base de données.  
- Le fichier de style qui définit les balises OSM qui seront importées dans la base de données.  

Pour faciliter cette opération, nous avons placé notre fichier OSM dans le répertoire **C:\\**.  

- Tapez la commande suivante, en remplaçant l'emplacement du fichier OSM et du fichier de style par les vôtres.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Appuyez sur Entrée. Si tout se passe bien, le processus devrait commencer à fonctionner. Cela peut prendre quelques minutes pour que toutes les données soient chargées dans la base de données.  

![osm2pgsql output][]

- Si votre fichier OSM brut est volumineux, vous devrez peut-être ajouter de la mémoire supplémentaire au processus d'importation de osm2pgsql. Pour ce faire, ajoutez ce qui suit à la commande :  

      --cache 600

Le tester
-----------

Nous pouvons vérifier que l'importation a réussi et visualiser les données dans notre base de données à l'aide de QGIS.  

- Ouvrez QGIS et cliquez sur le bouton " Ajouter des couches PostGIS ".. ![qgis add postgis button][]{: height="24px"}

- Sous "Connexions" en haut, cliquez sur "**Nouveau**".  
- Donnez un nom à la nouvelle connexion. Sous database, tapez **osm** (le nom de votre base de données).  
- Entrez le nom d'utilisateur postgres et votre mot de passe ci-dessous.  

![connection settings][]

- Cliquez sur OK pour enregistrer les paramètres de connexion. Cliquez ensuite sur " Connexion " pour vous connecter à votre serveur PostgreSQL.  
- Cliquez à côté de "public" pour voir toutes les couches (tables) de votre base de données. Remarquez que osm2pgsql crée une table distincte pour les différents types d'objets - points, lignes et polygones. Il crée également une table de routes, qui ne contient que les routes principales.  

![postgis layers][]

- Sélectionnez une ou plusieurs des couches et cliquez sur "Ajouter". Si on vous le demande, choisissez WGS84 comme CRS.  
- Si tout se passe bien, vous verrez les couches que vous avez sélectionnées s'afficher dans QGIS.  

![osm in qgis][]



Résumé
-------

Lorsque vous souhaitez importer des données OpenStreetMap dans votre propre base de données, **osm2pgsql** est un outil formidable. Il peut être extrêmement utile lorsque vous avez besoin d'obtenir les données OSM les plus récentes et de personnaliser les attributs que vous souhaitez, ou lorsque vous travaillez sur des projets plus complexes.  

Un autre outil d'importation a été développé récemment, appelé [imposm] (http://imposm.org/), et offre une certaine vitesse et d'autres améliorations par rapport à osm2pgsql, bien qu'à ce jour il manque d'autres fonctions clés qui sont promises dans la version 3 d'imposom.  

Pour plus d'informations sur osm2pgsql, consultez le wiki OSM - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
