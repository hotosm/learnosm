---
layout: doc
title: El Proceso de Edición JOSM
permalink: /es/josm/more-about-josm/
lang: es
category: josm
---

El Proceso de Edición JOSM
========================


En la sección anterior, instalaste JOSM y comenzaste a dibujar tus primeros puntos, líneas y formas. Añadiste preajustes a estos objetos para adjuntar información sobre ellos. Al final, fuiste capaz de dibujar tu propio mapa en JOSM.

Esta fue una buena práctica, y ahora estamos listos para editar OpenStreetMap.

En esta sección echaremos un vistazo a la interfaz de JOSM y veremos cómo podemos utilizarla para editar el mapa en OpenStreetMap.

El Ciclo de Edición
---------------------
La edición de OpenStreetMap con JOSM es similar a la edición con el editor iD que vimos anteriormente. Pero como JOSM es una aplicación de escritorio, su funcionamiento es un poco diferente. El proceso de edición y adición a OpenStreetMap con JOSM siempre será el siguiente:

1.  **Descargar** los datos del mapa actual de OSM
2.  **Editar** utilizando imágenes de satélite, GPS, Field Papers y notas como guía
3.  **Guardar** los cambios en OpenStreetMap

Descargar Datos OSM
--------------------
El primer paso de edición es descargar los datos de la zona del mundo que queremos mejorar. Recuerda que tienes que hacer esto cada vez que quieras hacer cambios en el mapa, porque el mapa suele ser actualizado por otros usuarios.

- Haz clic en "Archivo" en la esquina superior izquierda de JOSM y haz clic en "Descargar datos...". Esto abrirá la ventana de descarga. Puedes acceder a esta ventana de forma más sencilla haciendo clic en el botón de descarga, que se muestra aquí:

![JOSM Download Button][]

- Cuando se abra la ventana de descarga, deberías ver un mapa. Si no ves el mapa, haz clic en la pestaña "Slippy map".

![JOSM Download Dialog][]

- Utiliza el ratón para desplazarte y hacer zoom en una zona que conozcas muy bien, como tu ciudad o tu barrio. Los controles son los mismos que en la ventana del mapa JOSM. El botón derecho del ratón te permite arrastrar el mapa y la rueda de desplazamiento te permite acercarte y alejarte.

> A veces, si trabajas en un ordenador portátil, puede ser difícil desplazarse hacia dentro y hacia fuera. Trabajar en JOSM es mucho más fácil si tienes un ratón, pero la mayoría de los portátiles modernos te permiten desplazarte usando el touchpad.

- Dibuja un recuadro alrededor del área que deseas descargar. Para dibujar un nuevo recuadro, haz clic en el mapa, mantén pulsado el botón izquierdo del ratón y arrástralo para crear un recuadro. Suelta el botón del ratón para terminar de dibujar el recuadro.
- Cuando estés satisfecho con el tamaño y la ubicación del cuadro, haz clic en "Descargar" en la parte inferior de la ventana. JOSM obtendrá los datos de esta zona de OpenStreetMap y los abrirá en tu ventana de mapa para editarlos.

### Agregar Imágenes
Si nos has seguido cuando añadimos nuestros primeros puntos con el editor iD, recordarás que debajo de los datos del mapa había una imagen de satélite que nos ayudaba a identificar los objetos sobre el terreno. Estas imágenes procedían de Microsoft Bing, que generosamente proporciona sus imágenes para que los usuarios de OpenStreetMap las consulten mientras contribuyen al mapa.

- Para añadir las imágenes de satélite Bing en JOSM, haz clic en "Imágenes" en el menú superior de JOSM y selecciona "Bing Sat".

> Si no ves Bing Sat en el menú de Imágenes, puede que tengas que activarlo en las preferencias de JOSM. Ve a Editar -> Preferencias y haz clic en el icono que dice "WMS TMS". Puede que tengas que hacer clic en la flecha hacia abajo para encontrarlo.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Haz clic en "Bing Sat". Luego haz clic en "Activar".


### Paseo por JOSM
Ahora que hemos descargado los datos de OpenStreetMap y añadido las imágenes de satélite de Bing, vamos a echar otro vistazo a la interfaz de JOSM.

![JOSM layout][]

La ventana principal con la que ya estás familiarizado: esta es la ventana del mapa y es donde tiene lugar la mayor parte de la acción. Aquí podrás ver, editar y agregar a los datos de OpenStreetMap.

A la derecha de la ventana del mapa hay una serie de paneles, cada uno de los cuales tiene su propia función. Normalmente, cuando instalas JOSM por primera vez, se muestran varios paneles de forma predeterminada, como Capas, Propiedades y Selección. Cuando seleccionas un punto, línea o forma en la ventana del mapa, se mostrará en el panel Selección. La información sobre el objeto se mostrará en el panel Propiedades y el nombre de usuario del autor de ese objeto se mostrará en el panel Autores.

