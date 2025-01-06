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

¿Empezando a mapear con un Tasking Manager para HOT o Missing Maps? Consulta nuestra [sección de consejos HOT](/es/hot-tips/).  

- TOC
{:toc}

El editor iD es el editor de OpenStreetMap basado en navegador por excelencia. iD es rápido y fácil de usar, y permite mapear a partir de diversas fuentes de datos, como imágenes satelitales y aéreas, GPS, Field Papers o Mapillary.  

Usar el editor iD es una excelente manera de realizar cambios pequeños y sencillos que no requieren las funciones avanzadas de JOSM (un editor de mapas más avanzado). Este capítulo muestra los conceptos básicos de la edición con iD.  

Cómo iniciar el editor iD
----------------------

-	El editor iD requiere una conexión activa a Internet.  
-	Abre tu navegador de Internet y ve al sitio web de OpenStreetMap en [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Inicia sesión** con tu cuenta de OpenStreetMap.  
-	Desplázate y amplía el mapa hasta la zona que deseas editar. Puedes desplazarte manteniendo pulsado el botón izquierdo del ratón y arrastrando el mapa a la zona deseada.  
-	Haz clic en la pequeña flecha junto a **Editar**. A continuación, haz clic en **Editar con iD (editor en el navegador)**.  

![image1][]


Interfaz de usuario del editor iD
-------------------------
![image2][]

1.  **Panel de edición de elementos:** Este panel muestra las etiquetas del objeto seleccionado en el mapa.  
	Puedes añadir o editar etiquetas desde este panel.  
2.  **Herramientas:** Este panel muestra las herramientas de edición básicas:  
    Dibujar un punto (nodo), *atajo de teclado* **1** ![image3][]{: height="24px"}  
    Dibujar una línea (vía), *atajo de teclado* **2** ![image4][]{: height="24px"}  
    Dibujar una forma (polígono), *atajo de teclado* **3** ![image5][]{: height="24px"}  
    Deshacer, *atajo de teclado* **Ctrl+z** ![image6][]{: height="24px"}  
    Rehacer, *atajo de teclado* **Ctrl+y** ![image7][]{: height="24px"}  
    Guardar cambios, *atajo de teclado* **Ctrl+s** ![image8][]{: height="32px"}  
3.  **Panel del mapa:** Este panel muestra varias funciones de configuración:  
    Acercar, *atajo de teclado* **+** ![image9][]{: height="24px"}  
    Alejar, *atajo de teclado* **-** ![image10][]{: height="24px"}  
    Ir a tu ubicación ![image11][]{: height="24px"}  
    Configurar la capa de fondo, *atajo de teclado* **b** ![image12][]{: height="24px"}  
    Datos del mapa, *atajo de teclado* **f** ![Map Data][]{: height="24px"}  
    Problemas, *atajo de teclado* **i** ![Issues][]{: height="24px"}  
    Abrir el menú de ayuda, *atajo de teclado* **h** ![image13][]{: height="24px"}  
4.  **Panel de información:** Este panel muestra diversa información, como la barra de escala y los usuarios que han contribuido en esa zona.  

## Configuración de la capa de fondo

Haz clic en el botón **Configuración de fondo** o usa el *atajo de teclado* **b**. ![image14][]{: height="24px"}  
![image15][]  
Puedes **cambiar la capa de fondo** según el proveedor de teselas que desees (el predeterminado es Bing Aerial Imagery).  

Puedes añadir tus propias teselas de mapa haciendo clic en **Personalizado**. Por ejemplo, si quieres **añadir un Field Paper**[^fieldpaper], haz clic en **Personalizado** y luego en el icono de la lupa (buscar) para abrir la siguiente ventana:  
![image17][]   
e introduce la **URL de la instantánea de FieldPaper**, que será algo parecido a esto: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar las trazas GPS de tu computadora** (formato GPX), arrastra y suelta el archivo GPX en el editor iD.  
Para habilitar las **trazas GPS de OpenStreetMap**, marca la casilla. En la imagen de abajo, las trazas GPS públicas se muestran en varios colores, que indican la dirección del viaje.  
![osm gps traces][]  
Para cambiar la **apariencia de las imágenes**, haz clic en **Opciones de visualización**.  
![DisplayOptions][]  
Si hay un [desplazamiento de imágenes](/es/josm/aerial-imagery), puedes **corregirlo** haciendo clic en **Ajustar desplazamiento de imágenes**.  
![image18][]  

- Haz clic en los botones de navegación para mover las imágenes. Haz clic en el botón de reinicio para volver a la posición predeterminada. ![image20][]  

Edición básica con iD  
----------------------  

### Añadir puntos  

Para añadir un nuevo punto, haz clic en el botón **Punto**. ![image3][]{: height="24px"}  

- El cursor del ratón cambiará a un signo más (+). Haz clic en una posición que conozcas para marcar una ubicación. Por ejemplo, si sabes que hay un hospital en tu zona, haz clic en la posición del edificio del hospital.  
![image21][]  
- Observa que se añade un nuevo punto. Al mismo tiempo, el panel izquierdo cambiará para mostrar un formulario donde puedes seleccionar los atributos del objeto. Haz clic en **Terreno de hospital** para etiquetar el punto como un hospital.  
![image22][]  
- Puedes usar los formularios para rellenar información detallada sobre el punto. Puedes rellenar el nombre del hospital, la dirección y otra información adicional. Ten en cuenta que cada elemento tendrá diferentes opciones, dependiendo de la etiqueta que elijas en el panel de elementos.  
- Si cometes un error, como una ubicación incorrecta, puedes mover el punto a una nueva ubicación manteniendo pulsado el botón izquierdo del ratón sobre el punto y arrastrándolo. O bien, si quieres eliminar el punto, haz clic con el botón izquierdo del ratón sobre el punto, activa el menú contextual haciendo clic con el botón derecho del ratón y, a continuación, haz clic en el botón que parece una papelera. ![PointToolDelete][]{: height="24px"}  
Un "punto" creado en el editor iD es en realidad un "nodo" independiente con un conjunto de "etiquetas".  

### Dibujar líneas  

Para añadir una nueva línea, haz clic en el botón **Línea**. ![image4][]{: height="24px"}  

- El cursor del ratón cambiará a un signo más (+). Busca una carretera que no esté dibujada en el mapa y trázala. Haz clic una vez en un punto donde comience el segmento de carretera, mueve el ratón y haz clic para añadir más puntos. Haz doble clic para finalizar el proceso de dibujo. Observa el panel de la izquierda.  
![image24][]  
- Al igual que con un punto, selecciona las etiquetas adecuadas para tu línea.  
- Puedes arrastrar puntos de la línea haciendo clic con el botón izquierdo del ratón sobre un punto y arrastrándolo.  
- Cuando hagas clic con el botón izquierdo del ratón en un punto individual (nodo) de la línea y hagas clic con el botón derecho del ratón o pulses la barra espaciadora para activar el menú contextual, verás estas herramientas:  
  - Continuar la línea desde este punto ![PointToolContinue][]{: height="24px"}  
  - Desconectar las líneas en este punto ![PointToolDisconnect][]{: height="24px"}  
  - Dividir una línea en dos líneas en este punto ![PointToolSplit][]{: height="24px"}  
  - Eliminar el punto de la línea ![PointToolDelete][]{: height="24px"}  
- Cuando hagas clic con el botón izquierdo del ratón en una línea (pero no en un punto), verás estas herramientas:  
  -   Crear un círculo a partir de una línea (solo activo si la línea está cerrada) ![LineToolCircularize][]{: height="24px"}  
  -   Desconectar la línea de otros objetos ![LineToolDisconnect][]{: height="24px"}  
  -   Mover línea ![LineToolMove][]{: height="24px"}  
  -   Cuadrar todas las esquinas ![LineToolSquare][]{: height="24px"}  
  -   Reflejar la línea a través de su eje corto ![LineToolReflectShort][]{: height="24px"}  
  -   Reflejar la línea a través de su eje largo ![LineToolReflectLong][]{: height="24px"}  
  -   Invertir la dirección de la línea (útil para ríos y calles de un solo sentido) ![LineToolReverse][]{: height="24px"}  
  -   Girar la línea alrededor de su centro ![LineToolRotate][]{: height="24px"}  
  -   Enderezar la línea ![LineToolStraighten][]{: height="24px"}  
  -   Eliminar línea ![LineToolDelete][]{: height="24px"}  

Una "línea" creada en el editor iD es en realidad una "vía" con "etiquetas".

> Una nota especial sobre **Eliminar:** En general, deberías evitar eliminar el mapeo de otras personas si solo necesita mejoras. Puedes eliminar tus propios errores, pero deberías intentar *ajustar* los objetos mapeados por otras personas si necesitan cambios. Esto preserva el historial de los elementos en la base de datos de OSM y es respetuoso con los demás mapeadores. Si realmente crees que algo debe eliminarse, plantéate primero preguntárselo al mapeador original o en alguna de las listas de correo de OSM.

### Dibujar formas (polígonos)

Para añadir una nueva forma de varios lados, haz clic en el botón **Área**. ![image34][]{: height="24px"}  

- El cursor del ratón cambiará a un signo más (+). Intenta trazar un edificio utilizando las imágenes como guía.  
- Observarás que el color de tu forma cambiará en función de los atributos que le asignes.  
![image35][]  
- Las herramientas disponibles cuando seleccionas una forma y activas el menú contextual con el botón derecho del ratón son similares a las que aparecen al hacer clic en una línea.  

Un "polígono" en el editor iD es en realidad una "vía cerrada" con etiquetas.

### Dibujar multipolígonos

A veces tienes que dibujar un polígono que no solo tiene un contorno externo, sino también uno o más contornos internos. Piensa en edificios con patios interiores o lagos con islas. *No dibujes todas estas vías en una sola línea*, de modo que los contornos internos queden suspendidos del contorno externo. Dibuja estos contornos por separado, añade etiquetas solo al contorno externo, selecciona todos los contornos y pulsa **c** para combinarlos en lo que se denomina un multipolígono.

![create multipolygon][]

Cuando selecciones cualquiera de los contornos del multipolígono recién creado, podrás ver a la izquierda a qué multipolígonos pertenece.

![part of multipolygon][]

## Problemas

El editor realiza una serie de comprobaciones en cuanto editas algo. Si cree que lo que has hecho podría causar problemas, te lo notificará en la pestaña de problemas. Siempre que el icono de problemas de la derecha tenga un punto amarillo (para avisos) o rojo (para errores), debes abrir la pestaña y ver qué te informa. Esta información también se muestra en la pestaña de características del objeto, a la izquierda, si se selecciona el objeto pertinente. También se te avisará de que hay problemas sin resolver cuando subas tus datos. 

![Issue][] ![Error][]

La parte inferior de la pestaña de problemas muestra las reglas disponibles y te permite desactivarlas individualmente, aunque no es recomendable.

Guardar los cambios
--------------------

Cuando (y si) quieres guardar tus ediciones en OpenStreetMap, haz clic en el botón **Guardar**. El panel de la izquierda mostrará el panel de subida.  
![image36][]  

- Añade un comentario sobre tus ediciones y haz clic en **Guardar**.  

> Si has editado el mismo elemento (punto, vía o área) al mismo tiempo que otra persona, recibirás un aviso de que tus ediciones no se pueden subir hasta que hayas resuelto los **conflictos**: elige qué ediciones aceptar y sube tus cambios. *Resolver conflictos a menudo implica aceptar las ediciones de la otra persona, en cuyo caso probablemente querrás volver al elemento en cuestión y editarlo de nuevo (**¡esta vez guarda poco después de la edición para intentar evitar otro conflicto!**).*

Información adicional y etiquetas personalizadas
---------------------------------------

Cuando estés editando un objeto, verás un menú "Añadir campo" en la parte inferior del panel de atributos. Puedes añadir diversa información adicional seleccionando una de las entradas (capa, elevación, Wikipedia, etc.).  

![AdditionalTags][]

O puedes añadir etiquetas personalizadas haciendo clic en **Todas las etiquetas**. ![image44][]{: height="24px"}  

- Esto mostrará todas las etiquetas asociadas a este elemento.  
![image45][]  
- Haz clic en el signo más (+) para añadir claves o valores, o simplemente en el icono de la papelera para eliminar etiquetas.

Otros tutoriales
------------------

[Nuestra página de recursos externos](/es/resources/#iD) proporciona enlaces a varios tutoriales en vídeo de diversas fuentes.

iD vs. JOSM
---------------  

**iD es bueno para...**

- Cuando realizas ediciones sencillas.  
- Cuando tienes una conexión rápida a Internet para cargar las imágenes y guardar las ediciones.  
- Cuando quieres asegurarte de seguir un esquema de etiquetado sencillo y coherente.  
- Cuando tienes prohibido instalar programas en la computadora que estás utilizando.

**JOSM es mejor...**

- Cuando añades muchos edificios (consulta el complemento buildings_tool).
- Cuando editas muchos polígonos o líneas que ya existen.
- Cuando tienes una conexión a Internet poco fiable o estás sin conexión.
- Cuando utilizas un esquema de etiquetado específico (o presets personalizados).

[^fieldpaper]: Hay una [sección de LearnOSM](/es/mobile-mapping/field-papers/) que proporciona más información sobre Field Papers.



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