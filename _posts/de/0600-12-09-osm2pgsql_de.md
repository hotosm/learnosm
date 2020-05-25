---
Layout: doc
Titel: osm2pgsql
Permalink: /de/osm-data/osm2pgsql/
Sprache: de
Kategorie: osm-data
---

osm2pgsql
==========


Im vorherigen Kapitel sahen wir wie man PostgreSQL zusammen mit PostGIS in Windows aufsetzt und eine Datenbank aufsetzt und diese mit Shapefile Daten lädt. Um OpenStreetMap Daten in eine Datenbank zu bekommen, kann man die Daten im Shapefile Format bekommen und den Shapefile Loader verwenden, aber es kann passieren, dass die gewünschten Daten fehlen. In diesem Kapitel lernen wir, wie man **osm2pgsql** verwendet, ein Kommandozeilen Programm, um rohe OSM Daten in eine PostGIS Datenbank zu laden.  

Wir führen durch die Schritte um osm2pgsql unter Windows aufzusetzen, die Schritte unter anderen Betriebssystemen sollten ähnlich sein, wir nehmen an, dass die PostGIS Datenbank(en) korrekt aufgesetzt wurden.  

An osm2pgsql gelangen
-------------

Die Windows Version von osm2pgsql kann im Browser heruntergeladen werden unter <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Man lädt die Datei **osm2pgsql.zip** herunter  
- Man entpackt die Datei auf seinem System. Man sollte das entpacke Verzeichnis an einer Stelle ablegen an der man es später nicht erneut verschieben muss, da man das Verzeichnis zum Systempfad hinzufügen muss.  

![unzip it][]

- In dem entpackten osm2pgsql Verzeichnis befindet sich eine Datei osm2pgsql.exe. Dieses Programm werden wir aufrufen, um die Daten zu importieren, aber damit es Windows findet, müssen wir das Verzeichnis dem Systempfad hinzufügen. Man klickt auf das Startmenü und gibt "system path" ein.  

![system path][]

- Man sieht eine Option namens "Edit the system environment varaibles". Man klickt darauf.  

![edit variables][]

- Man klickt auf den Button "**Environment Variables**"  

![env variables][]

- Unten findet man die Variable "**Path**" und klickt "**Bearbeiten**"  

![find path][]

- Man fügt das Verzeichnis, in dem osm2pgsql gespeichert ist, an die Pfadvariable an.  

![edit path][]

- Man fügt ein Semikolon ans Ende des vorherigen Verzeichnisses und gibt dann den vollen Verzeichnispfad von osm2pgsql.exe an. Wenn man zum Beispiel **osm2pgsql** direkt im Verzeichnis **C:\\** abgelegt hat ist der Pfad:  
	
**C:\osm2pgsql\Win32**  

- Man klickt mehrmals OK, um die Einstellungen zu speichern.  
- **osm2pgsql** sollte nun funktionieren. Wir prüfen das nun.  
- Man öffnet eine Windows Kommandozeileneingabe. Dies geschieht, indem man auf das Start Menü klickt und "**cmd**" eingibt. die Kommandozeilenanwendung erscheint und man kann Enter drücken oder darauf klicken.  

![cmd][]

- Im sich öffnenden schwarzen Kommandozeilenfenster gibt man ein:  

**osm2pgsql**

- Wenn alles korrekt läuft, bekommt man eine Meldung wie folgt:  

![osm2pgsql test][]

- Sieht man keine Fehlermeldung wie diese und es heißt, dass die Anwendung **osm2pgsql** nicht gefunden werden kann, hat man vielleicht die Pfadvariable falsch angegeben.  

An OSM Rohdaten gelangen
---------------------
Bevor man **osm2pgdql** startet braucht man OSM Rohdaten, um diese in eine Datenbank importieren zu können. Falls man noch keine **.osm** Datei hat, kann man eine Datei herunterladen von <https://mapzen.com/data/metro-extracts/>. Diese Seite bietet viele OSM Extrakte für verschiedene Städte an. Man findet eine Stadt zum Importieren und lädt die PBF Datei dafür herunter. PBF Dateinen sind komprimierte Versionen der **.osm** Dateien. Man kann beliebige Dienste für OSM Extrakte aus der Liste von [getting data](/en/osm-data/getting-data) nutzen, falls man andere Rohdaten für andere Gebiete möchte.  

