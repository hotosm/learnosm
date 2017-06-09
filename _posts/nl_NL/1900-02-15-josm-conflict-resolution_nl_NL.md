---
layout: doc
title: Conflicten oplossen in JOSM
permalink: /nl_NL/josm/josm-conflict-resolution/
lang: nl_NL
category: josm
---

Conflicten oplossen in JOSM
====================

> Deze handleiding kan gedownload worden als  [josm-conflict-resolution_nl_NL.odt](/files/josm-conflict-resolution_nl_NL.odt) of [josm-conflict-resolution_nl_NL.pdf](/files/josm-conflict-resolution_nl_NL.pdf)  
> Bijgewerkt 27-09-2016  

Soms werkt u in JOSM en wanneer u al uw prachtige bewerkingen uploadt, krijgt u een vervelend bericht dat klaagt over een conflict.  
![conflict detected][]  
Wat er gebeurde is dat u een aantal gegevens downloadde, die een punt punt bevatte dat we knoop A zullen noemen. Terwijl u aan het bewerken was heeft iemand anders ook Knoop A gedownload, die gewijzigd, en de wijzigingen terug opgeslagen in OpenStreetMap. Wanneer u nu probeert uw versie van Knoop A te uploaden, verschilt die van die welke al is opgeslagen in OSM. Daarom weet JOSM niet welke versie van Knoop A zou moeten worden opgeslagen.  

Conflicten
----------

Soms is JOSM is in staat voor zichzelf uit te vogelen wat het met conflicten moet doen, en zal het u ene bericht als het volgende geven:  
![resolved automatically][]  
Dit betekent dat JOSM automatisch heeft besloten dat items in uw lokale gegevensset niet zullen worden geüpload naar de hoofdserver omdat zij al zijn verwijderd door een andere gebruiker. In sommige conflicten is er echter door JOSM geen gemakkelijke actie voor JOSM te ondernemen en laat het de beslissing over aan de gebruiker om te bepalen wat de beste te nemen actie is. Dit betekent dat het aan u is om de conflicten op te lossen.  

Dit vertelt u te kijken naar al uw conflicten in Laag 1 in het vak **Conflict**:  
![warning unresolved][]  

Dit venster verschaft u een waarschuwing dat het waarschijnlijk is dat u een conflict gaat tegenkomen met uw bewerkingen. Als het controleert op de server zult u in staat zijn de problemen bij het bewerken, die zouden kunnen optreden, op te lossen:  
![check on server][]  

Deze waarschuwing vertelt u dat JOSM een knoop niet kon verwijderen omdat daarnaar nog steeds op één of andere manier naar wordt verwezen. De gebruiker moet, om dit op te kunnen lossen, teruggaan naar JOSM en het conflict oplossen vóórdat de gegevens worden geüpload:  
![still in use][]  

Conflicten oplossen
--------------------

Het proces van het oplossen van een conflict is vrij eenvoudig, hoewel het op het eerste gezicht verwarrend kan lijken in JOSM. In de basis zal JOSM u voor elk conflict twee keuzes geven - uw versie van een object en dat welke op de server staat. U dient te kiezen of u uw versie wilt behouden, of dat de nieuwe versie op de server zou moeten blijven bestaan.  
U zou kunnen denken "natuurlijk zal mijn versie beter zijn!” En misschien heeft u wel gelijk. Maar denk even terug aan ons voorbeeld aan het begin van dit hoofdstuk. Misschien, terwijl u bezig was met bewerken, heeft een andere mapper heel veel informatie toegevo3egd aan een van de knopen in uw gegevensset. Als u uw versie verkiest boven hun versie, zult u alle waardevolle informatie die door hen werd toegevoegd, verliezen. Daarom zou u moeten verwegen om hun versie te behouden, of die samen te voegen met die van uzelf.  
Wanneer u een pop-upvenster met een conflict krijgt, is het het beste om de knop “Alleen synchroniseren ...”  te kiezen. U moet dit misschien voor meer dan één object doen, maar het is het beste om conflicten één voor één op te lossen.  
![synchronize node][]  
Als u eenmaal op deze knop hebt geklikt zult u een pop-upvenster krijgen met daarin de details voor uw conflict. Het foutenbericht zou er gecompliceerd uit kunnen zien, maar het is eigenlijk eenvoudig. U zult weten welke type conflict u heeft door het rode vierkant in de bovenste tab. Het conflict in het onderstaande voorbeeld verwijst naar de eigenschappen, zoals de locatie en het bestaan van het object. Dat is waarom de coördinaten en status Verwijderd zijn vermeld.  

