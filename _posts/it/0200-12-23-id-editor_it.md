---
layout: doc
title: iD Editor
permalink: /it/beginner/id-editor/
lang: it
category: beginner
---

Editor iD
=============

Revisionato il 30-05-2016  

Stai iniziando a mappare per il Tasking Manager HOT o per MissingMaps, etc. ? Vedi la [sezione Consigli per HOT](/it/hot-tips/).  

- CONTENUTO
{:toc}

L'editor iD è l'editor de facto basato su tecnologie web per OpenStreetMap. iD è veloce e facile da utilizzare, e permette di mappare da diverse sorgenti dati come le foto satellitari ed aree, GPS, Field Papers o Mapillary.  

L'editor iD è una ottima scelta per effettuare piccoli e facili cambiamenti che non richiedono le funzionalità avanzate di JOSM (un editor più avanzato per la mappatura). Questo capitolo mostra gli elementi di base per contribuire con iD.  

Avviare l'editor iD
----------------------

-	L'editor iD richiede una connessione attiva ad Internet.  
-	Apri il tuo browser Internet e vai sul sito web di OpenStreetMap all'indirizzo [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	Effettua il **login** con il tuo account OpenStreetMap  
-	Spostati ed ingrandisci la mappa sull'area che vuoi modificare. Puoi spostarti tenendo premuto il tasto sinistro del mouse e trascinando la mappa verso la zona che desideri.  
-	Clicca sulla piccola freccia vicino a **Modifica**. Poi clicca **Modifica con iD (editor nel browser)**.  

![image1][]


Interfaccia utente dell'editor iD
-------------------------
![image2][]

1. **Pannello di aggiunta/modifica descrittori agli oggetti:** Questo pannello mostra i tag degli oggetti selezionati sulla mappa.  
	Puoi aggiungere o modificare tag da questo pannello.  
2. **Strumenti:** Questo pannello mostra strumenti per la modifica di base:  
    Disegna un punto (nodo), *scorciatoia da tastiera* **1** ![image3][]{: height="24px"}  
    Disegna una linea (strada), *scorciatoia da tastiera* **2** ![image4][]{: height="24px"}  
    Disegna una figura (un poligono), *scorciatoia da tastiera* **3** ![image5][]{: height="24px"}  
    Annulla azione, *scorciatoia da tastiera* **Ctrl+z** ![image6][]{: height="24px"}  
    Ripeti azione, *scorciatoia da tastiera* **Ctrl+y** ![image7][]{: height="24px"}  
    Salva modifiche, *scorciatoia da tastiera* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Pannello della mappa:** Questo pannello mostra le varie funzioni di configurazione:  
    Ingrandisci visuale, *scorciatoia da tastiera* **+** ![image9][]{: height="24px"}  
    Riduci visuale, *scorciatoia da tastiera* **-** ![image10][]{: height="24px"}  
    Salta alla tua posizione geografica ![image11][]{: height="24px"}  
    Configura il livello di sfondo, *tasto scorciatoia* **b** ![image12][]{: height="24px"}  
    Dati visualizzati sulla mappa, *tasto scorciatoia* **f** ![Map Data][]{: height="24px"}  
    Apri il menu di aiuto, *scorciatoia da tastiera* **h** ![image13][]{: height="24px"}  
4. **Pannello informazioni:** Questo pannello mostra diverse informazioni, quali l'indicatore della scala e quali utenti hanno contribuito all'area visualizzata.  

Configura lo strato di sfondo
--------------------------------

Clicca sul tasto **Sfondo** o usa il *tasto scorciatoia* **b**.![image14][]{: height="24px"}  
![image15][]  
Per cambiare il **livello di luminosità**  clicca una di queste caselle, i livelli sono 100%, 75%, 50%, e 25% ![image16][]{: height="24px"}  
Puoi anche **cambiare lo strato di sfondo** in base al fornitore di immagini che preferisci (di base vengono mostrate le immagini aeree di Bing).  

Puoi anche aggiungere un tuo strato di immagini di sfondo cliccando su **Personalizzato**. Per esempio, se vuoi **aggiungere un -fieldPapers** allora clicca sull'icona con lente d'ingrandimento (ricerca) per aprire la seguente finestra:-  
![image17][]   
e inserisci il tuo **indirizzo URL del Fieldpaper**, che sarà qualcosa simile a questo <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Per **visualizzare tue tracce GPS dal tuo computer** (in formato GPX), seleziona, trascina e rilascia il tuo file nella finestra dell'editor iD.  
Per abilitare **le tracce GPS OpenStreetMap** clicca sul riquadro. Nell'immagine sotto sono mostrate delle tracce GPS pubbliche in diversi colori, è mostrato anche il senso di percorrenza.  
![osm gps traces][]  
Se c'è un [disallineamento delle immagini](/en/josm/aerial-imagery), puoi **correggere lo scostamento** cliccando su **Correggi spostamento immagini**. ![image18][]  

