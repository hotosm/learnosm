---
layout: doc
title: Risoluzione dei conflitti in JOSM
permalink: /it/josm/josm-conflict-resolution/
lang: it
category: josm
---

Risoluzione dei conflitti in JOSM
====================

> Questa guida può essere scaricata come [josm-conflict-resolution_it.odt](/files/josm-conflict-resolution_it.odt) oppure [josm-conflict-resolution_it.pdf](/files/josm-conflict-resolution_it.pdf)  
> Revisionato il 2017-09-15  

Talvolta lavorando con JOSM, quando carichi i tuoi bellissimi edit ottieni un brutto messaggio che si lamenta di un conflitto.  
![conflict detected][]  
E' successo che hai scaricato dei dati, in cui c'è un punto che chiamiamo Nodo A. Mentre stavi editando, qualcun altro ha scaricato il Nodo A, lo ha cambiato e ha salvato i cambiamenti in OpenStreetMap.  Adesso, quando provi a caricare la tua versione del Nodo A, questa è differente da quella presente in OSM.  Quindi JOSM non sa quale quale versione del Nodo A deve essere salvata.  

Conflitti
----------

Talvolta JOSM è capace di risolvere autonomamente i conflitti e ti darà un messaggio come questo:  
![resolved automatically][]  
Ciò significa che JOSM ha deciso autonomamente che gli oggetti nel tuo dataset locale non saranno caricati perchè sono stati già cancellati da un altro utente. In alcuni conflitti, comunque, JOSM non può prendere l'iniziativa e così lascia decidere all'utente come procedere. Tocca a te risolvere il conflitto.  

Questa segnalazione ti avvisa che devi risolvere i conflitti del Livello 1 prima di poter caricare i dati:  
![warning unresolved][]  

Questa finestra ti avvisa che probabilmente incontrerai un conflitto con le tue modifiche. Se controlli sul server sarai in grado di sistemare i problemi che potrebbero esserci:  
![check on server][]  

Questo avviso ti dice che JOSM non è riuscito a cancellare un nodo dato che è ancora utilizzato in una way. Per risolvere questo problema, l'utente deve tornare in JOSM e risolvere il conflitto prima di caricare i dati:  
![still in use][]  

Risoluzione dei conflitti
--------------------

Il processo di risolvere un conflitto è molto semplice, sebbene a prima vista possa sembrare complicato in JOSM. Di base, per ogni conflitto JOSM ti presenterà due alternative - la tua versione di un oggetto e quella che c'è sul server. Tu devi scegliere se mantenere la tua versione, o se deve rimanere la nuova versione sul server.  
Tu potresti pensare "di certo è migliore la mia versione!", e forse potresti aver ragione. Ma ripensa al nostro esempio all'inizio di questo capitolo. Magari mentre eri impegnato a fare modifiche, un altro utente ha aggiunto molte informazioni ad uno dei nodi che avevi scaricato. Se scegli la tua versione rispetto alla loro, perderai tutte le preziose informazioni che loro hanno aggiunto. Quindi dovresti considerare di mantenere la loro versione, o di integrarla con la tua.  
Quando ti compare una finestra di conflitto, è meglio scegliere il pulsante "Sincronizza ... solamente". Puoi farlo per più di un oggetto, ma è meglio risolvere i conflitti uno alla volta.  
![synchronize node][]  
Quando clicchi questo pulsante, ti comparirà una finestra che dettaglia il conflitto. Il messaggio d'errore può sembrare complicato, ma è piuttosto semplice. Saprai che tipo di conflitto è dal quadratino rosso nella linguetta in alto. Il conflitto nell'esempio sottostante si riferisce alle proprietà, quali la posizione e l'esistenza dell'oggetto. Questo è il motivo per cui sono elencate le coordinate e lo stato di cancellazione.  

**Tipi di Conflitto:**

