---
layout: doc
title: Luchtfoto's
permalink: /nl_NL/josm/aerial-imagery/
lang: nl_NL
category: josm
---

Luchtfoto's
================

> Deze handleiding kan gedownload worden als [aerial-imagery_nl_NL.odt](/files/aerial-imagery_nl_NL.odt) of [aerial-imagery_nl_NL.pdf](/files/aerial-imagery_nl_NL.pdf)  
> Bijgewerkt 21-09-2015  

Traceren vanaf afbeeldingen is een gemakkelijke en krachtige manier om bij te dragen aan OSM. Gebruiken van afbeeldingen om punten, lijnen en vormen op de grond te tekenen wordt **digitaliseren** genoemd. Het kan vaak worden onderscheiden van het verzamelen van gegevens van attributen op de grond, wat vaak **op de grond waarnemen** wordt genoemd. Digitaliseren van afbeeldingen kan de ruggengraat van kaarten voor OSM vormen, wat het waarnemen op de grond gemakkelijker kan maken voor mensen in het veld. In dit hoofdstuk zullen we iets meer leren over hoe luchtfoto's werken.  

Over luchtfoto's
-------------

Luchtfoto's is de term die we gebruiken om foto's te beschrijven die vanuit de lucht zijn gemaakt. Zij kunnen zijn genomen vanuit vliegtuigen, drones, helikopters, of zelfs vliegers en ballonnen, maar de meest voorkomende bron van afbeeldingen komt van satellieten in een baan om de aarde.  

[In het hoofdstuk over GPS](/nl_NL/mobile-mapping/using-gps) leerden we over de dozijnen satellieten in een baan om de aarde die onze GPS-ontvangers in staat stellen onze lente- en breedtegraad te identificeren. In aanvulling op deze GPS-satellieten, zijn er ook satellieten die foto's nemen van de aarde. Deze foto's worden dan bewerkt zodat zij kunnen worden gebruikt in software voor GIS (in kaart brengen). Bing Aerial Imagery bestaat uit satellietfoto's.  

Resolutie
----------

Alle digitale foto's zijn gemaakt uit pixels. Als u zeer veel inzoomt op een foto zult u merken dat de afbeelding wazig zal worden en uiteindelijk ziet u dat een foto is opgemaakt uit duizenden kleine vierkanten die elk een andere kleur hebben. Dat is zo als de foto is genomen met een draagbare camera, een mobiele telefoon of een satelliet in een baan om de aarde.  

![Image resolution][]

Resolutie verwijst naar de breedte in aantal pixels en de hoogte van het aantal pixels, waaruit een afbeelding bestaat. Meer pixels betekent een hogere resolutie, wat betekent dat u meer detail in de foto kunt zien.  Resolutie in draagbare camera's wordt vaak gemeten in megapixels. Hoe meer megapixels uw camera kan opnemen, hoe hoger de resolutie van uw foto's.  

Luchtfoto's is hetzelfde, met uitzondering van het feit dat we anders over resolutie spreken. Meten is belangrijk in luchtfoto's - daarom vertegenwoordigt een pixel ene bepaalde afstand op de grond.  We beschrijven afbeeldingen gewoonlijk als “twee meter resolutie afbeeldingen,” wat betekent dat één pixel het equivalent is van twee meters op de grond. Eén meter resolutie afbeeldingen zou een hogere resolutie hebben dan deze, en 50 cm resolutie zou nog hoger zijn. Dat is over het algemeen het bereik van de afbeeldingen die worden verschaft door Bing, hoewel het varieert tussen locaties, en op vele plaatsen is het slechter dan twee meter, op welk punt het moeilijker wordt objecten in de afbeelding te identificeren.  

![Comparison of low and high resolution imagery][]

Hoe hoger de resolutie van een luchtfoto, des te eenvoudiger het is om kaarten te maken.  

Geoverwijzingen
---------------

Elke pixel van een luchtfoto heeft een grootte, en elke pixel heeft ook een locatie. Zoals hierboven vermeld is dat omdat luchtfoto's geoverwijzingen hebben.  

Net zoals een GPS-punt een breedte- en lengtegraad heeft, hebben de pixels in een luchtfoto dat ook. Echter, net zoals slechte resolutie het in kaart brengen kan bemoeilijken, kunnen  afbeeldingen met slechte geoverwijzingen dat ook.  

Laten we even stilstaan bij hoe geoverwijzingen werken, en waarom het een uitdaging is om te doen. Wanneer iemand een afbeelding voorziet van geoverwijzingen, identificeren zij eerst een handvol pixels in de afbeelding die bekende locaties zijn. Als we een vierkante foto hebben, zouden we de coördinaten van alle vier hoeken kunnen identificeren, en op die manier kan de gehele foto juist worden geplaatst.  

Dit lijkt allemaal vrij eenvoudig, maar denk eens aan het volgende: de aarde is rond; cameralenzen zijn rond; toch zijn foto's plat en 2-dimensionaal. Dat betekent dat als een platte foto in kaart wordt gebracht op de ronde Aarde, zal er altijd een bepaalde uitrekking van de foto zijn en vervorming. Probeer u eens voor te stellen een sinaasappelschil vlak te maken. Het zal niet rechthoekig worden. Vanwege dit probleem, zouden niet alle pixels in een luchtfoto perfect geplaatst worden.  

Gelukkig hebben enkele slimme mensen slimme algoritme bedacht op dit probleem op te lossen, en dus is de afbeelding die u ziet in Bing vrij nauwkeurig. Op de meeste plaatsen zal het helemaal niet te merken zijn - en het is zeker prima voor het maken van kaarten. De meest voorkomende gebieden voor luchtfoto's die niet nauwkeurig gelokaliseerd zijn liggen in heuvelachtige, bergachtige gebieden. In het [hoofdstuk Verschuiving van afbeeldingen corrigeren](/nl/josm/correcting-imagery-offset) zullen we zien hoe dit probleem te corrigeren.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png