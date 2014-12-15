Aan de slag met JOSM
====================

In dit hoofdstuk zullen we stap voor stap leren hoe u JOSM, de Java
OpenStreetMap Editor, downloadt en installeert. We veranderen enkele
instellingen om JOSM gemakkelijker in het gebruik te maken. Dan openen
we een eenvoudige kaart en leren we enkele basishandelingen met het
programma. Herinnert u zich nog dat u in hoofdstuk 1 werd gevraagd een
kaart van uw stad of dorp te tekenen? We sluiten dit hoofdstuk af door
deze kaart opnieuw te tekenen, maar nu digitaal. Na dit hoofdstuk zult u
goed begrijpen hoe u in JOSM een kaart tekent.

JOSM downloaden
---------------

-  Als u JOSM op een CD of een USB-stick heeft staan, dan kunt u direct
    doorgaan naar sectie 2, JOSM installeren.
-  Als u JOSM nog niet heeft, of de nieuwste versie wilt, open dan uw
    internetbrowser - dit kan Firefox, Chrome, Opera of Internet
    Explorer zijn.

-  Typ in de adresbalk bovenaan het scherm de volgende tekst en druk op
    Enter:

    [josm.openstreetmap.de](http://josm.openstreetmap.de)

-  U kunt deze website ook gemakkelijk vinden door op “JOSM” te zoeken.
-  De website ziet er ongeveer als volgt uit:

  ![]({{site.baseurl}}/nl_beg_ch3_image05.png)

-  Als u Windows op uw computer heeft, klik dan op “Windows JOSM
    Installer” om te beginnen met het downloaden van JOSM. Als u een
    ander besturingssysteem gebruikt, klik dan op de link voor dat
    systeem. Uw download begint. In dit hoofdstuk nemen we verder aan
    dat u Windows gebruikt, maar de instructies voor andere
    besturingssystemen verschillen niet veel.

JOSM installeren
----------------

-  Het kan zijn dat u problemen ondervindt met het installeren van
    JOSM, als Java nog niet is geïnstalleerd op uw computer. Als u in
    deze sectie problemen hebt, probeer dan om Java te downloaden en te
    installeren. U kunt het hier downloaden:
    [http://www.java.com/en/download/](http://www.java.com/en/download/)
-  Zoek het JOSM-installatiebestand op uw computer. Dubbelklik erop om
    te beginnen met installeren.
-  Klik op ‘OK’, ‘Volgende’, ‘Accepteren’ en
    ‘Installeren’^[[a]](#cmnt1)^. Als de installatie gereed is, klik dan
    op ‘Voltooien’ om JOSM voor de eerste keer op te starten. Als u
    later JOSM opnieuw wilt starten, klikt op het Start-menu linksonder
    op het scherm, en vervolgens op JOSM.
-  Het kan gebeuren dat er een melding verschijnt die vraagt of u de
    software wilt updaten. Dit is niet nodig, want u heeft hem net
    geïnstalleerd. Klik op de knop ‘Annuleren’. Als u deze melding nooit
    meer wilt zien, vink dan het selectievakje onderaan aan voordat u op
    ‘Annuleren’ klikt.
-  Als JOSM opstart, ziet het er ongeveer zo uit:

  ![]({{site.baseurl}}/nl_beg_ch3_image08.png)

De JOSM-instellingen aanpassen
------------------------------

-  Voordat we beginnen met JOSM, is het handig om enkele instellingen
    aan te passen zodat JOSM gemakkelijker in het gebruik wordt. Om deze
    instellingen aan te passen, klikt u op ‘Bewerken’ in het menu
    bovenaan, en dan op ‘Voorkeuren’.

    ![]({{site.baseurl}}/nl_beg_ch3_image13.png)

###  Bing-luchtfoto's toevoegen

-  We willen graag luchtfoto's gebruiken als we de kaart gaan tekenen,
    dus laten we die toevoegen vanuit het Voorkeuren-venster. Aan de
    linkerkant van dit venster zijn er verschillende icoontjes voor
    verschillende soorten instellingen. Klik op het icoon ‘WMS TMS’.
    Misschien moet u op het pijltje naar beneden klikken om het te zien:

    ![]({{site.baseurl}}/nl_beg_ch3_image07.png)
    ![]({{site.baseurl}}/nl_beg_ch3_image02.png)

-  Klik op ‘Bing Sat’ en klik vervolgens op ‘Activeren’.

  ![]({{site.baseurl}}/nl_beg_ch3_image11.png)

-  Als het goed is, ziet u nu ‘Bing Sat’ in de lijst onder de
    Activeren-knop.

### Voorkeuzes toevoegen

-  If you have been given a file that should be added to the presets
    menu, you can add it now. For example, a presets file might be named
    something like buildings.xml.
-  You should still have the Preferences window open. If you don’t,
    click Edit -\> Preferences to open the window.
-  On the left side, click the icon that looks like a grid.

  ![]({{site.baseurl}}/nl_beg_ch3_image09.png)

-  Click the tab at the top that reads “Tagging Presets”.
-  In the upper right, press the + button.
-  Next to the second box on the right, click the button that looks
    like a folder. Navigate to the presets file you want to add, for
    example, buildings.xml.
-  Click OK

### Add Walking Papers Plugin

-  Later in this guide we will learn about a tool called Walking
    Papers, which will allow us to print out a map of an area, draw on
    it and take notes, and then load it into JOSM in the background.
    Then we can add our drawings and our notes into OpenStreetMap. Now
    we will add the Walking Papers plugin to JOSM.
-  You should still have the Preferences window open. If you don’t,
    click Edit -\> Preferences to open the window.
-  On the left side, click the icon that looks like a plug.

![]({{site.baseurl}}/nl_beg_ch3_image04.png)

-  Click the button that says “Download list”. The list will download
    from the internet, and when it is finished you will see a list of
    optional plugins appear in the window.
-  In the search box at the top, type “walking”. This will show only
    items in the list that have “walking” in the title.
-  Click the checkbox next to the walkingpapers plugin, and press OK at
    the bottom of the window.
-  Walking Papers will now be downloaded and installed. Do not click
    “Cancel”.

### 3.4 De taal aanpassen

-  JOSM is in veel talen vertaald, waaronder in het
    Nederlands^[[b]](#cmnt2)^. Als JOSM niet automatisch in het
    Nederlands ingesteld is, dan kunt u dit aanpassen in de Voorkeuren.
-  Klik op Bewerken \> Voorkeuren (Edit \> Preferences) om het
    Voorkeurenvenster weer te geven, als dat nog niet zichtbaar was.
-  Klik links op het icoon met de verfpot en de kwast.
-  Klik bovenaan het scherm op de tab  “Weergave en vormgeving” (“Look
    and Feel”).
-  Kies Nederlands, of een andere taal, in het vak “Taal” (“Language”).
-  Klik op OK.

  ![]({{site.baseurl}}/nl_beg_ch3_image01.png)

-  You need to restart JOSM to save your settings. Click “File” in the
    upper left corner, and Click “Exit” at the bottom of the menu.
-  Start JOSM again by going to the Windows Start Menu in the bottom
    left corner. Find JOSM and click on it to start.

Learn Basic Drawing with JOSM
-----------------------------

- Now let’s open up a sample OSM file which we will use to learn the
  basic ways to draw maps with JOSM. Note that this map is not real,
  in that it is not a real map of a real place, so we will not save it
  on OpenStreetMap.
- Download the file here: [sample.osm](/files/sample.osm)
- Now let’s open the sample map file in JOSM. Click the
  “Open” button in the upper left.

  ![Open file][]

- Find the file **sample.osm**. It is probably in your Downloads folder,
  unless you saved it somewhere else. Click on it, and then click “Open”.
- You should now see a sample map that looks like this:

  ![Sample file][]

### Basic Operations

-  To move the map left or right, up or down, hold your right mouse
    button down, and move your mouse.
-  There are several ways to zoom in and out of the map. If you have a
    mouse, you can use your scroll wheel to zoom in and out. If you are
    using a laptop and don’t have a mouse, you can zoom in and out using
    the scale bar in the upper left of the map window. Drag the bar left
    and right by holding your left mouse down and moving the bar left or
    right with your mouse.

    ![]({{site.baseurl}}/nl_beg_ch3_image14.png)

-  Look at the sample map. There a few different types of objects here.
    There is a river, a forest, some buildings, several roads, and a
    couple of shops. To select an object, click on it with your left
    mouse button.

### Points, Lines, and Shapes

-  As you click on different objects on the sample map, notice that
    there are three different types of object on the map. There are
    points, lines, and shapes.
-  Points are a single location, represented by symbols. On this sample
    map, there are two points, a clothing shop and a market. The
    clothing shop is represented by a shirt symbol, and the market is
    represented by a shopping cart.
-  There are several lines on the map as well, which represent roads.
    If you look closely you will see that within the lines, there are
    points as well. These points don’t have any symbols or other
    information associated with them, but they help to define where the
    line is located.
-  Lastly, there are numerous shapes on the sample map, representing
    different places - a forest, a river, and buildings. A shape
    generally represents an area, like a field or a building. A shape is
    exactly like a line - the only difference is that the line begins at
    the same point where it ends.
-  You may notice that when you select an object, a list appears to the
    right of the map in a window called “Properties”. These are known as
    tags. Tags are information that is tied to a point, line or shape
    that describes what it is. We’ll learn more about tags in Chapter 7,
    Advanced Editing. For now all you need to know is that this
    information helps describe whether our object is a forest, a river,
    a building, or something else.
-  Think about drawing a map by hand, and how you are also drawing
    points, lines, and shapes. What other places are best represented by
    points? Lines? Shapes?

### Changing Objects

-  Select the forest on the left side of the map. Be sure to click on
    the line around the forest, not one of the points on the line. Now
    hold your left mouse button down and drag your mouse. You should be
    able to move the forest to a new location on the map.
-  Click on on of the points on the line around the forest. Hold your
    left mouse button down and drag your mouse. You should be able to
    move the point. This is how you can change the shape of an object,
    or move a point.

### Drawing

-  On the left side of a JOSM is a column of buttons. Many of these
    button open new windows on the right side that provide more
    information about the map. The most important buttons, however, are
    at the top of these column. These buttons change what you can do
    with your mouse.
-  The top four buttons in this column are the most important. They
    allow you to:

-  Select
-  Draw
-  Zoom in
-  Delete

-  Until now, you have been using the Select tool, which looks like
    this:

    ![]({{site.baseurl}}/nl_beg_ch3_image00.png)

-  Before you draw, you need to make sure that nothing is selected.
    Click in the black space on the map, where it is empty, to make sure
    nothing is selected.
-  Click on the second button, the Draw tool.

  ![]({{site.baseurl}}/nl_beg_ch3_image10.png)

-  Find an empty area on the map, and double-click with your mouse.
    This will draw a single point.
-  To draw a line, single-click with your mouse. Move your mouse and
    click again. Continue until you are happy with your line. To end the
    line, double-click your mouse.
-  Draw a shape the same way that you draw a line, but finish the shape
    by double-clicking on the point where you started the line.

### Add Presets

-  Now we know how to draw points, lines and shapes, but we still
    haven’t defined what they represent. We want to be able to say that
    our points are shops, schools, or something else, and whether our
    shapes are fields, buildings, or something else.
-  Click on the Select tool, in the column of buttons on the left.

  ![]({{site.baseurl}}/nl_beg_ch3_image00.png)

-  Select one of the objects that you drew with the Draw tool. On the
    top menu, click “Presets”. Move your mouse through the sub-menu to
    the type of location you would like to define.
-  When you click on a preset, a form will pop up asking you for more
    information. You do not have to fill in every field, but you may
    wish to add some of the important fields, such as the name of the
    object.
-  When you are finished entering the information, click “Apply
    Preset”. If everything went well, your point, line, or shape should
    change colors or show a symbol. This is because you have defined
    what it is.

### Draw Your Own Map

-  Now let’s draw a map in order to practice the techniques you have
    learned. You may wish to redraw the map that you drew on paper in
    Chapter 1.
-  Drag the map away from the sample map. Hold the right mouse button
    and drag your mouse, until you have a nice empty area to draw on.
-  Use the Draw tool to create points, lines, and shapes. Describe what
    your objects are by selecting from the Presets menu.
-  When you are finished, you should have your own map, similar to the
    sample map that we opened in sample.osm.

Summary
-------

Excellent! If all went well you have learned how to setup JOSM on your
computer, and the basic tools for drawing maps. In the next two
chapters, you will learn how to use GPS and Walking Papers to map your
town or village. In Chapter 6, we will return to JOSM and using the
information we collected, we will add objects to OpenStreetMap.

[[a]](#cmnt_ref1)willem.sonke:

Ik weet niet of deze Nederlandse vertalingen kloppen met de Nederlandse
GUI.

[[b]](#cmnt_ref2)willem.sonke:

Origineel:

JOSM has been translated into many languages. If it has been translated
into your language, you can change it in the Preferences.

Aangepast voor de Nederlandse situatie.
