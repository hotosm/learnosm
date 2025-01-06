---
layout: doc
title: Usando datos de OSM en QGIS
permalink: /es/osm-data/osm-in-qgis/
lang: es
category: osm-data
---

Usando datos de OSM en QGIS
=================


QGIS (anteriormente Quantum GIS) es un Sistema de Información Geográfica (SIG) muy completo, de código abierto y multiplataforma. Con QGIS, puedes acceder a datos actualizados de OSM cuando quieras, seleccionar las etiquetas que quieras incluir y exportarlos fácilmente a una base de datos SQLite o un archivo Shapefile fáciles de usar.  

En este capítulo, repasaremos los pasos necesarios para hacerlo. Asumimos que ya has descargado e instalado QGIS 3.x. Si no lo has hecho, puedes descargarlo desde <http://www.qgis.org/en/site/forusers/download.html>.  

Utilizaremos un complemento, QuickOSM, para importar desde la base de datos de OpenStreetMap. Para instalar este complemento, abre el cuadro de diálogo 'Administrar complementos' desde el menú Complementos. Busca QuickOSM e instálalo. Esto añadirá una entrada al menú Vectorial.  

Obtención de datos desde la base de datos
---------------------------

Lo primero que haremos es obtener algunos datos actualizados de OSM. Podemos hacerlo de muchas maneras. El complemento QuickOSM nos permite extraer grandes cantidades de datos, ya que utiliza la API de Overpass y no el servidor principal de la base de datos de OSM.

- Abre QGIS y ve a Vector -> QuickOSM -> QuickOSM...  

![quickosm][]

- Aquí puedes elegir entre varias opciones: si tu ventana ya muestra la extensión que deseas, cambia el cuadro combinado que, de forma predeterminada, muestra "Dentro de" a "Extensión del lienzo". Si tienes una capa cargada en QGIS con la extensión deseada, elige "Extensión de la capa" y selecciona la capa que deseas utilizar. Utilizar la opción predeterminada "Dentro de" requiere que exista una relación o un polígono con el nombre indicado. De lo contrario, elige "Alrededor de" y bastará con un nodo con este nombre. Puedes seleccionar un perímetro (por defecto, 1000 m) alrededor de este nodo desde donde se cargarán los datos de la base de datos.

- Haz clic en "Ejecutar consulta".  
- Se te notificará cuando la descarga se haya completado. Los datos se almacenan en tres capas temporales: una para nodos, una para vías y una para polígonos, respectivamente.

![quickosm loaded][]


Importar extractos
---------------------------

Hay varias opciones para obtener extractos de una zona. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> contiene una lista de varios sitios web. Solo tienes que elegir un archivo **.osm** o **.pbf** y descargarlo. 

Puedes utilizar QuickOSM para importarlo haciendo clic en "Archivo OSM" en la barra de la izquierda. Una vez que hayas utilizado QuickOSM, los archivos OSM deberían ser conocidos por QGIS y puedes utilizar la importación regular de capas vectoriales:

- Ve a Capa -> Añadir capa -> Añadir capa vectorial...  
- En el campo "Fuente", selecciona tu archivo y haz clic en "Añadir".  
- Puedes seleccionar una o más capas de tipo de ese archivo.  

![import osm][]  

- Después de hacer clic en "Aceptar", puedes cerrar el diálogo y tu ventana de QGIS mostrará las nuevas capas.  
  

![import osm loaded][]  


Exportar datos
--------------

Para exportar una capa, activa su menú contextual y selecciona Exportar -> Guardar objetos espaciales como...
Puedes seleccionar entre una amplia gama de formatos, incluidos Shapefile, GeoJSON, volcado PostgreSQL y SQLite. Las demás opciones del diálogo varían en función del formato que selecciones.

![export][]  

Puedes elegir reimportar la capa exportada marcando la casilla de la parte inferior (activada de forma predeterminada).

