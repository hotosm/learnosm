---
layout: doc
title: Der Ablauf beim Editieren mit JOSM
permalink: /de/josm/more-about-josm/
lang: de
category: josm
---

Der Ablauf beim Editieren mit JOSM
==================================
Im vorhergehenden Abschnitt haben Sie JOSM installiert und Ihre ersten Punkte, Linien und Polygone gezeichnet.
Sie haben diesen Objekten Voreinstellungen zugewiesen und weitere Informationen angehängt. Schließlich waren
Sie in der Lage, Ihre eigene Karte in JOSM zu erstellen.

Das war schon eine gute Übung und jetzt sind wir soweit, OpenStreetMap zu bearbeiten.

In diesem Abschnitt werden wir uns näher mit der JOSM-Oberfläche befassen und lernen, damit die Kartendaten
von OpenStreetMap zu bearbeiten.

Der Bearbeitungs-Zyklus
---------------------
Das Bearbeiten von OpenStreetMap mit JOSM geht ganz ähnlich wie mit dem iD-Editor den
wir schon kennengelernt haben. Die Unterschiede rühren daher, dass JOSM ein eigenes Programm ist.
Wenn wir etwas bei OpenStreetMap bearbeiten oder hinzufügen folgen wir immer diesen Schritten:

1. **Herunterladen** der aktuellen Kartendaten von OpenStreetMap
2. **Bearbeiten** auf der Grundlage von Satellitenbildern, GPS, Field Papers und eigenen Aufzeichnungen
3. **Speichern** der Änderungen auf OpenStreetMap

Herunterladen der OpenStreetMap-Daten
-------------------------------------
Am Anfang steht immer das Herunterladen der Daten für das Gebiet, das wir bearbeiten wollen. Denken Sie bitte daran,
dass Sie das jedesmal tun müssen, wenn Sie die Kartendaten bearbeiten wollen, da ständig andere Benutzer an der Karte 
Änderungen vornehmen.

-	Klicken Sie auf “Datei” links in der Menüleiste von JOSM und dann auf “Vom OSM-Server herunterladen”. 
    Danach öffnet sich ein Fenster mit dem Titel "Daten herunterladen". Sie können auch einfacher
    auf dieses Icon klicken:

![JOSM Download Button][]

-  In dem Download-Fenster sehen Sie eine Karte mit einem rosafarbenen Rechteck darüber. Sollten Sie keine
    Karte sehen, klicken Sie auf die Registerkarte "Interaktive Karte".

![JOSM Download Dialog][]

-  Das rosafarbene Rechteck entspricht dem Gebiet der Karte, das wir zur Bearbeitung herunterladen
    möchten. Verschieben und zoomen Sie mit der Maus zu einem Gebiet, das Sie gut kennen, etwa
    Ihrer Wohngegend. Das funktioniert genauso wie im Kartenfenster von JOSM. Mit der rechten Maustaste
    können Sie die Karte verschieben, mit dem Scrollrad können Sie hinein- und herauszoomen.

>	Auf einem Notebook kann man Probleme beim Zoomen bekommen. Wenn Sie mit JOSM arbeiten, tun Sie sich
>	mit einer Maus wesentlich leichter. Auf den meisten modernen Notebooks kann man aber mit dem Touchpad
>	auch ganz gut scrollen.

-  Zeichnen Sie ein Rechteck über dem gewünschten Gebiet. Um ein neues Rechteck zu zeichnen, klicken Sie
    in die Karte, halten Sie die linke Maustaste gedrückt und ziehen Sie mit der Maus ein Rechteck auf.
    Lassen Sie die Maustaste wieder los und das Rechteck ist fertig.
-  Wenn Ihnen Größe und Lage des Rechtecks gefallen, klicken Sie auf "Daten herunterladen" unten 
    in dem Fenster. JOSM holt jetzt die Daten für das Gebiet von OpenStreetMap ab und stellt Sie in dem
    Kartenfenster zur Bearbeitung dar.

