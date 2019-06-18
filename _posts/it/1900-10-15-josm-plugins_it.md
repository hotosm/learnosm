---
layout: doc
title: Plugin per JOSM
permalink: /it/josm/josm-plugins/
lang: it
category: josm
---

Plugin per JOSM
============

> Revisionato il 2017-06-21  

Diventando più esperto nelle tecniche di mappatura, potrebbe venirti la voglia di utilizzare funzioni aggiuntive di JOSM per migliorare le tue capacità di mappatore. JOSM ti permette di installare numerose estensioni (comunemente chiamate plugin), che aggiungono funzionalità extra al software.  

In questa sezione vedremo come installare i plugin (estensioni), e alcuni dei plugin più utili che sono disponibili.

Installare i plugin (estensioni)
-------------------
Quando vuoi installare (o rimuovere) un plugin, vai su **Modifica \> Preferenze** e clicca sulla scheda **Estensioni**.  

![Plugins][]

* Se non vedi una lista di plugin, clicca su **Scarica Lista**.  
* Per installare un plugin basta che lo selezioni cliccando nel piccolo riquadro al suo fianco, poi clicchi su OK tra i bottoni in fondo.  
* Infine, alcune versioni di JOSM ti possono chiedere il riavvio di JOSM stesso quando installi nuovi plugin.

Alcuni dei nostri plugin preferiti sono:

