---
layout: doc
title: JOSM - Tvorba vlastních předvoleb
permalink: /cs/josm/creating-presets/
lang: cs
category: josm
---

JOSM - Tvorba vlastních předvoleb
=======================

> Zkontrolováno 20.9.2015  

V [předchozí kapitole](/cs/josm/josm-presets) ja se nabídky vlastních předvoleb přidávají do JOSM. V této kapitole si vytvoříme vlastní soubor předvoleb.  

VAROVÁNÍ! Toto je téma pro pokročilé... berte toto varování na vědomí!  

Úvod do XML
-------------------

Než si vytvoříme vlastní nabídku předvoleb, nejdříve musíte porozumět tzv. jazyku XML. Pokud jej znáte, klidně přeskočte na další sekci.  

XML je zkratka pro *Extensible Mark-up Language*, počítačový jazyk podobný HTML. Hlavní rozdíl je, že XML data nese a HTML je zobrazuje. Mnoho aplikací na internetu využívá XML k přenosu dat, stejně jako OpenStreetMap. XML používá elementy a každý element může obsahovat podřízené elementy. Například si představte, že chcete vytvořit XML soubor, který obsahuje data o menu v restauraci. Musíte vytvořit křenový element, který obsahuje všechny data z našeho menu. Kořenový element má třeba takovou otevírací a uzavírací značku?

      <menu>
      ... jakékoliv data, které chceme zahrnout do menu...
      </menu>

V elementu je uložena informace, ale také může obsahovat další elementy.    

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>Delikátní hovězí pečeně</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Indonéská smažená rýže</description>
        </item>
      </menu>

V tomto příkladu jsme vložili dva elementy &lt;item&gt; do našeho &lt;menu&gt; elementu, abychom popsali dvě různé položky v našem menu. Každá položka obsahuje dva další elementy, &lt;cost&gt; a &lt;description&gt;. Všimněte si také zápisu name=”Hamburger” uvnitř otevírací značky &lt;item&gt;.


### XML terminologie

- **kořenový element:** hlavní element v XML dokumentu, který popisuje jeho obsah  
- **element:** jakýkoliv XML objekt ohraničený otevírací a zavírací značkou, jako třeba &lt;item&gt; ... data ... &lt;/item&gt;  
- **značka:** vše uzavřené v závorkách, např. &lt;item&gt;.  &lt;item&gt; je otevírací značka elementu a &lt;/item&gt; je zavírací značka. Nepleťte si to s OSM značkama, ty mají jiný význam.  
- **atribut:** kousek informace uzavřené mezi značkami, třeba name=“Hamburger”  

Využítí XML k ukládání a přenosu dat je skvělé, protože počítače tomuto jazyku rozumí.  


Soubory předvoleb v JOSM 
-------------------

Pojďme přidat ukázkový soubor předvoleb do JOSM a prozkoumejme, jak to funguje.  

- Stáhněte si soubor [sample_presets.xml](/files/sample_presets.xml).  
- Nahrejte ho do JOSM podle návodu v [předchozí kapitole](/cs/josm/josm-presets).  
- Vytvořte novou vrstvu a objekt.  
- Jděte do nabídky **Předvolby**. Bude tam nová položka **Sample Building**. Klikněte na ni.  

![sample building menu][]

Ve formuláři, který se objevil, si všimněte, že každé pole očekává jiný typ vstupu. První *Name of Building* přijímá textové řetězce. Druhé *Building Use* má rozevírací seznam. A poslední je zaškrtávací políčko, takže může nést pouze dvě různé hodnoty, zapnuto nebo vypnuto.

![sample presets form][]

Teď se podívejme na XML soubor, který definuje tento formulář Predvoleb.

- Nejděte tento XML soubor ve vašem počítači a otevřete ho pomocí textového editoru. Na Windows můžete použít program **Poznámkový blok**. Chcete-li snadno ovladatelný editor, můžete si zdarma stáhnout Notepad++.  
- Soubor **sample_presets.xml** vypadá takhle:  

![sample presets file][]

 Prozatím přeskočíme prvních 6 a poslední řádek a zaměříme se na všechno mezi značkami &lt;item&gt;.

První řádek vypadá takto:

      <item name="Sample Building" type="node,closedway">

Jde o otevírací značku položky, která je přidána do nabídky. Má dva atributy - název a typ. Pod tímto názvem se položka objeví v nabídce Předvolby. Typ omezuje předvolbu na určité typy objektů. V tomto příkladu, může být předvolba aplikována pouze na body a tvary - jinými slovy uzly a uzavřené cesty. Předvolba nepůjde aplikovat na čáru.  

Podívejme se na další řádek:  

      <label text="Building Form" />

Když kliknete na nabídku a otevřete si ukázkový formulář, v horní části bude text **Building Form**. Tento text je definován právě na tomto řádku. Definuje se použitím elementu &lt;label&gt;, který prostě zobrazí text ve formuláři. Text je definován atributem *text="some text"*.  

Přesuneme se o pár řádků níž na:  

      <key key="building" value="yes" />

Toto je jedna ze značek, které budou aplikovány na objekt, který je vybraný. Protože používá element &lt;key&gt;, tak se tato OSM značka automaticky nastaví, při každém výběru této předvolby. Proto tento objekt automaticky obdrží značku *building=yes*.  

Následující řádek je trochu jiný, používá element &lt;text&gt;.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

Element &lt;text&gt; vytvoří prázdné pole. Když se formulář v JOSM objeví, uživatel dostane možnost toto pole vyplnit. Protože je nastaven atribut *delete_if_empty="true"*, žádná značka se nepřidá, pokud uživatel nechá pole prázdné.  

Rozbalovací seznam z formuláře je definován v tomto řádku:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" display_values="Residential, Commercial, Industrial"/>

Rozbalovací seznam je definován elementem &lt;combo&gt;. Stejně jako u elementu &lt;text&gt; atribut *key* definuje značku **key**. Jeho hodnota je pak vybrána ze seznamu možností *values*. Atribut *display_values* vám umožňuje zvolit jiné názvy v rozbalovacím seznamu, které mohou být srozumitelnější než hodnoty OSM značek.  

Nakonec se podíváme na řádek, který definuje zaškrtávací políčko.  

      <check key="building:vacant" text="Is the building vacant?" default="off" delete_if_empty="true" />

Element &lt;check&gt; definuje - hádejte co! - zaškrtávací políčko. Atribut *default="off"* znamená, že ve výchozím stavu bude nezaškrtnuté. Ostatní atributy už znáte.  

Vytváříme si vlastní soubor předvoleb
------------------------------

Nejlepší způsob vytváření vlastního souboru předvoleb, je použitím již existujícího a naplněním vlastními objekty. Klidně si upravte tento ukázkový soubor a experimentováním se naučte základy. Jen si zapamatujte, že po každém uložení je potřeba restartovat JOSM, aby se změny aplikovaly.  

Než začnete vytvářet vlastní předvolby, je potřeba si pečlivě promyslet značky, které použijete. Vymýšlení nových značek je už zcela jiné téma. Obvykle byste měli používat stávající značky OSM, pokud existují. Většina existujících značek najdete v seznamu na [stránce Map Features v OSM Wiki](https://wiki.openstreetmap.org/wiki/Cs:Map_Features).  

Tento ukázkový soubor obsahuje většinu elementů, které naleznete v JOSM souboru předvoleb - neobsahuje mnoho formulářových elementů. Jestli chcete experimentovat s komplexnějším souborem, stáhněte si soubor [dhaka_presets.xml](/files/dhaka_presets.xml).  

Dále je možné nalézt podrobný popis všech možných elementu [zde](http://josm.openstreetmap.de/wiki/TaggingPresets).  

Hodně štěstí!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png