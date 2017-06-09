---
layout: doc
title: Editare con JOSM
permalink: /it/josm/more-about-josm/
lang: it
category: josm
---

Editare con JOSM
========================

> Questa guida può essere scaricata come [josm_more-about-josm_it.odt](/files/josm_more-about-josm_it.odt) oppure [josm_more-about-josm_it.pdf](/files/josm_more-about-josm_it.pdf)  
> Revisionato 2015-07-12  

Nella sezione precedente
hai installato JOSM e hai iniziato a disegnare punti, linee ed aree.
Hai aggiunto delle impostazioni a questi oggetti per
caratterizzarli. Alla fine hai disegnato la tua mappa con JOSM.

E' stato un buon esercizio e ora siamo pronti per editare in OpenStreetMap.

In questa sezione daremo uno sguardo approfondito all'interfaccia di JOSM, e vedremo
come utilizzarlo per per editare la mappa di OpenStreetMap.

Il ciclo di editing
---------------------
Editare OpenStreetMap con JOSM è simile a utilizzare l'editor iD che
abbiamo visto in precedenza. Siccome JOSM è un'applicazione desktop, funziona in
una maniera differente. Il processo di editing di OpenStreetMap con
JOSM è sempre il seguente:

1. **Scaricare** i dati correnti da OSM
2. **Modificarli** usando immagini satellitari, GPS, Field Paper e note come guida
3. **Salvare** le modifiche su OpenStreetMap

Scaricare i dati OSM
--------------------
Il primo passo è scaricare i dati esistenti nell’area scelta che
intendiamo migliorare. Ricordati di farlo ogni volta che vuoi
fare cambiamenti alla mappa, perche' la mappa è aggiornata anche dagli altri utenti.

-    Fai click su “File” nell’angolo in alto a sinistra di JOSM e successivamente su “Scarica
    da OSM”. Questo aprirà la finestra di download. Puoi accedere
     alla finestra più semplicemente cliccando sul bottone di download,
    mostrato qui:

![JOSM Download Button][]

- Quando la finestra di download si apre, dovresti vedere una mappa con un riquadro rosa
    su di essa. Se non vedi la mappa, clicca sulla linguetta
    “Slippy map”.

![JOSM Download Dialog][]

- Il riquadro rosa rappresenta l’area della mappa che vorremmo
    scaricare per modificarla. Usa il mouse per spostarti su una zona
    che conosci bene, come la tua città o il tuo quartiere. I
    controlli sono gli stessi della finestra della mappa di JOSM. Il pulsante destro del mouse
    ti permette di spostare la mappa e la rotella ti permette di ingrandire o ridurre 
    la visuale.

>Se stai lavoranto su un portatile può risultare difficile 
>zoommare. Il lavoro con JOSM può essere più agevole con un mouse,
>ma i portatili più moderni ti permettono di spostare la visuale utilizzando il touchpad.

-Disegna un nuovo riquadro intorno all'area che vuoi scaricare. Per disegnare un nuovo riquadro, clicca sulla
    mappa, tieni premuto il tasto sinistro del mouse, e trascina il mouse per creare
    un riquadro. Rilascia il tasto del mouse per terminare questa azione.
- Quando sei soddisfatto della dimensione e della posizione del riquadro, clicca
    “Scarica” al fondo della finestra. JOSM scaricherà i dati per
    quest’area da OpenStreetMap e aprirà la finestra della mappa per la
    modifica.

### Aggiungere immagini satellitari
Se ti ricordi quando abbiamo aggiunto i primi punti con l'editor iD, avrai
notato che dietro la mappa c'era un'immagine satellitare che aiutava
nell'identificazione degli oggetti. Quest'immagine era di Microsoft Bing, che
generosamente fornisce le sue foto satellitari agli utenti di OpenStreetMap come riferimento
per contribuire alla mappa.

-    Per aggiungere le immagini satellitari di Bing in JOSM, fai click su "Immagini aeree" sul menù in alto di
    JOSM e seleziona “Bing Sat”.

> Se non vedi Bing Sat nel menù delle immagini aeree, lo devi attivare
> nelle impostazioni di JOSM. Vai in Modifica -> Preferenze e fai click sull'icona 
con su scitto “WMS TMS”. Potresti dover cliccare sulla freccia in basso per trovarla.
>  ![JOSM Preferences up down][]
>  ![JOSM Preferences WMS TMS][]
>   Fai click su “Bing Sat”. Quindi fai click su “Activate”.


### Principali caratteristiche di JOSM
Ora che abbiamo scaricato i dati da OpenStreetMap e aggiunto le immagini aeree Bing,
diamo un'altra occhiata all'interfaccia di JOSM.

![JOSM layout][]

Le finestra principale con cui ha già familiarizzato è quella della mappa, e 
qui è dove si svolge la maggior parte dell'azione. Qui vedrai, editerai e
ggiungerai dati a OpenStreetMap.

