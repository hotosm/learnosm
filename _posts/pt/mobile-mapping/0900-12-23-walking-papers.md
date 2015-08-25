---
layout: doc
title: Utilizando o “Walking Papers”
permalink: /pt/mobile-mapping/field-papers/
lang: pt
category: mobile-mapping
---

Caution - this section is known to be out of date - there is a current section in:  
[English - field papers](/en/mobile-mapping/field-papers/),  
[German](/de/mobile-mapping/field-papers/), or  
[Español](/es/mobile-mapping/field-papers/).  

To help produce translations for this site, go to <https://www.transifex.com> and search for **HOT-OSM**.  

Utilizando o “Walking Papers”
=============================

Neste capítulo iremos ver como podemos registar as coordenadas de
lugares sem GPS. Utilizaremos uma ferramenta chamada “Walking Papers”,
que permite imprimir um mapa de uma área, desenhar em cima dele e
adicionar anotações, carregar o mapa de volta para o “Walking Papers”, e
finalmente, visualizar esse mapa no JOSM, onde podemos adicionar ao
OpenStreetMap os locais registados.

Visão Geral do “Walking Papers”
-------------------------------

Antes de entrarmos em detalhes sobre o “Walking Papers”, vamos dar uma
vista de olhos a como o processo funciona:

Passo 1: Localize a área que quer mapear, no site web do “Walking
Papers”. Imprima um mapa dessa área. Pode escolher imprimir o mapa
actual da área disponível no OpenStreetMap, ou pode escolher imprimir
imagens aéreas, se estiver disponível para a área escolhida.

![]({{site.baseurl}}/images/pt_beg_ch5_image07.png)
![]({{site.baseurl}}/images/pt_beg_ch5_image05.png)

Passo 2: Utilize o seu mapa impresso para levantar a área. Adicione mais
lugares desenhado-os no mapa. Desenhe linhas para estradas, formas para
edifícios, e por aí adiante. Escreva notas acerca de cada um dos lugares
directamente no mapa, ou escreva números no mapa que se relacionem com
números no bloco de notas, onde pode escrever informação mais detalhada
acerca de cada objecto.

![]({{site.baseurl}}/images/pt_beg_ch5_image00.png)

Passo 3: Digitalize (com um scanner) o seu papel, para o computador. Se
não tiver um scanner, pode tirar uma fotografia do papel, se a sua
câmara for capaz de tirar fotos de alta qualidade. Carregue a(s)
imagem(s) para o site web do Walking Papers.

Passo 4: No JOSM, carregue o “Walking Paper”. Utilize os objectos que
desenhou como referência para os adicionar digitalmente no
OpenStreetMap.

![]({{site.baseurl}}/images/pt_beg_ch5_image04.png)

Como funciona o Walking Papers?
-------------------------------

Se seguir o processo do Walking Papers acima descrito, estará a recolher
coordenadas geográficas precisas de lugares com nada mais do que papel.
Como é isso possível?

![]({{site.baseurl}}/images/pt_beg_ch5_image01.png)

Quando imprime um Walking Paper, o papel vem como um código de barras
quadrado no fundo da página. Este código de barras permite ao Walking
Papers determinar a localização exacta do mapa que utilizou no
levantamento. Mais tarde, quando carrega o papel de volta ao OSM, todos
os objectos que desenhou serão mostrados na sua localização actual, ou
pela menos bastante próxima, o que é suficiente para nós.

Agora vamos aprender como criar e utilizar Walking Papers.

Criar e imprimir
----------------

-  Abra o seu navegador web - este pode ser Firefox, Chrome, Opera, ou
    Internet Explorer.

