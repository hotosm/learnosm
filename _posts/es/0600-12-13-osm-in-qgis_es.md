---
layout: doc
title: Usando datos de OSM en QGIS
permalink: /es/osm-data/osm-in-qgis/
lang: es
category: osm-data
---

Usando datos de OSM en QGIS
=================


QGIS (anteriormente Quantum GIS) es un Sistema de Información Geográfica muy completo, de código abierto y multiplataforma. Con QGIS puede acceder a datos actualizados de OSM cuando lo desee, seleccionar las etiquetas que quiera incluir, y exportarlos fácilmente en una base de datos SQLite o archivo Shapefile fácil de usar.  

En este capítulo recorremos los pasos necesarios para hacerlo. Suponemos que ya ha descargado e instalado QGIS 3.x. Si no lo ha hecho, puede descargarlo desde <http://www.qgis.org/en/site/forusers/download.html>.  

Utilizaremos un plugin, QuickOSM, para importar desde la base de datos de OpenStreetMap. Para instalar este plugin, abra el cuadro de diálogo 'Administrar complementos' del menú Complementos. Busque QuickOSM e instálelo. Esto añadirá una entrada al menú Vectorial  

Obtención de datos desde la base de datos
---------------------------

Lo primero que haremos es obtener datos actualizados de OSM. Podemos hacer esto de numerosas maneras. El plugin QuickOSM nos permite extraer grandes cantidades de datos ya que utiliza la api de Overpass y no el servidor principal de la base de datos de OSM.

- Abra QGIS y el menú Vectorial -> QuickOSM -> QuickOSM...  

![quickosm][]

- Aquí puede elegir entre varias opciones: si su ventana ya muestra la extensión que desea, cambie el cuadro combinado que por defecto muestra "En" a "Extensión de capa". Si tiene una capa cargada en QGIS con la extensión deseada, elija "Extensión de la capa" y seleccione la capa que desea utilizar. Utilizar la opción por defecto "En" requiere que exista una relación o polígono con el nombre indicado. En caso contrario, elija "Alrededor" y bastará con un nodo con este nombre. Puede seleccionar un perímetro (por defecto 1000m) alrededor de este nodo donde se cargarán los datos desde la base de datos.

- Oprima "Ejecutar consulta".  
- Se le notificará cuando se haya completado la descarga. Los datos se almacenan en tres capas temporales: una para nodos, una para líneas y una para polígonos.

![quickosm loaded][]


Importar extractos
---------------------------

Hay varias opciones para obtener extractos de una zona. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> contiene una lista de varios sitios web. Sólo tienes que elegir un archivo **.osm** o **.pbf** y descargarlo. 

Puede utilizar QuickOSM para importarlo haciendo clic en "Archivo OSM" en la barra de la izquierda. Una vez que haya utilizado QuickOSM los archivos OSM deberían ser conocidos por QGIS y puede utilizar la importación de capas vectoriales regulares:

- Vaya a Capa -> Añadir Capa -> Añadir Capa Vectorial...  
- En el campo de la fuente, seleccione su archivo y haga clic en "Añadir".  
- Puede seleccionar una o varias capas de tipo de ese archivo.  

![import osm][]  

- Después de hacer clic en "Aceptar" puede cerrar el diálogo y su ventana de QGIS muestra las nuevas capas.  
  

![import osm loaded][]  


Exportar datos
--------------

Para exportar una capa active su menú contextual y seleccione Exportar -> Guardar Objetos Espaciales como...
Puede seleccionar entre una amplia gama de formatos, incluyendo archivo Shape, GeoJSON, volcado PostgreSQL, SQLite. Las demás opciones del diálogo varían en función del formato seleccionado.

![export][]  

Puede elegir reimportar la capa exportada marcando la casilla de la parte inferior (activada por defecto).

Trabajar con los Datos
--------------------

No podemos darle ni siquiera una visión general de lo que puede hacer con QGIS y hay muchos excelentes tutoriales y libros que le guiarán paso a paso hacia el dominio del software. Pero como los datos OSM importados por uno de los métodos descritos anteriormente tienen sus etiquetas codificadas de una manera especial, aquí hay un ejemplo de cómo tratar con ellos (para los curiosos, el ejemplo es pitcairn-islands-latest de la página de descarga de Geofabrik para Australia y Oceanía). Puedes inspeccionar los datos de una capa vectorial usando 'Abrir tabla de atributos' desde el menú contextual de una capa, en este caso la capa multipoligonal.

