---
layout: doc
title: Nastavení PostgreSQL
permalink: /cs/osm-data/postgresql/
lang: cs
category: osm-data
---

PostgreSQL & PostGIS
====================


V této kapitole si představíme PostgreSQL ve Windows, vytvoříme si databázi, ve které si můžete uložit geografická data. V této kapitole budeme používat open source GIS software QGIS, takže bylo by dobré, kdybyste se s ním už dříve seznámili. Taktéž si ukážeme, jak importovat OpenStreetMap data do PostgreSQL databáze.  

Instalace PostgreSQL a PostGIS
----------------------------------

V této sekci si nainstalujeme PostgreSQL a poté si přidáme PostGIS prostorové rozšíření. Je to velmi jednoduché díky instalatéru na jedno kliknutí. V prohlížeči si najděte stránku PostgreSQL a přejděte na stránku se souborem ke stažení <http://www.postgresql.org/download/>  

![postgresql website][]

Zde můžete nalézt instrukce k instalaci pro různé operační systémy. Klikněte na odkaz “**Windows**”.  
Tato stránka vysvětluje, co instalátor provede. Nainstalují se tři různé komponenty:  

* **PostgreSQL server**:  Software databáze, hlavní komponent  
* **pgAdmin 4**: Grafické rozhraní pro správu databází  
* **StackBuilder**: Nástroj pro přidávání dalších aplikací; Použijeme ho k přidání PostGIS rozšíření  

Klikněte na **Download**.  

![postgresql download][]

Zobrazí se několik různých možností instalátoru pro různé verze softwaru PostgreSQL. Stáhněte si nejnovější verzi pro vaši verzi systému Windows.

![postgresql version][]

Po stažení spusťte instalátor.  

![install 1][]

Pomocí “**Next**” se proklikejte instaličním průvodcem. Přednastavené možnosti jsou vyhovující. Bude potřeba poskytnout heslo pro prvního uživatele databáze (uživatelské jméno je postgres). Tento uživatel má superuser práva, což znamená, že může dělat všechno, tak nezapomeňte heslo, které zadáte.  

> Pomocí Postgresql můžete vytvořit tolik databází kolik chcete. Můžete mít databázi pro vaše geografická data a zvlášť databázi pro další projekty, na kterých pracujete. A možná budete chtít, aby každý člověk měl jiné práva k databázím. Pro tento případ používá každá vámi vytvořená databáze koncept **uživatelů** a **rolí**. Každá databáze musí být vlastněna nějakým uživatelem, který obvykle potřebuje heslo k editaci databáze. Dalším uživatelům může být uděleno právo k přístupu do databáze a přiřazena určitá role. Například potřebujete uživatele, který může pouze číst informace z databáze, ale nemůže je změnit. Nebo jiný uživatel může data přidávat, ale nemůže je mazat. Pomocí uživatelů a jejich rolí je tohle možné udělat. Prozatím si s tím nebudeme zatěžovat hlavu, ale pamatujte si, že vaše databáze je vlastněna **uživatelem** a pro přístup do databáze budete potřebovat uživatelské jméno a heslo. První uživatel, kterého vytvoříme (pojmenovaný postgres) je tzv. **superuser** a má veškerá práva k databázi.  

Jakmile se proklikáte průvodcem instalace a přijmete přednastavenou konfiguraci, průvodce za vás vše nainstaluje. Může to trvat pár minut.  

Jakmile je vše nainstalováno, průvodce se vás zeptá, zda chcete spustit StackBuilder, což je nástroj pomocí kterého je možné nainstalovat PostGIS. Ujistěte se, že políčko je zaškrtnuto než kliknete na “**Finish**.”  

![install 2][]

Nyní máme úspěšně nainstalován PostgreSQL a potřebujeme přidat rozšíření PostGIS. Jakmile se otevře průvodce StackBuilder, vyberte vaši instalaci PostgreSQL z rozbalovací nabídky a klikněte na **Next**. Okno vypadá nějak takhle:  

![install 3][]

Rozbalte si záložku “Spatial Extensions” a zaškrtněte políčko u PostGIS. V době psaní tohoto článku ma PostGIS verzi 2.1.  

![install 4][]

Klikněte na “Next”, rozšíření se stáhne a nainstaluje. Jakmile budete dotázáni klikněte na “**I Agree**”, čímž přijmete pravidla a podmínky.  

Instalátor PostGIS se zeptá na několik otázek, ale přednastavené odpovědi jsou vpořádku. Tentokrát si nechte automaticky vytvořit první databázi, ale v další části si ji vytvoříme sami. Aby se mohla spustit instalace PostGIS, je potřeba zadat heslo pro postgres, které jste si vytvořili při instalaci PostgreSQL.  

![install 5][]

Při dotazu na registraci proměnné prostředí **GDAL_DATA**, klikněte na "**Yes**."  

![install 6][]

Po dokončení instalace, klikněte na “**Close**” a poté “**Finish**.”  

