---
layout: doc
title: Primeros Pasos en la Edición
permalink: /es/beginner/start-josm/
lang: es
category: beginner
---

Primeros Pasos en la Edición: JOSM
==================================

En este capítulo aprenderemos paso a paso cómo descargar e instalar
JOSM, el editor Java de OpenStreetMap. Cambiaremos algunas de las preferencias
de JOSM para que resulte más fácil de usar. Luego abriremos un mapa de ejemplo y
aprenderemos algunas de las operaciones básicas del programa. ¿Recuerdas qué en el 
capítulo 1 te pedimos que dibujaras un mapa de tu pueblo o ciudad? Acabaremos 
este capítulo dibujando el mapa de nuevo, esta vez digitalmente. Tras esto ya
deberías tener un buen conocimiento de cómo trazar mapas en JOSM.


Descarga de JOSM
----------------

- Si tienes una copia de JOSM en un CD o una memoria USB puedes saltar
  a la sección 2, Instalación de JOSM.
- Si todavía no tienes JOSM o quieres la última versión abre tu navegador 
  preferido (este puede ser Firefox, Chrome, Opera, Internet Explorer, ...)
- En la barra de direcciones en la parte superior de la ventana escribe el
  siguiente texto y presiona Intro: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- También puedes encontrar la web buscando «JOSM» en un buscador.
- La web debería ser algo como esto:

  ![]({{site.baseurl}}/images/start_josm_image05_en.png)

- Si tienes instalado Windows en tu computadora haz clic en «Windows Installer» 
  o «Instalador de Windows» para descargar JOSM. Si tienes otro sistema 
  operativo haz clic en el enlace para tu sistema. La descarga debería
  comenzar. En este capítulo asumiremos que estás usando Windows, pero
  las instrucciones son similares para otros sistemas operativos.

Instalación de JOSM
-------------------

