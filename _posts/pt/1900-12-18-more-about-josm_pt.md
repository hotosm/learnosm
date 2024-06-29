---
layout: doc
title: O processo de edição do JOSM
permalink: /pt/josm/more-about-josm/
lang: pt
category: josm
---

O processo de edição do JOSM
========================


Na secção anterior instalou o JOSM e começou a desenhar os seus primeiros pontos, linhas e formas. Adicionou modelos de etiquetas a estes objetos para anexar informações sobre eles. No final, foi capaz de desenhar o seu próprio mapa no JOSM.

Isto foi uma boa prática e agora estamos prontos para editar o OpenStreetMap.

Nesta secção, vamos olhar mais de perto para a interface do JOSM e ver como podemos utilizá-lo para editar o mapa no OpenStreetMap.

O ciclo de edição
---------------------
Editar o OpenStreetMap com o JOSM é semelhante à edição com o editor iD que vimos anteriormente. Mas como o JOSM é uma aplicação de ambiente de trabalho, funciona de forma um pouco diferente. O processo de edição e adição ao OpenStreetMap com o JOSM será sempre o seguinte:

1.  **Descarregar** os dados do mapa atual do OSM
2.  **Editar** utilizando imagens de satélite, GPS, documentos de campo e notas como guia
3.  **Guardar** alterações no OpenStreetMap

Descarregar dados OSM
--------------------
O primeiro passo de edição é descarregar os dados para a área do mundo que queremos melhorar. Lembre-se que tem de fazer isto sempre que quiser fazer alterações ao mapa, porque o mapa é frequentemente atualizado por outros utilizadores.

-   Clique em "Ficheiro" no canto superior esquerdo do JOSM e clique em "Descarregar dados…". Isto abrirá a janela de descarregar. Pode aceder a esta janela de forma mais simples clicando no botão de descarregar, mostrado aqui:

![JOSM Download Button][]

-   Quando a janela de transferência se abrir, deverá ver um mapa. Se não vir o mapa, clique no separador "Mapa visual".

![JOSM Download Dialog][]

-   Utilize o rato para deslocar e ampliar o mapa para uma área que conhece muito bem, como a sua cidade natal ou bairro. Os controlos são os mesmos que na janela do mapa JOSM. O botão direito do rato permite-lhe arrastar o mapa e a roda de deslocamento permite-lhe aumentar e diminuir o zoom.

> Por vezes, se estiver a trabalhar num computador portátil, pode ser difícil aumentar e diminuir o zoom ou deslocar a área de visualização. Trabalhar no JOSM é muito mais fácil se tiver um rato, mas a maioria dos computadores portáteis modernos permite-lhe deslocar-se utilizando o painel tátil (touchpad).

-   Desenhe uma caixa à volta da área que pretende descarregar. Para desenhar uma nova caixa, clique no mapa, mantenha o botão esquerdo do rato premido e arraste o rato para criar uma caixa. Solte o botão do rato para terminar de desenhar a caixa.
-   Quando estiver satisfeito com o tamanho e a localização da caixa, clique em "Descarregar" na parte inferior da janela. O JOSM obterá os dados para esta área a partir do OpenStreetMap e abri-los-á na sua janela do mapa para edição.

### Adicionar imagens aéreas
Se acompanhou o processo quando adicionámos os nossos primeiros pontos com o editor iD, lembra-se que por baixo dos dados do mapa havia uma imagem de satélite que nos ajudou a identificar os objetos no solo. Esta imagem era do Microsoft Bing, que generosamente fornece as suas imagens para os utilizadores do OpenStreetMap referenciarem enquanto contribuem para o mapa.

-   Para adicionar as imagens de satélite do Bing no JOSM, clique em "Imagens de fundo" no menu superior do JOSM e selecione "Bing - imagens aéreas".

> Se não vir o "Bing - imagens aéreas" no menu "Imagens de fundo", poderá ter de o ativar nas preferências do JOSM. Vá a Editar -> Preferências, clique no separador "Imagens aéreas".
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Selecione "Bing - imagens aéreas", clique no botão "Ativar" e por fim no botão "OK".


### Passeio pelo JOSM
Agora que descarregámos os dados do OpenStreetMap e adicionámos as imagens de satélite do Bing, vamos dar outra vista de olhos à interface do JOSM.

![JOSM layout][]

A janela principal, com a qual já está familiarizado, é a janela do mapa e é onde a maior parte da ação tem lugar. Aqui pode ver, editar e adicionar dados ao OpenStreetMap.

À direita da janela do mapa existe uma série de painéis, cada um com a sua própria função. Normalmente, quando instala o JOSM pela primeira vez, vários painéis são mostrados por defeito, tais como Camadas, Etiquetas / membros e Seleção. Quando seleciona um ponto, linha ou forma na janela do mapa, este é apresentado no painel Seleção. As informações sobre o objeto serão mostradas no painel Etiquetas / membros e o nome de utilizador do autor desse objeto será mostrado no painel Autores.

