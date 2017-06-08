---
layout: doc
title: Gereedschappen van JOSM
permalink: /nl/josm/josm-tools/
lang: nl
category: josm
---

Gereedschappen om mee te bewerken in JOSM
==================

> Deze handleiding kan worden gedownload als [josm_josm-tools_nl.odt](/files/josm_josm-tools_nl.odt) of [josm_josm-tools_nl.pdf](/files/josm_josm-tools_nl.pdf)  
> Bijgewerkt op 14-07-2015  

In de [gids Starten met JOSM](/nl/josm/start-josm/) behandelden we de basisprincipes voor het tekenen in
JOSM, maar er zijn veel gereedschappen en technieken die niet werden gedemonstreerd.

Hier zullen we kijken naar enkele van de beschikbare basisgereedschappen en -technieken
voor het tekenen van kaartobjecten in JOSM, en in de volgende hoofdstukken zullen we
meer in de diepte kijken naar gevorderde gereedschappen voor tekenen.

Het voorbeeldbestand ophalen
-------------------

-   Als u deze handleiding wilt volgen en oefenen met behulp van de gereedschappen van JOSM tools, download
    [tools_menu_sample.osm](/files/tools_menu_sample.osm).
-   Start JOSM en open het bestand. het zou er zo uit moeten zien:

![tools_menu_sample.osm][]

Gereedschappen voor tekenen
-------------

Als u klikt op het menu "Gereedschappen" boven in JOSM, zult u zien dat daar
vele functies staan die u kunnen helpen bij het tekenen van lijnen en vormen, en
bewerken van de objecten op de kaart.

JOSM heeft enkele aanvullende gereedschappen om het eenvoudiger te maken om
lijnen en vormen te tekenen. Deze gereedschappen staan in het menu “Gereedschappen” boven
in JOSM.

![Tools menu][]

Voor het gebruiken van de functies in dit menu, moet u eerst een
punt, lijn of vorm in het kaartvenster selecteren. Het voorbeeldbestand bevat verschillende
elementen die zijn gelabeld met de namen van de verschillende gereedschappen in het menu.

-   Probeer één van de elementen in het ebstand te selecteren. Ga dan naar het menu Greedschappen
    en klik op de functie die is aangegeven vlak naast het object dat u heeft
    geselecteerd.
-   Klik bijvoorbeeld op de slecht getekende cirkel om die te selecteren.

![Align nodes in circle][]

-   Ga dan naar Gereedschappen-> Knopen uitlijnen in een cirkel.
-   De slecht getekende cirkel zal meer rond worden.

Experimenteer met elk van de gereedschappen met behulp van dit voorbeeldbestand. Een beschrijving van
enkele van de gereedschappen worden hieronder gegeven.

1.  **Weg splitsen:** Dit stelt u in staat een lijn op te delen in twee afzonderlijke lijnen.
    Dit is nuttig als u verschillende attributen wilt toevoegen aan verschillende
    delen van een weg, zoals een brug. Selecteer, om deze funcite te gebruiken, een
    punt in het midden van de lijn die u wilt splitsen, selecteer Weg
    splitsen uit het menu Gereedschappen, en uw lijn zou moeten zijn gesplitst in twee delen.

2.  **Wegen combineren:** Dit doet het tegenovergestelde van Weg splitsen. Voor het combineren van twee 
    lijnen naar één enkele lijn, moeten zijn één enkel punt delen. Selecteer, om
    deze functie te gebruiken, beide lijnen die u wilt combineren. U kunt
    meer dan één object selecteren door de SHIFT-toets ingedrukt te houden op uw
    toetsenbord en dan te klikken op elke lijn. Selecteer, wanneer u uw beide lijnen heeft geselecteerd,
    Wegen combineren uit het menu Gereedschappen.

    ![Combine way][]

    Indien u wegen combineert die verschillende richtingen hebben, zou u
    deze waarschuwing kunnen krijgen:

    ![Reverse and combine][]

    Als de wegen zijn verbonden en in dezelfde richting lopen, kies dan
    "Omkeren en combineren."

3.  **Wegen omkeren:** Dit zal de richting van de lijn wijzigen. Alle lijnen in
    OSM hebben een richting, die in JOSM wordt weergegeven door de pijlen op de lijn.
    De richting maakt gewoonlijk niet uit, behalve in het geval van éénrichtingswegen en
    rivieren die in ene bepaalde richting stromen. In die gevallen zou u de weg mogelijk om moeten
    keren, zodat die in de juiste richting gaat.

    ![Way direction][]

