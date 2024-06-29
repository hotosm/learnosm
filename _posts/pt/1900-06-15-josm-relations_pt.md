---
layout: doc
title: Relações JOSM
permalink: /pt/josm/josm-relations/
lang: pt
category: josm
---

Relações
==========

> Revisto em 2017-06-06  

No [Guia para principiantes](/pt/beginner) explicámos que existem três tipos de objetos que podem ser desenhados no OpenStreetMap - pontos (nós), linhas (caminhos) e polígonos (caminhos fechados). As linhas contêm vários pontos e a própria linha tem os atributos que definem o que representa. Os polígonos são o mesmo que as linhas, exceto que a linha deve terminar onde começa para formar uma forma.  

Na verdade, mentimos-lhe, porque existe um outro tipo de objeto no OpenStreetMap, chamado relações. Da mesma forma que uma linha é composta por outros pontos.
Uma relação contém um grupo de outros objetos, sejam eles pontos, linhas ou polígonos. Se pretende melhorar as suas capacidades de edição, é importante compreender e saber como editar corretamente as relações.  

Por exemplo, imagine que quer mapear um edifício que tem pátios no centro. Teria de desenhar um polígono à volta do exterior do edifício e outros polígonos à volta dos pátios para indicar que estes não fazem parte do edifício. Este é um exemplo de uma relação. A relação conteria vários polígonos - e os atributos do edifício estariam ligados à relação, não aos polígonos.  

![An example of a multipolygon][]

As relações são utilizadas para representar qualquer coisa que exija a definição de um conjunto de objetos. Outros exemplos são os percursos de autocarro (uma coleção de linhas), objetos longos e complexos (rios ou estradas) ou múltiplos polígonos que fazem parte de um local (como os edifícios de uma universidade).  

Existem principalmente quatro tipos de relações que pode encontrar no OSM: multipolígonos, rotas, limites e restrições (por exemplo, não virar à esquerda). Nesta secção vamos abordar os multipolígonos e as rotas.  

Criação de relações multipolígonos
-------------------------------

Vamos ver como criar uma relação multipolígono como a mostrada acima.  

- Primeiro, desenhe as formas. Neste caso, vamos desenhar três polígonos, um retângulo exterior e dois retângulos mais pequenos.

![Multipolygon ways][]

- Selecione todos os polígonos. Lembre-se de que pode selecionar vários objetos mantendo premida a tecla SHIFT e clicando em cada um deles.  
- Selecione *Ferramentas->Criar multipolígono* no menu.  
- A janela de etiquetas contém agora o novo multipolígono.

![New mp object][]

- Clique no botão de editar.  

- Deve ver agora a janela do editor de relações. Isto é um pouco complexo porque agora está a adicionar etiquetas a uma coleção de formas.  

![Building relation][]

- Observe que no topo do painel estão as etiquetas para a relação. Estas etiquetas funcionam da mesma forma que as etiquetas funcionam sempre.  
- Na parte inferior, encontra-se uma lista dos membros da relação. Esta relação tem três membros - ou seja, as três formas que fazem parte da nossa relação.  
- Repare que já temos uma etiqueta definida para nós, *type=multipolygon*. Temos de acrescentar mais uma etiqueta que define o tipo de objeto que a relação representa. Temos de acrescentar uma etiqueta que diz *building=yes*.  
- Clique na caixa de etiquetas e adicione esta etiqueta.  

![Building yes][]

- As **funções** já foram devidamente atribuídas às formas. Cada membro de uma relação tem um papel, que indica qual é o objetivo desse membro. Neste caso, o papel do polígono exterior deve ser definido como **outer** (exterior) e o papel dos dois polígonos interiores deve ser definido como **inner** (interior). Estas são as funções disponíveis para os membros de um multipolígono.  

- Clique em OK e a sua relação multipolígono está concluída!  

![New multipolygon][]

Quando cria um multipolígono como este, ele é apresentado no mapa da seguinte forma:  

![Multipolygon in Mapnik][]

Os multipolígonos podem ser utilizados para qualquer objeto complexo que necessite de polígonos interiores e exteriores, como um edifício ou um rio com pedaços de terra no seu interior. Informação detalhada sobre multipolígonos pode ser encontrada na [wiki do OSM](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Relações de rota
----------------

As relações são também muito úteis para representar percursos longos. Por exemplo, um percurso de autocarro ou de bicicleta segue vários segmentos de estrada. Para definir esse percurso, podemos criar uma relação que contém todos os segmentos de estrada que fazem parte do percurso. Características adicionais, como paragens de autocarro, também podem ser membros de uma relação de percurso.  

![Route relation][]

Vejamos como criar uma relação para uma rota de autocarro no JOSM:  

- Em primeiro lugar, selecione todas as linhas ao longo das quais o itinerário passa. Pode ser necessário dividir algumas ruas em segmentos separados se apenas uma parte delas pertencer à relação. Pode fazê-lo utilizando a ferramenta "Dividir linha".  
- Quando todos os segmentos estiverem selecionados, vá a *Modelos de etiquetas->Transporte->Transporte público->Rota de transporte público (autocarro)*.  

![Public transport preset][]

- Aparece uma nova janela onde pode introduzir informações que se aplicam ao itinerário como um todo.

![New route relation][]

É importante selecionar o tipo de rota específico no menu pendente no topo. Para as rotas de autocarro, estão disponíveis duas opções: autocarro e trólei. Normalmente, também deve introduzir o nome, a referência, de e para.

- Clique em "Criar relação". Aparece a janela da relação, tal como quando cria um multipolígono.  

![Bus route relation][]

- Repare que já existem etiquetas que definem a relação como uma rota. Em vez de *type=multipolygon*, temos *type=route*. Também temos uma etiqueta que a define como uma rota de autocarro, por oposição a outro tipo de rota.  
- Pode agora pensar, qual deve ser a **função** dos membros? Bem, no caso de uma rota, não precisamos de definir a função dos membros. Ao deixar a função em branco, o software sabe que eles são simplesmente parte da rota. Também poderíamos definir a função de cada segmento como **route**, mas não é necessário.  
- Clique em OK e a sua relação de rota estará concluída!  

> Se pretender uma lista de todas as relações no mapa, pode abrir o painel de relações clicando neste botão à esquerda: ![relation panel button][]{: height="30px"}. Isto irá abrir um painel onde pode selecionar, editar e criar novas relações.  

Resumo
-------

As relações podem ser difíceis de compreender e não precisam de ser utilizadas com frequência, mas é necessário conhecê-las. De vez em quando, pode aperceber-se de que precisa de uma relação para mapear algo corretamente e pode utilizar este conhecimento e encontrar mais informações na wiki do OSM para o ajudar a mapear corretamente as relações.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png