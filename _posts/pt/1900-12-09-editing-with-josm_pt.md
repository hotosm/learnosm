---
layout: doc
title: Utilizar o JOSM para editar o OpenStreetMap
permalink: /pt/josm/editing-with-josm/
lang: pt
category: josm
---

Utilizar o JOSM para editar o OpenStreetMap
===========================================

No Capítulo 3 instalou o JOSM e começou a desenhar os seus primeiros
pontos, linhas, e formas. Adicionou pré-configurações a estes objectos
de forma a juntar informação acerca deles. Para o fim, foi capaz de
desenhar o seu próprio mapa no JOSM.

Desenhar mapas no Capítulo 3 foi um exercício para aprender JOSM e
aprender a desenhar lugares no mapa. Mas os nossos mapas não eram
precisos, porque ainda não tínhamos incluído localização. Nos dois
capítulos seguintes examinámos duas ferramentas, GPS e ”Walking Papers”,
que nos permitem recolher localizações reais de lugares. Estas
localizações são representadas por coordenadas.

Desenhar um mapa real, isto é, um mapa onde todos os pontos, linhas, e
formas estão na sua localização correcta, não é diferente de desenhar os
mapas que desenhámos no Capítulo 3. Mas agora, utilizaremos os nossos
pontos e caminhos (tracks) GPS, e os nossos “Walking Papers”, para
desenhar mapas similares, na sua localização correcta no planeta.

Neste capítulo aprenderemos como editar o mapa no OpenStreetMap
adicionando os nossos melhoramentos. Aprenderemos o ciclo básico de
mapear no OSM:

1) Descarregar (download) os dados correntes do mapa a partir do OSM

2) editar esses dados utilizando GPS, “Walking Papers”, e notas como
guia

3) Gravar (save) modificações ao OpenStreetMap

No fim deste capítulo, seremos capazes de ver as nossas adições no mapa
OSM.

Preparar o JOSM
---------------

-  Para iniciar o JOSM, clique no Menu “Start”no canto inferior
    esquerdo do seu computador, e procure o programa JOSM.

-  Agora carregue o seu ficheiro gpx e oseu “Walking Paper”. Não
    precisa de abrir ambos, mas pode se quiser. Consulte os dois
    capítulos anteriores se não se lembrar como abrir estes ficheiros no
    JOSM.

    ![]({{site.baseurl}}/images/pt_beg_ch6_image09.png)

Descarregue Dados OSM
---------------------

-  Lembra-se do ciclo de edição do OpenStreetMap descrito na
    introduçãodeste capítulo? Descarregue (download), Edite, grave
    (save). Antes de podermos editar o mapa, temos de descarregar os
    dados OSM da nossa área.

-  Quando abre o seu caminho gpx ou “Walking Paper”, a janela do mapa
    mostrará oque abriu, e mover-se-á automaticamente para as
    coordenadas correctas. Depois de abrir os seus ficheiros,olhe para o
    canto inferior esquerdo do JOSM. Pode ver a latitude e longitude
    (coordenadas) do seu cursor do rato.

    ![]({{site.baseurl}}/images/pt_beg_ch6_image01.png)

-  Uma vez que a janela do mapa já está a mostrar a áreaque queremos
    mapear, éfácil descarregar os dados OpenStreetMap para essa área.
    Clique no menu “File” no canto superior esquerdo do JOSM e clique
    “Download from OSM”. Isto abrirá a janela de “download”
    (descarregar). Pode aceder a esta janela de forma mais simples
    clicando no botão de descarregar, mostrado aqui:

    ![]({{site.baseurl}}/images/pt_beg_ch6_image08.png)

-  Quando a janela de “download” abre, deverá ver um mapa com uma
    janela rosa desenhada nele. Se não vir o mapa, clique na aba marcada
    “Slippy map”.

    ![]({{site.baseurl}}/images/pt_beg_ch6_image02.png)

-  A janela rosa representa a área do mapa que gostaríamos de
    descarregar para editar. A menos que tenha mexido a janela do mapa
    desde que abriu o ficheiro gpx ou o “Walking Papers”, a caixa deverá
    estar desenhada em torno da área correcta. No entanto se quiser
    descarregar uma área maior, pode desenhar uma caixa nova. Para
    desenhar uma nova caixa, clique no mapa, mantenha o botão esquerdo
    do rato pressionado, e mexa o rato para criar uma caixa. Liberte o
    botão do rato para terminar de desenhar a caixa.
-  Quando estiver satisfeito com o tamanho e localização da caixa,
    clique “Download” (descarregar) no fundo da janela. JOSM irá buscar
    os dados para esta área a partir do OpenStreetMap e irá abri-la na
    sua janela de mapa para editar.

Editar
------

-  O próximo passo é editar o mapa e adicionar novos items. Isto nem
    sempre é fácil a princípio, mas com prática irá ficar cada vez
    melhor.
