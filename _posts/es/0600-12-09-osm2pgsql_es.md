---
layout: doc
title: osm2pgsql
permalink: /es/osm-data/osm2pgsql/
lang: es
category: osm-data
---

osm2pgsql
==========


En el capítulo anterior vimos cómo configurar Postgresql con PostGIS en Windows y cómo configurar una base de datos y cargarla con datos de archivos de forma. Para obtener los datos de OpenStreetMap en una base de datos, puede obtener los datos en formato shapefile y usar el cargador de archivos shapefile, pero esto puede dejarlo sin todos los datos que desea. En este capítulo aprenderemos cómo usar **osm2pgsql**, un programa de línea de comandos para cargar datos OSM sin procesar en una base de datos PostGIS.  

Revisaremos los pasos para configurar osm2pgsql en Windows, aunque los pasos deberían ser más o menos los mismos en otro sistema operativo, suponiendo que haya configurado sus bases de datos PostGIS correctamente.  

Obtener osm2pgsql
-------------

Para descargar la versión para Windows de osm2pgsql, navegue su navegador web a <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Descargue el archivo llamado **osm2pgsql.zip**  
- Descomprima el archivo en su sistema. Debe mover la carpeta descomprimida a una ubicación donde no la moverá más adelante, porque necesitamos agregar su ubicación a la ruta del sistema.  

![unzip it][]

- En el directorio osm2pgsql que descomprimiste hay un archivo llamado osm2pgsql.exe. Este es un programa que ejecutaremos para importar los datos, pero para que Windows los encuentre, necesitamos agregar su ubicación a la ruta del sistema. Haga clic en el menú Inicio y escriba "ruta del sistema".  

![system path][]

- Debería ver una opción llamada "Editar las variables de entorno del sistema". Haz click en eso.  

![edit variables][]

- Haga clic en el botón llamado "**Variables de entorno**"  

![env variables][]

- En la parte inferior, busque la variable llamada "**Ruta**" y haga clic en "**Editar...**"  

![find path][]

- Debe agregar el directorio donde se encuentra osm2pgsql.exe a la variable Ruta.  

![edit path][]

- Agregue un punto y coma al final del directorio anterior y luego escriba la ruta completa del directorio osm2pgsql.exe. Por ejemplo, si coloca la carpeta **osm2pgsql** directamente en el directorio **C:\\**, la ruta sería:  
	
**C:\osm2pgsql\Win32**  

- Haga clic en Aceptar varias veces para guardar la nueva configuración.  
- **osm2pgsql** debería estar funcionando ahora. Vamos a verlo  
- Abra el símbolo del sistema de Windows. Puede hacer esto haciendo clic en el menú Inicio y escribiendo "**cmd**". Aparecerá la aplicación del símbolo del sistema y puede presionar Entrar o hacer clic en ella.  

![cmd][]

- En la ventana de comando negra que se abre, escriba:  

**osm2pgsql**

- Si todo funciona correctamente, debería recibir un mensaje como este:  

![osm2pgsql test][]

- Si no ve un mensaje de error como este, y dice que no puede encontrar la aplicación **osm2pgsql**, es posible que haya ingresado la variable Path incorrectamente.  

Obteniendo datos sin procesar de OSM
---------------------
Antes de que podamos ejecutar **osm2pgsql** necesitamos tener algunos datos OSM sin procesar para importar a una base de datos. Si aún no tiene un archivo **.osm** que pueda usar, intente descargar un archivo desde <https://mapzen.com/data/metro-extracts/>. Este sitio alberga muchos extractos de OSM para diferentes ciudades. Encuentre una ciudad para importar y descargue el archivo PBF. Los archivos PBF son versiones comprimidas de los archivos normales **. Osm **. Puede usar cualquiera de los servicios de extracción enumerados en el capítulo sobre [obtención de datos](/es​/osm-data/getting-data), si desea los datos en bruto para otra área.  

Obtenga el archivo de estilo
------------------
**osm2pgsql** requiere el uso de un archivo de estilo personalizado para definir qué etiquetas se incluyen en la base de datos durante la importación. Puede descargar el archivo de estilo predeterminado [aquí](/files/default.style).  

Importando Datos
-------------------
Abra PgAdmin III y cree una nueva base de datos llamada **osm**, tal como lo hizo en el capítulo anterior. Para importar los datos, ejecutaremos el programa **osm2pgsql** a través de la línea de comando. 

- Haga clic en el menú Inicio y escriba "cmd" e Intro para abrir el símbolo del sistema.  

![command prompt][]

Aquí ejecutaremos la aplicación **osm2pgsql** con varias opciones. Necesitamos al menos suministrarlo con:  

- La ubicación del Archivo de Datos OSM  
- El nombre de la base de datos y el nombre de usuario de la base de datos.  
- El archivo de estilo que define qué etiquetas OSM se importarán a la base de datos  

Hemos colocado nuestro archivo OSM en el directorio **C:\\** para facilitar esto.  

- Escriba el siguiente comando, reemplazando la ubicación del archivo OSM y el archivo de estilo con el suyo.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Presione Intro. Si todo va bien, el proceso debería comenzar a ejecutarse. Puede llevar algunos minutos cargar todos los datos en la base de datos.  

![osm2pgsql output][]

- Si su archivo OSM sin formato es grande, es posible que deba agregar memoria adicional al proceso de importación osm2pgsql. Para hacer esto, agregue lo siguiente al comando:  

      --cache 600

Probándolo
-----------

Podemos probar que la importación fue exitosa y ver los datos en nuestra base de datos usando QGIS.  

- Abra QGIS y haga clic en el botón "Agregar capas PostGIS". ! [qgis agregar botón postgis] [] {: height = "24px"}

- En "Conexiones" en la parte superior, haga clic en "**Nueva**".  
- Dé un nombre a la nueva conexión. En base de datos, escriba **osm** (el nombre de su base de datos).  
- Ingrese el nombre de usuario postgres y su contraseña a continuación.  

![connection settings][]

- Haga clic en Aceptar para guardar la configuración de conexión. Luego haga clic en "Conectar" para conectarse a su servidor PostgreSQL.  
- Haga clic al lado de "público" para ver todas las capas (tablas) en su base de datos. Observe que osm2pgsql crea una tabla separada para diferentes tipos de objetos: puntos, líneas y polígonos. También crea una tabla de carreteras, que contiene solo carreteras principales.  

![postgis layers][]

- Seleccione una o más de las capas y haga clic en "Agregar". Si se le solicita, elija WGS84 como CRS.  
- Si todo tiene éxito, verá las capas que seleccionó en QGIS.  

![osm in qgis][]

> Si observa las tablas de atributos de las capas, verá que los atributos se asignan a las etiquetas OSM. Las etiquetas específicas que se importan se definen durante el proceso de importación ** osm2pgsql **. Para agregar etiquetas específicas que no están incluidas de manera predeterminada, puede editar el archivo * style * al que hace referencia osm2pgsql para definir el esquema de datos.  


Resumen
-------

Cuando desee importar datos de OpenStreetMap a su propia base de datos, **osm2pgsql** es una gran herramienta. Puede ser extremadamente útil cuando necesita poder obtener los datos OSM más actualizados y personalizar los atributos que desea, o cuando trabaja en proyectos más complejos.  

Recientemente se ha desarrollado otra herramienta de importación, llamada [imposm](http://imposm.org/), y ofrece algo de velocidad y otras mejoras sobre osm2pgsql, aunque a partir de este escrito carece de otras funciones clave que se prometen en imposom versión 3 .  

Para obtener más información sobre osm2pgsql, consulte el Wiki de OSM - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


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
