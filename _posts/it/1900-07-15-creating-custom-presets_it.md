---
layout: doc
title: JOSM - Creazione di preimpostazioni personalizzate
permalink: /it/josm/creating-presets/
lang: it
category: josm
---

JOSM - Creare impostazioni personalizzate
=======================


Nel [capitolo precedente](/it/josm/josm-presets) abbiamo visto come aggiungere in JOSM i menu delle impostazioni personalizzate. In questo capitolo vedrai come puoi creare un tuo file con le impostazioni personalizzate.  

ATTENZIONE! Questo è un argomento avanzato ... considerati avvisato!  

Introduzione all'XML
-------------------

Per poter creare un tuo menù personalizzato delle impostazioni, dobbiamo prima capire un linguaggio chiamato XML. Se hai già familiarità con XML puoi tranquillamente saltare alla prossima sezione.  

XML, che sta per "Linguaggio di Mark-up Estensibile" (Extensible Mark-up Language), è un linguaggio simile all'HTML. La differenza chiave è che l'XML è progettato per il trasporto dei dati, non per la sua visualizzazione. Molte applicazioni su internet utilizzano l'XML per trasmettere dati, inclusa OpenStreetMap. L'XML usa elementi, e ciascun elemento può contenere elementi "figli" al suo interno. Ad esempio immaginiamo di voler creare un file XML che contiene i dati riguardanti il menu di un ristorante. Dovremo creare un elemento radice (root element) che contiene tutti i dati riguardanti il menu. Il nostro elemento radice avrà un'etichetta (tag) di apertura ed una di chiusura, come questa:

      <menu>
      ... dati che vogliamo includere nel nostro menu ...
      </menu>

Le informazioni sono contenute all'interno di un elemento, e all'interno di ciascun elemento possono esserci altri elementi.  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>Delizioso tortino di manzo</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Riso fritto indonesiano</description>
        </item>
      </menu>

In questo esempio abbiamo inserito due &lt;item&gt; all'interno del nostro elemento &lt;menu&gt; per descrivere due differenti item che sono contenuti nel menu. Ciascun item contiene due o più elementi all'interno, &lt;cost&gt; e &lt;description&gt;. Nota anche come abbiamo scritto name=”Hamburger” all'interno dell'etichetta (tag) di apertura &lt;item&gt;. Questo è chiamato attributo, ed aggiunge informazioni riguardanti l'elemento.


### Terminologia XML

- **root element:** l'elemento più esterno di un documento XML, che descrive il contenuto del documento  
- **element:** un oggetto XML, contenuto tra etichetta (tag) di apertura e di chiusura, tipo &lt;item&gt; ... data ... &lt;/item&gt;  
- **tag:** qualcosa contenuto tra parentesi, come &lt;item&gt;. &lt;item&gt; è l'etichetta (tag) di apertura di un elemento, e &lt;/item&gt; è quella di chiusura. Da non confondere con i tags OSM, che hanno un significato differente.  
- **attribute:** un pezzo di informazione contenuto all'interno di un'etichetta (tag), come name=“Hamburger”  

L'utilizzo dell'XML per contenere e trasmettere dati è una grande cosa, perchè è semplice da capire per i computer.  


File delle preimpostazioni di JOSM
-------------------

Vediamo come aggiungere un file di preimpostazioni d'esempio in JOSM ed analizziamo come funziona.  

- Scarica il file [sample_presets.xml](/files/sample_presets.xml).  
- Poi caricalo in JOSM come descritto nel  [capitolo precedente](/it/josm/josm-presets).  
- Crea un nuovo layer ed un nuovo oggetto.  
- Vai nel menu preimpostazioni. Troverai un nuovo item nominato "Sample Building." Cliccaci sopra.  

![sample building menu][]

È possibile notare che il modulo che appare ha tre campi, ciascuno dei quali accetta un tipo differente di input. Il primo campo, building name, accetta una stringa di testo in input. Il secondo, building use, ha un menu a discesa. Il campo finale è una casella di spunta, che significa che può avere solo uno dei due valori "on" oppure "off".

![sample presets form][]

Ora diamo un'occhiata al file XML che definisce il modulo di preimpostazione.

