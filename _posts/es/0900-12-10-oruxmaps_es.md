---
layout: doc
title: OruxMaps
permalink: /es/mobile-mapping/oruxmaps/
lang: es
category: mobile-mapping
---

OruxMaps
===============

> Revisado el 2016-08-04 y, aunque está un poco desactualizada, sigue sirviendo y contiene un enlace al sitio del manual del software.

En esta sección, vamos a aprender cómo configurar OruxMaps, cómo crear puntos de ruta, cómo ver un registro de traza y cómo exportar un registro de traza para su uso en JOSM.  

​Instalar OruxMaps
------------------

Instala la aplicación desde Google Play Store buscando **OruxMaps**, OruxMaps debe estar entre los mejores resultados de búsqueda listados.  

![Search OruxMaps in Play Store][]

Haz clic en el botón **Instalar** y pulsa Aceptar después de que aparezcan los permisos de la aplicación.  

![Install OruxMaps][]

¡Listo! ¡Ahora tienes OruxMaps instalado en tu dispositivo!  

Uso de OruxMaps
--------------------

La primera vez que ejecutes la aplicación, verás una notificación como esta:  

![Running OruxMaps for the first time][]

En OruxMaps, puedes elegir si quieres utilizar mapas en línea o mapas sin conexión. Es mejor utilizar mapas sin conexión ya que puedes utilizarlos incluso sin conexión a Internet. OruxMaps te sugerirá dos fuentes para descargar mapas sin conexión. Si ya tienes tus mapas sin conexión, ¡también puedes ponerlos aquí! Al principio puede ser un poco confuso porque hay muchos botones allí. Pero no te preocupes, verás la explicación de cada botón más abajo:  

![Interface overview][]

Fuente: [Manual de OruxMaps Versión Inglés](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Este manual puede estar más actualizado que esta guía y puede estar disponible en otros idiomas.  

Puedes cambiar tu mapa de fondo en **Mapas \> Cambiar Mapas**. Después de eso llegas a las opciones - ¿quieres usar tu **Mapa en línea** o quieres usar
**Mapas sin conexión**? OruxMaps proporciona una gran cantidad de fuentes de mapas en línea que puedes elegir, pero, por supuesto, te costará dinero del plan de datos en tu dispositivo. Si quieres saber dónde puedes poner tus mapas sin conexión, puedes ir a **Configuración \>Mapas**. En la opción de directorio de mapas puedes ver dónde pone OruxMaps tus
mapas sin conexión. De forma predeterminada, está en la carpeta **OruxMaps/Mapfiles** de tu almacenamiento interno.  

![Offline maps storage settings][]

Comenzar a rastrear
--------------

Antes de empezar a rastrear, revisemos algunos ajustes en la configuración de la pista/ruta. El primer ajuste es **Creación automática de GPX**. Si seleccionas esta opción, OruxMap te ayudará a crear un archivo .gpx inmediatamente después de terminar una traza (usando la función de Detener Rastreo). Así, después de terminar una traza, puedes ir a **OruxMaps/Tracklogs** en tu almacenamiento interno para obtener tus archivos .gpx sin necesidad de exportar tu registro de traza primero en la gestión de trazas/rutas. El segundo ajuste es **Preguntar nombre de la traza**. Es muy útil definir el nombre de tu traza antes de empezar a rastrear para que sepas exactamente el nombre específico de tus trazas.  

![Tracklog settings][]

Para empezar a rastrear, una cosa que hay que recordar es que debemos activar la funcionalidad GPS en tu dispositivo. Todas las funciones de OruxMaps como **Iniciar GPS** e **Iniciar Grabación** no se iniciarán a menos que actives las funciones GPS. OruxMaps mostrará una notificación si tu GPS sigue desactivado y después irá directamente a **Configuración de la localización** en tu dispositivo. Después de activar la función de localización en tu dispositivo, puedes conocer tu ubicación utilizando la función **Iniciar GPS** (1) en el panel derecho. Una vez adquirida tu ubicación, puedes iniciar el rastreo utilizando **Iniciar Grabación** (2) en el panel de la derecha.  

![Start track recording][]

Para detener el rastreo solo tienes que pulsar el mismo botón (2) en el panel derecho. Después de detener el seguimiento, OruxMap almacenará el registro de traza en una base de datos interna. Puedes acceder al registro de traza accediendo al panel de **Rutas** en la página superior, seleccionando **Gestión**. Aquí encontrarás todos tus registros de trazas y podrás ver la ruta pulsando el registro de traza que quieras ver y seleccionando **Cargar la Traza** (1). Si no utilizas la función de creación automática de GPX, puedes exportar tu registro de traza en varios formatos (GPX, KML, KMZ) seleccionando tu registro de traza y **Exportar como** (2).  

![Managing tracklogs][]

Si ya tienes una cuenta de OpenStreetMap, puedes subir tu registro de traza directamente usando OruxMaps. Antes de subir tu registro de traza tienes que poner tu nombre de usuario y contraseña yendo a **Configuración \> Integración \> OpenStreetMap**. Después de eso introduce tu nombre de usuario y contraseña. Puedes subir tu registro de traza usando **Subir a (3)** en la gestión de trazas/rutas.  

Aparecerán unas ventanas en las que tienes que seleccionar **OpenStreetMaps** (1) y después elegir tu **Tipo de registro de traza** (2), poner tu **Descripción** (3) y también la **Etiqueta** (4). Después de que toda la información ya esté rellenada pulsa **Subir GPX** (5). La notificación aparecerá y podrás ver directamente tus trazas GPS en la web de OpenStreetMap seleccionando **Aceptar**. (6).  

![Uploading tracks to OpenStreetMap][]

Añadir punto de ruta
---------------------

![Creating a waypoint][]

Si quieres añadir un punto de ruta, tienes que ir al símbolo de **Punto de ruta** (1) en la parte superior de la página e ir a **Crear** (2). Te llevará a la página de creación de puntos de ruta y rellenarás el nombre de tu punto de ruta. Puedes añadir información adicional, por ejemplo, una descripción de tu punto de ruta y las coordenadas de tu punto de ruta marcando la lista de coordenadas. Pulsa Aceptar para guardar tu punto de ruta.  

![Waypoint creation settings][]

Si quieres ver todos tus puntos de ruta, puedes ir a **Punto de ruta \> Gestión**. Desde esta página puedes cambiar las propiedades, eliminar y exportar el punto de ruta. Para ver todos tus puntos de ruta en el **mapa**, selecciona los puntos de ruta y ve a mostrar en mapa (1) y si quieres exportar tus puntos de ruta pulsa **Exportar** (2). Todos tus puntos de ruta exportados se guardarán en el almacenamiento interno (por defecto se guarda en **oruxmaps/geocaches**).  

![Managing save waypoints][]

Resumen
-----------

¡Perfecto! Ya sabes cómo utilizar OruxMaps para los estudios de campo. Puede ser difícil en tu primera vez, pero si continúas usando esto te familiarizarás con esta aplicación.  

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