---
layout: doc
title: Imagens aéreas
permalink: /pt/josm/aerial-imagery/
lang: pt
category: josm
---

Imagens aéreas
================

> Revisto em 2015-09-21  

O traçado de imagens é uma forma fácil e poderosa de contribuir para o OSM. A utilização de imagens para desenhar pontos, linhas e formas no terreno chama-se **digitalização**. Muitas vezes, pode ser separada do ato de recolher dados de atributos no terreno, que é frequentemente designado por **verificação no terreno**. A digitalização de imagens pode fornecer o esqueleto dos mapas OSM, o que facilita a verificação no terreno para as pessoas no terreno. Neste capítulo, vamos aprender um pouco mais sobre como funcionam as imagens aéreas.  

Sobre as imagens aéreas
-------------

Imagens aéreas é o termo que utilizamos para descrever fotografias tiradas do céu. Estas podem ser tiradas a partir de aviões, drones, helicópteros ou mesmo papagaios e balões, mas a fonte mais comum de imagens provém de satélites em órbita da Terra.  

[No capítulo sobre GPS](/pt/mobile-mapping/using-gps) ficámos a conhecer as dezenas de satélites que orbitam a Terra e que permitem aos nossos recetores GPS identificar a nossa latitude e longitude. Para além destes satélites GPS, existem também satélites que tiram fotografias da Terra. Estas fotografias são depois manipuladas de modo a poderem ser utilizadas no software SIG (cartografia). As imagens aéreas do Bing são constituídas por fotografias de satélite.  

Resolução
----------

Todas as fotografias digitais são compostas por pixéis. Se fizer aumentar muito uma fotografia, notará que a imagem começa a ficar desfocada e, eventualmente, verá que uma imagem é composta por milhares de pequenos quadrados, cada um com uma cor diferente. Isto é verdade quer a fotografia tenha sido tirada com uma câmara de mão, um telemóvel ou um satélite em órbita da Terra.  

![Image resolution][]

A resolução refere-se ao número de píxeis de largura pelo número de píxeis de altura de uma imagem. Mais píxeis significam maior resolução, o que significa que é possível ver mais pormenores na fotografia. A resolução nas câmaras portáteis é frequentemente medida em megapíxeis. Quanto mais megapíxeis a sua câmara conseguir gravar, maior será a resolução das suas fotografias.  

As imagens aéreas são iguais, exceto que normalmente falamos de resolução de forma diferente. A medição é importante nas fotografias aéreas - assim, um pixel representa uma determinada distância no solo. Normalmente, descrevemos as imagens como algo do género "imagens com resolução de dois metros", o que significa que um pixel é equivalente a dois metros no solo. As imagens com resolução de um metro teriam uma resolução superior a esta, e a resolução de 50 cm seria ainda mais elevada. Esta é geralmente a gama de imagens que é fornecida pelo Bing, embora varie entre locais e, em muitos sítios, seja pior do que dois metros, altura em que se torna difícil identificar objetos na imagem.  

![Comparison of low and high resolution imagery][]

Quanto maior for a resolução de uma imagem aérea, mais fácil será a sua utilização na elaboração de mapas.  

Georreferenciação
---------------

Cada pixel de uma fotografia aérea tem um tamanho e cada pixel tem também uma localização. Como referimos anteriormente, isto deve-se ao facto de as fotografias aéreas serem georreferenciadas.  

Tal como um ponto GPS tem uma latitude e longitude, o mesmo acontece com os pixéis de uma imagem aérea. No entanto, tal como a fraca resolução pode trazer desafios à cartografia, o mesmo acontece com as imagens mal georreferenciadas.  

Vamos pensar um pouco sobre como funciona a georreferenciação e porque é que é difícil de fazer. Quando alguém faz a georreferenciação de uma imagem, começa por identificar um punhado de pixéis na imagem que são localizações conhecidas. Se tivermos uma fotografia quadrada, podemos identificar as coordenadas dos quatro cantos e, dessa forma, toda a imagem pode ser corretamente posicionada.  

Tudo isto parece muito simples, mas pensemos no seguinte: A Terra é redonda; as lentes das câmaras são redondas; no entanto, as fotografias são planas e bidimensionais. Isto significa que, quando uma imagem plana está a ser mapeada para a Terra redonda, haverá sempre algum alongamento da imagem e distorção. Imagine-se que se tenta achatar uma casca de laranja. Não vai acabar por ficar retangular. Devido a este problema, os pixéis de uma imagem aérea podem não estar todos perfeitamente posicionados.  

Felizmente, algumas pessoas muito inteligentes criaram algoritmos inteligentes para resolver este problema e, por isso, as imagens que vê no Bing estão muito próximas de serem exatas. Na maior parte dos locais, não estarão visivelmente erradas - e são certamente ótimas para fazer mapas. As áreas mais comuns em que as imagens estão localizadas de forma incorreta são as áreas montanhosas e acidentadas. No capítulo [Correção do desvio de imagens] (/pt/josm/correcting-imagery-offset) veremos como corrigir este problema.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png