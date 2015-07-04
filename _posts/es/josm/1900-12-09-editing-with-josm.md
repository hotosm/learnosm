---
layout: doc
title: Editar con JOSM
permalink: /es/josm/editing-with-josm/
lang: es
category: josm
---

Editar con JOSM
=================

En [capítulo 3]({{site.baseurl}}/es/josm/start-josm/) instalaste el programa JOSM y dibujaste tus primeros puntos, líneas y polígonos. 
Agregaste *predefinidos* a estos objetos para añadir información acerca de ellos. Al final pudiste dibujar de esta manera tu propio mapa en JOSM. 
Dibujar los mapas en el capítulo 3 era un ejercicio para aprender a usar JOSM y
aprender cómo colocar lugares en el mapa. Pero nuestros mapas no estaban bien, 
porque todavía no habíamos incluido su ubicación. En los
dos capítulos anteriores hemos examinado dos herramientas: GPS y «Walking
Papers» (papeles caminantes) los cuales nos permiten recopilar las
ubicaciones reales de los lugares (generalmente los receptores de GPS
determinan su locación dentro de un margen de +/- diez metros, pues
no siempre tienen que ser completamente correctos, especialmente si
únicamente usas un solo punto de referencia). Estas ubicaciones se definen
mediante coordenadas.
Dibujar un mapa «real», consistente en un mapa en el cual todos sus puntos,
líneas y figuras se encuentran en la ubicación adecuada, no es diferente
a dibujar los mapas que trazamos anteriormente. Pero ahora vamos a
utilizar nuestros puntos y trazas de GPS y nuestros «Walking Papers»,
para dibujar mapas similares manteniendo su ubicación correcta en el planeta.
En este capítulo vamos a aprender cómo editar el mapa en
OpenStreetMap y agregar nuestras mejoras. Vamos a aprender sobre el
ciclo básico de mapeo en OSM:

