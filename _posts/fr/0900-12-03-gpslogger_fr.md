---
layout: doc
title: GPSLogger pour Android
permalink: /fr/mobile-mapping/gpslogger/
lang : fr
category: mobile-mapping
---

GPSLogger pour Android
=====================


![GPSLogger][]

Une application simple, légère et minimaliste pour enregistrer des traces GPS sur la plateforme Android. L'interface facile à utiliser dans le seul but d'enregistrer des traces GPS et de rester tranquille en fait une application très économe en batterie qui peut enregistrer des traces GPS dans les formats de fichiers GPX, KML, NEMA ou texte. Les fichiers journaux peuvent être automatiquement téléchargés vers OpenStreetMap, un serveur OpenGTS, DropBox, un serveur FTP, un serveur HTTP ou envoyés à une adresse e-mail.  

<https://f-droid.org/en/packages/com.mendhak.gpslogger/>  

GPSLogger pour Android est une application gratuite à utiliser, et un projet open source activement maintenu. Les dons sont les bienvenus pour améliorer l'application. Si vous souhaitez vous impliquer (par exemple, en fournissant des traductions dans une autre langue, en signalant des bogues ou en soumettant des demandes de fonctionnalités), visitez le [repository](https://github.com/mendhak/gpslogger).  

> OpenGTS fait référence au projet [Open GPS Tracking System] (http://opengts.sourceforge.net/).  


Fonctionnalités
--------  

* Spécifier l'enregistrement sur la base d'intervalles de temps ou de distance  
* Configurations spécifiques d'économie de batterie  
* Filtre de précision GPS pour ne pas enregistrer les points non fiables.  
* Sélectionnez le wifi, les tours de téléphonie mobile et/ou les satellites GPS comme source d'information sur la localisation.  
* Enregistrement vers des fichiers GPX, KML, CSV, TXT ou NMEA avec support ZIP  
* Unités d'affichage impériales ou métriques  
* Démarrage automatique au démarrage  
* Peut fonctionner en arrière-plan  
* Fonctionne bien avec d'autres applications GPS en cours d'exécution  
* Envoi automatique par e-mail/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS à des intervalles définis par l'utilisateur.  
* Fichiers de configuration texte faciles à préconfigurer pour une distribution à de nombreux utilisateurs.  


Interface utilisateur
--------------------------

![Canvass1][]

Le bouton **Menu** offre plus d'options pour configurer l'application.  
Le menu déroulant **Vues** vous permet de choisir la manière dont les informations sont affichées à l'écran.  
Le bouton **Aide** fournit des informations supplémentaires sur la façon d'utiliser l'application.  
Le bouton **Annoter** vous permet d'ajouter une description à un point.  
Le bouton **Log one point** vous permet d'enregistrer manuellement un point de repère.  
**Chargez** vous permet de choisir parmi une variété d'options pour télécharger votre fichier journal. Cela inclut une option d'envoi automatique vers l'un des sites suivants :  

- OpenStreetMap,  
- Google Drive,  
- DropBox,  
- un serveur FTP,  
- un serveur OpenGTS ou  
- envoyer le rapport à une adresse électronique.  

Le bouton **Partager** vous permet de choisir un ou plusieurs fichiers journaux que vous pouvez partager avec d'autres personnes via Bluetooth ou SMS. Selon les applications installées sur votre appareil, différentes options peuvent s'offrir à vous.  


![Canvass2][]

Le bouton **Début de l'enregistrement** est en bleu. Lorsque vous appuyez sur ce bouton pour commencer l'enregistrement, il se transforme en bouton vert.  
Les **Coordonnées** affichent le dernier point GPS enregistré, et sont rafraîchies lorsqu'une nouvelle coordonnée est disponible.  
L'icône **Satellites** vous indique le nombre de satellites sur lesquels vous êtes fixé.  
Le **Elevation** montre les données d'élévation.  
La **Durée** affiche le temps total écoulé depuis que vous avez appuyé sur le bouton de démarrage.  
La **Distance** affichera la distance totale enregistrée.  
Les **Types de fichiers** indiquent le type de journaux qui sont générés, tandis que le **chemin d'accès au fichier** vous indique l'emplacement du fichier sur votre appareil ou votre carte mémoire.  
L'indicateur **Status** s'affiche en vert lorsque l'appareil est en train d'enregistrer, tandis qu'une vrille s'affiche lorsque l'appareil tente d'obtenir un correctif.  
La **Précision** affiche la précision des données enregistrées, qui varie selon les récepteurs, la position ou le nombre de satellites disponibles, les conditions météorologiques ou les obstructions de l'horizon.  
Le **Palier** vous indique la direction dans laquelle vous vous déplacez.  
La **Vitesse** vous donnera des informations approximatives sur la vitesse à laquelle vous allez.  
**Points enregistrés** affiche le nombre total de points enregistrés à partir du moment où vous avez appuyé sur le bouton de démarrage.  


Menus
--------------------------

![Menus][]

Les **Options générales** sont l'endroit où vous trouverez les paramètres pour *Démarrer au démarrage*, *unité de mesure* (métrique ou impériale), *fichier de débogage* et *information sur la version*.  

![Menus1][]

La section **Détails de journalisation** contient les paramètres suivants : *Formats de fichier* (plusieurs formats simultanément pris en charge), *dossier* chemin d'accès pour stocker les journaux, règles sur la *création de nouveaux fichiers* et *nom de fichier personnalisé*.  

![Menus2][]

![Menus3][]

Sous **Performance** se trouvent les paramètres pour les *fournisseurs de localisation*, les *temporisations*, les *filtres* et les *auditeurs*. L'option de fournisseur de localisation vous permet de définir les sources des données de localisation : **GPS** - satellites de navigation ; **Réseau** - tour cellulaire ; **Passif** - permet à GPSLogger "d'emprunter" les coordonnées de localisation qu'une autre application a demandées, pour économiser de la batterie en ne faisant pas la demande lui-même.  

![Menus4][]

![Menus5][]

**Envoi automatique, courriel et téléchargement** est l'endroit où se trouvent les paramètres des diverses options de téléchargement telles que OpenStreetMap, Google Drive, FTP, Dropbox.  

![Menus6][]

Le téléversement de traces GPS est un autre moyen de contribuer aux données du projet OpenStreetMap. Une trace est un enregistrement de votre position à divers intervalles de temps ou de distance, et enregistrée sous forme de coordonnées géographiques (longitude, latitude, altitude). Elles peuvent être utilisées comme couche d'arrière-plan lors de l'édition de cartes, et sont utiles pour ajouter des caractéristiques à la carte, de manière similaire à l'imagerie aérienne.  

#### Options OpenStreetMap

![osm0][]

Le paramètre **Autoriser l'envoi automatique** détermine si les fichiers journaux sont téléversés automatiquement.  
**Autoriser cette application** permet d'autoriser l'application à télécharger des traces GPS vers OSM, en utilisant votre compte OSM.  
Les options **Visibilité**, **Description**, **Balises** sont désactivées jusqu'à ce que vous autorisiez l'application à télécharger des traces GPS. Ces paramètres sont utilisés pour les traces GPS qui seront téléchargées dans la base de données OpenStreetMap.  
Lorsque vous cliquez sur le bouton *Autoriser cette application*, vous serez dirigé vers votre navigateur Internet et vers le site Web d'OpenStreetMap. Si vous n'êtes pas connecté, il vous sera demandé de fournir vos informations d'identification.  

![osm2][]

Après vous être connecté, vous voyez une page comme ci-dessous, pour vérifier la demande d'application, et la permission spécifique de *télécharger des traces GPS*. Cliquez sur le bouton *Sauvegarder les modifications* pour autoriser l'application.  

![osm3][]

De retour à l'application GPSLogger, l'écran sera légèrement différent, avec des options supplémentaires disponibles.

![osm1][]

En cliquant sur l'option **Supprimer l'autorisation**, vous supprimez l'autorisation de télécharger des traces GPS vers le serveur OSM.  

Il existe plusieurs options de *visibilité* pour les traces GPS. Les traces *Privées* sont partagées comme anonymes, avec des points non ordonnés. Les traces *Publiques* sont affichées dans la liste des traces, et en tant que points anonymes et non ordonnés. Les traces *Traçables* sont partagées de manière anonyme, avec des horodateurs pour les points ordonnés. Les traces *Identifiables* sont affichées dans la liste des traces, et peuvent être associées à votre nom d'utilisateur, avec des horodateurs pour les points ordonnés.  

Il est recommandé de définir la visibilité des traces GPS que vous téléchargez sur *identifiable*. Les données et les métadonnées les rendent plus utiles pour les autres cartographes. Si vous avez des préoccupations concernant la vie privée et la sécurité personnelle, choisissez des paramètres plus appropriés, ou ne téléchargez pas du tout les traces.  

Un texte *descriptif* aide les autres à comprendre comment une trace est enregistrée. Une trace enregistrée à pied ne sera pas similaire à une trace enregistrée par un drone.  

Une *balise* est un mot clé court qui peut être utilisé pour associer une trace à des projets, des lieux ou des événements.  


Collecte des données
---------------

### Collecte et chargement automatisés des traces gps

Une fois correctement configurée, l'application peut fonctionner en arrière-plan, enregistrer automatiquement les trajets et les télécharger une fois par jour vers l'un des services configurés. Cela permet de collecter automatiquement les traces de la conduite quotidienne afin de constituer une collection de données sur les routes et les temps de trajet pour une cartographie ou une analyse ultérieure. Une fois configuré, le détenteur du téléphone ou d'un autre appareil androïde devrait remarquer un léger impact sur l'utilisation de la batterie et ne pas avoir à faire quoi que ce soit manuellement. Une certaine expérimentation sera nécessaire pour trouver le bon équilibre entre l'utilisation de la batterie et la clarté des traces GPS.  

Par exemple, pour que la collecte et le téléversement sur OpenStreetMap soient automatiques et quotidiens, vous devez ajuster ces paramètres :  

#### Options générales  

* **Lancement au démarrage** - Activé   

#### Détails de l'enregistrement  

* **Enregistrement au format GPX** - Activé  
* **Création de nouveaux fichiers** - Une fois par jour  

#### Performance  

* **Temps avant l'enregistrement** - 5  
**Maintien du GPS entre les corrections** - Activé (La désactivation de cette option peut provoquer des "sauts" dans les traces GPS, car l'appareil a besoin des satellites GPS à chaque fois).  
* **Ne pas enregistrer si je ne bouge pas** - Activé  

#### Envoi automatique, e-mail et chargement  

* **Autoriser l'envoi automatique** - Activé  
* **Quelle fréquence** - Pour une fois par jour, entrez 1440 minutes. Ce paramètre peut être un peu délicat si vous n'avez pas accès aux données ou au wifi au moment où il s'exécute. Il doit commencer à compter à partir du moment où vous démarrez l'appareil ou appuyez sur le bouton " Démarrer l'enregistrement ", donc si vous le démarrez le matin, il téléchargera à la même heure le lendemain matin par exemple.  
* **OpenStreetMap** - Autorisez l'envoi automatique et tous les autres paramètres que vous souhaitez configurer, faites attention au paramètre de visibilité si vous avez des inquiétudes quant à la confidentialité des traces GPS.  


### Enregistrement manuel des traces

Pour commencer à collecter les journaux (en vue simple), il suffit de cliquer sur le bouton bleu. Une roue dentée apparaîtra près du coin supérieur droit de l'écran pour indiquer la tentative d'obtenir une position sur les satellites. Un cercle vert apparaîtra dans la partie supérieure droite de l'écran pour indiquer que la collecte des données est en cours.  

Pour arrêter l'enregistrement des données à tout moment, il suffit d'appuyer sur le bouton vert *Arrêter l'enregistrement*.  

#### Annotation  

Pour ajouter une note ou une description à un enregistrement, cliquez sur l'icône *Annoter* (crayon). Cette option vous permettra de laisser un texte pour décrire ou prendre note des détails qui sont associés au point actuel.  

##### Appeler une annotation à partir de la barre de notification  

Il est également possible d'appeler directement le bouton *Annoter* à partir de la barre de notification d'Android. Sélectionnez l'application dans la liste des notifications et cliquez sur le bouton *Annoter*.  

![annotate0][]

Cela affichera une boîte de dialogue de saisie dans laquelle vous pouvez entrer les détails du texte de la note.

![annotate1][]

#### Intervalles d'enregistrement

Les intervalles des enregistrements sont déterminés par le temps ou la distance dans le menu **Performance**.  

##### Par temps

Le **Temps avant enregistrement** est fixé à 60 secondes par défaut. Vous pouvez le modifier en le fixant à cinq ou dix secondes, si vous vous déplacez à pied plutôt qu'en voiture. Lorsque vous êtes en voiture, vous pouvez régler ce paramètre sur 1 seconde pour générer des enregistrements très précis.  

##### Par distance

Le **Filtre de distance** est réglé par défaut sur zéro. Vous pouvez le définir sur une autre valeur, si vous souhaitez enregistrer les coordonnées pour chaque nombre X d'unités à partir du dernier point enregistré.  


Téléversement des traces
------------------

#### vers OpenStreetMap

Appuyez sur le bouton *Charger* et sélectionnez l'option *OpenStreetMap*. Une fenêtre de dialogue apparaîtra où les fichiers sont disponibles pour la sélection. Choisissez ceux que vous voulez télécharger et cliquez sur le bouton *Ok*.  

![upload0][]

#### vers d'autres options

Il existe d'autres options de chargement que vous pouvez explorer, mais elles sortent du cadre de ce guide. Consultez le site Web du projet GPSLogger for Android pour plus de détails.  


Partage des traces 
---------------

Vous pouvez également partager les traces enregistrées ou votre position actuelle avec d'autres personnes. Les options de partage peuvent varier d'un appareil à l'autre, ou des applications installées sur un appareil. Vous trouverez ci-dessous un exemple de l'aspect de l'écran des options de partage :  

![share0][]


Exportation des traces vers un éditeur OpenStreetMap
--------------------------------------------

Lorsque vous avez fini d'enregistrer les traces, celles-ci peuvent être importées dans JOSM (ou dans un autre éditeur OpenStreetMap, comme iD).  

Connectez votre appareil Android à un ordinateur (vous pouvez également utiliser un câble de données, Bluetooth ou une connexion Internet) et copiez les traces GPX (et éventuellement les fichiers multimédia) que vous avez capturées. Dans le stockage de votre appareil, recherchez les traces GPX dans le dossier /Android/data/com.mendhak.gpslogger/files.  

Pour utiliser les pistes GPX avec les éditeurs JOSM et iD, il suffit de faire glisser les fichiers et de les déposer dans l'application (ou dans l'onglet du navigateur, pour iD).  

Pour plus de détails sur les utilisateurs d'iD, voir la section [Configuration de la couche de fond] (http://learnosm.org/en/beginner/id-editor/#configuring-the-background-layer).   

Si l'éditeur JOSM est utilisé, vous trouverez des instructions sur la manière d'utiliser la piste GPX, ainsi que les fichiers multimédia dans JOSM, dans la section [Ouvrir dans JOSM] (http://learnosm.org/en/mobile-mapping/using-gps/#open-in-josm).  

Pour les autres éditeurs OpenStreetMap, veuillez vous référer à la documentation de votre logiciel.  


Options d'affichage
-----------------

L'application peut être affichée de 3 façons différentes, celle qui vous semble la plus appropriée à votre utilisation :

#### Simple vue

![view0][]

#### Vue détaillée

![view1][]

#### Vue d'ensemble

![view2][]


Résumé
-------

Excellent ! Vous venez de découvrir une application légère et économe en batterie que vous pouvez garder dans votre appareil Android pour enregistrer des traces, que vous pouvez télécharger sur OSM ou utiliser avec votre éditeur OpenStreetMap préféré.  

GPSLogger pour Android est un autre outil permettant de collecter des données de terrain sans récepteur GPS dédié. La collecte occasionnelle de données sur le terrain est possible sans connexion Internet active.  

Prenez le temps de vous entraîner et de vous familiariser avec l'application avant de travailler avec des données réelles.  

Cette section a présenté le concept d'utilisation de GPSLogger pour Android pour la collecte de traces GPS, le téléchargement de traces vers OpenStreetMap et le transfert de ces journaux vers un PC.  


Documentation officielle de GPSLogger pour Android
--------------------------------------------

Le projet maintient une [FAQ] (http://code.mendhak.com/gpslogger/#faq) pour les questions fréquemment posées.

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png