- **Proprietà:**  L'oggetto è stato spostato (coordinate) o cancellato  
- **Etichette:**  Le etichette non corrispondono  
- **Nodi:**  C'è una differenza nella lista dei nodi delle due way  
- **Membri:**  C'è differenza nella lista dei membri di una relazione  
![properties with conflicts][]  

I conflitti appaiono solo nel caso di due modifiche contemporanee. Se ci sono tre o più conflitti, apparirà una catena di conflitti.  Dovrai quindi scegliere o unire due conflitti alla volta. Potrai scegliere la tua versione, l'altra versione o, a volte, unire le due.  

Nel seguente esempio non hai l'opzione di unire le versioni. Clicca sulla prima colonna, o Mia versione se ritieni che le tue modifiche siano corrette. Clicca su Loro versione se ritieni che le loro modifiche siano migliori.  
![conflicts resolved][]  

Una volta che hai selezionato quale versione pensi che sia migliore, clicca su "Applica Risoluzione". Comparirà ancora qualche finestra e sarai quasi pronto per caricare le tue modifiche. Fai ancora qualche modifica. poi clicca 'Carica'. Ti comparirà una finestra che dice:  
![command stack][]  

Nel tuo menù Finestre avrai una Lista Conflitti. Questa finestra visualizza un elenco di conflitti. Nella testata è visualizzato il numero totale di conflitti non risolti. Puoi selezionare o risolvere un conflitto cliccandolo. Questo è utile quando hai molti conflitti da sistemare.  
![one unresolved][]  
Non puoi caricare le tue modifiche finchè questa lista non è vuota.  

Modi per evitare i conflitti
------------------------

### Aggiornare frequentemente

Per minimizzare la possibilità ed il numero di conflitti, è importante caricare con regolarità le proprie modifiche. I conflitti avvengono con più frequenza per chi è abituato a salvare l'area su cui sta lavorando in locale ed aspetta parecchio prima di caricarla sul server. E' meglio scaricare l'area su cui si sta lavorando, modificarla e poi caricarla subito sul server. Più è lungo i'intervallo di tempo tra lo scarico dei dati ed il caricamento delle modifiche, più è probabile che qualcun altro abbia fatto altre modifiche nel frattempo. Se ti trovi ad un Mapathon e stai modificando una strada che può essere modificata anche da altri, carica molto spesso, magari ogni 6 modifiche!  

### Modifica nell'area che hai scaricato

Modificando nella specifica area che hai scaricato minimizza il rischio di conflitti. Assicurati di non fare modifiche fuori dall'area che hai scaricato. Puoi facilmente verificare in JOSM quali aree sono esterne all'area che hai scaricato, perché lo sfondo è costituito da linee diagonali invece che essere di un nero uniforme.  

![edit outside area][]  

Riassunto
--------
Quando modifichi in JOSM, rischi di incappare in conflitti. I conflitti avvengono quando un oggetto viene modificato da più persone contemporaneamente. Capendo cos'è un conflitto e come trattarlo, sarai in grado di assicurare che le modifiche migliori siano salvate in OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - NON TRADURRE
## Appendice. Conflitti più specifici

### Conflitti fra tag

Se i tag di una versione di un oggetto sono differenti da quelli di
un'altra versione, la finestra dei Conflitti mostra un ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) nella
scheda Tags. Clicca sulla scheda per mostrare una finestra per la risoluzione del conflitto fra
tags.

Sono visibili tre tabelle, da sinistra a destra:

1. Mia versione: mostra i tags della prima versione dell'oggetto parte
    di questo conflitto. Questi sono i tag della versione dell'oggetto memorizzata
    nel data set locale.
2. Versione unita: mostra i tags uniti. Questa tabella è inizialmente
    vuota.  Più conflitti fra tags risolvi più tag verrano
     mostrati in questa tabella.
3. La loro versione: mostra i tag della seconda versione dell'oggetto
    parte di questo conflitto. Questi sono normalmente i tags
    dell'oggetto memorizzato sul server.

