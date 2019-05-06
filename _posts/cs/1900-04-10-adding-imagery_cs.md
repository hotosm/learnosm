---
layout: doc
title: JOSM přidání TMS, WMS nebo WMTS snímků
permalink: /cs/josm/josm-adding-imagery/
lang: cs
category: josm
---

JOSM - Přidání leteckých snímků
================

> Zkontrolováno 9.9.2016  

Všechny letecké snímky nejsou součástí menu **Podkladové mapy**, ale dají se jednoduše přidat, pokud na ně máte odkaz.  

V tomto příkladu pracujeme v [HOT Tasking Manager](http://tasks.hotosm.org/) a snímky potřebné k dokončení jednoho projektu je potřeba manuálně stáhnout do JOSM. Princip přidání odkazu na snímek je vždy stejný, ať pracujete na čemkoliv, u čeho je odkaz na ně k dispozici. Stává se, že poskytnutý odkaz nefunguje a je nutné snímky přidat manuálně, ale musíte být schopni získat informace k odkazu.  

Ze záložky **Instrukce** v Tasking Manageru, nebo jiného vašeho zdroje informací, zkopírujte všechno ze sekce **Mapový podklad**.  

![TM Imagery][]

Jděte do nabídky **Předvolby** (**Upravit / Předvolby**, nebo na počítačích Apple **JOSM / Předvolby**)  

![Preferences WMS TMS 1][]

Klikněte na ikonu ![WMS_TMS_button][]{: height="24px"}, a v tomto případě dále na ikonu ![+TMS_button][]{: height="24px"}.  

> TMS URL adresy obsahují obvykle (x)(y) a (z), WMS URL adresy jsou velmi dlouhé a obsahují (width) a (height), WMTS URL adresy zahrnují WMTSCapabilities.xml. Pokud si nejste jistí, který máte typ URL adresy snímků, zkuste je přidat pod různými typy a uvidíte, který bude fungovat.  

![Preferences WMS TMS 3][]

**Pole 1.** Informace zkopírované z Tasking Managera vložte do prvního okýnka v dialogovém okně. JOSM je ověří a pokud jsou správné, ověřovací proces je zkopíruje do okýnka číslo 3 (můžete vidět na obrázku níže). Pokud informace nezkopíruje během pár vteřin, zkontrolujte je, zda jste nezapoměli na nějaké písmenko nebo náhodou nepřidali tzv. 'bílý znak' (prázdné místo) na začátek nebo konec - musíte zkopírovat a vložit pouze samotný odkaz.  
**Pole 2.** Obvykle zůstává prázdné, pokud neobdržíte další pokyny.  
**Pole 3.** Nyní obsahuje kopii Box 1, vygenerovanou ověřovacím procesem JOSM.  
**Pole 4.** Vložte název vrstvy - jelikož byly mé snímky v Tasking Manager identifikovány jako *Satelitní snímky pro tento projekt laskavě dodává společnost Digital Globe prostřednictvím své služby +Vivid.* Pojmenoval jsem moji vrstvu **Digital Globe + Vivid**.  

![Preferences WMS TMS 4][]

Potvrďte tlačítkem ![OK_button][]{: height="24px"} a vámi přidané snímky se zobrazí na konci seznamu - asi budete muset sjet dolů, aby jste je našli.  

![Preferences WMS TMS 5][]

Tlačítkem ![OK_button][]{: height="24px"} zavřete okno předvoleb a vrátíte se do JOSM. Pokud potřebujete použít své snímky, klikněte na nabídku **Podkladové mapy** v hlavním menu a vyberte je ze seznamu. Pro vyvolání této nabídky můžete také použít klávesovou zkratku **Alt + I** (Tyto zkratky se mohou lišit v závisloti na zvoleném jazyku).  

![Preferences WMS TMS 6][]

**Tip** Pokud se snímky nechtějí načíst, zkontrolujte si, jak se zapsali do seznamu. V tomto případě se **tms** objevilo dvakrát. Upravte odkaz přímo v josm tak, aby se tms zobrazilo jen jednou, čímž problém nejspíše vyřešíte.

![TMS TMS][]

Přidání WMS serveru
===========

Přidání WMS serveru je velmi podobné přidávání TMS serveru, s jedním podstatným rozdílem. WMS servery typicky poskytují více než jednu vrstvu snímků, ze kterých si můžete vybrat a buď si vyberete vrstvu při přidávání WMS serveru v předvolbách, nebo nastavíte možnost, že si výběr vrstvy necháte až na chvíli, kdy si vyberete daný server z nabídky **Mapové podklady** v hlavním menu JOSM.

Pokud chcete přidat WMS server, otevřete nastavení mapových podkladů, které jste mohli vidět výše, ale tentokrát klikněte na tlačítko **Vložte novou položku WMS...** ![wms_add_button][]

Vyskočí toto dialogové okno:
![wms_entry_dialog_numbered][]

**Pole 1.** Vložte URL WMS serveru do textového pole. Typická URL adresa začíná na http nebo https  
**Tlačítko 2.** Po vložení URL klikněte na tlačítko **Získat vrstvy**. JOSM kontaktuje WMS server a získá seznam vrstev dostupných na serveru  
**Pole 3.** Tady se zobrazí daný seznam dostupných vrstev. Měli by tam být adresáře, které je potřeba rozkliknout k zobrazení dostupných vstev  
**Rozbalovací nabídka 4.** Formát obrázků - obvykle se automaticky vybere hned po zvolení jedné z vrstev v textovém poli **Pole 3**. Může zde být výběr z více formátů, ale obvykle je to jpeg nebo png.  
**Pole 5.** Název se generuje automaticky po zvolení vrstvy v textovém poli **Pole 3**. Bude dlouhý a komplikovaný, obvykle je použitelný, obsahuje dostatek informací a většinou není potřeba ho měnit.  
**Pole 6.** Sem vložte název serveru nebo vrstvy. Výchozí název je předvyplněný na základě URL, ale můžete si zvolit mnohem smysluplnější. Tento název pak budete hledat v nabídce **Podkladové mapy**, když si budete přidávat vrstvu do panelu vrstev v rozhraní JOSM.  

> Ukázkový WMS server se spoustou zajímavých vrstev: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Zkontrolujte si, jestli máte vybranou nějako vrstvu, kterou chcete vždy z nabídky Podkladové mapy načíst. V ukázce výše, když je tento server vybrán z nabídky **Podkladové mapy**, tak se vždy načte vrstva *World Database of Protected Areas*.

Pokud si však chcete vrstvu z tohoto serveru manuálně vybírat při každém jeho načtení a mít možnost načíst si i více vrstev, tak si zaškrtněte políčko **Uložit pouze základní adresu WMS, vrstvy vybrat až při jeho použití**. Tím se také znemožní výběr vrstvy a pole ověření URL zešedne.

![wms_end_point_only_highlighted][]  

Potvrďte tlačítkem ![OK_button][]{: height="24px"} a vámi přidané snímky se zobrazí na konci seznamu - asi budete muset sjet dolů, aby jste je našli.  

![Preferences WMS TMS 5][]

Tlačítkem ![OK_button][]{: height="24px"} zavřete okno předvoleb a vrátíte se do JOSM. Pokud potřebujete použít své snímky, klikněte na nabídku **Podkladové mapy** v hlavním menu a vyberte je ze seznamu. Pro vyvolání této nabídky můžete také použít klávesovou zkratku **Alt + I** (Tyto zkratky se mohou lišit v závisloti na zvoleném jazyku).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg