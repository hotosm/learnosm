---
layout: doc
title: Introducción a JOSM
permalink: /es/josm/start-josm/
lang: es
category: josm
published: true
---

Introducción a JOSM
=============================


Cómo descargar e instalar JOSM, el editor de Java OpenStreetMap, cambiar algunas de las configuraciones, abrir un mapa de muestra y aprender algunas de las operaciones básicas del software. ¿Recuerdas que en el capítulo de introducción te pedimos que dibujaras un mapa de tu ciudad o pueblo? Concluiremos este capítulo dibujando de nuevo tu mapa, esta vez digitalmente. Después de esto, deberías tener una buena comprensión de cómo dibujar mapas en JOSM.

Descargar JOSM
-------------

- Si aún no tienes JOSM, o quieres la versión más reciente, abre tu navegador web.
- En la barra de direcciones de la parte superior de la ventana, introduce el siguiente texto y pulsa Intro: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- También puedes encontrar el sitio web de JOSM buscando en Internet "JOSM".
- El sitio web debería tener un aspecto similar al siguiente:

    ![JOSM website][]

- Si tienes Windows instalado en tu computadora, haz clic en "Instalador Windows" para descargar JOSM.

    ![Windows installer][]

- Si tienes un sistema operativo diferente, haz clic en el enlace correspondiente a tu sistema. La descarga debería comenzar. En este capítulo, supondremos que estás utilizando Windows, pero las instrucciones son similares para otros sistemas operativos.

Instalar JOSM
------------

> Puede que tengas problemas para instalar JOSM si Java no está ya instalado en tu computadora. Si tienes problemas en esta sección, intenta descargar e instalar Java. Puedes descargarlo aquí: <https://www.java.com/es/download/>
>
> Los usuarios de Mac pueden tener versiones antiguas de Java. Por favor, consulta en <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation> las opciones para OSX 10.6 y 10.7.3+.

- Busca el archivo de instalación de JOSM en tu computadora. Haz doble clic en él para comenzar la instalación.
- Haz clic en "Aceptar", "Siguiente", "Acepto" e "Instalar". Una vez finalizada la instalación, haz clic en "Finalizar" para iniciar JOSM por primera vez. Más tarde, cuando quieras iniciar JOSM, puedes hacerlo haciendo clic en el Menú Inicio en la esquina inferior izquierda de tu computadora y haciendo clic en el programa JOSM.
- Es posible que aparezca una ventana que te pregunte si deseas actualizar el software. No es necesario actualizarlo ya que es nuevo. Pulsa el botón que dice "Cancelar". Si no quieres volver a ver este mensaje, marca la casilla de la parte inferior antes de pulsar "Cancelar".
- Cuando JOSM se inicie, tendrá un aspecto similar al siguiente:

    ![JOSM splash page][]

Preferencias JOSM
----------------

Hay muchos ajustes diferentes que puedes personalizar en JOSM. Una de las opciones que puedes querer ajustar es el idioma. JOSM ha sido traducido a numerosos idiomas y puede que prefieras trabajar en uno diferente.

- Para acceder a la ventana de Preferencias, haz clic en Edición -> Preferencias.

    ![Preferences window][]

- En el lado izquierdo, haz clic en la pestaña de idioma.
- Elige tu idioma en el cuadro desplegable junto a la palabra "Idioma".

    ![language][]

- Haz clic en Aceptar.
- Debes reiniciar JOSM para guardar la configuración. Elige la opción correspondiente en el cuadro de mensaje.

Aprender dibujo básico con JOSM
-----------------------------

- Ahora vamos a abrir un archivo OSM de ejemplo que utilizaremos para aprender las formas básicas de dibujar mapas con JOSM. Ten en cuenta que este mapa no es real, en el sentido de que no es un mapa real de un lugar real, por lo que no lo guardaremos en OpenStreetMap.
- Descarga el archivo aquí: [sample.osm](/files/sample.osm)
- Ahora vamos a abrir el archivo de mapa de muestra en JOSM. Haz clic en el botón "Abrir" de la parte superior izquierda.

    ![Open file][]

- Busca el archivo **sample.osm**. Probablemente esté en tu carpeta de descargas, a menos que lo hayas guardado en otro lugar. Haz clic en él y luego haz clic en "Abrir".
- Ahora deberías ver un mapa de muestra con el siguiente aspecto:

    ![Sample file][]

- Utilizarás estos datos para probar diversas técnicas de edición. Sin embargo, _nunca debes cargar estos datos ficticios en la base de datos._

### Operaciones básicas

- Para mover el mapa a la izquierda o a la derecha, arriba o abajo, mantén pulsado el botón derecho del ratón y muévelo.
- Hay varias formas de acercar y alejar el mapa. Si tienes un ratón, puedes utilizar la rueda de desplazamiento para acercarte y alejarte. Si utilizas un ordenador portátil y no tienes ratón, puedes acercarte y alejarte utilizando la barra de escala situada en la parte superior izquierda de la ventana del mapa. Arrastra la barra a la izquierda y a la derecha manteniendo pulsado el botón izquierdo del ratón y moviendo la barra a la izquierda o a la derecha con el ratón.

    ![Scale bar][]

- Mira el mapa de muestra. Aquí hay varios tipos de objetos. Hay un río, un bosque, algunos edificios, varias carreteras y un par de tiendas. Para seleccionar un objeto, haz clic en él con el botón izquierdo del ratón.

### Puntos, líneas y formas

- Al hacer clic en los diferentes objetos del mapa de muestra, observa que hay tres tipos diferentes de objetos en el mapa. Hay puntos, líneas y formas.
- Los puntos son una única ubicación, representada por símbolos. En este mapa de muestra, hay dos puntos, una zapatería y un supermercado. La zapatería está representada por un símbolo de zapato y el mercado está representado por un carrito de compras.
- También hay varias líneas en el mapa, que representan carreteras. Si miras de cerca, verás que dentro de las líneas también hay puntos. Estos puntos no tienen ningún símbolo u otra información asociada a ellos, pero ayudan a definir dónde se ubica la línea.
- Por último, hay numerosas formas en el mapa de muestra, que representan diferentes lugares: un bosque, un río, un parque y edificios. Una forma se usa para representar un área, como un campo o un edificio. Una forma es exactamente como una línea; la única diferencia es que la línea comienza en el mismo punto donde termina.

> Es fácil pensar en un mapa que contiene estos tres tipos básicos de objetos:
> puntos, líneas y formas. En OpenStreetMap existe una terminología especial
> que aprenderás a medida que avances. En OSM, los puntos en realidad se llaman
> **nodos**, y las líneas se llaman **vías**. Una forma se llama **vía cerrada**
> porque es una línea que termina en el mismo punto en el que comienza.

- Puede que notes que cuando seleccionas un objeto, aparece una lista a la derecha del mapa en una ventana llamada "Propiedades". Estas se conocen como etiquetas. Las etiquetas son información ligada a un punto, línea o forma que describe lo que es. Aprenderemos más sobre las etiquetas en un capítulo posterior. Por ahora, todo lo que necesitas saber es que esta información ayuda a describir si nuestro objeto es un bosque, un río, un edificio u otra cosa.
- Piensa en dibujar un mapa a mano y en cómo también estás dibujando puntos, líneas y formas. ¿Qué otros lugares están mejor representados por puntos? ¿Líneas? ¿Formas?

### Cambiar objetos

- Selecciona el bosque en el lado izquierdo del mapa. Asegúrate de hacer clic en la línea alrededor del bosque, no en uno de los puntos de la línea. Ahora mantén presionado el botón izquierdo del mouse y arrastra el mouse. Deberías poder mover el bosque a una nueva ubicación en el mapa.
- Haz clic en uno de los puntos de la línea alrededor del bosque. Mantén presionado el botón izquierdo del mouse y arrastra el mouse. Deberías poder mover el punto. Así es como puedes cambiar la forma de un objeto o mover un punto.

### Dibujar

- En el lado izquierdo de JOSM hay una columna de botones. Muchos de estos botones abren nuevas ventanas en el lado derecho que brindan más información sobre el mapa. Sin embargo, los botones más importantes se encuentran en la parte superior de esta columna. Estos botones cambian lo que puedes hacer con tu mouse.
- Los botones superiores de esta columna son los que más utilizarás. Se utilizan para seleccionar objetos y para dibujar otros nuevos.
- Hasta ahora, has estado usando la herramienta Seleccionar, que se ve así:

    ![Select tool][]