Vytvoření databáze
--------------------

Nyní, když jsme nainstalovali veškerý potřebný software, vytvoříme databázi. Použijeme program pgAdmin 4, což je grafický databázový klient, který je užitečný pro dotazování a úpravy databází.
databází.  

![pgadmin3][]

PgAdmin 4 je oficiální klient pro PostgreSQL a umožňuje používat jazyk SQL k manipulaci s tabulkami dat. Databáze je možné vytvářet a manipulovat s nimi také z příkazového řádku, ale prozatím je pgAdmin 4 snadným způsobem, jak začít.  

Otevřete pgAdmin 4. Měl by se nacházet v nabídce Start pod položkou Všechny programy -> PostgreSQL 9.3 > pgAdmin 4.  

![pgadmin3 start][]

Vlevo v panelu v seznamu Servers, klikněte pravým tlačítkem na PostgreSQL a vyberte “**Connect**.”  

![postgresql connect][]

Zadejte heslo uživatele postgres, vytvořili jste si ho při instalaci softwaru. Pamatujte si, že uživatelské jméno a heslo je potřeba k vytvoření a přístupu do databáze.  

![enter password][]

Klikněte pravým tlačítkem na **Databases** a vyberte **New Database**...  

![new database][]

Při vytváření databáze je potřeba zadat několik informací: název a vlastníka. V záložce Properties zadejte  název nové databáze. V našem příkladu dáme databázi název gisdb. Měli bychom určit i vlastníka databáze. Jelikož zatím máme jen jednoho uživatele, nastavíme tedy vlastníkem postgres. (Poznámka: z bezpečnostního hlediska je lepší vytvořit uživatele bez práv superuser, ale teď se tím nebudeme zatěžovat.)  

![new database form][]

<!-- Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This will create our database with the proper spatial columns. -->

Kliknutím na tlačítko **OK** vytvoříte databázi. Nyní uvidíte svou databázi v seznamu "**Databáze**". Nyní musíme spustit příkaz pro povolení databáze s rozšířeními PostGIS. Klikněte na ![tlačítko sql][]{: height="24px"} v horní části aplikace PgAdmin 4.  



Do okna query zadejte:  

**CREATE EXTENSION postgis;**  

Poté klikněte na tlačítko "**Execute query**" .  

![postgis command][]

Načtení ukázkových dat (nepovinné)
---------------------------

Pokud jste to dosud zvládli v pohodě a rozumíte QGIS, pojďme nahrát nějaká data do naší nové databáze. Uděláme to pomocí nástroje, který převede shapefiles a načte je do databáze.  

Ujistěte se, že je v panelu vlevo vybrána nová databáze, a přejděte na **Plugins -> PostGIS Shapefile and DBF loader 2.x**.

![shapefile loader][]

-	Klikněte na “**Add File**” a najděte shapefile na svém disku.
-	Pokud nemáte žádný shapefiles, můžete si stáhnout náš ukázkový [odsud](/files/buildings_sample.zip).
-	Jakmile soubor najdete, klikněte na “**Import**.” Pokud vše proběhne v pořádku, v log windows se vypíše “**Shapefile import completed**.”

![add shapefile][]

Teď si načteme data z databáze do aplikace QGIS. Pokud jej nemáte, můžete jej stáhnout z [webu QGIS](http://www.qgis.org/site/forusers/download.html).  

-	Otevřete QGIS a klikněte na tlačítko ![qgis add postgis button][]{: height="24px"}.  
-	V nabídce “Connections” klikněte na “**New**.”  
-	Zadejte název připojení. V našem případě **gisdb** (můžete si zadat vlastní). Uživatelské jméno postgres a vaše heslo o políčko níže.  

![connection settings][]

-	Klikněte na **OK** a tím uložíte nastavení.  Poté na “Connect” a připojíte se k vašemu PostgreSQL serveru. Asi bude potřeba zadat vaše uživatelské jméno a heslo.  
-	Pokud všechno dopadne dobře, uvidíte shapefile vrstvu (nebo více vrstev s různými typy funkcí) kterou jste si nahráli do databáze. Vyberte tuto vrstvu a klikněte na “**Add**”, čímž ji přidáte do mapy.  

![your data layer][]

Po přidání vrstvy je potřeba vybrat souřadnicový systém, ve které se data zobrazí. Nejspíš vyberete WGS 84, což je souřadnicový systém, který používá OpenStreetMap.  

> Vrstva se chová stejně, jako kdybyste nahráli shapefile přímo do QGIS. Jediný rozdíl je v tom, že pokud vrstvu upravíte, změny se uloží do databáze.  

Shrnutí
-------

Teď když víte, jak si nastavit PostgreSQL a PostGIS a vytvořit novou databázi, je na čase vyzkoušet nástroje pro import zdrojových OSM dat do databáze. Na to se podíváme v [příští kapitole](/en/osm-data/osm2pgsql).  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







