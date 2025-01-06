---
layout: doc
title: Vista general sobre datos OSM
permalink: /es/osm-data/data-overview/
lang: es
category: osm-data
---

Descripción general de datos de OSM
==================


> Revisado 2016-09-05

<!--In this section we'll consider how OpenStreetMap functions, which will help us to understand better how the data is structured, and how we can best utilize it.-->

Cómo funciona OSM
--------------
Consideremos cómo funciona OpenStreetMap. Miles de usuarios de todo el mundo añaden y editan continuamente el mapa, pero ¿qué sucede entre bastidores?  

Cuando tú o cualquier otro usuario realizáis cambios utilizando *software* de edición como JOSM o iD, el *software* se comunica con un servidor central de OpenStreetMap y le notifica de tus cambios. En ese servidor hay una base de datos enorme que contiene toda la información de ubicación y los atributos de cada característica geográfica de todo OpenStreetMap.  

Dado que OSM es libre y abierto, cualquiera puede descargar todos los datos de esta base de datos. Sin embargo, debido a que es tan enorme (*los datos ocupan más de 30 GB incluso comprimidos*), es casi imposible trabajar con todos los datos a la vez.  

Debido a esta limitación, existen varios métodos para **exportar** y **extraer** datos que se tratan en esta sección. Exportar significa convertir los datos de OpenStreetMap de su formato nativo a un formato que te resulte cómodo. Esto es ligeramente diferente de **extraer** datos, que significa cortar los datos del área que elijas. También puede significar extraer las características específicas que desees de una zona. Estos términos a menudo se utilizan indistintamente. Aprenderemos más sobre esto a lo largo de la sección de datos de OSM.  

Uso de geodatos
--------------
Si no eres un usuario de SIG experimentado, es importante que comprendas la diferencia entre el *software* de edición de OSM, como JOSM, y el *software* SIG, como Quantum GIS y ArcGIS.  

Los editores como iD o JOSM tienen una función principal en la que son muy buenos: facilitar a los usuarios la edición de OpenStreetMap. Pero no son un *software* diseñado para analizar o consultar datos;
es mejor dejar esta función a otras aplicaciones. El *software* SIG, como [Quantum GIS (QGIS)] (http://www.qgis.org), que es libre y de código abierto, permite a los usuarios diseñar mapas atractivos, consultar y analizar datos, y mucho más. El *software* SIG también se puede utilizar para editar geodatos, pero es mucho más fácil editar OpenStreetMap con los editores de OSM dedicados.  

En el próximo capítulo, examinaremos más de cerca los formatos de archivo que están asociados a OpenStreetMap y a los datos geográficos en general. Después, veremos varias formas de acceder y manipular los datos de OSM y convertirlos en diferentes tipos de archivos.  


Obtención de los datos
-----------------

Eso es genial, pero ¿cómo se obtienen los datos que se desean?  

En este capítulo, repasaremos las diversas formas de exportar datos de OSM. Nos ceñiremos a lo básico, pero ten en cuenta que, para utilizar los datos de forma eficaz, probablemente necesites un *software* SIG,
como la aplicación gratuita Quantum GIS.  

Antes de empezar, repasemos algunos términos. En primer lugar, **exportar** significa convertir los datos de OpenStreetMap de su formato XML nativo a un formato que te resulte cómodo. Esto es ligeramente diferente de **extraer** datos, que significa cortar los datos del área que elijas. También puede significar extraer las características específicas que desees de una zona. Usaremos estos términos con frecuencia en este capítulo, por lo que es importante comprender la diferencia.  

La API de OSM
------------
El proceso de edición de OSM funciona gracias a lo que se conoce como API, que permite que el *software* de edición se comunique con el servidor central. Por ejemplo, cuando utilizas JOSM y seleccionas el área que quieres mapear, se envía una llamada a la API al servidor, solicitando todos los datos que existen dentro del área que has seleccionado.  

De hecho, cuando descargas datos en JOSM, estás **extrayendo** los datos de un área específica del mundo. A continuación, los datos se te envían en formato **.osm**, que luego puedes editar en JOSM. Si descargas datos en JOSM y luego los guardas, verás que el tipo de archivo es **.osm**. Hablaremos más sobre esto en el próximo capítulo.  
