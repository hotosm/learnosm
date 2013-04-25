---
layout: doc
title: Editar con JOSM
permalink: /es/beginner/editing-with-josm/
lang: es
category: beginner
---

Editar con JOSM
=================

En [capitulo 3]({{site.baseurl}}/es/beginner/start-josm/) has instalado el programa JOSM y empezado a dibujar tus primeros puntos,
líneas y figuras. Agregaste *predefinidos* a estos objetos para
añadir información sobre ellos. Al final pudiste dibujar de esta
manera tu propio mapa en JOSM
Dibujar los mapas en capitulo 3 era un ejercicio para aprender JOSM y
aprender como colocar lugares en el mapa. Pero nuestros mapas no han sido
correctos, porque no habíamos incluido su ubicación todavía. En los
dos capítulos anteriores hemos examinado dos herramientas: GPS y «Walking
Papers» (papeles caminantes) los cuales nos permiten recoger las
ubicaciones reales de los lugares (generalmente los receptores de GPS
determinan su locación dentro de un margen de +/- diez metros, pues
no siempre tienen que ser completamente correctos, especialmente si
únicamente usas un solo punto de referencia). Estas ubicaciones son
representadas por medio de coordinadas.
Dibujar un mapa «real», que consiste en un mapa en cual todos sus puntos,
líneas y figuras se encuentran en su ubicación adecuada, no es diferente
a dibujar los mapas que dibujamos anteriormente. Pero ahora vamos a
utilizar nuestros puntos y trazas de GPS y nuestros Walking Papers,
para dibujar mapas similares manteniendo su ubicación correcta en el planeta.
En este capitulo vamos a aprender cómo editar el mapa en
OpenStreetMap y agregar nuestras mejoras. Vamos a aprender sobre el
ciclo básico de mapeo en OSM:
**Descargar** los datos del mapa desde OSM
  - [Recorrido de JOSM]({{site.baseurl}}/es/beginner/editing-with-josm/#a-tour-of-josm)
  - [Descargar datos desde OSM]({{site.baseurl}}/es/beginner/editing-with-josm/#download-osm-data)
  - [Capas en JOSM]({{site.baseurl}}/es/beginner/editing-with-josm/#josm-layers)
**Editar** el mapa con la ayuda de GPS, Walking Papers y anotaciones como guía
  - [Editar]({{site.baseurl}}/es/beginner/editing-with-josm/#edit)
  - [Etiquetas]({{site.baseurl}}/es/beginner/editing-with-josm/#tags)
**Guardar** los cambios en OpenStreetMap
  - [Subir cambios]({{site.baseurl}}/es/beginner/editing-with-josm/#upload-changes)
  - [Revisar las modificaciones en el mapa]({{site.baseurl}}/es/beginner/editing-with-josm/#see-your-changes-on-the-map)
  - [Guardar archivos de OSM]({{site.baseurl}}/es/beginner/editing-with-josm/#saving-osm-files)
Al final de este capítulo, vas a poder ver tus incorporaciones en el mapa
de OSM.

Recorrido de JOSM
-----------------

-  Primero, para empezar JOSM, dirígete a al menú «Inicio» abajo y a la
    izquierda y busca hasta que encuentres el programa JOSM.
-  Después carga tu archivo gpx y tu Walking Paper en JOSM. No se necesita
    abrir los dos, pero si quieres puedes hacerlo. Revisa los dos capítulos
    anteriores si no te acuerdas como abrirlos en JOSM.
-  Un pequeño recorrido de las características de JOSM: JOSM tiene muchas
    características.
    La ventana principal en JOSM, la cual ya conoces, es la ventana del mapa
    y es donde la principal acción toma lugar. Aquí puedes ver, editar y
    agregar información a los datos de OpenStreetMap.
-  Al lado derecho de la ventana del mapa hay varios paneles, de los cuales
    cada uno tiene una función diferente. Típicamente cuando instalas JOSM
    por primera vez JOSM muestra algunos paneles por defecto, como Capas,
    Propiedades / Miembros y Selección. Cuando seleccionas un punto, línea
    o figura en la ventana del mapa, será mostrado en el panel de
    Selección. Información sobre el objeto será mostrado en el panel de
    Propiedades / Miembros, y el usuario del autor de este objeto será
    mostrado en el panel de los Autores.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_46acf705_en.png)
-  En la parte izquierda de JOSM hay varias barras de herramientas, las
    cuales constan de muchos botones. En la parte de arriba hay diferentes
    botones, los cuales cambian lo que puedes hacer con el mouse. Ya conoces
    los primeros dos, la herramienta de selección y de dibujo. Las otras
    herramientas facilitan acercarse o alejarse, borrar un objeto, dibujar una
    figura o crear una línea paralela a otra.
-  Debajo de estas herramientas se encuentran más botones. Éstos controlan
    lo que se ve en la parte derecha de JOSM. Por medio de estos botones
    puedes abrir o cerrar las cajas de la derecha, como Capas,
    Propiedades / Miembros, Selección y Autores.

Descargar datos desde OSM
-------------------------

-  ¿Recuerdas el ciclo de editar en OpenStreetMap explicado en la
    introducción de este capitulo?
    **Descargar**,**editar**,**guardar**. Antes de que podamos editar el mapa
    necesitamos descargar datos existentes de OSM de nuestro entorno.
-  Cuando abres una traza de gpx o un Walking Paper, la ventana principal
    va a mostrar lo que has abierto y automáticamente va a desplazarse
    a las coordinadas correctas. Después de haber abierto tus archivos,
    fíjate a en la esquina inferior izquierda de JOSM, ahí puedes
    observar la latitud y longitud (coordenadas) de la punta del cursor.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m58e5f3e7_en.png)
-  Debido a que nuestra ventana del mapa ya nos muestra el entorno que queremos
    editar, es fácil descargar los datos de OpenStreetMap para esta área.
    Haz click en «Archivo» arriba a la izquierda de JOSM y escoge
    «Descargar desde OSM». Eso va a abrir una ventanita de descarga.
    Puedes acceder esta ventana mas simple aún haciendo click en el botón de
    descarga, mostrado aquí:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m6f2281c2_en.png)
-  Cuando se abre la ventanita de descarga, debes poder ver un mapa con
   un cuadro rosado encima. En caso de que no puedas ver el mapa, haz click
   en el letrero «Mapa deslizante».
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m1318e890_en.png)
-  El cuadro rosado representa la área del mapa que queremos descargar
    para editar. A menos que no has movido el mapa desde que se abrió la
    ventana, la caja debe estar marcando el entorno correcto. Sin embargo
    si quieres descargar una región más amplia puedes crear un nuevo
    cuadro. Para definir un nuevo cuadro, haz click en el mapa, mantén
    presionado el botón izquierdo de tu mouse y mueve tu mouse para crear
    el cuadro. Suelta el botón del mouse para terminar la definición del
    cuadro.
-  Cuando estés satisfecho con el tamaño y la ubicación del cuadro, haz
    click en «Descargar» en la parte baja de la ventana. JOSM va a obtener
    los datos de esta área desde OpenStreetMap y abrirlo en tu ventana
    principal, listo para editar.

Capas en JOSM
-------------

-  Abrí tu archivo de GPS y los datos descargados desde OpenStreeMap, si no
    lo has hecho todavía. Tal vez has notado de que cuando abriste un
    archivo, agregaste un Walking Paper o descargaste desde OpenStreetMap
    otro elemento ha sido agregado al panel de las Capas en la parte derecha
    de JOSM. Tu panel de Capas puede aparecer similar a éste:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2b7c3b_en.png)
-  Cada elemento en esta lista representa una fuente diferente de datos, la
    cuál tienes abierto en tu ventana principal. En el ejemplo arriba «Capa
    de Datos 2» son los datos de OpenStreetMap que queremos editar.
    «Marcadores» son los puntos del GPS y «30 Juni 201-gpx» en una traza
    del dispositivo GPS. Y «Walking Papers» es una capa creada cuando
    agregué mi Walking Paper a JOSM. Puedes añadir la capa de imágenes de
    Bing que muestra fotos satélitales, haciendo click en «Imágenes» en
    la navegación superior de JOSM y seleccionando «Bing Sat».
-  Para ocultar una de las capas, selecciona una de ellas con tu mouse y
    haz click en el botón para cambiar el estado de la visibilidad la
    cual se ve así:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2e696f_en.png)
    
-  Puedes observar que la capa que habías seleccionado desaparece en la ventana
    del mapa. Haz click en el mismo botón para cambiar el estado de la
    visibilidad de nuevo y reaparecerá.
-  Puedes cerrar una capa, simplemente seleccionándola y utilizando el botón
    de borrar:
   ![]({{site.baseurl}}/images/EditingWithJOSM_html_m172543d8_en.png)
-  Por último, es importante saber que solamente puedes editar la capa que se
    considera *activa* por JOSM. Si no puedes editar el mapa en la ventana
    principal, posiblemente no has activado la capa correcta. La mayoría
    de las capas, como de los puntos de GPS, de Walking Paper y de los
    imágenes satélitales no pueden ser editadas. Las únicas capa que se
    pueden editar son las de datos de OpenStreetMap, que normalmente
    se llama «Capa de datos 1».
-  Para marcar una capa como *activa*, seleccionarla en el panel de Capas y
   haz click en el botón de activación:
   ![]({{site.baseurl}}/images/EditingWithJOSM_html_de83a77_en.png)

Editar
------
-  El próximo paso es editar el mapa y agregar nuevos elementos. Todo eso
    no es siempre fácil al comienzo, pero con la práctica vas a estar
    mejorando.
-  Si quieres mover un punto, línea o figura, utiliza la herramienta
    de **selección**. Haz click en un objeto y arrástralo donde debería
    estar. Eso puede ser utilizado para corregir la ubicación de elementos
    que han sido puesto en un lugar equivocado.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m2eb4096c_en.png)
-  La herramienta de **dibujar nodos** es para dibujar nuevos puntos,
    líneas y figuras. Agrega información a estos objetos nuevos por
    medio de los predefinidos, como ya has hecho en [capítulo 3]({{site.baseurl}}/en/beginner/start-josm/).
-  Recuerda que tus puntos de GPS y tus Walking Papers no entran
    automáticamente a OpenStreetMap. Tienes que agregarlos *digitalmente*
    con la herramienta para dibujar nodos. Pero tus puntos, trazas y
    apuntes en los Walking Papers pueden visualizarse en el fondo y
    servir como una guía.
-  Asumamos que has marcado un punto en tu GPS con el nombre 030 y
    escribiste en tu cuaderno que 030 es una escuela. Para agregar este punto
    en OpenStreetMap, debes seleccionar la herramienta de dibujar nodos
    y hacer un doble-clic encima del punto 030 en tu ventana principal
    del mapa. En seguida buscas en el menú de los elementos
    predefinidos la definición para escuela. Ahí escribes el nombre
    del la escuela y haces clic en «Aplicar Predeterminados». Lo
    mismo se hace agregando líneas y figuras.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_1cb5aeb4_en.png)

