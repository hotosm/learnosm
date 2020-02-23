---
layout: doc
title: Beginnen met JOSM
permalink: /nl_NL/josm/start-josm/
lang: nl_NL
category: josm
published: true
---

Beginnen met JOSM
=============================


Hoe JOSM, de Java OpenStreetMap-bewerker, te downloaden en te installeren, enkele van de instellingen te wijzigen, een voorbeeldkaart te openen en enkele basisbewerkingen van de software te leren. Weet u nog dat we u in het hoofdstuk Introductie hebben gevraagd een kaart te tekenen van uw stad of dorp? We zullen dit hoofdstuk afsluiten door uw kaart opnieuw te tekenen, deze keer digitaal. Hierna zou u een goed begrip moeten hebben van hoe kaarten te tekenen in JOSM.

JOSM downloaden
-------------

- Als u al een kopie van JOSM op een CD of USB-drive hebt, kunt u doorgaan naar het volgende gedeelte, JOSM installeren.
- Als u het programma JOSM nog niet hebt, of de nieuwste versie ervan wilt, open uw webbrowser - dat mag Firefox, Chrome, Opera, of Internet Explorer zijn.
- Voer, in de adresbalk bovenin het scherm, het volgende in en druk op Enter: [josm.openstreetmap.de](https://josm.openstreetmap.de)
-   U kunt ook zoeken naar de website van JOSM door op het internet te zoeken naar “JOSM”.
-   De website zou er ongeveer zo uit moeten zien:

    ![JOSM website][]

-   Klik op “Windows Installer” om JOSM te downloaden als u Windows op uw computer hebt geïnstalleerd.

    ![Windows installer][]

-   Als u een ander besturingssysteem hebt, klik dan op de link voor uw systeem. Uw download zou nu moeten beginnen. In dit hoofdstuk gaan we er van uit dat u Windows gebruikt, maar de instructies zijn soortgelijk voor andere besturingssystemen.

JOSM installeren
------------

>  U zou problemen kunnen ondervinden bij het installeren van JOSM als Java nog niet is geïnstalleerd op uw computer. Als u problemen hebt in dit gedeelte, probeer dan Java te downloaden en te installeren. U kunt het hier downloaden: <https://www.java.com/en/download/>
>
>  Mac-gebruikers zouden oude versies van Java kunnen hebben Java. Bekijk [https://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](https://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) voor opties voor OSX 10.6 en 10.7.3+

- Zoek naar het installatiebestand voor JOSM op uw computer. Dubbelklik er op om het te installeren.
-   Klik op ‘OK’, ‘Next’, ‘I Agree’, en ‘Install’. Als de installatie is voltooid, klik dan op ‘Finish’ om JOSM voor de eerste keer te starten. Als u JOSM later nog eens wilt starten kunt u dat doen door te klikken in het menu Start, in de linker benedenhoek van uw computer, en te klikken op het programma JOSM.
-   U zou een venster kunnen zien dat u vraagt of u de software wilt bijwerken.  U hoeft niet bij te werken, omdat het nieuw is.  Druk op de knop “Cancel.”  Als u dit bericht niet meer wilt zien, selecteer dan het vak aan de onderzijde voordat u op “Cancel” drukt.
-  Als JOSM start, zal het er ongeveer zo uitzien:

    ![JOSM splash page][]

Voorkeuren voor JOSM
----------------

Er zijn veel verschillende instellingen in JOSM die u kunt aanpassen.  Één instelling die u misschien zou willen aanpassen is de taal. JOSM is vertaald in vele talen en u zou de voorkeur kunnen hebben voor een andere.

-   Klik op Bewerken -\> Voorkeuren om toegang te verkrijgen tot het venster Voorkeuren,

    ![Preferences window][]

-   Klik, aan de linkerkant, op het pictogram dat er uitziet als een verfblik en kwast.
-   Klik, boven in het venster, op de tab “Weergave en vormgeving”.
-   Kies uw taal in het keuzemenu naast het woord "Language".

    ![Look and feel][]

-   Klik op OK.
-   U moet JOSM opnieuw opstarten om uw instellingen op te slaan. Klik op “Bestand” in de linker bovenhoek en klik op “Opnieuw starten” nabij de onderzijde van het menu.

Basis tekenen met JOSM leren
-----------------------------

-   Laten we nu een voorbeeldbestand voor JOSM openen dat we zullen gebruiken om de basismanieren te leren om kaarten te bewerken met JOSM. Onthoud dat deze kaart niet echt is, in die zin dat het geen echte kaart is van een echte plaats, dus zullen we hem niet opslaan in OpenStreetMap.
- Download het bestand hier: [sample.osm](/files/sample.osm)
- Laten we nu het voorbeeld kaartbestand openen in JOSM, Klik op de knop “Openen” in de linker bovenhoek.

    ![Open file][]

- Zoek naar het bestand **sample.osm**. Het staat vermoedelijk in uw map Downloads, tenzij u het ergens anders heeft opgeslagen. Klik er op en klik dan op “Openen”.
- U zou nu een voorbeeldkaart moeten zien die er ongeveer zo uitziet:

    ![Sample file][]

- U zult deze gegevens gebruiken om de verschillende technieken voor bewerken uit te proberen. _U moet echter deze fictieve gegevens nooit uploaden naar de database._ 

### Basisbewerkingen

- De kaart naar links, rechts, naar boven of beneden verplaatsen: houdt uw rechter muisknop ingedrukt en verplaats de muis.
-   Er zijn verschillende manieren om op de kaart in en uit te zoomen. Als u een muis hebt kunt u uw muiswiel gebruiken om in en uit te zoomen. Als u een laptop gebruikt en geen muis hebt, kunt u in en uit zoomen met de schaalbalk in de linker bovenhoek van het kaartvenster. Sleep de balk naar links en naar rechts door uw linker muisknop ingedrukt te houden en de schaalbalk naar links of rechts te verplaatsen met uw muis.

    ![Scale bar][]

-   Kijk naar de voorbeeldkaart. Er staan een aantal verschillende typen objecten op. Er is een rivier, een bos, enkele gebouwen, verscheidene wegen en een aantal winkels. Klik, om een object te selecteren, er op met uw linker muisknop.

### Punten, lijnen en vormen

- Als u op de verschillende objecten op de voorbeeldkaart klikt, zie dan dat er drie verschillende typen objecten op de kaart staan. Er zijn punten, lijnen en vormen.
-   Punten zijn één enkele locatie, weergegeven door symbolen. Op deze voorbeeldkaart staan twee punten, een schoenenwinkel en een supermarkt. De schoenenwinkel wordt weergegeven door het symbool van een schoen, en de supermarkt wordt weergegeven door een winkelkar.
-   Er staan ook verschillende lijnen op de kaart die wegen weergeven. Als u wat beter kijkt zult u zien dat er, in de lijnen, ook punten staan. Die punten hebben geen symbolen of andere informatie aan zich verbonden, maar zij helpen definiëren waar de lijn zich bevindt.
-   Tenslotte staan er ook nog enkele vormen op de voorbeeldkaart, die verschillende plaatsen weergeven - een bos, een rivier, een park en gebouwen. Een vorm wordt gebruikt om een gebied weer te geven, zoals een veld of een gebouw. Een vorm is exact hetzelfde als een lijn - het enige verschil is dat de lijn eindigt op hetzelfde punt als waar hij begint.

> Het is eenvoudig aan een kaart te denken die deze drie basistypen objecten bevat -
> punten, lijnen en vormen. In OpenStreetMap is er speciale terminologie
> die u in de loop hiervan zult leren. In OSM worden punten benoemd als
> **knopen**, en lijnen worden **wegen** genoemd. Een vorm wordt een **gesloten weg** genoemd
> omdat het slechts een lijn is die eindigt op hetzelfde punt als waar hij begon.

-   Het zou u kunnen zijn opgevallen dat wanneer u een object selecteert, er een lijst verschijnt aan de rechterkant van de kaart in een paneel genaamd “Eigenschappen”. Deze worden tags genoemd. Tags zijn informatie die is verbonden met een punt, lijn of vorm die beschrijft wat het is. We zullen in een later hoofdstuk meer leren over tags. Voor nu is alles dat u moet weten dat deze informatie helpt beschrijven of ons object een bos, een rivier of een gebouw is, of iets anders.
-   Denk aan het tekenen van een kaart met de hand, en hoe u ook punten, lijnen en vormen tekent. Welke andere plaatsen worden het beste weergegeven door punten? Lijnen? Vormen?

### Objecten wijzigen

-   Selecteer het bos aan de linkerkant van de kaart. Zorg er voor dat u klikt op de lijn rondom het bos, niet op een van de punten op de lijn. Houd nu de linker muisknop ingedrukt en sleep met uw muis. U zou het bos moeten kunnen verplaatsen naar een nieuwe locatie op de kaart.
-   Klik op één van de punten op de lijn rondom het bos. Houd uw linker muisknop ingedrukt en sleep met uw muis. U zou het punt moeten kunnen verplaatsen. Dat is hoe u de vorm van een object kunt wijzigen, of een punt verplaatsen.

### Tekenen

-   Aan de linkerkant van JOSM staat een kolom met knoppen. Veel van deze knoppen openen nieuwe panelen aan de rechterkant, die meer informatie over de kaart verschaffen. De meest belangrijke knoppen staan echter aan de bovenkant van deze kolom. Deze knoppen wijzigen wat u met uw muis kunt doen.
- De bovenste knoppen in deze kolom zijn die welke u het meest zult gebruiken. Zij worden gebruikt voor het selecteren van objecten en het tekenen van nieuwe.
- Tot nu toe heeft u het gereedschap Selectie gebruikt, wat er zo uitziet:

    ![Select tool][]

-   Voordat u gaat tekenen moet u er zeker van zijn dat er niets geselecteerd is. Klik in de zwarte ruimte op de kaart, waar die leeg is, om er zeker van te zijn dat er niets is geselecteerd.
- Klik op de tweede knop, het gereedschap Tekenen.

    ![Draw tool][]

- Zoek een leeg gebied op de kaart en dubbelklik met uw muis. Dit zal één enkel punt tekenen.
-   Klik eenmaal met uw muis om een lijn te tekenen. Verplaats uw muis en klik opnieuw. Ga door totdat u tevreden bent met uw lijn. Dubbelklik met uw muis om de lijn te voltooien.
- Teken, op dezelfde manier als u een lijn tekende, een vorm, maar beëindig de vorm door te dubbelklikken op het punt waar u begon met de lijn.

### Voorkeuzen toevoegen

-   Nu weten we hoe punten, lijnen n vormen te tekenen, maar we hebben nog steeds niet gedefinieerd wat zij weergeven. We willen in staat zijn om te zeggen dat onze punten winkels, scholen of iets anders zijn, en of onze vormen velden, gebouwen of iets anders zijn.
- Klik, in de kolom met knoppen aan de linkerkant, op het gereedschap Selectie.

    ![Select tool][]

-   Selecteer één van de objecten die u tekende met het gereedschap Tekenen. Klik, in het hoofdmenu, op “Voorkeuzen”. Verplaats uw muis door het submenu naar het type locatie dat u zou willen definiëren.
-   Wanneer u op een voorkeuze klikt, zal een formulier openen dat u vraagt om meer informatie. U hoeft niet elk veld in te vullen, maar u zou enkele belangrijke velden wel willen toevoegen, zoals de naam van het object.
-   Klik op “Voorkeuze toepassen” als u het invoeren van de informatie hebt voltooid. Als alles goed is gegaan zou uw punt, lijn of vorm van kleur moeten veranderen of een symbool moeten weergeven. Dat komt omdat u hebt gedefinieerd wat het is.

Uw eigen kaart tekenen
-----------------

- Laten we nu eens een kaart tekenen om de technieken te oefenen die u heeft geleerd. U wilt misschien opnieuw de kaart tekenen die u eerder op papier heeft getekend.
- Sleep de kaart weg van de voorbeeldkaart. Houd de rechter muisknop ingedrukt en sleep met uw muis, totdat u een ruim leeg gebied heeft om op te tekenen.
-   Gebruik het gereedschap Tekenen om punten, lijnen en vormen te tekenen. Beschrijf wat uw objecten zijn door ze te selecteren in het menu Voorkeuzen.
- Wanneer u gereed bent zou u uw eigen kaart moeten hebben, soortgelijk aan de voorbeeldkaart die we hebben geopend in sample.osm.

De voorbeeldlaag verwijderen
-----------------------

Als u deze basistechnieken van bewerken beheerst, wilt u misschien
uw aandacht verleggen naar het in kaart brengen van echte objecten.

_Het is erg belangrijk dat u eerst de laag met de voorbeeldgegevens verwijdert.
Die gegevens zijn fictief en moeten niet worden geüpload naar de OpenStreetMap
database (nieuwere uitgaven van JOSM voorkomen dat automatisch)._

Selecteer, in het venster Lagen aan de rechter bovenzijde van het scherm,  de voorbeeldlaag van OSM.
Klik dan op het pictogram van de prullenbak in de rechter benedenhoek van dat venster.
Als alternatief kunt u er voor kiezen om hem te verwijderen via het contextmenu van de laag.
U dient eerst echte gegevens te downloaden om door te kunnen gaan met bewerken.
Dat zal worden uitgelegd in het volgende hoofdstuk.

Samenvatting
-------

Excellent! Als alles goed ging heeft u geleerd hoe JOSM in te stellen op uw
computer, en de basisgereedschappen voor het tekenen van kaarten. In het volgende hoofdstuk zullen we
meer in detail kijken naar het proces van het bewerken van de kaart van OSM met JOSM.

[josm website]: /images/josm/josm-website.png

[windows installer]: /images/josm/windows-installer.png

[josm splash page]: /images/josm/josm-splash-page.png

[preferences window]: /images/josm/josm_preferences.png

[look and feel]: /images/josm/josm_look-and-feel.png

[open file]: /images/josm/josm_open-file.png

[sample file]: /images/josm/josm_sample-file.png

[scale bar]: /images/josm/josm_scale-bar.png

[select tool]: /images/josm/josm_select-tool.png

[draw tool]: /images/josm/josm_draw-tool.png