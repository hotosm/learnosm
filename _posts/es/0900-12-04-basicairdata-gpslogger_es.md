---
layout: doc
title: BasicAirData GPS Logger
permalink: /es/mobile-mapping/basicairdata-gpslogger/
lang: es
category: mobile-mapping
---

> Esta guía puede ser descargada como [basicairdata_gpslogger_es.odt](/files/basicairdata_gpslogger_es.odt) o [basicairdata_gpslogger_es.pdf](/files/basicairdata_gpslogger_es.pdf)  

BasicAirData GPS Logger
=======================

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger es una aplicación sencilla para registrar su posición y su ruta. Es un rastreador GPS básico y liviano centrado en la precisión, con el objetivo de ahorrar energía. Esta aplicación es muy precisa para determinar su altitud si habilita la corrección automática de altitud EGM96 en la configuración. Puede grabar todos sus viajes, verlos en su visor externo preferido (debe estar instalado) directamente desde la lista de pistas de la aplicación y compartirlos en formatos KML, GPX y TXT de diversas maneras.

La aplicación está disponible para dispositivos Android, gratuita y código libre.

La aplicación se puede descargar gratuitamente desde [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Como alternativa, el archivo APK puede ser descargado en [repositorio GitHub de GPSLogger](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Funcionalidades
--------

![BasicAirData-GPSLogger-000][]

* Grabación de traza - la aplicación no tiene mapas integrados.
* Una interfaz de usuario moderna con un tema oscuro de bajo consumo y una interfaz con pestañas
* Grabación en primer plano y en segundo plano (en Android 6+, desconecte todas las optimizaciones y el monitoreo de la batería para esta aplicación)
* Creación de marca de posición también durante la grabación.
* Visualización de la información GPS
* Corrección manual de la altitud (agregando una compensación general)
* Corrección automática de altitud basada en el Modelo Geoide de la Tierra NGA EGM96 (debe ser habilitado en los ajustes)
* Estadísticas de traza en tiempo real
* Lista de trazas de la aplicación mostrando el listado de trazas registradas
* Visualización de sus trazas utilizando cualquier visor KML/GPX instalado, directamente desde la lista de trazas
* Exportar traza a la carpeta /GPSLogger de su dispositivo, en KML, GPX y TXT
* Compartir traza, en formatos KML, GPX y TXT, vía correo electrónico, Dropbox, Google Drive, FTP,...
* Usa unidades métricas, imperiales o náuticas

Uso básico
-----------

![BasicAirData-GPSLogger-001][]

Si la ubicación del GPS no está activa en su teléfono, actívela. Luego vaya a un área abierta e inicie GPS Logger.

1. Espere hasta que la aplicación encuentre la señal GPS. Cuando esté disponible, la pestaña __GPS FIX__ comenzará a mostrar las coordenadas. En este punto (cuando sea posible) debe esperar al menos otro minuto antes de continuar con la siguiente fase para permitir que la señal se estabilice
2. Haga clic en el botón __Trackpoints__ del panel inferior para comenzar a registrar puntos de seguimiento. El botón se pondrá rojo. Puede activar y desactivar el proceso de grabación en cualquier momento haciendo clic en dicho botón. Este muestra el número de puntos de seguimiento grabados.
Puede ir a la pestaña __TRACK__ para ver en tiempo real las estadísticas de su viaje.
3. Cuando finalice su viaje, toque dos veces el pequeño __V tick__ ubicado cerca de la esquina superior derecha para finalizar (finalizar) la pista activa.
4. Vaya a la pestaña __TRACKLIST__, donde encontrará la pista que acaba de grabar. Toque en la pista. Aparecerá un menú. Puede elegir compartir la pista de muchas maneras, verla con un visor externo instalado, exportarla a la carpeta /GPSLogger de su teléfono inteligente o eliminarla de la lista de trazas. Los formatos utilizados para la exportación se pueden configurar en la pantalla de configuración

Importando trazas GPX en el Editor OpenStreetMap
--------------------------------------------

Cuando haya terminado de recopilar datos de campo, puede importar las trazas GPX para su uso en JOSM, iD u otro editor de OpenStreetMap.
Puede usar este simple procedimiento en dos pasos:

1. Guarde la traza GPX en su computadora personal en alguna de las siguientes maneras:
* Vaya a la lista de trazas del GPS Logger, toque la pista deseada y luego haga clic en __Export__; el archivo GPX se creará y guardará en la carpeta /GPSLogger de su dispositivo Android (asegúrese de que el formato GPX esté habilitado en la pantalla de configuración). Luego, conecte el teléfono con su ordenador usando un cable USB y mueva (o copie) sus trazas GPX en el ordenador con el Administrador de archivos;
* Como alternativa, puede usar la función __Share__ para enviar el archivo al ordenador (puede hacerlo por correo electrónico, FTP o utilizando diversos servicios en la nube). Las posibilidades de uso compartido dependen de las aplicaciones de terceros instaladas en su dispositivo Android;
2.  Importe la traza GPX en el  Editor de OpenStreetMap: usando las trazas GPX con los editores JOSM e iD es fácil simplemente arrastrando los archivos y soltándolos en la aplicación (o en el caso de iD en la pestaña del navegador).

Documentación oficial (en inglés)
----------------------

- Para mayor información acerca de esta aplicación puede leer [este artículo](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Aquí](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) puede encontrar una Guía de Inicio y una descripción general de la configuración de la aplicación.<br>
- Problemas durante su uso o configuración de GPS Logger? Diríjase a la página de las [Preguntas más frecuentes!](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions)

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg