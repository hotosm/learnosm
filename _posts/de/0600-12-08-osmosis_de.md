---
layout: doc
title: Daten manipulieren mit Osmosis
permalink: /de/osm-data/osmosis/
lang: de
category: osm-data
---

Daten manipulieren mit Osmosis
===============================


**Osmosis** ist ein mächtiges Kommandozeilenwerkzeug um **.osm** Daten zu manipulieren und zu verarbeiten. Es wird oft dazu verwendet größere Datendateien zu verarbeiten, OSM Dateien in kleinere Teile zu splitten, und um ein Changeset anzuwenden und eine bestehende Datei zu aktualisieren.  

Osmosis bietet viele großartige Funktionen, Details dazu kannst du im [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41) nachlesen. Manche Funktionen sind sehr komplex und schwierig zu verstehen, inbesondere wenn man gerade anfängt mit Kommanozeilenprogramme und OpenStreetMap. Dieses Kapitel bietet eine Einführung in Osmosis, installiert es auf Windows, und startet mit einem einfachen Osmosis Kommando.  

Installiere Osmosis
----------------

Wie osm2pgsql im vorherigen Kapitel müssen wir **osmosis** herunterladen und aufsetzen, damit wir es von der Kommandozeile starten können. Das Vorgehen ist dem von osm2pgsql sehr ähnlich.  

Du benötigst des Weiteren OSM Rohdaten für die Bearbeitung. Wenn du den Beispielen in diesem Kapitel folgen willst. kannst du unsere Beispieldatei [hier](/files/sample_osmosis.osm.pbf) herunterladen. Du darfst auch eine Rohdatendatei deiner Wahl verwenden.  

Folge diesen Schritten um Osmosis herunterzuladen und vorzubereiten:  

- Als Erstes, lade Osmosis [hier](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip) herunter.  
- Entzippe das Verzeichnis an eine Stelle auf deinem System, wo es nicht verschoben wird. Wir müssen diese Stelle zum Systempfad hinzufügen, damit es von der Kommandozeile ausgeführt werden kann.  

![unzip it][]

- Klicke auf das Startmenu und gib ein "system path".  

![system path][]

- Du solltest eine Option "Systemumgebungsvariablen bearbeiten" sehen. Klicke darauf.  

![edit variables][]

- Klicke auf den Button "Umgebungsvariablen".  

![env variables][]

- Am unteren Ende findest du die Variable "Path", klicke "Bearbeiten" ...  

![find path][]

- Du musst das Verzeichnis in dem sich osmosis.bat befindet zu der Path Variable hinzufügen.  

![edit path][]

- Füge ein Semikolon ans Ende des vorherigen Verzeichnisses und füge  anschliessend den kompletten Pfad zu osmosis hinzu. Wenn zum Beispiel **osmosis-latest** direkt in **C:\\** liegt, sähe der Pfad wie folgt aus:  
	
      C:\osmosis-latest\bin

- Klicke mehrmals OK um die neuen Eigenschaften zu speichern.  
- **osmosis** sollte nun funktionieren. Lass es uns prüfen.  
- Öffne das Windows Kommandozeilenfenster. Das machst du indem du auf das Startmenu klickst und "**cmd**" eingibst. Das Kommandozeilenfenster wird erscheinen und du kannst Enter drücken oder darauf klicken.  

![cmd][]

Tippe in das sich öffnende, schwarze Kommandofenster:  

      osmosis

- Wenn alles korrekt funktioniert, solltest du eine Nachricht bekommen wie:  

![osmosis test][]

- Wenn du keine solche Ausgabe siehst und die Meldung kommt, dass die Anwendung **osmosis** nicht gefunden wird, dann solltest du die Path Variable überprüfen.  

Daten filtern
---------------

Osmosis sollte von der Kommandozeile aus nun korrekt arbeiten. Um Operationen auf unsere Datendatei auszuführen, müssen wir das Arbeitsverzeichnis wechseln zum Ordner in dem sich **sample_osmosis.osm.pbf** befindet. Um es einfach zu haben, haben wir die Datein im **C:\** Verzeichnis platziert.  

- Um das Arbeitsverzeichnis in der Kommandozeile zu C:\ zu ändern, gib folgendes Kommando ein und drücke Enter:  

      cd C:\
    
Die Ausgabe sollte sich ändern und anzeigen, dass du dich im C:\ Verzeichnis befindest.  

![cd command][]

Lass uns nun unser erstes Osmosis Kommando lernen. Wir werden ein Kommando ausführen, dass alle Schulen aus unserer großen Datei herausfiltert.  

Um die zu bewerkstelligen, müssen wir Osmosis ein paar Dinge vorgeben. Wir müssen spezifizieren:  

- Eine Eingabedatei (sample_osmosis.osm.pbf)  
- Einige Regeln, welche definieren was wir filtern möchten  
- Eine Ausgabedatei (Wir werden eine unkomprimierte .osm Datei erzeugen, so dass wir diese in JOSM öffnen können)  

Das Kommando, welches wir ausführen ist:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Versuche das Kommando in der Kommandozeile auszuführen. Wenn es beendet, solltest du eine Datei **schools.osm** in deinem Verzeichnis finden. Wenn wir die neue Datei in JOSM öffnen, sehen wir, dass nur Schulen aus der Beispieldatei herausgefiltert wurden.  

![schools osm][]

Lass uns das Kommando, dass wir ausgeführt haben, genauer ansehen um zu verstehen wie es funktioniert. Als Erstes rufen wir den Programmnamen auf.

      osmosis

Als nächstes liefern wir die Eingabedatei. Erinnere dich, dass dies eine komprimierte Datei ist. **--rbf** ist eine Abkürzung für **--read-pbf-fast**. Osmosis versteht, dass die angegebene Datei nach diesem Flag die Datei ist, die wir lesen wollen.  

      --rbf sample_osmosis.osm.pbf

Das nächste Stück unseres kommandos lautet *--nkv keyValueList="amenity.school"". Du wirst erraten haben, dass dies bedeutet, dass osmosis alles mit dem Tag **amenity=school** ausfiltern soll. **--nkv** ist eine Abkürzung für **--node-key-value**. Das Kommando bedeutet, dass Osmosis alle Nodes mit den angegebenen Schlüsseln (Keys) und Werten (Values) der folgenden Liste herausfiltern soll. Weitere key.value Paare können hinzugefügt und durch Kommas getrennt werden.  

      --nkv keyValueList="amenity.school"

Als letztes liefern wir den Namen und das Format der Ausgabedatei. Wir verwenden das Flag **--wx**, welches eine Abkürzung für **--write-xml** ist. Beachte, dass wir genauso **--wb** verwenden könnten als Gegenpart zu **--rbf**, wenn wir die Ausgabe wieder im PBF Format haben wollen.  

      --wx schools.osm

Weiter
---------------

Die Anzahl der Aufgaben welche mit Osmosis bearbeitet werden können ist enorm und um mehr zu lernen, sollte auf die [Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) Wiki-Seite verwiesen werden.  

Eine nützliche Aufgabe ist es große OSM Rohdatendateien in mehrere Teile zu teilen. Entweder durchdas liefern von Rechtecken oder durch das erstellen von Polygondateien. Eine gute basis kann auf der [Osmosis Examples page](http://wiki.openstreetmap.org/wiki/Osmosis/Examples) gefunden werden.  

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png


