---
layout: doc
title: Iniciação ao JOSM
permalink: /pt/josm/start-josm/
lang: pt
category: josm
---

Iniciação ao JOSM
=================

Neste capítulo vamos aprender passo a passo como descarregar e instalar
o JOSM, o editor Java do OpenStreetMap. Modificaremos algumas das
configurações do JOSM para o tornar mais fácil de utilizar. Depois
abriremos um mapa exemplo e aprenderemos algumas operações básicas
do software. Lembra-se de quando pedimos, no capítulo 1, para desenhar
um mapa da sua localidade? Concluiremos este capítulo desenhando esse
mapa de novo, agora de forma digital. Depois disto, você terá um bom
entendimento de como desenhar mapas no JOSM.

Descarregar o JOSM
------------------

-  Abra o seu navegador web - pode ser o Firefox, o Chrome, Opera, ou
    Internet Explorer.

-  Na barra de endereços no topo da janela, escreva o seguinte texto e
    pressione “Enter”:

    [josm.openstreetmap.de](http://josm.openstreetmap.de)

-  Você pode também encontrar esta página web pesquisando por “JOSM” em um
    motor de pesquisa.
-  A página web deverá ter o seguinte aspecto:

  ![]({{site.baseurl}}/images/pt_beg_ch3_image04.png)

-  Se o seu computador tem o Windows instalado, escolha “Windows JOSM
    Installer” para descarregar o JOSM. Se tem um sistema operativo
    diferente clique no link para o seu sistema. O programa deverá
    começar a ser descarregado. Neste capítulo assumiremos que está a
    utilizar Windows, mas as instruções são similares para os outros
    sistemas operativos.

Instalar o JOSM
---------------

-  Você pode ter alguns problemas a instalar o JOSM se o Java não estiver já
    instalado no seu computador. Se tiver problemas, experimente
    descarregar e instalar o Java. Pode descarregá-lo aqui:  página em
    português -
    [http://www.java.com/pt\_BR/](http://www.java.com/pt_BR/) ou página
    em inglês
    [http://www.java.com/en/download/](http://www.java.com/en/download/)
-  Procure o ficheiro de instalação do JOSM que acabou de descarregar.
    Clique duas vezes rapidamente para iniciar a instalação. Aceite a
    instalação em Inglês.
-  Clique ‘OK’, ‘Next’, ‘I Agree’, e ‘Install’. Quando a instalação
    estiver terminada, clique “Finish’ para iniciar o JOSM pela primeira
    vez. Mais tarde, quando quiser iniciar o JOSM, pode fazê-lo clicando
    no menu “Iniciar” (ou “Start” na versão em inglês do Windows) no
    canto inferior esquerdo do seu computador, e escolhendo o JOSM na
    lista de programas que aparece.
-  Você pode ver uma janela que aparece a perguntar se quer atualizar o
    programa (em inglês “update the software”). Se tiver acabado de
    instalar não precisa fazer a atualização porque é o mais recente
    (mas mais tarde se vir esse aviso, é conveniente ir atualizando
    para poder dispor de melhorias no programa). Clique no botão que
    diz “Cancelar”.  Se não quiser ver esta mensagem novamente, escolha a
    opção na parte inferior da janela antes de pressionar “Cancelar” (é
    recomendável deixar o aviso de disponibilidade de atualização e ir
    atualizando a aplicação).
-  Quando o JOSM iniciar, terá o seguinte aspecto:

  ![]({{site.baseurl}}/images/pt_beg_ch3_image06.png)

Modificar a configuração do JOSM
------------------------------

-  Antes de começar a utilizar o JOSM, é uma boa ideia modificar
    algumas das suas configurações para facilitar a
    utilização. Para modificar as configurações, clicar em “Editar” no menu
    do topo, e depois escolher “Preferências”. Se preferir, pressione a tecla
    F12.

    ![]({{site.baseurl}}/images/pt_beg_ch3_image09.png)

### Adicionar o Plugin “Walking Papers”

-  Posteriormente, neste guia, aprenderemos a trabalhar com uma
    ferramenta chamada “Walking Papers”, a qual nos permitirá imprimir o
    mapa de uma área, desenhar nele e escrever notas, e depois colocar
    isso no JOSM como pano de fundo. Depois podemos editar por cima
    dessa imagem, introduzindo as nossas anotações no OpenStreetMap.
    Agora iremos adicionar o plugin “Walking Papers” ao JOSM.
-  Você deverá estar com a janela de preferências aberta. Se
    não estiver, clique em “Editar”\>”Preferências” para abrir a janela.
-  Do lado esquerdo, clique no ícone parecido com uma tomada elétrica.

  ![]({{site.baseurl}}/images/pt_beg_ch3_image03.png)

-  Clique no botão que diz “Baixar lista” (descarregar a lista de
    plugins). A lista será descarregada da Internet, e os plugins
    serão relacionados nesta aba da janela.
-  Na caixa de pesquisa no topo, escreva “walking”. Isto irá mostrar só
    items na lista que contêm “walking” no nome.
-  Clique na caixa ao lado do plugin walkingpapers e pressione “OK” no
    fundo da janela.
-  O “Walking Papers” será descarregado e instalado. Não clique em
    “Cancelar”.

### Mudar de Linguagem

-  O JOSM foi traduzido para muitos idiomas. Geralmente o JOSM já é carregado
    no idioma padrão do sistema operacional. Se, contudo, você necessitar
    alterar o idioma do software, siga as instruções abaixo.
-  Como o JOSM tem recebido melhorias de forma mais ou menos rápida,
    vão aparecendo novos comandos e opções e a tradução desatualiza-se
    com uma certa rapidez. Onde ainda não existe tradução os termos
    aparecem em inglês.
-  Se não tiver com a janela de “Preferências” aberta, clique em “Editar” -\>
    “Preferências”.
-  Do lado esquerdo, clique no ícone que se parece com uma lata de tinta
    e um pincel.
-  No topo da janela, clique no separador que diz “Aparência”.

  ![]({{site.baseurl}}/images/pt_beg_ch3_image01.png)

-  Escolha a linguagem na lista apresentada: “português” ou “português (Brasil)”.
-  Clique em “OK”.

-  É necessário reiniciar o JOSM para gravar e ativar as configurações.
    Clique em “Arquivo” no canto superior esquerdo, e clique em “Sair” no fundo
    do menu.
-  Reinicie o JOSM outra vez indo ao menu “Start” do Windows no canto
    inferior esquerdo. Procure o JOSM e clique nele para iniciar a
    aplicação.

Aprender Desenho Básico com o JOSM
----------------------------------

-  Agora vamos abrir um ficheiro OSM de exemplo no qual utilizaremos as
    formas básicas de desenhar mapas com o JOSM. Note que este mapa não
    é real, no sentido que não é um mapa de um local real, por isso
    não o iremos enviar para o OpenStreetMap.
-  Se lhe foi fornecido um conjunto de ficheiros pelo seu instrutor, já
    deverá ter o ficheiro que iremos abrir, chamado sample.osm.
-  Se não tem o arquivo sample.osm no seu computador, pode
    descarregá-lo da Internet: [sample.osm](/files/sample.osm)

-  Agora vamos abrir o arquivo do mapa de exemplo no JOSM. Abra o
    JOSM. Clique no botão “Abrir” no lado superior esquerdo.

    ![]({{site.baseurl}}/images/pt_beg_ch3_image08.png)

-  Procure o ficheiro sample.osm. Clique nele, e depois clique “Abrir”.
-  Você deverá agora ver um mapa de exemplo semelhante a este:

  ![]({{site.baseurl}}/images/pt_beg_ch3_image02.png)

### Operações Básicas

-  Para mover o mapa para a esquerda ou direita, para cima ou para
    baixo, mantenha o botão direito do rato (mouse) pressionado, e mova o rato
    na direção pretendida.
-  Existem várias formas de alterar o zoom (aumentar ou diminuir) do mapa.
    Se você tem um mouse, pode utilizar a roda de “scroll” para aproximar e
    afastar a visualização do mapa. Se você utiliza um computador portátil e
    não tem um mouse, pode alterar o zoom utilizando a barra de escala,
    visível no canto superior esquerdo do JOSM. Arraste a
    barra para a esquerda e para a direita, clicando na barra com o
    botão esquerdo do mouse e mantendo-o pressionado.

![]({{site.baseurl}}/images/pt_beg_ch3_image10.png)

-  Olhe para o mapa de exemplo. Existem diversos tipos de objetos no
    mapa. Há um rio, uma floresta, alguns edifícios, algumas
    estradas, e um par de lojas. Para selecionar um objeto, clique
    nele com o botão esquerdo do rato.

### Pontos, Linhas e Formas

-  Conforme você clica nos objetos no mapa exemplo, repare que existem nele
    três tipos diferentes de objeto. Existem nós (pontos), caminhos
    (linhas) e áreas (polígonos).
-  Os nós ou pontos são uma localização singular, representada por símbolos.
    Neste mapa de exemplo, existem dois pontos, uma loja de roupas e um
    supermercado. A loja de roupa é representada por um símbolo de uma
    camisa, e o mercado é representado por um carrinho de compras.
-  Existem também diversas linhas neste mapa,que representam estradas.
    Se reparar atentamente, verificará que nas linhas existem também
    nós. Estes nós não têm qualquer símbolo, ou outra informação
    associada, ajudando apenas a localizar a linha, como vértices desta.
-  Por último, existem polígonos numerosos no mapa de exemplo, representando
    locais diferentes - uma floresta, um rio, e edifícios. Geralmente,
    um polígono reresenta uma área, como um campo ou um edifício.
    Um polígono é exatamente como um caminho - a única diferença é que
    ele termina no mesmo ponto em que começa.
-  Você pode notar ainda que, quando seleciona um objeto, aparece uma
    lista à direita do mapa num diálogo com o título de “Propriedades / Associações”.
    As informações que aparecem nesta lista são conhecidas como tags
    (etiquetas). Tags são informações associadas a um nó, caminho ou área,
    e é o modo através do qual identificamos e descrevemos tudo o que está
    presente no mapa. Aprenderemos mais acerca de tags no Capítulo 7 - Edição Avançada.
    Por agora tudo o que você precisa saber é que esta informação ajuda a
    descrever se o objeto é uma floresta, um rio, um edifício, ou alguma outra coisa.
-  Pense como desenhar um mapa à mão, e como está também a desenhar
    nós, caminhos e áreas. Que outros locais são melhor representados
    por pontos? Linhas? Polígonos?

### Modificando Objectos

-  Selecione a floresta no lado esquerdo do mapa. Assegure-se de haver
    clicado na linha em torno da floresta, não em um dos pontos da linha
    (caso tenha clicado corretamente, você deverá ver todos os pontos
    da linha com o mesmo aspecto). Agora mantenha o botão esquerdo
    do rato pressionado sobre a linha e mova o rato. Com isso, você poderá
    mover a floresta para uma nova localização no mapa.
-  Clique num dos pontos da linha em torno da floresta. Mantenha o
    botão esquerdo do mouse pressionado e mova o mouse. Você poderá mover o
    ponto sem alterar o restante da linha. Esta é a maneira como podemos
    editar linhas e formas de um objeto, ou mover um ponto.

### Desenhando

-  No lado esquerdo do JOSM existe uma coluna de botões. Muitos destes
    botões abrem novas janelas do lado direito que mostram mais
    informação acerca do mapa. Porém, os botões mais importantes estão no topo
    desta coluna. Estes botões modificam aquilo que você pode fazer com o
    rato.
-  Os quatro botões do topo nesta coluna são os mais importantes. Eles
    permitem:

    1.  Selecionar, mover, escalar e rotacionar objetos
    2.  Desenhar nós
    3.  Ampliar e mover o mapa
    4.  Apagar nós e caminhos

-  Até agora, você tem estado a utilizar a ferramenta de seleção,
    cujo botão tem este aspecto:

    ![]({{site.baseurl}}/images/pt_beg_ch3_image00.png)

-  Antes de desenhar, é necessário se certificar de que nada está
    selecionado. Clique no espaço preto no mapa, onde não há nenhum
    objeto, para garantir que nada está selecionado.
-  Clique no segundo botão, a ferramenta de desenho.

  ![]({{site.baseurl}}/images/pt_beg_ch3_image07.png)

-  Procure uma zona vazia no mapa, e faça um duplo-clique com o mouse
    (clique duas vezes rapidamente com o botão esquerdo). Isto desenhará
    um nó.
-  Para desenhar um caminho, clique uma vez só com o rato (botão
    esquerdo). Mova o rato e clique novamente. Continue até estar
    satisfeito com a sua linha. Para terminar o caminho, faça duplo-clique
    (clique duas vezes rapidamente com o botão esquerdo). Pressionar a
    tecla “Esc” (escape) no canto superior esquerdo do teclado também
    faz com que você saia da criação de entidades ou da seleção que tiver
    ativa.
-  Desenhe uma área da mesma maneira que você desenhou o caminho, mas termine
    a área clicando no ponto inicial, onde você começou a desenhar.
-  

### Adicionado Predefinições

-  Agora já sabemos desenhar pontos, linhas e formas, mas ainda não
    definimos o que estes representam. Queremos poder dizer que os nossos
    pontos são lojas, escolas, ou qualquer outra coisa, e que as nossas
    áreas são campos, edifícios, ou outra coisa.
-  Clique na ferramenta de seleção (Select), na coluna dos botões à
    esquerda.

    ![]({{site.baseurl}}/images/pt_beg_ch3_image00.png)

-  Selecione um dos objetos que você desenhou. No menu principal do JOSM,
    clique em “Predefinições”. Mova o mouse através do sub-menu
    para o tipo de local que você gostaria de definir.
-  Quando clicar numa predefinição, um formulário irá aparecer numa
    janela, pedindo informações adicionais. Não é necessário preencher todos os
    campos, mas é interessante adicionar informação em alguns dos campos mais
    importantes, tais como o nome do objeto (por exemplo o nome da loja
    ou o nome da rua).
-  Quando tiver terminado de preencher a informação, clique em “Aplicar
    preferência” (aplicar predefinição). Se tudo ocorreu bem, o seu nó,
    caminho ou área deverá mudar de cor ou apresentar um símbolo. Isto
    acontece porque você definiu o que ele é.

### Desenhe o Seu Próprio Mapa

-  Agora vamos desenhar um mapa de forma a praticar as técnicas que
    você aprendeu. Talvez você queira redesenhar o mapa que havia desenhado no
    Capítulo 1.
-  Arraste o mapa para o lado do mapa de exemplo. Mantenha o botão
    direito do rato pressionado e arraste o rato, até ver uma área vazia
    suficiente para desenhar o seu novo mapa.
-  Utilize a ferramenta de desenho para criar nós, caminhos e
    áreas. Descreva o que são os seus objetos, selecionando
    propriedades a partir do menu de predefinição.
-  Quando tiver terminado, deverá ter o seu próprio mapa, similar ao
    mapa exemplo que abrimos a partir do ficheiro sample.osm.

Sumário
-------

Excelente! Se tudo ocorreu bem, você aprendeu a configurar o JOSM no seu
computador, e as ferramentas básicas para desenhar mapas. Nos próximos
dois capítulos, aprenderá como utilizar GPS e o “Walking Papers” para
mapear à sua volta. No Capítulo 6, iremos voltar ao JOSM e utilizar a
informação recolhida para adicionar objetos ao OpenStreetMap.

^[[a]](#cmnt1)^

[[a]](#cmnt_ref1)jgr:
