---
layout: doc
title: JOSM Erweiterungen
permalink: /de/josm/josm-plugins/
lang: de
category: josm
---

JOSM-Erweiterungen
==================


Je weiter Sie mit Ihren Bearbeitungstechniken vorankommen, desto mehr zusätzliche Eigenschaften von JOSM werden Sie anwenden wollen. JOSM erlaubt Ihnen, zahllose Erweiterungen zu installieren, die zusätzliche Funktionen bereitstellen.

Wenn Sie unseren Leitfaden für Anfänger durchgearbeitet haben, dann haben Sie schon die Erweiterung für "Field Papers" installiert.

In diesem Abschnitt zeigen wir Ihnen, wie man Erweiterungen installiert und weisen Sie auf einige der nützlichsten Erweiterungen hin.

Erweiterungen installieren
--------------------------
-   Wenn Sie eine neue Erweiterung installieren möchten, wählen Sie den Menüpunkt **Bearbeiten \> Einstellungen**
    und klicken Sie in der linken Reihe des neuen Dialogs auf das vierte Icon von oben (Verfügbare Plugins bearbeiten).

![Plugins][]

-   Wenn dort keine Liste der verfügbaren Erweiterungen angezeigt wird, klicken Sie auf **Liste herunterladen**.
-   Um eine Erweiterung zu installieren kreuzen Sie einfach das Kästchen neben dem Namen der Erweiterung an und klicken Sie unten auf der Seite auf OK.
-   Zum Schluss müssen Sie JOSM immer neu starten um neue Erweiterungen zu installieren.

Einige der beliebtesten Erweiterungen sind:

1.  **buildings_tools:** Wenn Sie viele Gebäude zeichnen, erleichtert Ihnen das die Arbeit

2.  **DirectUpload:** Wenn Sie viele GPS-Spuren aufzeichnen und Sie diese in die OSM-Datenbank hochladen möchten, geht das mit dieser Erweiterung einfach.

3.  **editgpx:**
    Wenn Sie GPS-Spuren von einem Garmin-Gerät hochladen möchten, könnten Sie diese Erweiterung
    brauchen. OSM akzeptiert keine GPS-Spuren, die auf einer externen Speicherkarte des Garmin gespeichert
    wurden. Diese Erweiterung korrigiert die Dateien, so dass sie hochgeladen werden können.

4.  **fieldpapers:**
    Diese Erweiterung lädt "Field Papers" in JOSM.

5.  **imagery_offset_db:**
    Mit dieser Erweiterung kooperieren Sie mit anderen Bearbeitern, die herausgefunden haben, dass die
    Satellitenbilder einen Versatz aufweisen. Auf dieses Problem gehen wir später noch genauer ein.

6.  **mirrored_download:**
    Mit dieser Erweiterung können Sie OSM-Daten von größeren Bereichen zum Bearbeiten herunterladen.

7.  **print:**
    Bietet eine Druckfunktion, wenn Sie einmal schnell einen Ausdruck brauchen, der nicht die höchste
    Qualität haben muss.

8.  **utilsplugin2:**
    Dahinter verbergen sich viele zusätzliche Werkzeuge und Menüeinträge für fortgeschrittene Benutzer.
    Wir werden darauf im [nächsten Kapitel](/de/editing/more-tools) näher eingehen



<!-- This next section of the site was copied from a duplicate file name moved from the beginner section

JOSM Erweiterungen und Einstellungen
============================

Mit zunehmender Editiererfahrung fragst du dich vielleicht: "Wo kann ich
bloß weitere JOSM Funktionen finden, um meine Editiererfahrungen zu bereichern?"
JOSM bietet dir hierfür die Möglichkeit unzählige Erweiterungen zu installieren.
Bei Erweiterungen handelt es sich um zusätliche Software, die spezielle Aufgaben übernehmen.
Wenn du bis hierhin den Anleitungen gefolgt bist, hast du schon mehrere Erweiterungen installiert.
Im vorigen Kapitel hast du eine Erweiterung installiert, welche
es dir ermöglicht SDS (getrennte Datenspeicher) zu nutzen. Für JOSM sind viele unterschiedliche
Erweiterungen verfügbar und wir werden einige sinnvolle Erweiterungen in diesem Kapitel
beschreiben.

