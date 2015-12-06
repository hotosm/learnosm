---
layout: doc
title: GPSLogger para Android
permalink: /es/mobile-mapping/gpslogger/
lang: es
category: mobile-mapping
---

GPSLogger para Android
=====================

> Esta guía puede ser descargada como  [gpslogger_es.odt](/files/gpslogger_es.odt) or [gpslogger_es.pdf](/files/gpslogger_es.pdf)  
> Revisado 2015-12-06  

![GPSLogger][]

Una aplicación sencilla y ligera para grabar trazas GPS en la plataforma Android. La interfaz es sencilla y tiene el único propósito de loggear la posición GPS y mantener una baja actividad la hace muy eficiente respecto al uso de batería que puede grabar trazas en formatos de archivo GPX, KML, NEMA o en formato de texto. Los archivos de los logs pueden ser subidos automáticamente a OpenStreetMap, a un servidor OpenGTS, DropBox, a un servidor FTP, a un servidor HTTP o enviados por correo electrónico.

<https://play.google.com/store/apps/details?id=com.mendhak.gpslogger&hl=en>

GPSLogger para Android es una aplicación gratuita, así como un proyecto de código abierto mantenido activamente. Las donaciones son bienvenidas para mejorar la aplicación. Si deseas involucrarte (por ejemplo, proporcionando traducciones en otra lengua, reportando bugs, o enviando solicitudes de nuevas funciones), visita el repositorio (https://github.com/mendhak/gpslogger).

>OpenGTS se refiere al proyecto [Open GPS Tracking System](http://opengts.sourceforge.net/) project 


Funcionalidades
--------------------------
* Especificar el loggeo basado en intervalos de tiempo o distancia 
* Especificar las configuraciones de ahorro de batería
* Filtro de exactitud GPS para no loggear puntos poco fiables
* Seleccionar wifi, torre de celular y/o satélites GPS como fuente de información de ubicación 
* Registrar en archivos en formato GPX, KML, CSV, TXT o NMEA con soporte para ZIP
* Mostrar valores en unidades métricas o imperiales
* Inicio automático al encender
* Puede seguir ejecutándose en segundo plano
* Trabaja bien con otras aplicaciones GPS ejecutandose
* Envío automático a email/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS a intervalos definidos por el usuario
* Es fácil preconfigurar archivos de texto de configuración para distribución a muchos usuarios



Interfaz de usuario
--------------------------

![Canvass1][]

El botón de **Menu** provee más opciones para configurar la aplicación.

El **menú desplegable Vistas** le permite seleccionar cómo se despliega la información en pantalla. 

El botón de **Ayuda** provee información adicional acerca de cómo usar la aplicación.

El botón **Anotar** permite añadir una descripción a un punto.

El botón **Registrar un punto** permite registrar manualmente un punto.

**Subir** te permite elegir de una serie de opciones para subir tu archivo log. Esto incluye una opción para auto-enviar a cualquiera de los siguientes: OpenStreetMap, Google Drive, DropBox, un servidor FTP, un servidor OpenGTS o enviar el log a una dirección de correo electrónico.

El botón **Compartir** le permite elegir uno o más archivos de logs para compartir con otras personas vía Bluetooth o SMS. Dependiendo de qué aplicaciones tenga instaladas en su dispositivo, podría tener diferentes alternativas adicionales disponibles.


![Canvass2][]

El botón **Iniciar registro** está en azul. Cuando presionas este botón para comenzar a grabar, se convierte a un botón verde.

El botón **Coordenadas** despliega el último punto GPS grabado y se actualiza cuando unas nuevas coordenadas están disponibles. 

El icono **Satelites** le mostrará cuántos satélites tiene en vista.

La **Elevación** muestra los datos de elevación.

La **Duración** muestra el tiempo total transcurrido desde que se pulsó el botón de inicio.

La **Distancia** mostrará la distancia total registrada.

Los **Tipos de archivo** indican qué tipo de registros se está generando mientras que la **Ruta del archivo** le dice a donde está ubicado el archivo en su dispositivo o tarjeta de memoria.

El indicador de **Estado** se mostrará en verde cuando está grabando, mientras se muestra una ruleta cuando el dispositivo está tratando de conseguir la ubicación.

La **Precisión** mostrará la exactitud de los datos registrados, que varía entre receptores, la posición o el número de satélites disponibles, condiciones climáticas, o las obstrucciones del horizonte.

El **Rodamiento** le indica la dirección en la que se está moviendo.

La **Velocidad** le dará información aproximada de lo rápido que va.

**Puntos registrados** mostrará el número total de puntos grabados desde el momento en que se pulsó el botón de inicio.


Menús
--------------------------

![Menus][]

Las **Opciones generales** es dónde encontrará los ajustes para *Iniciar con el arranque*, *unidad de medida* (métrico o imperial), *archivo de depuración* y *información de la versión*.

![Menus1][]


El **Detalles del registro** es dónde encontrará los ajustes *Formatos de archivo* (múltiples formatos soportados simultáneamente), ruta de *carpeta* donde almacenar los registros, las reglas sobre la *creación de nuevos archivos* y el *nombre de archivo personalizado*.

![Menus2][]

![Menus3][]


Bajo **Rendimiento** están los ajustes de *proveedores de ubicación*, *tiempos*, *filtros* y *oyentes*. La opción de proveedor de ubicación le permite establecer las fuentes de los datos de localización: **GPS** - satélites de navegación; **Red** - torre celular; **Pasivo** - le  permite a GPSLogger "pedir prestada" las coordenadas de ubicación que otra aplicación ha solicitado, para ahorrar batería al no realizar su propia solicitud.

![Menus4][]

![Menus5][]

** Envío automático, correo electrónico y subida** es donde se encuentran los ajustes para las distintas opciones de carga como OpenStreetMap, Google Drive, FTP, Dropbox.

![Menus6][]

Cargar trazas GPS es otra forma de contribuir datos para el proyecto OpenStreetMap. La traza es un registro de su ubicación en diferentes intervalos de tiempo o de distancia, y se registrará como coordenadas geográficas (longitud, latitud, altitud). Pueden ser utilizados como capa de fondo durante la edición de mapas, y es útil para la añadir elementos al mapa, similar a las imágenes aéreas.

####Opciones de OpenStreetMap

![osm0][]

El ajuste **Permitir auto envío** determina si los archivos de registro se cargan automáticamente.

**Autorizar esta aplicación** es para conceder permiso a la aplicación para cargar trazas GPS a OSM, utilizando su cuenta de OSM.

Las opciones **Visibilidad**, **Descripción**, **Etiquetas** están desactivadas hasta que autorice la aplicación para cargar trazas GPS. Estos parámetros se utilizan para las trazas de GPS que se cargarán en la base de datos de OpenStreetMap.

Al hacer clic en el *Autorizar esta aplicación*, se le dirigirá a su navegador de Internet y el sitio web de OpenStreetMap. Si no tiene sesión iniciada, se le pedirá las credenciales.

![osm2][]

Después de iniciar sesión, verá una página como la siguiente, para verificar la solicitud de la aplicación, y el permiso específico para *subir trazas GPS*. Haga clic en el botón *Guardar cambios* para autorizar la aplicación.

![osm3][]

Al volver a la aplicación GPSLogger, la pantalla será ligeramente diferente, con opciones adicionales disponibles.

![osm1][]

Al hacer clic en la opción **Revocar autorización** eliminará el permiso para subir trazas GPS al servidor de OSM.

Hay varias opciones de *visibilidad* para las trazas GPS.  Las trazas *Privado* son compartidas como anónimo, con puntos desordenados. Las trazas *Público* son mostrados en la lista de trazas, como anónimo y puntos desordenados. Las trazas "Rastreable" son compartidas como anónimo, con marcas de tiempo y puntos ordenados. Las trazas "Identificable" son mostradas en la lista de trazas y pueden ser asociadas con su nombre de usuario, con marcas de tiempo para puntos ordenados.

Se recomienda configurar la visibilidad de las trazas GPS subidas hasta *identificable*. Los datos y metadatos hacen que sea más útil para otros cartógrafos. Si tiene preocupaciones acerca de la privacidad y la seguridad personal, elija una configuración más adecuada, o no cargue las trazas en absoluto.

Un texto *descripción* ayuda a otros a entender cómo se registra una traza. La traza grabada en pie no será similar a una traza grabada por un avión no tripulado.

Una *etiqueta* es la palabra clave corta que se puede utilizar para asociar una traza con los proyectos, lugares o eventos.


Colección de Datos
---------------

Recogida y carga de rutas GPS automatizada
-------------------------------------------------

Una vez configurado correctamente, la aplicación puede ejecutarse en segundo plano y automáticamente grabar pistas y subirlas una vez al día a cualquiera de sus servicios configurados. Esto permitiría la recogida automatizada de pistas de conducción diaria para ayudar a construir una colección de carretera y los datos de tiempo de viaje para el mapeo o análisis posterior. Una vez configurada la persona que tiene el teléfono u otro dispositivo Android debe notar un poqueño impacto en el uso de la batería y no tendrá que hacer nada manualmente. Se necesitará un poco de experimentación para encontrar el equilibrio adecuado de uso de la batería y la claridad de las rutas GPS.

Un ejemplo de configuración para recoger y subir de forma automática  a OpenStreetMap diariamente tendría que realizar estos ajustes:

* Opciones Generales
  * **Iniciar en el arranque** - Encendido
* Detalles del registro
  * **Registrar a GPX** - Encendido
  * **Creación de nuevo archivo** - Una vez al día
* Rendimiento
  * **Tiempo antes del registro** - 5
  * **Mantener GPS encendido entre correcciones** - Encendido (Si desactiva esta opción puede causar "saltos" en la trayectoria GPS mientras el dispositivo requiere el satélite GPS cada vez)
  * **No registrar si yo no me muevo** - Encendido
* Envío automático, correo electrónico y carga
  * **Permitir el envío automático** - Encendido
  * **¿Con qué frecuencia?** - Por una vez al día introducir 1440 minutos. Este ajuste puede ser un poco difícil si no tiene acceso a los datos o Wi-Fi cuando se ejecuta. Se debe empezar a contar desde el momento en que o bien arrancar el dispositivo o golpear el botón "Iniciar registro", por lo que si se inicia por la mañana, subirá al mismo tiempo a la mañana siguiente por ejemplo.
  * **OpenStreetMap** - Permitir el envío automático encendido y cualquier otro ajuste que desee configurar, preste mucha atención a la configuración de visibilidad si tiene preocupaciones sobre la privacidad sobre las rutas GPS.

Grabación manual de trazas
---------------------

Para comenzar a recoger los registros (en la vista simple), simplemente haga clic en el botón azul. Una ruleta aparecerá cerca de la esquina superior derecha de la pantalla para indicar el intento de conseguir un arreglo en satélites. Un círculo verde aparecerá en la zona superior derecha para indicar que el registro está en marcha.

Para detener la grabación de datos en cualquier momento, simplemente pulse el botón verde *Detener registro*.

#### Anotar
Para agregar una nota o una descripción a un registro, haga clic en el icono *Anotar* (lápiz). Esta opción le permitirá dejar un texto para describir o tomar nota de los detalles que se asocian con el punto actual.

##### Llamando a la anotación dede la Barra de Notificaciones
También es posible llamar directamente el botón *Anotar* desde la Barra de Notificación de Android. Seleccione la aplicación de la Lista de notificaciones y haga clic en el botón *Anotar*.

![annotate0][]

Esto mostrará un cuadro de diálogo de entrada donde podrá introducir los detalles del texto de la nota.

![annotate1][]

#### Intervalos de registro
Intervalos de registro están determinados por tiempo o distancia bajo el menú "Rendimiento" 

#####Por tiempo
**Tiempo antes de registrar** se establece en 60 segundos por defecto. Puede cambiar esto a cinco o diez segundos, cuando está caminando en lugar de montar en un vehículo. Cuando está en un automóvil, se puede establecer a 1 segundo para generar registros muy precisos.

#####Por distancia
El **Filtro Distancia** está configurado por defecto a cero. Puede establecer esta a otra cosa, si quiere grabar las coordenadas para cada X número de unidades desde el último punto grabado.


Subiendo trazas
------------------
####para OpenStreetMap
Presione el botón *Subir* y seleccione la opción *OpenStreetMap*. Una ventana de diálogo aparecerá donde los archivos están disponibles para la selección. Elija cualquier que desee cargar y pulse el botón *Ok*.

![upload0][]

####para otras opciones
Hay otras opciones de carga que puede explorar, pero están fuera del alcance de esta guía. Consulte la GPSLogger para el sitio web del Proyecto Android para obtener más información.


Compartiendo trazas 
---------------
También puede compartir las trazas registradas, o su ubicación actual con otras personas. Opciones para compartir pueden variar de un dispositivo a otro, o de las aplicaciones instaladas en un dispositivo. A continuación se muestra un ejemplo de cómo se puede ver la pantalla de opciones de compartir:

![share0][]


Exportando trazas al editor OpenStreetMap
--------------------------------------------

Cuando haya terminado de grabar las trazas, las pistas pueden ser importadas a JOSM (u otro editor de OpenStreetMap, como iD).

Conecte su dispositivo Android a un ordenador (también es posible utilizar un cable de datos, Bluetooth o una conexión a Internet) y copiar las pistas GPX y (y tal vez, archivos multimedia) que ha capturado. En el almacenamiento del dispositivo, busque la pista GPX bajo la carpeta /Android/data/com.mendhak.gpslogger/files

Utilizando las pistas GPX con el JOSM y editores iD es fácil como arrastrar los archivos y soltándolos en la aplicación (o la pestaña del navegador, por iD). 

Para obtener detalles adicionales para los usuarios iD, consulte la sección [Configuración de la Capa de Fondo] (http://learnosm.org/es/editing/id-editor/#configuring-the-background-layer).

Si se utiliza el editor JOSM, puede encontrar instrucciones sobre cómo utilizar la pista GPX, junto con los archivos multimedia en JOSM consulte la sección [Abrir en JOSM](http://learnosm.org/es/beginner/using-gps/#open-in-josm).

Para otros editores de OpenStreetMap, consulte la documentación de su software.


Mostrar Opciones
-----------------
La aplicación se puede visualizar de 3 maneras diferentes, lo que le resulte más adecuado para su uso:

####Vista Simple

![view0][]

####Vista Detallada

![view1][]

####Vista Ampliada

![view2][]


Resumen
-------
Excelente! Ha sido introducido a un peso ligero, aplicación de la batería eficiente que pueda mantenerse en su dispositivo Android para grabar pistas, que se puede subir a OSM, o utilizar con su editor favorito OpenStreetMap.

GPSLogger para Android es una herramienta más para la recogida de datos de campo sin un receptor GPS dedicado. Recogida de datos de campo casual es posible sin una conexión a Internet activa.

Tómese su tiempo para practicar y familiarizarse con la aplicación antes de trabajar con datos en tiempo real.

En esta sección se introduce el concepto de usar GPSLogger para Android para recoger trazas GPS, la posibilidad de subir las trazas a OpenStreetMap, y la transferencia de estos registros a un PC.


Documentación Oficial de GPSLogger para Android
--------------------------------------------

El proyecto mantiene una [FAQ] (http://code.mendhak.com/gpslogger/#faq) para las preguntas más frecuentes.


[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png