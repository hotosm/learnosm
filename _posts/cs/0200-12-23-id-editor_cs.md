---
layout: doc
title: Editor iD
permalink: /cs/beginner/id-editor/
lang: cs
category: beginner
---

iD Editor
=============

> Zkontrolováno 2019-06-10

Začínáte mapovat pomocí Tasking Manageru pro HOT nebo MissingMaps atd.? Podívejte se na sekci [HOT-tipy](/cs/hot-tips/).  

- TOC
{:toc}

iD editor je vlastně editor spustitelný ve webovém prohlížeči. iD editor je rychlý a jednoduchý k použití a dovoluje mapovat z různých zdrojů dat jako jsou třeba satelitní a letecké snímky, GPS, dokumenty z terénu nebo z Mapillary.  

iD editor je dobrý způsob editace malých a jednoduchých změn, které nevyžadují pokročilé funkce editoru JOSM (pokročilejší mapovací nástroj pro mapování). Tato kapitola demonstruje základy editace pomocí iD editoru.  

Začínáme s iD Editorem
----------------------

-	iD editor vyžaduje aktivní internetové připojení.  
-	Otevřete váš internetový prohlížeč a jděte na stránku OpenStreetMap na [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Přihlašte se** pomocí vašeho OpenStreetMap účtu.  
-	Přesuňte se a přibližte mapu nad místo, kde chcete něco upravovat. Přesouvat se můžete pomocí držení levého tlačítka myši a posouváním mapy do vámi hledané polohy.  
-	Klikněte na malou šipku vedle nápisu **Upravit**. Potom klikněte na **Upravit pomocí iD (editor v prohlížeči)**.  

![image1][]


Uživatelské prostředí iD editoru 
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
    Uložit změny, *klávesová zkratka* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Panel mapy:** Tento panel zobrazuje různé možnosti nastavení:  
    Přiblížit, *klávesová zkratka* **+** ![image9][]{: height="24px"}  
    Oddálit, *klávesová zkratka* **-** ![image10][]{: height="24px"}  
    Jít na vaši pozici ![image11][]{: height="24px"}  
    Nastavit vrstvu pozadí, *klávesová zkratka* **b** ![image12][]{: height="24px"}  
    Mapová data, *klávesová zkratka* **f** ![Map Data][]{: height="24px"}  
    Chyby, *klávesová zkratka* **i** ![Issues][]{: height="24px"}  
    Otevřít menu nápovědy, *klávesová zkratka* **h** ![image13][]{: height="24px"}  
4. **Informační panel:** Tento panel zobrazuje různé informace, jako třeba měřítko a kteří uživatelé přispěli v této oblasti.  

## Nastavení vrstvy pozadí

Klikněte na tlačítko **Nastavení pozadí** nebo použijte klávesovou zkratku **b**.![image14][]{: height="24px"}  
![image15][]  
Můžete si **změnit vrstvu podkladu** na vámi požadovanou (přednastavené jsou Bing Aerial Imagery).  

Můžete přidat svoje vlastní mapové čtverce pomocí volby **Vlastní**. Například, pokud chcete **přidat Field Paper** [^fieldpaper], klikněte na **Vlastní** poté klikněte na ikonu lupy (hledat) pro otevření následujícího okna:-  
![image17][]   
vložte vaši **URI snímku na FieldPaper**, který bude vypadat nějak takto: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Pro **zobrazení tras GPS z vašeho počítače** (GPX formát), chyťte a pusťte GPX soubor do iD editoru.  
Pro zobrazení **GPS tras z OpenStreetmap** klikněte na čtvrteček. V obrázku níže, jsou  veřejně dostupné GPS trasy zobrazeny v různých barvách určujících směr pohybu.  
![osm gps traces][]  
Chcete-li změnit **vzhled snímků** klikněte na **Volby zobrazení** (Display Options).  
![DisplayOptions][]  
Pokud jsou [snímky posunuté](/en/josm/aerial-imagery), můžete **posunutí opravit** kliknutím na **Zarovnat podklad** (Adjust imagery offset).  
![image18][]  

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
- Pokud uděláte chybu, např. špatně něco umístíte, můžete to přesunout pomocí levého tlačítka myši. Pro smazání bodu ho levým tlačítkem vyberte, pravým vyvolejte kontextové menu a poté klikněte na ikonu vypadající jako koš. ![PointToolDelete][]{: height="24px"}  
"Bod" vytvořený v iD editoru je ve skutečnosti samostatný "uzel" se souborem "značek" na něm.  

### Kreslení čar  

Chcete-li přidat novou čáru, klikněte na tlačítko **Linie**. ![image4][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Najděte cestu, která nebyla na mapě vykreslena, a obkreslete ji. Jedním kliknutím klikněte na místo, kde začíná úsek cesty, přesuňte myš a klepnutím přidáte další body. Poklepáním ukončíte proces kreslení. Všimněte si panelu vlevo.  
![image24][]  
- Stejně jako bod, vyberte příslušné značky pro vaši čáru.  
- Můžete přetáhnout body z čáry kliknutím levého tlačítka myši na bod a přetažením.  
- Když vyberete některý z bodů (node) na čáře a kliknete na něj pravým tlačítkem, nebo zmáčknete mezerník pro vyvolání kontextového menu, nabídnou se vám tyto nástroje:  
  - Pokračovat čárou z tohoto bodu ![PointToolContinue][]{: height="24px"}  
  - Rozpojit čáry v tomto bodě ![PointToolDisconnect][]{: height="24px"}  
  - Rozdělit čáru na dvě v tomto bodě. ![PointToolSplit][]{: height="24px"}  
  - Smazat bod. ![PointToolDelete][]{: height="24px"}  
- Když kliknete levým tlačítkem myši na linii (ale ne na bod), uvidíte tyto nástroje:  
  -   Vytvořit kruh z čáry (pouze pokud je čára uzavřená) ![LineToolCircularize][]{: height="24px"}  
  -   Odpojit čáru od objektu ![LineToolDisconnect][]{: height="24px"}  
  -   Přesunout čáru ![LineToolMove][]{: height="24px"}  
  -   Udělat všechny úhly pravoúhlé ![LineToolSquare][]{: height="24px"}  
  -   Zrcadlit prvek podle kratší strany ![LineToolReflectShort][]{: height="24px"}  
  -   Zrcadlit prvek podle delší strany ![LineToolReflectLong][]{: height="24px"}  
  -   Obrátit směr přímky (hodí se u řek a jednosměrných ulic) ![LineToolReverse][]{: height="24px"}  
  -   Otočit čáru okolo jejího středu ![LineToolRotate][]{: height="24px"}  
  -   Nárovnat čáru ![LineToolStraighten][]{: height="24px"}  
  -   Smazat čáru. ![LineToolDelete][]{: height="24px"}  

"Čára" vytvořená v iD editoru je vlastně "cesta" se "značkami" umístěnými na ní.

> Zvláštní poznámka o **Vymazání**: Obecně byste se měli vyhnout vymazání mapování ostatních lidí, pokud se to jen potřebuje zlepšit. Můžete smazat vlastní chyby, ale měli byste se pokusit *upravovat* mapované objekty jiných lidí, pokud potřebují změny. To zachovává historii položek v databázi OSM a respektuje kolegy mapery. Pokud opravdu cítíte, že by mělo být něco vymazáno, zvažte kontaktovat nejprve původního mapaře nebo jednoho z e-mailových seznamů OSM.

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

## Chyby

Editor provádí několik kontrol během vašich úprav. Pokud vyhodnotí, že vaše úpravy mohou vést k problémům, tak vás upozorní v záložce Chyby. Kdykoliv se u chybové ikony vpravo objeví žlutá (varování) nebo červená (chyba) tečka, měli byste si záložku otevřít a podívat se co hlásí. Tato informace je taktéž zobrazena u vlastnotí objektu v záložce vlevo, pokud je daný objekt vybrán. Zároveň jste varování o nevyřešených chybách při nahrávání data na server. 

![Issue][] ![Error][]

Ve spodní části záložky s chybama se nachází seznam pravidel, ve kterém si můžete hlášení zakázat, ale to se nedoporučuje.

Uložení změn
--------------------

Když (a pokud) chcete uložit své úpravy na OpenStreetMap, klikněte na tlačítko **Uložit**. Na panelu vlevo se zobrazí panel pro nahrávání.  
![image36][]  

- Zadejte komentář o úpravách a klikněte na tlačítko **Uložit**.  

> Pokud jste upravili stejnou funkci (bod, cestu nebo oblast) současně s jinou osobou, která ji editovala, obdržíte varování, že vaše úpravy nelze nahrát, dokud nevyřešíte **konflikty** - vyberte, které editace přijmete a nahrajete změny. *Řešení konfliktů často zahrnuje přijetí úprav ostatních osob, v takovém případě se pravděpodobně budete muset vrátit k příslušné funkci a znovu ji upravit (**pak ji uložte brzy po úpravě, abyste pokusili znovu předejít konfliktu!**).*

Další informace a vlastní značky
---------------------------------------

Když upravujete objekt, můžete si v panelu vlastností všimnout kolonky "Přidat vlastnost:". Zde je možné přidat různé informace z dané nabídky (vrstva, nadmořská výška, wikipedie atd.).  

![AdditionalTags][]

Nebo si můžete vytvořit vlastní tag kliknutím na **Všechny vlastnosti**. ![image44][]{: height="24px"}  

- Zobrazí se tak všechny značky připojené k této funkci.  
![image45][]  
- Kliknutím na znaménko plus (+) přidejte klíče a hodnoty nebo klikněte na ikonu koše pro odstranění značek.

Další tutorialy
------------------

[Stránka našich externích zdrojů](/cs/resources/#iD) poskytuje odkazy na řadu video tutoriálů z různých zdrojů.

Srovnání iD a JOSM
---------------  

**iD editor je vhodný ...**

- Když děláte jednoduché úpravy  
- Pokud máte rychlý internet k načtení snímků a uložení úprav  
- Pokud chcete mít jistotu, že budete postupovat podle důsledného a jednoduchého schématu značkování  
- Pokud máte omezenou instalaci programu na počítači, který používáte

**JOSM je lepší ...**

- Když přidáváte mnoho budov (viz plugin buildings_tool)
- Když upravujete mnoho mnohoúhelníků nebo čar, které již existují
- Pokud máte nespolehlivé internetové připojení nebo jste offline
- Pokud používáte konkrétní schéma označování značkami (nebo máte vlastní předvolby)

[^fieldpaper]: Zde je [sekce LearnOSM](/cs/mobile-mapping/field-papers/) poskytující více informací o terénních dokumentech.



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