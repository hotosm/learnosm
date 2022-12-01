---
layout: doc
title: Configuration de PostgreSQL
permalink: /fr/osm-data/postgresql/
lang: fr
category: osm-data
---

PostgreSQL & PostGIS
====================


Dans ce chapitre, nous verrons comment configurer PostgreSQL sous Windows et comment créer une base de données dans laquelle vous pourrez stocker des données géographiques. Nous utiliserons le logiciel SIG open source QGIS dans ce chapitre, il sera donc utile que vous le connaissiez déjà. Dans le chapitre suivant, nous verrons comment importer des données OpenStreetMap dans une base de données PostgreSQL.  

Installation de PostgreSQL et PostGIS
----------------------------------

Dans cette section, nous allons installer PostgreSQL, puis ajouter les extensions spatiales PostGIS. Cette installation est assez facile à réaliser à l'aide du programme d'installation en un clic. Naviguez dans votre navigateur Web jusqu'au site Web de PostgreSQL et la page de téléchargement <http://www.postgresql.org/download/>.  

![postgresql website][]

Vous y trouverez des instructions d'installation pour différents systèmes d'exploitation. Cliquez sur le lien "**Windows**".  
Cette page explique ce que fait l'installateur en un clic. Il va installer trois composants différents :  

* **Serveur PostgreSQL** : Le logiciel de base de données, le composant central  
* **pgAdmin 4** : L'interface graphique pour gérer vos bases de données  
**StackBuilder** : Un outil pour ajouter des applications supplémentaires ; nous l'utiliserons pour ajouter les extensions PostGIS.  

Cliquez sur **Télécharger**.  

![postgresql download][]

Vous verrez plusieurs options d'installation différentes pour différentes versions du logiciel PostgreSQL. Téléchargez la version la plus récente pour votre version de Windows.

![postgresql version][]

Une fois le téléchargement terminé, exécutez le programme d'installation en un clic.  

![install 1][]

