---
layout: doc
title: Usare i dati OSM in QGIS
permalink: /it/osm-data/osm-in-qgis/
lang: it
category: osm-data
---

Usare i dati OSM Data in QGIS
=================


QGIS (in precedenza chiamato Quantum GIS) è un completo sistema GIS (Geographic Information System) open source e multipiattaforma. Con QIGS puoi accedere in ogni momento ai dati aggiornati di OSM, selezionare i tag che vuoi includere, ed esportarli facilmente in un database SQLite facile da usare o in formato Shapefile.  

In questo capitolo vedremo tutti i passi necessari per fare questo. Diamo per scontato che tu abbia già scaricato ed installato QGIS 2.x. Se non l'hai ancora fatto, puoi scaricarlo da <http://www.qgis.org/it/site/forusers/download.html>.  

Per caricare in QGIS i nostri livelli OSM aggiornarti e personalizzati dobbiamo per prima cosa ottenere i più recenti dati OSM nel formato raw (grezzo) **.osm**.  Successivamente convertiremo questi dati un in database SQLite, che è un ambiente per creare database molto leggeri memorizzati in un unico file dentro al tuo sistema. Infine creeremo un livello (o più livelli) che includono solo gli oggetti e i tag che ci interessano. Questi layer possono essere usati in QGIS così come sono oppure salvati in un altro formato come ad esempio shapefile.  

Accedere ai dati di OpenStreetMap
---------------------------

La prima cosa che faremo sarà reperire dei dati OSM aggiornati. Possiamo farlo in diversi modi. Ovviamente richiedere dati al server OSM, così come accade all'interno di JOSM, presenta delle limitazioni in quanto non è possibile estrarre una grande quantità di dati in una volta. In ogni caso ci sono modi per accedere a dei grandi set di dati, così come
descritto nel precedente capitolo su [Ottenere dati OSM](/it/osm-data/getting-data)  e [Usare Geofabrik e HOT Export](/it/osm-data/geofabrik-and-hot-export). Per regioni e comuni italiani puoi rivolgerti a [http://osm-estratti.wmflabs.org/estratti/](http://osm-estratti.wmflabs.org/estratti/).  

Per questo tutorial useremo le funzioni di download integrate in QGIS.  

- Apri QGIS e quindi Vettore-> OpenStreetMap->  Download dati...  
- Ci sono differenti opzioni fra cui scegliere - se la finestra sta già mostrando l'area che ti interessa, clicca il box di fianco a "Dalla mappa". Se hai un layer già caricato in QGIS che mostra l'area di interesse seleziona "Dal layer" e scegli il layer che vuoi usare. In questo caso selezioneremo "Manuale" e inserireremo la latitudine e la longitudine che formano un **rettangolo di selezione** (bounding box) attorno all'area che vogliamo accedere. Puoi inserire valori di latitudine e longitudine che vuoi, ma ricorda che l'area non può essere troppo grande o altrimenti non sarai in grado di scaricare tutti i dati.  

![bounding box][]

- Scegli un nome e una locazione in cui salvare il file in output, usando **.osm** come estensione del file, e premi OK.  
- Quando il download è stato completato apparirà una notifica. Premi "Chiudi" per uscire dalla finestra di download.  

![download complete][]

- I dati OSM sono stati salvati nel tuo computer nella locazione specificata.  

> Questa modalità di accesso ai dati OSM è la stessa usata per il donwload di dati in JOSM o su [openstreetmap.org](http://www.openstreetmap.org). Per estratti di grandi dimensioni puoi provare a scaricarli dal [sito HOT export](http://export.hotosm.org) o da [bbbike.org](http://extract.bbbike.org/). Ricorda che se scarichi un file OSM compresso devi prima decomprimerlo in formato **.osm** per poterlo usare seguendo i prossimi passi.  


Importare i dati in SQLite
---------------------------

Ora dobbiamo importare i nostri dati **.osm** raw in un file di Database SQLite.  

- Vai su Vettore -> OpenStreetMap -> Importa Topologia da XML...  
- Nel primo campo seleziona il file **.osm**  
- Puoi cambiare, se vuoi, il nome del file database proposto.  
- Il box di fianco a "Crea connessione..." deve rimanere marcato  

![import dialog][]  

- Fai click su OK.  
- Quando è terminato, clicca "Chiudi."  


Creare i livelli
--------------

Infine definiremo i layer che possono essere usati in QGIS adattandoli alle nostre esigenze.  

- Vai su Vettore -> OpenStreetMap -> Esporta Topologia in Spatialite...  
- Nel primo campo seleziona il database creato nel passo precedente  

![input db file][]  

- Sotto "Esporta tipo" seleziona il tipo di oggetti di cui vuoi creare un layer. Qui creeremo un layer usando i poligoni.  

![export type][]  

Se lo ritieni modifica il nome layer.  

Sotto "Etichette esportate" è dove avviene la magia. Qui possiamo decidere quali etichette includere nel nostro layer di output.  Questo ci dà la flessibilità di selezionare esattamente quali dati vogliamo accedere.  

- Clicca "Carica da DB" per vedere una lista di tutti i tag presenti nel database. Se serve ridimensiona la finestra "tirando" uno degli angoli. Vengono mostrati tutti i tag contenuti nei dati e il numero di oggetti per ogni tag.  
- Marca i box di fianco ai tag che vuoi includere. Selezioneremo alcuni oggetti che saranno utili per poligoni che rappresentano edifici.  

![export full][]  

- Quando hai finito premi OK e chiudi la finestra. il layer verrà automaticamente aggiunto.  

![cairo polygons][]  

Tasto destro sul layer e clicca "Apri tabella attributi".  

![open attribute table][]  

Come vedi la tabella include solo gli attributi selezionati.  

![attribute table][]  

Considera che non abbiamo creato un layer di **soli** edifici, ma uno che include tutti i poligoni presenti nei nostri dati originali che hanno i tag precedentemente selezionati. Per filtrare questo layer in modo da mostrare solo gli edifici, dobbiamo eseguire una query che estragga i soli poligoni dove building=yes.


Conclusioni
-------

Questo processo rende semplice ottenere dei dati OSM aggiornati e caricarli in QGIS. Con un layer di questo tipo in QGIS puoi salvare i dati come shapefile, filtrarli, eseguire query e così via. Per maggiori dettagli su queste funzioni vedi il menu Guida di QGIS.  


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
