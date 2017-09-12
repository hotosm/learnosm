---
layout: doc
title: iD Editor
permalink: /nl_NL/beginner/id-editor/
lang: nl_NL
category: beginner
---

De iD Editor
=============

>  Deze handleiding kan worden gedownload als [beginner_id-editor_nl_NL.odt](/files/beginner_id-editor_nl_NL.odt) of [beginner_id-editor_nl_NL.pdf](/files/beginner_id-editor_nl_NL.pdf)
> Bijgewerkt op 30-03-2016

- TOC
{:toc}

De iD editor is een browser gebaseerde OpenStreetMap editor. iD is snel en eenvoudig te gebruiken en biedt de mogelijkheid om op basis van verschillende databronnen, zoals satellietbeelden, luchtfoto's, GPS, Field Papers of Mapillary, gebieden in kaart te brengen.

De iD editor is een prachtige manier om kleine en eenvoudige wijzigingen aan te brengen, die niet de uitgebreide functionaliteiten van JOSM (een meer geavanceerde editor) nodig hebben. Dit hoofdstuk behandelt de basis voor editen met iD.

Starten van de iD Editor
----------------------

-	De iD vereist een werkende internetverbinding.
-	Open je Internet browser, en ga naar de OpenStreetMap website op [https://www.openstreetmap.org](https://www.openstreetmap.org).
-	**Login** met je OpenStreetMap account
-	Verschuif en zoom in op de kaart naar het gebied dat je wilt bewerken. Je kunt de kaart verschuiven door je linkermuisknop ingedrukt te houden en de kaart te verschuiven naar het gewenste gebied.
-	Klik op de kleine pill naast **Bewerken**. En klik op **Edit with iD (in-browser editor)**.

![image1][]


iD Editor User Interface
-------------------------
![image2][]

1. **Edit Feature paneel.** Dit paneel laat alle tags zien van het geselecteerde object in de kaart.
	Je kunt tags toevoegen of bewerken vanuit dit paneel.
2. **Tools.** Dit paneel laat de basis bewerking tools zien:
    Teken een punt (node), *sneltoets* **1** ![image3][]{: height="24px"}
    Teken een lijn (weg), *sneltoets* **2** ![image4][]{: height="24px"}
    Teken een gebied (polygoon), *sneltoets* **3** ![image5][]{: height="24px"}
    Ongedaan maken, *sneltoets* **Ctrl+z** ![image6][]{: height="24px"}
    Opnieuw doen, *sneltoets* **Crtl+y** ![image7][]{: height="24px"}
    Bewerkingen opslaan, *sneltoets* **Ctrl+s** ![image8][]{: height="24px"}
3. **Kaartpaneel:** Dit venster toont verschillende configuratie opties:
    Inzoomen, *sneltoets* **+** ![image9][]{: height="24px"}
    Uitzoomen, *sneltoets* **-** ![image10][]{: height="24px"}
    Ga naar uw locatie ![image11][]{: height="24px"}
    Achtergrondlaag configureren, *sneltoets* **b** ![image12][]{: height="24px"}
    Kaartgegevens, *sneltoets* **f** ![Map Data][]{: height="24px"}
    Menu Help openen, *sneltoets* **h** ![image13][]{: height="24px"}
4. **Informatiepaneel:** Dit paneel toont verschillende informatie, zoals de schaalbalk en welke gebruikers hebben bijgedragen aan dit gebied.

Configureer de achtergrondlaag
--------------------------------

Klik op de knop **Achtergrondinstellingen** of gebruik de *sneltoets* **b**.![image14][]{: height="24px"}
![image15][]
Klik op één van deze vakken om het **niveau van helderheid** te wijzigen, de niveaus zijn 100%, 75%, 50% en 25% ![image16][]{: height="24px"}
Je kunt ook **de achtergrondlaag wijzigen** op basis van de provider van je voorkeur (de standaard is Bing Aerial Imagery).

Je kunt je eigen kaarttegels toevoegen door te klikken op **Aangepast**. Bijvoorbeeld, als je **een Field Paper wilt toevoegen** [^fieldpaper], klik op **Aangepast**, klik dan op het pictogram Vergrootglas (zoeken) om het volgende venster te openen:-
![image17][]
en voer jouw **FieldPaper snapshot URL** in, die er waarschijnlijk ongeveer zo uit zal zien: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>
**GPS-sporen inladen vanaf uw computer** (GPX-indeling), het GPX-bestand in het scherm van iD editor slepen en neerzetten.
**OpenStreetMap GPS-sporen** aanzetten, klik op het vak. In onderstaande afbeelding zie je publieke GPS-sporen weergegeven in verschillende kleuren, die de reisrichting aangeven.
![osm gps traces][]
Als er een [afbeelding verschuiving](/en/josm/aerial-imagery) is, kun je **de verschuiving van de afbeelding corrigeren** door te klikken op **Uitlijning repareren**. ![image18][]

- Klik op de navigatieknoppen om de luchtfoto te verplaatsen. Klik op de knop Herstellen om terug te gaan naar de originele positie. ![image20][]

Basisbewerkingen met iD
----------------------

### Punten Toevoegen

Klik op de knop **Punt** om een nieuw punt toe te voegen. ![image3][]{: height="24px"}

- Je muisaanwijzer zal veranderen in een plus (+) teken. Klik vervolgens op een plek in de kaart die je kent om een locatie aan te wijzen. Bijvoorbeeld als je weet dat er een ziekenhuis in je gebied is, klik op de positie van het ziekenhuisgebouw.
![image21][]
-⇥ Je ziet dat een nieuw punt is toegevoegd. Tegelijk zal het linker paneel veranderen in een formulier waar je tags kunt toevoegen aan het punt. Klik **omgeving Ziekenhuis** om het punt aan te merken als ziekenhuis.
![image22][]
-⇥ Je kunt de formulieren gebruiken om gedetailleerde informatie toe te voegen aan het punt. Je kunt de naam van het ziekenhuis toevoegen, een adres en/of andere informatie. Onthoud dat elk punt andere opties heeft, afhankelijk van welke tag je kiest uit het paneel met objecten.
-⇥ Als je een fout maakt, zoals een verkeerde locatie, kun je het punt verplaatsen naar een nieuwe locatie door de linkermuisknop ingedrukt te houden op het punt en het te verslepen. Of, als je het punt wilt verwijderen, klik op het punt en klik op het pictogram dat op een prullenbak lijkt. ![image23][]{: height="24px"}
Een "punt", aangemaakt in de iD editor is een opzichzelf staande "node" met een aantal "tags" eraan.

### Lijnen tekenen

Klik op de knop **Lijn** om een nieuwe lijn toe te voegen. ![image4][]{: height="24px"}

- Je muisaanwijzer zal veranderen in een plusteken (+) . Zoek een weg die nog niet is getekend op de kaart en volg deze weg. Klik eenmaal op het punt waar de weg begint, verplaats je muis en klik om extra punten toe te voegen. Dubbelklik op het einde van de weg om het tekenen te stoppen. Let weer op het paneel aan de linkerkant.
![image24][]
- Net als met het punt, selecteer de juiste tags voor je lijn.
- Je kunt punten van de lijn slepen door met de linker muisknop op een punt te klikken en dat te slepen.
- Je kunt ook de gehele lijn verplaatsen door die te selecteren en het gereedschap **Verplaats** te kiezen. Sleep dan de lijn naar een nieuwe positie. ![image30][]{: height="24px"}
- Als je op met de linker muisknop op een individueel punt (node) op de lijn klikt, zie je de volgende gereedschappen:
- Verwijder punt van de lijn. ![image23][]{: height="24px"}
- Punt losmaken van de lijn. ![image26][]{: height="24px"}
- Lijn in twee lijnen splitsen vanaf het door u geselecteerde punt. ![image27][]{: height="24px"}
- Als je met je linker muisknop op een lijn klikt (maar niet op een punt), zie je de volgende gereedschappen:
- Lijn verwijderen. ![image23][]{: height="24px"}
- Maak een cirkel van deze lijn (alleen actief als de lijn gesloten is) ![image29][]{: height="24px"}
- Lijn verplaatsen ![image30][]{: height="24px"}
- Maak een vierkant van deze lijn (alleen actief als de lijn gesloten is) ![image31][]{: height="24px"}
- Verander de richting van de lijn (goed voor rivieren & éénrichtingsverkeer) ![image32][]{: height="24px"}

Een "lijn" toegevoegd in de iD editor is een "weg" met "tags" eraan gekoppeld.

> Een speciale notitie over **Verwijderen**: In het algemeen zou je het verwijderen van objecten die anderen hebben toegevoegd, moeten vermijden, als deze alleen verbetering vereisen. Je kunt je eigen fouten verwijderen, maar objecten van anderen *aanpassen* als deze aanpassingen vereisen. Dit zorgt voor het behoud van de historie van de objecten in de OSM database en toont respect voor mede bijdragers. Als je echt denkt dat iets verwijderd zou moeten worden, vraag dan de originele mapper of een van de OSM mailing lijsten voordat je dat doet.

### Vlakken tekenen (Polygonen)

Klik op de knop **Vlak** om een nieuw meerzijdig vlak toe te voegen. ![image34][]{: height="24px"}

- Je muisaanwijzer zal veranderen in een plusteken (+) . Probeer de omtrek van een gebouw te volgen met de luchtfoto als richtlijn.
- Je zult zien dat de kleur van je vlak zal veranderen, afhankelijk van de attributen die je daar aan toewijst.
![image35][]
- De gereedschappen die beschikbaar zijn als je een vorm selecteert zijn gelijk aan die voor een lijn.

Een "vlak" in de iD editor is eigenlijk een "gesloten weg" met tags eraan gekoppeld.

Bewerkingen opslaan
--------------------

Wanneer (en als) je je bewerkingen wilt opslaan in OpenStreetMap, klik dan op de knop **Opslaan**. Het paneel links zal het paneel Uploaden weergeven.
![image36][]

- Voer een opmerking in over je bewerkingen en klik op **Opslaan**.

> Als je hetzelfde object hebt bewerkt (punt, weg of gebied) in dezelfde tijd als een andere persoon dat bewerkte, zul je een waarschuwing ontvangen dat jouw bewerkingen niet kunnen worden geüpload totdat  je de **conflicten** hebt opgelost - kies welke bewerkingen moeten worden geaccepteerd  & upload je wijzigingen. *Oplossen van conflicten behelst vaak het accepteren van bewerkingen van andere personen, in welke geval je wilt teruggaan naar het betreffende object en opnieuw bewerken (**sla deze keer kort na het bewerken op om een nieuw conflict te vermijden!**).*

Extra informatie en Aangepaste Tags
---------------------------------------

-Wanneer je een object bewerkt, zul je een reeks pictogrammen zien aan de onderkant van het attributenpaneel. Je kunt extra informatie toevoegen door op deze pictogrammen te klikken:

- Hoogte toevoegen ![image37][]{: height="24px"}
- Opmerkingen toevoegen ![image38][]{: height="24px"}
- Contactgegevens / telefoonnummer toevoegen ![image39][]{: height="24px"}
- Tag voor bron toevoegen ![image40][]{: height="24px"}
- Website toevoegen ![image41][]{: height="24px"}
- Informatie over toegankelijkheid toevoegen ![image42][]{: height="24px"}
- Link voor Wikipedia toevoegen ![image43][]{: height="24px"}

Of je kunt aangepaste tags toevoegen door te klikken op **Alle tags**. ![image44][]{: height="24px"}

- Dit zal alle tags weergeven die aan het object zijn gekoppeld.
![image45][]
- Klik op het plusteken  (+) om sleutels en waarden toe te voegen of klik op het pictogram Prullenbak om tags te verwijderen.

iD versus JOSM
---------------

**iD is goed voor...**

- Wanneer je eenvoudige bewerkingen doet
- Wanneer je internet snel genoeg is om luchtfoto's in te laden en de bewerkingen op te slaan
- Wanneer je zeker wilt zijn dat je een eenvoudig en consistent schema voor tags gebruikt
- Wanneer je geen software mag installeren op de computer die je gebruikt

**JOSM is beter...**

- Wanneer je veel gebouwen toevoegt (Zie plug-in Buildings_tool )
- Wanneer je veel lijnen of vlakken bewerkt die reeds bestaan
- Wanneer je een onbetrouwbare internetverbinding hebt of offline bent
- Wanneer je een specifiek schema voor tags gebruikt (of aangepaste voorkeuzen)

[^fieldpaper]: Er is een [gedeelte van LearnOSM](/nl_NL/mobile-mapping/field-papers/) dat meer informatie geeft over Field Papers.




[image1]: /images/beginner/id-editor_image1.png
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png
