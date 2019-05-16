---
layout: doc
title: Geofabrik und den HOT Export benutzen
permalink: /de/osm-data/geofabrik-and-hot-export/
lang: de
category: osm-data
---

Geofabrik und den HOT Export benutzen
================

> Geprüft 2016-09-05  

Nachdem Sie jetzt wissen, wie Sie Daten in OpenStreetMap (OSM) hinzufügen und bearbeiten können, möchten Sie nun vielleicht an die Daten herankommen, sei es als Backup oder zur Verarbeitung mit geografischen Informationssystemen wie z.B. dem Open-Source-Produkt Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

Daten von der Geofabrik-Webseite herunterladen
-------------------------------------

Die OSM Daten können einfach heruntergeladen werden von [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Die Daten sind in einzelne Regionen unterteilt. Indonesien kann als Teil von Asien gefunden werden, indem in der blauen Tabelle auf die Subregion Asien geklickt wird. Dann sieht die Seite etwa so aus.  

![geofabrik-asia][]

Nachdem der obere Teil der Seite erschienen ist, sehen Sie, wie sich die Subregion in die Länder Asiens aufteilt. Um die Daten herunterzuladen, müssen Sie in der blauen Tabelle auf den indonesischen Staat klicken. Anschließend wird die Seite so aussehen:  

![geofabrik-indonesia][]

Wenn Sie dann die Daten Indonesiens im Shapefile (.shp) Format erhalten möchten, können Sie auf den indonesia-latest.shp.zip Link klicken wodurch die Datei heruntergeladen wird. Es gibt verschiedene Formate, in denen die Daten heruntergeladen werden können. Ein gängiges Format ist das Shapefile (shp) Format, das eine Punkte-, eine Wege- und eine Polygonebene enthält.  

Sie können überprüfen, wann die Daten das letzte Mal aktualisiert wurden. Bitte beachten Sie, dass der Server die Daten für gewöhnlich alle 24 Stunden aktualisiert. Wenn Sie also gerade erst Daten zu OSM hinzugefügt haben, werden sie nicht automatisch in ihrem Download enthalten sein, sondern Sie müssen zunächst darauf warten, dass der Server die neusten Änderungen erhält.  

OSM Daten von der HOT Export Tool Webseite erhalten
--------------------------------------

Das [Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) bietet einen Onlinedienst an, der es Benutzern erlaubt, eigene OSM-Abzüge von einem beliebigen Gebiet der Welt zu erstellen. Dazu wählen Sie ein Gebiet aus, die Sie interessierenden Kartenelemente und ein Dateiformat. Innerhalb von Minuten werden aktuelle OSM-Daten exportiert, gefiltert und konvertiert. Der nachfolgende Abschnitt zeigt, wie man das Export Tool verwendet. Diese Information ist auch im‘[Learn](https://export.hotosm.org/en/v3/learn)’ Abschnitt auf export.hotosm.org zu finden.

![hot-export-tool][]

## Schnellstart

Jeder der ein Benutzerkonto hat, kann einen eigenen OpenStreetMap-Export mit dem Export Tool erstellen. Ein OpenStreetMap-Benutzerkonto und eine gültige E-mail-Adresse genügen, damit nach erfolgreichem Export ein Link zum Herunterladen dorthin gesendet werden kann.

## Gebiet angeben

Es gibt mehrere Möglichkeiten ein Gebiet (Area of Interest - AOI) im Export Tool auszuwählen. Dies sind die Suche nach einer geographischen Bezeichnung, die Angabe von Koordinaten einer Bounding Box (eingrenzendes Rechteck), das Zeichnen einer Bounding Box, das Zeichnen eines Polygons (Vieleck), das Verwenden der aktuellen Ansicht oder das Hochladen einer geojson-Datei.

![export-tool-create][]

Sobald Sie sich im HOT Export Tool angemeldet haben, wird das 'Erstellen' Tab verfügbar. Hier definieren Sie Ihren Export durch eine Beschreibung auf der linken Seite und der Auswahl des Gebiets (AOI) auf der Karte auf der rechten Seite. 

![export-tool-describe][]

### Suchleiste
Es gibt 6 Wege, ein Gebiet (AOI) für den Export zu definieren. Der erste und der zweite Weg verwenden die Suchleiste, welche einen Ort durch Eingabe des Namens und dessen Auswahl im Ergebnis darunter findet oder durch die Definition von Bounding Box Koordinaten. Die Minimum X, Minimum Y, Maximum X und Maximum Y (Westen, Süden, Osten, Norden) Koordinaten eines Landes können [in einer CSV Liste des Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries) gefunden werden.

![export-tool-search][]
![export-tool-coordinates][]


### Zeichnen 
Der dritte und vierte Weg zur Auswahl eines Gebiets im Export Tool ist entweder das Zeichnen einer Bounding Box durch Auswahl der 'Box'-Option aus der Werkzeugspalte auf der rechten Seite des Bildschirms oder das freihändige Einzeichnen eines Polygons direkt auf der Karte, durch Auswahl des 'Zeichnen'-Werkzeugs.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Ein Polygon hochladen
Die letzten zwei Wege zur Auswahl eines Gebiets sind durch das 'Diese Ansicht'-Werkzeug auf der rechten Seite der Karte, welches die Ausdehnung der aktuellen Kartenansicht nimmt, oder durch das 'Import'-Werkzeug, welches das Hochladen eines Flächenpolygons ermöglicht.  

![export-tool-area-view][]
![export-tool-area-import1][]


Das importierte Polygon muss in Form einer GeoJSON-Datei in WGS84 geographischen Koordinaten vorliegen. Eine Möglichkeit eine GeoJSON-Datei zu erzeugen bietet die Webseite geojson.io. Nach Auswahl eines Gebiets unter [geojson.io](http://geojson.io/) kopieren Sie den Text in der rechten Box und fügen ihn in einen Editor Ihrer Wahl ein, wie z.B. [Atom](https://atom.io/) und speichert Ihre GeoJSON-Datei.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Die GeoJSON Datei muss leicht editiert werden, damit es das Export Tool akzeptiert. Bitte beachten Sie, dass keine Multipolygone verwendet werden können. In der einfachsten Version muss in der Datei nur angegeben werden, dass es sich um ein "type: Polygon" handelt und sie muss die Koordinaten der Punkte/Nodes des Gebiets enthalten. Die GeoJSON-Datei wird dann erfolgreich durch das Tool analysiert und zur Definition des Gebietes (AOI) verwendet.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Dateiformate auswählen

Das Tool erlaubt es OSM-Daten mit der Overpass-API im nativen Protocol Buffer Binary (PBF) Dateiformat zu extrahieren, bevor  die Daten nach den vom Benutzer angegebenen Kartenelementen gefiltert werden. Nach dem Filtern der Daten wird die Datei in das vom Benutzer gewünschte Dateiformat konvertiert.  

Aktuell kann das Tool OSM-Daten in Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf und MBTiles .mbtiles konvertieren. Mindestens ein Dateiformat muss für den Export ausgewählt werden, für die Anzahl gibt es aber keine Einschränkung, was durch Anwählen mehrerer Auswahlboxen erledigt werden kann.

![export-tool-file-formats][]


### Shapefile .shp
Shapefiles sind tabellarische Formate, die von Esri entwickelt wurden. Sie sind das beliebteste Dateiformat für GIS-Daten. Ein Shapefile besteht eigentlich aus 3-4 individuellen Dateien, im Normalfall als ZIP-Archiv zusammengefasst. Shapefiles haben bestimmte Einschränkungen, wie etwa eine Dateigröße bis maximal 2 Gigabytes (GB) und eine Spaltennamenlänge von maximal 10 Zeichen. Im [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) Lernkapitel gibt es mehr dazu zu lesen.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages speichern geospatiale Daten in einer einzigen SQLite-Datenbank. Geopackages sind sehr ähnlich den Spatialite-fähigen SQLite-Datenbanken. Sie sollten in den meisten bekannten GIS-Anwendungen verwendet werden können. Geopackages unterstützen nahezu unbegrenzte Dateigrößen, beliebig viele Spalten in Tabellen und Unicode. Sie sind besonders geeignet falls man SQL-Abfragen über die Daten ausführen möchte. Im [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) Lernkapitel gibt es mehr darüber zu lesen.

![export-tool-sql][]


### Garmin .img
Eine .IMG-Datei beinhaltet alle Informationen zur Darstellung einer Karte auf einem mobilen Garmin-GPS-Gerät. Beachten Sie  bitte, dass der kartografische .img-Stil und die Auswahl der Kartenelemente unabhängig von der übertragenen Kartenelementauswahl an das Export Tool sind. Es wird immer ein Standardstil verwendet.  Im  [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) Lernkapitel kann man mehr darüber lesen.

![export-tool-garmin][]


### Google Earth .kml
Die Keyhole Markup Language (KML) ist ein XML-basiertes Format zur Darstellung von Punkten, Linien, Polygonen und dazugehörigen geografischen Eigenschaften. Google Earth ist die bekannteste browserbasierte Erderkundungsplattform die KML verwendet, wofür es auch entwickelt wurde. Im [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) Lernkapitel kann man mehr darüber lesen.

![export-tool-google-earth][]


### OSM .pbf
Das Standard-Datenformat für OSM ist ein XML-Dokument aus Punkten, Linien und Relationen. Das Protocol Buffer Binary Format (PBF) ist eine optimierte Darstellung von OSM XML, die weniger Speicherplatz verbraucht und schneller einzulesen ist. Das Format ist nur mit OSM-spezifischen Werkzeugen kompatibel wie OSM-Editoren. Jede .PBF-Datei des Export Tools sollte in sich vollständig sein - das heißt, jeder Punkt, jede Linie  und jede Relation die durch eine Linie oder eine Relation referenziert wird, wird in der .PBF-Datei auftauchen. Im [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) Lernkapitel kann man mehr dazu lesen.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me ist eine GPS Navigations- und Kartenanwendung für Android- und iOS-Smartphones und -Tablets die offline-Kartendarstellung und -Navigation unterstützt. Im [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) Lernkapitel kann man mehr dazu lesen. Um einen eigenen Export mit Maps.me auf Android zu verwenden, folgen Sie den folgenden Schritten:
Öffnen Sie Maps.me und navigieren Sie zu einer gewünschten Region.
Akzeptieren Sie die Nachfrage von Maps.me und laden Sie die angebotene Region herunter.
Schließen Sie Maps.me
Erstellen Sie einen MWM-Export
Laden Sie den Export herunter, entpacken Sie ihn und kopieren Sie die .mwm-Datei auf Ihr Gerät
Navigieren Sie mit dem Android-Dateimanager zur .mwm-Datei
Drücken Sie lange auf den Namen um sie auszuwählen und drücken Sie den "Kopieren"- oder "Ausschneiden"-Knopf
Navigieren Sie zu "MapsWithMe" und öffnen Sie den am höchsten nummerierten Ordner (z.B. 170917)
Kopieren/verschieben Sie die .mwm-Datei in diesen Ordner durch Drücken des "Einfügen"-Knopfes
Löschen Sie die in Maps.me heruntergeladene ursprüngliche .mwm-Datei für Ihr Gebiet, merken Sie sich aber den Dateinamen
Bennen Sie Ihre .mwm Datei um so dass sie der durch Maps.me heruntergeladenen Region entspricht (der Datei, die Sie gerade gelöscht haben) durch langes Drücken auf den Namen (zur Auswahl) und drücken Sie den "Mehr"-Knopf (3 vertikale Punkte)
Öffnen Sie Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd ist ebenfalls eine GPS Navigations- und Kartenanwendung für Android- und iOS-Smartphones sowie Tablets die offline Kartendarstellung, Routing und Suche ermöglicht. Mehr über die Anwendung und ihre zahlreichen Funktionen von [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) finden Sie auf der Webseite der Anwendung. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles is ein Dateiformat zur Speicherung von Kartenkacheln in einer einzigen Datei. Das Export Tool erlaubt es Benutzern, MBTiles zu erstellen, die Kacheln von OSM enthalten, die als Quelle für Offline-Anwendungen verwendet werden können, die dies unterstützen. Beachten Sie, dass MBTiles alle OSM-Kartenelemente aus dem im Export Tool ausgewählten Gebiet exportiert und das '3 Daten' Tab automatisch zu einer Dropdown Quelloption und Zoomstufe wechselt statt der Standard Baum Tag und YAML Kartenelementeauswahloption. Mehr darüber erfahren Sie im [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) Lernkapitel.

![export-tool-mbtiles][]


Zusätzliche Dateiformate werden ständig vorgeschlagen und dem Export Tool hinzugefügt. Möchten Sie ein weiteres Dateiformat hinzugefügt bekommen, schreiben Sie bitte einen Kommentar im [GitHub](https://github.com/hotosm/osm-export-tool/issues) Repository. Weitere Informationen zu den Dateiformaten finden Sie auf der 'Dateiformat'-Seite im ‘[Lernkapitel](https://export.hotosm.org/en/v3/learn)’ der Tool Webseite.



## Kartenelemente anpassen

Das Tool erlaubt es Benutzern, die im Gebiet ausgewählten Daten anzupassen. Die OSM-Daten werden durch Attributfilter und Schlüsselselektion definiert, als Tagbaum oder im YAML Format. Der Tagbaum ist für allgemeine Anwendungsfälle mit einem vorbereitetem Satz an Filtern und einer möglichen Auswahl, wohingegen die YAML-Konfiguration mit einer SQL-ähnlichen Filterdefinition eine komplette Kontrolle über die Filter und Auswahl ermöglicht.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM ist eine öffentliche globale Datenbank mit geografischen Elementen, die mit Eigenschaften versehen sind. Sie enthält 3 Arten von Elementen:
Nodes, die einen Punkt auf der Erde repräsentieren
Linien als Satz von Punkten, welche offene Linien oder Polygone darstellen
Relationen, als ein Satz von Punkten, Linien oder anderer Relationen

Jedes dieser Elemente kann eine beliebige Anzahl an key=value Attributen besitzen. Zum Beispiel kann ein Postamt durch eine Linie mit den Attributen building=yes und amenity=post_office dargestellt werden. Schauen wir uns an, wie diese Attribute im Export Tool definiert werden können mit Hilfe des Tagbaums oder im YAML Format, um OSM Daten zu filtern.

### Tagbaum
Der Tagbaum ist der einfachste Weg um Elemente auszuwählen, durch einfaches Anklicken der gewünschten Eltern- und Kind-Checkboxen. Beachten Sie dass die Auswahl einer Eltern-Checkbox zusätzliche zugehörige key=value Attribute auswählen wird, genauso wie ihre Kind-Checkboxen. Jede Eltern-Checkbox hat eine andere Abfrage um Daten zu filtern. Wir empfehlen deshalb, die Syntax durch Positionierung der Maus über der Checkbox zu prüfen, wodurch eine Infobox angezeigt wird. 

![export-tool-treetag-sql][]


Wählen Sie zum Beispiel die 'Emergency' Eltern-Checkbox, werden automatisch die 'Police Station', 'Ambulance Station' und 'Fire Station' Kinder-Checkboxen darunter ausgewählt. Des Weiteren werden auch alle Attribute mit emergency=yes, amenity=police und amenity=fire_station  in folgender SQL-Abfrage ausgewählt:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Eltern-Checkboxen bildern nicht immer alle ihre Kinder-Checkboxen ab. OSM-Attribute entwickeln sich ständig weiter und wir möchten sicherstellen, dass das Tool sich an diese Änderungen anpasst. Nur die gebräuchlichsten key=value Attribute sind als Kind-Checkboxen enthalten und die Eltern-Checkboxen werden dienen dazu, die weniger geläufigen Attribute mit abzubilden, die zum gleichen Thema gehören. Falls Sie Änderungsvorschläge für diese Themen und Attribute haben, fügen Sie bitte einen Kommentar in diese [Tabelle](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) ein, die zur Erstellung des Tagbaums dient, und wir werden es - wenn passend - übernehmen.

![export-tool-treetag-spreadsheet][]


### YAML Form
Verwenden Sie eine YAML-Konfiguration so haben Sie die komplette Kontrolle über die angewendeten Filter bezüglich der OSM-Daten durch Verwendung einer SQL-ähnlichen Filterdefinition zur key=value Auswahl. Beachten Sie, dass der Tagbaum auch eine Syntax in dem YAML-Form erzeugt, so dass alle ausgewählten Eltern- und Kind-Checkboxen auch in der YAML-Box Anwendung finden. Dies dient als Startpunkt für die Abfrage, die weiter angepasst werden kann. 

![export-tool-treetag-yaml][]


Die Verwendung von YAML wurde wegen der Einfachheit und Kompatibilität mit SQL gewählt. Die YAML-Elementauswahl ist ähnlich den Stildateien, die von Programmen wie osm2pgsql und imposm verwendet werden. Sie reagiert auf Leerzeichen, mit eingerückten Kindelementen unter den Eltern und einem vorstehendem Strich. Dem Strich muss ein Leerzeichen folgen. Es folgt ein Standardbeispiel einer Elementauswahl mit 3 Themen, Gebäuden, Gewässern und Krankenhäusern:

![export-tool-yaml-code1][]


XAML hat Themen und zwei Datenstrukturen, Mapping und Listen
Das Thema im oberen Beispiel ist: buildings
Mappings im oberen Beispiel sind: types und select 
Listen im oberen Beispiel sind: Kinderelemente von select und types

YAML: Themen
Themen sind die obersten Schlüssel im YAML-Dokument mit  Buchstaben, Nummern und Unterstrichen als zulässigen Zeichen. 

YAML: Geometrie-Typen
Die Listenwerte unter den Mappingtypen können ein oder mehrere '- points', '- lines', '- polygons' sein. Wird der Typenschlüssel weggelassen, werden alle drei Geometrietypen im Thema einbezogen.

YAML: Spaltenauswahl
Listenpunkte unter dem Mappingauswahlschlüssel bestimmen die Spalten für jedes Thema. Das folgende Beispiel wird die 'name' und 'amenity' Spalten mit ihren Werten aus OSM befüllen:

![export-tool-yaml-code2][]


YAML: Filter
Filter sind unter dem where: Schlüssel in jedem Thema. Sie definieren, welche Teilmengen von OSM-Elementen zu einem Thema gehören. Das folgende Beispiel filtert das Thema nach Elementen bei denen der Schlüssel natural den Wert waterway besitzt:

![export-tool-yaml-code3][]


Beachten Sie bitte, dass es fast immer notwendig ist, Filter einzusetzen, da sonst alle OSM-Elemente im Thema enthalten sind für die gegebenen Geometrietypen. Ein Filter wird durch eine SQL ähnliche Syntax definiert mit den folgenden möglichen Schlüsselwörtern: IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


JOSM-Vorlagen
Ältere Versionen des Export Tools verwenden JOSM-Vorlagen-XML-Dateien um eine Auswahl an Kartenelementen zu definieren. Die neue Version verwendet YAML da es flexibler in der Art und Weise ist, wie es OSM-Daten transformiert. Das neue Export Tool kann dabei helfen, JOSM-Vorlagen in YAML-Konfigurationen zu konvertieren, indem man den 'Lade aus JOSM Vorlage .XML' Button verwendet. Beachten Sie bitte, dass wenn die Vorlage etwas komplexer ist, es als neue YAML-Konfiguration, basierend auf den 'item' Elementen der XML geschrieben, werden muss.

![export-tool-load-preset][]



### Konfigurationen

YAML-Konfigurationen können für den zukünftigen Gebrauch über die 'Konfiguration'-Seite definiert und gespeichert werden. Es ist nützlich, eine Konfiguration für ein Projekt zu erstellen, welche dann für alle dem Projekt zugehörigen Exporte verwendet werden kann. Sie können der Konfiguration einen 'Namen' und eine 'Beschreibung' geben, damit andere Benutzer sich zurechtfinden. Wenn Sie die 'Öffentlich'-Checkbox abwählen, ist die Konfiguration nur für den Benutzer selbst sichtbar. 

![export-tool-configuration-saved][]


Beachten Sie bitte, dass Konfigurationen bearbeitet werden können, was nützlich ist, um die Kartenelementauswahl im Laufe eines Projekts anzupassen. Gespeicherte YAML-Konfigurationen können in der 'Gespeicherte Konfigurationen'-Option auf dem '3 Daten'-Tab ausgewählt werden, wenn ein Export erstellt wird. Sie können die Suchleiste verwenden, um zu dem Projekt zugehörige Konfigurationen zu finden.

![export-tool-configuration-stored][]


Weitere detaillierte Informationen zu Kartenelementauswahl und YAML finden Sie unter 'Kartenelementauswahl' und 'YAML-Spezifikation' im ‘[Lernkapitel](https://export.hotosm.org/en/v3/learn) auf der Tool Webseite. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




