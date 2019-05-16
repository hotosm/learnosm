---
layout: doc
title: OSMTracker
permalink: /de/mobile-mapping/osmtracker/
lang: de
category: mobile-mapping
---

OSMTracker
==============

> Überprüft 2016-02-08
  
**Dieser Artikel bezieht sich auf OSMTracker für Android - es gibt ein ähnliches Produkt für Windows Mobile.**  
OSMTracker erlaubt das Erstellen einer GPX-Spur einer Reise, mit einer Sammlung von „Wegpunkten“ entlang der Route. Tonspuren, Fotos und andere Notizen können auch hinzugefügt werden, und allen wird eine räumliche Koordinate zugewiesen.

Schnellstart
-----------

![OSMTracker_1][]  

1. Klicken Sie auf das Kreuz um eine neue Spur zu erstellen.  
2. Der Bildschirm zeigt nun Buttons an - warten Sie, bis sie nicht länger ausgegraut sind, was anzeigt, dass dem GPS eine Standortbestimmung gelungen ist  
3. Drücken Sie die entsprechenden Buttons, wenn Sie genau an dem Objekt stehen, dass kartiert werden soll. Sie können mithilfe der Buttons auch Tonspuren, Fotos oder Notizen erstellen.  
4. Wenn Sie fertig sind, drücken Sie auf das Diskettensymbol, um die Spur und die Wegpunkte abzuspeichern.  
5. Um die Spur in eine GPX-Datei zu konvertieren, drücken Sie lange auf den Eintrag in der Liste und wählen Sie die entsprechende Option aus.  
6. Übertragen Sie die Spur, die Bilder und Audiomitschnitte auf Ihren Rechner und aktualisieren Sie damit OSM.  


Installation von OSMTracker
-------------------------

