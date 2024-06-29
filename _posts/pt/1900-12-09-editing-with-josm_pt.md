---
layout: doc
title: Edição de dados de campo
permalink: /pt/josm/editing-with-josm/
lang: pt
category: josm
---

Edição de dados de campo
==================


Já cobrimos todos os blocos de edifícios do mapeamento com o OpenStreetMap. Na secção [Mapear com um telemóvel, GPS ou papel](/pt/mobile-mapping/) pode ver como utilizar ferramentas móveis para fazer o levantamento de uma área.

Neste capítulo, voltaremos mais uma vez ao JOSM e analisaremos alguns conceitos novos que não foram abordados até agora.

Camadas JOSM
-----------
Se acompanhou o JOSM até agora, deve ter reparado que podemos adicionar todo o tipo de coisas diferentes ao JOSM. Podemos descarregar dados do OSM, adicionar imagens de satélite do Bing, carregar pontos de passagem e trilhos GPS e adicionar dados do Field Papers - tudo isto é apresentado na janela do mapa do JOSM.

Também deve ter reparado que sempre que adiciona algo novo ao JOSM, é adicionado um item adicional ao painel Camadas no lado direito do JOSM. Dependendo do que tiver aberto, o seu painel Camadas pode ter o seguinte aspeto:

![Layers panel][]

Cada item desta lista representa uma fonte de dados diferente que tem aberta na janela do mapa. Neste exemplo, "Camada de dados 1" são os dados do OpenStreetMap que estamos a editar. "Field Papers" é a camada criada quando adicionámos o nosso Field Paper ao JOSM.

Se adicionar as imagens de satélite do Bing, aparecerá uma nova camada no painel Camadas com o nome "Bing - imagens aéreas"

A ideia de camadas pode muitas vezes ser difícil de compreender. Uma boa maneira de a imaginar é que cada camada é como uma folha de papel semi-transparente, empilhada uma sobre a outra. Cada pedaço de papel tem um determinado tipo de informação e pode ser reorganizado da forma que desejar.

As camadas que são utilizadas como referência, tais como imagens de satélite, trilhos GPS e documentos de campo, são frequentemente designadas por "camadas de base". A camada de dados do OSM é a camada com a qual se trabalha efetivamente.

-   Para mover uma camada, clique na mesma no painel Camadas e clique na seta para cima ou para baixo para a mover.

![Layers up down][]

-   Para ocultar uma camada, selecione-a com o rato e clique no botão Mostrar / Ocultar:

![Layers show hide][]

-   Deverá ver a camada que selecionou desaparecer na janela do mapa. Clique novamente em Mostrar / Ocultar e a camada voltará a aparecer.
-   Pode remover uma camada selecionando-a e utilizando o botão eliminar:

![Layers delete][]

-   Por último, é importante saber que só pode editar a camada que é considerada *ativa* pelo JOSM. Se não conseguir editar o mapa na sua janela do mapa, provavelmente é porque não tem a camada correta definida como ativa. A maioria das camadas, tais como pontos GPS, Field Papers e imagens de satélite, não podem ser editadas. As únicas camadas que podem ser editadas são os dados do OpenStreetMap, que são normalmente designados por "Camada de dados 1".
-   Para tornar uma camada ativa, selecione-a no painel Camadas e clique no botão Ativar:

![Layers activate][]


Utilizar dados GPS e Field Papers
-------------------------------
No capítulo [Mapear com um telemóvel, GPS ou papel](/pt/mobile-mapping/) vimos como recolher dados com um GPS e Field Papers, e como carregá-los no JOSM como uma camada.

Depois de fazer o levantamento com uma destas ferramentas, é necessário adicionar a informação ao OpenStreetMap de forma digital.

Faz isto com o mesmo processo que aprendeu anteriormente - **descarregar, editar, guardar**. A diferença é que, em vez de utilizar apenas imagens de satélite como camada de base, também pode utilizar os seus dados GPS, documentos de campo, notas ou uma combinação de todos eles.

-   Por exemplo, vamos assumir que tem os seus pontos de GPS como camada de fundo no JOSM, guardou um ponto de GPS com o nome 030, e escreveu no seu bloco de notas que 030 é uma escola. Para adicionar este ponto ao OpenStreetMap, selecione a ferramenta de desenho e faça duplo clique em cima do ponto 030 na sua janela do mapa. Isto irá criar um ponto. De seguida, vá ao menu Modelos de etiquetas e encontre o modelo para escola. Introduza o nome da escola e clique em "Aplicar etiquetas". Faça o mesmo para adicionar linhas e formas.

