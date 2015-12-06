---
layout: doc
title: Plug-ins voor JOSM
permalink: /nl/josm/josm-plugins/
lang: nl
category: josm
---

Plug-ins voor JOSM
============

> Deze handleiding kan gedownload worden als [josm-plugins_nl.odt](/files/josm-plugins_nl.odt) of [josm-plugins_nl.pdf](/files/josm-plugins_nl.pdf)  
> Bijgewerkt op 14-07-2015  

Als u steeds meer vordert in uw technieken van bewerken, wilt u misschien
aanvullende mogelijkheden van JOSM gebruiken om uw
vaardigheden voor het maken van kaarten te verbeteren. JOSM stelt u in staat een groot aantal plug-ins te installeren, die
extra functionaliteit aan de software toevoegen.

In dit gedeelte zullen we nader kijken hoe plug-ins te installeren,
en naar enkele van de meest nuttige plug-ins die beschikbaar zijn.

Plug-ins installeren 
-------------------
-   Ga, elke keer als u een nieuwe plug-in wilt installeren, naar **Bewerken \> Voorkeuren**
    en klik op de tab **Plug-ins**.

![Plugins][]

-   Klik op **Lijst downloaden** als u geen lijst met beschikbare plug-ins ziet.
-   U moet, om een plug-in te installeren, eenvoudigweg het vakje ernaast selecteren
    en op OK klikken aan de onderzijde.
-   Tenslotte dient u, met sommige versies van JOSM, misschien JOSM opnieuw te straten wanneer u nieuwe plug-ins installeert.

Enkele van onze favoriete plug-ins zijn:

1.  **buildings_tools:** Als u veel gebouwen tekent zal deze dat proces sneller en eenvoudiger maken

2.  **DirectUpload:** Als u veel GPS-sporen verzamelt en ze zou willen opslaan in de
    database van OSM, maakt deze plug-in dat makkelijker.

3.  **editgpx:**
    Als u GPS-sporen wilt uploaden vanaf een apparaat van Garmin, heeft u misschien deze
    plug-in nodig. OSM zal geen GPS-sporen accepteren die zijn opgeslagen op een externe geheugenkaart
    in een Garmin, maar deze plug-in kan de bestanden corrigeren zodat zij kunnen worden geüpload.

4.  **fieldpapers:**
    Deze plug-in laat u gescande Velddocumenten laden in JOSM.

5.  **imagery_offset_db:**
    Deze plug-in laat u samenwerken met andere makers van kaarten die vinden dat de Bing
    satellietafbeeldingen enigszins verkeerd uitgelijnd zijn. Dit probleem wordt meer in detail behandeld
    in een later hoofdstuk.

6.  **mirrored_download:**
    Met deze plug-in kunt u een groter gebied met gegevens van OSM downloaden om te bewerken.

7.  **print:**
    Voegt een functie Afdrukken toe, voor het geval u snel iets wilt afdrukken
    van een gebied, dat er niet bijzonder goed hoeft uit te zien.

8.  **utilsplugin2:**
    Voegt vele aanvullende gereedschappen en menu's toe aan JOSM voor gevorderde gebruikers. Dit wordt
    meer in detail behandeld in het [volgende hoofdstuk](/nl/josm/more-tools)



<!-- Het resterende gedeelte van dit gedeelte moet worden bewerkt, en/of verplaatst naar andere gedeelten,
    voor nu voorzien van comment


- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (stelt u in staat meer gegevens van OSM te downloaden)
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (stelt u in staat GPS-sporen te uploaden)
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (stelt u in staat GPS-bestanden te bewerken)
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

We bevelen ook aan om deze plug-ins te downloaden, die worden behandeld  in andere
hoofdstukken:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

probeer een te klikken op “Restart JOSM” en bekijk hoe de software zichzelf opnieuw start.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ zal het downloaden van gegevens van OSM
voor bewerken sneller maken. In plaats van de gegevens op te halen van de centrale
server van OSM, stelt het ons in staat die op te halen vanaf een “mirror,” wat een exacte
replica van de gegevens is maar op een locatie waartoe het sneller toegang heeft.

Als de plug-in eenmaal is geïnstalleerd (en u JOSM opnieuw heeft gestart), zult u een
ander, nieuw item zien in het menu Bestand, “Download from OSM mirror...”

![Download from OSM Mirror][]

Downloaden van gegevens is exact hetzelfde proces als wat u eerder leerde, maar het
kan veel sneller zijn!

Direct Upload
-------------

![Direct Upload][]

__DirectUpload__ uploadt GPX-sporen direct naar OSM
via JOSM (meer informatie is beschikbaar in de **Appendix**). Als
de plug-in eenmaal is geïnstalleerd (en u heeft JOSM opnieuw gestart), zult u
een nieuw item “Upload traces” zien onder het menu “Gereedschappen”.

