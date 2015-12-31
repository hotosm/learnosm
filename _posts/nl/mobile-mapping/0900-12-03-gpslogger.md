---
layout: doc
title: GPSLogger voor Android
permalink: /nl/mobile-mapping/gpslogger/
lang: nl
category: mobile-mapping
---

GPSLogger voor Android
=====================

> Deze handleiding kan worden gedownload als [gpslogger_nl.odt](/files/gpslogger_nl.odt) of [gpslogger_nl.pdf](/files/gpslogger_nl.pdf)  
> Bijgewerkt 06-12-2015  

![GPSLogger][]

Een eenvoudige, lichtgewicht en minimalistische app voor het opnemen van GPS-sporen op het Android platform. De eenvoudig te gebruiken interface met als enig doel het loggen van GPS en stil blijven zorgen voor een zeer batterij efficiënte toepassing die GPS-sporen kan opslaan in de indelingen GPX, KML, NEMA of als tekstbestand. Logbestanden kunnen automatisch worden geüpload naar OpenStreetMap, een server voor OpenGTS, DropBox, FTP-server, HTTP-server of worden verzonden aan een e-mailadres.

<https://play.google.com/store/apps/details?id=com.mendhak.gpslogger&hl=en>

GPSLogger for Android is een app die gratis is te gebruiken, en een actief onderhouden project voor open bron. Donaties zijn welkom om de app verder te verbeteren. Indien u wilt deelnemen (bijv. vertalingen in andere talen wilt bijdragen, problemen rapporteren, of verzoeken voor verbetering wilt indienen), bezoek dan de [repository](https://github.com/mendhak/gpslogger).

>OpenGTS verwijst naar het project [Open GPS Tracking System](http://opengts.sourceforge.net/) 


Mogelijkheden
--------------------------
* Loggen specificeren op basis van intervallen van tijd of afstand 
* Configuraties voor sparen van batterijen specificeren
* GPS nauwkeurigheidsfilter om onbetrouwbare punten niet te loggen
* Wifi, zendmast voor mobiele telefoon en/of GPS-satellieten als bron voor locatie-informatie selecteren  
* Loggen naar bestanden van GPX, KML, CSV, TXT of NMEA met ondersteuning voor ZIP
* Imperiale of metrische eenheden voor weergave
* Automatisch starten bij booten
* Kan op de achtergrond worden uitgevoerd
* Werkt goed met andere uitgevoerde GPS-toepassingen
* Automatisch verzenden van e-mail/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS op door de gebruiker gedefinieerde intervallen
* Eenvoudig vooraf te configureren tekst configuratiebestanden om te verdelen onder vele gebruikers



Gebruikersinterface
--------------------------

![Canvass1][]

De knop **Menu** verschaft meer opties voor het configureren van de app.

De **keuzelijst Weergaven** laat u kiezen hoe informatie op het scherm wordt weergegeven.

De knop **Help** verschaft aanvullende informatie over hoe de app te gebruiken.

De knop **Annotatie** laat u een beschrijving voor een punt toevoegen.

Knop **Log één punt** laat u handmatig een punt loggen.

**Uploaden** laat u uit een variëteit aan opties kiezen voor het uploaden van uw logbestand. Dit omvat ook een optie om automatisch te verzenden naar één van de volgende: OpenStreetMap, Google Drive, DropBox, een FTP-server, een OpenGTS-server of het log te verzenden naar een e-mailadres.

De knop **Share** laat u één of meer logbestanden kiezen die u kunt delen met anderen via Bluetooth, of SMS. Afhankelijk van welke apps zijn geïnstalleerd op uw apparaat, zou u verschillende opties voor u beschikbaar kunnen hebben.


![Canvass2][]

De knop **Loggen starten** is blauw. Wanneer u op deze knop drukt om het opnemen te beginnen, wordt het een groene knop.

De **Coördinaten** geven het laatst opgenomen GPS-punt weer, en wordt vernieuwd als nieuwe coördinaten beschikbaar komen.

Het pictogram **Satellieten** zal u laten zien met hoeveel satellieten u bent verbonden.

De **Hoogte** geeft gegevens over de hoogte weer.

De **Duur** geeft de totaal verlopen tijd weer sinds er op de knop Start is gedrukt.

De **Afstand** zal de totale opgenomen afstand weergeven.

De **Bestandstypen** geven aan welke typen logs zijn gegenereerd waar het **Bestandspad** u vertelt waar de locatie is van het bestand op uw apparaat of geheugenkaart.

De indicator **Status** zal in groen aangeven wanneer wordt opgenomen, terwijl een draaivlak wordt weergegeven als het apparaat probeert een fix te verkrijgen.

De **Nauwkeurigheid** zal de nauwkeurigheid van de opgenomen gegevens weergeven, wat varieert tussen ontvangers, de positie of het aantal beschikbare satellieten, weersomstandigheden, of de obstructies van de horizon.

De **Richting** vertelt u de richting waarin u zich verplaatst.

De **Snelheid** zal u bij benadering informatie geven over hoe snel u gaat.

**Gelogde punten** zal het totale anatal punten weergeven vanaf het moment waarop werd op de knop Start werd gedrukt.


Menu's
--------------------------

![Menus][]

De **Algemene opties** is waar u instellingen vindt voor *Starten bij booten*, *meeteenheid* (Metrisch of Imperial), *debugbestand* en *versie-informatie*.

![Menus1][]


De **Logdetails** is waar u instellingen vind voor  *Bestandsindelingen* (meerdere indelingen tegelijkertijd ondersteund), *map*-pad waar logs worden opgeslagen, regels voor *maken van nieuw bestand* en *aangepaste bestandsnaam*.

![Menus2][]

![Menus3][]


Onder **Performance** is waar de instellingen voor *locatieproviders*, *tijdinstellingen*, *filters* en *luisteraars* zijn te vinden. De optie locatieprovider laat u de bronnen voor de locatiegegevens instellen: **GPS** - navigatiesatellieten; **Netwerk** - zendmasten voor telefoons; **Passief** - laat GPSLogger de locatiecoördinaten "lenen" die een andere app heeft verzocht, om de batterij te sparen door niet zelf het verzoek uit te voeren.

![Menus4][]

![Menus5][]

**Automatisch verzenden, e-mail en uploaden**  is waar de instellingen voor verschillende opties voor uploaden, zoals OpenStreetMap, Google Drive, FTP, Dropbox zijn te vinden.

![Menus6][]

Uploaden van GPS-sporen is een andere manier om gegevens bij te dragen aan het project OpenStreetMap. Een spoor is een opname van uw locatie met verschillende intervallen van tijd of afstand, en opgenomen als geografische coördinaten (longitude, latitude, altitude). Zij kunnen worden gebruikt als achtergrondlaag bij het bewerken van kaarten, en zijn nuttig voor het toevoegen van objecten aan de kaart, soortgelijk aan luchtfoto's.

####opties OpenStreetMap

![osm0][]

**Automatisch verzenden toestaan** bepalen of logfiles automatisch worden geüpload.

**Deze app autoriseren** is voor het verlenen van toestemming aan de app om GPS-sporen naar OSM te uploaden, met behulp van uw account voor OSM.

De opties **Zichtbaarheid**, **Beschrijving** en **Tags** zijn uitgeschakeld tot u de app autoriseert om GPS-sporen te uploaden. Deze instellingen worden gebruikt voor de GPS-sporen die zullen worden geüpload naar de database van OpenStreetMap.

Wanneer u klikt op *Autoriseer deze app*, zult u worden gebracht naar uw browser voor internet en naar de website van OpenStreetMap. Indien u niet bent ingelogd zal u naar uw inloggegevens worden gevraagd.

![osm2][]

Nadat u bent ingelogd zult u een pagina zien, zoals die hieronder, voor het verifiëren van het verzoek van de app, en de specifieke toestemming om *GPS-sporen te uploaden*. Klik op de knop *Wijzigingen opslaan* om de app te autoriseren.

![osm3][]

Terug in de app GPSLogger, zal het scherm enigszins zijn veranderd, met beschikbare aanvullende opties.

![osm1][]

Klikken on de optie **Autorisatie opschonen** zal de toestemming voor het uploaden van GPS-sporen naar de server van OSM verwijderen.

Er zijn verscheidene opties voor *zichtbaarheid* voor GPS-sporen. *Privé* sporen worden anoniem gedeeld, met niet gesorteerde punten. *Publieke* sporen worden weergegeven in de lijst met sporen, en als anonieme, niet gesorteerde punten. *Te volgen* sporen worden anoniem gedeeld, met tijdstempels voor gesorteerde punten. *Identificeerbare* sporen worden weergegeven in de lijst met sporen en kunnen worden geassocieerd met uw gebruikersnaam, met tijdstempels voor gesorteerde punten.

Aanbevolen wordt dat u de zichtbaarheid van de GPS-sporen die u uploadt in te stellen op *identificeerbaar*. De gegevens en metadata maken het nuttiger voor andere gebruikers die het in kaart brengen. Indien u zorgen heeft over privacy en persoonlijke veiligheid, kies dan een meer toepasselijke instelling of upload de sporen in het geheel niet.

Een tekst *beschrijving* helpt anderen om te begrijpen hoe een spoor is opgenomen. Een te voet opgenomen spoor zal niet soortgelijk zijn aan een spoor dat is opgenomen met een drone.

Een *tag* is een kort sleutelwoord dat kan worden gebruikt om een spoor te associëren met projecten, plaatsen, of gebeurtenissen.


Verzamelen van gegevens
---------------

Geautomatiseerd verzamelen en uploaden van GPS-sporen
-------------------------------------------------

Eenmaal juist geconfigureerd kan de toepassing op de achtergrond worden uitgevoerd en automatisch sporen opnemen en ze eenmaal par dag uploaden naar één van de geconfigureerde services. Dit maakt het mogelijk om automatisch sporen te verzamelen van dagelijkse ritten om te helpen een verzameling van sporen weg- en reisgegevens op te bouwen om die later in kaart te brengen of te analyseren. Eenmaal geconfigureerd zou de persoon die de telefoon of andere apparaat met Android heeft een kleine impact merken op het batterijgebruik en niets handmatig hoeven te doen. Enig experimenteren zal nodig zijn om de juiste balans te vinden tussen batterijgebruik en de helderheid van de GPS-sporen.

Voor een voorbeeld configuratie om automatisch te verzamelen en dagelijks te uploaden naar OpenStreetMap, zou u deze instellingen moeten aanpassen:

* Algemene opties
  * **Automatisch starten bij booten** - Aan
* Details voor loggen
  * **Loggen naar GPX** - Aan
  * **Nieuw bestand maken** - Eenmaal per dag
* Uitvoering
  * **Tijd voor loggen** - 5
  * **GPS behouden tussen fixes** - Aan (Dit uitschakelen kan zorgen voor "sprongen" in de GPS-sporen wanneer het apparaat elke keer de GPS-satellieten ophaalt.)
  * **Niet loggen als ik niet verplaats** - Aan
* Automatisch verzenden, e-mail en uploaden
  * **Automatisch verzenden toestaan** - Aan
  * **Hoe vaak** - Voer, voor eenmaal per dag, 1440 minuten in. Deze instelling kan enigszins onhandig zijn als u geen toegang tot gegevens of wifi heeft wanneer het wordt uitgevoerd. Het zou moeten starten vanaf het moment dat u ofwel het apparaat aanzet of op de knop "Loggen starten" drukt, dus als u begint in de morgen, zal het bijvoorbeeld op dezelfde tijd van de volgende dag gaan uploaden.
  * **OpenStreetMap** - Automatisch verzenden aan en elke andere instelling die u wilt configureren, geef extra aandacht aan de instellingen voor zichtbaarheid als u zorgen heeft omtrent de privacy van de GPS-sporen.

Handmatig sporen opnemen
---------------------

Klik eenvoudigweg op de blauwe knop om te beginnen met het verzamelen van logs (in Eenvoudige weergave). Een draaiveld zal verschijnen nabij de rechter bovenhoek van het scherm om de poging om een fix van satellieten te krijgen aan te geven. Een groene cirkel zal in het gebied rechtsboven worden weergegeven om aan te geven dat er wordt gelogd.

Druk op de groene knop *Loggen stoppen* om het loggen op elk moment te stoppen.

#### Annotatie
Klik op het pictogram *Annotatie* (Potlood) om een opmerking of beschrijving aan een log toe te voegen. Deze optie stelt u in staat een een beschrijving toe te voegen of een opmerking over details die worden geassocieerd met het huidige punt.

##### Aanroepen annotatie vanaf de Notificatiebalk
Het is ook mogelijk om de knop *Annotatie* direct aan te roepen vanaf de Notificatiebalk van Android. Selecteer de app uit de Notificatielijst en klik op de knop *Annotatie*.

![annotate0][]

Dit zal een invoerdialoogvenster weergeven waar u de tekstdetails van de opmerking kunt invoeren.

![annotate1][]

#### Log intervallen
Intervallen van het log worden bepaald door tijd of afstand in het menu **Uitvoering**. 

#####Op tijd
**Tijd voor loggen** is standaard ingesteld op 60 seconden. U kunt dit wijzigen naar vijf of tien seconden, wanneer u wandelt in plaats van rijden in een voertuig. Wanneer u in een auto zit kunt u dit instellen op 1 seconde om zeer nauwkeurige logs te genereren.

#####Op afstand
Het **Aftsandsfilter** is standaard ingesteld op nul. U kunt dit op iets anders instellen indien u de coördinaten wilt opnemen voor elk X aantal eenheden vanaf het laatst opgenomen punt.


Sporen uploaden
------------------
####naar OpenStreetMap
Druk op de knop *Uploaden* en selecteer de optie *OpenStreetMap*. Een dialoogvenster zal verschijnen waar bestanden beschikbaar zijn om te selecteren. Kies welke u wilt uploaden en druk op de knop *Ok*.

![upload0][]

####naar andere opties
er zijn andere opties voor uploaden die u kunt verkennen, maar die buiten het bereik van deze handleiding vallen. Bekijk de website van het project GPSLogger for Android voor details.


​Sporen delen 
---------------
U kunt ook de opgenomen sporen delen, of uw huidige locatie, met andere mensen. Opties voor het delen kunnen tussen de verschillende apparaten variëren, of van de op een apparaat geïnstalleerde apps. Hieronder staat een voorbeeld van hoe het scherm voor de opties voor delen er uit kan zien:

![share0][]


Exporteren van sporen naar een bewerker voor OpenStreetMap
--------------------------------------------

Wanneer u gereed bent met het opnemen van sporen, kunnen de sporen worden geïmporteerd naar JOSM (of een andere bewerker voor OpenStreetMap, zoals iD).

Verbind uw apparaat met Android aan een computer (ook mogelijk met behulp van ene gegevenskabel, Bluetooth, of een internetverbinding) en kopieer de GPX-sporen en (en misschien multimediabestanden) die u heeft opgeslagen.  Zoek, in de opslag van uw apparaat, naar de GPX-sporen in de map /Android/data/com.mendhak.gpslogger/files

Gebruiken van de GPX-sporen met de bewerkers JOSM en iD is zo eenvoudig als het slepen van de bestanden en ze laten vallen in de toepassing (of de browsertab, voor iD). 

Voor aanvullende details voor gebruikers van  iD, bekijk het gedeelte [Configureren van de achtergrondlaag](http://learnosm.org/nl/beginner/id-editor/##configureer-de-achtergrondlaag).

Als de bewerker JOSM wordt gebruikt, kunt u instructies over hoe het GPX-spoor te gebruiken, tezamen met de multimediabestanden, in JOSM bekijken in het gedeelte [Openen in JOSM](http://learnosm.org/nl/mobile mapping/using-gps/#open-in-josm).

Bekijk voor andere bewerkers van OpenStreetMap de documentatie van uw software.


Weergaveopties
-----------------
De toepassing kan op 3 verschillende manieren worden weergegeven, welke u het meest toepasselijk vind om te gebruiken:

####Eenvoudige weergave

![view0][]

####Gedetailleerde weergave

![view1][]

####Grote weergave

![view2][]


Samenvatting
-------
Excellent! U heeft de introductie gevolgd voor een lichtgewicht, batterij efficiënte app die u op uw apparaat voor Android kunt hebben om sporen op te nemen, die u kunt uploaden naar OSM, of gebruiken met uw favoriete bewerker voor OpenStreetMap.

GPSLogger for Android is een ander gereedschap voor het verzamelen van veldgegevens zonder een aangewezen GPS-ontvanger. Spontaan verzamelen van veldgegevens is mogelijk zonder een actieve internetverbinding.

Neem wat tijd om te oefenen en uzelf bekend te laten worden met de app, vóórdat u met echte gegevens gaat werken.

Dit gedeelte behandelt het concept van het gebruiken van GPSLogger for Android voor het verzamelen van GPS-sporen, het uploaden van sporen naar OpenStreetMap, en het verplaatsen van deze logs naar een PC.


Officiële documentatie voor GPSLogger voor Android 
--------------------------------------------

Het project onderhoudt een [FAQ](http://code.mendhak.com/gpslogger/#faq) voor veelgestelde vragen.


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