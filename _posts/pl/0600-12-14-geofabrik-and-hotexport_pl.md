---
layout: doc
title: Korzystanie z Geofabrik i HOT Export
permalink: /pl/osm-data/geofabrik-and-hot-export/
lang: pl
category: osm-data
---

Korzystanie z Geofabrik i HOT Export
================


Po nauce dodawania i edytowania danych w OpenStreetMap (OSM), możesz chcieć pozyskać te dane jako kopię zapasową lub do przetwarzania z wykorzystaniem oprogramowania Geographic Information System, które jest otwartoźródłowe takim, jak Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

Pozyskiwanie danych OSM ze strony Geofabrik
-------------------------------------

Dane OSM mogą być łatwo pozyskane przez pobranie ich ze strony [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Dane są podzielone na kilka regionów. Indonezję można znaleźć jako część Azji, klikając na podregionie Azja w niebieskiej tabeli, a wtedy strona będzie wyglądała tak.  

![geofabrik-asia][]

Po pojawieniu się na górze strony, zobacz, jak podregion dzieli się na kraje Azji. Aby pobrać dane musisz kliknąć na Indonezji w niebieskiej tabeli, a wtedy będzie to wyglądać tak.  

![geofabrik-indonesia][]

Jeżeli chcesz zdobyć indonezyjskie dane w pliku formatu shape (.shp) kliknij na linku indonesia-latest.shp.zip, a rozpocznie się pobieranie pliku. Jest kilka formatów, w których możesz pobierać dane. Najpopularniejszym jest format plików shape (shp) z warstwami punktów, polilinii i wielokątów.  

Możesz sprawdzić datę ostatniej aktualizacji danych. Miej na uwadze, że dane na serwerze są aktualizowane co 24 godziny, więc jeśli dopiero co wgrałeś dane do OSM, to nie pojawią się one automatycznie kiedy pobierzesz dane, ale musisz poczekać na następną aktualizację na serwerze.  

Pobieranie danych OSM na stronie narzędzia HOT Export
--------------------------------------

[Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) stworzył usługę internetową, która pozwala użytkownikom na tworzenie niestandardowych wyciągów z OSM dla każdego miejsca na świecie poprzez wybieranie obszaru zainteresowania, obiektów mapy i formatów plików. W ciągu kilku minut aktualne dane OSM są eksportowane, filtrowane i konwertowane. Ta sekcja jest przewodnikiem po narzędziu Export. Te informacje można znaleźć też w sekcji '[Nauka](https://export.hotosm.org/pl/v3/learn)' na stronie export.hotosm.org.

![hot-export-tool][]

## Szybki start

Każdy może utworzyć niestandardowy eksport z OpenStreetMap w narzędziu Export - wystarczy założyć konto. Możesz zarejestrować się używając konta OpenStreetMap ze strony openstreetmap.org i aktualnego adresu email, który zostanie użyty do wysłania linka do Twojego eksportu, kiedy będzie już gotowy.

## Określ obszar zainteresowania

Jest wiele sposobów na wybranie Obszaru zainteresowania (AOI) w narzędziu Export. Są to między innymi wpisanie i wyszukiwanie, określenie współrzędnych ramki ograniczającej, rysowanie ramki ograniczającej, swobodne rysowanie wielokąta, użycie aktualnego widoku, czy wgranie pliku geojson.

![export-tool-create][]

Kiedy jesteś 'zalogowany' do narzędzia HOT Export, karta 'Utwórz' staje się aktywna. Karta 'Utwórz', to miejsce, gdzie wprowadzasz ustawienia swojego eksportu, przez opisywanie go po lewej stronie i wybieranie AOI na mapie po prawej stronie. 

![export-tool-describe][]

### Pasek wyszukiwania
Jest 6 sposobów na określenie AOI dla Twojego eksportu. Pierwszy i drugi używają paska wyszukiwania, który może służyć do znajdowania miejsc przez wpisywanie ich nazw i wybieranie ich z listy poniżej lub przez definiowanie współrzędnych ramki ograniczającej. Współrzędne minimalnego X, minimalnego Y, maksymalnego X i maksymalnego Y (zachód, południe, wschód, północ) dla poszczególnych krajów można znaleźć [w pliku CSV dostarczanym przez Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitalizacja 
Trzeci i czwarty sposób w jaki można wybrać AOI w narzędziu Export, to rysowanie ramki ograniczającej przez wybranie opcji 'Ramka' z kolumny narzędzi po prawej stronie ekranu. Możesz także narysować dowolny wielokąt bezpośrednio na mapie wybierając narzędzie 'Rysuj'.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Wgraj wielokąt
Ostatnie dwie metody na określenie AOI wykorzystują narzędzie 'Ten widok' po prawej stronie mapy, które przechwytuje obszar aktualnego widoku mapy i narzędzie 'Importuj', które pozwala przesłać wielokąt obszaru.  

![export-tool-area-view][]
![export-tool-area-import1][]


Importowany wielokąt musi być plikiem GeoJSON w systemie współrzędnych WGS84. Jednym ze sposobów utworzenia pliku GeoJSON jest użycie strony geojson.io. Kiedy wybierzesz obszar w  [geojson.io](http://geojson.io/), skopiuj tekst z okna po prawej stronie, wklej go do wybranego edytora, jak np. [Atom](https://atom.io/) i zapisz swój plik GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Plik GeoJSON musi być nieco edytowany, aby został zaakceptowany przez narzędzie Export. Zwróć uwagę, że w pliku nie może być wielokątów złożonych. W najprostszej formie plik musi stwierdzać, że to jest "type: Poligon" i zawierać listę współrzędnych punktów/węzłów, które określają obszar. Wtedy plik GeoJSON może zostać prawidłowo przetworzony przez narządzie i użyty do określenia AOI.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Wybieranie formatu pliku

Narzędzie pozwala wyciągać dane OSM przez Overpass API w jego natywnym formacie Protocol Buffer Binary (PBF) przed filtrowaniem danych pod kątem obiektów mapy i powiązanych tagów określonych przez użytkownika. Po przefiltrowaniu dane są konwertowane do jednego z formatu plików, wybranego przez użytkownika.  

Aktualnie narzędzie może konwertować dane OSM do plików Shape .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf i MBTiles .mbtiles. Przynajmniej jeden z tych formatów musi zostać wybrany, aby utworzyć eksport, ale nie ma ograniczenia, jak wiele z nich może być wybranych, co można zrobić zaznaczjąc wiele pól.

![export-tool-file-formats][]


### Plik Shape .shp
Pliki shape, to tabelaryczny format zaprojektowany przez Esri. Są najpopularniejszym formatem plików danych GIS. Plik shape, to tak na prawdę 3-4 pojedyncze pliki, spakowane razem jako archiwum ZIP. Pliki shape mają konkretne ograniczenia takie, jak rozmiar pliku, ograniczony do 2 gigabajtów (GB) i długość nazwy kolumny  limitowana do 10 znaków. Przeczytaj więcej o [plikach shape .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) w sekcji Nauka.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackage zawierają dane przestrzenne w pojedynczej bazie danych SQLite. Geopackage są bardzo podobne do baz danych SQLite z dodatkiem Spatialite. Powinny dać się używać w większości aplikacji GIS. Geopackage obsługuje praktycznie nieograniczony rozmiar pliku i liczbę kolumn w tabeli oraz a pełne wsparcie dla Unicode. Te pliki są idealne zwłaszcza jeśli potrzebujesz wykonywać zapytania SQL na danych. Przeczytaj więcej o [Geopackage .gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) w sekcji Nauka.

![export-tool-sql][]


### Garmin .img
Plik .IMG zawiera wszystkie informacje niezbędne do wyrenderowania mapy na urządzeniach mobilnych Garmin GPS. Zwróć uwagę, że styl kartograficzny pliku .img i obiekty wybrane na mapie są niezależne od wyboru obiektów przesłanych do narzędzia Export - zamiast tego, używany jest domyślny styl dla wszystkich danych OSM. Przeczytaj więcej o [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) w sekcji Nauka.

![export-tool-garmin][]


### Google Earth .kml
Keyhole Markup Language (KML) jest opartym na XML formatem do modelowania punktów, linii, wielokątów i geograficznie powiązanych właściwości. Google Earth jest najszerzej znaną platformą do przeglądania widoków Ziemi używającą KML, co jest także powodem, dla którego stworzono ten format. Przeczytaj więcej o [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) w sekcji Nauka.

![export-tool-google-earth][]


### OSM .pbf
Obowiązującym w OSM formatem danych jest dokument XML z węzłami, liniami i relacjami. Protocol Buffer Binary Format (PBF) jest zoptymalizowaną reprezentacją XML OSM, który zajmuje mniej miejsca na dysku i jest szybszy w odczycie. Ten format jest kompatybilny tylko z konkretnymi narzędziami OSM, takimi jak oprogramowanie do edycji OSM. Każdy .PBF dostarczany przez narzędzie Export powinien być referencyjnie kompletny - co oznacza, że każdy węzeł, linia lub relacja odniesiona do linii lub relacji pojawi się w pliku PBF. Przeczytaj więcej o [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) w sekcji Nauka.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me to nawigacja GPS i aplikacja mapowa dla smartfonów i tabletów z Androidem oraz iOS, wspierająca zwłaszcza mapy i nawigację w trybie offline. Przeczytaj więcej o [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) w sekcji Nauka. Aby używać niestandardowych eksportów w Maps.me na Androidzie, wykonaj następujące kroki:
- Otwórz Maps.me i przejdź do interesującego Cię obszaru
- Zaakceptuj podpowiedź Maps.me i pobierz oferowany region
- Zamknij Maps.me
- Utwórz eksport MWM
- Pobierz eksport, rozpakuj go i skopiuj plik .mwm na swoje urządzenie
- Używając Menedżera plików Androida przejdź do lokalizacji zawierającej plik .mwm
- Przytrzymaj długo palec, aby go zaznaczyć i dotknij przycisk "kopiuj" lub "wytnij"
-Przejdź do "MapsWithMe" i otwórz folder o największym numerze (np. 170917)
- Skopiuj/przenieś swój plik .mwm do tego katalogu dotykając przycisku "wklej"
- Usuń istniejący plik .mwm wybranego wcześniej obszaru zapamiętując jego nazwę
- Zmień nazwę swojego pliku .mwm przez długie dotknięcie (zaznaczenie) i kliknięcie przycisku "więcej" (3 poziome kropki) tak, aby odpowiadał nazwie regionu pobranego przez Maps.me (ten który usunąłeś przed chwilą) 
- Otwórz Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd także jest nawigacją GPS i aplikacją mapową dla smartfonów oraz tabletów z Androidem i iOS, szczególnie wspierającą renderowanie, wyznaczanie trasy i szukanie w trybie offline. Przeczytaj więcej o aplikacji i wielu funkacjach [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) na jej głównej stronie. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles to format plików do przechowywania kafelków mapy w jednym pliku. Narzędzie Export pozwala utworzyć użytkownikowi MBTiles zawierające kafelki z OSM, które mogą być użyte jako źródło w aplikacjach offline obsługujących je. Zauważ, że MBTiles zawierają wszystkie obiekty OSM w wybranym przez narzędzie Export obszarze zainteresowania, kiedy karta '3 Dane' automatycznie zmienia się w rozwijane menu z wyborem opcji i zakresu powiększenia, zamiast standardowego drzewa tagów i wyboru obiektów YAML. Przeczytaj więcej o [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) w sekcji Nauka.

![export-tool-mbtiles][]


Dodatkowe formaty plików są na bieżąco omawiane i wprowadzane do narzędzia Export. Jeżeli jest jakiś format plików, który chciałbyś, aby był dodany w przyszłości, dodaj komentarz w repozytorium na [GitHubie](https://github.com/hotosm/osm-export-tool/issues). Więcej szczegółowych informacji o każdy formacie plików znajdziesz na stronie 'Formaty plików' w sekcji '[Nauka](https://export.hotosm.org/en/v3/learn)' strony tego narzędzia.



## Dopasowywanie obiektów mapy

Narzędzie pozwala użytkownikowi na dostosowanie wyboru danych w określonym obszarze zainteresowania. Dane OSM są określane przy użyciu filtrów tagów i wyboru kluczy w Drzewie tagów lub Formularzu YAML. Drzewo tagów jest przydatne dla popularnych przypadków, dzięki określonej liście zestawów filtrów i wyborów, podczas gdy konfiguracja YAML pozwala w pełni kontrolować filtry i wybory przy użyciu definicji filtrów podobnych do SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM jest otwartą globalną bazą danych otagowanych obiektów geograficznych, składającą się z trzech rodzajów elementów:
Węzłów, które reprezentują punkty na powierzchni ziemi
Linii, które są zestawami węzłów, które mogą tworzyć linie i wielokąty
Relacji, które są zestawami węzłów, linii lub innych relacji

Każdy z tych elementów może mieć dowolną ilość tagów w formacie klucz=wartość. Na przykład urząd pocztowy może być pokazany jako linia z tagami building=yes i amenity=post_office. Zobaczmy, jak te tagi mogą być określone w narzędziu Export do odfiltrowania danych OSM przy użyciu Drzewa tagów i Formularza YAML.

### Drzewo tagów
Drzewo tagów jest najprostszą metodą na rozpoczęcie wybierania obiektów, przez zwykłe zaznaczanie pól wyboru przy tych, których potrzebujemy. Zauważ, że zaznaczenie nadrzędnego pola dołączy dodatkowe tagi klucz=wartość powiązane z nim tak samo, jak zaznaczenie podrzędnego pola wyboru poniżej. Każde nadrzędne pole wyboru ma inne zapytanie filtrujące dane, więc jest zalecane, żeby przejrzeć składnię każdego z nich poprzez najechanie myszką, co wyświetli więcej informacji po prawej stronie.  

![export-tool-treetag-sql][]


Na przykład, wybranie nadrzędnego pola 'Ratownictwo' spowoduje automatyczne zaznaczenie podrzędnych pól wyboru 'Komisariat policji', 'Stacja pogotowia ratunkowego' i 'Remiza strażacka' oraz dodatkowo wybranie wszystkich tagów z emergency=yes, amenity=police i amenity=fire_station poprzez następujące zapytanie SQL:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Nadrzędne pola wyboru nie zawsze pokazują, to co znajduje się na kolejnym poziomie tak, aby spróbować uwzględnić wszystkie możliwe tagi powiązane z tematem. Tagi OSM wciąż ewoluują, a my chcemy zapewnić, że narzędzie będzie przystosowywać się do tych zmian. Tylko najczęściej używane tagi klucz=wartość są przedstawione jako podrzędne pola wyboru, a nadrzędne pola wyboru próbują objąć te, które nie są używane zbyt często, ale należą do tematu. Jeżeli masz sugestie zmian tych tematów i tagów, dodaj komentarz w [arkuszu](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) używanym do wypełniania Drzewa tagów, a my postaramy się włączyć je według potrzeb.

![export-tool-treetag-spreadsheet][]


### Formularz YAML
Używanie konfiguracji YAML pozwala w pełni kontrolować stosowanie filtrów na danych OSM poprzez używanie definicji tagów klucz=wartość opartych na SQL. Zwróć uwagę, że Drzewo tagów również generuje składnię dla YAML, więc każde zaznaczone pole wyboru będzie automatycznie generować wpis w polu YAML. Jest to punkt startowy dla zapytanie, które może być później edytowane. 

![export-tool-treetag-yaml][]


Użycie YAML zostało wybrane ze względu na prostotę i kompatybilność z SQL. Format wyboru obiektów YAML jest podobny do plików stylu używanych przez programy takie, jak osm2pgsql i imposm. Rozpoznaje on białe znaki, więc każdy podrzędny element jest wcięty względem swojego rodzica i poprzedzony myślnikiem. Po myślniku musi wystąpić spacja. Tutaj jest podstawowy przykład wyboru obiektów z 3 tematów: budynków, dróg wodnych i szpitali:

![export-tool-yaml-code1][]


YAML ma Tematy i dwie struktury danych, Mapowanie i Listy
Temat w powyższym przykładzie sto: budynki
Mapowanie w powyższym przykładzie to: rodzaje i wybór 
Listy w powyższym przykładzie to: potomkowie wyboru i rodzaje

YAML: Tematy
Kluczami najwyższego rzędu w dokumencie YAML są Tematy składające się z prawidłowych znaków, czyli liter, cyfr i podkreśleń. 

YAML: Rodzaje geometrii
Lista wartości mapowanych rodzajów może mieć jeden lub więcej z '- punktów', '- linii', '- wielokątów'. Jeżeli klucz rodzaju zostanie pominięty, to wszystkie trzy typy geometrii będą włączone do tematu.

YAML: Wybieranie kolumn
Lista elementów mapowanych kluczy wyboru określa kolumny każdego tematu. Poniższy przykład wypełni kolumny 'name' i 'amenity' ich wartościami z OSM:

![export-tool-yaml-code2][]


YAML: Filtry
Filtry znajdują się pod kluczem where: w każdym temacie. Określają one jaki podzbiór obiektów OSM należy do tematu. Kolejny przykład odfiltruje temat do obiektów, dla których klucz natural ma wartość waterway:

![export-tool-yaml-code3][]


Zwróć uwagę, że prawie zawsze jest potrzebny jakiś rodzaj filtrowania, inaczej temat będzie po prostu zawierał wszystkie obiekty OSM dla danego typu geometrii. Filtr określa się używając składni bazującej na SQL, ze słowami kluczowymi IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Szablony JOSM
Starsze wersje narzędzia Export używały szablonów JOSM w plikach .XML do definiowania wyboru obiektów. Nowa wersja używa YAML, ponieważ jest on bardziej elastyczny w transformowaniu danych OSM. Nowe narzędzie Export może jednak pomóc skonwertować szablon JOSM do konfiguracji YAML przez kliknięcie przycisku 'Załaduj z szablonu JOSM .XML'. Miej na uwadze, że jeśli szablon jest bardziej złożony, może być potrzebne napisanie nowej konfiguracji YAML bazując na elementach 'item' zawartych w XML.

![export-tool-load-preset][]



### Konfiguracje

Konfiguracja YAML może być zdefiniowana i zapisana na do przyszłego użycia na stronie 'Konfiguracja'. Dobrze jest utworzyć jedną konfigurację do projektu, która może być później użyta do wszystkich eksportów związanych z tym projektem. Nadaj konfiguracji 'nazwę' i 'opis', które ułatwią odnalezienie jej przez innych użytkowników. Odznaczenie pola 'Publiczna' uczyni konfigurację widoczną tylko dla użytkownika. 

![export-tool-configuration-saved][]


Zauważ, że konfiguracja może być edytowana, co jest użyteczne przy ewolucji wyboru obiektów podczas trwania projektu. Zapisana konfiguracja YAML może być wybrana przez opcję 'Zapisana konfiguracja' na karcie '3 Dane' podczas tworzenia eksportu. Użyj paska Wyszukiwanie do znalezienia konfiguracji odpowiedniej dla Twojego projektu.

![export-tool-configuration-stored][]


Po więcej szczegółowych informacji dotyczących wybierania obiektów i YAML przejdź do 'Wybierania obiektów' i 'Specyfikacji YAML' w sekcji '[Nauka](https://export.hotosm.org/en/v3/learn)' na stronie narzędzia. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




