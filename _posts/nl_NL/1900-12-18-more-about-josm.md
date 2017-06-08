---
layout: doc
title: Het bewerkingsproces van JOSM
permalink: /nl/josm/more-about-josm/
lang: nl
category: josm
---

Het bewerkingsproces van JOSM
========================

> Deze handleiding kan worden gedownload als [josm_more-about-josm_nl.odt](/files/josm_more-about-josm_nl.odt) of [josm_more-about-josm_nl.pdf](/files/josm_more-about-josm_nl.pdf)  
> Bijgewerkt op 12-07-2015  

In het eerdere gedeelte heeft u
JOSM geïnstalleerd en bent u uw eerste punten, lijnen en vormen gaan tekenen.
U heeft voorkeuzen aan deze objecten toegevoegd om extra informatie aan ze
toe te kunnen voegen. Aan het einde was u in staat uw eigen kaart te tekenen in JOSM.

Dat was een goede oefening en nu zijn we klaar om OpenStreetMap te bewerken.

In dit gedeelte zullen we nader kijken naar de interface van JOSM en zien
hoe we die kunnen gebruiken om de kaart op OpenStreetMap te bewerken.

De cyclus van het bewerken
---------------------
OpenStreetMap bewerken met JOSM is soortgelijk aan het bewerken met de iD editor die we
eerder zagen. Maar omdat JOSM een desktoptoepassing is, werkt het iets
anders. Het proces van bewerken en toevoegen aan OpenStreetMap met
JOSM zal altijd als volgt zijn:

1. **Download** de huidige kaartgegevens vanaf OSM
2. **Bewerk** ze met behulp van satellietafbeeldingen, GPS, velddocumenten, en notities als gids
3. **Sla** wijzigingen op in OpenStreetMap

Downloaden van gegevens van OSM
--------------------
De eerste stap voor het bewerken is om de gegevens te downloaden voor het gebied van de wereld dat
we wille verbeteren. Onthoud dat u dit elke keer moet doen als u wijzigingen wilt
maken aan de kaart, omdat de kaart vaak wordt bijgewerkt door andere gebruikers.

-    Klik op “Bestand” in de linker bovenhoek van JOSM en klik op “Downloaden
    vanuit OSM”. Dit zal het venster om te downloaden openen. U kunt dit venster
    eenvoudiger openen door gewoon op de knop Downloaden, die hier
    is weergegeven:

![JOSM Download Button][]

-  Wanneer het venster om te downloaden opent zou u een kaart moeten zien met een roze vak
    erop getekend. Als u de kaart niet ziet, klik dan op de tab
    “Slippy-kaart”.

![JOSM Download Dialog][]

-  Het roze vak vertegenwoordigt het gebied van de kaart dat we zouden willen
    downloaden om te bewerken. Gebruik uw muis om naar gebied te panen en te zoomen
    dat u goed kent, zoals uw eigen stad of wijk. De
    besturingselementen zijn hetzelfde als in het kaartvenster van JOSM. Met de rechter muisknop
    kunt u de kaart slepen, en uw scrolwiel stelt u in staat in en
    uit te zoomen.

>    Soms, als u werkt met een notebookcomputer kan het moeilijk zijn
>    om in en uit te scrollen. Werken in JOSM is veel eenvoudiger als u een  muis heeft,
>    maar de meeste moderne notebooks stellen u in staat te scrollen met het touchpad.

-    teken ene vak rondom het gebied dat u wilt downloaden. Klik, om een nieuw vak te tekenen, op de
    kaart, houd uw linker muisknop ingedrukt, en sleep met uw muis om een
    vak te maken. Laat de muis los om het tekenen van het vak te beëindigen.
-  Klik, wanneer u tevreden bent met de grootte en locatie van het vak,
    op “Downloaden” aan de onderzijde van het venster. JOSM zal de gegevens ophalen
    voor dit gebied vanaf OpenStreetMap en ze openen in uw kaartvenster om ze te
    bewerken.

