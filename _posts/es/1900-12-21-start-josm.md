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

> Esta guía puede ser descargada como [josm_start-josm_es.odt](/files/josm_start-josm_es.odt) o [josm_start-josm_es.pdf](/files/josm_start-josm_es.pdf)  
> Revisado 2015-07-12  

Cómo descargar e instalar JOSM, el editor Java de OpenStreetMap, cambiar algunos de los ajustes, abrir un mapa de ejemplo y
aprender alguna de las operaciones básicas del software. ¿Recuerda en el
capítulo de introducción cuando le pedimos que dibuje un mapa de su ciudad o
pueblo? Concluiremos este capítulo dibujando nuevamente un mapa, esta
vez digital. Después de esto debería tener una buena comprensión de cómo
dibujar mapas en JOSM.

Descargar JOSM
-------------

- Si tiene una copia de JOSM en un CD o memoria flash, puede saltar
  a la siguiente sección, Instalar JOSM.
- Si aún no tiene JOSM, o deseas la versión más reciente, abra
  su navegador web - puede ser Firefox, Chrome, Opera, o Internet
  Explorer.
- En la barra de direcciones en la parte superior de la ventana, escriba el siguiente
  texto y pulse Intro: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- También se puede encontrar la página web JOSM buscando en el Internet "JOSM".
- El sitio web debería verse así:

  ![JOSM website][]

- Si tiene instalado Windows en su computadora, haga clic en "Instalador Windows" para descargar JOSM.

  ![Windows installer][]

- Si tiene un sistema operativo
  diferente, haga clic en el enlace para su sistema. La descarga debería
  comenzar. En este capítulo asumimos que estás usando Windows,
  pero las instrucciones son similares para otros sistemas operativos.

Instalar JOSM
------------