Etiquetas
---------

-  Cuando dibujas un punto, línea o figura primero tiene una ubicación
    pero no tiene información sobre lo que es. En otras palabras:
    sabemos **donde** se encuentra, pero no sabemos **qué** es.
    Anteriormente hemos siempre utilizado elementos del menú de
    predefinidos. La manera como OpenStreetMap sabe **qué** es un
    objeto es por medio de **etiquetas**.
-  Una etiqueta es como una marca que puedes poner a algo. Por ejemplo,
    si dibujo un cuadrado, primeramente es solo un cuadrado. Pero
    luego le puedo agregar varias etiquetas para describir lo que es:
    este cuadrado es un edificio, el nombre del edificio es «Menara
    Thamrin» y el edificio tiene 16 pisos.
-  Puedes agregar tantas etiquetas como tu quieras a un objeto.
    Etiquetas se guardan como pares de texto, llamados **claves**
    y **valores**. En OpenStreetMap las etiquetas especificados arriba
    serían en realidad lo siguiente:
    `building = yes, name = Menara Thamrin, building:levels = 16`
-  Si seleccionas un objeto en JOSM puedes ver todas sus etiquetas que
    tiene en el panel de Propiedades / Miembros a la derecha.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m945ccee_en.png)
### Editar etiquetas
-  Puedes agregar, editar y borrar estas etiquetas de este panel. Las
    etiquetas tradicionalmente se especifican en inglés, por lo tanto,
    muchas veces es mejor utilizar los elementos del menú de
    predefinidos. Si agregas o cambias etiquetas, como de autopista
    primaria a sendero, el estilo de representación va a cambiar según
    la etiqueta.