### Afbeeldingen toevoegen
Indien u ons hebt gevolgd vanaf toen we onze eerste punten toevoegden met de iD editor, zult u
hebben onthouden dat onder de kaartgegevens een satellietafbeelding lag die ons hielp
bij het identificeren van objecten op de grond. Die afbeelding was van Microsoft Bing, die
genereus zijn afbeeldingen ter beschikking stelt aan gebruikers van OpenStreetMap als verwijzing terwijl
zij bedragen aan de kaart.

-    Klik, om satellietafbeeldingen van Bing in JOSM toe te voegen, op "Afbeeldingen" in het bovenste menu van
    JOSM en selecteer “Bing Sat.”

>   Indien u Bing luchtfotografie niet in uw menu Afbeeldingen ziet, moet u die misschien nog activeren
>   in de voorkeuren van JOSM. Ga naar Bewerken -> Voorkeuren en klik op het pictogram
>   dat zegt “WMS TMS”. U moet misschien op de pijl naar beneden klikken om die te vinden.
>    ![JOSM Preferences up down][]
>    ![JOSM Preferences WMS TMS][]
>   Klik op “Bing luchtfotografie”. Klik dan op “Activeren”.


### Rondleiding in JOSM
Nu we gegevens van OpenStreetMap hebben gedownload en satellietafbeeldingen van Bing hebben toegevoegd,
zullen we eens wat nader kijken naar de interface van JOSM.

![JOSM layout][]

Het hoofdvenster waarmee u al bekend bent - dit is het kaartvenster, en 
dit is waar de meeste actie is te vinden. Hier zult u bekijken, bewerken en
toevoegen aan de gegevens van OpenStreetMap.

rechts van het kaartvenster staan een aantal panelen, elk daarvan heeft
zijn eigen functie. Gewoonlijk, wanneer u JOSM voor de eerste keer installeert, zijn verscheidene
panelen standaard verborgen, zoals Lagen, Eigenschappen, en
Selectie. Wanneer u een punt, lijn, of vorm selecteert in het kaart
venster, zal het worden weergegeven in het paneel Selectie. Informatie over
het object zal worden weergegeven in het panel Eigenschappen, en de gebruikersnaam
van de auteur van dat object zal worden weergegeven in het paneel Auteurs.

Deze panelen kunnen worden geopend of gesloten door te klikken op de verschillende knoppen aan
linker onderkant van JOSM. Boven deze knoppen, aan de linker bovenkant, staan gereedschappen die
wijzigen wat u kunt doen met uw muis. Enkele daarvan kent u al,
het gereedschap Selectie en het gereedschap Tekenen. Daaronder staan gereedschappen die het eenvoudiger maken
in te zoomen, een object te verwijderen, een vorm te tekenen, of een lijn te maken die parallel is aan
een andere lijn.


Bewerken
----
We hebben dus de eerste stap van het bewerkingsproces voltooid - Downloaden. We hebben
JOSM voorbereid met een satellietafbeelding als verwijzing. De volgende stap is het bewerken
van de kaart en het toevoegen van nieuwe items.

Afhankelijk van het gebied dat u heeft gedownload, zou er veel of zeer
weinig bestaand kaartgegevens kunnen zijn. Maar zie dat het dezelfde soort gegevens zijn die we
eerder hebben gezien - punten, lijnen, en vormen die locaties in de echte wereld weergeven.

-    Gebruik de technieken die u al heeft geleerd om enkele punten aan de kaart toe te voegen
	van plekken die u kent Als u fouten ziet, probeer ze dan te repareren.
-    U hoeft niet te agressief te zijn terwijl u leert. Als u niet zeker bent
	van iets, is het beter om het te laten zoals het is.
-    Gebruik, als u een punt, lijn of vorm wilt verplaatsen, het
    **gereedschap Selectie**. Klik op een object en sleep het naar waar
    het zou moeten zijn. Dit kan worden gebruikt om de locatie va items te corrigeren die
    op de verkeerde plaats zijn neergezet

![JOSM select tool][]