-  Se quiser mover um ponto, linha ou forma, utilize a ferramenta
    “select” (seleccionar). Clique no objecto e arraste-o para onde
    deveria estar. Isto pode ser utilizado para corrigir a localização
    de items que foram colocados no lugar errado.

    ![]({{site.baseurl}}/images/pt_beg_ch6_image05.png)

-  Utilize a ferramenta “draw” (desenhar) para desenhar novos pontos,
    linhas ou formas. Descreva estes objectos seleccionando-os a partir
    do menu “Presets” (pré-configurações), como fez no Capítulo 3.
-  Lembre-se de que os seus pontos GPS e o seu “Walking Papers” não vão
    automaticamente para o OpenStreetMap. Precisa de adicioná-los
    digitalmente no mapa OSM, utilizando a ferramenta “draw”. Mas os
    seus pontos, caminhos, e “Walking Papers” podem ser vistos no fundo,
    como guia.
-  Vamos assumir que gravou um ponto de referência (waypoint) chamado
    “030”,  no seu GPS, e que escreveu no seu bloco de notas que “030” é
    uma escola. Para adicionar este ponto ao OpenStreetMap, deve
    selecionar a ferramenta “draw” (desenhar) e fazer duplo clique em
    cima do ponto “030” na sua janela de mapa. Isto irá criar um ponto.
    Depois vá ao menu “presets” (pré-configurações), e procure a
    pré-configuração para “school” (escola). Introduza o nome da escola
    e clique “Apply Presets” (aplicar pré-configuração). Faça o mesmo
    para adicionar linhas e formas.

    ![]({{site.baseurl}}/images/pt_beg_ch6_image04.png)

Carregar (Upload) Modoficações
------------------------------

-  Depois de fazer algumas modificações para melhorar o mapa, vamos
    guardar essas alterações no OpenStreetMap. Para guardar as
    alterações, precisamos de estar ligados à Internet, porque na
    prática estamos a carrgar as modificações para o OpenStreetMap.
-  Clique “File” (ficheiro) no menu de topo, e depois clicar  “Upload
    Data” (carrgar dados). Isto irá abrir a janela de “upload”
    (carregamento). Pode aceder a esta janela de forma mais simples
    clicando no botão “upload” (carregar), que se vê aqui:

    ![]({{site.baseurl}}/images/pt_beg_ch6_image00.png)

-  A janela que aparece mostra uma lista dos objectos que está a
    adicionar e os objectos que está a modificar ou a apagar. Na caixa
    no fundo é-lhe pedido para fornecer um comentário acerca das
    modificações que está a fazer. Escreva aqui a descrição das suas
    edições.

    ![]({{site.baseurl}}/images/pt_beg_ch6_image03.png)

-  Clique “Upload Changes” (carregar modificações).
-  Se isto é a sua primeira vez a gravar modificações no OpenStreetMap,
    ser-lhe-á pedido o nome de utilizador (username) e a palavra passe
    (password) que criou no Capítulo 2. Introduza-os na janela que
    aparece. Se selecionar a caixa nesta janela, o seu nome de
    utilizador e palavra passe serão gravados e não precisará mais de
    introduzi-los de futuro. Clique  “Authenticate” (autenticar).

    ![]({{site.baseurl}}/images/pt_beg_ch6_image06.png)

-  Precisará de esperar alguns segundos para que as modificações sejam
    carregadas, e está pronto! Fez as suas primeiras edições no
    OpenStreetMap. Pode continuar a editar para adicionar todos os seus
    pontos, se quiser. Certifique-se sempre de que carregou as suas
    edições antes de fechar o JOSM.

Ver as suas Modificações no Mapa.
---------------------------------

-  Abra o navegador Internet e vá a
    [openstreetmap.org](http://openstreetmap.org)
-  Mova o mapa para a área que editou.
-  Deverá ver as suas modificações já no mapa! Se não estiverem lá,
    pressione CTRL+R para refrescar a página web. Por vezes o mapa não
    actualiza correctamente e precisa de ser recarregado.
-  E se mesmo assim não vir as suas modificações? Não se preocupe- pode
    levar alguns minutos para que as mudanças apareçam no mapa. Além
    disso, verifique as suas adições no JOSM para ter a certeza de que
    as adicionou correctamente.Uma boa regra geral é,se o seu ponto tem
    um icon no JOSM, então deverá estar visível no mapa principal na
    página web do OpenStreetMap.

Sumário
-------

Agora que viu como adicionar coisas ao OpenStreetMap, o que vem a
seguir? Lembre-se que os mapas OSM melhoram com o tempo. De cada vez que
faz melhorias aomapa, esssas modificaçºoes ficam e os dados ficam cada
vez melhores. E assim como pode o trabalho de outros, eles também podem
melhorar o seu.

No próximo capítulo, iremos ver técnicas mais avançadas no JOSM.
Aprenderemos como desenhar melhores formas, como utilizar ferramentas
diferentes, e o que são todos os botões e janelas em volta do mapa!
