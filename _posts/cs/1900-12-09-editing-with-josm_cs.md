---
layout: doc
title: Úprava dat polí
permalink: /cs/josm/editing-with-josm/
lang: cs
category: josm
---

Úprava dat polí
==================

> Zkontrolováno 13.7.2015  

Nyní jsme zvládli všechny stavební bloky mapování s OpenStreetMap.
V části [Mapování se smartphone, GPS nebo na papíře](/cs/mobile-mapping/) můžete vidět, jak používat mobilní nástroje pro zjišťování oblasti.  

V této kapitole se opět vrátíme k JOSM a podíváme se na pár nových
konceptů, kterým jsme se dosud nevěnovali.

JOSM Vrstvy
-----------
Pokud jste nás následovali až sem, možná jste si všimli, že můžeme přidat všechny druhy
různých věcí do JOSM. Můžeme stahovat data OSM, přidat satelitní snímky Bing,
načíst GPS stopy a trasové body a přidat podklady z terénu - všechny budou zobrazeny
v mapovém okně JOSM.

Možná jste si také všimli, že pokaždé, když přidáte něco nového do JOSM, další
položka je přidána do panelu Vrstvy na pravé straně JOSM. V závislosti na tom, co máte
otevřeno, tak panel Vrstvy může vypadat například takto:

![Layers panel][]

Každá položka v tomto seznamu představuje jiný zdroj dat
který máte otevřen v okně mapy. V tomto příkladu jsou "Datová vrstva
1 " data OpenStreetMap, kterou upravujeme. "Terénní mapy" jsou
vytvořenou vrstvou když jsme přidali náš snímek terénu do JOSM.

Pokud přidáte satelitní snímky Bing, objeví se nová vrstva v panelu Vrstvy s názvem "Bing Sat."

Myšlenka vrstev může být často těžko pochopitelná. Dobrý způsob, jak si to představit, je že každá
vrstva je jako poloprůhledný kus papíru a všechny jsou uloženy na
té další. Každý kus papíru má na sobě určitý druh informací a může být znovu uspořádán
jak se vám líbí.

Vrstvy, které se používají jako reference, jako jsou satelitní snímky, GPS stopy a terénní snímky 
jsou často nazývány jako "základní vrstvy". Datová vrstva OSM je vrstva, se kterou pracujete.

- Chcete-li vrstvu přesunout, klikněte na ni v panelu Vrstvy a klikněte na tlačítko nahoru
    nebo šipku dolů, abyste je mohli přesunout.

![Layers up down][]

- Chcete-li skrýt vrstvu, vyberte ji myší a
    klikněte na tlačítko Zobrazit / Skrýt:

![Layers show hide][]

- Měli byste vidět, že zvolená vrstva zmizela na mapovém
    okně. Klikněte znovu na možnost Zobrazit / skrýt a znovu se zobrazí.
- Můžete odstranit vrstvu tak, že ji vyberete a použijete tlačítko 
    Odstranit:

![Layers delete][]

- Nakonec je důležité vědět, že tuto vrstvu můžete upravit pouze
    když je považována za *aktivní* od JOSM. Pokud nemáte možnost upravit mapu ve
    vašem mapovém okně, je to pravděpodobně proto, že nemáte správné
    nastavení vrstvy jako aktivní. Většina vrstev, například GPS body, terénní
    záznamy a satelitní snímky nelze editovat. Jediné vrstvy, které
    lze editovat data z OpenStreetMap, které jsou obvykle nazvány 
    “Data Layer 1”.
- Chcete-li vrstvu aktivovat, vyberte ji v panelu Vrstvy a klepněte na
    tlačítko Aktivovat:

![Layers activate][]


Použití GPS dat a terénních dokumentů
-------------------------------
V kapitolách [Mapování se smartphone, GPS nebo na papíře](/cs/mobile-mapping/) jsme viděli, jak shromažďovat data pomocí GPS
a terénními podklady a jak je načíst do JOSM jako vrstvy.

Jakmile jste jeden z těchto nástrojů prozkoumali, stále potřebujete
přidat informace do OpenStreetMap digitálně.

Provedete to stejným procesem, jaký jste se dozvěděli dříve - **stáhnout,
upravit, uložit**. Rozdíl spočívá v tom, že místo použití pouze satelitních
snímků jako základní vrstvy, můžete také použít data GPS, terénní podklady,
poznámky nebo kombinace toto všeho.

