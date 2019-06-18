---
layout: doc
title: JOSM aggiungere immagini tms, wms o wmts
permalink: /it/josm/josm-adding-imagery/
lang: it
category: josm
---

JOSM - Aggiungere immagini aeree
================

> Revisionato il 2017-09-05  

Non tutte le immagini aeree sono incluse nel menu immagini aeree di JOSM, ma è semplice aggiungerle se ti è stato dato il link.  

In questo esempio stiamo lavorando dal [Tasking Manager HOT](http://tasks.hotosm.org/) e le immagini richieste per completare uno dei progetti devono essere aggiunte manualmente in JOSM. La procedura per aggiungere il link alle immagini è la stessa qualunque siano le modifiche a cui stai lavorando, fintanto che ti venga fornito il link. Ci sono anche dei casi in cui i link previsti non funzionano come ci si aspetterebbe e può essere necessario aggiungere le immagini manualmente.  

Dalla scheda Istruzioni del Tasking Manager, o da qualsiasi altra tua fonte, copia tutta la sezione Immagini aeree.  

![TM Imagery][]

Vai al menu Preferenze di JOSM (**Modifica / Preferenze** oppure **JOSM / Preferenze** su Mac).  

![Preferences WMS TMS 1][]

Clicca sull'icona ![WMS_TMS_button][]{: height="24px"} e, in questo caso, sull'icona ![+TMS_button][]{: height="24px"}.  

> Gli URL TMS solitamente contengono {x},{y} e {z}, gli URL WMS sono tipicamente molto lunghi e contengono {width} e {height}, infine gli URL WMTS contengono solitamente WMTSCapabilities.xml. Se non sei sicuro di che tipologia sia il tua URL puoi provare semplicemente ad aggiungerlo nei diversi modi e vedere quale funziona.  

![Preferences WMS TMS 3][]

**Box 1.** Incolla le informazioni che hai copiato dalla scheda Istruzioni del Tasking Manager nel primo box della finestra. JOSM lo verificherà e, se è corretto, sarà ripetuto nel terzo box (vedi sotto). Se entro pochi secondi non appare nulla nel box 3 controlla di non aver accidentalmente omesso delle lettere o aggiunto degli 'spazi' all'inizio o alla fine - deve essere copiato e incollato solamente il link.  
**Box 2.** QUesto viene normalmente lasciato in bianco, a meno che non ti siano state date istruzioni diverse.  
**Box 3.** Ora contiene una copia del primo box generato dal processo di verifica di JOSM.  
**Box 4.** Inserisci un nome per il livello - essendo le mie immagini accompagnate nel Tasking Manager dalla dicitura "Le immagini satellitari per questo progetto sono state gentilmente fornite da Digital Globe atrraverso il loro servizio +Vivid.", ho nominato il mio livello "Digital Globe +Vivid".  

![Preferences WMS TMS 4][]

Clicca sul pulsante ![OK_button][]{: height="24px"} e le immagini che hai aggiunto appariranno in fondo all'elenco - potresti dover scorrere verso il basso per vederle.  

![Preferences WMS TMS 5][]

Clicca sul pulsante ![OK_button][]{: height="24px"} per chiudere la finestra e tornare a JOSM. Quando devi usare le immagini clicca su **Immagini aeree** nella barra dei menu in alto e selezionale dall'elenco alfabetico. In alternativa, la combinazione di tasti **Alt + I** dovrebbe mostrare il menu Immagini aeree (queste scorciatoie potrebbero variare in base alla lingua).  

![Preferences WMS TMS 6][]

**Suggerimento** Se fallisce il caricamento dell'immagine, controlla cosa compare nell'elenco. In questo esempio **tms** compare due volte. Puoi modificare il link all'interno di JOSM in modo che compaia una sola volta, il che probabilmente risolverà il problema.

![TMS TMS][]

Aggiungere un server WMS
===========

Aggiungere un server WMS è molto simile ad aggiungerne uno TMS, con un'importante differenza. I server WMS tipicamente forniscono più livelli immagine. Quando aggiungeremo il server nelle preferenze dovremo selezionarne uno oppure specificare che verrà scelto ogni volta che selezioneremo il server dal menu Immagini aeree nella finestra principale dell'interfaccia di JOSM.

Per aggiungere un server WMS apri le impostazioni delle immagini aereedi JOSM come visto prima ma stavolta clicca sul pulsante ![wms_add_button][].

La finestra di dialogo risultante sarà simile alla sottostante:
![wms_entry_dialog_numbered][]

**Box 1.** Inserisci l'URL del server WMS in questo campo. Dovrebbe essere un classico URL che inizia per http o https.  
**Pulsante 2.** Dopo aver inserito l'URL clicca sul pulsante "Ottieni livelli". JOSM contatterà il server WMS e otterrà un elenco dei livelli disponibili sul server.  
**Box 3.** Questo è il box in cui sarà mostrato l'elenco dei livelli disponibili. Potrebbero esserci delle cartelle da espandere per vedere i livelli.  
**Menu a discesa 4.** Formato immagine - sarà impostato automaticamente dopo che avrai selezionato uno dei livelli nel **Box 3**. Generalmente il formato è jpeg o png ma potrebbe offrirne diversi.  
**Box 5.** Verrà generato automaticamente dopo che avrai selezionato uno dei livelli nel **Box 3**. Sarà lungo e complicato ma solitamente va bene e non va modificato, è più a titolo informativo.  
**Box 6.** Inserisci il nome del livello o del server. Un nome predefinito sarà inserito in base all'URL, ma puoi scegliere un nome più esplicativo. Questo sarà il nome che comparirà nel menu delle immagini aeree di JOSM quando vorrai aggiungere il livello al tuo pannello livelli dell'interfaccia di JOSM.  

> Un esempio di server WMS con tanti livelli interessanti: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Assicurati di cliccare su uno dei livelli se vuoi che l'elemento nel menu Immagini aeree carichi sempre lo stesso livello. Nell'esempio precedente, quando il livello è selezionato dal menu Immagini aeree carica sempre il livello "World Database of Protected Areas".

Se vuoi scegliere quale livello caricare ogni volta che selezioni il server dal menu Immagini aeree e poter caricare più livelli dallo stesso server in modo semplice, ti basta spuntare la casella "Memorizza solamente il punto finale del WMS". Questo disabiliterà la selezione del livello e il campo di verifica dell'URL.

![wms_end_point_only_highlighted][]  

Clicca sul pulsante ![OK_button][]{: height="24px"} e le immagini che hai aggiunto appariranno in fondo all'elenco - potresti dover scorrere verso il basso per vederle.  

![Preferences WMS TMS 5][]

Clicca sul pulsante ![OK_button][]{: height="24px"} per chiudere la finestra e tornare a JOSM. Quando devi usare le immagini clicca su **Immagini aeree** nella barra dei menu in alto e selezionale dall'elenco alfabetico. In alternativa, la combinazione di tasti **Alt + I** dovrebbe mostrare il menu Immagini aeree (queste scorciatoie potrebbero variare in base alla lingua).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg