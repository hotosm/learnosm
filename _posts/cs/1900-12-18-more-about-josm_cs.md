---
layout: doc
title: Proces editace JOSM
permalink: /cs/josm/more-about-josm/
lang: cs
category: josm
---

Proces editace JOSM
========================

> Zkontrolováno 12.7.2015  

V předchozí části jste 
nainstalovali JOSM a začali kreslit své první body, čáry a tvary.
Do těchto objektů jste přidali přednastavení, abyste mohli přidat informace o
nich. Nakonec jste si mohli vytvořit vlastní mapu v JOSM.

To byla dobrá praxe a teď jsme připraveni upravovat OpenStreetMap.

V této části se blížeji podíváme na rozhraní JOSM a uvidíme
jak ho můžeme použít k úpravě mapy na OpenStreetMap.

Cyklus úpravy
---------------------
Editace OpenStreetMap s JOSM je podobná editaci s iD editorem jak 
jsme viděli předtím. Ale protože JOSM je desktopová aplikace, funguje trochu
 jinak. Proces editace a přidávání do OpenStreetMap s
JOSM bude vždy následující:

1. **Stáhnout** aktuální mapové údaje z OSM
2. **Upravit** pomocí satelitních snímků, GPS, poznámek a jiných informací
3. **Uložit** změny do OpenStreetMap

Stažení dat OSM
--------------------
Prvním editačním krokem je stahovat data pro oblast světa
kterou chceme se zlepšit. Nezapomeňte, že to musíte provést pokaždé, když chcete
udělat změny mapy, protože mapa je často aktualizována jinými uživateli.

- Klikněte na "Soubor" v levém horním rohu stránky JOSM a klikněte na "Stáhnout 
    z OSM". Otevře se okno pro stahování. Můžete přistupovat
    k tomuto oknu jednoduše kliknutím na tlačítko pro stažení zobrazené
    zde:

![JOSM Download Button][]

- Po otevření okna pro stahování by se měla zobrazit mapa. Pokud nevidíte mapu, klikněte na kartu označenou
    “Slippy map”.

![JOSM Download Dialog][]

- Použijte myš k posunutí a přiblížení na oblast
    kterou znáte velmi dobře, jako je vaše rodné město, nebo okolí.
    Ovládací prvky jsou stejné jako v okně mapy JOSM. Pravé tlačítko myši
    umožňuje posunovat mapu a rolovací kolečko umožňuje přiblížení a
    oddálení.

> Někdy, pokud pracujete na přenosném počítači, může být obtížné
> posunovat a oddalovat mapu. Práce v JOSM je mnohem jednodušší, pokud máte myš,
> ale většina moderních notebooků umožňuje posouvat pomocí touchpadu.

- Nakreslete rámeček kolem oblasti, kterou chcete stáhnout. Chcete-li nakreslit nový rámeček, klikněte na
    mapu, držte levé tlačítko myši zmáčknuté a přetáhněte myš k vytvoření
    rámečku. Uvolněte tlačítko myši a dokončete kreslení rámečku.
- Pokud jste spokojeni s velikostí a polohou rámečku, klepněte na
    "Stáhnout" ve spodní části okna. JOSM dostane data pro
    tuto oblast z OpenStreetMap a otevřete ji v okně mapy k
    úpravám. 

### Přidat snímky
Pokud jste sledovali, jak jsme přidali první body s iD editorem,
pamatujte si, že pod mapovými daty byl satelitní obraz, který pomohl
identifikovat objekty na zemi. Tato fotografie pocházela od společnosti Microsoft Bing, která
velkoryse poskytuje své snímky pro uživatele OpenStreetMap, aby se mohly využít při
přispívání do mapy.

- Pokud chcete přidat satelitní snímky Bing v JOSM, klikněte na "Imagery" v horní nabídce
    JOSM a vyberte "Bing Sat".

> Pokud v nabídce Obrázky neobjevíte Bing Sat, možná je budete muset aktivovat
> v předvolbách JOSM. Přejděte na položku Upravit -> Předvolby a klikněte na ikonu
> "WMS TMS". Možná budete muset kliknout na šipku dolů a najít ji.
> <br>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
> <br>
> Klikněte na "Bing Sat". Pak klikněte na tlačítko "Aktivovat".


### Prohlídka JOSM
Nyní, když jsme stáhli data z OpenStreetMap a přidali satelitní snímky Bing,
 podívejme se ještě jednou na rozhraní JOSM.

![JOSM layout][]

Hlavní okno, které již znáte - toto je okno mapy a 
to je místo, kde se většina akce odehrává. Zde si můžete prohlédnout, upravit a
přidat nová data do OpenStreetMap.

Vpravo od okna mapy je řada panelů, z nichž každý má
vlastní funkci. Typicky při první instalaci JOSM je několik
panelů zobrazeno ve výchozím nastavení, například Vrstvy, Vlastnosti a
Výběr. Když na mapě vyberete bod, čáru nebo tvar v mapovém 
okně, zobrazí se v panelu Výběr. Informace o
objektu se zobrazí v panelu Vlastnosti a uživatelské jméno
autora daného objektu se zobrazí v panelu Autoři. 

Tyto panely lze otevřít nebo zavřít kliknutím na různá tlačítka na
 dolní levé straně JOSM. Nad těmito tlačítky vpravo nahoře jsou nástroje, které
 mění, co můžete dělat pomocí myši. Jste již s některými z nich obeznámeni,
např. nástroj Výběr a nástroj Kreslení. Pod nimi jsou nástroje, které usnadňují práci
přiblížit, smazat objekt, nakreslit tvar nebo vytvořit rovnoběžnou čáru
k jiné čáře.


Upravit
----
Takže jsme dokončili první krok v editačním procesu - stahování. Máme
připravený JOSM se satelitními snímky jako referenci. Dalším krokem je úprava
mapy a přidání nových položek.

V závislosti na oblasti, kterou jste zvolili ke stažení, může být hodně nebo velmi
málo existujících mapových dat. Všimněte si však, že se jedná o stejný druh dat jako jsme 
již dříve viděli - body, čáry a tvary, které představují místa v reálném životě.

-Použijte techniky, kterými jste se již naučili přidat na mapu několik bodů
	na místa, které znáte. Pokud uvidíte nějaké chyby, zkuste je opravit.
- Nemusíte být příliš agresivní, když se učíte. Pokud si nejste jisti
	s něčím, co je lepší nechat tak, jak je.
- Jestliže chcete přesunout bod, čáru nebo tvar, použijte
    **nástroj výběru**. Klikněte na objekt a přetáhněte jej tam, kde 
    by měl být. To lze použít k opravě umístění položek které 
    byly postaveny na špatné místo.

![JOSM select tool][]

- Použijte **kreslicí nástroj** pro kreslení nových bodů, čar a tvarů.
    Popište tyto objekty výběrem z nabídky Předvolby, jako jste 
    dělali v předchozí části. 

> Nikdy neupravujte mapu mimo oblast, kterou jste si stáhli.  
> Můžete vidět obdélníkové oblasti, které jste si stáhli. Má hladké pozadí,  
> zatímco oblast, kterou jste nestahovali, má diagonální zkosené šrafování. 
> <br>  
> ![JOSM area downloaded][]

Ukládání změn
--------------
Třetím a posledním krokem k dokončení našich úprav je nahrát změny, které máme
zapsat do databáze OpenStreetMap. Chcete-li změny uložit, musíme
být připojeni k internetu.

- V horní nabídce klikněte na "Soubor" a klikněte na "Nahrát data". To
    otevře okno pro nahrávání. K tomuto oknu můžete přistupovat také 
    jednoduše kliknutím na tlačítko pro nahrání, které je uvedeno zde:

![JOSM Upload Button][]

- Zobrazené okno zobrazí seznam objektů, které jste
    přidali a objektů, které jste upravili nebo odstranili. V kolonce na 
    v dolní části budete požádáni, abyste uvedli komentář o změnách, které 
    jste udělali. Zadejte tam popis úprav.

![JOSM Upload Dialog][]

- Klikněte na tlačítko Nahrát změny.

-Jestliže se jedná o první ukládání změn na OpenStreetMap, budete
    požádáni o své uživatelské jméno a heslo pro OpenStreetMap.
- Zadejte je do zobrazeného okna. Pokud zaškrtnete políčko
    v tomto okně, vaše uživatelské jméno a heslo budou uloženy a nebude
    potřeba do budoucna je znovu vkládat. Klepněte na tlačítko Autentifikovat.

![JOSM Authenticate][]

- Budete muset počkat několik vteřin, než se vaše změny nahrají,
    a pak už jste hotovi! Upravili jste mapu na OpenStreetMap.

> Při editaci vždy nezapomeňte nahrát změny dříve, než zavřete  
> JOSM. Dokonce i když máte ještě další úpravy, nahrajte změny a  
> pak postupujte v procesu znovu později, když máte čas na úpravu.  
> Nechcete přeci přijít o práci!

Zobrazit změny na mapě
---------------------------
- Otevřete internetový prohlížeč a přejděte na adresu [http://openstreetmap.org/](http://openstreetmap.org/)
- Přesuňte mapu na oblast, kterou jste upravili.
- Měli byste vidět změny, které se nyní zobrazují na mapě! Pokud ne,
    zkuste stisknutím kláves CTRL + R obnovit webovou stránku. Někdy se mapa
    neaktualizuje správně a musí být znovu načtena.
- Co když se vaše změny nezobrazí? Nebojte se - může to trvat jen několik
    minuty pro změny, které se mají zobrazit na mapě. Zkontrolujte také vaše
    doplnění do JOSM, abyste se ujistili, že jste je správně přidali. Dobré
    obecné pravidlo je, pokud má váš bod ikonu v JOSM, pak by to měl být
    vidět na hlavní mapě na webu OpenStreetMap.

Shrnutí
-------
Nyní, když jste viděli, jak přidat do OpenStreetMap, co bude dál? No, editace
je skvělá, ale není to jediný aspekt vytváření map. Samozřejmě také vy
se musíte naučit, jak jít ven a shromažďovat informace o místech v 
terénu.


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