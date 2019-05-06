---
layout: doc
permalink: /it/coordination/tm-whats-new-for-validators/
lang: it
title: Cosa c'è di nuovo per i Validatori nel Tasking Manager 3
category: coordination
date: 0500-10-21 12:00:00
---

# Cosa c'è di nuovo per i Validatori nel Tasking Manager 3

> Questa guida può essere scaricata come [tm3-news-for-validators_it.odt](/files/tm3-news-for-validators_it.odt) o come [tm3-news-for-validators_it.pdf](/files/tm3-news-for-validators_it.pdf)  

## Il tuo profilo utente

Il Tasking Manager 3 ha diverse nuove caratteristiche rivolte a chi si occupa della validazione. Ti consigliamo vivamente di **visitare il tuo profilo utente come prima attività all'interno del nuovo Tasking Manager**, che può essere selezionato dal menù a tendina sotto il tuo nome utente OSM situato nell'angolo superiore destro.

![profile][]

1. **Indirizzo Email** - Il Tasking Manager ora può inviare una email ogni volta che un utente riceve un messaggio nel Tasking Manager. Questo è molto importante per le persone che si occupano della validazione. I commenti lasciati mentre si valida la mappatura ora avranno molte probabilità in più che vengano visti dalla persona cui stai validando il lavoro. Assicurati quindi di **aggiungere il tuo indirizzo email** al tuo profilo.

2. **Ruolo Validatore** - I progetti possono opzionalmente richiedere dei validatori d'esperienza per validare il progetto di mappatura. Mentre "Livello d'esperienza del mappatore" è impostato automaticamente in base ai changeset caricati su OSM, il ruolo di validatore è attualmente impostato manualmente dal gestore del progetto. La lista iniziale delle persone col ruolo di validatori è incompleta, se ritieni di avere sufficiente esperienza per validare un progetto e non sei nella lista contatta il gestore del progetto (project manager) per chiedere di essere inserito nel ruolo di validatore del Tasking Manager. **Nota**: il ruolo di validatore vale per tutti i progetti del Tasking Manager e perciò noi chiediamo ai gestori dei progetti di assegnare questo ruolo solo a quei validatori la cui attività sia conosciuta direttamente ed abbiano una conoscenza di prima mano che il validatore sia qualificato per validare qualsiasi progetto all'interno del Tasking Manager.


## Processo di Validazione

### Passo 1 - Selezione del Task

La Validazione può essere fatta solo cliccando sul pannello "Validazione" sulla pagina del progetto. Una volta che hai selezionato il pannello "Validazione" hai tre opzioni principali su come selezionare i task da validare.

![selection][]

1. **Seleziona un task individuale** da validare - Questo è esattamente lo stesso progetto che esiste nell'attuale Tasking Manager, tu clicchi su un task o usi il bottone "Valida un progetto a caso" e poi clicchi su "Inizia a validare" e lanci il tuo editor.

2. **Seleziona per area** -  Consente di disegnare un poligono sulla mappa dei task che seleziona tutti i task dell'area pronti per la validazione. Clicca su "Inizia a validare" e tutti i task selezionati verranno bloccati per la validazione.

3. **Seleziona per utente** - Una lista di tutti gli utenti che hanno contribuito al progetto si trova nella parte sinistra della pagina assieme ad alcune informazioni aggiuntive. Puoi ordinare la lista in base ad ogni colonna:

- Livello - Calcolato in base al numero di changeset su OSM
-Registrato - Da quanto tempo usano il Tasking Manager
- Ulima Validazione - L'ultima volta che hanno validato un task

Scorrendo con il mouse sul link "Inizia" verranno evidenziati i task che l'utente ha completato. Cliccando sul link "Inizia" verranno bloccati tutti per la validazione.

### Passo 2 - Validare più task in una volta sola

La selezione di un singolo task e il lancio dell'editor preferito è un'operazione che è rimasta uguale come nella precedente versione del Tasking Manager. La vera differenza è quando selezioni più task contemporaneamente e lanci l'editor.

Ci sono pochi cambiamenti nell'uso dell'editor iD. La grande differenza è che invece di vedere il contorno di un solo task, vedrai i contorni di tutti i task selezionati. Siccome iD scarica i dati solo dell'area che ingrandisci e accetta i contorni in formato GPX, non c'è molta differenza nel modo di procedere rispetto a prima: solo più aree bloccate nel Tasking Manager e un'area più grande in cui validare la mappatura. 

Con JOSM invece le cose cambiano leggermente. Quando lanci JOSM verranno creati due livelli, uno contiene i contorni dei task che necessitano di validazione (il suo caricamento in OSM è inibito) e uno da utilizzare per l'editing che sarà però vuoto. **Non verranno automaticamente scaricati dati da OSM**.

![multiple][]

Userai i contorni dei task per scaricare da OSM i dati nel livello abilitato all'editing e validerai i dati come fai normalmente.

Dopo avere concluso la validazione hai tre opzioni: Segna tutti come Validi, Segna tutti com non Validi e Ferma la Validazione. Se hai selezionato diversi task in contemporanea e li hai segnati come in corso di validazione, l'opzione che scegli si applica a tutti, ovvero non puoi segnarne alcuni come validi e altri no.

Se hai la necessità di segnare i task con differenti stati dopo averli revisionati, puoi solo effettuare la validazione di un task alla volta.


## Altri elementi relativi alla Validazione

1. **Scheda Domande e commenti** - In questa versione serve per domande e commenti inerenti al progetto. I validatori dovrebbero controllarlo e se necessario rispondere alle domande. I validatori possono usare anche il link "Contatta il Gestore del Progetto" per indirizzare domande e commenti a chi ha creato il progetto.

2. **Lista dei commenti del singolo task** - il bottone Attività e Statistiche nell'angolo in alto a destra della mappa dei task presenta ora una lista di tutti i commenti lasciati sui singoli task. I validatori dovrebbero controllarla per aiutare nel risolvere problemi e rispondere alle domande.

[profile]: /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]: /images/coordination/tm3_wnv_multiple.png