---
layout: doc
title: Verschuiving van afbeeldingen corrigeren
permalink: /nl_NL/josm/correcting-imagery-offset/
lang: nl_NL
category: josm
---

Verschuiving van afbeeldingen
===============

> Deze handleiding kan worden gedownload als  [correcting-imagery-offset_nl_NL.odt](/files/correcting-imagery-offset_nl_NL.odt) of [correcting-imagery-offset_nl_NL.pdf](/files/correcting-imagery-offset_nl_NL.pdf)  
> Bijgewerkt 21-09-2015  

Providers van afbeeldingen leveren meestal een goede prestatie bij het plaatsen van geoverwijzingen bij hun afbeeldingen, maar af en toe kunnen de afbeeldingen uit positie zijn. Dit is in het bijzonder waar voor heuvelachtige of bergachtige gebieden, waar het moeilijk kan zijn een platte afbeelding over een gebied op aarde met vele contouren uit te strekken. Wanneer u afbeeldingen in JOSM laadt, kan het soms tien meter of meer van zijn ware positie liggen. Dit wordt **verschuiving van de afbeelding** genoemd.  

Merk op dat in de volgende afbeelding twee afzonderlijke luchtfoto's voorzien zijn van geoverwijzingen en zijn samengevoegd. De afbeeldingen passen niet perfect over elkaar omdat het voorzien van geoverwijzingen niet een perfect proces is. Daarom moet één ervan, of beide, niet accuraat zijn.  

![Misaligned imagery][]

We hebben twee belangrijke manieren geleerd voor het maken van kaarten - één door het gebruiken van luchtfoto's om objecten op de grond te identificeren, en een andere door GPS te gebruiken om sporen en waypoints op te nemen en die dan toe te voegen aan OpenStreetMap. Het voordeel van luchtfoto's is duidelijk. Het stelt u, degene die in kaart brengt, in staat om de gehele foto te zien, verschillende details in de foto te bekijken, uw kennis over het gebied te beschouwen, en eenvoudig wegen, gebouwen en gebieden te traceren. Eén belangrijk voordeel van GPS is echter dat het geen last heeft van verschuiving zoals in een afbeelding. Een GPS zal u altijd voorzien van een juiste breedte- en lengtegraad. De enige uitzondering is wanneer de signalen van de satellieten worden onderbroken door hoge gebouwen of bergen, maar in dat geval is de fout eenvoudig te herkennen. Bekijk het GPS-spoor in deze afbeelding, vergeleken met de laag van de luchtfoto van Bing eronder:  

![Aerial vs GPS][]

Gebaseerd op wat we nu weten, is het duidelijk dat het GPS-spoor waarschijnlijk nauwkeurig is, en de afbeelding eronder verschoven. We moeten ons nu vragen, “als de afbeelding is verschoven, hoe kunnen we die dan nog gebruiken en nauwkeurige kaarten maken?”  

Verschuiving van afbeeldingen corrigeren
-------------------------

Het antwoord op de eerdere vraag is dat we de afbeelding zo kunnen verplaatsen dat hij uitlijnt met de dingen waarvan we weten dat die op de juiste locatie liggen, zoals GPS-sporen. Het is eenvoudig om verschuiving van afbeeldingen in JOSM te corrigeren.  

De beste verwijzingen voor het aanpassen van afbeeldingen zijn GPS-sporen die wegen volgen. En hoe meer GPS-sporen u heeft om naar te verwijzen, hoe nauwkeuriger u in staat zult zijn uw afbeeldingen uit te lijnen. We kunnen, omdat gebruikers van OpenStreetMap vaak hun GPS-sporen uploaden naar de database van OSM, ze downloaden en gebruiken om onze afbeeldingen uit te lijnen.  

- Klik op de knop Downloaden. ![JOSM download button][]{: height="24px"}  

- Selecteer het vak naast “Ruwe GPS-gegevens” ![Download raw GPS data][]{: height="24px"} aan de bovenzijde van het venster Downloaden. Selecteer uw gebied en klik op “Downloaden.”  

- Dit zal een aanvullende laag downloaden naar JOSM die GPS-sporen bevat. Afhankelijk van hoeveel sporen zijn geüpload door gebruikers van OSM zou u een aantal sporen kunnen zien (of zelfs geen sporen):  

![Few GPS tracks from OSM][]

- Of, u zou heel veel sporen kunnen zien:  

![Many GPS tracks from OSM][]

- Klik op de knop “Verplaatsen afbeeldingslaag” ![Adjust imagery offset button][]{: height="24px"} bovenin JOSM om een afbeeldingslaag aan te passen.  

- Negeer het vak dat zich opent, gebruik uw muis om de afbeeldingslaag zo te slepen dat die correct uitlijnt met de GPS-sporen. De GPS-sporen zouden zo dicht mogelijk uit moeten lijnen met de wegen als mogelijk is. U zult de getallen voor de verschuiving zien wijzigen in het vak.  

![Adjust imagery offset][]

- Als u wilt kunt u deze instellingen voor verschuiven opslaan door een naam voor een bladwijzer voor verschuvingen aan te maken en dan op OK te klikken. U kunt dan later automatisch dezelfde instellingen toepassen door te gaan naar Afbeeldingen ‣ verschuiving van afbeeldingslaag en te klikken op uw bladwijzer.  
- Als u de verschuiving niet wilt opslaan, klik dan eenvoudigweg op OK zonder een naam voor een bladwijzer in te voeren.  

Wat als er geen GPS-sporen op OpenStreetMap zijn en u heeft geen GPS? Zonder GPS-sporen is het moeilijk afbeeldingen uit te lijnen. Als het een relatief leeg gebied is (niet veel in kaart gebracht), zou u er eenvoudigweg voor kunnen kiezen de afbeelding te gebruiken zoals die is en later de gegevens te corrigeren. Het is beter om een gebied in kaart te hebben gebracht met een verschuiving van 20 of 30 meter dan in het geheel niets in kaart te brengen.  

Als u positief de breedte- en lengtegraad kunt identificeren van een object op de grond, kunt u er voor zorgen dat de afbeelding correct wordt geplaatst door deze stappen te volgen:  

1. Identificeer het object waarvan u de positie op de afbeelding kent.  
2. Klik op de breedte- en lengtegraad in de linker benedenhoek van JOSM.![JOSM lat lon][]{: height="24px"}  
3. In het dialoogvenster dat opent, voer de breedte en lengtegraad in van de plaats die u kent, en voer een klein getal in voor Zoomen, ongeveer vijf of tien.  
![JOSM lat lon dialogue][]
4. Dit zal zoomen en de map centreren op uw breedte- en lengtegraad. Nu kunt u de afbeelding verplaatsen zoals u eerder deed, zodat het object dat u kent is gecentreerd op de correcte positie.  

Als, aan de andere kant, het gebied al extensief in kaart is gebracht, dan hebben de eerdere mappers hopelijk objecten op hun correcte locaties in kaart gebracht. In dat geval kunt u de afbeelding uitlijnen op de kaart van OSM, maar wees voorzichtig! Andere mappers zouden zich niet bewust kunnen zijn van de verschuiving van de afbeelding, en zij kunnen fouten hebben gemaakt toen zij het in kaart hebben gebracht.  


De database voor verschuiving van afbeeldingen
---------------------------

Nu weet u hoe verschuivingen van afbeeldingen te herkennen en te corrigeren, maar er is één belangrijk probleem met deze benadering waar we tot dusverre geen aandacht aan hebben geschonken. Als elke gebruiker van OpenStreetMap de afbeelding anders aanpast, zal iedereen in kaart brengen met enigszins afwijkende achtergronden.  

Veronderstel dat u een kleine stad in kaart brengt en u realiseert zich dat afbeeldingen van Bing een verschuiving hebben van 15 meter naar het noorden. Dus past u de afbeelding aan en gebruikt dan de kaart om de gehele stad nauwkeurig in kaart te brengen. Maar dan wil iemand anders iets toevoegen aan de kaart en downloadt de gegevens en laadt een afbeelding van Bing, maar zij weten niet van de verschuiving die u had ontdekt! Zij zullen denken dat er iets helemaal mis is en dat alle objecten in de stad zijn geplaatst met een afwijking van 15 meter, en zij zullen beginnen met ze te verplaatsen, wat niet juist is! Dit kan desastreus zijn voor de kaartgegevens van de stad.  

Om deze reden is het belangrijk dat alle gebruikers zich bewust zijn van de verschuiving van de afbeelding, en at zij die altijd moeten controleren vóórdat zij een gebied in kaart brengen. Om ons met dit probleem t e helpen hebben enkele slimme mensen een plug-in gemaakt die het voor gebruikers mogelijk maakt informatie over verschuivingen van afbeeldingen op te slaan in een database en die met anderen te delen. Laten we eens kijken hoe dat werkt:  

- Open het menu Voorkeuren in JOSM, en klik op de tab Invoegtoepassingen.![JOSM plugins tab][]{: height="24px"}  

- Zoek naar de plug-in genaamd “imagery_offset_db” en selecteer het vak ernaast.  

![Imagery_offset_db plugin][]

- Klik op OK. U zult JOSM opnieuw moeten starten om de installatie van de plug-in te voltooien.  

Op dezelfde manier als waarop u verschuivingen als bladwijzers voor verschuvingen kunt opslaan, stelt deze plug-in u in staat verschuivingen op te slaan in een centrale database, en toegang te krijgen tot de verschuivingen die andere gebruikers hebben gemaakt. Daarom, als een mapper een verschuiving van een afbeelding maakt in een gebied, kunnen andere gebruikers exact dezelfde verschuiving gebruiken om in kaart te brengen.  