**Descargar** los datos del mapa desde OSM.

  - [Recorrido por JOSM]({{site.baseurl}}/es/josm/editing-with-josm/#recorrido-por-josm)
  - [Descargar datos desde OSM]({{site.baseurl}}/es/josm/editing-with-josm/#descargar-datos-desde-osm)
  - [Capas en JOSM]({{site.baseurl}}/es/josm/editing-with-josm/#capas-en-josm)

**Editar** el mapa con la ayuda de GPS, Walking Papers y anotaciones como guía.

  - [Editar]({{site.baseurl}}/es/josm/editing-with-josm/#editar)
  - [Etiquetas]({{site.baseurl}}/es/josm/editing-with-josm/#etiquetas)

**Guardar** los cambios en OpenStreetMap

  - [Subir cambios]({{site.baseurl}}/es/josm/editing-with-josm/#subir-cambios)
  - [Revisar las modificaciones en el mapa]({{site.baseurl}}/es/josm/editing-with-josm/#revisar-las-modificaciones-en-el-mapa)
  - [Guardar archivos de OSM]({{site.baseurl}}/es/josm/editing-with-josm/#guardar-archivos-osm)

Al final de este capítulo, vas a poder ver tus contribuciones en el mapa
de OSM.

Recorrido por JOSM
-----------------

- Primero, para iniciar JOSM, dirígete al menú «Inicio» abajo a la
    izquierda y busca hasta que encuentres el programa JOSM.

- Después carga tu archivo gpx y tu «Walking Paper» en JOSM. No es necesario 
    abrir los dos, pero si quieres puedes hacerlo. Revisa los dos capítulos
    anteriores si no te acuerdas como abrirlos en JOSM.

- Un pequeño recorrido por las características de JOSM: JOSM tiene muchos 
    elementos. La ventana principal en JOSM, la cual ya conoces, es la ventana del mapa y es donde pasan la mayor parte de las cosas. Aquí puedes ver, editar y agregar información a los datos de OpenStreetMap.

- En lado derecho de la ventana del mapa hay varios paneles, cada cual con 
    una función diferente. Típicamente, cuando instalas JOSM
    por primera vez, JOSM muestra algunos paneles por defecto, como «Capas»,
    «Propiedades / Miembros» y «Selección». Cuando seleccionas un punto, línea
    o figura en la ventana del mapa, se mostrará en el panel de «Selección». 
    En el panel de «Propiedades / Miembros» se mostrará información 
    sobre el objeto seleccionado y el nombre de usuario del autor de este objeto
    se mostrará en el panel de «Autores».
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_46acf705_en.png)

- En la parte izquierda de JOSM hay varias barras de herramientas, cada una
    con muchos botones. En la parte de arriba hay diferentes botones que cambian
    lo que puedes hacer con el ratón. Ya conoces los dos primeros, la herramienta
    de selección y la de dibujo. Las otras herramientas permiten acercarse o 
    alejarse, borrar un objeto, dibujar una figura o crear una línea paralela a 
    otra.

- Debajo de estas herramientas hay más botones. Éstos controlan lo que se ve 
    en la parte derecha de JOSM. Por medio de estos botones puedes abrir o cerrar los paneles de la derecha, como «Capas», «Propiedades / Miembros», «Selección» y «Autores».

Descargar datos desde OSM
-------------------------

-  ¿Recuerdas el ciclo de edición en OpenStreetMap explicado en la introducción 
    de este capitulo?
    **Descargar**, **editar**, **guardar**. Antes de que podamos editar el mapa
    necesitamos descargar datos existentes de OSM en nuestro entorno.

-  Cuando abres una traza de gpx o un «Walking Paper», la ventana principal
    mostrará lo que has abierto y automáticamente se desplazará a las 
    coordenadas adecuadas. Después de haber abierto tus archivos,
    fíjate a en la esquina inferior izquierda de JOSM. Ahí puedes
    observar la latitud y longitud (coordenadas) de la punta del cursor.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m58e5f3e7_en.png)

-  Debido a que la ventana del mapa ya nos muestra la zona que queremos
    editar, es fácil descargar los datos de OpenStreetMap para esta área.
    Haz clic en «Archivo» arriba a la izquierda de JOSM y escoge
    «Descargar desde OSM». Se abrirá una ventanita de descarga. Puedes 
    acceder a esta ventana de una manera más simple incluso clic en el botón de descarga:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m6f2281c2_en.png)

-  Cuando se abre la ventanita de descarga, verás un mapa con
   un cuadro rosado encima. En caso de que no puedas ver el mapa, haz clic
   en la pestaña «Mapa deslizante».
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m1318e890_en.png)

-  El recuadro rosa representa el área del mapa que queremos descargar
    para editar. A menos que no hayas movido el mapa desde que se abrió la
    ventana, el recuadro debe estar marcando la zona correcta. Sin embargo,
    si quieres descargar una región más amplia, puedes crear un nuevo
    recuadro. Para definir un nuevo recuadro, haz clic en el mapa, mantén
    presionado el botón izquierdo del ratón y muévelo para dibujar el recuadro. Suelta el botón del ratón para terminar la definición del mismo.

-  Cuando estés satisfecho con el tamaño y la ubicación del recuadro, haz
    clic en «Descargar» en la parte de abajo de la ventana. JOSM descargará
    los datos de esta área desde OpenStreetMap y los abrirá en la ventana
    principal, listos para editar.

Capas en JOSM
-------------

-  Abre un archivo de GPS y los datos descargados desde OpenStreetMap si no
    lo has hecho todavía. Tal vez hayas notado de que cuando abres un
    archivo, añades un «Walking Paper» o descargas desde OpenStreetMap
    aparece un nuevo elemento en el panel «Capas» en la parte derecha
    de JOSM. El panel de Capas se parece a esto:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2b7c3b_en.png)

-  Los elementos de esta lista representan cada una de las fuentes de datos
    que están cargadas en la ventana principal. En el ejemplo arriba «Capa
    de Datos 2» son los datos de OpenStreetMap que queremos editar.
    «Marcadores» son los puntos del GPS y «30 Juni 201-gpx» es una traza
    del dispositivo GPS. «Walking Papers» es una capa creada cuando
    añadiste un «Walking Paper» a JOSM. Puedes añadir la capa de imágenes de
    Bing que muestra fotos satélitales haciendo clic en «Imágenes» en
    la barra superior de JOSM y seleccionando «Bing Sat».

-  Para ocultar una de las capas, selecciona una de ellas con tu ratón y
    haz clic en el botón para cambiar el estado de la visibilidad la
    cual se ve así:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2e696f_en.png)
    
-  Puedes observar que la capa que habías seleccionado desaparece en la ventana
    del mapa. Haz clic en el mismo botón para cambiar el estado de la
    visibilidad de nuevo y reaparecerá.

-  Puedes cerrar una capa seleccionándola y utilizando el botón
    de borrar:
   ![]({{site.baseurl}}/images/EditingWithJOSM_html_m172543d8_en.png)

-  Por último, es importante saber que solamente puedes editar la capa que se
    considera *activa* por JOSM. Si no puedes editar el mapa en la ventana
    principal posiblemente sea porque no has activado la capa correcta. La mayoría
    de las capas, como de los puntos de GPS, de Walking Paper y de los
    imágenes satélitales no pueden ser editadas. Las únicas capa que se
    pueden editar son las de datos de OpenStreetMap, que normalmente
    se llama «Capa de datos 1».

-  Para marcar una capa como *activa*, seleccionarla en el panel de Capas y
   haz clic en el botón de activación:
   ![]({{site.baseurl}}/images/EditingWithJOSM_html_de83a77_en.png)

Editar
------

-  El próximo paso es editar el mapa y agregar nuevos elementos. No es siempre 
    fácil al principio pero con la práctica mejorarás.

-  Si quieres mover un punto, línea o figura, utiliza la herramienta
    de **selección**. Haz clic en un objeto y arrástralo a donde debería
    estar. Así se puede corregir la ubicación de elementos que han sido 
    puesto en un lugar equivocado.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m2eb4096c_en.png)

-  La herramienta de **dibujar nodos** sirve para dibujar nuevos puntos,
    líneas y figuras. Añade información a estos objetos nuevos por mediante
    los «predefinidos», como ya has hecho en [capítulo 3]({{site.baseurl}}/es/beginner/start-josm/).

-  Recuerda que tus puntos GPS y tus Walking Papers no aparecen
    automáticamente en OpenStreetMap. Tienes que añadirlos *digitalmente*
    con la herramienta para dibujar nodos. Sin embargo, tus puntos, trazas y
    apuntes en los Walking Papers pueden visualizarse como fondo y
    servirte como guía.

-  Supongamos que has marcado un punto en tu GPS con el nombre 030 y
    has escrito en tu cuaderno que 030 es una escuela. Para agregar este punto
    a OpenStreetMap debes seleccionar la herramienta de dibujar nodos
    y hacer un doble-clic encima del punto 030 en tu ventana principal
    del mapa. A continuación busca en el menú de elementos
    predefinidos la entrada para escuela. Aparece una ventana. Escribe ahí
    el nombre del la escuela y haz clic en «Aplicar Predeterminados». El mismo
    procedimiento sirve para agregar líneas y figuras.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_1cb5aeb4_en.png)

