---
layout: doc
title: Przegląd danych OSM
permalink: /pl/osm-data/data-overview/
lang: pl
category: osm-data
---

Przegląd danych OSM
==================


> Przejrzano 2016-09-05

<!--W tym rozdziale zastanowimy się, jak działa OpenStreetMap, co pomoże nam lepiej zrozumieć, jak usystematyzowane są dane i jak możemy najlepiej je wykorzystać.-->

Jak działa OSM
--------------
Zastanówmy się, jak działa OpenStreetMap. Tysiące użytkowników na całym świecie wciąż dodaje i edytuje mapę, ale co dzieje się za kulisami?  

Kiedy Ty lub jakiś inny użytkownik wprowadzacie zmiany używając oprogramowania do edycji, takiego jak JOSM lub iD, ten program komunikuje się z głównym serwerem OpenStreetMap i informuje go o Twoich zmianach. Na tym serwerze jest ogromna baza danych, która zawiera wszystkie informacje o lokalizacji i właściwościach każdego pojedynczego obiektu geograficznego w całej OpenStreetMap.  

Ponieważ OSM jest darmowa i otwarta, każdy może pobrać wszystkie dane z bazy. Jednak z powodu jej wielkości (*dane zajmują 30 GB nawet po kompresji*) jest niemal niemożliwe, aby pracować z tymi wszystkimi danymi na raz.  

Z powodu tego ograniczenia, istnieją różne metody **eksportowania** i **wyciągania** danych, które będą opisane w tym rozdziale. Eksportowanie oznacza konwertowanie danych OpenStreetMap z ich oryginalnego formatu na taki, który jest dla Ciebie wygodny. Różni się to trochę od **wyciągania** danych, oznaczającego wycinanie danych z wybranego obszaru. Może też odnosić się do pobierania konkretnych obiektów z danego obszaru. Często używa się tych terminów zamiennie. Dowiemy się o tym więcej w rozdziale o danych OSM.  

Używanie danych geograficznych
--------------
Jeżeli nie jesteś doświadczonym użytkownikiem GIS, to ważne, żebyś zrozumiał różnice pomiędzy oprogramowaniem do edycji OSM takim, jak JOSM, a oprogramowaniem GIS, jak np. Quantum GIS lub ArcGIS.  

Edytory takie, jak iD lub JOSM mają jedną główną funkcję, którą spełniają bardzo dobrze - ułatwiają użytkownikom edycję OpenStreetMap. Ale nie są programami przeznaczonymi do analizowania lub sprawdzania danych -
ta funkcja pozostała dla innych aplikacji. Oprogramowanie GIS takie, jak darmowe i otwartoźródłowe [Quantum GIS (QGIS)](http://www.qgis.org), pozwala użytkownikom projektować ładne mapy do sprawdzania i analizowania danych oraz wielu innych zastosowań. Programy GIS mogą być również używane do edytowania danych geograficznych, ale dużo łatwiej jest zmieniać OpenStreetMap używając dedykowanych edytorów OSM.  

W następnym rozdziale przyjrzymy się bliżej formatom plików powiązanych z OpenStreetMap i ogólnie danych geograficznych. Przejrzymy różne sposoby na dostęp i przetwarzanie danych OSM oraz konwertowanie ich pomiędzy różnymi typami plików.  


Pobieranie danych
-----------------

Wszystko dobrze, ale jak zdobyć potrzebne dane?  

W tym rozdziale zrobimy przegląd różnych sposobów eksportowania danych OSM. Skupimy się na podstawach, ale pamiętaj, że aby wykorzystać efektywnie dane, będziesz prawdopodobnie potrzebował oprogramowania GIS
takiego, jak np. darmowa aplikacja Quantum GIS.  

Zanim zaczniemy, trochę terminologii. Po pierwsze, **eksportowanie** oznacza konwertowanie danych OpenStreetMap z ich oryginalnego formatu XML na taki, który jest dla Ciebie wygodny. Różni się to trochę od **wyciągania** danych, oznaczającego wycinanie danych z wybranego obszaru. Może też odnosić się do pobierania konkretnych obiektów z danego obszaru. W tym rozdziale będziemy tych słówek często używać, więc ważne, żeby zrozumieć różnicę.  

API OSM
------------
Proces edytowania OSM działa dzięki czemuś, co nazywa się API, który pozwala oprogramowaniu do edycji komunikować się z głównym serwerem. Na przykład, kiedy używasz JOSM i zaznaczysz obszar, który chcesz mapować, do serwera jest wysyłane wywołanie API z żądaniem pobrania wszystkich danych, które istnieją w wybranym obszarze.  

W rzeczywistości, kiedy pobierasz dane do JOSM wykonujesz **wyciąganie** danych dla konkretnej części świata. Dane są wysyłane do Ciebie w formacie **.osm**, który możesz edytować w JOSM. Jeśli pobierzesz dane w JOSM i je zapiszesz, to zobaczysz, że typ pliku to **.osm**. Powiemy o tym więcej w następnym rozdziale.  
