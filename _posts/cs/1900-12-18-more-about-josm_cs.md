---
layout: doc
title: Proces editace JOSM
permalink: /cs/josm/more-about-josm/
lang: cs
category: josm
---

Proces editace JOSM
========================


V předchozí části jste nainstalovali JOSM a začali kreslit své první body, čáry a tvary. K těmto objektům jste přidali nastavení, abyste k nim připojili informace. Nakonec jste si mohli vytvořit vlastní mapu v JOSM.

To byla dobrá praxe a teď jsme připraveni upravovat OpenStreetMap.

V této sekci se podrobněji podíváme na rozhraní JOSM a uvidíme, jak jej můžeme použít k úpravě mapy na OpenStreetMap.

Cyklus úpravy
---------------------
Úpravy OpenStreetMap pomocí JOSM jsou podobné úpravám pomocí editoru iD, který jsme viděli dříve. Ale protože JOSM je desktopová aplikace, funguje trochu jinak. Proces úprav a přidání do OpenStreetMap s JOSM bude vždy následující:

1. **Stáhnutí** aktuálních mapových dat z OSM
2. **Úprava** pomocí satelitní fotomapy, GPS, terénních map a poznámek jako pomocných dat
3. **Uložení** změn na OpenStreetMap

Stažení dat OSM
--------------------
Prvním krokem úpravy je stažení dat pro oblast světa, kterou chceme vylepšit. Nezapomeňte, že to musíte udělat pokaždé, když chcete na mapě provést změny, protože mapu často aktualizují jiní uživatelé.

- Klikněte na „Soubor“ v levém horním rohu JOSM a poté na „Stáhnout z OSM“. Tím se otevře okno stahování. Do tohoto okna se dostanete snadněji kliknutím na tlačítko Stáhnout, které je zde:

![JOSM Download Button][]

- Když se otevře okno stahování, měla by se zobrazit mapa. Pokud mapu nevidíte, klikněte na kartu označenou „Slippy map“.

![JOSM Download Dialog][]

- Pomocí myši posouvejte a přibližujte ji do oblasti, kterou dobře znáte, například do rodného města nebo okolí. Ovládací prvky jsou stejné jako v okně mapy JOSM. Pravým tlačítkem myši můžete přetáhnout mapu a rolovací kolečko umožňuje přibližování a oddalování.

> Někdy, pokud pracujete na notebooku, může být obtížné přibližovat se a oddalovat. Práce v JOSM je mnohem jednodušší, pokud máte myš, ale většina moderních notebooků vám umožňuje rolovat pomocí touchpadu.

- Kolem oblasti, kterou chcete stáhnout, nakreslete rámeček. Chcete-li nakreslit nový rámeček, klikněte na mapu, podržte stisknuté levé tlačítko myši a tažením myši vytvořte rámeček. Uvolněním tlačítka myši kreslení rámečku dokončíte.
- Jakmile jste spokojeni s velikostí a umístěním schránky, klikněte na tlačítko "Stáhnout" v dolní části okna. JOSM získá data pro tuto oblast z OpenStreetMap a otevře je v okně mapy pro úpravy.

### Přidat snímky
Pokud jste sledovali, jak jsme přidávali první body pomocí editoru iD, vzpomínáte si, že pod mapovými daty byl satelitní snímek, který nám pomohl identifikovat objekty na zemi. Tento snímek pocházel od společnosti Microsoft Bing, která velkoryse poskytuje své snímky uživatelům OpenStreetMap, aby se na ně mohli při přispívání do mapy odvolávat.

- Chcete-li do systému JOSM přidat satelitní snímky Bing, klikněte v horním menu systému JOSM na položku "Imagery" a vyberte možnost "Bing Sat".

> Pokud v nabídce Obrázky nevidíte službu Bing Sat, možná ji budete muset aktivovat v předvolbách JOSM. Přejděte do nabídky Upravit -> Předvolby a klikněte na ikonu s nápisem "WMS TMS". Možná budete muset kliknout na šipku dolů, abyste ji našli.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Klikněte na "Bing Sat". Pak klikněte na tlačítko "Aktivovat".


### Prohlídka JOSM
Nyní, když jsme stáhli data OpenStreetMap a přidali satelitní snímky Bing, podívejme se znovu na rozhraní JOSM.

![JOSM layout][]

Hlavní okno již znáte - je to okno mapy, ve kterém se odehrává většina akce. Zde budete prohlížet, upravovat a přidávat data OpenStreetMap.

Vpravo od okna mapy se nachází řada panelů, z nichž každý má svou vlastní funkci. Při první instalaci JOSM se obvykle ve výchozím nastavení zobrazí několik panelů, například Vrstvy, Vlastnosti a Výběr. Když v mapovém okně vyberete bod, čáru nebo tvar, zobrazí se v panelu Výběr. Informace o objektu se zobrazí v panelu Vlastnosti a uživatelské jméno autora daného objektu se zobrazí v panelu Autoři.

