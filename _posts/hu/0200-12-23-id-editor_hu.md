---
layout: doc
title: iD szerkesztő
permalink: /hu/beginner/id-editor/
lang: hu
category: beginner
---

Az iD szerkesztő
=============

> Átnézve 2019-06-10

A Tasking Manager feladatkezelővel kezd térképezni a Humanitárius OpenStreetMap Team (HOT), a MissingMaps vagy más szervezet számára? Nézze meg [HOT tippjeinket](/hu/hot-tips)!  

- TOC
{:toc}

Az iD szerkesztő a tulajdonképpeni böngészőből induló OpenStreetMap-szerkesztő. Gyors és könnyen kezelhető, lehetővé teszi a különböző adatforrásokból – például légi felvételek, GPS-adatok, Field Papers nyomtatott térképek vagy Mapillary – történő térképezést.  

Az iD szerkesztővel remekül végezhetünk kicsi és könnyű szerkesztéseket, amelyeknél nincs szükség a JOSM (egy fejlettebb térképszerkesztő) speciális funkcióira. Ez a fejezet az iD-vel történő szerkesztés alapjait mutatja be.  

Az iD szerkesztő elindítása
----------------------

-	Az iD szerkesztőhöz aktív (online) internetkapcsolat szükséges.  
-	Nyissa meg az internetböngészőt és menjen az OpenStreetMap weboldalára: [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Jelentkezzék be** az OpenStreetMap-fiókjával  
-	Húzza és nagyítsa a térképet a szerkeszteni kívánt helyre. Húzni úgy tudja, hogy a bal egérgomb lenyomva tartása mellett mozgatja a térképet.  
-	Kattintson a **Szerkesztés** melletti kis nyílra, majd erre: **Szerkesztés a következővel: iD (böngészőben futó szerkesztő)**.  

![image1][]


Az iD szerkesztő felhasználói felülete
-------------------------
![image2][]

1. **Elem szerkesztése:** ezen a panelen jelennek meg a térképen kijelölt objektum címkéi.  
	Itt lehet címkéket hozzáadni vagy szerkeszteni.  
2. **Eszközök:** itt vannak az alapvető szerkesztőeszközök:  
    Pont (node) rajzolása, *billentyűparancs:* **1** ![image3][]{: height="24px"}  
    Vonal (way) rajzolása, *billentyűparancs:* **2** ![image4][]{: height="24px"}  
    Alakzat (polygon, sokszög) rajzolása, *billentyűparancs:* **3** ![image5][]{: height="24px"}  
    Visszavonás, *billentyűparancs:* **Ctrl+Z** ![image6][]{: height="24px"}  
    Mégis, *billentyűparancs:* **Ctrl+Y** ![image7][]{: height="24px"}  
    Módosítások mentése, *billentyűparancs:* **Ctrl+S** ![Image8][]{: height="32px"}  
3. **Térkép:** ez a panel különböző beállítási funkciókat tartalmaz:  
    Nagyítás, *billentyűparancs:* **+** ![image9][]{: height="24px"}  
    Kicsinyítés, *billentyűparancs:* **–** ![image10][]{: height="24px"}  
    Pozícióm megjelenítése ![image11][]{: height="24px"}  
    Háttérréteg beállításai, *billentyűparancs:* **B** ![image12][]{: height="24px"}  
    Térképadatok, *billentyűparancs* **F** ![Map Data][]{: height="24px"}  
    Problémák, *billentyűparancs:* **I** ![Issues][]{: height="24px"}  
    Súgó; *billentyűparancs:* **H** ![image13][]{: height="24px"}  
4. **Információk**: Ez a panel különféle információkat jelenít meg, például a léptéket és azt, hogy mely felhasználók szerkesztették a területet.  

## A háttérréteg beállítása

Kattintson a **Háttérbeállítások** gombra vagy használja a **B** *billentyűparancsot*. ![image14][]{: height="24px"}  
![image15][]  
A kívánt térképmozaik-szolgáltató alapján **módosíthatja a háttérréteget** (az alapértelmezett Bing légi felvételek).  

Az **Egyéni**re kattintva saját térképmozaikokat is hozzáadhat. Ha például szeretne egy **Field Paper** [^fieldpaper] térképet hozzáadni, kattintson az **Egyéni**re, aztán a nagyító ikonra (keresés), és a következő ablak fog megnyílni:  
![image17][]   
Adja meg a **Field Paper pillanatkép URL**-jét, ami valami ilyesmi lesz: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
A **számítógépről származó GPS-nyomvonalak** (GPX-formátum) megjelenítéséhez egyszerűen húzza az egérrel a GPX-fájlt az iD szerkesztő felületére.  
Az OpenStreetMap GPS-nyomvonalak engedélyezéséhez kattintson a dobozra. Az alatta lévő képen megjelennek a nyilvános GPS-nyomvonalak különböző színekkel, amelyek az utazás irányát jelölik.  
![osm gps traces][]  
A légi felvétel kinézetének módosításához kattintson a **Megjelenítési beállítások**ra.  
![DisplayOptions][]  
Ha [a légi felvétel a valósághoz képest eltolódott] (/hu/josm/aerial-imagery/), akkor a **Légi felvétel eltolódásának beállítása** gombra kattintva **korrigálhatja az eltolódást**.  
![image18][]  

- A légi felvétel mozgatásához kattintson a navigációs gombokra. Az alapértelmezett pozícióhoz való visszatéréshez kattintson a Visszavonás gombra.  

Alapvető szerkesztések az iD-vel  
----------------------  

### Pont hozzáadása  

Új pont hozzáadásához kattintson a ** Pont ** gombra. ![image3][]{: height="24px"}  

- Az egérmutatója plusz (+) jellé változik. Most kattintson egy olyan helyre, amelyről tudja, hogy megjelöl valamit. Például, ha tudja, hogy a környékén található egy kórház, kattintson a kórházépület pozíciójára.  
![image21][]  
- Láthatja, hogy a térképhez hozzáadódott egy új pont. Ugyanakkor a bal oldali panel megváltozik, és megjelenik egy űrlapot, amelyen kiválaszthatja az objektum tulajdonságait. A pont kórházként való megjelöléséhez kattintson a **Kórház** elemre.  
![image22][]  
- Az űrlapokkal információkat adhat a ponthoz. Kitöltheti a kórház nevét, címét és/vagy egyéb kiegészítő információit. Ne feledje, hogy minden objektumhoz más beállítások tartoznak, attól függően, hogy milyen címkét választott.  
- Ha hibát ejt, például rosszul jelöli meg a helyet, akkor áthelyezheti a pontját egy új helyre, ha a ponton a bal egérgombot lenyomva tartja és elhúzza. Ha inkább törölni szeretné a pontot, kattintson a bal egérgombbal a pontra, a jobb egérgombbal történő kattintással aktiválja a helyi menüt, majd kattintson a kukához hasonlító gombra. ![PointToolDelete][]{: height="24px"}  
Az iD szerkesztőben létrehozott „pötty” az OpenStreetMap szóhasználatával valójában egy önálló „pont” (node), amelyen „címkék” (tags) jelenítik meg a tulajdonságokat.  

### Vonal rajzolása  

Új vonal hozzáadásához kattintson a **Vonal** gombra. ![image4][]{: height="24px"}  

- Az egérmutató plusz (+) jelre változik. Keressen egy utat, amelyet még nem rajzoltak fel a térképre, és kövesse a nyomvonalát. Kattintson egyszer arra a pontra, ahol az útszakasz kezdődik, mozgassa az egeret, és kattintson a további pontok hozzáadásához. Kattintson duplán a rajzfolyamat befejezéséhez. Figyelje meg a bal oldali panelt.  
![image24][]  
- Csakúgy, mint egy pontnál, válassza ki a vonalhoz illő címkéket.  
- Változtathat a vonal vezetésén egyes pontok elhúzásával, ha a bal egérgombbal rákattint egy pontra, és elhúzza azt.  
- Amikor a bal egérgombbal rákattint a vonal egy pontjára, akkor vagy kattintson a jobb egérgombbal, vagy nyomja meg a szóközt, hogy aktiválja a helyi menüt, ezeket az eszközöket fogja látni:  
  - A sor folytatása ettől a ponttól ![PointToolContinue][]{: height="24px"}  
  - Vonalak szétválasztása ennél a pontnál ![PointToolDisconnect][]{: height="24px"}  
  - Vonal kétfelé vágása ennél a pontnál. ![PointToolSplit][]{: height="24px"}  
  - Pont törlése a vonalról. ![PointToolDelete][]{: height="24px"}  
- Ha a bal egérgombbal egy vonalra (de nem egy pontra) kattint, akkor az alábbi eszközöket fogja látni:  
  -   Kör létrehozása vonalból (csak akkor aktív, ha a vonal zárt) ![LineToolCircularize][]{: height="24px"}  
  -   Vonal leválasztása más objektumokról ![LineToolDisconnect][]{: height="24px"}  
  -   Vonal mozgatása ![LineToolMove][]{: height="24px"}  
  -   Sarkok derékszögesítése ![LineToolSquare][]{: height"24px"}  
  -   Vonal tükrözése a rövid tengelyére ![LineToolReflectShort][]{: height="24px"}  
  -   Vonal tükrözése a hosszú tengelyére ![LineToolReflectLong][]{: height="24px"}  
  -   Vonal irányának megfordítása (folyóknál és egyirányú utcáknál hasznos) ![LineToolReverse][]{: height="24px"}  
  -   Vonal forgatása a középpontja körül ![LineToolRotate][]{: height="24px"}  
  -   Vonal kiegyenesítése ![LineToolStraighten][]{: height="24px"}  
  -   Vonal törlése ![LineToolDelete][]{: height="24px"}  

Az iD szerkesztőben létrehozott „vonal” angolul „way” (út), amelyen címkék (tags) vannak.

> Megjegyzés a **Törlés**ről: Általában kerüljük mások térképezésének törlését, ha az csupán javításra szorul. Saját hibáit törölheti, de inkább próbálja meg *módosítani* más emberek térképre rajzolt objektumait, ha azokon változtatni kell. Ezzel megőrzi az OSM-adatbázisban az elemek előzményeit, és tiszteletben tartjuk a térképésztársainkat. Ha valóban úgy érzi, hogy valamit törölni kell, fontolja meg, hogy előbb megkérdezi az eredeti térképkészítőt vagy az OSM e-mail listáját.

### Alakzat (sokszög) rajzolása

Új többoldalas alak hozzáadásához kattintson a **Terület** gombra. ![image34][]{: height="24px"}  

- Az egérmutatója plusz (+) jelre változik. A légi felvételek segítségével próbálja nyomon követni egy épület alaprajzát.  
- Észre fogja venni, hogy az alakzat színe a hozzárendelt tulajdonságoktól függően változik.  
![image35][]  
- Az alakzatok kiválasztásakor és a helyi menü a jobb egérgombbal történő aktiválásakor elérhető eszközök hasonlóak azokhoz, amelyek a vonalra kattintva jelentek meg.  

Az iD szerkesztőben a „sokszög” tulajdonképpen egy „zárt vonal”, címkékkel.

### Multipoligon rajzolása

Időnként olyan sokszöget kell rajzolnunk, amelynek nem csak külső körvonala van, hanem egy vagy több belsője is. Gondoljon például belső udvarokkal rendelkező épületekre vagy a szigetekkel rendelkező tavakra. *Ezeket a vonalakat ne egyetlen vonallal rajzolja meg*, hogy a belső körvonalak a külsőre vannak „függesztve”. Ehelyett külön-külön rajzolja meg az összes körvonalat, kizárólag a külső körvonalra helyezzen címkéket, majd jelölje ki az összes körvonalat és nyomja meg a **c** billentyűt, hogy összekapcsolódjanak egy a multipoligonnak nevezett alakzattá.

![create multipolygon][]

Ha az újonnan létrehozott multipoligon bármelyik körvonalát kijelöli, akkor a bal oldalon láthatja, hogy az melyik multipoligon(ok)hoz tartozik

![part of multipolygon][]

## Problémák

A szerkesztőalkalmazás számos ellenőrzést végrehajt, amint Ön szerkeszt valamit. Ha az alkalmazás úgy látja, hogy az Ön által tett lépések alkalmasint problémát okozhatnak, értesíti Önt a problémák fülön. Ha a jobb oldali probléma ikonon megjelenik egy sárga (figyelmeztetés) vagy piros (hiba) pont, akkor nyissa meg a fület, és nézze meg, hogy mit jelent. Ez az információ a bal oldali objektumfunkció fülön is megjelenik, ha a megfelelő objektum van kijelölve. Arról is kap figyelmeztetést, ha az adatok feltöltésekor még megoldatlan problémák vannak. 

![Issue][] ![Error][]

A Problémák fül alsó része bemutatja a rendelkezésre álló szabályokat, és akár azok külön-külön történő letiltását is lehetővé teszi, bár ez nem ajánlott.

Módosításainak mentése
--------------------

Amikor (és ha) el szeretné menteni a szerkesztéseit az OpenStreetMap alkalmazásba, kattintson a **Mentés** gombra. A bal oldali panelen megjelenik a feltöltési panel.  
![image36][]  

- Írjon egy megjegyzést a szerkesztéseiről, majd kattintson a **Mentés** gombra.  

> Ha egy objektumot (pontot, vonalat vagy területet) éppen akkor szerkesztette, amikor egy másik személy is, akkor figyelmeztetést kap, hogy a szerkesztéseket csak akkor lehet feltölteni, amíg fel nem oldja az **ütközéseket**. Válassza ki, kinek a szerkesztéseit fogadja el és tölti fel. *Az ütközések feloldása gyakran azzal jár, hogy elfogadjuk a többiek által végrehajtott szerkesztéseket. Ilyenkor valószínűleg rövidesen szeretnénk visszatérni a kérdéses objektumhoz, és azt újra szerkeszteni. (**Ebben az esetben az újbóli ütközés elkerülése érdekében célszerű a szerkesztést követően minél hamarabb menteni a módosításokat! **). *

További információk és egyedi címkék
---------------------------------------

Objektum szerkesztésekor a tulajdonságpanel alján megjelenik egy „Mező hozzáadása” menü. A bejegyzések (layer [réteg], elevation [tengerszint feletti magasság], wikipedia [Wikipédia] stb.) kijelölésével megadhat különféle kiegészítő információkat.  

![AdditionalTags][]

Vagy hozzáadhat egyéni címkéket is a **Minden címkére** kattintva. ![image44][]{: height="24 képpont"}  

- Ez az objektumhoz csatolt összes címkét megjeleníti.  
![image45][]  
- Kulcsok és értékek hozzáadásához kattintson a pluszjelre (+), címkék törléséhez pedig kattintson a kuka ikonra.

További oktatóanyagok
------------------

A [külső anyagokról szóló oldalunk] (/hu/resources/#iD) számos, különböző forrásokból származó oktatóvideóhoz tartalmaz linkeket.

iD versus JOSM
---------------  

** Az iD jó eszköz akkor, ha... **

- egyszerű szerkesztéseket végez  
- gyors internetkapcsolata van a légi felvételek betöltéséhez és a szerkesztések mentéséhez  
- biztos akar lenni abban, hogy következetes és egyszerű címkézési séma szerint dolgozik  
- korlátozva van abban, hogy az Ön által használt számítógépre programot telepítsen

**A JOSM jobb eszköz akkor, ha…**

- sok épületet ad hozzá (lásd a bulidings_tool bővítményt)
- sok már létező sokszöget vagy vonalat szerkeszt
- megbízhatatlan internetkapcsolaton vagy offline állapotban dolgozik
- egy konkrét címkézési sémát (vagy egyéni előre beállított értékeket, előbeállításokat) használ

[^fieldpaper]: Van egy [LearnOSM fejezet] (/hu/mobile-mapping/field-papers/), amely további tájékoztatást ad a Field Papersről.



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