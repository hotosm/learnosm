---
layout: doc
title: Gli strumenti di JOSM
permalink: /it/josm/josm-tools/
lang: it
category: josm
---

Gli strumenti di JOSM
==================

> Questa guida può essere scaricata come [josm_josm-tools_it.odt](/files/josm_josm-tools_it.odt) oppure [josm_josm-tools_it.pdf](/files/josm_josm-tools_it.pdf)  
> Revisionato il 2017-06-09  

- TOC
{:toc}

Nella guida [primi passi con JOSM](/it/josm/start-josm/) abbiamo spiegato i fondamentali del disegno in JOSM, tralasciando alcune tecniche e strumenti che andremo a spiegare.

Vedremo alcuni strumenti e tecniche fondamentali per mappare con JOSM e nei capitoli seguenti illustreremo metodi avanzati di disegno.

Scarica il file di esempio
-------------------

- Se desideri proseguire a fare pratica con gli strumenti di JOSM, scarica il file [tools_menu_sample.osm](/files/tools_menu_sample.osm).  Lancia JOSM e apri il file. Dovresti vedere questo:

![tools_menu_sample.osm][]

Strumenti di disegno
-------------

Se selezioni il menù "Strumenti" sulla barra in alto di JOSM, noterai che ci sono molte funzioni che possono aiutarti a disegnare linee, forme e a editare oggetti sulla mappa.

JOSM possiede alcuni strumenti aggiuntivi per semplificare il disegno di linee e forme. Puoi trovarli nel menù "Strumenti" sulla barra in alto di JOSM.

![Tools menu][]

Per utilizzare gli strumenti del menù, prima devi selezionare un punto, una linea o un'area nella finestra della mappa.  Il file di esempio contiene vari elementi etichettati col nome dei diversi strumenti del menù.

### Disporre i nodi in cerchio  

- Prova a selezionare uno degli elementi del file. Poi vai nel menù Strumenti e scegli la funzione associata all'elemento scelto. Ad esempio clicca sul cerchio disegnato male per selezionarlo.

![Align nodes in circle][]

- Poi, scegli Strumenti->Disponi i nodi in cerchio. Il cerchio disegnato malamente diventerà perfettamente circolare.

Sperimenta ogni strumento utilizzando il file di esempio.  Una descrizione di alcuni di questi strumenti è fornita in seguito.

### Dividi percorso  

Questo strumento permette di dividere una linea in due linee separate. E' utile se vuoi aggiungere attributi differenti a parti diverse di una strada, come ad esempio un ponte. Per usare questa funzione, seleziona un punto in mezzo alla linea che vuoi dividere, seleziona Dividi percorso dal menù Strumenti e la tua linea verrà divisa in due.


### Unisci percorso

Questo strumento fa l'opposto di Dividi percorso. Per unire due linee in una singola linea, devono condividere un singolo punto. Per utilizzare questa funzione, seleziona entrambe le linee da unire.  Puoi selezionare più di un oggetto tenendo premuto il tasto SHIFT sulla tastiera e cliccando su ogni linea.  Quando hai selezionato le due linee, seleziona Unisci percorso dal menù Strumenti.

![Combine way][]


### Inverti direzione e unisci  

Se stai unendo delle strade che hanno direzioni differenti, potresti ricevere questo avvertimento:

![Reverse and combine][]

Se le strade sono connesse e vanno nella stessa direzione, seleziona "Inverti direzione e unisci".


### Inverti la direzione dei percorsi

Questo strumento cambia la direzione della linea. Tutte le linee in JOSM hanno una direzione, mostrata dalle frecce sulla linea. Normalmente la direzione non è importante, tranne nel caso di strade a senso unico o di fiumi che scorrono in una direzione. In questi casi potrebbe essere necessario invertire la direzione della linea per farla andare nella direzione corretta. 

![Way direction][]

### Semplifica percorso

Se le linee hanno troppi punti e vorresti semplificarle, questo strumento rimuove alcuni punti da una linea. Eliminando dei punti da un percorso si introducono degli scostamenti dal percorso originale. Normalmente questo strumento è impostato per semplificare ottenendo uno scarto massimo di 3 metri rispetto al percorso originale; è possibile modificare lo scarto massimo introdotto modificando il parametro simplify-way.max-error che puoi trovare nelle Impostazioni avanzate (per accedere a questo menù occorre aver selezionato la Modalità avanzata.

![Simplify way][]


### Crea cerchio

Usa questo strumento per creare un cerchio preciso. Disegna una linea che rappresenta il diametro del tuo cerchio e poi utilizza questo strumento.

![Create circle][]


### Disponi i nodi in linea

Questo strumento allinea una serie di punti in una linea diritta.  Con linee lunghe è meglio selezionare porzioni di linea da allineare.  Fai attenzione perchè la linea tende a spostarsi un poco.

![Align nodes in line][]

### Ortogonalizza figura

Questo strumento è molto utile per disegnare forme regolari come i palazzi (**ma guarda anche  [JOSM building tools](/it/josm/josm-more-plugins/)**).  Dopo che avrai disegnato un'area, questo strumento la rimodellerà per avere gli angoli squadrati.

![Orthagonalize][]


### Disconnetti nodo da percorso

Questo strumento permette di staccare i nodi che sono connessi.  E' utile quando due oggetti condividono un nodo anche se non dovrebbero.  Ad esempio un errore comune è quando una strada condivide un nodo con un angolo di una casa.  Normalmente le strade non entrano dentro le case, è un errore, in questo modo puoi scollegare un oggetto dall'altro.

![Unglue way][]

*La linea e il nodo non sembrano separati finchè non li sposti.*

Scorciatoie da tastiera
------------------

Quando cominci a modificare da un po' di tempo, ti accorgi di sprecare molto tempo cliccando su menù e sottomenù.  Per risolvere questo problema, JOSM ha delle scorciatoie da tastiera quasi per tutto.

In pratica anzichè cliccare un oggetto e procedere in una lunga scelta di menù, puoi semplicemente scegliere un oggetto e premere un tasto sulla tastiera.

Tutti gli strumenti menzionati in precedenza hanno delle scorciatoie, che sono elencate nel menù Strumenti alla destra del nome dello strumento.  Ad esempio "O" è il
tasto per allineare i nodi in cerchio.  "L" serve per allineare i nodi in linea.  Può volerci tempo per imparare le scorciatoie, ma vedrai che 
alla fine risparmierai un sacco di tempo.

Qui ci sono altre scorciatoie (in **grassetto**) quelle più importanti. 

1.  Attivare la modalità selezione - **S**
2.  Attivare la modalità disegno - **A**
3.  Attivare il dispositivo di zoom - **Z**
4.  Cancellare gli oggetti selezionati - **CANC** (oppure **DEL*)
5.  Ingrandire - **+**
6.  Rimpicciolire - **-**


Scalare e ruotare
----------------

Una domanda comune è come ruotare una linea o ridimensionarla dopo che è stata disegnata.

Per ruotare un oggetto, per prima cosa devi selezionarlo.  Tieni premuto **SHIFT+CTRL**. Fai clic e sposta il mouse per ruotarlo.

![Rotate demo][]

Per ridimensionare un oggetto (renderlo più grande o più piccolo), fai la stessa cosa, ma tieni premuto ALT+CTRL.

Queste istruzioni sono mostrate sulla barra informativa di JOSM in basso: 

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png