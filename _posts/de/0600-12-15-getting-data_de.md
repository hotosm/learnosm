---
layout: doc
title: OSM-Daten beschaffen
permalink: /de/osm-data/getting-data/
lang: de
category: osm-data
---

OSM-Daten beschaffen
=================  

> Diese Anleitung kann unter [Getting_OSM_Data_de.odt](/files/Getting_OSM_Data_de.odt) oder [Getting_OSM_Data_de.pdf](/files/Getting_OSM_Data_de.pdf) heruntergeladen werden  
> Geprüft 2016-04-05

Um an aktuellste OpenStreetMap Daten zu bekommen ist es am einfachsten, einen Auszug davon von einer Webseite herunterzuladen. Es gibt zahlreiche Webangebote, welche Datenauszüge für gewählte Gebiete anbieten.  

Datenauszüge herunterladen
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) ist eine Firma, die auf die Arbeit mit OpenStreetmap spezialisiert ist. Sie bieten eine Vielzahl an freien Auszügen als Shapefile oder im rohen OSM Format auf ihrer [Download Website](http://download.geofabrik.de) an.  Der Vorteil beim Herunterladen von GeoFabrik Daten ist, dass sie täglich aktualisiert werden und es leicht und zuverlässig ist. Ein Nachteil ist, dass die Daten länderbezogen und nicht alle Länder verfügbar sind.  

### BBBike  

[Die Website BBBike](http://download.bbbike.org/osm/bbbike/) bietet Shapefiles und rohes OSM Format für Städte weltweit, im wöchentlichen Rhythmus. Dies ist nützlich wenn man Datenauszüge für einzelne Städte sucht.

>Man beachte, dass Kartenelemente in OpenStreetMap eine unbegrenzte Anzahl "freier" Tags besitzen,
>aber Shapefiles Attribute in einer begrenzten Anzahl an Spalten speichern. Das bedeutet,
>dass wenn OSM Daten zu Shapefiles konvertiert werden, nur spezifizierte Tags
>in der Shapefile Tabelle beinhaltet sein werden. Die zuvor genannten Webseiten bieten Shapefiles
>mit einem Standardsatz an allgemeinen Tags, wenn man aber spezifische Tags benötigt
>muss man einen der hochspezialisierteren Dienste im nächsten Abschnitt verwenden
>oder lernen, wie man selbst Daten exportiert.

Angepasste Auszüge
-------------------

### HOT Exporte  

Das [Humanitarian OpenStreetMap Team](http://hotosm.org) hat einen Service erstellt, der es Benutzern erlaubt ein Gebiet auszuwählen, das sie extrahieren wollen, dabei können [JOSM Presets](/en/josm/josm-presets/) verwendet werden
um Benutzderfinierte Tags, welche im Extrakt beinhaltet sind, auszuwählen. Der Service ist in allen Ländern verfügbar, in denen HOT arbeitet, auf [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Man kann bei folgendem Dienst sein eigenes Gebiet weltweit auswählen [http://extract.bbbike.org/](http://extract.bbbike.org/). Nachteile sind, dass man keine eigenen Tags auswählen und die Datenmenge die heruntergeladen werden kann begrenzt ist.  

### Overpass

Overpass ist eine API (Application Programming Interface) um Daten aus einer nur lesbaren Kopie der Haupt-OpenStreetMap-Datenbank zu extrahieren, welche eine fast beliebigen Datenmenge liefern kann. Durch eine Query Language kann man angeben, welche Untermenge der Daten man erhält. Man kann die API direkt durch erzeugte http-Abfragen oder durch das Overpass Turbo Interface verwenden.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) ist ein interaktiver Abfragengenerator, bei dem zuerst in die jeweilige Region auf der Karte zoomt. Auf der linken Seite gibt man die Abfrage ein und stößt die Aktionen durch Verwendung der Buttons am oberen Rand der Oberfläche an. Wenn man die Query Language noch nicht oft verwendet hat, steht einem ein Assistent bereit. Das OSM Wiki beinhaltet eine [vollständige Beschreibung](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) der Syntax der Query Language wie auch eine [Beispielsammlung] (http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

Die Kart hebt alle durch die Abfrage gefundenen Daten hervor, damit sie anschließend bearbeitet werden können. Um das Ergebnis zu aktualisieren drückt man "Run". Wenn man zufrieden ist, bietet "Export" eine Anzahl von Möglichkeiten, darunter rohe OSM Daten. Bei einer geringen Anzahl an Daten, kann man durch wechseln zwischen Kartenansicht und Datensicht direkt darauf zugreifen, indem man die Buttons oben rechts verwendet. Die Option *Query -> compact OverpassQL* erzeugt einen Link für die Overpass API.

![overpass turbo][]

Wenn man eine schicke Abfrage bauen möchte, um eine Untermenge der Daten eines großen Gebiets zu bekommen, dann sollte man die Abfrage in Overpass Turbo in einem kleinen Gebiet testen und verbessern. Man kann dann auf das gesamte Gebiet zoomen und die erzeugte Abfrage direkt für die API verwenden. Der nächste Abschnitt erklärt wie man das macht.

#### Overpass API

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) ist ein zugehöriger Dienst, der darauf spezialisiert ist OpenStreetMap Daten abzufragen, aber nicht zu schreiben. Durch diese Optimierung arbeitet er sehr schnell im Vergleich zur API der Hauptdatenbank und hat keine Beschränkungen was die transferierte Datenmenge angeht. Mehrere Instanzen dieses Dienste sind im Netz verfügbar, die im folgenden Beispiel verwendete, bietet auch einiges Informationen auf [ihrer Homepage](http://overpass-api.de/)

Hat man eine funktionierende Abfrage-URL, um einen http-Request an Overpass API zu senden, dann erlaubt ein Werkzeug wie [wget](https://www.gnu.org/software/wget/) - für verschiedene Betriebssysteme verfügbar siehe [hier](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - die rohen OSM Dated direkt vom Server herunterzuladen  und lokal zu speichern. Das folgende Schnipsel ist ein Skript für die gebräuchliche Bash Shell auf Unix Systemen, welche all Daten innerhalb einer angegebenen Bounding Box abruft:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
> Was passiert hier (für Neugierige die nicht die ganze Query Language Dokumentation lesen wollen)?  
>node(...) wählt alle Nodes innerhalb einer Bounding Box;  
>< geht alles rekursiv durch, z.B. selektiert alle Wege, die diese Nodes beinhalten und alle Relationen, die diese Nodes und Wege enthalten;  
>rel(br) wählt alle bisher erhaltenen Elternrelationen von Relationen (ansonsten würde man Master Relationen nicht erhalten)
>



Zusammenfassung
-------  

Alle in diesem Kapitel erwähnten Dienste können vom durchschnittliche Benutzer benötigt werden, um an die gewünschten OSM Daten zu kommen und damit in GIS Software zu arbeiten. Vielleicht möchte man aber auch mächtigere Arbeitswege um selbst mit den Daten zu arbeiten kennen lernen. Die verbleibenden Kapitel in diesem Abschnitt sind etwas technisch, zeigen aber fortgeschrittene Methoden zur Bearbeitung und für den Zugriff auf OSM Daten.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png