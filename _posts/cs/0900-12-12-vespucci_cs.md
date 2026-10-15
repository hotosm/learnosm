---
layout: doc
title: Vespucci
permalink: /cs/mobile-mapping/vespucci/
lang: cs
category: mobile-mapping
---

Vespucci
==============

Vespucci je volně dostupný nástroj pro editaci dat OpenStreetMap známý tím, že pracuje na široké škále zařízení jako jsou chytré telefony a tablety. Podporuje většinu operací dostupných v desktopových editorech OSM. Nicméně tato aplikace je dostupná pouze pro zařízení se systémem Android a funguje na všech verzích Android 4.0 a vyšších.

Můžete si ji stáhnout z Obchodu Google Play, Amazonu nebo F-Droid.  Soubory APK pro nová vydání a beta verze jsou také dostupné z repozitáře aplikace na GitHubu.

## Vlastnosti

-   Vytváření, upravování a mazaní uzlů, cest a relací
-   Přesouvání uzlů
-   Přesouvání a otáčení cest
-   Přidávání poznámek k cestám
-   Oddělení uzlu od cesty
-   Vylepšení geometrie cesty
-   Ortogonalizace (zpravoúhlení) cest
-   Přesouvání více objektů najednou
-   Podpora multi-polygonů
-   Vytváření, upravování a mazání značek
-   Funkce o krok zpět a vpřed
-   Upravování relací a vytváření nových zákazů odbočení
-   Podpora předvoleb programu JOSM
-   Stahování a ukládání podkladových snímků (resp. dlaždic snímků)
-   Stahování z a nahrávání na server OSM
-   Ukládání a čtení datových souborů OSM ve formátu JOSM
-   Zobrazení validačních problémů a objektů k úpravě se značkou FIXME
-   Doplňování chybějících značek a názvů ulic
-   Přidávání, komentování a uzavírání Poznámek OSM a chyb Osmose
-   Načtení, zaznamenávání a nahrávání stop ve formátu GPX
-   Zobrazení geo-referencovaných fotografií (opatřených souřadnicemi)
- Podpora MapSplit dlaždicových dat OSM
-   Podpora čtení datových souborů OSM ve formátu PBF
-   ...a mnohé další

## Mapování pomocí Vespucci

Data OSM jsou ve Vespucci nazývána jako objekty. Body jsou nazývány jako uzly, linie jsou označovány jako cesty a polygonům se říká uzavřené cesty.

Abyste mohli přidávat data pomocí Vespucci, musíte se přihlásit ke svému účtu OpenStreetMap. Přihlaste se stisknutím ikony “Další možnosti" (v pravé spodní části obrazovky) a vybráním “Autorizace OAuth" v menu “Nástroje…". Vyplňte vaše uživatelské jméno v OSM (nebo e-mailovou adresu) a heslo, poté stiskněte “Přihlásit". Pokud nemáte účet OSM, vyberte místo toho “Zaregistrujte se".

![Login][]

Vespucci bude potřebovat přístup k vašemu účtu. K přidělení přístupu k vašemu účtu stiskněte po přihlášení “Udělit přístup". Ujistěte se, že všechny možnosti jsou zaškrtnuté, abyste maximalizovali vaše možnosti používání Vespucci.

![Allow][]

Po přihlášení nalezněte vaši oblast zájmu pomocí ikony “GPS/GNSS..." nebo přes “Najít" pod “Další možnosti". Podklad mapy můžete změnit na vybrané satelitní snímky kliknutím na tři linky v pravém horním rohu a poté na “OpenStreetMap (Standard)", které je výchozím podkladem – ukáže se seznam všech dostupných snímků.

![SelectImagery][]

Pro offline editaci vyberte “Stáhnout aktuální pohled" nebo “Přepsat stažené aktuálním pohledem" v menu pod ikonou “Přenos...". To vám umožní stáhnout a upravovat oblast viditelnou na vaší obrazovce a také uložit vámi vybrané podkladové snímky. Offline editace zamezí současnému upravování dat OSM více mapery naráz, čímž se vyhnete následným problémům s kvalitou dat, které by tím mohly vzniknout.

![Offline][]

Odemkněte mapu, abyste mohli začít přidávat data. To uděláte stisknutím ikony zámku v levém horním rohu obrazovky. Dlouze podržte ikonu pro odemčení a poté stiskněte "Normální", abyste mohli přidávat a upravovat uzly, cesty a značky. Vybrání možnosti "Editování tagů" vám umožní pouze upravovat značky.

![StartEditing][]

### Přidávání a upravování značek

K přidání nebo úpravě značky ťukněte na požadovaný objekt. Ve spodní části obrazovky se objeví nová sada ikon. Pro přidání nebo úpravu značek ťukněte na ikonu “Add preset" nebo na ikonu “Edit properties".

![EditTags][]

### Přidávání/vytváření nových objektů

Pro přidání nového objektu stiskněte velké zelené tlačítko v pravém spodním rohu obrazovky a vyberte co chcete přidat. Přibližte mapu a ťukněte tam, kam chcete nový objekt vložit.

![AddObject][]

Pro vytvoření nového uzlu vyberte "Přidat uzel" a ťukněte do místa, kde chcete uzel vložit.

![AddNode][]

Pro vytvoření cesty vyberte "Přidat cestu" a ťukejte postupně na obrazovku dokud nedosáhnete kýženého výsledku.

![AddWay][]

Pro vytvoření uzavřené cesty/polygonu, kreslete cestu/cesty a jednoduše ťukněte na první uzel první cesty, kterou jste vytvořili, čímž polygon uzavřete. Pro přidání značek k polygonu ťukněte na ikonu "Předvolby". Neoznačené cesty jsou obarveny růžově (fuchsiově), zatímco označené cesty jsou obarveny na základě jejich značek/vlastností (tj. budovy jsou béžové, vodní cesty jsou modré atd.).

![AddPolygon][]

### Přidávání uzlů do cesty

Vyberte cestu, do které chcete přidat uzel. Stiskněte velké zelené tlačítko v pravém dolním rohu obrazovky a vyberte "Přidat uzel". Ťukněte tam, kam chete nový uzel vložit. Nový uzel se přidá ve vybraném místě.

![AddNodeToWay][]

### Upravování a posouvání objektů

Pro přesun objektu na něj jednou ťukněte a poté jej posuňte na požadované umístění.

Pro srovnání polygonu do pravých úhlů (čtverce, obdélníku, ...) jej označte a vyberte “Zpravoúhlit" pod ikonou “Další možnosti".

![ModifyObject][]

### Zpět/Vpřed

Ke zrušení vašich změn ťukněte na ikonu "Zpět" v levém dolním rohu obrazovky. Krátké zmáčknutí vrátí vaše poslední úpravy.

![Undo][]

K opětovnému provedení vašich změn stiskněte dlouze ikonu "Zpět". Zobrazí se seznam operací, které jste vrátili zpět. Vyberte tu, kterou chcete znovu provést.

![Redo][]

### Nahrání vašich změn

K nahrání vašich změn stiskněte ikonu "Přenos..." ve spodní části obrazovky a vyberte možnost "Nahrát data na server OSM". Zobrazí se seznam vašich změn. Klikněte na "Vlastnosti" pro vyplnění komentáře k vaší sadě změn, poté ťukněte na "Nahrát". Pokud je nahrání úspěšné, vaše změny se okamžitě objeví v OSM.

![Upload][]

Nahrání vašich změn do OpenStreetMap vyžaduje, abyste byli připojeni k internetu a přihlášeni do vašeho účtu OSM, proto se prosím ujistěte, že jste se před editací dat přihlásili.

## Vyhledávání míst

K ukázání vaší aktuální polohy stiskněte ikonu “GPS/GNSS..." ve spodní části obrazovky a vyberte “Na aktuální polohu". Mapa se automaticky přiblíží na vaši pozici. Připomínáme, že aby toto fungovalo, musí být na vašem zařízení zapnuty polohové služby ("GPS").

![Goto][]

K nalezení jiných míst, stiskněte ikonu "Další možnosti" a vyberte "Najít". Napište název požadované destinace a vyberte "Hledat". Ujistěte se, že hledáte "pomocí Nominatim" pro vyhledání míst vyhledávačem Nominatim.

![Search][]

## Další nastavení Vespucci

Pro úpravu vlastností podkladové mapy stiskněte ikonu "Nastavení" ve spodní části vaší obrazovky. Zobrazí se okno s možnostmi nastavení uživatelského rozhraní. Vyberte ze seznamu co si přejete upravit. Zde také můžete upravit nastavení uživatelského rozhraní, nastavení dat a úprav, nastavení umístění a serveru atd.

![Preferences][]

Některá nastavení mohou být přizpůsobena pod ikonou "Další možnosti". K zarovnání podkladové vrstvy s vaší mapou (pokud je zde posun) ťukněte na “Zarovnat pozadí" v menu “Nástroje…". Provedení této operace vyžaduje přístup k síti.

![AlignImagery][]

K vyčištění mezipaměti stažených snímků vyberte "Nástroje" &gt; "Další obrazové nástroje" &gt; "Vyčistit veškerou mezipaměť dlaždic". To vyprázdní všechny mezipaměti pro dlaždice, které na vašem zařízení máte.

![ClearTiles][]

Také můžete zanechat vývojářům Vespucci zpětnou vazbu pomocí vašeho účtu GitHub nebo OSM v menu pod ikonou "Další možnosti".

![Feedback][]

[Login]:        /images/mobile-mapping/vespucci-login.png
[Allow]:        /images/mobile-mapping/vespucci-allow.png
[SelectImagery]:/images/mobile-mapping/vespucci-select-imagery.png
[Offline]:      /images/mobile-mapping/vespucci-offline.png
[StartEditing]: /images/mobile-mapping/vespucci-start-editing.png
[EditTags]:     /images/mobile-mapping/vespucci-edit-tags.png
[AddObject]:    /images/mobile-mapping/vespucci-add-object.png
[AddNode]:      /images/mobile-mapping/vespucci-add-node.png
[AddWay]:       /images/mobile-mapping/vespucci-add-way.png
[AddPolygon]:   /images/mobile-mapping/vespucci-add-polygon.png
[AddNodeToWay]: /images/mobile-mapping/vespucci-add-node-to-way.png
[ModifyObject]: /images/mobile-mapping/vespucci-modify-object.png
[Undo]:         /images/mobile-mapping/vespucci-undo.png
[Redo]:         /images/mobile-mapping/vespucci-redo.png
[Goto]:         /images/mobile-mapping/vespucci-goto.png
[Search]:       /images/mobile-mapping/vespucci-search.png
[Upload]:       /images/mobile-mapping/vespucci-upload.png
[Preferences]:  /images/mobile-mapping/vespucci-preferences.png
[AlignImagery]: /images/mobile-mapping/vespucci-align-imagery.png
[ClearTiles]:   /images/mobile-mapping/vespucci-clear-tile-cache.png
[Feedback]:     /images/mobile-mapping/vespucci-feedback.png