Nell'esempio sotto entrambe le versioni hanno un tag "name". I valori nelle
due versioni dell'oggetto sono però differenti e quindi JOSM mostra
la riga con uno sfondo rosso. Il valore della prima versione è
"Secondary School". l'altra versione ha il valore"Elementary
School". Ora devi decidere quali di questi valori vuoi tenere
e quali vuoi scartare.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Cliccca sul valore che vuoi tenere, nell'esempio
quello a sinistra. Se fai doppio clic sul valore o su
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), decidi di tenere il valore e scartare il
valore opposto. La tabella al centro ora mostra il valore da tenere
e il colore di sfondo diventa verde.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Quando il bottone Applica Risoluzione è abilitato puoi rendere attiva la tua scelta.
I valori scelti verranno applicati e la finestra si chiuderà.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Risolvere le differenze nella lista di nodi di due versioni dello stesso percorso

Se vedi il simbolo ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)nella scheda Nodi devi
risolvere le differenze nella lista dei
[nodi](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)delle due
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). Ci
sono tre colonne nei rispettivi pannelli (vedi la schermata sotto):

1. la tabella più a sinistra mostra la lista dei nodi della versione locale
    dell'oggetto
2. la tabella a destra mostra la lista dei nodi sul server
    dell'oggetto
3. la tabella al centro mostra la lista dei nodi dei percorsi uniti

Inizialmente la tabella al centro è vuota. Ora devi decidere quali nodi
tenere fra quelli del dataset locale (tabella a sinistra) e quali fra quelli del
dataset del server.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### Procedura standard

La procedura standard per risolvere i conflitti nella lista di nodi di due
[versioni
dello stesso oggetto](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)si articola
in tre passi:

1. Seleziona i nodi da entrambe le versioni dell'oggetto e riordina la lista così ottenuta
    se necessario.
2. Congela la lista risultante dei nodi uniti cliccando sul bottone
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). Quando congeli la lista dei nodi uniti
    dici a JOSM che tutti i conflitti nella lista dei nodi sono risolti.
3. Applica la risoluzione

### Un metodo semplice: tieni la lista dei nodi della versione locale dell'oggetto.

Il seguente esempio mostra il metodo di lavoro da seguire quando decidi di tenere tutti i nodi nel medesimo ordine in cui sono nella versione locale dell'oggetto.

- Prima seleziona tutti gli elementi della tabella a sinistra (usando il mouse o 
    premendo Ctrl+A nella tabella)(vedi il prossimo screenshot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

- Poi clicca 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    per copiare i nodi selezionati nella tabella al centro con i nodi uniti:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

- Infine premi
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    per congelare la lista dei nodi uniti risultante:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    Il simbolo nella scheda dei nodi ora è cambiato in 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    e ora puoi applicare la scelta.

### Supporto per il confronto di liste di nodi

Può essere difficile trovare le differenze nella lista dei nodi di due versioni dello stesso oggetto, in particolare per percorsi con molti nodi.

La finestra dei Conflitti ti supporta nel trovare le differenze. Può confrontare due liste di nodi alla volta ("la mia" lista di nodi, la lista dei nodi unita e la "loro" lista dei nodi) e e può visualizzare le differenze fra loro con specifici colori di sfondo.

Dal seguente combo box puoi selezionare quale coppia di lista di nodi confrontare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1. La mia con la loro: confronta la tabella di sinistra con quella di destra
    nella finestra Conflitti
2. La mia con quella unita: confronta la tabella a sinistra con quella al centro
    nella finestra Conflitti
3. la loro con quella unita: confronta la tabella al centro con quella a destra.
    nella finestra Conflitti

In funzione della posizione di un nodo nella lista, sono usati differenti colori
per lo sfondo:

1. il nodo è solo in questa lista e non è presente nell'altra
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2. il nodo è in entrambe le liste, ma in posizioni differenti:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3. uno sfondo bianco indica che un nodo è in entrambe le liste nella stessa
    posizione.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png