- Gebruik het **gereedschap Tekenen** om nieuwe punten, lijnen en vormen te tekenen.
    Beschrijf deze objecten door te kiezen uit het menu Voorkeuzen, zoals u
    in het eerdere gedeelte deed. 

>  Bewerk nooit de kaart buiten het gebied dat u heeft gedownload. U  
>  kunt het rechthoekige gebied dat u heeft gedownload zien als een vaste achtergrond,  
>  terwijl het gebied dat u niet heeft gedownload diagonale lijnen met strepen heeft.  

![JOSM area downloaded][]

Wijzigingen opslaan
--------------
De derde en laatste stap om onze bewerkingen te voltooien is het uploaden van de wijzigingen die we hebben
gemaakt naar de database van OpenStreetMap. We moeten, om de wijzigingen op te slaan,
verbonden zijn met het internet.

-  Klik op “Bestand” in het bovenste menu, en klik dan op “Gegevens bijwerken”. Dit
    zal het venster voor het uploaden openen. U kunt dit venster
    eenvoudiger openen door te klikken op de knop Uploaden, hier weergegeven:

![JOSM Upload Button][]

-  Het venster dat verschijnt geeft een lijst weer van de objecten die u
    wilt toevoegen en de objecten die u bijwerkt of verwijdert. In het vak aan
    de onderzijde wordt u gevraagd een opmerking op te geven over de wijzigingen die
    u maakt. Typ hier een beschrijving van uw bewerkingen.

![JOSM Upload Dialog][]

-  Klik op “Wijzigingen uploaden”.

-    Als dit de eerste keer is dat u wijzigingen opslaat in OpenStreetMap, zult u
    worden gevraagd naar uw gebruikersnaam en wachtwoord voor OpenStreetMap.
-    Voer ze in in het venster dat verschijnt. Als u het vak selecteert in
    dit venster, zullen uw gebruikersnaam en wachtwoord worden opgeslagen en zult u
    ze  in de toekomst niet meer hoeven in te voeren. Klik op “Authenticate”.

![JOSM Authenticate][]

-    U zult een paar seconden moeten wachten voordat uw wijzigingen zullen zijn geüpload,
    en dan bent u klaar! U heeft de kaart op OpenStreetMap bewerkt.

> Als u aan het bewerken bent, zorg er dan voor dat u uw wijzigingen uploadt vóórdat u  
> JOSM sluit. Zelfs als u nog meer bewerkingen wilt uitvoeren, upload uw wijzigingen, en  
> ga dan later opnieuw door het proces wanneer u tijd heeft om te bewerken.  
> U wilt uw werk niet verliezen!

Uw wijzigingen bekijken op de kaart
---------------------------
-  Open uw internetbrowser en ga naar [http://openstreetmap.org/](http://openstreetmap.org/)
-  Verplaats de kaart naar het gebied dat u heeft bewerkt.
-  U zou uw wijzigingen nu moeten zien verschijnen op de kaart! Als dat niet zo is,
    probeer dan door te drukken op CTRL+R de webpagina te vernieuwen. Soms wordt de kaart
    niet helemaal correct bijgewerkt en moet die opnieuw worden geladen.
-  Wat als u uw wijzigingen niet ziet? Geen zorgen - het kan enkele
    minuten duren voordat de wijzigingen worden weergegeven op de kaart. Controleer ook uw
    aanvullingen in JOSM om er zeker van te zijn dat u ze correct heeft toegevoegd. Een goede
    algemene regel is, als uw punt een pictogram in JOSM heeft, dan zou het
    moeten kunnen worden bekeken op de hoofdkaart van de website van OpenStreetMap.

Samenvatting
-------
Nu we u hebben laten zien hoe u kunt toevoegen aan OpenStreetMap, wat is het volgende? Wel, bewerken
is fantastisch, maar het is niet het enige aspect het maken van kaarten. Natuurlijk moet u ook nog
leren hoe u naar buiten gaat en informatie verzamelt over plaatsen op de
grond.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png