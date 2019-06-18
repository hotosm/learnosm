---
layout: doc
title: TMS-, WMS- of WMTS-afbeeldingen toevoegen aan JOSM
permalink: /nl_NL/josm/josm-adding-imagery/
lang: nl_NL
category: josm
---

JOSM - Luchtfoto's toevoegen
================

> Bijgewerkt 09-09-2016  

Niet alle luchtfoto's/satellietbeelden staan in het menu Afbeeldingen van JOSM, maar het is eenvoudig toe te voegen als u de informatie voor de link weet.  

In dit voorbeeld werken we vanuit de [HOT Tasking Manager](http://tasks.hotosm.org/) en de afbeelding die is vereist om een van de projecten te kunnen voltooien dient handmatig te worden toegevoegd aan JOSM. Het principe van het toevoegen van de link is hetzelfde bij elke bewerking waar u aan werkt, zolang u de link maar heeft. Er zijn ook gelegenheden waarbij de bedoelde links niet werken zoals verwacht en zou het nodig kunnen zijn de afbeelding en handmatig toe te voegen, als u de informatie voor de link kunt verkrijgen.  

Kopieer, vanuit de tab Instructies van de Tasking Manager of uw andere bron van informatie, alles uit het gedeelte Luchtfoto's en remote sensing beelden.  

![TM Imagery][]

Ga naar het menu Voorkeuren van JOSM (**Bewerken / Voorkeuren**, of op een Apple-machine **JOSM / Preferences**)  

![Preferences WMS TMS 1][]

Klik op het pictogram ![WMS_TMS_button][]{: height="24px"} en in dit geval op het pictogram ![+TMS_button][]{: height="24px"}.  

> URL's voor TMS hebben gewoonlijk {x}{y} en {z} in zich, URL's voor WMS zijn van nature erg lang en bevatten {width} en {height}, URL's voor WMTS bevatten gewoonlijk WMTSCapabilities.xml. Als u niet zeker bent van welk soort URL voor de afbeelding u heeft, kunt u ze toevoegen als de verschillende types om te zien welke werkt.  

![Preferences WMS TMS 3][]

**Vak 1.** Plak de informatie die u kopieerde vanuit de tab Instructies van Tasking Manager in het eerste vak van het venster. JOSM zal het verifiëren en als het juist is zal het proces voor verifiëren de informatie herhalen in vak 3 (zie hieronder). Als het niet binnen een paar seconden verschijnt in vak 3, controleer dan of u niet per ongelijk enige letters mist of abusievelijk 'witruimte' heeft toegevoegd aan het begin of einde - alleen de echte link moet worden gekopieerd en geplakt.  
**Vak 2.** Dit wordt normaal gesproken leeg gelaten, tenzij u andere instructies hebt ontvangen.  
**Vak 3.** bevat nu een duplicaat van Vak 1, gegenereerd door het proces voor verificatie binnen JOSM.  
**Vak 4.** Voer een naam in voor de laag - omdat mijn afbeelding in de Tasking Manager werd vermeld als "Satellite imagery for this project is kindly provided by Digital Globe through their +Vivid service." heb ik mijn laag "Digital Globe + Vivid" genoemd.  

![Preferences WMS TMS 4][]

Klik op de knop ![OK_button][]{: height="24px"} en de afbeelding die u heeft toegevoegd zal onderaan de lijst verschijnen - u moet misschien naar beneden scrollen om hem te zien.  

![Preferences WMS TMS 5][]

Klik op de knop ![OK_button][]{: height="24px"} om het venster Voorkeuren te sluiten en terug te keren naar JOSM. Wanneer u de afbeelding wilt gebruiken, klik op het woord **Afbeeldingen** in het menu boven in het scherm en selecteer het uit de alfabetische lijst. Als alternatief zou **Alt + I** het menu Afbeeldingen moeten weergeven (Deze sneltoetsen kunnen variëren, afhankelijk van de instelling van de taal).  

![Preferences WMS TMS 6][]

**Tip** Indien de afbeelding niet wil laden, controleer dan hoe de afbeelding in de lijst verschijnt. In dit voorbeeld staat er twee maal **tms**. U kunt de link binnen JOSM bewerken zodat het slechts één keer voorkomt, wat waarschijnlijk het probleem zal verhelpen.

![TMS TMS][]

Een server voor WMS toevoegen
===========

Toevoegen van een server voor WMS is soortgelijk aan het toevoegen van een server voor TMS, met één belangrijk verschil. Servers voor WMS verschaffen gewoonlijk meer dan één laag om uit te kiezen en u dient ofwel een laag te selecteren bij het toevoegen van de server voor WMS in de voorkeuren, of specificeren dat u een laag zult selecteren om te gebruiken wanneer u de server selecteert in het menu Afbeeldingen in de hoofdinterface van JOSM.

Open, om een server voor WMS toe te voegen, het dialoogvenster voor de Voorkeuren voor de afbeeldingen in JOSM zoals hierboven weergegeven, maar klik deze keer op de knop "WMS toevoegen" ![wms_add_button][]

Het resulterende dialoogvenster zal er uitzien zoals dat hieronder:
![wms_entry_dialog_numbered][]

**Vak 1.** Voer in dit veld de URL in van de server voor WMS. Dit zou een gewone URL moeten zijn die begint met http of https  
**Knop 2.** Clik, na het invoeren van de URL, op de knop "Lagen selecteren". JOSM zal contact zoeken met de server van WMS en een lijst met beschikbare lagen ophalen vanaf die server  
**Vak 3.** Dit is waar de lijst met beschikbare lagen zal worden weergegeven. Er kunnen mappen zijn die moeten worden vergroot om de beschikbare lagen te kunnen zien  
**Keuzemenu 4.** Afbeeldingsformaat - dit zal gewoonlijk automatisch worden geselecteerd nadat u heeft geklikt op één van de lagen in **Vak 3** het zou meer dan één type afbeeldingsindeling kunnen bieden, maar gewoonlijk is de indeling jpeg of png.  
**Vak 5.** Dit wordt automatisch gegenereerd nadat u een laag selecteert in **Vak 3**. Het zal lang en gecompliceerd zijn en gewoonlijk is het gewoon goed en is het meer informatief en zou gewoonlijk niet bewerkt hoeven te worden.  
**Vak 6.** Voer een naam in voor de server of de laag. Een standaard naam zal worden ingevuld, gebaseerd op de URL, maar u kunt een meer betekenisvolle naam invoeren. Dit is de naam die zal verschijnen in het menu Afbeeldingen van JOSM  wanneer u de laag wilt toevoegen aan het lagenpaneel in de normale interface van JOSM.  

> Voorbeeld server voor WMS met veel interessante lagen: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Zorg er voor dat u echt klikt op een laag als u wilt dat het menu Afbeeldingen iedere keer dezelfde laag selecteert. In het bovenstaande voorbeeld, als de laag wordt geselecteerd in net menu Afbeeldingen, zal het altijd de laag "World Database of Protected Areas" laden.

Als u zelf elke keer zou willen kiezen welke laag te laden als u de server selecteert in het menu Afbeeldingen en in staat zult zijn om eenvoudig meerdere lagen uit de opgeslagen server te laden, selecteer dan het vak "Sla alleen het WMS-eindpunt op, selecteer lagen bij gebruik". Dat zal ook het selecteren van een laag en het verifiëren van het veld URL uitschakelen.

![wms_end_point_only_highlighted][]  

Klik op de knop ![OK_button][]{: height="24px"} en de afbeelding die u heeft toegevoegd zal onderaan de lijst verschijnen - u moet misschien naar beneden scrollen om hem te zien.  

![Preferences WMS TMS 5][]

Klik op de knop ![OK_button][]{: height="24px"} om het venster Voorkeuren te sluiten en terug te keren naar JOSM. Wanneer u de afbeelding wilt gebruiken, klik op het woord **Afbeeldingen** in het menu boven in het scherm en selecteer het uit de alfabetische lijst. Als alternatief zou **Alt + I** het menu Afbeeldingen moeten weergeven (Deze sneltoetsen kunnen variëren, afhankelijk van de instelling van de taal).  

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