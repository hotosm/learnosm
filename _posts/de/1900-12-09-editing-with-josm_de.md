---
layout: doc
title: Erfassen realer Objekte in JOSM
permalink: /de/josm/editing-with-josm/
lang: de
category: josm
---

Erfassen realer Objekte in JOSM
==================


Wir können nun Gebäude in OpenStreetMap mappen. Im Kapitel [Mapping mit einem Smartphone, GPS oder Papier](/de/mobile-mapping) kann man sehen wie man mobile Werkzeuge zur Erhebung von Gebieten einsetzt.

In diesem Kapitel kehren wir erneut zu JOSM zurück und schauen uns einige neue Konzepte an, welche wir bisher nicht abgedeckt haben.

Ebenen in JOSM
-----------
Wenn du soweit und gefolgt bist, hast du vielleicht bemerkt, dass man alle Arten unterschiedlicher Dinge in JOSM hinzufügen kann. Wir können OSM Daten herunterladen, Bing Satellitenbilder einblenden, GPS Spuren und Wegpunkte laden und Field Papers einblenden - alles zusammen eingeblendet im Kartenfenster von JOSM.

Du hast vielleicht auch bemerkt, dass jedes Mal, wenn du etwas mit JOSM hinzugefügt hast, ein zusätzlicher Eintrag zur Ebenenleiste auf der rechten Seite von JOSM hinzugefügt wird. Abhängig von was man geöffnet hat, kann die Ebenenleiste wie folgt aussehen:

![Layers panel][]

Jeder Eintrag in dieser Liste repräsentiert eine andere Datenquelle, die du in deinem Kartenfenster geöffnet hast. In diesem Beispiel, "Data Layer 1" zeigt die OpenStreetMap Daten, welche wir editieren. "Field Papers" ist die Ebene die erstellt wurde, als wir unserer Field Paper zu JOSM hinzugefügt haben.

Wenn wir Bing-Satellitenbilder hinzufügen, erscheint eine neue Ebene im Ebenen-Fenster unter dem Namen "Bing Sat".

The idea of layers can often be hard to understand. A good way to imagine it is that each layer is like a semi-transparent piece of paper, and they are all stacked on top of one another. Each piece of paper has a certain type of information on it, and they can be rearranged any way you like.

Layers that are used as references, such as satellite imagery, GPS tracks, and Field Papers are often called "base layers." The OSM data layer is the layer that you actually work with.

-   To move a layer, click on it in the Layers panel and click on the up or down arrow to move it.

![Layers up down][]

-   To hide a layer, select it with your mouse and click the Show/Hide button:

![Layers show hide][]

-   You should see the layer that you selected disappear in the map window. Click Show/Hide again, and it will reappear.
-   You can remove a layer by selecting it and using the delete button:

![Layers delete][]

-   Lastly, it’s important to know that you can only edit the layer that is considered *active* by JOSM. If you are unable to edit the map in your map window, it’s probably because you don’t have the correct layer set as active. Most layers, such as GPS points, Field Papers, and satellite imagery, can’t be edited. The only layers that can be edited are data from OpenStreetMap, which are usually called “Data Layer 1”.
-   To make a layer active, select it in the Layers panel, and click on the Activate button:

![Layers activate][]


Daten aus GPS und Field Papers
-------------------------------
In the [Mapping with a Smartphone, GPS or Paper](/en/mobile-mapping/) chapters we saw how to collect data with a GPS and Field Papers, and how to load it into JOSM as a layer.

Once you have surveyed with one of these tools, you still need to add the information into OpenStreetMap digitally.

You do this with the same process you learned previously - **download, edit, save**. The difference is that instead of using only satellite imagery as a base layer, you can also use your GPS data, Field Papers, notes, or a combination of them all.

-   For example, let's assume you have your GPS waypoints as a background layer in JOSM, you saved a waypoint on your GPS with the name 030, and you wrote in your notebook that 030 is a school. To add this point into OpenStreetMap, you will select the draw tool, and double-click on top of point 030 in your map window. This will create a point. Then go to the Presets menu, and find the preset for school. Enter the name of the school and click “Apply Preset”. Do the same to add lines and shapes.

![GPS in JOSM][]

Attribute (Tags)
----
When you draw a point, line, or shape, it has a location, but no information about what it is. In other words, we know **where** it is, but not **what** it is. Before now, we have been using items from the Presets menu to define **what** it is. The way OpenStreetMap knows **what** an object is is by using **tags**.

A tag is like a label that you can put on something. For example, if we draw a square, it’s only a square. But then we add attributes to it that describe what it is: this square is a building; the name of the building is “Menara Thamrin”; the building is 16 levels high.

You can add as many tags as you want to an object. Tags are saved as pairs of text, called **keys** and the **values**. In OpenStreetMap, the tags written above would in fact be:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

If you select an object in JOSM, you can see all the tags that are attached to it in the Properties panel on the right.

![Properties panel][]

### Attribute bearbeiten

You can add, edit, and delete tags from the Properties panel. However, the tags are traditionally in English and can sometimes be confusing, so it is often easier to use the Presets menu. When you add or change tags, the attributes of the object are changed.

- Um die Attribute eines Objekts zu bearbeiten, wählen Sie es zuerst aus.
-   Then edit the tags in one of two ways: (1) Use the Presets menu, or (2) edit the tags directly in the Properties window on the right.

### Ein verbreiteter Fehler: Attribute zu Punkten hinzufügen, während Sie Linien oder Formen bearbeiten

When you are editing the attributes of a point, you will first select the point and then add tags either through the Presets menu or directly in the Properties panel. A common mistake is when adding attributes to a line or a shape. When selecting the object, it is important that you
die Linie auswählen und NICHT einen der Punkte, aus denen die Linie besteht.

This frequently occurs because editors use the JOSM select tool to draw a box around an object, which causes everything, both the line **and** the nodes to be selected, and when you add tags they are applied to the nodes as well. Be sure to **only** select lines when you want to add tags to them.

![Nodes mistake][]

OSM-Daten sichern
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and upload changes in a reasonably short period of time. You do not want to download data one day, and then wait until a few days later to upload your edits. What if someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit, and upload your changes frequently, there may be cases in which you want to save the OSM data on your computer. For example, if you have intermittent connectivity to the internet, you may wish to download data, save it, edit, and then upload your changes later on.

-   To save an OSM file, make sure that it is the active layer in the the Layers panel. Click “File” on the top menu, and click “Save”. Choose a location for the file and give it a name. You can also save by clicking this button:

![JOSM save button][]

-   You can now close JOSM and your data will be saved. When you want to open the file again, simply open JOSM, go to the “File” menu, and click “Open...”

Zusammenfassung
-------
In this chapter we looked a little bit closer at the JOSM interface and learned about layers and tags. You should now have a solid footing in how to map and how to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png