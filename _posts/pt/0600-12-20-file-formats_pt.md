---
layout: doc
title: Formatos de Ficheiro
permalink: /pt/osm-data/file-formats/
lang: pt
category: osm-data
---

Formatos de Ficheiro
=============

> Revisto em 2016-09-05

Como qualquer tipo de dados, existem várias formas de armazenar dados geográficos num computador. Podem ser guardados numa base de dados, que é um sistema especializado para armazenar e recuperar dados e, de facto, existem sistemas de bases de dados especificamente concebidos para armazenar dados geográficos. Também podem ser armazenados em ficheiros tradicionais de computador, embora existam muitos formatos de ficheiros diferentes para dados geográficos.  

Nesta secção, vamos analisar algumas formas de armazenar dados geográficos, explicar como funcionam e como são normalmente utilizados.  

Ficheiros .OSM
-----------

O formato de ficheiro **.osm** é específico do OpenStreetMap. Não o encontrará noutros locais. Se alguma vez descarregou dados utilizando o JOSM e os guardou como um ficheiro, deve ter reparado que o ficheiro é guardado com a extensão **.osm**. Se é um utilizador de SIG, também deve ter reparado que não é fácil abrir estes ficheiros usando software como o QGIS.  

Então, porque é que os dados do OSM são armazenados num formato de ficheiro que mais ninguém utiliza? A resposta é que muitos formatos de dados geográficos são anteriores à era moderna da Internet e foram concebidos para um acesso e consulta rápidos, tal como se consulta uma base de dados. Os dados OSM, por outro lado, foram concebidos para serem facilmente enviados e recebidos através da Internet num formato padrão. Assim, os ficheiros **.osm** são codificados em XML e contêm dados geográficos num formato estruturado e ordenado. Um simples ficheiro **.osm** teria o seguinte aspeto se fosse visualizado num editor de texto:  

![Sample OSM XML file][]

Adquirir dados em formato **.osm** é fácil - na verdade, fá-lo sempre que descarrega dados no JOSM, mas utilizar estes ficheiros para análise e desenho de mapas não é fácil. Por isso, é melhor converter os dados para outro formato ou obtê-los através de um serviço que converta os dados por si.  

> Os dados OSM em bruto são normalmente armazenados em ficheiros **.osm**, mas também pode ver ficheiros terminados em **.bz2** e **.pbf**. Estes são essencialmente ficheiros **.osm** que foram comprimidos para poupar espaço, o que pode ser extremamente útil quando se trabalha com grandes ficheiros de dados.  

Shapefiles
----------

O **shapefile** é um formato amplamente utilizado para armazenar dados geográficos vetoriais. Foi desenvolvido pela ESRI, a empresa que produz o ArcGIS, um popular conjunto de aplicações GIS.  

Os shapefiles são, na realidade, uma coleção de vários ficheiros diferentes. Por exemplo, um shapefile que contenha dados de construção pode ter ficheiros com as seguintes extensões:  

-	edifícios.**shp**
-	edifícios.**shx**
-	edifícios.**dbf**

Os ficheiros Shapefiles também têm frequentemente ficheiros adicionais que contêm outras informações.  

Uma shapefile deve ser designada para conter apenas um tipo de elemento (pontos, linhas ou polígonos), e cada elemento tem os seus atributos contidos numa tabela. Ao contrário do sistema OpenStreetMap, em que cada objeto pode ter um número ilimitado de etiquetas, os atributos dos elementos numa shapefile têm de se encaixar na estrutura de tabela definida pela shapefile, que pode ser mais ou menos assim:  

![Shapefile attributes][]

Os dados do OpenStreetMap podem ser convertidos em shapefiles. Vários sítios na Internet fornecem shapefiles convertidos a partir de dados OSM. Estes são abordados no [próximo capítulo](/pt/osm-data/getting-data).  

Bases de dados
---------

Muitos tipos de informação são armazenados em sistemas de bases de dados, que proporcionam uma forma lógica de organizar e aceder aos dados. Os dados geográficos não são diferentes, embora as bases de dados concebidas para geodados sejam especializadas para lidar com as funções complexas que a consulta de dados geográficos exige.  

Os dados do OpenStreetMap são frequentemente armazenados numa base de dados PostgreSQL com extensões PostGIS. Este tipo de base de dados permite um acesso rápido aos dados e pode ser utilizado facilmente com o Mapnik, um software que cria os mosaicos de mapas utilizados nos mapas deslizantes da Web. Existem várias ferramentas disponíveis para importar dados OSM em bruto para uma base de dados PostgreSQL.  

Outro tipo de base de dados é conhecido como SQLite, que oferece uma funcionalidade semelhante à de uma base de dados PostgreSQL, mas é armazenado num único ficheiro e não requer a execução de software de base de dados. Estas bases de dados são um pouco mais difíceis de criar, mas podem ser mais fáceis de utilizar para pequenos conjuntos de dados.  

Sumário
-------

Nos capítulos seguintes, veremos como pode descarregar dados em vários formatos da Internet e como pode utilizar várias ferramentas para manipular os dados em bruto.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png