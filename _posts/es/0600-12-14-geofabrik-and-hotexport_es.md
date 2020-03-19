---
layout: doc
title: Uso de Geofabrik y HOT Export
permalink: /es/osm-data/geofabrik-and-hot-export/
lang: es
category: osm-data
---

Usando Geofabrik y HOT Export
================

> Revisado 2016-09-05  

Después de aprender cómo agregar y editar datos en OpenStreetMap (OSM), ahora tal vez le gustaría obtener los datos como respaldo o procesarlos utilizando el software del Sistema de Información Geográfica que es de Código Abierto, como Quantum GIS ([www.qgis. org](http://www.qgis.org)).  

Obtención de datos de OSM en el sitio web de Geofabrik
-------------------------------------

Los datos de OSM se pueden obtener fácilmente descargándolos de [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Los datos se dividen en varias regiones. Indonesia se puede encontrar como parte de Asia haciendo clic en la subregión de Asia en la tabla azul, y luego la página aparecerá así.  

![geofabrik-asia][]

Después de aparecer en la parte superior de la página, vea cómo la subregión se divide en países de Asia. Para obtener los datos, debe hacer clic en el estado indonesio en la tabla azul, y aparecerá así.  

![geofabrik-indonesia][]

Luego, si desea obtener los datos de Indonesia en formato shapefile (.shp), haga clic en el enlace indonesia-latest.shp.zip y el archivo se descargará. Hay varios formatos que se pueden descargar. Un formato popular es shapefile (shp) con puntos, polilínea y capa de polígono.  

Puede verificar la última vez que se actualizaron los datos. Tenga en cuenta que el servidor generalmente actualiza los datos una vez cada 24 horas, por lo que si solo carga datos en OSM, los datos no aparecen automáticamente cuando los descarga, pero debe esperar las últimas actualizaciones del servidor.  

Obtención de datos de OSM en el sitio web de HOT Export Tool
--------------------------------------

El [Equipo Humanitario OpenStreetMap](https://www.hotosm.org/) (HOT) ha creado un servicio en línea que permite a los usuarios crear extractos OSM personalizados en cualquier parte del mundo, seleccionando un área de interés, características del mapa y archivo formatos. En minutos, los datos OSM actualizados se exportan, filtran y convierten. La siguiente sección lo guiará sobre cómo usar la herramienta de exportación. Esta información también se puede encontrar a través de la sección "[Aprender](https://export.hotosm.org/en/v3/learn)" en export.hotosm.org.

![hot-export-tool][]

## Inicio rápido

Cualquiera puede crear una exportación de OpenStreetMap personalizada con la herramienta de exportación, solo registre una cuenta. Puede registrarse con una cuenta de OpenStreetMap desde openstreetmap.org y una dirección de correo electrónico válida, que se utilizará para enviar un enlace a su exportación una vez que se haya completado.

## Identificar área de interés

Hay varias formas de seleccionar un Área de interés (AOI) a través de la Herramienta de exportación. Esto incluye la capacidad de escribir y buscar, especificar las coordenadas de un cuadro delimitador, dibujar un cuadro delimitador, dibujar libremente un polígono, usar la vista actual o cargar un archivo geojson.

![export-tool-create][]

Una vez que haya "iniciado sesión" en la herramienta de exportación HOT, la pestaña "Crear" estará disponible. La pestaña "Crear" es donde configurará su exportación, describiéndola en el lado izquierdo y seleccionando su AOI con el mapa en el lado derecho. 

![export-tool-describe][]

### Barra de búsqueda
Hay 6 formas de definir un AOI para su exportación. El primero y el segundo usan la barra de búsqueda, que puede encontrar un lugar escribiendo su nombre y seleccionándolo de las siguientes opciones, o definiendo las coordenadas del cuadro delimitador. Las coordenadas mínimas X, mínima Y, máxima X y máxima Y (oeste, sur, este, norte) de un país se pueden encontrar [en una lista CSV proporcionada por el Intercambio de datos humanitarios (HDX)](https: // datos. humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitalizar 
La tercera y cuarta forma en que se puede seleccionar un AOI en la Herramienta de exportación es dibujando un cuadro delimitador seleccionando la opción "Cuadro" en la columna de herramientas a la derecha de la pantalla. O puede dibujar libremente un polígono directamente en el mapa seleccionando la herramienta "Dibujar".

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Subir polígono
Las dos últimas formas en que se puede seleccionar un AOI es a través de la herramienta 'Esta vista' en el lado derecho del mapa, que captura la extensión de la vista actual del mapa, o mediante la herramienta 'Importar' que le permite cargar Un polígono de la zona.  

![export-tool-area-view][]
![export-tool-area-import1][]


El polígono importado debe ser un archivo GeoJSON en coordenadas geográficas WGS84. Una de las formas de crear un archivo GeoJSON es usar el sitio geojson.io. Una vez que el área ha sido seleccionada en [geojson.io](http://geojson.io/), copie el texto en el cuadro de la derecha, péguelo en el editor de su elección, como [Atom](https: / /atom.io/) y guarde su archivo GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


El archivo GeoJSON debe editarse ligeramente para que la herramienta de exportación lo acepte. Tenga en cuenta que el archivo no puede ser multipolígonos. En la forma más simple, el archivo solo necesita indicar que es un "tipo: Polígono" y enumerar las coordenadas de los puntos / nodos que identifican el área. El archivo GeoJSON se analizará con éxito por la herramienta y se usará para especificar el AOI.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Seleccionar formatos de archivo

La herramienta permite extraer datos OSM a través de la API Overpass en su formato de archivo binario de búfer de protocolo (PBF) nativo, antes de filtrar los datos para las características del mapa y las etiquetas asociadas especificadas por el usuario. Una vez que los datos se han filtrado, se convierten a los formatos de archivo elegidos por el usuario.  

Actualmente, la herramienta puede convertir datos OSM en Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf y MBTiles .mbtiles. Se debe seleccionar al menos uno de los formatos de archivo para crear la exportación, pero no hay restricciones en cuanto a cuántos se pueden elegir, lo que se puede hacer marcando varias casillas.

![export-tool-file-formats][]


### Shapefile .shp
Los shapefiles son un formato tabular desarrollado por Esri. Son el formato de archivo más popular para datos SIG. Un archivo de forma es en realidad 3-4 archivos individuales, comúnmente agrupados como un archivo ZIP. Los archivos de forma tienen ciertas limitaciones, como el tamaño del archivo, la limitación a 2 gigabytes (GB) y un límite de longitud de nombre de columna de 10 caracteres. Lea más sobre [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) en la sección Aprender.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages almacena datos geoespaciales en una sola base de datos SQLite. Los geopaquetes son muy similares a las bases de datos SQLite habilitadas para Spatialite. Deben ser utilizables en la mayoría de las principales aplicaciones de SIG. Los geopaquetes admiten tamaños de archivo prácticamente ilimitados y números de columnas en tablas, y tienen soporte completo para Unicode. Son especialmente ideales si necesita ejecutar consultas SQL sobre los datos. Lea más sobre [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) en la sección Aprender.

![export-tool-sql][]


### Garmin .img
Un archivo .IMG contiene toda la información necesaria para representar un mapa en un dispositivo móvil GPS Garmin. Tenga en cuenta que el estilo cartográfico .img y las opciones de elementos del mapa no dependen de la selección de elementos enviada a la Herramienta de exportación; en su lugar, se utiliza un estilo predeterminado basado en todos los datos de OSM. Lea más sobre [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) en la sección Aprender.

![export-tool-garmin][]


### Google Earth .kml
El Keyhole Markup Language (KML) es un formato basado en XML para modelar puntos, líneas, polígonos y atributos asociados geográficamente. Google Earth es la plataforma de navegación de vista terrestre más conocida que utiliza KML, que también es la razón por la que se desarrolló. Lea más sobre [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) en la sección Aprender.

![export-tool-google-earth][]


### OSM .pbf
El formato de datos canónico de OSM es un documento XML de nodos, formas y relaciones. El formato binario de búfer de protocolo (PBF) es una representación optimizada de OSM XML, que es más pequeña en el disco y más rápida de leer. Este formato solo es compatible con herramientas específicas de OSM, como el software de edición de OSM. Cada .PBF proporcionado por la herramienta de exportación debe estar referencialmente completo, es decir, cualquier nodo, forma o relación referenciada por una forma o relación aparecerá en el PBF. Obtenga más información sobre [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) en la sección Aprender.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me es una aplicación de navegación y mapas GPS para teléfonos inteligentes y tabletas con Android e iOS, especialmente compatible con mapas y navegación fuera de línea. Lea más sobre [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) en la sección Aprender. Para utilizar una exportación personalizada con Maps.me en Android, siga estos pasos:
Abra Maps.me y navegue a su región de interés.
Acepte el aviso de Maps.me y descargue la región ofrecida
Forzar el cierre de Maps.me
Crear una exportación MWM
Descargue la exportación, descomprímalo y copie el archivo .mwm en su dispositivo
Con el Administrador de archivos de Android, navegue a la ubicación que contiene el archivo .mwm
Mantenga pulsado para seleccionarlo y toque el botón "copiar" o "cortar"
Navegue a "MapsWithMe" y abra la carpeta con el número más alto (por ejemplo, 170917)
Copie / mueva su archivo .mwm a este directorio tocando el botón "pegar"
Elimine el archivo .mwm existente para su región de interés, tomando nota de su nombre de archivo
Cambie el nombre de su archivo .mwm para que coincida con la región que descargó Maps.me (que acaba de eliminar) presionando prolongadamente (para seleccionar) y tocando el botón "más" (3 puntos verticales)
Abra Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd también es una aplicación de navegación GPS y mapas para teléfonos inteligentes Android e iOS, así como tabletas, que soporta notablemente el renderizado, enrutamiento y búsqueda fuera de línea. Lea más sobre la aplicación y sus numerosas características de [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) desde su sitio web principal. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles es un formato de archivo para almacenar mosaicos de mapas en un solo archivo. La herramienta de exportación permite a los usuarios crear MBTiles que contienen mosaicos de OSM, que se pueden utilizar como fuentes de contexto fuera de línea dentro de las aplicaciones que los admiten. Tenga en cuenta que MBTiles extraerá todas las características de OSM en el área de interés seleccionada a través de la Herramienta de exportación, con la pestaña '3 Datos' cambiando automáticamente a una opción de fuente desplegable y rango de zoom, en lugar de la etiqueta de árbol estándar y la selección de características YAML opción. Lea más sobre [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) en la sección Aprender.

![export-tool-mbtiles][]


Se sugieren continuamente formatos de archivo adicionales y se agregan a la Herramienta de exportación. Si hay un formato de archivo que desea que se agregue en el futuro, haga un comentario en el repositorio [GitHub](https://github.com/hotosm/osm-export-tool/issues). Para obtener más información detallada sobre cada tipo de formato de archivo, visite la página "Formatos de archivo" en la sección "[Aprender](https://export.hotosm.org/en/v3/learn)" en el sitio web de la herramienta.



## Personalizar características del mapa

La herramienta permite al usuario personalizar los datos seleccionados dentro del área de interés definida. Los datos de OSM se definen mediante el uso de filtros de etiquetas y selecciones de teclas, con el árbol de etiquetas o el formulario YAML. El árbol de etiquetas es para casos de uso común, presentando un conjunto curado de filtros y selecciones, donde la configuración YAML proporciona un control completo sobre los filtros y las selecciones, utilizando una definición de filtro similar a SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM es una base de datos global abierta de características geográficas etiquetadas, con tres tipos de elementos:
Nodos, que representan un punto en la superficie de la tierra.
Formas, que son conjuntos de nodos que pueden formar líneas o polígonos
Relaciones, que son conjuntos de nodos, formas u otras relaciones

Cada uno de estos elementos puede tener cualquier número de etiquetas clave = valor. Por ejemplo, una oficina postal puede representarse de una manera con las etiquetas building = yes y amenity = post_office. Veamos cómo se pueden definir estas etiquetas en la herramienta de exportación utilizando el árbol de etiquetas y el formulario YAML para filtrar los datos de OSM.

### Árbol de etiquetas
Tag Tree es la forma más sencilla de comenzar a seleccionar funciones, simplemente marcando las casillas de verificación principales o secundarias deseadas. Tenga en cuenta que al seleccionar una casilla de verificación principal se agregarán etiquetas clave = valor adicionales asociadas al tema, así como las casillas de verificación secundarias debajo de él. Cada casilla de verificación principal tiene una consulta diferente para filtrar datos, por lo que se recomienda explorar la sintaxis de cada tema al pasar el cursor sobre la casilla de verificación, que proporcionará un cuadro de información a la derecha. 

![export-tool-treetag-sql][]


Por ejemplo, al seleccionar la casilla de verificación principal 'Emergencia', se seleccionarán automáticamente las casillas secundarias 'Estación de policía', 'Estación de ambulancia' y 'Estación de bomberos' debajo de ella, pero además de esto, también seleccionará todas las etiquetas donde emergency=yes, amenity=police and amenity=fire_station en la siguiente consulta SQL:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Las casillas de verificación principales no siempre representan lo que está disponible como elementos secundarios a continuación, para tratar de tener en cuenta todas las etiquetas posibles asociadas a un tema. Las etiquetas OSM evolucionan continuamente y queremos asegurarnos de que la herramienta pueda adaptarse a estos cambios. Solo las etiquetas de clave = valor más utilizadas se representan como casillas de verificación secundarias, y las casillas de verificación principales se usan para tratar de abarcar aquellas que no se usan con tanta frecuencia, pero que pertenecen a un tema. Si tiene sugerencias para modificaciones a estos temas y etiquetas, comente la [hoja de cálculo](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) que se utiliza para completar el Árbol de etiquetas, y intentaremos incorporarlo cuando sea apropiado.

![export-tool-treetag-spreadsheet][]


### Formulario YAML
El uso de una configuración YAML proporciona un control completo sobre la aplicación de filtros a los datos de OSM, al usar una definición de filtro similar a SQL para aplicar etiquetas clave = valor. Tenga en cuenta que el árbol de etiquetas también genera sintaxis en el formulario YAML, por lo que las casillas de verificación principales y secundarias seleccionadas se aplicarán automáticamente en el cuadro YAML. Esto actúa como un punto de partida para la consulta que se puede editar más. 

![export-tool-treetag-yaml][]


El uso de YAML fue elegido debido a su simplicidad y compatibilidad con SQL. El formato de selección de características YAML es similar a los archivos de estilo utilizados por programas como osm2pgsql e imposm. Es sensible al espacio en blanco, con cada elemento hijo sangrado debajo de su elemento padre, y precedido por un guión. Este guión debe tener un espacio después. Aquí hay un ejemplo básico de una selección de características con 3 temas, edificios, vías fluviales y hospitales:

![export-tool-yaml-code1][]


YAML tiene temas y dos estructuras de datos, mapeo y listas
El tema en el ejemplo anterior es: edificios
Las asignaciones en el ejemplo anterior son: tipos y seleccionar 
Las listas en el ejemplo anterior son: elementos secundarios de select y types

YAML: Temas
Los temas son las claves de nivel superior en el documento YAML, con caracteres válidos que incluyen letras, números y guiones bajos. 

YAML: Tipos de geometría
Los valores de la lista bajo los tipos de mapeo pueden ser uno o más de "puntos", "líneas", "polígonos". Si se omite la clave de tipos, los tres tipos de geometría se incluirán en el tema.

YAML: Selecciones de columna
La lista de elementos bajo la tecla de selección de mapeo determina las columnas para cada tema. El siguiente ejemplo completará las columnas "nombre" y "amenidad" con sus valores de OSM:

![export-tool-yaml-code2][]


YAML: Filtros
Los filtros están debajo de where: clave en cada tema. Definen qué subconjunto de características de OSM pertenece a ese tema. El siguiente ejemplo filtrará el tema a solo características donde la clave natural tiene el valor de vía fluvial:

![export-tool-yaml-code3][]


Tenga en cuenta que casi siempre es necesario tener algún tipo de filtrado, de lo contrario, el tema simplemente incluirá todas las características de OSM para los tipos de geometría dados. Se especifica un filtro utilizando una sintaxis similar a SQL, con palabras clave válidas NO ES NULO, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Presets JOSM
Las versiones anteriores de la herramienta de exportación usaban archivos .XML preestablecidos de JOSM para definir las selecciones de características. La nueva versión usa YAML, ya que es más flexible en la forma en que transforma los datos de OSM. Sin embargo, la nueva Herramienta de exportación puede ayudar a convertir los ajustes preestablecidos JOSM en configuraciones YAML, seleccionando el botón "Cargar desde el preestablecimiento JOSM .XML". Tenga en cuenta que si el valor predeterminado es más complejo, es posible que deba escribirse como una nueva configuración de YAML basada en los elementos del "elemento" contenidos en el XML.

![export-tool-load-preset][]



### Configuraciones

Las configuraciones de YAML se pueden definir y guardar para su uso futuro a través de la página "Configuraciones". Es útil crear una configuración para un proyecto, que luego puede usarse en todas las exportaciones relacionadas con ese proyecto. Asigne a la configuración un "nombre" y una "descripción" para que otros usuarios puedan descubrirla. Desmarcar la casilla de verificación "Público" hará que la configuración sea visible solo para el usuario. 

![export-tool-configuration-saved][]


Tenga en cuenta que las configuraciones se pueden editar, lo cual es útil para desarrollar una selección de características durante el curso de un proyecto. Las configuraciones YAML guardadas se pueden seleccionar a través de la opción "Configuración almacenada" en la pestaña "3 Datos" al crear una exportación. Use la barra de búsqueda para buscar configuraciones relacionadas con su proyecto.

![export-tool-configuration-stored][]


Para obtener más información detallada sobre las selecciones de funciones y YAML, visite la sección 'Seleccionar funciones' y 'Especificación YAML' en la sección '[Aprender](https://export.hotosm.org/en/v3/learn)' de la herramienta sitio web. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




