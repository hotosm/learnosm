---
layout: doc
title: JOSM plug-ins Building Tools & Utilsplugin2 
permalink: /nl_NL/josm/josm-more-plugins/
lang: nl_NL
category: josm
---

JOSM plug-ins Buildings Tools & Utilsplugin2
============

> Deze handleiding kan gedownload worden als [josm-more-plugins_nl_NL.odt](/files/josm-more-plugins_nl_NL.odt) of [josm-more-plugins_nl_NL.pdf](/files/josm-more-plugins_nl_NL.pdf)  
> Bijgewerkt 12-09-2016  

De plug-ins **buildings_tools** en **utilsplugin2** voegen veel aanvullende functionaliteit toe aan JOSM. In dit gedeelte zullen we eens nader kijken naar de functies die zij verschaffen.  

De plug-in Buildings Tools
--------------------------

Als u dat nog niet gedaan heeft, installeer dan deze plug-in volgens de instructies in [JOSM Plugins](/nl_NL/josm/josm-plugins).  

![Buildings tools plugin][]

De plug-in Gebouwen tekenen is zeer nuttig voor het digitaliseren van gebouwen. Het stelt u in staat één zijde van een rechthoekig gebouw te traceren, en eenvoudig de vorm uit te breiden. Zelfs als u veel gebouwen digitaliseert, zal deze plug-in u klikken besparen, en u daarom ook tijd besparen.  

Als de plug-in eenmaal is geïnstalleerd zult u een nieuwe knop zien aan de linkerkant van JOSM, die eruit ziet als dit: ![Buildings tools button][]{: height="29px"}

Start JOSM en download een gebied waar u gebouwen wilt traceren.  

* Selecteer Gebouwen tekenen en klik tweemaal om een lijn op de kaart te tekenen.  

![Draw edge][]

* Verleng met de muis en klik opnieuw om een rechthoek te tekenen.  

![Extend building][]

* Dit zal niet alleen een rechthoek maken met slechts drie klikken maar het zal ook automatisch de tag **building=yes** aan de vorm toekennen.  

### Complexe gebouwen

U kunt ook meer gecompliceerde gebouwen maken door eerst verscheidene overlappende gebouwen te tekenen en ze dan samen te voegen.  

* Teken twee gebouwen die elkaar overlappen, zodat zij een L-vorm vormen.  
* Selecteer beide gebouwen (houdt SHIFT ingedrukt om meer dan één object te selecteren).  
* Ga naar Gereedschappen-> Overlappende gebieden samenvoegen of druk op SHIFT+J op uw toetsenbord.  

![Merge buildings][]

### Instellingen bewerken

Verder kunt u de standaard instellingen van de plug-in wijzigen.  

* Ga naar Gegevens-> Grootte gebouw instellen. ![Set buildings size][]{: height="39px"}  

* Als u veel gebouwen van een soortgelijke grootte maakt kunt u specifieke dimensies instellen voor de breedte en grootte voor de gebouwen, zoals 6 x 10 meter (de eenheid is in meters).  

![Set buildings size dialog][]

* Door het instellen van de dimensies heeft u slechts twee klikken nodig om gebouwen van precieze grootte te maken.  

Tenslotte kunt u klikken op de knop Gevorderd als u aanvullende tags zou willen toevoegen die automatisch zullen worden toegevoegd aan elk gebouw. Bijvoorbeeld: als elk gebouw dat u tekent in dezelfde straat ligt zou u een tag kunnen toevoegen die de straat identificeert en automatisch zal worden toegepast.  

![Buildings advanced][]


Utilsplugin2
-------------

* Als u dat nog niet gedaan heeft, installeer dan deze plug-in volgens de instructies in [JOSM Plugins](/nl_NL/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Nadat u de plug-in heeft geïnstalleerd en JOSM opnieuw heeft gestart, zult u een nieuw menu aan de bovenkant hebben, genaamd "Meer gereedschappen."  

![More tools menu][]

Maak een nieuwe laag en experimenteer met enkele van de nieuwe gereedschappen. Hier beschrijven we enkele van de meest nuttige nieuwe gereedschappen:  

1. **Knopen bij kruisingen toevoegen:**  Dit gereedschap is bijzonder nuttig voor het toevoegen van ontbrekende knopen op kruisingen van geselecteerde wegen. Het is een goede gewoonte dat wegen altijd gedeelde knopen hebben waar zij elkaar kruisen.  

    ![Nodes interesection][]

2. **Kopieer tags uit eerder selectie:**  Deze functie maakt het kopiëren van tags eenvoudiger. Als u veel objecten met dezelfde tags wilt maken, teken dan eerst de objecten.  Voeg dan de tags toe aan één object.  Klik op een ander object en druk op Shift + R om de tags van het eerder geselecteerde object te kopiëren.  U kunt dit doen voor alle objecten die u wilt taggen.  Onthoud dat de tags zullen worden gekopieerd uit het eerder geselecteerde object, dus als u klikt op een object dat nog niet getagd is en dan op een ander object dat niet getagd is, zult u niet in staat zijn tags te kopiëren.  

    ![Copy tags][]

3. **Brontag toevoegen:** Dit gereedschap vereenvoudigt het toevoegen van een tag voor de bron. Het onthoudt de bron die als laatste werd gespecificeerd en voegt die als onthouden brontag toe aan uw objecten. U kunt de bron met slechts één klik toevoegen.  

4. **Geometrie vervangen:** Dit gereedschap is fantastisch als u een slecht vorm gegeven object opnieuw wilt tekenen, maar de geschiedenis, attributen en ID-nummer van dat object wilt behouden. Bijvoorbeeld: als u een gebouw tegenkomt dat gecompliceerd is en op een slechte manier is getekend, dan - in plaats van tijdrovend elke knoop te wijzigen - kunt u het object opnieuw tekenen, de oude en nieuwe objecten selecteren, en ¨Geometrie vervangen¨ selecteren om alle informatie over te dragen.  

    ![Replace geometry][]


### Meer gereedschappen voor selectie

**Utilsplugin2** verschaft ook meer gereedschappen voor het menu "Selectie". Probeer ermee te experimenteren.  

![Selection menu][]

Eén van onze favoriete gereedschappen voor selectie is **Selectie van knopen opheffen:** Dit gereedschap heft het selecteren van alle knopen op. Dit kan handig zijn als u een vak tekent om veel objecten te selecteren, maar als u niet alle knopen wilt selecteren die zijn opgenomen in alle lijnen en vormen.  

![Unselect nodes][]

Veel succes!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

