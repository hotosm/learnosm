---
layout: doc
title: Complementos de JOSM
permalink: /es/josm/josm-plugins/
lang: es
category: josm
---

Complementos de JOSM y Opciones
===============================

Según vayas avanzando en tus técnicas de edición empezarás a 
preguntarte como encontrar características adicionales de JOSM que
te ayuden a mejorar tus habilidades para dibujar mapas. JOSM te permite
instalar numerosos complementos, que son herramientas extra que te 
permiten realizar tareas específicas en el programa. Ya habrás instalado
algunos complementos si has estado siguiendo estos tutoriales.  En el 
capítulo anterior has instalado un complemento que te permite usar SDS (_Separate Data Store_ o Almacén de Datos Independiente). Antes de eso, habrás instalado
el complemento para usar _Walking Papers_. Hay muchos complementos disponibles
para JOSM pero en este capítulo solo cubriremos algunos de los más útiles.


![plug]({{site.baseurl}}/images/plugins_html_m76fc73bd_en.png)

Cuando quieras instalar un complemento nuevo ve a Edición --\> Preferencias
y clica la pestaña «Complementos». Si no ves una lista con los complementos
disponibles, haz clic en «Descargar Lista». Para instalar cualquier 
complemento marca la casilla junto al mismo y haz clic en el botón Aceptar que
hay en la parte de abajo. Cuando se instala un nuevo complemento es necesario
reiniciar JOSM. Ya debes de estar cansado de tener que reiniciar JOSM cada vez que cambias las opciones. Afortunadamente, ¡nuestro primer complemento está
hecho para reiniciar JOSM en tu lugar!

