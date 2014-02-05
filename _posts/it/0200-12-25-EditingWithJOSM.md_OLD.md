---
layout: doc
title: Editing di OpenStreetMap con JOSM
permalink: /it/beginner/editing-with-josm/
lang: it
category: beginner
---

Editing di OpenStreetMap con JOSM
=================================

Nel terzo capitolo hai installato JOSM e hai iniziato a disegnare i tuoi
primi nodi, linee e forme. Hai aggiunto impostazioni a questi oggetti in
modo da inserire informazioni a loro riguardo. Alla fine, sei stato in
grado di disegnare la tua mappa con JOSM.

Nel Capitolo 3, disegnare una mappa era un esercizio per imparare ad
usare JOSM e come inserire luoghi sulla mappa. Ma tali mappe non erano
accurate, perché non avevamo inserito ancora una posizione. Nei
precedenti due capitoli abbiamo esaminato due strumenti, il GPS e i
Walking Papers, che ci permettono di raccogliere le vere localizzazioni
dei luoghi. Queste localizzazioni sono rappresentate da coordinate.

Disegnare una mappa reale, ovvero una mappa in cui tutti i punti, le
linee e le forme sono nella loro posizione adatta, non è diverso dal
disegnare le mappe che abbiamo prodotto nel Capitolo 3. Ma adesso
useremo i punti e le tracce presi col GPS e i nostri Walking Paper per
disegnare mappe simili nelle loro localizzazioni corrette sul pianeta.

In questo capitolo impareremo come editare una mappa su OpenStreetMap e
aggiungere i nostri miglioramenti. Impareremo anche il ciclo di base
della mappatura su OSM:

1) scaricare i dati correnti da OSM

2) modificarli usando GPS, Walking Paper e note come guida

3) salvare le modifiche e caricarle su OpenStreetMap

Alla fine del capitolo, saremo in grado di vedere le nostre modifiche
sulla mappa OSM.

Preparare JOSM
--------------

-  Per avviare JOSM, vai nel menù dei programmi del tuo computer
    (Start-\>Tutti i programmi su Windows, Applicazioni su Ubuntu) e
    cerca JOSM.

-  Adesso carica il tuo file gpx e il tuo Walking Paper. Non devi
    aprirli entrambi, ma se vuoi puoi. Se non ti ricordi come si fa, fai
    riferimento ai due capitoli precedenti.

    ![]({{site.baseurl}}/images/it_beg_ch6_image04.png)

Scaricare i dati OSM
--------------------

-  Ricordi il ciclo di editing di OpenStreetMap descritto
    nell’introduzione del capitolo? Scarica, modifica, salva. Prima di
    poter modificare la mappa, dobbiamo scaricare i dati esistenti
    nell’area scelta.

-  Quando apri la traccia gpx o il Walking Paper, la finestra della
    mappa ti mostrerà quello che hai aperto, e automaticamente andrà
    sulle coordinate corrette. Dopo che hai aperto i file, guarda
    nell’angolo in basso a sinistra di JOSM. Puoi leggerci la latitudine
    e la longitudine (le coordinate) di dove è posizionato il cursore
    del mouse.

    ![]({{site.baseurl}}/images/it_beg_ch6_image00.png)

-  Poiché la finestra ci sta già mostrando l’area che vogliamo
    modificare, è facile scaricare i dati di OpenStreetMap di
    quest’area. Clicca su “File” nell’angolo in alto a sinistra di JOSM
    e successivamente su “Scarica da OSM”. Questo aprirà la finestra di
    download. Puoi accedere alla finestra più semplicemente cliccando
    sul bottone di download, questo che vedi qua sotto:

    ![]({{site.baseurl}}/images/it_beg_ch6_image09.png)

-  Quando la finestra di download si apre, dovresti vedere una mappa
    con un riquadro rosa su di essa. Se non vedi la mappa, clicca sulla
    linguetta “Slippy map”.

    ![]({{site.baseurl}}/images/it_beg_ch6_image06.png)

-  Il riquadro rosa rappresenta l’area della mappa che vorremmo
    scaricare per modificarla. A meno che tu abbia spostato la finestra
    della mappa da quando hai aperto il file GPS o il Walking Paper, il
    riquadro dovrebbe essere posizionato sull’area corretta. Però se
    vuoi scaricare un’area più grande, puoi disegnare un nuovo riquadro.
    Per disegnare un nuovo riquadro, clicca sulla mappa, tieni premuto
    il tasto sinistro del mouse, e trascina il mouse per creare un
    riquadro. Rilascia il tasto del mouse per terminare questa azione.
