---
layout: doc
title: OruxMaps
permalink: /es/mobile-mapping/oruxmaps/
lang: es
category: mobile-mapping
---

OruxMaps
===============

> Revisado el 2016-08-04 y, aunque un está un poco desactualizada, sigue sirviendo y contiene un enlace al sitio del manual del software.

En esta sección, vamos a aprender cómo configurar OruxMaps, cómo crear waypoints, cómo ver un tracklog y cómo exportar un tracklog para su uso en JOSM.  

​Instalar OruxMaps
------------------

Instale la aplicación desde Google Play Store buscando **OruxMaps**, OruxMaps debe estar entre los mejores resultados de búsqueda listados.  

![Search OruxMaps in Play Store][]

Haga clic en el botón **Instalar** y presione Aceptar después de que aparezcan los permisos de aplicación.  

![Install OruxMaps][]

¡Felicitaciones! ¡Ahora tienes OruxMaps instalado en tu dispositivo!  

Uso de OruxMaps
--------------------

La primera vez que ejecute la aplicación, verá una notificación como ésta:  

![Running OruxMaps for the first time][]

En OruxMaps, puedes elegir si quieres utilizar mapas en-línea o mapas fuera de línea. Es mejor utilizar mapas fuera de línea ya que puedes utilizarlos incluso sin conexión a Internet. OruxMaps te sugerirá dos fuentes para descargar mapas offline. Si ya tienes tus mapas fuera de línea, ¡también puedes ponerlos aquí! Al principio puede ser un poco confuso porque hay muchos botones allí. Pero no te preocupes, verás la explicación de cada botón más abajo:  

![Interface overview][]

Fuente: [OruxMaps Manual Versión Inglés](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Este manual puede estar más actualizado que esta guía, y puede estar disponible en otros idiomas.  

Puede cambiar su fondo de mapa bajo **Mapas \> Cambiar Mapas**. Después de eso se llega a las opciones - usted quiere usar su **Mapa en línea** o quiere usar
**Mapas fuera de línea**. OruxMaps proporciona una gran cantidad de fuentes de mapas en línea que puede elegir, pero, por supuesto, va a costar dinero del plan de datos en su dispositivo. Si quiere saber dónde puede poner sus mapas fuera de línea, puede ir a **Configuración \>Mapas**. En la opción de directorio de mapas puedes ver dónde pone OruxMaps sus
mapas fuera de línea. De forma predeterminada, está en la carpeta **OruxMaps/Mapfiles** de su almacenamiento interno.  

![Offline maps storage settings][]

Comenzar a Rastrear
--------------

Antes de empezar a rastrear, revisemos algunos ajustes en la configuración de la pista/ruta. El primer ajuste es **Creación automática de GPX**. Si seleccionas esta opción, OruxMap le ayudará a crear un archivo .gpx inmediatamente después de terminar una traza (usando la función de Detener Rastreo). Así, después de terminar una traza, puede ir a **OruxMaps/Tracklogs** en su almacenamiento interno para obtener sus archivos .gpx sin necesidad de exportar su registro de traza primero en la gestión de trazas/rutas. El segundo ajuste es **Nombre de la traza**. Es muy útil definir el nombre de su traza antes de empezar a rastrear para que sepa exactamente el nombre específico de sus trazas.  

![Tracklog settings][]

Para empezar a rastrear, una cosa que hay que recordar es que debemos activar la Funcionalidad GPS en su dispositivo. Todas las funciones de OruxMaps como **Iniciar GPS** y **Iniciar Rec** no se iniciarán a menos que active las Funciones GPS. OruxMaps mostrará una notificación si su GPS sigue desactivado, y después irá directamente a **Configuración de la localización** en su dispositivo. Después de activar la función de localización en su dispositivo, puede conocer su ubicación utilizando la función **Iniciar GPS** (1) en el panel derecho. Una vez adquirida su ubicación, puede iniciar el rastreo utilizando **Iniciar Rec.** (2) en el panel de la derecha.  

![Start track recording][]

Para detener el rastreo sólo tiene que pulsar el mismo botón (2) en el panel derecho. Después de detener el seguimiento, OruxMap almacenará el registro de traza en una base de datos interna. Puede acceder al registro de traza accediendo al panel de **Rutas** en la página superior, seleccionando **Gestión**.Aquí encontrarás todos tus registros de trazas y podrá ver la ruta pulsando el registro de traza que quiera ver y seleccionando **Cargar la Traza** (1). Si no utiliza la función de creación automática de GPX, puede exportar su registro de traza en varios formatos (GPX, KML, KMZ) seleccionando su registro de traza y **Exportar como** (2).  

![Managing tracklogs][]

Si ya tiene una cuenta de OpenStreetMap, puede subir su registro de traza directamente usando OruxMaps. Antes de subir su registro de traza tiene que poner su nombre de usuario y contraseña yendo a **Configuración \> Integración \> OpenStreetMap**. Después de eso introduzca su nombre de usuario y contraseña. Puedes subir su registro de traza usando **Subir a (3)** en la gestión de trazas/rutas.  

Aparecerán unas ventanas en las que tienes que seleccionar **OpenStreetMaps** (1) y después elegir tu **Tipo de registro de traza** (2), poner tu **Description** (3) y también la **Etiqueta** (4). Después de que toda la información ya esté rellenada pulsa **Subir GPX** (5). La notificación aparecerá y podrás ver directamente sus trazas GPS en la web de OpenStreetMap seleccionando **Aceptar**. (6).  

![Uploading tracks to OpenStreetMap][]

Añadir punto de vía
---------------------

![Creating a waypoint][]

Si quieres añadir un punto de ruta, tienes que ir a **Punto de ruta** símbolo (1) en la parte superior de la página e ir a **Crear**(2). Te llevará a la página de creación de puntos de ruta y rellenarás el nombre de tu punto de ruta. Puede añadir información adicional, por ejemplo una descripción de su punto de ruta y las coordenadas de su punto de ruta marcando la lista de coordenadas. Pulse Aceptar para guardar su punto de ruta.  

![Waypoint creation settings][]

Si quiere ver todos sus puntos de ruta, puede ir a **Punto de ruta \N>Gestión**. Desde esta página puede cambiar las propiedades, eliminar y exportar el punto de ruta. Para ver todos sus puntos de ruta en **mapa**, seleccione los puntos de ruta y vaya a mostrar en mapa(1) y si quiere exportar sus puntos de ruta pulse **Exportar**(2). Todos tus puntos de ruta exportados se guardarán en el almacenamiento interno (por defecto se guarda en **oruxmaps/geocaches**).  

![Managing save waypoints][]

Resumen
-----------

¡Enhorabuena! Ya sabes cómo utilizar OruxMaps para los estudios de campo. Puede ser difícil en su primera vez, pero si continúa usando esto se familiarizará con esta aplicación.  

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png