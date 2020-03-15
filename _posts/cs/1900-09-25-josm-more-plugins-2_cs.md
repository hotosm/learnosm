---
layout: doc
title: Opendata Plugin - data z tabulky
permalink: /cs/josm/opendata-plugin/
lang: cs
category: josm
---

Opendata Plugin - načtení dat z tabulky
============


- TOC
{:toc}

V tomto návodu se naučíte přidat data do OpenStreetMap, které jsou uloženy ve formě tabulky, vytvořené při terénním průzkumu pomocí nástroje ODK collect nebo Kobo collect.

**Vemte prosím na vědomí - pokud data, které plánujete přidat do OpenStreetMap pomocí 'importu' pak by nebylo od věci, projít si [stránku Průvodce importem v OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Import/Guidelines). Pokud si nejste jisti, radši si ji pročtěte!**


Instalace Opendata pluginu
--------------------------

Pokud plugin ještě nemáte, následujte instrukce v [JOSM Plugins](/cs/josm/josm-plugins).  

![Opendata][]

Po instalaci otevřete Nastavení Opendata
 ![Opendata preferences][]   
pro přístup k více specifickým modulům.  

![Opendata modules][]

Tento průvodce používá základní funkce, bez dodatečných modulů.

Příprava tabulky  
-------------------------

Stránka <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData> obsahuje více detailních informací o formátech, které lze využít. V našem příkladu předpokládáme, že tabulka byla stažena a předána nám ve formátu **.xlsx**, který nelze nahrát do opendata pluginu.

- Otevřete tabulku v opensource programu, jakým je třeba LibreOffice, který je dostupný pro mnoho operačních systémů <http://www.libreoffice.org/>, 
- a uložte ji do opensource formatu. Naše tabulka **shops.xlsx** se změní na **shops.ods**.

Ikdyž už můžete nahrát tabulku do JOSM, je lepší předtím provést další změny, aby byl proces snadnější.

### zeměpisná šířka a délka

Plugin Opendata je velmi dobrý při extrahování zeměpisné šířky a délky z tabulek, ale pokud máte pochybnosti, je lepší změnit názvy sloupců na jednodušší formát;

![latitude longitude][]

se změní na;

![latitude longitude corrected][]

### Klíče a hodnoty

#### Tag name

Našim cílem bude upravit tabulku tak, aby informace byly ve formátu, který OpenStreetMap podporuje. Jako názvy sloupců použijeme hodnoty **Klíče** a data v tabulce budou jejich **Hodnotami**. V naší jednoduché tabulce změníme název sloupce z **Name_of_the_shop** na **name**. Při použití formátu key=value bude první řádek tabulky vypadat následovně; 
**name=Tony's Supermarket**

Pokud vaše tabulka obsahuje více jak jeden název, např. **local name** nebo **official name**, podívejte se jak na to na wiki <https://wiki.openstreetmap.org/wiki/Names>, která obsahuje mnoho možných alternativ, aby vaše aktualizace OpenStreetMap mohly obsahovat všechna jména, která budou pravděpodobně použita nebo vyhledávána.

#### Sloupce bez názvů

Pokud smažete názvy sloupců, ale data ponecháte, pak jsou data před JOSM skryta.

![opendata 1][]

#### Sloupce s daty různých klíčů

![opendata mixed][]

Osoba plánující průzkum a osoba provádějící průzkum často nebudou vědět o značkách a hodnotách, které se vyvinuly v OpenStreetMap. Sloupec **shop** v mé tabulce momentálně obsahuje data dvou různých značek a tabulka bude potřebovat upravit. Název sloupce **Type of shop** by se měl změnit na **shop**, pro následující data; 
shop=supermarket 
shop=convenience 
shop=hairdresser 

ale **restaurant** a **fast_food** jsou hodnoty pro klíč **amenity**.

Je potřeba přidat nový sloupec s názvem **amenity** a data přesunou tak, aby naše tabulka vypadala takto;

![opendata shop amenity][]

#### sub tagy

Název sloupce **Does the shop have toilet facilities?** byl během průzkumu zkrácen na **Does_the_shop_have_toilet_faci**.

Přestože existuje samostatný tag pro toalety, který je obvykle přidružen k uzlu uvnitř budovy, v tomto případě se jedná o veřejné toalety. Pokud jsme provedli vlastní průzkum, víme přesně, co bylo zamýšleno s otázkou a odpovědí, ale pokud se jedná o informace nám předané, bude pravděpodobně nutné zjistit, co tím kdo myslel. Je také velmi užitečné mít možnost načíst si průzkumné otázky do telefonu a provést „falešný“ průzkum a pochopit tak význam otázek. Před změnou tabulky je vhodné pečlivé pročtení wiki stránky na adrese <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets> a taktéž prostudovat si původní průzkum. Ve wiki najdete tuto důležitou informaci -

