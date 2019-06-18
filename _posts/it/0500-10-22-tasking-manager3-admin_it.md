---
layout: doc
title: Tasking Manager 3 - Creazione di un progetto
permalink: /it/coordination/tasking-manager3-project-admin/
lang: it
category: coordination
---

# Tasking Manager OSM - Creazione ed Amministrazione di un Progetto


**Questa guida descrive l'attuale versione del Tasking Manager. Se l'interfaccia utente della versione che stai usando è differente da quella descritta qui allora dovresti consultare il [manuale della precedente versione](/it/coordination/tasking-manager-project-admin)**

Section Index
-------------
-  [Accesso ](/it/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
- [Iniziare un nuovo progetto - definire l'area interessata](/it/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
- [Creazione del Task - suddividere l'area interessata](/it/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
- [Creare il Progetto - specifica cosa devono sapere gli utenti](/it/coordination/tasking-manager3-project-admin/#create-the-project)
    - [Descrizione - la prima cosa che gli utenti imparano del tuo progetto](/it/coordination/tasking-manager3-project-admin/#description)
    - [Istruzioni - cosa dovrebbero fare gli utenti](/it/coordination/tasking-manager3-project-admin/#instructions)
    -  [Metadata - dove appartiene il processo](/it/coordination/tasking-manager3-project-admin/#metadata)
    - [Aree Prioritarie - dove gli utenti dovrebbero iniziare a mappare](/it/coordination/tasking-manager3-project-admin/#priority-areas)
    - [Foto satellitari - le basi per la mappatura](/it/coordination/tasking-manager3-project-admin/#imagery)
    - [Permessi - chi ha i permessi per mappare e per validare](/it/coordination/tasking-manager3-project-admin/#permissions)
    - [Consigli utili - come dovresti compilare tutti questi campi](/it/coordination/tasking-manager3-project-admin/#instruction-notes)
    - [Pubblicare - non dimenticarlo o nessuno potrà lavorare al progetto](/it/coordination/tasking-manager3-project-admin/#proofread-and-publish)

Il Tasking Manager OpenStreetMap è essenziale per condurre un mapathon, gestire un'attivazione HOT, o creare un compito di mappatura per studenti mappatori. Il Tasking Manager divide il lavoro in piccole aree geografiche gestibili singolarmente, il che riduce i conflitti, specialmente con un alto numero di mappatori presenti. Il Tasking Manager favorisce anche l'accuratezza e la qualità del dato fornendo un coerente set di istruzioni ai mappatori (es.: 'mappa tutte le strade e gli edifici'). In breve, il Tasking Manager è come imposti e dirigi il flusso di lavoro per le attività di mappatura. Questo modulo descrive le basi dell'amministrazione del Tasking Manager OSM per ottenere eventi di mappatura ben riusciti. 

 Questa guida è espressamente scritta per quelle persone che abbisognano di informazioni sull'amministrazione del Tasking Manager OSM, inclusa la creazione e la modifica di progetti di mappatura per eventi di open mapping, ovvero i 'mapathon'. Questa guida è intesa specificatamente per la versione 3 del Tasking Manager OSM, inclusi il [HOT Tasking Manager](http://tasks.hotosm.org) e il [TeachOSM Tasking Manager](http://tasks.teachosm.org).

HOT o Tasking Manager OSM versione 3 è qui frequentemente menzionato come **TM3,** abbreviazione di Tasking Manager, versione 3.

## Accesso & Livelli di Accesso

La prima cosa da comprendere è il livello di accesso. Tutto l'accesso al TM3 è autorizzato tramite il [sito OpenStreetMap](https://www.openstreetmap.org). Per accedere al TM3 avrai bisogno di un account  OpenStreetMap (OSM). Una volta ottenuto, visita [il Tasking Manager](http://tasks.hotosm.org) e clicca **Login to OpenStreetMap**, che ti riporterà alla pagina OSM dove si può autorizzare il Tasking Manager ad un accesso limitato al tuo account OSM. 

### Livelli di accesso all'interno del Tasking Manager OSM

Il Tasking Manager OSM ha tre livelli di accesso per gli utenti:
- **Utente** - Il livello di base. L'utente può effettuare la login sul TM3 e usare le sue funzionalità per trovare e selezionare un progetto di mappatura e poter lavorare ad esso. Questo livello di utilizzo è pienamente descritto nella [guida Tasking Manager OSM in LearnOSM](/it/coordination/tasking-manager-3/). Nota che alcuni progetti, come quelli in stato di bozza (non pubblicati) non sono visibili agli utenti.  
- **Project Manager** - I Project managers hanno l'accesso per creare e aggiornare progetti all'interno di TM3.  
- **Amministratori** - Gli Amministratori hanno un accesso che permette loro di gestire i livelli di accessi all'interno di TM3.

Per creare nuovi progetti usando TM3 hai bisogno del livello di accesso Project Manager (Gestore Progetto).

## Iniziare un nuovo progetto in TM3 

![TM New][]

Clicca sul tuo nome utente nell'angolo superiore destro, poi **Crea un nuovo progetto.** Tu potrai poi scegliere tra il disegnare sulla mappa l'area interessata (Aol), o importare un'area di interesse da un file geojson;   

> È sempre preferibile importare un file con un area definita piuttosto che disegnare a mano un progetto del Tasking Manager. Per creare questi file da importare nel Tasking Manager, possono essere usati strumenti come JOSM, QGIS, ecc. La sequenza suggerita è creare un file .osm dell'AOI con JOSM e poi usare http://geojson.io/ per generare un GeoJSON.

### Disegna un'area di interesse da mappare

1. Clicca il bottone 'Disegna' nell'angolo in alto a destra.
2. Per disegnare un poligono rappresentante la AoI (area di interesse) nella cornice della mappa, tieni premuto il tasto destro del mouse per muovere la mappa senza cliccare, il che aggiungerà un nodo. Il poligono dovrebbe inquadrare strettamente l'area di interesse. Ciò fa risparmiare il tempo necessario a completare tile non di interesse (p, es. oceano, foresta)  
3. Per completare il poligono, clicca sul tuo punto iniziale  
4. Dopo aver completato un poligono, puoi moverne i nodi od aggiungerne di nuovi per ottenere l'area proprio come la vuoi.

o

### Caricare un file GeoJSON o KML dell'area di interesse da mappare  

1. Clicca il pulsante 'Importa',  
2. Sfoglia i tuoi file nella finestra 'Caricamento file',  
3. Clicca il nome del file per evidenziarlo, poi clicca su 'Apri'.  
4. Le aree di interesse importate non possono essere modificate.


## Creazione Task

La AOI (area di interesse) di un progetto è l'area complessiva da mappare. Questa viene suddivisa in aree più piccole chiamate Tasks. 

La AOI, definita dallì'importazione del suo file o disegnata a mano, apparirà nella cornice della mappa e poi ti sarà chiesto come dividere la AOI in singoli task. Ci sono due opzioni:  

1. Griglia quadrata - Il Tasking Manager dividerà uniformemente l'area del progetto in riquadri delle stesse dimensioni. Questo di solito va bene per progetti generalisti di crowdmapping (mappatura partecipata).
2. Geometrie arbitrarie - Se carichi un file per definire l'area del tuo progetto, questo file può contenere anche le forme per i task individuali. Per creare forme di task personalizzate, ci deve ssere una necessità particolare. Per esempio, l'importazione di un progetto di strade può richiedere forme di task personalizzate oppure il prodotto di un processo di riduzione della AOI.

### Usare la Griglia Quadrata per i riquadri dei task

Per creare dei tile quadrati uniformi seleziona l'opzione Griglia Quadrata  

![TM Tile Sizes][]

La AoI è automaticamente suddivisa in una griglia di celle e ogni cella diventa un task. Determina la dimensione ottimale del tile usando i bottoni "Larger" e "Smaller" per cambiare la dimensione dei quadrati che rappresentano i Task. Per questo motivo tile di dimensioni piccole genereranno un numero maggiore di task. La dimensione ottimale di un tile dipenderà quindi sia dalla dimensione dell'area (per progetti di grandi dimensioni crea tile di piccole dimensioni) che dal numero di oggetti che saranno probabilmente mappati all'interno di ogni tile. In generale, se la grandezza della AoI o il numero di potenziali oggetti da mappare aumenta, la dimensione del tile scelta per il progetto dovrà diminuire. 

Nota che **ci sono diversi tipi di mappe utilizzabili come sfondo per determinare la dimensione dei quadrati che rappresentano i Task**. Il bottone nell'angolo in basso a destra della mappa fornisce una lista di opzioni relative allo mappa di sfondo. Scegliere uno sfondo basato su fotografie satellitari è probabilmente la scelta migliore in quanto permette di vedere l'effettiva immagine del territorio da mappare.

Se hai delle mappe di sfondo personalizzate per il progetto puoi caricarle usando il bottone nell'angolo in alto a destra della mappa inserendo un url TMS o WMS

Puoi anche creare dei task con dimensioni differenti usando lo strumento "Split" per suddividere il task in altri più piccoli. Ogni task può essere suddiviso più volte fino ad ottenere la dimensione voluta. Anche in questo caso l'uso di uno sfondo basato su fotografie satellitari ti può aiutare nel decidere quali sono i task da suddividere in task più piccoli. Il bottone "Reset" permette di ripristinare tutti i task che sono stati suddivisi alla loro dimensione originale. L'opzione Split (Polygon) permette di disegnare un poligono su di un'area e suddivide i task di quell'area in altri più piccoli e l'opzione Split (Point) permette di selezionare singolarmente i task da suddividere. Il bottone Reset rimuove tutte le operazioni di suddivisione dei task.

> In generale è opportuno avere dei task di piccole dimensioni in aree con un'alta densità di edifici. L'obiettivo dovrebbe essere quello di creare dei task che possano essere completati in 10-15 minuti.

***Considerazioni per decidere come dimensionare i singoli task***

- Un mappatore senza esperienza in mapathon mapperà un'area all'incirca ad un quarto della velocità di un mappatore con esperienza (molti iniziano in modo molto più lento, ma in poco tempo diventano più veloci). 
- Un mappatore principiante troverà più difficile identificare oggetti in immagini satellitari rispetto al tempo impiegato per mapparli. Distinguere delle capanne rotonde composte da materiali naturali in un'area piena di arbusti a forma circolare comporta una curva di apprendimento molto ripida per un 'novizio'.
- Un mappatore principiante trova difficile anche tracciare molti altri tipi di oggetti come ad esempio gli edifici.
- Più avanti nel processo il mappatore ha l'opportunità di 'suddividere' (split) un riquadro - la suddivisione di un riquadro in quarti aiuta i mappatori principianti ad ottenere una dimensione del riquadro che gli permette di gestire il lavoro.  
- Le parti del riquadro (quadrato) in cui è più probabile che si verifichino dei problemi sono i bordi e gli angoli. Quadrati piccoli comportano un numero più alto di angoli e bordi e il risultato sarà avere oggetti mappati due volte così come oggetti non mappati. E' necessario trovare un compromesso fra la dimensione ridotta dei quadrati, che rende più facile la mappatura per i principianti, e l'incremento degli errori per colpa della presenza di un numero maggiore di angoli e bordi.
- Un quadrato può essere suddiviso, ma non esiste opzioni che consentano di unire di nuovo i quadrati per farli tornare di nuovo grandi. Quindi fate attenzione quando li suddividete
- **Conclusione** Cerca di mappare per conto tuo un'area del progetto per vedere se è semplice e quali sono le difficoltà che si incontrano. Questo dovrebbe aiutarti a stabilire qual'è la dimensione ottimale del quadrato. Abilita la possibilità per gli utenti di suddividere i quadrati, ma non all'infinito - alcuni principianti potrebbero suddividere il quadrato fino ad ottenere una dimensione così piccola tale da rendere estremamente difficile la mappatura.  

Dopo avere definito le dimensioni dei Task, clicca "Avanti".

### Geometrie a forma libera

Se hai caricato un file per definire l'area del progetto, puoi anche inserire al suo interno informazioni sulla precisa forma geometrica che i task individuali devono assumere. Se la AoI è composta da un solo poligono, il progetto avrà un solo task. Normalmente quest'operazione non è necessaria se non per specifiche esigenze.

Le geometrie a forma libera non possono essere suddivise.

### Ritaglio Area di Progetto

Dopo avere stabilito le dimensioni dei task avrai la possibilità di "Ritagliare" la AoI. L'AoI può essere ritagliata seguendo il contorno del poligono che hai disegnato o importato (operazione suggerita) o ritagliata in corrispondenza del più vicino quadrato che comprende l'AoI.

Dopo avere concluso l'operazione di ritaglio della AoI, cliccare "Avanti".

## Creare il progetto

Dai un titolo al progetto (può essere editato nella prossima schermata) e clicca "Crea"

In questo modo viene creato il progetto nel Tasking Manager e si apre una schermata dove è possibile fornire la descrizione, le istruzioni e altre informazioni relative al progetto. Tieni presente che questa attività non va sottovalutata. Una buona parte di mappatori (in molti casi la maggior parte) non ha precedenti esperienze con OpenStreetMap e/o HOT e non avrà così familiarità con le linee guida sul tagging. E' molto importante che gli obiettivi del progetto siano chiari e che tutte le risorse che i mappatori dovranno utilizzare siano illustrate qui. E' spesso consigliabile limitare un progetto alla mappatura di una sola classe di oggetti. Se hai bisogno di creare una mappa base di un'area, meglio suddividere il lavoro in diversi progetti, uno per le strade, uno per gli edifici, ecc. In questo modo i principianti possono focalizzarsi su una piccola classe di oggetti e nel contempo imparare come mapparli correttamente. Alternativamente potresti ottenere un sacco di tiles che contengono un po' di tutto senza nulla di veramente completo.

Dopo che il Progetto è stato creato, è necessario modificare le sue impostazioni:

- Descrizione - Viene mostrata nelle liste e usata per fornire informazioni sul progetto ai mappatori
- Istruzioni - Istruzioni dettagliate su cosa e come mappare i necessari oggetti/entità/caratteristiche
- Metadati - Informazioni addizionali utilizzate per categorizzare il Progetto. Spesso usati per filtrare la lista completa dei progetti.
- Immagini - qui si può fornire il TMS URL e la Licenza richiesta.
- Aree prioritarie - Permette di specificare parti del progetto che devono essere mappate per prime.
- Permessi - Permette di restringere l'accesso al progetto per attività di mapping e di validazione.
- Impostazioni - Data di fine progetto e Presets per JOSM.
- Azioni - Spedire messaggi ai contributori, validare o invalidare l'intero progetto con un click.

### Descrizione

![TM Description][]

Questa schermata permette di definire la priorità del progetto, il suo stato come Bozza, Pubblicato o Archiviato, una descrizione breve utilizzata nella lista dei Progetti e una descrizione lunga disponibile quando il mappatore ha selezionato il Progetto.

Sia la descrizione corta che lunga dovrebbero fornire informazioni sui motivi per cui il progetto è stato creato, chi userà i dati e l'impatto atteso dall'attività di mapping. Questi campi supportano testo Markdown e possono contenere immagini e video.

### Istruzioni

![TM Instructions][]

**Entità da mappare** - Una lista di oggetti che si desidera vengano mappati dagli utenti. In generale meno oggetti sono richiesti e meglio è perchè è più probabile che l'attività venga completata.

> I progetti che richiedono la mappatura di molte entità rappresentano una difficoltà per i mappatori e sono difficili da validare. Richiedono inoltre molto più tempo per arrivare ad un buon dataset utilizzabile. E' inoltre difficile determinare una dimensione dei task che sia efficiente per tutte le differenti tipologie di mappatura: ad esempio gli edifici necessitano di task piccoli, mentre strade e corsi d'acqua richiedono task di dimensioni più ampie. Creare diversi progetti per la medesima area per mappare edifici e oggetti lineari è una buona pratica.

**Commento del changeset** - Questo è il commento del changeset che sarà utilizzato per ogni upload di dati verso OSM. Include normalmente elementi che identificano il Gestore attività (tasking manager) su cui il progetto risiede e gli oggetti che sono stati mappati. E' spesso usato per inserire degli "hash tags" per aiutare ad identificare l'organizzazione che ha richiesto e/o effettuato la mappatura. Può anche indicare che tipo di mapping è stato fatto: es. "Mappatura edifici".

> Gli utenti dovrebbero essere istruiti a compilare i commenti con informazioni significative su quello che hanno mappato, ma aiutarli inserendo un buon commento di default è sempre una buona idea.

**Istruzioni dettagliate** - Questo è il posto dove la maggior parte delle istruzioni dettagliate devono essere inserite: quello che ci si aspetta è che ogni mappatore e validatore le legga attentamente e le segua.

Vedi le note sotto a riguardo della creazione di istruzioni adeguate.

**Istruzioni del Task** - Queste verranno mostrate quando un mappatore seleziona un task. Questa voce è inoltre dotata di una caratteristica speciale che consente la creazione di URL specifici del Task basati sulle tipiche coordinate x, y, z delle "slippy map" (mappe scorrevoli).

### Metadati

![TM Metadata][]

> Tutti questi campi dovrebbero essere compilati e diventeranno obbligatori nelle prossime versioni di TM3.

**Livello del mappatore** - Questo campo rappresenta un indicatore della difficoltà di mappatura del progetto. Ci sono 3 opzioni: Principiante, Intermedio e Avanzato. Questa impostazione indica al mappatore quale livello di esperienza deve avere per mappare al meglio il progetto. Può essere usato per filtrare la lista dei progetti e il livello suggerito può essere richiesto nella schermata dei Permessi.

**Tipo di Mappatura** - Viene usato per filtrare la lista dei progetti e aiuta i mappatori a trovare i progetti che preferiscono mappare.

**Organizzazione** - Permette di specificare l'organizzazione che utilizzerà la mappatura. E' usato per filtrare i progetti.

**Campagna** - Questo valore permette di raggruppare il progetto con altri che fanno parte di un progetto di mappatura di grandi dimensioni. Viene usato come filtro nella lista dei progetti.

### Aree prioritarie

![TM Priority Area][]

Usa gli strumenti forniti per disegnare le aree che dovrebbero essere mappate per prime. Ci possono essere molteplici aree prioritarie in un Progetto. Le aree prioritarie possono essere cambiate in qualsiasi momento.

> Durante la mappatura di un disastro, nelle fasi iniziali dell'evento, avere un progetto con una ampia AoI e utilizzare le aree prioritarie per focalizzare la mappatura in funzione delle informazioni che arrivano, è una best practice.

### Immagini

Campo URL - Un campo in cui inserire un URL TMS che viene passato automaticamente all'editor OSM utilizzato dal mappatore o dal validatore. Fate riferimento all'esempio: è molto importante che sia formattato correttamente perchè possa funzionare in tutti gli editors.

Licenza - Opzionale e da compilare nel caso in cui sia richiesto che il mappatore debba accettare una specifica licenza per l'utilizzo delle immagini di sfondo. Se è necessaria una licenza che non appare disponibile, puoi contattare l'amministratore del Gestore attività (tasking manager) e chiedergli di aggiungerla.

### Permessi

![TM Permissions][]

Livello del mappatore - Permette di richiedere che il mappatore abbia un livello appropriato per poter mappare per il progetto (schermata dei Metadati sopra). I livelli dei mappatori possono essere impostati manualmente, ma sono automaticamente valorizzati in funzione del totale dei loro changesets.

Richiedi Ruolo Validatore - Questo campo permette di richiedere che le persone che fanno validazione siano valutate per  essere considerate validatori qualificati. Designare qualcuno come Validatore è un processo di valutazione fra pari (peer review). I Gestori di Progetti e quelli già indicati come Validatori possono far diventare qualsiasi utente un Validatore qualificato.

Progetto Privato - Questo restringe l'accesso al proggeto solo ad una lista di utenti. Gli utenti per poter essere aggiunti ad un progetto debbono essersi loggati al Tasking Manager almeno una volta.

### Impostazioni

Lingua di Default - Permette di impostare la lingua in cui saranno visualizzate le istruzioni per quel progetto.

### Azioni

![TM Actions][]

Messaggio a tutti i contributori - Invia un messaggio via Tasking Manager a tutti coloro hanno marcato un task come completo o valido. Può essere usato per ringraziare i contributori e/o per guidarli verso altri progetti di una campagna. Dovrebbe anche essere usato prima di usare una delle due opzioni Valida/Invalida che verranno descritte poco più avanti.

Valida tutti i task - Questo marcherà tutti i task allo stato "Verde" (validati), con l'eccezione dei task che sono stati marcati come "Foto aeree inutilizzabili"

Invalida tutti i task - Questo marcherà tutti i task con lo stato "Rosso" di invalidato, con l'eccezione dei task che erano marcati come "Foto aeree inutilizzabili"

Cancella Progetto - Questo eliminerà definitivamente il progetto dal Tasking Manager.

Clona Progetto - Questo creerà un duplicato del progetto tranne per l'Aol che dovrai reimportare o ridisegnare.

### Note sulle istruzioni

Utilizza un linguaggio semplice, chi legge molto spesso non è madrelingua inglese.

1. Il titolo del progetto dovrebbe già rivelare quale entità dovrebbe essere mappata. E' preferibile un titolo come 
*#1396 - Missing Maps: Niger State (nord), Nigeria (progetto 1: strade e aree residenziali)*
2. I messaggi più importanti dovrebbero comparire innanzitutto nel tab delle istruzioni, in modo da essere letti. Tra di essi dovrebbe comparire l'indicazione di utilizzare un'eventuale immagine diversa da Bing. Le prime frasi possono menzionare, ad esempio, che non è richiesto di mappare ogni singolo edificio se il progetto riguarda strade ed aree residenziali, o in alternativa che è richiesto di mappare ogni singolo edificio se il progetto è utilizzato per stimare la densità di popolazione. Questi messaggi dovrebbero comparire comunque anche nel tab della descrizione.
3. Altro punto da chiarire: Se il progetto sia adatto esclusivamente a mappatori con un certo livello di esperienza. Ad esempio, il progetto si basa su import oppure alcuni dati esistenti devono essere allineati a tracce GPS o ad immagini (cfr. la sezione precedente). Utilizzare un linguaggio che permetta ai nuovi mappatori di sentirsi invitati a contribuire ai diversi progetti, ma anche di comprendere che questa specifica istanza richieda competenze avanzate.
4. Esistono linee guida per evitare errori comuni che si scoprono in fase di validazione. Un esempio è la raccolta di note di Blake Girardot sulla [mappatura dell'Africa occidentale](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Utilizzare il link nelle istruzioni e spiegare che è necessario aderire a queste linee guida.
5. La fonte fondamentale sul tagging è la  [wiki di OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Per molti task relativi a HOT la pagina sul [tagging delle strade in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) ha contenuti molto specifici e la sua lettura è fortemente consigliata ad ogni mappatore. Se il tuo progetto deve riferirsi a differenti schemi di tagging scrivi una pagina simile nel wiki e metti il suo link nelle istruzioni.


### Considerazioni sulle foto satellitari

In molti casi useremo le immagini "standard" Bing. Ma ci sono situazioni in cui potresti voler scegliere una sorgente alternativa:

1. Bing non fornisce copertura ad alta risoluzione per il tuo Aol.
2. Bing ha una considerevole copertura nuvolosa in questa area.
3. Ti servono immagini recenti per una valutazione post-disastro.

Se Bing non si dimostra adeguato la scelta successiva è Mapbox. Dovresti cercare altre fonti solo se nessuna di queste due scelte si rivela adeguata ai tuoi bisogni.

In questi casi non è sufficiente selezionare una fonte con licenza compatibile e renderla disponibile attraverso un servizio WMS o TMS. La tua AoI è stata probabilmente già parzialmente mappata usando le immagini di Bing o Mapbox e ci potrebbe essere uno scostamento evidente fra le immagini. E' necessario osservare da vicino diverse aree all'interno della AoI per determinare lo scostamento tra la tua fonte di immagini e i dati già precedentemente mappati. Se i dati OSM già esistenti sono scostati rispetto alla tua fonte di immagini, ma sono allineati rispetto alle immagini Bing, allora dobbiamo assumere che Bing sia lo standard di riferimento, a meno di avere delle tracce GPS che provano che questa assunzione è sbagliata.

Se c'è uno scostamento costante fra le tue immagini e quelle di Bing in tutta la AoI, allora è possibile correggerlo sul server in modo che le immagini caricate nell'editor e provenienti da varie fonti siano allineate. Se questo non è possibile perchè lo scostamento non è omogeneo su tutta l'estensione della AoI o perchè i dati esistenti sono allineati con varie fonti, allora è tempo di un piano B:

L'aspetto importante è sviluppare una strategia per gestire queste problematiche e fornire istruzioni dettagliate ai mappatori e ai validatori. Suggeriamo caldamente che un progetto di questo tipo venga dichiarato come "adatto solo a mappatori con esperienza", spiegando che l'esperienza in questo caso non significa avere mappato 200 e più edifici, ma che deriva dall'aver già gestito problematiche di allineamento in presenza di oggetti ottenuti da differenti fonti di immagini.

Una possibile strategia potrebbe comprendere i seguenti passi:

1. Definisci in modo chiaro quale fonte di immagini va considerata come il riferimento a cui qualsiasi cosa debba essere allineata. In questo caso assumiamo che il riferimento sia Bing.
2. Accertati che tutti gli oggetti esistenti che sono visibili anche su Bing siano allineati con esso, ovvero riallineali se necessario.
3. Allinea la fonte di immagini alternativa agli oggetti esistenti (e quindi a Bing) usando la funzione di gestione dello scostamento (offset) delle immagini dell'editor.
4. Aggiungi dei nuovi oggetti alla ora correttamente allineata fonte di immagini alternativa

E' importante che il passo 3 sia ripetuto per ogni task del progetto e che le dimensioni di ogni singolo task non siano troppo grandi: lo scostamento delle immagini può infatti variare in modo considerevole all'interno dell'estensione della AoI, in particolare dove il terreno non è pianeggiante. Si possono presentare anche delle discontinuità nelle immagini: cercale e notifica i contributori del problema.

Qui puoi trovare qualche spunto sulle informazioni che potresti includere nelle istruzioni del progetto:

- [linee guida generali per gli editor](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [una gif animata sull'allineamento delle immagini con iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [il capitolo sull'allineamento delle immagini in JOSM di learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Revisione e Pubblicazione
Rivedi le varie schede per verificare che la grammatica e la formattazione siano corretti e che le istruzioni siano chiare. Se è necessario cambiare o rifinire il progetto, cliccare il link 'Edit' nell'angolo in alto a destra della pagina. 
Se il progetto è pronto, cliccare il link 'Pubblica'. Nel momento in cui il progetto è pubblicato diventa disponibile per chiunque abbia un account OSM, a meno di avere specificato un gruppo di utenti nella scheda 'Utenti ammessi', nel  qual caso solo gli utenti abilitati saranno in grado di lavorare sul progetto. Se necessario è possibile apportare ancora modifiche al progetto dopo la pubblicazione, cliccando sul link 'Edit'

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png