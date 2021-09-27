---
layout: doc
title: Vista General sobre Datos OSM
permalink: /es/osm-data/data-overview/
lang: es
category: osm-data
---

Descripción general de datos de OSM 
==================


> Revisado 2016-09-05

<!--In this section we'll consider how OpenStreetMap functions, which will help us to understand better how the data is structured, and how we can best utilize it.-->

Cómo Trabaja OSM
--------------
Consideremos cómo funciona OpenStreetMap. Miles de usuarios de todo el mundo agregan y editan continuamente el mapa, pero ¿qué sucede detrás de escena?   

Cuando usted o cualquier otro usuario realiza cambios utilizando software de edición como JOSM o iD, el software se comunica con un servidor central de OpenStreetMap y le notifica de sus cambios. En ese servidor hay una gran base de datos, que contiene toda la información de ubicación y los atributos de cada característica geográfica en todo OpenStreetMap.   

Dado que OSM es libre y abierto, cualquiera puede descargar todos los datos de esta base de datos. Sin embargo, debido a que es tan grande (*los datos son más de 30 GB incluso estando comprimidos*), es casi imposible trabajar con todos los datos a la vez.   

Debido a esta limitación, existen varios métodos para **exportar** y **extraer** datos que serán tratados en esta sección. Exportar significa convertir datos de OpenStreetMap de su formato nativo a un formato que sea conveniente para usted. Esto es ligeramente diferente de **extraer** datos, lo que significa cortar los datos del área que elija. También puede significar extraer las características específicas que desea de un área. Estos términos a menudo se usan indistintamente. Aprenderemos más sobre esto en la sección de Datos de OSM.   

Usando geodatos 
--------------
Si no es un usuario GIS experimentado, es importante comprender la diferencia entre el software de edición OSM como JOSM y el software GIS como Quantum GIS y ArcGIS.   

Los editores como iD o JOSM tienen una función principal en la que son muy buenos: facilitar a los usuarios la edición de OpenStreetMap. Pero no son un software diseñado para analizar o consultar datos, 
Es mejor dejar esta función para otras aplicaciones. El software GIS, como [Quantum GIS (QGIS)] (http://www.qgis.org), que es libre y de código abierto, permite a los usuarios diseñar mapas atractivos, consultar y analizar datos, y mucho más. El software GIS también se puede utilizar para editar geodatos, pero es mucho más fácil editar OpenStreetMap con los editores OSM dedicados.   

En el próximo capítulo veremos más de cerca los formatos de archivo que están asociados con OpenStreetMap y los datos geográficos en general. Luego, veremos varias formas de acceder y manipular datos de OSM y convertirlos en diferentes tipos de archivos.   


Obteniendo los datos 
-----------------

Eso es genial, pero ¿cómo obtener los datos que desea?   

En este capítulo repasaremos las diversas formas de exportar datos OSM. Nos ceñiremos a lo básico, pero tenga en cuenta que para utilizar los datos de manera eficaz, probablemente necesitará un software GIS, 
como la aplicación gratuita Quantum GIS.   

Antes de comenzar, repasemos algunos términos. Primero, **exportar** significa convertir los datos de OpenStreetMap de su formato XML nativo a un formato que sea conveniente para usted. Esto es ligeramente diferente de **extraer** datos, lo que significa cortar los datos del área que elija. También puede significar extraer las características específicas que desea de un área. Usaremos estos términos con frecuencia en este capítulo, por lo que es importante comprender la diferencia.   

La API de OSM 
------------
El proceso de edición de OSM funciona debido a lo que se conoce como API, que permite que el software de edición se comunique con el servidor central. Por ejemplo, cuando está utilizando JOSM y selecciona el área que desea mapear, se envía una llamada API al servidor, solicitando todos los datos que existen dentro del área que ha seleccionado.   

De hecho, cuando descarga datos en JOSM, **extrae** los datos de un área específica del mundo. Luego, los datos se le envían en formato **.osm**, que luego puede editar en JOSM. Si descarga datos en JOSM y luego los guarda, verá que el tipo de archivo es **.osm**. Hablaremos más sobre esto en el próximo capítulo.   
