---
layout: doc
title: Orbview-3 Importer de l’imagerie satellite sous JOSM
permalink: /fr/intermediate/using-orbview-imagery/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---


Orbview-3 : Importer de l’imagerie satellite sous JOSM
=======================================================

Introduction
------------

L’imagerie Bing est d’une grande utilité pour le projet OpenStreetMap,
car elle couvre la planète entière. Cependant, il y a certaines zones
qui ne sont pas encore couvertes par de l’imagerie Bing haute
résolution. Par ailleurs, même si la plupart des images de qualité sont
sans nuages, il vous arrivera parfois de trouver des zones où il est
plus difficile de numériser et de tracer bâtiments et routes en raison
de la couverture nuageuse. Ce double problème de qualité de l’imagerie
peut être surmonté en utilisant de l’imagerie aérienne appartenant au
domaine public. Les utilisateurs de Windows, pour pouvoir importer ces
images dans JOSM, doivent augmenter la mémoire dédiée à la plateforme
Java.

Dans ce chapitre, nous allons apprendre à télécharger gratuitement des
images Orbview-3 et les utiliser dans JOSM.

1. Ajouter de la mémoire de JOSM

2. Télécharger des images Orbview-3

3. Ajouter de l’imagerie aérienne en utilisant le greffon ¨ImportImage¨

1. Ajouter de la mémoire à JOSM
-------------------------------

Avant d'utiliser l’imagerie Orbview-3 dans JOSM, il est nécessaire
d’augmenter la mémoire allouée à Java. Si ce n’est pas fait, vous pouvez
voir s’afficher le message d’erreur suivant, possiblement en anglais :

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image09.png)

Cela se produit parce que la mémoire allouée à JOSM est limitée à 494
MB. Pour ajouter des images satellites, davantage de ressources mémoire
sont requises. Nous allons apprendre à augmenter la mémoire allouée à
JOSM:

- Vous devez chercher le fichier nommé "josm-tested.jar" dans le
répertoire de JOSM "josm-tested.jar" ou "josm-latest.jar" (pour les
éditions les plus récentes de JOSM).

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image23.jpg)

Recherchez le fichier jar executable apelé josm-tested.jar ou josm-lasted.jar.

- Créez un raccourci vers le fichier "josm-tested.jar" par un clic
droit de votre souris puis en sélectionnant "créer un raccourci", faites
ensuite glisser le raccourci sur le bureau.

- Cherchez l’emplacement du fichier "java.exe" en tapant "java.exe" ou
"java" dans la boîte de recherche du menu Démarrer, faites un clic droit
et sélectionnez Ouvrir l’emplacement du fichier.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image00.png)

Si les méthodes ci dessus sont sans succès, vous alors pouvez trouver le
fichier java.exe dans C:\\Windows\\System32 si vous avez un Windows 32
bits.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image03.png)

- Clic droit sur l’icône "josm-tested" sur le bureau et cliquez sur
Propriétés

- Dans l’option de type "cible" tapez C:\\WINDOWS\\system32\\javaw.exe
-jar -Xmx512M "C: \\ Program Files \\ JOSM \\ josm-tested.jar"

(Remarque : vous devrez peut être saisir "josm-latest.jar" plutot que
"josm-tested.jar".)

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image21.png)

En cas de réussite, la fenêtre de démarrage de l’application JOSM
devrait apparaître sur votre écran :

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image02.png)

Vous avez augmenté la mémoire allouée à JOSM.

2. Télécharger l’imagerie Orbview-3
-----------------------------------

Le satellite Orbview-3 a été lancé par ORIMAGE et de 2003 au 23 avril
2007, il a acquis jusqu’à 210 000 km² d’image satellite par jour.
Actuellement, une base données de ces images est disponible sur le site
USGS Earth Explorer. Les images panchromatiques (donc en Noir et Blanc)
ont une résolution spatiale de 1 mètre, tandis que les images
multi-spectrales (non proposées la plupart du temps) ont une résolution
de 4 mètres. Les images ont été prises à une altitude de 470 km. Même si
l’imagerie du programme Orbview-3 est ancienne (2003 à 2007), la
résolution est suffisamment bonne et toujours utile pour tracer des
routes et/ou l’emprise des infrastructures de base.

### A. Créer un compte d’utilisateur

- Allez à
[http://earthexplorer.usgs.gov/](http://earthexplorer.usgs.gov/) et
créez un compte. Cliquez sur le bouton Register en haut à droite.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image06.png)

- Vous serez invité à remplir les informations relatives à votre
compte d’utilisateur : affiliation de l'utilisateur, adresse et
confirmation. Dans la première fenêtre de connexion, vous devez entrer
votre nom d’utilisateur et le mot de passe qui sera utilisé pour vous
connecter à ce service de l’USGS.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image18.png)

- Remplissez les informations relatives au but pour lequel vous
utilisez ces images de l’USGS qui intéressent l’USGS. Vous pouvez
réutiliser les éléments de réponse ci-dessous si nécesssaire.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image22.png) ![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image07.png)

- Remplissez enfin vos coordonnées personnelles : nom, adresse,
courriel et numéro de téléphone. Cette étape terminée, vous devriez être
inscrit à ce service de l’USGS.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image12.png)

### B. Téléchargement de l’imagerie

