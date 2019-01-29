---
layout: doc
title: Używanie danych OSM w QGIS
permalink: /pl/osm-data/osm-in-qgis/
lang: pl
category: osm-data
---

Używanie danych OSM w QGIS
=================

> Ten przewodnik może zostać pobrany jako [Using_OSM_data_in_QGIS_pl.odt](/files/Using_OSM_data_in_QGIS_pl.odt) lub [Using_OSM_data_in_QGIS_pl.pdf](/files/Using_OSM_data_in_QGIS_pl.pdf)  
> Przejrzano 19.07.2015

QGIS (dawniej Quantum GIS) jest w pełni funkcjonalnym, otwartoźródłowym, międzyplatformowym Systemem Informacji Geograficznych (ang. Geographic Information System). W QGIS możesz uzyskać dostęp do aktualnych danych OSM kiedy tylko chcesz, wybierz tagi, które potrzebujesz i po prostu wyeksportuj je do łatwej w użyciu bazy danych SQLite lub pliku shape.  

W tym rozdziale przejdziemy przez kroki potrzebne do zrobienia tego. Zakładamy, że pobrałeś i zainstalowałeś już QGIS 2.x. Jeżeli jeszcze tego nie zrobiłeś, możesz pobrać go z <http://www.qgis.org/pl/site/forusers/download.html>.  

Aby mieć nasze dostosowane, aktualne warstwy OSM załadowane do QGIS, najpierw pobierzemy najnowsze dane OSM w surowym formacie **.osm**. Następnie przekonwertujemy te dane do bazy danych SQLite, który jest lekkim systemem bazodanowym przechowywanym w jednym pliku w Twoim systemie. Na koniec utworzymy warstwę (lub warstwy), które będą zawierać tylko te obiekty i tagi, do których chcemy mieć dostęp. Te warstwy będą mogły być używane w QGIS tak, jak są lub zapisane w innym formacie, jak np. plik shape.  

Uzyskiwanie dostępu do danych OpenStreetMap
---------------------------

Pierwszą rzeczą, którą zrobimy jest pobranie aktualnych danych OSM. Możemy to zrobić na kilka sposobów. Oczywiście pobieranie danych z serwera OSM tak, jak to robimy w edytorze JOSM, jest ograniczone, więc nie możemy uzyskać bardzo dużej ilości danych za jednym razem - jednakże są sposoby na dostęp do dużych zestawów danych, jak
opisane w poprzednim rozdziale [Pozyskiwanie danych OSM](/pl/osm-data/getting-data) i [Korzystanie z Geofabrik i HOT Export](/pl/osm-data/geofabrik-and-hot-export).  

W tym samouczku użyjemy funkcji pobierania wbudowanej w QGIS.  

- Otwórz QGIS i przejdź do Wektor -> OpenStreetMap -> Pobierz dane...  
- Możesz tutaj wybrać z kilku dostępnych opcji - jeżeli Twoje okno wyświetla się w odpowiednim rozmiarze, zaznacz pole przy "Z mapy." Jeżeli masz wczytaną warstwę w QGIS w prawidłowym rozmiarze wybierz "Z warstwy" i wybierz, której warstwy chcesz użyć. Tutaj wybierzemy "Ręcznie" i podamy szerokości i długości **ramki granicznej** dookoła obszaru	, który chcemy pobrać. Możesz wpisać interesujące Cię szerokości i długości, ale pamiętaj, że obszar nie może być zbyt duży, bo nie będziesz mógł pobrać danych.  

![bounding box][]

- Wybierz nazwę i lokalizację pliku wyjściowego, używając rozszerzenia pliku **.osm** i kliknij OK.  
- Otrzymasz powiadomienie o ukończonym pobieraniu. Kliknij "Zamknij", aby wyjść z okna pobierania.  

![download complete][]

- Dane OSM zostaną zapisane w określonej przez Ciebie lokalizacji.  

> Ta metoda dostępu do danych OSM jest taka sama, jak pobieranie ich w JOSM lub na [openstreetmap.org](http://www.openstreetmap.org). Dla dużych aktualnych wyciągów, możesz spróbować pobierać ze [strony HOT export](http://export.hotosm.org) lub [bbbike.org](http://extract.bbbike.org/). Pamiętaj, że jeśli pobierasz skompresowany plik OSM, musisz najpierw rozpakować go do formatu **.osm**, aby kontynuować.  


Importowanie danych do SQLite
---------------------------

Teraz musimy zaimportować nasz surowy plik **.osm** do pliku bazy danych SQLite.  

- Przejdź do Wektor -> OpenStreetMap -> Importuj topologię z XML...  
- W pierwszym polu wybierz swój plik **.osm**.  
- Jeśli chcesz, możesz zmienić nazwę wyjściowego pliku bazy danych.  
- Pozostaw zaznaczone pole przy "Utwórz połączenie..."  

![import dialog][]  

- Kliknij OK.  
- Kiedy wszystko zostanie ukończone kilknij "Zamknij".  


Tworzenie warstw
--------------

Na koniec, zdefiniujemy warstwy, które będą mogły być użyte w QGIS, dostosowane do naszych potrzeb.  

- Przejdź do Wektor -> OpenStreetMap -> Eksportuj topologię do SpatiaLite...  
- W pierwszym polu wybierz bazę danych utworzoną w poprzednim kroku.  

![input db file][]  

- Pod "Rodzaj eksportu" wybierz rodzaj obiektów, dla których chcesz utworzyć warstwę. Tutaj utworzymy warstwę używając wielokątów.  

![export type][]  

Jeśli chcesz, edytuj nazwę warstwy.  

Pod "Wyeksportowane tagi" zaczyna się magia. Tutaj możemy wybrać, które tagi będą uwzględnione na naszej warstwie wyjściowej. To daje nam elastyczność, których danych konkretnie chcemy użyć.  

- Kliknij "Wczytaj z BD", aby zobaczyć listę wszystkich dostępnych w bazie danych tagów. Powiększ okno przeciągając narożniki, jeśli to pomoże. Zobaczysz wszystkie tagi zawarte w tych danych, a liczbę obiektów z każdego tagu.  
- Zaznacz pola przy tagach, które chcesz uwzględnić. Tutaj wybierzemy kilka obiektów, które będą przydatne dla wielokątów reprezentujących budynki.  

![export full][]  

Kiedy skończysz kliknij OK. Zamknij okno. Twoja warstwa powinna zostać automatycznie dodana.  

![cairo polygons][]  

Kliknij prawym przyciskiem myszy na "Otwórz tabelę właściwości".  

![open attribute table][]  

Możesz zobaczyć tutaj, że mamy tabelę, która zawiera tylko wybrane przez nas właściwości.  

![attribute table][]  

Zauważ, że nie utworzyliśmy warstwy z **samymi** budynkami. Zamiast tego stworzyliśmy warstwę zawierającą wszystkie wielokąty z naszych oryginalnych danych, ale mają one tylko wybrane przez nas tagi. Aby pokazać na tej warstwie tylko budynki, musielibyśmy wykonać zapytanie, które odfiltrowałoby jedynie wielokąty z building=yes.


Podsumowanie
-------

Ten proces upraszcza pozyskanie aktualnych danych OSM i wciągnięcie ich do QGIS. Gdy już masz warstwy takie, jak ta w QGIS, można je zapisać jako pliki shape, wykonać filtry, zapytania i tak dalej. Więcej szczegółów dotyczących tych funkcji poznasz w menu Pomoc w QGIS.  


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