> Puede tener problemas al instalar JOSM si Java aún no está
> instalado en su computadora. Si tiene problemas en esta sección,
> intente descargar e instalar Java. Puede descargarlo aquí:
>  [http://www.java.com/es/download/](http://www.java.com/es/download/)

>  Los usuarios de Mac pueden tener versiones antiguas de Java. Vea [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) para opciones para OSX 10.6 y 10.7.3+

- Busque el archivo de instalación JOSM en su computadora. Haga doble-clic para
  comenzar la configuración.
- Haga clic en 'Aceptar', 'Siguiente', 'Estoy de acuerdo', e 'Instalar'. Cuando la instalación
  esté completa, haga clic en "Finalizar" para ejecutar JOSM por primera vez.
  Más tarde, cuando quiera iniciar JOSM, puede hacerlo haciendo clic en el
  Menú Inicio en la esquina inferior izquierda de su equipo, y haciendo clic en
  el programa JOSM.
- Es posible que aparezca una ventana emergente que le pregunte si desea actualizar el
  software. No es necesario actualizarlo ya que es nuevo. Presione el
  botón que dice "Cancelar". Si no quiere volver a ver este
  mensaje otra vez, marque la casilla en la parte inferior antes de pulsar "Cancelar".
- Cuando se inicie JOSM, se verá como esto:

  ![JOSM splash page][]

Preferencias JOSM
--------------------

Hay muchas configuraciones diferentes que se pueden personalizar en JOSM. 
Una configuración que es posible que desee ajustar es el idioma. JOSM ha
sido traducido a numerosos idiomas, y es posible que prefiera
trabajar en uno diferente.

- Para acceder a la ventana de Preferencias, haga clic en Edit -\> Preferences.

  ![Preferences window][]

- En el lado izquierdo, haga clic en el ícono que parece una lata de pintura y
  pincel.
- En la parte superior de la ventana, haga clic en la pestaña que dice "Look and Feel".
- Elija el idioma en el cuadro desplegable junto a la palabra
  “Language”.
  
  ![Look and feel][]

- Haga clic en Aceptar (OK).
- Es necesario reiniciar JOSM para guardar la configuración. Haga clic en "File" en la esquina superior
  izquierda y haga clic en "Restart" cerca de la parte inferior del menú.

Aprender dibujo básico con JOSM
-----------------------------

- Ahora vamos a abrir un archivo OSM de ejemplo que vamos a utilizar para aprender lo
  básico para dibujar mapas con JOSM. Tenga en cuenta que este mapa no es real,
  en que no es un mapa real de un lugar real, así que no lo salvaremos
  en OpenStreetMap.
- Descargue el archivo aquí: [sample.osm](/files/sample.osm)
- Ahora vamos a abrir el archivo de mapa de ejemplo en JOSM. Haga clic en el
  botón "Abrir" en la parte superior izquierda.

  ![Open file][]

- Busque el archivo **sample.osm **. Probablemente está en la carpeta Descargas,
  a no ser que lo guardara en otro lugar. Haga clic en él y, a continuación, haga clic en "Abrir".
- Ahora debería ver un mapa de ejemplo como este:

  ![Sample file][]

### Operaciones básicas

- Para mover el mapa hacia la izquierda o derecha, arriba o abajo, mantenga el botón derecho del ratón
  presionado, y mueva el ratón.
- Hay varias formas para acercar y alejar el mapa. Si tiene un
  ratón, puede utilizar la rueda de desplazamiento para acercar y alejar. Si está
  utilizando un laptop y no tiene un ratón, puede ampliar y reducir usando
  la barra de escala en la parte superior izquierda de la ventana del mapa. Arrastre la barra de izquierda
  y derecha manteniendo el botón izquierdo del ratón presionado y moviendo la barra hacia la izquierda o
  derecha con el ratón.

  ![Scale bar][]

- Mire el mapa de ejemplo. Hay unos pocos tipos diferentes de objetos aquí.
  Hay un río, un bosque, algunos edificios, varias carreteras, y un
  par de tiendas. Para seleccionar un objeto, haga clic en él con el botón
  izquierdo del ratón.

### Puntos, líneas, y formas

- Al hacer clic en los diferentes objetos en el mapa de ejemplo, observe que hay
  tres tipos diferentes de los objetos en el mapa. Hay puntos,
  líneas y formas.
- Los puntos son una única ubicación, representada por símbolos. En este mapa de
  ejemplo, hay dos puntos, una tienda de zapatos y un supermercado. La
  tienda de zapatos está representado por un símbolo del zapato, y el mercado está
  representado por un carrito de compras.
- Hay varias líneas en el mapa también, que representan caminos.
  Si se fija bien verá que dentro de las líneas, hay
  puntos. Estos puntos no tienen ningún símbolo u otra
  información asociada con ellos, pero ayudan a definir donde se
  encuentra la línea.
- Por último, hay muchas formas en el mapa de ejemplo, lo que representa
  lugares diferentes - un bosque, un río, un parque y edificios. Una forma
  se utiliza para representar un área, como un campo o un edificio. Una forma es
  exactamente igual que una línea - la única diferencia es que comienza en
  el mismo punto donde termina.

> Es fácil pensar en un mapa que contiene estos tres tipos básicos de objetos - 
> puntos, líneas y formas. En OpenStreetMap existe una terminología especial
> que  llegara a aprender a medida que avanza. En OSM, los puntos en realidad se llaman
> **nodos (nodes)**, y las líneas se llaman **vía (ways)**. Una forma se llama **vía cerrada (closed way)**
> porque es una línea que termina en el mismo punto en el que comienza.

- Puede notar que cuando se selecciona un objeto, aparece una lista a la
  derecha del mapa en una ventana llamada "Propiedades". Estos son conocidos como
  etiquetas. Las etiquetas son la información que está ligada a un punto, línea o forma
  que describe lo que es. Vamos a aprender más acerca de las etiquetas en un
  capítulo más adelante. Por ahora todo lo que necesita saber es que esta
  información ayuda a describir si nuestro objeto es un bosque, un río,
  un edificio, o algo más.
- Piense en dibujar un mapa a mano, y cómo también está dibujando
  puntos, líneas y formas. ¿Qué otros lugares están mejor representados por
  puntos? ¿Líneas? Formas?

### Cambiar objetos

- Seleccionar el bosque en el lado izquierdo del mapa. Asegúrese de hacer clic en
  la línea por el bosque, no uno de los puntos en la línea. Ahora
  mantenga pulsado el botón izquierdo del ratón y arrastre el ratón. Usted debería
  poder mover el bosque a una nueva ubicación en el mapa.
- Haga clic en uno de los puntos en la línea por el bosque. Manténga presionando
  el botón izquierdo del ratón y arrastre el ratón. Debería ser capaz de
  mover el punto. Así es como se puede cambiar la forma de un objeto,
  o mover un punto.

### Dibujar

- En el lado izquierdo de JOSM hay una columna de botones. Muchos de estos
  botones abren nuevas ventanas en el lado derecho que proporcionan más
  información sobre el mapa. Los botones más importantes, sin embargo, están
  en la parte superior de ésta columna. Estos botones cambian lo que puede hacer
  con el ratón.
- Los botones superiores en esta columna son los que más va a utilizar.
  Se utilizan para la selección de objetos y para la dibujar otros nuevos.
- Hasta ahora, ha estado usando la herramienta Seleccionar, que parece
  como esto:

  ![Select tool][]

- Antes de dibujar, es necesario asegurarse de que no hay nada seleccionado.
  Haga clic en el espacio negro del mapa, donde está vacío, para asegurarse
  que no hay nada seleccionado.
- Haga clic en el segundo botón, la herramienta de dibujo.

  ![Draw tool][]

- Encontre un área vacía en el mapa y, haga doble clic con el ratón.
  Esto dibujará un solo punto.
- Para dibujar una línea, de un solo clic con el ratón. Mueva el ratón y
  haga clic de nuevo. Continúe hasta que esté conforme con su línea. Para finalizar la
  línea, haga doble clic en el ratón.
- Dibujar una forma de la misma manera que se dibuja una línea, pero terminar la forma
  haciendo doble-clic en el punto donde inició la línea.

### Añadir preajustes

- Ahora sabemos cómo dibujar puntos, líneas y formas, pero todavía
  no hamos definido lo que representan. Queremos ser capaces de decir que
  nuestros puntos son tiendas, escuelas, o algo más, y si nuestras
  formas son campos, edificios, o algo más.
- Haga clic en la herramienta Seleccionar, en la columna de botones a la izquierda.

  ![Select tool][]

- Seleccione uno de los objetos que dibujó con la herramienta de dibujo. En el
  menú superior, haga clic en "Preajustes". Mueva el puntero del ratón a través del sub-menú hasta
  el tipo de ubicación que desee definir.
- Al hacer clic en un preajuste, un formulario aparecerá pidiendo más
  información. No tiene que llenar todos los campos, pero puede
  desear agregar algunos de los campos importantes, tales como el nombre del
  objeto.
- Cuando haya terminado de introducir la información, haga clic en "Aplicar
  preajuste". Si todo ha ido bien, el punto, la línea, o la forma debe
  cambiar los colores o mostrar un símbolo. Esto se debe a que ha definido
  lo que es.

Dibuje su propio mapa
-----------------

- Ahora vamos a dibujar un mapa con el fin de practicar las técnicas que
  ha aprendido. Es posible que desee volver a dibujar el mapa que dibujó en el papel previamente.
- Arrastre el mapa fuera del mapa de ejemplo. Mantenga pulsado el botón derecho del ratón
  y arrastrar el ratón, hasta que tenga una buena área vacía para dibujar.
- Utilice la herramienta de dibujo para crear puntos, líneas y formas. Describa lo que
  sus objetos son seleccionando en el menú preajustes.
- Cuando haya terminado, debería tener su propio mapa, similar al
  mapa de ejemplo que abrimos en sample.osm.

Resumen
-------

Excelente! Si todo ha ido bien ha aprendido a configurar JOSM en su
equipo y las herramientas básicas para la elaboración de mapas. En el próximo capítulo
echaremos un vistazo más de cerca al proceso de editar el mapa OSM con JOSM.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png