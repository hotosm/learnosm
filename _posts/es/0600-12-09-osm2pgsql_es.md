---
layout: doc
title: osm2pgsql
permalink: /es/osm-data/osm2pgsql/
lang: es
category: osm-data
---

osm2pgsql
==========


En el capítulo anterior vimos cómo configurar Postgresql con PostGIS en Windows y cómo configurar una base de datos y cargarla con datos de archivos shapefile. Para obtener los datos de OpenStreetMap en una base de datos, podrías obtener los datos en formato shapefile y usar el cargador de archivos shapefile, pero esto puede dejarte sin todos los datos que deseas. En este capítulo aprenderemos cómo usar **osm2pgsql**, un programa de línea de comandos para cargar datos OSM sin procesar en una base de datos PostGIS.  

Revisaremos los pasos para configurar osm2pgsql en Windows, aunque los pasos deberían ser más o menos los mismos en otro sistema operativo, suponiendo que hayas configurado tus bases de datos PostGIS correctamente.  

Obtener osm2pgsql
-------------

Para descargar la versión para Windows de osm2pgsql, navega con tu navegador web a <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Descarga el archivo llamado **osm2pgsql.zip**.  
- Descomprime el archivo en tu sistema. Debes mover la carpeta descomprimida a una ubicación donde no la moverás más adelante, porque necesitamos agregar su ubicación a la ruta del sistema.  

![unzip it][]

- En el directorio osm2pgsql que descomprimiste hay un archivo llamado osm2pgsql.exe. Este es un programa que ejecutaremos para importar los datos, pero para que Windows lo encuentre, necesitamos agregar su ubicación a la ruta del sistema. Haz clic en el menú Inicio y escribe "ruta del sistema".  

![system path][]

- Deberías ver una opción llamada "Editar las variables de entorno del sistema". Haz clic en ella.  

![edit variables][]

- Haz clic en el botón llamado "**Variables de entorno**".  

![env variables][]

- En la parte inferior, busca la variable llamada "**Ruta**" y haz clic en "**Editar...**".  

![find path][]

- Debes agregar el directorio donde se encuentra osm2pgsql.exe a la variable Ruta.  

![edit path][]

- Agrega un punto y coma al final del directorio anterior y luego escribe la ruta completa del directorio osm2pgsql.exe. Por ejemplo, si colocas la carpeta **osm2pgsql** directamente en el directorio **C:\\**, la ruta sería:  
	
**C:\osm2pgsql\Win32**  

- Haz clic en Aceptar varias veces para guardar la nueva configuración.  
- **osm2pgsql** debería estar funcionando ahora. Vamos a comprobarlo.  
- Abre el símbolo del sistema de Windows. Puedes hacerlo haciendo clic en el menú Inicio y escribiendo "**cmd**". Aparecerá la aplicación del símbolo del sistema y puedes presionar Intro o hacer clic en ella.  

![cmd][]

- En la ventana de comandos negra que se abre, escribe:  

**osm2pgsql**

- Si todo funciona correctamente, deberías recibir un mensaje como este:  

![osm2pgsql test][]

- Si no ves un mensaje de error como este y dice que no puede encontrar la aplicación **osm2pgsql**, es posible que hayas ingresado la variable Path incorrectamente.  

Obteniendo datos sin procesar de OSM
---------------------
Antes de que podamos ejecutar **osm2pgsql**, necesitamos tener algunos datos OSM sin procesar para importarlos a una base de datos. Si aún no tienes un archivo **.osm** que puedas usar, intenta descargar un archivo desde <https://download.bbbike.org/osm/bbbike/>. Este sitio alberga muchos extractos de OSM para diferentes ciudades. Busca una ciudad para importar y descarga el archivo PBF correspondiente. Los archivos PBF son versiones comprimidas de los archivos **.osm** normales. Puedes utilizar cualquiera de los servicios de extracción enumerados en el capítulo sobre [obtener datos](/es/osm-data/getting-data) si deseas los datos sin procesar para otra área.  

Obtener el archivo de estilo
------------------
**osm2pgsql** requiere el uso de un archivo de estilo personalizado para definir qué etiquetas se incluyen en la base de datos durante la importación. Puedes descargar el archivo de estilo predeterminado [aquí](/files/default.style).  

Importar los datos
-------------------
Abre PgAdmin III y crea una nueva base de datos llamada **osm**, tal como lo hiciste en el capítulo anterior. Para importar los datos, ejecutaremos el programa **osm2pgsql** a través de la línea de comandos. 

- Haz clic en el menú Inicio, escribe "cmd" y presiona Intro para abrir el símbolo del sistema.  

![command prompt][]

Aquí ejecutaremos la aplicación **osm2pgsql** con varias opciones. Necesitamos al menos proporcionarle:  

- La ubicación del archivo de datos OSM  
- El nombre de la base de datos y el nombre de usuario de la base de datos.  
- El archivo de estilo que define qué etiquetas OSM se importarán a la base de datos  

Hemos colocado nuestro archivo OSM en el directorio **C:\\** para facilitar esto.  

- Escribe el siguiente comando, reemplazando la ubicación del archivo OSM y el archivo de estilo con los tuyos.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Presiona Intro. Si todo va bien, el proceso debería comenzar a ejecutarse. Puede llevar algunos minutos que todos los datos se carguen en la base de datos.  

![osm2pgsql output][]

- Si tu archivo OSM sin formato es grande, es posible que debas agregar memoria adicional al proceso de importación de osm2pgsql. Para hacerlo, agrega lo siguiente al comando:  

      --cache 600

Probarlo
-----------

Podemos probar que la importación fue exitosa y ver los datos en nuestra base de datos usando QGIS.  

- Abre QGIS y haz clic en el botón "Agregar capas PostGIS". ![qgis add postgis button][]{: height="24px"}

- En "Conexiones", en la parte superior, haz clic en "**Nueva**".  
- Dale un nombre a la nueva conexión. En "Base de datos", escribe **osm** (el nombre de tu base de datos).  
- Ingresa el nombre de usuario postgres y tu contraseña a continuación.  

![connection settings][]

- Haz clic en Aceptar para guardar la configuración de conexión. Luego, haz clic en "Conectar" para conectarte a tu servidor PostgreSQL.  
- Haz clic junto a "public" para ver todas las capas (tablas) de tu base de datos. Observa que osm2pgsql crea una tabla separada para diferentes tipos de objetos: puntos, líneas y polígonos. También crea una tabla de carreteras, que contiene solo las carreteras principales.  

![postgis layers][]

- Selecciona una o más de las capas y haz clic en "Agregar". Si se te solicita, elige WGS84 como CRS.  
- Si todo tiene éxito, verás las capas que seleccionaste en QGIS.  

![osm in qgis][]



Resumen
-------

Cuando desees importar datos de OpenStreetMap a tu propia base de datos, **osm2pgsql** es una gran herramienta. Puede ser extremadamente útil cuando necesitas poder obtener los datos OSM más actualizados y personalizar los atributos que deseas, o cuando trabajas en proyectos más complejos.  

Recientemente se ha desarrollado otra herramienta de importación, llamada [imposm](http://imposm.org/), que ofrece algo de velocidad y otras mejoras sobre osm2pgsql, aunque a partir de este escrito carece de otras funciones clave que se prometen en imposom versión 3.  

Para obtener más información sobre osm2pgsql, consulta la wiki de OSM: <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