- *Prosím nepoužívejte toilet=yes (jednotné číslo). Obecně prosím nemapujte toalety, které jsou pro veřejnost nepřístupné. Mnoho budov má uvnitř toalety pouze pro pracovníky nebo majitele, ale jejich mapování by mohlo vést ke zbytečným konfliktům nebo nereálným očekáváním. Použijte toilets=no pro místa, kde očekáváte výskyt použitelné toalety (např. železniční stanice), kde nejsou k dispozici žádné veřejné toalety.*  

Následujíc doporučení z wiki, jak nejlépe umím, moje upravená tabulka s informacemi o toaletách nyní vypadá následovně;

![opendata toilets][]


Odstranil jsem názvy některých sloupců, takže při převodu dat v JOSM nebudou data viditelná.

Načtení tabulky do JOSM
---------------------------------

Klikněte na ikonu ![josm open][], najděte svoji tabulku a otevřete ji v JOSM.  

![opendata pop up][]  

Objeví se vyskakovací okno s výzvou k potvrzení „metody projekce“ použité při shromažďování dat. Doplněk Opendata se pokusí vypočítat použitou „projekční metodu“ a uvede ji jako nejvhodnější variantu. Pokud to nebylo změněno v nastavení průzkumníkem, je rozumné přijmout navrhovanou projekci, ale pak je dobré provést kontrolu, zda se vytvořené body objevily na očekávaných místech.

![opendata spreadsheet loaded][]

Gratuluji! Dokončil jste všechnu svoji tvrdou práci a už zbývá jen nahrát svoje data z průzkumu do OpenStreetMap. 

Využití ToDo doplňku
----------------------

Uvnitř JOSM můžete vybrat položky přidané pomocí vaší tabulky několika způsoby;

- Oddálením, dokud nejsou všechny viditelné a pak je držením levého tlačítka všechny vybrat na mapě, nebo
- použít klávesovou zkratku **Ctrl+f**, čímž vyvoláte vyhledávání - Zadal jsem text **name**, protože se vyskytuje ve všech 5 mých průzkumech.  

ujistěte se, že jste vybrali všechny své průzkumy - v mé tabulce je pět průzkumů a tak musí být vybráno 5 objektů.

![5 selected][]

V panelu ToDo doplňku klikněte na **Add**.

![opendata todo add][]

a seznam položek k přidání se zobrazí v panelu.

![opendata todo loaded][]

Načtení dat z OpenStreetMap jako oddělenou vrstvu
-------------------------------------------

Poklepejte na první položku v seznamu ToDo, zobrazí se uprostřed vašeho editačního panelu a klikněte na ikonu Stáhnout ![download][].

Když se zobrazí dialogové okno stahování, ujistěte se, že jste zaškrtli ![download new layer][] (vlevo dole na dalším snímku), aby se vaše data OSM nestahovala do tabulky.

![download dialog][]


Porovnání dat mezi vrstvami
------------------------------------

Pečlivě porovnejte data uložená v tabulce s daty již uloženými v OpenStreetMap. Existují způsoby, kterými lze kopírovat tagy nebo jejich části mezi vrstvami (podívejte se do nabídky **Tools** a **More Tools** v JOSM nebo si přečtěte předchozí kapitoly v LearnOSM). V mnoha případech budete slučovat nová data s již existujícími. Pečlivě zkontrolujte data, v případě potřeby hledejte v historii a zdrojích rozdíly v objektech - vždy je možné, že data v OpenStreetMap jsou novější nebo přesnější než ve vaší tabulce.

Když aktualizujete informace z jednoho řádku tabulky, použijte tlačítko **Mark** v ToDo pluginu, čímž přejděte na další položku - možná budete muset stáhnout další data z OSM, pokud je další položka mimo již staženou oblast.


[Opendata]: /images/josm/opendata-plugin.png
[Opendata preferences]: /images/josm/opendata-preferences.png
[Opendata modules]: /images/josm/opendata-modules.png
[latitude longitude]: /images/josm/opendata-latitude-longitude.png
[latitude longitude corrected]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm open]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 selected]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[download]: /images/josm/josm-download-button.png
[download dialog]: /images/josm/josm_download-dialog.png
[download new layer]: /images/josm/download-as-new-layer.png

