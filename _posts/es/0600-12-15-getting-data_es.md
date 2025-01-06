---
layout: doc
title: Obteniendo Datos OSM
permalink: /es/osm-data/getting-data/
lang: es
category: osm-data
---

Obteniendo Datos OSM
=================  

> Revisado 2016-04-05

Cuando quieras obtener los datos más recientes de OpenStreetMap, la forma más fácil es descargar un extracto de un sitio web. Hay varios servicios web que proporcionan extractos de datos para un área de tu elección.  

Descarga de extractos de datos
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) es una empresa especializada en OpenStreetMap. Ofrecen una variedad de extractos de archivos gratuitos en formato shapefile y OSM sin procesar en su [sitio web de descargas](http://download.geofabrik.de). La ventaja de descargar los datos de GeoFabrik es que se actualizan diariamente, es fácil y fiable. Una desventaja es que los datos se extraen por países completos y no todos los países están disponibles.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) proporciona shapefiles y datos en formato OSM sin procesar de ciudades de todo el mundo, extraídos semanalmente. Esto es útil para extractos de datos de una sola ciudad.

>Recuerda que los objetos en OpenStreetMap tienen un número ilimitado de etiquetas "libres",
>pero los shapefiles tienen atributos almacenados en un número limitado de columnas. Esto significa que,
>cuando se conviertan los datos de OSM en shapefiles, solo las etiquetas especificadas se
>incluirán en la tabla de atributos del shapefile. Los sitios web mencionados anteriormente proporcionan archivos shapefile
>con un conjunto predeterminado de etiquetas comunes, pero si quieres extraer etiquetas específicas,
>tendrás que utilizar uno de los servicios más especializados de la siguiente sección
>o aprender a exportar los datos tú mismo.

Extractos personalizados
-------------------

### Exportaciones de HOT  

El [Equipo Humanitario de OpenStreetMap](http://hotosm.org) ha creado un servicio que permite a los usuarios seleccionar el área que desean extraer y también utilizar [Ajustes preestablecidos de JOSM](/es/josm/josm-presets/)
para seleccionar las etiquetas personalizadas que se incluirán en el extracto. El servicio está disponible para todos los países donde trabaja HOT, en [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Puedes seleccionar tu propia área de interés en cualquier parte del mundo utilizando el servicio [http://extract.bbbike.org/](http://extract.bbbike.org/). Las desventajas son que no puedes seleccionar etiquetas personalizadas y que la cantidad de datos que puedes descargar es limitada.  

### Overpass

Overpass es una API (interfaz de programación de aplicaciones) para extraer datos de una copia de solo lectura de la base de datos principal de OpenStreetMap que puede entregar una cantidad de datos casi arbitraria. Mediante un lenguaje de consulta, puedes personalizar qué subconjunto de datos obtienes. Puedes utilizar la API directamente generando una solicitud HTTP o mediante la interfaz Overpass Turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) es un generador de consultas interactivo en el que, en primer lugar, debes hacer zoom a la región de interés en el mapa. Introduce tu consulta en el campo izquierdo de la página y activa cualquier acción utilizando los botones de la parte superior de la interfaz. Si eres nuevo en el lenguaje de consulta, el asistente te ayudará a empezar. La wiki de OSM contiene una [descripción completa](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) de la sintaxis del lenguaje de consulta, así como un [conjunto de ejemplos](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

El mapa destacará todos los datos seleccionados por tu consulta, que luego podrás modificar. Pulsa "Ejecutar" para actualizar la visualización de los resultados. Una vez que estés satisfecho con lo que ves, "Exportar" te ofrece varias opciones, entre ellas los datos OSM sin procesar. Si la cantidad de datos es limitada, también puedes acceder a ellos directamente después de cambiar entre la vista de mapa y la vista de datos utilizando los botones de la parte superior derecha. La opción de exportación *Consulta -> OverpassQL compacto* genera un hipervínculo que se utilizará para la API de Overpass.

![overpass turbo][]

Si quieres diseñar una consulta elegante para obtener un subconjunto de datos de una zona grande, se recomienda probar y mejorar esta consulta en Overpass Turbo en una zona pequeña. A continuación, puedes ampliar tu región de interés y utilizar la URL de la consulta resultante directamente para la API. En la siguiente sección se explica cómo hacerlo.

#### API Overpass

La [API de Overpass](http://wiki.openstreetmap.org/wiki/Overpass_API) es un servicio dedicado y optimizado para consultar, pero no para editar, datos de OpenStreetMap. Debido a esta optimización, funciona muy rápido en comparación con la API de la base de datos principal y prácticamente no tiene límites en la cantidad de datos transferidos. Hay varias instancias de este servicio disponibles en la red; la que se utiliza en el siguiente ejemplo también proporciona información en [su página web](http://overpass-api.de/).

Si tienes una URL de consulta que te funcione para enviar una solicitud HTTP a la API de Overpass, entonces una herramienta como [wget](https://www.gnu.org/software/wget/) (disponible para diferentes sistemas operativos; consulta [aquí](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download)) te permite descargar los datos OSM sin procesar directamente del servidor y almacenarlos localmente. El siguiente fragmento es un *script* para el *shell* bash, común en los sistemas Unix, que obtiene todos los datos dentro de un cuadro delimitador especificado:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>¿Qué ocurre aquí (para quienes no quieran leer la documentación completa del lenguaje de consulta)?  
>node(...) selecciona todos los nodos dentro de un cuadro delimitador;  
>< recurre completamente hacia arriba, es decir, selecciona todas las vías que contienen estos nodos y todas las relaciones que contienen estos nodos y vías;  
>rel(br) selecciona todas las relaciones principales de las relaciones obtenidas hasta ahora (de lo contrario, no se obtendrían las relaciones maestras).
>



Resumen
-------  

Los servicios mencionados en este capítulo son todo lo que las personas con un uso promedio necesitan para obtener los datos de OSM deseados y poder trabajar con ellos en algún *software* SIG. Sin embargo, si quieres aprender formas más potentes de trabajar con los datos, los capítulos restantes de esta sección son bastante técnicos, pero muestran métodos más avanzados de manipulación y acceso a los datos de OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png