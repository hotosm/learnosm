---
layout: doc
title: GPSLogger per Android
permalink: /it/mobile-mapping/gpslogger/
lang: it
category: mobile-mapping
---

GPSLogger per Android
=====================


![GPSLogger][]

Una semplice, leggera e minimalista app per registrare tracce GPS sulla piattaforma Android. L'interfaccia è di semplice utilizzo con l'unico scopo di registrare la traccia GPS e basta, sviluppata come applicazione a basso consumo di batterie che può salvare tracce gps in formato GPX, KML, NMEA o formato testo. I file ottenuti possono essere caricati su OpenStreetMap, un server OpenGTS, Dropbox, server FTP, server HTTP o inviata a un indirizzo e-mail.  

<https://f-droid.org/en/packages/com.mendhak.gpslogger/>  

GPSLogger per Android è una app di uso gratuito, ed è attivamente mantenuto come progetto open source. Le donazioni sono benvenute per migliorare ulteriormente la app. Se tu desideri essere coinvolto (ad es.: con traduzioni in altra lingua, bug reporting, o sottoponendo richieste per nuove funzioni), visita il [repository](https://github.com/mendhak/gpslogger).  

> OpenGTS si riferisce all'[Open GPS Tracking System](http://opengts.sourceforge.net/) project  


Caratteristiche
--------  

* Registrazione basata su intervalli di tempo o distanza  
* Configurazioni specifiche di risparmio batteria  
* Filtro accuratezza del GPS per non registrare punti non attendibili  
* Selezione della sorgente per l'acquisizone della posizione (wifi, celle telefoniche e/o GPS)  
* Registrazione in file GPX, KML, CSV, TXT o NMEA con supporto ZIP  
* Unità di misura metriche oppure imperiali  
* Avvio automatico  
* Può essere eseguito in background  
* Funziona bene in contemporanea con altre applicazioni GPS  
* Invio automatico via email/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS ad intervalli definiti dall'utente  
* Preconfigurazione dei file di configurazione per la distribuzione a vari utenti  


Interfaccia utente
--------------------------

![Canvass1][]

Il bottone **Menu** fornisce opzioni aggiuntive per la configurazione dell'app.  
Il **Views drop-down** permette di scegliere come visualizzare le informazioni sullo schermo.  
Il bottone **Help** fornisce informazioni aggiuntive su come usare l'app.  
Il bottone **Annotate** permette di aggiungere una descrizione ad un punto.  
Il bottone **Log one point** permette di registrare manualmente un waypoint.  
**Upload** permette di scegliere tra una varietà di opzioni per l'upload dei file. Questo include un'opzione per l'invio automatico a:  

- OpenStreetMap,  
- Google Drive,  
- DropBox,  
- un server FTP,  
- un server OpenGTS o  
- invio file ad un indirizzo email.  

Il bottone **Share** permette di scegliere uno o più file da condividere con altre persone via Bluetooth, o SMS. Dipendentemente da quali app sono installate sul tuo dispositivo, puoi avere differenti opzioni disponibili.  


![Canvass2][]

Il bottone **Start Logging** è di colore blu. Quando clicchi su di esso per iniziare la registrazione, il bottone diventa verde.  
**Coordinates** visualizza l'ultimo punto GPS, ed è aggiornato quando delle nuove coordinate sono disponibili.  
L'icona **Satellites** visualizzerà quanti satelliti sono stati utilizzati per il fix.  
**Elevation** mostra l'altitudine (elevazione).  
**Durata** mostra il tempo totale trascorso dall'ultima pressione del tasto di avvio.  
**Distance** mostra la distanza totale registrata.  
**File types** indica quali tipi di log file sono generati, mentre **File path** indica la posizione dei file sul tuo dispositivo o memory card.  
L'indicatore **Status** è verde durante la registrazione, mentre visualizza uno spinner quando il dispositivo sta cercando di ottenere un fix.  
**Accuracy** visualizza l'accuratezza dei dati registrati, che può variare dipendentemente dai ricevitori, la posizione o il numero di satelliti disponibili, le condizioni meteo, le ostruzioni dell'orizzonte.  
**Bearing** indica la direzione del movimento.  
**Speed** fornisce l'informazione approssimata di quanto veloce stiamo andando.  
**Points logged** visualizza il numero totale di punti registrati da quando è stato premuto il bottone Start.  


I menu
--------------------------

![Menus][]

In **General options** si trovano le impostazioni di *Avvio automatico*, *unità di misura* (Metriche o imperiali), *file di debug* e *informazioni sulla versione*.  

![Menus1][]

In **Logging Details** si trovano le impostazioni *Formato di file* (formati multipli sono supportati simultaneamente), *Cartella* percorso in cui vengono salvati i files di log, le regole riguardanti la *creazione dei nuovi file* e del *nome file personalizzato*.  

![Menus2][]

![Menus3][]

Under **Performance** is where the settings for *location providers*, *timings*, *filters* and *listeners* are found. The location provider option lets you set the sources for the location data: **GPS** - navigation satellites; **Network** - cellular tower; **Passive** - lets GPSLogger "borrow" the location coordinates that another app has requested, to save battery by not making the request itself.  

![Menus4][]

![Menus5][]

**Auto send, email and upload**  is where the settings for various upload options such as OpenStreetMap, Google Drive, FTP, Dropbox are found.  

![Menus6][]

Uploading GPS traces is another way of contributing data to the OpenStreetMap project. A trace is a record of your location at various time or distance intervals, and recorded as geographic coordinates (longitude, latitude, altitude). They can be used as a background layer when editing maps, and is useful for adding features to the map, similar to aerial imagery.  

#### OpenStreetMap options

![osm0][]

**Allow auto sending** settings determines whether log files are uploaded automatically.  
**Authorize this app** is for granting the app permission to upload GPS traces to OSM, using your OSM account.  
The **Visibility**, **Description**, **Tags** options are disabled until you authorize the app to upload GPS traces. These settings are used for the GPS traces that will be uploaded to the OpenStreetMap database.  
When you click the *Authorize this app*, you will be directed to your Internet browser and to the OpenStreetMap website. If you are not logged in, you will be asked for your credentials.  

![osm2][]

After logging in, you see a page like below, for verifying the app request, and the specific permission to *upload GPS traces*. Click on *Save changes* button to authorize the app.  

![osm3][]

Back to the GPSLogger app, the screen will be slightly different screen, with additional options available.

![osm1][]

Clicking on the **Clear authorization** option will remove the permission to upload GPS traces to the OSM server.  

There are several *visibility* options for GPS traces. *Private* traces are shared as anonymous, with unordered points. *Public* traces are shown in the trace listing, and as anonymous, unordered points. *Trackable* traces are shared as anonymous, with timestamps for ordered points. *Identifiable* traces are shown in the trace list, and can be associated with your username, with timestamps for ordered points.  

It is recommended that you set the visibility of the GPS traces you upload to *identifiable*. The data and metadata makes it more useful for other mappers. If you have concerns about privacy and personal security, choose a more appropriate settings, or don't upload the traces at all.  

A text *description* help others understand how a trace is recorded. A trace recorded on foot will not be similar to a trace recorded by a drone.  

A *tag* is short keyword that can be used to associate a trace with projects, places, or events.  


Data Collection
---------------

### Automated collection and uploading of gps tracks

Once properly configured, the application can run in the background and automatically record tracks and upload them once a day to any of its configured services. This would allow for the automated collection of tracks of daily driving to help build a collection of road and travel time data for later mapping or analysis. Once configured the person who has the phone or other android device should notice a little impact on battery usage and not have to do anything manually. Some experimentation will be needed to find the right balance of battery usage and clarity of the GPS tracks.  

An example config to automatically collect and upload to OpenStreetMap daily you would need to adjust these settings:  

#### General Options  

* **Start on bootup** - On  

#### Logging Details  

* **Log to GPX** - On  
* **New file creation** - Once a day  

#### Performance  

* **Time before logging** - 5  
* **Keep GPS on between fixes** - On (Turing this off can cause "jumps" in the GPS tracks while the device requires the GPS satellites each time.)  
* **Don't log if I'm not moving** - On  

#### Auto send, email and upload  

* **Allow auto sending** - On  
* **How often** - For once a day enter 1440 minutes. This setting can be a little tricky if you do not have access to data or wifi when it executes. It should start counting from when you either boot the device or hit the "Start logging" button, so if you start it in the morning, it will upload the same time the next morning for example.  
* **OpenStreetMap** - Allow auto sending on and any other settings you want to configure, pay close attention to the visibility setting if you have privacy concerns about the GPS tracks.  


### Manually Recording Traces

To start collecting logs (in Simple view), simply click on the blue button. A spinner will appear near the upper right corner of the screen to indicate the attempt to get a fix on satellites. A green circle will show in the upper right hand area to indicate logging is on going.  

To stop recording data any time, just press the green *Stop Logging* button.  

#### Annotate  

To add a note or description to a log, click on the *Annotate* (Pencil) icon. This option will let you a leave text to describe or take note of details that are associated with the current point.  

##### Calling annotation from the Notification Bar  

It's also possible to directly call the *Annotate* button from Android's Notification bar. Select the app from the Notification List and click on the *Annotate* button.  

![annotate0][]

This will display an input dialog box where you can enter the text details of the note.

![annotate1][]

#### Log intervals

Log intervals are determined by time or distance under the **Performance** menu.  

##### By time

**Time before logging** is set to 60 seconds by default. You can change this to five or ten seconds, when you are walking instead of riding in a vehicle. When you are in a car, you can set this to 1 second to generate very accurate logs.  

##### By distance

The **Distance filter** is set by default to zero. You can set this to something else, if you want to record the coordinates for every X number of units from the last point recorded.  


​Uploading traces
------------------

#### to OpenStreetMap

Press the *Upload* button and select the *OpenStreetMap* option. A dialog window will appear where files are available for selection. Choose any you want to upload and hit the *Ok* button.  

![upload0][]

#### to other options

There are other upload options you can explore, but are outside the scope of this guide. Refer to the GPSLogger for Android Project website for details.  


​Sharing traces 
---------------

You may also share the recorded traces, or your current location with other people. Sharing options may vary from one device to another, or the apps installed on a device. Below is an example of how the sharing option screen may look:  

![share0][]


Exporting traces to an OpenStreetMap editor
--------------------------------------------

When you are done recording traces, the tracks may be imported to JOSM (or another OpenStreetMap editor, like iD).  

Connect your Android device to a computer (also possible using a data cable, Bluetooth, or an Internet connection) and copy the GPX tracks and (and perhaps, multimedia files) you’ve captured.  In your device storage, look for the GPX tracks under the folder /Android/data/com.mendhak.gpslogger/files  

Using the GPX tracks with the JOSM and iD editors are easy as dragging the files and dropping them into the application (or the browser tab, for iD).  

For additional details for  iD users, see the section [Configuring the Background Layer](http://learnosm.org/en/beginner/id-editor/#configuring-the-background-layer).  

If the JOSM editor is used, you can find instructions on how to use the GPX track, along with the multimedia files in JOSM see the section [Open in JOSM](http://learnosm.org/en/mobile-mapping/using-gps/#open-in-josm).  

For other OpenStreetMap editors, please refer to your software’s documentation.  


Display Options
-----------------

The application can be displayed 3 different ways, whichever you find most appropriate for your use:

#### Visuale semplice

![view0][]

#### Visuale dettagliata

![view1][]

#### Big View

![view2][]


Conclusioni
-------

Excellent! You've been introduced to a light-weight, battery-efficient app you can keep in your Android device to record tracks, which you can upload to OSM, or use with your favorite OpenStreetMap editor.  

GPSLogger for Android is another tool for collecting field data without a dedicated GPS receiver. Casual field data collection is possible without an active Internet connection.  

Take some time to practice and familiarize yourself with the app before working with live data.  

This section introduced the concept of using GPSLogger for Android for collecting GPS traces, uploading traces to OpenStreetMap, and transferring these logs to a PC.  


Official GPSLogger for Android Documentation
--------------------------------------------

The project maintains an [FAQ](http://code.mendhak.com/gpslogger/#faq) for commonly asked questions.

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png