-  Na barra de endereços no topo da janela, escreva o texto seguinte e
    carregue em Enter:

    [walking-papers.org](http://walking-papers.org)

-  A página web deverá ter a seguinte aparência:

    ![]({{site.baseurl}}/images/pt_beg_ch5_image07.png)

-  Ande para baixo na página utilizando a roda do rato, ou arrastando a
    barra lateral do lado direito da página. Pare quando vir o mapa,
    como se vê na imagem seguinte:

    ![]({{site.baseurl}}/images/pt_beg_ch5_image02.png)

-  O mapa que vê mostra a área que gostaria de imprimir em papel. Pode
    mover o mapa da mesma forma que move o mapa na página do
    OpenStreetMap, utilizando o botão esquerdo do rato para arrastar o
    mapa em qualquer direcção, e a roda do rato para aumentar ou
    diminuir a escala do mapa (aproximar ou afastar). Clicar com o botão
    esquerdo do rato nos botões “+” e “-” no canto superior esquerdo
    também permitirá aumentar e diminuir a escala do mapa (zoom in e
    zoom out).
-  Mesmo por cima do mapa existe uma caixa de pesquisa com um botão
    “Find” (encontrar) ao lado. Pode utilizar isto para procurar uma
    localização por nome e mover o mapa para lá automaticamente. Tente
    escrever o nome da sua povoação, dentro da caixa, e clique em “Find”
    (encontrar). Se o “Walking Papers” encontrar a localização que
    escreveu, o mapa irá mover-se para lá automaticamente.
-  Mesmo por baixo do mapa existem algumas opções adicionais. A
    primeira opção está etiquetada “Orientation” (orientação). Isto
    permite mudar o tamanho e orientação do mapa impresso. Experimente
    mudar isso clicando na caixa mesmo ao lado de “Orientation” e
    selecionado “Landscape (A4)” (paisagem). Deverá ver o tamanho e
    formato do mapa mudar para orientação em “paisagem”, e escalada para
    imprimir em papel tamanho A4.
-  Clique na caixa ao lado da palavra “Provider:” (fornecedor). Aqui
    pode escolher entre diferentes opções que irão modificar o aspecto
    do mapa. A maioria das opções mostram diferentes estilos de mapa,
    tal como linhas mais finas, ou cores e texto diferentes. Clique em
    “Bing Aerial Imagery” (imagens aéreas do Bing) e em vez de um mapa
    irá ver imagens providenciadas pela Microsoft, da localização que
    está a visualizar no mapa (em Portugal o Bing utiliza sempre que
    disponíveis, imagens aéreas do Instituto Geográfico Português - a
    actualização das imagens varia de sítio para sítio em Portugal).
    Atenção que nem todas as localizações estão cobertas por imagens de
    alta qualidade, por isso o que vê poderá estar um pouco desfocado, e
    não ser muito útil para fazer mapas!
-  Certifique-se de que o mapa mostra a área que quer mapear. Mesmo
    depois de pesquisar pela sua localização, pode querer mover o mapa
    um pouco para escolher a área correcta. quando se aproxima (zoom in)
    ou afasta (zoom out) do mapa, você está a modificar aquilo a que se
    chama “zoom levels”, que é simplesmente uma forma de mostrar o grau
    de ampliação do mapa. Quando estiver afastado o mais possível e pode
    ver a Terra toda, você está no “zoom level” 0 (nível de zoom 0).
    Quando estiver na ampliação máxima (zoom in) está no “zoom level” 18
    (nível de zoom 18). O nível de zoom currente é mostrado acima do
    mapa. Usualmente o “zoom level” 15, 16, ou 17 é bom para fazer
    “Walking Papers”.
-  Vamos fazer agora o documento para imprimir! Se encontrou a área em
    que está interessado em mapear e seleccionou as opções que melhoram
    a aparência do seu papel, está pronto. Clique no botão etiquetado
    “Make” (Fazer), mesmo abaixo do mapa.
-  Irá ver uma nova página que diz que a sua impressão está a ser
    processada. Quando estiver pronta, irá ver a imagem do mapa pronto a
    imprimir nesta página. Normalmente, irá levar de alguns minutos ate
    20 minutos para uma impressão ser processada (dependendo do sistema
    estar a ser muito solicitado pelos utilizadores e existirem mais ou
    menos documentos a serem processados).

    ![]({{site.baseurl}}/images/pt_beg_ch5_image08.png)

-  Quando a sua impressão estiver pronta, clique “Download map PDF for
    print”.  O “Walking Paper” deverá começar a ser descarregado.
-  Quando o ficheiro terminar de descarregar, abra o ficheiro PDF.
    Ligue o seu computador a uma impressora e imprima a página. Se tudo
    correr bem, deverá agora ter o seu mapa impresso em papel.

Mapear com “Walking Papers”
---------------------------

-  Leve o seu “Walking Paper” para o exterior, e utilize-o como guia
    para caminhar e identificar novos lugares que não estejam no mapa.
-  Desenhe linhas para as estradas, formas para os edifícios, e assim
    por diante. Tome notas sobre cada local directamente no mapa, ou
    escreva números no mapa para relacionar com números no seu bloco de
    notas, onde poderá escrever informação mais detalhada sobre cada
    objecto.

    ![]({{site.baseurl}}/images/pt_beg_ch5_image00.png)

-  Quando estiver satisfeito com as suas adições ao mapa de papel,
    então poderá adicioná-las ao OpenStreetMap.

Digitalização e Carregamento (Upload)
-------------------------------------

-  Os “Walking Papers” são muito úteis para mapear com nada mais do que
    papel, mas eles não são 100% mágicos. Nós ainda precisamos de
    adicionar o nosso papel no JOSM, adicionar a nosa informação de
    forma digital, e gravar as modificações para o OpenStreetMap.
-  O primeiro passo é digitalizar o seu “Walking Paper” para o
    computador. Pode fazer isto ligando um digitalizador (scanner) ao
    seu computador, digitalizando o papel, e gravando-o como um ficheiro
    de imagem. Se não tem um digitalizador, pode tirar uma fotografia do
    papel, mas deverá ter bastante cuidado para tirar uma boa foto.
    Garanta que o papel está plano e que a máquina fotográfica está
    directamente em frente dele (o mais perpendicular possivel para não
    distorcer a imagem da folha de papel). Garanta que o código de
    barras fica incluído na imagem, uma vez que o “Walking Papers” não
    funcionará sem ele. Aqui está um exemplo de uma imagem
    digitalizada/fotografada:

    ![]({{site.baseurl}}/images/pt_beg_ch5_image03.png)

-  Quando tiver a sua folha “walking paper” digitalizada e gravada no
    computador, abra o seu navegador web e volte à página do
    “waking-papers.org”, como anteriormente.
-  Clique na aba “Upload” (carregar).

  ![]({{site.baseurl}}/images/pt_beg_ch5_image09.png)

-  Clique “Browse...” (procurar) e navegue para o ficheiro para onde
    digitalizou/fotografou o seu “Walking Paper”.
-  Clique “Send” (enviar).
-  Pode levar alguns minutos para que o seu papel carregue (upload),
    dependendo da velocidade da sua ligação Internet. Quando o
    carregamento terminar, verá uma nova página com um par de perguntas
    acerca da sua digitalização (scan).

    ![]({{site.baseurl}}/images/pt_beg_ch5_image10.png)

-  Ao lado da pergunta, “Do you plan to edit this yourself?”(pretende
    editar isto você mesmo?) seleccione “No” (Não) .  Isto tornará o seu
    papel público, de forma a que outros mapeadores o possam ver também.
-  Na caixa vazia em baixo, descreva o que mapeou. Isto poderá incluir
    a localização e os tipos de objectos que adicionou.
-  Clique “Save” (Gravar). O seu “Walking Paper” começará a ser
    processado. Isto poderá levar 20 minutos ou mais. Se tornou o seu
    papel público seleccionado “No” na página anterior, pode fechar o
    navegador Internet e voltar a ele mais tarde quando tiver terminado
    de processar.

Abra no JOSM
------------

-  Quando a sua digitalização tiver terminado de ser processada, pode
    carregá-la no JOSM e usá-la para adicionar a sua informação no
    OpenStreetMap.  Volte ao site web do “Walking Papers”, escrevendo
    [walking-papers.org](http://walking-papers.org) no seu navegador
    web, como antes.
-  Clique “Scans”(Digitalizações).
-  Procure o seu papel na lista, e clique nele. Deverá ver algo como
    isto:

    ![]({{site.baseurl}}/images/pt_beg_ch5_image06.png)

-  Para carregar o papel no JOSM, precisamos duma cópia do ID do
    “Walking Paper” que digitalizou.  Na barra de URL no topo do
    navegador Internet, seleccione o texto e prima CTRL+C no seu
    teclado, para copiar. O texto deverá ter um aspecto semelhante a
    este:

    [http://walking-papers.org/scan.php?id=fmxcgdqd](http://walking-papers.org/scan.php?id=fmxcgdqd)

-  Agora abra o JOSM.  No Capítulo 3 instalá-mos o plugin “Walking
    Papers”, que nos permite ver a nossa digitalização. Se não tem o
    plugin “Walking Papers” instalado, volte ao Capítulo 3, para
    instruções em como instalar.
-  No menu no topo do JOSM, clique “Walking Papers”. Depois clique
    “Scanned Map...” (Mapa digitalizado).
-  Prima CTRL+V no seu teclado para colar o texto que copiou do site
    web “Walking Papers”.  Clique OK.
-  Se tudo correu bem, deverá ver o seu “Walking Paper” carregar no
    JOSM.  No capítulo seguinte, iremos ver como adicionar os lugares
    que mapeou, no OpenStreetMap

Repita!
-------

-  Depois de adicionar as suas modificações ao OSM, elas estarão
    finalmente gravadas no mapa. Da próxima vez que quiser melhorar o
    mapa, pode imprimir um novo”Walking Paper” que já irá incluir as
    modificações que fez. Conforme este procedimento é repetido, o mapa
    irá se tornar cada vez melhor, quanto mais mapear!

Sumário
-------

Parabéns! Neste capítulo aprendeu o procedimento de utilizar o “Walking
Papers” e como este funciona. Aprendeu como imprimir, mapear, e
digitalizar um “Walking Paper”. No próximo capítulo, aprederemos como
adicionar os lugares que mapeámos ao OpenStreetMap, e terá aprendido o
procedimento completo de edição do mapa.