- Trova il file XML nel tuo computer e aprilo con un editor di testi. Se stai usando Windows puoi usare il programma Notepad. Se desideri un editor più facile da usare, puoi scaricare l'applicazione gratuita Notepad++.  
- Il file **sample_presets.xml** si presenta così:  

![sample presets file][]

Per ora ignoriamo le prime sei linee e quella finale, e focalizziamoci su tutto quello che c'è tra le etichette (tags) &lt;item&gt;.

La prima linea si presenta così:

      <item name="Sample Building" type="node,closedway">

Questa è l'etichetta (tag) di apertura di un item che è stato aggiunto al menu. Ha due attributi, name e type. L'attributo name definisce come questo apparirà nel menu preimpostazioni. L'attributo type limita questa preimpostazione a specifici tipi di oggetti. In questo caso la preimpostazione può essere applicata solamente a punti e sagome - in altre parole, nodi e percorsi chiusi. Se provassimo ad applicare questa preimpostazione ad una linea, non funzionerà.  

Diamo un'occhiata alla linea successiva:  

      <label text="Building Form" />

Cliccando sul menu e aprendo il modulo di esempio, in alto è possibile vedere il testo "Building Form". Questo è il testo definito da questa linea. Questo definisce l'elemento &lt;label&gt;, che visualizza semplicemente un testo nel modulo. Il testo è definito dall'attributo *text="some text"*.  

Alcune linee più in basso troviamo questo:  

      <key key="building" value="yes" />

Questa è una delle etichette (tags) che verranno applicate all'oggetto selezionato. Visto che utilizza l'elemento &lt;key&gt;, l'etichetta qui inserita verrà automaticamente applicata non appena la preimpostazione verrà selezionata. Quindi l'oggetto otterrà automaticamente l'etichetta (tag) *building=yes*.  

La linea seguente è un po' diversa, usando l'elemento &lt;text&gt;.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

L'elemento &lt;text&gt; crea un campo vuoto. Quando il modulo viene creato in JOSM, l'utente potrà riempire i campi vuoti. Visto che il campo *delete_if_empty="true"* è selezionato, nessuna etichetta (tag) sarà aggiunta se l'utente lascia il campo vuoto.  

Il menu a discesa nel modulo è definito dalla linea seguente:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

Un menu a discesa è definito dall'elemento &lt;combo&gt;. Come per l'elemento &lt;text&gt;, l'attributo *key* definisce l'etichetta (tag) key. Il valore è quindi scelto da una lista di possibili *values*. L'attributo *display_values* permette di scegliere nomi differenti da visualizzare nel menu a discesa, che saranno più semplici da capire rispetto ai valori OSM delle etichette (tag).  

Infine, diamo un occhiata alla linea che definisce il menu a discesa.  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

L'elemento &lt;check&gt; definisce - hai indovinato! - la casella di spunta. L'attributo *default="off"* definisce che la casella è di default deselezionata. I rimanenti attributi sono già stati trattati.  

Creazione del proprio file di preimpostazioni
------------------------------

Il modo migliore per creare il proprio file di preimpostazioni è quello di prenderne uno che già esiste e modificarlo per raggiungere i propri obiettivi. Sentiti libero di utilizzare questo file di esempio per fare esperimenti per imparare le basi. Ricorda solamente che, ogni volta the salvi il file, è necessario riavviare JOSM per caricare i cambiamenti.  

Prima di iniziare a creare le proprie preimpostazioni, occorre riflettere attentamente riguardo le etichette (tags) che useremo. Inventare nuove etichette è completamente un'altro argomento. Generalmente, se già presenti, andrebbero utilizzate le etichette OSM esistenti. La maggior parte delle etichette esistenti sono elencate nella [pagina Wiki delle funzionalità della mappa](http://wiki.openstreetmap.org/wiki/Map_Features).  

Questo file di esempio contiene la maggior parte degli elementi che troverai in un file di preimpostazioni di JOSM - non contiene molti elementi nel modulo. Se vuoi sperimentare con un file di preimpostazioni più complesso, scarica il file [dhaka_presets.xml](/files/dhaka_presets.xml) da questo link.  

In aggiunta, [qui](http://josm.openstreetmap.de/wiki/TaggingPresets) puoi trovare una spiegazione dettagliata di tutti gli elementi che puoi trovare.  

Buon divertimento!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png