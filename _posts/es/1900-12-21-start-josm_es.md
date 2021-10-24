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


Cómo descargar e instalar JOSM, el editor de Java OpenStreetMap, cambiar algunas de las configuraciones, abrir un mapa de muestra y aprender algunas de las operaciones básicas del software. ¿Recuerdas que en el capítulo de introducción te pedimos que dibujaras un mapa de tu ciudad o pueblo? Concluiremos este capítulo dibujando de nuevo tu mapa, esta vez digitalmente. Después de esto deberías tener una buena comprensión de cómo dibujar mapas en JOSM.

Descargar JOSM
-------------

- Si tiene una copia de JOSM en un CD o una unidad flash usb, puede pasar a la siguiente sección, Instalar JOSM.
- Si aún no tiene JOSM, o quiere la versión más reciente, abra su navegador web, que puede ser Firefox, Chrome, Opera o Internet Explorer.
- En la barra de direcciones de la parte superior de la ventana, introduzca el siguiente texto y pulse Intro: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- También puede encontrar el sitio web de JOSM buscando en Internet "JOSM".
- El sitio web debería tener un aspecto similar al siguiente:

    ![JOSM website][]

- Si tiene Windows instalado en su ordenador, haga clic en "Instalador Windows" para descargar JOSM.

    ![Windows installer][]

- Si tiene un sistema operativo diferente, haga clic en el enlace correspondiente a su sistema. La descarga debería comenzar. En este capítulo supondremos que está utilizando Windows, pero las instrucciones son similares para otros sistemas operativos.

Instalar JOSM
------------

> Puede tener problemas para instalar JOSM si Java no está ya instalado en su ordenador. Si tiene problemas en esta sección, intente descargar e instalar Java. Puede descargarlo aquí: <http://www.java.com/en/download/>
>
> Los usuarios de Mac pueden tener versiones antiguas de Java. Por favor, consulte en <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation> las opciones para OSX 10.6 y 10.7.3+.

- Busque el archivo de instalación de JOSM en su computadora. Haga doble clic en él para comenzar la instalación.
- Haga clic en "Aceptar", "Siguiente", "Acepto" e "Instalar". Una vez finalizada la instalación, haga clic en "Finalizar" para iniciar JOSM por primera vez. Más tarde, cuando quiera iniciar JOSM, puede hacerlo haciendo clic en el Menú Inicio en la esquina inferior izquierda de su computadora, y haciendo clic en el programa JOSM.
- Es posible que aparezca una ventana que le pregunte si desea actualizar el software. No es necesario actualizarlo ya que es nuevo. Pulsa el botón que dice "Cancelar". Si no quieres volver a ver este mensaje, marca la casilla de la parte inferior antes de pulsar "Cancelar".
- Cuando JOSM se inicie, tendrá un aspecto similar al siguiente:

    ![JOSM splash page][]

Preferencias JOSM
----------------

Hay muchos ajustes diferentes que puede personalizar en JOSM. Una de las opciones que puede querer ajustar es el idioma. JOSM ha sido traducido a numerosos idiomas, y puede que prefieras trabajar en uno diferente.

- Para acceder a la ventana de Preferencias, haga clic en Edición -> Preferencias.

    ![Preferences window][]

- En el lado izquierdo, haga clic en el icono que parece una lata de pintura y un pincel.
- En la parte superior de la ventana, haga clic en la pestaña que dice "Look and Feel".
- Elija su idioma en el cuadro desplegable junto a la palabra "Idioma".

    ![Look and feel][]

- Haga clic en Aceptar.
- Es necesario reiniciar JOSM para guardar la configuración. Haga clic en "Archivo" en la esquina superior izquierda, y haga clic en "Reiniciar" cerca de la parte inferior del menú.

Aprender dibujo básico con JOSM
-----------------------------

- Ahora vamos a abrir un archivo OSM de ejemplo que utilizaremos para aprender las formas básicas de dibujar mapas con JOSM. Ten en cuenta que este mapa no es real, en el sentido de que no es un mapa real de un lugar real, por lo que no lo guardaremos en OpenStreetMap.
- Descargue el archivo aquí: [sample.osm](/files/sample.osm)
- Ahora vamos a abrir el archivo de mapa de muestra en JOSM. Haz clic en el botón "Abrir" de la parte superior izquierda.

    ![Open file][]

