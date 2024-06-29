---
layout: doc
title: Ferramentas de edição do JOSM
permalink: /pt/josm/josm-tools/
lang: pt
category: josm
---

Ferramentas de Edição do JOSM
==================

> Revisto em 2017-06-09  

- TOC
{:toc}

No [guia para começar a utilizar o JOSM] (/pt/josm/start-josm/) cobrimos as noções básicas de desenho no JOSM, mas há muitas ferramentas e técnicas que não são demonstradas.

Aqui veremos algumas das ferramentas e técnicas básicas disponíveis para desenhar características cartográficas no JOSM, e nos capítulos seguintes aprofundaremos as ferramentas de desenho avançadas.

Obter o ficheiro de exemplo
-------------------

- Se quiser acompanhar e praticar a utilização das ferramentas JOSM, descarregue [tools_menu_sample.osm](/files/tools_menu_sample.osm). Inicie o JOSM e abra o ficheiro. Deverá ter o seguinte aspeto:

![tools_menu_sample.osm][]

Ferramentas de desenho
-------------

Se clicar no menu "Ferramentas" no topo do JOSM, verá que existem numerosas funções que o podem ajudar a desenhar linhas e formas, e a editar os objetos no mapa.

O JOSM tem algumas ferramentas adicionais para facilitar o desenho de linhas e formas. Estas ferramentas encontram-se no menu "Ferramentas" na parte superior do JOSM.

![Tools menu][]

Para aplicar as funções deste menu, deve primeiro selecionar um ponto, uma linha ou uma forma na janela do mapa. O ficheiro de exemplo contém vários elementos que estão identificados com os nomes das diferentes ferramentas do menu.

### Alinhar nós num círculo  

- Tente selecionar um dos elementos do ficheiro. Em seguida, vá ao menu Ferramentas e clique na função identificada ao lado do elemento selecionado. Por exemplo, clique no círculo mal desenhado para o selecionar.

![Align nodes in circle][]

- De seguida, vá a Ferramentas->Alinhar nós em círculo. O círculo mal desenhado tornar-se-á mais circular.

Experimente cada uma das ferramentas utilizando este ficheiro de exemplo. A descrição de algumas das ferramentas é fornecida abaixo.

### Dividir linha  

Isto permite-lhe dividir uma linha em duas linhas separadas. Isto é útil se quiser adicionar diferentes atributos a diferentes partes de uma estrada, como uma ponte. Para utilizar esta função, selecione um ponto no meio da linha que pretende dividir, selecione Dividir linha no menu Ferramentas e a sua linha será dividida em duas.


### Combinar linhas

Isto faz o oposto de Dividir linha. Para combinar duas linhas numa única linha, elas devem partilhar um único ponto. Para utilizar esta função, selecione as duas linhas que pretende combinar. Pode selecionar mais do que um objeto mantendo premida a tecla SHIFT no teclado e clicando em cada linha. Quando tiver selecionado ambas as linhas, selecione Combinar linhas no menu Ferramentas.

![Combine way][]


### Inverter e combinar  

Se estiver a combinar estradas com direções diferentes, poderá ver este aviso:

![Reverse and combine][]

Se as estradas estiverem ligadas e seguirem na mesma direção, escolha "Inverter e combinar".


### Inverter sentido da linha

Isto irá mudar a direção da linha. Todas as linhas no OSM têm uma direção, que é mostrada no JOSM pelas setas na linha. Normalmente, a direção não é importante, exceto no caso de estradas de sentido único e rios que correm numa determinada direção. Nestes casos, pode ser necessário inverter a linha para que siga na direção correta.

![Way direction][]

### Simplificar linha

Se a sua linha tiver demasiados pontos e quiser simplificá-la, esta opção remove alguns dos pontos de uma linha.

![Simplify way][]


### Alinhar nós em círculo

Utilize esta ferramenta, que criará um círculo mais perfeito. Desenhe uma linha que represente o diâmetro do seu círculo e, em seguida, aplique esta ferramenta.

![Create circle][]


### Alinhar nós em linha

Esta função alinhará uma série de pontos numa linha reta. Com linhas longas, é melhor selecionar secções da linha para endireitar. Tenha cuidado, pois isto tem a tendência para deslocar um pouco a linha.

![Align nodes in line][]

### Ortogonalizar linhas

Esta função é muito útil para desenhar formas regulares, como edifícios (**Mas veja também [JOSM building tools](/pt/josm/josm-more-plugins/)**). Depois de desenhar uma área, esta função irá remodelá-la para ter cantos quadrados.

![Orthagonalize][]


### Desligar linhas

Esta ferramenta permite-lhe separar os nós que estão ligados. É útil quando dois objetos partilham um nó quando não o deveriam fazer. Por exemplo, um erro comum é uma estrada partilhar um nó com o canto de um edifício. É claro que, normalmente, as estradas não se cruzam com edifícios, pelo que se trata de um erro e pode descolar os objetos um do outro.

![Unglue way][]

*A linha e o nó só aparecerão separados quando os mover.*

Atalhos de teclado
------------------

Quando começar a editar muito, aperceber-se-á de que perde muito tempo a clicar em menus e submenus. Para ultrapassar isto, o JOSM tem atalhos de teclado para quase tudo.

Isto significa que, em vez de clicar num objeto e depois passar por um longo percurso num menu, pode simplesmente selecionar o objeto e premir uma tecla no teclado.

Todas as ferramentas mencionadas na secção anterior têm teclas de atalho, que estão listadas no menu Ferramentas, à direita do nome de cada ferramenta. Por exemplo, "O" é a
tecla de atalho para alinhar os nós num círculo. "L" é o atalho para os alinhar numa linha. Pode demorar algum tempo a aprender as teclas de atalho, mas vai ver que poupa
muito tempo a longo prazo.

Aqui estão outras teclas de atalho (em **negrito**) que são algumas das mais importantes.

1.  Ativar a ferramenta de seleção - **S**
2.  Ativar a ferramenta de desenhar - **A**
3.  Ativar a ferramenta de de ampliar e diminuir (zoom) - **Z**
4.  Eliminar os objetos selecionados - **Del**
5.  Ampliar - **+**
6.  Diminuar - **-**


Dimensionar e rodar
----------------

Uma pergunta comum é como rodar uma linha ou forma depois de esta ter sido desenhada.

Para rodar um objeto, primeiro selecione-o. Mantenha premido **SHIFT+CTRL** no teclado. Clique e arraste o rato para rodar.

![Rotate demo][]

Para dimensionar um objeto (torná-lo maior ou menor), siga o mesmo processo, mas mantenha pressionadas as teclas ALT+CTRL.

Estas instruções são apresentadas na barra de informação na parte inferior do JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png