---
layout: doc
title: Editieren mit JOSM
permalink: /en/beginner/editing-with-josm/
lang: de
category: beginner
---

Editieren mit JOSM
=================

In [Kapitel 3]({{site.baseurl}}/en/beginner/start-josm/) hast du JOSM installiert und deine ersten Punkte, Linien und Grundrisse gezeichnet. Du hast Vorlagen für diese Objekte hinzugefügt um sie mit weiteren Informationen zu ergänzen. Am Ende konntest du in JOSM deine eigene Karte zeichnen.

Karten zeichnen in Kapitel 3 war eine Übung um JOSM kennenzulernen und herauszufinden wie man Orte auf der Karte erstellt. Aber unsere Karten waren nicht präzise, denn wir haben keine ortsbezogenen Informationen hinzugefügt. Die vorherigen zwei Kapitel haben sich mit GPS und Walking Papers beschäftigt, zwei Möglichkeiten um die tatsächliche Lage von Orten zu bestimmen (GPS bestimmt die Position mit einer Abweichung von bis zu 10m, ist also nicht komplett genau, vor allem wenn du nur einen Wegpunkt erfasst). Diese Positionsangaben werden durch Koordinaten dargestellt.

Eine „echte“ Karte zu zeichnen, also eine Karte auf der sämtliche Punkte, Linien und Grundrisse an ihrem rechtmäßigen Platz liegen, ist dasselbe wie die Karten aus Kapitel 3 zu zeichnen. Aber diesmal werden wir unsere GPS-Koordinaten und Spuren und unsere Walking Paper verwenden um ähnliche Karten an ihren richtigen Positionen zu zeichnen.

In diesem Kapitel werden wir lernen wie man die OpenStreetMap Karte bearbeiten kann und unsere Verbesserungen hinzufügen. Wir lernen den grundsätzlichen Ablauf des Kartierens bei OSM.