- Busque el archivo **sample.osm**. Probablemente esté en su carpeta de descargas, a menos que lo haya guardado en otro lugar. Haga clic en él, y luego haga clic en "Abrir".
- Ahora debería ver un mapa de muestra con el siguiente aspecto:

    ![Sample file][]

- Utilizará estos datos para probar diversas técnicas de edición. Sin embargo, nunca debe cargar estos datos ficticios en la base de datos.

### Operaciones básicas

- Para mover el mapa a la izquierda o a la derecha, arriba o abajo, mantenga pulsado el botón derecho del ratón y muévalo.
- Hay varias formas de acercar y alejar el mapa. Si tiene un ratón, puede utilizar la rueda de desplazamiento para acercarse y alejarse. Si utiliza un ordenador portátil y no tiene ratón, puede acercarse y alejarse utilizando la barra de escala situada en la parte superior izquierda de la ventana del mapa. Arrastre la barra a la izquierda y a la derecha manteniendo pulsado el botón izquierdo del ratón y moviendo la barra a la izquierda o a la derecha con el ratón.

    ![Scale bar][]

- Mira el mapa de muestra. Aquí hay varios tipos de objetos. Hay un río, un bosque, algunos edificios, varias carreteras y un par de tiendas. Para seleccionar un objeto, haz clic en él con el botón izquierdo del ratón.

### Puntos, líneas, y formas

- Al hacer clic en los diferentes objetos del mapa de muestra, observe que hay tres tipos diferentes de objetos en el mapa. Hay puntos, líneas y formas.
- Los puntos son una única ubicación, representada por símbolos. En este mapa de muestra, hay dos puntos, una zapatería y un supermercado. La zapatería está representada por un símbolo de zapato y el mercado está representado por un carrito de compras. 
- También hay varias líneas en el mapa, que representan carreteras. Si miras de cerca, verás que dentro de las líneas también hay puntos. Estos puntos no tienen ningún símbolo u otra información asociada a ellos, pero ayudan a definir dónde se ubica la línea. 
- Por último, hay numerosas formas en el mapa de muestra, que representan diferentes lugares: un bosque, un río, un parque y edificios. Una forma se usa para representar un área, como un campo o un edificio. Una forma es exactamente como una línea; la única diferencia es que la línea comienza en el mismo punto donde termina. 

> Es fácil pensar en un mapa que contiene estos tres tipos básicos de objetos -
> puntos, líneas y formas. En OpenStreetMap existe una terminología especial
> que  llegara a aprender a medida que avanza. En OSM, los puntos en realidad se llaman
> **nodos (nodes)**, y las líneas se llaman **vía (ways)**. Una forma se llama **vía cerrada (closed way)**
> porque es una línea que termina en el mismo punto en el que comienza.

- Puede notar que cuando selecciona un objeto, aparece una lista a la derecha del mapa en una ventana llamada "Propiedades". Estas se conocen como etiquetas. Las etiquetas son información ligada a un punto, línea o forma que describe lo que es. Aprenderemos más sobre las etiquetas en un capítulo posterior. Por ahora, todo lo que necesita saber es que esta información ayuda a describir si nuestro objeto es un bosque, un río, un edificio u otra cosa. 
- Piense en dibujar un mapa a mano y en cómo también está dibujando puntos, líneas y formas. ¿Qué otros lugares están mejor representados por puntos? ¿Líneas? Formas? 

### Cambiar objetos

- Seleccione el bosque en el lado izquierdo del mapa. Asegúrese de hacer clic en la línea alrededor del bosque, no en uno de los puntos de la línea. Ahora mantenga presionado el botón izquierdo del mouse y arrastre el mouse. Debería poder mover el bosque a una nueva ubicación en el mapa. 
- Haga clic en uno de los puntos de la línea alrededor del bosque. Mantenga presionado el botón izquierdo del mouse y arrastre el mouse. Debería poder mover el punto. Así es como puede cambiar la forma de un objeto o mover un punto. 

### Dibujar

- En el lado izquierdo de JOSM hay una columna de botones. Muchos de estos botones abren nuevas ventanas en el lado derecho que brindan más información sobre el mapa. Sin embargo, los botones más importantes se encuentran en la parte superior de esta columna. Estos botones cambian lo que puede hacer con su mouse. 
- Los botones superiores de esta columna son los que más utilizará. Se utilizan para seleccionar objetos y dibujar otros nuevos. 
- Hasta ahora, ha estado usando la herramienta Seleccionar, que se ve así: 

    ![Select tool][]

