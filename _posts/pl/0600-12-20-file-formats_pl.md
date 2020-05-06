---
layout: doc
title: Formaty plików
permalink: /pl/osm-data/file-formats/
lang: pl
category: osm-data
---

Formaty plików
=============

> Przejrzano 2016-09-05

Jak dla każdego innego typu danych, tak i dla danych geograficznych są różne sposoby na przechowywanie ich na komputerze. Mogą być zapisane w bazie danych, która jest specjalnym systemem przechowywania i przetwarzania danych i w rzeczywistości jest specjalnie zaprojektowany system bazodanowy do przechowywania danych geograficznych. Mogą być również przechowywane w tradycyjnych plikach komputerowych, które oferują wiele różnych formatów dla danych geograficznych.  

W tym rozdziale przyjrzymy się kilku sposobom przechowywania danych geograficznych wyjaśniając, jak one działają i jakie jest ich typowe użycie.  

Pliki .OSM
-----------

Format plików **.osm** jest specyficzny dla OpenStreetMap. Nie wykorzystasz go nigdzie indziej. Jeżeli kiedykolwiek pobierałeś dane używając JOSM i zapisałeś je jako plik, to być może zauważyłeś, że plik został zapisany z rozszerzeniem **.osm**. Jeżeli jesteś użytkownikiem GIS, to mogłeś też zauważyć, że nie jest łatwo otworzyć te pliki używając oprogramowania takiego, jak QGIS.  

Więc dlaczego OSM przechowuje dane w formacie, którego nikt inny nie może użyć? Odpowiedzią jest fakt, że wiele formatów danych geograficznych powstało przed erą internetu i są zaprojektowane do szybkiego dostępu i odpytywania tak, jak baza danych. Z kolei dane OSM są zaprojektowane do łatwego przesyłania przez internet w standardowym formacie. Dlatego pliki **.osm** są kodowane w XML i zawierają dane geograficzne w usystematyzowanym i uporządkowanym formacie. Prosty plik **.osm**, otwarty w edytorze tekstu, może wyglądać tak, jak ten:  

![Sample OSM XML file][]

Pozyskiwanie danych w formacie **.osm** jest proste - w rzeczywistości robisz to za każdym razem, kiedy pobierasz dane w JOSM, ale używanie tych danych do analizowania i projektowania mapy nie jest łatwe. Dlatego lepiej przekonwertować dane do innego formatu lub pobrać z usługi, która skonwertuje je dla Ciebie.  

> Surowe dane OSM są przechowywane zazwyczaj w plikach **.osm**, ale możesz się spotkać z plikami **.bz2** i **.pbf**. Są to zasadniczo pliki **.osm**, które zostały skompresowane, aby oszczędzać miejsce, a które mogą być szczególnie przydatne przy pracy z dużą ilością danych.  

Pliki shape
----------

**Shapefile** jest formatem szeroko stosowanym do przechowywanie danych wektorowych. Został zaprojektowany przez ESRI, firmę, która stworzyła popularny zestaw aplikacji GIS o nazwie ArcGIS.  

Aktualnie pliki shape są zbiorem kilku różnych plików. Na przykład plik shape zawierający dane o budynkach może mieć pliki o następujących rozszerzeniach:  

-	budynki.**shp**
-	budynki.**shx**
-	budynki.**dbf**

Pliki shape mogą mieć zazwyczaj dodatkowe pliki, które zawierają inne informacje.  

Plik shape musi być przeznaczony tylko do jednego typu obiektów (punktów, linii lub wielokątów), a właściwości każdego z obiektów są zawarte w tabeli. Inaczej niż w systemie OpenStreetMap, gdzie każdy obiekt może mieć nieograniczoną liczbę tagów, właściwości obiektów w pliku shape muszą odpowiadać określonej strukturze tabeli, która może wyglądać tak:  

![Shapefile attributes][]

Dane OpenStreetMap mogą być konwertowane do plików shape. Różne strony internetowe dostarczają pliki shape ze skonwertowanych danych OSM. W [następnym rozdziale](/pl/osm-data/getting-data) jest dyskusja temu poświęcona.  

Bazy danych
---------

Wiele rodzajów informacji jest przechowywanych w systemach bazodanowych, które są logicznym sposobem na organizowanie danych i dostęp do nich. Nie ma tu wyjątku dla danych geograficznych, jednakże bazy danych zaprojektowane dla nich są wyspecjalizowane pod kątem złożonych funkcji, których wymaga ich przeszukiwanie.  

Dane OpenStreetMap są najczęściej przechowywane w bazie danych PostgreSQL z rozszerzeniem PostGIS. Ten typ nazy danych pozwala na szybki dostęp do danych i może być łatwo użyty z Mapnikiem, który jest oprogramowaniem tworzącym kafelki mapy dla stron internetowych. Istnieje kilka narzędzi do importowania surowych danych OSM do bazy danych PostgreSQL.  

Inny typ bazy danych znany jako SQLite, posiada podobną funkcjonalność, co PostgreSQL, ale wszystkie dane znajdują się w jednym pliku i nie wymaga do działania oprogramowania bazodanowego. Jest trochę trudniej utworzyć swoją własną bazę, ale za to łatwiej się z nią pracuje przy małych zestawach danych.  

Podsumowanie
-------

W kolejnych rozdziałach zobaczymy, jak możesz pobierać dane z internetu w różnych formatach i jak używać różnych narzędzi, aby samemu móc przetwarzać surowe dane.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png