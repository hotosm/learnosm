---
layout: doc
title: Editor iD
permalink: /pt/beginner/id-editor/
lang: pt
category: beginner
---

O editor iD
=============

> Revisto em 2019-06-10

Está a começar a mapear com o Gestor de Tarefas do HOT ou MissingMaps? Veja a [secção de dicas HOT](/pt/hot-tips/).  

- TOC
{:toc}

O editor iD é o editor padrão do OpenStreetMap integrado no navegador de Internet. O iD é rápido e fácil de utilizar, e permite mapear a partir de várias fontes, tais como imagens de satélite e aéreas, GPS, Field Papers ou Mapillary.  

O editor iD é uma boa ferramenta para fazer pequenas edições de forma fácil que não necessitem das funcionalidades avançadas do JOSM (um editor mais avançado e complexo). Este capítulo demonstra o básico da edição com o iD.  

Começar com o editor iD
----------------------

-	O editor iD necessita de uma ligação permanente à Internet.  
-	Abra o seu navegador de Internet e aceda ao site do OpenStreetMap em [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Inicie a sessão** utilizando os dados de acesso da sua conta no OpenStreetMap  
-	Desloque e aproxime o mapa na área que deseja editar. Pode deslocar o mapa clicando e mantendo premido o botão esquerdo do rato e deslocando o mapa para a área que quer editar.  
-	Clique na pequena seta logo a seguir a **Editar** e clique na opção do menu que aparece **Editar com iD (editor no navegador)**.  

![image1][]


Interface do editor iD
-------------------------
![image2][]

1. **Painel de editar elementos:** este painel mostra etiquetas (tags) do objeto selecionado no mapa.  
	Pode adicionar ou editar etiquetas neste painel.  
2. **Ferramentas:** este painel mostra ferramentas básicas de edição:  
    Desenhar ponto (nó), *tecla de atalho* **1** ![image3][]{: height="24px"}  
    Desenhar linha (via), *tecla de atalho* **2** ![image4][]{: height="24px"}  
    Desenhar área (polígono), *tecla de atalho* **3** ![image5][]{: height="24px"}  
    Desfazer, *teclas de atalho* **Ctrl+z** ![image6][]{: height="24px"}  
    Refazer, *teclas de atalho* **Ctrl+y** ![image7][]{: height="24px"}  
    Guardar alterações, *teclas de atalho* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Painel do mapa:** este painel mostra várias funções de configuração:  
    Aproximar, *tecla de atalho* **+** ![image9][]{: height="24px"}  
    Afastar, *tecla de atalho* **-** ![image10][]{: height="24px"}  
    Mostrar a minha localização ![image11][]{: height="24px"}  
    Configurar imagem de fundo, *tecla de atalho* **b** ![image12][]{: height="24px"}  
    Dados do Mapa, *tecla de atalho* **f** ![Map Data][]{: height="24px"}  
    Erros, *tecla de atalho* **i** ![Issues][]{: height="24px"}  
    Abrir o menu de ajuda, *tecla de atalho* **h** ![image13][]{: height="24px"}  
4. **Painel de informação:** este painel mostra informação variada, tal como a barra de escala e quais os utilizadores que contribuíram para a área.  

## Configurar a camada de fundo

Clique o botão **Configurar imagem de fundo** ou utilize a *tecla de atalho* **b**.![image14][]{: height="24px"}  
![image15][]  
Pode **alterar a camada de fundo** com base no fornecedor de mosaicos pretendido (o predefinido é Bing Aerial Imagery).  

Pode adicionar os seus próprios mosaicos de mapas clicando em  **Personalizado**. Por exemplo, se quiser **adicionar um Field Paper** [^fieldpaper], clique em **Personalizado** e então clique no ícone da lupa que está à direita para abrir a seguinte janela:-  
![image17][]   
e adicione o **URL de digitalização do FieldPaper**, que será algo como: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar trilhos GPS armazenados no seu computador** (formato GPX), arraste e largue o ficheiro do trilho na janela do editor iD.  
Para ativar **trilhos GPS do OpenStreetMap** clique na caixa. Na imagem abaixo, os trilhos GPS públicos são mostrados em várias cores, indicando a direção ao criar o trilho.  
![osm gps traces][]  
Para alterar a **aparência das imagens aéreas**, clique em **Opções de visualização**.  
![DisplayOptions][]  
Se houver um [desvio das imagens] (/pt/josm/aerial-imagery), pode **corrigir o desvio de imagens** clicando em **Ajustar deslocamento da imagem**.  
![image18][]  

- Clique nas setas de navegação para mover a imagem de fundo. Clique no botão de reiniciar para retornar à posição inicial. ![image20][]  

Edição básica com o editor iD  
----------------------  

### Adicionar pontos  

Para adicionar um novo ponto, clique no botão **Ponto**. ![image3][]{: height="24px"}  

- O cursor do rato mudará para o símbolo mais (+). Agora clique na posição desejada para o ponto. Por exemplo, se conhecer um hospital na sua área, clique na posição do edifício central do hospital.  
![image21][]  
- Note que é adicionado um novo ponto. Ao mesmo tempo, o painel lateral direito mostrará botões e campos onde pode selecionar e configurar atributos do objeto. Clique em **Hospital** para marcar o ponto como hospital.  
![image22][]  
- Pode usar os campos para preencher informações sobre o ponto. Pode introduzir o nome de um hospital, morada e outras informações adicionais. Note que cada um dos elementos terão opções diferentes dependendo da etiqueta que escolher no painel lateral.  
- Se cometer um erro, como uma localização errada, pode mover o seu ponto para uma nova localização, mantendo o botão esquerdo do rato sobre o ponto e arrastando-o. Ou, se quiser eliminar o seu ponto, clique com o botão esquerdo do rato no ponto, ative o menu de contexto clicando com o botão direito do rato e, em seguida, clique no botão que se parece com um caixote do lixo. ![PointToolDelete][]{: height="24px"}  
Um "ponto" criado no editor iD é na verdade um "nó" isolado com uma série de "etiquetas" nele.  

### Desenhar linhas  

Para adicionar uma nova linha, clique no botão **Linha**. ![image4][]{: height="24px"}  

- O cursor do rato irá mudar para o botão de mais (+). Encontre uma estrada que não esteja desenhada no mapa e desenhe-a. Clique no ponto onde o segmento da estrada começa, mova o rato e clique para adicionar mais pontos. Faça um clique duplo no último ponto para terminar o desenho da estrada. Observe o painel no lado esquerdo.  
![image24][]  
- Tal como num ponto, selecione as etiquetas apropriadas para a linha desenhada.  
- Pode arrastar os pontos da linha clicando com o botão esquerdo do rato num ponto e arrastando-o de seguida.  
- Quando clica com o botão esquerdo do rato num ponto individual (nó) da linha e clica com o botão direito do rato ou carrega na barra de espaços para ativar o menu de contexto, verá estas ferramentas:  
  - Continuar a linha a partir deste ponto ![PointToolContinue][]{: height="24px"}  
  - Desligar as linhas neste ponto ![PointToolDisconnect][]{: height="24px"}  
  - Dividir uma linha em duas linhas neste ponto. ![PointToolSplit][]{: height="24px"}  
  - Eliminar o ponto da linha. ![PointToolDelete][]{: height="24px"}  
- Quando clica com o botão esquerdo do rato numa linha (mas não num ponto), irá ver estas ferramentas:  
  -   Criar um círculo a partir de uma linha (apenas ativo se a linha estiver fechada)) ![LineToolCircularize][]{: height="24px"}  
  -   Desligar a linha de outros objetos ![LineToolDisconnect][]{: height="24px"}  
  -   Mover a linha ![LineToolMove][]{: height="24px"}  
  -   Esquadrar todos os cantos ![LineToolSquare][]{: height="24px"}  
  -   Refletir a linha no seu eixo curto ![LineToolReflectShort][]{: height="24px"}  
  -   Refletir a linha no seu eixo longo ![LineToolReflectLong][]{: height="24px"}  
  -   Inverter a direção da linha (bom para rios e ruas de sentido único)) ![LineToolReverse][]{: height="24px"}  
  -   Rodar a linha em torno do seu centro ![LineToolRotate][]{: height="24px"}  
  -   Endireitar a linha ![LineToolStraighten][]{: height="24px"}  
  -   Eliminar a linha. ![LineToolDelete][]{: height="24px"}  

