---
layout: doc
title: Geofabrik en HOT Export gebruiken
permalink: /nl/osm-data/geofabrik-and-hot-export/
lang: nl
category: osm-data
---

Geofabrik en HOT Export gebruiken
================

> Deze handleiding kan gedownload worden als  [Geofabrik_and_HOT_Export_nl.odt](/files/Geofabrik_and_HOT_Export_nl.odt) of [Geofabrik_and_HOT_Export_nl.pdf](/files/Geofabrik_and_HOT_Export_nl.pdf)  
> Bijgewerkt 05-09-2016  

Nadat u heeft geleerd hoe gegevens in OpenStreetMap (OSM) toe te voegen en te bewerken, wilt u misschien de gegevens verkrijgen als een back-up of om het te verwerken met behulp van software voor een Geographic Information System dat Open Source is, zoals QGIS ([www.qgis.org](http://www.google.com/url?q=http%3A%2F%2Fwww.qgis.org%2F&sa=D&sntz=1&usg=AFQjCNFCIP2pVPi5ohw-5H7tJ4CzApRQlg)).  

Gegevens van OSM verkrijgen op de website van Geofabrik
-------------------------------------

De gegevens van OSM data kunnen eenvoudig worden verkregen door ze te downloaden vanaf [http://download.geofabrik.de/openstreetmap/](http://www.google.com/url?q=http%3A%2F%2Fdownload.geofabrik.de%2Fopenstreetmap%2F&sa=D&sntz=1&usg=AFQjCNGtPxBJsD_G-JOi6U5hWJSqey8KCw)

![download-geofabrik][]

De gegevens zijn opgedeeld in verscheidene regio's. Indonesië kan als deel van Azië worden gevonden door te klikken op de sub-regio Azië in de blauwe tabel, en dan zal de pagina verschijnen die er als volgt uitziet.  

![geofabrik-asia][]

Na het verschijnen aan de bovenzijde van de pagina, bekijk hoe de sub-regio zich opdeelt in landen in Azië. U dient op de staat Indonesië te klikken in de blauwe tabel om de gegevens op te halen, en ze zullen als volgt verschijnen.  

![geofabrik-indonesia][]

Als u dan de gegevens voor Indonesië wilt ophalen in de indeling shapefile (.shp), klikt u op de link indonesia-latest.shp.zip, en het bestand zal worden gedownload. Er zijn verscheidene indelingen die gedownload kunnen worden. Een populaire indeling is shapefile (shp) met lagen van punten, polylijnen en polygonen.  

U kunt controleren wanneer de gegevens voor het laatst werden bijgewerkt. Onthoud dat de server gewoonlijk de gegevens eenmaal per 24 uur bijwerkt, dus als u zojuist gegevens naar OSM hebt geüpload, zullen de gegevens niet automatisch verschijnen als u ze downloadt, maar dient u te wachten op de laatste bijwerkingen van de server.  

Gegevens van OSM verkrijgen op de website van HOT-Export
--------------------------------------

Als u slechts een zeer specifiek gebied met een bijzonder attribuut wilt downloaden, kunt u de downloadservice voor gegevens van Hot-Exports gebruiken. Open <http://export.hotosm.org/> dat er als volgt uitziet:  

![hot-export][]

U dient een account te hebben om gegevens van deze website te verkrijgen. Klik op **Create Account** in de linker benedenhoek om er een te maken, en voer dan uw e-mail, wachtwoord en bevestiging voor het wachtwoord in, gevolgd door **Create Account**. U zult dan een bericht zien dat lijkt op “A message with a confirmation link has been sent to your email address. Please open the link to activate your account.” wat aangeeft dat uw account met succes is gemaakt en dat een e-mail voor activeren aan u is verzonden.  

![hot-export-account][]

Log daarna in met behulp van het account dat u heeft gemaakt.  

![hot-export-login][]

Als u eenmaal met succes bent ingelogd, haal dan gegevens op door op **New Job** te klikken, en dan uw naam en de omschrijving voor de taak in te vullen. U kunt met behulp van de kaart een gebied selecteren en dan op Save klikken.  

![new-export-job][]

Als u dat wilt kunt u een bestand voor voorkeuze, een bestand voor vertaling selecteren, of beide opties negeren.  

![job-configuration][]

De server zal uw verzoek verwerken, rekening houdende met de tijd die het kost voor het gebied dat u heeft gekozen en de capaciteit van de server. U kunt de bestandsindeling kiezen die u wilt downloaden, zoals ESRI Shapefile. Alle verzoeken om te downloaden die u maakt zullen in de taak verschijnen, dus als u op enig moment nogmaals hetzelfde gebied wilt downloaden, kunt u zoeken naar dezelfde taak en die opnieuw downloaden zonder te hoeven klikken op New Job.  

![job-created][]

[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export]: /images/osm-data/hot-export.png
[hot-export-account]: /images/osm-data/hot-export-account.png
[hot-export-login]: /images/osm-data/hot-export-login.png
[new-export-job]: /images/osm-data/new-export-job.png
[job-configuration]: /images/osm-data/job-configuration.png
[job-created]: /images/osm-data/job-created.png
