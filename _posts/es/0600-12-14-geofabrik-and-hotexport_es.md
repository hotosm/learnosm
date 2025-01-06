---
layout: doc
title: Uso de Geofabrik y HOT Export
permalink: /es/osm-data/geofabrik-and-hot-export/
lang: es
category: osm-data
---

Usando Geofabrik y HOT Export
================


Después de aprender a agregar y editar datos en OpenStreetMap (OSM), ahora tal vez te gustaría obtener los datos como respaldo o procesarlos utilizando *software* de Sistema de Información Geográfica (SIG) de código abierto, como Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

Obtención de datos de OSM en el sitio web de Geofabrik
-------------------------------------

Los datos de OSM se pueden obtener fácilmente descargándolos desde [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/).

![download-geofabrik][]

Los datos se dividen en varias regiones. Indonesia se puede encontrar como parte de Asia haciendo clic en la subregión de Asia en la tabla azul, y luego la página se verá así.  

![geofabrik-asia][]

Tras aparecer en la parte superior de la página, observa cómo la subregión se divide en países de Asia. Para obtener los datos, debes hacer clic en el estado de Indonesia en la tabla azul, y se verá así.  

![geofabrik-indonesia][]

Luego, si quieres obtener los datos de Indonesia en formato shapefile (.shp), haz clic en el enlace indonesia-latest.shp.zip y el archivo se descargará. Hay varios formatos que se pueden descargar. Un formato popular es shapefile (shp) con capas de puntos, polilíneas y polígonos.  

Puedes comprobar la última vez que se actualizaron los datos. Ten en cuenta que el servidor suele actualizar los datos una vez cada 24 horas, por lo que, si acabas de subir datos a OSM, los datos no aparecerán automáticamente cuando los descargues, sino que tendrás que esperar a las últimas actualizaciones del servidor.  

Obtención de datos de OSM en el sitio web de HOT Export Tool
--------------------------------------

El [Equipo Humanitario de OpenStreetMap](https://www.hotosm.org/) (HOT) ha creado un servicio en línea que permite a los usuarios crear extractos OSM personalizados en cualquier parte del mundo seleccionando un área de interés, características del mapa y formatos de archivo. En cuestión de minutos, los datos OSM actualizados se exportan, filtran y convierten. La siguiente sección te guiará sobre cómo usar la Herramienta de exportación. Esta información también se puede encontrar en la sección "[Aprender](https://export.hotosm.org/es/v3/learn)" de export.hotosm.org.

![hot-export-tool][]

## Inicio rápido

Cualquiera puede crear una exportación de OpenStreetMap personalizada con la Herramienta de exportación; solo tienes que registrar una cuenta. Puedes registrarte con una cuenta de OpenStreetMap de openstreetmap.org y una dirección de correo electrónico válida, que se utilizará para enviarte un enlace a tu exportación una vez que se haya completado.

## Identificar el área de interés

Hay varias formas de seleccionar un área de interés (AOI) mediante la Herramienta de exportación. Esto incluye la posibilidad de escribir y buscar, especificar las coordenadas de un cuadro delimitador, dibujar un cuadro delimitador, dibujar libremente un polígono, usar la vista actual o subir un archivo GeoJSON.

![export-tool-create][]

Una vez que hayas "iniciado sesión" en la Herramienta de exportación HOT, la pestaña "Crear" estará disponible. La pestaña "Crear" es donde configurarás tu exportación, describiéndola en el lado izquierdo y seleccionando tu AOI con el mapa en el lado derecho. 

![export-tool-describe][]

### Barra de búsqueda
Hay seis formas de definir un AOI para tu exportación. La primera y la segunda utilizan la barra de búsqueda, que puede encontrar un lugar escribiendo su nombre y seleccionándolo de las opciones siguientes, o definiendo las coordenadas del cuadro delimitador. Las coordenadas mínimas X, mínimas Y, máximas X y máximas Y (oeste, sur, este, norte) de un país se pueden encontrar [en una lista CSV proporcionada por el Intercambio de Datos Humanitarios (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitalizar 
La tercera y la cuarta forma de seleccionar un AOI en la Herramienta de exportación es dibujando un cuadro delimitador; para ello, selecciona la opción "Cuadro" en la columna de herramientas de la derecha de la pantalla. O puedes dibujar libremente un polígono directamente en el mapa seleccionando la herramienta "Dibujar".

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Subir polígono
Las dos últimas formas de seleccionar un AOI son mediante la herramienta "Esta vista" en el lado derecho del mapa, que captura la extensión de la vista actual del mapa, o mediante la herramienta "Importar", que te permite subir un polígono del área.  

![export-tool-area-view][]
![export-tool-area-import1][]


El polígono importado debe ser un archivo GeoJSON en coordenadas geográficas WGS84. Una de las formas de crear un archivo GeoJSON es usar el sitio geojson.io. Una vez que hayas seleccionado el área en [geojson.io](http://geojson.io/), copia el texto del cuadro de la derecha, pégalo en el editor que prefieras, como [Atom](https://atom.io/), y guarda tu archivo GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Debes editar ligeramente el archivo GeoJSON para que la Herramienta de exportación lo acepte. Ten en cuenta que el archivo no puede ser multipolígonos. En su forma más simple, el archivo solo necesita indicar que es un "tipo: Polígono" y enumerar las coordenadas de los puntos/nodos que identifican el área. La herramienta analizará correctamente el archivo GeoJSON y lo utilizará para especificar el AOI.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Seleccionar formatos de archivo

La herramienta permite extraer datos OSM a través de la API Overpass en su formato de archivo binario de búfer de protocolo (PBF) nativo, antes de filtrar los datos para las características del mapa y las etiquetas asociadas especificadas por el usuario. Una vez que se han filtrado los datos, se convierten a los formatos de archivo elegidos por el usuario.  

Actualmente, la herramienta puede convertir datos OSM a Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf y MBTiles .mbtiles. Debes seleccionar al menos uno de los formatos de archivo para crear la exportación, pero no hay restricciones en cuanto a cuántos puedes elegir, lo que puedes hacer marcando varias casillas.

![export-tool-file-formats][]


### Shapefile .shp
Los shapefiles son un formato tabular desarrollado por Esri. Son el formato de archivo más popular para datos SIG. Un shapefile en realidad son 3-4 archivos individuales, normalmente agrupados como un archivo ZIP. Los shapefiles tienen ciertas limitaciones, como el tamaño del archivo, que está limitado a 2 gigabytes (GB), y un límite de longitud del nombre de columna de 10 caracteres. Puedes leer más sobre [Shapefiles .shp](https://export.hotosm.org/es/v3/learn/export_formats#shp) en la sección Aprender.

![export-tool-shapefile][]


### GeoPackage .gpkg
Los GeoPackages OGC almacenan datos geoespaciales en una sola base de datos SQLite. Los GeoPackages son muy similares a las bases de datos SQLite habilitadas para Spatialite. Deberían poder utilizarse en la mayoría de las principales aplicaciones SIG. Los GeoPackages admiten tamaños de archivo y números de columnas en tablas prácticamente ilimitados, y son totalmente compatibles con Unicode. Son especialmente ideales si necesitas ejecutar consultas SQL sobre los datos. Puedes leer más sobre [GeoPackages .gpkg](https://export.hotosm.org/es/v3/learn/export_formats#gkpg) en la sección Aprender.

![export-tool-sql][]


### Garmin .img
Un archivo .IMG contiene toda la información necesaria para representar un mapa en un dispositivo móvil GPS Garmin. Ten en cuenta que el estilo cartográfico .img y las opciones de elementos del mapa no dependen de la selección de elementos enviados a la Herramienta de exportación; en su lugar, se utiliza un estilo predeterminado basado en todos los datos de OSM. Puedes leer más sobre [Garmin .img](https://export.hotosm.org/es/v3/learn/export_formats#img) en la sección Aprender.

![export-tool-garmin][]


### Google Earth .kml
El Lenguaje de Marcado Keyhole (KML) es un formato basado en XML para modelar puntos, líneas, polígonos y atributos asociados geográficamente. Google Earth es la plataforma de navegación de vista terrestre más conocida que utiliza KML, que también es la razón por la que se desarrolló. Puedes leer más sobre [Google Earth .kml](https://export.hotosm.org/es/v3/learn/export_formats#kml) en la sección Aprender.

![export-tool-google-earth][]


### OSM .pbf
El formato de datos canónico de OSM es un documento XML de nodos, vías y relaciones. El formato binario de búfer de protocolo (PBF) es una representación optimizada de OSM XML, que ocupa menos espacio en el disco y se lee más rápidamente. Este formato solo es compatible con herramientas específicas de OSM, como el *software* de edición de OSM. Cada .PBF proporcionado por la herramienta de exportación debería ser referencialmente completo, es decir, cualquier nodo, vía o relación a la que haga referencia una vía o relación aparecerá en el PBF. Obtén más información sobre [OSM .pbf](https://export.hotosm.org/es/v3/learn/export_formats#pbf) en la sección Aprender.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me es una aplicación de navegación y mapas GPS para teléfonos inteligentes y tabletas con Android e iOS, especialmente compatible con mapas y navegación sin conexión. Puedes leer más sobre [MAPS.ME .mwm](https://export.hotosm.org/es/v3/learn/export_formats#mwm) en la sección Aprender. Para utilizar una exportación personalizada con Maps.me en Android, sigue estos pasos:
- Abre Maps.me y navega a tu región de interés.
- Acepta la solicitud de Maps.me y descarga la región ofrecida.
- Fuerza el cierre de Maps.me.
- Crea una exportación MWM.
- Descarga la exportación, descomprímela y copia el archivo .mwm en tu dispositivo.
- Con el administrador de archivos de Android, navega a la ubicación que contiene el archivo .mwm.
- Mantén pulsado para seleccionarlo y toca el botón "copiar" o "cortar".
- Navega a "MapsWithMe" y abre la carpeta con el número más alto (por ejemplo, 170917).
- Copia/mueve tu archivo .mwm a este directorio tocando el botón "pegar".
- Elimina el archivo .mwm existente para tu región de interés, tomando nota de su nombre de archivo.
- Cambia el nombre de tu archivo .mwm para que coincida con la región que descargaste de Maps.me (que acabas de eliminar) pulsando prolongadamente (para seleccionarlo) y tocando el botón "más" (tres puntos verticales).
- Abre Maps.me.

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd también es una aplicación de navegación y mapas GPS para teléfonos inteligentes Android e iOS, así como tabletas, que admite, en particular, la representación, el enrutamiento y la búsqueda sin conexión. Puedes leer más sobre la aplicación y sus numerosas funciones de [OsmAnd .obf](https://export.hotosm.org/es/v3/learn/export_formats#obf) desde su sitio web principal. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles es un formato de archivo para almacenar teselas de mapas en un solo archivo. La Herramienta de exportación permite a los usuarios crear MBTiles que contienen teselas de OSM, que se pueden utilizar como fuentes de contexto sin conexión dentro de las aplicaciones que las admiten. Ten en cuenta que MBTiles extraerá todas las características de OSM en el área de interés seleccionada mediante la Herramienta de exportación, y la pestaña "3 Datos" cambiará automáticamente a una opción de fuente desplegable y un rango de zoom, en lugar de la opción estándar de selección de características de árbol de etiquetas y YAML. Puedes leer más sobre [MBTiles .mbtiles](https://export.hotosm.org/es/v3/learn/export_formats#mbtiles) en la sección Aprender.

![export-tool-mbtiles][]


Se sugieren continuamente nuevos formatos de archivo y se añaden a la Herramienta de exportación. Si hay un formato de archivo que te gustaría que se añadiera en el futuro, haz un comentario en el repositorio de [GitHub](https://github.com/hotosm/osm-export-tool/issues). Para obtener información más detallada sobre cada tipo de formato de archivo, visita la página "Formatos de archivo" de la sección "[Aprender](https://export.hotosm.org/es/v3/learn)" del sitio web de la herramienta.



## Personalizar las características del mapa

La herramienta permite al usuario personalizar los datos seleccionados dentro del área de interés definida. Los datos de OSM se definen mediante el uso de filtros de etiquetas y selecciones de claves, con el árbol de etiquetas o el formulario YAML. El árbol de etiquetas es para casos de uso comunes y presenta un conjunto seleccionado de filtros y selecciones, mientras que la configuración YAML proporciona un control completo sobre los filtros y las selecciones utilizando una definición de filtro similar a SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM es una base de datos global abierta de características geográficas etiquetadas, con tres tipos de elementos:
- Nodos, que representan un punto en la superficie de la tierra.
- Vías, que son conjuntos de nodos que pueden formar líneas o polígonos.
- Relaciones, que son conjuntos de nodos, vías u otras relaciones.

Cada uno de estos elementos puede tener cualquier número de etiquetas clave=valor. Por ejemplo, una oficina de correos puede representarse mediante una vía con las etiquetas building=yes y amenity=post_office. Veamos cómo se pueden definir estas etiquetas en la Herramienta de exportación utilizando el árbol de etiquetas y el formulario YAML para filtrar los datos de OSM.

### Árbol de etiquetas
El árbol de etiquetas es la forma más sencilla de empezar a seleccionar características; solo tienes que marcar las casillas de verificación principales o secundarias que desees. Ten en cuenta que, al seleccionar una casilla de verificación principal, se añadirán etiquetas clave=valor adicionales asociadas al tema, así como las casillas de verificación secundarias que se encuentran debajo. Cada casilla de verificación principal tiene una consulta diferente para filtrar datos, por lo que se recomienda encarecidamente explorar la sintaxis de cada tema pasando el cursor sobre la casilla de verificación, lo que proporcionará un cuadro de información a la derecha. 

![export-tool-treetag-sql][]


Por ejemplo, al seleccionar la casilla de verificación principal "Emergencia", se seleccionarán automáticamente las casillas de verificación secundarias "Estación de policía", "Estación de ambulancia" y "Estación de bomberos" que se encuentran debajo, pero, además, también seleccionará todas las etiquetas donde emergency=yes, amenity=police y amenity=fire_station en la siguiente consulta SQL:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Las casillas de verificación principales no siempre representan lo que está disponible como elementos secundarios a continuación, para intentar tener en cuenta todas las etiquetas posibles asociadas a un tema. Las etiquetas OSM evolucionan continuamente y queremos asegurarnos de que la herramienta pueda adaptarse a estos cambios. Solo las etiquetas clave=valor más utilizadas se representan como casillas de verificación secundarias, y las casillas de verificación principales se utilizan para intentar abarcar aquellas que no se utilizan con tanta frecuencia, pero que pertenecen a un tema. Si tienes sugerencias para modificar estos temas y etiquetas, comenta en la [hoja de cálculo](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) que se utiliza para rellenar el árbol de etiquetas e intentaremos incorporarlo cuando sea apropiado.

![export-tool-treetag-spreadsheet][]


### Formulario YAML
El uso de una configuración YAML proporciona un control completo sobre la aplicación de filtros a los datos de OSM al utilizar una definición de filtro similar a SQL para aplicar etiquetas clave=valor. Ten en cuenta que el árbol de etiquetas también genera sintaxis en el formulario YAML, por lo que cualquier casilla de verificación principal o secundaria seleccionada se aplicará automáticamente en el cuadro YAML. Esto actúa como un punto de partida para la consulta, que puedes editar más adelante. 

![export-tool-treetag-yaml][]


Se eligió el uso de YAML por su simplicidad y compatibilidad con SQL. El formato de selección de características YAML es similar a los archivos de estilo utilizados por programas como osm2pgsql e imposm. Distingue entre mayúsculas y minúsculas, y cada elemento hijo tiene sangría debajo de su elemento principal y está precedido por un guion. Este guion debe ir seguido de un espacio. Aquí tienes un ejemplo básico de una selección de características con tres temas: edificios, vías fluviales y hospitales:

![export-tool-yaml-code1][]


YAML tiene temas y dos estructuras de datos: asignaciones y listas.
El tema del ejemplo anterior es: edificios.
Las asignaciones del ejemplo anterior son: tipos y seleccionar. 
Las listas del ejemplo anterior son: elementos secundarios de seleccionar y tipos.

YAML: Temas
Los temas son las claves de nivel superior del documento YAML, con caracteres válidos que incluyen letras, números y guiones bajos. 

YAML: Tipos de geometría
Los valores de la lista bajo los tipos de asignación pueden ser uno o más de "- puntos", "- líneas", "- polígonos". Si se omite la clave de tipos, los tres tipos de geometría se incluirán en el tema.

YAML: Selecciones de columna
Los elementos de la lista bajo la clave de selección de asignación determinan las columnas de cada tema. El siguiente ejemplo rellenará las columnas "nombre" y "amenidad" con sus valores de OSM:

![export-tool-yaml-code2][]


YAML: Filtros
Los filtros se encuentran debajo de la clave where: de cada tema. Definen qué subconjunto de características de OSM pertenece a ese tema. El siguiente ejemplo filtrará el tema solo para las características en las que la clave natural tiene el valor vía fluvial:

![export-tool-yaml-code3][]


Ten en cuenta que casi siempre es necesario tener algún tipo de filtrado; de lo contrario, el tema simplemente incluirá todas las características de OSM para los tipos de geometría dados. Se especifica un filtro utilizando una sintaxis similar a la de SQL, con palabras clave válidas IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Ajustes preestablecidos de JOSM
Las versiones anteriores de la Herramienta de exportación utilizaban archivos .XML preestablecidos de JOSM para definir las selecciones de características. La nueva versión utiliza YAML, ya que es más flexible en la forma en que transforma los datos de OSM. Sin embargo, la nueva Herramienta de exportación puede ayudar a convertir los ajustes preestablecidos de JOSM a configuraciones YAML seleccionando el botón "Cargar desde el ajuste preestablecido JOSM .XML". Ten en cuenta que, si el ajuste preestablecido es más complejo, es posible que deba escribirse como una nueva configuración YAML basada en los elementos "elemento" contenidos en el XML.

![export-tool-load-preset][]



### Configuraciones

Puedes definir y guardar las configuraciones YAML para su uso futuro a través de la página "Configuraciones". Es útil crear una configuración para un proyecto, que luego se puede utilizar en todas las exportaciones relacionadas con ese proyecto. Asígnale a la configuración un "nombre" y una "descripción" para que otros usuarios puedan encontrarla. Si desmarcas la casilla de verificación "Público", la configuración solo será visible para ti. 

![export-tool-configuration-saved][]


Ten en cuenta que las configuraciones se pueden editar, lo que resulta útil para desarrollar una selección de características durante el transcurso de un proyecto. Puedes seleccionar las configuraciones YAML guardadas mediante la opción "Configuración almacenada" de la pestaña "3 Datos" al crear una exportación. Utiliza la barra de búsqueda para buscar configuraciones relacionadas con tu proyecto.

![export-tool-configuration-stored][]


Para obtener información más detallada sobre las selecciones de características y YAML, visita la sección "Seleccionar características" y "Especificación YAML" de la sección "[Aprender](https://export.hotosm.org/es/v3/learn)" del sitio web de la herramienta. 




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




