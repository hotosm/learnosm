---
layout: doc
title: GPSLogger für Android
permalink: /de/mobile-mapping/gpslogger/
lang: de
category: mobile-mapping
---

GPSLogger für Android
=====================


![GPSLogger][]

Eine einfache, leichtgewichtige und minimalistische App zum Aufzeichnen von GPS Spuren auf Android. Die leicht anwendbare Oberfläche mit dem einzigen Anspruch GPS aufzuzeichnen und ansonsten ruhig zu bleiben macht es zu einer batteriefreundlichen Anwendung, die GPS Tracks in GPX, KML, NEMA und Textdatei Formate speichern kann. Log-Dateien können automatisch zu OpenStreetMap, einem OpenGTS Server, DropBox, FTP Server, HTTP Server hochgeladen oder an eine Email-Adresse versendet werden.  

<https://f-droid.org/en/packages/com.mendhak.gpslogger/>  

GPSLogger für Android ist ein frei verwendbare App und ein aktiv gepflegtes Open Source Projekt. Spenden werden gerne gesehen, um die App weiter zu verbessern. Falls man eingebunden werden möchte (z.B. zur Übersetzung in andere Sprachen, Fehlermeldungen oder für neue Features), kann man das [Repository](https://github.com/mendhak/gpslogger) besuchen.  

> OpenGTS bezieht sich auf das [Open GPS Tracking System](http://opengts.sourceforge.net/) Projekt  


Features
--------  

* Logging basierend auf Zeit oder Distanz Intervalle  
* Batteriefreundliche Konfigurationen  
* GPS Genauigkeitsfilter loggen keine unzuverlässigen Punkte  
* Auswahl von Wifi, Telefonmasten und / oder GPS Satelliten als Standort Informationsquellen  
* Loggen in GPX, KML, CSV, TXT oder NMEA Dateien mit ZIP Unterstützung  
* Imperial oder Metrische Einheiten  
* Autostart beim Booten  
* Läuft im Hintergrund  
* Arbeitet auch wenn andere GPS Anwendungen laufen  
* Automatisches senden an Email / FTP / DropBox / Google Docs / OpenStreetMap / OpenGTS zu benutzerdefinierten Intervallen  
* Leicht vorkonfigurierbare Text Konfigurationsdateien zum Verteilen an mehrere Benutzer  


Benutzeroberfläche
--------------------------

![Canvass1][]

Der **Menü** Button bietet mehr Optionen zum Konfigurieren der App.  
Die **Ansichten Auswahl** lässt einen wählen, wie Informationen auf dem Bildschirm angezeigt werden.  
Der **Hilfe** Button bietet zusätzliche Informationen zur Verwendung der App.  
Der **Anmerkung** Button lässt einen Beschreibungen zu einen Punkt hinzufügen.  
**Loge einen Punkt** Button lässt einen manuell Wegpunkte loggen.  
**Hochladen** lässt einen auswählen aus verschiedenen Optionen über das Hochladen von Log-Dateien. Das beinhaltet eine automatische Option zum Senden an:  

- OpenStreetMap,  
- Google Drive,  
- DropBox,  
- ein FTP Server,  
- ein OpenGTS Server oder  
- das Senden des Logs an eine Email Adresse.  

Der **Teilen** Button lässt einen eine oder mehrere Log-Dateien auswählen, die man mit anderen Menschen teilen kann über Bluetooth oder SMS. Abhängig davon welche Apps man auf seinem Gerät installiert hat, hat man weitere Optionen zur Verfügung.  


![Canvass2][]

Der **Logging starten** Button ist blau.Wenn man den Button drückt, um die Aufnahme zu starten, wird der Button grün.  
Unter **Koordinaten** wird der zuletzt aufgezeichnete GPS Punkt angezeigt und aktualisiert, sobald neue Koordinaten verfügbar sind.  
Das **Satelliten** Icon zeigt mit wie vielen Satelliten man verbunden ist.  
Die **Höhe** zeigt Höhendaten an.  
Die **Dauer** zeigt die vergangene Zeit seit des Drücken des Start Buttons.  
Die **Distanz** zeigt die insgesamt aufgezeichnete Distanz.  
Die **Dateitypen** geben an, welche Art von Log-Dateien erzeugt werden, während **Dateipfad** den Pfad der Datei auf dem Gerät oder der Speicherkarte angibt.  
Die **Status** Anzeige wird grün während der Aufnahme, während ein Spinner angezeigt wird wenn das Gerät versucht den Standort zu ermitteln.  
Die **Genauigkeit** zeigt die Genauigkeit der aufgezeichneten Daten an, was abweichen kann je nach Empfänger, die Anzahl der Verfügbaren Satelliten, der Wettersituation oder bei versperrter Sicht zum Horizont.  
Der **Kurs** zeigt die Richtung an, in die man sich bewegt.  
Die **Geschwindigkeit** zeigt an wie schnell man sich bewegt.  
**Geloggte Punkte** zeigt die Anzahl der aufgezeichneten Punkte seitdem der Start Button gedrückt wurde.  


Menüs
--------------------------

![Menus][]

Unter **Allgemeine Optionen** findet man die Einstellungen für *Starten beim Booten*, *Maßeinheit* (Metrisch oder Imperial), *Debug Datei* und *Versionsinformationen*.  

![Menus1][]

Unter **Logging Details** findet man die Einstellungen für *Dateiformate* (es werden mehrere Formate gleichzeitig unterstützt), *Verzeichnis* Pfade für die Logs, Regeln zu *Neue Dateien erstellen* und *Angepasste Dateinamen*.  

![Menus2][]

![Menus3][]

Unter **Performanz** findet man die Einstellungen für *Location Provider*, *Timing*, *Filter* und *Empfänger*. Unter der Location Provider Option kann man die Quellen zur Standortbestimmung setzen: **GPS** - Navigationssatelliten; **Netzwerk** - Telefonmasten; **Passiv** - ermöglicht es GPSLogger Standortkoordinaten von anderen Apps zu "borgen", um Batterie zu sparen, indem die erneute Anfrage verhindert wird.  

![Menus4][]

![Menus5][]

Unter **Automatisch senden, Emailen und hochladen** findet man die zahlreichen Hochladen Optionen für OpenStreetMap, Google Drive, FTP, Dropbox.  

![Menus6][]

Eine weitere Möglichkeit zu OpenStreetMap beizutragen ist es GPS Spuren hochzuladen. Eine Spur (Trace) ist eine Aufzeichnung seines Standortes zu bestimmten Zeit- oder Distanzintervallen, aufgezeichnet als geografische Koordinaten (Länge, Breite, Höhe). Sie können als Hintergrundlayer während der Bearbeitung von Karten verwendet werden und sind beim Hinzufügen von Elementen zur Karte nützlich, ähnlich den Luftbildern.  

#### OpenStreetMap Optionen

![osm0][]

**Automatisches Senden erlauben** ermöglicht automatisches Hochladen von Log-Dateien.  
**Diese App autorisieren** erlaubt es der App GPS Spuren zu OSM hochzuladen unter Verwendung der OSM Kontos.  
Die **Sichtbarkeit**, **Beschreibung**, **Tags** Optionen sind deaktiviert bis man die App autorisiert hat GPS Spuren hochzuladen zu dürfen. Diese Einstellungen werden für die GPS Spuren verwendet, die in die OpenStreetMap Datenbank hochgeladen werden.  
Wenn man **Diese App autorisieren** klickt, wird man zum Internet Browser und der OpenStreetMap Webseite weitergeleitet. Falls man nicht eingeloggt ist, wird man nach seinen Benutzerdaten gefragt.  

![osm2][]

Nachdem man sich anmeldet sieht man eine Seite wie unten zum Verifizieren der Anfrage der App und dem Recht zum *Hochladen von GPS Spuren*. Man klickt auf den *Änderungen speichern* Button um die App zu autorisieren.  

![osm3][]

Zurück in der GPSLogger App zeigt sich der Bildschirm verändert, es sind zusätzliche Optionen verfügbar.

![osm1][]

Klickt man auf die **Autorisierung löschen** Option, wird das recht zum Hochladen von GPS Spuren zum OSM Server entfernt.  

Es gibt einige *Sichtbarkeit* Optionen für GPS Spuren. *Private* Spuren werden anonym mit unsortierten Punkten geteilt. *Öffentliche* Spuren werden in der Spurenliste angezeigt als anonyme, unsortierte Punkte. **Nachverfolgbare** Spuren werden anonym geteilt mit Zeitstempel und sortierten Punkten. *Identifizierbare* Spuren werden in der Spurenliste mit Benutzernamen, Zeitstempel und sortierten Punkte angezeigt.  

Es wird empfohlen die Sichtbarkeit der GPS Spuren die man hoch lädt auf *identifizierbar* zu setzen. Die Daten und Metadaten sind so wertvoller für andere Mapper. Falls man Bedenken über Privatsphäre und Sicherheit hat, kann man entsprechende Einstellungen wählen oder keine Spuren hochladen.  

Eine Text *Beschreibung* hilft anderen zu verstehen, wie eine Spur aufgezeichnet wurde. Eine zu Fuß aufgezeichneten Spur ist nicht vergleichbar mit der Spur aufgezeichnet durch eine Drohne.  

Ein *Tag* ist ein kurzes Schlüsselwort, das verwendet werden kann, um Spuren mit Projekten, Orten oder Veranstaltungen in Verbindung zu bringen.  


Datensammlung
---------------

### Automatische Aufzeichnung und das Hochladen von GPS Spuren

Einmal konfiguriert läuft die Anwendung im Hintergrund und kann automatisch Spuren aufzeichnen und einmal am Tag zu konfigurierten Diensten hochladen. Dies erlaubt die automatische Sammlung von Spuren von täglichen Fahrten und hilft eine Sammlung von Straßen und Reisezeitdaten aufzubauen für späteres Mapping oder Analyse. Einmal konfiguriert bemerkt der Besitzer des Smartphones einen kleinen Einfluß auf Batterieverbrauch und muss sonst nichts mehr manuell machen. Etwas Ausprobieren ist notwendig um die richtige Balance zwischen Batterieverbrauch und Genauigkeit der GPS Spuren zu finden.  

Eine Beispielkonfiguration, um automatisch täglich Daten zu sammeln und zu OpenStreetMap hochzuladen, benötigt diese Einstellungen:  

#### Allgemeine Optionen  

* **Start on bootup** - On  

#### Logging Details  

* **Log to GPX** - On  
* **New file creation** - Once a day  

#### Leistung  

* **Time before logging** - 5  
* **Keep GPS on between fixes** - On (Wenn man dies ausschaltet, kann es zu "Sprüngen" in der GPS Spur kommen, während das Gerät jedes Mal GPS Satelliten benötigt.)  
* **Don't log if I'm not moving** - On  

#### Automatisches senden, emailen und hochladen  

* **Allow auto sending** - On  
* **Wie oft** - Für einmal täglich gibt man 1440 Minuten ein. Diese Einstellung kann problematisch sein, wenn man keinen Zugriff auf Daten oder Internet hat während es ausgeführt wird. Es startet mit dem zählen, wenn man das Gerät bootet oder den "Logging starten" Button drückt. Startet man also z.B. morgens, lädt es zur gleichen Zeit am nächsten Morgen die Daten hoch.  
* **OpenStreetMap** - Man erlaubt automatisches Senden und andere gewünschte Einstellungen, man sollte die Sichtbarkeit Einstellungen nochmals prüfen, falls man Bedenken zur Privatsphäre bei den GPS Spuren hat.  


### Manuelles Aufzeichnen von Spuren

Um Logs zu sammeln (in der einfachen Ansicht), klickt man einfach auf den blauen Button. Ein Spinner erscheint in der oberen rechten Ecke des Bildschirms um anzuzeigen, dass die Verbindung zu Satelliten aufgebaut wird. Ein grüner Kreis oben rechts zeigt an, dass das Logging läuft.  

Um das Aufzeichnen jederzeit zu stoppen, drückt man den grünen *Logging stoppen* Button.  

#### Anmerkung  

Um eine Notiz oder Beschreibung zu einem Log hinzuzufügen, klickt man auf das *Anmerkung* (Bleistift) Icon. Diese Option erlaubt es einem Text zur Beschreibung oder eine Notiz für Details zu hinterlassen, der mit dem aktuellen Punkt verbunden ist.  

##### Anmerkung aufrufen aus der Benachrichtigungszeile  

Es ist auch möglich den *Anmerkung* Button direkt aus der Android Benachrichtigungszeile aufzurufen. Man wählt die App in der Benachrichtigungsliste aus und klickt den *Anmerkung* Button.  

![annotate0][]

Das zeigt ein Eingabedialogfeld an, in das man Textdetails oder eine Notiz eingeben kann.

![annotate1][]

#### Log Intervalle

Log Intervalle werden durch Zeit oder Distanz bestimmt im **Performanz** Menü.  

##### Durch Zeit

**Zeit bis zum Logging** wird standardmäßig auf 60 Sekunden eingestellt. Wenn man zu Fuß unterwegs ist, kann man dies auf 5 bis 10 Sekunden einstellen. Wenn man mit einem auto unterwegs ist, kann man dies auf 1 Sekunde einstellen, um möglichste genaue Logs zu bekommen.  

##### Durch Distanz

Der **Distanzfilter** ist standardmäßig auf Null gesetzt. Man kann dies beliebig setzen, wenn man Koordinaten für alle X Einheiten vom letzten Punkt an aufzeichnen möchte.  


Spuren hochladen
------------------

#### zu OpenStreetMap

Man drückt den *Hochladen* Button und wählt die *OpenStreetMap* Option. Ein Auswahlfenster erscheint, in dem man Dateien auswählen kann. Man wählt die zum Hochladen gewünschten aus und drückt den *Ok* Button.  

![upload0][]

#### zu andere Optionen

Man kann andere Hochladen Optionen entdecken, diese sind aber außerhalb des Rahmens dieser Anleitung. Für weitere Details ist die GPSLogger für Android Projekt Webseite verfügbar.  


Spuren teilen 
---------------

Gegebenenfalls möchte man aufgezeichnete Spuren oder seine aktuelle Position mit anderen Leuten teilen. Die Teilen Optionen sind auf jedem Gerät anders, je nach installierten Apps auf dem gerät. Unten sieht man ein Beispiel, wie die Teilen Option aussehen könnte:  

![share0][]


Exportieren der Spuren in einen OpenStreetMap Editor
--------------------------------------------

Wenn man fertig ist mit Spuren aufzeichnen, können die Spuren in JOSM (oder einen anderen OpenStreetMap Editor wie iD) importiert werden.  

Man verbindet sein Android Gerät mit einem Computer (durch ein Datenkabel, Bluetooth oder über Internet) und kopiert die aufgezeichneten GPX Spuren (und vielleicht Multimedia Dateien). Auf seinem Gerätespeicher sucht man die GPX Spuren im Verzeichnis /Android/data/com.mendhak.gpslogger/files  

GPS Spuren mit JOSM und iD Editor zu verwenden ist leicht, da man nur die Dateien in die Anwendung (oder das Browsertab für iD) ziehen und loslassen muss.  

Weitere Details für iD Anwender gibt es im Abschnitt  [Konfiguration der Hintergrund Layer](http://learnosm.org/en/beginner/id-editor/#configuring-the-background-layer).  

Falls man den JOSM Editor verwendet findet man Anleitungen zur Verwendung von GPX Spuren, zusammen mit Multimedia Dateien, im Abschnitt [Öffnen in JOSM](http://learnosm.org/en/mobile-mapping/using-gps/#open-in-josm).  

Für andere OpenStreetMap Editoren bezieht man sich auf deren Software Dokumentation.  


Anzeigeoptionen
-----------------

Die Anzeige kann auf 3 Wegen angezeigt werden, welche auch immer man passend findet:

#### Einfache Ansicht

![view0][]

#### Detaillierte Ansicht

![view1][]

#### Große Ansicht

![view2][]


Zusammenfassung
-------

Großartig! Man wurde in eine leichtgewichtige, batterieeffiziente App eingeführt, die man auf seinem Android Gerät halten kann, um Spuren aufzuzeichnen, die zu OSM hochladen kann, oder die man mit seinem favorisiertem OpenStreetMap Editor verwenden kann.  

GPSLogger für Android ist ein weitere Werkzeug um Daten vor Ort zu sammeln ohne einen speziellen GPS Empfänger. Beiläufiges Sammeln von Vor-Ort-Daten ohne Internetverbindung ist möglich.  

Man nimmt sich etwas Zeit zum Üben und Kennenlernen mit der App bevor man mit Live Daten arbeitet.  

Dieser stellte das Konzept zur Verwendung des GPSLogger für Android zum Sammeln von GPS Spuren vor, für das Hochladen zu OpenStreetMap und die Übertragung der Logs auf den PC.  


Offizielle GPSLogger für Android Dokumentation
--------------------------------------------

Das Projekt pflegt eine [FAQ](http://code.mendhak.com/gpslogger/#faq) für allgemeine Fragen.

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