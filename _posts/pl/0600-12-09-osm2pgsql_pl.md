---
layout: doc
title: osm2pgsql
permalink: /pl/osm-data/osm2pgsql/
lang: pl
category: osm-data
---

osm2pgsql
==========


W poprzednim rozdziale zobaczyliśmy, jak zainstalować Postgresql z PostGIS w Windowsie oraz jak ustawić bazę danych i wypełnić ją danymi z plików shape. W celu pozyskania danych OpenStreetMap do bazy danych możesz wziąć dane w plikach shape i użyć wczytywania tych plików, ale może to skutkować tym, że nie zdobędziesz wszystkich danych, które chciałeś. W tym rozdziale nauczymy się, jak używać **osm2pgsql**, programu wiersza polecenia do ładowania surowych danych OSM do bazdy danych PostGIS.  

Przejdziemy przez kroki do ustawienia osm2pgsql w Windowsie, chociaż mniej więcej tak samo powinno być na innym systemie operacyjnym, jeżeli ustawiłeś prawidłowo bazę (bazy) danych PostGIS.  

Pobierz osm2pgsql
-------------

Aby pobrać wersję osm2pgsql dla Windowsa, przejdź w przeglądarce do <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Pobierz plik nazwany **osm2pgsql.zip**  
- Wypakuj plik na swoim komputerze. Powinieneś przenieść rozpakowany folder do miejsca, z którego nie będziesz go już przenosić, ponieważ będziemy musieli dodać go do ścieżki systemowej.  

![unzip it][]

- W folderze osm2pgsql, który rozpakowałeś jest plik nazwany osm2pgsql.exe. To jest program, który uruchomimy, aby zaimportować dane, ale żeby Windows mógł go znaleźć, musimy dodać jego lokalizację do ścieżki systemowej. Kliknij na menu Start i wpisz "ścieżka systemu".  

![system path][]

- Zobaczysz opcję nazwaną "Edytuj zmienne środowiskowe systemu". Kliknij ją.  

![edit variables][]

- Kliknij przycisk nazwany "**Zmienne środowiskowe**".  

![env variables][]

- U dołu znajdź zmienną nazwaną "**Path**" i kliknij "**Edytuj...**"  

![find path][]

- Musisz dodać katalog, w którym jest osm2pgsql.exe do zmiennej Path.  

![edit path][]

- Dodaj średnik na końcu poprzedniego katalogu i wpisz pełną ścieżkę do folderu z osm2pgsql.exe.  Na przykład, jeśli folder **osm2pgsql** znajduje się bezpośrednio w katalogu **C:\\**, ścieżka będzie wyglądała następująco:  
	
**C:\osm2pgsql\Win32**  

- Kliknij OK kilka razy, aby zapisać nowe ustawienia.  
- **osm2pgsql** powinno teraz działać. Sprawdźmy to.  
- Otwórz Wiersz polecenia. Możesz to zrobić klikając menu Start i wpisując "**cmd**". Pojawi się Wiersz polecenia i możesz nacisnąć Enter lub kliknąć na nim, aby go uruchomić.  

![cmd][]

- W czarnym oknie poleceń, które się pojawi, wpisz:  

**osm2pgsql**

- Jeżeli wszystko działa prawidłowo, powinieneś otrzymać wiadomość podobną do tej:  

![osm2pgsql test][]

- Jeżeli nie widzisz takiego błędu, a pojawia się komunikat, że nie można znaleźć aplikacji **osm2pgsql**, to mogłeś źle uzupełnić zmienną Path.  

Pobieranie surowych danych OSM
---------------------
Zanim uruchomimy **osm2pgsql** potrzebujemy trochę surowych danych OSM do zaimportowania ich do bazy danych. Jeśli nie masz jeszcze pliku **.osm**, którego mógłbyś użyć, spróbuj pobrać plik z <https://mapzen.com/data/metro-extracts/>. Ta strona udostępnia wiele wyciągów z OSM dla różnych miast. Znajdź miasto do zaimportowania i pobierz dla niego plik PBF. Pliki PBF, to skompresowane wersje plików **.osm**. Możesz użyć którejkolwiek z usług wyciągów wymienionych w rozdziale o [pozyskiwaniu danych](/pl/osm-data/getting-data), jeśli wolisz surowe dane z innego obszaru.  

