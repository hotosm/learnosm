---
layout: doc
title: Go Map!!
permalink: /nl_NL/mobile-mapping/gomap/
lang: nl_NL
category: mobile-mapping
---
Go Map!!
===================


Go Map!! is een toepassing voor iOS die u informatie in OpenStreetMap laat maken en bewerken.
Go Map!! ondersteunt het bewerken van wegen en willekeurig taggen.

U kunt het gratis downloaden uit de App Store.

Mogelijkheden
---------------

-  Snel toevoegen van interessante punten
-  Opmerkingen, wegen en gebieden bewerken
-  Uw locatie en richting vastleggen
-  Achtergronden voor Bing en Mapnik beschikbaar
-  Ondersteunt willekeurige waarden voor tags
-  Volledige ondersteuning voor Ongedaan maken/Opnieuw
-  Naadloos online of offline werken
- Zien wie het laatst een object bewerkte en wanneer
- Andere mappers in de buurt zoeken
- Zoeken naar plaatsen met behulp van Nomatim
- Gratis. Geen advertenties of in-app aankopen

In het kort
---------------

Wanneer u voor het eerst begint met Go Map!!, zal het u vragen de GPS van uw apparaat te gebruiken om uw locatie te bepalen. Zeg "allow" en het zal naar uw positie zoomen en de gegevens van satellieten en OpenStreetMap in uw nabijheid downloaden. Als u zich in een gebied bevindt dat al ruim in kaart is gebracht kan het downloaden even duren, en als u zich in een schaars in kaart gebracht gebied bevindt, zou u misschien wat uit moeten zomen om details te zien. Experimenteer eenvoudigweg met zoomen en verplaatsen in uw onmiddellijke nabijheid. Go Map!! downloadt indien nodig automatisch aanvullende gegevens als u zich rondom uw locatie verplaatst.

![Home][]

OpenStreetMap gebruikt de term 'node' om eenvoudige punten te beschrijven, die gewoonlijk kleinere objecten aangeven, zoals bomen of kleine winkels, terwijl 'ways' grotere objecten qua grootte zijn, zoals snelwegen of gebouwen. Go Map!! geeft een node aan met een pictogram of een klein vierkantje, terwijl wegen worden weergegeven als lijnen, rechthoeken of polygonen.

Gegevens van OSM toevoegen
---------------

### Tags toevoegen
Tags worden gebruikt om objecten te beschrijven in de database van OpenStreetMap, zoals het aangeven dat een locatie een winkel of restaurant bevat en wat de naam daarvan is. Tik er eenvoudigweg op om een bestaand object te selecteren, een node of een way.  U moet de omtrek van het gebouw selecteren in plaats van het midden om een gebouw te selecteren, Geselecteerde objecten worden geaccentueerd in geel en de tag ervan wordt weergegeven (grijs vak) en een knop voor het configureren. Druk op de knop "Tags" om tags te bekijken en te bewerken.

![Adding tags][]

Het weergegeven bewerkingsscherm voor tags heeft drie tabs voor weergaven. De eerste tab, Common Tags, geeft de velden voor het toevoegen van veel voorkomende interessante punten weer.

![Common Tags][]

De tweede tab, All Tags", stelt gevorderde gebruikers in staat om willekeurige tags en waarden te bewerken.

![All Tags][]

De derde tab geeft metadata weer over het object: wie maakte het en wanneer, en aanvullende details voor een  laag niveau. Vanaf deze tab kunt u ook verder zoeken naar informatie die is opgeslagen op de server van OSM over de gebruiker, wijzigingenset, objectgeschiedenis, en details van het object.

![Way Attributes][]

- Identifier - pagina over het object
- User - pagina van de gebruiker
- Version - pagina over geschiedenis van het object
- Changeset - pagina over de wijzigingenset

### Een knoop, een weg, of een knoop in een weg verplaatsen
Klik, om een knoop of weg te verplaatsen, er op om het te selecteren, en het zal worden geaccentueerd in geel. Selecteer, om een node te selecteren die deel uitmaakt van een weg, eerst de weg en tik dan op een knoop daarin.

![node in a way][]

Sleep, eenmaal geselecteerd, het titelvak (grijze vak) om het naar een nieuwe locatie te verplaatsen. Bevestig het verplaatsen als daar naar gevraagd wordt. Als u een fout maakt, gebruik dan de knop Ongedaan maken, of verplaats het eenvoudigweg terug.

### Een POI maken, verplaatsen en taggen
Klik op de knop "+" om een nieuwe knoop of punt van interesse te maken. Een punaise zal de positie van uw nieuwe knoop aangeven.

![New node][]

Sleep het met de kleine balk naar de juiste locatie, en druk dan op de knop "Tags" om tags toe te voegen. Als u geen tags toevoegt, dan zal uw nieuwe knoop worden genegeerd, dus als u per ongeluk een punaise plaatst, tik dan eenvoudigweg ergens anders en het zal verdwijnen.

![Add tag to the node][]

### Een knoop aan een weg toevoegen
Indien u knopen aan een weg wilt toevoegen, zijn er twee benaderingen, afhankelijk van of u de knoop in het midden van de weg toevoegt of dat u één van beide uiteinden verlengt.

Selecteer, om een knoop aan het midden van de weg toe te voegen, de weg door er op te klikken dichtbij het punt waar u de nieuwe knoop wilt laten verschijnen, en druk dan op "+". Een knoop zal op de geselecteerde locatie worden toegevoegd.

![Middle node][]

Selecteer, om een knoop aan het einde van een weg toe te voegen, de weg door er op te klikken en selecteer een knoop aan één van de uiteinden, druk dan op "+". Een nieuwe knoop zal aan het begin of einde van de weg worden toegevoegd.

![End node][]

### Een weg/gebied maken
Maken van een nieuwe weg of gebied gaat op dezelfde manier als het maken van een knoop, maar u moet twee keer op "+" drukken. Bij de eerste keer drukken op "+" zal een punaise worden geplaatst die u kunt positioneren zoals u wilt. Tik opnieuw op "+" om de tweede knoop te verbinden met de eerste knoop. Plaats de tweede knoop en ga door met het drukken op "+" om aanvullende knopen toe te voegen.

![Create way][]

Plaats, om een gebied te maken, eenvoudigweg een laatste knoop en sleep die dan bovenop de eerste knoop. Een cirkel van punten zal aangeven dat het wordt verbonden met de bestaande knoop. U kunt ook bestaande wegen samenvoegen door er overheen te slepen.

![Create area][]

### Ongedaan maken/Opnieuw
Elke keer als u een fout maakt kunt u de knop Undo gebruiken om uw wijzigingen terug te draaien. Alle acties, inclusief wijzigingen aan tags, kunnen ongedaan worden gemaakt, of opnieuw worden uitgevoerd, zelfs als u de app afsluit en later opnieuw opstart. Na het uploaden naar de server worden alle acties voor ongedaan maken genegeerd. U kunt na uploaden niet meer ongedaan maken.

![Undo][]

### Wijzigingen uploaden
Wanneer u gereed ben met uw wijzigingen op de kaart, dan kunt u die wijzigingen toevoegen aan de server van OpenStreetMap door op de knop Upload (cloud) te drukken.

![Cloud][]

Als de wijziging met succes wordt geüpload, zult u eenvoudigweg worden teruggeleid naar het kaartscherm. Na het uploaden kunt u een eerdere status niet ongedaan maken; alle wijzigingen zijn permanent.

Zoeken naar plaatsen
---------------
Druk op de knop GPS om te zoomen naar en uw huidige locatie te zien. Druk er opnieuw op om de GPS uit te schakelen. Druk en houdt de knop GPS ingedrukt om een zoekactie naar plaatsen, of landmarkeringen waarop u wilt inzoomen, uit te voeren met Nomatim.

![Search][]

De weergave op de achtergrond instellen
-------------

Net zoals bij het gebruiken van bewerkers voor OSM zoals  iD of JOSM, staat Go Map!! ons toe om verschillende achtergronden te gebruiken die ons helpen bij het bewerken van gegevens. U kunt de achtergrond wijzigen om alleen de bewerkingslaag te zien, terwijl u "Editor with Aerial" zou kunnen selecteren als u luchtfoto's wilt gebruiken als achtergrond bij bewerken.

![Display][]

U heeft ook de optie om te selecteren welke luchtfoto's u wilt gebruiken bij het bewerken. Door de tekst naast "Alleen luchtfoto" te selecteren, kiest u welke luchtfoto's u wilt gebruiken.

![Custom Aerial][]

U kunt ook uw eigen afbeelding aanpassen door "Nieuw toevoegen" te selecteren en de naam en de URL van de foto's in te voeren in het tekstvak URL. U moet de servers voor de tegels en de maximale zoom voor de foto's definiëren.