- Clicca sui bottoni di navigazione per muovere le immagini. Clicca sul bottone di reset per riportarle alla loro posizione iniziale.  ![image20][]  

Modifiche di base con iD  
----------------------  

### Aggiungere punti  

Per inserire un nuovo punto, fai click sul bottone **Punto**. ![image3][]{: height="24px"}  

- Il cursore del mouse si trasformerà in un segno più (+). Clicca ora sulla posizione desiderata nella mappa per indicare una posizione. Per esempio, se tu sai che c'è un ospedale nella tua zona, clicca sulla posizione dell'edificio dell'ospedale.  
![image21][]  
- Noterai che è stato aggiunto un punto. Allo stesso tempo il pannello di sinistra cambierà per mostrarti una maschera dove puoi selezionare gli attributi da applicare all'oggetto. Clicca su **Area Ospedaliera** per taggare (marcare) il punto come ospedale.  
![image22][]  
- Puoi usare le maschere per inserire informazioni di dettaglio sui tuoi punti. Puoi inserire il nome dell'ospedale, e/o altre informazioni aggiuntive. Nota che ciascuna caratteristica avrà differenti opzioni, in base a quale tag hai scelto dal pannello di aggiunta/modifica.  
- Se commetti un errore, come ad esempio una posizione sbagliata, puoi muovere il tuo punto in una nuova posizione tenendo premuto il tasto sinistro del mouse sul punto e trascinandolo. Oppure, se vuoi eliminare il tuo punto, clicca con il tasto sinistro del mouse sul punto, attiva il menù contestuale cliccando con il tasto destro del mouse e poi clicca il pulsante che assomiglia ad un cestino. ![image23][]{: height="24px"}  
Un "punto" creato nell'editor iD è in realtà un "nodo" indipendente con uno o più tag applicati ad esso.  

### Disegnare linee  

Per inserire una nuova linea, fai click sul bottone **Linea**. ![image4][]{: height="24px"}  

- Il cursore del mouse si trasformerà in un segno più (+). Trova una strada che non è stata disegnata sulla mappa e tracciala. Clicca una volta sul punto in cui inizia il segmento stradale, muovi il mouse e clicca per aggiungere punti addizionali sul percorso, clicca due volte sul punto in cui vuoi terminare il processo di disegno. Nota il pannello sulla sinistra.  
![image24][]  
- Proprio come con un punto, seleziona il tag appropriato per la tua linea.  
- Puoi trascinare punti dalla linea semplicemente cliccandoci sopra col tasto sinistro del mouse e trascinandoli.  
- Puoi anche muovere l'intera linea selezionandola e scegliendo **Muovi**. Trascina quindi la linea nella nuova posizione. ![image30][]{: height="24px"}  
- Quando clicchi con il tasto sinistro del mouse su un punto individuale (nodo) della linea e clicchi con il tasto destro del mouse per attivare il menù contestuale, vedrai i seguenti strumenti:  
- Elimina il punto dalla linea. ![image23][]{: height="24px"}  
- Disconnetti il punto dalla linea. ![image26][]{: height="24px"}  
- Dividi una linea in due nel punto che hai selezionato. ![image27][]{: height="24px"}  
- Quando clicchi con tasto sinistro del mouse su una linea (ma non su un punto) vedrai apparire questi strumenti:  
- Cancella linea. ![image23][]{: height="24px"}  
Crea un cerchio dalla linea (attivo solo se la linea è chiusa su sè stessa). ![image29][]{: height="24px"}  
- Muovi la linea. ![image30][]{: height="24px"}  
- Crea una forma quadrata dalla linea (attiva solo se la linea è chiusa su sè stessa). ![image31][]{: height="24px"}  
- Inverti la direzione della linea (buono in caso di fiumi, strade a senso unico o muri di contenimento). ![image32][]{: height="24px"}  

Una "linea" creata nell'editor iD è realmente una "way" (un percorso) con "tag" (descrittori) applicati su di essa.

>Una particolare avvertenza riguardo la **Cancellazione**: In generale dovresti evitare di cancellare i contributi degli altri utenti se desideri solo eseguire miglioramenti. Puoi cancellare i tuoi errori, ma dovresti provare a *sistemare* gli oggetti mappati da altri utenti se questi debbono essere migliorati. Questo preserva la storia degli oggetti nel database OSM ed è rispettoso degli altri membri della comunità. Se tu pensi che qualcosa debba proprio essere cancellato, chiedi prima al mappatore originale o a qualcuno nella mailing list OSM.

### Disegnare forme (Poligoni)

Per aggiungere un nuovo oggetto a più lati, clicca sul bottone *Area*. ![image34][]{: height="24px"}   

