---
layout: doc
title: Iniziare con JOSM
permalink: /it/beginner/start-josm/
lang: it
category: beginner
---

Iniziare con JOSM
=================

In questo capitolo impareremo passo dopo passo a scaricare e installare
JOSM, l’editor Java di OpenStreetMap. Cambieremo alcune impostazioni in
JOSM per rendere il suo utilizzo più facile.  Poi apriremo una mappa di
esempio e impareremo alcune semplici operazioni. Ti ricordi quando nel
capitolo 1 ti abbiamo chiesto di disegnare una mappa del tuo paese o
della tua città?  Concluderemo questo capitolo disegnando nuovamente
quella mappa, questa volta in maniera digitale.  Dopo questo avrai una
buona conoscenza di come disegnare mappe con JOSM.

Scaricare JOSM
--------------

-  Se hai una copia di JOSM su un CD o su una chiavetta USB, puoi
    passare direttamente alla sezione 2. Installare JOSM.
-  Se non hai già JOSM o vuoi una versione aggiornata, apri il tuo
    browser - questo può essere Firefox, Chrome, Opera, or Internet
    Explorer.

-  Nel campo dell’indirizzo in alto nella finestra, inserisci il testo
    seguente e premi “Invio”:

    [josm.openstreetmap.de](http://josm.openstreetmap.de)

-  Puoi trovare questo sito web cercando “JOSM” con un motore di
    ricerca
-  Il sito web dovrebbe essere simile al seguente:

  ![]({{site.baseurl}}/images/it_beg_ch3_image04.png)

-  Se hai Windows installato sul tuo computer, clicca “Windows JOSM
    Installer” per scaricare JOSM. Se hai un diverso sistema operativo,
    clicca sul link del tuo sistema.  Dovrebbe iniziare il tuo download.
    In questo capitolo partiremo dal presupposto che tu stia usando
    Windows, ma le istruzioni fornite sono simili anche per gli altri
    sistemi operativi.

Installare JOSM
---------------

-  Potresti avere problemi a installare JOSM se Java non è già
    installato sul tuo computer. Se hai problemi, prova a scaricare e
    installare Java. Puoi scaricarlo qui:
     [http://www.java.com/en/download/](http://www.java.com/en/download/)
-  Trova il file di installazione di JOSM sul tuo computer. Fai doppio
    clic sopra per iniziare l’installazione.
-  Fai clic su “OK”, “Next”, “I Agree”, e “Install”. A installazione
    completata, fai clic su “Finish” per lanciare la prima volta JOSM.
    In seguito, quando vorrai lanciare JOSM, potrai farlo facendo clic
    sul menù di Start nella parte bassa a sinistra del tuo schermo e
    facendo clic sul programma JOSM.
-  Potrebbe uscire una finestra pop-up che ti richiede se vuoi
    aggiornare il software. Non dovrebbe essere necessario aggiornarlo
    dal momento che è nuovo.  Premi il bottone “Cancel”. Se non vuoi più
    vedere questo messaggio, seleziona la casella in fondo alla finestra
    prima di premere “Cancel”.
-  Alla partenza di JOSM, dovresti vedere una finestra simile:

![]({{site.baseurl}}/images/it_beg_ch3_image07.png)

Cambiare le impostazioni di JOSM
--------------------------------

-  Prima di poter utilizzare JOSM, sarebbe meglio cambiare qualche
    impostazione per rendere più semplice l’utilizzo del programma. Per
    cambiare le impostazioni, fai clic su “Edit” nel menù in alto e  poi
    su “Preferences.”

    ![]({{site.baseurl}}/images/it_beg_ch3_image13.png)

### Cambiare la lingua

-  JOSM dovrebbe riconoscere in automatico la lingua utilizzata dal
    sistema e adeguarsi. Nel caso il programma non riesca a determinare
    la lingua o si volesse scegliere una lingua specifica, occorre
    sceglierla nel menù preferenze.
-  Se non hai la finestra delle preferenze aperta, fai clic su “Edit” e
    poi su “Preferences”.

-  Sul lato sinistro fai clic sull’icona del pennello che sta
    dipingendo.
-  In alto nella finestra, fai clic sulla scheda chiamata “Look and
    Feel”.
-  Scegli la lingua dal menù a discesa vicino alla parola “Language”.
-  Fai clic su OK.

![]({{site.baseurl}}/images/it_beg_ch3_image09.png)

-  È necessario far ripartire JOSM per confermare la tua scelta. Fai
    clic in alto a sinistra su “File” e poi su “Exit” in fondo al menù.
-  Fai ripartire JOSM andando nel menù Start di Windows, in basso a
    sinistra nello schermo. Cerca JOSM ed esegui il programma.

### Aggiungere lo sfondo delle immagini satellitari Bing

-  Vogliamo usare le immagini satellitari quando creiamo le nostre
    mappe, così aggiungiamole nella finestra delle impostazioni. Sul
    lato sinistro della finestra delle impostazioni ci sono differenti
    icone per le diverse impostazioni. Fai clic sull’icona con scritto
    “WMS TMS”. Potresti dover utilizzare il tasto “Freccia Giù” per
    trovarlo:

 ![]({{site.baseurl}}/images/it_beg_ch3_image06.png)           ![]({{site.baseurl}}/images/it_beg_ch3_image01.png)

-  Clicca su “Bing Sat”. Quindi clicca su “Attiva”.

  ![]({{site.baseurl}}/images/it_beg_ch3_image11.png)

-  Dovresti vedere “Bing Sat” nell’elenco al di sotto del pulsate di
    attivazione.
-  Nel caso del territorio italiano, potrai effettuare lo stesso
    procedimento con le ortofoto del PCN.

### Aggiunta di preconfigurazioni

-  Se ti è stato fornito un file che dovrebbe essere aggiunto ai menù di
    preconfigurazione, puoi aggiungerlo ora. Ad esempio, un file di
    preconfigurazione potrebbe essere qualcosa del tipo  buildings.xml.
-  Dovrebbe essere ancora aperta la finestra delle preferenze. Se non
    lo fosse, fai clic su “Modifica” e poi su “Preferenze” per aprire la
    finestra.
-  Sul lato sinistro, fai clic sull’icona che assomiglia ad un
    reticolo.

![]({{site.baseurl}}/images/it_beg_ch3_image08.png)

-  Fai clic sul tab in alto con scritto “Etichette Preimpostate”.
-  In alto a destra, premi il bottone col simbolo +.
-  Nella finestra che apparirà, fai clic sul bottone con l’immagine
    della cartellina. Naviga quindi fino al punto in cui è presente il
    file che vuoi aggiungere, ad esempio buildings.xml.
-  Fai clic su OK.

### Aggiungi l’estensione per i Walking Papers

-  Più avanti in questa guida impareremo ad utilizzare uno strumento
    chiamato Walking Papers, che ci permetterà di stampare una mappa di
    una zona, disegnarci sopra e prendere degli appunti e quindi
    caricarla come sfondo di JOSM. Quindi potremo riportare i nostri
    disegni e le nostre note in OpenStreetMap. Per ora aggiungiamo
    l’estensione per i Walking Papers in JOSM.
-  Dovrebbe essere ancora aperta la finestra delle preferenze. Se non
    lo fosse, fai clic su “Modifica” e poi su “Preferenze” per aprire la
    finestra.
-  Sul lato sinistro, fai clic sull’icona che assomiglia ad una presa
    di corrente.

![]({{site.baseurl}}/images/it_beg_ch3_image03.png)

-  Fai clic sul bottone in basso chiamato “Scarica lista”. La lista su
    scaricherà da internet e, quando sarà completa, ,vedrai apparire
    nella finestra un elenco di estensioni.
-  Nel campo accanto alla parola “Cerca:”, scrivi “walking”. Verranno
    mostrate solo le estensioni che hanno la parola “walking” nel
    titolo.
-  Fai clic nella casella di selezione a sinistra dell’estensione
    chiamata walkingpapers e premi OK in fondo alla pagina.
-  L’estensione Walking Papers verrà scaricata e installata. Non fare
    clic su “Annulla”.

Impara il disegno di base con JOSM
-----------------------------------

-  Adesso apriamo un file OSM d’esempio, con il quale impareremo le
    basi di come tracciare le mappe con JOSM. Nota che questa mappa non
    è reale, cioè non è una mappa di un posto vero, quindi
    non caricheremo questi dati su OpenStreetMap.
-  Se ti sono stati dati dei file dal tuo istruttore, dovresti avere
    già il file che apriremo, chiamato sample.osm.
-  Se non hai il file sample.osm sul tuo computer, puoi scaricarlo da
    internet. Apri il browser e nella barra degli indirizzi scrivi
    [http://www.learnosm.org/files/](http://www.learnosm.org/files/)

Salva il file chiamato sample.osm cliccando sul link col tasto destro e
scegliendo “Salva come...” scegliendo una posizione adatta.

-  Adesso apriamo la mappa d’esempio in JOSM. Apri JOSM e clicca il
    bottone “Apri” in alto a sinistra.

    ![]({{site.baseurl}}/images/it_beg_ch3_image12.png)

-  Cerca il file sample.osm. Cliccaci e premi “Apri”.
-  Dovresti vedere una mappa d’esempio come nella figura:

  ![]({{site.baseurl}}/images/it_beg_ch3_image02.png)

### Operazioni di base

-  Per muovere la mappa a sinistra o a destra, su o giù, tieni premuto
    il tasto destro del mouse e muovilo.
-  Ci sono molti modi per zoomare in avanti o indietro nella mappa. Se
    hai un mouse, puoi usare la sua rotellina, ad esempio. Se stai
    usando un portatile e non hai un mouse, puoi zoomare usando la scala
    nell’angolo in alto a sinistra della mappa. Trascina la barra a
    sinistra o a destra tenendo premuto il tasto sinistro del mouse e
    muovendo la barra a sinistra o a destra.

    ![]({{site.baseurl}}/images/it_beg_ch3_image14.png)

-  Guarda la mappa. Ci sono diversi tipi di oggetti tracciati. C’è un
    fiume, una foresta, alcuni edifici, varie strade e un paio di
    negozi. Per selezionare un oggetto, cliccaci con il tasto sinistro
    del mouse.

### Punti, linee e forme

-  Quando fai clic sui differenti oggetti della mappa d’esempio,
    noterai che ci sono tre tipi di oggetti nella mappa. Ci sono punti,
    linee e aree.
-  I punti sono un luogo singolo, rappresentato con simboli. Su questa
    mappa d’esempio, ci sono due punti: un negozio di vestiti e un
    supermercato. Il negozio di vestiti è rappresentato col simbolo di
    una maglietta mentre il supermercato è rappresentato da un carrello
    per la spesa.
-  Ci sono molte linee sulla mappa, che rappresentano le strade. Se
    osservi attentamente le linee, vedrai che in esse ci sono dei punti.
    Questi punti non hanno simboli o altre informazioni associate, ma
    aiutano a definire il posizionamento della linea.
-  In ultimo, ci sono numerose aree nella mappa d’esempio: esse
    rappresentano luoghi differenti come una foresta, un fiume e
    costruzioni. Un’area in generale rappresenta uno spazio, come campi
    o costruzioni. Un’area è esattamente come una linea; l’unica
    differenza è che questa linea è chiusa, inizia nello stesso punto
    dove finisce.
-  Avrai notato che quando selezioni un oggetto, una lista appare alla
    destra della mappa, in una finestra chiamata “Proprietà”. Queste
    proprietà sono conosciute come tags. I tag sono informazioni
    collegate ad un punto, a una linea o a un’area che descrivono cosa
    queste sono. Impareremo di più sui tags nel Capitolo 7, Editing
    Avanzato. Per ora, tutto ciò che devi sapere è che queste
    informazioni aiutano a descrivere quello che è il tuo oggetto: un
    fiume, una foresta, un negozio o qualcosa d’altro.
-  Pensa a quando disegni una mappa a mano;  anche tu utilizzi punti,
    linee o aree. Quali altri luoghi possono essere rappresentati con
    punti, linee o aree?

### Cambiare gli oggetti

-  Seleziona la foresta nella parte sinistra della mappa. Assicurati di
    aver fatto clic sulla linea intorno alla foresta, non su uno dei
    punti della linea. Ora tieni premuto il tasto sinistro del mouse
    mentre sposti il mouse. Dovresti poter muovere la foresta in un
    diverso luogo della mappa.
-  Fai clic su uno dei punti che compongono la linea intorno alla
    foresta. Tieni premuto il tasto sinistro del mouse e sposta il
    mouse. Dovresti poter muovere il punto. In questa maniera puoi
    cambiare la forma dell’oggetto o muovere un punto.

### Disegnare

-  Sul lato sinistro di JOSM c’è una colonna di bottoni. Alcuni di
    questi bottoni aprono una nuova finestra sulla destra che fornisce
    più informazioni sulla mappa. I bottoni più importanti sono quelli
    posti in alto. Questi bottoni cambiano le operazioni che puoi
    effettuare con il mouse.
-  I primi quattro bottoni della colonna sono i più importanti. Essi ti
    permetteranno di:

1.  Selezionare
2.  Disegnare
3.  Zoomare
4.  Cancellare

-  Fino ad ora, hai usato il comando di selezione, che assomiglia a
    questo:

    ![]({{site.baseurl}}/images/it_beg_ch3_image00.png)

-  Prima di disegnare, assicurati che nulla sia selezionato. Fai click
    su un punto nero della mappa, dove è vuota, per essere sicuro di non
    aver selezionato nulla.
-  Fai clic sul secondo bottone, “Disegna”.

  ![]({{site.baseurl}}/images/it_beg_ch3_image10.png)

-  Trova una zona vuota della mappa e fai doppio clic con il mouse. In
    tal modo disegnerai un singolo punto.
-  Per disegnare una linea, fai un singolo clic col mouse. Sposta il
    mouse e fai nuovamente clic. Continua fino a che non decidi di
    terminare la linea. Per terminare la linea, fai doppio clic col
    mouse.
-  Disegna un’area con lo stesso sistema utilizzato per disegnare una
    linea, ma finisci facendo doppio clic sul punto di partenza della
    linea.

### Aggiungere le preimpostazioni

-  Ora sai come disegnare punti, linee o aree, ma non abbiamo ancora
    definito cosa essi rappresentano. Vogliamo poter dire che i punti
    sono negozi, scuole o altro oppure se le nostre aree rappresentano
    campi o costruzioni.
-  Fai clic sul bottone “Seleziona” nella colonna a sinistra.

  ![]({{site.baseurl}}/images/it_beg_ch3_image00.png)

-  Seleziona uno degli oggetti che hai disegnato in precedenza. Sul
    menù in alto fai clic su “Preimpostazioni”. Spostati col mouse nei
    sotto-menù per scegliere il tipo di oggetto da rappresentare.
-  Quando scegli una preimpostazione, apparirà una finestra in cui
    dovrai inserire alcune informazioni. Non è necessario compilare
    tutti i campi richiesti, ma almeno dovrai inserire alcune
    informazioni importanti, come il nome dell’oggetto.
-  quando avrai finito con l’inserimento delle informazioni, premi
    “Applica Preimpostazione”. Se tutto ha funzionato, il tuo punto,
    linea o area dovrebbe cambiare colore o mostrare un simbolo. Questo
    succede perché hai definito ciò che rappresenta.

### Disegna la tua mappa

-  Ora disegniamo una mappa per impratichirci delle tecniche finora
    apprese. Magari vorrai ridisegnare la mappa fatta nel Capitolo 1.
-  Sposta la mappa lontano dalla mappa di esempio. Tieni premuto il
    tasto destro del mouse e sposta il mouse finché non troverai una
    zona vuota per disegnare.
-  Usa il pulsante “Disegna” per creare punti, linee e aree. Descrivi
    gli oggetti disegnati selezionando le caratteristiche dal menù
    “Preimpostazioni”.
-  Quando avrai finito, dovresti avere la tua mappa, simile alla mappa
    di esempio aperta con sample.osm.

Conclusioni
-----------

Eccellente! Se tutto è andato bene dovresti aver imparato come impostare
JOSM sul tuo computer e ad usare gli strumenti di base per tracciare le
mappe. Nei prossimi due capitoli, imparerai come usare il GPS e i
Walking Paper per mappare la tua città o paese. Nel Capitolo 6,
ritorneremo su JOSM per usare le informazioni che abbiamo raccolto,
inserendo oggetti in OpenStreetMap.