Estes painéis podem ser abertos ou fechados clicando nos vários botões no canto inferior esquerdo do JOSM. Por cima destes botões, no canto superior direito, existem ferramentas que alteram o que pode fazer com o rato. Já está familiarizado com algumas delas, a ferramenta Selecionar e a ferramenta Desenhar. Abaixo destas estão as ferramentas que facilitam a ampliação, a eliminação de um objeto, o desenho de uma forma ou a criação de uma linha paralela a outra linha.


Editar
----
Assim, concluímos o primeiro passo do processo de edição - Descarregar. Preparámos o JOSM com imagens de satélite como referência. O próximo passo é editar o mapa e adicionar novos itens.

Dependendo da área que escolheu descarregar, pode haver muitos ou muito poucos dados de mapas existentes. Mas repare que se trata do mesmo tipo de dados que vimos anteriormente - pontos, linhas e formas que representam localizações da vida real.

-   Utilize as técnicas que já aprendeu para acrescentar alguns pontos ao mapa de locais que conhece. Se vir algum erro, tente corrigi-lo.
-   Não é necessário ser demasiado agressivo enquanto se está a aprender. Se não tiver a certeza de alguma coisa, é melhor deixar as coisas como estão.
-   Se pretender mover um ponto, uma linha ou uma forma, utilize a **ferramenta selecionar**. Clique num objeto e arraste-o para onde deve estar. Isto pode ser utilizado para corrigir a localização de itens que tenham sido colocados no sítio errado.

![JOSM select tool][]

-   Utilize a **ferramenta desenhar** para desenhar novos pontos, linhas e formas. Descreva estes objetos selecionando-os no menu Modelos de etiquetas, tal como fez na secção anterior.

> Nunca edite o mapa fora da área que descarregou. Pode ver que a área retangular que descarregou tem um fundo sólido, enquanto a área que não descarregou tem linhas diagonais às riscas.
>
> ![JOSM area downloaded][]

Guardar alterações
--------------
O terceiro e último passo para completar as nossas edições é enviar as alterações que fizemos para a base de dados do OpenStreetMap. Para guardar as alterações, temos de estar ligados à Internet.

-   Clique em "Ficheiro" no menu superior e, em seguida, clique em "Enviar dados". Isto abrirá a janela de envio. Pode aceder a esta janela de forma mais simples, clicando no botão de envio, mostrado aqui:

    ![JOSM Upload Button][]

-   A janela que aparece mostra uma lista dos objetos que estão a ser adicionados e dos objetos que estão a ser alterados ou eliminados. Na caixa na parte inferior, é-lhe pedido que forneça um comentário sobre as alterações que está a fazer. Escreva aqui uma descrição das suas edições.

    ![JOSM Upload Dialog][]

-   Clique em “Enviar alterações”.

-   Se esta é a primeira vez que guarda alterações no OpenStreetMap, ser-lhe-á pedido o seu nome de utilizador e palavra-passe do OpenStreetMap.
-   Introduza-os na janela que aparece. Se marcar a caixa nesta janela, o seu nome de utilizador e a sua palavra-passe serão guardados e não terá de os introduzir novamente no futuro. Clique em "Autenticar".

    ![JOSM Authenticate][]

-   Terá de esperar alguns segundos para que as suas alterações sejam enviadas e depois está pronto! Editou o mapa no OpenStreetMap.

> Quando estiver a editar, certifique-se sempre que envia as suas alterações antes de fechar o JOSM. Mesmo que ainda tenha mais edições para fazer, envie as suas alterações e, em seguida, repita o processo mais tarde quando tiver tempo para editar. Não quer perder o seu trabalho!

Ver as suas alterações no mapa
---------------------------
-   Abra o seu navegador de Internet e aceda a [http://openstreetmap.org/](http://openstreetmap.org/)
-   Desloque o mapa para a área que editou.
-   Deverá ver as suas alterações a aparecer no mapa! Se isso não acontecer, tente premir CTRL+R para atualizar a página. Por vezes, o mapa não é atualizado corretamente e tem de ser recarregado.
-   E se não vir as suas alterações? Não se preocupe - pode demorar alguns minutos até que as alterações sejam mostradas no mapa. Além disso, verifique as suas adições no JOSM para se certificar de que as adicionou corretamente. Uma boa regra geral é que, se o seu ponto tem um ícone no JOSM, então deve ser visto no mapa principal no sítio do OpenStreetMap.

Sumário
-------
Agora que já viu como adicionar ao OpenStreetMap, o que é que se segue? Bem, editar é ótimo, mas não é o único aspeto da criação de mapas. Claro que também precisa de aprender a sair e a recolher informações sobre os locais no terreno.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png