- Antes de dibujar, debe asegurarse de que no haya nada seleccionado. Haga clic en el espacio negro del mapa, donde está vacío, para asegurarse de que no haya nada seleccionado. 
- Haga clic en el segundo botón, la herramienta Dibujo.

    ![Draw tool][]

- Encuentre un área vacía en el mapa, y doble-clic con su ratón. Esto dibujará un solo punto.
- Para dibujar una línea, haga clic con el mouse. Mueva su mouse y haga clic nuevamente. Continúe hasta que esté satisfecho con su línea. Para terminar la línea, haga doble clic con el mouse. 
- Dibuja una forma de la misma manera que dibujas una línea, pero termina la forma haciendo doble clic en el punto donde comenzaste la línea. 

### Añadir preajustes

- Ahora sabemos cómo dibujar puntos, líneas y formas, pero aún no hemos definido lo que representan. Queremos poder decir que nuestros puntos son tiendas, escuelas u otra cosa, y si nuestras formas son campos, edificios u otra cosa. 
- Clic en la herramienta Seleccionar, en la columna de botones a la izquierda.

    ![Select tool][]

- Seleccione uno de los objetos que dibujó con la herramienta Dibujar. En el menú superior, haga clic en "Ajustes preestablecidos". Mueva el mouse a través del submenú hasta el tipo de ubicación que le gustaría definir. 
- Cuando haga clic en un ajuste preestablecido, aparecerá un formulario que le pedirá más información. No es necesario que complete todos los campos, pero es posible que desee agregar algunos de los campos importantes, como el nombre del objeto. 
- Cuando haya terminado de ingresar la información, haga clic en "Aplicar ajuste preestablecido". Si todo salió bien, su punto, línea o forma debería cambiar de color o mostrar un símbolo. Esto se debe a que ha definido lo que es. 

Dibuje su propio mapa
-----------------

- Ahora dibujemos un mapa para practicar las técnicas que ha aprendido. Es posible que desee volver a dibujar el mapa que dibujó en papel anteriormente. 
- Arrastre el mapa alejándolo del mapa muestra.  Mantenga presionado el botón derecho del ratón y arrastre su ratón, hasta que tenga un área vacía donde dibujar.
- Use la herramienta Dibujar para crear puntos, líneas, y formas. Describa lo que son los objetos seleccionando del menú Preajustes.
- Cuando haya finalizado, debería tener su propio mapa, similar al mapa muestra que abrimos en sample.osm.

Quite la capa muestra
-----------------------

Una vez que se sienta cómodo con estas técnicas básicas de edición,
querrá dirigir su atención al mapeo de elementos reales.

_Es muy importante que primero quite la capa con los datos muestra.
Estos datos son ficticios y no deben cargarse en OpenStreetMap.
base de datos (las versiones más recientes de JOSM lo impiden automáticamente)._ 

En la ventana Capas, en la parte superior derecha de la pantalla, seleccione la capa sample.osm.
A continuación, haga clic en el icono de la papelera en la esquina inferior derecha de esa ventana.
Alternativamente, puede elegir eliminar del menú contextual de la capa.
Para continuar editando, primero necesita descargar datos reales.
Esto se explicará en el próximo capítulo.

Resumen
-------

¡Excelente! Si todo ha ido bien ha aprendido a configurar JOSM en su
equipo y las herramientas básicas para la elaboración de mapas. En el próximo capítulo
echaremos un vistazo más de cerca al proceso de editar el mapa OSM con JOSM.

[sitio web josm]: /images/josm/josm-website.png

[instalador windows]: /images/josm/windows-installer.png

[página de bienvenida josm]: /images/josm/josm-splash-page.png

[ventana preferencias]: /images/josm/josm_preferences.png

[apariencia y sensación]: /images/josm/josm_look-and-feel.png

[abrir archivo]: /images/josm/josm_open-file.png

[archivo muestra]: /images/josm/josm_sample-file.png

[barra de escala]: /images/josm/josm_scale-bar.png

[herramienta seleccionar]: /images/josm/josm_select-tool.png

[herramienta dibujar]: /images/josm/josm_draw-tool.png