Tyto panely lze otevřít nebo zavřít kliknutím na různá tlačítka v levé dolní části systému JOSM. Nad těmito tlačítky v pravém horním rohu jsou nástroje, které mění možnosti práce s myší. Některé z nich již znáte: nástroj Výběr a nástroj Kreslení. Pod nimi jsou nástroje, které usnadňují přiblížení, odstranění objektu, nakreslení tvaru nebo vytvoření čáry rovnoběžné s jinou čárou.


Upravit
----
Tím jsme dokončili první krok procesu úprav - stahování. Připravili jsme JOSM se satelitními snímky jako referencí. Dalším krokem je úprava mapy a přidání nových položek.

V závislosti na oblasti, kterou jste si vybrali ke stažení, může být existujících mapových dat hodně nebo velmi málo. Všimněte si však, že se jedná o stejný druh dat, s jakými jsme se setkali již dříve - body, čáry a tvary, které představují skutečná místa.

- Použijte techniky, které jste se již naučili, a přidejte do mapy několik bodů míst, která znáte. Pokud uvidíte nějaké chyby, pokuste se je opravit.
- Při učení nemusíte být příliš agresivní. Pokud si nejste něčím jisti, je lepší to nechat tak, jak to je.
- Pokud chcete přesunout bod, čáru nebo tvar, použijte nástroj **výběr**. Klikněte na objekt a přetáhněte jej tam, kde má být. Tento postup lze použít k opravě umístění položek, které byly umístěny na nesprávné místo.

![JOSM select tool][]

- Pomocí nástroje **kreslení** můžete kreslit nové body, čáry a tvary. Tyto objekty popište výběrem z nabídky Předvolby, stejně jako v předchozí části.

> Nikdy neupravujte mapu mimo oblast, kterou jste si stáhli. Vidíte, že obdélníková oblast, kterou jste stáhli, má jednolité pozadí, zatímco oblast, kterou jste nestáhli, má diagonální pruhované čáry.
>
> ![JOSM area downloaded][]

Ukládání změn
--------------
Třetím a posledním krokem k dokončení úprav je nahrání provedených změn do databáze OpenStreetMap. Abychom mohli změny uložit, musíme být připojeni k internetu.

- V horní nabídce klikněte na položku "Soubor" a poté na položku "Nahrát data". Tím se otevře okno pro nahrávání. Do tohoto okna se dostanete jednodušeji kliknutím na tlačítko upload, které je zobrazeno zde:

    ![JOSM Upload Button][]

- V zobrazeném okně se zobrazí seznam objektů, které přidáváte, a objektů, které upravujete nebo odstraňujete. V okně v dolní části jste vyzváni, abyste uvedli komentář k prováděným změnám. Zde zadejte popis svých úprav.

    ![JOSM Upload Dialog][]

- Klikněte na tlačítko "Nahrát změny".

- Pokud ukládáte změny do OpenStreetMap poprvé, budete požádáni o zadání uživatelského jména a hesla OpenStreetMap.
- Zadejte je do zobrazeného okna. Pokud v tomto okně zaškrtnete políčko, vaše uživatelské jméno a heslo se uloží a v budoucnu je nebudete muset znovu zadávat. Klikněte na tlačítko "Ověřit".

    ![JOSM Authenticate][]

- Musíte počkat několik sekund, než se změny nahrají, a pak je hotovo! Upravili jste mapu na OpenStreetMap.

> Při úpravách se vždy ujistěte, že jste změny nahráli před zavřením JOSM. I když máte ještě další úpravy, nahrajte své změny a později, až budete mít na úpravy čas, projděte celý proces znovu. Nechcete přece o svou práci přijít!

Zobrazit změny na mapě
---------------------------
- Otevřete internetový prohlížeč a přejděte na adresu [http://openstreetmap.org/](http://openstreetmap.org/).
- Přesuňte mapu do oblasti, kterou jste upravili.
- Na mapě by se měly objevit vaše změny! Pokud se tak nestane, zkuste stisknout CTRL+R a obnovit webovou stránku. Někdy se mapa neaktualizuje správně a je třeba ji znovu načíst.
- Co když se vám změny nezobrazí? Nebojte se - může trvat několik minut, než se změny na mapě zobrazí. Zkontrolujte také své doplňky v JOSM, abyste se ujistili, že jste je přidali správně. Dobrým obecným pravidlem je, že pokud má váš bod ikonu v JOSM, měl by být vidět i na hlavní mapě na webu OpenStreetMap.

Shrnutí
-------
Když už víte, jak přidávat do OpenStreetMap, co dál? No, editace je skvělá, ale není to jediný aspekt tvorby map. Samozřejmě se také musíte naučit, jak chodit ven a sbírat informace o místech v terénu.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png