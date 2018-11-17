---
layout: doc
title: Uruchamianie bazy PostgreSQL
permalink: /pl/osm-data/postgresql/
lang: pl
category: osm-data
---

PostgreSQL i PostGIS
====================

> Ten przewodnik może zostać pobrany jako [PostgreSQL_pl.odt](/files/PostgreSQL_pl.odt) lub [PostgreSQL_pl.pdf](/files/PostgreSQL_pl.pdf)  
> Przejrzano 10.09.2016

W tym rozdziale zobaczymy, jak uruchomić PostgreSQL w systemie Windows i jak utworzyć bazę danych, w której będziesz mógł przechowywać dane geograficzne. Będziemy używać w tym rozdziale otwartoźródłowego programu GIS o nazwie QGIS, więc dobrze, jeśli już jesteś z nim zaznajomiony. W kolejnym rozdziale zobaczymy, jak zaimportować dane OpenStreetMap do bazy danych PostgreSQL.  

Instalowanie PostgreSQL i PostGIS
----------------------------------

W tej części zainstalujemy PostgreSQL i dodamy rozszerzenie przestrzenne PostGIS. Jest to dość łatwo zrobić jednym kliknięciem używając odpowiedniego instalatora. Przejdź w swojej przeglądarce internetowej do strony pobierania PostgreSQL <http://www.postgresql.org/download/>  

![postgresql website][]

Znajdziesz tutaj wskazówki do instalacji w różnych systemach operacyjnych. Kliknij link "**Windows**".  
Ta strona wyjaśnia, co zrobi szybki instalator. Zainstaluje on trzy różne komponenty:  

* **Serwer PostgreSQL**:  Oprogramowanie bazodanowe, główny komponent  
* **pgAdmin III**: Interfejs graficzny do zarządzania Twoimi bazami danych  
* **StackBuilder**: Narzędzie do dodawania dodatkowych aplikacji; użyjemy tego, aby dodać rozszerzenie PostGIS  

Kiknij **Download**.  

![postgresql download][]

Zobaczysz kilka różnych opcji instalatorów dla różnych wersji oprogramowania PostgreSQL. Pobierz najnowszą wersję. W momencie pisania tego artykułu, jest to wersja 9.3.1. Kliknij na przycisku **Win x86-32**. Jest to instalator dla 32-bitowych wersji systemu Windows.  

![postgresql version][]

Kiedy pobieranie zostanie ukończone, uruchom instalator.  

![install 1][]

Klikaj "**Next**", aby przejść przez kreator instalacji. Domyślne opcje powinny być dobre. Będziesz musiał podać hasło dla pierwszego użytkownika bazy danych (użytkownik to postgres). Ten użytkownik ma prawa superużytkownika, co oznacza, że może zrobić wszystko, co chce, więc nie zapomnij hasła, którego użyłeś!  

> Przy użyciu Postgresql możesz utworzyć tyle baz danych, ile tylko chcesz. Możesz mieć bazę danych dla swoich danych geograficznych i osobne bazy danych dla innych projektów, nad którymi pracujesz. Możesz także dać różnym ludziom różne rodzaje dostępu do tych baz. Dlatego każda baza danych, którą utworzysz używa koncepcji **użytkowników** i **ról**. Baza musi zawsze mieć właściciela i zazwyczaj ten użytkownik będzie potrzebował hasła, aby dokonać w niej zmian. Dodatkowo użytkownik może mieć nadane uprawnienia do dostępu do bazy danych oraz konkretne role. Na przykład, możesz chcieć stworzyć użytkownika, który może tylko odczytywać informacje z bazy, ale nie może ich zmieniać. Albo możesz mieć użytkownika, który może dodawać dane, ale nie może ich usuwać. Z użytkownikami i rolami jest to możliwe. Teraz nie będziemy się tym za bardzo przejmować, więc po prostu zapamiętaj, że właścicielem Twojej bazy danych jest **użytkownik**, a do uzyskania dostępu do niej potrzebujesz nazwy użytkownika i hasła.  Pierwszy użytkownik, którego stworzyliśmy (nazwany postgres) jest **superużytkownikiem**, co oznacza, że ma uprawnienia do zrobienia wszystkiego z bazą.  