1. **[buildings_tools](/it/josm/josm-more-plugins/#the-buildings-tools-plugin):**Se disegni un sacco di edifici, questo plugin renderà il tuo lavoro più facile e veloce.  

2. **DirectUpload:** Se hai molte tracce GPS e le vuoi salvare nel database OSM, questo plugin facilita l'operazione.  

3. **editgpx:** Se vuoi caricare tracce GPS da un dispositivo Garmin, potresti aver bisogno di questo plugin. OSM non accetta tracce GPS che sono state salvate su una scheda di memoria esterna di un Garmin, ma questo plugin può correggere i file in modo da poter essere caricati.  

4. **fieldpapers:** Questo plugin ti consente di caricare in JOSM dei Field Paper scannerizzati.  

5. **imagery_offset_db:** Questo plugin consente di collaborare con altri mappatori che trovano le immagini satellitari di Bing leggermente disallineate. Questo argomento è trattato più dettagliatamente in un capitolo successivo.  

6. **print:** aggiunge la funzione di stampa, nel caso tu voglia stampare velocemente un’area, senza avere grosse pretese.  

7. **[utilsplugin2](/it/josm/josm-more-plugins/#more-selection-tools):** Aggiunge a JOSM parecchi strumenti e menù in più per utenti avanzati. Ne discuteremo in dettaglio nel [prossimo capitolo](/it/josm/josm-more-plugins)  



<!-- il resto di questa sezione deve essere modificato, e/o spostato in altre sezioni,
    per ora è commentato


- [Mirrored Download]({{site.baseurl}}/it/beginner/josm-plugins/#mirrored-download) (consente di scaricare più dati OSM)
- [Direct Upload]({{site.baseurl}}/it/beginner/josm-plugins/#direct-upload) (consente di caricare tracce GPS)
- [Editgpx]({{site.baseurl}}/it/beginner/josm-plugins/#edit-gpx) (consente di modificare file GPX)
- [Print]({{site.baseurl}}/it/beginner/josm-plugins/#print)

Raccomandiamo anche di scaricare questi plugin, che sono discussi in altri
capitoli:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

Prova a selezionare "Riavvia JOSM" e nota il riavvio automatico del programma.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ velocizza lo scarico dei
dati OSM per modificarli. Invece di prendere i dati dal
server centrale OSM, consente di prenderli da un "mirror", che è una replica
esatta dei dati, in una locazione più veloce da accedere.

Una volta installato il plugin (e riavviato JOSM), vedrete
una voce nuova nel menu File, "Scarica da mirror OSM..."

![Download from OSM Mirror][]

Lo scarico dei dati è esattamente lo stesso processo che avete imparato prima, ma
può essere molto più veloce!

Direct Upload
-------------

![Direct Upload][]

__DirectUpload__ carica tracce GPX direttamente su OSM
tramite JOSM (altre informazioni sono disponibili nella **Appendice**). Una volta
che il plugin è installato (e avete riavviato JOSM), vedrete
una nuova voce "Carica tracce" nel menu "Strumenti".

![Upload Traces Item][]

Quando cliccate sul pulsante "Carica tracce" comparirà questa finestra:

![Upload Traces Window][]

Scrivete le parole chiave (separate da virgola, senza spazi) relative alla vostra
traccia GPS nel riquadro "Etichette (separate da virgola)". Per esempio,
"Nazione,regione,città,quartiere,nome strada". Indicate poi una
descrizione delle vostre etichette. Una lista a scorrimento vi consentirà di riutilizzare
precedenti etichette e descrizioni. Infine, scegliete il tipo di visibilità che 
volete dare alla vostra traccia. Ci sono quattro livelli da privato a 
identificabile (tutte spiegate più avanti in [Appendix]{{site.baseurl}}/learnosm/it/).

Clicca su Carica Traccia. Se non siete connessi al vostro account OSM, 
fatelo ora.

Una volta caricato con successo, l'area Testo visualizzerà l'esito "OK"
ed il pulsante "Carica Traccia" non sarà selezionabile. Ulteriori informazioni
relative a questo plugin ed ai caricamenti GPS sono disponibili in  [Appendix]({{site.baseurl}}/learnosm/en/).

Edit gpx
--------

![Edit Gpx][]

**EditGpx** consente di aggiustare tracce registrate GPX
prima di caricarle in OSM. Sovente le tracce hanno delle parti che
volete rimuovere. Quindi questo plugin cancella dei punti delle tracce in 
modo veloce ed elimina i marcatori di data-ora da una traccia.

Una volta installato il plugin (e riavviato JOSM), vedrete
questo nuovo strumento nella barra degli strumenti sulla sinistra.

![Edit Gpx Tool Icon][]

1. Apri un file GPX in JOSM!

![Open GPX File][]

2. Selezionate il nuovo pulsante nella barra dei pulsanti a sinistra 

![Edit Gpx Tool Icon][]

e i dati gpx saranno importati in un nuovo livello EditGpx. Ogni
nodo della traccia sarà evidenziato in giallo.

![GPX Nodes All][]

3. Ora marca i punti (cliccandoli) o le aree (disegnandogli un rettangolo
intorno) che volete cancellare. L'evidenziazione in giallo
scompare.

![GPX Nodes Selected][]

4. Clic con il pulsante destro sul nome del livello e scegliete \<\<Convert to GPX layer\>\> 
nel menu \<\<Context\>\>.

5. Ora potete salvare come file il livello normale GPX oppure caricare i dati su
OSM (per es. usando il 
plugin [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![Print Plugin][]

Se volete un modo veloce e facile per stampare una mappa mentre state modificando in
JOSM, installate il __plugin print__. Anche se non potrete
fare niente di ricercato con queste stampe, è un buon modo per fare stampe
 velocemente e facilmente. Una volta installato il plugin, una nuova voce
"Stampa..." sarà disponibile nel menù FIle.

![Print Menu Item][]

Selezionando questa voce si aprirà la finestra di stampa, qui riportata:

![Print Dialog][]

Qui potete cambiare le impostazioni della stampante. Se non vedete niente
sulla pagina, selezionate la casella di "Anteprima Mappa" sulla destra. Zoomate di più
o di meno sulla mappa cambiando il numero nel riquadro "Scala". Aumentate la
risoluzione cambiando il numero dopo "ppi". Quando avete finito
di modificare le impostazioni, selezionate "Stampa".

Conclusioni
-------

Ci sono vari plugin utili, disponibili in JOSM. Continuate pure a
a esplorare tra i molti altri plugin. Come avete già visto, il
menu Preferenze ha una breve descrizione di ogni plugin, e potete
aprire una pagina web con più informazioni selezionando il link
"Altre info..." dopo la descrizione.

![More Info Link][]

Buona fortuna!

Appendice
--------

Dettagli DirectUpload
--------------------

![Direct Upload Plugin][]

Aggiungere le vostre tracce GPS e waypoint sul server OSM è utile per
molte ragioni.
__(Se non volete che altri vedano le vostre tracce GPX tralasciate questo capitolo. Potete semplicemente visualizzare i vostri file GPX con JOSM, perciò salvateli localmente).
Innanzi tutto, le tracce GPS sono il modo più utile per raccogliere e 
georeferenziare oggetti in OSM. Vedi [Aerial Imagery](/in/josm/aerial-imagery/)
Le unità GPS hanno un'accuratezza maggiore delle foto satellitari e perciò sono
uno strumento utile per controllare quanto scarto hanno le immagini satellitari. Usando
molte tracce GPS (più ce ne sono più aumenta la capacità di
determinare l'accuratezza della geolocazione) consente di stabilire se l'immagine
di sfondo è disallineata.

Caricare le tracce sul server consente una condivisione maggiore di informazione.
Consente a chi non ha accesso alla zona, semplicemente perché
non vive in quell'area oppure non ha strumenti GPS,
di supportare la digitalizzazione. Ci sono due modi di caricare le vostre
tracce: 1) con il plugin di JOSM oppure 2) sul sito web principale di OSM.

Nota: I waypoint GPS non possono essere caricati direttamente nel database OSM.
Possono comunque essere convertiti in tracce e quindi essere caricati temporaneamente,
per esempio per poter essere visualizzati come oggetti di sfondo in Potlatch.

Dopo aver aperto in JOSM il vostro file GPX selezionate GPS
nella barra dei menù e selezionate "Carica tracciati". Descrivete il file GPX,
specificate delle etichette, e la visibilità. Per la visibilità, potete scegliere tra
privata, tracciabile, pubblica o identificabile.

1.  **Identificabile**: La vostra traccia sarà mostrata pubblicamente nelle Vostre
    tracce GPS e nella lista delle tracce GPS pubbliche. Altri utenti possono
    scaricare la traccia e collegarla al vostro nome utente. Anche i
    marcatori data-ora dei punti saranno disponibili tramite le API
    GPS pubbliche.

2.  **Pubblica**: La vostra traccia sarà mostrata pubblicamente nelle Vostre tracce GPS
    e nella lista delle tracce GPS pubbliche. Altri utenti possono
    scaricare la traccia dalla lista delle tracce pubbliche, compresi i marcatori
    di data-ora. Però i dati mostrati nelle API non referenziano
     la vostra pagina delle tracce, né sono disponibili i marcatori di data-ora, anche se i punti
    sono ordinati cronologicamente.

1. **Tracciabile**: La traccia **non** comparirà in nessuna lista
    pubblica, ma i punti della traccia saranno ancora disponibili tramite le
    API GPS **con i marcatori di data-ora**. Altri utenti potranno
    scaricare i punti della traccia che però non saranno a te 
    associabili .

2. **Privata**: La traccia **non** comparirà in nessuna lista
    pubblica. I punti della traccia saranno disponibili in ordine cronologico
    tramite le API GPS pubbliche **senza marcatori di data-ora**.

![DirectUpload Traces Options][]

Caricamento online delle tracce GPS
---------------------------

1. Andate 
su [http://www.openstreetmap.org/](http://www.openstreetmap.org/) e collegatevi con il vostro nome utente.

2. Selezionate "Tracciati GPS" nel banner a sinistra.

![Left Banner][]

3. Selezionate
[carica un tracciato](http://www.openstreetmap.org/trace/create).
Da qui potete anche **vedere solo i vostri tracciati** per rivedere le tracce GPS precedenti.  

4. Cercate il vostro file in "Scegli File". Descrivetelo nella casella
Descrizione, associategli delle etichette, e scegliete il tipo di Visibilità che deve avere.
Se avete molti file .gpx potete comprimerli in un file zip e
caricare quest'ultimo. Sarà trattato come un unico, grande file gpx e sarà creata
una sola riga nella lista delle tracce. 

![Online Upload Traces Options][]

5. Selezionate *Carica*.

  Il file sarà caricato sul server OSM, e sarà aggiunto alla
coda di file in attesa di essere inseriti nel database.

[Plug Icon]: /images/josm/josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/josm/josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/josm/josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/josm/josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/josm/josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/josm/josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/josm/josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/josm/josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/josm/josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/josm/josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/josm/josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/josm/josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/josm/josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/josm/josm-plugins_image13_print-menu.png
[Print Dialog]: /images/josm/josm-plugins_image14_print-dialog.png
[More Info Link]: /images/josm/josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/josm/josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/josm/josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/josm/josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/josm/josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/josm/josm-plugins_image00_plug-icon.png
