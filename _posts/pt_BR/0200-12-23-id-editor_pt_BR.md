---
layout: doc
title: iD Editor
permalink: /pt_BR/beginner/id-editor/
lang: pt_BR
category: beginner
---

O iD Editor
=============

Revisto em 2019-06-10

Começando a mapear com Tasking Manager para HOT ou MissingMaps etc? Consulte nossa seção [HOT-tips section](/en/hot-tips/).  

- TOC
{:toc}

O editor iD é o editor de OpenStreetMap que roda no navegador (browser-based). ID é rápido e fácil de usar, e permite o mapeamento de várias fontes de dados, como imagens de satélite e aérea, GPS, Field Papers ou Mapillary.  

O editor iD é uma ótima maneira de editar pequenas e fáceis alterações que não requerem os recursos avançados do JOSM (um editor de mapas mais avançado). Este capítulo demonstra os fundamentos da edição com o iD.  

Iniciando no iD Editor
----------------------

O editor iD requer uma conexão ativa com a Internet.  
Abra o seu navegador de Internet e acesse o site do OpenStreetMap em [http://www.openstreetmap.org](http://www.openstreetmap.org).  
**Faça login** usando sua conta do OpenStreetMap.  
Desloque e amplie o mapa até a área que deseja editar. Você pode deslocar o mapa mantendo pressionado o botão esquerdo do mouse e arrastando-o até a área desejada.  
Clique na pequena seta ao lado de **Editar**. Em seguida, clique em **Editar com iD (editor no navegador)**.  

![image1][]


Interface de Usuário do iD Editor
-------------------------
![image2][]

1. **painel de recursos de edição:** Este painel mostra as tags do objeto selecionado no mapa.  
	Você pode adicionar ou editar tags neste painel.  
2. **Ferramentas:** Este painel mostra as ferramentas básicas de edição:  
    Desenhe um ponto (nó), *shortcut key* **1** ![image3][]{: height="24px"}  
    Desenhar linha (caminho), *shortcut key* **2** ![image4][]{: height="24px"}  
    Desenhar forma (polígono), *shortcut key* **3** ![image5][]{: height="24px"}  
    Desfazer, *teclas de atalho* **Ctrl+z** ![image6][]{: height="24px"}  
    Refazer, *teclas de atalho* **Ctrl+y** ![image7][]{: height="24px"}  
    Salvar alterações,  *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Painel do mapa:** Este painel mostra várias funções de configuração:  
    Ampliar, *tecla de atalho* **+** ![image9][]{: height="24px"}  
    Diminuir o zoom, *tecla de atalho** **-** ![image10][]{: height="24px"}  
    Vá para o seu local ![image11][]{: height="24px"}  
    Configurar camada de fundo, *shortcut key* **b** ![image12][]{: height="24px"}  
    Dados do mapa, **tecla de atalho** **f** ![Map Data][]{: height="24px"}  
    Problemas, *tecla de atalho* **i** ![Issues][]{: height="24px"}  
    Abrir menu de ajuda, *tecla de atalho* **h** ![image13][]{: height="24px"}  
4. **Painel de informações:** Este painel mostra várias informações, como a barra de escala e quais usuários contribuíram para a área.  

## Configurar a camada de fundo

Clique o botão **Configurar imagem de fundo** ou utilize a *tecla de atalho* **b**.![image14][]{: height="24px"}  
![image15][]  
Você pode alterar a camada de fundo com base no provedor de mosaicos desejado (o padrão é Bing Aerial Imagery).  

Você pode adicionar os seus próprios mosaicos de mapas clicando em **Personalizado**. Por exemplo, se quiser **adicionar um Field Paper** [^fieldpaper], clique em **Personalizado** e então clique no ícone da lupa que está à direita para abrir a seguinte janela:-  
![image17][]   
e adicione o **URL de digitalização do FieldPaper**, que será algo como: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar trilhos GPS armazenados no seu computador** (formato GPX), arraste e largue o ficheiro do trilho na janela do editor iD.  
Para ativar **trilhos GPS do OpenStreetMap** clique na caixa. Na imagem abaixo, os trilhos GPS públicos são mostrados em várias cores, indicando a direção ao criar o trilho.  
![osm gps traces][]  
To change the **appearance of the imagery** click **Display Options**.  
![DisplayOptions][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Adjust imagery offset**.  
![image18][]  

- Click the navigation buttons to move the imagery. Click the reset button to return to the default position. ![image20][]  

Basic Editing with iD  
----------------------  

### Adding Points  

To add a new point, click on the **Point** button. ![image3][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Now, click on a position that you know to mark a location. For example, if you know that there is a hospital in your area, click on the position of the hospital building.  
![image21][]  
- Notice that a new point is added. At the same time, the left panel will change to show a form where you can select attributes for the object. Click **Hospital Grounds** to tag the point as a hospital.  
![image22][]  
- You can use the forms to fill detail information about your point. You can fill hospital name, address, and/or other additional information. Note that each feature will have different options, depending on what tag you choose from the feature panel.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![PointToolDelete][]{: height="24px"}  
A "point" created in the iD editor is actually a standalone "node" with a set of "tags" on it.  

### Drawing Lines  

To add a new line, click on the **Line** button. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- When you click your left mouse button on an individual point (node) on the line and either click on the right mouse button or hit the space bar to activate the context menu, you will see these tools:  
  - Continue line from this point ![PointToolContinue][]{: height="24px"}  
  - Disconnect lines at this point ![PointToolDisconnect][]{: height="24px"}  
  - Split a line into two lines at this point. ![PointToolSplit][]{: height="24px"}  
  - Delete point from line. ![PointToolDelete][]{: height="24px"}  
- When you click your left mouse button on a line (but not on a point), you will see these tools:  
  -   Create a circle from a line (only active if the line is closed) ![LineToolCircularize][]{: height="24px"}  
  -   Disconnect line from other objects ![LineToolDisconnect][]{: height="24px"}  
  -   Move line ![LineToolMove][]{: height="24px"}  
  -   Square all corners ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Reverse line direction (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Rotate the line around its centre ![LineToolRotate][]{: height="24px"}  
  -   Straighten the line ![LineToolStraighten][]{: height="24px"}  
  -   Delete line. ![LineToolDelete][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>A special note about **Deleting**: In general you should avoid deleting other people's mapping if it just needs improvement. You can delete your own mistakes, but you should try to *adjust* other people's mapped objects if they need changes. This preserves the history of the items in the OSM database and is respectful of fellow mappers. If you really feel something should be deleted, consider asking the original mapper or one of the OSM email lists about it first.

### Drawing Shapes (Polygons)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

Saving Your Changes
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD versus JOSM
---------------  

**iD is good for...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.



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