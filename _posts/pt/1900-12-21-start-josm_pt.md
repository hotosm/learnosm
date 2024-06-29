---
layout: doc
title: Começar a utilizar o JOSM
permalink: /pt/josm/start-josm/
lang: pt
category: josm
published: true
---

Começar a utilizar o JOSM
=============================


Como descarregar e instalar o JOSM, o editor Java OpenStreetMap, alterar algumas das definições, abrir um mapa de exemplo e aprender algumas das operações básicas do software. Lembra-se, no capítulo de introdução, quando lhe pedimos para desenhar um mapa da sua cidade ou aldeia? Vamos concluir este capítulo desenhando novamente o seu mapa, desta vez digitalmente. Depois disto, deve ter uma boa compreensão de como desenhar mapas no JOSM.

Descarregar o JOSM
-------------

-   Se tiver uma cópia do JOSM num CD ou numa unidade flash USB, pode passar à secção seguinte, Instalar o JOSM.
-   Se ainda não tem o JOSM, ou se pretende a versão mais recente, abra o seu navegador Web - pode ser o Firefox, Chrome, Opera ou Edge.
-   Na barra de endereço no topo da janela, introduza o seguinte texto e prima Enter: [josm.openstreetmap.de](http://josm.openstreetmap.de)
-   Também pode encontrar o sítio Web do JOSM pesquisando na Internet por "JOSM".
-   O sítio Web deve ter um aspeto semelhante ao seguinte:

    ![JOSM website][]

-   Se tiver o Windows instalado no seu computador, clique em "Windows Installer" para descarregar o JOSM.

    ![Windows installer][]

-   Se tiver um sistema operativo diferente, clique na hiperligação para o seu sistema. O descarregamento deve começar. Neste capítulo, partiremos do princípio de que está a utilizar o Windows, mas as instruções são semelhantes para outros sistemas operativos.

Instalar o JOSM
------------

>  Se tiver um sistema operativo diferente, clique na ligação para o seu sistema. A transferência deve começar. Neste capítulo, partiremos do princípio de que está a utilizar o Windows, mas as instruções são semelhantes para outros sistemas operativos.: <http://www.java.com/en/download/>
>
>  Os utilizadores de Mac podem ter versões antigas de Java. Consulte <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation> para ver as opções para OSX 10.6 e 10.7.3+

-   Localize o ficheiro de instalação do JOSM no seu computador. Faça duplo clique no mesmo para iniciar a instalação.
-   Clique em "OK", "Seguinte", "Concordo" e "Instalar". Quando a instalação estiver concluída, clique em "Concluir" para iniciar o JOSM pela primeira vez. Mais tarde, quando quiser iniciar o JOSM, pode fazê-lo clicando no Menu Iniciar no canto inferior esquerdo do seu computador e clicando no programa JOSM.
-   Poderá aparecer uma janela a perguntar se pretende atualizar o software. Não é necessário atualizá-lo, uma vez que é recente. Prima o botão que diz "Cancelar". Se não quiser voltar a ver esta mensagem, selecione a caixa na parte inferior antes de premir “Cancelar.”
-   Quando o JOSM é iniciado, terá um aspeto semelhante ao seguinte:

    ![JOSM splash page][]

Preferências do JOSM
----------------

Existem muitas definições diferentes que podem ser personalizadas no JOSM. Uma definição que pode querer ajustar é o idioma. O JOSM foi traduzido para vários idiomas e pode preferir trabalhar num idioma diferente.

-   Para aceder à janela Preferências, clique em Editar -> Preferências.

    ![Preferences window][]

-   No lado esquerdo, clique no ícone que se assemelha a uma lata de tinta e a um pincel.
-   Na parte central do lado esquerdo da janela, clique no separador "Idioma".
-   Escolha o seu idioma na caixa pendente junto à palavra "Idioma".

    ![Look and feel][]

-   Clique em OK.
-   Tem de reiniciar o JOSM para guardar as suas definições. Clique em "Ficheiro" no canto superior esquerdo e clique em "Reiniciar" na parte inferior do menu.

Aprender desenho básico com JOSM
-----------------------------

-   Agora vamos abrir um ficheiro OSM de exemplo que iremos utilizar para aprender as formas básicas de desenhar mapas com o JOSM. Note que este mapa não é real, ou seja, não é um mapa real de um local real, por isso não o vamos enviar para o OpenStreetMap.
-   Descarregue o ficheiro aqui: [sample.osm](/files/sample.osm)
-   Agora vamos abrir o ficheiro de mapa de amostra no JOSM. Clique no botão "Abrir" no canto superior esquerdo.

    ![Open file][]

-   Localize o ficheiro **sample.osm**. Provavelmente está na pasta Downloads / Transferências / Descarregamentos, a menos que o tenha guardado noutro local. Clique nele e, em seguida, clique em "Abrir".
-   Deve agora ver um mapa de amostra com o seguinte aspeto:

    ![Sample file][]

-   Utilizará estes dados para experimentar várias técnicas de edição. No entanto, nunca deve enviar estes dados fictícios para o OpenStreetMap._

### Operações básicas

-   Para mover o mapa para a esquerda ou para a direita, para cima ou para baixo, mantenha o botão direito do rato premido e mova o rato.
-   Existem várias formas de aumentar e diminuir o zoom do mapa. Se tiver um rato, pode utilizar o botão central do rato, se for uma roda de deslocamento, para aumentar e diminuir o zoom. Se estiver a utilizar um computador portátil e não tiver um rato, pode aumentar ou diminuir o zoom utilizando a barra de escala no canto superior esquerdo da janela do mapa. Arraste a barra para a esquerda e para a direita, mantendo premido o botão esquerdo do rato e movendo a barra para a esquerda ou para a direita com o rato.

    ![Scale bar][]

-   Veja o mapa de exemplo. Há aqui alguns tipos diferentes de objetos. Há um rio, uma floresta, alguns edifícios, várias estradas e algumas lojas. Para selecionar um objeto, clique nele com o botão esquerdo do rato.

### Pontos, linhas e formas

-   Ao clicar em diferentes objetos no mapa de amostra, observe que existem três tipos diferentes de objetos no mapa. Existem pontos, linhas e formas.
-   Os pontos são uma localização única, representada por símbolos. Neste mapa de exemplo, existem dois pontos, uma sapataria e um supermercado. A sapataria é representada por um símbolo de sapato e o supermercado é representado por um carrinho de compras.
-   Existem também várias linhas no mapa, que representam estradas. Se olhar com atenção, verá que dentro das linhas também existem pontos. Estes pontos não têm quaisquer símbolos ou outras informações associadas, mas ajudam a definir a localização da linha.
-   Por último, existem várias formas no mapa de exemplo, que representam diferentes locais - uma floresta, um rio, um parque e edifícios. Uma forma é utilizada para representar uma área, como um campo ou um edifício. Uma forma é exatamente como uma linha - a única diferença é que a linha começa no mesmo ponto em que termina.

> É fácil pensar num mapa como contendo estes três tipos básicos de objetos -
> pontos, linhas e formas. No OpenStreetMap existe uma terminologia especial
> que aprenderá à medida que for progredindo. No OSM, os pontos são de facto chamados
> **nós** e as linhas são chamadas **vias**. Uma forma é chamada de **via fechada**
> porque é apenas uma linha que termina no mesmo ponto em que começa.

-   Pode reparar que, quando seleciona um objeto, aparece uma lista à direita do mapa numa janela chamada "Etiquetas / membros". Estas são conhecidas como etiquetas. As etiquetas são informações associadas a um ponto, linha ou forma que descrevem o que é. Aprenderemos mais sobre etiquetas num capítulo posterior. Por agora, tudo o que precisa de saber é que esta informação ajuda a descrever se o nosso objeto é uma floresta, um rio, um edifício ou outra coisa qualquer.
-   Pense em desenhar um mapa à mão e em como está também a desenhar pontos, linhas e formas. Que outros sítios são melhor representados por pontos? Linhas? Formas?

### Alteração de objetos

-   Selecione a floresta no lado esquerdo do mapa. Certifique-se de que clica na linha que rodeia a floresta e não num dos pontos da linha. Agora, mantenha o botão esquerdo do rato premido e arraste o rato. Deverá ser possível mover a floresta para uma nova localização no mapa.
-   Clique num dos pontos da linha que rodeia a floresta. Mantenha o botão esquerdo do rato premido e arraste o rato. Deverá ser possível mover o ponto. É assim que se pode alterar a forma de um objeto ou mover um ponto.

### Desenhar

-   No lado esquerdo do JOSM existe uma coluna de botões. Muitos destes botões abrem novas janelas no lado direito que fornecem mais informações sobre o mapa. No entanto, os botões mais importantes encontram-se no topo desta coluna. Estes botões alteram o que pode fazer com o rato.
-   Os botões superiores desta coluna são os mais utilizados. São utilizados para selecionar objetos e para desenhar novos objetos.
-   Até agora, tem estado a utilizar a ferramenta Selecionar, que tem o seguinte aspeto:

    ![Select tool][]

-   Antes de desenhar, é necessário certificar-se de que nada está selecionado. Clique no espaço a preto do mapa, onde está vazio, para se certificar de que nada está selecionado.
-   Clique no segundo botão, a ferramenta Desenhar.

    ![Draw tool][]

-   Encontre uma área vazia no mapa e faça duplo clique com o rato. Isto irá desenhar um único ponto.
-   Para desenhar uma linha, faça um único clique com o rato. Mova o rato e clique novamente. Continue até ficar satisfeito com a sua linha. Para terminar a linha, faça duplo clique no rato.
-   Desenhe uma forma da mesma forma que desenha uma linha, mas termine a forma fazendo duplo clique no ponto onde começou a linha.

### Adicionar modelos de etiquetas

-   Agora sabemos como desenhar pontos, linhas e formas, mas ainda não definimos o que representam. Queremos poder dizer que os nossos pontos são lojas, escolas ou outra coisa qualquer, e se as nossas formas são campos, edifícios ou outra coisa qualquer.
-   Clique na ferramenta Selecionar, na coluna de botões à esquerda.

    ![Select tool][]

-   Selecione um dos objetos que desenhou com a ferramenta Desenhar. No menu superior, clique em "Modelos de etiquetas". Mova o rato através do sub-menu para o tipo de localização que pretende definir.
-   Quando clica num modelo de etiquetas, aparece um formulário que lhe pede mais informações. Não é necessário preencher todos os campos, mas pode querer adicionar alguns dos campos importantes, como o nome do objeto.
-   Quando terminar de introduzir as informações, clique em "Aplicar etiquetas". Se tudo correu bem, o seu ponto, linha ou forma deve mudar de cor ou mostrar um símbolo. Isto deve-se ao facto de ter definido o que é.

Desenhe o seu próprio mapa
-----------------

-   Agora vamos desenhar um mapa para praticar as técnicas que aprendeu. Pode querer redesenhar o mapa que desenhou anteriormente no papel.
-   Arraste o mapa para longe do mapa de amostra. Mantenha premido o botão direito do rato e arraste o rato até ter uma boa área vazia para desenhar.
-   Utilize a ferramenta Desenhar para criar pontos, linhas e formas. Descreva os seus objetos selecionando-os no menu Modelos de etiquetas.
-   Quando terminar, deverá ter o seu próprio mapa, semelhante ao mapa de amostra que abrimos em sample.osm.

Remover a camada de amostra
-----------------------

Quando se sentir à vontade com estas técnicas básicas de edição, pode querer
para se concentrar no mapeamento das características reais.

_É muito importante que remova primeiro a camada com os dados de amostra.
Estes dados são fictícios e não devem ser enviados para a base de dados
do OpenStreetMap (as versões mais recentes do JOSM impedem-no automaticamente)._

No painel Camadas, no canto superior direito do ecrã, selecione a camada sample.osm.
Em seguida, clique no ícone do caixote do lixo no canto inferior direito dessa janela.
Em alternativa, pode selecionar Eliminar no menu de contexto da camada.
Para continuar a editar, primeiro é necessário descarregar dados reais.
Isto será explicado no próximo capítulo.

Sumário
-------

Excelente! Se tudo correu bem, aprendeu a configurar o JOSM no seu
computador e as ferramentas básicas para desenhar mapas. No próximo capítulo, iremos
Veja mais de perto o processo de edição do mapa OSM com o JOSM.

[josm website]: /images/josm/josm-website.png

[windows installer]: /images/josm/windows-installer.png

[josm splash page]: /images/josm/josm-splash-page.png

[preferences window]: /images/josm/josm_preferences.png

[look and feel]: /images/josm/josm_look-and-feel.png

[open file]: /images/josm/josm_open-file.png

[sample file]: /images/josm/josm_sample-file.png

[scale bar]: /images/josm/josm_scale-bar.png

[select tool]: /images/josm/josm_select-tool.png

[draw tool]: /images/josm/josm_draw-tool.png