![Aerial Provider][]

Selecteer "Clear Cache" als u de cache met gegevens van OSM wilt leegmaken. Het kan worden gebruikt als u enigszins teveel gegevens hebt gedownload voor uw iOS-apparaat om af te handelen en dingen traag beginnen te worden.

Leegmaken van de cache met gegevens van OSM is in het bijzonder nuttig als de status van de toepassing out of sync begint te raken met de server van OSM. Dat kan voorkomen als iemand anders gegevens wijzigt die u bewerkt, of als een van uw uploads tussentijds mislukt bij het uploaden van aanvullende gegevens.

> Opruimen van de cache van OSM zal er voor zorgen dat u wijzigingen verliest die nog niet zijn geüpload.

Ruim de caches van tegels van Mapnik of Overlay op om de laatste tegels te downloaden die de wijzigingen weergeven die u zojuist hebt ingediend. Het kan tot 24 uur duren totdat uw wijzigingen zijn verwerkt.

![Clear Cache][]

U zou er ook andere informatie overheen kunnen leggen, zoals GPX-bestanden, Notes & Fixmes, OpenStreetMap GPS-sporen, en Unnamed Roads. Plus, u kunt draaien van de app inschakelen en 3D-effecten voor de gegevens van OSM inschakelen.

Instellingen instellen en overige
-------------

Go Map!! vereist dat u een geregistreerde gebruiker bent op openstreetmap.org om wijzigingen te kunnen uploaden naar de kaart. U moet uw naam en wachtwoord voor openstreetmap.org in de toepassing opgeven voordat u gegevens kunt uploaden.

Selecteer, onder het pictogram Settings, OpenStreetMap Login en typ uw gebruikersnaam en wachtwoord voor OSM in. Als u nog geen account voor OSM hebt, selecteer dan "Register new account" en volg de instructies. Selecteer "Verify" als u klaar bent.

![Verify][]

U kunt ook naar andere mappers in de omgeving zoeken door "Nearby Mappers" te selecteren. Dit geeft iedereen weer die het gebied in uw huidige weergave heeft bewerkt. Zoom in om minder mensen te zien of zoon uit om meer mensen te zien.

![Nearby mappers][]

De optie "Prepare fo Offline" downloadt tegels van Bing en/of Mapnik voor gebruik offline als u verwacht een gebied te bewerken zonder draadloze verbinding. Als alternatief kunt u eenvoudigweg door het gebied scrollen dat van plan bent te bezoeken: alle gegevens van Bing, Mapnik en OpenStreetMap wordt gecachet en zal beschikbaar zijn, zelfs als u geen verbinding hebt. U kunt eenvoudigweg weer uploaden als u weer toegang hebt tot het internet.

Klik, bij het weergeven van luchtfoto's van Bing, op het logo van Bing om informatie over auteursrechten en de gegevensprovider te krijgen.

[Home]: /images/mobile-mapping/gomap_home.PNG
[Adding tags]: /images/mobile-mapping/gomap_adding_tags.PNG
[Common Tags]: /images/mobile-mapping/gomap_common_tags.PNG
[All Tags]: /images/mobile-mapping/gomap_alltags.PNG
[Way Attributes]: /images/mobile-mapping/gomap_way_attributes.PNG
[node in a way]: /images/mobile-mapping/gomap_nodeway.PNG
[New node]: /images/mobile-mapping/gomap_newnode.PNG
[Add tag to the node]: /images/mobile-mapping/gomap_common_tags.PNG
[Middle node]: /images/mobile-mapping/gomap_middlenode.png
[End node]: /images/mobile-mapping/gomap_endnode.png
[Create way]: /images/mobile-mapping/gomap_createway.png
[Create area]: /images/mobile-mapping/gomap_createarea.png
[Undo]: /images/mobile-mapping/gomap_undo.png
[Cloud]: /images/mobile-mapping/gomap_upload.png
[Search]: /images/mobile-mapping/gomap_search.png
[Display]: /images/mobile-mapping/gomap_display.PNG
[Custom Aerial]: /images/mobile-mapping/gomap_aerial.PNG
[Aerial Provider]: /images/mobile-mapping/gomap_provider.PNG
[Clear Cache]: /images/mobile-mapping/gomap_cache.png
[Verify]: /images/mobile-mapping/gomap_verify.PNG
[Nearby mappers]: /images/mobile-mapping/gomap_nearby.png