Kiedy przeklikasz kreator i zaakceptujesz domyślne opcje konfiguracji, to kreator zainstaluje Ci wszystko. Może to zająć klika minut.  

Po zakończeniu instalacji, kreator zapyta Cię, czy chcesz uruchomić StackBuilder, narzędzie, które pozwoli nam zainstalować PostGIS. Zanim klikniesz "**Finish**" upewnij się, że pole jest zaznaczone.  

![install 2][]

Mamy teraz zainstalowane PostgreSQL i potrzebujemy dodać rozszerzenie PostGIS. Kiedy otworzy się kreator StackBuilder, wybierz z rozwijanego menu swoją instalację PostgreSQL i kliknij **Next**. Będzie to wyglądać podobnie, jak tutaj:  

![install 3][]

Otwórz zakładkę "Spatial Extensions" i zaznacz pole przy PostGIS. W momencie pisania tego artykułu, najnowszą wersją PostGIS była 2.1.  

![install 4][]

Kliknij **Next**, aby pobrać i zainstalować rozszerzenie. Kiedy wyskoczy okno z pytaniem o zgodę na regulamin, kliknij "**I Agree**", aby go zaakceptować.  

Instalator PostGIS zada kilka pytań, ale w zasadzie domyślne opcje będą odpowiednie. Możesz pozwolić mu utworzyć pierwszą bazę danych automatycznie, ale za chwilę nauczymy się to robić samemu. Aby rozpocząć instalację PostGIS musisz podać hasło użytkownika postgres, które utworzyłeś przy instalacji PostgreSQL.  

![install 5][]

Jeśli zostaniesz zapytany o zarejestrowanie zmiennej środowiskowej **GDAL_DATA**, kliknij "**Yes**".  

![install 6][]

Po ukończeniu instalacji kliknij "**Close**", a anstępnie "**Finish**".  

Tworzenie bazy danych
--------------------

Teraz, kiedy mamy zainstalowane wszystkie potrzebne programy, możemy utworzyć bazę danych. Użyjemy pgAdmin III, który jest graficznym klientem bazodanowym i jest przydatny przy zapytaniach i modyikacjach
baz danych.  

![pgadmin3][]

PgAdmin III jest oficjalnym klientem dla PostgreSQL i pozwala używać języka SQL do przetwarzania tabel z Twoimi danymi. Umożliwia również tworzenie i przetwarzanie baz danych z wiersza poleceń, ale póki co, pgAdmin III jest łatwym sposobem na rozpoczęcie.  

Otwórz pgAdmin III. Powinien znajdować się w menu Start we Wszystkie programy -> PostgreSQL 9.3 > pgAdmin III.  

![pgadmin3 start][]

W panelu po lewej stronie, pod Serwerami, kliknij prawym przyciskiem myszy PostgreSQL i kliknij "**Connect**".  

![postgresql connect][]

Wprowadź hasło użytkownika postgres, które utworzyłeś podczas instalacji. Pamiętaj, że nazwa użytkownika i hasło są wymagane do tworzenia i dostępu do bazy danych.  

![enter password][]

Kliknij prawym przyciskiem myszy na **Databases** i wybierz **New Database**...  

![new database][]

Musisz podać trochę informacji, aby utworzyć nową bazę danych: nazwę i właściciela. W zakładce Properties, nadaj nazwę bazie. W tym przykładzie, nazwiemy naszą bazę danych gisdb. Powinniśmy również nadać naszej bazie właściciela. Skoro na razie mamy tylko jednego użytkownika, dajmy bazie użytkownika postgres jako właściciela. (Uwaga: ze względów bezpieczeństwa dobrze jest tworzyć użytkowników bez uprawnień superużytkownika, ale na razie nie będziemy się tym przejmować).  

