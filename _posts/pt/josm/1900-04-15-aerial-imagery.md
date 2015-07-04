---
layout: doc
title: Edição Avançada
permalink: /pt/josm/aerial-imagery/
lang: pt
category: josm
---

Edição Avançada
===============

Nos capítulos anteriores aprendeu a desenhar pontos, linhas, e formas
(shapes) no JOSM. como abrir os pontos de referência (waypoints) e
caminhos (tracks) do seu GPS, e como descarregar, editar, e carregar as
suas modificações no OpenStreetMap. Neste capítulo, descreveremos em
mais detalhe algumas das características do JOSM, de forma a poder ir
para lá das simples ferramentas de edição e ter uma melhor compreensão
do software. Note que embora este capítulo não seja extremamente
avançado, é um degrau acima dos capítulos anteriores. Se achar que não
entendeu plenamente as lições anteriores, talvez queira praticar um
pouco mais antes de continuar.

Uma visita ao JOSM
------------------

![]({{site.baseurl}}/images/pt_beg_ch7_image08.png)

-  JOSM tem muitos elementos diferentes. Já está familiarizado com a
    janela principal do JOSM - Isto é a janela do mapa, e é onde a maior
    parte da acção se desenrola. Aqui visualiza, edita, e adiciona dados
    ao OpenStreetMap.
-  Para a direita da janela do mapa existe uma série de painéis,
    servindo cada um para uma coisa diferente.Tipicamente, quando
    instala pela primeira vez o JOSM,vários painéis são mostrados por
    omissão, tais como “Layers” (camadas), “Properties”
    (características), e “Selection” (seleção). Quando selecciona um
    ponto, linha, ou forma, na janela do mapa, isso será mostrado no
    painel “Selection”. Informação acerca do objecto será mostrada no
    painel “Properties” (características), e o nome de utilizador do
    autor desse objecto será mostrado no painel “Authors” (autores).
-  Do lado esquerdo do JOSM, existem várias barras de ferramentas, que
    apresentam muitos botões. No topo desta barra estão diferentes
    botões que mudam o que pode fazer com o rato. Já está familiarizado
    com os dois primeiros, a ferramenta “Select” (selecionar) e a
    ferramenta “Draw” (desenhar). As outras ferramentas tornam mais
    fácil fazer “zoom” (aumentar e diminuir o mapa), apagar um objecto,
    desenhar uma forma (shape), ou criar uma linha paralela a outra
    linha.
-  Por baixo destas ferramentas existem muitos mais botões. Estes
    botões controlam o que vê do lado direito do JOSM. Utilizando estes
    botões pode abrir e fechar as caixas à direita, como por exemplo,
    características (properties), seleção (selection), e autor (author).

Camadas (Layers) do JOSM
------------------------

-  Abra o ficheiro do seu GPS e descarregue dados do OpenStreetMap, se
    ainda não o fez. Repare que quando abre um ficheiro, ou adiciona
    “Walking Papers”, ou descarrega dados do OpenStreetMap, outro item é
    adicionado ao painel “Layers” (camadas), no lado direito do JOSM. O
    seu painel de camadas (Layers) deverá ter o seguinte aspecto::

    ![]({{site.baseurl}}/images/pt_beg_ch7_image05.png)

-  Cada item nesta lista representa uma fonte diferente de dados que
    pode abrir na sua janela de mapa. No exemplo acima, “Data Layer 2”
    são os dados do OpenStreetMap que queremos editar. “Markers”
    (marcadores) são os pontos de referência (waypoints) do GPS, e “30
    Juni 2011.gpx” é o caminho (track) do GPS. Finalmente, “Walking
    Papers” é a camada ( layer) criada quando adicionei o meu “Walking
    Paper” ao JOSM. Pode adicionar a camada de imagens do Bing,que
    mostra imagens de satélite, clicando em “Imagery” no menu de topo do
    JOSM e seleccionando “Bing Sat”.
-  Para esconder uma destas camadas (layers), selecione uma delas com o
    rato e clique o botão “Show/Hide” (Mostrar/Esconder) que tem o
    seguinte aspecto:

    ![]({{site.baseurl}}/images/pt_beg_ch7_image03.png)

-  Deverá ver a camada que selecionou desaparecer na janela do mapa.
    Clique no botão novamente, e ela deverá reaparecer.
-  Pode fechar uma camada selecionando-a e utilizando o botão de apagar
    (delete):

    ![]({{site.baseurl}}/images/pt_beg_ch7_image02.png)

-  Por último, é importante saber quesó pode editar a camada que é
    considerada activa pelo JOSM. Se não conseguir editar o mapa que
    está na janela do mapa, é provavelmente porque não tem a camada
    correta activa. A maioria das camadas, como a dos pontos GPS, a do
    “Walking Papers”, e as de imagens de satélite, não podem ser
    editadas. As únicas camadas que podem ser editadas são as de dados
    do OpenStreetMap, que são normalmente chamadas de “Data Layer”.
-  Para tornar uma camada activa, selecione-a no painel “Layers”
    (camadas), e clique no botão “Activate” (activar):

    ![]({{site.baseurl}}/images/pt_beg_ch7_image07.png)

Gravando ficheiros OSM
----------------------

-  Algumas vezes quando descarrega alguns dados OSM, pode querer
    guardá-los de forma apoder editá-los “offline” (sem estar ligado à
    Internet), e depois carregá-los mais tarde quando tiver o acesso à
    Internet novamente activo.
-  Para gravar um ficheiro OSM, certifique-se que é a camada activa no
    painel “Layers” (camadas). Clique “File” (ficheiro) no menu do topo,
    e clique “Save” (guardar), Escolha uma localização para o ficheiro e
    escolha um nome para ele. Pode também guardar dados clicando no
    seguinte botão

    ![]({{site.baseurl}}/images/pt_beg_ch7_image00.png)

-  Agora pode fechar o JOSM e os seus dados serão guardados, sem se
    perderem. Quando quiser abrir o ficheiro novamente, abra
    simplesmente o JOSM, vá ao menu “File” (ficheiro), e clique “Open”
    (abrir).

Ferramentas de Desenho Adicionais
---------------------------------

-  O JOSM tem algumas ferramentas adicionais para tornar mais fácil
    desenhar linhas e formas. Estas ferramentas encontram-se no menu
    “Tools” (ferramentas) no topo do JOSM.

    ![]({{site.baseurl}}/images/pt_beg_ch7_image01.png)

-  De forma a aplicar as funções deste menu, tem de primeiro selecionar
    um ponto, linha, ou forma na janela do mapa. Algumas das funções
    mais úteis são descritas de seguida:

-  Split Way (separar via)- Isto permite-lhe dividir uma linha em duas
    linhas separadas. Isto é útil se quiser adicionar atributos
    diferentes a diferentes partes da estrada. Para utilizar esta
    função, selecione um ponto no meio da linha a quebrar, selecione
    “Split Way” (quebrar via) do menu “Tools” (ferramentas), e a sua
    linha deverá ser quebrada em duas.
-  Combine Way (combinar via) - Isto faz o oposto do anterior “Split
    Way”. Para combinar duas linhas numa só, elas têm de partilhar um
    ponto único. Para utilizar esta função, selecione ambas as linhas
    que quer combinar. Pode selecionar mais de um objecto pressionando a
    tecla “SHIFT” no seu teclado e clicando em cada linha. Quando tiver
    selecionado ambas as linhas, escolha “Combine Way” do menu “Tools”
    (ferramentas).
-  Reverse Way (inverter via) - Isto mudará a direção da linha. Se a
    sua linha representa uma estrada que tem um só sentido, pode querer
    modificar a sua direção. Noutros casos, a direção não importa.
-  Simplify Way (simplificar via) - Se a sua linha tiver demasiados
    pontos e quiser torná-la mais simples, isto removerá alguns pontos
    da linha.
