---
layout: doc
title: iD Editor
permalink: /nl_NL/beginner/id-editor/
lang: nl_NL
category: beginner
---

De iD Editor
=============

> Bijgewerkt op 10-06-2019

Beginnen met in kaart brengen voor een Tasking Manager voor HOT of MissingMaps etc? Bekijk ons [gedeelte HOT-tips](/nl_NL/hot-tips/).  

- TOC
{:toc}

De iD editor is een browser gebaseerde OpenStreetMap editor. iD is snel en eenvoudig te gebruiken en biedt de mogelijkheid om op basis van verschillende databronnen, zoals satellietbeelden, luchtfoto's, GPS, Field Papers of Mapillary, gebieden in kaart te brengen.  

De iD editor is een prachtige manier om kleine en eenvoudige wijzigingen aan te brengen, die niet de uitgebreide functionaliteiten van JOSM (een meer geavanceerde editor) nodig hebben. Dit hoofdstuk behandelt de basis voor editen met iD.  

Starten van de iD Editor
----------------------

-	De iD vereist een werkende internetverbinding.  
-	Open je Internet browser, en ga naar de OpenStreetMap website op [http://www.openstreetmap.org](http://www.openstreetmap.org).  
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
    Bewerkingen opslaan, *sneltoets* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Kaartpaneel:** Dit venster toont verschillende configuratie opties:  
    Inzoomen, *sneltoets* **+** ![image9][]{: height="24px"}  
    Uitzoomen, *sneltoets* **-** ![image10][]{: height="24px"}  
    Ga naar uw locatie ![image11][]{: height="24px"}  
    Achtergrondlaag configureren, *sneltoets* **b** ![image12][]{: height="24px"}  
    Kaartgegevens, *sneltoets* **f** ![Map Data][]{: height="24px"}  
    Problemen, *shortcut key* **i** ![Issues][]{: height="24px"}  
    Menu Help openen, *sneltoets* **h** ![image13][]{: height="24px"}  
4. **Informatiepaneel:** Dit paneel toont verschillende informatie, zoals de schaalbalk en welke gebruikers hebben bijgedragen aan dit gebied.  

## De achtergrondlaag configureren 

Klik op de knop **Achtergrondinstellingen** of gebruik de *sneltoets* **b**.![image14][]{: height="24px"}  
![image15][]  
Je kunt **de achtergrondlaag wijzigen** op basis van de provider van je voorkeur (de standaard is Bing Aerial Imagery).  

Je kunt je eigen kaarttegels toevoegen door te klikken op **Aangepast**. Bijvoorbeeld, als je **een Field Paper wilt toevoegen** [^fieldpaper], klik op **Aangepast**, klik dan op het pictogram Vergrootglas (zoeken) om het volgende venster te openen:-  
![image17][]   
en voer jouw **FieldPaper snapshot URL** in, die er waarschijnlijk ongeveer zo uit zal zien: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
**GPS-sporen inladen vanaf uw computer** (GPX-indeling), het GPX-bestand in het scherm van iD editor slepen en neerzetten.  
**OpenStreetMap GPS-sporen** aanzetten, klik op het vak. In onderstaande afbeelding zie je publieke GPS-sporen weergegeven in verschillende kleuren, die de reisrichting aangeven.  
![osm gps traces][]  
Klik op **Display Options** om het **uiterlijk van de afbeelding** te wjzigen.  
![DisplayOptions][]  
Als er een [imagery offset](/en/josm/aerial-imagery) is, kun je **de verschuiving van de afbeelding corrigeren** door te klikken op **Repareer de ligging**.  
![image18][]  

- Klik op de navigatieknoppen om de luchtfoto te verplaatsen. Klik op de knop Herstellen om terug te gaan naar de originele positie. ![image20][]  

Basisbewerkingen met iD  
----------------------  

### Punten Toevoegen  

Klik op de knop **Punt** om een nieuw punt toe te voegen. ![image3][]{: height="24px"}  

- Je muisaanwijzer zal veranderen in een plus (+) teken. Klik vervolgens op een plek in de kaart die je kent om een locatie aan te wijzen. Bijvoorbeeld als je weet dat er een ziekenhuis in je gebied is, klik op de positie van het ziekenhuisgebouw.  
![image21][]  
- Je ziet dat een nieuw punt is toegevoegd. Tegelijk zal het linker paneel veranderen in een formulier waar je tags kunt toevoegen aan het punt. Klik **omgeving Ziekenhuis** om het punt aan te merken als ziekenhuis.  
![image22][]  
- Je kunt de formulieren gebruiken om gedetailleerde informatie toe te voegen aan het punt. Je kunt de naam van het ziekenhuis toevoegen, een adres en/of andere informatie. Onthoud dat elk punt andere opties heeft, afhankelijk van welke tag je kiest uit het paneel met objecten.  
- Als je een fout maakt, zoals een verkeerde locatie, kun je het punt verplaatsen naar een nieuwe locatie door de linker muisknop ingedrukt te houden op het punt en het te verslepen. Of, als je het punt wilt verwijderen, klik met de linker muisknop op het punt, activeer het contextmenu door met de rechter muisknop te klikken en klik dan op het pictogram dat op een prullenbak lijkt. ![PointToolDelete][]{: height="24px"}  
Een "punt", aangemaakt in de iD editor is een opzichzelf staande "node" met een aantal "tags" eraan.  

### Lijnen tekenen  

Klik op de knop **Lijn** om een nieuwe lijn toe te voegen. ![image4][]{: height="24px"}  

- Je muisaanwijzer zal veranderen in een plusteken (+) . Zoek een weg die nog niet is getekend op de kaart en volg deze weg. Klik eenmaal op het punt waar de weg begint, verplaats je muis en klik om extra punten toe te voegen. Dubbelklik op het einde van de weg om het tekenen te stoppen. Let weer op het paneel aan de linkerkant.  
![image24][]  
- Net als met het punt, selecteer de juiste tags voor je lijn.  
- Je kunt punten van de lijn slepen door met de linker muisknop op een punt te klikken en dat te slepen.  
- Als je op met de linker muisknop op een individueel punt (node) op de lijn klikt en klikt ofwel met de rechter muisknop of met de spatiebalk om het contextmenu te activeren, zie je de volgende gereedschappen:  
  - Lijn voortzetten vanaf dit punt ![PointToolContinue][]{: height="24px"}  
  - Lijnen losmaken op dit punt ![PointToolDisconnect][]{: height="24px"}  
  - Lijn in twee lijnen splitsen op dit punt. ![PointToolSplit][]{: height="24px"}  
  - Punt van de lijn verwijderen. ![PointToolDelete][]{: height="24px"}  
- Als je met je linker muisknop op een lijn klikt (maar niet op een punt), zie je de volgende gereedschappen:  
  - Maak een cirkel van een lijn (alleen actief als de lijn gesloten is) ![LineToolCircularize][]{: height="24px"}  
  -   Lijn losmaken van andere objecten ![LineToolDisconnect][]{: height="24px"}  
  - Lijn verplaatsen ![LineToolMove][]{: height="24px"}  
  -   Alle hoeken loodrecht maken ![LineToolSquare][]{: height="24px"}  
  -   Reflecteer de lijn langs zijn korte as ![LineToolReflectShort][]{: height="24px"}  
  -   Reflecteer de lijn langs zijn lange as ![LineToolReflectLong][]{: height="24px"}  
  - Verander de richting van de lijn (goed voor rivieren & éénrichtingsverkeer) ![LineToolReverse][]{: height="24px"}  
  -   De lijn langs zijn centrum draaien ![LineToolRotate][]{: height="24px"}  
  -   De lijn recht maken ![LineToolStraighten][]{: height="24px"}  
  -   Lijn verwijderen. ![LineToolDelete][]{: height="24px"}  

Een "lijn" toegevoegd in de iD editor is een "weg" met "tags" eraan gekoppeld.

> Een speciale notitie over **Verwijderen**: In het algemeen zou je het verwijderen van objecten die anderen hebben toegevoegd, moeten vermijden, als deze alleen verbetering vereisen. Je kunt je eigen fouten verwijderen, maar objecten van anderen *aanpassen* als deze aanpassingen vereisen. Dit zorgt voor het behoud van de historie van de objecten in de OSM database en toont respect voor mede bijdragers. Als je echt denkt dat iets verwijderd zou moeten worden, vraag dan de originele mapper of een van de OSM mailing lijsten voordat je dat doet.

### Vlakken tekenen (Polygonen)

Klik op de knop **Vlak** om een nieuw meerzijdig vlak toe te voegen. ![image34][]{: height="24px"}  

- Je muisaanwijzer zal veranderen in een plusteken (+) . Probeer de omtrek van een gebouw te volgen met de luchtfoto als richtlijn.  
- Je zult zien dat de kleur van je vlak zal veranderen, afhankelijk van de attributen die je daar aan toewijst.  
![image35][]  
- De gereedschappen, die beschikbaar zijn als je een vorm selecteert en met de rechter muisknop het contextmenu activeert, zijn gelijk aan die wanneer u op een lijn klikt.  

Een "vlak" in de iD editor is eigenlijk een "gesloten weg" met tags eraan gekoppeld.

### Multipolygonen tekenen

Soms moet u een polygoon tekenen die niet alleen ene buitenste omtrek heeft maar ook één of meer interne omtrekken. Denk aan gebouwen met daarbinnen gelegen tuinen of eilanden met meren. *Teken niet al deze wegen in één lijn* zodat de binnenste omtrekken de buitenste omtrek onderbreken. Teken in plaats daarvan die omtrekken afzonderlijk, plaats alleen tags op de buitenste omtrek, selecteer alle omtrekken en druk op **c** om ze te combineren tot wat een multipolygoon wordt genoemd.

![create multipolygon][]

Wanneer u een van de omtrekken van de nieuw gemaakte multipolygoon selecteert, kunt u aan de linkerkant zien tot welke multipolygonen die behoort

![part of multipolygon][]

## Problemen

De bewerker voert een aantal controles uit zodra u iets bewerkt. Als het denkty dat wat u deed zou kunnen orgen voor problemen, geeft het daarvan bericht op de tab problemen. Wanneer het pictogram voor problemen aan de rechterkant een gele (voor waarschuwingen) of rode (voor fouten) punt bevat zou u de tab moeten openen en kijken wat het bericht is. Deze informatie wordt ook weergegevben in de tab van het object aan de linkerkant als het relevante object is geselecteerd. U wordt ook gewaarschuwd als er niet opgeloste problemen zijn wanneer u uw gegevens upload. 

![Issue][] ![Error][]

Het onderste gedeelte van de tab Problemen geeft de beschikbare regels weer en stelt u in staat ze individueel uit te sachakelen, hoewel dat niet wordt aanbevolen.

Bewerkingen opslaan
--------------------

Wanneer (en als) je je bewerkingen wilt opslaan in OpenStreetMap, klik dan op de knop **Opslaan**. Het paneel links zal het paneel Uploaden weergeven.  
![image36][]  

- Voer een opmerking in over je bewerkingen en klik op **Opslaan**.  

> Als je hetzelfde object hebt bewerkt (punt, weg of gebied) in dezelfde tijd als een andere persoon dat bewerkte, zul je een waarschuwing ontvangen dat jouw bewerkingen niet kunnen worden geüpload totdat  je de **conflicten** hebt opgelost - kies welke bewerkingen moeten worden geaccepteerd  & upload je wijzigingen. *Oplossen van conflicten behelst vaak het accepteren van bewerkingen van andere personen, in welke geval je wilt teruggaan naar het betreffende object en opnieuw bewerken (**sla deze keer kort na het bewerken op om een nieuw conflict te vermijden!**).*

Extra informatie en Aangepaste Tags
---------------------------------------

Wanneer je een object bewerkt, zul je een menu "Veld toevoegen" zien aan de onderkant van het attributenpaneel. Je kunt diverse aanvullende informatie toevoegen door een van de items (laag, hoogte, Wikipedia etc.) te selecteren.  

![AdditionalTags][]

Of je kunt aangepaste tags toevoegen door te klikken op **Alle tags**. ![image44][]{: height="24px"}  

- Dit zal alle tags weergeven die aan het object zijn gekoppeld.  
![image45][]  
- Klik op het plusteken  (+) om sleutels en waarden toe te voegen of klik op het pictogram Prullenbak om tags te verwijderen.

Meer handleidingen
------------------

[Onze pagina externe bronnen](/en/resources/#iD) verschaft links naar een aantal videohandleidingen van verschillende bronnen.

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
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png