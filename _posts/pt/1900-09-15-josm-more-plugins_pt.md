---
layout: doc
title: Módulos do JOSM - Building Tools e Utilsplugin2
permalink: /pt/josm/josm-more-plugins/
lang: pt
category: josm
---

Módulos do JOSM - Building Tools e Utilsplugin2
============


Os módulos **buildings_tools** e **utilsplugin2** acrescentam uma grande funcionalidade ao JOSM. Nesta secção vamos ver mais de perto as funções que fornecem.  

O módulo Building Tools
--------------------------

Se ainda não o fez, instale este módulos seguindo as instruções em [Módulos JOSM](/pt/josm/josm-plugins).  

![Buildings tools plugin][]

O módulo Buildings Tools é muito útil para digitalizar edifícios. Permite-lhe traçar um lado de um edifício retangular e estender facilmente a forma. Se estiver a digitalizar muitos edifícios, este módulo irá poupar-lhe cliques e, consequentemente, poupar-lhe tempo.  

Assim que o módulo tiver sido instalado, verá um novo botão no lado esquerdo do JOSM, que tem o seguinte aspeto: ![Buildings tools button][]{: height="29px"}

Inicie o JOSM e descarregue uma área onde pretende localizar edifícios.  

### Edifícios retangulares

* Selecione a ferramenta de construção e clique duas vezes para desenhar uma linha no mapa.  

![Draw edge][]

* Em seguida, estenda o rato e clique novamente para desenhar um retângulo.  

![Extend building][]

* Isto não só criará um retângulo com apenas três cliques, como também aplicará automaticamente a etiqueta **building=yes** à forma.  

### Edifícios circulares

* Em "+ferramentas"->"Modos de desenhar edifícios" selecione "Definir a forma geométrica do edifício em círculo ou retângulo" ou utilize o atalho ALT+Z (quando voltar a desenhar edifícios retangulares utilize ALT+R). Depois desenhe o diâmetro do edifício.

![Round building][]

### Edifícios complexos

Também pode criar edifícios mais complicados desenhando primeiro vários edifícios sobrepostos e depois juntando-os.  

* Desenhe dois edifícios que se sobrepõem, de modo a formarem um L.  
* Selecione ambos os edifícios (mantenha premida a tecla SHIFT para selecionar mais do que um objeto).  
* Vá a Ferramentas->Unir áreas sobrepostas ou prima SHIFT+J no seu teclado.  

![Merge buildings][]

### Editar as configurações

Além disso, pode alterar as configurações predefinidas do módulo.  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* Se estiver a criar muitos edifícios de tamanho semelhante, pode definir dimensões específicas de largura e altura dos edifícios, como 6 x 10 metros (a unidade está em metros).  

![Set buildings size dialog][]

* Ao definir as dimensões, só precisa de dois cliques para criar edifícios de tamanho exato.  

Por último, pode clicar no botão Avançado se pretender adicionar etiquetas adicionais que serão automaticamente aplicadas a cada edifício. Por exemplo, se todos os edifícios que desenhar estiverem na mesma rua, pode adicionar uma etiqueta que identifique a rua que será aplicada automaticamente.  

![Buildings advanced][]


Utilsplugin2
-------------

* Se ainda não o fez, instale este módulo seguindo as instruções em [Módulos JOSM](/pt/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Depois de ter instalado o módulo e reiniciado o JOSM, terá um novo menu no topo chamado "+ferramentas".  

![More tools menu][]

Crie uma nova camada e experimente algumas das novas ferramentas. De seguida, descrevemos algumas das novas ferramentas mais úteis:  

1. **Adicionar nós nas intersecções:** esta ferramenta é muito útil para adicionar nós em falta nas intersecções de vias selecionadas. É boa prática que as estradas tenham sempre nós comuns nos locais onde se intersectam.  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Adicionar etiqueta de fonte:** esta ferramenta simplifica a adição de uma etiqueta de fonte/origem da informação. Lembra-se da fonte que foi especificada em último lugar e adiciona-a como etiqueta de fonte lembrada aos seus objetos. Pode inserir a fonte com apenas um clique.  

4. **Substituir geometria (mantém histórico de autores):** esta ferramenta é excelente se pretender redesenhar um objeto mal desenhado, mas quiser manter o histórico, os atributos e o número de identificação desse objeto. Por exemplo, se encontrar um edifício complicado e mal desenhado, em vez de alterar dolorosamente cada nó, pode desenhar o objeto novamente, selecionar os objetos antigos e novos e selecionar ¨Substituir geometria¨ para transferir toda a informação.  

    ![Replace geometry][]


### Mais ferramentas de seleção

**Utilsplugin2** também fornece mais ferramentas no menu "Seleção". Experimente-as.  

![Selection menu][]

Uma das nossas ferramentas de seleção favoritas é **Desselecionar nós:** esta ferramenta anula a seleção de todos os nós. Isto pode ser útil se fizer a seleção predefinida "em caixa" para selecionar muitos objetos, mas não quiser selecionar os nós contidos em todas as linhas e formas.  

![Unselect nodes][]

Boa sorte!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