**Lade** die aktuellen Kartendaten von OSM **herunter**

  - [Überblick über JOSM]({{site.baseurl}}/de/beginner/editing-with-josm/#a-tour-of-josm)
  - [OSM Daten herunterladen]({{site.baseurl}}/de/beginner/editing-with-josm/#download-osm-data)
  - [JOSM Ebenen]({{site.baseurl}}/de/beginner/editing-with-josm/#josm-layers)

**Editiere** sie mit Hilfe von GPS, Walking Papers und Notizen

  - [Editieren]({{site.baseurl}}/de/beginner/editing-with-josm/#edit)
  - [Tags]({{site.baseurl}}/de/beginner/editing-with-josm/#tags)

**Speichere** deine Änderungen bei OSM

  - [Änderungen hochladen]({{site.baseurl}}/de/beginner/editing-with-josm/#upload-changes)
  - [Guck dir deine Änderungen auf der Karte an]({{site.baseurl}}/de/beginner/editing-with-josm/#see-your-changes-on-the-map)
  - [OSM Daten speichern]({{site.baseurl}}/de/beginner/editing-with-josm/#saving-osm-files)

Am Ende dieses Kapitels werden wir unsere Ergänzungen auf der OSM karte sehen können.

Ein Überblick über JOSM
--------------

- Um zunächst einmal JOSM zu starten, öffne das Start-Menü in der unteren linken Ecke des Bildschirms und finde das Programm JOSM
- Als nächstes lädst du deine gpx-Datei und dein Walking Paper in JOSM. Du brauchst nicht beide gleichzeitig zu öffnen, kannst du aber wenn du möchtest. Wenn du nicht mehr weisst wie man Dateien in JOSM öffnet, guck in den vorherigen Kaptieln nach.
- Ein kurzer Überblick über die Funktionen von JOSM: Es gibt viele verschiedene Features in JOSM. Mit dem Hauptfenster bist du schon vertraut - es ist die Kartenansicht und der Ort an dem die meiste Arbeit stattfindet.
- And er rechten Seite der Kartenansicht befindt sich eine Reihe von Menüs welche alle für unterschiedliche Dinge verantwortlich sind. Normalerweise werden nach einer JOSM Installation standardmäßig einige Menüs angezeigt, unter anderem Ebenen, Eigenschaften und Auswahl. Wenn du einen Punkt, eine Linie oder einen Grundriss auswählst, wird dieses in dem Auswahlmenü angezeigt. Zugehörige Informationen über das Object sind in dem Eigenschaftenmenü zu sehen und der Benutzername des Authors des jeweiligen Objekts findet sich im Author-Menü.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_46acf705_en.png)

- Auf der linken Seite von JOSM befinden sich mehrere Werkzeugleisten, welche aus vielen Buttons bestehen. Über dieser Leiste sind verschiedene Buttons, welche die Funktionsweise des Mauszeigers verändern. Du kennst bereits die ersten beiden, das Auswahl- und das Zeichenwerkzeug. Die anderen Werkzeuge helfen beim Vergrößern der Karte, ein Object zu löschen, eine Form zu zeichnen oder eine Linie zu erstellen, weche parallel zu einer anderen Linie liegt.
- Unterhalb dieser Werzeuge sind noch weitere Buttons. Diese bestimmen, was du auf der rechten Seite von JOSM siehst. Mit Hilfe dieser Buttons kannst du die Menüs auf der rechten Seite - Eigenschaften, Auswahl, Author - öffnen und schliessen.

OSM-daten herunterladen
-----------------

- Erinnerst du dich an den Kreislauf des Editierens von OSM-Daten am Anfang dieses Kapitels? **Herunterladen**, **Editieren**, **Speichern**. Bevor wir die Karte editieren können müssen wir die existierenden OSM-Daten in unseren Bereich herunterladen.
- Wenn du deine gpx-Datei oder Walking Paper öffnest, wird die Kartenansicht anzeigen was du geladen hast und direkt zu den richtigen Koordinaten springen. Nachdem du die Datein geöffnet hast, schaue in die untere linke Ecke von JOSM. Dort stehen der Längen- und Breitengrad (Koordinaten) des Mauszeigers.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m58e5f3e7_en.png)

- Da unsere Kartenansicht bereits den Bereich zeigt, den wir editieren wollen, ist es sehr einfach die OpenStreetMap-Daten für diesen Bereich herunterzuladen. Klicke auf „Datei“ in der oberen rechten Ecke von JOSM und dann auf „Von OSM herunterladen“. Dadurch öffnet sich das Download-Fenster. Dieses Fenster lässt sich auch noch einfacher öffnen, in dem du auf den „Herunterladen“-Button klickst, wie hier auf diesem Screenshot:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m6f2281c2_en.png)

- Wenn sich das Download-Fenster öffnet solltest du eine Karte mit einem pinken Rahmen darauf sehen. Wenn du keine Karte siehst, klicke auf den Reiter „Slippy Map“.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m1318e890_en.png)

- Der pinke Rahmen zeigt den Bereich der Karte an, welchen wir zum editieren herunterladen möchten. Solange du den Rahmen nicht bewegt hast seitdem du die gpx-datei oder das Walking Ppaer geladen hast, sollte der Rahmen um den richtigen Bereich angezeigt werden. Möchtest du allerdings einen größeren Bereich herunterladen, kannst du auch einen neuen Rahmen zeichen. Das geht, in dem du auf die Karte klickst, die Maustaste festhälst und die Maus ziehst um einen neuen Rahmen zu erstellen. Lasse die Maustaste wieder los um den Rahmen fertigzustellen.
- Wenn du mit der Größe und Position des Rahmens zufrieden bist, klicke auf „Herunterladen“ am unteren Rand des Fensters. JOSM wird die Daten für diesen Bereich von OSM herunterladen und in der Kartenansicht für dich zum editieren öffnen.

JOSM Ebenen
-----------

- Öffne deine GPS-Datei und laden die Kartendaten von OpenStreetMap herunter, falls du es noch nicht getan hast. Es fällt auf, dass ein neues Objekt in das Ebenenmenü auf der rechten Seite von JOSM hinzugefügt wird, sobald du eine Datei öffnest, ein Walking Paper hinzufügst, oder Kartendaten von OSM herunterlädst. Dein Ebenenmenü könnte in etwa so aussehen:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2b7c3b_en.png)

- Jedes Objekt in dieser Liste stellt eine andere Datenquelle dar, die du in der Kartenansicht geöffnet hast. In dem obrigen Beispiel sind „Data Layer 2“ die Daten von OpenStreetMap, welche wir editieren wollen. „Markers“ sind die Wegpunkte von unserem GPS-Gerät und „30 Juni 201-gpx“ ist die GPS-Spur aus dem Gerät. Als letzte Ebene wurde „Walking Papers“ erstellt als ein Walking Paper zu JOSM hinzugefügt wurde. Du kannst auch die Ebene mit Satellitendaten von Bing hinzufügen, indem du auf „Imagery“ in dem oberen Menü von JOSM klickst und dann auf „Bing Sat“.
- Um eine dieser Ebenen zu verstecken, wähle sie mit der Maus aus und klicke dann auf den Zeigen/Verstecken-Button, der so aussieht:![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2e696f_en.png)
- Nun sollte die Ebene, welche du ausgewählt hast in der Kartenansicht verschwinden. Klicke erneut auf Zeigen/Verstecken und die Ebene erschient wieder.
- Du kannst eine Ebene wieder entfernen in dem du sie auswählst und auf den „Löschen“-Button klickst:![]({{site.baseurl}}/images/EditingWithJOSM_html_m172543d8_en.png)
- Zuletzt ist es wichtig zu wissen, dass du nur eine Ebene bearbeiten kannst, die von JOSM als *aktiv* erkannt wird. Wenn du die Ebene in der Kartenansicht nicht bearbeiten kannst liegt es wahrscheinlich daran, dass du die falsche Ebene auf *aktiv* gsetzt hast. Die meisten Ebenen, wie zum Beispiel GPS Wegpunkte, Walking Papers oder Satellitenaufnahmen können nicht bearbeitet werden.
- Die einzigen Ebenen, welche bearbeitet werden können, sind Daten von OpenStreetMap, die normalerweise mit „Data Layer 1“ bezeichnet werden.
- Um eine Ebene *aktiv* zu setzen, wähle sie in dem Ebenenmenü aus und klicke auf den „Aktivieren“-Button:![]({{site.baseurl}}/images/EditingWithJOSM_html_de83a77_en.png)

Editieren
----
- Der nächste Schritt besteht im Editieren der Karte und Hinzufügen neuer Objekte. Das ist am Anfang nicht gan einfach, aber mit der Zeit und mit Übung wirst du darin besser und besser werden.
- Wenn du einen Punkt, eine Linie oder einen Grundriss bewegen möchtest, benutze das **Auswahlwerkzeug**. Klicke auf ein Objekt und ziehe es dorthin wo es sein sollte. Dies kann verwendet werden um die Position von Objekten zu korrigieren, welche an die falsche Stelle gesetzt wurden.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m2eb4096c_en.png)

- Benutze das **Zeichnen-Werkzeug** um neue Punkte, Linien und Grundrisse zu zeichnen. Beschreibe diese Objekte in dem du aus dem Vorlagenmenü auswählst, so wie in [Kapitel 3]({{site.baseurl}}/en/beginner/start-josm/). 
- Denk daran, dass deine GPS-Wegpunkte und deine Walking Papers nicht automatisch zu OpenStreetMap gelangen. Du musst sie *digital* zur OSM Karte hinzufügen in dem du das Zeichnen-Werkzeug benutzt. Aber deine Punkte, Spuren und Walking Papers sind im Hintergrund als eine Art Schablone sichtbar.
- Nehmen wir an, dass du einen Wegpunkt mit dem Namen 030 auf deinem GPS-Gerät hast und in deinem Notizbuch aufgeschrieben hast, dass 030 eine Schule ist. Um diesen Punkt zu OpenStreetMap hinzuzufügen, wähle das Zeichnen-Werkzeug aus und mache einen Doppelklick auf den Punkt 030 in der Kartenansicht. Damit erstellst du einen Punkt. Dann wählst du im Vorlagenmenü die Vorlage für „Schule“ aus. Gib den Namen der Schule ein und klicke auf „Vorlage anwenden“. Wiederhole diesen Vorgang um Linien und Grundrisse hinzuzufügen.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_1cb5aeb4_en.png)

Tags
----

-  When you draw a point, line, or shape, it has a location, but no
    information about what it is. In other words, we know **where** it
    is, but not **what** it is. Before now, we have been using items
    from the Presets menu to define **what** it is. The way
    OpenStreetMap knows **what** an object is is by using **tags**.

-  A tag is like a label that you can put on something. For example, if
    I draw a square, it’s only a square. But then I add multiple tags to
    it that describe what it is: this square is a building, the name of
    the building is “Menara Thamrin”, the building is 16 levels high

-  You can add as many tags as you want to an object. Tags are saved as
    pairs of text, called the **keys** and the **values**. In
    OpenStreetMap, the tags written above would in fact be:
    `building = yes, name = Menara Thamrin, building:levels = 16`

-  If you select an object in JOSM, you can see all the tags that are
    attached to it in the Properties panel on the right.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m945ccee_en.png)

