---
layout: doc
title: Formati di file
permalink: /it/osm-data/file-formats/
lang: it
category: osm-data
---

Formati di file
=============

> Questa guida può essere scaricata come [File_Formats_it.odt](/files/File_Formats_it.odt) oppure [File_Formats_it.pdf]/files/File_Formats_it.pdf)  
> Revisionato il 05/09/2016

Come qualsiasi tipo di dato, ci sono molti metodi per salvare nel computer dati di tipo geografico. Si possono salvare all'interno di un database, ovvero sistemi in grado di salvare ed esportare dati, e all'interno dei database ce ne sono alcuni, specificatamente progettati per i dati geografici. Si può anche salvare dati geografici all'interno del computer come un file tradizionale, tuttavia esistono molti formati di file specifici per i dati geografici.   

In questa sezione passeremo in rassegna alcuni modi di immagazzinare dati geografici, spiegando come lavorano e come vengono usati normalmente.  

file .OSM
-----------

il formato di file **.osm** è specifico di OpenStreetMap. Non lo incontri altrove. Se hai mai scaricato file usando JOSM e salvandoli come file, avrai notato che il file viene salvato con l'estensione **.osm**. Se sei un utente GIS ti sarai accorto che non è facile aprire questi file usando un software come QGIS.  

Ma perchè OSM salva i dati in un formato che nessun altro usa? La risposta è che molti formati di dati geografici risalgono a prima dell'invenzione di internet, e sono progettati per accedervi velocemente e interrogarli come si interrogherebbe un database. I dati OSM invece sono progettati per poter essere trasmessi e ricevuti via internet in un formato standard. Perciò i file **.osm** sono codificati in XML, e contengono dati geografici in un formato ordinato e strutturato. Un file **.osm** se aperto con un editor di testo assomiglierebbe a questo:  

![Sample OSM XML file][]

Ottenere dati in formato  **.osm** è facile - accade ogni volta che tu scarichi dati in JOSM, ma usare questi file per analisi e costruire mappe non è semplice. Per fare ciò è meglio che converti i dati in un altro formato, o li scarichi da un servizio che li converta per te.  

>I dati grezzi OSM sono normalmente immagazzinati in file **.osm**, ma puoi trovare anche file con estensioni **.bz2** e **.pbf**. Questi sono sempre file **.osm** che sono stati compressi per salvare spazio, che può essere molto utile quando lavori con grossi file di dati.  

Shapefiles
----------

Lo **shapefile** è un formato ampiamente usato per immagazzinare dati geografici vettoriali. E' stato sviluppato dalla ESRI, la società che sviluppa ArcGIS, un popolare pacchetto di applicazioni GIS.  

In realtà gli Shapefile sono una collezione di differenti file. Per esempio, uno shapefile che contiene edifici potrebbe avere file con le seguenti estensioni:  

-	buildings.**shp**
-	buildings.**shx**
-	buildings.**dbf**

Gli Shapefile avranno spesso ulteriori file che contengono altre informazioni.  

Uno shapefile deve essere progettato per contenere un solo tipo di caratteristica (punto, linea o poligono) e ogni caratteristica ha i suoi attributi contenuti in una tabella. Contrariamente al sistema OpenStreetMap in cui ogni oggetto può avere un numero illimitato di tag, gli attributi di una caratteristica in un shapefile devono stare all'interno della struttura definita della tabella dello shapefile, che potrebbe somigliare a questa:  

![Shapefile attributes][]

I dati OpenStreetMap possono essere convertiti in shapefile. Alcuni siti forniscono shapefile convertiti da dati OSM. Questi saranno discussi nel [prossimo capitolo](/it/osm-data/getting-data).  

I database
---------

Molti tipi di informazioni vengono immagazzinate in sistemi di database, che forniscono un metodo logico per organizzare e accedere ai dati. I dati geografici non sono differenti, sebbene i database progettati per i geodati sono specializzati nel gestire funzioni complesse richieste dalle interrogazioni geografiche.    

I dati OpenStreetMap sono spesso immagazzinati in database PostgreSQL con estensioni PostGIS. Questo tipo di database fornisce un accesso veloce ai dati e può essere facilmente usato con Mapnik, un software che crea le tiles (piastrelle, mattonelle) delle mappe a trascinamento usate nel web. Esistono parecchi strumenti disponibili per importare dati grezzi OSM in un database PostgreSQL.  

Un altro tipo di database è conosciuto come SQLite, che fornisce funzionalità similari e quelle di un database PostgreSQL, ma dove tutto viene immagazzinato in un singolo file e non richiede alcun software di gestione database per poter girare. Questo tipo è leggermente più complicato da creare da sè, ma può essere più facile per lavorare con piccoli set di dati.  

Sommario
-------

Nel seguente capitolo vedremo come scaricare dati in diversi formati da internet, e come puoi usare diversi strumenti per manipolare da te questi dati grezzi.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png