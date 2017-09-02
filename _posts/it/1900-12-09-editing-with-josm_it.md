---
layout: doc
title: Editare i dati
permalink: /it/josm/editing-with-josm/
lang: it
category: josm
---

Editare i dati
==================

> Questa guida può essere scaricata come [josm_editing-with-josm_it.odt](/files/josm_editing-with-josm_it.odt) oppure [josm_editing-with-josm_it.pdf](/files/josm_editing-with-josm_it.pdf)  
> Reviewed 2015-07-13  

Abbiamo finora coperto tutti i passi base di mappatura con OpenStreetMap.
Nel capitolo [Mapping with a Smartphone, GPS or Paper](/en/mobile-mapping/) è illustrato come mappare una zona utilizzando strumenti mobili.  

In  questo capitolo torneremo su JOSM e vedremo alcune
caratteristiche non ancora illustrate.

I livelli in JOSM
-----------
Se ci hai seguito fin qui, avrai notato che possiamo aggiungere ogni sorta
di cose a JOSM. Possiamo scaricare dati OSM, aggiungere lo sfondo di immagini satellitari di Bing,
caricare tracce e punti GPS, aggiungere Field Paper; tutti mostrati nella
finestra della mappa di JOSM.

Avrai anche notato che ogni volta che aggiungi qualcosa a JOSM, una
nuovo oggetto appare il pannello "Livelli" (oppure "Layers") nella parte destra. In base a cosa
hai aperto, il tuo pannello "Livelli" dovrebbe esere simile a questo:

![Layers panel][]

Ogni oggetto rappresenta una differente origine dei dati che
vedi nella finestra della mappa. In questo esempio “Data Layer
1" sono i dati di OpenStreetMap che vogliamo editare.  "Field Papers” è
il livello creato quando hai aggiunto i Field Paper in JOSM.

Se aggiungi le immagini satellitari di Bing, apparirà un nuovo livello nel pannello, chiamato "Bing Sat".

L'idea dei livelli può essere è difficile da capire. Puoi immaginare che
un livello sia un foglio di carta semi trasparente e che tutti siano impilati uno
sull'altro. Ogni foglio di carta riporta alcuni tipi di informazioni e puo' essere risistemato
come vuoi.

I livelli usati come riferimento, come le immagini satellitari, le tracce GPS e i Field Paper
sono chiamati "livelli di base". Il livello dei dati di OSM è quello su cui lavori.

- Per spostare un livello, facci click sopra nel pannello Livelli, poi fai click sui pulsanti freccia
    in alto o in basso per spostarlo.

![Layers up down][]

- Per nascondere un livello, selezionalo col mouse e
    fai clic sul bottone Mostra/Nascondi:

![Layers show hide][]

- Dovresti veder scomparire il livello selezionato dalla finestra della mappa.
    Fai clic nuovamente sul pulsante per far riapparire il livello.
- Puoi eliminare un livello selezionandolo e utilizzado il bottone di 
    cancellazione:

![Layers delete][]

- Infine, sappi che puoi editare i dati in un livello che
    è considerato *attivo* da JOSM. Se non puoi editare la mappa nella
    finestra, è probabile che non hai il giusto
    livello attivato. Molti livelli, come i punti GPS, i 
    Field Paper o le immagini satellitari non possono essere modificati. I soli livelli modificabili
    sono quelli contenenti i dati scaricati da OpenStreetMap, che di solito appaiono col nome di
    “Data Layer 1”.
- Per attivare un livello, selezionalo nel riquadro dei livelli, poi fai clic sul
    bottone di attivazione:

![Layers activate][]


Usare il GPS e i Field Paper
-------------------------------
Nelle guide [Mappare con smartphone, GPS o carta](/it/mobile-mapping/) abbiamo visto come raccogliere dati col GPS
e i Field Paper e come caricarli in JOSM sotto forma di livello.

Ora che hai raccolto dati con uno di questi strumenti, devi ancora
aggiungere le informazioni in OpenStreetMap.

Puoi farlo col processo illustrato in precedenza: **download,
edita,salva**. La differenza è che invece di usare solo le immagini satellitari 
come livello di base, puoi anche aggiungere i tuoi dati GPS, note raccolte con Field Paper
o una combinazione di questi.

- Per esempio, se hai dei punti GPS come livello di sfondo
    in JOSM, hai salvato nel tuo GPS il punto 030 e hai
    annotato che il punto 030 è una scuola. Per aggiungerlo
    in OpenStreetMap seleziona il pulsante di disegno poi
    fai doppio click sul punto 030 nella finestra della mappa. Questo
    creerà un punto. Poi vai nel menù Preimpostazioni e cerca la preimpostazione per 
    le scuole. Inserisci il nome della scuola e fai click su "Applica preimpostaizone". Fai
    lo stesso per aggiungere linee o aree.