### Editing Tags

-  You can add, edit, and delete these tags from this panel. The tags
    are traditionally in English however, so it is often better to use
    the Presets menu. When you add or change tags, such as primary
    highway versus footpath, the style will change according to the tag.

-  To edit an existing object:

-  Select it.

-  Then you can edit the tags in one of two ways: (1) You can use the
Presets menu to open up a form and edit the information, or (2) you can
edit the tags directly in the Properties window on the right. 

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_94da59a_en.png)

### Common Mistake: Tagging nodes when you want to tag lines or polygons

-  When you are adding tags to a node, you select the node and then add
    your tags (or use the presets menu). When you want to add tags to a
    line or polygon, it is important that you select the line, and NOT
    the nodes that make up the line.

-  A common mistake is to use the JOSM select tool to draw a box around
    an object, which causes everything, both the line **and** the nodes
    to be selected, and when you add tags they are applied to the nodes
    as well. Be sure to **only** select lines when you want to add tags
    to them.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2746cce8_en.png)

-  More information about tags and presets can be found in Intermediate
    Guide Chapter 4: XML and JOSM Presets.

Upload Changes
--------------

-  After you have made a couple of changes to improve the map, let’s
    save those changes to OpenStreetMap. To save the changes, we need to
    be connected to the internet, because we are in fact uploading the
    changes to OpenStreetMap.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2e194887_en.png)

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_67f320b3_en.png)