![plug]({{site.baseurl}}/images/plugins_html_m76fc73bd_en.png)

Immer wenn du eine neue Erweiterung installieren möchtest, klicke auf Bearbeiten --\> Einstellungen
und öffne den Reiter "Erweiterungen (Plugins)". Falls keine Liste mit verfügbaren 
Erweiterungen erscheint, klicke auf "Liste herunterladen". Jede Erweiterung lässt sich 
installieren, indem man die gewünschte/n Erweiterung/en auswählt und unten auf OK klickst.
Nach der Installation einer neuen Erweiterung muss JOSM jedes Mal neugestartet werden. JOSM
jedes Mal neuzustarten ist natürlich nervig. Glücklicherweise führt die erste Erweiterung
dazu das JOSM sich automatisch neustartet.

Empfohlene Erweiterung:

- [Restart]({{site.baseurl}}/de/beginner/josm-plugins/#restart) (fügt JOSM neustarten in das Datei-Menü ein)
- [Mirrored Download]({{site.baseurl}}/de/beginner/josm-plugins/#mirrored-download) (erlaubt das Herunterladen zusätzlicher OSM Daten)]
- [Direct Upload]({{site.baseurl}}/de/beginner/josm-plugins/#direct-upload) (erlaubt das Hochladen von eigenen GPS Daten)]
- [Editgpx]({{site.baseurl}}/de/beginner/josm-plugins/#edit-gpx) (erlaubt das Editieren von GPX Dateien)]
- [Print]({{site.baseurl}}/de/beginner/josm-plugins/#print) (ergänzt JOSM um eine Kartendruckfunktion)

Weiterhin empfehlen wir das Herunterladen folgender Erweiterungen, die in anderen Kapiteln
behandelt werden:

- Buildings\_tool
- Utilsplugin2

Restart
-------

![restart]({{site.baseurl}}/images/plugins_html_57cb1b84_en.png)

__Restart__ / Neustart hält dass, was es verspricht und erweitert das
Dateimenü um die Option JOSM neuzustarten. Dies ist eine große 
Zeitersparnis, wenn du häufig die Einstellungen veränderst. Allerdings
ist diese Erweiterung nicht aktiv bis du das erste Mal einen Neustart durchführst.
Nachdem du dies getan hast, taucht die Neustartoption im Dateimenü auf.

![]({{site.baseurl}}/images/plugins_html_m6d2d20a9_en.png)

Probier das doch einfach mal aus und beobachte, wie sich JOSM von alleine
neustartet.

Mirrored Download
-----------------

![]({{site.baseurl}}/images/plugins_html_m2c477766_en.png)

__Mirrored Download__ beschleunigt das Herunterladen - zum Editieren - von OSM-Daten.
Anstatt alle Daten vom zentralen OSM Server herunterzuladen, ermöglicht diese Erweiterung, das
Herunterladen von einem "Spiegel". Bei einem "Spiegel" handelt es sich um eine exakte Kopie der
Daten an einem besser und schneller erreichbaren Ort.

Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du einen
neuen Eintrag "Vom OSM-Spiegel herunterladen..." im Dateimenü.

![]({{site.baseurl}}/images/plugins_html_1f3d8d84_en.png)

Das Herunterladen von Daten funktioniert nach dem gleichen Prinzip wie zuvor, aber 
um einiges schneller!

Direct Upload
-------------

![]({{site.baseurl}}/images/plugins_html_m37f530e4_en.png)

__DirectUpload__ lädt GPX-Spuren direkt auf OSM hoch (weitere Informationen sind im **Anhang** verfügbar).
Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du einen
neuen Eintrag "GPS-Spuren hochladen" im Werkzeugmenü.

![]({{site.baseurl}}/images/plugins_html_m53ca88fd_en.png)

Klickst du auf "GPS-Spuren hochladen" erscheint das folgende Fenster:

![]({{site.baseurl}}/images/plugins_html_2e01a9a7_en.png)

Füge Stichwörter (durch Komma getrennt und ohne Leerzeichen), die deine GPS-Spuren beschreiben,
in das Feld \<\<Merkmale (mit Kommas getrennt)\>\> ein. Gib als nächstes eine Beschreibung deiner
Merkmale ein. Eine Auswahlliste ermöglicht es dir nun, früher genutzte Merkmale wieder zu verwenden.
Wähle nun im letzten Schritt, die Sichtbarkeit deiner GPS-Spuren aus. Insgesamt gibt es 4 verschiedene
Stufen von Privat bis Identifizierbar (eine Erläuterung der verschiedenen Stufen findest du im **Anhang**).

Klicke nun auf "GPS-Spur hochladen". Falls du noch nicht mit deinem OSM Benutzerkonto angemeldet bist,
musst du dies nun nachholen.

Sobald deine GPS-Spur erfolgreich hochgeladen wurde, bekommst du ein "OK" als Rückmeldung und der
"GPS-Spur hochladen" Knopf wird inaktiv. Weiterführende Informationen über diese Erweiterung und 
das Hochladen von GPS Daten sind im **Anhang** verfügbar. 

edit gpx
--------

![]({{site.baseurl}}/images/plugins_html_m1d1170b2_en.png)

**EditGpx** ermöglicht dir das Aufbereiten von GPX-Spuren, bevor du sie bei OSM hochlädst.
GPX-Spuren enthalten oftmals Abschnitte die du entfernen möchtest, dazu kannst du diese
Erweiterung benutzen. Sie entfernt Wegpunkte aus deiner GPX-Spur auf einem schnellen Wege und
erstellt anonyme Zeitstempel für deine GPX-Spur.

Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du dieses neue Werkzeug
![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) links in der Werkzeugleiste.

1. Öffne eine GPX Datei in JOSM({{site.baseurl}}/images/plugins_html_3fabdc1a_en.png)

2. Klicke den neuen Menüknopf ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) in der linken
Werkzeugleiste und die GPX Daten werden in einem neuen EditGpx Ebene importiert. Jeder Knoten der 
GPX-Spur wird in Gelb hervorgehoben.![]({{site.baseurl}}/images/plugins_html_m3f86e83d_en.png)

3. Zum Löschen markiere nun die Wegpunkte, indem du auf Sie klickst.
Weiterhin kannst du auch Bereiche auswählen, indem du ein Rechteck
um den Bereich erstellst. In diesem Fall werden alle Wegpunkte in dem Bereich
gelöscht. Die gelbe Hervorhebung sollte verschwinden![]({{site.baseurl}}/images/plugins_html_m7e01ae1f_en.png)

4. Rechtsklick auf den Ebenenname und wähle \<\<Kovertiere zu GPX Ebene\>\> im Kontextmenü.

5. Jetzt kannst du die GPX Ebene als Datei speichern oder die Daten bei OSM hochladen.
(zum Beispiel indem du die Erweiterung [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins) benutzt)

Print
-----

![]({{site.baseurl}}/images/plugins_html_m66e7a0a9_en.png)

Um einfach und schnell eine Karte während dem Editieren in JOSM auszudrucken,
installiere dir die __print Erweiterung__. Obwohl es dir nicht ermöglicht 
stilistische Änderungen an deinem Ausdruck vorzunehmen, kannst du so auf einfachem Wege
eine Karte drucken. Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du einen
neuen Eintrag "Drucken..." im Dateimenü.

![]({{site.baseurl}}/images/plugins_html_mbd3c18f_en.png)

Klickst du auf den "Drucken..." Knopf im Dateimenü, siehst du diesen Druckdialog:

![]({{site.baseurl}}/images/plugins_html_49f16afc_en.png)

In dem Dialog kannst du deine Druckereinstellungen ändern. Falls keine Karte
sichtbar ist, setze einen Haken vor "Kartenvorschau" im Menü auf der rechten Seite.
Zum Verkleinern oder Vergrößern des Kartenausschnitts ändere die Zahl im Maßstabsfeld.
Die Auflösung der Karte kannst du durch verändern der Zahl im Auflösungsfeld erhöhen oder
verringern. Wenn du alle Einstellungen vorgenommen hast, klicke auf "Drucken".

Zusammenfassung
-------

Hierbei handelt es sich um einige nützliche Erweiterung für JOSM. Natürlich 
gibt es noch viele weitere Erweiterungen zu entdecken. Wie du vielleicht bemerkt hast,
zeigt dir das Eintellungsmenü zu jeder Erweiterung eine kurze Beschreibung an. Für
weitere Erläuterungen über eine Erweiterung klicke auf "Mehr Info...".

![]({{site.baseurl}}/images/plugins_html_17ea8a4b_en.png)

Viel Erfolg!

Anhang
--------

DirectUpload Details
--------------------

![]({{site.baseurl}}/images/plugins_html_m7e14a056_en.png)

Das Hinzufügen von GPS-Spuren und Wegpunkte zu OSM ist aus vielen Gründen 
sinnvoll.
__(Falls du deine GPX Punkte anonym halten willst brauchst die folgende Sektion überspringen. Du kannst deine GPX Dateien einfach in JOSM betrachten und lokal speichern)._
GPS-Spuren sind der nützlichste Weg um georeferenzierte Objekte für OSM zu sammeln.
(See[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Chapter](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[6.5:](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Aerial](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Imagery](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Considerations](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit))

Mithilfe von GPS Geräten gesammelte Daten haben eine höhere Genauigkeit als
Satellitenbilder und sind daher hervorragend geeignet die Ungenauigkeit von
Luftbildern zu kontrollieren. Die Benutzung von vielen GPS-Spuren 
(je größer die Anzahl an GPS-Spuren, desto besser die Genauigkeit der Daten) ermöglicht
es dir herauszufinden, inwieweit die Hintergrundbilder verschoben sind.

Das Hochladen von GPS-Spuren auf die Server ermöglicht das Teilen von
Informationen. 
Es gibt zwei Arten eigene GPS-Spuren hochzuladen: 1) JOSM Erweiterung
2) Nutzerberfläche der OSM Internetseite

> Notiz: GPS Wegpunkte können nicht direkt in die OSM Datenbank geladen werden.
> Du kannst sie zu GPS-Spuren konvertieren und dann zum Beispiel temporär hochladen
> so dass sie als Hintergrundobjekte in Potlatch angezeigt werden können.

Nachdem du deine GPX Datei in JOSM geöffnet und auf Gehe zu \<\<Werkzeug\>\>
geklickt hast, klicke auf \<\<GPS-Spuren hochladen\>\>. Beschreibe die GPX Datei,
gebe ein paar Merkmale und die Sichtbarkeit an. Als Sichtbarkeit kannst du zwischen
Privat, Öffentlich, Auffindbar oder Identifizierbar wählen.

1.  **Identifizierbar**: Deine GPS-Spur ist öffentlich einsehbar, unter "Deine GPS-Spuren".
	Andere Nutzer können deine GPS-Spuren herunterladen und sie mit dir in Verbindung bringen.
	Zeitstempel deiner GPS-Spuren werden ebenfalls öffentlich verfügbar gemacht und sind über
	die öffentliche GPS API abrufbar.

2.  **Öffentlich**: Deine GPS-Spur ist öffentlich einsehbar unter "Deine GPS-Spuren" und
	werden in der öffentlichen GPS-Spuren Liste aufgezählt. Andere Nutzer sind in der Lage
	die rohe GPS-Spur mit den beinhaltenden Zeitstempeln aus der Liste herunterzuladen.
	Über die API sind die Daten nicht zu dir verfolgbar. Obwohl die Daten chronologisch
	geordnet sind, sind die Zeitstempel nicht sichtbar.

3.  **Auffindbar**: Die GPS-Spur taucht in **keiner** öffentlichen
	Liste auf, aber die Wegpunkte sind mit Zeitstempeln trotzdem über die öffentliche
	GPS API auffindbar. Andere Nutzer haben die Möglichkeit die Wegpunkte herunterzuladen,
	können aber nicht mit dir in Verbindung gebracht werden.

4.  **Privat**: Deine GPS-Spur taucht in **keiner** öffentlichen Liste auf. Wegpunkte
	sind über die öffentliche GPS API **ohne Zeitstempel** in chronologischer Reihenfolge
	abrufbar.

![]({{site.baseurl}}/images/plugins_html_2009cd0_en.png)

Hochladen von GPS-Spuren über die OSM Internetseite
---------------------------

1. Gehe auf [http://www.openstreetmap.org/](http://www.openstreetmap.org/) und melde dich an.

2. Wähle \<\<GPS-Spuren\>\> auf dem linken Banner aus.![]({{site.baseurl}}/images/plugins_html_32e7d3be_en.png)

3. Wähle [GPS-Spur hochladen](http://www.openstreetmap.org/trace/create). Hier kannst du
deine eigenen GPS-Spuren einsehen.

4. Finde deine Datei über \<\<Datei auswählen\>\>. Beschreibe die GPX Datei,
gebe ein paar Merkmale und die Sichtbarkeit an. Als Sichtbarkeit kannst du zwischen
Privat, Öffentlich, Auffindbar oder Identifizierbar wählen. Falls du mehrere .gpx Dateien hast,
komprimiere diese zu einem zip Archiv und lade dieses hoch. Das Archiv wird als eine
große gpx Datei behandelt und nur eine GPS-Spur wird erzeugt.![]({{site.baseurl}}/images/plugins_html_m63dc490_en.png)

5. Klicke auf *Datei hochladen*.


  Die Datei wird auf die OSM Server hochgeladen, wo sie darauf wartet in die 
  Datenbank eingepflegt zu werden.

---


The remainder of this section needs to be edited, and/or moved to other sections,
    commenting it out for now


- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (allows you to download more OSM data)
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (allow you to upload GPS tracks)
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (allows you to edit GPX files)
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

We also recommend downloading these plug-ins, which are covered in other
chapters:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

Try clicking “Restart JOSM” and watch the software reload on its own.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ will make downloading OSM
data for editing faster. Instead of getting the data from the central
OSM server, it allows us to get it from a “mirror,” which is an exact
replica of the data but in a location that is faster to access it.

Once the plugin is installed (and you have restarted JOSM), you will see
another new entry on the File Menu, “Download from OSM mirror...”

![Download from OSM Mirror][]

Downloading data is exactly the same process you learned before, but it
can be much faster!

Direct Upload
-------------

![Direct Upload][]

__DirectUpload__ uploads GPX tracks directly to OSM
through JOSM (more information is available in the **Appendix**). Once
the plug-in is installed (and you have restarted JOSM), you will see
anew “Upload traces” item under the “Tools” Menu.

![Upload Traces Item][]

When you click on the “Upload Traces” button this window will pop up:

![Upload Traces Window][]

Put keywords (seperated by commas without spaces) that relate to your
GPS trace in the "Tags (comma delimited)" box. For example,
"Country,region,city,neighborhood,road name". Next, provide a
description of your tags. A drop-down list will allow you to reuse
former tags and descriptions. Lastly, choose what type of visibility you
would like your track to have. There are four levels from private to
identifiable (all explained below in the [Appendix]{{site.baseurl}}/learnosm/en/).

Click on Upload Trace. If you are not connected to your OSM account, you
will have to do it now.

Once successfully uploaded, the Text area will display an "OK" status
and the “Upload Trace” button will not be clickable. More information
about this plug-in and GPS uploads is available in the [Appendix]({{site.baseurl}}/learnosm/en/).

Edit gpx
--------

![Edit Gpx][]

**EditGpx** allows you to prepare recorded GPX tracks
before uploading them to OSM. Often tracks have parts that you would
like to remove. Therefore, this plug-in delete points of tracks in a
speedy manner and creates anonymity for timestamps of a track.

Once the plug-in is installed (and you have restarted JOSM), you will
see this new tool in the tool bar on the left.

![Edit Gpx Tool Icon][]

1. Open a GPX file in JOSM!

![Open GPX File][]

2. Press the new button in the left menu bar 

![Edit Gpx Tool Icon][]

and the GPX data will be imported to a new EditGpx layer. Every
node of the track will be highlighted in yellow.

![GPX Nodes All][]

3. Now mark the points (by clicking) or areas (by drawing a rectangle on
their extent) that you would like to delete. The yellow highlighting
should disappear.

![GPX Nodes Selected][]

4. Right click on the layer name and choose \<\<Convert to GPX layer\>\> in
the \<\<Context\>\> menu.

5. Now you can save the normal GPX layer as a file or upload the data to
OSM (eg by using the
plugin [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![Print Plugin][]

If you want a quick an easy way to print a map while you are editing in
JOSM, install the __print plugin__. Although you won’t be able to
do anything stylistic with your printout, this is a good way for a quick
and easy print. Once the plugin is installed, a new item will be
available on the File menu called “Print...”

![Print Menu Item][]

Clicking this will open the Print Dialog, which looks like this:

![Print Dialog][]

Here you can change your printer settings. If you don’t see anything on
the page, check the box next to “Map Preview” on the right. Zoom in or
out on the map by changing the number in the “Scale” box. Increase the
resolution by changing the number next to “ppi”. When you have finished
editing the settings, click “Print.”

Summary
-------

These are some useful plugins that are available for JOSM. Feel free to
continue exploring the many other plugins. As you have already seen, the
Preferences menu has a short description of each plugin, and you can
open a web page with more information by clicking on the “More info...”
link next to each.

![More Info Link][]

Good luck!

Appendix
--------

DirectUpload Details
--------------------

![Direct Upload Plugin][]

Adding your GPS tracks and waypoints to the OSM Server is useful for
many reasons.
__(If you do not want your GPX points to be seen by anyone else you do not have to read this section.  You can simply display your GPX files from JOSM, and therefore store them locally)._
First of all, GPS tracks are the most useful way of collecting and
georeferencing objects in OSM.
(See [Chapter 6.5: Aerial Imagery Considerations](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit))
GPS units have greater accuracy than satellite imagery and therefore are
a useful tool for checking how offset imagery may be. Using many GPS
tracks (the greater the number of tracks the greater the ability to
determine geolocation accuracy) allows you to determine if background
imagery may be misaligned.

Uploading tracks to the server permits greater sharing of information.
It allows people who do not have access to the field, simply because
they do not live in that area or they do not have access to a GPS
devices, to help with digitizing. There are two ways to upload your
traces: 1) JOSM Plugin or 2) on the main OSM website.

> Note: GPS waypoints cannot be uploaded to the OSM database directly.
> However, they can be converted to tracks and then be uploaded temporarily,
> for example, so they can be displayed as background objects in Potlatch.

After you have opened your GPX file in JOSM and clicked Go to
"Tools" and click "Upload traces". Describe the GPX file,
write some tags, and visibility. For visibility, you can choose whether
private, trackable, public or identifable.

1.  **Identifiable**: Your trace will be shown publicly in Your
    GPS**traces and in the public GPS traces list. Other users can
    download the raw trace and connect it with your username. Timestamps
    of the tracks points will also be available through the public GPS
    API.

2.  **Public**: Your trace will be shown publicly in Your GPS**traces
    and in the public GPS traces list. Other users are still able to
    download the raw trace from the public trace list and any timestamps
    contained within. However, data shown in the API does not reference
    your trace page, nor are the timestamps available, though the points
    are chronically ordered.

1.  **Trackable**: The trace will **not** show up in any public
    listings, but the trackpoints will still be available through the
    public GPS API **with timestamps**. Other users will be able
    to download the trackpoints but these will not be associated with
    you.

2.  **Private**: The trace will **not** show up in any public
    listings. Trackpoints will be available in timeline order through
    the public GPS API **without timestamps**.

![DirectUpload Traces Options][]

Uploading GPS Traces Online
---------------------------

1. Go
to [http://www.openstreetmap.org/](http://www.openstreetmap.org/) and log in.

2. Select "GPS Traces" found on the left banner.

![Left Banner][]

3. Select
[upload a trace](http://www.openstreetmap.org/trace/create).
Here, you can also  **See just your traces** to review previous GPS tracks.  

4. Find your file in "Choose File". Label it in the Description
box, give it some Tags, and chose what type of Visibility it will have.
If you have many .gpx files you can compress them into a zip archive and
upload it. It will be treated as one large gpx file and only one entry
on the trace list will be created. 

![Online Upload Traces Options][]

5. Click *Upload*.

  The file will be uploaded to the OSM server, where it will join the
queue of files waiting to be inserted into the database.

[Plug Icon]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image13_print-menu.png
[Print Dialog]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image14_print-dialog.png
[More Info Link]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/en/editing/josm-plugins/plugins-tab.png

