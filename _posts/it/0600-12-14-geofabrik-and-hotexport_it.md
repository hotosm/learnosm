---
layout: doc
title: Usare Geofabrik e HOT Export
permalink: /it/osm-data/geofabrik-and-hot-export/
lang: it
category: osm-data
---

Usare Geofabrik e HOT Export
================

> Questa guida può essere scaricata come [Geofabrik_and_HOT_Export_it.odt](/files/Geofabrik_and_HOT_Export_it.odt) o [Geofabrik_and_HOT_Export_it.pdf](/files/Geofabrik_and_HOT_Export_it.pdf)  
> Ultima revisione 2017-09-15  

Dopo avere imparato ad aggiungere e modificare dati in OpenStreetMap (OSM), ora forse vorrai ottenere i dati come backup o per elaborarli usando un software GIS (Geographic Information System) di tipo Open Source come Quantum GIS ([www.qgis.org](http://www.qgis.org/it/)).  

Scaricare i dati OSM dal sito Geofabrik
-------------------------------------

I dati OSM data possono essere facilmente ottenuti scaricandoli da [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/)

![download-geofabrik][]

I dati sono divisi in diverse regioni. L'Indonesia può essere trovata come parte l'Asia cliccando sulla rispettiva regione nella tabella blu. La pagina apparirà così.        

![geofabrik-asia][]

Dopo che la regione Asia è apparsa in alto nella pagina, puoi vedere come questa è suddivida nei paesi che la costituiscono. Per ottenere i dati devi cliccare sullo stato Indonesiano nella tabella blu. Verrà mostrato quanto segue.  

![geofabrik-indonesia][]

Se vuoi quindi ottenere i dati Indonesiani in formato shapefile (.shp) devi cliccare sul link indonesia-latest.shp.zip e il file verrà scaricato. Ci sono differenti formati che si possono scaricare. Lo shapefile (shp) è un formato molto utilizzato che contiene layer con nodi, polilinee e poligoni.  

Puoi verificare quando il dato è stato aggiornato l'ultima volta. Nota che il server aggiorna normalmente i dati ogni 24 ore, quindi se hai appena caricato dati su OSM questi non appariranno automaticamente quando scarichi il file, ma dovrai aspettare l'aggiornamento successivo del server.  

Scaricare i dati OSM dal sito HOT-Export
--------------------------------------

Se vuoi scaricare un'area precisa con un particolare attributo puoi usare il servizio di download dei dati di HOT-Exports. Aprendo <http://export.hotosm.org/> apparirà quanto segue:  

![hot-export][]

Per ottenere i dati dal sito devi avere un account OpenStreetMap. Per crearne uno clicca su **Registrati** nell'angolo in basso a sinistra, inserisci la tua email, la password, la conferma della password e premi **Registrati**. Vedrai un messaggio tipo “A message with a confirmation link has been sent to your email address. Please open the link to activate your account.” che indica che l'account è stato correttamente creato e che hai ricevuto la mail di attivazione.  

![hot-export-account][]

Dopo effettua un login con l'account appena creato.  

![hot-export-login][]

Dopo essere entrato per ottenere i dati clicca su **New Job**, inserisci il tuo nome e una descrizione del job. Seleziona un'area usando la mappa e premi save.  

![new-export-job][]

Se vuoi puoi selezionare un file di preimpostazioni (Preset File), un file di traduzione o puoi ignorare entrambe le opzioni.  

![job-configuration][]

Il server elaborerà la richiesta in un tempo che dipende dall'area scelta e dalla capacità a disposizione del server. Puoi scegliere in che formato scaricare i dati come ad esempio Shapefile di ESRI. Tutte le richieste di download che crei appariranno nel job, quindi ogni volta che avrai bisogno di scaricare la medesima area puoi cercare lo stesso job e scaricarla di nuovo senza la necessità di cliccare su New Job.  

![job-created][]

[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export]: /images/osm-data/hot-export.png
[hot-export-account]: /images/osm-data/hot-export-account.png
[hot-export-login]: /images/osm-data/hot-export-login.png
[new-export-job]: /images/osm-data/new-export-job.png
[job-configuration]: /images/osm-data/job-configuration.png
[job-created]: /images/osm-data/job-created.png
