---
layout: doc
title: Trasování silnic, budov, vod a využití půdy 
permalink: /cs/coordination/remote-tracing/
lang: cs
category: coordination
---

Trasování silnic, budov, vod a využití půdy
===========================================

> Tento návod můžete stáhnout jako [remote-tracing_en.odt](/files/remote-tracing_en.odt) nebo [remote-tracing_en.pdf](/files/remote-tracing_en.pdf)  
> Zkontrolováno 8.2.2016  

Navazuje na část [Remote, Armchair & Mapathon sekce LearnOSM] (/cs/coordination/remote/) sekci, která je zaměřená na mapovače bez zkušeností s mapováním HOT.  


Obsah kapitoly
=====

[Silnice a dálnice včetně cest a tras](/cs/coordination/remote-tracing/#cesty)  
[Silniční síť](/cs/coordination/remote-tracing/#silničn%C3%AD-s%C3%ADť)  
[Rezidenční hranice](/cs/coordination/remote-tracing/#rezidenčn%C3%AD-hranice)  
[Budovy, zdi, ploty, betonové zdi a bariéry](/cs/coordination/remote-tracing/#budovy,-zdi,-ploty-a-bariéry)  


## Cesty

Jakýkoliv druh cest, od dálnic, přes polní cesty a stezky jsou v OpenStreetMap označeny jako **highway**. Je důležité, aby byly silnice správně přidávány do databáze (data OpenStreetMap), protože se používají v mnoha ohledech:  

- Navigační software v zařízeních např. od Garminu, nebo aplikace ve smartphonech, jako je třeba Osmand, mohou navigovat na velké vzdálenosti, pokud jsou do nich načteny správné informace. Vzhledem k tomu, že se tyto přístroje spoléhají na GPS v zařízení, aby zobrazily polohu na mapě, je důležité, aby cesty byly uvnitř rozmezí asi 15 metrů od správné pozice, jinak nebudou fungovat!  
- Plánování trasy pro velký nákladní automobil je mnohem jednodušší, pokud můžete rozlišovat mezi stezkou, silnicí pro motorová vozidla a všemi druhy cest mezi nimi.  
- Informace, zda je povrch vozovky asfaltový nebo měkké bláto, může znamenat rozdíl v plánování trasy.
- Při pokusu o zamezení šíření nemoci je informace od oběti, že se nachází *poblíž křižovatky* významná, pokud si tu křižovatku můžete najít na mapě.

### Silnice - Jak je mapovat

![iD 3][]

1. Při trasování silnic je důležité dostatečné přiblížení. Výchozí hodnotu měřítka nastavte přibližně na 20 metrů a trasujte silnice tak, aby obsahovala dostatek bodů a tím kopírovala tvar silnice, kterou můžete vidět na satelitních snímcích. Na snímku nahoře můžete vidět, že jsem protahoval cestu z přilehlého čtverce, dolů skrz stromy až k budově, kde nejspíš končí. Tam, kde jsou stromy v blízkosti silnice a jedná se o letecké snímky, pak to vypadá, že se silnice zužuje při průchodu mezi stromy - avšak to jen stromy zakrývají výhled a silnici má stejnou šířku.  
2. Také jsem zakreslil další část silnice, ujistil se, že jsou oba konce připojeny - iD to znázorňuje poněkud větší a tmavší barevnou tečkou na křižovatce. Je důležité, aby byly silnice spojené a **sdílely společný uzel**, aby navigační software poskytoval správné pokyny.  
3. Silnice je označena jako **highway=residential** a přidal jsem také typ povrchu **surface=unpaved**.  
4. Úplný popis značkování v Africe naleznete na wiki stránce [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Existuje velké riziko, že vzniknou konflikty, které vám zabrání uložit práci na jakékoliv silnici, která se nachází i v jiných čtvercích, kde ji mohou také upravovat. Doporučujeme uložit všechny změny před úpravou silnice a poté ukládat změny co nejčastěji to bude možné, například po přidání každých 6 uzlů.


### Silniční síť

![JOSM 4][]

Tento snímek ukazuje JOSM s nastaveným stylem HOT-OSM-Validate [JOSM styly](https://josm.openstreetmap.de/wiki/Styles). Ačkoli je navržen tak, aby pomáhal validátorům, může být velmi užitečný při provádění počátečního mapování. Cokoliv, co je zbarveno červeně, znamená problém - zbývající barvy jsou vysvětleny v legendě na tomto snímku.  

1. Tento úsek silnice je zbarven červeně, protože značka byla špatně zapsána a bylo použito velké písmeno. Značka by měla být highway=unclassified a silnice na snímku by měla světle hnědou barvu.  
2. Toto je část silniční sítě vedoucí z města na jihozápadu. Tato síť se připojí ke zbytku silniční sítě v Africe.  
3. Tyto úseky silnice jsou „izolované“. Nejsou žádným způsobem spojeni s městem ani s jinými silnicemi. Ve svém současném formátu nejsou příliš užitečné a bude potřeba je dále prozkoumat, aby se zjistilo, zda mohou být připojeny ke zbytku sítě, nebo zvážit jejich odstranění.  


**Silnice nebo říčka?**

![iD 5][]

V iD editoru neexistují žádné pomocné styly, ale na této obrazovce můžete vidět oblast vegetace a země. Země vypadá jako bahno nebo možná i oblast bažiny bez vody. Tečkované černé a bílé čáry představují stezky v iD, dočasně jsem jednu zvýraznil a pak ji odstranil, aby se zobrazil terén.  

1. highway=path nebo koryto říčky. Pravděpodobně obojí! silnice všech velikostí často vedou údolím řeky a v mnoha případech mohou vést trasou sezónní řeky nebo potoka. V tomto případě se zdá, že se jedná o záplavovou oblast, která byla v době, kdy se pořizovaly satelitní snímky, suchá a byla používána jako cesta. Takovou cestu by bylo nejlépe označit jako:  
highway=path  
seasonal=yes  
surface=unpaved  
2. Cestu můžete jasně vidět, jak směřuje do pásma stromů a keřů, ale není možné vidět její přesný průběh mezi stromy. V těchto případech si můžete být jisti, že stezka, polní cesta nebo silnice se tam nachází, pouze ji zakrývají stromy. Cestu jsem zmapoval tak, že jsem pokračoval přímkou mezi stromy ve směru cesty, kterou jsem trasoval na jasně viditelné části země a pokračoval na druhé straně vegetace. Toto řešení používejte s opatrností, ale v tomto případě je zřejmé, že tam cesta vede a pravděpodobně bude velmi blízko linie, kterou jsem nakreslil. Jedná se o extrémnější příklad - obvykle se trasa silnice odhaduje pouze na několika metrech, které jsou zatemněny jedním nebo dvěma stromy.  
3. Smazáním cesty bude země jasně viditelná, pomocí funkce „zpět“ v iD editoru ji lze snadno vrátít.  

***


## Rezidenční hranice

Rezidenční hranice jsou v OpenStreetMap využívány pro mnohé účely.  

+ Nejběžnější využití je při pohledu na obydlené oblasti z vyšších úrovní oddálení při prohlížení [OpenStreetMap.org](http://www.openstreetmap.org), kde jsou ve standardním zobrazení zbarveny světle šedě.  
+ Tam, kde není čas mapovat podrobně od samého počátku, bude projekt v Task Manageru často vyžadovat něco podobného tomuto:  

> Mapovat základní infrastruktury, jako jsou školy, náboženská místa a trhy.  
> Trasovat výjezdy z osad a hřbitovů.  
> Cesty přidáme později v jiném úkolu.   
+ **landuse=residential** může být využit pro statistické účely a přesné zmapování se tak stává důležitým  

* Pokud můžete zjistit, kolik lidí obvykle bydlí v každém obydlí,  
 kolik obydlí se obvykle v dané oblasti postaví,  
 když potom pracujete v oblasti obklopené hranicí **landuse=residential**,  
 můžete poměrně přesně určit velikost populace v dané oblasti.  
 Odhad počtu potřebných humanitárních pracovníků a množství léků se nyní stává realističtějším.
* Názvy míst a hranice jsou často importovány z jiných zdrojů, ale jejich umístění není vždy přesné. Jakmile je k dispozici ohraničení obydlené oblasti, osoba provádějící import, může správně nastavit umístění jejího názvu.


### landuse=residential - jak mapovat


**V ideálním světě**  

*Krok 1* - Je rozhodnuto o mapování oblasti a mapovač rychle umístí velmi hrubé hranice **landuse=residential** kolem oblasti,  
*Krok 2* - Projekt v Task Manageru je vytvořen a jednotliví mapovači upravují hranici tak, aby byla blíže k obydlí atd.  

![JOSM residential][]

![iD residential][]
 
Snímky obrazovky iD a JOSM uvedené výše ukazují správně zmapované hranice **landuse=residential**.  

1. Hranice musí být uzavřena, takže počáteční bod čáry (trasy) se připojí ke koncovému bodu.  
2. Segmenty a uzly hranice by se neměly spojovat se silnicemi, vodními cestami, budovami ani jinými objekty. To znamená, že by neměli sdílet žádné uzly. Ale mohou se křížit.  
3. Hranice by měla být poměrně blízko budov nebo zahrad, které jsou součástí seskupení.  


Na obrázku níže můj čtverec obsahuje část hranice **landuse=residential**. Osoba, která dokončila čtverec vpravo odemně, pokračovala v ohraničení **landuse=residential** a poté mi ho správně „předala“ umístěním hranice do mého čtverce, abych přesně věděl, kde mám pokračovat.  


![JOSM residential 1][]

Přidám k hranicím další uzly a tím se rozšíří kolem budov horizontálním směrem přes můj čtverec, ve spodní části budu pokračovat podél hranice rovnoběžnou přímkou uvnitř přilehlého čtverce, takže osoba, která si ho vybere, bude moci pokračovat v jeho rozšiřování kolem všech budov, které se tam nachází.  

Jedná se o obtížnou operaci - můžete vidět pouze malou část celého města / obce / vesnice a i když vytvoříte hranici **landuse=residential** jak nejlépe umíte, je velmi pravděpodobné, že ověřovatel, který má přehled několika čtverců, bude muset hranici ještě doladit, hned po mapování v jednotlivých čtvercích.  

> Existuje velké riziko, že nastanou konflikty při práci na hranici **landuse=residential**, protože se rozšiřují i do dalších čtverců, kde je budou také upravovat. Doporučujeme uložit všechny změny před úpravou hranice a poté uložit změny ve velmi častých intervalech, například po přidání každých 6 uzlů.

***


## Budovy, zdi, ploty a bariéry  

Budovy jsou mapovány z několika důvodů;  

* Hustota budov v dané oblasti umožňuje poměrně přesně odhadnout počet lidí, kteří v ní bydlí.  
* Velikost, tvar a umístění budovy mohou pomoci identifikovat ji jako potenciální místo pro evakuace nebo léčení.  
* Velikost, tvar a relativní umístění budov lze využít při identifikaci konkrétních míst, jako jsou studny, stanice pomoci, školy atd.  
* Lze stanovit míru škod způsobených budovou, která může být použita k odhadu počtu potenciálních obětí a velikosti podpory, která by byla požadována - to se v současné době (leden 2015) projednává pro budoucí využití.  


### Budovy - Jak mapovat

Drtivá většina budov, které vyžadují mapování HOT, jsou buď založena na obdélníkových tvarech s pravoúhlými nebo kulatými rohy. Pokud budova vypadá, že je směsí obou tvarů, pravděpodobně se díváte na budovu, jejíž obrysy jsou zkresleny stínem, odrazem, zelení nebo podobným způsobem.  

U některých úkolů, kde je vyžadován pouze obrys oblasti, může být povoleno mapovat budovy jako body, ale tyto situace jsou velmi vzácné.  


#### building=yes

Pokud není v instrukcích u projektu uvedeno jinak, budovy by měly být označeny **building = yes**  

* Mezi focením satelitních snímků a samotným mapováním může být často časové zpoždění. Je možné, že budova, na kterou se díváte, nemá střechu, ale teď už je dokončená a obydlená. Je také možné, že se díváte na budovu s několika podlažími, dolní patra jsou obydlená, ale nejvyšší patro je momentálně bez střechy a obyvatel.  

> **Mapování budov pomocí iD** - když vytváříte základí tvar oblasti pomocí nástroje pro vytváření oblastí v iD editoru, nesmíte zapomět nastavit značku **building=yes**. Výchozí nastavení pouze označí tvar jako **area=yes**. Pokud vytváříte budovu s hranatými rohy, udělejte ji pravoúhlou (klikněte na ni a zmáčkněte klávesu 'S' ).  

*  JOSM je pro mapování budov rychlejší - [JOSM building tools je vysvětlen zde.](/cs/josm/josm-more-plugins/#doplněk-buildings-tools)  

![Buildings iD][]

Tento snímek obrazovky zobrazuje část čtverce, který je upravován. Všimněte si měřítka ve spodní části 15 metrů - je to číslo, na které byste se měli při úpravách podívat. Při kreslení se snažte umístit budovu tam, kde se stýká se zemí:  

1. **Kulaté budovy** Bývají poměrně nízké a jejich stín je stěží viditelný. Kdybyste stáli mezi nimi, vypadali by jako kopule. Zatím jsem zakreslil a označil pouze jednu z nich **building=yes**. Chcete-li rychle přidat zbývající kulaté budovy v JOSM nebo iD, vyberte jednu (označte ji), zkopírujte ji pomocí zkratky *Ctrl + C*, přesuňte kurzor do středu jiné kulaté budovy stejné velikosti a vložte ji pomocí *Ctrl + V*. Jakmile jsou všechny kulaté budovy této velikosti přidány, vložím budovu na místo jiné velké kulaté budovy, v JOSM - pomocí *Alt + Ctrl* a myši jí nastavím správnou velikost a pokračuji v kopírování stejným způsobem, jako u předchozích budov.  
2. ** Obdélníkové budovy ** Tento typ budov vrhá znatelný stín. Stín může pomoci určit tvar budovy, která je částečně zakryta jiným objektem. Zjistíte, že mnohé budovy nejsou tvarově jednoduché a mají verandu nebo mají tvar písmene „L“ - musíte vyznačit skutečný tvar budovy, je důležitý při její identifikaci při terénním průzkumu, když se jí přiřazuje jméno a další informace.  
3. **Bariéry - betonové (nebo živé) ploty.** Zkoumal jsem snímky, přiblížoval a oddaloval, dokud jsem nebyl spokojen s tvarem objektu (využil jsem i stíny k jeho identifikaci), myslím si, že je to zeď a tak jsem ji označil **barrier=wall**. Alternativní označení může být **barrier=fence** a **barrier=hedge**.  
4. Spojil jsem **barrier=wall** s **building=yes** v rohu budovy.  


### Satelitní snímky zkreslují tvar budovy.


![Buildings_2][]

1. Satelitní snímky výše obsahují budovy, ale satelit nebyl přímo nad nimi, takže budova vypadá zkresleně a je viditelná zadní stěna. Kvůli tomuto úhlu nemá střecha tvar obdélníku. Slunce je prakticky přímo nad budovou, takže stín budovy označený šipkami s číslem 1 potvrzuje, že budova je obdélníková.  

2. Chcete-li tuto budovu zmapovat, vytvořte obdélník, který se rozprostírá od šipek s číslem 2, až k předpokládanému konci budovy, označenému na obrázku šipkou s číslem 3.  


***


Další informace naleznete v následujících odkazech.


# Více informací

-  [Tipy pro HOT Mapování v zapádní Africe od uživatele Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki článek týkající se ověřování](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway značka v Africe - preferovaný způsob značení cest v Africe](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Krátký tutoriál ve francouzštině o vzdáleném mapování](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png