![GPS in JOSM][]

Etiquetas
----
Quando se desenha um ponto, uma linha ou uma forma, esta tem uma localização, mas nenhuma informação sobre o que é. Por outras palavras, sabemos **onde** está, mas não **o que é**. Até agora, temos utilizado itens do menu Modelos de etiquetas para definir **o que é**. A forma como o OpenStreetMap sabe **o que é** um objeto é através da utilização de **etiquetas**.

Uma etiqueta é como um rótulo que se pode colocar numa coisa. Por exemplo, se desenharmos um quadrado, ele é apenas um quadrado. Mas depois adicionamos-lhe atributos que descrevem o que é: este quadrado é um edifício; o nome do edifício é "Menara Thamrin"; o edifício tem 16 andares.

Pode adicionar tantas etiquetas quantas quiser a um objeto. As etiquetas são guardadas como pares de texto, chamados **chaves** e os **valores**. No OpenStreetMap, as etiquetas escritas acima seriam:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Se selecionar um objeto no JOSM, pode ver todas as etiquetas que lhe estão associadas no painel Propriedades à direita.

![Properties panel][]

### Editar etiquetas

Pode adicionar, editar e eliminar etiquetas a partir do painel Propriedades. No entanto, as etiquetas estão tradicionalmente em inglês e podem, por vezes, ser confusas, pelo que é frequentemente mais fácil utilizar o menu Modelos de etiquetas. Quando adiciona ou altera etiquetas, os atributos do objeto são alterados.

-   Para editar as etiquetas de um objeto, comece por selecioná-lo.
-   Em seguida, edite as etiquetas de uma de duas formas: (1) Utilize o menu Modelos de etiquetas ou (2) edite as etiquetas diretamente na janela Propriedades, à direita.

### Erro comum: marcar nós quando se pretende marcar linhas ou polígonos

Quando estiver a editar os atributos de um ponto, deve primeiro selecionar o ponto e depois adicionar etiquetas através do menu Modelos de etiquetas ou diretamente no painel Propriedades. Um erro comum é quando se adicionam atributos a uma linha ou a uma forma. Ao selecionar o objeto, é importante que
selecione a linha e NÃO os pontos que a compõem.

Isto ocorre frequentemente porque os editores utilizam a ferramenta de seleção JOSM para desenhar uma caixa à volta de um objeto, o que faz com que tudo, tanto a linha **como** os nós, seja selecionado e, quando adiciona etiquetas, estas são aplicadas também aos nós. Certifique-se de selecionar linhas **apenas** quando quiser adicionar etiquetas a elas.

![Nodes mistake][]

Guardar ficheiros OSM
----------------
Quando está a editar no JOSM, é sempre uma boa ideia descarregar, editar e carregar as alterações num período de tempo razoavelmente curto. Não quer descarregar dados num dia e depois esperar alguns dias para carregar as suas edições. E se outra pessoa editar a mesma área durante esse tempo? Isso causará erros e conflitos.

Não tenha receio de carregar as suas edições com frequência. Isto garante que as suas alterações serão guardadas na base de dados e que não perderá o seu trabalho árduo.

Se estiver a trabalhar numa única área, é uma boa ideia descarregar os dados do mapa sempre que pretender editar, para o caso de outro utilizador ter feito alterações.

Embora deva sempre tentar descarregar os dados OSM quando estiver pronto para editar e carregar as suas alterações frequentemente, pode haver casos em que queira guardar os dados do OpenStreetMap no seu computador. Por exemplo, se tiver uma ligação ocasional à Internet, pode querer descarregar os dados, guardá-los, editá-los e carregar as alterações mais tarde.

-   Para guardar um ficheiro OSM, certifique-se de que é a camada ativa no painel Camadas. Clique em "Ficheiro" no menu superior e clique em "Guardar". Escolha uma localização para o ficheiro e dê-lhe um nome. Também pode guardar clicando neste botão:

![JOSM save button][]

-   Pode agora fechar o JOSM e os seus dados serão guardados. Quando quiser abrir o ficheiro novamente, basta abrir o JOSM, ir ao menu "Ficheiro" e clicar em "Abrir…"

Sumário
-------
Neste capítulo, analisámos um pouco mais de perto a interface JOSM e aprendemos sobre camadas e etiquetas. Agora deve ter uma base sólida sobre como mapear e como editar o OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png