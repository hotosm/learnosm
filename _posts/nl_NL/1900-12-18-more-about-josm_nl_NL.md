---
layout: doc
title: Het bewerkingsproces van JOSM
permalink: /nl_NL/josm/more-about-josm/
lang: nl_NL
category: josm
---

Het bewerkingsproces van JOSM
========================


In het vorige gedeelte installeerde u JOSM en begon u met het tekenen van uw eerste punten, lijnen en vormen. U voegde voorkeuzen toe aan deze objecten om er informatie over aan toe voegen. Aan het einde was u in staat uw eigen kaart te tekenen in JOSM.

Dat was een goede oefening en nu zijn we klaar om OpenStreetMap te bewerken.

In dit gedeelte zullen we nader kijken naar de interface van JOSM en zien hoe we die kunnen gebruiken om de kaart op OpenStreetMap te bewerken.

De cyclus van het bewerken
---------------------
Bewerken van OpenStreetMap met JOSM is soortgelijk aan het bewerken met de bewerker iD, die we eerder zagen. Maar omdat JOSM een toepassing voor de desktop is, werkt het iets anders. Het proces van het bewerken van en toevoegen aan OpenStreetMap met JOSM zal altijd als volgt zijn:

1. **Download** de huidige kaartgegevens vanaf OSM
2. **Bewerk** ze met behulp van satellietafbeeldingen, GPS, Field Papers en notities als gids
3. **Sla** wijzigingen op in OpenStreetMap

Downloaden van gegevens van OSM
--------------------
De eerste stap voor bewerken is het downloaden van de gegevens voor het gebied in de wereld dat we willen verbeteren. Onthoud dat u dit elke keer moet doen als u wijzigingen aan de kaart wilt aanbrengen, omdat de kaart regelmatig wordt bijgewerkt door andere gebruikers.

-   Klik op “Bestand” in de linker bovenhoek van JOSM en klik op “Gegevens downloaden”. Dat zal het venster voor downloaden openen. U krijgt eenvoudiger toegang tot dit venster door eenvoudigweg te klikken op de knop Downloaden, hier weergegeven:

![JOSM Download Button][]

-  Wanneer het venster om te downloaden opent, zou u een kaart moeten zien. Als u de kaart niet ziet, klik dan op de tab gemarkeerd “Slippy-kaart”.

![JOSM Download Dialog][]

-   Gebruik uw muis om te verplaatsen en te zoomen naar een gebied dat u zeer goed kent, zoals uw eigen woonplaats of buurt. De besturing is hetzelfde als in het kaartvenster van JOSM. De rechter muisknop laat u de kaart slepen en met uw scrollwiel kunt u in en uit zoomen.

> Soms, als u werkt op een notebookcomputer, kan het moeilijk zijn om in en uit te zoomen. Werken metJOSM is veel gemakkelijker met een muis, maar met de meeste moderne notebooks kunt u scrollen met het touchpad.

-   Teken een vak rondom het gebied dat u wilt downloaden. Klik, om een nieuw vak te tekenen, op de kaart, houd uw linker muisknop ingedrukt, en sleep met uw muis om een vak te maken. Laat de muisknop los om het tekenen van het vak te voltooien.
-   Wanneer u tevreden bent met de grootte en locatie van het vak, klik op “Downloaden” aan de onderzijde van het venster. JOSM zal de gegevens voor dit gebied ophalen vanaf OpenStreetMap en die openen in uw kaartvenster om ze te bewerken.

### Afbeeldingen toevoegen
Als u er al bij was toen we onze eerste punten toevoegden met de bewerker iD, zult u zich herinneren dat onder de kaartgegevens een satellietafbeelding lag die ons hielp objecten op de grond te identificeren. Die afbeelding was afkomstig van Microsoft Bing, dat zijn afbeeldingen genereus als verwijzing ter beschikking stelt van de gebruikers van OpenStreetMap bij het bijdragen aan de kaart.

-    Klik, om satellietafbeeldingen van Bing in JOSM toe te voegen, op "Afbeeldingen" in het hoofdmenu van JOSM en selecteer “Bing luchtfotografie”

> Als u geen Bing luchtfotografie ziet in het menu Afneeldingen, moet u dat misschien nog activeren in de voorkeuren van JOSM. Ga naar Bewerken -> Voorkeuren en klik op het pictogram “WMS TMS”. U moet misschien op de pijl naar beneden drukken om het te zien.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Klik op “Bing luchtfotografie”. Klik dan op “Activeren”.


### Rondleiding in JOSM
Nu we gegevens van OpenStreetMap hebben gedownload en satellietafbeeldingen van Bing hebben toegevoegd, laten we nog eens kijken naar de interface van JOSM.

![JOSM layout][]

Het hoofdvenster kennen we al - dit is het kaartvenster en daar vindt de meeste actie plaats. Hier zult u de gegevens van OpenStreetMap bekijken, bewerken en toevoegen.

Rechts van het kaartvenster staat een reeks panelen, met elk zijn eigen functie. Wanneer u JOSM voor de eerste keer installeert worden verscheidene panelen al standaard weergegeven, zoals Lagen, Eigenschappen en Selectie. Wanneer u een punt, lijn of vorm selecteert in het kaartvenster, zal het worden weergegeven in het paneel Selectie. Informatie over het object zal worden weergegeven in het paneel Eigenschappen, en de gebruikersnaam van de auteur van dat object zal worden weergegeven in het paneel Auteurs.

