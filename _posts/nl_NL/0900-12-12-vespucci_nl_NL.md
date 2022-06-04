---
layout: doc
title: Vespucci
permalink: /nl_NL/mobile-mapping/vespucci/
lang: nl_NL
category: mobile-mapping
---

Vespucci
==============

Vespucci is een gratis programma voor het bewerken van gegevens van OpenStreetMap en staat bekend te werken met een breed scala aan apparaten, bijvoorbeeld smartphones, tablets. Het ondersteunt de meeste beschikbare bewerkingen van bewerkers voor OSM voor de desktop. Echter, deze app is alleen beschikbaar voor apparaten met Android en werkt op alle versies van Android vanaf 4.0.

U kunt het downloaden vanaf de Google Play Store, Amazon F-Droid. Uitgave en bèta-APK's van de app zijn ook beschikbaar in de opslagplaats van GitHub van de app.

## Mogelijkheden

-   Maken, bewerken en verwijderen van knopen, wegen en relaties
-   Knopen verplaatsen
-   Wegen verplaatsen en draaien
-   Knopen toevoegen aan wegen
-   Knopen uitnemen uit een weg
-   Geometrie van wegen verbeteren
-   Wegen loodrecht maken
-   Meerdere elementen verplaatsen
-   Ondersteunt multi-polygonen
-   Tags maken, bewerken en verwijderen
-   Functies Ongedaan maken en Opnieuw
-   Relaties bewerken en nieuwe beperkingen afslaan maken
-   ondersteuning voor voorkeuzen van JOSM
-   Tegels voor achtergrondafbeeldingen downloaden en opslaan
-   Downloaden van en uploaden naar de server van OSM
-   Gegevensbestanden van OSM opslaan en lezen
-   Problemen met validatie en FIXMEs weergeven
-   Ontbrekende tags en straatnamen
-    OSM Notes en Osmose bugs toevoegen, opmerkingen plaatsen en sluiten
-   GPX-tracks laden, opnemen en uploaden 
-   Foto's met geoverwijzingen weergeven
-   Ondersteuning voor MapSplit getegelde gegevens van OSM
-   Ondersteuning voor lezen van gegevensbestanden van OSM in de indeling PBF
-   …en nog veel meer

## In kaart brengen met Vespucci

OSM-gegevens in Vespucci worden objecten genoemd. Punten worden nodes genoemd, lijnen wegen, en polygonen worden closed ways genoemd

U bent verplicht in te loggen in uw account voor OpenStreetMap om gegevens van OSM met Vespucci toe te voegen. Log in door te tikken op het pictogram “More options" (geplaatst aan de linker onderkant van het scherm) en selecteer “Authorise OAuth" onder “Tools…". Typ uw gebruikersnaam voor OSM (of e-mailadres) en wachtwoord in, tik dan op “Login". Als u nog geen account van OSM heeft, selecteer dan in plaats daarvan “Register now".

![Login][]

Vespucci heeft toegang tot uw account nodig. Tik op “Grant Access" nadat u bent ingelogd om toegang tot uw account toe te staan. Zorg er voor dat alle vakken zijn geselecteerd om te maximaliseren wat u in Vespucci kunt doen.

![Allow][]

Lokaliseer, na het inloggen, uw werkgebied met het pictogram “GPS" of via “Find" onder “More options". Wijzig de achtergrond van de kaart naar de door u gewenste afbeelding door te klikken op de drie lijntjes in de rechterbovenhoek en te klikken op “OpenStreetMap(Standard)" omdat dat de standaard afbeelding is en alle beschikbare afbeeldingen zal laten zien.

![SelectImagery][]

Selecteer, om offline te bewerken, “Download Current View" of “Clear and download current View" onder het pictogram “Transfer". Dit zal u in staat stellen het gebied, dat op uw scherm wordt weergegeven, te downloaden en te bewerken met een opgeslagen afbeelding van uw keuze voor de achtergrond. Offline bewerken zal voorkomen dat u tegelijkertijd met andere mappers gegevens van OSM bewerkt, wat problemen met de kwaliteit van de gegevens, die zouden kunnen optreden, vermijdt.

![Offline][]

Ontgrendel de kaart zodat u kunt beginnen met het toevoegen van gegevens. Doe dit door te tikken op het pictogram van het slot in de linkerbovenhoek van het scherm. Druk het pictogram van het slot lang in en tik dan op Normal, zodat u nodes, ways en tags kunt toevoegen en bewerken. Selecteren van de optie “Tag only" zal u alleen in staat stellen om tags te bewerken.

![StartEditing][]

### Tags toevoegen en bewerken

Tik op uw gewenste object om tags toe te voegen of te bewerken. Een nieuwe set pictogrammen zal verschijnen aan de onderzijde van het scherm. Tik op het pictogram “Add preset" of het pictogram “Edit properties"  om tags toe te voegen of aan te passen.

![EditTags][]

### Nieuwe objecten toevoegen/maken

Tik, om een nieuw object toe te voegen, op de grote groene knop in de linkerbenedenhoek van het scherm en selecteer wat u wilt toevoegen. Zoom in en tik waar u het object wilt plaatsen.

![AddObject][]

Kies, om een nieuwe node te maken, Add node en tik op de plk waar u de node wilt plaatsen.

![AddNode][]

Kies, om een way te maken, Add way en tik doorlopend op uw scherm, totdat u het gewenste resultaat hebt bereikt.

![AddWay][]