![attribute table][]

Podemos ver que todos los pares clave-valor para las etiquetas de los distintos objetos están organizados en una cadena de texto especialmente formateada en el campo 'other_tags'. Este tipo de almacenamiento se llama "hstore" en una base de datos PostgreSQL y es el estándar para los datos OSM.

En este ejemplo los polígonos son principalmente islas, bosques y edificios. Inicialmente se representan de la misma manera, lo que significa que las islas cubren todo lo demás. Vamos a representarlos de forma diferente para tener una idea de cómo identificar los diferentes objetos. Descarte la tabla de atributos. En el menú contextual de la capa multipoligonal seleccione Propiedades y en ese formulario pase a la pestaña Simbología. 

![symbology][]

En primer lugar, cambie el tipo de símbolo de "Símbolo único" a "Basado en reglas" utilizando el cuadro combinado de la parte superior del formulario. 

![symbology rule based][]

La representación actual aparece como una regla sin filtros. Podemos modificar esta regla haciendo clic en el icono marcado con un cuadrado morado en la imagen superior.

![symbology edit rule][]

Nos gustaría tratar los edificios de forma diferente. Tratar de forma diferente significa que hay que especificar las reglas según las propiedades de las capas. La evaluación de expresiones de QGIS no puede tratar directamente las cadenas hstore. Pero una utilidad viene a nuestro rescate y la expresión de filtro que se muestra en la imagen `hstore_to_map(other_tags)['building'] is not NULL` convierte la cadena 'other_tags' en un mapa clave-valor donde elegimos el valor para la clave 'building'. La condición dice que buscamos objetos cuya clave edificio no esté vacía. Podemos definir un color y un estilo de relleno para los edificios. Haga clic en "Aceptar" cuando haya terminado con el diseño de su regla. Ahora puede añadir más reglas haciendo clic en el icono "más" en la parte inferior de la pestaña de simbología. Añadimos reglas similares para los bosques y las praderas. Al final nuestra pestaña de simbología tendrá este aspecto:

![symbology polygon rules][]

Como ventaja adicional, podemos obtener un recuento rápido de los objetos espaciales de las reglas. Pulse el icono más a la derecha de la fila en la parte inferior (el símbolo de la suma) y la columna "recuento" se rellenará diciéndonos que tenemos 150 edificios en esta capa.

Puede añadir etiquetas de forma similar a como lo hicimos con los símbolos. 'Etiquetas' es otra pestaña en las propiedades de una capa, justo debajo de Simbología. En la mayoría de los casos se desea imprimir el nombre de un objeto espacial. Se introduce una expresión similar a las utilizadas para la simbología en el campo para un filtro y como valor se utilizaría `hstore_to_map(other_tags)['name']`. 

![labels][]

Asignando estas etiquetas a las capas multipoligonales y a las capas de puntos se obtiene algo así:

![done][]


Resumen
-------

Este proceso simplifica la obtención de datos actualizados de OSM y su inserción en QGIS. Una vez que tenga capas como esta en QGIS, es posible guardarlas en formato Shapefile, ejecutar filtros y consultas, y más. Para más detalle sobre estas funciones, refiérase al menú Ayuda en QGIS.  


[quickosm]: /images/osm-data/qgis-quickosm.png
[quickosm loaded]: /images/osm-data/qgis-quickosm-loaded.png
[import osm]: /images/osm-data/qgis-import-osm.png
[import osm loaded]: /images/osm-data/qgis-import-osm-loaded.png
[export]: /images/osm-data/qgis-export.png
[attribute table]: /images/osm-data/qgis-layer-attributes.png
[symbology]: /images/osm-data/qgis-layer-symbology.png
[symbology rule based]: /images/osm-data/qgis-layer-symbology-rule.png
[symbology edit rule]: /images/osm-data/qgis-layer-symbology-edit-rule.png
[symbology polygon rules]: /images/osm-data/qgis-layer-symbology-poly-rules.png
[labels]: /images/osm-data/qgis-layer-labels.png
[done]: /images/osm-data/qgis-complete.png