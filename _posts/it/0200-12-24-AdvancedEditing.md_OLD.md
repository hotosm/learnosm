---
layout: doc
title: Editing Avanzato
permalink: /it/beginner/aerial-imagery/
lang: it
category: beginner
---

Editing Avanzato
================

Nei capitoli precedenti hai imparato come disegnare punti, linee e forme
in JOSM, come aprire i tuoi waypoint e le tue tracce GPS in JOSM, e come
scaricare, editare e caricare le modifiche su OpenStreetMap. In questo
capitolo descriveremo in maggior dettaglio alcune delle feature di JOSM,
cosicché potrai andar oltre i semplici strumenti di editing e avere una
comprensione migliore del programma. Nota che mentre questo capitolo non
è estremamente avanzato, è un gradino più alto rispetto agli altri. Se
non hai compreso appieno le lezioni che ti hanno portato fino a qui,
dovresti fare un po’ di esercizio prima di continuare.

Una panoramica su JOSM
----------------------

    ![]({{site.baseurl}}/images/it_beg_ch7_image06.png)

-  JOSM ha un sacco di caratteristiche diverse. La finestra principale,
    con la quale hai già familiarità, è la finestra della mappa, dove si
    attua la maggior parte delle azioni. Qui vedi, modifichi e aggiungi
    dati a OpenStreetMap.
-  Alla destra della finestra della mappa ci sono una serie di
    riquadri, ognuno con una funzione differente.
-  Normalmente, appena installato JOSM, viene mostrata una serie di
    riquadri, come “Livelli”, “Proprietà” o “Selezioni”. Quando
    selezioni un punto, una linea o un’area nella finestra principale,
    questa viene mostrata nel riquadro “Selezioni”. Le informazioni
    sull’oggetto selezionato saranno visualizzate nel riquadro
    “Proprietà” mentre il nome dell’utente che ha creato l’oggetto sarà
    mostrato nel pannello “Autori”.
-  Sul lato sinistro di JOSM ci sono varie barre strumenti, formate da
    più pulsanti. In alto ci sono dei pulsanti che permettono di
    cambiare le operazioni effettuabili col mouse. Conosci già i primi
    due pulsanti, gli strumenti “Seleziona” e “Disegna”. Gli altri
    strumenti ti permettono di ingrandire, cancellare un oggetto,
    disegnare una forma o creare una linea parallela ad un’altra
    linea. Sotto questi ci sono ulteriori pulsanti. Questi controllano
    cosa viene mostrato nella parte destra di JOSM. Usando questi
    pulsanti puoi aprire o chiudere pannelli a destra, come “Proprietà”,
    “Selezione” o “Autore”.

i Livelli in JOSM
-----------------

-  Se non lo hai già fatto, apri il tuo file GPS o scarica dati da
    OpenStreetMap.
-  Avrai notato che quando apri un file, scarichi dati o aggiungi un
    Walking Paper, un oggetto viene aggiunto nel pannello “Livelli” sul
    lato destro di JOSM. Il tuo pannello dovrebbe essere simile a questo:

    ![]({{site.baseurl}}/images/it_beg_ch7_image04.png)

-  Ogni oggetto rappresenta una differente origine dei dati che vedi
    nella finestra della mappa. Nell’immagine precedente, “Data Layer 2”
    sono i dati di OpenStreetMap che vogliamo editare. “Markers” sono i
    punti del GPS mentre “30 Juni 2011.gpx” è il nome della traccia GPS.
    Infine “Walking Papers” è il livello creato quando hai aggiunto i
    Walking Paper in JOSM. Puoi aggiungere il livello di immagini di
    Bing, che mostra foto satellitari, cliccando “Immagini aeree” nel
    menù principale di JOSM e selezionando “Bing Sat.”
-  Per nascondere uno di questi livelli, selezionalo col mouse e fai
    clic sul bottone Mostra/Nascondi simile a questo:

    ![]({{site.baseurl}}/images/it_beg_ch7_image02.png)

-  Dovresti veder scomparire il livello selezionato dalla finestra
    della mappa. Fai clic nuovamente sul pulsante per far riapparire il
    livello.
-  Puoi eliminare un livello selezionandolo e utilizzando il bottone di
    cancellazione:

    ![]({{site.baseurl}}/images/it_beg_ch7_image01.png)

-  Infine, sappi che puoi editare i dati in un livello che è
    considerato attivo da JOSM. Se non puoi editare la mappa nella
    finestra, è probabile che non hai il giusto livello attivato. Molti
    livelli, come i punti GPS, i Walking Paper o le immagini satellitari
    non possono essere modificati. I soli livelli modificabili sono
    quelli contenenti i dati scaricati da OpenStreetMap, che di solito
    appaiono col nome di “Data Layer 1”.
-  Per attivare un livello, selezionalo nel riquadro dei livelli, poi
    fai clic sul bottone di attivazione:

    ![]({{site.baseurl}}/images/it_beg_ch7_image07.png)

Salvare i file OSM
------------------

-  Talvolta, dopo aver scaricato alcuni dati OSM, puoi volerli salvare
    per poterli editare in un secondo momento, magari quando sei
    disconnesso da internet. Successivamente potrai caricare i dati in
    OSM quando ritornerai connesso a internet.