Etiquetas
---------

-  Cuando dibujas un punto, línea o figura primero tiene una ubicación
    pero no tiene información sobre lo que es. En otras palabras:
    sabemos **dónde** se encuentra, pero no sabemos **qué** es.
    Anteriormente hemos siempre utilizado elementos del menú de
    predefinidos. La manera como OpenStreetMap sabe **qué** es un
    objeto es mediante el uso de **etiquetas**.

-  Una etiqueta es como una marca que puedes ponerle a algo. Por ejemplo,
    si dibujo un cuadrado, al principio es sólo un cuadrado. Pero
    luego le puedo agregar varias etiquetas para describir lo que es:
    este cuadrado es un edificio, el nombre del edificio es «Menara
    Thamrin» y el edificio tiene 16 pisos.

-  Puedes agregar tantas etiquetas como quieras a un objeto.
    Las etiquetas se guardan como pares de texto, llamados **claves**
    y **valores**. En OpenStreetMap las etiquetas especificados arriba
    serían en realidad lo siguiente:
    `building = yes, name = Menara Thamrin, building:levels = 16`

-  Si seleccionas un objeto en JOSM puedes ver todas las etiquetas que
    tiene en el panel de «Propiedades / Miembros» a la derecha.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m945ccee_en.png)

### Editar etiquetas

-  Puedes agregar, editar y borrar etiquetas del panel correspondiente. Las
    etiquetas tradicionalmente se especifican en inglés, por lo que
    muchas veces es mejor utilizar los elementos del menú de
    predefinidos. Si agregas o cambias etiquetas, como de autopista
    primaria a sendero, el estilo de representación del objeto cambiará 
    según la etiqueta.
-  Para editar un objeto existente:
    -  Selecciónalo.
    -  Después puedes editar las etiquetas de una de estas dos maneras: 
    (1) Puedes utilizar el menú de predefinidos para abrir un formulario 
    y editar la información, o (2) puedes editar las etiquetas directamente
    desde el panel de «Propiedades / Miembros» de la derecha.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_94da59a_en.png)

### Error común: Etiquetar nodos cuando en realidad se quiere etiquetar lineas o polígonos.

-  Cuando añades una etiqueta a un nodo, seleccionas el nodo y luego
    añades tus etiquetas (o te ayudas con el menú de predefinidos).
    Cuando quieres agregar etiquetas a una línea o un polígono es
    importante que selecciones la línea y NO los nodos que definen la
    línea.

