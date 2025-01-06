---
layout: doc
title: BasicAirData GPS Logger
permalink: /es/mobile-mapping/basicairdata-gpslogger/
lang: es
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Revisado 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger es una aplicación sencilla para registrar tu posición y tu recorrido. Es un rastreador GPS básico y ligero centrado en la precisión, con miras al ahorro de energía. Esta aplicación es muy precisa para determinar tu altitud si habilitas la corrección automática de altitud EGM96 en la configuración. Puedes registrar todos tus viajes, verlos en tu visor externo preferido (debe estar instalado) directamente desde la lista de trazas de la aplicación y compartirlos en formato KML, GPX y TXT de muchas maneras.

La aplicación está disponible para dispositivos Android, es gratuita y de código abierto.

La aplicación se puede descargar gratuitamente desde [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Como alternativa, el APK se puede descargar directamente en el [repositorio de GitHub de GPSLogger](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Características
--------

![BasicAirData-GPSLogger-000][]

* Grabación de trazas - la aplicación no tiene mapas integrados
* Una interfaz de usuario moderna con un tema oscuro de bajo consumo y una interfaz con pestañas
* Grabación en primer plano y en segundo plano (en Android 6+ desactiva la monitorización y optimización de la batería para esta aplicación)
* Creación de marcadores también durante la grabación
* Visualización de la información del GPS
* Corrección manual de la altitud (añadiendo un desplazamiento general)
* Corrección automática de la altitud basada en el modelo geoide terrestre NGA EGM96 (debe estar habilitada en la configuración)
* Estadísticas de traza en tiempo real
* Lista de trazas en la aplicación que muestra la lista de trazas grabadas
* Visualización de tus trazas utilizando cualquier visor KML/GPX instalado, directamente desde la lista de trazas
* Exportación de trazas en la carpeta /GPSLogger de tu dispositivo, en KML, GPX y TXT
* Uso compartido de trazas, en formato KML, GPX y TXT, a través de correo electrónico, Dropbox, Google Drive, FTP, ...
* Utiliza unidades métricas, imperiales o náuticas

Uso básico
-----------

![BasicAirData-GPSLogger-001][]

Si la ubicación GPS no está activa en tu teléfono, actívala. Luego ve a un área abierta e inicia GPS Logger.

1. Espera hasta que la aplicación encuentre la corrección. Cuando esté disponible, la pestaña __GPS FIX__ comenzará a mostrar las coordenadas de la corrección. En este punto (cuando sea posible) debes esperar al menos un minuto más antes de continuar con la siguiente fase para permitir que la señal se estabilice.
2. Haz clic en el botón __Grabar__ del panel inferior para empezar a grabar los puntos de traza. El botón se volverá rojo. Activa y desactiva el proceso de grabación en cualquier momento haciendo clic en ese botón. En la parte superior del botón, la aplicación muestra el número de puntos de traza grabados.
Puedes ir a la pestaña __TRAZA__ para ver en tiempo real las estadísticas de tu viaje.
3. Cuando tu viaje haya terminado, haz clic en el botón __Detener__ para finalizar la traza activa. Aparecerá un cuadro de diálogo, haz clic en __Aceptar__ para confirmar.
4. Ve a la pestaña __LISTA DE TRAZAS__, donde encontrarás la traza que acabas de grabar. Pulsa sobre la traza. Aparecerá un menú. Puedes elegir compartir la traza de muchas maneras, verla utilizando un visor externo instalado, editar los detalles de la traza, exportarla a la carpeta /GPSLogger de tu smartphone o eliminarla de la lista de trazas. Los formatos utilizados para la exportación se pueden configurar en la pantalla de configuración.

Importación de trazas GPX en el editor de OpenStreetMap
--------------------------------------------

Cuando hayas terminado de recopilar datos de campo, puedes importar las trazas GPX para usarlas en JOSM, iD u otro editor de OpenStreetMap.
Puedes utilizar este sencillo procedimiento de 2 pasos:

1. Guarda la traza GPX en tu ordenador personal de una de las siguientes maneras:
* Ve a la lista de trazas de GPS Logger, pulsa sobre la traza deseada y luego haz clic en __Exportar__; el archivo GPX se creará y guardará en la carpeta /GPSLogger de tu dispositivo Android (asegúrate de que el formato GPX esté habilitado en la pantalla de configuración). Luego conecta el teléfono con tu PC mediante un cable USB y mueve (o copia) tus trazas GPX a tu PC utilizando el administrador de archivos;
* Como alternativa, puedes utilizar la función __Compartir__ para enviar el archivo al PC (puedes hacerlo por correo electrónico, FTP o utilizando muchos servicios en la nube). Las posibilidades de compartir dependen de las aplicaciones de terceros instaladas en tu dispositivo Android;
2. Importa la traza GPX a tu editor de OpenStreetMap: utilizar las trazas GPX con los editores JOSM e iD es fácil arrastrando los archivos y soltándolos en la aplicación (o en la pestaña del navegador, para iD).

Documentación oficial
----------------------

- Para obtener más información sobre esta aplicación, puedes leer [este artículo](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Aquí](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) puedes encontrar una guía de inicio rápido y una descripción general de la configuración de la aplicación.<br>
- ¿Problemas durante el uso o la configuración de GPS Logger? Lee la página de [Preguntas frecuentes](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions)

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg