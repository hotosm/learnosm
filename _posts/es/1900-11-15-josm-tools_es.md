---
layout: doc
title: Herramientas de Edición en JOSM
permalink: /es/josm/josm-tools/
lang: es
category: josm
---

Herramientas de Edición en JOSM
==================

> Revisado 2017-06-09  

- TOC
{:toc}

En la [guía para empezar a usar JOSM](/es/josm/start-josm/) cubrimos los aspectos básicos del dibujo en JOSM, pero hay muchas herramientas y técnicas que no se demuestran.

Aquí veremos algunas de las herramientas y técnicas básicas disponibles para dibujar objetos espaciales de mapas en JOSM, y en los siguientes capítulos profundizaremos en las herramientas de dibujo avanzadas.

Obtener archivo de muestra
-------------------

- Si quieres seguir y practicar el uso de las herramientas JOSM, descarga [tools_menu_sample.osm](/files/tools_menu_sample.osm). Inicia JOSM y abre el archivo. Debería tener el siguiente aspecto:

![tools_menu_sample.osm][]

Herramientas de dibujo
-------------

Si haces clic en el menú "Herramientas" de la parte superior de JOSM, verás que hay numerosas funciones que pueden ayudarte a dibujar líneas y formas, y a editar los objetos del mapa.

JOSM dispone de algunas herramientas adicionales para facilitar el dibujo de líneas y formas. Estas herramientas se encuentran en el menú "Herramientas" en la parte superior de JOSM.

![Tools menu][]

Para aplicar las funciones de este menú, primero debes seleccionar un punto, una línea o una forma en la ventana del mapa. El archivo de ejemplo contiene varios elementos etiquetados con los nombres de las distintas herramientas del menú.

### Alineación de nodos en un círculo  

- Prueba a seleccionar uno de los elementos del archivo. A continuación, ve al menú Herramientas y haz clic en la función que se identifica junto al elemento que has seleccionado. Por ejemplo, haz clic en el círculo mal dibujado para seleccionarlo.

![Align nodes in circle][]

- A continuación, ve a Herramientas->Alinear Nodos en Círculo. El círculo mal dibujado se volverá más circular.

Experimenta con cada una de las herramientas utilizando este archivo de ejemplo. A continuación se ofrece una descripción de algunas de las herramientas.

### Particionar Vía  

Esto te permite dividir una línea en dos líneas separadas. Esto es útil si quieres añadir diferentes atributos a diferentes partes de una carretera, como un puente. Para utilizar esta función, selecciona un punto en el centro de la línea que deseas dividir, selecciona Dividir camino en el menú Herramientas, y tu línea debería dividirse en dos.


### Combinar Vía

Esto hace lo contrario de Particionar Vía. Para combinar dos líneas en una sola, deben compartir un mismo punto. Para utilizar esta función, selecciona las dos líneas que deseas combinar. Puedes seleccionar más de un objeto manteniendo pulsada la tecla MAYÚSCULA de tu teclado y haciendo clic en cada línea. Cuando hayas seleccionado ambas líneas, selecciona Combinar Vía en el menú Herramientas.

![Combine way][]


### Revertir y combinar  

Si estás combinando carreteras que tienen diferentes direcciones, puedes recibir esta advertencia:

![Reverse and combine][]

Si las carreteras están conectadas y van en la misma dirección, elige "Invertir y continuar".


### Revertir Vía

Esto cambiará la dirección de la línea. Todas las líneas en OSM tienen una dirección, que se muestra en JOSM por las flechas en la línea. La dirección normalmente no importa, excepto en el caso de caminos de una sola dirección y ríos que fluyen en una dirección determinada. En estos casos, es posible que tengas que invertir el camino para que vaya en la dirección correcta.

![Way direction][]

### Simplificar Vía

Si tu línea tiene demasiados puntos y quieres simplificarla, esto eliminará algunos de los puntos de una línea.

![Simplify way][]


### Crear un Círculo

Utiliza esta herramienta, que creará un círculo más perfecto. Dibuja una línea que represente el diámetro de tu círculo, y luego aplica esta herramienta.

![Create circle][]


### Alinear Nodos en Línea

Esta función alineará una serie de puntos en una línea recta. Con líneas largas es mejor seleccionar secciones de la línea para enderezarlas. Ten cuidado, ya que esto tiene la tendencia a desplazar la línea un poco.

![Align nodes in line][]

### Ortogonalizar Forma

Esta función es muy útil para dibujar formas regulares como edificios (**Pero consulta también [JOSM building tools](/es/josm/josm-more-plugins/)**). Después de dibujar un área, esta función le dará nueva forma para que tenga esquinas cuadradas.

![Orthagonalize][]


### Despegar Vía

Esta herramienta permite separar nodos que están conectados. Es útil cuando dos objetos comparten un nodo cuando no deberían hacerlo. Por ejemplo, un error común es que una carretera comparta un nodo con la esquina de un edificio. Por supuesto, las carreteras no suelen coincidir con los edificios, por lo que se trata de un error, y puedes despegar los objetos entre sí.

![Unglue way][]

*La línea y el nodo no aparecerán realmente separados hasta que los muevas.*

Atajos de teclado
------------------

Cuando empieces a editar mucho te darás cuenta de que pierdes mucho tiempo haciendo clic en los menús y submenús. Para superar esto, JOSM tiene atajos de teclado para casi todo.

Esto significa que, en lugar de hacer clic en un objeto y pasar por un largo proceso de menú, puedes simplemente seleccionar el objeto y pulsar una tecla del teclado.

Todas las herramientas mencionadas en la sección anterior tienen teclas de acceso directo, que aparecen en el menú Herramientas a la derecha del nombre de cada herramienta. Por ejemplo, "O" es el
atajo de teclado para alinear los nodos en un círculo. "L" es el atajo para alinearlos en una línea. Puede llevar algún tiempo aprender las teclas de acceso rápido, pero descubrirás que te ahorra
mucho tiempo a la larga.

Aquí hay otras teclas de acceso directo (en **negrita**), que son algunas de las más importantes.

1. Active la herramienta de selección - **S**
2. Active la herramienta de dibujo- **D**
3. Active la herramienta de zoom - **Z**
4. Elimine el objeto seleccionado(s) - **Supr**
5. Acercar - **+**
6. Alejar - **-**


Escala y Rotación
----------------

Una pregunta habitual es cómo girar una línea o forma después de haberla dibujado.

Para girar un objeto, primero selecciónalo. Mantén pulsado **MAYÚSCULA+CTRL** en tu teclado. Haz clic y arrastra el ratón para girar.

![Rotate demo][]

Para escalar un objeto (hacerlo más grande o más pequeño), sigue el mismo proceso, pero manteniendo **ALT+CTRL** en su lugar.

Estas instrucciones se muestran en la barra de información en la parte inferior de JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png