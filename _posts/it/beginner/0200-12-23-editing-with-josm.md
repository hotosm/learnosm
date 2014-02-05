---
layout: doc
title: Editing con JOSM
permalink: /it/beginner/editing-with-josm/
lang: it
category: beginner
---

Editing con JOSM
================
We've now covered all the building blocks of mapping with OpenStreetMap.
We've learned how to use GPS and Field Papers to survey an area, and how 
we can use JOSM to edit the points, lines, and shapes that make up our map.

In questo capitolo torneremo ancora una volta su JOSM e impareremo alcune cose non ancora illustrate.


I livelli in JOSM
-----------------
If you've followed along so far, you may have noticed that we can add all sorts
of different things into JOSM. We can download OSM data, add Bing satellite imagery,
load GPS tracks and waypoints, and add Field Papers - all of which are displayed
in the map window of JOSM.

Avrai notato che quando apri un file, scarichi dati o aggiungi un'immagine
di Bing, un oggetto viene aggiunto nel pannello “Livelli” sul
lato destro di JOSM. Il tuo pannello dovrebbe essere simile a questo:

![Layers panel][]

Ogni oggetto rappresenta una differente origine dei dati che vedi
nella finestra della mappa. In questo esempio, “Data Layer
1” sono di dati di OpenStreetMap che stiamo editando. "Field Papers” è il livello creato 
quando abbiamo caricato i Field Paper in Josm.

Se aggiungi l'immagine satellitare di Bing, apparirà un nuovo livello chiamato "Bing Sat".

The idea of layers can often be hard to understand. A good way to imagine it is that each
layer is like a semi-transparent piece of paper, and they are all stacked on top of one
another. Each piece of paper has a certain type of information on it, and they can be rearranged
any way you like.

Layers that are used as references, such as satellite imagery, GPS tracks, and Field Papers
are often called "base layers". The OSM data layer is the layer that you actually work with.

-   To move a layer, click on it in the Layers panel and click on the up
    or down arrow to move it.

![Layers up down][]

-  To hide a layer, select it with your mouse and
    click the Show/Hide button:

![Layers show hide][]

-  You should see the layer that you selected disappear in the map
    window. Click Show/Hide again, and it will reappear.
-  You can remove a layer by selecting it and using the delete
    button:

![Layers delete][]

-  Lastly, it’s important to know that you can only edit the layer that
    is considered *active* by JOSM. If you are unable to edit the map in
    your map window, it’s probably because you don’t have the correct
    layer set as active. Most layers, such as GPS points, Field
    Papers, and satellite imagery, can’t be edited. The only layers that
    can be edited are data from OpenStreetMap, which are usually called
    “Data Layer 1”.
-  To make a layer active, select it in the Layers panel, and click on
    the Activate button:

![Layers activate][]


Using GPS Data and Field Papers
-------------------------------
In the previous chapters we saw how to collect data with a GPS
and Field Papers, and how to load it into JOSM as a layer.

Once you have surveyed with one of these tools, you still need
to add the information into OpenStreetMap digitally.

You do this with the same process you learned previously - **download,
edit, save**. The difference is that instead of using only satellite
imagery as a base layer, you can also use your GPS data, Field Papers,
notes, or a combination of them all.

-   For example, let's assume you have your GPS waypoints as a background
    layer in JOSM, you saved a waypoint on your GPS with the name 030, and
    you wrote in your notebook that 030 is a school. To add this point
    into OpenStreetMap, you will select the draw tool, and
    double-click on top of point 030 in your map window. This will
    create a point. Then go to the Presets menu, and find the preset for
    school. Enter the name of the school and click “Apply Preset”. Do
    the same to add lines and shapes.

![GPS in JOSM][]


Tag
---

Quando disegni un punto, una linea o un’area, la crei in un
determinato luogo, ma non fornisci altre informazioni. In altre
parole, sappiamo **dove** è, ma non **cosa** è. Prima utilizzavamo gli
oggetti del menù “Preimpostazioni” per definire **cosa** è.
Il modo grazie al quale OpenStreetMap conosce **cosa** rappresenta un
oggetto è detto **tag**. 

Un tag è come un’etichetta che puoi mettere su
un oggetto. Per esempio, se disegni un quadrato, è solo un quadrato.
Ma se aggiungo differenti tag posso descrivere cosa rappresenta
l’oggetto:

-  questo quadrato è un palazzo
-  il nome del palazzo è “Menara Thamrin”
-  il palazzo ha 16 piani


Puoi aggiungere al tuo oggetto quanti tag vuoi. I tag sono salvati
come una coppia di testo, chiamate chiavi e valori. In
OpenStreetMap, i tags elencati sopra sono tradotti in:

-  building = yes
-  name = Menara Thamrin
-  building:levels = 16

-  Se selezioni un oggetto in JOSM, potrai vedere tutte i tag
    associati ad esso, visibili nel riquadro “Proprietà” sulla destra:

![Properties panel][]

### Modificare i tag
Puoi aggiungere, modificare o cancellare questi tag da questo
riquadro. I tag sono tradizionalmente in lingua inglese. E’ meglio
quindi utilizzare gli oggetti del menù “Preimpostazioni”.
Se aggiungi o cambi dei tag, gli attributi dell'oggetto cambiano.

-   To edit an object's tags, first select it.
-   Then edit the tags in one of two ways: (1) Use the Presets menu,
    or (2) edit the tags directly in the Properties window on the right. 

### Common Mistake: Tagging nodes when you want to tag lines or polygons
When you are editing the attributes of a point, you will first select
the point and then add tags either through the Presets menu or directly
in the Properties panel. A common mistake is when adding attributes to a
line or a shape. When selecting the object, it is important that you
select the line, and NOT the points that make up the line.

This frequently occurs because editors use the JOSM select tool to draw a
box around an object, which causes everything, both the line **and** the nodes
to be selected, and when you add tags they are applied to the nodes
as well. Be sure to **only** select lines when you want to add tags
to them.

![Nodes mistake][]

Saving OSM files
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and
upload changes in a reasonably short period of time. You do not want to download
data one day, and then wait until a few days later to upload your edits. What if
someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will
be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data
every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit,
and upload your changes frequently, there may be cases in which you want to save
the OSM data on your computer. For example, if you have intermittent connectivity
to the internet, you may wish to download data, save it, edit, and then upload your
changes later on.

-  To save an OSM file, make sure that it is the active layer in the
    the Layers panel. Click “File” on the top menu, and click “Save”.
    Choose a location for the file and give it a name. You can also save
    by clicking this button:

![JOSM save button][]

-  You can now close JOSM and your data will be saved. When you want to
    open the file again, simply open JOSM, go to the “File” menu, and
    click “Open...”


Conclusioni
-----------

In this chapter we looked a little bit closer at the JOSM interface and learned
about layers and tags. You should now have a solid footing in how to map and how
to edit OpenStreetMap.

In the final section of this guide we will look at other resources you can learn from
as you move forward. As you practice what you've learned here and explore further,
you will get better and better at making maps with OSM.


[Layers panel]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image00_layers-panel.png
[Layers up down]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image01_layers-panel-up-down.png
[Layers show hide]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image02_layers-panel-show-hide.png
[Layers delete]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image03_layers-panel-delete.png
[Layers activate]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image04_layers-panel-activate.png
[GPS in JOSM]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image05_gps-layer.png
[Properties panel]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image06_properties-panel.png
[Nodes mistake]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image07_nodes-selected-mistake.png
[JOSM save button]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image08_save-button.png