-  Quando sei soddisfatto della dimensione e della posizione del
    riquadro, clicca “Scarica” sul fondo della finestra. JOSM scaricherà
    i dati per quest’area da OpenStreetMap e aprirà la finestra della
    mappa per la modifica.

Modifica
--------

-  Il passo successivo è editare la mappa e aggiungere nuovi elementi.
    Questo non sempre è facile all’inizio, ma con la pratica migliorerai
    costantemente.
-  Se vuoi muovere un punto, una linea, o una forma, usa lo strumento
    Seleziona. Clicca su un oggetto e trascinalo dove dovrebbe essere.
    Questo può essere usato per correggere la posizione di oggetti che
    sono stati posizionati erroneamente.

    ![]({{site.baseurl}}/images/it_beg_ch6_image08.png)

-  Usa lo strumento Disegna per disegnare nuovi punti, linee o forme.
    Descrivi questi oggetti selezionandoli dal menù Preimpostazioni,
    come hai fatto già nel Capitolo 3.
-  Ricorda che i tuoi punti GPS e le tue Walking Paper non vengono
    inserite automaticamente in OpenStreetMap. Devi aggiungerle alla
    mappa digitalmente, usando lo strumento di disegno. Ma i tuoi punti,
    le tracce e i Walking Paper possono essere visualizzati in un
    livello sottostante come guida.
-  Supponiamo che hai salvato un waypoint sul GPS chiamato 030, e hai
    scritto nel tuo blocco degli appunti che 030 è una scuola. Per
    aggiungere questo punto in OpenStreetMap, dovresti selezionare lo
    strumento di disegno, e fare doppio click sul punto 030 nella
    finestra della mappa. Questo creerà un punto. Poi vai nel menù
    Preimpostazioni e cerca l’impostazione per la scuola. Inserisci
    nella finestra che apparirà il nome della scuola e premi “Applica
    Preimpostazione”. Fai lo stesso procedimento per inserire linee e
    forme.

    ![]({{site.baseurl}}/images/it_beg_ch6_image01.png)

Upload delle modifiche
----------------------

-  Dopo che hai fatto un paio di modifiche per migliorare la mappa,
    salva queste modifiche e caricale su OpenStreetMap. Per caricarle
    devi essere connesso ad internet.
-  Clicca “File” nel menù in alto e premi “Carica dati”. Questo aprirà
    la finestra di upload. Puoi accedere alla finestra più
    semplicemente premendo il bottone di upload, mostrato di seguito:

    ![]({{site.baseurl}}/images/it_beg_ch6_image05.png)

-  La finestra che appare mostra una lista di oggetti che stai per
    aggiungere o che stai per modificare o cancellare. Nel box in basso
    ti viene chiesto di inserire un commento sulle modifiche che stai
    per fare. Scrivici la descrizione delle tue modifiche.

    ![]({{site.baseurl}}/images/it_beg_ch6_image07.png)

-  Clicca “Carica le modifiche”.
-  Se questa è la prima volta che salvi delle modifiche, ti verrà
    chiesto il nome utente e la password che hai creato nel Capitolo 2.
    Inseriscile nella finestra che appare. Se metti la spunta nella
    casella, le tue credenziali verranno salvate e non ti servirà
    inserirle di nuovo in futuro. Clicca “Autentica”.

    ![]({{site.baseurl}}/images/it_beg_ch6_image02.png)

-  Devi aspettare finché non termina l’upload dei cambiamenti e hai
    finito! Hai fatto le tue prime modifiche a OpenStreetmap. Puoi
    continuare a inserire tutti i punti che vuoi. Sii sempre sicuro di
    caricare le modifiche prima di chiudere JOSM.

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
    anche dal sito di OpenStreetMap, in particolare nel caso dei tag
    maggiormente diffusi e supportati.

Conclusioni
-----------

Adesso che hai visto come aggiungere dati a OpenStreetMap, cosa c’è
dopo? Ricorda che le mappe di OSM diventano vieppiù migliori col tempo.
Ogni volta che apporti miglioramenti alla mappa, quelle modifiche
rimangono e i dati migliorano. E come tu puoi migliorare il lavoro di
altri, altri possono migliorare il tuo.

Nel prossimo capitolo, andremo a vedere tecniche più avanzate in JOSM.
Impareremo a tracciare forme migliori, come usare strumenti differenti,
e vedremo cosa sono tutti quei bottoni e finestre che circondano la
mappa!
