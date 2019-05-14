---
layout: doc
title: Stahování dat z OSM
permalink: /cs/osm-data/getting-data/
lang: cs
category: osm-data
---

Stahování dat z OSM
=================  


Pokud chcete získat nejnovější data z OpenStreetMap, nejjednodušším způsobem je stáhnout požadovanou oblast z webu. Existují různé webové služby, které poskytují tuto službu.  

Stažení výtažku dat
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) je společnost, která se specializuje na práci s OpenStreetMap. Na svých webových stránkách v sekci [download](http://download.geofabrik.de) poskytují zdarma ke stažení řadu oblastí ve formátu shapefile a surovém formátu OSM. Výhodou stahování dat GeoFabrik je, že jsou aktualizovány každý den a je to snadné a spolehlivé. Nevýhodou je, že data jsou extrahována podle zemí a ne všechny země jsou k dispozici.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) poskytuje shapefiles a surový formát OSM pro města po celém světě, s týdenní aktualizací. To je užitečné, pokud potřebujete data pouze pro jediné město.

>Pamatujte si, že objekty v OpenStreetMap mohou obsahovat neomezené množství "volných" značek,
>ale shapefiles má atributy uloženy v datově omezené tabulce. To znamená,
>že při konverzi OSM dat do shapefile, budou do jeho tabulky zahrnuty
>pouze specifické značky. Výše uvedené webové stránky poskytují shapefiles
>s přednastavenou sestavou běžných značek, ale chcete-li extrahovat konkrétní značky,
>bude potřeba využít více specializované služby z následující sekce
>nebo se naučit exportovat data vlastními silami.

Vlastní extrakty
-------------------

### HOT Exporty  

[Humanitarian OpenStreetMap tým](http://hotosm.org) vytvořil nástroj, který umožňuje uživatelům vybrat si oblast, kterou chtějí extrahovat a využít [JOSM Předvolby](/cs/josm/josm-presets/)
 k výběru vlastních značek a zahrnout je do extraktu. Služba je dostupná pro všechny země, ve kterých HOT pracuje a to na adrese [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

U této služby si můžete vybrat vlastní oblast z kterékoli části světa na adrese [http://extract.bbbike.org/](http://extract.bbbike.org/). Nevýhodou je, že si nemůžete vybrat konkrétní značky a omezení na množství dat, které můžete stáhnout.  

### Overpass

Overpass je rozhraní API (Application Programming Interface) pro extrahování dat z kopie hlavní databáze OpenStreetMap, která je určena pouze pro čtení, čímž můžete přenést téměř libovolné množství dat. Pomocí dotazovacího jazyka si můžete nadefinovat, kterou podmnožinu dat chcete získaných. API můžete použít přímo ke generování http požadavku nebo přes rozhrani overpass turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) je interaktivní generátor dotazů, ve kterém si nejprve přiblížíte příslušnou oblast na mapě. Zadáte svůj dotaz do levého pole na stránce a požadovanou akci spustíte pomocí tlačítka v horní části rozhraní. Pokud jste nováček v dotazovacím jazyku, měli byste začít průvodcem. Wiki OSM obsahuje [ucelený popis](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) syntaxe dotazovacího jazyka a taktéž [spoustu příkladů](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

Mapa zvýrazní všechna data vybraná dotazem, který pak můžete upravit. Stisknutím tlačítka **Run** obnovíte zobrazené výsledky. Jakmile jste spokojeni s tím, co vidíte, pak tlačítko **Export** nabízí řadu možností, mezi nimi i surová data OSM. Pokud je množství dat omezeno, můžete k nim přistoupit také přímo a to přepnutím ze zobrazení mapy na zobrazení dat pomocí tlačítek vpravo nahoře. Možnost exportu *Query -> (compact) OverpassQL* vygeneruje hypertextový odkaz, který lze použit v Overpass API.

![overpass turbo][]

Chcete-li vytvořit zajímavý dotaz, abyste získali podmnožinu dat z velké oblasti, je vhodné tento dotaz nejprve otestovat a vylepšit na malé ploše v Overpass Turbo. Poté si můžete nastavit pohled na celou oblast vašeho zájmu a použít výslednou adresu URL dotazu přímo v rozhraní API. V následující sekci si řekneme, jak na to.

#### Overpass API

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) je služba optimalizovaná výhradně pro dotazování OSM, nikoli pro zápis dat do OpenStreetMap. Díky této optimalizaci pracuje velmi rychle ve srovnání s hlavním api databáze a nemá prakticky žádné limity na množství přenesených dat. Několik instancí této služby je k dispozici na síti, informace o námi použité v následujícím příkladu, naleznete na [její domovské stránce](http://overpass-api.de/)

Pokud máte funkční URL dotaz pro odeslání http požadavku na API Overpass, pak nástroj jako [wget](https://www.gnu.org/software/wget/) - dostupný pro různé operační systémy, viz [zde](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - umožňuje stáhnout surová data OSM přímo ze serveru a lokálně je uložit. Následující úryvek obsahuje skript pro bash shell běžný v systémech Unix, který získává všechna data v zadaném rámci:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
> Co tento dotaz udělá (pro zvědavé, kteří nechtějí číst celou dokumentaci dotazovacího jazyka)?  
>*node(...)* vybere všechny uzly v zadaném rámci;  
>< výběr úplný, tj. vybere všechny cesty obsahující tyto uzly a všechny relace obsahující tyto uzly a cesty;  
>*rel(br)* vybere všechny mateřské relace dusud nalezených relací (jinak by master relace nebylo možné získat)
>



Shrnutí
-------  

Služby zmíněné v této kapitole mají vše, co průměrný uživatel potřebuje k získání OSM data a dále je zpracovat v softwaru GIS. Možná se sami budete chtít naučit účinnější způsoby práce s daty. Zbývající kapitoly v této sekci jsou poměrně technické, ale ukazují pokročilejší metody manipulace a přístupu k údajům OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png