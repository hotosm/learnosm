---
layout: doc
title: Iniciação ao JOSM
permalink: /pt/beginner/start-josm/
lang: pt
category: beginner
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

-  Pode também encontrar esta página web pesquisando por “JOSM” num
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
    lista de programas  que aparece.
-  Você pode ver uma janela que aparece a perguntar se quer atualizar o
    programa (em inglês “update the software”). Se tiver acabado de
    instalar não precisa de fazer actualização porque é o mais recente
    (mas mais tarde se vir esse aviso, é conveniente ir actualizando
    para poder dispor de melhorias no programa).  Carregue no botão que
    diz “Cancel.”  Se não quiser ver esta mensagem nunca mais, escolha a
    opção no fundo da janela antes de pressionar “Cancel” (é
    recomendável deixar o aviso de disponibilidade de actualização e ir
    actualizando a aplicação).
-  Quando o JOSM iniciar, terá o seguinte aspecto:

  ![]({{site.baseurl}}/images/pt_beg_ch3_image06.png)

Modificar configuração do JOSM
------------------------------

-  Antes de começar a utilizar o JOSM, é uma boa ideia modificar
    algumas das suas configurações para tornar mais fácil a
    utilização. Para modificar as configurações, clicar em “Editar” no menu
    do topo, e depois escolher “Preferências”.

    ![]({{site.baseurl}}/images/pt_beg_ch3_image09.png)

### Adicionar o Plugin “Walking Papers”

-  Mais para a frente, neste guia, aprenderemos a trabalhar com uma
    ferramenta chamada “Walking Papers”, que nos permitirá imprimir o
    mapa de uma área, desenhar nele e escrever notas, e depois colocar
    isso no JOSM como pano de fundo. Depois podemos editar por cima
    dessa imagem, introduzindo as nossas anotações no OpenStreetMap.
    Agora iremos adicionar o plugin “Walking Papers” ao JOSM.
-  Você deverá estar com a janela de preferências aberta. Se
    não estiver, clique em “Editar”\>”Preferências” para abrir a janela.
-  Do lado esquerdo, clique no icon parecido com uma ficha elétrica.

  ![]({{site.baseurl}}/images/pt_beg_ch3_image03.png)

-  Clique no botão que diz “Download list” (descarregar a lista de
    plugins). A lista será descarregada da Internet, e quando terminar
    deverá ver ter os plugins opcionais a aparecer na janela.
-  Na caixa de pesquisa no topo, escreva “walking”. Isto irá mostrar só
    items na lista que contêm “walking” no nome.
-  Clique na caixa ao lado do plugin walkingpapers, e pressione “OK” no
    fundo da janela.
-  O “Walking Papers” será descarregado e instalado. Não clique em
    “Cancelar”.

### Mudar de Linguagem

-  O JOSM foi traduzido para muitos idiomas. Se foi traduzido para a
    sua linguagem, pode modificar isso em “Preferências”.
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

-  Escolha a linguagem na lista apresentada “português” ou “português (Brasil)”.
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
    não o iremos gravar para o OpenStreetMap.
-  Se lhe foi fornecido um conjunto de ficheiros pelo seu instrutor, já
    deverá ter o ficheiro que iremos abrir, chamado sample.osm.