-  Click “Upload Changes”.

-  If this is your first time saving changes to OpenStreetMap, you will
    be asked for the username and password that you created in Chapter
    - Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)

-  You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have made your first edits to
    OpenStreetMap. You may continue editing to add all your points if
    you wish. Always be sure to upload your changes before you close
    JOSM.

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

Saving OSM files
----------------

-  Sometimes after you download some OSM data, you may wish to save it
    so that you can edit it offline, and then upload it later when you
    have internet access again.

-  To save an OSM file, make sure that it is the active layer in the
    the Layers panel. Click “File” on the top menu, and click “Save”.
    Choose a location for the file and give it a name. You can also save
    by clicking this button:![]({{site.baseurl}}/images/EditingWithJOSM_html_m3d7a0a33_en.png)

-  You can now close JOSM and your data will be saved. When you want to
    open the file again, simply open JOSM, go to the “File” menu, and
    click “Open...”

Summary
-------

Now that you’ve seen how to add to OpenStreetMap, what’s next? Remember
that OSM maps get better and better over time. Every time you make
improvements to the map, those changes remain and the data gets better
and better. And just as you can improve other people’s work, so they can
improve your work too.

In the final chapter we will step away from JOSM, and look at some
interesting projects that use OpenStreetMap data, and learn how you can
continue learning about OSM.