**Type conflict:**

- **Eigenschappen:**  Object is verplaatst (coördinaten) of verwijderd  
- **Tags:**  Tags komen niet overeen  
- **Knopen:**  Er bestaat een verschil in de knopen die zijn vermeld voor twee wegen  
- **Leden:**  Er bestaat een verschil in de lijst met leden in een relatie  
![properties with conflicts][]  

Conflicten verschijnen alleen met twee verschillende bewerkingen per keer. Als er drie of meer conflicten zijns, dan zal een reeks conflicten tevoorschijn komen. Daarom moet u er voor kiezen of samen te voegen met slechts twee conflicten per keer. U kunt kiezen voor uw versie, de andere versie of, soms, de twee samenvoegen.  

In het onderstaande voorbeeld heeft u gene optie om ze samen te voegen. Klik op de eerste kolom, of Mijn versie als u er van overtuigd bent dat uw bewerkingen de juiste zijn. Klik op Hun versie als u denkt dat de andere bewerkingen beter zijn.  
![conflicts resolved][]  

Als u eenmaal hebt geselecteerd welke versie volgens u de beste is, klik dan op “Oplossing toepassen.” Er zullen nog enkele vensters verschijnen en u zult op weg zijn om uw bewerkingen te uploaden. Doe nog wat bewerkingen. Klik dan op ‘Uploaden’. U zult een pop-up krijgen die zegt:  
![command stack][]  

In uw menu Vensters heeft u ene venster Conflict. Dat venster geeft een lijst met conflicten weer. Het totale aantal nog niet opgeloste conflicten wordt in de kop weergegeven. U kunt een conflict selecteren of oplossen door er op te klikken. Dit is handig als u veel conflicten hebt om af te handelen.  
![one unresolved][]  
U kunt geen wijzigingen uploaden totdat deze lijst leeg is.  

Manieren om conflicten te vermijden
------------------------

### Regelmatig uploaden

Het is belangrijk uw bewerkingen regelmatig te uploaden om de kans op en het aantal conflicten te minimaliseren. Conflicten komen meer frequent voor bij hun die er naar neigen het gebied waaraan zij werken lokaal op te slaan en een tijdje te wachten met het uploaden ervan. Het is het beste om het gebied waaraan u werkt te downloaden, het te bewerken en daarna onmiddellijk te uploaden. Hoe meer tijd er zit tussen het downloaden van de gegevens en het uploaden van wijzigingen aan die gegevens, hoe groter de kans is dat iemand dat in de tussenliggende tijd bewerkt heeft. Wanneer u op een Mapathon bent en een object, zoals een weg, bewerkt waaraan ook nog door anderen kan worden gewerkt, upload dan heel frequent, misschien zelfs wel na elke 6 bewerkingen!  

### Het gebied dat u downloadde bewerken

Bewerken in het specifieke gebied dat u hebt gedownload minimaliseert het risico op conflicten.  Zorg er voor dat u niet bewerkt buiten het gebied dat u hebt gedownload. U kunt in JOSM eenvoudig zien welke gebieden buiten het door u gedownloade gebied liggen, omdat de achtergrond bestaat uit diagonale lijnen in plaats van egaal zwart.  

![edit outside area][]  

Samenvatting
--------
Wanneer u bewerkt in JOSM, loopt u het risico tegen conflicten aan te lopen. Conflicten treden op wanneer een object door twee personen tegelijkertijd is bewerkt. Door te begrijpen wat een conflict is en hoe er mee om te gaan, zult u in staat zijn er voor te zorgen dat de beste mogelijke bewerkingen worden opgeslagen in OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Appendix. More Specific Conflicts

### Tag Conflicts

If the tags of one version of an objects are different from the tags of
another version, the Conflict dialog shows a ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
the tab Tags. Click on the tab to display a dialog for resolving tag
conflicts.

There are three tables displayed in this dialog, from left to right:

1.  My version: shows the tags of the first object version participating
    in this conflict. These are usually the tags of the object version
    in your local data set.
2.  Merged version: shows the merged tags. This table is initially
    empty. The more tag conflicts you resolve, the more tag values will
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participating in this conflict. These are usually the tags of the
    object version currently stored on the server.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
and which you want to discard.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
and the background color turns to green.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
have to resolve differences in the list of
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)of two
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png