![new database form][]

<!-- W zakładce Definition pozostaw domyślne wartości, ale obok Template wybierz template_postgis. Pozwoli to utworzyć naszą bazę danych z odpowiednimi kolumnami przestrzennymi. -->

Kliknij **OK**, aby utworzyć bazę danych. Zobaczysz teraz Twoją bazę na liście poniżej "**Databases**". Musimy teraz uruchomić polecenie, aby uaktywnić rozszerzenie PostGIS dla bazy. Kliknij ![sql button][]{: height="24px"} na górze PgAdmin III.  



W oknie zapytania wpisz:  

**CREATE EXTENSION postgis;**  

Następnie kliknij przycisk "**Execute query**".  

![postgis command][]

Ładowanie przykładowych danych (opcjonalne)
---------------------------

Jeżeli dobrze Ci poszło i znasz już QGIS, to chodźmy dalej i załadujmy dane do naszej nowej bazy. Aby to zrobić użyjemy funkcji, która konwertuje pliki shape i ładuje je do bazy danych.  

Upewnij się, że w panelu po lewej jest wybrana Twoja nowa baza danych i przejdź do **Plugins -> PostGIS Shapefile and DBF loader 2.1**.

![shapefile loader][]

-	Kliknij "**Add File**" i znajdź plik shape w swoim komputerze.
-	Jeśli nie masz żadnych plików shape, możesz pobrać przykładowy [tutaj](/files/buildings_sample.zip).
-	Po wybraniu pliku kliknij "**Import**". Jeżeli wszystko przebiegło pomyślnie, zobaczysz wynik "**Shapefile import completed**".

![add shapefile][]

Teraz załadujmy dane z naszej bazy danych do aplikacji QGIS. Jeżeli jej nie masz, możesz ją pobrać ze [strony internetowej QGIS](http://www.qgis.org/site/forusers/download.html).  

-	Otwórz QGIS i kliknij przycisk ![qgis add postgis button][]{: height="24px"}.  
-	Poniżej "Połączeń" na górze kliknij "**Nowy**".  
-	Nadaj nazwę nowemu połączeniu. W polu baza danych wpisz **gisdb** (lub taką nazwę, jaką nadałeś bazie). Poniżej wprowadź nazwę użytkownika postgres i swoje hasło.  

![connection settings][]

-	Kliknij **OK**, aby zapisać parametry połączenia. Następnie naciśnij "Połącz", żeby połączyć się ze swoim serwerem PostgreSQL. Możesz zostać poproszony ponownie o nazwę użytkownika i hasło.  
-	Jeżeli wszystko pójdzie dobrze, zobaczysz warstwę z pliku shape (lub wiele warstw z różnymi rodzajami obiektów), który załadowałeś do bazy danych. Wybierz warstwę i kliknij "**Dodaj**", aby dodać ją do mapy.  

![your data layer][]

Po dodaniu warstwy będziesz musiał wybrać system odniesienia, w którym będą wyświetlane dane. Najprawdopodobniej będzie to WGS 84, który jest używany przez OpenStreetMap.  

> Warstwa będzie zachowywać się tak samo, jak po bezpośrednim załadowaniu pliku shape do QGIS. Jedyną różnicą jest to, że zmiany dokonane na tej warstwie będą zapisane w Twojej bazie danych.  

Podsumowanie
-------

Teraz, kiedy wiesz już, jak uruchomić PostgreSQL i PostGIS oraz jak stworzyć nową bazę danych, jesteś gotowy do sprawdzenia narzędzi, które pozwalają nam na importowanie surowych danych OSM do bazy danych. Przyjrzymy się temu w [następnym rozdziale](/pl/osm-data/osm2pgsql).  



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