![Upload Traces Item][]

Wanneer u klikt op de knop “Upload Traces” zal dit venster openen:

![Upload Traces Window][]

Voer sleutelwoorden in (gescheiden door komma's zonder spaties) die verwijzen naar uw
GPS-spoor in het vak "Tags (kommagescheiden)". Bijvoorbeeld,
"Country,region,city,neighborhood,road name". Geef vervolgens een
beschrijving van uw tags. Een keuzelijst zal het u mogelijk laten maken
eerdere tags en beschrijvingen opnieuw te gebruiken. Kies tenslotte welk soort zichtbaarheid u
uw spoor zou willen laten hebben. Er zijn vier niveau's, van privé tot
identificeerbaar (alle worden hieronder verklaard in de [Appendix]{{site.baseurl}}/learnosm/en/).

Klik op Upload Trace. Als u niet verbonden bent met uw account van OSM, moet u
dat nu doen.

Eenmaal met succes geüpload,zal het tekstgebied een status "OK" weergeven
en de knop “Upload Trace” zal niet meer aan te klikken zijn. Meer informatie
over deze plug-in en uploads van GPS is beschikbaar in de [Appendix]({{site.baseurl}}/learnosm/en/).

Edit gpx
--------

![Edit Gpx][]

**EditGpx** stelt u in staat uw opgenomen GPX-sporen voor te bereiden
vóórdat u ze uploadt naar OSM. Sporen hebben vaak gedeelten die u
wilt verwijderen. Daarom verwijdert deze plug-in punten uit sporen op een
snelle manier en maakt anonimiteit voor tijdstempels van een spoor.

Als de plug-in eenmaal is geïnstalleerd (en u JOSM opnieuw heeft gestart), zult u
dit nieuwe gereedschap zien in de werkbalk aan de linkerkant.

![Edit Gpx Tool Icon][]

1. Open een GPX-bestand in JOSM!

![Open GPX File][]

2. Druk op de nieuwe knop in de linker menubalk 

![Edit Gpx Tool Icon][]

en de gegevens van GPX zullen worden geïmporteerd naar een nieuwe laag EditGpx. Elke
knoop van het spoor zal in geel zijn geaccentueerd.

![GPX Nodes All][]

3. Markeer nu de punten (door te klikken) of gebieden (door een rechthoek te slepen op
hun bereik) die u wilt verwijderen. Het gele accent
zal verdwijnen.

![GPX Nodes Selected][]

4. Klik nu met rechts op de naam van de laag en kies \<\<Naar gegevenslaag omzetten\>\> in
het \<\<Context\>\>menu.

5. Nu kunt u de normale GPX-laag als bestand opslaan of de gegevens uploaden naar
OSM (bijv. door de
plug-in [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)) te gebruiken.

Print
-----

![Print Plugin][]

Als u een snelle en gemakkelijke manier wilt om een kaart af te drukken terwijl u aan het bewerken bent in
JOSM, installeer dan de plug-in __print plugin__. Hoewel u niet in staat zult zijn om
in uw afdruk ook maar iets op te maken, is dit een goede manier om snel
en gemakkelijk af te drukken. Als de plug-in is geïnstalleerd, zal een nieuw item beschikbaar zijn
in het menu Bestand, genaamd “Print...”

![Print Menu Item][]

Klikken hierop zal het dialoogvenster Print openen, wat er uitziet zoals dit:

![Print Dialog][]

Hier kunt u uw printerinstellingen wijzigen. Als u niets ziet op
de pagina, selecteer dan het vak naast “Voorbeeld kaart” aan de rechterkant. Zoom in of
uit op de kaart door het getal te wijzigen in het vak “Schaal”. Vergroot de
resolutie door het getal naast “ppi” te wijzigen. Wanneer u gereed bent
met het bewerken van de instellingen, klik op “Afdrukken.”

Samenvatting
-------

Dit zijn enkele nuttige plug-ins die beschikbaar zijn voor JOSM. Verken ook gerust
de vele andere plug-ins. Zoals u al heeft gezien, het
menu Voorkeuren bevat een korte beschrijving van elk plug-in en u kunt
een webpagina openen met meer informatie door te klikken op de koppeling “More info...”
naast elke.

![More Info Link][]

Veel succes!

Appendix
--------

Details voor DirectUpload 
--------------------

![Direct Upload Plugin][]

Toevoegen van uw GPS-sporen en punten naar de server van OSM is nuttig om
vele redenen.
__(Indien u niet wilt dat uw GPX-punten worden gezien door anderen hoeft u het volgende gedeelte niet te lezen.  U kunt eenvoudigweg uw GPX-bestanden weergeven in JOSM, en ze daarom lokaal opslaan).
Ten eerste: GPS-sporen zijn de meest nuttige manier van het verzamelen en
geo-verwijzen van objecten in OSM. Bekijk [Aerial Imagery](/en/josm/aerial-imagery/)
GPS-apparaten hebben een grotere nauwkeurigheid dan satellietafbeeldingen en zijn daarom
een nuttig gereedschap voor het controleren van hoe groot de verschuiving is. Het gebruiken van veel GPS-
sporen (hoe groter het aantal sporen hoe groter de mogelijkheid om
de nauwkeurigheid van de geo-locatie te bepalen) stelt u in staat te bepalen of de afbeelding op de achtergrond
is verschoven.

Uploaden van sporen naar de server maakt het meer delen van informatie mogelijk.
Het laat mensen toe die geen toegang tot het veld hebben, eenvoudigweg omdat
zij niet in dat gebied leven of geen toegang tot een GPS-apparaat hebben,
om te helpen met digitaliseren. Er zijn twee manieren om uw sporen te uploaden
: 1) Plug-in JOSM of 2) op de hoofdwebsite van OSM.