Installieren Sie OSMTracker von dem [Google play Store](https://play.google.com/store/apps/details?id=me.guillaumin.android.osmtracker).  
![OSMTracker Logo][]  
Falls benötigt, kann [das aktuellste Anwendungspaket](https://drive.google.com/folderview?id=0BxxhTXmYjyeSSjg1MFhJWnJLams#list) auch außerhalb des Google Play Stores heruntergeladen werden.  


OSMTracker-Konfiguration
------------------------

Starten Sie OSMTracker und drücken Sie auf den Menü-Button Ihres Android-Gerätes, wählen Sie anschließend **Einstellungen**.  

- **Dauer Sprachaufnahme** - Ihre Wahl, aber der Autor hat 30 Sekunden eingestellt.  
- **Sound aktivieren** - gibt einen Ton aus, um Sie zu warnen, ob Sprachaufnahme beginnt oder endet.  
- **OSM-Anmeldedaten zurücksetzen**. Dieser Button ist ausgegraut, bis Sie eine .gpx-Datei mit OSMTracker auf OpenStreetMap mit Ihren Anmeldedaten hochladen wollen.  
- **GPS Einstellungen** Welche Methoden Ihr Android-Gerät benutzt, um Ihren Ort zu bestimmen. Es wird empfohlen, **hohe Genauigkeit** einzustellen, damit das Gerät GPS, WLAN und mobile Netzwerke nutzt, um den Ort zu bestimmen.  
- **Prüfe GPS beim Start** Wenn Sie OSMTracker starten, wird überprüft, ob das GPS aus ist, und wenn es aus ist, fragt das Programm ob Sie es anstellen wollen.
- **GPS Zeit ignorieren** Falls ausgewählt, wird das Gerät die interne Uhr nutzen und nicht die Zeit, die vom GPS Signal kommt.  
- **GPS Intervall** Wählt den Zeitraum aus, wie oft der Standort bestimmt wird - für die beste Genauigkeit wird 0 oder 1 empfohlen, da beides sekündliche Positionsbestimmung bedeutet.  

> Die Frequenz beeinflusst jedoch die Batteriekapazität, wenn die App benutzt wird. Ihr Bildschirm wird die meiste Zeit an sein, genau wie das GPS, und Sie werden Fotos und Audioaufnahmen machen - alles führt zu starker Reduktion der Batterielaufzeit.  

- **Externes Speicherverzeichnis (SD)** Standard ist /osmtracker  

> Die aktuellsten Android-Geräte erlauben die Speicherung auf externen microSD- oder SD-Karten nicht. Obwohl das als 'externe Speicherung' bezeichnet wird, geht es eigentlich um **/storage/emulated/0/osmtracker**.  

- **Ein Verzeichnis je Track** Empfohlen, da dann alle entsprechenden Audiomitschnitte, Fotos und GPX-Spuren im gleichen Ordner gespeichert werden, mit dem Datum und der Uhrzeit der GPX-Dateierstellung als Ordnernamen.  
- **Dateiname für Tracks** Optionen, von denen Sie auswählen können, falls Sie eine Vorliebe für eine spezielle Form der Dateinamen haben.  
- **Genauigkeit in der GPX-Datei** Empfohlen - Die Wegpunkte enthalten dann mögliche Ungenauigkeiten in Metern. Z. B. *Fußweg (4,0m)*. Diese Information kann sehr nützlich für OSM sein, um zu entscheiden ob man ein existierendes Objekt mithilfe der GPX-Spur anpasst oder nicht.   
- **Benutze HDOP-Annäherung** Bezieht sich auf zusätzliche Berechnungen, um die Positionsbestimmung zu verbessern (Horizontal Dilution of Precision).  
- **Export der Kompass-Richtung** Definiert ob und wie die Kompass-Daten in die GPX-Datei exportiert werden.  
- **Standard Foto-Quelle** Standardmäßig werden Sie Fotos mit Ihrer Kamera durch diese App machen, aber Sie können auswählen, ob Sie Fotos benutzen wollen, die sich bereits auf Ihrer Galerie befinden.  
- **Bildschirm immer an** Wählen Sie das aus, wenn Sie ständig auf Buttons klicken, Fotos oder Audio-Aufnahmen machen - falls nicht, schalten Sie das aus, da dies weniger Batterie verbraucht.  
- **Motiv Hauptbildschirm** Optionen für die Kontrasteinstellungen, falls Sie die Buttons nicht sehen können.  
- **Tastenlayout** Sie können benutzerdefinierte Buttons entwerfen und installieren sowie sie benutzen, wenn Sie diese Option benutzen. Für eine weitere Beschreibung dieser Funktion [siehe unten](/de/mobile-mapping/osmtracker/#button-presets).   
- **Hintergrundkarte** Beim Drücken und Halten auf einen aufgenommenen Track können Sie ihn anzeigen, und die App wird OpenStreetMap-Daten für den Hintergrund herunterladen.  

> Das benötigt eine Datenverbindung für das Herunterladen der Karte. Sie müssen diese Funktion nicht nutzen, außer Sie wollen.  

- **Hintergrund-Karte Anbieter** Falls Sie sich entschlossen haben, Kartendaten als Hintergrund zur Anzeige zu nutzen, können Sie auswählen, was für eine Karte Sie im Hintergrund sehen wollen.  
- **Ausrichtung** Wollen Sie, dass sich der Bildschirm dreht, oder wollen Sie Hoch- oder Querformat?  

Track Liste
--------------

![OSMTracker_2][]  
Nachdem Sie Ihre erste Erkundung durchgeführt haben, Buttons gedrückt haben, Audiomitschnitte erstellt und Fotos gemacht haben, klicken Sie am Ende auf die Diskette, um Ihren Track zu beenden. Nun drücken und halten Sie den Track in der Liste und Optionen kommen:  

- **Tracking fortsetzen** Nützlich, falls Sie festgestellt haben, dass Sie etwas vergessen haben  
- **Anzeigen** wird den Track anzeigen, möglicherweise mit einer Hintergrundkarte je nach Ihren ausgewählten Einstellungen bei **Hintergrundkarte**.  
- **Als GPX exportieren** - notwendig, um den Track und die Wegpunkte in einem Editierprogramm nutzen zu können.  
- **Zu OpenStreetMap hochladen** Nutzen Sie diese Option, um Ihren Trace in OpenStreetMap hochzuladen - Sie benötigen dazu einen OpenStreetMap Account ([Hier erklärt](/de/beginner/start-osm/)) und Sie müssen die App autorisieren, damit Sie Tracks zu Ihrem Account hochladen können. Siehe auch [GPS Traces - GPX Dateien unten](/de/mobile-mapping/osmtracker/#gps-traces--gpx-files) für weitere Informationen, warum das so wichtig für OpenStreetMap ist.  

> **Achtung, löschen Sie Ihren Track noch nicht** Sie haben bisher nur den Trace und nicht die Wegpunkte, Fotos etc. hochgeladen. Behalten Sie alles bis es in einen Computer fürs Editieren übertragen wurde.  

- **Löschen** Selbsterklärend.  


Tastenlayout
--------------

Falls Sie für einen bestimmten Grund erkunden, und der benötigte Wegpunkt nicht verfügbar ist, können Sie Ihre eigenen Tastenlayouts vor Ihrer Erkundung erstellen, sie ins Telefon laden und sie während der Erkundung und wenn Sie sie brauchen auswählen und sogar während der Erkundung wechseln. Da das Layout eher einer privaten Notiz entspricht, muss es nicht den OSM-Tagging-Richtlinien entsprechen. Z. B. können Ihre Buttons so heißen:  

- 1 Familie,  
- 2 Familien,  
- 3 Familien,  
- 4 Familien,  
- Haus des Anführers,  
- 20% beschädigt,  
- 40% beschädigt,  
- 60% beschädigt,  
- 80% beschädigt,  
- zerstört,  
- unbrauchbar für Lastwagen,  
- Allradantrieb benötigt,  
- etc..  

Für eine volle Beschreibung zur Erstellung eines Tastaturlayouts siehe [OSMTracker Wiki Abschnitt](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). Das ist eine [Beispieldatei.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Audiomitschnitt-, Foto- und Textgrößen  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

Falls spätere Dateiübertragung ein Problem ist, sollten Sie die entsprechenden Dateigrößen berücksichtigen - wie der Screenshot zeigt, sind Fotos im Vergleich zu GPX-Dateien oder 10-Sekunden-Audiomitschnitten sehr speicherplatzintensiv.  


GPS Traces - GPX-Dateien
----------------------  

![OSMTracker JOSM][]  

GPS Traces in der Form von GPX-Dateien bestehen aus einer Reihe von Elementen, grundsätzlich 'Trace' und 'Wegpunkten'. Der obere Screenshot zeigt Ordnerinhalte, die von OSMTracker erstellt wurden, die in JOSM zur Bearbeitung geladen wurden, inklusive Satellitenbilder zur Unterstützung. Das Quadrat in der Mitte des Traces deutet auf ein Foto, dass an dieser Position gemacht wurde - klicken Sie darauf um es zu sehen.  

Falls Sie navigieren und ein GPS benutzen, um sich Richtungen anzeigen zu lassen, wird Ihnen gelegentlich auffallen, dass es erneute Berechnungen durchführt. Das ist normal, weil die interne GPS-Positionsbestimmung nicht unbedingt zu dem Ort passt, den das GPS als Straße erwartet - hier gibt es einen gewissen Fehlerspielraum, da Straßen an einer leicht falschen Stelle eingezeichnet sein können, oder die Straßenposition sich nach der Kartendatenerstellung verändert hat.  
Freiwillige, die OpenStreetMap aktualisieren, können alle Traces, die zu einer bestimmten Gegend vorliegen, herunterladen, um:  

1. Straßen und Pfade einzuzeichnen, die auf Satellitenbildern wegen Wolken, Bäumen, Schatten, Gebäuden etc. nicht sichtbar sind  
2. Das Satellitenbild an die korrekte Position anzupassen - hier gibt es oft erstaunliche Unterschiede.  

Obwohl schon eine einzelne GPX-Spur sehr nützlich ist, kann es sein, dass sie nicht sehr genau ist und bis zu 30 Meter Abweichung hat. Wenn mehrere Spuren vorhanden sind, ist der genaue Weg leicht zu sehen - z. B. zeigt der untere Screenshot den Download aller GPX-Spuren einer Stadt, die die Hauptstraßen anzeigen.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png