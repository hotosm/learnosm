---
layout: doc
title: Primi Passi con JOSM
permalink: /it/josm/start-josm/
lang: it
category: josm
published: true
---

Primi Passi con JOSM
=============================  

> Questa guida può essere scaricata come [josm_start-josm_it.odt](/files/josm_start-josm_it.odt) oppure [josm_start-josm_it.pdf](/files/josm_start-josm_it.pdf)  
> Revisionato 2015-07-12  

Come scaricare e installare JOSM, l'editor di OpenStreetMap in Java, modificare alcune impostazioni, caricare una mappa di esempio e
imparare alcune operazioni fondamentali del programma. Ricorda nel
capitolo introduttivo quando ti abbiamo chiesto di disegnare una mappa del tuo paese o 
della tua città? Concluderemo questo capitolo disegnando nuovamente la tua mappa, questa
volta digitalmente. Dopo di che dovresti avere una buona capacità
nel disegnare le mappe in JOSM.

Scarica JOSM
-------------

- Se hai una copia di JOSM su un CD o una memoria USB puoi passare
  alla sezione successiva, Installa JOSM.
Se non hai ancora JOSM, o vuoi l'ultima versione, apri
  il tuo browser - Firefox, Chrome, Opera o Internet
  Explorer.
Nella barra degli indirizzi in alto nella finestra, scrivi
  il seguente testo e premi invio: [josm.openstreetmap.de](http://josm.openstreetmap.de)
Puoi raggiungere il sito di JOSM cercando "JOSM" con un motore di ricerca.
IL sito web dovrebbe assomigliare a questo:

  ![JOSM website][]

Se il tuo pc ha Windows, fai click su “Windows Installer” per scaricare JOSM.

  ![Windows installer][]

- Se hai un diverso sistema
  operativo, clicca sul link del tuo sistema. Il tuo download dovrebbe
  iniziare. In questo capitolo partiremo dal presupposto che tu stia usando Windows,
  ma le istruzioni fornite sono simili anche per gli altri sistemi operativi.

Installa JOSM
------------

> Potresti avere problemi a installare JOSM se Java non è già
> installato sul tuo computer. Se hai problemi,
> prova a scaricare e installare Java. Puoi scaricarlo qui:
>  [http://www.java.com/it/download/](http://www.java.com/it/download/)

>  Gli utenti Mac possono avere versioni vecchie di Java. Per favore controlla [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) su opzioni per OSX 10.6 e 10.7.3+

- Trova il file di installazione di JOSM sul tuo computer. Fai doppio clic
  per iniziare l'installazione.
- Fai clic su “OK”, “Next”, “I Agree”, e “Install”. A installazione
  completata, fai clic su “Finish” per lanciare JOSM la prima volta.
  In seguito, quando vorrai lanciare JOSM, potrai farlo facendo clic sul
  menù di Start nella parte bassa a sinistra del tuo schermo e facendo clic
  sul programma JOSM.
- Potrebbe uscire una finestra pop-up che ti richiede se vuoi aggiornare
  il software. Non dovrebbe essere necessario aggiornarlo dal momento che è nuovo.  Premi il
  bottone “Cancel”. Se non vuoi più vedere questo
  messaggio, seleziona la casella in fondo alla finestra prima di premere “Cancel”.
- Alla partenza di JOSM, dovresti vedere una finestra simile:

  ![JOSM splash page][]

Preferenze di JOSM
--------------------

Ci sono differenti impostazioni che puoi modificare in JOSM. 
Un'impostazione che vorresti sistemare è la lingua. JOSM è
stato tradotto in varie lingue e magari vorresti
lavorare con una lingua differente.

- Per cambiare le impostazioni, fai clic su Edit -\> Preferences.

  ![Preferences window][]

- Sul lato sinistro fai clic sull’icona del pennello
  che sta dipingendo.
- In alto nella finestra, fai clic sulla scheda chiamata “Look and Feel”.
- Scegli la lingua dal menù a discesa vicino alla parola
  “Language”.
  
  ![Look and feel][]

- Fai click su OK.
- E’ necessario far ripartire JOSM per confermare la tua scelta. Fai clic in alto a sinistra su “File”
  e poi su “Restart” verso il fondo del menù.

Impara il disegno di base con JOSM
-----------------------------

- Adesso apriamo un file OSM d’esempio, con il quale impareremo le
  basi di come tracciare le mappe con JOSM. Nota che questa mappa non è reale,
  cioè non è una mappa di un posto vero, quindi non caricheremo questi dati
  su OpenStreetMap.
- Scarica qui il file: [sample.osm](/files/sample.osm)
- Adesso apriamo la mappa d’esempio in JOSM. Fai click
  il bottone “Apri” in alto a sinistra.

  ![Open file][]

- Cerca il file **sample.osm**. Probabilmente è nella cartella Downloads,
  a meno che tu non l'abbia salvato da un'altra parte.  Cliccaci sopra e premi “Apri”.
- Dovresti vedere una mappa d’esempio come nella figura:

  ![Sample file][]

### Operazioni di base

- Per muovere la mappa a sinistra o a destra, su o giù, tieni premuto il tasto destro del mouse
  e muovilo.
- Ci sono molti modi per zoomare in avanti o indietro nella mappa. Se hai un
  mouse, puoi usare la sua rotellina, ad esempio. Se stai
  usando un portatile e non hai un mouse, puoi zoomare usando
  la scala nell’angolo in alto a sinistra della mappa. Trascina la barra a sinistra
  o a destra tenendo premuto il tasto sinistro del mouse e muovendo la barra a sinistra
  o a destra.

  ![Scale bar][]

- Guarda la mappa di esempio. Ci sono diversi tipi di oggetti tracciati.
  C’è un fiume, una foresta, alcuni edifici, varie strade e
  un paio di negozi. Per selezionare un oggetto, cliccaci con il tasto sinistro
  del mouse.

### Punti, linee e aree

- Quando fai clic sui differenti oggetti della mappa d’esempio, noterai che ci
  sono tre tipi di oggetti nella mappa. Ci sono punti,
  linee e aree.
- I punti sono un luogo singolo, rappresentato con simboli. Su questa
  mappa d’esempio, ci sono due punti: un negozio di scarpe e un supermercato. Il
  negozio di scarpe è rappresentato col simbolo di una scarpa mentre il supermercato è
  rappresentato da un carrello per la spesa.
- Ci sono molte linee sulla mappa, che rappresentano le strade.
   Se osservi attentamente le linee, vedrai
  che in esse ci sono dei punti. Questi punti non hanno simboli o altre
  informazioni associate, ma aiutano a definire il
  posizionamento della linea.
- In ultimo, ci sono numerose aree nella mappa d’esempio: esse rappresentano
  luoghi differenti come una foresta, un fiume e costruzioni. Un’area
  in generale rappresenta uno spazio, come campi o costruzioni. Un’area è
   esattamente come una linea; l’unica differenza è che questa linea è chiusa, inizia
  nello stesso punto dove finisce.

> E' facile pensare che una mappa può contenere tre tipi di oggetti - 
> punti, linee e aree. In OpenStreetMap c'è un termine speciale
> che imparerai ad usare in futuro. In OSM i punti sono chiamati
> **nodi** e le linee **ways**.  Un'area è chiamata **closed way**
> perchè è una linea che inizia e finisce nello stesso punto.

- Avrai notato che quando selezioni un oggetto, una lista appare alla
  destra della mappa, in una finestra chiamata “Proprietà”. Queste proprietà sono
  conosciute come tags. I tag sono informazioni collegate ad un punto, a una linea o a un’area
   che descrivono cosa sono. Impareremo di più sui tags in un successivo
  capitolo. Per ora, tutto ciò che devi sapere è che queste
  informazioni aiutano a descrivere se il tuo oggetto è una foresta, un fiume,
  una costruzione o qualcos'altro.
- Pensa a quando disegni una mappa a mano e come stai disegnando
  punti, linee ed aree. Quali altri luoghi possono essere rappresentati con
   punti, linee o aree?

### Cambiare gli oggetti

- Seleziona la foresta nella parte sinistra della mappa. Assicurati di aver fatto clic sulla
  linea intorno alla foresta, non su uno dei punti della linea. Ora
  tieni premuto il tasto sinistro del mouse mentre sposti il mouse. Dovresti
  poter muovere la foresta in un diverso luogo della mappa.
- Fai clic su uno dei punti che compongono la linea intorno alla foresta. Tieni premuto
  il tasto sinistro del mouse e sposta il mouse. Dovresti poter
  muovere il punto. In questa maniera puoi cambiare la forma dell’oggetto
  o muovere un punto.

### Disegnare

- Sul lato sinistro di JOSM c’è una colonna di bottoni. Alcuni di questi
  bottoni aprono una nuova finestra sulla destra che fornisce
  più informazioni sulla mappa. I bottoni più importanti sono
  quelli posti in alto. Questi bottoni cambiano le operazioni che puoi effettuare
  con il mouse.
- I bottoni alla cima della colonna sono quelli che userai di più.
   Essi ti permetteranno di selezionare gli oggetti e disegnarne di nuovi.
Fino ad ora, hai usato il comando di selezione, che assomiglia a
  questo:

  ![Select tool][]

- Prima di disegnare, assicurati che nulla sia selezionato.
  Fai click su un punto nero della mappa, dove è vuota, per essere sicuro
  di non aver selezionato nulla.
Fai clic sul secondo bottone, “Disegna”.

  ![Draw tool][]

- Trova una zona vuota della mappa e fai doppio clic con il mouse.
  In tal modo disegnerai un singolo punto.
- Per disegnare una linea, fai un singolo clic col mouse. Sposta il mouse e
  fai nuovamente clic. Continua fino a che non decidi di terminare la linea. Per terminare
  la linea, fai doppio clic col mouse.
- Disegna un’area con lo stesso sistema utilizzato per disegnare una linea, ma finisci
  facendo doppio clic sul punto di partenza della linea.

### Aggiungere le preimpostazioni

- Ora sai come disegnare punti, linee o aree, ma non abbiamo ancora
  definito cosa essi rappresentano. Vogliamo poter dire
  i punti sono negozi, scuole o altro oppure se le nostre
  aree rappresentano campi, costruzioni o altro.
- Fai clic sul bottone “Seleziona” nella colonna a sinistra.

  ![Select tool][]

- Seleziona uno degli oggetti che hai disegnato in precedenza. Sul
  menù in alto fai clic su “Preimpostazioni”. Spostati col mouse nei sotto-menù per scegliere
  il tipo di oggetto da rappresentare.
- Quando scegli una preimpostazione, apparirà una finestra in cui dovrai inserire
  alcune informazioni. Non è necessario compilare tutti i campi richiesti, ma almeno
  dovrai inserire alcune informazioni importanti, come il nome
  dell'oggetto.
- Quando avrai finito con l’inserimento delle informazioni, premi “Applica
  Preimpostazione”. Se tutto ha funzionato, il tuo punto, linea o area dovrebbe
  cambiare colore o mostrare un simbolo. Questo succede perché hai definito
  ciò che rappresenta.

Disegna La Tua Mappa
-----------------

- Ora disegniamo una mappa per impratichirci delle tecniche finora
  apprese. Magari vorrai ridisegnare la mappa fatta precedentemente su carta.
- Sposta la mappa lontano dalla mappa di esempio. Tieni premuto il tasto destro del mouse
  e sposta il mouse finché non troverai una zona vuota per disegnare.
- Usa il pulsante “Disegna” per creare punti, linee e aree. Descrivi
  gli oggetti disegnati selezionando le caratteristiche dal menù “Preimpostazioni”.
- Quando avrai finito, dovresti avere la tua mappa, simile alla
  mappa di esempio aperta con sample.osm.

Conclusioni
-------

Eccellente! Se tutto è andato bene dovresti aver imparato come impostare JOSM sul tuo
computer e ad usare gli strumenti di base per tracciare le mappe. Nel prossimo capitolo
approfondiremo il processo di editing della mappa OSM con JOSM.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png