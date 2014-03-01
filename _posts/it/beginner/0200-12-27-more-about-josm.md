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

In questa sezione daremo un'occhiata più approfondita all'interfaccia di JOSM e
scopriremo come usarla per modificare la mappa di OpenStreetMap.

Il ciclo di mappatura 
---------------------
Modificare la mappa con JOSM è simile all'utilizzo dell'editor iD visto in precedenza.
Poichè JOSM è un'applicazione, lavora un modo differente.
Il processo di modifica o di aggiunta di dati in OpenStreetMap con JOSM segue sempre
lo stesso ciclo:

1. **Download**: scaricare i dati correnti da OSM
2. **Edit**: modificarli usando GPS, Field Paper e note come guida
3. **Save**: salvare le modifiche e caricarle su OpenStreetMap

Scaricare i dati di OSM
-----------------------
Il primo passo è quello di scaricare i dati per quella porzione di mondo che vogliamo 
migliorare.   Ricordati che dovrai fare questo ogni volta che intendi fare delle modifiche,
perchè la mappa è aggiornata spesso anche da altri utenti. 

-	Fai click su “File” nel menù in alto a sinistra di JOSM e seleziona“Scarica da
    OSM”. Si aprirà la finestra di selezione. Puoi accedere a questa finestra più rapidamente
    premendo il bottone mostrato qui sotto:

![JOSM Download Button][]

-  Quando si apre la finestra di selezione, vedrai una mappa con un rettangolo rosa.
   Se non vedi la mappa, fai click sul tab "Slippy map".

![JOSM Download Dialog][]

-  Il riquadro rosa rappresenta l’area della mappa che vorremmo
    scaricare e modificare. Usa il mouse per spostarti o ingrandire una zona
    che conosci bene, come il tuo paese o il circondario.
    I controlli sono uguali alla finestra principale di JOSM. Col bottone destro del 
    mouse puoi spostare la mappa, con la rotella ingrandire o ridurre la visuale.

>	Talvolta ti capiterà di lavorare su un computer portatile, e troverai
>       difficile fare zoom.  Lavorare con JOSM è più facile utilizzando un mouse,
>	anche se i portatili moderni permettono lo zoom utilizzando il touchpad.

-	Disegna un rettangolo intorno all'area che vuoi scaricare. Tieni 
        premuto il tasto sinistro del mouse e trascina il mouse per creare un rettangolo.
      Rilascia il pulsante del mouse per terminare il disegno.
-  Quando sarai soddisfatto della dimensione e della posizione del rettangolo, premi il tasto 
    "Scarica" al fondo della finestra.   Josm scaricherà da OpenStreetMap i dati compresi 
    nell'area selezionata e li visualizzerà nella finestra della mappa per permettere 
     le modifiche. 
    

### Aggiungere un'immagine aerea
Se ti ricordi quando abbiamo aggiunto il primo punto con l'editor iD, avrai notato
che sotto i dati della mappa c'era un'immagine satellitare, utile per identificare 
gli oggetti al suolo. Quest'immagine era fornita da Bing di Microsoft, che generosamente 
mette a disposizione le proprie immagini per aiutare gli utenti di OSM a contribuire alla mappa. 

-	Per aggiungere le immagini aeree di Bing in Josm, seleziona dal menù in alto 
"Immagini aeree" e poi scegli “Bing Sat”.

>   Se non trovi "Bing Sat" nel menù, attivalo nelle preferenze di JOSM. 
>   Vai nel menù "Modifica" -> "Preferenze" e fai click sull'icona
>   “WMS TMS”. Se non lo trovi prova a cliccare la freccia verso il basso.
>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>
>   Fai click su “Bing Sat” poi su “Attiva”.


### Tour di JOSM
Ora che hai scaricato i dati da OpenStreetMap e le immagini satellitari, diamo un'occhiata
all'interfaccia di JOSM.

![JOSM layout][]

Questa è la finestra della mappa dove si svolge la maggior parte dell'azione.
Qui visualizzerai i dati di OpenStreetMap, li editerai e ne aggiungerai di nuovi.

Sulla destra della finestra ci sono una serie di pannelli, ognuno dei quali 
ha una diversa funzione.  Tipicamente con l'installazione di JOSM è mostrato
un certo numero di pannelli: "Livelli", "Etichette/Appartenenze" e "Selezione".
Quando nell'area della mappa selezioni un punto, una linea o un'area verrà 
mostrato nella finestra "Selezione". Le informazioni sull'oggetto selezionato appariranno
nella finestra "Etichette/Appartenenze", mentre il nome utente dell'autore sarà mostrato
nella finestra "Autore". 


  
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

Salva le modifiche
--------------
Il terzo ed ultimo passo per completare le modifiche è quello di salvarle 
e caricarle su OpenStreetMap. Per caricarle devi essere connesso ad internet.

-  Clicca “File” nel menù in alto e premi “Carica dati”. Questo aprirà
    la finestra di upload. Puoi accedere alla finestra più
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