Deze panelen kunnen worden geopend of gesloten door te klikken op de verschillende knoppen aan de linker onderzijde van JOSM. Boven deze knoppen aan de rechter bovenzijde staan gereedschappen die wijzigen wat u kunt doen met uw muis. U kent er al enkele van, het gereedschap Selecteren en het gereedschap Tekenen. Daaronder staan gereedschappen die het eenvoudiger maken om in te zoomen, een object te verwijderen, een vorm te tekenen, of een lijn te maken die parallel staat aan een andere lijn.


Bewerken
----
Zo hebben we stap één voltooid van het proces van bewerken - Downloaden. We hebben JOSM voorbereid met satellietafbeeldingen als verwijzingen. De volgende stap is de kaart te bewerken en nieuwe items toe te voegen.

Afhankelijk van het gebied dat u verkoos te downloaden, zou er veel of slechts heel weinig bestaande kaartgegevens kunnen zijn. Maar onthoud dat het dezelfde soort gegevens zijn die we al eerder hebben gezien - punten, lijnen en vormen, die locaties uit de echte wereld weergeven.

-    Gebruik de technieken die u al heeft geleerd om enkele punten aan de kaart toe te voegen van plekken die u kent Als u fouten ziet, probeer ze dan te repareren.
-    U hoeft niet te agressief te zijn terwijl u leert. Als u niet zeker bent over iets is het beter om het te laten zoals het is.
-   Als u een punt, lijn of vorm wilt verplaatsen, gebruik dan het  **gereedschap Selecteren**. Klik op een object en sleep het naar waar het zou moeten zijn. Dit kan worden gebruikt op de locatie van items, die op de verkeerde plaats terecht zijn gekomen, te corrigeren.

![JOSM select tool][]

-   Gebruik het **gereedschap Tekenen** om nieuwe punten, lijnen en vormen te tekenen. Beschrijf deze objecten door ze te selecteren in het menu Voorkeuzen, zoals u deed in het vorige gedeelte.

> Bewerk de kaart nooit buiten het gebied dat u hebt gedownload. U zult zien dat het rechthoekige gebied dat u hebt gedownload een egale achtergrond heeft, terwijl het gebied dat u niet gedownload hebt diagonale lijnen heeft.
>
> ![JOSM area downloaded][]

Wijzigingen opslaan
--------------
De derde en laatste stap om onze bewerkingen te voltooien is het uploaden van de wijzigingen die we hebben gemaakt naar de database van OpenStreetMap. We moeten verbonden zijn met het internet om de wijzigingen op te slaan. 

-   Klik op “Bestand” in het hoofdmenu en klik dan op “Gegevens uploaden”. Dat zal het venster voor uploaden openen. U krijgt eenvoudiger toegang tot dit venster door eenvoudigweg te klikken op de knop Uploaden, hier weergegeven:

    ![JOSM Upload Button][]

-   Het venster dat verschijnt, geeft een lijst met objecten weer die u toevoegt en de objecten die u aanpast of verwijdert. In het vak aan de onderzijde wordt u gevraagd een opmerking te geven over de wijzigingen die u maakt. Typ hier een beschrijving van uw bewerkingen in.

    ![JOSM Upload Dialog][]

-  Klik op “Wijzigingen uploaden”.

-    Als dit de eerste keer is dat u wijzigingen opslaat in OpenStreetMap, zult u worden gevraagd naar uw gebruikersnaam en wachtwoord voor OpenStreetMap.
-   Vermeld ze in het venster dat verschijnt. Als u het vak in dit venster selecteert, zullen uw gebruikersnaam en wachtwoord worden opgeslagen en hoeft u ze in de toekomst niet meer in te vullen. Klik op “Authenticate”.

    ![JOSM Authenticate][]

-    U zult een paar seconden moeten wachten voordat uw wijzigingen zullen zijn geüpload en dan bent u klaar! U heeft de kaart op OpenStreetMap bewerkt. 

> Wanneer u aan het bewerken bent, zorg er dan altijd voor dat u uw wijzigingen uploadt voordat u JOSM afsluit. Zelfs als u nog meer bewerkinge wilt uitvoeren, upload uw wijzigingen en ga dan later, als u tijd heeft om te bewerken, opnieuw door het proces. U wilt uw werk niet verliezen!

Uw wijzigingen bekijken op de kaart
---------------------------
-  Open uw internetbrowser en ga naar [https://openstreetmap.org/](https://openstreetmap.org/)
-  Verplaats de kaart naar het gebied dat u heeft bewerkt.
-   U zou nu uw wijzigingen moeten zien verschijnen op de kaart! Als dat niet zo is, druk dan eens op CTRL+R om de webpagina te vernieuwen. Soms werkt de kaart zich niet juist bij en moet die opnieuw worden geladen.
-   Wat als u uw wijzigingen niet ziet? Geen zorgen - het kan een aantal minuten duren voordat de wijzigingen op de kaart worden weergegeven. Controleer ook uw toevoegingen in JOSM om er voor te zorgen dat u ze correct heeft toegevoegd. Een goede algemene regel is, als uw punt een pictogram heeft in JOSM, dan zou dat zichtbaar moeten zijn op de hoofdkaart op de website van OpenStreetMap.

Samenvatting
-------
Nu u hebt gezien hoe toe te voegen aan OpenStreetMap, wat is het volgende? Wel, bewerken is fantastisch, maar het is niet het enige aspect van het maken van kaarten. Natuurlijk moet u ook leren naar buiten te gaan en informatie te verzamelen over plaatsen op de grond.


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