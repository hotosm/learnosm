---
layout: doc
title: Editing con JOSM
permalink: /it/josm/editing-with-josm/
lang: it
category: josm
---

Editing con JOSM
================
Finora abbiamo parlato di tutti gli elementi costitutivi della mappatura con OpenStreetMap. 
Hai imparato come usare il GPS e Field Papers per analizzare una zona, e come  usare JOSM per modificare i punti, linee e forme che compongono la nostra mappa.
In questo capitolo torneremo ancora una volta su JOSM e impareremo alcune cose non ancora illustrate.


I livelli in JOSM
-----------------
Se ci hai seguito finora, avrai notato che in JOSM si possono aggiungere vari tipi di informazioni. Si possono scaricare i dati OSM, aggiungere immagini satellitari Bing, caricare tracce e waypoints di GPS, e aggiungere Field Papers, e tutte le informazioni vengono visualizzate nella finestra della mappa di JOSM.
Avrai notato che quando apri un file, scarichi dati o aggiungi un'immagine
di Bing, un oggetto viene aggiunto nel pannello “Livelli” sul lato destro di JOSM. Il tuo pannello dovrebbe essere simile a questo:

![Layers panel][]

Ogni oggetto rappresenta una differente origine dei dati che vedi nella finestra della mappa. In questo esempio, “Livello Dati 1” sono i dati di OpenStreetMap che stiamo editando. "Field Papers” è il livello creato quando abbiamo caricato i Field Paper in Josm.

Se aggiungi l'immagine satellitare di Bing, apparirà un nuovo livello chiamato "Bing Sat".

L'idea degli strati di informazione può sembrare di difficile comprensione. Un buon modo per immaginarlo è che ogni strato è come un foglio di carta semitrasparente, e tutti i fogli sono sovrapposti uno all'altro. Ogni foglio contiene un certo tipo di informazioni, che possono essere riorganizzate come preferisci.
I livelli utilizzati come riferimenti, come ad esempio le immagini satellitari, le tracce GPS, e i Field Papers sono spesso chiamati "livelli di base". Il livello di dati OSM è il livello di lavoro. 

- Per spostare un livello, basta cliccare su di esso nel pannello Livelli e per spostarlo cliccare sulla freccia su o giù.
![Layers up down][]
- Per nascondere un livello, selezionarlo con il mouse e  cliccare sul pulsante Nascondi / Mostra:
![Layers show hide][]
- Il livello che hai selezionato dovrebbe scomparire dalla finestra della mappa. Riclicca su Mosta/nascondi e riapparirà. 
- È possibile rimuovere il livello selezionandolo e usando il pulsante Elimina.
![Layers delete][]
- Infine, bisogna sapere che è possibile modificare solo lo strato che JOSM considera attivo. Se non riesci a modificare la mappa nella tua finestra, probabilmente non è attivo il livello giusto. Non si possono modificare la maggior parte dei livelli, come i punti GPS, Field Paper e le immagini satellitari. Gli unici livelli modificabili sono i dati di OpenStreetMap, chiamati di solito "Livello Dati 1".  
- Per rendere attivo un livello, selezionatelo nel pannello Livelli, quindi cliccate il pulsante Attiva. 
![Layers activate][]


L'uso di dati Gps e Field Paper 
-------------------------------
Nei capitoli precedenti abbiamo visto come raccogliere i dati con un GPS e con Field Paper, e come caricarli sotto forma di strato in JOSM. 
Analizzati i dati con uno di questi strumenti, devi ancora aggiungere l'informazione digitale a OpenStreetMap. 
A tale scopo, con lo stesso processo appreso in precedenza - **scarica, modifica, salva**. La differenza è che invece di utilizzare come strato base solo immagini da satellite, puoi utilizzare anche i dati GPS, Field Paper, appunti, o una combinazione di tutti.

- Per esempio, supponiamo che tu abbia come sfondo in JOSM i  waypoint GPS, hai salvato un waypoint sul tuo GPS con il nome di 030, e nel tuo notes hai scritto che 030 è una scuola. A questo punto per aggiungere questo waypoint a OpenStreetMap, dovrai selezionare lo strumento di disegno, e nella finestra della mappa fare doppio clic sul punto 030. Questo procedimento creerà un punto. Poi vai al menu Impostazioni predefinite, e trova la preimpostazione per scuola. Immettere il nome della scuola e fare clic su "Applica Preimpostazione" e ripeti per aggiungere linee e forme.
![GPS in JOSM][]


Tag
---
Quando disegni un punto, una linea o un’area, la crei in un determinato luogo, ma non fornisci altre informazioni. In altre parole, sappiamo **dove** è, ma non **cosa** è. Prima utilizzavamo gli oggetti del menù “Preimpostazioni” per definire **cosa** è.
Il modo grazie al quale OpenStreetMap conosce **cosa** rappresenta un oggetto è detto **tag**. 
Un tag è come un’etichetta che puoi mettere su un oggetto. Per esempio, se disegni un quadrato, è solo un quadrato.
Ma se aggiungo differenti tag posso descrivere cosa rappresenta l’oggetto:

 -  questo quadrato è un palazzo
 -  il nome del palazzo è “Menara Thamrin”
 -  il palazzo ha 16 piani

Puoi aggiungere al tuo oggetto quanti tag vuoi. I tag sono salvati come una coppia di testo, chiamate chiavi e valori. In OpenStreetMap, i tag elencati sopra sono tradotti in:

-  building = yes
-  name = Menara Thamrin
-  building:levels = 16

Se selezioni un oggetto in JOSM, potrai vedere tutte i tag associati ad esso, visibili nel riquadro “Proprietà” sulla destra:
![Properties panel][]

### Modificare i tag
Puoi aggiungere, modificare o cancellare questi tag da questo riquadro. I tag sono tradizionalmente in lingua inglese. È meglio quindi utilizzare gli oggetti del menù “Preimpostazioni”.
Se aggiungi o cambi dei tag, gli attributi dell'oggetto cambiano.

- Per modificare le etichette di un oggetto, in primo luogo selezionalo. 
- Poi hai due modi per modificare i tag: 
  (1) Utilizzi il menu Impostazioni predefinite, o
  (2) modifichi direttamente i tag  nella finestra Proprietà posta a destra.

### Errori frequenti: contrassegnare i nodi quando si desidera contrassegnare linee o poligoni 

Quando si modificano gli attributi di un punto, dovrai prima selezionare il punto e poi aggiungere i tag attraverso le Impostazioni predefinite del menu, oppure direttamente nel pannello Proprietà. Un errore comune si verifica quando si aggiungono attributi a una linea o una forma. Quando si seleziona l'oggetto, è importante che si selezionare la linea, e NON i punti che compongono la linea.
Questo errore si verifica frequentemente perché si utilizza lo strumento di selezione JOSM per disegnare un riquadro  attorno a un oggetto, e in quesot modo si seleziona tutto, sia la linea **sia** i nodi, e i tag aggiunti si applicano anche ai nodi. Quando vuoi aggiungere i tag verifica di aver selezionato **solo** le righe.

![Nodes mistake][]


Salvare file OSM
----------------
Quando stai modificando in JOSM, è meglio scaricare, modificare e caricare le modifiche in un lasso di tempo ragionevolmente breve. Meglio non scaricare i dati e poi attendere un paio di giorni per caricare le modifiche: che cosa succede se nel frattempo qualcun altro modifica la stessa zona? Possono verificarsi errori e conflitti. 
Non aver paura a caricare frequentemente le modifiche. Questo garantisce che le modifiche saranno salvate nel database e non perderai il faticoso lavoro fatto. 
Se lavori in una sola area, ogni volta che la vuoi modificare è buona norma che tu scarichi i dati della mappa, onde evitare che un altro utente vi apporti modifiche.
Anche se devi sempre scaricare i dati OSM quando li devi modificare, e caricare spesso le modifiche, potrebbe verificarsi il caso in cui si desidera salvare i dati OSM sul proprio computer. Ad esempio, se la connessione a internet è intermittente puoi preferire scaricare i dati, salvarli modificarli e poi caricare i cambiamenti fatti in un secondo tempo. 

- Per salvare un file OSM, accertati che sia il livello attivo del pannello Livelli. Clicca su "File" nel menu in alto, e puoi salvare cliccando su "Salva". 
- Scegliere una posizione per il file e dargli un nome. Puoi anche salvare cliccando il pulsante:
     
![JOSM save button][]

- È ora possibile chiudere JOSM e i tuoi dati saranno salvati. Quando vorrai riaprire il file, basterà aprire JOSM, andare al menù "File" e clicca "Apri ..."


Conclusioni
-----------
In questo capitolo abbiamo guardato un po' più da vicino l'interfaccia di JOSM e abbiamo imparato livelli e tag. Ora dovresti avere una base solida per mappare e modificare OpenStreetMap.
Nella parte finale di questa guida vedremo di analizzare altre risorse per fare un ulteriore passo avanti. Mentre metti in pratica quello che hai imparato fin qui ed esplori ulteriormente, costruirai con OSM mappe sempre migliori.

[Layers panel]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image00_layers-panel.png
[Layers up down]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image01_layers-panel-up-down.png
[Layers show hide]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image02_layers-panel-show-hide.png
[Layers delete]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image03_layers-panel-delete.png
[Layers activate]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image04_layers-panel-activate.png
[GPS in JOSM]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image05_gps-layer.png
[Properties panel]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image06_properties-panel.png
[Nodes mistake]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image07_nodes-selected-mistake.png
[JOSM save button]: /images/it/beginner/07_editing-with-josm/it_beg_07_editing-with-josm_image08_save-button.png