-  Para editar un objeto existente:
-  Selecciónalo.
-  Después puedes editar las etiquetas en una de dos maneras: (1) Puedes
   utilizar el menú de predefinidos para abrir un formulario y editar
   la información, o (2) puedes editar las etiquetas directamente desde
   el panel de Propiedades / Miembros en la derecha.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_94da59a_en.png)
### Error común: Etiquetar nodos cuando en realidad se quiere etiquetar lineas o polígonos.
-  Cuando agregas una etiqueta a un nodo, slecionas el nodo y luego
    agregas tus etiquetas (o te ayudas con el menú de los predefinidos).
    Cuando quieres agregar etiquetas a una línea o un polígono es
    importante que seleccionas la línea y NO los nodos que definen la
    línea.
-  Un error común es utilizar la herramienta de selección para dibujar
   un cuadro que selecciona el objeto, pero eso causa que la línea **y
   también** los nodos sean seleccionados y por lo tanto las etiquetas
   que se definan sean aplicadas a los nodos de igual manera. Asegúrate
   que **únicamente** seleccionas líneas cuando quieres agregar
   etiquetas a ellas.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2746cce8_en.png)
-  Más información sobre etiquetas y predeterminados puedes encontrar
   en la guía de nivel intermediario en capítulo 4: XML y JOSM Presets
   lo cual se encuentra disponible en idioma inglés únicamente.

