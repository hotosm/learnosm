---
layout: doc
title: Editor iD
permalink: /pt/beginner/id-editor/
lang: pt
category: beginner
---

O Editor iD
=============

> Este guia pode ser descarregado como [beginner_id-editor_pt.odt](/files/beginner_id-editor_pt.odt) ou [beginner_id-editor_pt.pdf](/files/beginner_id-editor_pt.pdf)  
> Revisto em 2016-03-30  

Está a começar a mapear com o Gestor de Tarefas do HOT ou MissingMaps? Veja a [secção dicas HOT](/pt/hot-tips/).  

- TOC
{:toc}

O editor iD é o editor padrão do OpenStreetMap integrado no navegador de internet. O iD é rápido e fácil de utilizar, e permite mapear a partir de várias fontes, tais como imagens de satélite e aéreas, GPS, Field Papers ou Mapillary.  

O editor iD é uma boa ferramenta para fazer pequenas edições de forma fácil que não necessitem das funcionalidades avançadas do JOSM (um editor mais avançado e complexo). Este capítulo demonstra o básico da edição com o iD.  

Começar com o Editor iD
----------------------

-	O editor iD necessita de uma ligação permanente à Internet.  
-	Abra o seu navegador de internet e aceda ao site do OpenStreetMap em [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Inicie a Sessão** utilizando os dados de acesso da sua conta no OpenStreetMap  
-	Desloque e aproxime o mapa na área que deseja editar. Pode deslocar o mapa clicando e mantendo premido o botão esquerdo do rato e deslocando o mapa para a área que quer editar.  
-	Clique na pequena seta logo a seguir a **Editar** e clique na opção do menu que aparece **Editar com iD (editor no navegador)**.  

![image1][]


Interface do Editor iD
-------------------------
![image2][]

1. **Painel de Editar Elementos:** Este painel mostra etiquetas (tags) do objeto selecionado no mapa.  
	Pode adicionar ou editar etiquetas neste painel.  
2. **Ferramentas:** Este painel mostra ferramentas básicas de edição:  
    Desenhar ponto (nó), *tecla de atalho* **1** ![image3][]{: height="24px"}  
    Desenhar linha (via), *tecla de atalho* **2** ![image4][]{: height="24px"}  
    Desenhar área (polígono), *tecla de atalho* **3** ![image5][]{: height="24px"}  
    Desfazer, *teclas de atalho* **Ctrl+z** ![image6][]{: height="24px"}  
    Refazer, *teclas de atalho* **Ctrl+y** ![image7][]{: height="24px"}  
    Gravar, *teclas de atalho* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Painel do mapa:** Este painel mostra várias funções de configuração:  
    Aproximar, *tecla de atalho* **+** ![image9][]{: height="24px"}  
    Afastar, *tecla de atalho* **-** ![image10][]{: height="24px"}  
    Mostrar a minha localização ![image11][]{: height="24px"}  
    Configurar imagem de fundo, *tecla de atalho* **b** ![image12][]{: height="24px"}  
    Dados dO Mapa, *tecla de atalho* **f** ![Map Data][]{: height="24px"}  
    Abrir o Menu de Ajuda, *tecla de atalho* **h** ![image13][]{: height="24px"}  
4. **Painel de informação:** Este painel mostra informação variada, tal como a barra de escala e quais os utilizadores que contribuíram para a área.  

Configurar a Camada de Fundo
--------------------------------

Clique o botão **Configurar imagem de fundo** ou utilize a *tecla de atalho* **b**.![image14][]{: height="24px"}  
![image15][]  
Para alterar o **nível de brilho** clique numa destas caixas, os níveis são 100%, 75%, 50%, e 25% ![image16][]{: height="24px"}  
Também pode **alterar a camada de fundo** baseado no seu fornecedor de imagens preferido (o padrão é o Bing Aerial Imagery).  

Pode adicionar as suas próprias telas de mapas clicando em  **Personalizado**. Por exemplo, se quiser **adicionar um Field Paper** [^fieldpaper], clique em **Personalizado** e então clique no ícone da lupa que está à direita para abrir a seguinte janela:-  
![image17][]   
e adicione o **URL de digitalização do FieldPaper**, que será algo como: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar trilhos GPS armazenados no seu computador** (formato GPX), arraste e largue o ficheiro do trilho na janela do editor iD.  
Para ativar **trilhos GPS do OpenStreetMap** clique na caixa. Na imagem abaixo, os trilhos GPS públicos são mostrados em várias cores, indicando a direção ao criar o trilho.  
![osm gps traces][]  
Se existir um [desalinhamento da imagem de fundo](/pt/josm/aerial-imagery), pode **corrigi-la** clicando em **corrigir o alinhamento da imagem**. ![image18][]  

- Clique nas setas de navegação para mover a imagem de fundo. Clique no botão de reiniciar para retornar à posição inicial. ![image20][]  

Edição Básica com o editor iD  
----------------------  

### Adicionar Pontos  

Para adicionar um novo ponto, clique no botão **Ponto**. ![image3][]{: height="24px"}  

- O cursor do rato mudará para o símbolo mais (+). Agora clique na posição desejada para o ponto. Por exemplo, se conhecer um hospital na sua área, clique na posição do edifício central do hospital.  
![image21][]  
- Note que é adicionado um novo ponto. Ao mesmo tempo, o painel lateral direito mostrará botões e campos onde pode selecionar e configurar atributos do objeto. Clique em **Hospital** para marcar o ponto como hospital.  
![image22][]  
- Pode usar os campos para preencher informações sobre o ponto. Pode introduzir o nome de um hospital, morada e outras informações adicionais. Note que cada um dos elementos terão opções diferentes dependendo da etiqueta que escolher no painel lateral.  
- Se cometer um erro, como uma localização errada, pode mover o ponto para uma nova localização mantendo premido o botão esquerdo do rato no ponto do mapa e arrastando-o com o rato. Ou se preferir, pode eliminar o ponto, clicando com o botão esquerdo do rato no ponto, e de seguida com o botão direito do rato que faz aparecer o menu de contexto onde pode clicar no ícone do caixote do lixo para apagar o ponto. ![image23][]{: height="24px"}  
Um "ponto" criado no editor iD é na verdade um "nó" isolado com uma série de "etiquetas" nele.  

### Desenhar Linhas  

Para adicionar uma nova linha, clique no botão **Linha**. ![image4][]{: height="24px"}  

- O cursor do rato irá mudar para o botão de mais (+). Encontre uma estrada que não esteja desenhada no mapa e desenhe-a. Clique no ponto onde o segmento da estrada começa, mova o rato e clique para adicionar mais pontos. Faça um clique duplo no último ponto para terminar o desenho da estrada. Observe o painel no lado esquerdo.  
![image24][]  
- Tal como num ponto, selecione as etiquetas apropriadas para a linha desenhada.  
- Pode arrastar os pontos da linha clicando com o botão esquerdo do rato num ponto e arrastando-o de seguida.  
- Também pode mover toda a linha selecionando-a e escolhendo a **ferramenta Mover**. Então arraste a linha para uma nova localização. ![image30][]{: height="24px"}  
- Quando clica com o botão esquerdo do rato num ponto individual na linha e clica de seguida com o botão direito do rato para ativar o menu de contexto, irá ver estas ferramentas:  
- Eliminar ponto da linha. ![image23][]{: height="24px"}  
- Desligar ponto da linha. ![image26][]{: height="24px"}  
- Dividir a linha em 2 linhas no ponto que selecionou. ![image27][]{: height="24px"}  
- Quando clica com o botão esquerdo do rato numa linha (mas não num ponto), irá ver estas ferramentas:  
-   Eliminar linha. ![image23][]{: height="24px"}  
-   Criar círculo a partir da linha (apenas ativo se a linha estiver fechada) ![image29][]{: height="24px"}  
-   Mover linha ![image30][]{: height="24px"}  
-   Fazer um retângulo a partir de uma linha (apenas ativo se a linha estiver fechada) ![image31][]{: height="24px"}  
-   Inverter direção da linha (útil em rios e estradas de sentido único) ![image32][]{: height="24px"}  

Uma "linha" criada no editor iD é na verdade uma "via" com "etiquetas" nela.

>Uma nota especial sobre **Eliminar**: Regra geral, deve evitar eliminar objetos que outras pessoas mapearam se estes apenas precisam de melhoramentos. Pode eliminar os seus próprios erros, mas deve tentar *ajustar* os objetos de outros mapeadores se estes precisarem de alterações. Isto preserva o histórico dos itens na base de dados do OpenStreetMap e é um sinal de respeito para com outros utilizadores. Se acha que algo deve ser eliminado, considere perguntar à pessoa que o fez ou numa das listas de email sobre isso primeiro.

### Desenhar Áreas (Polígonos)

Para adicionar uma área (forma geométrica com vários lados), clique no botão **Área**. ![image34][]{: height="24px"}  

- O cursor do rato irá mudar para o símbolo mais (+). Tente desenhar um edifício utilizando as imagens de satélite como guia.  
- Irá notar que a cor da forma geométrica irá mudar dependendo dos atributos que lhe der.  
![image35][]  
- As ferramentas que estão disponíveis quando seleciona uma área e ativa o menu de contexto com o botão direito do rato são similares àquelas quando clica numa linha.  

Um "polígono" no editor iD é na verdade uma "via fechada" com etiquetas nela.

### Desenhar Multi-Polígonos

Por vezes tem de desenhar um polígono que não tem só um contorno exterior como também um interior. Um bom exemplo disso é um edifício com um pátio interior no meio ou lagos/albufeiras com ilhéus. *Não desenhe os contornos numa só linha* de forma a que os contornos de dentro estejam ligados aos de fora. Em vez disso desenhe estes contornos separadamente e adicione as etiquetas apenas ao contorno exterior, selecione todos os contornos e carregue na tecla **c** para as combinar no que chamamos de um multi-polígono.

![create multipolygon][]

Quando seleciona qualquer um dos contornos do multi-polígono acabado de criar, pode ver do lado esquerdo a que multi-polígonos este pertence.

![part of multipolygon][]

Gravar as Suas Alterações
--------------------

Quando (e se) quiser gravar as suas edições no OpenStreetMap, clique no botão **Gravar**. O painel à esquerda irá mostrar o painel de envio.  
![image36][]  

- Introduza um comentário/sumário sobre as suas edições e clique em **Gravar**.  

> Se editou o mesmo elemento (ponto, linha ou área) ao mesmo tempo que outra pessoa estava a editá-lo, irá ver um aviso a indicar que as suas edições não poderão ser enviadas até que resolva os  **conflitos** - escolha as edições que quer manter e envie as suas alterações. *Muitas vezes, o resolver de conflitos implica que se aceite algumas edições de outras pessoas, e nesse caso irá provavelmente desejar voltar ao elemento em questão e editá-lo de novo (**desta vez grave mais cedo para evitar que aconteça um conflito de edições de novo!**).*

Informação Adicional e Etiquetas Personalizadas
---------------------------------------

Quando está a editar um objeto, irá ver uma faixa de ícones no fundo do painel de atributos. Pode adicionar informações adicionais clicando nestes ícones:

- Adicionar elevação ![image37][]{: height="24px"}  
- Adicionar notas ![image38][]{: height="24px"}  
- Adicionar contactos / número de telefone ![image39][]{: height="24px"}  
- Adicionar etiqueta de fonte ![image40][]{: height="24px"}  
- Adicionar website ![image41][]{: height="24px"}  
- Adicionar informação de acessibilidade ![image42][]{: height="24px"}  
- Adicionar link Wikipédia ![image43][]{: height="24px"}  

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
- Quando tem uma ligação à Internet rápida para carregar as imagens de satélite e gravar as edições  
- Quando quer ter a certeza que quer seguir um esquema de etiquetas simples e consistente  
- Quando não pode instalar um programa no computador que está a utilizar

**o JOSM é melhor...**

- Quando está a adicionar muitos edifícios (ver o módulo buildings_tool / Ferramenta de Edifícios)
- Quando está a editar muitos polígonos ou linhas que já existam
- Quando tem uma ligação à Internet fraca / com falhas ou está desligado
- Quando está a usar um esquema de etiquetas específico (ou modelos de etiquetas personalizados)

[^fieldpaper]: Existe uma [secção no LearnOSM](/pt/mobile-mapping/field-papers/) que fornece mais informação sobre os Field Papers.

O conteúdo deste guia está disponível como [apresentação](/files/iD-editor-training.pptx)



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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png