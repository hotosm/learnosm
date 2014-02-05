---
layout: doc
title: Ancora su JOSM
permalink: /it/beginner/more-about-josm/
lang: it
category: beginner
---

Ancora su JOSM
==============
Nella sezione precedente hai installato JOSM e hai iniziato a disegnare i tuoi
primi nodi, linee e forme. Hai aggiunto impostazioni a questi oggetti in
modo da inserire informazioni a loro riguardo. Alla fine, sei stato in
grado di disegnare la tua mappa con JOSM.

È stato un buon esercizio, adesso siamo pronti per editare su OpenStreetMap.

In this section we will take a closer look at the interface of JOSM, and see
how we can use it to edit the map on OpenStreetMap.

Il ciclo di mappatura 
---------------------
Editing OpenStreetMap with JOSM is similar to editing with the iD editor we
saw previously. But because JOSM is a desktop application, it works a little
bit differently. The process of editing and adding to OpenStreetMap with
JOSM will always be as follows:

1. **Download**: scaricare i dati correnti da OSM
2. **Edit**: modificarli usando GPS, Field Paper e note come guida
3. **Save**: salvare le modifiche e caricarle su OpenStreetMap

Downloading OSM Data
--------------------
The first editing step is to download the data for the area of the world that
we want to improve. Remember that you need to do this every time that you want
to make changes to the map, because the map is often being updated by other users.

-	Click on “File” in the top left corner of JOSM and click “Download
    from OSM”. This will open up the download window. You can access
    this window more simply by clicking on the download button, shown
    here:

![JOSM Download Button][]

-  When the download window opens, you should see a map with a pink box
    drawn on it. If you don’t see the map, click on the tab marked
    “Slippy map”.

![JOSM Download Dialog][]

-  Il riquadro rosa rappresenta l’area della mappa che vorremmo
    scaricare per modificarla. Use your mouse to pan and zoom it to an area
    that you know very well, such as your hometown or neighborhood. The
    controls are the same as in the JOSM map window. The right mouse button
    lets you drag the map, and your scroll wheel allows you to zoom in and
    out.

>	Sometimes if you are working on a notebook computer it can be difficult
>	to scroll in and out. Working in JOSM is much easier if you have a mouse,
>	but most modern notebooks allow you to scroll using the touchpad.

-	Draw a box around the area that you want to download. To draw a new box, click on the
    map, hold your left mouse button down, and drag your mouse to create
    a box. Release the mouse button to finish drawing the box.
-  When you are satisfied with the size and location of the box, click
    “Download” at the bottom of the window. JOSM will get the data for
    this area from OpenStreetMap and open it in your map window for
    editing.

### Add Imagery
If you followed along when we added our first points with the iD editor, you
remember that beneath the map data there was a satellite image that helped
us identify objects on the ground. This imagery was from Microsoft Bing, which
generously provides its imagery for OpenStreetMap users to reference while
contributing to the map.

-	To add the Bing satellite imagery in JOSM, click "Imagery" on the top menu of
    JOSM and selecting “Bing Sat.”

>   If you don't see Bing Sat on the Imagery menu, you may need to activate
>   it in the JOSM preferences. Go to Edit -> Preferences and click on the icon
>   that says “WMS TMS”. You may need to click on the down arrow to find it.
>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>
>   Click on “Bing Sat”. Then Click “Activate”.


### Tour of JOSM
Now that we've downloaded OpenStreetMap data and added the Bing satellite imagery,
let's take another look at the interface of JOSM.

![JOSM layout][]

The main window you are already familiar with - this is the map window, and 
it is where most of the action takes place. Here you will view, edit, and
add to the OpenStreetMap data.

To the right of the map window are a series of panels, each of which has
its own function. Typically when you first install JOSM several
panels are shown by default, such as Layers, Properties, and
Selection. When you select a point, line, or shape in the map
window, it will be shown in the Selection panel. Information about
the object will be shown in the Properties panel, and the username
of the author of that object will be shown in the Authors panel.

