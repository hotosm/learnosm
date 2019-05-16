---
layout: doc
title: Ottenere dati OSM
permalink: /it/osm-data/getting-data/
lang: it
category: osm-data
---

Ottenere dati OSM
=================  

> Revisionato il 25-06-2017

Quando vuoi ottenere i dati OpenStreetMap più recenti, il modo più semplice è scaricarne un estratto da un sito web. Ci sono diversi servizi web che forniscono estratti per un'area a tua scelta.  

Scaricare estratti di dati
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) è una società specializzata nel lavorare con dati OpenStreetMap. Essi forniscono una varietà di estratti gratuiti in formato shapefile e in formato nativo OSM sul loro [sito download](http://download.geofabrik.de). Il vantaggio di scaricare dati da Geofabrik è che sono aggiornati ogni giorno, ed è facile e affidabile. Lo svantaggio è che i dati sono estratti per nazioni, e non tutte le nazioni sono disponibili. Per "l'Italia" è disponibile il servizio di [Wikimedia Italia](http://osm-estratti.wmflabs.org/estratti/) che fornisce nei formati shapefile, nativo OSM e Spatialite l'aggiornamento quotidiano degli estratti per singole regioni o singoli comuni.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) fornisce nei formati shapefiles e nativo OSM gli estratti di città del mondo, estratti settimanalmente. Questo è utile se cerchi estratti di dati di singole città.

>Ricorda che le caratteristiche in OpenStreetMap hanno un numero illimitato di tag "liberi",
>ma gli shapefiles hanno un numero limitato di colonne dove registrano gli attributi. Ciò significa
>che quando i dati OSM vengono convertiti in shapefiles, solo alcuni tag sono
>inclusi nella tabella attributi del shapefile. I siti indicati sopra forniscono shapefiles
>con un certo set di tag comuni, ma se tu vuoi estrarre tag specifici
>allora devi usare uno o più servizi specializzati indicati nella prossima sezione
>o imparare come esportare i dati da te.

Estratti personalizzati
-------------------

### Esportazioni HOT  

Lo [Humanitarian OpenStreetMap Team](http://hotosm.org) ha creato un servizio che permette agli utenti di selezionare l'area che vogliono estarre, ed usare anche le [preimpostazioni JOSM](/en/josm/josm-presets/)
per selezionare i tag utente che devono essere inclusi nell'estrazione. Il servizio è disponibile in tutti i paesi dove opera HOT su [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Tu puoi selezionare un'area di qualsiasi parte del mondo usando il servizio a [http://extract.bbbike.org/](http://extract.bbbike.org/). Lo svantaggio è che non puoi scegliere quali tag includere, inoltre la quantità di dati che puoi scaricare è limitata.  

### Overpass

Overpass è una API  (Application Programming Interface) per estrarre dati da una copia di sola lettura del database principale di OpenStreetMap che può erogare una quantità arbitraria di dati. Usando un linguaggio query puoi personalizzare quale subset di dati vuoi ottenere. Tu puoi anche usare la API generando direttamente una richiesta http o passando dall'interfaccia di overpass turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) è un generatore interattivo di query dove tu dovresti prima zoomare sulla regione appropriata della mappa (altrimenti nella query devi indicare l'aera interessata). Inserisci la tua query nel campo alla sinistra della pagina e attiva qualsiasi azione tramite i bottoni situati nella parte superiore. Se tu sei nuovo del linguaggio query puoi iniziare ad utilizzarlo usando il wizard. La wiki OSM contiene una [descrizione completa](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) della sintassi del linguaggio query e anche una [collezione di esempi](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

La mappa evidenzierà tutti i dati selezionati dalla tua query; tu puoi eventualmente modificare la query. Premi 'Esegui' per aggiornare il risultato mostrato. Quando hai ottenuto i dati che cercavi, il tasto 'Esporta' ti offre diverse scelte, tra le quali il formato nativo OSM. Se la quantità di dati è limitata tu puoi  anche accedervi direttamente dopo essere passato dalla vista mappa alla vista dati cliccando il bottone in alto sull'estrema destra della finestra. L'opzione di esportazione  *Query -> converti in (compatta) OverpassQL* genera un hyperlink da usare nella Overpass API.

![overpass turbo][]

Se vuoi costruirti una bella query per ottenere un subset di dati da un'area vasta allora è una buona idea eseguire dei test e migliorare via via la query partendo da un'area limitata. Successivamente puoi selezionare tutta l'area interessata e usare la url generata dalla query direttamente con la API. La prossima sezione ti spiega come farlo.

#### L'API Overpass

[API Overpass](http://wiki.openstreetmap.org/wiki/Overpass_API) è un servizio dedicato, ottimizzato per interrogare ma non per scrivere dati OpenStreetMap. Grazie a questa ottimizzazione è molto veloce in confronto alle api del database principale e virtualmente non ha limiti sulla quantità di dati trasferiti. Diverse istanze di questo servizio sono disponibili in rete, quello usato nell'esempio seguente fornisce anche delle informazioni sulla [sua homepage](http://overpass-api.de/)

Se avete l'url di una query per sottoporre una richiesta http alle API Overpass, allora uno strumento come [wget](https://www.gnu.org/software/wget/) - disponibile per diversi sistemi operativi,  vedi  [qui](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - ti consente di scaricare i dati nativi OSM direttamente dal server e di memorizzarli localmente. Il seguente snippet è uno script per la shell bash sui sistemi Unix che recupera tutti i dati all'interno di un dato riquadro:

```
echo latitudine angolo inferiore sinistro
read ll_lat
echo longitudine angolo inferiore sinistro
read ll_lon
echo latitudine angolo superiore destro
read ur_lat
echo longitudine angolo superiore destro
read ur_lon
echo file di output
leggi file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>Cosa succede qui (per il curioso che non vuole leggere la documentazione completa del linguaggio di interrogazione)?  
nodi(...) seleziona tutti i nodi dentro un riquadro;  
><ricorsione all'insù completa, cioè seleziona tutte le way (linee) contenente questi nodi e tutte le relazioni contenenti questi nodi e way (linee);  
>rel(br)seleziona tutte le relazioni-padre delle relazioni ottenute finora (altrimenti le relazioni superiori non sarebbero ottenute)
>



Sommario
-------  

I servizi citati in questo capitolo sono tutto ciò che l'utente medio ha bisogno per recuperare i dati OSM che vuole e per essere in grado di lavorarci con programmi GIS. Tuttavia, potresti voler imparare metodi più potenti per lavorare con gli stessi dati. I capitoli successivi di questa sezione sono molto tecnici, ma mostrano metodi avanzati per manipolare ed accedere ai dati OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png