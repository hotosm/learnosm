---
layout: doc
title: Panoramica sui dati di OSM
permalink: /it/osm-data/data-overview/
lang: it
category: osm-data
---

 Panoramica sui dati di OSM
==================


> Questa guida può essere scaricata come [OSM_Data_Overview_it.odt](/files/OSM_Data_Overview_it.odt) oppure [OSM_Data_Overview_it.pdf](/files/OSM_Data_Overview_it.pdf)  
> Rivisto il 2017-07-25

<!--In questa sezione vedremo come funziona OpenStreetMap , questo ci aiuterà a capire bene come sono strutturati i dati e come possiamo utilizzarli al meglio. -->

Come funziona OSM
--------------
Vediamo come funziona OpenStreetMap. Migliaia di utenti nel mondo editano in continuazione la mappa, ma cosa c'è dietro tutto questo?  

Quando tu o un altro utente fate modifiche utilizzando un software come JOSM o iD, il software comunica col server centrale OpenStreetMap e gli notifica i cambiamenti. Su questo server risiede un enorme database che contiene le coordinate e le informazioni di ogni singolo oggetto di OpenStreetMap.  

Poichè OSM è libero e gratuito, è possibile per chiunque scaricare i dati dal database. Però, a causa della sua grandezza (*i dati raggiungono quasi i 40 GB anche se compressi*) è quasi impossibile elaborare i dati in una volta sola.  

A causa di questa limitazione, ci sono diversi metodi per **esportare** e **estrarre** dati che verranno considerati in questo capitolo. Esportare significa convertire i dati di OpenStreetMap dal suo formato nativo in un altro a te maneggiabile più semplicemente. Questo è leggermente differente da **estrarre** i dati, che significa ritagliare i dati di una specifica area. Potrebbe anche indicare l'estrazione di particolari caratteristiche di interesse da un area. Spesso questi termini sono usati come sinonimi. Conosceremo di più nel capitolo relativo ai dati di OSM.  

Usare i geodati
--------------
Se non sei un utente esperto di GIS, è importante capire la differenza tra un programma di editing come JOSM e i software GIS come QGiS (Quantum GIS) e ArcGIS.  

Editors come iD o JOSM sono molto buoni nelle loro funzionalità principali - rendendo cosi semplice la modifica di OpenStreetMap. Ma non sono software pensati per analizzare o interrogare i dati -
questa funzione è meglio implementata in altre applicazioni. I software GIS, come ad esempio il software libero ed open source [Quantum GIS (QGIS)](http://www.qgis.org/it), permette all'utente di progettare mappe dall'aspetto gradevole, cercare ed analizzare i dati e molto altro. I software GIS possono essere usati anche per editare i geodati, ma è molto più semplice editare OpenStreetMap utilizzando gli editor OSM dedicati.  

Nel prossimo capitolo approfondiremo i formati file utilizzati in OpenStreetMap e in generale per i dati geografici. Vedremo poi i vari modi di accedere e manipolare i dati OSM e come convertirli in differenti tipi di file.  


Ottenere i dati
-----------------

Tutto ciò è fantastico, ma come si estraggono i dati che interessano?  

In questo capitolo vedremo i vari modi in cui è possibile esportare dati da OSM. Ci focalizzeremo sulle nozioni base, ma ricorda che per utilizzare i dati in modo efficace probabilmente avrai bisogno di un software GIS,
così come l'applicazione libera e gratuita Quantum GIS.  

Prima di iniziare parliamo un po' di terminologia. Per prima cosa **esportare** significa convertire dati OpenStreetMap dal loro formato nativo XML in un formato adatto alle tue esigenze. Questo è leggermente diverso da **estrarre** i dati, che significa ottenere i dati da una area geografica definita a scelta, oppure prelevare da un'area oggetti con determinate caratteristiche. Useremo frequentemente questi termini in questo capitolo, quindi è importante capirne la differenza.  

Le API OSM
------------
Il processo di editing di OSM funziona grazie a quelle che vengono chiamate API, che consentono ai programmi di editing di comunicare con il server centrale. Ad esempio quando usi JOSM e selezioni un'area da mappare, una chiamata API è inviata al server per richiedere tutti i dati esistenti all'interno dell'area che hai selezionato.  

Quando scarichi dati in JOSM, stai **estraendo** dati da una specifica area del mondo. I dati ti vengono inviati in formato **.osm** che successivamente puoi editare in JOSM. Se scarichi i dati in JOSM e poi li salvi, vedrai che il tipo del file è **.osm**. Nel prossimo capitolo parleremo di questo in modo più approfondito.  