Uma "linha" criada no editor iD é na verdade uma "via" com "etiquetas" nela.

>Uma nota especial sobre **Eliminar**: regra geral, deve evitar eliminar objetos que outras pessoas mapearam se estes apenas precisam de melhoramentos. Pode eliminar os seus próprios erros, mas deve tentar *ajustar* os objetos de outros mapeadores se estes precisarem de alterações. Isto preserva o histórico dos itens na base de dados do OpenStreetMap e é um sinal de respeito para com outros utilizadores. Se acha que algo deve ser eliminado, considere perguntar à pessoa que o fez ou numa das listas de email sobre isso primeiro.

### Desenhar áreas (polígonos)

Para adicionar uma área (forma geométrica com vários lados), clique no botão **Área**. ![image34][]{: height="24px"}  

- O cursor do rato irá mudar para o símbolo mais (+). Tente desenhar um edifício utilizando as imagens de satélite como guia.  
- Irá notar que a cor da forma geométrica irá mudar dependendo dos atributos que lhe der.  
![image35][]  
- As ferramentas que estão disponíveis quando seleciona uma área e ativa o menu de contexto com o botão direito do rato são similares àquelas quando clica numa linha.  

Um "polígono" no editor iD é na verdade uma "via fechada" com etiquetas nela.