- Podrías haber tenido problemas instalando JOSM si Java no estaba ya
  instalado en tu computadora. Si encuentras problemas en esta sección
  intenta descargar e instalar Java. Puedes descargarlo aquí: 
  [http://www.java.com/es/download/](http://www.java.com/es/download/)
- Encuentra el archivo de instalación de JOSM en tu computadora. Haz doble
  clic en el mismo para comenzar la instalación.
- Haz clic en «OK», «Next», «I Agree» e «Install». Cuando la instalación
  se haya completado, haz clic en «Finalizar» para iniciar JOSM por 
  primera vez. En otras ocasiones, cuando quieras iniciar JOSM puedes 
  hacerlo haciendo clic en el menú Inicio en la esquina inferior izquierda
  de tu pantalla y haciendo clic en el programa JOSM.
- Podría ser que vieras una ventana que te pregunte si quieres actualizar
  el programa. No necesitas actualizar ya que lo acabas de instalar. Pulsa
  el botón que dice «Cancelar». Si no quieres volver a ver este mensaje
  nunca más, marca la casilla de abajo antes de pulsar «Cancelar».
- Cuando JOSM se haya iniciado parecerá algo como esto: 

  ![]({{site.baseurl}}/images/start_josm_image08_es.png)

Cambia las preferencias de JOSM
-------------------------------

Antes de que empecemos a utilizar JOSM es una buena idea cambiar algunas
de las opciones de configuración de forma que sea más fácil de usar. Para
cambiar las preferencias haz clic en «Editar» en el menú superior y después
en «Preferencias...».

![]({{site.baseurl}}/images/start_josm_image13_es.png)

### Añade imágenes de Bing

- Queremos ser capaces de usar imágenes satelitales cuando estemos haciendo
  nuestro mapa, asií que vamos a añadirlas desde la ventana de Preferencias.
  En la parte izquierda hay iconos distintos para distintas opciones. 
  Haz clic en el icono que dice «WMS TMS». Puede que necesites hacer
  clic en la flecha inferior para encontrarlo:

  ![]({{site.baseurl}}/images/start_josm_image07_en.png)

  ![]({{site.baseurl}}/images/start_josm_image02_en.png)

- Haz clic en «Bing Sat». Después pulsa «Activar»

  ![]({{site.baseurl}}/images/start_josm_image11_es.png)

- Ahora deberías poder ver «Bing Sat» en la lista que aparece bajo el 
  botón Activar.

### Añade Predefinidos

- Si te han dado un archivo que debería ser añadido al menú de los 
  elementos predefinidos puedes añadirlo ahora. Por ejemplo, un archivo
  de elementos predefinidos podría llamarse algo así como edificios.xml.
- Todavía deberías tener abierta la ventana de Preferencias. Si no es así,
  haz clic en Editar -\> Preferencias para abrir la ventana.
- A la izquierda, haz clic en el icono que parece una cuadrícula.

  ![]({{site.baseurl}}/images/start_josm_image09_en.png)

- En la parte superior pulsa en la pestaña que dice «Etiquetas preestablecidas».
- Arriba a la derecha pulsa el botón +.
- Junto al segundo campo, a la derecha, haz clic en el botón que parece
  una carpeta. Navega hasta el archivo de predefinidos que quieres añadir,
  por ejemplo edificios.xml.
- Pulsa OK.

### Añade el complemento *Walking Papers*

- Más adelante en esta guía aprenderás acerca de una herramienta llamada
  *Walking Papers*, que te permitirá imprimir un mapa de una zona, dibujar
  sobre ella y tomar notas, y después cargarlas en JOSM como fondo.
  Entonces podremos añadir nuestros dibujos y notas a OpenStretMap. Ahora
  añadiremos el complemento *Walking Papers* a JOSM
- Todavía deberías tener abierta la ventana de Preferencias. Si no es así,
  haz clic en Editar -\> Preferencias para abrir la ventana.
- En la parte izquierda haz clic en el icono que parece un enchufe.

  ![]({{site.baseurl}}/images/start_josm_image04_en.png)

- Pulsa el botón que dice «Descargar Lista». La lista se descargará de
  Internet y cuando haya acabado verá aparecer una lista de los complementos
  disponibles aparecer en la ventana.
- En el cuadro de búsqueda de la parte superior escribe «walking». Esto 
  mostrará solo los elementos de la lista que tienen «walking» en el título.
- Selecciona la casilla junto al complemento walkingpapers y pulsa Aceptar
  en la zona inferior de de la ventana.
- Ahora se descargará e instalará *Walking Papers*. No pulses «Cancelar».

### Cambia el idioma

- JOSM ha sido traducido a muchos idiomas. Si ha sido traducido al tuyo
  puedes cambiarlo en las Preferencias.
- Si no tienes la ventana de Preferencias abiertas, pulsa Editar -\> 
  Preferencias.
- En la parte izquierda selecciona el icono que parece una lata de pintura y 
  y una brocha.
- En la parte superior de la ventana haz clic en la pestaña que dice 
  «Visualización y Comportamiento».
- Elige tu idioma en la lista desplegable junto a la palabra «Idioma».
- Haz clic en Aceptar.
  
  ![]({{site.baseurl}}/images/start_josm_image01_es.png)
  
- Necesitas reiniciar JOSM para guardar tus preferencias. Selecciona «Archivo»
  en la esquina superior izquierda y después «Salir» al final del menú.
- Inicia JOSM de nuevo yendo al menú de Inicio de Windows en la esquina
  inferior izquierda. Busca JOSM y haz clic en el mismo para iniciarlo.

Aprende las bases del dibujo con JOSM
-------------------------------------

- Ahora abramos el archivo OSM de ejemplo que usaremos para aprender las
  formas básicas de dibujar mapas con JOSM. Fíjate en que este mapa no
  es real, en el sentido de que no es el mapa real de un lugar real, así
  que no lo salvaremos en OpenStreetMap.
- Si tu instructor te ha dado un conjunto de archivos, ya deberías tener
  el archivo que abriremos, llamado sample.osm.
- Si no tienes el archivo sample.osm en tu computadora puedes descargarlo 
  aquí: [sample.osm](/files/sample.osm).
- Con el ratón haz clic con el botón derecho en el archivo llamado 
  sample.osm y selecciona «Guardar enlace como...». Selecciona una 
  ubicación en tu computadora para guardar el archivo.
- Ahora abramos archivo del mapa de ejemplo en JOSM. Abre JOSM. Pulsa
  el botón «Abrir» arriba a la izquierda.

  ![]({{site.baseurl}}/images/start_josm_image12_en.png)

- Busca y selecciona el archivo sample.osm. Haz clic en «Abrir».
- Ahora deberías poder ver un mapa de ejemplo similar a este:

  ![]({{site.baseurl}}/images/start_josm_image03_en.png)

### Operaciones básicas

- Para mover el mapa a izquierda o derecha, arriba o abajo, mantén pulsado 
  el botón derecho del ratón y mueve el ratón.
- Hay varias formas de hacer acercar y alejar el mapa (hacer «*zoom*»). Si
  tienes un ratón puedes usar la rueda del mismo para aumentar y disminuir
  el nivel de *zoom*. Si estás usando un portátil y no tienes ratón puedes
  modificar el *zoom* usando la barra de escala de la zona superior izquierda
  de la ventana del mapa. Arrastra la barra a la izquierda y la derecha
  manteniendo pulsado el botón izquierdo del ratón y moviendo la barra
  a la izquierda o la derecha con el ratón.

  ![]({{site.baseurl}}/images/start_josm_image14_en.png)

- Mira el mapa de ejemplo. Hay unos cuantos tipos de objetos distintos en él.
  Hay un río, un bosque, algunos edificios, varias carreteras y un par
  de tiendas. Para seleccionar un objeto haz clic en él con el botón 
  izquierdo del ratón.

### Puntos, Líneas y Polígonos

- Según vayas haciendo clic en distintos objetos del mapa, observarás 
  que hay tres tipos distintos de objetos en él. Hay puntos, líneas y 
  polígonos.
- Los puntos tienen una única posición, representadas por símbolos. En
  este mapa de ejemplo hay dos puntos, una tienda de ropa y un mercado.
  La tienda de ropa se representa mediante una camiseta, mientra que el
  mercado se representa con un carro de la compra.
- También hay varias líneas en el mapa que representan carreteras. Si
  las miras atentamente verás que dentro de las líneas también hay 
  puntos. Estos puntos no tienen ningún símbolo u otra información 
  asociada a ellos pero ayudan a definir dónde está localizada la línea.
- Finalmente, hay numerosos polígonos en el mapa representando distintos
  lugares (un bosque, un río y edificios). Un polígono generalmente 
  representa un área, como un campo o un edificio. Un polígono es 
  exactamente como una línea. La única diferencia es que la la línea del
  polígono termina en el mismo punto en el que empieza.
- Observarás que cuando seleccionas un objeto, a la derecha del mapa 
  aparece una lista en una ventana denominada «Propiedades». Estas son
  conocidas como etiquetas («*tags*» en inglés). Las etiquetas son información ligada 
  a un punto, línea o polígono que describe lo que es. Aprenderemos más
  sobre las etiquetas en el Capítulo 7, Edición Avanzada. Por ahora todo
  lo que necesitas saber es que esta información ayuda a describir si
  nuestro objeto es un bosque, un río, un edificio o alguna otra cosa.
- Piensa cómo dibujas un mapa a mano y cómo también estás dibujando 
  puntos, líneas y polígonos. ¿Qué otros lugares se representan mejor
  mediante puntos? ¿Y líneas? ¿Y mediante polígonos?


### Cambiando los objetos

- Selecciona el bosque que está en la izquierda del mapa. Asegúrate de 
  hacer clic en la línea que delimita el bosque, no en los puntos de la
  línea. Ahora mantén pulsado el botón izquierdo del ratón y arrástralo.
  Deberías ser capaz de mover el bosque a una nueva posición en el mapa.

- Haz clic en uno de los puntos de la línea que delimita el bosque. Mantén
  pulsado el botón izquierdo del ratón y arrástralo.  Deberías ser capaz
  de mover el punto. Así es como cambias la forma de un objeto o mueves 
  un punto.


### Dibujando

- En la parte izquierda de JOSM hay una columna con botones. Muchos de 
  estos botones abre nuevas ventana en la parte derecha que proporcionan
  más información sobre el mapa. Los botones más importantes, no obstante, 
  se encuentran en la parte superior de esta columna. Estos botones cambian
  lo que puedes hacer con el ratón.
- Los cuatro botones superiores en esta columna son los más importantes. 
  Te permiten hacer:

  1.  Seleccionar
  2.  Dibujar
  3.  Incrementar el *zoom*
  4.  Borrar

- Hasta ahora has estado utilizando la herramienta de Selección, que tiene
este aspecto: 

  ![]({{site.baseurl}}/images/start_josm_image00_en.png)

- Andes de dibujar necesitas estar seguro de que no hay nada seleccionado.
  Haz clic en el espacio negro en el mapa, donde esté vacío, para asegurarte
  de que no hay nada seleccionado.
- Haz clic en el segundo botón, la herramienta de Dibujo.

  ![]({{site.baseurl}}/images/start_josm_image10_en.png)

- Busca una zona vacía en el mapa y haz doble clic con el ratón. Esto
  dibujará un único punto.
- Para dibujar una línea haz clic (no doble clic) con el ratón. Mueve
  el ratón y haz clic otra vez. Continúa hasta que estés contento con 
  tu línea. Para acabar la línea haz doble clic con el ratón.
- Dibuja un polígono de la misma forma que has dibujado la línea, pero
  finaliza el polígono haciendo doble clic en el punto dónde comenzaste
  la línea.

### Añade Predefinidos

- Ahora sabemos como dibujar puntos, líneas y polígonos pero todavía no
  hemos definido qué representan. Queremos ser capaces de decir que 
  nuestros puntos son tiendas, colegios u otra cosa, y si nuestros 
  polígonos son campos, edificios u otra cosa.
- Haz clic en la herramienta de Selección, en la columna de la izquierda.

  ![]({{site.baseurl}}/images/start_josm_image00_en.png)

- Selecciona uno de los objetos que has dibujado con la herramienta de 
  Dibujo. En el menú superior, haz clic en «Predefinidos». Mueve el ratón
  por el submenú hasta el tipo de lugar que te gustaría definir.
- Cuando hagas clic en un predefinido aparecerá un formulario solicitándote
  más información. No tienes por qué rellenar cada campo pero sí que 
  podrías querer completar alguno de los campos más importantes como el 
  nombre del objeto.
- Cuando acabes de introducir la información, selecciona «Aplicar Predeterminados».
  Si todo ha ido bien, tu punto, línea o polígono debería cambiar de color
  o mostrar un símbolo. Esto ocurre porque tú has definido lo que es.


Dibuja tu propio mapa
---------------------

- Ahora dibujemos un mapa para poder practicar las técnicas que has 
  aprendido. Puede que quieras volver a dibujar el mapa que dibujaste
  en papel en el Capítulo 1.
- Arrastra el mapa lejos del mapa de ejemplo. Mantén pulsado el botón
  derecho del ratón y arrástralo hasta que tengas un área vacía para poder
  dibujar.
- Usa la herramienta de Dibujo para crear puntos, líneas y polígonos.
  Describe lo que son tus objetos seleccionando en el menú de Predefinidos.
- Cuando acabes deberías tener tu propio mapa, similar al mapa de ejemplo 
  que abrimos en sample.osm.


Resumen
-------

¡Excelente! Si todo ha ido bien habrás aprendido cómo instalar JOSM en 
tu computadora y las herramientas básicas para el trazado de mapas. En los 
próximos dos capítulos aprenderás cómo usar el GPS y los *Walking Papers* para
crear un mapa de tu pueblo o ciudad. En el Capítulo 6 volveremos a JOSM
y usando la información que habremos recopilado añadiremos objetos a 
OpenStretMap.
