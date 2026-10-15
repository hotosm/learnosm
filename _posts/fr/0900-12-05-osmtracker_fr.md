---
layout: doc
title: OSMTracker
permalink: /fr/mobile-mapping/osmtracker/
lang: fr
category: mobile-mapping
---

OSMTracker
==============

  
**Cet article concerne le traqueur OSM pour Android - il existe un produit similaire pour Windows Mobile**.  
OSMTracker permet la création d'une trace gpx d'un voyage, avec la collecte de "waypoints" le long de l'itinéraire. Des enregistrements vocaux, des photographies et d'autres notes peuvent également être enregistrés, et tous seront géolocalisés.

Démarrage rapide
-----------

![OSMTracker_1][]  

1. Cliquez sur la croix pour créer une nouvelle piste.  
2. L'écran change pour afficher les boutons - attendez qu'ils ne soient plus grisés, ce qui indique que le GPS a une position.  
3. Parcourez votre itinéraire en appuyant sur les boutons appropriés lorsque vous vous trouvez exactement au niveau de l'élément à cartographier. Vous pouvez également créer des enregistrements vocaux, prendre des photos et des notes à l'aide des boutons.  
4. Lorsque vous avez terminé, appuyez sur l'icône de la disquette pour sauvegarder votre trace et vos waypoints.  
5. Pour convertir la piste en fichier gpx, appuyez et maintenez-la dans la liste, puis sélectionnez l'option appropriée.  
6. Transférez les traces, les photos et les enregistrements sur votre ordinateur et lisez-les pour mettre à jour OSM.  


Installer OSMTracker
-------------------------