![GPS in JOSM][]

I Tag
----
Quando disegni un punto, una linea o un’area, la crei in un determinato luogo, ma non
fornisci altre informazioni. In altre parole, sappiamo **dove**
è, ma non **cosa** è. Prima utilizzavamo gli oggetti
del menù “Preimpostazioni” per definire **cosa** è. Il modo
grazie al quale OpenStreetMap conosce **cosa** rappresenta un oggetto è detto **tag**.

Un tag è come un’etichetta che puoi mettere su un oggetto. Per esempio, se
disegni un quadrato, è solo un quadrato. Ma se aggiungo differenti attributi
 posso descrivere cosa rappresenta l’oggetto: questo quadrato è un palazzo; il nome del
palazzo è “Menara Thamrin”; il palazzo ha 16 piani.

Puoi aggiungere al tuo oggetto quanti tag vuoi. I tag sono salvati
come una coppie di testo, chiamate **chiavi** e **valori**. In
OpenStreetMap, i tags elencati sopra sono tradotti in:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Se selezioni un oggetto in JOSM, potrai vedere tutti i tag
associati ad esso, visibili nel riquadro “Proprietà” sulla destra:

![Properties panel][]

### Editare i Tag
Puoi aggiungere, modificare o cancellare i tag dal pannello "Proprietà". Comunque i tag
sono tradizionalmente in lingua inglese e possono talvolta generare confusione, per cui
è meglio utilizzare gli oggetti del menù “Preimpostazioni”. Quando aggiungi o modifichi dei tag, gli attributi
dell'oggetto sono modificati.

- Per modificare un tag, per prima cosa selezionalo.
- Poi modifica i tag in uno dei due modi: (1) utilizzando il menù "Preimpostazioni"
    oppure (2) modificando i valori nella finestra "Proprietà" a destra. 

### Errori comuni: assegnare tag a nodi quando invece vuoi taggare linee o poligoni
Quando modifichi gli attributi di un punto, prima selezioni
il punto e poi aggiungi i tag attraverso il menù "Preimpostazioni" o direttamente
nel pannello "Proprietà". Un errore comune capita quando si vuole aggiungere attributi ad una 
linea o area. Quando selezioni un oggetto, è importante
selezionare la linea, NON i punti che la compongono.

Questo capita frequentemente perche' gli utenti usano lo strumento di selezione di  JOSM per disegnare un
rettangolo intorno a un oggetto, selezionando **tutto**: la linea e i nodi.
Quando aggiungi i tag, questi vengono applicati anche ai nodi.
Asicurati di selezionare **solo** le linee quando vuoi aggiungere dei
tag.

![Nodes mistake][]

Salvare i file OSM
----------------
Quando lavori con JOSM, è raccomandabile scaricare, modificare e
caricare i cambiamenti in un breve lasso di tempo. Non dovresti scaricare
i dati un giorno e aspettare di caricarli alcuni giorni dopo. Cosa succede
se qualcuno nel frattempo modifica la stessa area? Questo genera errori e conflitti.

Non aver paura, carica frequentemente le tue modifiche. Questo fa si che i cambiamenti vengano
registrati in un database e non rischi di perdere il tuo lavoro.

Se lavori su una singola zona, è preferibile scaricare i dati
ogni volta che intendi fare modifiche, nel caso in cui un altro utente abbia fatto cambiamenti.  

Sebbene sia preferibile scaricare i dati OSM nel momento in cui sei pronto a fare cambiamenti,
caricando frequentemente le modifiche, possono esserci casi in cui vuoi salvare
i dati OSM sul tuo computer. Per esempio se hai una connessione a Internet intermittente,
preferisci scaricarti i dati, salvarli e in un secondo momento modificarli e 
caricarli.

- Per salvare un file OSM, assicurati di avere il livello attivo nel
    riquadro “Livelli”. Fai clic su “File” nel menù principale e poi su “Salva”.
    Seleziona una directory e un nome per il file. Puoi salvare
    anche premendo il bottone seguente:

![JOSM save button][]

- Puoi chiudere JOSM e i tuoi dati saranno salvati. Quando vorrai
    aprire il file, esegui JOSM, vai nel menù “File” e
    seleziona “Apri...”.

Conclusioni
-------
n questa sezione abbiamo dato uno sguardo approfondito all'interfaccia di JOSM e visto
i livelli e i tag. Ora dovresti avere una solida conoscenza su come mappare e 
fare modifiche in OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png