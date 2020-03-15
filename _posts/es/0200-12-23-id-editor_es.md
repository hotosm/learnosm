---
layout: doc
title: Editor iD
permalink: /es/beginner/id-editor/
lang: es
category: beginner
---

El Editor iD
=============

> Revisado 2019-06-10

¿Comenzando a mapear con un administrador de tareas para HOT o MissingMaps, etc.? Vea nuestra [sección de consejos HOT](/es/hot-tips/).  

- TOC
{:toc}

El editor iD es el editor de OpenStreetMap de facto, basado en navegador. iD es fácil y rápido de utilizar, y permite mapear desde diferentes fuentes de datos como imágenes de satélite y aéreas, GPS, Field Papers o Mapillary.  

Usar el editor iD es una buena manera de realizar cambios pequeños y sencillos que no requieren de las características avanzadas de JOSM (un editor de mapas más avanzado). Este capítulo muestra los conceptos básicos de la edición con iD.  

Comenzando con el Editor iD
----------------------

-	El editor iD requiere una conexión activa a Internet.  
-	Abra su navegador de Internet y vaya a la página web de OpenStreetMap en [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Iniciar Sesión** usando su cuenta de OpenStreetMap  
-	Desplace y amplié el área en el mapa que desea editar. Puede desplazar el mapa manteniendo pulsado el botón izquierdo del ratón y arrastrando el mapa al área deseada.  
-	Haga clic en la flecha pequeña junto a **Editar**. Luego, haga clic en **Editar con iD (editor en el navegador)**.  

![image1][]


Interfaz de usuario de iD
-------------------------
![image2][]

1. **Panel de edición de elementos:** Este panel muestra las etiquetas del objeto que ha sido seleccionado en el mapa.  
	Puede agregar o editar las etiquetas desde este panel.  
2. **Herramientas:** Este panel muestras las herramientas básicas de edición:  
    Dibujar un punto (nodo), *atajo de teclado* **1** ![image3][]{: height="24px"}  
    Dibuja una línea (camino), *atajo de teclado* **2** ![image4][]{: height="24px"}  
    Dibuja una forma (polígono), *atajo de teclado* **3** ![image5][]{: height="24px"}  
    Deshacer, *atajo de teclado* **Ctrl+z** ![image6][]{: height="24px"}  
    Rehacer, *atajo de teclado* **Ctrl+y** ![image7][]{: height="24px"}  
    Save changes, *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Panel del mapa:** Este panel muestra varias funciones de configuración:  
    Acercar, *atajo de teclado* **+** ![image9][]{: height="24px"}  
    Alejar, *atajo de teclado* **-** ![image10][]{: height="24px"}  
    Ir a tu ubicación ![image11][]{: height="24px"}  
    Configurar la capa de fondo, *atajo de teclado* **b** ![image12][]{: height="24px"}  
    Datos del mapa, *atajo de teclado* **f** ![Map Data][]{: height="24px"}  
    Issues, *shortcut key* **i** ![Issues][]{: height="24px"}  
    Abrir el menú de ayuda, *atajo de teclado* **h** ![image13][]{: height="24px"}  
4. **Panel de información:** Este panel muestra información diversa como, la barra de escala y qué usuarios han contribuido en esa área.  

## Configuración de la capa de fondo

Haga clic en el botón **Configuración del fondo** o utiliza el *atajo de teclado* **b**.![image14][]{: height="24px"}  
![image15][]  
Puede **cambiar la capa de fondo** en función de su proveedor de tesela deseado (el predeterminado es Bing Aerial Imagery).  

Puede agregar sus propias teselas de mapas haciendo clic en **Personalizado**. Por ejemplo, si desea **agregar un Field Paper** [^fieldpaper], haga clic en **Personalizado** y luego haga clic en el icono de lupa (búsqueda) para abrir la siguiente ventana:-  
![image17][]   
e ingrese su **URL de instantánea de FieldPaper**, que será algo como esto: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar las trazas de GPS desde su computadora** (formato GPX), arrastre y suelte el archivo GPX en el editor iD.  
Para habilitar **trazas GPS de OpenStreetMap** haga clic en el cuadro. En la imagen a continuación, los rastros públicos de GPS se muestran en varios colores, lo que indica la dirección de viaje.  
![osm gps traces][]  
Para cambiar la **apariencia de las imágenes** haga clic en **Opciones de visualización**.  
![DisplayOptions][]  
Si hay [desplazamiento de imágenes](/es/josm/aerial-imagery), puede **corregir el desplazamiento de imágenes** haciendo clic en **Ajustar desplazamiento de imágenes**.  
![image18][]  

- Haga clic en los botones de navegación para mover las imágenes. Haga clic en el botón de reinicio para volver a la posición predeterminada. ![image20][]  

Edición básica con iD  
----------------------  

### Añadiendo puntos  

Para agregar un nuevo punto, haga clic en el botón **Punto**. ![image3][]{: height = "24px"}  

El cursor del mouse cambiará a signo más (+). Ahora, haga clic en una posición que conozca para marcar una ubicación. Por ejemplo, si sabe que hay un hospital en su área, haga clic en la posición del edificio del hospital.  
![image21][]  
- Tenga en cuenta que se agrega un nuevo punto. Al mismo tiempo, el panel izquierdo cambiará para mostrar un formulario donde puede seleccionar atributos para el objeto. Haga clic en **Terreno de Hospital** para etiquetar el punto como un hospital.  
![image22][]  
- Puede usar los formularios para completar información detallada sobre su punto. Puede completar el nombre, la dirección y/o otra información adicional del hospital. Tenga en cuenta que cada característica tendrá diferentes opciones, dependiendo de qué etiqueta elija en el panel de funciones.  
- Si comete un error, como una ubicación incorrecta, puede mover su punto a una nueva ubicación manteniendo presionado el botón izquierdo del mouse sobre su punto y arrastrándolo. O, si desea eliminar su punto, haga clic con el botón izquierdo del mouse en el punto, active el menú contextual haciendo clic con el botón derecho del mouse y luego haga clic en el botón que parece una papelera. ![PointToolDelete][]{: height="24px"}  
Un "punto" creado en el editor iD es en realidad un "nodo" independiente, asociado a un conjunto de "etiquetas".  

### Dibujando líneas  

Para añadir una nueva línea, clic en el botón **Línea**. ![image4][]{: height="24px"}  

- El cursor del mouse cambiará a signo más (+). Busca un camino que no se dibujó en el mapa y hazlo. Haga clic una vez en un punto donde comienza el segmento de carretera, mueva el mouse y haga clic para agregar puntos adicionales. Haga doble clic para finalizar el proceso de dibujo. Observe el panel de la izquierda.  
![image24][]  
- Al igual que con un punto, seleccione las etiquetas apropiadas para su línea.  
- Puede arrastrar puntos desde la línea haciendo clic con el botón izquierdo del mouse en un punto y arrastrándolo.  
- Cuando hace clic con el botón izquierdo del mouse en un punto individual (nodo) en la línea y hace clic en el botón derecho del mouse o presiona la barra espaciadora para activar el menú contextual, verá estas herramientas:  
  - Continúar la línea desde este punto ![PointToolContinue][]{: height="24px"}  
  - Desconectar las líneas en este punto ![PointToolDisconnect][]{: height="24px"}  
  - Dividir una línea en dos líneas en este punto. ![PointToolSplit][]{: height="24px"}  
  - Eliminar punto de la línea. ![PointToolDelete][]{: height="24px"}  
- Cuando haga clic con el botón izquierdo del ratón en una línea (pero no en un punto), vaya a estas herramientas:  
  -   Crear un círculo a partir de una línea (solo activo si la línea es cerrada) ![LineToolCircularize][]{: height="24px"}  
  -   Desconectar la línea de otros objetos ![LineToolDisconnect][]{: height="24px"}  
  -   Mover línea ![LineToolMove][]{: height="24px"}  
  -   Escuadrar todas las esquinas ![LineToolSquare][]{: height="24px"}  
  -   Reflejar la línea a través de su eje corto ![LineToolReflectShort][]{: height="24px"}  
  -   Reflejar la línea a través de su eje largo ![LineToolReflectLong][]{: height="24px"}  
  -   Invertir dirección de línea (buena para ríos y calles de sentido único) ![LineToolReverse][]{: height="24px"}  
  -   Girar la línea alrededor de su centro ![LineToolRotate][]{: height="24px"}  
  -   Enderezar la línea ![LineToolStraighten][]{: height="24px"}  
  -   Eliminar línea. ![LineToolDelete][]{: height="24px"}  

Una "línea" creada en el editor iD es en realidad una "vía" con "etiquetas" asociadas.

>Una consideración con respecto a la **Eliminación**: En general, debería evitar eliminar mapeos de otras personas si solo necesitan mejoras. Puede borrar sus propios errores, pero debería intentar *corregir* los objetos mapeados de otras personas si es que necesitan cambios. Esto preserva la historia de los elementos en la base de datos de OSM y es respetuoso hacia otros mapeadores. Si realmente cree que algo debería ser eliminado, considere primero consultarlo con el mapeador original, o en alguna de las listas de correo de OSM.

### Dibujando formas (polígonos)

Para agregar una nueva forma de múltiples lados, haga clic en el botón **Área**. ![image34][]{: height="24px"}  

- El cursor del mouse cambiará al signo más (+). Trata de rastrear un edificio usando las imágenes como guía.  
- Notará que el color de su forma cambiará según los atributos que le asigne.  
![image35][]  
- Las herramientas que están disponibles cuando selecciona una forma y activa el menú contextual con el botón derecho del mouse son similares a aquellas cuando hace clic en una línea.  

Un "polígono" en el editor iD es en realidad una "vía cerrada" con etiquetas asociadas.

### Dibujando Multipolígonos

A veces hay que dibujar un polígono que no solo tiene un contorno externo sino también uno o más contornos internos. Solo piense en edificios con patios interiores o lagos con islas. *No dibuje todas estas formas en una sola línea* para que los contornos internos se suspendan del contorno externo. En lugar de dibujar estos contornos por separado, asigne etiquetas solo al contorno exterior, seleccione todos los contornos y presione **c** para combinarlos en lo que se llama multipolígono.

![create multipolygon][]

Cuando selecciona cualquiera de los contornos del multipolígono recién creado, puede ver a la izquierda a qué multipolígonos pertenece

![part of multipolygon][]

## Problemas

El editor realiza una serie de comprobaciones tan pronto como edita algo. Si cree que lo que hizo podría causar problemas, se lo notifica en la pestaña de problemas. Siempre que el ícono de problemas a la derecha tenga un punto amarillo (para advertencias) o rojo (para errores), debe abrir la pestaña y ver qué informa. Esta información también se muestra en la pestaña de características del objeto a la izquierda si se selecciona el objeto relevante. También se le advierte que hay problemas sin resolver cuando carga sus datos. 

![Issue][] ![Error][]

La parte inferior de la pestaña de problemas muestra las reglas disponibles y le permite deshabilitarlas individualmente, aunque esto no es recomendable.

Guardando sus cambios
--------------------

Cuando (y si) desea guardar sus modificaciones en OpenStreetMap, haga clic en el botón **Guardar**. El panel de la izquierda mostrará el panel de carga.  
![image36][]  

- Agregar un comentario acerca de sus modificaciones y haz clic en **Guardar**.  

Si ha editado la misma función (punto, forma o área) al mismo tiempo que otra persona lo estaba editando, recibirá una advertencia de que sus ediciones no se pueden cargar hasta que haya resuelto los **conflictos**: elija cuáles ediciones aceptar y así subirlas. *La resolución de conflictos a menudo implica aceptar las ediciones de otras personas, en cuyo caso es probable que desee volver a la función en cuestión y editar nuevamente (**esta vez, guardar después de la edición para intentar evitar nuevamente un conflicto**).*

Información adicional y etiquetas personalizadas
---------------------------------------

Cuando esté editando un objeto, verá un menú "Agregar campo" en la parte inferior del panel de atributos. Puede agregar diversa información adicional seleccionando una de las entradas (capa, elevación, wikipedia, etc.).  

![AdditionalTags][]

O puede agregar etiquetas personalizadas haciendo clic en **Todas las etiquetas**. ![image44][]{: height="24px"}  

- Esto mostrará todas las etiquetas relacionadas con este elemento.  
![image45][]  
- Haga clic en el signo (+) para añadir claves o valores o simplemente en el ícono de la papelera para eliminar etiquetas.

Otros tutoriales
------------------

[Nuestra página de recursos externo](/es/resources/#iD) suministra enlaces a un número de video tutoriales desde varias fuentes.

iD versus JOSM
---------------  

**iD es bueno para...**

- Cuando está haciendo ediciones simples  
- Cuando dispones de una internet rápida para cargar las imágenes y guardar sus modificaciones  
- Cuando quiere asegurarse de seguir un esquema de etiquetado simple y consistente  
- Cuando tiene prohibido instalar un programa en la computadora que está usando

**JOSM es mejor...**

- Cuando está agregando varias construcciones (Ver complemento buildings_tool)
- Cuando está modificando varios polígonos o líneas que ya existen.
- Cuando está en una conexión a Internet no confiable o sin conexión
- Cuando está utilizando un esquema de etiquetado específico (o ajustes predeterminados personalizados)

[^fieldpaper]: hay una [sección de LearnOSM](/es/mobile-mapping/field-papers/) que brinda más información sobre Field Papers.



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