### Hintergrundbilder laden
Wenn Sie in diesem Tutorial Ihre ersten Punkte mit dem iD-Editor bearbeitet haben, erinnern Sie sich 
vielleicht, dass hinter den Kartendaten ein Satellitenbild zu sehen war, von dem Sie Objekte abzeichnen
konnten. Diese Bilder stammen von Microsoft Bing, die uns freundlicherweise erlaubt haben, ihre Satellitenbilder
als Grundlage für OpenStreetMap zu verwenden.

-  Um die Bing-Satellitenbilder in JOSM anzuzeigen, klicken Sie auf "Hintergrundbild" in der Menüleiste von
    JOSM und wählen Sie “Bing Luftbild”.

>   Wenn Sie diesen Eintrag nicht im Hintergrundbild-Menü sehen, müssen Sie ihn erst in den JOSM-Einstellungen
>   aktivieren. Klicken Sie auf Bearbeiten -> Einstellungen und dann auf das Icon
>   “WMS TMS”. Eventuell müssen Sie auf den Pfeil nach unten klicken um es zu sehen.
>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>
>   Klicken Sie auf “Bing Luftbild” und dann auf “Aktivieren”.


### Ein Überblick über JOSM
Jetzt haben Sie OpenStreetMap-Daten heruntergeladen und Bing-Satellitenbilder angezeigt.
Werfen wir wieder einen Blick auf die Oberfläche von JOSM.

![JOSM layout][]

Das Hauptfenster sollte Ihnen schon vertraut sein - es ist das Kartenfenster in dem Sie den
Großteil der Arbeit erledigen werden. Es dient zum Betrachten, Bearbeiten und Hinzufügen von
OpenStreetMap-Daten.

Rechts vom Kartenfenster sehen Sie eine Reihe von weiteren Fenstern für unterschiedliche Funktionen.
Nach einer Neuinstallation von JOSM erscheinen hier typischerweise Fenster zu Ebenen, 
Merkmale/Mitgliedschaften und Auswahl. Wenn Sie einen Punkt, eine Linie oder einen Linienzug im
Kartenfenster anwählen, erscheint er im Auswahlfenster. Im Fenster "Merkmale/Mitgliedschaften" werden
Ihnen Informationen über das Objekt angezeigt und der Benutzername des letzten Bearbeiters erscheint im 
Autoren-Fenster.

Sie können diese Fenster öffnen und schließen in dem Sie entweder auf die Icons links unten in JOSM klicken 
oder die entsprechenden Einträge im Fenster-Menü an-/abwählen. Oberhalb dieser Icons befinden sich diejenigen,
mit denen Sie die Aktionen Ihrer Maus bestimmen. Einige davon kennen Sie schon, das Auswahlwerkzeug und das
Zeichenwerkzeug. Darunter befinden sich Werkzeuge zum zoomen, Objekt löschen, Formen zeichnen oder um Linien 
parallel zu anderen Linien zeichnen.


Bearbeiten
----
Wir sind erst mit Schritt eins des Zyklus fertig - Herunterladen. Wir lassen uns in JOSM Satellitenbilder
als Vorlage anzeigen. Als nächstes werden wir die Karte bearbeiten und neue Daten hinzufügen.

Je nachdem, welches Gebiet sie ausgewählt haben, können darin sehr viele oder sehr wenige Daten
enthalten sein. Es handelt sich um die Arten von Daten, die Sie schon kennen (Punkte, Linien, Linienzüge) und
sie repräsentieren real existierende Objekte.

-	Verwenden Sie die Techniken, die Sie schon gelernt haben, um einige Punkte zur Karte hinzuzufügen, 
	deren reale Objekte Sie kennen. Wenn Sie Fehler entdecken, versuchen Sie diese zu korrigieren.
-	Seien Sie am Anfang ruhig etwas vorsichtig. Wenn Sie sich bei einem Objekt nicht sicher sind
	dann lassen Sie dessen Daten besser unverändert.
-	Wenn Sie ein Objekt verschieben wollen, benützen Sie das 
    **Auswahlwerkzeug**. Klicken Sie auf das Objekt und ziehen Sie es an den gewünschten Ort. Damit können
    Sie falsch platzierte Objekte korrigieren.