Trabajar con los datos
--------------------

No podemos darte ni siquiera una visión general de lo que puedes hacer con QGIS y hay muchos tutoriales y libros excelentes que te guiarán paso a paso hacia el dominio del *software*. Pero como los datos OSM importados por uno de los métodos descritos anteriormente tienen sus etiquetas codificadas de una manera especial, aquí tienes un ejemplo de cómo tratarlas (para los curiosos, el ejemplo es pitcairn-islands-latest de la página de descarga de Geofabrik para Australia y Oceanía). Puedes inspeccionar los datos de una capa vectorial utilizando "Abrir tabla de atributos" desde el menú contextual de una capa, en este caso, la capa multipolígono.

![attribute table][]

Podemos ver que todos los pares clave-valor para las etiquetas de los distintos objetos están organizados en una cadena de texto especialmente formateada en el campo "other_tags". Este tipo de almacenamiento se llama "hstore" en una base de datos PostgreSQL y es el estándar para los datos OSM.

En este ejemplo, los polígonos son principalmente islas, bosques y edificios. Inicialmente se representan de la misma manera, lo que significa que las islas cubren todo lo demás. Vamos a representarlos de forma diferente para tener una idea de cómo identificar los diferentes objetos. Descarta la tabla de atributos. En el menú contextual de la capa multipolígono, selecciona Propiedades y, en ese formulario, ve a la pestaña Simbología. 

![symbology][]

En primer lugar, cambia el tipo de símbolo de "Símbolo único" a "Basado en reglas" utilizando el cuadro combinado de la parte superior del formulario. 

![symbology rule based][]

La representación actual aparece como una regla sin filtros. Podemos modificar esta regla haciendo clic en el icono marcado con un cuadrado morado en la imagen superior.

![symbology edit rule][]

Nos gustaría tratar los edificios de forma diferente. Tratar de forma diferente significa que hay que especificar las reglas según las propiedades de las capas. La evaluación de expresiones de QGIS no puede tratar directamente las cadenas hstore. Pero una utilidad viene a nuestro rescate y la expresión de filtro que se muestra en la imagen `hstore_to_map(other_tags)['building'] is not NULL` convierte la cadena "other_tags" en un mapa clave-valor donde elegimos el valor para la clave "building". La condición indica que buscamos objetos cuya clave "building" no esté vacía. Podemos definir un color y un estilo de relleno para los edificios. Haz clic en "Aceptar" cuando hayas terminado con el diseño de tu regla. Ahora puedes añadir más reglas haciendo clic en el icono "más" en la parte inferior de la pestaña Simbología. Añadimos reglas similares para los bosques y los pastizales. Al final, nuestra pestaña Simbología tendrá este aspecto:

![symbology polygon rules][]

Como ventaja adicional, podemos obtener un recuento rápido de objetos espaciales de las reglas. Pulsa el icono situado más a la derecha de la fila de la parte inferior (el símbolo de la suma) y la columna "recuento" se rellenará diciéndonos que tenemos 150 edificios en esta capa.

Puedes añadir etiquetas de forma similar a como lo hicimos con los símbolos. "Etiquetas" es otra pestaña en las propiedades de una capa, justo debajo de Simbología. En la mayoría de los casos, querrás imprimir el nombre de un objeto espacial. Introduce una expresión similar a las utilizadas para la simbología en el campo para un filtro y, como valor, utilizarías `hstore_to_map(other_tags)['name']`. 

![labels][]

Asignar estas etiquetas a las capas multipolígono y a las capas de puntos da como resultado algo así:

![done][]


Resumen
-------

Este proceso simplifica la obtención de datos actualizados de OSM y su introducción en QGIS. Una vez que tengas capas como esta en QGIS, puedes guardarlas en formato Shapefile, ejecutar filtros y consultas, etc. Para obtener más información sobre estas funciones, consulta el menú Ayuda de QGIS.  


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