-  Align Nodes in Circle (alinhar pontos em círculo)- Se está a tentar
    fazer uma forma circular, desenhe o círculo o melhor que conseguir e
    depois selecione esta função. Ela ajudará a colocar os seus pontos
    num círculo.
-  Align Nodes in Line (alinhar pontos em linha)- Esta função alinhará
    uma série de pontos numa linha reta.
-  Orthogonalize Shape (ortogonalizar forma) - Esta função é muito útil
    para desenhar edifícios. Depois de desenhar um edifício, esta função
    irá ajustá-la de forma a ter cantos retos.

Etiquetas (Tags)
----------------

-  Quando desenhar um ponto, linha, ou forma, ela  é criada numa
    localização, mas sem informação acerca do que é. Por outras
    palavras, sabemos onde está, mas não o que é. Anteriormente,
    estivemos a utilizar items do menu “Presets” (pré-configurações)
    para definir o que é.
-  A forma do OpenStreetMap saber o que é um objecto é pela utilização
    de etiquetas (tags). Uma etiqueta (tag) é como um rótulo que pode
    colocar em algo. Por exemplo, se desenhar um quadrado, é só um
    quadrado. Mas então adiciono múltiplas etiquetas (tags) que
    descrevem aquilo que é:

-  este quadrado é um edifício (building)
-  o nome do edifício é “Torre dos Clérigos”
-  o edifício tem 16 andares de altura

-  Pode adicionar tantas etiquetas (tags) a um objecto quantas quiser.
    As “Tags” são guardadas como pares de texto, chamadas as
    keys (chaves) e values (valores). No OpenStreetMap, as etiquetas
    (tags) escritas acima seriam na realidade:

-  building = yes
-  name = Torre dos Clérigos
-  building:levels = 16

-  Se selecionar um objecto no JOSM, pode ver todas as etiquetas que
    estão ligadas a ele no painel “Properties” (características) à
    direita.

    ![]({{site.baseurl}}/images/pt_beg_ch7_image04.png)

-  Pode adicionar, editar, e apagar estas etiquetas (tags) a partir
    deste painel. As etiquetas são tradicionalmente em inglês, pelo que
    é normalmente melhor utilizar o menu “Presets” (pré-configurações)
    para evitar erros de grafia. Este painel é útil para inserir
    etiquetas que não estejam no menu “Presets” (pré-configurações) por
    serem pouco utilizadas ou serem recentes (sendo um sistema aberto, o
    OpenStreetMap permite ir criando novas etiquetas conforme a
    comunidade vai achando útil ou pertinente).

Atalhos de Teclado
------------------

-  Por vezes pode ser chato clicar repetidamente para selecionar opções
    diferentes e menus no JOSM. Felizmente existem teclas de atalho no
    teclado que lhe permitem executar muitas das tarefas comuns de forma
    mais expedita. Aqui tem uma lista de algumas das teclas de atalho
    vulgarmente mais utilizadas, juntamente com o que fazem:

-  s - Escolher a ferramenta “Select” (selecionar)
-  a - Escolher a ferramenta “Draw”
-  z - Escolher a ferramenta “Zoom”
-  + (mais) - “Zoom In” Aumentar o mapa
-  - (menos) - “Zoom Out” Diminuir o mapa
-  p - “Split Way” Quebrar caminho
-  c - “Combine Way” Combinar caminho
-  o - Alinhar em círculo
-  l - Alinhar em linha
-  q - Ortogonalizar (forçar cantos em ângulo reto)

Sumário
-------

Como pode ver existem muitas características adicionais que fazem o JOSM
uma ferramenta poderosa para criar mapas. Lembre-se de que quanto mais
praticar com estas ferramentas, melhor se irá tornar a adicionar
informação ao OpenStreetMap.

No último capítulo iremos nos afastar do JOSM, e dar uma olhada a outros
projectos interessantes que utilizam dados do OpenStreetMap, e aprender
como podemos continuar a aprender acerca do OSM.