![JOSM select tool][]

-  Verwenden Sie das **Zeichenwerkzeug** um neue Objekte zu erzeugen.
    Wenden Sie eine Vorlage auf diese Objekte an, so wie sie es im letzten Abschnitt gelernt haben. 

>	Bearbeiten Sie nie die Karte außerhalb des Gebiets, das Sie heruntergeladen haben.
>	Das heruntergeladene Gebiet hat einen klaren Hintergrund,
>	während das übrige Gebiet diagonal gestreift dargestellt wird.
>
>	![JOSM area downloaded][]

Änderungen speichern
--------------------
Der dritte und letzte Schritt besteht darin, die Änderungen, die wir an der OpenStreetMap-Datenbank
durchgeführt haben, hochzuladen. Dazu müssen wir mit dem Internet verbunden sein.

-  Klicken Sie auf “Datei” in der Menüleiste und dann auf “Daten hochladen”. Es öffnet sich das 
    Hochlade-Fenster. Sie können auch einfach auf das entsprechende Icon in der oberen Leiste klicken:

![JOSM Upload Button][]

-  Es erscheint ein Fenster, das eine Liste der Objekte enthält, die Sie hinzugefügt haben, sowie eine
    Liste der Objekte, die Sie geändert oder gelöscht haben. Darunter können Sie einen Kommentar über Ihre
    Änderungen eintragen. Sie sollten hier eine kurze aber aussagekräftige Beschreibung geben - möglichst auf
    Englisch, da es sich um ein internationales Projekt handelt.

![JOSM Upload Dialog][]

-  Klicken Sie auf  “Änderungen hochladen”.

-	Wenn Sie zum ersten Mal Änderungen bei OpenStreetMap hochladen, werden Sie
    nach Ihrem OpenStreetMap-Benutzernamen und -Passwort gefragt.
-	Sie können in dem Fenster, das dazu erscheint, auch anklicken, dass
    Ihre Daten gespeichert werden sollen. Dann müssen Sie sie in Zukunft nicht
    mehr eingeben. Klicken Sie auf “Authentisieren”.

![JOSM Authenticate][]

-	Je nach Datenmenge kann das Hochladen der Änderungen schon etwas dauern,
    aber damit sind Sie dann fertig! Sie haben die Daten für OpenStreetMap bearbeitet.

>	Achten Sie beim Bearbeiten immer darauf, Ihre Änderungen hochzuladen, bevor Sie
>	JOSM schließen. Auch wenn Sie noch weitere Änderungen vornehmen wollen, laden Sie immer
>	Ihre Änderungen hoch und laden Sie sie später wieder herunter, wenn Sie wieder Zeit zum Arbeiten
>	haben. Sie wollen doch nicht Ihre investierte Zeit und Arbeit verlieren!

Betrachten Sie Ihre Änderungen auf der Karte
--------------------------------------------
-  Öffnen Sie [http://openstreetmap.org/](http://openstreetmap.org/) in Ihrem Internet-Browser.
-  Navigieren Sie auf der Karte zu dem Gebiet, das Sie bearbeitet haben.
-  Sie sollten jetzt Ihre Änderungen auf der Karte sehen! Wenn nicht,
    drücken Sie Strg+R um die Webseite neu zu laden. Manchmal wird die Karte nicht von selbst
    auf den aktuellen Stand gebracht und muss neu geladen werden.
-  Sie sehen Ihre Änderungen immer noch nicht? Kein Grund zur Panik - es kann auch mal mehrere Minuten
    dauern, bis die Änderungen auf der Karte sichtbar werden. Überprüfen Sie zunächst
    Ihre Änderungen in JOSM um sicherzugehen, dass Sie alles richtig gemacht haben. Faustregel:
    Wenn Ihr Punkt in JOSM ein Icon aufweist, dann sollte er auch auf der Hauptkarte der
    OpenStreetMap-Webseite zu sehen sein.



[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png

