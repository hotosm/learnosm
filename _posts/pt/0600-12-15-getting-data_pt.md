---
layout: doc
title: Obter dados OSM
permalink: /pt/osm-data/getting-data/
lang: pt
category: osm-data
---

Obter dados OSM
=================  

> Revisto em 2016-04-05

Quando se pretende obter os dados mais recentes do OpenStreetMap, a forma mais fácil é descarregar um extrato de um sítio Web. Existem vários serviços Web que fornecem extratos de dados para uma área à sua escolha.  

Descarregamento de extratos de dados
--------------------------

### GeoFabrik

A [GeoFabrik](http://geofabrik.de) é uma empresa especializada em trabalhar com o OpenStreetMap. Fornecem uma variedade de extratos gratuitos em formato shapefile e OSM em bruto no seu [site de descarregamento](http://download.geofabrik.de). A vantagem de descarregar os dados do GeoFabrik é que são atualizados todos os dias, é fácil e fiável. Uma desvantagem é que os dados são extraídos por país e nem todos os países estão disponíveis.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) fornece shapefiles e o formato OSM em bruto para cidades de todo o mundo, extraídos semanalmente. Isto é útil se estiver à procura de extratos de dados para uma única cidade.

>Lembre-se que as características no OpenStreetMap têm um número ilimitado de etiquetas "livres",
>mas os shapefiles têm atributos armazenados num número limitado de colunas. Isto significa que
>que quando os dados OSM são convertidos em shapefiles, apenas as etiquetas especificadas serão
>incluídas na tabela de shapefile. Os sítios Web acima referidos fornecem shapefiles
>com um conjunto predefinido de etiquetas comuns, mas se pretender extrair etiquetas específicas
>terá de utilizar um dos serviços mais especializados da secção seguinte
>ou aprenda a exportar os dados por si mesmo.

Extratos personalizados
-------------------

### Exportações HOT  

A [Equipa Humanitária do OpenStreetMap](http://hotosm.org) criou um serviço que permite aos utilizadores selecionar a área que pretendem extrair, e também utilizar [Modelos de etiquetas JOSM](/pt/josm/josm-presets/)
para selecionar etiquetas personalizadas a incluir no extrato. O serviço está disponível para todos os países onde o HOT trabalha, em [export.hotosm.org] (http://export.hotosm.org).

![hot exports][]

### BBBike  

Pode selecionar a sua própria área de qualquer parte do mundo utilizando o serviço em [http://extract.bbbike.org/](http://extract.bbbike.org/). As desvantagens são que não é possível selecionar etiquetas personalizáveis e que a quantidade de dados que pode descarregar é limitada.  

### Overpass

O Overpass é uma API (Application Programming Interface) para extrair dados de uma cópia só de leitura da base de dados principal do OpenStreetMap, que pode fornecer uma quantidade quase arbitrária de dados. Utilizando uma linguagem de consulta, pode personalizar o subconjunto de dados que obtém. Pode utilizar a API diretamente, gerando um pedido http, ou através da interface Overpass Turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) é um gerador de consultas interativo em que, em primeiro lugar, deve ampliar a vista para a região adequada no mapa. Introduza a sua consulta no campo esquerdo da página e desencadeie quaisquer ações utilizando os botões na parte superior da interface. Se é novo na linguagem de consulta, a utilização do assistente deve ajudá-lo a começar. A wiki do OSM contém uma [descrição completa](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) da sintaxe da linguagem de consulta, bem como uma [coleção de exemplos](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

O mapa destacará todos os dados selecionados pela sua consulta, que podem ser modificados. Prima "Executar" para atualizar a visualização dos resultados. Quando estiver satisfeito com o que vê, "Exportar" oferece várias opções, entre as quais os dados OSM em bruto. Se a quantidade de dados for limitada, pode também aceder-lhes diretamente depois de alternar entre a vista do mapa e a vista dos dados utilizando os botões mais à direita no topo. A opção de exportação *Consulta -> converter para (compacto) OverpassQL* gera uma hiperligação a ser utilizada para a API Overpass.

![overpass turbo][]

Se pretender criar uma consulta sofisticada para obter um subconjunto dos dados de uma grande área, é uma boa ideia testar e melhorar essa consulta no Overpass Turbo numa pequena área. Em seguida, pode diminuir a vista (zoom out) para toda a região de interesse e utilizar o URL de consulta resultante diretamente para a API. A secção seguinte explica como o pode fazer.

#### API do Overpass

[API do Overpass](http://wiki.openstreetmap.org/wiki/Overpass_API) é um serviço dedicado otimizado para consultar mas não para escrever dados do OpenStreetMap. Devido a esta otimização, funciona muito rapidamente em comparação com a API da base de dados principal e praticamente não tem limites para a quantidade de dados transferidos. Várias instâncias deste serviço estão disponíveis na rede, a que é usada no exemplo seguinte também fornece alguma informação na [sua página inicial](http://overpass-api.de/)

Se tiver um URL de consulta funcional para enviar um pedido http à API do Overpass, uma ferramenta como [wget](https://www.gnu.org/software/wget/) - disponível para diferentes sistemas operativos, [ver aqui](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - permite descarregar os dados brutos do OSM diretamente do servidor e armazená-los localmente. O seguinte excerto é um script para a shell bash, comum nos sistemas Unix, que obtém todos os dados dentro de uma caixa delimitadora especificada:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>O que acontece aqui (para os curiosos que não querem ler a documentação completa da linguagem de consulta)?  
>node(...) seleciona todos os nós dentro de uma caixa delimitadora;  
>< faz uma recursão completa, ou seja, seleciona todos os caminhos que contêm estes nós e todas as relações que contêm estes nós e caminhos;  
>rel(br) seleciona todas as relações-mãe das relações obtidas até agora (caso contrário, as relações-mãe não seriam obtidas)
>



Sumário
-------  

Os serviços mencionados neste capítulo são tudo o que o utilizador médio necessita para obter os dados OSM que pretende e poder trabalhar com eles no software GIS. No entanto, o utilizador pode querer aprender formas mais poderosas de trabalhar com os dados. Os restantes capítulos desta secção são bastante técnicos, mas apresentam métodos mais avançados de manipulação e acesso aos dados OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png