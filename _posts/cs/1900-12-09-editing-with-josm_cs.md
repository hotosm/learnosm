---
layout: doc
title: Úprava dat polí
permalink: /cs/josm/editing-with-josm/
lang: cs
category: josm
---

Úprava dat polí
==================


Nyní jsme pokryli všechny stavební bloky mapování pomocí OpenStreetMap. V části [Mapování pomocí smartphonu, GPS nebo papíru](/en/mobile-mapping/) můžete vidět, jak používat mobilní nástroje pro průzkum oblasti.

V této kapitole se vrátíme znovu k JOSM a podíváme se na několik nových konceptů, kterými jsme se dosud nezabývali.

JOSM Vrstvy
-----------
Pokud jste postoupili až sem, možná jste si všimli, že do JOSM můžeme přidat nejrůznější věci. Můžeme stahovat data OSM, přidávat satelitní snímky Bing, načítat GPS trasy a waypointy a přidávat ručně kreslené mapy - to vše se zobrazuje v mapovém okně JOSM.

Možná jste si také všimli, že pokaždé, když do JOSM přidáte něco nového, přidá se na panel Vrstvy na pravé straně JOSM další položka. V závislosti na tom, co jste otevřeli, může panel Vrstvy vypadat asi takto:

![Layers panel][]

Každá položka v tomto seznamu představuje jiný zdroj dat, který máte otevřený v okně mapy. V tomto příkladu „Data Layer 1“ jsou data OpenStreetMap, která editujeme. „Field Papers“ je vrstva vytvořená, když jsme přidali naši ručně kreslenou mapu do JOSM.

Pokud přidáte satelitní snímky Bing, objeví se nová vrstva v panelu Vrstvy s názvem "Bing Sat."

Myšlenka vrstev může být často obtížně pochopitelná. Dobrým způsobem, jak si představit, je, že každá vrstva je jako poloprůhledný kus papíru a všechny jsou naskládány na sebe. Každý kus papíru obsahuje určitý typ informací a lze je libovolně uspořádat.

Vrstvy, které se používají jako reference, jako jsou satelitní snímky, GPS trasy a polní mapy, se často nazývají „základní vrstvy“. Datová vrstva OSM je vrstva, se kterou skutečně pracujete.

- Chcete-li vrstvu přesunout, klikněte na ni v panelu Vrstvy a kliknutím na šipku nahoru nebo dolů ji přesuňte.

![Layers up down][]

- Chcete-li vrstvu skrýt, vyberte ji myší a klikněte na tlačítko Zobrazit / skrýt:

![Layers show hide][]

- Měli byste vidět že vrstva, kterou jste vybrali, zmizela v mapovém okně. Klikněte znovu na Zobrazit / skrýt a znovu se objeví.
- Vrstvu můžete odstranit tak, že ji vyberete a použijete tlačítko Smazat:

![Layers delete][]

- A konečně je důležité vědět, že můžete upravovat pouze vrstvu, kterou JOSM považuje za *aktivní*. Pokud nemůžete upravit mapu v okně mapy, je to pravděpodobně proto, že nemáte aktivní vrstvu nastavenou jako aktivní. Většina vrstev, jako jsou GPS body, terénní mapy a satelitní snímky, nelze upravovat. Jediné vrstvy, které lze editovat, jsou data z OpenStreetMap, která se obvykle nazývají „Data Layer 1”“.
- Chcete-li aktivovat vrstvu, vyberte ji na panelu Vrstvy a klikněte na tlačítko Aktivovat:

![Layers activate][]


Použití GPS dat a terénních dokumentů
-------------------------------
V kapitolách [Mapování se Smartphone, GPS nebo papírem](/en/mobile-mapping/) jsme viděli, jak shromažďovat data pomocí GPS a terénních map a jak je načítat do JOSM jako vrstvu.

Jakmile provedete průzkum pomocí některého z těchto nástrojů, musíte informace přidat do OpenStreetMap digitálně.

Děláte to stejným způsobem, jaký jste se naučili dříve - **stáhnout, upravit, uložit**. Rozdíl je v tom, že místo použití pouze satelitních snímků jako základní vrstvy můžete také použít vaše GPS data, terénní mapy, poznámky nebo jejich kombinaci.

