---
layout: doc
title: BasicAirData GPS Logger
permalink: /it/mobile-mapping/basicairdata-gpslogger/
lang: it
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Revisionato il 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger è una semplice applicazione per registrare la tua posizione e il tuo percorso. È un registratore GPS leggero focalizzato sull'accuratezza, con un occhio al risparmio energetico. L'app è molto accurata nella determinazione dell'altitudine, quando viene abilitata la correzione automatica dell'altitudine EGM96 nelle impostazioni. Puoi registrare tutti i tuoi itinerari, visualizzarli nel tuo visualizzatore esterno preferito (deve essere installato) direttamente dall'archivio itinerari integrato, e condividerli nei formati KML, GPX e TXT in tanti modi.

L'app è disponibile per Android, libera, gratuita e Open Source.

L'applicazione è scaricabile gratuitamente su [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Come alternativa, l'APK è scaricabile direttamente dalla [repo GitHub di GPSLogger](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Caratteristiche
--------

![BasicAirData-GPSLogger-000][]

* Registrazione di itinerari - l'app non ha mappe integrate
* Un'interfaccia moderna con tema scuro a basso consumo e una visualizzazione a schede
* Registrazione in primo piano e in background (In Android 6+ è necessario disabilitare monitoraggi e ottimizzazioni della batteria per l'app)
* Creazione di annotazioni, anche durante la registrazione
* Visualizzazione delle informazioni GPS
* Correzione manuale dell'altitudine (con l'aggiunta di un offset)
* Correzione automatica dell'altitudine basata su NGA EGM96 Earth Geoid Model (da abilitare nelle impostazioni)
* Statistiche itinerario in tempo reale
* Archivio itinerari integrato, con la lista dei percorsi registrati
* Visualizzazione itinerari tramite qualsiasi visualizzatore KML/GPX installato, direttamente dall'archivio itinerari
* Esportazione itinerari nella cartella /GPSLogger del tuo dispositivo, in formato KML, GPX e TXT
* Condivisione itinerari in formato KML, GPX e TXT, via e-mail, Dropbox, Google Drive, FTP, ...
* Utilizza unità di misura metriche, imperiali o nautiche

Utilizzo di base
-----------

![BasicAirData-GPSLogger-001][]

Se la posizione GPS non è attiva sul tuo dispositivo, attivala. Poi vai in un luogo aperto e avvia GPS Logger.

1. Attendi che l'app agganci il segnale gps. Non appena trovato il segnale, la scheda __FIX GPS__ (GPS FIX) inizierà a visualizzare le coordinate del fix. A questo punto (quando possibile) è consigliabile attendere almeno un altro minuto prima di procedere con la fase successiva, al fine di consentire la stabilizzazione del segnale
2. Clicca sul bottone __Registra__ (Record) che trovi nel pannello inferiore per iniziare la registrazione dell'itinerario. Il bottone diventerà di colore rosso. Puoi interrompere e riprendere la registrazione in ogni momento cliccando su di esso. Sopra al bottone l'app mostra il numero di punti registrati.
È possibile andare nella scheda __ITINERARIO__ (TRACK) per vedere le statistiche del percorso in tempo reale.
3. Alla fine del viaggio clicca su __Stop__ per finalizzare l'itinerario attivo. Apparirà una finestra dialogo, clicca __OK__ per confermare.
4. Vai nella scheda __ARCHIVIO__ (TRACKLIST), dove troverai la traccia che hai appena registrato. Cliccando sull'itinerario apparirà un menu. Puoi scegliere di condividere l'itinerario in molti modi, visualizzarlo usando un visualizzatore esterno tra quelli installati, editarne i dettagli, esportarlo nella cartella /GPSLogger del tuo smartphone, o eliminarlo dall'archivio. I formati di esportazione sono configurabili nelle impostazioni dell'applicazione

Importazione degli itinerari GPX nell'editor di OpenStreetMap
--------------------------------------------

Terminata la raccolta dei dati sul campo, è possibile importare le tracce GPX per l'utilizzo in JOSM, iD o qualsiasi editor OpenStreetMap.
Puoi utilizzare questa semplice procedura:

1. Salva l'itinerario in formato GPX sul tuo Personal Computer in uno dei seguenti modi:
* Vai nell'archivio itinerari di GPS Logger, clicca sull'itinerario desiderato e nel menu che compare seleziona la voce __Esporta__ (Export); il file GPX verrà creato e salvato nella cartella /GPSLogger del tuo dispositivo Android (assicurati che il formato GPX sia abilitato nelle impostazioni di esportazione). Successivamente collega il tuo telefono con il PC tramite cavo USB e sposta (o copia) i files GPX usando il File Manager;
* Come alternativa, puoi utilizzare la funzione __Condividi__ (Share) per inviare l'itinerario al PC (è possibile inviare gli itinerari via e-mail, FTP, o utilizzando diversi servizi cloud). Le possibilità di condivisione disponibili dipendono dalle applicazioni installate e configurate sul tuo dispositivo Android;
2. Importa il file GPX nell'editor OpenStreetMap: l'operazione è molto semplice, è sufficiente trascinare il file e rilasciarlo nell'editor (o nella scheda del browser, per iD).

Documentazione ufficiale (in inglese)
----------------------

- Per ulteriori informazioni sull'applicazione puoi leggere [questo articolo](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
-  [Qui](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) puoi trovare una guida introduttiva e una panoramica delle impostazioni dell'app.<br>
- Problemi durante l'uso o la configurazione di GPS Logger? Leggi la sezione delle [domande più frequenti](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions)!

[BasicAirData-GPSLogger-002]: /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]: /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]: /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg