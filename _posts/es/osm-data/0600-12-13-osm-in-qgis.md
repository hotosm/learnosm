---
layout: doc
title: Usando datos de OSM en QGIS
permalink: /es/osm-data/osm-in-qgis/
lang: es
category: osm-data
---

Usando datos de OSM en QGIS
=================

> Esta guía puede ser descargarda como [Using_OSM_data_in_QGIS_es.odt](/files/Using_OSM_data_in_QGIS_es.odt) o [Using_OSM_data_in_QGIS_es.pdf](/files/Using_OSM_data_in_QGIS_es.pdf)  
> Revisado 2015-07-19

QGIS (anteriormente Quantum GIS) es un Sistema de Información Geográfica muy completo, de código abierto y multiplataforma. Con QGIS puede acceder a datos actualizados de OSM cuando lo desee, seleccionar las etiquetas que quiera incluir, y exportarlos fácilmente en una base de datos SQLite o archivo Shapefile fácil de usar.

En este capítulo llevaremos a cabo los pasos necesarios para lograr esto. Asumimos que ya descargó e instaló QGIS 2.x. Si aún no lo hizo, puede descargarlo desde <http://www.qgis.org/es/site/forusers/download.html>.

Para poder cargar en QGIS nuestras capas de OSM personalizadas y actualizadas, primero obtendremos los datos de OSM más recientes en formato **.osm**. Luego, convertiremos estos datos en una base de datos SQLite, que es un sistema de base de datos ligero almacenado en un único archivo en su sistema. Por último, crearemos una capa (o múltiples capas) que incluyan solo los tipos de elemento y etiquetas que queremos acceder. Estas capas pueden ser usadas en QGIS tal como están o pueden ser guardadas en otro formato, como ser Shapefile.

Accediendo datos de OpenStreetMap
---------------------------

Lo primero que haremos será obtener datos actualizados de OSM. Podemos hacer esto de varias maneras.
Por supuesto, pedir datos al servidor de OSM, como hacemos en el editor JOSM, está limitado de modo que no podemos traer
una cantidad muy grande de datos de una sola vez - sin embargo, hay formas de acceder a grandes conjuntos de datos, como
está descrito en los capítulos previos [Obteniendo datos de OSM](/es/osm-data/getting-data) y [Usando Geofabrik y HOT Export](/es/osm-data/geofabrik-and-hot-export).

Para este tutorial usaremos la función de descarga integrada en QGIS.

-	Abra QGIS y vaya a Vectorial -> OpenStreetMap -> Descargar datos
-	Aquí puede elegir entre varias opciones - si la ventana ya está mostrando la extensión
	que desea, seleccione la opción "A partir de lienzo de mapa". Si tiene una capa cargada en QGIS con la extensión
	correcta, elija "A partir de capa" y seleccione la capa que desea usar. En nuestro caso elegiremos "Manual"
	e ingresaremos las latitudes y longitudes que formaran una **caja delimitadora** alrededor del área que
	 queremos acceder. Puede ingresar las latitudes y longitudes que le interesen, pero recuerde
	que el área no puede ser demasiado grande, o no podrá descargar la totalidad de los datos.

![bounding box][]

-	Seleccione un nombre y una ubicación para el archivo de salida, usando la extensión **.osm**, y haga clic en Aceptar.
-	Será notificado cuando la descarga se complete. Haga clic en "Cerrar" para cerrar el diálogo
	de descarga.

![download complete][]

-	Los datos de OSM se habrán guardado en la ubicación especificada.

>	Este método para acceder a los datos de OSM es el mismo que si los descargara desde JOSM o en
>	[openstreetmap.org](http://www.openstreetmap.org). Para extractos actualizados y más grandes,
>⇥puede probar descargarlos desde el [sitio de exportaciones HOT](http://export.hotosm.org/es) o
>	[bbbike.org](http://extract.bbbike.org/). Recuerde que si está descargando un archivo comprimido de OSM,
>⇥primero necesitará descomprimirlo al formato **.osm** para los pasos siguientes.

Importar datos a SQLite
---------------------------

A continuación vamos a necesitar importar nuestro archivo **.osm** en un archivo de base de datos SQLite.

-	Ir a Vectorial -> OpenStreetMap -> Importar Topología de XML
-	En el primer campo, seleccione su archivo **.osm**.
-	Puede cambiar el nombre del archivo de base de datos de salida si así lo desea.
-	Mantenga la casilla marcada junto a "Crear conexión..."

![import dialog][]

-	Haga clic en Aceptar.
-	Cuando esté terminado, haga clic en "Cerrar".

Creación de capas
--------------

Por último, vamos a definir las capas que se pueden utilizar en QGIS, personalizadas de acuerdo a nuestras necesidades.

-	Ir a Vector -> OpenStreetMap -> Exportar Topología de SpatiaLite...
-	En el primer campo, seleccione la base de datos que creó en el paso anterior.

![input db file][]

-	En "Tipo de Exportación", seleccione el tipo de características que desea para crear una capa. Aquí
	vamos a crear una capa usando polígonos.

![export type][]

-	Edite el nombre de la capa, si así lo desea.

Bajo "Etiquetas exportadas" es donde ocurre la magia. Aquí podemos seleccionar qué etiquetas serán
incluidas en nuestra capa de salida. Esto nos da la flexibilidad sobre exactamente qué datos  queremos
acceder.

-	Haga clic en "Cargar desde DB" para ver una lista de todas las etiquetas disponibles en la base de datos. Amplié el tamaño de la ventana arrastrando la esquina si eso ayuda. Puede ver
	todas las etiquetas contenidas en estos datos, y también el número de elementos que tienen cada etiqueta.
-	Marque las casillas junto a las etiquetas que desee incluir. Aquí seleccionaremos algunas características
	que serán de utilidad para los polígonos que representan edificios.

![export full][]

-	Cuando haya terminado, haga clic en Aceptar.
-	Cierre el diálogo. Su capa debería haberse añadido automáticamente.

![cairo polygons][]

-	Haga clic derecho sobre la capa y haga clic en "Abrir tabla de atributos".

![open attribute table][]

-	Puede ver aquí que tenemos una tabla que incluye sólo los atributos que hemos seleccionado.

![attribute table][]

Tenga en cuenta que no hemos creado una capa de edificios **únicamente**. En lugar de ello, hemos creado una capa
que incluye todos los polígonos de nuestro datos originales, pero sólo incluye las etiquetas que hemos
seleccionado. Para filtrar esta capa para mostrar sólo los edificios, tendríamos que ejecutar una consulta
que filtre sólo polígonos donde building=yes.

Resumen
-------

Este proceso simplifica la obtención de datos actualizados de OSM y su inserción en QGIS. Una vez que tenga
capas como esta en QGIS, es posible guardarlas en formato Shapefile, ejecutar filtros y consultas,
y más. Para más detalle sobre estas funciones, refiérase al menú Ayuda en QGIS.


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
