---
layout: doc
title: GPSLogger para Android
permalink: /es/mobile-mapping/gpslogger/
lang: es
category: mobile-mapping
---

GPSLogger para Android
=====================


![GPSLogger][]

Una aplicación simple, ligera y minimalista para grabar trazas GPS en la plataforma Android. La interfaz fácil de usar con el único propósito de registrar GPS y permanecer en silencio la convierte en una aplicación muy eficiente en cuanto a batería que puede guardar rutas GPS en formatos de archivo GPX, KML, NEMA o texto. Los archivos de registro se pueden subir automáticamente a OpenStreetMap, un servidor OpenGTS, DropBox, servidor FTP, servidor HTTP o enviar a una dirección de correo electrónico.  

<https://f-droid.org/es/packages/com.mendhak.gpslogger/>  

GPSLogger para Android es una aplicación de uso gratuito y un proyecto de código abierto mantenido activamente. Se agradecen las donaciones para mejorar aún más la aplicación. Si deseas participar (por ejemplo, proporcionando traducciones a otro idioma, informando de errores o enviando solicitudes de funciones), visita el [repositorio](https://github.com/mendhak/gpslogger).  

> OpenGTS se refiere al proyecto [Open GPS Tracking System](http://opengts.sourceforge.net/)  


Características
--------  

* Especifica el registro basado en intervalos de tiempo o distancia  
* Configuraciones específicas de ahorro de batería  
* Filtro de precisión GPS para no registrar puntos poco fiables  
* Selecciona wifi, torre de telefonía móvil y/o satélites GPS como fuente de información de ubicación  
* Registra en archivos GPX, KML, CSV, TXT o NMEA con soporte ZIP  
* Unidades de visualización imperiales o métricas  
* Inicio automático al arrancar  
* Puede ejecutarse en segundo plano  
* Funciona bien con otras aplicaciones GPS en ejecución  
* Envío automático a correo electrónico/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS a intervalos definidos por el usuario  
* Facilidad para preconfigurar archivos de configuración de texto para su distribución a muchos usuarios  


Interfaz de usuario
--------------------------

![Canvass1][]

El botón **Menú** proporciona más opciones para configurar la aplicación.  
El **desplegable Vistas** te permite elegir cómo se muestra la información en la pantalla.  
El botón **Ayuda** proporciona información adicional sobre cómo usar la aplicación.  
El botón **Anotar** te permite añadir una descripción a un punto.  
El botón **Registrar un punto** te permite registrar manualmente un punto de referencia.  
**Subir** te permite elegir entre una variedad de opciones para subir tu archivo de registro. Esto incluye una opción para enviar automáticamente a cualquiera de los siguientes:  

- OpenStreetMap,  
- Google Drive,  
- DropBox,  
- un servidor FTP,  
- un servidor OpenGTS o  
- enviar el registro a una dirección de correo electrónico.  

El botón **Compartir** te permite elegir uno o más archivos de registro que puedes compartir con otras personas a través de Bluetooth o SMS. Dependiendo de las aplicaciones que estén instaladas en tu dispositivo, es posible que tengas diferentes opciones disponibles.  


![Canvass2][]

El botón **Iniciar registro** está en azul. Cuando pulsas este botón para iniciar la grabación, se convierte en un botón verde.  
Las **Coordenadas** muestran el último punto GPS registrado y se actualizan cuando hay nuevas coordenadas disponibles.  
El ícono **Satélites** te mostrará a cuántos satélites estás conectado.  
La **Elevación** muestra los datos de elevación.  
La **Duración** muestra el tiempo total transcurrido desde que se pulsó el botón de inicio.  
La **Distancia** mostrará la distancia total registrada.  
Los **Tipos de archivo** indican qué tipo de registros se están generando, mientras que la **Ruta del archivo** te indica dónde se encuentra la ubicación del archivo en tu dispositivo o tarjeta de memoria.  
El indicador de **Estado** se mostrará en verde cuando esté grabando, mientras que se mostrará un indicador giratorio cuando el dispositivo esté intentando obtener una corrección.  
La **Precisión** mostrará la precisión de los datos registrados, que varía entre los receptores, la posición o el número de satélites disponibles, las condiciones meteorológicas o las obstrucciones del horizonte.  
El **Rumbo** te indica la dirección en la que te estás moviendo.  
La **Velocidad** te dará información aproximada de la velocidad a la que vas.  
**Puntos registrados** mostrará el número total de puntos registrados desde que se pulsó el botón de inicio.  


Menús
--------------------------

![Menus][]

Las **Opciones generales** son donde se encuentran los ajustes para *Iniciar al arrancar*, *unidad de medida* (métrica o imperial), *archivo de depuración* e *información de la versión*.  

![Menus1][]

Los **Detalles de registro** son donde se encuentran los ajustes de *Formatos de archivo* (se admiten varios formatos simultáneamente), la ruta de la *carpeta* para almacenar los registros, las reglas sobre la *creación de nuevos archivos* y el *nombre de archivo personalizado*.  

![Menus2][]

![Menus3][]

En **Rendimiento** es donde se encuentran los ajustes para los *proveedores de ubicación*, *tiempos*, *filtros* y *oyentes*. La opción de proveedor de ubicación te permite configurar las fuentes de los datos de ubicación: **GPS** - satélites de navegación; **Red** - torre de telefonía móvil; **Pasivo** - permite a GPSLogger "tomar prestadas" las coordenadas de ubicación que ha solicitado otra aplicación, para ahorrar batería al no realizar la solicitud por sí mismo.  

![Menus4][]

![Menus5][]

**Envío automático, correo electrónico y subida** es donde se encuentran los ajustes para varias opciones de subida como OpenStreetMap, Google Drive, FTP, Dropbox.  

![Menus6][]

Subir trazas GPS es otra forma de contribuir con datos al proyecto OpenStreetMap. Una traza es un registro de tu ubicación a varios intervalos de tiempo o distancia, y se registra como coordenadas geográficas (longitud, latitud, altitud). Se pueden utilizar como capa de fondo al editar mapas y son útiles para añadir elementos al mapa, de forma similar a las imágenes aéreas.  

#### Opciones de OpenStreetMap

![osm0][]

La configuración de **Permitir el envío automático** determina si los archivos de registro se suben automáticamente.  
**Autorizar esta aplicación** sirve para conceder a la aplicación permiso para subir trazas GPS a OSM, utilizando tu cuenta OSM.  
Las opciones de **Visibilidad**, **Descripción**, **Etiquetas** están desactivadas hasta que autorices a la aplicación a subir trazas GPS. Estos ajustes se utilizan para las trazas GPS que se subirán a la base de datos de OpenStreetMap.  
Cuando hagas clic en *Autorizar esta aplicación*, se te dirigirá a tu navegador de Internet y al sitio web de OpenStreetMap. Si no has iniciado sesión, se te pedirán tus credenciales.  

![osm2][]

Después de iniciar sesión, verás una página como la que se muestra a continuación, para verificar la solicitud de la aplicación y el permiso específico para *subir trazas GPS*. Haz clic en el botón *Guardar cambios* para autorizar la aplicación.  

![osm3][]

De vuelta a la aplicación GPSLogger, la pantalla será ligeramente diferente, con opciones adicionales disponibles.

![osm1][]

Al hacer clic en la opción **Borrar autorización** se eliminará el permiso para subir trazas GPS al servidor OSM.  

Hay varias opciones de *visibilidad* para las trazas GPS. Las trazas *Privadas* se comparten de forma anónima, con puntos desordenados. Las trazas *Públicas* se muestran en el listado de trazas y como puntos anónimos y desordenados. Las trazas *Rastreables* se comparten de forma anónima, con marcas de tiempo para los puntos ordenados. Las trazas *Identificables* se muestran en la lista de trazas y se pueden asociar a tu nombre de usuario, con marcas de tiempo para los puntos ordenados.  

Se recomienda que establezcas la visibilidad de las trazas GPS que subas como *identificables*. Los datos y metadatos la hacen más útil para otros mapeadores. Si te preocupa la privacidad y la seguridad personal, elige una configuración más adecuada o no subas las trazas en absoluto.  

Una *descripción* de texto ayuda a otros a entender cómo se registra una traza. Una traza registrada a pie no será similar a una traza registrada por un dron.  

Una *etiqueta* es una palabra clave corta que se puede utilizar para asociar una traza con proyectos, lugares o eventos.  


Recopilación de datos
---------------

### Recopilación y subida automatizadas de rutas GPS

Una vez configurada correctamente, la aplicación puede ejecutarse en segundo plano y registrar automáticamente las rutas y subirlas una vez al día a cualquiera de los servicios configurados. Esto permitiría la recopilación automatizada de rutas de conducción diaria para ayudar a construir una colección de datos de carreteras y tiempos de viaje para su posterior mapeo o análisis. Una vez configurada, la persona que tenga el teléfono u otro dispositivo Android debería notar un pequeño impacto en el uso de la batería y no tener que hacer nada manualmente. Será necesario experimentar un poco para encontrar el equilibrio adecuado entre el uso de la batería y la claridad de las rutas GPS.  

Un ejemplo de configuración para recopilar y subir automáticamente a OpenStreetMap diariamente, tendrías que ajustar estos parámetros:  

#### Opciones generales  

* **Iniciar al arrancar** - Activado  

#### Detalles de registro  

* **Registrar en GPX** - Activado  
* **Creación de nuevos archivos** - Una vez al día  

#### Rendimiento  

* **Tiempo antes de registrar** - 5  
* **Mantener el GPS encendido entre correcciones** - Activado (desactivar esto puede causar "saltos" en las rutas GPS mientras el dispositivo requiere los satélites GPS cada vez.)  
* **No registrar si no me estoy moviendo** - Activado  

#### Enviar automáticamente, correo electrónico y subir  

* **Permitir el envío automático** - Activado  
* **Con qué frecuencia** - Para una vez al día, introduce 1440 minutos. Este ajuste puede ser un poco complicado si no tienes acceso a datos o wifi cuando se ejecuta. Debería empezar a contar desde que arrancas el dispositivo o pulsas el botón "Iniciar registro", así que si lo inicias por la mañana, subirá a la misma hora a la mañana siguiente, por ejemplo.  
* **OpenStreetMap** - Permitir el envío automático activado y cualquier otro ajuste que quieras configurar, presta mucha atención al ajuste de visibilidad si te preocupa la privacidad de las rutas GPS.  


### Registro manual de trazas

Para empezar a recopilar registros (en la vista simple), simplemente haz clic en el botón azul. Aparecerá un indicador giratorio cerca de la esquina superior derecha de la pantalla para indicar el intento de obtener una corrección en los satélites. Un círculo verde se mostrará en la zona superior derecha para indicar que el registro está en curso.  

Para detener la grabación de datos en cualquier momento, simplemente pulsa el botón verde *Detener registro*.  

#### Anotar  

Para añadir una nota o descripción a un registro, haz clic en el ícono *Anotar* (Lápiz). Esta opción te permitirá dejar un texto para describir o tomar nota de los detalles que están asociados con el punto actual.  

##### Llamar a la anotación desde la barra de notificaciones  

También es posible llamar directamente al botón *Anotar* desde la barra de notificaciones de Android. Selecciona la aplicación de la lista de notificaciones y haz clic en el botón *Anotar*.  

![annotate0][]

Esto mostrará un cuadro de diálogo de entrada donde puedes introducir los detalles de texto de la nota.

![annotate1][]

#### Intervalos de registro

Los intervalos de registro se determinan por tiempo o distancia en el menú **Rendimiento**.  

##### Por tiempo

**Tiempo antes de registrar** está configurado en 60 segundos por defecto. Puedes cambiarlo a cinco o diez segundos, cuando estés caminando en lugar de ir en un vehículo. Cuando estés en un coche, puedes configurarlo en 1 segundo para generar registros muy precisos.  

##### Por distancia

El **Filtro de distancia** está configurado por defecto en cero. Puedes configurarlo en otro valor si quieres registrar las coordenadas para cada X número de unidades desde el último punto registrado.  


​Subir trazas
------------------

#### a OpenStreetMap

Pulsa el botón *Subir* y selecciona la opción *OpenStreetMap*. Aparecerá una ventana de diálogo donde los archivos estarán disponibles para su selección. Elige los que quieras subir y pulsa el botón *Aceptar*.  

![upload0][]

#### a otras opciones

Hay otras opciones de subida que puedes explorar, pero están fuera del alcance de esta guía. Consulta el sitio web del proyecto GPSLogger para Android para obtener más detalles.  


​Compartir trazas 
---------------

También puedes compartir las trazas grabadas o tu ubicación actual con otras personas. Las opciones para compartir pueden variar de un dispositivo a otro o de las aplicaciones instaladas en un dispositivo. A continuación se muestra un ejemplo de cómo puede verse la pantalla de opciones para compartir:  

![share0][]


Exportar trazas a un editor de OpenStreetMap
--------------------------------------------

Cuando hayas terminado de grabar trazas, las rutas se pueden importar a JOSM (u otro editor de OpenStreetMap, como iD).  

Conecta tu dispositivo Android a un ordenador (también es posible mediante un cable de datos, Bluetooth o una conexión a Internet) y copia las rutas GPX y (y quizás, los archivos multimedia) que hayas capturado. En el almacenamiento de tu dispositivo, busca las rutas GPX en la carpeta /Android/data/com.mendhak.gpslogger/files  

Utilizar las rutas GPX con los editores JOSM e iD es tan fácil como arrastrar los archivos y soltarlos en la aplicación (o en la pestaña del navegador, para iD).  

Para obtener más detalles para los usuarios de iD, consulta la sección [Configurar la capa de fondo](http://learnosm.org/es/beginner/id-editor/#configuring-the-background-layer).  

Si se utiliza el editor JOSM, puedes encontrar instrucciones sobre cómo utilizar la ruta GPX, junto con los archivos multimedia en JOSM, consulta la sección [Abrir en JOSM](http://learnosm.org/es/mobile-mapping/using-gps/#open-in-josm).  

Para otros editores de OpenStreetMap, consulta la documentación de tu software.  


Opciones de visualización
-----------------

La aplicación se puede visualizar de 3 maneras diferentes, la que te resulte más adecuada para tu uso:

#### Vista simple

![view0][]

#### Vista detallada

![view1][]

#### Vista grande

![view2][]


Resumen
-------

¡Excelente! Te hemos presentado una aplicación ligera y eficiente en cuanto a batería que puedes tener en tu dispositivo Android para grabar rutas, que puedes subir a OSM o utilizar con tu editor de OpenStreetMap favorito.  

GPSLogger para Android es otra herramienta para recopilar datos de campo sin un receptor GPS dedicado. La recopilación de datos de campo casual es posible sin una conexión a Internet activa.  

Tómate un tiempo para practicar y familiarizarte con la aplicación antes de trabajar con datos reales.  

Esta sección ha introducido el concepto de utilizar GPSLogger para Android para recopilar trazas GPS, subir trazas a OpenStreetMap y transferir estos registros a un PC.  


Documentación oficial de GPSLogger para Android
--------------------------------------------

El proyecto mantiene una sección de [Preguntas frecuentes](http://code.mendhak.com/gpslogger/#faq) para las preguntas más comunes.

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