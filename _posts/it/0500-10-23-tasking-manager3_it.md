---
layout: doc
title: Tasking Manager 3
permalink: /it/coordination/tasking-manager3/
lang: it
category: coordination
---

# Tasking Manager 3


**Questa guida descrive l'attuale versione del Tasking Manager. Se l'interfaccia utente della versione che vedi è differente da quella descritta qui allora dovresti consultare il [manuale della precedente versione](/it/coordination/tasking-manager)**

Indice della sezione
-------------
- [Guida rapida](/it/coordination/tasking-manager3/#quick-start-guide)  
- [Il processo di mappatura](/it/coordination/tasking-manager3/#mapping-process)  
    - [Eseguire la login](/it/coordination/tasking-manager3/#tasking-manager-login)  
    - [Opzioni - impostazione lingua e profilo utente](/it/coordination/tasking-manager3/#options-amp-links)  
    - [Trovare un progetto - usando la mappa o tramite una lista, ricerca e filtraggio](/it/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    - [Mappare un Task - selezionarlo, lavorarci e sbloccare un task](/it/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
- [Ottenere Aiuto - in tempo reale; contattare l'amministratore del progetto](/it/coordination/tasking-manager3/#getting-help)  
-  [Suggerimenti e consigli](/it/coordination/tasking-manager3/#editing-hints-and-tips)
- [Validazione](/it/coordination/tasking-manager3/#validation)

Il [Gestore attività (tasking manager) di HOT OSM](http://tasks.hotosm.org) è uno strumento che permette di coordinare le persone coinvolte nella mappatura di una specifica area geografica di OpenStreetMap.

OpenStrretMap è una mappa libera del mondo ottenuta grazie allo sforzo collaborativo di molte persone (crowd sourced). Chiunque può contribuire a mappare qualsiasi parte del mondo di propprio interesse in OpenStreetMap. Il Gestore attività (tasking manager) è solo un modo per coordinare grandi gruppi di persone che contribuiscono a OpenStreetMap, ma la maggior parte dei contributi arrivano da persone che non usano il Gestore attività.

Il Tasking Manager è uno strumento totalmente separato dal progetto principale di OpenStreetMap. Quando tu contribuisci a OpenStreetMap usando il Tasking Manager, in realtà stai usando molteplici strumenti software:

* OpenStreetMap - Un database di informazioni geografiche
* Il Tasking Manager - Aiuta il coordinamento di un grosso numero di persone che editano dati nella stessa area
* Un editor OpenStreetMap - Un software che può leggere e scrivere dati nel database OpenStreetMap

![TM overview][]

Lo scopo del Gestore attività è quello di presentare una specifica area geografica suddivisa in piccole porzioni facilmente mappabili chiamate "Tasks" e di fornire uno modo per "bloccare" una di questa piccole aree quando la si sta editando con gli editor standard di OpenStreetMap. Con l'operazione di "blocco" ci si assicura che nessun altro possa mappare la medesima area nello stesso tempo. Questo aiuta a prevenire la "doppia mappatura" o altri errori che si potrebbero presentare quando due persone lavorano esattamente sulla stessa area di OpenStreetMap.

Nel momento in cui hai finito di mappare quella piccola area, lo registri nel Gestore attività e selezioni un altro "Task" da mappare.


## Guida Rapida

1. Crea un account e fai login su http://openstreetmap.org/  
  ![TM Quick Start 1][]
2. Visita [http://tasks.hotosm.org/](http://tasks.hotosm.org/) ed effettua il login nella parte in alto a destra  
  ![TM Quick Start 2][]
3. Clicca su "Contribuisci" e trova un progetto di mappatura su cui lavorare  
  ![TM Quick Start 3][]
4. Leggi le istruzioni del progetto  
  ![TM Quick Start 4][]
5. Clicca sulla scheda "Mappa"  
  ![TM Quick Start 5][]
6. Trova un task "Pronto" su cui lavorare, cliccalo e seleziona "Inizia a mappare"  
  ![TM Quick Start 6][]
7. Verrai deviato su un editor OpenStreetMap: mappa tutti gli oggetti come specificato nelle istruzioni.  
  ![TM Quick Start 7][]
8. Quando hai finito di mappare, ritorna al Gestore attività e clicca "Segna come Completamente Mappato" se hai mappato il task in modo completo oppure "Ferma mappatura" se necessiti di fermarti nell'operazione di mappatura per qualche motivo.  
  ![TM Quick Start 8][]


## Processo di mappatura 

1. Un mappatore crea un account su OpenStreetMap e effettua il login al Gestore attività (tasking manager).
1. Il mappatore cerca un progetto su cui lavorare, in genere basandosi sulle priorità e il livello di conoscenza impostati dal gestore del progetto sul Gestore attività (tasking manager). 
2. Un mappatore selezione un task, completa la mappatura e segna il task come completo.
3. Un secondo mappatore verifica che il task sia completo ad un livello soddisfacente e segna il task come 'validato'
4. I progessi della mappatura del progetto possono essere controllati all'interno della scheda "statistiche" del progetto e il progetto può essere declassato come priorità o archiviato se richiesto da un amministratore.

### Login al Gestore attività

Il Gestore attività (tasking manager) è uno strumento seperato per coordinare le attività di mapping in OpenStreetMap e di cui sfrutta il sistema di login. Questo significa che non è necessario creare una account separato per usare il Gestore attività, ma è invece necessario creare un account su OpenStreetMap ed effettuare lì un login prima di poter usare il Gestore attività per mappare.

Quando visiti per la prima volta il Gestore attività vedrai un pulsante "Login" nell'angolo in alto a destra dello schermo.

![TM login 1][]

Cliccando su quel bottone verrai dirotttato al sito web di OpenStreetMap. Qui dovrai effettuare il login e autorizzare il Gestore attività ad accedere le tue preferenze sul tuo profilo di OpenStreetMap. Crea un account sul sito web di OpenStreetMap nel caso in cui tu non ne abbia ancora uno.

![TM login 2][]

![TM login 3][]

Una volta autenticato in OpenStreetMap sarai reindirizzato al Gestore attività. Cliccando su Contribuisci o Inizia ti verrà mostrata una lista di progetti a cui puoi contribuire

### Opzioni & links

Il Gestore attività è inizialmente impostato in lingua inglese. Per scegliere un'altra lingua clicca su **English** nell'area in alto a destra della finestra.

Una volta effettuato il login puoi cliccare sul tuo nome utente in alto nello schermo. Qui puoi:

- Vedere il tuo profilo nel Gestore attività dove è possibile:
    - Aggiornare l'indirizzo mail e i propri riferimenti sui social network
    - Vedere il tuo livello di esperienza come mappatore
    - Vedere una lista e una mappa dei progetti ai quali hai contribuito
- Accedere ai tuoi **Messaggi** all'interno del Gestore attività (non è lo stesso sistema di gestione dei messaggi di OpenStreetMap)
- Effettuare il logout

### Trovare un progetto - Schermata Contributi del Gestore attività

Cliccando sul link "Contribuisci" nella barra menu principale ti verrà mostrata la lista dei progetti definiti nel Gestore attività.

![TM contribute][]

La schermata Contributi del Gestore attività è divisa in tre aree principali:

- Opzioni Cerca e Filtra a sinistra
- Lista dei Progetti
- Visualizzazione della Lista dei Progetti su una mappa

#### Opzioni Cerca e Filtra

Per default tutti i progetti su cui è possibile mappare sono visualizzati. Puoi usare la sezione filtro della Ricerca Avanzata per restringere i criteri di ricerca dei progetti su cui vorresti lavorare.

- Numero del Progetto - se conosci il numero del progetto su cui vuoi lavorare, inseriscilo qui e verrai indirizzato ad esso.
- Organizzazione - Questo consente di visuliazzare solo i progetti che sono stati richiesti da una specifica organizzazione.
- Difficoltà di Mappatura - Alcuni progetti sono più difficili da mappare di altri. Questa opzione consente di trovare i progetti più appropriati per il tuo livello di esperienza. Ti invitiamo a lavorare su progetti che meglio si adattano al tuo livello di esperienza, specialmente se sei un mappatore con maggiore esperienza.
- Tipo di Mappatura - Questo consente di trovare i progetti che includono un certo tipo di oggetti da mappare. Molti progetti si focalizzano su un solo tipo, ma alcuni potrebbero includere diversi tipi di oggetti da mappare.
- Ricerca di Testo - Questo consente di ricercare progetti che possono contenere una certa parola o frase nella descrizione.
- Tags della Campagna - I progetti possono avere dei tags che indicano la loro appartenenza ad una ampia campagna di mappatura. Puoi cercare i progetti in questo modo inserendo i tag in questo campo.

#### Vista Mappa
Cliccando sulla scheda "Vista Mappa" verrà visualizzato il numero di progetti in una regione. Facendo doppio click o ingrandendo con lo zoom verranno mostrati i singoli progetti. Una volta ingrandita la mappa si vedrà che i punti sono codificati con un colore: rosso per quelli urgenti, giallo per quelli a priorità alta o media e grigi per quelli a bassa priorità. Cliccando su uno qualsiasi dei punti sulla mappa verranno mostrate le informazioni del progetto. Un click sul titolo del progetto porterà al progetto stesso.

![TM project map][]

### Mappare con il Gestore attività

Una volta localizzato il Progetto su cui lavorare, se si clicca sul titolo si accederà alla schermata che illustra i dettagli del progetto. Questa schermata di dettaglio contiene:

- Una descrizione dell'importanza del progetto e come i dati saranno usati
- Istruzioni di dettaglio su cosa mappare
- Una schermata per la validazione della mappatura
- Una mappa dettagliata delle aree dei singoli task di mappatura, con informazioni sul loro stato
- Una scheda Domande e Commenti per domande e commenti sul progetto

![TM project description][]



#### Pagina del Progetto

Tutto ciò che ti serve sapere sul progetto lo trovi qui! In alto c'è una descrizione completa del progetto di mappatura e le informazioni sul progetto.  

Sotto la descrizione lo schermo è diviso in una sezione sinistra e una destra. La sezione di sinistra è un pannello con le schede "Istruzioni", "Mappa", "Validazione" e "Domande e Commenti". Sulla destra si trova una mappa del progetto e i singoli task di mappatura.

- I task non colorati sono pronti e disponibili per essere mappati
- Le aree rosa della mappa indicano le zone ad alta priorità
- i quadrati giallo/oro sono stati mappati e sono pronti per il processo di validazione
- Un bordo giallo indica il task che hai selezionato
- I task blue sono in corso di lavorazione da parte di un altro mappatore 
- I task verdi sono passati attraverso il secondo stadio di mappatura e sono quindi stati "validati"
- I task grigio scuro sono stati valutati da un mappatore che ha ritenuto inadatto il livello qualitativo delle immagini per effettuare una mappatura 
- La linea blu normalmente visibile sui quadrati perimetrali del progetto, segna il confine del progetto. Questo confine normalmente segue le immagini disponibili, un confine ammistrativo, ecc., e può così apparire con una forma inusuale. Sebbene il mapping possa essere completato anche al di fuori del confine, questo non è un requisito e non verrà considerato dai validatori.  


#### Scheda Istruzioni
Questo illustra cosa viene richiesto per effettuare la mappatura. Le istruzioni spiegano anche come i progetti variano come difficoltà: possono essere adatti a principianti o a mappatori con esperienza intermedia e avanzata. Assicurati di avere letto e capito bene questa sezione perchè nei progetti ci sono molti stili di mappatura per molti differenti scopi. Alcune delle più comuni attività di un progetto comprendono:  

- Reticolo stradale: Usato dalle persone in loco per caricare i dati in dispositivi di navigazione portatili e quindi permettergli di capire come raggiungere delle aree remote.  
- Mappatura di paesi: Spesso usato per identificare i luoghi dove le persone vivono  
- Mappatura di edifici: Usato per la valutazione dei danni o per tracciare i contatti fra persone nel caso di progetti di mappatura che riguardano la diffusione di malattie. Utilizzato anche per stimare la popolazione.  
- Mappatura di fiumi, muri o altri oggetti  

Non tutte le aree del mondo sono simili a quella in cui abiti, quindi potrebbero essere forniti dei consigli sul tagging. Per esempio la rete stradale Africana è molto differente dal tipico sistema stradale Americano o Europeo.  

Troverai una sezione in cui è indicato il **Commento al changeset** che devi essere certo di specificare nel tuo programma di editing quando effettui l'upload/salvataggio dei cambiamenti, assieme all'informazione sulla **fonte** che potresti (in base al tuo software di editing) dover copiare nel campo fonte (source) quando fai delle modifiche.  

A volte potrebbero essere messe a disposizione delle foto specifiche per il task, per le quali ti potrebbe venire richiesto di accettare una licenza d'uso prima di poterle accedere. Le istruzioni normalmente indicano il modo migliore per caricarle in editors come JOSM o iD.  

Quando i validatori verificano un task marcato come completo, si aspettano che i requisiti espressi nella scheda istruzioni siano stati soddisfatti. Potresti scoprire che completare un intero task è abbastanza difficile quindi qui sotto viene spiegato come sbloccare un task e come fornire un feedback al mappatore che successivamente se ne farà carico.  

#### Bottone Attività e Statistiche  

Questa scheda contiene delle statistiche sul progetto. E' diviso in due sezioni, una lista dettagliata delle attività (originariamente aveva una propria scheda dedicata nel Gestore attività 2.0) e un sommario.

Il sommario contiene una lista di mappatori che hanno completato almeno un task del progetto.  

In fondo alla pagina si trova un registro di tutti i commenti lasciati sui singoli task che non deve essere confuso con la scheda "Domande e Commenti" che riporta domande e commenti che riguardano l'intero progetto

Puoi tornare alla pagina principale dei contributi al progetto cliccando sul titolo del progetto nella pagina Attività e Statistiche.

#### Scheda Mappa  

Clicca quando sei pronto a inziare a mappare. Puoi scegliere un singolo task su cui lavorare selezionando nella mappa, o cliccando l'opzione "Prendi un Task a caso". Solo i task senza un colore possono essere selezionati in questa scheda e in caso contrario apparirà un messaggio che indica che il task non può essere mappato. Se intendi validare, assicurati di avere scelto la scheda "Validazione".

![TM map tab][]

#### Selezionare un task da mappare  

Dopo avere selezionato un task sarà possibile vedere se esiste uno storico delle attività svolte su di esso, come ad esempio un utente che ha iniziato a mappare, ma si è poi accorto di non avere sufficiente tempo per compleare l'operazione.  

Cliccando sul bottone **Inizia a mappare** si blocca il task in modo che nessun altro mappatore possa selezionarlo fino a quando non viene rilasciato nuovamente, e parte un conto alla rovescia della durata di 2 ore (120 minuti) alla fine del quale il task è automaticamente rilasciato. E' buona norma verificare il contatore con regolarità perchè può capitare di essere così presi nella mappatura da non accorgersi che il task viene rilasciato e magari selezionato da un altro mappatore che inizia a sua volta  a lavorarci. Questa cosa può portare a conflitti e problemi sui dati.  


#### Opzioni di Editing

Nel momento in cui blocchi un task ti vengono presentate differenti possibilità di editing.

##### Editare in JOSM  

Esegui JOSM prima di usare questo link in modo che carichi automaticamente i dati OSM dentro l'applicativo.  

> 1. L'opzione 'Abilita controllo remoto' deve essere selezionata. Si trova sotto **Modifica / Preferenze / Controllo Remoto**
> 2. Se hai precedentemente installato il plug-in 'continuosDownload' è meglio disabilitarlo (de-seleziona 'Download OSM Data continuously' nel menu **File** in JOSM).  
> 3. Se JOSM non carica le immagini di sfondo automaticamente, puoi trovare la fonte di immagini nel menu **Immagini aeree**. [Maggiori informazioni sulle immagini qui](/it/josm/more-about-josm/#add-imagery)  
  

##### Editor iD  

Seleziona questa voce per aprire automaticamente un nuovo tab o finestra del tuo web browser con all'interno i dati OSM già caricati. Il browser Internet Explorer al momento non supporta iD e caricherà Potlatch 2 al suo posto. Il tab o la finestra originali con all'interno il Gestore attività rimarrà presente.  


##### Potlatch 2  

L'editor verrà caricato in una nuova finestra o nuovo tab. Potlatch non visualizzerà automaticamente il confine del task, ma si può ottenere comunque seguendo questa procedura:  

1. Nel Gestore attività seleziona un task e clicca Inizia a Mappare per bloccarlo  
2. Nel Gestore attività seleziona Editare in JOSM (se appare una finestra con scritto "Il controllo remoto di JOSM non risponde..." premi OK).  
3. Sotto al bottone Editare in JOSM un testo dirà "Consiglio: scarica il seguente file .gpx...". Scarica il file .gpx e segnati dov'è stato salvato  
4. Nel Gestore attività cambia da Editare in JOSM a Editare in Potlatch 2. Potlatch si aprirà in un nuovo tab.  
5. In Potlatch seleziona Sfondo e poi Vector File...  
6. Nella schermata Load Vector File nella parte in basso vicino a File, clicca Open e seleziona il file .gpx che hai appena scaricato  
7. Nella schermata Load Vector File assicurati che il box nella colonna Show in corrispondenza della linea del file .gpx abbia un segno di spunta e quindi chiudi la finestra  
8. Potlatch dovrebbe ora mostrare il confine come un quadrato (probabilmente color ciano). Nota che Potlatch continuerà comunque a caricare dati anche fuori dal confine.  
  

##### Field Papers  

Da utilizzare solo quando sei coinvolto in un progetto dove un mappatore locale ha effettuato una ricognizione sul campo e segnato su una mappa stampata informazioni come ad esempio i nomi delle strade. Questa mappa può essere scannerizzata e usata come immagine di sfondo per un mappatore locale o remoto che legge le informazioni scritte e le riporta come modifiche in OpenStreetMap [Sezione Field papers di LearnOSM](/en/mobile-mapping/field-papers/).  


#### Suddividere un task

Dopo avere selezionato un task e averlo controllato con le immagini di sfondo, potresti renderti conto che servono moltissimi dettagli per completare la mappatura. Un esempio può essere la tracciatura di edifici in dense aree urbane o localizzare piccoli paesi in una grande area. Come regola, quando non è possibile per una persona completare l'operazione entro le 2 ore, puoi suddividere il task in 4 aree più piccole. *Usalo con attenzione* - quando la suddivisione genera aree troppo piccole è difficile valutare il tipo di strade o identificare altri tipi di oggetti.  

> Fai attenzione che con la suddivisione del task, i commenti a riguardo del lavoro precedentemente svolto sul task non saranno più disponibili.


#### Sbloccare un Task

![TM unlock][]

##### Sbloccare un Task prima che sia completo

Se cominci a lavorare su di un task, ma non puoi completarlo per qualche ragione, è buona norma lasciare un commento. Semplicemente dettaglia cosa rimane da fare e premi **Ferma la mappatura**. Assicurati che i commenti siano pertinenti e orientati ad aiutare il mappatore successivo.  

Per esempio:  

    Quasi completato, ad eccezione di un piccolo paese da tracciare 
    nella zona in alto a sinistra del riquadro
  

##### Sbloccare un Task che è stato completamente mappato

E' molto difficile essere sicuri di avere completato un task. In ogni caso è accettabile segnare un task come completo se sei abbastanza sicuro del fatto. I contenuti saranno verificati da un altro mappatore durante la validazione ed eventuali piccole variazioni potranno essere apportate in questa fase.  

Per fare in modo che il processo funzioni in modo efficace, i mappatori devono segnare i task come "Mappati" piuttosto che lasciarli in uno stato di incertezza che imporrebbe a molti altri mappatori di sprecare il loro tempo per verificarli.  

Quando hai finito di editare e pensi che il task sia completo, salva tutte le modifiche nel programma di editing che usi e quindi ritorna al Gestore attività.  

+ Aggiungi dei commenti nel riquadro dettagliando cosa sei riuscito a fare e, maggiormente importante, cosa di cui non sei sicuro. Per esempio: "Completato per quanto sono riuscito a vedere. C'è una nuvola che copre l'angolo in alto a destra del task e non è quindi possibile vedere cosa c'è da tracciare in questa area".  
+ Clicca sul bottone "Segna come mappato" e rendi così il tuo lavoro pronto per la revisione.  

##### Segna un Task come Foto Aeree Inutilizzabili

Può capitare a volte di selezionare un task che non può essere mappato perchè le immagini aeree di sfondo hanno una risoluzione bassa o c'è copertura nuvolosa. In questo caso chiudi il task nell'editor e usa il bottone "Segna come Foto Aeree Inutilizzabili" per registrare che il task non può esssere mappato per scarsa qualità delle immagini.


#### Inviare un messaggio dal box di commento

Quando lasci un commento a riguardo di un task, puoi fare in modo che il commento venga inviato come un messaggio ad un preciso mappatore. In modo simile a come si opera con Twitter, usa semplicemente un @ seguito dal nome utente. Questa operazione spedirà un messaggio all'utente con all'interno il commento inseriti nel box oltre ad un link al task a cui il commento fa riferimento.  

Per esempio:  

    @HOTMppr bel lavoro di tracciatura dei dettagli degli edifici.  
    Hai tralasciato un piccolo gruppo  
    di case nella parte in alto a sinistra del task.  
    Ne ho aggiunte alcune, ma ne rimangono altre.  

Questo è particolarmente utile quando si fa validazione o si fanno aggiunte al precedente lavoro di altri. E' possibile fornire feedback, ringraziare e altro.  

+ Potresti fornire un link ad un sito che può essere d'aiuto al mappatore, come ad esempio <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Fai attenzione che potrebbero partecipare diverse persone provenienti da tutto il mondo, quindi usa un linguaggio semplice e chiaro. Se ti imbatti in commenti in altre lingue, strumenti come Google Translate sono ragionevolmente efficaci.


#### Riferirsi ad un determinato task quando si invia una mail  

Se hai bisogno di inviare un messaggio come una email o tramite IRC e devi fare riferimento a un determinato task all'interno di un progetto (magari hai bisogno di una mano dell'identificare qualcosa nelle immagini satellitari):  

1. Clicca sul quadrato del task di interesse  
2. Clicca sulla barra indirizzi del web browser che dovrebbe mostrare qualcosa di simile a 'http://tasks.hotosm.org/project/713?task=259'  
3. Copia il link nel messaggio. 


## Ottenere Aiuto 

### Aiuto testuale dal vivo

Dalla pagina Impara del Gestore attività:  
1. Clicca su **Canale IRC di OSM HOT #hot**  
2. Inserisci un nome utente (il tuo nome utente su OSM?), o usa quanto proposto  
3. In fondo alla lista del menu a tendina seleziona **hot**  

- Alla destra dello schermo si trova una lista di utenti online in questo momento.  
- Digita il messaggio nel riquadro nella parte bassa dello schermo a sinistra (a volte è temporaneamente coperto da altro testo, ma questo sparisce non appena selezioni il ruquadro).  
- Per indirizzare il messaggio a una persona in particolare includi il suo nome utente che trovi nella lista alla destra del tuo messaggio. Quando hai scritto usa il tasto di invio per sottoporre il commento. Il sistema è 'live' quindi aspetta una risposta - il tuo nome utente verrà spesso usato nella risposta per farti capire che è indirizzata a te. Normalmente si riceve un riscontro entro pochi secondi, quindi attendi.  
- Un semplice metodo alternativo si trova su [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Ulteriori informazioni sull'uso di IRC con OpenStreetMap possono essere trovate su [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternativamente usa un client IRC di tua scelta (Server=irc.oftc.net e channel=#hot)  

### Lasciare una domanda/commento sul Progetto o contattare chi lo ha creato

Nella scheda "Commenti" del progetto si possono vedere le domande e i commenti degli altri utenti e lasciare i propri. Cliccando sul link "Contatta il Gestore del Progetto" il commento/domanda sarà automaticamente indirizzati a chi ha creato il progetto. 

Tutti i commenti sono pubblici, ma non c'è interazione in tempo reale. Per questo usal'opzione IRC di cui sopra.

![TM comments][]


## Consigli e trucchi per editare  

Arrivati a questo punto hai una buona comprensione di cos'è il Gestore attività e di alcune delle diverse funzioni che implementa. A differenza del normale editing, questo strumento è spesso usato per progetti con molti partecipanti e in cui il tempo è il fattore critico e questo potrebbe essere qualcosa di leggermente differente da quello a cui sei abituato.  

Ecco alcuni consigli generali di cui tenere conto quando si lavora con questo strumento:  

* Evita di mappare troppo al di fuori del tuo riquadro di lavoro: altri mappatori potrebbero lavorare in quell'area con il risultato di duplicare gli sforzi. E' corretto mappare oggeti come ad esempio gli edifici che si trovano sovrapposti sul confine del task, ma evita di spingerti troppo in là. Effettua un upload dei dati immediatamente dopo avere mappato qualcosa sul confine.  
* Estendi strade, torrenti e altri oggetti lineari leggermente oltre i confini del task: questo consentirà ai mappatori di riprendere da dove hai lasciato, ma ricordati di effettuare un upload dei dati non appena hai finito di editarli.  
* Se hai dei dubbi su cosa sia un particolare elemento/oggetto, usa la sezione dei commenti per fare domande oppure controlla sul wiki.  
* Se commetti un errore grave - per esempio cancelli elementi/oggetti o una relazione - usa IRC o il riquadro dei commenti per chiedere ad altri mappatori aiuto nel ripristinare la situazione. Cerca di includere il numero del changeset o una descrizione di quello che è successo. Essendo il progetto uno sforzo collaborativo, molti altri mappatori sono disponibili ad aiutare. E' opportuno ricordare che chiunque può a volte commettere errori.  
* Non esitare a chiedere un riscontro. I mappatori che validano il tuo lavoro possono avere un atteggiamento sbrigativo o molto diretto, ma se sanno che è possibile dialogare con te, il risultato finale sarà decisamente migliore per tutti quelli coinvolti. Può essere difficile comunicare in un'altra lingua ed è facile apparire bruschi o rudi quando devi tradurre e passare un messaggio in una lingua con cui non hai molta dimestichezza.  
* Evita di validate il tuo stesso lavoro. Gli occhi di una seconda persona porteranno sicuramente ad una migliore qualità della mappatura.  
* Non preoccuparti se altri mappatori hanno un atteggiamento un po' brusco quando validano il tuo lavoro - come te vogliono assicurarsi che tutti i dati siano stati mappati accuratamente. Il riscontro fornito è in ogni caso riferito  al lavoro rimanente da fare e non va considerato come una critica agli sforzi che hai fatto fino a quel momento.  


## Validazione

La validazione è il processo in cui un secondo mappatore riesamina il lavoro svolto dal mappatore che ha preso precedentement in carico un task. E' pensato per assicurarsi che i dati siano di qualità e completi ed è inoltre usato per inviare ringraziamenti, riscontri e per incoraggiare i mappatori.

### Per iniziare

La validazione inizia più o meno allo stesso modo di quando si effettua la mappatura. Un volontario trova un progetto sui cui gli piacerebbe lavorare, legge le istruzioni per essere certo di avere compreso cosa viene richiesto di mappare e come, ma, invece di selezionare il pannello mappatura, seleziona  "Validazione".

![TM select for validation][]

Il validatore può selezionare un task cliccando su un singolo quadrato del task, cliccando "Seleziona un Task a caso", selezionando in base all'utente o disegnando un poligono per selezionare task multipli.

A differenza dei mappatori, i validatori possono selezionare diversi task alla volta per eseguire la validazione su larga scala.

### Selezionare diversi task per la validazione

Una novità dell'ultima versione del Gestore attività è la possibilità di validare molteplici task in una volta sola, selezionandoli per area o per utente.

Questa caratteristica si presente in modi differenti in funzione dell'editor utilizzato.

In JOSM un secondo livello dati verrà creato con il titolo "Confini del Task - Non Editare ne Effettuare l'Upload" e questo, nelle versioni recenti di JOSM, avrà l'upload disabilitato. JOSM **non scaricherà i dati OSM** perchè potrebbero essere una grande quantità. Il validatore dovrà quindi usare i confini del task come guida e scaricare i dati nel livello di editing attivo in modo manuale.

#### Selezione tramite il disegno di un poligono

Questa opzione consente al validatore di disegnare un quadrato attorno ad un gruppo di task e di valutarli tutti assieme in un unica volta.

All'interno dell'editor preferito **il validatore dovrà scaricare manualmente i dati OSM** per l'area selezionata. Questo per prevenire lo scaricamento di tutti i dati OSM in una volta sola.


### Selezione per utente

Viene presentata una lista di mappatori che hanno segnato almeno un task come completato. Passando con il mouse sui nomi nella lista verranno evidenziati i task su cui hanno lavorato. La lista presenta inoltre tre importanti informazioni sul mappatore: il livello di esperienza, il numero di giorni passati da quando ha iniziato ad usare il Gestore attività e il numero di giorni passati dal ricevimento dell'ultimo riscontro di validazione. Questo consente al validatore di focalizzarsi in particolare sui nuovi mappatori, sui mappatori con esperienza o su quelli che non hanno ricevuto riscontri per un lungo periodo di tempo.

Cliccando sul bottone "Inizia la validazione" tutti i task completati dallo specifico mappatore verranno bloccati, permettendo così al validatore di aprirli nell'editor preferito.

![TM multi selection][]

All'interno dell'editor preferito **il validatore dovrà scaricare manualmente i dati OSM** per l'area selezionata. Questo per prevenire lo scaricamento di tutti i dati OSM in una volta sola.

### Concludere la validazione

Non appena il validatore ha concluso il processo di validazione, per un task o più in contemporanea, deve ritornare al Gestore attività e selezionare una delle tre possibili scelte che rispecchiano lo stato di mappatura del task:

- Ferma la validazione - se non puoi completare il processo di validazione e devi fermarti
- Segna (tutti) come Valida - Se la mappatura è completa ed accurata
- Segna (tutti) come non Valida - Se la mappatura non è completa o è inaccurata

Per le ultime due scelte il validatore dovrebbe inviare un commento amichevole e incoraggiante indirizzato ai mappatori coinvolti. Dovrebbe poi ringraziarli per i loro contributi e fornire un riscontro su quanto mappato.  Poni per cortesia attenzione quando segni un task come non valido. Se mancano solo pochi elementi aggiungili tu stesso, spiega cosa mancava nel commento, ma in ogni caso segna il task come valido.  Marcare un task come non valido potrebbe apparire come un commento un po' troppo duro, specialmente per un mappatore principiante che reputava di avere svolto un lavoro completo.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