Pobieranie pliku stylu
------------------
**osm2pgsql** wymaga użycia dostosowanego pliku stylu do określenia, które tagi są zawarte w bazie danych podczas importu. Możesz pobrać domyślny plik stylu [tutaj](/files/default.style).  

Importowanie danych
-------------------
Otwórz PgAdmin III i utwórz nowa bazę danych o nazwie **osm** tak, jak to zrobiłeś w poprzednim rozdziale. Aby zaimportować dane, uruchomimy program **osm2pgsql** z wiersza polecenia. 

- Kliknij menu Start i wpisz "cmd", a następnie naciśnij Enter, aby uruchomić Wiersz polecenia.  

![command prompt][]

Tutaj uruchomimy aplikację **osm2pgsql** z kilkoma opcjami. Musimy podać przynajmniej:  

- Położenie pliku danych OSM  
- Nazwę bazy danych i jej użytkownika  
- Styl opisujący, które tagi OSM zostaną zaimportowane do bazy danych  

Dla ułatwienia umieściliśmy nasz plik OSM w katalogu **C:\\**.  

- Wpisz następujące polecenie, zastępując lokalizację pliku OSM i pliku stylu swoimi własnymi.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Naciśnij Enter. Jeśli wszystko poszło dobrze proces powinien się rozpocząć. Wczytanie wszystkich danych do bazy może zająć kilka minut.  

![osm2pgsql output][]

- Jeśli Twój surowy plik OSM jest duży możesz chcieć dodać więcej pamięci procesowi importu osm2pgsql. Aby to zrobić dopisz następujące polecenie:  

      --cache 600

Testowanie
-----------

Możemy sprawdzić, czy import był udany i zobaczyć dane z naszej bazy używając QGIS.  

- Otwórz QGIS i kliknij na przycisku "Dodaj warstwy PostGIS". ![qgis add postgis button][]{: height="24px"}

- Poniżej "Połączeń" na górze kliknij "**Nowe**".  
- Nadaj nazwę nowemu połączeniu. Pod typem bazy danych **osm** (nazwa Twojej bazy danych).  
- Poniżej wpisz nazwę użytkownika postgres i hasło.  

![connection settings][]

- Kliknij OK, aby zapisać ustawienia połączenia. Następnie kliknij "Połącz", aby połączyć się ze swoim serwerem PostgreSQL.  
- Kliknij obok "publiczne", aby zobaczyć wszystkie warstwy (tabele) w swojej bazie danych. Zauważ, że osm2pgsql tworzy osobne tabele dla obiektów różnych typów - punktów, linii i wielokątów. Tworzy również tabelę dróg, która zawiera tylko główne drogi.  

![postgis layers][]

- Wybierz jedną lub więcej warstw i kliknij "Dodaj". Jeżeli pojawi się pytanie, wybierz WGS84 jako system odniesienia.  
- Jeżeli wszystko pójdzie dobrze, zobaczysz wybrane warstwy wyświetlone w QGIS.  

![osm in qgis][]

> Jeżeli spojrzysz na tabele właściwości warstw, to zobaczysz, że właściwości zostały zmapowane do tagów OSM. Określone tagi, które są zaimportowane, zostały zdefiniowane podczas procesu importowania w **osm2pgsql**. Aby dodać konkretne tagi, które nie są zawarte domyślnie, możesz edytować plik *stylu*, który jest odniesieniem do definicji schematu danych osm2pgsql.  


Podsumowanie
-------

Kiedy chcesz zaimportować dane OpenStreetMap do swojej własnej bazy danych, to **osm2pgsql** sprawdzi się doskonale. To narzędzie może być bardzo przydatne, kiedy potrzebujesz zdobyć najbardziej aktualne dane OSM i dopasować wybrane właściwości lub podczas pracy nad bardziej złożonymi projektami.  

Ostatnio powstało nowe narzędzie do importu nazwane [imposm](http://imposm.org/), które jest szybsze i oferuje ulepszenia względem osm2pgsql, jednak w czasie pisania tego tekstu brakuje mu innych kluczowych funkcji, które są obiecane w wersji 3 imposom.  

Więcej informacji o osm2pgsql znajdziesz w Wiki OSM - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
