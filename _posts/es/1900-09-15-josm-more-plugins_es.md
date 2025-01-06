---
layout: doc
title: Complementos de JOSM Building Tools y Utilsplugin2
permalink: /es/josm/josm-more-plugins/
lang: es
category: josm
---

Complementos de JOSM Building Tools y Utilsplugin2
============


Los complementos **buildings_tools** y **utilsplugin2** añaden a JOSM una gran funcionalidad adicional. En esta sección veremos más de cerca las funciones que proporcionan.  

El complemento 'Buildings Tools'
--------------------------

Si no lo has hecho ya, instala este complemento siguiendo las instrucciones en [Complementos JOSM](/es/josm/josm-plugins).  

![Buildings tools plugin][]

El complemento 'Buildings Tools' es de gran ayuda para digitalizar edificios. Te permite trazar un lado de un edificio rectangular y extender fácilmente la forma. Si estás digitalizando varios edificios, este complemento te ahorrará muchos clics y, por lo tanto, ahorrarás tiempo.  

Una vez que hayas instalado el complemento verás un nuevo botón en el lado izquierdo de JOSM, con este aspecto: ![Buildings tools button][]{: height="29px"}

Inicia JOSM y descarga un área donde quieras trazar edificios.  

### Edificios rectangulares

* Selecciona la herramienta de edificios y haz clic dos veces para dibujar una línea en el mapa.  

![Draw edge][]

* Luego desplaza el ratón y haz clic de nuevo para dibujar un rectángulo.  

![Extend building][]

* De esta forma no solo crearás un rectángulo en tres clics, sino que además se aplicará automáticamente la etiqueta **building=yes** a la forma.  

### Edificios circulares

* En "Más herramientas"->"Modos de dibujar edificios", selecciona "Establecer la forma del edificio como círculo" o utiliza el atajo de teclado ALT+Z (cuando vuelvas a dibujar edificios rectangulares utiliza ALT+R). A continuación, dibuja el diámetro del edificio.

![Round building][]

### Edificios complejos

También puedes crear edificios más complejos dibujando primero varios edificios superpuestos y luego fusionándolos en uno solo.  

* Dibuja dos edificios que se superpongan, de manera que dibujen una L.  
* Selecciona ambos edificios (mantén presionada la tecla Mayús para seleccionar más de un objeto).  
* Ve a Herramientas -> Unir áreas superpuestas o pulsa Mayús+J en el teclado.  

![Merge buildings][]

### Editar los ajustes

Además, puedes modificar los ajustes predeterminados del complemento.  

* Ve a "Más herramientas"->"Modos de dibujo de edificios"->Establecer tamaño de edificios.

* Si vas a crear varios edificios de tamaño similar, puedes ajustar dimensiones específicas de anchura y altura de los edificios, tales como 6 x 10 metros (las unidades están en metros).  

![Set buildings size dialog][]

* Al ajustar las dimensiones solo necesitarás dos clics para crear edificios de un tamaño preciso.  

Finalmente, puedes hacer clic en el botón Avanzado si deseas añadir de forma automática etiquetas adicionales a cada edificio. Por ejemplo, si todos los edificios que dibujas están en la misma calle, puedes incluir una etiqueta que identifique la calle que será aplicada automáticamente.  

![Buildings advanced][]


Utilsplugin2
-------------

* Si no lo has hecho todavía, instala el complemento siguiendo las instrucciones en [Complementos JOSM](/es/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Después de instalar el complemento y reiniciar JOSM, tendrás un nuevo menú en la parte superior denominado "Más herramientas".  

![More tools menu][]

Crea una capa nueva y experimenta con alguna de las nuevas herramientas. Aquí describimos algunas de las más útiles.  

1. **Añadir nodos en las intersecciones:** Esta herramienta es muy útil para añadir nodos ausentes en las intersecciones de las vías seleccionadas. Es una buena práctica que las carreteras siempre tengan nodos comunes en las intersecciones.  

    ![Nodes interesection][]

2. **Pegar etiquetas de la selección anterior:** Esta función facilita la copia de etiquetas. Si deseas crear varios objetos con las mismas etiquetas, primero dibuja los objetos. Luego, agrega las etiquetas a un objeto. Haz clic en otro objeto y presiona Shift + R para copiar las etiquetas del objeto seleccionado previamente. Puedes hacer esto con todos los objetos que quieras etiquetar. Recuerda que las etiquetas se copiarán del objeto seleccionado previamente, así que si haces clic en un objeto sin etiquetas y luego en otro objeto sin etiquetas, no podrás copiar ninguna etiqueta.  

    ![Copy tags][]

3. **Añadir etiqueta de fuente:** Esta herramienta simplifica añadir una etiqueta de fuente. Recuerda la última fuente especificada y la añade como fuente memorizada a tus objetos. Puedes insertar la fuente con un solo clic.  

4. **Reemplazar geometría:** Esta herramienta es excelente si quieres volver a dibujar un objeto con una forma tosca, pero quieres mantener su historial, atributos y número de ID. Por ejemplo, si te encuentras con un edificio que es complicado y está dibujado de forma pobre, en lugar de cambiar dolorosamente cada nodo, puedes dibujar el objeto de nuevo, seleccionar los objetos viejo y nuevo, y seleccionar "Reemplazar geometría" para transferir toda la información del viejo al nuevo.  

    ![Replace geometry][]


### Más Herramientas de Selección

**Utilsplugin2** también proporciona más herramientas en el menú "Selección". Experimenta un poco con ellas.  

![Selection menu][]

Una de nuestras herramientas de selección favoritas es **Deseleccionar nodos:** Esta herramienta deselecciona todos los nodos. Puede ser útil si estás dibujando una caja para seleccionar varios objetos, pero no quieres seleccionar los nodos contenidos en las líneas y formas.  

![Unselect nodes][]

¡Buena suerte!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