Installez OSMTracker depuis le site [F-Droid] (https://f-droid.org/en/packages/net.osmtracker/).  
![OSMTracker Logo][]  


Configuration de l'OSMTracker
------------------------

Démarrez OSMTracker et appuyez sur l'icône de menu de votre appareil Android, puis sélectionnez **Paramètres**.  

- **Durée de l'enregistrement vocal** - à votre choix, mais l'auteur utilise 30 secondes.  
- **Activer le son** - il est recommandé de cocher cette case - émet un bip pour vous avertir du début et de la fin de l'enregistrement vocal.  
- **Réinitialiser l'authentification**. Ce bouton sera "grisé" jusqu'à ce que vous ayez téléchargé un fichier .gpx et autorisé OSMTracker à télécharger des traces sur votre compte OpenStreetMap.  
- **Paramètres GPS** Méthodes utilisées par votre appareil Android pour déterminer l'emplacement. Il est recommandé de régler cette option sur **Haute précision**. L'appareil utilisera alors le GPS, le Wi-Fi et les réseaux mobiles pour estimer l'emplacement.  
- **Vérifiez le GPS au démarrage** Lorsque vous démarrez OSMTracker, si le GPS a été désactivé, le programme vous invite à le réactiver.
- **Ignorer l'horloge GPS** Si cette case est cochée, l'horloge interne de l'appareil sera utilisée au lieu de l'heure fournie par le signal GPS.  
- **Intervalle d'enregistrement GPS** Choisissez la période entre l'enregistrement de la position - pour une meilleure précision, sélectionnez 0 ou 1, chacune de ces valeurs entraînant un enregistrement chaque seconde.  

> La fréquence affecte l'utilisation de la batterie, mais lorsque vous utilisez cette application, votre écran est susceptible d'être allumé la plupart du temps, le GPS fonctionne, et vous pouvez prendre des photos et des enregistrements aussi - tous ces éléments entraîneront une forte consommation de la batterie et il est recommandé pour une utilisation prolongée d'utiliser l'appareil avec la puissance augmentée.  

- **Répertoire de stockage externe (SD)** La valeur par défaut est /osmtracker  

> La plupart des appareils Android récents ne permettent pas l'enregistrement de données sur une carte microSD ou SD externe. Bien que l'on parle de "stockage externe", les pistes, etc. seront en fait enregistrées dans **/storage/emulated/0/osmtracker.**.  

- **Un répertoire par piste** Recommandé car ainsi tous les enregistrements vocaux, les photographies, les notes de texte et la trace gpx seront stockés dans le même dossier, nommé avec la date et l'heure de création du fichier gpx.  
- **Nom de fichier pour les pistes nommées** Options parmi lesquelles vous pouvez choisir si vous avez une préférence pour le nom des fichiers.  
- **Précision dans le fichier GPX** Recommandé - le nom du point de repère comprendra un chiffre approximatif de la plage d'erreur possible en mètres. Par exemple *Piste à pied (4.0m)*. Cette information peut s'avérer extrêmement utile plus tard lors de la mise à jour d'OSM, et pour décider s'il faut déplacer un élément existant pour l'aligner sur la nouvelle trace et les nouveaux points de repère.  
- **Utiliser l'approximation HDOP** Concerne les calculs supplémentaires visant à améliorer la précision de la position (dilution horizontale de la précision).  
- **Exportation de l'orientation de la boussole** Définit si et comment les données de la boussole doivent être exportées vers le fichier GPX.  
- **Source de photos par défaut** Généralement, vous prenez des photos avec l'appareil photo via cette application, mais vous pouvez choisir d'utiliser des photos déjà présentes sur le téléphone.  
- **Écran toujours allumé** Sélectionnez cette option si vous êtes constamment en train de cliquer sur des boutons, de prendre des photos ou de faire des enregistrements vocaux. Si ce n'est pas le cas, laissez cette option vide pour que vous deviez allumer l'écran à chaque fois, ce qui consomme moins de batterie.  
- **Thème graphique de l'écran principal** Options permettant de modifier le contraste et la luminosité de l'écran si vous avez des difficultés à visualiser les boutons.  
- Vous pouvez concevoir et installer votre propre ensemble de boutons et choisir de les afficher en utilisant cette option. Pour une description complète de cette fonction, [voir ci-dessous](/fr/mobile-mapping/osmtracker/#button-presets).   
- **Carte d'arrière-plan** En appuyant et en maintenant la pression sur une piste enregistrée, si cette fonction est sélectionnée, vous pouvez afficher la piste et l'application téléchargera les données OpenStreetMap en arrière-plan.  

> Cette fonction nécessite une connexion de données pour télécharger la carte. Vous n'avez pas besoin d'utiliser cette fonction, sauf si vous le souhaitez.  

- **Fournisseur de tuiles de carte** Si vous avez choisi de télécharger des données cartographiques comme arrière-plan lorsque vous affichez la carte, vous pouvez choisir la version de la carte à utiliser comme arrière-plan.  
- **Orientation** Voulez-vous que l'écran pivote, ou l'utiliser en mode paysage ou portrait ?  

La liste des pistes
--------------

![OSMTracker_2][]  
Après avoir effectué votre enquête initiale, en cliquant sur des boutons, en créant des enregistrements vocaux et en prenant des photos, lorsque vous avez terminé, cliquez sur l'icône de la disquette pour terminer votre piste. Maintenant, appuyez et maintenez la piste dans la liste & les options deviennent disponibles :  

- **Resume Tracking** utile lorsque vous vous rendez compte que vous avez manqué quelque chose !  
- **Affichage** affichera la piste, éventuellement avec un fond de carte en fonction de votre connexion de données et de l'option que vous avez sélectionnée dans **Fond de carte**.  
- **Exportation au format GPX** - nécessaire pour que la trace et les waypoints puissent être utilisés dans un programme d'édition.  
- **Transférer vers OpenStreetMap** Utilisez cette option pour télécharger votre trace vers OpenStreetMap - vous devrez avoir un compte OpenStreetMap ([Comment l'obtenir expliqué ici](/fr/beginner/start-osm/)), et devrez autoriser cette application à télécharger les traces vers votre compte. Voir [Traces GPS - fichiers gpx ci-dessous](/fr/mobile-mapping/osmtracker/#gps-traces--gpx-files) pour plus d'informations sur la raison pour laquelle ces traces sont si importantes pour OpenStreetMap.  

> Vous n'avez téléchargé que la trace de base et non les waypoints, les photos, etc. Conservez tout jusqu'à ce que vous le transfériez sur un ordinateur pour le modifier.  

- **Suppression**. Une explication facile.  


Préréglages des boutons
--------------

Si vous effectuez des relevés pour une raison particulière et que l'étiquette de point de repère dont vous avez besoin n'est pas disponible, vous pouvez créer votre propre ensemble de boutons prédéfinis avant votre sortie, les charger dans le téléphone et les sélectionner pendant vos relevés lorsque vous en avez besoin - plusieurs peuvent être chargés dans le téléphone et vous pouvez passer de l'un à l'autre sans arrêter votre enregistrement. Comme l'étiquette que vous créez se présente sous la forme d'une note personnelle, elle n'a pas besoin de se conformer aux balises utilisées dans OpenStreetMap et ne sera pas téléchargée vers celui-ci. Par exemple, vous pouvez choisir d'étiqueter des boutons ;  

- 1 famille,  
- 2 familles,  
- 3 familles,  
- 4 familles,  
- la maison des chefs,  
- 20% endommagé,  
- 40% endommagé,  
- 60% endommagé,  
- 80% endommagé,  
- détruit,  
- ne convient pas aux camions,  
- 4 roues motrices nécessaires,  
- etc..  

Pour une description complète de la création d'un bouton prédéfini, consultez la [section wiki OSMTracker](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). Il s'agit d'un [exemple de fichier à télécharger](/files/R_of_Way.xml).  

![OSMTracker button presets][]  


Enregistrements vocaux, tailles des photos et des images de texte  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

Si le transfert de fichiers à un stade ultérieur pose problème, faites attention à la taille des fichiers concernés - comme le montre la capture d'écran, les photographies sont très gourmandes en mémoire par rapport au fichier gpx ou à un enregistrement vocal de 10 secondes.  


Traces GPS - fichiers gpx
----------------------  

![OSMTracker JOSM][]  

Les traces GPS sous forme de fichiers gpx sont constituées d'un certain nombre d'éléments, principalement une 'trace' et des 'waypoints'. La capture d'écran ci-dessus montre le contenu d'un dossier créé dans OSMTracker qui a été chargé dans JOSM, prêt à être édité, avec des images satellites chargées pour aider. L'icône carrée au centre de la trace indique qu'une photographie, prise à cet endroit, est disponible - il suffit de cliquer sur l'icône carrée pour afficher la photographie.  

Si vous naviguez et utilisez un GPS pour vous donner des indications, vous remarquerez à un moment donné qu'il "recalcule". Il y a une marge d'erreur, mais il est facile de créer des routes et des chemins au mauvais endroit, ou de déplacer la route après la création des données cartographiques.  
Les bénévoles qui mettent à jour OpenStreetMap peuvent télécharger toutes les traces qui ont été téléchargées dans une zone, et les utiliser pour.. :  

1. Tracer des routes et des chemins à travers des zones qui ne pouvaient pas être vues avec l'imagerie satellite à cause des nuages, des arbres, des ombres, des bâtiments, etc.  
2. Ajustez l'imagerie satellite pour qu'elle s'aligne correctement - il peut y avoir une variation surprenante avec certaines imageries.  

Bien qu'une seule trace gpx soit très utile, elle n'est pas toujours très précise et peut être décalée de 30 mètres. Lorsqu'il y a plusieurs traces, l'itinéraire correct du chemin ou de la route est alors facile à voir - par exemple, voir la capture d'écran ci-dessous montrant un téléchargement de traces gpx dans une ville, dans laquelle les routes principales peuvent être vues par le volume des traces.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png