Complementos recomendados:
- [Restart]({{site.baseurl}}/es/josm/josm-plugins/#restart) (añade un
botón de «reinicio»).
- [Mirrored Download]({{site.baseurl}}/es/josm/josm-plugins/#mirrored-download) (te permite descargar más datos de OSM).
- [Direct Upload]({{site.baseurl}}/es/josm/josm-plugins/#direct-upload) 
(te permite subir rastros GPS).
- [Editgpx]({{site.baseurl}}/es/josm/josm-plugins/#editar-gpx) (permite la
edición de archivos GPX).
- [Print]({{site.baseurl}}/es/josm/josm-plugins/#Impresin).

También se recomienda la descarga de estos complementos que se explican
en otros capítulos.

- Walking Papers
- Buildings\_tool
- Utilsplugin2


Restart
-------

![restart]({{site.baseurl}}/images/plugins_html_57cb1b84_es.png)

__Restart__ (reiniciar) hace justo lo que dice. Añade un elemento en 
el menú Archivo que le dice a JOSM que se reinicie. Esto ahorra tiempo
cuando estas cambiando opciones a menudo y necesitas reiniciar el programa
para que los cambios tengan efecto. Pero ¡sabes qué!, el complemento
no se activará hasta que reinicies, así que  primero necesitas reiniciar
JOSM manualmente. Una vez hecho esto, verás la entrada nueva en el menú
Archivo.

![]({{site.baseurl}}/images/plugins_html_m6d2d20a9_es.png)

Prueba a seleccionar «Reiniciar JOSM» y verás como el programa se 
recarga a sí mismo.


Mirrored Download
-----------------

![]({{site.baseurl}}/images/plugins_html_m2c477766_es.png)

__Mirrored Download__  (descarga desde espejo) hace que descargar datos
de OSM para editar sea más rápido. En lugar de obtener los datos desde el
servidor central de OSM, nos permite descargarlos desde un «espejo» (_mirror_),
que es una réplica exacta de los datos pero en otra ubicación con un acceso
más rápido.

Una vez instalado el complemento (y reiniciado JOSM) verás otra nueva 
entrada en el menú Archivo, «Download from OSM mirror...» (descargar 
desde espejo de OSM...).

![]({{site.baseurl}}/images/plugins_html_1f3d8d84_es.png)

Para descargar datos hay que seguir el mismo proceso que ya has aprendido
pero ¡ahora la descarga será mucho más rápida!

Direct Upload
-------------

![]({{site.baseurl}}/images/plugins_html_m37f530e4_es.png)

__DirectUpload__ (subida directa)  sube trazas GPX directamente a OSM
desde JOSM (más información disponible en el **Apéndice**). Una vez que
el complemento está instalado (y has reiniciado JOSM) verás un nueva nueva
entrada en el menú «Herramientas» llamada «Subir trazas».

![]({{site.baseurl}}/images/plugins_html_m53ca88fd_es.png)

Cuando seleccionas el botón «Subir trazas» aparecerá esta ventana:

![]({{site.baseurl}}/images/plugins_html_2e01a9a7_es.png)

Escribe palabras claves (separadas por comas) relacionadas con tu traza
GPS en el campo «Etiquetas (separadas por comas)». Por ejemplo, 
«País, región, ciudad, barrio, nombre de carretera». A continuación,
proporciona una descripción para tus etiquetas. Una lista desplegable
permite reutilizar etiquetas y descripciones usados anteriormente.
Finalmente, elige el tipo de visibilidad que quieres que tengan tus
trazas. Hay cuatro niveles, desde privado hasta identificable (todos se
explican en el [Apéndice]({{site.baseurl}}/es/josm/josm-plugins/#apndice).

Selecciona «Subir traza». Si no estás conectado a tu cuenta de OSM tendrás
que contectarla ahora.

Una vez se ha realizado la subida con éxito, aparecerá el mensaje 
«GPX subido correctamente» y el botón «Subir traza» no será clicable.
Puedes encontrar más información sobre este complemento y las subidas GPX en
el [Apéndice]({{site.baseurl}}/es/josm/josm-plugins/#apndice).


Editar gpx
----------

![]({{site.baseurl}}/images/plugins_html_m1d1170b2_en.png)

**EditGpx** permite preparar las trazas GPX grabadas antes de subirlas
a OSM. A menudo las trazas tienen partes que te gustaría eliminar. Por eso,
este complemento elimina puntos de la traza de una forma rápida y hace
que las marcas de tiempo de la traza sean anónimas.

Una vez el complemento se ha instalado (y has reiniciado JOSM) verás esta
nueva herramienta ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) en
la barra de herramientas de la izquierda.

1. Abre un archivo GPX en JOSM![]({{site.baseurl}}/images/plugins_html_3fabdc1a_en.png)

2. Presiona el nuevo botón ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) en la
barra de la izquierda y los datos GPX se importarán a una nueva capa EditGpx. Cada
nodo de la traza aparece destacado en amarillo ![]({{site.baseurl}}/images/plugins_html_m3f86e83d_en.png)

3. Ahora marca los puntos (haciendo clic) o áreas (dibujando un rectángulo en
su extensión) que te gustaría eliminar. Las marcas amarillas deberían 
desparecer.![]({{site.baseurl}}/images/plugins_html_m7e01ae1f_en.png)

4. Haz clic con el botón derecho del ratón en el nombre de la capa y selecciona
«Convertir a capa GPX» en el menú contextual.

5. Ahora puedes guardar esta capa GPX normal como un archivo o subir los datos a
OSM (por ejemplo usando el complemento [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Impresión
---------

![]({{site.baseurl}}/images/plugins_html_m66e7a0a9_es.png)

Si quieres una manera rápida y fácil de imprimir un mapa mientras estás
editando en JOSM, instala el __complemento de impresión__. Aunque no
podrás hacer cambios estéticos en la impresión, es forma de imprimir 
fácil y rápida. Una vez que hayas instalado el complemento 
aparecerá un nuevo elemento denominado «Imprimir...» en el menú Archivo.

![]({{site.baseurl}}/images/plugins_html_mbd3c18f_es.png)

Haciendo clic ahí se abrirá el diálogo de Impresión que tiene este aspecto

![]({{site.baseurl}}/images/plugins_html_49f16afc_es.png)

Aquí se pueden cambiar las opciones de la impresora. Si no ves nada en
la página marca la casilla junto a «Map Preview» a la derecha. Acerca o
aleja el mapa cambiando el valor del campo «Scale». Incrementa la resolución
cambiando el número junto a «ppi». Cuando hayas acabado de editar las 
opciones haz clic en «Print».


Resumen
-------

Estos son algunos complementos útiles disponibles para JOSM. Puedes
continuar explorando los demás complementos. Como ya has visto, el menú 
Preferencias contiene una pequeña descripción de cada complemento, además
de poder abrir una página web con más información haciendo clic en el enlace
«Más información...» que hay junto a cada uno.

![]({{site.baseurl}}/images/plugins_html_17ea8a4b_es.png)

¡Buena suerte!

Apéndice
--------

Detalles de DirectUpload
------------------------

![]({{site.baseurl}}/images/plugins_html_m7e14a056_es.png)

Añadir tus trazas y puntos de referencia GPS al servidor de OSM es útil por
muchas razones.
__(Si no quieres que los puntos de tus GPX sean vistos por nadie más no necesitas
leer esta sección. Puedes cargar tus archivos GPX en JOSM y almacenarlos localmente).__
Antes que nada, las trazas GPS son la forma más útil de recopilar y georreferenciar 
objetos en OSM.
(Ver [Capítulo 6.5: Consideraciones sobre imágenes áereas](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit).

Los dispositivos GPS tienen mayor precisión que las imágenes por satélite
así que son herramientas útiles para comprobar si una  imagen aérea está 
desplazada. Usar muchas trazas GPS (a mayor número de trazas mayor capacidad
para determinar la precisión de la geolocalización) permite determinar si
la imagen de fondo está desalineada.

Subir trazas al servidor permite compartir la información. Permite a la gente
que no tiene acceso al terreno (ya sea porque no viven en esa zona o 
porque no tienen acceso a dispositivos GPS) ayudar en la digitalización. Hay
dos formas más de subir trazas: 1) Mediante el complemento de JOSM o 2) en
la página principal de OSM.

> Nota: los puntos de referencia GPS no pueden subirse directamente a la 
> base de datos de OSM. Sin embargo, pueden ser convertidas en trazas y después
> ser subidas temporalmente, de forma que pueden ser mostrados como objetos
> de fondo en Potlatch.

Una vez que has abierto un archivo GPX en JOSM,  selecciona «Herramientas» y
dentro de este menú, «Subir trazas». Describe el archivo GPX, escribe algunas
etiquetas y marca la visibilidad. Para la visibilidad, puedes elegir entre
privado, trazable, público o identificable.

1. **Identificable**: la traza se mostrará públicamente en Tus trazas**GPS y
   en la lista de trazas GPS públicas. Otros usuarios pueden descargar la traza
   sin procesar y relacionarla con tu nombre de usuario. Las marcas de tiempo
   también estarán disponibles mediante la API pública de GPS.

2. **Público**: tus trazas se mostrarán públicamente en Tus trazas**GPS y en
   la lista de trazas GPS públicas. Los demás usuarios todavía serán capaces
   de descargar las trazas sin procesar de la lista pública y ver las marcas de 
   tiempo que contiene. Sin embargo, los datos mostrados en la API no harán
   referencia a la página de tus trazas, ni dispondrán de marcas de tiempo,
   aunque los puntos estarán ordenados cronológicamente

3. **Trazable**: las trazas **no** se mostrarán en ningún listado público,
   pero los puntos seguirán estando disponibles mediante la API pública GPS
   **con marcas de tiempo**. Los demás usuarios podrán descargar los puntos
   pero estos no estarán asociados a ti.

4. **Privado**: Las trazas **no** se mostrarán en ningún listado público. 
   Los puntos estarán disponibles en la API GPS pública, ordenados cronológicamente 
   pero **sin marcas de tiempo**.

![]({{site.baseurl}}/images/plugins_html_2009cd0_es.png)

Subida de trazas GPS online
---------------------------

1. Ve a [http://www.openstreetmap.org/](http://www.openstreetmap.org/) y haz login.

2. Selecciona «GPS Traces» en la columna situada a la izquierda del mapa.![]({{site.baseurl}}/images/plugins_html_32e7d3be_en.png)

3. Selecciona [upload a trace](http://www.openstreetmap.org/trace/create).
Aquí también podrás  **See your traces** (ver tus trazas) para revisar tus
trazas GPS anteriores.

4. Selecciona tu archivo en «Choose File». Etiquétalo en el campo _Description_ (descripción),
proporciona algunas _Tags_ (etiquetas) y elige la visibilidad que tendrá. Si tienes
muchos archivos .gpx puedes comprimirlos en un archivo ZIP y subirlo. Será
tratada como un único fichero GPX mayor y solo se creará una entra en la
lista de trazas. ![]({{site.baseurl}}/images/plugins_html_m63dc490_en.png)

5. Selecciona *Upload* (subir). El archivo se subirá al servidor OSM, donde se pasará a la lista de archivos que esperan a ser insertados en la base de datos.