### Desenhar multi-polígonos

Por vezes tem de desenhar um polígono que não tem só um contorno exterior como também um interior. Um bom exemplo disso é um edifício com um pátio interior no meio ou lagos/albufeiras com ilhéus. *Não desenhe os contornos numa só linha* de forma a que os contornos de dentro estejam ligados aos de fora. Em vez disso desenhe estes contornos separadamente e adicione as etiquetas apenas ao contorno exterior, selecione todos os contornos e carregue na tecla **c** para as combinar no que chamamos de um multi-polígono.

![create multipolygon][]

Quando seleciona qualquer um dos contornos do multi-polígono acabado de criar, pode ver do lado esquerdo a que multi-polígonos este pertence.

![part of multipolygon][]

## Problemas

O editor faz uma série de verificações assim que edita algo. Se achar que o que fez pode causar problemas, notifica-o no separador de problemas. Sempre que o ícone de problemas, à direita, tiver um ponto amarelo (para avisos) ou vermelho (para erros), deve abrir o separador e ver o que é relatado. Esta informação também é apresentada no separador da caraterística do objeto, à esquerda, se o objeto relevante estiver selecionado. Também é avisado de que existem problemas não resolvidos quando carrega os seus dados. 

![Issue][] ![Error][]

A parte inferior do separador "Problemas" mostra as regras disponíveis e permite-lhe desativá-las individualmente, embora tal não seja recomendado.

Guardar as suas alterações
--------------------

Quando (e se) quiser guardar as suas edições no OpenStreetMap, clique no botão **Guardar**. O painel à esquerda irá mostrar o painel de envio.  
![image36][]  

- Introduza um comentário / sumário sobre as suas edições e clique em **Guardar**.  

> Se editou o mesmo elemento (ponto, linha ou área) ao mesmo tempo que outra pessoa estava a editá-lo, irá ver um aviso a indicar que as suas edições não poderão ser enviadas até que resolva os  **conflitos** - escolha as edições que quer manter e envie as suas alterações. *Muitas vezes, o resolver de conflitos implica que se aceite algumas edições de outras pessoas, e nesse caso irá provavelmente desejar voltar ao elemento em questão e editá-lo de novo (**desta vez guarde mais cedo para evitar que aconteça um conflito de edições de novo!**).*

Informação adicional e etiquetas personalizadas
---------------------------------------

Quando estiver a editar um objeto, verá um menu "Adicionar campo" na parte inferior do painel de atributos. Pode acrescentar várias informações adicionais selecionando uma das entradas (camada, elevação, wikipedia, etc.).  

![AdditionalTags][]

Ou pode adicionar etiquetas personalizadas clicando em **Todas as etiquetas**. ![image44][]{: height="24px"}  

- Isto irá mostrar todas as etiquetas que o elemento tem.  
![image45][]  
- Clique no símbolo mais (+) para adicionar chaves e valores ou clique no botão do caixote do lixo para eliminar etiquetas.

Tutoriais adicionais
------------------

[A nossa página de recursos externos](/pt/resources/#iD) fornece hiperligações para uma série de tutoriais em vídeo de várias fontes.

iD versus JOSM
---------------  

**o iD é bom para...**

- Quando está a fazer edições simples  
- Quando tem uma ligação à Internet rápida para carregar as imagens de satélite e guardar as edições  
- Quando quer ter a certeza que quer seguir um esquema de etiquetas simples e consistente  
- Quando não pode instalar um programa no computador que está a utilizar

**o JOSM é melhor...**

- Quando está a adicionar muitos edifícios (ver o módulo buildings_tool / Ferramenta de Edifícios)
- Quando está a editar muitos polígonos ou linhas que já existam
- Quando tem uma ligação à Internet fraca / com falhas ou está sem acesso a esta
- Quando está a usar um esquema de etiquetas específico (ou modelos de etiquetas personalizados)

[^fieldpaper]: Existe uma [secção no LearnOSM](/pt/mobile-mapping/field-papers/) que fornece mais informação sobre os Field Papers.



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png