Cliquez sur "**Suivant**" pour naviguer dans l'assistant d'installation. Les options par défaut devraient convenir. Vous devrez fournir un mot de passe pour le premier utilisateur de la base de données (l'utilisateur est postgres). Cet utilisateur a des privilèges de super-utilisateur, ce qui signifie qu'il peut faire ce qu'il veut, alors n'oubliez pas le mot de passe que vous utilisez !  

> Vous pouvez créer autant de bases de données que vous le souhaitez avec Postgresql. Vous pouvez avoir besoin d'une base de données pour vos données géographiques et de bases de données distinctes pour d'autres projets sur lesquels vous travaillez. Et vous pouvez vouloir que différentes personnes aient différents types d'accès à ces bases de données. À cette fin, chaque base de données que vous créez utilise le concept d' **utilisateurs** et de **rôles**. Une base de données doit toujours appartenir à un utilisateur, et cet utilisateur a généralement besoin d'un mot de passe pour pouvoir apporter des modifications à la base de données. D'autres utilisateurs peuvent être autorisés à accéder à une base de données, et certains rôles peuvent leur être attribués. Par exemple, un utilisateur de la base de données peut uniquement lire les informations de la base de données, mais ne peut pas les modifier. Ou encore, vous pouvez vouloir un utilisateur qui peut ajouter des données, mais qui n'a pas le droit de les supprimer. Avec les utilisateurs et les rôles, c'est possible. Pour l'instant, nous n'allons pas trop nous préoccuper de cela, retenez simplement que votre base de données appartient à un **utilisateur**, et que pour accéder à la base de données, vous aurez besoin du nom et du mot de passe de l'utilisateur. Le premier utilisateur que nous créons (nommé postgres) est un **superutilisateur**, ce qui signifie qu'il a la permission de tout faire avec les bases de données.  

Après avoir cliqué sur l'assistant et accepté les options de configuration par défaut, l'assistant va tout installer pour vous. Cela peut prendre quelques minutes.  

Une fois l'installation terminée, l'assistant vous demandera si vous souhaitez lancer StackBuilder, qui est l'utilitaire qui nous permettra d'installer PostGIS. Assurez-vous que la case est cochée avant de cliquer sur "**fini**".  

![install 2][]

Maintenant que nous avons réussi à installer PostgreSQL, nous devons ajouter les extensions PostGIS. Lorsque l'assistant StackBuilder s'ouvre, sélectionnez votre installation PostgresSQL dans le menu déroulant et cliquez sur **Suivant**. Cela ressemblera à quelque chose comme ceci :  

![install 3][]

Ouvrez l'onglet "Extensions spatiales" et cochez la case à côté de PostGIS. À l'heure où nous écrivons ces lignes, la version la plus récente de PostGIS est la 2.1.  

![install 4][]

Cliquez sur **Suivant** pour télécharger les extensions et les installer. Lorsque vous y êtes invité, cliquez sur "**J'accepte**" pour accepter les termes et conditions.  

Le programme d'installation de PostGIS pose davantage de questions, mais les options par défaut conviennent généralement. Vous pouvez lui demander de créer automatiquement la première base de données, mais nous allons apprendre à le faire nous-mêmes par la suite. Pour commencer l'installation de PostGIS, vous devrez fournir le mot de passe postgres que vous avez créé lorsque vous avez installé PostgreSQL.  

![install 5][]

Si l'on vous demande d'enregistrer la variable d'environnement **GDAL_DATA**, cliquez sur "**Oui**".  

![install 6][]

Lorsque l'installation est terminée, cliquez sur "**Fermeture**", puis sur "**Finis**".  

Création d'une base de données
--------------------

Maintenant que nous avons installé tous les logiciels nécessaires, nous allons créer une base de données. Nous utiliserons pgAdmin 4, qui est un client graphique de base de données utile pour interroger et modifier les données de la base.
bases de données.  

![pgadmin3][]

PgAdmin 4 est le client officiel de PostgreSQL et vous permet d'utiliser le langage SQL pour manipuler vos tables de données. Il est également possible de créer et de manipuler des bases de données à partir de la ligne de commande, mais pour l'instant, pgAdmin 4 est un moyen facile de démarrer.  

Ouvrez pgAdmin 4. Il devrait se trouver dans le menu Démarrer sous Tous les programmes -> PostgreSQL 9.3 > pgAdmin 4.  

![pgadmin3 start][]

Dans le panneau de gauche sous Serveurs, cliquez avec le bouton droit de la souris à l'endroit où il est indiqué PostgreSQL et cliquez sur "**Connect**".  

![postgresql connect][]

Saisissez le mot de passe de l'utilisateur postgres que vous avez créé lors de l'installation du logiciel. N'oubliez pas que le nom d'utilisateur et le mot de passe sont nécessaires pour pouvoir créer et accéder à une base de données.  

![enter password][]

Cliquez avec le bouton droit de la souris sur **Bases de données** et sélectionnez **Nouvelle base de données**...  

![new database][]

Vous devez saisir quelques informations pour créer la nouvelle base de données : le nom et le propriétaire. Dans l'onglet Propriétés, donnez un nom à la nouvelle base de données. Dans cet exemple, nous nommons notre base de données gisdb. Nous devons également donner un propriétaire à notre base de données. Puisque nous n'avons qu'un seul utilisateur pour le moment, donnons à notre base de données le propriétaire postgres. (Remarque : pour des raisons de sécurité, c'est généralement une bonne idée de créer des utilisateurs sans la permission du superutilisateur, mais pour l'instant nous ne nous en soucierons pas).  

![new database form][]

<!-- Sous l'onglet Définition, conservez les valeurs par défaut, mais à côté de Modèle, sélectionnez Modèle_postgis. Cela va créer notre base de données avec les colonnes spatiales appropriées.. -->

Cliquez sur **OK** pour créer la base de données. Vous verrez maintenant votre base de données listée sous "**Databases**". Nous devons maintenant exécuter une commande pour activer la base de données avec les extensions PostGIS. Cliquez sur ![sql button][]{ : height="24px"} en haut de PgAdmin 4.  



Dans la fenêtre de requête, tapez :  

**CREER UNE EXTENSION postgis;**  

Cliquez ensuite sur le bouton "**Exécuter la requête**".  

![postgis command][]

Charger des données échantillons (facultatif)
---------------------------

Si vous êtes à l'aise jusqu'à présent et que vous êtes familier avec QGIS, suivez-nous pendant que nous chargeons certaines données dans notre nouvelle base de données. Pour ce faire, nous allons utiliser un utilitaire qui convertit les fichiers de forme et les charge dans la base de données.  

Assurez-vous que votre nouvelle base de données est sélectionnée dans le panneau de gauche et allez dans **Plugins -> PostGIS Shapefile and DBF loader 2.x**.

![shapefile loader][]

-	Cliquez sur "**Ajouter un fichier**" et trouvez un fichier de forme sur votre système de fichiers.
-	Si vous ne disposez pas de fichiers de forme, vous pouvez télécharger un échantillon [ici] (/files/buildings_sample.zip).
-	Une fois que vous avez sélectionné un fichier, cliquez sur "**Importation**". Si tout se passe bien, la sortie indiquera "**Importation du fichier Shapefile terminée**".

![add shapefile][]

Maintenant, nous allons charger les données de notre base de données dans l'application QGIS. Si vous n'avez pas QGIS, vous pouvez le télécharger sur le [site web de QGIS] (http://www.qgis.org/site/forusers/download.html).  

-	Ouvrez QGIS et cliquez sur le bouton ![qgis add postgis button][]{ : height="24px"}.  
-	Sous "Connexions" en haut, cliquez sur "**Nouveau**".  
-	Donnez un nom à la nouvelle connexion. Sous base de données, tapez **gisdb** (ou le nom que vous avez donné à votre base de données). Entrez le nom d'utilisateur postgres et votre mot de passe ci-dessous.  

![connection settings][]

-	Cliquez sur **OK** pour enregistrer les paramètres de connexion. Cliquez ensuite sur " Connexion " pour vous connecter à votre serveur PostgreSQL. Vous devrez peut-être entrer à nouveau votre nom d'utilisateur et votre mot de passe.  
-	Si tout se passe bien, vous verrez la couche du fichier de forme (ou plusieurs couches avec différents types de caractéristiques) que vous avez chargée dans la base de données disponible ici. Sélectionnez une couche et cliquez sur "**Ajouter**" pour l'ajouter à votre carte.  

![your data layer][]

Lorsque vous ajoutez la couche, vous devez sélectionner un système de coordonnées pour afficher les données. Vous voudrez probablement sélectionner WGS 84, qui est le système de coordonnées utilisé par OpenStreetMap.  

> La couche se comporte de la même manière que si vous aviez chargé un fichier de forme directement dans QGIS. La seule différence est que si vous modifiez la couche, les changements seront enregistrés dans votre base de données.  

Résumé
-------

Maintenant que vous avez vu comment configurer PostgreSQL et PostGIS, ainsi que comment créer une nouvelle base de données, vous êtes prêt à essayer les utilitaires qui nous permettent d'importer des données OSM brutes dans une base de données. Nous verrons cela dans le [prochain chapitre] (/fr/osm-data/osm2pgsql).  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