-  Per salvare un file OSM, assicurati di avere il livello attivo nel
    riquadro “Livelli”. Fai clic su “File” nel menù principale e poi su
    “Salva”. Seleziona una directory e un nome per il file. Puoi salvare
    anche premendo il bottone seguente:

    ![]({{site.baseurl}}/images/it_beg_ch7_image00.png)

-  Puoi chiudere JOSM e i tuoi dati saranno salvati. Quando vorrai
    aprire il file, esegui JOSM, vai nel menù “File” e seleziona
    “Apri...”.

Altri strumenti di disegno
--------------------------

-  JOSM ha molti strumenti che permettono di disegnare facilmente forme
    e linee. Puoi trovarli nel menù “Strumenti”, in alto nella finestra.
-  Devi innanzitutto selezionare un oggetto nella finestra della mappa
    per poi applicarci una delle funzioni. Le più utili sono:
-  Dividi percorso - Ti permette di dividere un linea in due segmenti
    separati. Ti sarà utile quando vorrai aggiungere differenti
    attributi a diverse parti di una strada. Per usare questa funzione,
    seleziona un punto al centro della linea che vuoi spezzare, poi
    seleziona Dividi percorso dal menù strumenti e la linea si dividerà
    in due segmenti.
-  Unisci percorso - Questo comando è l’opposto di Dividi percorso. Per
    unire due linee in una singola linea, queste devono condividere un
    solo punto. Per usare questa funzione, seleziona entrambe le linee
    tenendo premuto il tasto SHIFT e facendo clic su ogni linea. Fatto
    ciò, seleziona Unisci percorso dal menù strumenti.
-  Inverti la direzione dei percorsi - Questo comando cambia la
    direzione di una linea. Se la tua linea rappresenta una strada a
    senso unico, potresti dover invertire la direzione. Negli altri casi
    la direzione non è influente.
-  Semplifica percorso - Se la linea ha troppi punti e desideri
    semplificarla, questo comando rimuove alcuni punti dalla linea.
-  Disponi i nodi in cerchio - Se stai cercando di disegnare un
    cerchio, fallo come meglio puoi e poi seleziona questa funzione. Ti
    aiuterà a sistemare i punti in cerchio.
-  Disponi i nodi in linea - Questa funzione allinea una serie di
    punti.
-  Disponi ortogonalmente - Questa funzione è molto utile per disegnare
    costruzioni. Dopo che avrai disegnato una costruzione, questa
    funziona allinea i lati per ottenere angoli retti.

Tag
---

-  Quando disegni un punto, una linea o un’area, la crei in un
    determinato luogo, ma non fornisci altre informazioni. In altre
    parole, sappiamo dove è, ma non cosa è. Prima utilizzavamo gli
    oggetti del menù “Preimpostazioni” per definire cosa è.
-  Il modo grazie al quale OpenStreetMap conosce cosa rappresenta un
    oggetto è detto tag. Un tag è come un’etichetta che puoi mettere su
    un oggetto. Per esempio, se disegni un quadrato, è solo un quadrato.
    Ma se aggiungo differenti tag posso descrivere cosa rappresenta
    l’oggetto:

-  questo quadrato è un palazzo
-  il nome del palazzo è “Menara Thamrin”
-  il palazzo ha 16 piani

-  Puoi aggiungere al tuo oggetto quante tag vuoi. Le tag sono salvate
    come una coppie di testo, chiamate chiavi e valori. In
    OpenStreetMap, le tags elencate sopra sono tradotte in::

-  building = yes
-  name = Menara Thamrin
-  building:levels = 16

-  Se selezioni un oggetto in JOSM, potrai vedere tutte le tag
    associate ad esso, visibili nel riquadro “Proprietà” sulla destra:.

    ![]({{site.baseurl}}/images/it_beg_ch7_image03.png)

-  Puoi aggiungere, modificare o cancellare queste tag da questo
    riquadro. Le tag sono tradizionalmente in lingua inglese. È meglio
    quindi utilizzare gli oggetti del menù “Preimpostazioni”.

Combinazioni di tasti
---------------------

-  Talvolta può essere fastidioso dover fare clic continuamente per
    selezionare differenti opzioni o menù in JOSM. Per fortuna esistono
    delle combinazioni di tasti che ti permettono di effettuare le
    operazioni più comuni. Eccoti un elenco delle principali:

-  s - strumento di selezione
-  a - strumento di disegno
-  z - strumento di zoom
-  + (segno più) - ingrandisci la visuale
-  - (segno meno) - riduci la visuale
-  p - spezza una linea
-  c - unisci una linea
-  o - allinea i punti in cerchio
-  l - allinea i punti
-  q - Ortogonalizza (la forma assume tutti angoli di 90°)

Conclusioni
-----------

Come hai potuto vedere ci sono tante caratteristiche addizionali che
fanno di JOSM uno strumento potente per produrre mappe. Ricorda che più
ti impratichisci con questi strumenti, più diverrai bravo nell’inserire
informazioni su OpenStreetMap.

Nel capitolo finale ci allontaneremo da JOSM e esamineremo alcuni
progetti interessanti che usano i dati di OpenStreetMap, e impareremo
come poter continuare ad informarci su OSM.