Alla destra della finestra della mappa c'è una serie di pannelli, ognuno dei quali ha
una funzione specifica. Tipicamente quando installi JOSM diversi
pannelli sono mostrati di default, come Livelli, Proprietà e
Selezione. Quando selezioni un punto, una linea o un'area sulla mappa
ti sarà mostrato nel pannello Selezione. Informazioni
sull'oggetto saranno mostrate nel pannello Proprietà e il nome utente
dell'autore dell'oggetto sarà mostrato nel pannello Autori.

Questi pannelli possono essere aperti o chiusi facendo click sui vari pulsanti sul
lato inferiore sinistro di JOSM. Sopra questi bottoni in alto a destra ci sono gli trumenti che
cambiano ciò che puoi fare col mouse. Ne conosci già alcuni,
il pulsante "Seleziona" e "Disegna". Sotto di essi ci sono pulsanti 
per ingrandire la visuale, cancellare un oggetto o creare una linea parallela
ad un'altra linea.


Modifica
----
Così abbiamo finito il primo punto del processo di editing - il download. Hai
impostato JOSM con le immagini satellitari come sfondo. Il prossimo passo è modificare
mappa ed aggiungere nuovi oggetti.

In base alla zona che hai scelto di scaricare, possono esserci molti dati o
pochi. Ma vedrai che si tratta degli stessi oggetti che  abbiamo
visto in precedenza: punti, linee e aree, che rappresentano luoghi reali.

-  Usa le tecniche apprese per aggiungere un paio di punti alla mappa
	in posti che conosci. Se vedi degli errori, prova a correggerli.
-  Non devi essere troppo aggressivo mentre stai imparando. Se non sei sicuro
	è meglio non toccare nulla.
-  Se vuoi muovere un punto, una linea, o una forma, usa
    lo strumento **Seleziona**. Clicca su un oggetto e trascinalo dove
    dovrebbe essere. Questo può essere usato per correggere la posizione di oggetti che
    sono stati posizionati erroneamente.

![JOSM select tool][]

- Usa lo strumento **Disegna** per disegnare nuovi punti, linee o forme.
    Descrivi questi oggetti selezionandoli dal menù Preimpostazioni, come
    hai fatto già in precedenza. 

> Non editare mai la mappa al di fuori dell'area non scaricata. Puoi  
> vedere l'area rettangolare scaricata con uno sfondo neutro,  
> mentre l'area non scaricata ha linee diagonali tratteggiate.  

![JOSM area downloaded][]

Salvare le modifiche
--------------
Il terzo e ultimo passo per completare le modifiche che abbiamo 
fatto è caricarle sul database OpenStreetMap. Per caricarle devi essere
connesso ad internet.

- Clicca “File” nel menù in alto e premi “Carica dati”. Questo
    aprirà la finestra di upload. Puoi  accedere alla finestra più
    semplicemente premendo il bottone di upload, mostrato di seguito:

![JOSM Upload Button][]

- La finestra che appare mostra una lista di oggetti che stai per
    aggiungere o che stai per modificare o cancellare. Nel box in
    basso ti viene chiesto di inserire un commento sulle modifiche che
    stai per fare. Scrivici la descrizione delle tue modifiche.

![JOSM Upload Dialog][]

- Clicca “Carica le modifiche”.

-  Se questa è la prima volta che salvi delle modifiche, ti verrà
    chiesto il tuo nome utente e la password OpenStreetMap.
-  Inseriscile nella finestra che appare. Se metti la spunta nella
    casella, le tue credenziali verranno salvate e non ti servirà
    inserirle di nuovo in futuro. Clicca “Autentica”.

![JOSM Authenticate][]

-  Devi aspettare finché non termina l’upload dei cambiamenti
    e hai finito! Hai fatto le tue prime modifiche a OpenStreetmap.

> Quando editi, assicurati di caricare le modifiche prima di chiudere  
< JOSM. Anche se devi fare altre modifiche, carica i cambiamenti e  
> ripeti nuovamente il processo più tardi, quando avrai tempo per farlo.  
> Non vorrai mica perdere il lavoro fatto!

Guarda le tue modifiche sulla mappa
---------------------------
- Apri il tuo browser e vai su [http://openstreetmap.org/](http://openstreetmap.org/)
- Sposta la mappa sull’area che hai modificato.
- Dovresti vedere le tue modifiche apparire sulla mappa! Se non succede,
    prova a premere CTRL+R per aggiornare la pagina. A volte la mappa
    non si aggiorna e necessita di essere ricaricata.
- E se non vedi le tue modifiche? Non ti preoccupare - ci vorrà qualche
    minuto affinchè le modifiche vengano mostrate sulla mappa. Controlla poi le tue
    aggiunte in JOSM per essere sicuro che le hai inserite correttamente. Una buona
    regola generale è che se il tuo punto ha una icona in JOSM, allora dovrebbe
    essere visualizzato anche dal sito di OpenStreetMap.

Conclusioni
-------
Adesso che hai visto come aggiungere dati a OpenStreetMap, cosa c’è dopo? l'editing
è bello, ma non è il solo aspetto della mappatura. Certo devi
imparare anche ad uscire e raccogliere informazioni nel
territorio.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png