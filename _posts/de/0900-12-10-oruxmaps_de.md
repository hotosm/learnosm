---
layout: doc
title: OruxMaps
permalink: /de/mobile-mapping/oruxmaps/
lang: de
category: mobile-mapping
---

OruxMaps
===============

> Diese Anleitung kann heruntergeladen werden als  [OruxMaps_en.odt](/files/OruxMaps_en.odt) oder [OruxMaps_en.pdf](/files/OruxMaps_en.pdf)  
> Gereviewt am 2016-08-04 und obwohl leicht veraltet ist es immer noch brauchbar und enthält einen Link zum eigenen Softwarehandbuch der Seite.

In diesem Abschnitt lernen wir OruxMaps aufzusetzen, Wegpunkte zu erstellen, ein Tracklog zu lesen und wie man ein Tracklog exportiert zur Verwendung in JOSM.  

​OruxMaps installieren
------------------

Man installiert die App durch suchen in Google Play Store nach **OruxMaps**, OruxMaps sollte unter den ersten Suchergebnissen auftauchen.  

![Search OruxMaps in Play Store][]

Man klickt auf den **Installieren** Button und drückt Akzeptieren nachdem die App Rechte erscheinen.  

![Install OruxMaps][]

Glückwunsch! OruxMaps ist nun auf dem Gerät installiert!  

OruxMaps verwenden
--------------------

Wenn man die Anwendung das erste Mal startet, sieht man einen Hinweis wie diesen:  

![Running OruxMaps for the first time][]

In OruxMaps kann man wählen, ob man Online oder Offline Karten verwenden möchte. Man verwendet am besten Offline Karten, da man diese auch ohne Internetverbindung verwenden kann. OruxMaps schlägt zwei Quellen für das herunterladen von Offline Karten vor. Falls man bereits Offline Karten besitzt, kann man diese hier auch verwenden! Am Anfang kann es etwas verwirren, wenn so viele Buttons vorhanden sind. Aber keine Sorge, nachfolgend werden alle Buttons erklärt:  

![Interface overview][]

Source: [OruxMaps Manual English Version](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Diese Anleitung kann aktueller als diese hier sein und kann in anderen Sprachen verfügbar sein.  

Die Hintergrundkarte kann man ändern unter **Maps \> Switch Maps**. Danach hat man zwei Optionen - man kann die **Online Karte** verwenden oder man kann 
**Offline Karten** verwenden. OruxMaps bietet viele Online Kartenquellen zur Auswahl, aber natürlich kann es Geld kosten, für die Datenübertragung auf das Gerät. Falls man nicht weis, wo man seine Offline Karten ablegt, geht man zu **Settings \>Maps**- In der Kartenverzeichnis option sieht man wo OruxMaps die
Offline Karten ablegt. Standardmäßig ist es im **OruxMaps/Mapfiles** Verzeichnis im internen Speicher.  

![Offline maps storage settings][]

Tracking starten
--------------

Bevor man mit dem Tracking beginnt, sieht man sich einige Einstellungen unter Track/Routes an. Die erste Einstellung ist **Auto GPX Creation**. Wählt man diese Einstellung, hilft einem OruxMap bei der Erstellung einer .gpx Datei direkt nach dem Beenden eines Track (Verwenden des Stop Tracking Feature). Nach dem Beenden eines Track geht man zu **OruxMaps/Tracklogs** im internen Speicher um an die .gpx Datei zu gelangen, ohne das Tracklog erst exportieren zu müssen im Track/Routes Management. Die zweite Einstellung ist **Ask Track Name**. Es ist sehr nützlich einen Track Namen zu definieren, bevor man mit dem Tracking beginnt, damit man genau die Namen seiner Tracks kennt.  

![Tracklog settings][]

Bevor man mit dem Tracking startet, muss man GPS auf dem Gerät aktivieren. Jegliche Funktionen in OruxMaps wie **Start GPS** und **Start Rec** werden nicht starten, wenn GPS nicht aktiviert ist. OruxMaps zeigt eine Benachrichtigung, falls GPS immer noch deaktiviert ist und leitet einen direkt zu den **Location Setting** im Gerät.  Aktiviert man die Standortfunktion im Gerät, zeigt es den Standort an durch Verwendung der **Start GPS** (1) Funktion in der rechten Leiste. Nachdem der Standort bestimmt wurde, startet man das Tracking durch Verwendung von ""Start Rec.** (2) in der rechten Leiste.  

![Start track recording][]

Um das Tracking zu stoppen, drückt man den gleichen Button (2) in der rechten Leiste. Nach dem Beenden speichert Oruxmaps das Tracklog in der internen Datenbank. Man greift auf das Tracklog zu durch Zugriff auf die **Routes** Leiste oben auf der Seite, man wählt **Manage**. Man findet alle Tracklog hier und kann die Routen ansehen durch drücken des entsprechenden Tracklog und der Auswahl von **Load the Track** (1). Falls man die Auto GPX Erstellung Funktion nicht verwendet kann man das Tracklog in zahlreiche Formate (GPX, KML, KMZ) exportieren durch Auswahl des Tracklog und **Export as** (2).  

![Managing tracklogs][]

Falls man bereits ein OpenStreetMap Konto hat, kann man den Track direkt mit OruxMaps hochladen. Bevor man das Tracklog hochlädt, setzt man seinen Benutzernamen und Passwort unter **Setting \> Integratiom \> OpenStreetMap**. Her gibt man Benutzernamen und Passwort ein. Man kann das Tracklog hochladen durch Verwendung von **Upload to (3)** in Track/Routes Management.  

Einige Fenster erscheinen und man wählt **OpenStreetMaps** (1) und anschließend den **Tracklog type** (2), gibt eine **Beschreibung** (3) und einen **Tag** (4) an. Wenn alles ausgefüllt wurde, drückt man **Upload GPX** (5) Die Benachrichtigung erscheint und man kann die GPS Spuren direkt auf der OpenStreetMap Webseite sehen durch Auswahl von **OK** (6).  

![Uploading tracks to OpenStreetMap][]

Wegpunkte hinzufügen
---------------------

![Creating a waypoint][]

Wenn man Wegpunkte hinzufügen möchte, geht man zum **Wegpunkt** Symbol (1) am oberen Ende der Seite und zu **Create** (2). Es bringt einen zur Wegpunkt Erstellungsseite und füllt den Wegpunkt Namen aus. Man kann weitere Informationen hinzufügen, zum Beispiel eine Beschreibung des Wegpunktes und der Koordinaten durch Prüfung der Koordinaten Checkliste. Man drück Akzeptieren um den Wegpunkt zu speichern.  

![Waypoint creation settings][]

Will man alle Wegpunkte sehen, geht man zu **Waypoint \> Manage**. Auf dieser Seite kann man die Einstellungen ändern oder Wegpunkte löschen und exportieren. Um alle Wegpunkte in der **Karte** zu sehen wählt man alle Wegpunkte und geht zu in Karte anzeigen (1) und falls man die Wegpunkte exportieren möchte, drückt man **Export** (2). Alle exportierten Wegpunkte werden im internen Speicher gespeichert (standardmäßig ist es gespeichert unter **oruxmaps/geocaches**).  

![Managing save waypoints][]

Zusammenfassung
-----------

Glückwunsch! Man kennt nun OruxMaps für die Verwendung vor Ort. Zuerst kann es schwierig sein, aber wenn man weiter macht wird man mit der Anwendung vertraut.  

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