Estos paneles se pueden abrir o cerrar haciendo clic en los diferentes botones en la parte inferior izquierda de JOSM. Sobre estos botones, en la parte superior izquierda, están las herramientas que modifican las acciones que puedes realizar con el mouse. Ya conoces algunas de ellas, como la herramienta Seleccionar y la herramienta Dibujar. Debajo de ellas están las herramientas que facilitan acercar, borrar un objeto, dibujar una forma o crear una línea paralela a otra.


Editar
----
Así hemos completado el paso uno del proceso de edición: la descarga. Hemos preparado JOSM con imágenes de satélite como referencia. El siguiente paso es editar el mapa y agregar nuevos elementos.

Dependiendo del área que elijas descargar, puede haber muchos o muy pocos datos de mapas existentes. Pero observa que es el mismo tipo de datos que hemos visto anteriormente: puntos, líneas y formas que representan ubicaciones de la vida real.

- Utiliza las técnicas que ya has aprendido para agregar un par de puntos al mapa de lugares que conoces. Si ves algún error, intenta corregirlo.
- No es necesario ser demasiado agresivo mientras aprendes. Si no estás seguro de algo, es mejor dejarlo como está.
- Si deseas mover un punto, línea o forma, utiliza la **herramienta de selección**. Haz clic en un objeto y arrástralo donde debería estar. Esto se puede utilizar para corregir la ubicación de los elementos que se han colocado en el lugar incorrecto.

![JOSM select tool][]

- Utiliza la **herramienta de dibujo** para dibujar nuevos puntos, líneas y formas. Describe estos objetos seleccionándolos en el menú Ajustes preestablecidos, como hiciste en la sección anterior.

> Nunca edites el mapa fuera del área que has descargado. Puedes ver que el área rectangular que has descargado tiene un fondo sólido, mientras que el área que no has descargado tiene líneas diagonales a rayas.
>
> ![JOSM area downloaded][]

Guardar Cambios
--------------
El tercer y último paso para completar nuestras ediciones es cargar los cambios que hemos realizado en la base de datos de OpenStreetMap. Para guardar los cambios, debemos estar conectados a internet.

- Haz clic en "Archivo" en el menú superior y luego haz clic en "Cargar datos". Esto abrirá la ventana de carga. Puedes acceder a esta ventana de forma más sencilla haciendo clic en el botón de carga, que se muestra aquí:

    ![JOSM Upload Button][]

- La ventana que aparece muestra una lista de los objetos que estás agregando y los objetos que estás modificando o eliminando. En el cuadro de la parte inferior, se te pedirá que proporciones un comentario sobre los cambios que estás realizando. Escribe ahí una descripción de tus ediciones.

    ![JOSM Upload Dialog][]

- Haz clic en “Subir Cambios”.

- Si es la primera vez que guardas cambios en OpenStreetMap, se te pedirá tu nombre de usuario y contraseña de OpenStreetMap.
- Ingrésalos en la ventana que aparece. Si marcas la casilla en esta ventana, tu nombre de usuario y contraseña se guardarán y no necesitarás ingresarlos de nuevo en el futuro. Haz clic en "Autenticar".

    ![JOSM Authenticate][]

- Deberás esperar unos segundos para que se carguen los cambios, ¡y luego habrás terminado! Has editado el mapa en OpenStreetMap.

> Cuando estés editando, asegúrate siempre de cargar tus cambios antes de cerrar JOSM. Incluso si aún tienes que editar más, carga los cambios y luego vuelve a realizar el proceso más tarde cuando tengas tiempo para editar. ¡No querrás perder tu trabajo!

Ver tus cambios en el mapa
---------------------------
- Abre tu navegador de internet y ve a [http://openstreetmap.org/](http://openstreetmap.org/)
- Mueve el mapa al área que editaste.
- Deberías ver tus cambios reflejados en el mapa. Si no es así, intenta presionar CTRL+R para actualizar la página web. A veces, el navegador muestra la versión antigua y necesita recargarse.
- ¿Qué pasa si no ves tus cambios? No te preocupes, es posible que los cambios tarden unos minutos en mostrarse en el mapa. Además, verifica tus adiciones en JOSM para asegurarte de que las agregaste correctamente. Una buena regla general es que, si tu punto tiene un icono en JOSM, entonces debería verse en el mapa principal en el sitio web de OpenStreetMap.

Resumen
-------
Ahora que has visto cómo agregar ediciones a OpenStreetMap, ¿qué sigue? Bueno, la edición es genial, pero no es el único aspecto de la creación de mapas. Por supuesto, también debes aprender a salir y recopilar información sobre lugares en el terreno.


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