4.  **Weg vereenvoudigen:** Als uw lijn bestaat uit teveel punten en u zou hem
    eenvoudiger willen maken, zal dit enkele punten uit een lijn verwijderen.

    ![Simplify way][]

5.  **Knopen uitlijnen in een cirkel:** Indien u probeert een
    cirkelvormige vorm te maken, teken dan de cirkel zo goed als u kunt en selecteer die dan.
    Deze functie zal u helpen uw punten in een cirkel te schikken.

6.  **Cirkel aanmaken:** Als alternatief kunt u dit gereedschap gebruiken, dat
    een meer perfecte cirkel zal maken. Teken een lijn die de
    diameter van uw cirkel voorstelt, en pas dan dit gereedschap toe.

    ![Create circle][]

7.  **Knopen uitlijnen:** Deze functie zal een serie punten uitlijnen
    in één rechte lijn. Met lange lijnen is het beter om gedeelten te selecteren
    van de lijn die met worden uitgelijnd. Wees voorzichtig want dit heeft de
    neiging om de lijn een klein beetje te verschuiven.

    ![Align nodes in line][]

8. **Vorm loodrecht maken:** Deze functie is bijzonder nuttig voor het tekenen
    van regelmatige vormen, zoals gebouwen. Nadat u ene gebied heeft getekend, zal deze
    functie het opnieuw vormen zodat het rechthoekige hoeken heeft.

    ![Orthagonalize][]

9.  **Wegen losmaken:** Dit gereedschap stelt u in staat knopen los te maken die
    zijn verbonden. Het is nuttig wanneer twee objecten een knoop delen en zij zouden
    dat niet moeten doen. Een veel voorkomende fout is bijvoorbeeld een weg die een knoop deelt
    met de hoek van een gebouw. Natuurlijk lopen wegen gewoonlijk niet door gebouwen,
    dus is dit een fout, en u kunt de objecten van elkaar
    losmaken.

    ![Unglue way][]

    > De lijn en knoop zullen in feite niet afzonderlijk te zien zijn, totdat u ze verplaatst.

Sneltoetsen voor toetsenbord
------------------

Wanneer u eenmaal begonnen bent met bewerken zult u zich realiseren hoeveel tijd u kwijt bent
met het klikken op menu's en submenu's. JOSM heeft, om dit te vermijden, sneltoetsen voor het toetsenbord
voor nagenoeg alles.

Dat betekent dat u in plaats van te klikken op een object en dan door een lang
menuproces te gaan, kunt u eenvoudigweg een object selecteren en een toets op uw toetsenbord indrukken.

Alle in het eerdere gedeelte genoemde gereedschappen hebben sneltoetsen, die zijn
vermeld aan de rechterzijde van de naam van elk gereedschap in het menu Gereedschappen. Bijvoorbeeld: "O" is de
sneltoets voor het uitlijnen van knopen in ene cirkel. "L" is de sneltoets voor het uitlijnen in een lijn.
Het kan soms even duren om de sneltoetsen te leren, maar u zult merken dat het
uiteindelijk een heleboel tijd bespaart.

Hier zijn andere sneltoetsen (in **vet**) wat enkele van de meest belangrijke zijn.

1.  Het gereedschap Selectie activeren - **S**
2.  Het gereedschap Tekenen activeren - **A**
3.  Het gereedschap Zoomen activeren - **Z**
4.  De geselecteerde objecten verwijderen - **Delete**
5.  Inzoomen - **+**
6.  Uitzoomen - **-**


Op schaal brengen en roteren
----------------

Een veel gestelde vraag is hoe een lijn of vorm te draaien nadat die is
getekend.

-   Selecteer eerst een object om het te kunnen draaien.
-   Houd **SHIFT+CTRL** op uw toetsenbord ingedrukt.
-   Klik en sleep met de muis om te draaien.

![Rotate demo][]

Volg, om een object op schaal te brengen (het groter of kleiner te maken), hetzelfde
proces, maar houd in plaats daarvan **ALT+CTRL** ingedrukt.

Deze instructies worden weergegeven op de informatiebalk aan de onderzijde van JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png