Bij het gebruiken van lagen met luchtfoto's zou u ALTIJD moeten controleren op bestaande verschuivingen, en wanneer u uw eigen verschuiving maakt, zou u die ALTIJD moeten opslaan in deze database.  


verschuivingen van afbeeldingen aan de database toevoegen
------------------------------------

Wanneer u een afbeeldingslaag toevoegt, zal de nieuwe plug-in u in kennis stellen van het feit dat u de database van afbeeldingen zou moeten controleren voor een bestaande verschuiving. U zult een pictogram zien met een rood uitroepteken boven in JOSM, zoals dit:  

![Imagery offset notification][]

- Klik op de knop en de plug-in zal communiceren met de database om te zien of er bestaande verschuivingen voor dit gebied bestaan.  
- Hier hebben we gegevens van OSM en GPS-sporen gedownload in Kuta, Bali, Indonesië. In dit geval hebben we één bestaande verschuiving gevonden. Klik er op om toe te passen op de kaart.  

![Offset in Kuta bali][]

- Dit zorgt er voor dat de afbeeldingslaag verschuift.  Wanneer we echter de verschuiving van iemand anders toevoegen zoals hier, zouden we moeten controleren of die geldig is door hem te vergelijken met GPS-sporen.  

![Comparing imagery offset from GPS tracks][]

- We kunnen zien dat de afbeeldingslaag in feite niet goed uitgelijnd is. We willen niet dat andere gebruikers deze verschuiving gaan gebruiken, dus zouden we hem als onjuist moeten markeren in de database. Klik opnieuw op de knop “Verschuivingen” (die zal nu geen rood uitroepteken meer hebben).  

![Offsets button][]

- Als het dialoogvenster deze keer opent, klik met rechts op de verschuiving en klik op “Deprecate Offset.”  

![Deprecate offset][]

- Klik op “Yes” om te bevestigen.  
- U zult een reden op moeten geven waarom u deze verschuiving wilt laten vervallen.  

![Deprecate reason][]


Verschuivingen van afbeeldingen aan de database toevoegen
------------------------------------

Nu we deze verschuiving van deze gebruiker hebben gemarkeerd als “deprecated,” zouden we een verbeterde verschuiving aan de database moeten toevoegen.  

1. Klik op de knop “Verplaatsen afbeeldingslaag”. ![Adjust imagery offset button][]{: height="24px"}  
2.  pas de afbeelding aan zodat die overeenkomt met de GPS-sporen.  Klik op OK in het vak.  
3.  Ga nu naar Afbeeldingen ‣ Verschuivingen afbeeldingen opslaan...  
![Store imagery offset][]
4.  Voer een beschrijving voor de verschuiving in in het vak dat opent.  
![Offset description][]
5.  Klik op OK. Uw verschuiving zal worden opgeslagen in de database.  
6.  Laten we nu de GPS-laag verbergen en kijken naar de gegevens van OSM ten opzichte van de correct geplaatste afbeelding.  

![Corrected imagery][]

Oh nee! iemand heeft dit gebied in kaart gebracht met verschoven afbeeldingen, dus het gebied is niet correct in kaart gebracht. Dit zal enige tijd vergen om op orde te brengen.


De website voor verschuiving van afbeeldingen
--------------------------------

Tenslotte, voor meer informatie over de database voor verschuivingen, kunt u de website bezoeken op [http://offsets.textual.ru/](http://offsets.textual.ru/).  Deze vermeldt de verschuivingen die zijn geüpload naar de database, en het heeft ook een leuke mogelijkheid voor de kaart die visualiseert waar de verschuivingen zich bevinden, zoals u hier kunt zien:  

![http://offsets.textual.ru/][]

> Eén laatste ding om te onthouden is dat de afbeelding niet overal dezelfde afstand behoeft te zijn verschoven! Dit is speciaal waar in regio's waar veel heuvels en bergen zijn. Dus als de afbeelding afwijkend lijkt te zijn verschoven in andere gebieden, zult u het opnieuw moeten verplaatsen.  

Samenvatting
--------

Wanneer u net begint met OpenStreetMap hoeft u zich nog niet echt druk te maken om verschuivingen van afbeeldingen. Maar als u bewerkingen van andere mapper ziet die niet lijken uit te lijnen met de afbeelding, zou u altijd in gedachten ,moeten houden dat er een verschuiving kan bestaan, vóórdat u begint met het wijzigen van hun objecten. En als u er nog niet klaar voor bent om verschuivingen af te handelen, onthoud dan dat het beter is een gebied in kaart te brengen met een verschuiving van 20 of 30 meter dan om het in het geheel niet in kaart te brengen.  Maar onthoud, indien mogelijk, dat verschuivingen van afbeeldingen kunnen voorkomen, en gebruik de stappen in dit hoofdstuk om ze te corrigeren indien nodig.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