- Une fois connecté à votre compte, vous avez la possiblité de télécharger
des images situées dans votre aire d’intérêt. Utilisez la boîte de
recherche sur la gauche de la page web ou votre souris sur la carte pour
faire une recherche de localisation. Si une erreur se produit, il vous
suffit de cliquer "Clear Criteria" sur le panneau droit, les critères de
recherche seront alors supprimés de votre zone de recherche et vous
pourrez ainsi sélectionner de nouveau votre zone d’intérêt.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image11.png)

- Une fois localisée votre zone d’intérêt et défini le niveau de zoom
pertinent pour votre recherche, vous pouvez définir à la souris votre
masque d’extraction ; ce faisant, en cas de besoin, vous pouvez
supprimer un point en cliquant sur la croix rouge dans la colonne de
gauche. Lorsque votre zone est sélectionnée, cliquez sur “Data Sets”
dans la partie inférieure gauche de la page.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image17.jpg)

Remarque : cette base de données exportera l’imagerie incluse dans votre
polygone de sélection sous forme d’une série de tuiles de 10 Mo chacune.
Assurez-vous de la précision de votre sélection pour gérer ce
téléchargement au mieux des ressources de votre connexion internet.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image20.png)

- Une liste de plusieurs fournisseurs d’images s’affiche, il convient
de ne retenir que l’imagerie du domaine public, car c’est une licence
compatible avec la license Creative Commons Open Database License (ODbL)
d’OpenstreetMap. Sélectionner dans la colonne de gauche les images de
type Orbview-3 et choisissez l’image la plus adaptée à la zone que vous
voulez cartographier.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image13.png)

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image16.png)

Dans la colonne de gauche, il y a plusieurs menus pour afficher
l’imagerie Orbview-3.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image15.png)

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image04.png)

- Lorsque vous avez sélectionné une ou plusieurs images à télécharger,
vous devez choisir un format de téléchargement. Le format GIS Ready
Bundle est ici le plus adapté à nos besoins. Les autres sont soit très
lourds ou sont dépourvus de géoréférencement. Sélectionnez votre option
de téléchargement en cliquant sur : ¨Select Download Option¨.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image05.jpg)

- Une fois l’image téléchargée, il vous faut extraire les fichiers
dans un dossier. Vous devriez obtenir (3) trois fichiers comme ceci :

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image01.png)

Vous avez téléchargé les images et nous allons maintenant les ajouter
dans JOSM.

3. Ajouter l’imagerie Orbview-3 dans JOSM avec le greffon ¨ImportImagePlugin¨
-------------------------------------------------------------------------------

### A. Télécharger le greffon

Pour ouvrir les images dans JOSM, vous devez télécharger le greffon
"ImportImagePlugin".

Ouvrez JOSM, cliquez sur Modifier→ Préférences→ Greffons→ Recherchez et
installez "ImportImagePlugin".

Cliquez sur Ok et redémarrez JOSM.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image14.png)

### B. Modifiez les paramétres

Une fois JOSM redémarré, vous devez configurer dans JOSM votre
environnement de travail dans le système de référence spatial UTM
correspondant à l’image téléchargée.

Dans les Préférences, sélectionnez la section relative au paramétrage de
la carte (image quadrillage) → Carte projection → Sélectionnez la
projection et cliquer sur OK. Vous n'avez pas besoin de redémarrer JOSM.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image08.png)

(En cas de doute sur le système de référence spatial de l’imagerie
téléchargée, vous pouvez utiliser le logiciel QGIS. Pour cela, charger
l’image comme une couche raster dans QGIS et consultez les propriétés.
Si besoin, QGIS vous permet aussi de changer le système de référence
spatial).

Une fois l’image correctement projetée, vous pouvez maintenant l’ouvrir
dans JOSM. Cliquez sur Fichier→ Importer l’image et ouvrez le fichier
jpeg de l’image Orbview-3 téléchargée précédemment.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image01.png)

Attendez jusqu’à ce que l’image s’ouvre dans JOSM. L’imagerie Orbview-3
est panchromatique et s’affiche donc en Noir et Blanc. Les routes, les
rivières et les bâtiments sont néanmoins visibles.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image10.png)

Une fois l’image chargée dans JOSM, téléchargez les données OSM pour
commencer votre session d’édition en mettant à profit cette nouvelle
source d’imagerie.

![image](/images/fr/0300-12-28-using-orbview-imagery-in-josm/image24.png)

Résumé
--------

Au terme de ce chapitre, vous devriez être maintenant en mesure
d’ajouter des images satellites Orbview-3 à l’aide du greffon
“ImportImagePlugin” qui peut être utilisé pour d’autres types et formats
d’imagerie aériennes du domaine public.

Derniers Rappels
-----------------

1. Comme toujours dans OSM, vous ne devez travailler qu’avec de
l’imagerie aérienne dont les licences ou les droits dont vous bénéficiez
sont compatibles avec la licence Creative Commons ODbL utilisée par le
projet OSM.

2. Les images satellites doivent comporter un fichier de
géoréférencement. Assurez-vous de connaître le système de référence
spatial de l’imagerie satellite et assurez-vous des options de
paramétrages de votre carte dans JOSM.

3. Quand vous réutiliserez l’imagerie Bing, assurez-vous que les
paramètres de projection de votre carte dans JOSM sont de nouveau
Mercator WGS 84.