> Opmerking: GPS-punten kunnen niet direct worden geüpload naar de database van OSM.
> Zij kunnen echter worden geconverteerd naar sporen en dan bijvoorbeeld tijdelijk worden geüpload,
> zodat zij als achtergrondobjecten kunnen worden weergegeven in Potlatch.

Nadat u uw GPX-bestand heeft geopend in JOSM en hebt aangeklikt. Ga naar
"Gereedschappen" en klik op "Sporen uploaden". Beschrijf het GPX-bestand,
schrijf enkele tags, en zichtbaarheid. U kunt, voor zichtbaarheid, kiezen voor
privé, traceerbaar, publiek of te identificeren.

1.  **Te identificeren**: Uw spoor zal publiek worden weergegeven in Your
    GPS**traces en in de publieke lijst met GPS-sporen. Andere gebruikers kunnen
    het ruwe spoor downloaden en het verbinden met uw gebruikersnaam. Tijdstempels
    van de sporen zullen ook beschikbaar zijn via de publieke GPS
    API.

2.  **Publiek**: Uw spoor zal publiek worden weergegeven in Your GPS**traces
    GPS**traces en in de publieke lijst met GPS-sporen. Andere gebruikers kunnen nog steeds
    het ruwe spoor downloaden van de publieke lijst met sporen en enig tijdstempel
    dat daarin is opgenomen. Echter, gegevens die worden weergegeven in de API verwijzen niet terug
    naar uw pagina met sporen, noch zijn tijdstempels beschikbaar, hoewel de punten
    chronologisch zijn geordend.

1.  **Traceerbaar**: Het spoor zal **niet** worden weergegeven op enige publieke
    lijst, maar de punten van de sporen zullen nog steeds beschikbaar zijn via de
    publieke GPS API **met tijdstempels**. Andere gebruikers kunnen nog steeds
    de punten van het spoor downloaden maar deze zullen niet met u zijn geassocieerd
    .

2.  **Privé**: Het spoor zal **niet** worden weergegeven op enige publieke
    lijst, maar de punten van de sporen zullen, in tijdvolgorde, beschikbaar zijn via
    de publieke GPS API **zonder tijdstempels**.

![DirectUpload Traces Options][]

Online GPS-sporen uploaden
---------------------------

1. Ga
naar [http://www.openstreetmap.org/](http://www.openstreetmap.org/) en log in.

2. Selecteer "GPS Traces", te vinden op de linker banner.

![Left Banner][]

3. Selecteer
[upload a trace](http://www.openstreetmap.org/trace/create).
Hier, kunt u ook  **See just your traces** om eerdere GPS-sporen te bekijken.  

4. Zoek uw bestand op in "Choose File". Label het in het vak Description
, geef het enkele tags, en kies welk type Visibility het moet hebben.
Als u veel .gpx-bestanden heeft kunt u ze comprimeren in een zip-archief en
dat uploaden. Het zal worden behandeld als één groot gpx-bestand en er zal slechts één item
op de lijst met sporen worden gemaakt. 

![Online Upload Traces Options][]

5. Klik op *Upload*.

  Het bestand zal worden geüpload naar de server van OSM, waar het zal worden toegevoegd aan
wachtrij van bestanden die nog in de database moeten worden ingevoegd.

[Plug Icon]: /images/josm/josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/josm/josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/josm/josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/josm/josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/josm/josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/josm/josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/josm/josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/josm/josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/josm/josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/josm/josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/josm/josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/josm/josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/josm/josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/josm/josm-plugins_image13_print-menu.png
[Print Dialog]: /images/josm/josm-plugins_image14_print-dialog.png
[More Info Link]: /images/josm/josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/josm/josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/josm/josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/josm/josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/josm/josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/josm/josm-plugins_image00_plug-icon.png
