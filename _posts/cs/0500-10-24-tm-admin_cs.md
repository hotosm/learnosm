---
layout: doc
title: Tasking Manager – návod pro správce
permalink: /cs/coordination/tm-admin/
lang: cs
category: coordination
---

# Tasking Manager – návod pro správce


**Pokud se uživatelské rozhraní verze, kterou používáte, liší od zde popsané verze, měli byste se podívat do [našeho přehledu verzí](/en/coordination/tm-disambiguation)**.

Rejstřík sekcí
-------------
-  [Přihlášení a přístup](/en/coordination/tm-admin/#login-and-access)
-  [Oprávnění](/en/coordination/tm-admin/#permissions)
-  [Vytvořit projekt](/en/coordination/tm-admin/#create-a-project)
    -  [Definice oblasti mapování](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definovat úlohy](/en/coordination/tm-admin/#define-tasks)
    -  [Pokročilé: Definovat úlohy s importovanými daty](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Ořez oblasti projektu](/en/coordination/tm-admin/#project-area-trim)
    -  [Název projektu](/en/coordination/tm-admin/#name-the-project)
-  [Upravit projekt](/en/coordination/tm-admin/#edit-a-project)
    -  [Popis - první věc, kterou se uživatelé dozvědí o vašem projektu](/en/coordination/tm-admin/#description)
    -  [Pokyny - co mají uživatelé dělat](/en/coordination/tm-admin/#instructions)
    -  [Metadata - kam projekt patří](/en/coordination/tm-admin/#metadata)
    -  [Prioritní oblasti - kde by uživatelé měli začít mapovat](/en/coordination/tm-admin/#priority-areas)
    -  [Zobrazení - základ pro mapování](/en/coordination/tm-admin/#imagery)
    -  [Oprávnění - kdo smí mapovat a ověřovat](/en/coordination/tm-admin/#permissions)
    -  [Nastavení](/en/coordination/tm-admin/#settings)
    -  [Akce](/en/coordination/tm-admin/#actions)
    -  [Vlastní editor](/en/coordination/tm-admin/#custom-editor)
    -  [Uložit a otestovat](/en/coordination/tm-admin/#save-and-test)
    -  [Zveřejnění](/en/coordination/tm-admin/#publish)
-  [Řízení projektů](/en/coordination/tm-admin/#project-management) 
    -  [Be responsive](/cs/coordination/tm-admin/#be-responsive)
    -  [Sekvenování projektů](/en/coordination/tm-admin/#sequencing-projects)
    -  [Životní cyklus projektu](/en/coordination/tm-admin/#project-lifecycle)
-  [Další informace](/en/coordination/tm-admin/#additional-information)
    -  [Úvahy o zobrazování](/en/coordination/tm-admin/#considerations-concerning-imagery)

Tasking Manager je základním nástrojem pro koordinaci mapování v OpenStreetMap. Podporuje humanitární mapovací iniciativy, pořádání mapathonů nebo vytváření mapovacích úloh pro studenty. Aplikace rozděluje zájmovou oblast na zvládnutelné geografické části, které lze rychle a ve spolupráci dokončit. Tento přístup umožňuje rozdělit úkoly mnoha jednotlivým mapovatelům a zároveň omezit možné konflikty při úpravách. 

Software podporuje přesné a kvalitní mapování tím, že poskytuje mapovačům konzistentní sadu pokynů (např. "zmapujte všechny silnice a budovy"). Stručně řečeno, Tasking Manager je způsob, jak nastavit a řídit pracovní postup pro otevřené mapovací činnosti. 

Tato příručka popisuje základní správu Tasking Manageru. Zahrnuje pokyny k vytváření a úpravám mapovacích projektů a manipulaci s oprávněními pro mapování a revizi dat z hromadných zdrojů.

## Login and access

K přihlášení do Tasking Manageru je zapotřebí účet OpenStreetMap (OSM). Můžete navštívit stránku [HOT Tasking Manager](http://tasks.hotosm.org) nebo jakoukoli jinou instanci komunity podle vašich preferencí. Tam klikněte na `Přihlásit se` a budete přesměrováni na [webové stránky OpenStreetMap](https://www.openstreetmap.org), kde si vytvoříte účet. Nebo klikněte na `Přihlásit se`, pokud již nějaký máte, a ve vyskakovacím okně můžete Správci úloh udělit omezený přístup ke svému účtu OSM.

## Oprávnění

Nejzákladnější uživatelská úroveň je **mapper**. Mappeři se mohou přihlásit do Tasking Manageru a vyhledat a vybrat mapovací projekt, na kterém budou pracovat. Veškeré funkce mappera jsou popsány v příručce [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Všimněte si, že některé projekty, například ty, které jsou ve stavu návrhu (tj. nezveřejněné), nebo projekty omezené na určité týmy, nejsou pro běžné mappery viditelné. 

Všechna zvláštní oprávnění mají na starosti *organizace* a *týmy*. Hlavní zastřešující organizací je **organizace** a pod každou organizací lze vytvářet mapovací projekty a týmy. Organizace může představovat uživatele dat, například humanitární organizaci, nebo jakoukoli komunitu OpenStreetMap. Pokud potřebujete nastavit organizaci ve Správci úloh, obraťte se na technické správce instance Správce úloh. Seznam organizací, které jsou přítomny v Tasking Manageru HOT, naleznete v části [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations). Pokud tam vaše komunita nebo organizace není uvedena a chtěli byste vytvářet projekty na HOT's Tasking Manager, vyplňte [tento formulář](http://bit.ly/HOTTasking) a zaregistrujte svůj zájem. 

Každá organizace má jednoho nebo více **manažerů**. Ti mají oprávnění vytvářet a upravovat související projekty. Všechny možnosti správce jsou přístupné prostřednictvím sekce `Správa` v hlavní navigaci.

Manažeři organizace mohou vytvářet **týmy**. Týmy jsou skupiny uživatelů OpenStreetMap a mohou být veřejně viditelné nebo soukromé. Mají také jednoho nebo více manažerů týmů. Týmy mohou být nastaveny tak, že se uživatelé mohou k týmu připojit sami nebo "pouze na pozvání", což znamená, že manažeři týmu jsou o žádostech o připojení informováni a musí o nich rozhodnout.

Pro každý projekt mohou správci přiřadit konkrétní týmy, kterým mohou udělit nebo omezit přístup k mapování, definovat, kdo může ověřovat data nebo kdo jiný může upravovat metadata projektu.

## Vytvořit projekt

V navigaci nahoře klikněte na `Správa`, v prvním řádku uvidíte místo pro 'Projekty'. Vedle něj klikněte na tlačítko `Přidat` a jeden z nich vytvořte.

![TM Add Project][]

Můžete si vybrat mezi definováním zájmové oblasti (mapovací oblasti) vašeho mapovacího projektu buď pomocí:

* Možnost 1: `Nakreslete` oblast zájmu ručně
* Možnost 2: `Nahrát soubor` pro import oblasti zájmu jako GeoJSON, KML nebo zazipovaný shapefile.

![TM New][]

### Definice mapovací oblasti

* Možnost 1: `Nakreslete` oblast zájmu ručně

1. Pomocí tlačítek v horní části můžete přepínat na jiné vrstvy pozadí. 
1. Klikněte na tlačítko `Kreslení` vlevo.
2. Chcete-li nakreslit polygon představující oblast mapování v rámečku mapy, podržte pravé tlačítko myši a přesuňte mapu bez kliknutí, čímž přidáte uzel. Polygon by měl těsně rámovat oblast zájmu. Tím ušetříte čas při vyplňování dlaždic, které nejsou předmětem zájmu (např. oceán, les).
3. Kliknutím na výchozí bod dokončete polygon. <!--After completing a polygon you can move the nodes or add new ones to get the area just as you want it.-->

<br>

* Možnost 2: `Nahrát soubor` pro import oblasti zájmu jako GeoJSON, KML nebo zazipovaný shapefile.

1. In the first step of creating a project click on `Upload file`.
2. V okně Nahrát soubor přejděte na svůj soubor.
3. Click the file name to highlight the file and then click ‘Open’.
4. Importované oblasti zájmu nelze v Tasking Manageru upravit.

Je možné, že nahráváte soubor, který již obsahuje předdefinované úlohy (malé mapovací čtverce). Více informací o tom najdete níže v části [Definovat úlohy s importovanými daty](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data).

> POZNÁMKA: Tasking Manager má svá omezení! Maximální technický limit pro projekt je 5 000 km2, aby však dokončení projektu netrvalo příliš dlouho, snažte se ho udržet pod 1 000 km2. Pokud potřebujete zmapovat větší oblast, budete muset vytvořit několik projektů. Velikost projektu uvidíte v levém dolním rohu náhledu mapy. 

### Definovat úlohy

Po vymezení celkové oblasti mapování se tato oblast rozdělí na menší oblasti zvané *Úlohy*. Velikost úloh projektu musíte pečlivě zvážit. Dobře navržené projekty mají odpovídající velikosti úloh, což umožňuje jejich co nejefektivnější dokončení. 

![TM Tile Sizes][]

Oblast projektu se automaticky rozdělí na buňky mřížky a každá buňka se stane úlohou. Pomocí tlačítek `Větší` a `Menší` můžete upravit celkovou velikost čtverců úlohy. Výchozí velikost úlohy je pravděpodobně příliš velká. Při změně velikosti úlohy si všímejte velikosti úlohy uvedené vlevo vedle položky 'Velikost každé úlohy je přibližně ... km2'.

Nespěchejte a pečlivě si nastavte velikost úloh! Snažte se zmenšit velikost úlohy tak, abyste si mysleli, že by to sebevědomému mapovači zabralo **15 minut**. Optimální velikost úlohy zcela závisí na objektu (objektech), které po maperech požadujete, a na hustotě těchto objektů. Například projekt mapování silnic ve venkovské oblasti bude mít mnohem větší úkoly než projekt, který zahrnuje digitalizaci budov v hustém osídlení.

> Přibližte a aktivujte zobrazení Bing, abyste určili vhodnou velikost úlohy. Tlačítky v horní části mapy můžete přepínat mezi několika vrstvami podkladu.

Po nastavení celkové velikosti úlohy můžete některé úlohy selektivně rozdělit na čtyři menší pomocí tlačítka `Kliknutím na rozdělení`. Nebo můžete `Kreslit oblast pro rozdělení`, a to vám umožní nakreslit polygon nad oblastí, abyste rozdělili všechny úlohy uvnitř. Tyto funkce jsou užitečné zejména v případě, že hustota prvku, který chcete mapovat, se v oblasti projektu liší. Například může existovat hustě zastavěná pobřežní oblast, která potřebuje malé úlohy, a vnitrozemská venkovská oblast, která potřebuje mnohem větší úlohy. Tlačítko `Reset` odstraní veškeré vaše vlastní rozdělení.

Úvahy při rozhodování o velikostech úloh:
-  Úlohy lze rozdělit, ale po vytvoření projektu není možné je znovu spojit.
-  Po vytvoření projektu je rozdělení úkolů velmi časově náročné a musí se provádět po jednom úkolu.
-  Na okrajích a v rozích úloh existuje větší potenciál pro konflikty mezi sousedními mapovači. Menší úlohy znamenají více rohů a hran. Existuje kompromis ve velikosti úlohy, aby byla pro mapovače snadná, ale aby mezi nimi nevznikaly konflikty při mapování.
-  Malé úkoly se snáze mapují, ale více úkolů znamená, že mapovači musí strávit více času aktualizací stavu každého z nich, a projekty s příliš malými úkoly tak mohou být neefektivní.
-  Začínající mappeři potřebují zhruba čtyřikrát delší dobu než zkušení mappeři.
-  Začínající mappeři si musí osvojit satelitní snímky. Všimnout si správných prvků může být obtížné.

Jakmile jste s velikostí úlohy spokojeni, klikněte na tlačítko `Další`.

### Pokročilé: Definujte úlohy s importovanými daty

Pokud jste nahráli soubor pro definici oblasti projektu, může tento soubor obsahovat také tvary jednotlivých úloh. Například hotový projekt z MapSwipe, který se zaměřuje na obydlené oblasti, nebo složitou síť, kterou jste předem vytvořili v QGIS. V takovém případě nezapomeňte povolit přepínač "Nastavit úlohy pomocí nahraných polygonů". Tím přeskočíte rovnou do fáze tvorby projektu s pojmenováním. 

![TM New Polys][]

### Oříznutí projektové plochy

![TM Trim][]

Po určení velikosti úloh budete mít možnost oříznout úlohy v rozsahu oblasti mapování. Téměř jistě to budete chtít udělat. Klepnutím na `Oříznout` odstraníte všechny čtverce úloh, které nepřekrývají vaši oblast projektu. 

![TM Trim coarse][]

Pokud před kliknutím na tlačítko 'Oříznout' zapnete možnost `Oříznout úlohy pro přesné vymezení oblasti zájmu pro mapování`, budou překrývající se části úloh na okraji oblasti zájmu ostře oříznuty oproti oblasti zájmu.

![TM Trim fine][]

Při ostrém ořezávání může dojít k extrémně malým úkonům. Tyto drobné úlohy mohou mapovatele zmást. Můžete je odstranit výběrem možnosti `Odstranit`, když se zobrazí zpráva 'There are ... tasks smaller than 2,000m2. Chcete je vyřadit?

> Všimněte si počtu úkolů, které váš projekt obsahuje (podívejte se do levého dolního rohu mapy). Maximální technický limit pro počet úkolů v jednom projektu Tasking Manageru je 5 000. Aby však dokončení projektu netrvalo příliš dlouho, snažte se udržet počet úkolů pod 1 000 - pokud potřebujete zmapovat větší oblast, zkuste ji rozdělit na menší projekty. 

Klikněte na `Další`.

### Název projektu

Název projektu je jedním z jeho nejdůležitějších aspektů, pokud jde o to, aby se o něm dozvěděla širší veřejnost. Pokuste se uvést název země, ve které se projekt nachází (např. Jižní Súdán), důvod mapování (např. Očkování COVID) a také konkrétnější místo, třeba název okresu nebo osady (např. Yambio County). Úplný název projektu může být např: _Jižní Súdán, očkování COVID, okres Yambio_. 

Ensure your organization is selected under the 'Organization' field. 

> Před dokončením této fáze se ujistěte, že jste spokojeni s oblastí zájmu projektu a celkovým počtem úkolů, tyto prvky nelze později upravit.

Klikněte na tlačítko `Vytvořit`. Váš projekt bude vytvořen, ale nebude okamžitě publikován - nejprve budete přesměrováni do nabídky Úpravy projektu. 

## Upravit projekt

Nyní se zobrazí nabídka "Upravit" vašeho projektu. Před uložením projektu je třeba pečlivě projít nabídku 'Edit' a dokončit nastavení. Zde je stručný přehled dílčích nabídek, které uvidíte na levé straně:

- Popis - Nastavte stav, prioritu a textový popis související s projektem.
- Návod - Podrobný návod, jak zmapovat potřebné funkce a jak přistupovat k projektu.
- Metadata - Definujte prvky, které je třeba mapovat. Zahrnuje také informace používané pro kategorizaci projektů, které se používají při filtrování projektů.
- Prioritní oblasti - umožňuje určit části v oblasti projektu, které by měly být mapovány jako první.
- Snímky - Vyberte snímky, které se ve výchozím nastavení načtou, když dobrovolníci mapují váš projekt. 
- Oprávnění - umožňuje omezit přístup k projektu pro mapování a ověřování.
- Nastavení - zapnutí/vypnutí alternativních editorů, například RapiD.
- Akce - Výkonné hromadné akce, které můžete provádět s projektem, například klonování nebo mazání.
- Custom editor - Add a custom editor using a URL

> Pečlivé vyplnění těchto informací je nezbytnou součástí úspěšného mapovacího projektu. Zvláště důležité je, aby popis projektu a pokyny byly jasně sděleny, aby si mapovatelé byli vědomi důležitosti kvality dat a osvědčených postupů. Mějte na paměti, že přispěvatelé nemusí mít předchozí zkušenosti s OpenStreetMap a pravděpodobně nebudou znát pokyny pro označování.

### Popis

![TM Description][]

#### Stav

První je stav projektu. Ten může být nastaven na hodnotu **Návrh**, **Zveřejněno** nebo **Archivováno**.

- **Draft** - Váš projekt se spustí v režimu návrhu. V tomto režimu nebude možné jej objevit a veřejnost do něj nebude moci přispívat. Tento režim je ideální v době, kdy svůj projekt teprve nastavujete a testujete před vydáním.
- **Zveřejněno** - Když jste dokončili nastavení projektu, otestovali jej a jste rádi, že je veřejně uveden a otevřen pro mapování/ověřování.
- **Archived** - All projects should end up being archived. Archived projects are public but locked for contributions. You should consider archiving your project either if:
  - Je 100% zmapován a ověřen
  - Pokyny nebo vyobrazení jsou značně zastaralé.
  - Projekt byl vytvořen před více než rokem
  - Mapové podklady již nejsou pro humanitární účely v oblasti projektu potřeba.

#### Priorita

Dále je to priorita projektu. Ta určuje, jak blízko přední části Správce úkolů bude projekt zobrazen na stránce Prozkoumat projekty. Tuto hodnotu lze nastavit na **Podstatné**, **Vysoké**, **Střední** nebo **Nízké**.

- **Urgent** - Only set this status if the project is **in response to a disaster and the data needs are immediate**. Very few projects have this priority level. 
- **Vysoká** - Pro projekty, které nejsou nutně reakcí na katastrofu, ale data jsou potřebná v **krátkém časovém horizontu**. 
- **Střední** - Pokud jsou data potřebná, ale ne v příliš krátkém časovém horizontu.
- **Nízká** - Pokud chcete svůj projekt zveřejnit, ale nechcete, aby byl příliš výrazný. Možná budete raději sdílet svůj projekt s konkrétními skupinami pomocí adresy URL projektu.

#### Krátký popis

Přidejte alespoň dvě věty, které stručně popisují váš projekt. Je to důležité, protože dobrovolníci si je přečtou, aby se rozhodli, zda chtějí přispět. Pokuste se jasně vysvětlit, **proč** se data sbírají a **jak budou data z mapy využita**. 

> Tato pole podporují **Markdown** a mohou obsahovat obrázky (přetažením myší) a videa (přidáním adresy URL YouTube pro automatické vložení).

#### 'Dlouhý' Popis

Zde můžete svůj projekt popsat podrobněji. Uveďte více informací o tom, proč projekt existuje, kdo bude data používat a jaký očekávaný dopad bude mapování mít. Pokud projekt zahrnuje nějakou spolupráci nebo partnery, můžete to zde rozvést. 

> Do kteréhokoli z těchto textových polí můžete přidat další překlady. Pokud chcete přidat překlad, klikněte na dvoupísmenný kód jazyka a zadejte přeložený text. Uživatelům, kteří nastavili Správce úloh na daný jazyk, se projekt automaticky zobrazí v tomto jazyce. Ve výchozím nastavení je výchozím polem anglický jazyk, to lze změnit v podnabídce "Nastavení" projektu.

#### Datum ukončení

Pokud máte datum, ke kterému chcete mít projekt kompletně zmapovaný a ověřený, můžete ho sem přidat. Je to nepovinné a po překročení tohoto data se pro projekt nic nemění a dobrovolníci mohou i poté přispívat. Přispěvatelé uvidí datum termínu uvedené vedle projektu. 

### Pokyny

![TM Instructions][]

#### Komentář k sadě změn

Zde můžete přidat další sledovací značky, které se automaticky vyplní pokaždé, když někdo při mapování projektu uloží svou práci. Pokud například chcete začít sledovat všechny příspěvky napříč všemi projekty vaší organizace, můžete k nim přidat společný sledovací tag, např. #MSF nebo #cartONG. Snažte se, aby tyto značky byly **krátké** a nepřidávejte jich příliš mnoho, nepřehledné komentáře ke změnovým sadám jsou matoucí pro interpretaci a měl by být ponechán prostor pro mapovače, aby mohli zanechat popisné komentáře ke změnovým sadám. 

> Vezměte prosím na vědomí, že jedinečný tag pro sledování projektu již bude přítomen, např. #hotosm-project-11188 - **prosím, ponechte jej tak, jak je**, je velmi důležitý pro sledování průběhu projektu. Číslo na konci tagu je jedinečné ID vašeho projektu.

#### Podrobné pokyny

Přidejte popisné pokyny pro mapovače a validátory, kterými se mohou řídit při práci na projektu. Váš projekt bude veřejný, proto **napište pokyny pro nezkušené uživatele** bez znalosti místních podmínek a souvislostí. Používejte srozumitelný jazyk, protože vaše cílové publikum nemusí být rodilí mluvčí angličtiny.

1. Nejdůležitější informace napište na začátek, aby byly viditelné. Mohlo by se jednat o popis snímků a upozornění na problém s kompenzací snímků s návodem. Nebo by to mohl být pokyn pro mapovatele, aby v projektu mapování dálnic ignorovali cesty a koleje a zaměřili se na výraznější dálnice.
2. Přidejte pokyny specifické pro daný kontext/místo. Ty se výrazně liší, ale pomohou mapovatelům interpretovat satelitní snímky. Např. "V tomto projektu v Jižním Súdánu očekávejte mnoho kruhových hnědých doškových chatrčí" nebo "Osady v Guatemale jsou často hustě zastavěné, při mapování jednotlivých budov si je extrémně přibližte, aby se ujistili, že na sebe nenavazují nebo se nepřekrývají". Přetáhněte snímky leteckých snímků do pokynů zde a vylepšete tak tuto část.
3. Rozhodně připojte podrobný popis **způsobu mapování každého prvku**, který chcete zmapovat. Podívejte se na existující (ale nedávné) projekty v Tasking Manageru, zda si můžete vypůjčit nějaký existující návod (pozor, některé projekty nebudou mít dobré návody!).
4. Základním zdrojem informací o tagování je [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Pro mnoho projektů souvisejících s HOT je vhodnou specializací stránka [Tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa), na kterou se vyplatí odkázat v pokynech k vašemu projektu. Pokud váš projekt musí dodržovat jiné standardy značení, napište podobnou stránku na Wiki a uveďte na ni odkaz v pokynech.
5. Další upřesnění: Pokud je projekt vhodný pouze pro mappery s určitou úrovní zkušeností. Projekt například používá importy nebo stávající data by měla být přepracována na GPS stopy nebo nějaké jiné snímky. Formulujte to tak, aby se noví mappeři cítili přizváni k přispívání do jiných projektů, ale aby pochopili, že v tomto případě jsou vyžadovány pokročilé techniky.
6. Existují pokyny, které se týkají běžných chyb, s nimiž se při validaci setkáváme. Příkladem je kompilace Blakea Girardota o [mapování v západní Africe](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Použijte odkaz v pokynech a vysvětlete, že dodržování těchto pokynů je nutné.

#### Podle pokynů k úloze

Je to nepovinné, ale je možné přidat krátký úryvek dodatečných pokynů, které mapovatelé uvidí při práci na úkolu. To je vidět na pravé straně zobrazení editoru Správce úloh nad oddílem "Stav úlohy". Bude viditelný po celou dobu mapování, takže pokud je něco **zvlášť důležitého**, o čem chcete mapovače **instruovat**, můžete to přidat sem. 

### Metadata

![TM Metadata][]

#### Úroveň mapovače

Tím se změní úroveň obtížnosti, která se **zobrazuje** pro váš projekt. Zvažte to velmi pečlivě, protože komplexní projekty, které jsou nevhodně nastaveny na obtížnost Easy, **mohou vést k významným problémům s kvalitou dat**.

> Všimněte si, že to nemění, kdo může **skutečně přispívat** do vašeho projektu, tato omezení jsou implementována v podnabídce Oprávnění.

Většina projektů je nastavena na obtížnost **Snadná** nebo **Střední**, několik projektů je nastaveno na obtížnost Náročná.

- **Snadné** – Zvažte tuto možnost, pokud je váš projekt snadno mapovatelný a:
  - Žádáte přispěvatele, aby zmapovali pouze jeden prvek, konkrétně **pouze budovy**.
  - Hustota prvků je nízká, tj. ve **venkovské** oblasti.
  - V oblasti vašeho projektu je **malé množství** existujících dat OSM.
  - Nejsou žádné problémy se zarovnáním snímků
- **Střední** – Pokud je váš projekt obtížnější zmapovat, měli byste tuto možnost zvážit, pokud:
  - Žádáte přispěvatele, aby mapovali více než jeden objekt, např. budovy **a** silnice.
  - V oblasti vašeho projektu je střední/vysoká hustota těchto objektů, tj. **městské** oblasti.
  - V oblasti vašeho projektu existují **podstatná** data OSM.
  - Mohou se vyskytnout **problémy se zarovnáním snímků** nebo požádáte přispěvatele o použití více než jednoho zdroje snímků.
- **Náročné** – Pokud je projekt extrémně obtížné zmapovat, zvažte tuto možnost, pokud:
  - V oblasti vašeho projektu je velmi vysoká hustota obyvatel, tj. **centrální městské** oblasti.
  - V oblasti vašeho projektu je **mnoho** existujících dat OSM.
  - Existují **složité problémy se zarovnáním snímků**.

#### Types of mapping

Přepínejte je podle toho, které funkce chcete v projektu mapovat. Obecně platí, že **čím méně funkcí, tím lépe**, protože projekty, které se snaží mapovat příliš mnoho objektů, mají často potíže dosáhnout většího pokroku.

> Projekty, které vyžadují mapování velkého množství prvků, jsou pro mapovače obtížné a obtížně se ověřují. Trvá mnohem déle, než získáte dobře použitelnou sadu dat. Velikost úloh je také obtížné zefektivnit pro různé typy mapování, např. budovy potřebují malé čtverce úloh, silnice a vodní toky potřebují větší čtverce úloh. Nejlepším postupem je vytvořit více projektů na stejném území, aby se budovy a dálnice/vodní cesty mapovaly odděleně. 

#### Předvolby iD Editoru

Pokud vyberete jednu nebo více položek z rozevíracího seznamu, mapovači používající iD budou moci přiřadit tyto prvky pouze objektům, které mapují. To se doporučuje pro jednoduché **projekty zaměřené pouze na budovy**. To znamená, že přispěvatelé nebudou moci označovat jiné prvky, i když se o to pokusí. Vyhněte se používání předvoleb pro složitější projekty, protože to může rychle začít být na obtíž. Například projekt mapování dálnic by vyžadoval přidání desítek předvoleb, aby bylo možné zmapovat všechny typy dálnic

#### Organizace

Název vaší organizace by zde již měl být uveden, v opačném případě jej vyberte z rozbalovací nabídky.

#### Kampaň

If you have created several projects which are associated with each other, you can choose to assign them to a campaign. Users can filter projects by campaign name on the Explore Projects page. For example, if your project is associated with malaria elimination, you might want to put it under the 'Malaria Elimination' campaign. To request the creation of additional campaign names please complete [this form](https://forms.gle/qafvkp4iAxnY6rjE6). 

#### Categories

Select the themes here that relate to your project. Contributors can specify their interests in these categories in their settings page.

#### OSMCha filter ID

[OSMCha](https://osmcha.org/) je výkonný nástroj pro zajištění kvality dat, který se vám může hodit při sledování příspěvků do vašeho projektu. Standardní filtr omezuje výstup na ohraničení projektu a na příspěvky, které nejsou starší než datum vytvoření projektu a mají v komentáři ke změnám název projektu. Pokud si myslíte, že by pro analýzu sad změn vašeho projektu bylo vhodnější něco jiného, pak zde uveďte buď adresu URL OSMCha, nebo id filtru OSMCha. Filtr OSMCha je k dispozici na konci stránky s přehledem vašeho projektu. 

### Priority Areas

![TM Priority Area][]

Pomocí nástrojů zde nakreslete oblasti, které by měly být zmapovány jako první. Pro projekt můžete mít více prioritních oblastí. Prioritní oblasti můžete také kdykoli změnit. Prioritní oblast se dobrovolníkům zvýrazní a pokud vyberou možnost "Zmapovat úkol", vybere se náhodně úkol z prioritní oblasti jako první. 

> Při mapování katastrof na počátku události je často nejlepším postupem mít k dispozici velkou projektovou mapovací oblast a používat prioritní oblasti pro zaměření mapování podle toho, jak přicházejí nové informace.

### Snímky

V rozbalovací nabídce vyberte zdroj leteckých snímků, který chcete pro svůj projekt automaticky načíst. Pokud snímky nejsou v rozevírací nabídce uvedeny, můžete zvolit možnost "Vlastní" a poté přidat adresu URL TMS. 

> Všimněte si, že Tasking Manager **nemůže hostovat vlastní snímky**, musí být hostovány externě a propojeny pomocí adresy URL TMS. Pokud jste spokojeni s tím, že vaše snímky jsou otevřené k použití, zvažte prosím použití [OpenAerialMap](https://openaerialmap.org/) pro hostování vašich snímků.

Licence – Pokud je pro použití snímků vyžadována specifická licence, kterou musí mapovači přijmout, můžete ji zde vybrat. Pokud potřebujete licenci, která není k dispozici, můžete kontaktovat správce instalace Tasking Manager a požádat ho o její přidání.

### Oprávnění

V nabídce "Metadata" jsme mohli změnit úroveň obtížnosti, která se u projektu **zobrazuje**. V nabídce "Oprávnění" můžeme změnit, kdo má k projektu **přístup**. Je důležité si připomenout různé úrovně uživatelů:

- **Začátečník** Uživatel - Každý uživatel, který si právě vytvořil účet nebo provedl **méně než 250 sad změn** (uložení).
- **Středně pokročilý** uživatel - jakýkoli uživatel, který provedl mezi **250 a 500 změnami**.
- **Pokročilý** uživatel - Každý uživatel, který provedl **více než 500 sad změn**

> Stejně jako dříve velmi pečlivě zvažte oprávnění, komplexní projekty, které nevhodně umožňují všem uživatelům přispívat, mohou vést k **závažným problémům s kvalitou dat**. 

![TM Permissions][]

#### Oprávnění k mapování

Zde můžete zvolit, kdo může **mapovat** váš projekt:

- Pokud je váš projekt snadno realizovatelný a považujete jej za jednoduchý, můžete nastavit tuto možnost na **„Jakýkoli uživatel“**.
- Pokud je váš projekt složitější a vyžaduje více zkušeností, omezte mapování na **'Pouze uživatelé se středně pokročilou nebo pokročilou úrovní'**.
- Pokud chcete být ještě vybíravější, můžete také požadovat, aby byl mapovač součástí **týmu**. Týmy pak musí být definovány níže.

#### Oprávnění k validaci

Zde můžete zvolit, kdo může **ověřit** váš projekt. Při validaci zkušení mappeři kontrolují příspěvky, které jsou ve vašem projektu vloženy, proto by tato možnost měla být omezena minimálně na 'Pouze uživatelé se středně pokročilou nebo pokročilou úrovní' **jako minimum**. **V ideálním případě** byste měli ověřování omezit ještě více na **'Pouze členové týmu'**, ale když to uděláte, nesmíte zapomenout tyto týmy **definovat** níže. 

#### Týmy

Pomocí filtrů můžete vyhledávat a přidávat týmy. Můžete přidat svůj vlastní tým (týmy), ale neváhejte přidat i jiné týmy. Po přidání týmu nezapomeňte vybrat roli (mapovač, validátor, projektový manažer). 

Oprávnění týmu nebudou fungovat, pokud jste neomezili oprávnění Mapování a/nebo Ověřování na "Pouze členové týmu". Pokud udělíte týmu přístup Správce projektu, umožní to jeho členům upravovat projekt.

> V Tasking Manageru HOT' si můžete přidat dva větší validační týmy, a to 'HOT Global Validators' a HOT's 'Validator Trainees'. Vezměte prosím na vědomí, že ačkoli to těmto členům týmu dává **oprávnění** validovat váš projekt, **nemusí to nutně znamenat**, že **budou validovat** váš projekt. 

#### Soukromí

Přepnutím do režimu 'Soukromý' se projekt skryje všem uživatelům kromě těch, kteří jsou součástí výše definovaných týmů. 

### Nastavení

![TM Settings][]

#### Výchozí jazyk

Změnou tohoto nastavení změníte výchozí jazyk názvu, popisu a pokynů projektu.

#### Editoři pro mapování/validaci

Tím se dostupné editory omezí na ty, které byly zaškrtnuty. Můžete zadat různé sady pro mapování a pro ověřování. Všimněte si, že je zde možné povolit editor RapiD s asistencí AI. 

#### Vynutit náhodný výběr úlohy

Pokud je tato možnost povolena, přispěvatelé nemohou vybrat konkrétní úlohy pro mapování.

### Akce

Zde můžete v projektu provádět výkonné hromadné akce. **U mnoha z těchto možností buďte opatrní**, **nejsou vratné**. 

![TM Actions][]

#### Zpráva všem přispěvatelům

Odešle zprávu Tasking Manageru všem, kteří označili úkol za splněný nebo platný. Lze ji použít k poděkování přispěvatelům a/nebo k jejich nasměrování na další projekty v kampani. Měla by být také použita před použitím jedné ze dvou níže popsaných možností Validovat/zneplatnit všechny úkoly.

#### Mapování, validace a zneplatnění

Tím se nastaví stav všech úloh na mapované, validované nebo zneplatněné. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

#### Resetování úloh

Tím se všechny úlohy vrátí do původního stavu, ale předchozí akce lze stále zobrazit v historii úloh. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

#### Převod vlastnictví projektu

Můžete určit jiného manažera ve vaší organizaci, který bude uveden jako tvůrce projektu. Vyhledejte jeho uživatelské jméno OSM. 

#### Klonování projektu

Tato užitečná možnost vytvoří duplikát projektu, přičemž celé **nastavení zůstane identické** s výjimkou zájmové oblasti, mřížky úkolů a prioritních oblastí, které bude nutné znovu importovat nebo nakreslit. Tato volba vám **ušetří spoustu času**, pokud vytváříte řadu podobných projektů, které pokrývají velkou oblast.

#### Smazání projektu

Tím se projekt **trvale odstraní** z Tasking Manageru. Zacházejte s ním opatrně, protože jej nelze vrátit zpět. Projekt není možné odstranit poté, co do něj byly vloženy jakékoli příspěvky.

### Vlastní editor

Pokud chcete odkázat na editor, který není uveden v nabídce "Nastavení", můžete zde přidat adresu URL na tento editor.

### Uložit a vyzkoušet

Jakmile jste s nastavením projektu spokojeni, stiskněte tlačítko `Uložit`. Zobrazte svůj projekt výběrem `Přístup k projektu` a `Stránka projektu`. **Důkladně zkontrolujte svůj projekt**, ujistěte se, že jsou pokyny jasné a formulace a formátování správné.

**Zkuste zmapovat úlohu**, načítají se snímky správně? Jsou pokyny dostatečně jasné? Pokud potřebujete v projektu provést změny nebo upřesnění, klikněte na stránce projektu na tlačítko `Upravit`.

### Zveřejnění

Pokud jste s projektem spokojeni a jste připraveni zahájit mapování, klikněte po kontrole a otestování na stránce projektu na tlačítko `Upravit` a v nabídce 'Popis' změňte stav na 'Zveřejněno'. Jakmile bude projekt zveřejněn, širší veřejnost bude moci váš projekt vidět a přispívat na něj.

> Všimněte si, že můžete kdykoli vstoupit do nabídky "Upravit" projektu a změnit nastavení, i když probíhá mapování.

## Řízení projektu

Gratulujeme! Vytvořili jste projekt a nyní se musíte postarat o jeho efektivní řízení.

### Buďte vstřícní

Jako tvůrce projektu jste **zodpovědní** za **odpovědi na otázky**, které se objeví v části **Dotazů a komentářů** na stránce projektu. Tato sekce často obsahuje užitečné pokyny nebo tipy od širší komunity, berte je vážně, reagujte na ně a v případě potřeby proveďte úpravy svých projektů.

> Chcete-li povolit upozornění na nové příspěvky v sekci Otázky a komentáře, klikněte v Tasking Manageru na své uživatelské jméno OSM a zvolte `Nastavení`. Zapněte upozornění pro 'Otázky a komentáře'.

Na stránce projektu bude vedle položky "created by ..." uvedeno také vaše uživatelské jméno. To znamená, že můžete dostávat také přímé zprávy OSM, nezapomeňte si je přečíst a odpovědět na ně.

> Pokud jste zahlceni dotazy, mějte na paměti, že jich obdržíte méně, pokud se budete řídit tímto návodem: _První věc, kterou můžete udělat pro podporu mapovačů a validátorů, je mít dobře navržené projekty se snadno pochopitelnými, ale důkladnými pokyny a popisy._

### Sekvenování projektů

Pokud jste vytvořili několik projektů v sérii, **nezveřejňujte je všechny najednou**. Nejste jediní, kdo vytváří projekty, mít přiměřený počet projektů (jeden nebo dva) s odpovídající prioritou je v pořádku. Publikování půl tuctu projektů najednou zahltí Tasking Manager. Zbytek nechte v návrhu nebo s nižší prioritou, zatímco v každém okamžiku pracujete pouze na jednom nebo dvou. Můžete si všimnout, že přispěvatelé ztratí nadšení, pokud uvidí najednou spoustu podobných projektů, u kterých je jen malý pokrok.

### Životní cyklus projektu

Sledujte průběh mapování a ověřování projektů. Nezapomeňte, že **všechny projekty musí být nakonec archivovány**. Budete to muset provést ručně, proto neztrácejte přehled o průběhu, prioritě a významu svých projektů. Pokud přecházíte do jiné organizace, nezapomeňte **předat** probíhající projekty svému nástupci.

## Další informace

### Úvahy týkající se zobrazování

Před vytvořením projektu zkontrolujte snímky z několika různých míst v oblasti projektu, abyste mohli provést hodnocení snímků. Ve většině případů by měly vaše potřeby uspokojit snímky Esri nebo Bing. Existují však situace, kdy můžete chtít zvolit alternativní zdroj. Při výběru snímků je třeba zvážit následující skutečnosti:

1. Pokud je třeba pečlivě a podrobně mapovat, vyberte si snímky, které jsou nejjasnější a mají nejvyšší rozlišení.
2. Pokud je vaší prioritou mít k dispozici nejaktuálnější snímky, přepínejte mezi standardními zdroji snímků a hledejte ty nejnovější. Hledejte známky rozvoje, jako jsou nové budovy nebo vykácené pozemky, abyste získali představu o nejaktuálnějších snímcích.
3. Zkontrolujte oblačnost, ačkoli jeden zdroj snímků může vyhovovat vašim potřebám, pokud je velmi zataženo nebo mlhavo, mapovači budou mít s jeho použitím problémy.
4. Zkontrolujte zarovnání, pokud existuje dostatek existujících dat OSM, která se shodují s jednou sadou satelitních snímků, může mít smysl vybrat stejné snímky. Pokud existují problémy se zarovnáním, nezapomeňte napsat jasné pokyny, v nichž bude podrobně popsáno, jak se mají přispěvatelé vypořádat s posunem nebo problémy se zarovnáním.

> Od poskytovatelů satelitních snímků je často velmi obtížné získat přesné datum pořízení snímků. Hlavním zdrojem jsou "mozaiky", kdy je řada snímků (často s velmi odlišným datem pořízení) spojena dohromady. Někdy se toto sešití dostane až na úroveň jednotlivých pixelů. Při nedostatku informací je proto často nejlepší volbou pro vyhledání nejnovějších snímků použití porovnání snímků.

#### Zarovnání snímků

Oblast vašeho projektu již mohla být částečně zmapována pomocí starších snímků a mezi staršími zmapovanými objekty a novějšími dostupnými snímky může být patrná nesrovnalost. Zkontrolujte různá místa ve vaší mapované oblasti, abyste to zjistili. Pokud se vyskytne problém se zarovnáním, nezapomeňte přiložit podrobné pokyny, které mapovatelům nastíní nejlepší postup. Projekty s problémy se zarovnáním snímků je nejlépe svěřit zkušenějším mapovatelům.

Pro otázky zarovnání snímků neexistuje standardní soubor pokynů. Velmi záleží na kontextu. Někdy jsou mapovatelé instruováni, aby zarovnávali podle stop GPS, jindy je jim řečeno, aby zarovnávali podle zmapovaných liniových prvků, jako jsou dálnice a vodní cesty. Zde je ukázkový přístup:

1. Jasně uveďte, které snímky mají být považovány za referenční, podle kterých by se měly ostatní snímky přizpůsobit. V tomto případě předpokládejme, že referenčními snímky jsou snímky Bing.
2. Ujistěte se, že všechny existující prvky, které jsou viditelné také na Bing, jsou v souladu s obrázky Bing, tj. v případě potřeby je znovu zarovnejte.
3. Přidejte nové funkce z nyní správně zarovnaných snímků Bing.

Často jsou mapovači instruováni, aby hledali _nejmenší úsilí_, pokud jde o problémy se zarovnáním snímků. Což znamená, že přispěvatelé mají měnit svůj přístup v závislosti na situaci v jednotlivých úlohách:

- Pokud je v úloze dostatek existujících mapování, která jsou trvale špatně zarovnaná, může vyžadovat nejmenší úsilí změna posunu snímků tak, aby odpovídaly existujícímu mapování, a následné mapování malého počtu zbývajících objektů v úloze.
- Pokud je existujících mapování méně nebo jsou objekty špatně zarovnány nekonzistentně (tj. míra špatného zarovnání se v prostoru liší), pak může být jednodušší změnit polohu mapovaných objektů tak, aby byly v souladu se snímky, a poté zmapovat zbývající objekty v úloze.

Pokud má váš projekt problémy se zarovnáním, ujistěte se, že čtverce úlohy nejsou příliš velké, protože posuny snímků se mohou v mapované oblasti značně lišit, zejména pokud není terén rovný. Napříč projektem se mohou vyskytnout i nespojitosti snímků - dávejte si na ně pozor a upozorněte přispěvatele na takový problém.

> Ačkoli jednotliví mappeři mohou při mapování ručně měnit posun snímků, vy jako tvůrce projektu nemůžete posun snímků měnit na úrovni projektu. Pokud však používáte vlastní letecké snímky, které jsou hostovány jinde, můžete offset změnit u zdroje. Mějte však na paměti, že zarovnání se může v prostoru značně lišit a pouhá změna celkového odsazení nemusí vždy odstranit problémy se zarovnáním.

Neváhejte se podívat na tyto další zdroje o zarovnávání obrazů:

- [Obecné pokyny pro různé editory](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Animovaný gif o zarovnání obrazů v iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Kapitola o zarovnání snímků JOSM v aplikaci learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
