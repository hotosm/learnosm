---
layout: doc
permalink: /nl_NL/coordination/tm-whats-new-for-validators/
lang: nl_NL
title: Wat is er nieuw voor Validators in de Tasking Manager 3
category: coordination
date: 0500-10-21 12:00:00
---

# Wat is er nieuw voor Validators in de Tasking Manager 3

> Deze handleiding kan gedownload worden als [tm3-news-for-validators_nl_NL.odt](/files/tm3-news-for-validators_nl_NL.odt) of [tm3-news-for-validators_nl_NL.pdf](/files/tm3-news-for-validators_nl_NL.pdf)  

## Uw gebruikersprofiel

De Tasking Manager 3 heeft een aantal nieuwe mogelijkheden die zijn bedoeld voor mensen die valideren. Maak **bezoeken van uw gebruikersprofiel uw eerste activiteit in de nieuwe Tasking Manager**, wat kan worden geselecteerd uit het keuzemenu onder uw gebruikersnaam van OpenStreetMap (OSM) in de rechter bovenhoek..

![profile][]

1. **E-mailadres** - De Tasking Manager kan nu een e-mail versturen wanneer een gebruiker een bericht ontvangt in de Tasking Manager. Dit is uitermate belangrijk voor mensen die valideren. Achtergelaten opmerkingen bij het valideren van in kaart brengen worden nu met een grotere mate van waarschijnlijkheid gezien door de persoon waarvan u het werk valideert. Zorg er ook voor **uw e-mailadres toe te voegen** aan uw eigen profiel.

2. **Rol voor valideren** - Projecten kunnen optioneel eisen dat ervaren validators het in kaart brengen van het project valideren. Waar het "Ervaringsniveau mapper" automatisch wordt ingesteld op basis van wijzigingensets in OSM, wordt de rol van validator momenteel alleen handmatig ingesteld door de projectbeheerders. De initiële lijst met mensen met de rol van validator is niet compleet, neem contact op met een projectbeheerder om uw naam te hebben toegevoegd aan de lijst met mensen die de rol van validator hebben als u een ervaren validator bent die niet de rol van validator heeft in de Tasking Manager. **OPMERKING**: De rol van validator in Tasking Manager is heel breed en daarom vragen we projectbeheerders om deze rol alleen toe te wijzen aan validators waarvan zij het werk als validator direct kennen, en kennis uit de eerste hand hebben dat de validator is gekwalificeerd om een project in de Tasking Manager te valideren.


## Proces van valideren

### Stap 1 - Taak selecteren

Valideren kan alleen worden uitgevoerd door te klikken op de tab "Valideren" op een pagina Project. Als u eenmaal de tab "Valideren" hebt geselecteerd heeft u drie belangrijke opties om taken te selecteren om te valideren.

![selection][]

1. **Een individuele taak selecteren** om te valideren - Dit is exact hetzelfde proces als dat welk bestaat in de huidige Tasking Manager, u klikt op een taak of gebruikt de knop "Ontvang een willekeurige taak" en klik dan op "Begin met de taak" en start uw bewerker.

2. **Op gebied selecteren** - Dit stelt u in staat een polygoon te tekenen op de kaart van de taak en dat zal alle  taken selecteren die beschikbaar zijn voor valideren. U kunt dan klikken op "Begin met de taak" en dat zal ze allemaal vergrendelen voor valideren.

3. **Op gebruiker selecteren** - Een lijst met alle gebruikers die hebben bijgedragen aan het project staat aan de linkerkant van de pagina tezamen met informatie over hen. U kunt op elke kolomkop sorteren:

- Niveau - Gebaseerd op het aantal wijzigingensets van OSM
- Geregistreerd - Hoe lang zij de Tasking Manager gebruiken.
- Laatste validatie - De laatste keer dat zij een taak hebben gevalideerd

Door met uw muis over de link "Start" te gaan zal die de taken accentueren die de gebruiker heeft voltooid. Klikken op de link "Start" zal ze allemaal vergrendelen voor valideren.

### Stap 2 - Meerdere taken valideren 

Selecteren van één enkele taak en het starten van de door u gekozen bewerker zal zich hetzelfde gedragen als in de vorige versie van Tasking Manager, het echte verschil zal optreden wanneer u meerdere taken selecteert en uw bewerker start.

Er is een kleine wijziging in de iD editor, het grote verschil is dat in plaats van slechts het overzicht van één taak te zien, zult u overzichten van meerdere taken zien. Omdat iD alleen gebieden downloadt waarop u heel dicht inzoomt en GPX-overzichten accepteert is er niet veel verschil in uw werkwijze, slechts meer gebieden vergrendeld in Tasking Manager en meer gebied om het in kaart brengen na te kijken. 

Gebruiken van JOSM is nu echter enigszins anders. Bij het starten van JOSM zullen twee gegevenslagen van OSM worden gemaakt, één daarvan zal niet te uploaden zijn en zal de overzichten bevatten van de taken die gevalideerd moeten worden en één zal een blanco bewerkbare gegevenslaag voor OSM zijn. **Er zullen geen gegevens van OSM worden gedownload**.

![multiple][]

U zult de laag met de overzichten van de taak gebruiken als richtlijn voor het downloaden van gegevens van OSM naar de te bewerken laag en doorgaan met valideren zoals u normaal gesproken al zou doen.

Wanneer u gereed bent met het valideren heeft u de drie standaard opties, Alles als geldig markeren, Alles als ongeldig markeren, of Valideren stoppen. Indien meerdere taken zijn geselecteerd voor valideren dient dezelfde optie te worden gekozen voor alle geselecteerde taken. U kunt niet, in dezelfde werkstroom, sommige markeren als geldig en andere als ongeldig markeren.

Indien u na het nakijken taken dient te markeren met verschillende statussen, selecteer die dan individueel om ze overeenkomstig te kunnen markeren.


## Andere aan valideren gerelateerde items

1. **tab Vragen en opmerkingen** - Dit is nu een tab voor vragen en opmerkingen op projectniveau. Validators zouden de opmerkingen op die tab moeten bekijken en vragen beantwoorden indien nodig. Validators kunnen ook die tab gebruiken en de koppeling "Contact met projectbeheerder" om direct vragen of opmerkingen aan de maker van het project door te geven.

2. **Feed opmerkingen taakniveau** - De knop Activiteit en Statistieken in de rechter bovenhoek van de kaart met taken heeft nu een feed met alle opmerkingen die zijn achtergelaten voor de individuele taken. Validators zouden die lijst met opmerkingen moeten bekijken om problemen te identificeren en vragen te beantwoorden.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png