An Style Dateien gelangen
------------------
**osm2pgsql benötigt Custom Style Dateien zur Definition von Tags, welche beim Import in die Datenbank verwendet werden. Man kann die Standard Style Datei [hier](/files/default.style) herunterladen.  

Daten importieren
-------------------
Man öffnet PgAdmin III und erstellt eine neue Datenbank mit Namen **osm**, wie man es bereits im vorherigen Kapitel getan hat. Um die Daten zu importieren, führt man das Programm **osm2pgsql** auf der Kommandozeile aus. 

- Man klickt auf das Startmenü und gibt "cmd" ein, um die Kommandozeile zu öffnen.  

![command prompt][]

Wir werden die Anwendung **osm2pgsql** mit verschiedenen Optionen ausführen. Wir müssen mindestens angeben:  

- Den Ort der OSM Daten Datei  
- Den Namen der Datenbank und den Datenbank Benutzername  
- Die Style Datei, die die OSM Tags definiert, die in die Datenbank importiert werden sollen  

Wir haben unsere OSM Datei unter **C:\\** abgelegt, um es einfacher zu haben.  

- Man gibt das folgende Kommando ein und ersetzt die Verzeichnisangaben der OSM Datei und der Style Datei durch die eigenen.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Man drückt Enter. Wenn alles glatt läuft sollte der Prozess starten. Es braucht ein paar Minuten bis alle Daten in die Datenbank geladen werden.  

![osm2pgsql output][]

- Falls die rohe OSM Datei groß ist, muss man vielleicht zusätzlichen Hauptspeicher dem osm2pgsql Importprozess zuweisen. Dazu fügt man das folgende Kommando an:  

      --cache 600

Man testet es
-----------

Wir können prüfen, ob der Import erfolgreich war und die Daten in unserer Datenbank mit QGIS anschauen.  

- Man öffnet QGIS und klickt auf den "Add PostGIS Layers" Button. ![qgis add postgis button][]{: height="24px"}

- Unter "Connections" oben im Fenster klickt man "**New**".  
- Man gibt der neuen Verbindung einen Namen. Unter Datenbank gibt man **osm** ein (Den Namen der Datenbank).  
Man gibt den Benutzernamen postgres und sein Passwort ein.  

![connection settings][]

- Man klickt OK um die Verbindungseinstellungen zu speichern. Dann klickt man "Connect" um sich mit dem PostgreSQL Server zu verbinden.  
- Man klickt neben "public" um alle Layers (Tabellen) in der Datenbank zu sehen. Man sieht, dass osm2pgsql für unterschiedliche Objekt Typen - Punkte, Linien und Polygone - separate Tabellen erstellt. Es erstellt auch eine Straßentabelle, welche nur Hauptstraßen enthält.  

![postgis layers][]

- Man wählt einen oder mehrere Layer aus und klickt "Add". Falls gefragt wird, wählt man WGS84 als CRS.  
- Wenn alles glatt läuft, sieht man die ausgewählten Layer in QGIS angezeigt.  

![osm in qgis][]

> Schaut man die Attributtabellen der Layer an, sieht man, dass die Attribute auf OSM Tags gemappt sind. Die entsprechenden Tags, die importiert wurde, wurden definiert während des **osm2pgsql** Importprozesses. Um spezifische Tags, welche nicht standardmäßig enthalten sind, hinzuzufügen, kann man die *Style* Datei bearbeiten, die osm2pgsql verwendet, um das Datenschema zu definieren.  


Zusammenfassung
-------

Wenn man OpenStreetMap Daten in die eigene Datenbank importieren möchte, ist **osm2pgsql** ein großartiges Werkzeug, Es ist sehr nützlich, wenn man aktuellste OSM Daten benötigt und Attribute anpassen muss oder wenn man an komplexeren Projekten arbeitet.  

In jüngster Zeit wurden ein anderes Importwerkzeug entwickelt, es heißt  [imposm](http://imposm.org/), und bietet Verbesserung besonders in der Geschwindigkeit gegenüber osm2pgsql, obwohl aktuell andere Schlüsselfunktionen fehlen, welche für Version 3 von imposm vorgesehen sind.  

Für weitere Informationen zu osm2pgsql findet man im OSM Wiki - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