- Předpokládejme například, že máte GPS waypointy jako vrstvu pozadí v JOSM, uložili jste do GPS navigační bod s názvem 030 a do notebooku jste napsali, že 030 je škola. Chcete-li přidat tento bod do OpenStreetMap, vyberte nástroj kreslení a dvakrát klikněte na horní bod 030 v okně mapy. Tím vytvoříte bod. Poté přejděte do nabídky Předvolby a najděte předvolbu pro školu. Zadejte název školy a klikněte na „Použít nastavení“. Stejným způsobem přidejte čáry a tvary.

![GPS in JOSM][]

Tagy
----
Když nakreslíte bod, čáru nebo tvar, má místo, ale žádné informace o tom, co to je. Jinými slovy, víme **kde** je, ale ne **co** je. Předtím jsme pomocí položek z nabídky Nastavení definovali **co** to je. Způsob, jakým OpenStreetMap ví **co je** objekt, je pomocí **značek**.

Tag je něco jako štítek, který můžete na něco nalepit. Pokud například nakreslíme čtverec, je to pouze čtverec. Ale pak k němu přidáme atributy, které popisují, co to je: tento čtverec je budova; název budovy je "Menara Thamrin"; budova je vysoká 16 pater.

K objektu můžete přidat libovolný počet tagů. Tagy se ukládají jako dvojice textu, které se nazývají **klíče** a **hodnoty**. V OpenStreetMap by výše zapsané tagy ve skutečnosti byly:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Pokud vyberete objekt v JOSM, uvidíte všechny značky, které jsou k němu připojeny, na panelu Vlastnosti vpravo.

![Properties panel][]

### Editace tagů

Na panelu Vlastnosti můžete přidávat, upravovat a odstraňovat značky. Značky jsou však tradičně v angličtině a někdy mohou být matoucí, takže je často jednodušší použít nabídku Předvolby. Při přidávání nebo změně značek se změní atributy objektu.

- Chcete-li upravit značky objektu, nejprve je vyberte.
- Poté upravte značky jedním ze dvou způsobů: (1) Použijte nabídku Předvolby nebo (2) upravte značky přímo v okně Vlastnosti vpravo.

### Běžná chyba: Označení uzlů, namísto řádků nebo mnohoúhelníků

Při úpravě atributů bodu nejprve vyberete bod a poté přidáte značky buď prostřednictvím nabídky Předvolby, nebo přímo na panelu Vlastnosti. Častou chybou je přidávání atributů čáře nebo tvaru. Při výběru objektu je důležité, abyste
kliknout na linku, nikoliv na bod, který ji tvoří.

K tomu často dochází, protože editory používají nástroj pro výběr JOSM k nakreslení rámečku kolem objektu, což způsobí, že je vybráno vše, jak čára, tak uzly, a když přidáte značky, jsou použity i na uzly. Dbejte na to, abyste **vybírali** pouze řádky, když k nim chcete přidat tagy.

![Nodes mistake][]

Ukládání OSM souborů
----------------
Při úpravách v JOSM je vždy dobré stáhnout, upravit a nahrát změny v přiměřeně krátkém čase. Nechcete jeden den stahovat data a pak čekat s nahráním úprav až o několik dní později. Co když během té doby upraví stejnou oblast někdo jiný? To způsobí chyby a konflikty.

Nebojte se často nahrávat své úpravy. Tím zajistíte, že se vaše změny uloží do databáze a vy nepřijdete o svou tvrdou práci.

Pokud pracujete v jedné oblasti, je dobré stáhnout mapová data pokaždé, když je chcete upravit, pro případ, že změny provedl jiný uživatel.

Ačkoli byste se měli snažit stahovat data OSM vždy, když jste připraveni k úpravám, a často nahrávat své změny, mohou nastat případy, kdy budete chtít data OSM uložit do počítače. Například pokud máte přerušované připojení k internetu, můžete si přát stáhnout data, uložit je, upravit a později nahrát své změny.

- Chcete-li uložit soubor OSM, ujistěte se, že je aktivní vrstvou na panelu Vrstvy. V horní nabídce klikněte na "File" (Soubor) a poté klikněte na "Save" (Uložit). Zvolte místo souboru a pojmenujte jej. Uložit můžete také kliknutím na toto tlačítko:

![JOSM save button][]

- Nyní můžete systém JOSM zavřít a vaše data budou uložena. Až budete chtít soubor znovu otevřít, jednoduše otevřete JOSM, přejděte do nabídky "Soubor" a klikněte na "Otevřít...".

Shrnutí
-------
V této kapitole jsme se trochu blíže seznámili s rozhraním JOSM a dozvěděli jsme se něco o vrstvách a značkách. Nyní byste měli mít pevné základy v tom, jak mapovat a jak upravovat OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png