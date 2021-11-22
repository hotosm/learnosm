---
layout: doc
title: El Proceso de Edición JOSM
permalink: /es/josm/more-about-josm/
lang: es
category: josm
---

El Proceso de Edición JOSM
========================


En la sección anterior usted instaló JOSM y comenzó a dibujar sus primeros puntos, líneas y formas. Añadiste preajustes a estos objetos para adjuntar información sobre ellos. Al final, fuiste capaz de dibujar tu propio mapa en JOSM.

Esta fue una buena práctica, y ahora estamos listos para editar OpenStreetMap.

En esta sección echaremos un vistazo a la interfaz de JOSM, y veremos cómo podemos utilizarla para editar el mapa en OpenStreetMap.

El Ciclo de Edición
---------------------
La edición de OpenStreetMap con JOSM es similar a la edición con el editor iD que vimos anteriormente. Pero como JOSM es una aplicación de escritorio, su funcionamiento es un poco diferente. El proceso de edición y adición a OpenStreetMap con JOSM será siempre el siguiente:

1. **Descargar** los datos del mapa actual de OSM
2. **Editar** utilizando imágenes de satélite, GPS, Field Papers y notas como guía
3. **Guardar** los cambios en OpenStreetMap

Descargar Datos OSM
--------------------
El primer paso de edición es descargar los datos de la zona del mundo que queremos mejorar. Recuerda que tienes que hacer esto cada vez que quieras hacer cambios en el mapa, porque el mapa suele ser actualizado por otros usuarios.

- Haz clic en "Archivo" en la esquina superior izquierda de JOSM y haz clic en "Descargar de OSM". Esto abrirá la ventana de descarga. Puedes acceder a esta ventana de forma más sencilla haciendo clic en el botón de descarga, que se muestra aquí:

![JOSM Download Button][]

- Cuando se abra la ventana de descarga, debería ver un mapa. Si no ves el mapa, haz clic en la pestaña "Slippy map".

![JOSM Download Dialog][]

- Utiliza el ratón para desplazarte y hacer acercamiento en una zona que conozcas muy bien, como tu ciudad o tu barrio. Los controles son los mismos que en la ventana del mapa JOSM. El botón derecho del ratón te permite arrastrar el mapa, y la rueda de desplazamiento te permite acercarte y alejarte.

> A veces, si estás trabajando en un ordenador portátil, puede ser difícil desplazarse hacia dentro y hacia fuera. Trabajar en JOSM es mucho más fácil si tienes un ratón, pero la mayoría de los portátiles modernos te permiten desplazarte usando el touchpad.

- Dibuje un recuadro alrededor del área que desea descargar. Para dibujar un nuevo recuadro, haga clic en el mapa, mantenga pulsado el botón izquierdo del ratón y arrástrelo para crear un recuadro. Suelte el botón del ratón para terminar de dibujar el recuadro.
- Cuando esté satisfecho con el tamaño y la ubicación del cuadro, haga clic en "Descargar" en la parte inferior de la ventana. JOSM obtendrá los datos de esta zona de OpenStreetMap y los abrirá en su ventana de mapa para editarlos.

### Agregar Imágenes
Si nos has seguido cuando añadimos nuestros primeros puntos con el editor iD, recordarás que debajo de los datos del mapa había una imagen de satélite que nos ayudaba a identificar los objetos sobre el terreno. Estas imágenes procedían de Microsoft Bing, que generosamente proporciona sus imágenes para que los usuarios de OpenStreetMap las consulten mientras contribuyen al mapa.

- Para añadir las imágenes de satélite Bing en JOSM, haga clic en "Imágenes" en el menú superior de JOSM y seleccione "Bing Sat".

> Si no ve Bing Sat en el menú de Imágenes, puede que tenga que activarlo en las preferencias de JOSM. Vaya a Editar -> Preferencias y haga clic en el icono que dice "WMS TMS". Puede que tenga que hacer clic en la flecha hacia abajo para encontrarlo.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Haga clic en "Bing Sat". Luego haga clic en "Activar". 


### Paseo de JOSM
Ahora que hemos descargado los datos de OpenStreetMap y añadido las imágenes de satélite de Bing, vamos a echar otro vistazo a la interfaz de JOSM.

![JOSM layout][]

La ventana principal con la que ya está familiarizado: esta es la ventana del mapa y es donde tiene lugar la mayor parte de la acción. Aquí podrá ver, editar y agregar a los datos de OpenStreetMap. 

A la derecha de la ventana del mapa hay una serie de paneles, cada uno de los cuales tiene su propia función. Normalmente, cuando instala JOSM por primera vez, se muestran varios paneles de forma predeterminada, como Capas, Propiedades y Selección. Cuando seleccione un punto, línea o forma en la ventana del mapa, se mostrará en el panel Selección. La información sobre el objeto se mostrará en el panel Propiedades y el nombre de usuario del autor de ese objeto se mostrará en el panel Autores. 

