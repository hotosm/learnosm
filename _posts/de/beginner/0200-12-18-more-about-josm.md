---
layout: doc
title: Der Ablauf beim Editieren mit JOSM
permalink: /de/beginner/more-about-josm/
lang: de
category: beginner
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
Das Bearbeiten von OpenStreetMap mit JOSM geht ganz ähnlich wie mit dem iD-Editor, den
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

-	Klicken Sie auf “Datei” links in der Menüzeile von JOSM und dann auf “Vom OSM_Server herunterladen”. 
    Danach öffnet sich ein Fenster mit dem Titel "Daten herunterladen". Sie können auch einfacher
    auf dieses Icon klicken:

![JOSM Download Button][]

-  In dem Download-Fenster sehen Sie eine Karte mit einem rosafarbenes Rechteck darüber. Sollten Sie keine
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

-  Um die Bing-Satellitenbilder in JOSM anzuzeigen, klicken Sie auf "Hintergrundbild" in der Menüzeile von
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

Rechts vom Kartenfenster sehen Sie eine Reihe von weiteren Fenster für unterschiedliche Funktionen.
Nach einer Neuinstallation von JOSM erscheinen hier typischerweise Fenster zu Ebenen, 
Merkmale/Mitgliedschaften und Auswahl. Wenn Sie einen Punkt, eine Linie oder einen Linienzug im
Kartenfenster anwählen, erscheint er im Auswahlfenster. Im Fenster "Merkmale/Mitgliedschaften" werden
Ihnen Informationen über das Objekt angezeigt und der Benutzername des letzten Bearbeiters erscheint im 
Autoren-Fenster.

Sie können diese Fenster öffnen und schließen in dem Sie entweder auf die Icons links unten in JOSM klicken 
oder die entsprechenden Einträge im Fenster-Menü an-/abwählen. Oberhalb dieser Icons befinden sich diejenigen,
mit denen Sie die Aktionen Ihrer Maus bestimmen. Einige davon kennen Sie schon, das Auswahlwerkzeug und das
Zeichenwerkzeug. Darunter befinden sich Werkzeuge zum zoomen, Objekt löschen, Formen zeichnen oder Linien 
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
	dann lassen Sie diese Daten besser unverändert.
-	Wenn Sie ein Objekt verschieben wollen, benützen Sie das 
    **Auswahlwerkzeug**. Klicken Sie auf das Objekt und ziehen Sie es an den gewünschten Ort. Damit können
    Sie falsch platzierte Objekte korrigieren.

![JOSM select tool][]

-  Use the **draw tool** to draw new points, lines, and shapes.
    Describe these objects by selecting from the Presets menu, as you
    did in the previous section. 

>	Never edit the map outside of the area you have downloaded. You
>	can see the rectangular area you have downloaded has a solid background,
>	while the area you have not downloaded has diagonal pinstriped lines.
>
>	![JOSM area downloaded][]

Save Changes
--------------
The third and final step to complete our edits is to upload the changes we have
made to the OpenStreetMap database. To save the changes, we must
be connected to the internet.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

![JOSM Upload Button][]

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

![JOSM Upload Dialog][]

-  Click “Upload Changes”.

-	If this is your first time saving changes to OpenStreetMap, you will
    be asked for your OpenStreetMap username and password.
-	Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

![JOSM Authenticate][]

-	You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have edited the map on OpenStreetMap.

>	When you are editing, always be sure to upload your changes before you
>	close JOSM. Even if you still have more editing to do, upload your changes,
>	and then go through the process again later when you have time to edit. You
>	don't want to lose your work!

See your changes on the map
---------------------------
-  Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-  Move the map to the area that you edited.
-  You should see your changes now appearing on the map! If you don’t,
    try pressing CTRL+R to refresh the web page. Sometimes the map
    doesn’t update properly and needs to be reloaded.
-  What if you don’t see your changes? Don’t worry - it may take a few
    minutes for the changes to be shown on the map. Also, check your
    additions in JOSM to make sure that you added them correctly. A good
    general rule is, if your point has an icon in JOSM, then it should
    be seen on the main map at the OpenStreetMap website.

Summary
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing
is great, but it's not the only aspect of making maps. Of course you also
need to learn how to go outside and collect information about places on the
ground.

In the next sections we will learn about two methods - GPS and Field Papers,
which are used to collect geographic data. The information from both of these
can then be imported into JOSM, and used to edit the map.

Moving Forward
--------------

Click on the link for further reading on:  
 
*  [Surveying with GPS](/en/beginner/using-gps/)  
*  [Field Papers](/en/beginner/field-papers/)
*  [Editing Field Data](/en/beginner/editing-with-josm/) 


[JOSM Download Button]: /images/beginner/josm_download-button.png
[JOSM Download Dialog]: /images/beginner/josm_download-dialog.png
[JOSM Preferences up down]: /images/beginner/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/beginner/josm_preferences-wms-tms.png
[JOSM layout]: /images/beginner/josm_layout.png
[JOSM select tool]: /images/beginner/josm_select-tool.png
[JOSM area downloaded]: /images/beginner/josm_area-downloaded.png
[JOSM Upload Button]: /images/beginner/josm_upload-button.png
[JOSM Upload Dialog]: /images/beginner/josm_upload-dialog.png
[JOSM Authenticate]: /images/beginner/josm_authenticate.png