- Předpokládejme například, že máte GPS body jako pozadí
    v JOSM, uložili jste GPS navigační značku s názvem 030 a
    napsal jste v notebooku, že 030 je škola. Pro přidání tohoto bodu
    do OpenStreetMap, vyberete nástroj pro kreslení a
    poklepejte na vrchol bodu 030 v okně mapy. Tím
    vytvoříte bod. Potom přejděte do menu Presets a najděte předvolbu pro
    školu. Vložte název školy a klikněte na "Apply Preset".
    To stejné udělejte pokud chcete přidat přímku nebo tvar.

![GPS in JOSM][]

Tagy
----
Když nakreslíte bod, čáru nebo tvar, má místo, ale ne
informace o tom, co to je. Jinými slovy, víme **kde** to
je, ale ne **co** to je. Předtím jsme používali položky
z nabídky Předvolby k určení **co** to je. Způsob, jak 
OpenStreetMap ví **co** objekt je pomocí **tagů**.

Tag je jako štítek, který můžete na něco dát. Například pokud
nakreslíme čtverec, je to jen čtverec. Ale pak přidáme atributy
které to popíší, co to je: tento čtverec je budova; název
budovy je "Menara Thamrin"; budova je 16 pater vysoká.

Do objektu můžete přidat tolik značek, kolik chcete. Značky jsou uloženy jako
párů textů, nazývaných **klíč** a **hodnota**. V
OpenStreetMap, značky uvedené výše by byly ve skutečnosti:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Pokud vyberete objekt v JOSM, můžete vidět všechny značky, které jsou
připojené k němu v panelu Vlastnosti vpravo.

![Properties panel][]

### Editace tagů
Z panelu Vlastnosti můžete přidávat, upravovat a odstraňovat značky. Značky
jsou tradičně v angličtině a někdy mohou být matoucí, takže je 
často snadnější používat nabídku Předvolby. Když přidáte nebo změníte značky, atributy
objektu se změní.

- Chcete-li upravit značky objektu, nejprve je vyberte.
- Poté upravte tady jední z následujících způsobů: (1) Přes Presets menu,
    nebo (2) přímo v okně Properties vpravo. 

### Běžná chyba: Označení uzlů, namísto řádků nebo mnohoúhelníků
Když upravujte atributy bodu, tak ho první vyberete
a poté přidáte tagy buď skrze Presets menu nebo přímo
v panelu Properties. Běžně nastane chyba při přidávání atributů k
čáře či tvaru. Při výběru objektu je důležité
kliknout na linku, nikoliv na bod, který ji tvoří.

To se běžně stává, protože editoři používají v JOSM výběrový nástroj ke kreslení
boxů okolo objektů, čímž do výběru zahrnou linky **a** body.
Když potom přidáte tagy, tak jsou aplikované i na body.
Ujistěte se, že máte vybrané **pouze* linky, když chcete přidat tagy
k nim.

![Nodes mistake][]

Ukládání OSM souborů
----------------
Když editujete v JOSM, je nejlepší data stáhnout, upravit a
a nahrát změny zpět v co nejkratším čase. Není dobré stáhnout
data a poté čekat s nahrátím změn několik dní. Co kdyby
během té doby někdo jiný udělal úpravy ve stejné oblasti? Způsobilo by to chyby a konflikty.

Nebojte se částo nahrávat své úpravy. To zajistí, že budou
uloženy do databáze a nepřijdete o svoji tvrdou práci.

Pokud pracujete v určité oblasti, je dobrým zvykem stahovat mapová data
vždy, když chcete jít editovat, pro případ, že někdo jiný v dané oblasti udělal změny.

Ikdyž byste vždy měli zkusit stáhnout OSM data až jste připravení editovat,
a často poté nahrávat změny zpět, může dojít na případ, kdy si chcete uložit
OSM data do počítače. Když vám vypadává připojení
k Internetu, tak si data stáhnete, upravíte, ale nahrajete
až to bude zase možné.

- Před ukládáním OSM souboru se ujistěte, že máte zvolenou správnou vrstvu
    v Layers panelu. Klikněte na "File" v horním menu a poté na "Save".
    Vyberte cílovou složku pro soubor a pojmenujte ho. Toto provedete taktéž
    kliknutím na toto tlačítko:

![JOSM save button][]

- Nyní můžete zavřít JOSM a vaše data budou bezpečně uložena. Až budete chtít
    soubor znovu načíst, prostě otevřete JOSM, v hlavním menu zvolte "File"
    a klikněte na "Open..."

Shrnutí
-------
V této kapitole jsme si trochu představili uživatelské rozhraní JOSM a probrali jsme
vrstvy a tagy. Už byste měli mít pevný základ pro mapování
a úpravu OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png