-  Se não tem o ficheiro sample.osm no seu computador, pode
    descarregá-lo da Internet. Abra o seu navegador e na barra de
    endereços no topo da janela, escreva o seguinte texto:

    [http://www.learnosm.org/files/](http://www.learnosm.org/files/)

Clique com o botão direito no ficheiro chamado sample.osm, e
clique “Salvar Link Como...” Escolha um local no seu computador para gravar
o arquivo.

-  Agora vamos abrir o ficheiro do mapa de exemplo no JOSM. Abra o
    JOSM. Clique no botão “Open” no lado superior esquerdo.

    ![]({{site.baseurl}}/images/pt_beg_ch3_image08.png)

-  Procure o ficheiro sample.osm. Clique nele, e depois clique “Open”.
-  Deverá agora ver um mapa exemplo, semelhante a este:

  ![]({{site.baseurl}}/images/pt_beg_ch3_image02.png)

### Operações Básicas

-  Para mover o mapa para a esquerda ou direita, para cima ou para
    baixo, mantenha o botão direito do rato pressionado, e mova o rato
    na direção pretendida.
-  Existem várias formas de fazer zoom (aumentar e diminuir) do mapa.
    Se tem um rato, pode utilizar a roda de “scroll” para aproximar e
    afastar a vista do mapa. Se está a utilizar um computador portátil e
    não tem um mapa, pode fazer zoom utilizando a barra de escala,
    visível no canto superior esquerdo da janela do mapa. Arraste a
    barra para a esquerda e para a direita, clicando na barra com o
    botão esquerdo do rato e mantendo-o pressionado.

![]({{site.baseurl}}/images/pt_beg_ch3_image10.png)

-  Olhe para o mapa de exemplo. Existem diversos tipos de objectos no
    mapa. Está lá um rio, uma floresta, alguns edifícios, algumas
    estradas, e um par de lojas. Para seleccionar um objecto, clique
    nele com o botão esquerdo do rato.

### Pontos, Linhas e Formas

-  Conforme clica nos objectos no mapa exemplo, repare que existem nele
    três tipos diferentes de objecto. Existem pontos (points), linhas
    (lines) e formas (shapes).
-  Os pontos são uma localização singular, representada por símbolos.
    Neste mapa exemplo, existem dois pontos, uma loja de roupas e um
    mercado. A loja de roupa é representada por um símbolo de uma
    camisa, e o mercado é representado por um carrinho de compras.
-  Existem também diversas linhas neste mapa,que representam estradas.
    Se reparar atentamente, verificará que nas linhas existem também
    pontos. Estes pontos não têm qualquer símbolo, ou outra informação
    associada, ajudando só a localizar a linha, como vértices desta.
-  Por último, existem formas numerosas no mapa exemplo, representando
    locais diferentes - uma floresta, um rio, e edifícios. Geralmente,
    uma forma (shape) reresenta uma área, como um campo ou um edifício.
    Uma forma é exactamente como uma linha - a única diferença sendo que
    a forma termina no mesmo ponto que começa.
-  Pode notar ainda que, quando selecciona um objecto, aparece uma
    lista à direita do mapa numa janela chamada “Properties”
    (Propriedades). Estas são conhecidas como tags (etiquetas). Tags são
    informação que está ligada a um ponto, linha ou forma, que descreve
    aquilo que a entidade é. Aprenderemos mais acerca de tags no
    Capítulo 7, Edição Avançada - Por agora tudo o que precisa de saber
    é que esta informação ajuda a descrever se o objecto é uma floresta,
    um rio, um edifício, ou outra coisa.
-  Pense como desenhar um mapa à mão, e como está também a desenhar
    pontos, linhas e formas. Que outros locais são melhor representados
    por pontos? Linhas? Formas?

### Modificando Objectos

-  Seleccione a floresta no lado esquerdo do mapa. Assegure-se de que
    clica na linha em torno da floresta, não num dos pontos da linha
    (deverá ver todos os pontos da linha com o mesmo aspecto). Agora
    mantenha o botão esquerdo do rato premido e mova o rato. Deverá
    poder mover a floresta para uma nova localização no mapa.
-  Clique num dos pontos da linha em torno da floresta. Mantenha o
    botão esquerdo do rato premido e mova o rato. Deverá poder mover o
    ponto (sem mexer o resto da linha). Esta é a maneira de editar as
    linhas e formas de um objecto, ou mover um ponto.

### Desenhando

-  No lado esquerdo do JOSM existe uma coluna de botões. Muitos destes
    botões abrem novas janelas do lado direito que mostram mais
    informação acerca do mapa. Os botões mais importantes estão no topo
    desta coluna. Estes botões modificam aquilo que pode fazer com o
    rato.
-  Os quatro botões do topo nesta coluna são os mais importantes. Eles
    permitem:

    1.  Selecionar (Select)
    2.  Desenhar (Draw)
    3.  Aumentar (Zoom in)
    4.  Apagar (Delete)

-  Até agora, tem estado a utilizar a ferramenta de selecção (Select),
    cujo botão tem este aspecto:

    ![]({{site.baseurl}}/images/pt_beg_ch3_image00.png)

-  Antes de desenhar, precisa de se certificar de que nada está
    seleccionado. Clique no espaço preto no mapa, onde estiver vazio,
    para garantir que nada está seleccionado.
-  Clique no segundo botão, a ferramenta de desenho (Draw).

  ![]({{site.baseurl}}/images/pt_beg_ch3_image07.png)

-  Procure uma zona vazia no mapa, e faça um duplo-clique com o rato
    (clique duas vezes rapidamente com o botão esquerdo). Isto desenhará
    um ponto.
-  Para desenhar uma linha, clique uma vez só com o rato (botão
    esquerdo). Mova o rato e clique novamente. Continue até estar
    satisfeito com a sua linha. Para terminar a linha, faça duplo-clique
    (clique duas vezes rapidamente com o botão esquerdo). O pressionar a
    tecla “esc” (escape) no canto superior esquerdo do teclado também
    faz com que saia da criação de entidades ou da selecção que tiver
    activa.
-  Desenhe uma forma da mesma maneira que desenhou a linha, mas termine
    a forma clicando no ponto inicial onde começou a desenhar.
-  

### Adicionado pré-configurações (Presets)

-  Agora já sabemos desenhar pontos, linhas e formas, mas ainda não
    definimos o que representam. Queremos poder dizer que os nossos
    pontos são lojas, escolas, ou outra coisa, e se as noas formas são
    campos, edifícios, o outra coisa.
-  Clique na ferramenta de selecção (Select), na coluna dos botões à
    esquerda.

    ![]({{site.baseurl}}/images/pt_beg_ch3_image00.png)

-  Seleccione um dos objectos que desenhou com a ferramenta “Draw”. No
    menu do topo, clique em “Presets”. Mova o rato através do sub-menu
    para o tipo de local que gostaria de definir.
-  Quando clicar numa pré-configuração, um formulário irá aparecer numa
    janela, pedindo informação adicional. Não tem de preencher todos os
    campos, mas quererá adicionar informação nalguns dos campos mais
    importantes, tais como o nome do objecto (por exemplo o nome da loja
    ou o nome da rua).
-  Quando tiver terminado de preencher a informação, clique em “Apply
    Preset” (aplicar pré-configuração). Se tudo correu bem, o seu ponto,
    linha, ou forma deverá mudar de cor ou apresentar um símbolo. Isto
    acontece porque definiu o que é o objecto.

### Desenhe o Seu Próprio Mapa

-  Agora vamos desenhar um mapa de forma a praticar as técnicas que
    aprendeu. Pode querer redesenhar o mapa que tinha desenhado no
    Capítulo 1.
-  Arraste o mapa para o lado do mapa de exemplo. Mantenha o botão
    direito do rato pressionado e arraste o rato, até ver uma área vazia
    suficiente para desenhar o seu novo mapa.
-  Utilize a ferramenta de desenho (Draw) para criar pontos, linhas e
    formas. Descreva o que são os seus objectos, seleccionando
    propriedades a partir do menu de pré-configuração (Presets).
-  Quando tiver terminado, deverá ter o seu próprio mapa, similar ao
    mapa exemplo que abrimos a partir do ficheiro sample.osm.

Sumário
-------

Excelente! Se tudo correu bem, aprendeu como configurar o JOSM no seu
computador, e as ferramentas básicas para desenhar mapas. Nos próximos
dois capítulos, aprenderá como utilizar GPS e o “Walking Papers” para
mapear à sua volta. No Capítulo 6, iremos voltar ao JOSM e utilizar a
informação recolhida para adicionar objectos ao OpenStreetMap.

^[[a]](#cmnt1)^

[[a]](#cmnt_ref1)jgr:

Agora o Bing aparece no menu, sem ser necessário ir às preferências
