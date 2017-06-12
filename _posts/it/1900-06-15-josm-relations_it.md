---
layout: doc
title: Relazioni in JOSM
permalink: /it/josm/josm-relations/
lang: it
category: josm
---

Relazioni
==========

> Questa guida può essere scaricata come [josm_relations_it.odt](/files/josm_relations_it.odt) oppure [josm_relations_it.pdf](/files/josm_relations_it.pdf)  
> Revisionato il 2017-06-06  

Nella [Guida per Principianti](/it/beginner) abbiamo spiegato che ci sono tre tipi di oggetti che possono essere disegnati in OpenStreetMap - punti (nodi), linee (way) e poligoni (aree). Le linee contengono numerosi punti e la linea stessa contiene gli attributi che definiscono cosa rappresenta.  I poligoni sono come le linee, con la differenza che la linea deve terminare dove è cominciata in modo da formare un'area.  

In realtà ti abbiamo mentito, perchè c'è un altro tipo di oggetto in OpenStreetMap, chiamato relazione. Nello stesso modo in cui una linea consiste di vari
punti, una relazione contiene un gruppo di altri oggetti, siano essi punti, linee o poligoni.  Se stai cercando di migliorare le tue capacità di editing, allora è importante comprendere e conoscere come modificare le relazioni.  

Per esempio immagina di voler mappare un edificio che ha dei cortili al centro.  Dovresti disegnare un poligono intorno all'edificio e degli altri intorno ai cortili per far capire che questi non fanno parte dell'edificio.  Questo è un esempio di relazione.  La relazione conterrà diversi poligoni e gli attributi dell'edificio saranno inseriti nella relazione, non nei poligoni.  

![An example of a multipolygon][]

Le relazioni sono utilizzate per rappresentare qualsiasi cosa che necessiti di un insieme di oggetti per essere definito.  Altri esempi sono i percorsi degli autobus (un insieme di way), oggetti lunghi e complessi (fiumi o strade) o vari poligoni che sono parte di un unico luogo (come un complesso universitario).  

Ci sono principalmente quattro tipi di relazioni in OSM: Multipolygons, Routes, Boundaries, and Restrictions (ad esempio, vietata la svolta a sinistra). In questo paragrafo parleremo di Multipolygons e Routes.  

Creare relazioni Multipolygon
-------------------------------

Vediamo come creare una relazione multipolygon come quella mostrata sopra.  

- Per prima cosa, disegna le aree. In questo esempio disegneremo tre poligoni: uno rettangolo esterno e due più piccoli.

![Multipolygon ways][]

- Seleziona tutti i poligoni. Ricordati che puoi selezionare più di un oggetto tenendo premuto il tasto SHIFT e cliccando su ognuno.  
- Seleziona *Strumenti->Crea multipoligono* dal menù.  
- La finestra dei tag ora contiene il nuovo multipoligono.

![New mp object][]

- Fai click sul bottone Modifica.  

- Si dovrebbe aprire la finestra di modifica della relazione. La modifica è un po' più complessa perchè stai aggiungendo tag ad un insieme di linee.  

![Building relation][]

- Osserva che in cima al pannello ci sono i tag della relazione.  Questi tag funzionano allo stesso modo di tutti gli altri tag.  
- In basso c'è una lista dei membri della relazione. Questa relazione ha tre membri - cioè tre aree sono parte della nostra relazione.  
- Nota chè c'è già un tag definito, *type=multipolygon*. Abbiamo bisogno di aggiungere uno o più tag che definiscano il tipo di oggetto che la relazione rappresenta. Dobbiamo aggiungere un tag che dica *building=yes*.  
- Fai click nel riquadro dei tag e aggiungilo.  

![Building yes][]

- I **ruoli** sono già stati assegnati alle aree. Ogni membro della relazione ha un ruolo, che ne indica lo scopo.  In questo caso, il ruolo del poligono esterno deve essere definito come **outer** e il ruolo dei due poligoni interni come **inner**. Questi sono i ruoli disponibili per i membri di una relazione multipolygon.  

- Fai click su OK e la tua realzione multipolygon è completa!  

![New multipolygon][]

Quando crei una relazione multipolygon come questa verrà disegnata sulla mappa così:  

![Multipolygon in Mapnik][]

Le relazioni multipolygons possono essere usate per qualsiasi oggetto complesso che richiede poligoni interni ed esterni, come un edificio o un fiume con isole al suo interno. Informazioni dettagliate sulle relazioni multipoligono possono essere reperite sulla [Wiki di OSM](http://wiki.openstreetmap.org/wiki/IT:Relation:multipolygon).  

Relazioni di tipo Route
----------------

Le relazioni sono molto utili per rappresentare percorsi molto lunghi. Ad esempio, un percorso ciclistico o una linea di autobus coinvolgono diversi segmenti stradali.  Per definire questo percorso, possiamo creare una relazione che contiene tutti i segmenti di strada che sono parte del percorso. Caratteristiche addizionali, come ad esempio le fermate degli autobus, possono far parte della relazione.  

![Route relation][]

Vediamo come creare una relazione per una linea di autobus in JOSM:  

- Per prima cosa , seleziona tutte le way utilizzate dal perscorso. Potresti dover suddividere alcune strade in segmenti separati se solo una parte di esse appartiene alla relazione.  Puoi farlo utilizzando lo strumento "Dividi percorso".  
- Quando tutti i segmenti sono selezionati, vai a *Preimpostazioni->Trasporto->Trasporto pubblico->Linea di autobus*.  

![Public transport preset][]

- Appare una nuova finestra dove puoi inserire le informazioni relative all'intero percorso.

![New route relation][]

E' importante selezionare dal menù a discesa il corretto tipo di percorso. Per i percorsi degli autobus ci sono due possibili opzioni: autobus e filobus. Dovresti inserire anche il nome, il numero della linea, l'origine e la destinazione.

- Clicca su "Nuova relazione". Vedrai apparire la finestra della relazione, proprio come quando hai creato la relazione multipoligono.  

![Bus route relation][]

- Nota che ci sono già dei tag che definiscono la relazione come un percorso. Al posto di *type=multipolygon*, vedrai *type=route*. Abbiamo anche dei tag che la definiscono come una linea di autobus oppure come un'altro tipo di percorso.  
- Potresti chiederti quale dovrebbe essere il **ruolo** dei membri? Nel caso di un percorso non c'è bisogno di di definire i ruoli dei membri.  Lasciandoli bianchi, il software semplicemente sa che sono parte del percorso.  Potremmo definire il ruolo di ogni segmento come **route**, ma non è necessario.  
- Clicca OK e la tua relazione route sarà completa!  

> Se vuoi un elenco di tutte le relazioni sulla mappa, puoi aprire il pannello relazioni cliccando questo bottone sulla sinistra: ![relation panel button][]{: height="30px"}.  Questo aprirà un pannello dove potrai selezionare, modificare e creare nuove relazioni.  

Riassunto
-------

Le relazioni possono essere difficili da comprendere e non sono usate spesso, ma devi conoscerne i concetti fondamentali.  Ogni tanto vedrai che avrai bisogno di una relazione per mappare correttamente un oggetto e potrai usare ciò che sai, trovando altre informazioni sulla Wiki di OSM, per creare correttamente delle relazioni.  


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png