Estos paneles se pueden abrir o cerrar haciendo clic en los distintos botones de la parte inferior izquierda de JOSM. Encima de estos botones, en la parte superior derecha, hay herramientas que cambian lo que puede hacer con el mouse. Ya está familiarizado con algunos de ellos, la herramienta Seleccionar y la herramienta Dibujar. Debajo de ellos hay herramientas que facilitan el acercamiento, la eliminación de un objeto, el dibujo de una forma o la creación de una línea paralela a otra línea. 


Editar
----
Así hemos completado el paso uno del proceso de edición: la descarga. Hemos preparado JOSM con imágenes de satélite como referencia. El siguiente paso es editar el mapa y agregar nuevos elementos. 

Dependiendo del área que elija descargar, puede haber muchos o muy pocos datos de mapas existentes. Pero observe que es el mismo tipo de datos que hemos visto anteriormente: puntos, líneas y formas que representan ubicaciones de la vida real. 

- Use las técnicas que ya ha aprendido para agregar un par de puntos al mapa de lugares que conoce. Si ve algún error, intente corregirlo. 
- No es necesario ser demasiado agresivo mientras aprende. Si no está seguro de algo, es mejor dejarlo como está. 
- Si desea mover un punto, línea o forma, use la **herramienta de selección**. Haga clic en un objeto y arrástrelo donde debería estar. Esto se puede utilizar para corregir la ubicación de los elementos que se han colocado en el lugar incorrecto. 

![JOSM select tool][]

- Utilice la **herramienta de dibujo** para dibujar nuevos puntos, líneas y formas. Describa estos objetos seleccionándolos en el menú Ajustes preestablecidos, como hizo en la sección anterior. 

> Nunca edite el mapa fuera del área que ha descargado. Puede ver que el área rectangular que ha descargado tiene un fondo sólido, mientras que el área que no ha descargado tiene líneas diagonales a rayas. 
>
> ![JOSM area downloaded][]

Guardar Cambios
--------------
El tercer y último paso para completar nuestras ediciones es cargar los cambios que hemos realizado en la base de datos de OpenStreetMap. Para guardar los cambios, debemos estar conectados a internet. 

- Haga clic en "Archivo" en el menú superior y luego haga clic en "Cargar datos". Esto abrirá la ventana de carga. Puede acceder a esta ventana de forma más sencilla haciendo clic en el botón de carga, que se muestra aquí: 

    ![JOSM Upload Button][]

- La ventana que aparece muestra una lista de los objetos que está agregando y los objetos que está modificando o eliminando. En el cuadro de la parte inferior, se le pedirá que proporcione un comentario sobre los cambios que está realizando. Escriba ahí una descripción de sus ediciones. 

    ![JOSM Upload Dialog][]

-   Clic “Subir Cambios”.

- Si es la primera vez que guarda cambios en OpenStreetMap, se le pedirá su nombre de usuario y contraseña de OpenStreetMap. 
- Ingréselos en la ventana que aparece. Si marca la casilla en esta ventana, su nombre de usuario y contraseña se guardarán y no necesitará ingresarlos nuevamente en el futuro. Haga clic en "Autenticar". 

    ![JOSM Authenticate][]

- Deberá esperar unos segundos para que se carguen los cambios, ¡y luego habrá terminado! Ha editado el mapa en OpenStreetMap. 

> Cuando esté editando, asegúrese siempre de cargar sus cambios antes de cerrar JOSM. Incluso si aún tiene que editar más, cargue los cambios y luego vuelva a realizar el proceso más tarde cuando tenga tiempo para editar. ¡No querrás perder tu trabajo! 

Vea sus cambios en el mapa
---------------------------
- Abra su navegador de Internet y vaya a [http://openstreetmap.org/](http://openstreetmap.org/) 
- Mueva el mapa al área que editó. 
- ¡Debería ver sus cambios ya en el mapa! Si no es así, intente presionando CTRL + R para actualizar la página web. A veces, el mapa no se actualiza correctamente y es necesario volver a cargarlo. 
- ¿Qué pasa si no ve sus cambios? No se preocupe, es posible que los cambios tarden unos minutos en mostrarse en el mapa. Además, verifique sus adiciones en JOSM para asegurarse de que las agregó correctamente. Una buena regla general es que, si su punto tiene un ícono en JOSM, entonces debería verse en el mapa principal en el sitio web de OpenStreetMap. 

Resumen
-------
Ahora que ha visto cómo agregar ediciones a OpenStreetMap, ¿qué sigue? Bueno, la edición es genial, pero no es el único aspecto de la creación de mapas. Por supuesto, también debe aprender a salir y recopilar información sobre lugares en el terreno. 


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