- Antes de dibujar, debes asegurarte de que no haya nada seleccionado. Haz clic en el espacio negro del mapa, donde está vacío, para asegurarte de que no haya nada seleccionado.
- Haz clic en el segundo botón, la herramienta Dibujar.

    ![Draw tool][]

- Encuentra un área vacía en el mapa y haz doble clic con tu ratón. Esto dibujará un solo punto.
- Para dibujar una línea, haz clic con el mouse. Mueve tu mouse y haz clic de nuevo. Continúa hasta que estés satisfecho con tu línea. Para terminar la línea, haz doble clic con el mouse.
- Dibuja una forma de la misma manera que dibujas una línea, pero termina la forma haciendo doble clic en el punto donde comenzaste la línea.

### Añadir preajustes

- Ahora sabemos cómo dibujar puntos, líneas y formas, pero aún no hemos definido lo que representan. Queremos poder decir que nuestros puntos son tiendas, escuelas u otra cosa, y si nuestras formas son campos, edificios u otra cosa.
- Haz clic en la herramienta Seleccionar, en la columna de botones a la izquierda.

    ![Select tool][]

- Selecciona uno de los objetos que dibujaste con la herramienta Dibujar. En el menú superior, haz clic en "Ajustes preestablecidos". Mueve el mouse a través del submenú hasta el tipo de ubicación que te gustaría definir.
- Cuando hagas clic en un ajuste preestablecido, aparecerá un formulario que te pedirá más información. No es necesario que completes todos los campos, pero es posible que desees agregar algunos de los campos importantes, como el nombre del objeto.
- Cuando hayas terminado de ingresar la información, haz clic en "Aplicar ajuste preestablecido". Si todo salió bien, tu punto, línea o forma debería cambiar de color o mostrar un símbolo. Esto se debe a que has definido lo que es.

Dibuja tu propio mapa
-----------------

- Ahora dibujemos un mapa para practicar las técnicas que has aprendido. Es posible que desees volver a dibujar el mapa que dibujaste en papel anteriormente.
- Arrastra el mapa alejándote del mapa de muestra. Mantén presionado el botón derecho del ratón y arrastra tu ratón hasta que tengas un área vacía donde dibujar.
- Usa la herramienta Dibujar para crear puntos, líneas y formas. Describe lo que son los objetos seleccionando del menú Preajustes.
- Cuando hayas finalizado, deberías tener tu propio mapa, similar al mapa de muestra que abrimos en sample.osm.

Eliminar la capa de muestra
-----------------------

Una vez que te sientas cómodo con estas técnicas básicas de edición,
querrás dirigir tu atención al mapeo de elementos reales.

_Es muy importante que primero elimines la capa con los datos de muestra.
Estos datos son ficticios y no deben cargarse en la base de datos de OpenStreetMap
(las versiones más recientes de JOSM lo impiden automáticamente)._

En la ventana Capas, en la parte superior derecha de la pantalla, selecciona la capa sample.osm.
A continuación, haz clic en el icono de la papelera en la esquina inferior derecha de esa ventana.
Alternativamente, puedes elegir eliminar del menú contextual de la capa.
Para continuar editando, primero necesitas descargar datos reales.
Esto se explicará en el próximo capítulo.

Resumen
-------

¡Excelente! Si todo ha ido bien, has aprendido a configurar JOSM en tu
computadora y las herramientas básicas para la elaboración de mapas. En el próximo capítulo
echaremos un vistazo más de cerca al proceso de editar el mapa OSM con JOSM.

[JOSM website]: /images/josm/josm-website.png

[Windows installer]: /images/josm/windows-installer.png

[JOSM splash page]: /images/josm/josm-splash-page.png

[Preferences window]: /images/josm/josm_preferences.png

[language]: /images/josm/josm_language.png

[Open file]: /images/josm/josm_open-file.png

[Sample file]: /images/josm/josm_sample-file.png

[Scale bar]: /images/josm/josm_scale-bar.png

[Select tool]: /images/josm/josm_select-tool.png

[Draw tool]: /images/josm/josm_draw-tool.png
