---
layout: doc
title: Geofabrik und den HOT Export benutzen
permalink: /de/osm-data/geofabrik-and-hot-export/
lang: de
category: osm-data
---

Geofabrik und den HOT Export benutzen
================

> Diese Anleitung kann als [Geofabrik_and_HOT_Export_de.odt](/files/Geofabrik_and_HOT_Export_de.odt) oder [Geofabrik_and_HOT_Export_de.pdf](/files/Geofabrik_and_HOT_Export_de.pdf) heruntergeladen werden  
> Geprüft 2016-09-05  

Nachdem wir gelernt haben, wie man Daten bearbeitet und zu OpenStreetMap (OSM) hinzufügt, möchten Sie diese Daten vielleicht bekommen, um sie als Sicherungskopie zu haben oder sie mit Hilfe von geographischen Informationssystemen, die Open Source sind, wie zum Beispiel Quantum GIS ([www.qgis.org](http://www.google.com/url?q=http%3A%2F%2Fwww.qgis.org%2F&sa=D&sntz=1&usg=AFQjCNFCIP2pVPi5ohw-5H7tJ4CzApRQlg)) zu verarbeiten.  

Daten von der Geofabrik Website herunterladen
-------------------------------------

Die OSM Daten können einfach erhalten werden, indem sie von [http://download.geofabrik.de/openstreetmap/](http://www.google.com/url?q=http%3A%2F%2Fdownload.geofabrik.de%2Fopenstreetmap%2F&sa=D&sntz=1&usg=AFQjCNGtPxBJsD_G-JOi6U5hWJSqey8KCw) heruntergeladen werden. 

![download-geofabrik][]

Die Daten sind in einzelne Regionen unterteilt. Indonesien kann als Teil von Asien gefunden werden, indem in der blauen Tabelle auf die Subregion Asien geklickt wird. Dann sieht die Seite etwa so aus.  

![geofabrik-asia][]

Nachdem der obere Teil der Seite erschienen ist, sehen Sie, wie sich die Subregion in die Länder Asiens aufteilt. Um die Daten herunterzuladen, müssen Sie in der blauen Tabelle auf den indonesischen Staat klicken. Anschließend wird die Seite so aussehen:  

![geofabrik-indonesia][]

Wenn Sie dann die Daten Indonesiens im Shapefile (.shp) Format erhalten möchten, können Sie auf den indonesia-latest.shp.zip Link klicken wodurch die Datei heruntergeladen wird. Es gibt verschiedene Formate, in denen die Daten heruntergeladen werden können. Ein gängiges Format ist das Shapefile (shp) Format, das eine Punkte-, eine Wege- und eine Polygonebene enthält.  

Sie können überprüfen, wann die Daten das letzte Mal aktualisiert wurden. Bitte beachten Sie, dass der Server die Daten für gewöhnlich alle 24 Stunden aktualisiert. Wenn Sie also gerade erst Daten zu OSM hinzugefügt haben, werden sie nicht automatisch in ihrem Download enthalten sein, sondern Sie müssen zunächst darauf warten, dass der Server die neusten Änderungen erhält.  

Die OSM Daten von der HOT-Export Website herunterladen
--------------------------------------

Wenn du eine besondere Region mit einer bestimmten Eigenschaft herunterladen möchtest, kannst du den Hot-Export Service benutzen. Öffne  <http://export.hotosm.org/>, was so aussehen sollte:  

![hot-export][]

Um die Daten von der Website herunterzuladen, müssen Sie einen Account besitzen. Um einen solchen anzulegen, klicken Sie **Registrieren** in dem unteren linken Ecke, dann geben Sie ihre E-Mail, ein Passwort und die Bestätigung des Passworts ein. Klicken Sie anschließend auf **Registrieren**. Sie werden eine Nachricht sehen, die in etwa folgendes enthält "Eine Nachricht mit einem Bestätigungslink wurde an Ihre E-Mailadresse gesendet. Bitte öffnen Sie den Link, um Ihre Konto zu aktivieren". Dieses zeigt an, dass ihr Konto erfolgreich erstellt wurde und Sie eine Bestätigungsmail erhalten haben.  

![hot-export-account][]

Nachdem du das gemacht hast, melde dich mit dem gerade erstellten Konto an.  

![hot-export-login][]

Nachdem Sie sich erfolgreich angemeldet haben, müssen Sie, um die Daten zu erhalten, auf **Erstellen** klicken, anschließend Ihren Namen einzutragen und eine Beschreibung. Sie können ein Gebiet durch die die Benutzung der Karte auswählen. Klicken Sie anschließend auf speichern.  

![new-export-job][]

Wenn Sie wollen, können Sie eine Voreinstellung oder eine Übersetzungsdatei wählen oder beiden Optionen ignorieren.  

![job-configuration][]

Der Server wird ihre Anfrage bearbeiten. Die Dauer hängt dabei von der Größe des Gebiets und der Serverkapazität ab. Sie können das Dateiformat wählen, in dem Sie die Dateien herunterladen möchten, wie zum Beispiel ESRI Shapefile. Alle Download Anfragen, die sie erstellen, werden unter Exporte gespeichert. Wenn Sie also das gleiche Gebiet zu einem späteren Zeitpunkt herunterladen möchten, ist dies möglich. ohne dass Sie einen neuen Auftrag erstellen müssen.  

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
