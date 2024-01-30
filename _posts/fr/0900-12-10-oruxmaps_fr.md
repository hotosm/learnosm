---
layout: doc
title: OruxMaps
permalink: /fr/mobile-mapping/oruxmaps/
lang: fr
category: mobile-mapping
---

OruxMaps
===============

> Révisé le 4 août 2016 et bien que légèrement périmé, il est toujours fonctionnel et contient un lien vers le manuel du logiciel du site.

Dans cette section, nous apprendrons comment configurer OruxMaps, comment créer des waypoints, comment voir un tracklog, et comment exporter un tracklog pour l'utiliser dans JOSM.  

Installer OruxMaps
------------------

Installez l'application à partir de Google Play Store en recherchant **OruxMaps**, OruxMaps devrait figurer parmi les premiers résultats de la recherche.  

![Search OruxMaps in Play Store][]

Cliquez sur le bouton **Installer** et appuyez sur Accepter après l'apparition des autorisations de l'application.  

![Install OruxMaps][]

Félicitations ! OruxMaps  est maintenant installé sur votre appareil !  

Utilisation de OruxMaps
--------------------

La première fois que vous exécutez l'application, vous verrez une notification comme celle-ci :  

![Running OruxMaps for the first time][]

Dans OruxMaps, vous pouvez choisir d'utiliser des cartes en ligne ou des cartes hors ligne. Il est préférable d'utiliser des cartes hors ligne car vous pouvez les utiliser même sans connexion Internet. OruxMaps vous proposera deux sources  pour télécharger des cartes hors ligne. Si vous avez déjà vos cartes hors ligne, vous pouvez aussi les mettre ici ! Au début, cela peut être un peu déroutant car il y a beaucoup de boutons. Mais ne vous inquiétez pas, vous verrez l'explication de chaque bouton ci-dessous :  

![Interface overview][]

Source : [OruxMaps Manual English Version](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Il se peut que ce manuel soit plus à jour que le présent guide et qu'il soit disponible dans d'autres langues.  

Vous pouvez changer votre cartographe de fond sous **Cartes \> Changer de carte**. Ensuite, vous avez le choix entre deux options : utiliser votre **Carte en ligne** ou utiliser 
**Cartes hors ligne**. OruxMaps fournit un grand nombre de sources de cartes en ligne que vous pouvez choisir, mais bien sûr, cela coûtera de l'argent à partir du plan de données de votre appareil.  Si vous voulez savoir où vous pouvez placer vos cartes hors ligne, vous pouvez aller dans **Paramétrage \>Cartes**. Dans l'option de répertoire de cartes, vous pouvez voir où OruxMaps a placé votre
cartes hors ligne. Par défaut, il se trouve dans le dossier **OruxMaps/Mapfiles** de votre stockage interne.  

![Offline maps storage settings][]

Commencer le suivi
--------------

Avant de commencer le suivi, passons en revue certains paramètres dans le cadre de la configuration du suivi/des itinéraires. Le premier paramètre est **Création automatique de GPX**. Si vous cochez cette option, OruxMap vous aidera à créer un fichier .gpx immédiatement après avoir terminé une trace (en utilisant la fonction Stop Tracking). Ainsi, après avoir terminé une trace, vous pouvez aller dans **OruxMaps/Tracklogs** dans votre stockage interne pour obtenir vos fichiers .gpx sans avoir besoin d'exporter votre journal de bord dans la gestion des traces/routes. Le deuxième paramètre est **Demander le nom de la piste**. Il est très utile de définir le nom de votre piste avant de commencer à tracer afin de connaître exactement le nom spécifique de vos pistes.  

![Tracklog settings][]

Pour commencer le suivi, une chose à retenir est que nous devons activer les fonctions GPS dans votre appareil. Toutes les fonctions d'OruxMaps comme **Start GPS** et **Start Rec** ne démarreront pas si vous n'activez pas les fonctions GPS. OruxMaps affichera une notification si votre GPS est toujours désactivé, et après cela vous irez directement à **Configuration de la localisation** dans votre appareil. Après avoir activé la fonction de localisation dans votre appareil, vous pouvez connaître votre position en utilisant la fonction **Démarrer GPS** (1) dans le panneau de droite. Une fois votre position acquise, vous pouvez commencer le suivi en utilisant la fonction **Start Rec.** (2) dans le panneau de droite.  

![Start track recording][]

Pour arrêter le suivi, il suffit d'appuyer sur le même bouton (2) dans le panneau de droite. Après avoir arrêté le suivi, OruxMap stockera votre tracklog dans une base de données interne. Vous pouvez accéder au tracklog en accédant au panneau **Routes** dans la page supérieure, sélectionnez **Gestion**.vous trouverez tous vos tracklogs ici et vous pouvez voir la route en appuyant sur le tracklog que vous voulez voir et sélectionnez **Chargez la piste** (1). Si vous n'utilisez pas la fonction de création automatique de GPX, vous pouvez exporter votre tracklog dans différents formats (GPX, KML, KMZ) en sélectionnant votre tracklog et **Exporter sous** (2).  

![Managing tracklogs][]

Si vous avez déjà un compte OpenStreetMap, vous pouvez transférer votre trace directement en utilisant OruxMaps. Avant de transférer votre tracklog, vous devez entrer votre nom d'utilisateur et votre mot de passe en allant dans **Setting \> Integration \> OpenStreetMap**. Ensuite, saisissez votre nom d'utilisateur et votre mot de passe. Vous pouvez transférer votre tracklog en utilisant **Transférer vers (3)** dans la gestion des voies/routes.  

Des fenêtres vont apparaître et vous devez sélectionner **OpenStreetMaps** (1) et ensuite choisir votre **Tracklog type** (2), mettre votre **Description** (3) et aussi le **Tag** (4). Après avoir rempli toutes les informations, cliquez sur **Transférer le GPX** (5). La notification s'affichera et vous pourrez directement voir vos traces GPS sur le site OpenStreetMap en sélectionnant **OK** (6).  

![Uploading tracks to OpenStreetMap][]

Ajout d'un point de repère
---------------------

![Creating a waypoint][]

Si vous voulez ajouter un waypoint, vous devez aller sur le symbole  **Waypoint** (1) en haut de la page et aller sur **Create**  (2). Cela vous amènera à la page de création du point de passage et vous pourrez y inscrire le nom de votre point de passage. Vous pouvez ajouter des informations supplémentaires, par exemple une description de votre waypoint et ses coordonnées en cochant la liste de contrôle Coordonnées. Appuyez sur Accepter pour sauvegarder votre waypoint.  

![Waypoint creation settings][]

Si vous voulez voir tous vos waypoints, vous pouvez aller sur **Waypoint \>Manage**. À partir de cette page, vous pouvez modifier les propriétés, supprimer et exporter le point de passage. Pour voir tous vos points de passage sur **carte**, sélectionnez-les et allez dans Afficher sur la carte (1) et si vous voulez exporter vos points de passage, appuyez sur **Exporter** (2). Tous vos waypoints exportés seront stockés dans le stockage interne (par défaut, ils sont stockés dans **oruxmaps/geocaches**).  

![Managing save waypoints][]

Résumé
-----------

Félicitations ! Vous savez déjà comment utiliser OruxMaps pour les enquêtes de terrain. C'est peut-être difficile la première fois, mais si vous continuez à l'utiliser, vous vous familiariserez avec cette application.  

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png
