---
layout: doc
title: Editar datos de campo
permalink: /es/josm/editing-with-josm/
lang: es
category: josm
---

Editar datos de campo
==================


Ya hemos cubierto todos los componentes básicos de la cartografía con OpenStreetMap. En la sección [Cartografía con un smartphone, GPS o papel](/es/mobile-mapping/) puedes ver cómo utilizar las herramientas móviles para cartografiar una zona.

En este capítulo volveremos de nuevo a JOSM y veremos un par de conceptos nuevos que no hemos tratado hasta ahora.

Capas de JOSM
-----------
Si has seguido hasta ahora, te habrás dado cuenta de que podemos añadir todo tipo de cosas diferentes en JOSM. Podemos descargar datos de OSM, añadir imágenes de satélite de Bing, cargar pistas y puntos de GPS y añadir Field Papers, todo lo cual se muestra en la ventana del mapa de JOSM.

También habrás notado que cada vez que añades algo nuevo a JOSM, se añade un elemento adicional al panel Capas en la parte derecha de JOSM. Dependiendo de lo que hayas abierto, tu panel de capas puede tener este aspecto:

![Layers panel][]

Cada elemento de esta lista representa una fuente de datos diferente que tienes abierta en tu ventana de mapa. En este ejemplo, "Capa de Datos 1" son los datos de OpenStreetMap que estamos editando. "Field Papers" es la capa creada cuando añadimos nuestro Field Paper en JOSM.

Si añades las imágenes de satélite de Bing, aparecerá una nueva capa en el panel de capas llamada "Bing Sat".

La idea de las capas puede ser a menudo difícil de entender. Una buena forma de imaginarlo es que cada capa es como un trozo de papel semitransparente, y que están apilados unos encima de otros. Cada papel tiene un determinado tipo de información, y se pueden reorganizar como se quiera.

Las capas que se utilizan como referencias, como las imágenes de satélite, las pistas de GPS y los documentos de campo, suelen llamarse "capas base". La capa de datos de OSM es la capa con la que realmente se trabaja.

- Para mover una capa, haz clic en ella en el panel Capas y pulsa la flecha hacia arriba o hacia abajo para moverla.

![Layers up down][]

- Para ocultar una capa, selecciónala con el ratón y haz clic en el botón Mostrar/Ocultar:

![Layers show hide][]

- Deberías ver que la capa que has seleccionado desaparece en la ventana del mapa. Vuelve a hacer clic en Mostrar/Ocultar y volverá a aparecer.
- Puedes eliminar una capa seleccionándola y utilizando el botón de eliminar:

![Layers delete][]

- Por último, es importante saber que solo se puede editar la capa que se considera *activa* por JOSM. Si no puedes editar el mapa en tu ventana de mapa, probablemente sea porque no tienes la capa correcta establecida como activa. La mayoría de las capas, como los puntos GPS, los documentos de campo y las imágenes de satélite, no pueden editarse. Las únicas capas que pueden editarse son los datos de OpenStreetMap, que suelen llamarse "Capa de datos 1".
- Para activar una capa, selecciónala en el panel Capas y haz clic en el botón Activar:

![Layers activate][]


Usar Datos GPS y Field Papers
-------------------------------
En los capítulos [Cartografía con un Teléfono Inteligente, GPS o Papel](/es/mobile-mapping/) vimos cómo recoger datos con un GPS y Papeles de Campo, y cómo cargarlos en JOSM como una capa.

Una vez que hayas realizado el estudio con una de estas herramientas, tienes que añadir la información en OpenStreetMap de forma digital.

Lo haces con el mismo proceso que aprendiste anteriormente: **descargar, editar, guardar**. La diferencia es que en lugar de utilizar solo las imágenes de satélite como capa base, también puedes utilizar tus datos GPS, Field Papers, notas, o una combinación de todos ellos.

- Por ejemplo, supongamos que tienes tus puntos del GPS como capa de fondo en JOSM, has guardado un punto en tu GPS con el nombre 030, y has escrito en tu cuaderno que el 030 es una escuela. Para añadir este punto a OpenStreetMap, selecciona la herramienta de dibujo y haz doble clic sobre el punto 030 en la ventana del mapa. Esto creará un punto. A continuación, ve al menú de preajustes y busca el preajuste para la escuela. Introduce el nombre de la escuela y haz clic en "Aplicar preajuste". Haz lo mismo para añadir líneas y formas.