Maak, om een closed way/polygon te maken, eerst ways en tik dan eenvoudigweg op de eerste node van de eerste way die u hebt gemaakt om de polygoon te sluiten. Tik op het pictogram “Add preset" om tags aan uw polygoon toe te voegen. Niet getagde ways zijn fuchsia van kleur, terwijl getagde ways zijn gekleurd overeenkomstig hun tags/eigenschappen (d.i. getagde gebouwen zijn beige, getagde waterwegen zijn blauw, etc.).

![AddPolygon][]

### Een node aan een way toevoegen

Selecteer de way waaraan u een node wilt toevoegen. Tik op de grote groene knop in de rechterbenedenhoek van het scherm en selecteer Add node. Tik waar u de nieuwe node wilt laten verschijnen. Een nieuwe node zal worden toegevoegd op de geselecteerde locatie.

![AddNodeToWay][]

### Objecten bewerken en verplaatsen 

Tik, om een object te verplaatsen, er eenmaal op en verplaats het naar de gewenste locatie.

Selecteer, om een polygoon vierkant te maken, het en kies dan “Square way" onder het pictogram “More options".

![ModifyObject][]

### Ongedaan maken/Opnieuw

Tik, om uw wijzigingen ongedaan te maken, op het pictogram “Undo" in de linkerbenedenhoek van het scherm. Er op tikken zal uw meest recente wijzigingen ongedaan maken.

![Undo][]

Druk lang, om Opnieuw toe te passen, op het pictogram “Undo". Een lijst  van bewerkingen, die u ongedaan hebt gemaakt, zal verschijnen Selecteer welke u opnieuw wilt toepassen.

![Redo][]

### Uw wijzigingen uploaden

Tik, om uw wijzigingen te uploaden, op het pictogram “Transfer" in het onderste gedeelte van het scherm en selecteer “Upload data to OSM server". Een lijst met uw wijzigingen zal verschijnen. Tik op “Properties" om opmerkingen voor uw wijzigingenset in te voeren, en tik dan op “Upload". Als het uploaden met succes is uitgevoerd, zullen uw wijzigingen onmiddellijk in OSM zichtbaar zijn.

![Upload][]

Uploaden van uw wijzigingen naar OpenSteetMap vereist dat u bent verbonden met het internet en bent ingelogd in uw account voor OSM, dus zorg er voor dat u bent ingelogd vóórdat u begint met bewerken.

## Zoeken naar plaatsen

Tik, om uw huidige locatie te zoeken, op het pictogram “GPS" in het onderste gedeelte van het scherm en selecteer “Go to current location". Het scherm zal automatisch zoomen naar uw locatie. Onthoud dat de GPS van uw apparaat moet zijn ingeschakeld om dit te laten werken.

![Goto][]

Tik, om andere locaties te zoeken, op het pictogram “More options" en selecteer Find. Typ de naam van uw gewenste locatie in en selecteer Search. Zorg ervoor dat u zoekt “with Nominatim" om een zoekactie naar plaatsen van Nominatim uit te voeren.

![Search][]

## Andere instellingen voor Vespucci

Tik, om de eigenschappen van de achtergrond van uw kaart te bewerken, op het pictogram “Preferences" in het onderste gedeelte van uw scherm. Een venster voor de instellingen van de gebruikersinterface zal verschijnen. Kies wat u wilt aanpassen in de lijst. U kunt onder deze optie ook de instellingen voor de gebruikersinterface, instellingen voor gegevens en bewerken en instellingen voor locatie en server, etc. bewerken.

![Preferences][]

Sommige instellingen kunnen worden aangepast onder het pictogram “More options". Tik, om de achtergrondlaag van uw kaart uit te lijnen (als er een verschuiving is), op “Align background" onder “Tools…". Dit vereist dat u bent verbonden met een netwerk.

![AlignImagery][]

Selecteer, om de caches van gedownloade tegels leeg te maken, Tools &gt; More Imagery Tools &gt; Flush all tile caches. Dit zal alle tegelcaches, die u op het apparaat heeft, leeg maken.

![ClearTiles][]

U kunt ook een terugkoppeling geven aan de ontwikkelaars van Vespucci met uw account van GitHub of OSM onder het pictogram “More options".

![Feedback][]

[Login]:        /images/mobile-mapping/vespucci-login.png
[Allow]:        /images/mobile-mapping/vespucci-allow.png
[SelectImagery]:/images/mobile-mapping/vespucci-select-imagery.png
[Offline]:      /images/mobile-mapping/vespucci-offline.png
[StartEditing]: /images/mobile-mapping/vespucci-start-editing.png
[EditTags]:     /images/mobile-mapping/vespucci-edit-tags.png
[AddObject]:    /images/mobile-mapping/vespucci-add-object.png
[AddNode]:      /images/mobile-mapping/vespucci-add-node.png
[AddWay]:       /images/mobile-mapping/vespucci-add-way.png
[AddPolygon]:   /images/mobile-mapping/vespucci-add-polygon.png
[AddNodeToWay]: /images/mobile-mapping/vespucci-add-node-to-way.png
[ModifyObject]: /images/mobile-mapping/vespucci-modify-object.png
[Undo]:         /images/mobile-mapping/vespucci-undo.png
[Redo]:         /images/mobile-mapping/vespucci-redo.png
[Goto]:         /images/mobile-mapping/vespucci-goto.png
[Search]:       /images/mobile-mapping/vespucci-search.png
[Upload]:       /images/mobile-mapping/vespucci-upload.png
[Preferences]:  /images/mobile-mapping/vespucci-preferences.png
[AlignImagery]: /images/mobile-mapping/vespucci-align-imagery.png
[ClearTiles]:   /images/mobile-mapping/vespucci-clear-tile-cache.png
[Feedback]:     /images/mobile-mapping/vespucci-feedback.png