- Il cursore del mouse cambierà in un segno più (+). Prova a disegnare un edificio utilizzando un'immagine di sfondo come guida.   
- Noterai che il colore della tua forma cambierà in base agli attributi che gli assegni.  
![image35][]  
- Gli strumenti che sono disponibili quando selezioni una figura e attivi il menù contestuale con il tasto destro del mouse sono simili a quelli che hai quando clicchi su una linea.  

Un "poligono" nell'editor iD è in realtà una "via chiusa su sè stessa" con dei tag ad esso applicati.

### Disegnare multipoligoni

Talvolta devi disegnare un poligono che non ha soltanto un perimetro esterno ma ha anche uno o più bordi interni. Pensa ad esempio ad un edificio con dei cortili interni oppure ad un lago con delle isole. *Non disegnare tutti questi percorsi come un’unica linea* agganciando i contorni interni a quello esterno. Invece, disegna tutti i contorni separatamente, aggiungi le etichette solo al perimetro esterno, seleziona tutti i contorni e clicca **c** per formare quello che viene chiamato un multipoligono.

![create multipolygon][]

Quando selezioni un qualsiasi contorno del multipoligono appena creato puoi vedere sulla sinistra a quale multipoligono esso appartiene

![part of multipolygon][]

Salvare le modifiche
--------------------

Quando (e se) vuoi salvare le tue modifiche su OpenStreetMap, clicca il bottone **Salva**. Il pannello sulla sinistra ti mostrerà la schermata di caricamento.  
![image36][]  

- Aggiungi un commento sulle tue modifiche e clicca **Salva**.  

> Se hai modificato lo stesso oggetto (punto, linea o area) nello stesso momento nel quale un'altra persona lo stava modificando, riceverai un avviso poiché non puoi caricare le modifiche che hai fatto finché non hai risolto i **conflitti** - scegli quali modifiche vuoi accettare e carica le tue modifiche. *Risolvere i confliti spesso richiede di accettare le modifiche delle altre persone, nel qual caso vorrai ritornare all'oggetto in questione per modificarlo di nuovo (**questa volta salva subito dopo averlo modificato per evitare un nuovo conflitto!**).*

Ulteriori informazioni e tag personalizzati
---------------------------------------

Quando stai editando un oggetto, vedrai una striscia di icone in basso nel pannello degli attributi. Puoi aggiungere informazioni addizionali cliccando su queste icone:

- Aggiungere l'altezza ![image37][]{: height="24px"}  
- Aggiungi note  ![image38][]{: height="24px"}  
- Aggiungi contatti / numero telefonico ![image39][]{: height="24px"}  
- Aggiungi il tag source (da dove proviene l'informazione che hai usato)  ![image40][]{: height="24px"}  
- Aggiungere il sito ![image41][]{: height="24px"}  
- Aggiungi informazioni sull'accessibilità  ![image42][]{: height="24px"}  
- Aggiungere un link a Wikipedia ![image43][]{: height="24px"}  

o puoi aggiungere altri tag cliccando su **Tutti i tag**. ![image44][]{: height="24px"}  

- Questo mostrerà tutti i tag associati all'oggetto.  
![image45][]  
- Clicca sul segno più (+) per aggiungere chiavi e valori, o clicca sull'icona del cestino per eliminare i tag.

Ulteriori tutorial
------------------

[La nostra pagina delle risorse esterne](/it/resources/#iD) contiene link ad un certo numero di video tutorial da fonti diverse. 

Differenze tra iD e JOSM
---------------  

**iD è ideale ... **

- Quando si devono fare delle modifiche semplici  
- Quando hai una connessione internet veloce per caricare le immagini e salvare gli edit (le modifiche).  
- Quando vuoi essere sicuro di usare uno schema di tagging coerente.  
- Quando per qualsiasi motivo non puoi installare programmi sul computer che stai usando.

**JOSM è meglio...**

- Quando stai aggiungendo molti edifici (vedi il plugin building_tool).
- Quando si devono modificare le proprietà di poligoni o linee che già esistono
- Quando sei su una connessione internet poco affidabile o se devi lavorare offline.
- Quando stai usando un particolare schema di tag (o preset custom, quale ad esempio il preset CAI).

[^fieldpaper]: C'è una sezione di [LearnOSM](/en/mobile-mapping/field-papers/) che da maggiori informazioni sui Field Papers.

Il contenuto di questa guida è disponibile come [presentazione](/files/iD-editor-training.pptx)



[image1]: /images/beginner/id-editor_image1_it.png 
[image2]: /images/beginner/id-editor_image2_it.png
[image3]: /images/beginner/id-editor_image3_it.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15_it.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17_it.png
[image18]: /images/beginner/id-editor_image18_it.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21_it.png
[image22]: /images/beginner/id-editor_image22_it.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24_it.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34_it.png
[image35]: /images/beginner/id-editor_image35_it.png
[image36]: /images/beginner/id-editor_image36_it.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45_it.png
[Crea un multipoligono]: /images/beginner/id-editor_create_multipolygon.png
[parte di un multipoligono]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public_it.png