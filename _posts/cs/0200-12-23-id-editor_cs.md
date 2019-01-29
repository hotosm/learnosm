---
layout: doc
title: Editor iD
permalink: /cs/beginner/id-editor/
lang: cs
category: beginner
---

Editor iD
=============

> Tato příručka může být stažena jako [beginner_id-editor_cs.odt](/files/beginner_id-editor_cs.odt) nebo [beginner_id-editor_cs.pdf](/files/beginner_id-editor_cs.pdf)  
> Zkontrolováno 2016-03-30  

Začínáte mapovat pomocí Tasking Manageru pro HOT nebo MissingMaps atd.? Podívejte se na sekci [HOT-tips section](/en/hot-tips/).  

- TOC
{:toc}

iD editor je vlastně editor spustitelný ve webovém prohlížeči. iD je rychlý a jednoduchý k použití a dovoluje mapovat z různých zdrojů dat jako třeba satelitní a letecké snímky, GPS, dokumenty z terénu nebo z Mapillary.  

iD editor je dobrý způsob editace malých a jednoduchých změn, které nevyžadují pokročilé funkce editoru JOSM (pokročilejší mapovací nástroj pro mapování). Tato kapitola demonstruje základy editace pomocí iD.  

Začínáme s iD editorem
----------------------

-	iD editor vyžaduje aktivní internetové připojení.  
-	Otevřete váš internetový prohlížeč a jděte na stránku OpenStreetMap na [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Přihlašte se** pomocí vašeho OpenStreetMap účtu.  
-	Přesuňte se a přibližte mapu nad místo, kde chcete něco upravovat. Přesouvat se můžete pomocí držení levého tlačítka myši a posouváním mapy do vámi hledané polohy.  
-	Klikněte na malou šipku vedle nápisu **Editovat*. Potom klikněte na **Editovat pomocí iD (editor v prohlížeči)**.  

![image1][]


Uživatelské prostředí editoru iD
-------------------------
![image2][]

1. **Panel změny objektu:** Tento panel ukazuje tagy objektu vybraného v mapě.  
	Můžete přidat nebo změnit tagy z tohoto panelu.  
2. **Nástroje:** Tento panel ukazuje základní nástroje pro editaci:  
    Nakreslit bod (uzel), *klávesová zkratka* **1** ![image3][]{: height="24px"}  
    Nakresli čáru (cesta), *klávesová zkratka* **2** ![image4][]{: height="24px"}  
    Nakresli plochu (polygon), *klávesová zkratka* **3** ![image5][]{: height="24px"}  
    Vrátit zpět, *klávesová zkratka* **Ctrl+z** ![image6][]{: height="24px"}  
    Provést znovu, *klávesová zkratka* **Ctrl+y** ![image7][]{: height="24px"}  
    Uložit změny, *klávesová zkratka* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Panel mapy:** Tento panel zobrazuje různé možnosti nastavení:  
    Přiblížit, *klávesová zkratka* **+** ![image9][]{: height="24px"}  
    Oddálit, *klávesová zkratka* **-** ![image10][]{: height="24px"}  
    Jít na vaši pozici ![image11][]{: height="24px"}  
    Nastavit vrstvu pozadí, *klávesová zkratka* **b** ![image12][]{: height="24px"}  
    Mapová data, *klávesová zkratka* **f** ![Map Data][]{: height="24px"}  
    Otevřít menu nápovědy, *klávesová zkratka* **h** ![image13][]{: height="24px"}  
4. **Informační panel:** Tento panel zobrazuje různé informace, jako třeba měřítko a kteří uživatelé přispěli v této oblasti.  

Nastavení vrstvy na pozadí
--------------------------------

Klikněte na tlačítko **Nastavení pozadí** nebo použijte klávesovou zkratku **b**.![image14][]{: height="24px"}  
![image15][]  
Pro změnu **světlosti pozadí** klikněte na jeden z těchto čtverečků. Úrovně jsou 100%, 75%, 50% a 25% ![image16][]{: height="24px"}  
Můžete také **změnit vrstvu na pozadí** podle různých poskytovatelů dat (výchozí jsou Bing fotomapy).  

Můžete přidat svoje vlastní mapové čtverce pomocí volby **Vlastní**. Například, pokud chcete **přidat Field Paper** [^fieldpaper], klikněte na **Vlastní** poté klikněte na ikonu lupy (hledat) pro otevření následujícího okna:-  
![image17][]   
vložte vaši **URI snímku na FieldPaper**, který bude vypadat nějak takto: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Pro **zobrazení tras GPS z vašeho počítače** (GPX formát), chyťte a pusťte GPX soubor do iD editoru.  
Pro zobrazení **GPS tras z OpenStreetmap** klikněte na čtvrteček. V obrázku níže, veřejně dostupní GPS trasy jsou zobrazeny v různých barvách určujících směr pohybu.  
![osm gps traces][]  
Pokud je [fotomapa posunutá](/en/josm/aerial-imagery), můžete **opravit posunutí** kliknutím na  **Opravit zarovnání**. ![image18][]  

- Klikněte na navigační tlačítka pro přesun snímků. Klepnutím na tlačítko Reset se vrátíte do výchozí pozice. ![image20][]  

Základní úpravy s iD  
----------------------  

### Přidávání bodů  

Chcete-li přidat nový bod, klikněte na tlačítko **Bod**. ![image3][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Nyní klikněte na pozici, kterou znáte a označte místo. Pokud například víte, že ve vaší oblasti je nemocnice, klikněte na místo nemocnice.  
![image21][]  
- Všimněte si, že je přidán nový bod. Současně se změní levý panel tak, aby zobrazoval formulář, ve kterém můžete vybrat atributy objektu. Klepnutím na položku **Nemocnice** označte místo jako nemocnici.  
![image22][]  
- Formuláře můžete použít k vyplnění podrobných informací o vašem místě. Můžete vyplnit název nemocnice, adresu a / nebo další doplňující informace. Všimněte si, že každá funkce bude mít různé možnosti, v závislosti na tom, jakou značku vyberete z panelu funkcí.  
- Pokud uděláte chybu, například špatné místo, můžete přemístit svůj bod na nové místo podržením levého tlačítka myši na místě a přetažením. Nebo pokud chcete smazat svůj bod, klepněte na levé tlačítko myši v bodě, aktivujte kontextové menu klepnutím pravým tlačítkem myši a poté klikněte na tlačítko, které vypadá jako koš. ![image23][]{: height="24px"}  
"Bod" vytvořený v iD editoru je ve skutečnosti samostatný "uzel" se souborem "značek" na něm.  

### Kreslení čar  

Chcete-li přidat novou čáru, klikněte na tlačítko **Čára**. ![image4][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Najděte cestu, která nebyla na mapě vykreslena, a obkreslete ji. Jedním kliknutím klikněte na místo, kde začíná úsek cesty, přesuňte myš a klepnutím přidáte další body. Poklepáním ukončíte proces kreslení. Všimněte si panelu vlevo.  
![image24][]  
- Stejně jako bod, vyberte příslušné značky pro vaši linku.  
- Můžete přetáhnout body z linky kliknutím levého tlačítka myši na bod a přetažením.  
- Můžete také přesunout celou čáru jejím výběrem a zvolením nástroje **Přesunout**. Potom přetáhněte čáru na novou pozici. ![image30][]{: height="24px"}  
- Když klepnete levým tlačítkem myši na jednotlivý bod (uzel) na řádku a kliknutím pravým tlačítkem myši aktivujete místní nabídku, uvidíte tyto nástroje:  
- Smazat bod z čáry. ![image23][]{: height="24px"}  
- Odpojit bod od čáry. ![image26][]{: height="24px"}  
- Rozdělit čáru na dvě čáry od místa, které jste vybrali. ![image27][]{: height="24px"}  
- Když kliknete levým tlačítkem myši na řádek (ale ne na bod), uvidíte tyto nástroje:  
-   Smazat čáru. ![image23][]{: height="24px"}  
-   Vytvoření kruhu z čáry (aktivní pouze v případě, že je čára uzavřena) ![image29][]{: height="24px"}  
-   Posunout čáru ![image30][]{: height="24px"}  
-   Vytvořit pravoúhlý tvar z čáry (aktivní pouze v případě, že je čára uzavřena) ![image31][]{: height="24px"}  
-   Obrátí směr (dobré pro řeky a jednosměrné ulice) ![image32][]{: height="24px"}  

"Čára" vytvořená v iD editoru je vlastně "cesta" se "značkami" umístěnými na ní.

> Zvláštní poznámka o **Vymazání**: Obecně byste se měli vyhnout vymazání mapování ostatních lidí, pokud se to jen potřebuje zlepšit. Můžete smazat vlastní chyby, ale měli byste se pokusit *upravovat* mapované objekty jiných lidí, pokud potřebují změny. To zachovává historii položek v databázi OSM a respektuje kolegy mapery. Pokud opravdu cítíte, že by mělo být něco vymazáno, zvažte kontaktovat nejprve originálního mapaře nebo jednoho z e-mailových seznamů OSM.

### Kreslení tvarů (mnohoúhelníků)

Chcete-li přidat nový mnohoúhelník, klikněte na tlačítko **Oblast**.![image34][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Pokuste se vysledovat tvar budovy podle podkladu.  
- Všimnete si, že barva mnohoúhelníku se změní v závislosti na atributech, které mu přiřadíte.  
![image35][]  
- Nástroje, které jsou k dispozici při výběru mnohoúhelníku a aktivaci kontextové nabídky pravým tlačítkem myši, se podobají těm, které jsou když kliknete na čáru.  

"Mnohoúhelník" v iD editoru je vlastně "uzavřenou cestou" s umístěnými značkami na ní.

### Kreslení multipolygonů

Někdy musíte nakreslit mnohoúhelník, který má nejen vnější obrys, ale také jeden nebo více vnitřních obrysů. Představte si budovy s vnitřními dvory, nebo jezera s ostrovy. *Nekreslete tyto objekty jednou čarou* tak, aby vnitřní obrysy omezily vnější obrys. Raději nakreslete tyto obrysy odděleně, připojte značky pouze k vnějšímu obrysu, vyberte všechny obrysy a stiskněte **c**, aby bylo možné je spojit do multipolygonu neboli složeného mnohoúhelníku.

![create multipolygon][]

Když vyberete některý z obrysů nově vytvořeného multipolygonu, můžete vidět na levé straně, do kterého multipolygonu patří

![part of multipolygon][]

Uložení změn
--------------------

Když (a pokud) chcete uložit své úpravy na OpenStreetMap, klikněte na tlačítko **Uložit**. Na panelu vlevo se zobrazí panel pro nahrávání.  
![image36][]  

- Zadejte komentář o úpravách a klikněte na tlačítko **Uložit**.  

> Pokud jste upravili stejnou funkci (bod, cestu nebo oblast) současně s jinou osobou, která ji editovala, obdržíte varování, že vaše úpravy nelze nahrát, dokud nevyřešíte **konflikty** - vyberte, které editace přijmete a nahrajete změny. *Řešení konfliktů často zahrnuje přijetí úprav ostatních osob, v takovém případě se pravděpodobně budete muset vrátit k příslušné funkci a znovu ji upravit (**pak ji uložte brzy po úpravě, abyste pokusili znovu předejít konfliktu!**).*

Další informace a vlastní značky
---------------------------------------

Když upravujete objekt, uvidíte v dolní části panelu atributů ikonu. Další informace můžete přidat kliknutím na tyto ikony:

- Přidat nadmořskou výšku ![image37][]{: height="24px"}  
- Přidat poznámky ![image38][]{: height="24px"}  
- Přidat kontakty / telefonní číslo ![image39][]{: height="24px"}  
- Přidat označení zdroje ![image40][]{: height="24px"}  
- Přidat webovou stranu ![image41][]{: height="24px"}  
- Přidat informace o přístupnosti ![image42][]{: height="24px"}  
- Přidat odkaz na Wikipedii ![image43][]{: height="24px"}  

Nebo můžete přidat vlastní značky kliknutím na položku **Všechny značky**. ![image44][]{: height="24px"}  

- Zobrazí se tak všechny značky připojené k této funkci.  
![image45][]  
- Kliknutím na znaménko plus (+) přidejte klíče a hodnoty nebo klikněte na ikonu koše pro odstranění značek.

Další tutorialy
------------------

Stránka našich externích zdrojů [Our external resources page](/en/resources/#iD) poskytuje odkazy na řadu video tutoriálů z různých zdrojů.

Srovnání iD a JOSM
---------------  

**iD editor je vhodný pro ...**

- Když děláte jednoduché úpravy  
- Pokud máte rychlý internet k načtení snímků a uložení úprav  
- Pokud chcete mít jistotu, že budete postupovat podle důsledného a jednoduchého schématu značkování  
- Pokud máte omezenou instalaci programu na počítači, který používáte

**JOSM je lepší ...**

- Když přidáváte mnoho budov (viz plugin buildings_tool)
- Když upravujete mnoho mnohoúhelníků nebo čar, které již existují
- Pokud máte nespolehlivé internetové připojení nebo jste offline
- Pokud používáte konkrétní schéma označování značkami (nebo máte vlastní předvolby)

[^fieldpaper]: Zde je sekce [section of LearnOSM](/en/mobile-mapping/field-papers/) poskytující více informací o terénních dokumentech.

Obsah této příručky je k dispozici jako [presentation](/files/iD-editor-training.pptx)



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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png