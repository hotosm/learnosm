---
layout: doc
title: Correggere lo scostamento delle immagini
permalink: /it/josm/correcting-imagery-offset/
lang: it
category: josm
---

Scostamento delle immagini
===============

> Revisionato 2017-09-15  

I fornitori di foto aeree o satellitari normalmente fanno un buon lavoro nel georeferenziare le immagini, ma a volte queste immagini possono risultare leggermente traslate. Questo accada più spesso in aree collinari o montuose, dove può essere difficoltoso stirare un'immagine piatta su un'area con molti sbalzi di altitudine. Quando tu carichi una di queste immagini in JOSM, a volte in alcuni punti possono esserci scostamenti di 10 o più metri. Questo è chiamato **imagery offset** (scostamento dell'immagine).  

Nota che nella seguente immagine due foto aeree separate sono state georeferenziate e unire assieme. Proprio perchè la georeferenziazione non è un processo perfetto, le immagini non si allineano perfettamente le une con le altre. Quindi una, o entrambe, possono risultare non accurate.  

![Misaligned imagery][]

Abbiamo imparato i due principali modi di fare mappe - uno è utilizzando immagini aeree per identificare oggetti sul suolo, un altro è usando un GPS per registrare tracce e waypoint e aggiungerli a OpenStreetMap. Il vantaggio delle foto aeree è ovvio. Il mappatore può vedere l'intera immagine, osservare i vari dettagli in essa, integrare a questo la sua conoscenza dell'area, e tracciare con facilità strade, edifici e aree. Un vantaggio chiave del GPS è che non soffre del problema dello scostamento come accade con le immagini. Un GPS ti fornisce (quasi) sempre la corretta latitudine e longitudine. Le eccezioni sono quando i segnali dei satelliti sono oscurati o degradati da alti palazzi, montagne o una superficie boscosa, ma in questo caso dovrebbe essere facile riconoscere l'errore. Osserva la traccia Gps in questa immagine, confrontata con l'immagine aerea di Bing visibile sotto.  

![Aerial vs GPS][]

In base a quello che abbiamo appreso è chiaro che la traccia GPS è probabilmente accurata e che l'immagine al di sotto di essa è fuori posto. Ci dobbiamo quindi chiedere "se le immagini possono essere fuori posto, come possiamo continuare ad utilizzarle per produrre delle mappe accurate?"  

Correggere lo scostamento dell'immagine
-------------------------

La risposta alle precedenti domande è che noi possiamo muovere l'immagine allineandola agli oggetti che noi sappiamo essere nella giusta posizione, come una traccia GPS precisa. In JOSM è facile correggere lo scostamento di immagini.  

Il miglior riferimento per correggere lo scostamento di un'immagine sono le tracce GPS, possibilmente precise, che seguono le strade. E più alto è il numero di tracce che hai, più accuratamente sarai in grado di allineare le immagini. Visto che gli utenti OpenstreetMap spesso caricano le loro tracce grezze GPS nel database OSM, noi possiamo scaricarle e usarle come riferimento per allineare le immagini.  

- Clicca sul bottone di download. ![JOSM download button][]{: height="24px"}  

- Clicca nella casella a fianco di "Dati GPS grezzi" ![Download raw GPS data][]{: height="24px"} nella parte alta della finestra di download. Seleziona l'area e clicca "Scarica".  

- Questo scaricherà un layer addizionale in JOSM contenente le tracce GPS. A seconda di quante tracce siano state caricate dagli utenti OSM, potrai vedere alcune tracce (o anche nessuna):  

![Few GPS tracks from OSM][]

- Oppure, puoi vedere molte tracce.  

![Many GPS tracks from OSM][]

- Per adeguare il layer delle immagini, clicca sul bottone "Regola lo scostamento delle immagini aeree" ![Adjust imagery offset button][]{: height="24px"} nella parte alta della finestra di JOSM.  

- Ignora la finestra che esce e usa il mouse per spostare il layer delle immagini in modo che si allinei correttamente con le tracce GPS. Le tracce GPS dovrebbero essere allineate il più possibile con le strade delle immagini aeree. Vedrai cambiare i valori di scostamento nella finestra.  

![Adjust imagery offset][]

- E' possibile salvare questi valori di scostamento inserendo un nome come segnalibro e premendo OK. Successivamente puoi applicare le stesse impostazioni andando su Immagini aeree ‣ Scostamento delle immagini aeree e cliccando sul tuo segnalibro.  
- Se non vuoi salvare l'offset, fai semplicemente click su OK senza inserire un nome per il segnaposto.  

Che fare se non ci sono tracce GPS su OpenStreetMap, e non hai un GPS? Senza tracce GPS è difficoltoso allineare immagini. Se è un'area relativamente vuota (con poco o nulla di mappato), tu puoi scegliere semplicemente di usare le immagini così come sono e correggere i dati successivamente. E' sempre maglio mappare un'area anche con 20 o 30 metri di scostamento che non mapparla affatto.  

Se puoi identificare con sicurezza la latitudine e la longitudine di un oggetto sul terreno, puoi assicurarti che l'immagine sia correttamente posizionata seguendo questi passaggi:  

1. Identifica nell'immagine l'oggetto la cui posizione è nota.  
2. Fai click sulla latitudine e longitudine nell'angolo in basso a sinistra di JOSM.![JOSM lat lon][]{: height="24px"}  
3. Nella finestra che appare inserisci la latitudine e la longitudine di un posto che conosci e inserisci un piccolo numero in "Ingrandimento visuale..." (da 5 a 10).  
![JOSM lat lon dialogue][]
4. La mappa verrà ingrandita e centrata sulla longitudine e latitudine inserite. Ora puoi spostare l'immagine come visto prima in modo che l'oggetto che conosci sia centrato nella posizione corretta.  

Se l'area è stata dettagliatamente mappata si suppone che i precedenti mappatori abbiano disegnato gli oggetti nella loro posizione corretta. In questo caso puoi sempre allineare le immagini rispetto alla mappa OSM, ma fai attenzione! Altri mappatori potrebbero non essere stati al corrente dello scostamento delle immagini e quindi potrebbero avere commesso degli errori durante la mappatura.  


Il Database degli Scostamenti delle Immagini
---------------------------

Ora sai come fare attenzione al corretto posizionamento delle immagini, ma c'è un altro grande problema con questo approccio che fino ad ora abbiamo trascurato. Se ogni utente di OpenStreetMap regola le immagini in modo differente, ognuno mapperà con sfondi leggermente differenti.  

Immagina di mappare una piccola città e di renderti conto che le immagini Bing sono sfasate di 15 metri verso nord. Regoli le immagini e le usi per mappare accuratamente l'intera città. In seguito qualcun altro vuole aggiungere qualcosa alla mappa, quindi scaricherà i dati e userà le immagini Bing senza però essere a conoscenza dello scostamento che hai scoperto! Penserà che qualcosa è sbagliato perché tutti gli oggetti in città sono fuori posizione di 15 metri e quindi comincerà a spostarli, cosa non corretta! Questo può essere disastroso per i dati della mappa di quella città.  

Per questo motivo è importante che tutti gli utenti siano a conoscenza dello scostamento delle immagini aeree/satellitari e dovrebbero sempre controllarlo prima di mappare un'area. Per aiutare a risolvere il problema qualche bella mente ha creato un plugin che permette agli utenti di salvare le informazioni sugli scostamenti in un database e di condividerle con gli altri. Vediamo come funziona:  

- Apri il menù Preferenze in JOSM e clicca sulla scheda estensioni (plugin) ![JOSM plugins tab][]{: height="24px"}  

- Trova l'estensione “imagery_offset_db” e seleziona la casella di fianco al nome.  

![Imagery_offset_db plugin][]

- Premi OK. JOSM va riavviato per finire l'installazione dell'estensione.  

Allo stesso modo in cui salvi gli scostamenti come segnalibri, questa estensione permette di salvare gli scostamenti in un database centrale e di accedere agli scostamenti che gli altri utenti hanno creato. Perciò se un mappatore crea uno scostamento per le immagini aeree/satellitari di un'area, altri utenti possono usare lo stesso esatto scostamento per mappare.  

Quando usi livelli di immagini aeree, dovresti SEMPRE verificare l'esistenza di scostamenti, e quando crei il tuo scostamento, dovresti SEMPRE salvarlo nel database.  


Aggiungere uno Scostamento Immagini dal Database
------------------------------------

Quando aggiungi un livello di immagini, il nuovo plugin ti avvisa che dovresti controllare il database delle immagini per verificare se vi è uno scostamento. Vedrai un'icona con sopra un punto esclamativo rosso nella riga in alto di JOSM, come questa:  

![Imagery offset notification][]

- Clicca sul pulsante ed il plugin comunicherà con il database per vedere se ci sono registrati degli scostamenti nella zona.  
- Qui abbiamo scaricato i dati OSM e le tracce GPS in Kuta, Bali, Indonesia. In questo caso abbiamo trovato uno scostamento registrato. Clicchiamo per applicarlo alla mappa.  

![Offset in Kuta bali][]

- Questo fa sì che il livello dell'immagine venga traslato. Comunque, quando aggiungiamo uno scostamento fatto da qualcun altro come in questo caso, dovremmo controllare che sia valido confrontando le tracce GPS.  

![Comparing imagery offset from GPS tracks][]

- Possiamo vedere che il livello delle immagini è difatti disallineato. Non vogliamo che altri utenti usino questo scostamento, perciò lo marcheremo come sbagliato nel database. Clicca nuovamente sul pulsante degli scostamenti (non dovrebbe più avere un punto esclamativo rosso).  

![Offsets button][]

- Questa volta quando si apre la finestra di dialogo, fai clic con il pulsante destro sullo scostamento e clicca "Scostamento deprecato".  

![Deprecate offset][]

- Fai click su “Sì” per confermare.  
- Dovrai inserire una spiegazione per deprecare questo scostamento.  

![Deprecate reason][]


Aggiungere uno Scostamento di Immagini al Database
------------------------------------

Ora che abbiamo contrassegnato lo scostamento di questo utente come "deprecato", dobbiamo aggiungerne uno migliore al database.  

1. Clicca sul pulsante "Regola lo scostamento delle immagini aeree". ![Adjust imagery offset button][]{: height="24px"}  
2. Regola l'immagine aerea facendo corrispondere le tracce GPS. Clicca OK nel riquadro.  
3. Ora vai a "Immagini Aeree" -> "Salva scostamento immagini aeree..."  [l'immagine sottostante è obsoleta]  
![Store imagery offset][]
4. Inserisci una descrizione dell'offset nel riquadro che si è aperto.  
![Offset description][]
5. Clicca OK. Il tuo scostamento sarà salvato nel database.  
6. Ora nascondiamo il livello GPS e guardiamo i dati OSM rispetto all'immagine aerea rettificata.  

![Corrected imagery][]

Oh No! Qualcuno ha mappato questa area con le immagini disallineate, dunque l'area non è mappata correttamente. Questo richiederà del tempo per sistemarlo.


Il Sito Web del Database delle Immagini
--------------------------------

Infine, per ulteriori informazioni sul database degli scostamenti, puoi visitare il sito [http://offsets.textual.ru/](http://offsets.textual.ru/). Sono elencati tutti gli scostamenti che sono stati caricati nel database, e c'è anche una buona mappa che visualizza dove gli scostamenti sono localizzati, come puoi vedere qui:  

![http://offsets.textual.ru/][]

> Un'ultima cosa da ricordare è che le immagini possono non avere lo stesso scostamento ovunque! Questo è specialmente vero in zone collinari o montuose. Perciò se le immagini sembrano avere scostamenti diversi in zone diverse, dovrai regolarle di nuovo.  

Sommario
--------

Quando sei un novizio in OpenStreetMap, non devi preoccuparti troppo dello scostamento delle immagini. Ma se vedi le modifiche di un altro mappatore che sembrano disallineate rispetto alle immagini, dovresti sempre considerare che potrebbe esserci uno scostamento d'immagine, prima di cominciare a spostare gli oggetti. E se non ti senti ancora sicuro nel gestire gli scostamenti, ricorda comunque che è meglio mappare un'area con 20 o 30 metri di scostamento che non mapparla per niente. Ma quando è possibile, ricordati che può esserci uno scostamento di immagini, e segui i passi di questo capitolo per fare le correzioni necessarie.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