![GPS in JOSM][]

Etiquetas
----
Cuando se dibuja un punto, una línea o una forma, tiene una ubicación, pero no hay información sobre lo que es. En otras palabras, sabemos **dónde** está, pero no **qué** es. Hasta ahora, hemos utilizado elementos del menú Presets para definir **qué** es. La forma en que OpenStreetMap sabe **qué** es un objeto es mediante el uso de **etiquetas**.

Una etiqueta es como un rótulo que se puede poner a algo. Por ejemplo, si dibujamos un cuadrado, solo es un cuadrado. Pero luego le añadimos atributos que describen lo que es: este cuadrado es un edificio; el nombre del edificio es "Menara Thamrin"; el edificio tiene 16 niveles de altura.

Puedes añadir tantas etiquetas como quieras a un objeto. Las etiquetas se guardan como pares de texto, llamados **claves** y **valores**. En OpenStreetMap, las etiquetas escritas anteriormente serían de hecho:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Si seleccionas un objeto en JOSM, puedes ver todas las etiquetas que se le han asignado en el panel de propiedades de la derecha.

![Properties panel][]

### Edición de Etiquetas

Puedes añadir, editar y eliminar etiquetas desde el panel de propiedades. Sin embargo, las etiquetas están tradicionalmente en inglés y a veces pueden resultar confusas, por lo que a menudo es más fácil utilizar el menú de preajustes. Cuando se añaden o cambian las etiquetas, se modifican los atributos del objeto.

- Para editar las etiquetas de un objeto, primero hay que seleccionarlo.
- A continuación, edita las etiquetas de una de las dos maneras siguientes: (1) Utilizar el menú de preajustes, o (2) editar las etiquetas directamente en la ventana de propiedades de la derecha.

### Error común: Etiquetar nodos cuando se quiere etiquetar líneas o polígonos

Cuando se editan los atributos de un punto, primero se selecciona el punto y luego se añaden las etiquetas, ya sea a través del menú de preajustes o directamente en el panel de propiedades. Un error común es cuando se añaden atributos a una línea o a una forma. Al seleccionar el objeto, es importante que
selecciones la línea, y NO los puntos que la componen.

Esto ocurre con frecuencia porque los editores utilizan la herramienta de selección JOSM para dibujar un recuadro alrededor de un objeto, lo que hace que se seleccione todo, tanto la línea **como** los nodos, y cuando se añaden etiquetas, estas se aplican también a los nodos. Asegúrate de **solo** seleccionar las líneas cuando quieras añadirles etiquetas.

![Nodes mistake][]

Guardar archivos OSM
----------------
Cuando editas en JOSM, siempre es una buena idea descargar, editar y cargar los cambios en un periodo de tiempo razonablemente corto. No es conveniente descargar los datos un día y esperar hasta unos días después para cargar las modificaciones. ¿Qué pasa si otra persona edita la misma área durante ese tiempo? Esto provocará errores y conflictos.

No tengas miedo de subir tus ediciones con frecuencia. Así te aseguras de que tus cambios se guardarán en la base de datos y no perderás tu duro trabajo.

Si trabajas en una sola zona, es conveniente que descargues los datos del mapa cada vez que quieras editarlos, por si otro usuario ha hecho cambios.

Aunque siempre debes intentar descargar los datos de OSM cuando estés listo para editar, y subir tus cambios con frecuencia, puede haber casos en los que quieras guardar los datos de OSM en tu computadora. Por ejemplo, si tienes una conectividad intermitente a Internet, puede que quieras descargar los datos, guardarlos, editarlos y subir los cambios más tarde.

- Para guardar un archivo OSM, asegúrate de que es la capa activa en el panel de capas. Haz clic en "Archivo" en el menú superior y haz clic en "Guardar". Elige una ubicación para el archivo y dale un nombre. También puedes guardar haciendo clic en este botón:

![JOSM save button][]

- Ahora puedes cerrar JOSM y tus datos se guardarán. Cuando quieras volver a abrir el archivo, simplemente abre JOSM, ve al menú "Archivo" y haz clic en "Abrir...".

Resumen
-------
En este capítulo hemos visto un poco más de cerca la interfaz de JOSM y hemos aprendido sobre las capas y las etiquetas. Ahora deberías tener una base sólida sobre cómo mapear y cómo editar OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png