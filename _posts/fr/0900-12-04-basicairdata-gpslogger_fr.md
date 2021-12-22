---
layout: doc
title: Logger GPS BasicAirData
permalink: /fr/mobile-mapping/basicairdata-gpslogger/
lang: fr
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

Revu le 20 décembre 2021

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger est une application simple à utiliser pour enregistrer votre position et votre chemin. C'est un traceur GPS axé sur la précision avec un souci d'économie d'énergie. Cette application est très précise pour déterminer votre altitude si vous activez la correction automatique d'altitude EGM96 dans les paramètres. Vous pouvez enregistrer tous vos trajets, les visualiser dans votre visionneuse externe préférée (elle doit être installée) directement à partir de la liste et les partager aux formats KML, GPX et TXT de nombreuses façons. 

L'application est disponible pour les appareils Android, gratuit et open-source.

Cette application est librement téléchargeable sur [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).
Comme alternative, le fichier APK est directement téléchargeable sur le [dépot GitHub](https://github.com/BasicAirData/GPSLogger/tree/master/apk) de GPSLogger.

Fonctions
--------

![BasicAirData-GPSLogger-000][]

* Enregistrement de traces - l'application n'a pas de cartes intégrées
* Une interface moderne avec un thème sombre basse-consommation et une interface à onglets
* Enregistrement au premier plan et en arrière-plan (sur Android 6+ désactivez toutes les fonctions de surveillance et d'optimisation de la batterie pour cette application)
* Création de repères aussi lors de l'enregistrement
* Visualisation des informations GPS
* Correction manuelle de l'altitude (ajout d'un décalage global)
* Correction automatique de l'altitude basée sur le modèle géoïde de la terre NGA EGM96 (doit être activée dans les paramètres)
* Suivi des statistiques en temps-réel
* Liste des traces dans l'app montrant la liste des traces enregistrées
* Visualisation de vos traces à l'aide de n'importe quelle visionneuse KML/GPX installée, directement à partir de la liste de traces
* Exportation des traces dans le dossier /GPSLogger de votre appareil, en KML, GPX et TXT
* Partage de traces, au format KML, GPX et TXT, via e-mail, Dropbox, Google Drive, FTP,...
* Utilisation des unités métriques, impériales ou nautiques

Utilisation de base
-----------

![BasicAirData-GPSLogger-001][]

Si la localisation GPS n'est pas active sur votre téléphone, activez-la. Ensuite, allez dans une zone dégagée et lancez GPS Logger.

1. Attendez que l'application trouve le signal. Lorsqu'il est disponible, l'onglet __GPS FIX__ commencera à afficher les coordonnées du FIX. À ce stade (si possible), vous devez attendre au moins une minute avant de passer à la phase suivante afin de permettre au signal de se stabiliser
2. Cliquez sur le bouton __Enregistrer__ du panneau inférieur pour commencer à enregistrer les points de suivi. Le bouton deviendra rouge. activer et désactiver le processus d'enregistrement à tout moment en cliquant sur ce bouton. En haut du bouton, l'application affiche le nombre de trackpoints enregistrés.
Vous pouvez accéder à l'onglet __TRACK__ pour visualiser en temps réel les statistiques de votre trajet.
3. Lorsque votre excursion est terminé, cliquez sur le bouton __Stop__ pour finaliser (finir) la piste/track active. Une boîte de dialogue apparaîtra, cliquez sur __OK__ pour confirmer.
4. Allez dans l'onglet __TRACKLIST__, où vous trouverez la piste que vous venez d'enregistrer. Appuyez sur la piste. Un menu apparaîtra. Vous pouvez choisir de partager la piste de plusieurs manières, de la visualiser à l'aide d'un viewer externe, de modifier les détails de la piste, de l'exporter dans le dossier /GPSLogger de votre smartphone ou de la supprimer de la liste des pistes. Les formats utilisés pour l'exportation peuvent être configurés sur l'écran des paramètres.

Importation de traces GPX dans l’Éditeur OpenStreetMap
--------------------------------------------

Lorsque vous avez terminé de collecter des données de terrain, vous pouvez importer les traces GPX pour une utilisation dans JOSM, ID ou un autre éditeur OpenStreetMap.
Vous pouvez utiliser cette procédure simple en 2 étapes :

1. Enregistrez la trace GPX sur votre ordinateur personnel de l'une des manières suivantes :
* Allez sur la liste des traces de GPS Logger, appuyez sur la trace désirée, puis cliquez sur __Export__ ; le fichier GPX sera créé et enregistré dans le dossier /GPSLogger de votre appareil Android (assurez-vous que le format GPX est activé sur l'écran des paramètres). Ensuite, connectez le téléphone à votre PC à l'aide d'un câble USB et déplacez (ou copiez) vos traces GPX sur votre PC à l'aide du Gestionnaire de fichiers ;
* Sinon, vous pouvez utiliser la fonctionnalité __Share__ pour envoyer le fichier au PC (vous pouvez le faire par e-mail, FTP ou en utilisant de nombreux services cloud). Les possibilités de partage dépendent des applications tierces installées sur votre appareil Android ;
2. Importez la trace GPX dans votre éditeur OpenStreetMap : utiliser les traces GPX avec les éditeurs JOSM et iD est facile en faisant glisser les fichiers et en les déposant dans l'application (ou l'onglet du navigateur, pour iD).

Documentation Officielle
----------------------

- Pour plus d'informations sur cette application, vous pouvez lire [cet article] (http://www.basicairdata.eu/projects/android/android-gps-logger/) (en Anglais). <br>
- [Ici] (http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) (en Anglais) vous pouvez trouver un guide de démarrage et un aperçu des paramètres de l'application. <br>
- Vous rencontrez des problèmes lors de l'utilisation ou de la configuration de GPS Logger ? Lisez la page [Foire aux questions] (https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) (en Anglais) !

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg