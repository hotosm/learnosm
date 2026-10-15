---
layout: doc
title: plugin JOSM Building Tools & Utilsplugin2 
permalink: /it/josm/josm-more-plugins/
lang: it
category: josm
---

plugin JOSM Building Tools & Utilsplugin2
============


I plugin **buildings_tools** e **utilsplugin2** aggiungono delle belle funzionalità aggiuntive a JOSM. In questa sezione vedremo da vicino quali funzionalità forniscono.  

Il Plugin **Building Tool**
--------------------------

Se non l'hai ancora fatto, installa questo plugin seguendo le istruzioni in [Plugin per JOSM](/it/josm/josm-plugins).  

![Buildings tools plugin][]

Il plugin Building Tools è molto utile per digitalizzare edifici. Ti permette di disegnare un lato di un edificio rettangolare per poi estenderne facilmente la forma. Se stai digitalizzando parecchi edifici, questo plugin ti risparmierà diversi click, e di conseguenza risparmierai tempo.  

Una volta che hai installato il plugin, vedrai un nuovo bottone sul lato sinistro di JOSM, che dovrebbe somigliare a questo: ![Buildings tools button][]{: height="29px"}

Fai partire JOSM e scarica un'area dove vuoi disegnare degli edifici.  

### Rectangular Buildings

* Seleziona il building tool, poi clicca sulla mappa per disegnare una linea.  

![Draw edge][]

* Poi estendi il mouse per disegnare e clicca nuovamente per disegnare un rettangolo.  

![Extend building][]

* Questo non solo creerà un rettangolo con soli due click, ma applica automaticamente alla forma disegnata il tag building=yes.  

### Circular Buildings

* In "More tools"->"Draw building modes" select "Set building shape to circle" or use the shortcut ALT+Z (when switchitng back to drawing rectangular buildings use ALT+R). Then draw the diameter of the building.

![Round building][]

### Edifici complessi

Puoi anche creare edifici dalla forma complessa, disegnando prima diversi edifici che si sovrappongono, per poi unirli insieme.  

* Disegna due edifici che si sovrappongono in maniera tale che formino una L.  
* Seleziona entrambi gli edifici (mantieni premuto il tasto SHIFT per selezionare più di un oggetto).  
* Vai a Strumenti -> Unisci aree sovrapposte o premi SHIFT+J sulla tua tastiera.  

![Merge buildings][]

### Modificare le impostazioni

Inoltre, puoi anche alterare le impostazioni predefinite del plugin.  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* Se stai creando molti edifici simili nelle dimensioni, puoi specificare le dimensioni di lunghezza e larghezza degli edifici, come ad esempio 6 x 10 metri (l'unità di misura è in metri).  

![Set buildings size dialog][]

* Impostando le dimensioni dovrai cliccare solo due volte per creare edifici della dimensione esatta.  

Infine, puoi cliccare sul bottone Avanzate (sempre in Dati -> Impostazioni avanzate degli edifici) se vuoi aggiungere ulteriori tag che saranno aggiunti automaticamente ad ogni edificio. Per esempio, se tutti gli edifici che disegni sono sulla stessa strada, puoi aggiungere un tag che identifica la strada, che sarà automaticamente aggiunto agli edifici che disegnerai.  

![Buildings advanced][]


Utilsplugin2
-------------

* Se non l'hai già fatto, installa questo plugin seguendo le istruzioni in [Plugin perJOSM](/it/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Dopo aver installato il plugin e riavviato JOSM, troverai un nuovo menu in alto, "Altri Strumenti".  

![More tools menu][]

Crea un nuovo livello e prova alcuni dei nuovi strumenti. Qui ne descriviamo qualcuno dei più utili:  

1. **Aggiungi nodi in corrispondenza delle intersezioni**. Questo strumento è molto utile per aggiungere i nodi mancanti alle intersezioni delle linee selezionate. E' richiesto che le strade abbiano sempre un nodo in comune quando si intersecano.  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Aggiungi etichetta della sorgente.** Questo strumento semplifica l'aggiunta dell'etichetta source (sorgente). Ricorda la sorgente che è stata specificata l'ultima volta e la aggiunge come etichetta source ai vostri oggetti. Puoi inserire la sorgente con un solo clic.  

4. **Sostituisci dimensioni e posizione.** Questo tool è ottimo se volete ridisegnare un oggetto poco dettagliato, ma volete mantenere la storia, gli attributi ed il numero ID di quell'oggetto. Per esempio, se vi imbattete in un edificio complicato e disegnato malamente, allora invece di cambiare faticosamente ogni nodo, potete disegnare l'oggetto da zero, selezionare l'oggetto vecchio e quello nuovo, e selezionare "Sostituisci dimensioni e posizione" per trasferire tutte le informazioni tra i due oggetti.  

    ![Replace geometry][]


### Altri strumenti di selezione

Anche **Utilsplugin2** fornisce altri strumenti nel menu "Selezione". Fai delle prove.  

![Selection menu][]

Uno dei nostri strumenti di selezione preferiti è **Deseleziona Nodi.** Questo strumento toglie dalla selezione tutti i nodi. Questo è utile se disegnate un rettangolo per selezionare molti oggetti, ma non volete selezionare anche i nodi contenuti in tutte le linee e forme.  

![Unselect nodes][]

Buona fortuna!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