-  Un error común es utilizar la herramienta de selección para dibujar
   un recuadro que selecciona el objeto ya que hace que la línea **y
   también** los nodos queden seleccionados y por lo tanto las etiquetas
   que se definan sean aplicadas también a los nodos. Asegúrate
   que **únicamente** seleccionas líneas cuando quieres agregar
   etiquetas las mismas.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2746cce8_en.png)

-  Puedes encontrar más información sobre etiquetas y predeterminados
   en la guía del nivel intermedio, en el capítulo 4: «XML y Predefinidos JOSM» 
   («XML and JOSM presets») que se encuentra disponible únicamente en inglés.

Subir cambios
-------------

-  Después de que hayas hecho unos cuantos cambios para mejorar el mapa,
    es hora de guardar estos cambios y mandarlos a OpenStreetMap.
    Para guardar los cambios necesitamos conexión a internet, porque
    lo que queremos en realidad es subir los cambios directamente a los
    servidores de OpenStreetMap.

-  Haz clic en «Archivo» en el menú superior y luego en «Subir datos». 
    Se abrirá la ventana de subida. Puedes también llegar a esta ventana 
    de una manera más sencilla haciendo clic en el botón respectivo de subida:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2e194887_en.png)

-  La ventana que aparece muestra una lista de los objetos que estas
    agregando, modificando o borrando. En el campo de texto inferior debes
    introducir un comentario sobre los cambios que estas realizando.
    Escribe  ahí una descripción de las modificaciones que hayas hecho.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_67f320b3_en.png)

-  Haz clic en «Subir cambios».

-  Si es la primera vez que guardas algo en OpenStreetMap, se te pedirá 
    tu usuario y contraseña de OpenStreetMap.org que habrás creado en 
    capítulo 2. Introdúcelos en la pequeña ventana que aparece. 
    Si marcas la casilla de verificación en esta ventana, tu nombre
    de usuario y la contraseña se guardarán y no necesitarás introducirla 
    de nuevo en el futuro. Si usas una computadora compartida asegúrate de
    no marcar la casilla. Luego haz clic en «Autenticar».
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)

-  Ahora esperara unos segundos para que tus cambios se suban a los servidores 
    y ya está, ¡lo lograste! Has hecho tus primeras  modificaciones y mejoras 
    a OpenStreetMap. Probablemente sigas editando para agregar todos tus puntos.
    Asegúrate de subir tus modificaciones antes de cerrar JOSM.

Revisar las modificaciones en el mapa
-------------------------------------

-  Abre tu navegador de internet y visita la página [http://openstreetmap.org/](http://openstreetmap.org/)

-  Desplaza el mapa a la región que hayas editado.

-  ¡Tus modificaciones deberían aparecer ya en el mapa! En caso
    contrario pulsa las teclas CTRL+R para recargar
    la página web. A veces el mapa no se actualiza instantáneamente
    y necesita ser recargado.

-  ¿Que pasa si no ves tus modificaciones? No te preocupes, puede
    tardar unos minutos hasta que los cambios se muestren en el mapa.
    Además revisa en JOSM si tus cambios han sido añadidos
    correctamente. Una buena regla general es: si el punto tiene un
    icono en JOSM será visible en el mapa principal de la web de OpenStreetMap.

Guardar archivos OSM
--------------------

-  A veces después de haber descargado datos de OSM, quizás desees
    guardarlos para poder modificarlos sin conexión al internet y
    luego subirlos en otro momento cuando te puedas conectar a internet.

-  Para guardar un archivo de OSM asegúrate de que la capa de los datos
    esté activa en el panel de las Capas. Haz clic en «Archivo»
    en el menú superior y después en «Guardar». Escoge dónde
    se guarda el archivo y especifica un nombre. También puedes
    guardar haciendo clic en este botón:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m3d7a0a33_en.png)

-  Ahora puedes cerrar JOSM y tus datos quedan guardados en tu equipo. Cuando
    quieras abrir el archivo de nuevo, simplemente abre JOSM y
    en el menú de «Archivo» haz clic en «Abrir...»

Resumen
-------

Ahora que has visto como contribuir al mapa de OpenStreetMap, ¿qué sigue?
Recuerda que los mapas de OSM se van mejorando en el tiempo.
Cada vez que haces mejoras en el sistema estos cambios se mantienen y
los datos se mejoran constantemente. Y al igual que tú puedes mejorar el
trabajo de los demás, los otros también pueden mejorar tu trabajo.
En el último capítulo vamos a alejarnos un poco de JOSM y echar un
vistazo a algunos proyectos interesantes que hacen uso de los datos
de OpenStreetMap y conoceremos como podemos seguir aprendiendo
sobre OSM.