These panels can be opened or closed by clicking on the various buttons on
lower left side of JOSM. Above these buttons in the upper right are tools which
change what you can do with your mouse. You are already familiar with some of them,
the Select tool and the Draw tool. Below them are tools which make it easier to
zoom in, delete an object, draw a shape, or create a line that is parallel
to another line.


Edit
----
So we have completed step one of the editing process - Downloading. We have
prepared JOSM with satellite imagery as a reference. The next step is to edit
the map and add new items.

Depending on the area that you chose to download, there may be a lot or very
little existing map data. But notice that it is the same sort of data that we
have seen previously - points, lines, and shapes that represent real-life locations.

-	Use the techniques you have already learned to add a couple points to the map
	of places that you know. If you see any mistakes, try to fix them.
-	You don't need to be too aggressive while you are learning. If you are unsure
	about something it's better to leave it as it is.
-	If you want to move a point, line, or shape, use the
    **select tool**. Click on an object and drag it where it
    should be. This can be used to correct the location of items that
    have been put in the wrong place.

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
Il terzo ed ultimo passo per completare le modifiche è quello di salvarle 
e caricarle su OpenStreetMap. Per caricarle devi essere connesso ad internet.

-  Clicca “File” nel menù in alto e premi “Carica dati”. Questo aprirà
    la finestra di upload. Puoi  accedere alla finestra più
    semplicemente premendo il bottone di upload, mostrato di seguito:

![JOSM Upload Button][]

-  La finestra che appare mostra una lista di oggetti che stai per
    aggiungere o che stai per modificare o cancellare. Nel box in basso
    ti viene chiesto di inserire un commento sulle modifiche che stai
    per fare. Scrivici la descrizione delle tue modifiche.

![JOSM Upload Dialog][]

-  Clicca “Carica le modifiche”.
-  Se questa è la prima volta che salvi delle modifiche, ti verrà
    chiesto il nome utente e la password.
-   Inseriscile nella finestra che appare. Se metti la spunta nella
    casella, le tue credenziali verranno salvate e non ti servirà
    inserirle di nuovo in futuro. Clicca “Autentica”.

![JOSM Authenticate][]

-  Devi aspettare finché non termina l’upload dei cambiamenti e hai
    finito! 

>	Assicurati di caricare le modifiche prima di chiudere JOSM.
>	Anche se hai altri edit da fare, carica le modifiche e poi continua ad editare.
>	Non vorrai certo perdere il tuo lavoro!


Guarda sulla Mappa le tue modifiche
-----------------------------------

-  Apri il tuo browser e vai su
    [openstreetmap.org](http://openstreetmap.org)
-  Sposta la mappa sull’area che hai modificato.
-  Dovresti vedere le tue modifiche apparire sulla mappa! Se non
    succede, prova a premere CTRL+R per aggiornare la pagina. A volte la
    mappa non si aggiorna e necessita di essere ricaricata.
-  E se non vedi le tue modifiche? Non ti preoccupare - ci vorrà
    qualche minuto affinché le modifiche vengano mostrate sulla mappa.
    Controlla poi le tue aggiunte in JOSM per essere sicuro che le hai
    inserite correttamente. Una buona regola generale è che se il tuo
    punto ha una icona in JOSM, allora dovrebbe essere visualizzato
    anche dal sito di OpenStreetMap.

Conclusioni
-----------

Adesso che hai visto come aggiungere dati a OpenStreetMap, cosa c’è
dopo?  Editare è importante, ma non è il solo aspetto per fare le mappe.
Devi anche imparare a uscire e prendere informazioni sul campo.

Nelle prossime sezioni impareremo due metodi - GPS and Field Papers - usati 
per raccogliere dati geografici. Le informazioni raccolte potranno essere utilizzate per migliorare la mappa.

[JOSM Download Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image00_download-button.png
[JOSM Download Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image01_download-dialog.png
[JOSM Preferences up down]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image02_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image03_preferences-wms-tms.png
[JOSM layout]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image04_layout.png
[JOSM select tool]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image05_select-tool.png
[JOSM area downloaded]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image06_area-downloaded.png
[JOSM Upload Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image07_upload-button.png
[JOSM Upload Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image08_upload-dialog.png
[JOSM Authenticate]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image09_authenticate.png