Subir cambios
-------------

-  Después de que has hecho algunos cuantos cambios para mejorar el mapa,
    es tiempo de guardar estos cambios y mandarlos a OpenStreetMap.
    Para guardar los cambios necesitamos conexión al internet, porque
    si guardamos cambios en realidad los subimos directamente a los
    servidores de OpenStreetMap.
-  Haz clic en «Archivo» en la navegación superior y luego en
    «Subir datos». Se abrirá una ventana de subida. Puedes también
    llegar a esta ventana de una manera más simple haciendo clic en
    el botón respectivo de subida:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2e194887_en.png)
-  La ventana que aparece muestra una lista de los objetos que estas
    agregando, modificando o borrando. En la caja de texto abajo debes
    introducir un comentario sobre los cambios que estas realizando.
    Aquí escribes una descripción de tus modificaciones.
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_67f320b3_en.png)
-  Hacer clic en «Subir cambios».
-  Si es la primera vez que guardas algo en OpenStreetMap, se te pedirá tu usuario y contraseña de OpenStreetMap.org que
    has creado en capítulo 2. Introdúcelos en la ventana pequeña
    que aparece. Si marcas la casilla en esta ventanilla tu nombre
    de usuario y la contraseña será guardada y no necesitas
    introducirla de nuevo en el futuro. Si usas una computadora
    compartida asegúrate que no marques la casilla. Luego haz clic
    en «Autenticar».
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)
-  Ahora necesitas esperar unos cuantos segundos para que tus cambios
    se suban a los servidores y ¡ya lo lograste! Has hecho tus primeras
    modificaciones y mejoras a OpenStreetMap. Quizás vas a seguir
    editando para agregar todos tus puntos, si quieres. Solo asegúrate
    de subir tus modificaciones antes de cerrar el programa JOSM.

Revisar las modificaciones en el mapa
------------------------------------

-  Abre tu navegador de internet y visita la página [http://openstreetmap.org/](http://openstreetmap.org/)
-  Desplaza el mapa a la región que habías editado.
-  ¡Ahora debes poder ver tus modificaciones en el mapa! En caso
    contrario intenta presionar las teclas CTRL+R para recargar
    la página web. A veces el mapa no se actualiza de un instante
    y necesita ser recargado.
-  ¿Que pasa si no ves tus modificaciones? No te preocupes - puede
    tardar unos minutos hasta que los cambios se muestran en el mapa.
    Además revisa en JOSM si tus agregaciones han sido agregado
    correctamente. Una buena regla general es: si el punto tiene un
    icono en JOSM va a ser visible en el mapa principal en el sitio
    web de OpenStreetMap.

Guardar archivos OSM
--------------------

-  A veces después de haber descargado datos de OSM, quizás desees
    guardarlos para poder modificarlos sin conexión al internet y
    luego subirlos cuando uno se pudo conectar a internet en
    otro momento.
-  Para guardar un archivo de OSM asegúrate de que la capa de los datos
    esté activa en el panel de las Capas. Haz clic en «Archivo»
    en el menú superior y haz clic en «Guardar». Escoge dónde
    se guarda el archivo y especifica un nombre. También puedes
    guardar haciendo clic en este botón:
    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m3d7a0a33_en.png)
-  Ahora puedes cerrar JOSM y tus datos quedan guardados. Cuando
    quieras abrir el archivo de nuevo, simplemente abre JOSM y
    en el menú de «Archivo» haz clic en «Abrir...»

Resumen
-------

Ahora que has visto como contribuir con el mapa de OpenStreetMap, ¿qué sigue?
Recuerda que los mapas de OSM siempre se van mejorando en el tiempo.
Cada vez que haces mejoras en el sistema estos cambios se mantienen y
los datos se mejoran constantemente. Y como tú puedes mejorar el
trabajo de los demás, los otros pueden mejorar tu trabajo también.
En el último capítulo vamos a alejarnos un poco de JOSM y echar un
vistazo a algunos proyectos interesantes que hacen uso de los datos
de OpenStreetMap y conoceremos como podemos seguir aprendiendo
sobre OSM.

