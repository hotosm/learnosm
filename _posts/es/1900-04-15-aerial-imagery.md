---
layout: doc
title: Usando fotografías aéreas.
permalink: /es/josm/aerial-imagery/
lang: es
category: josm
---

Usando Fotografías Aéreas
=========================

Dibujar sobre fotografías es una forma fácil y potente de contribuir a
OSM. Especialmente cuando la resolución es alta y el cielo está despejado,
digitalizar a partir de imágenes satelitales pueden proporcionar el esqueleto
de los mapas de OSM. Esto es útil ya que hace que el trabajo de campo,
o la toma de datos de las características de un objeto sobre el terreno, 
sea más fácil para las personas desplazadas a la zona.

Sin embargo, trazar sobre imágenes requiere tomar algunas precauciones 
para no dibujar los  objetos en una posición equivocada. Hay dos
importantes aspectos que deben ser tenidos en consideración a la hora de 
trazar sobre imágenes y fotografías:

1.  Resolución: La resolución se refiere al nivel de detalle de la imagen 
    o el número de píxeles que la componen. Un píxel es la unidad más
    pequeña de una imagen. A menor área por píxel mejor es la resolución.
    Con píxeles más pequeños podrás distinguir los objetos mejor, como se
    demuestra en la siguiente imagen. A la izquierda hay una imagen
    con baja resolución y menos píxeles por imagen. Es difícil distinguir 
    la pieza de puzle. Por otro lado, la imagen de la derecha, con alta
    resolución, tiene píxeles más pequeños, lo que permite que la pieza
    se distinga mucho mejor. En OSM, la mayoría de las veces podrás usar
    imágenes de alta resolución. Las imágenes civiles ofrecen resoluciones
    por debajo de «1 metro», lo que significa que cada píxel de la imagen
    representa un metro cuadrado. ¡No está mal!

    ![puzzle][]

2.  Georreferenciación: georreferenciación es un término de cómo se han establecido
    las coordenadas de la imagen, o esencialmente, cómo de cerca están los 
    píxeles de la imagen respecto a su localización en la realidad. Es
    un proceso relativamente complejo; a mayor  relieve y variación del 
    terreno, más difícil es la georreferenciación. Los satélites se 
    encuentran a cientos de kilómetros de la superficie de la tierra y
    cuando toman fotografías planas para representar la tierra, que es curva, se
    producen ciertas distorsiones y desplazamientos. La existencia de 
    desplazamientos se muestra ligeramente cuando te desplazas entre dos
    imágenes que cubren la misma zona, por ejemplo, cuando acercas el mapa
    y la capa anterior es remplazada con una con mejor resolución. 
    ¿Puedes ver que los objetos mostrados en la imagen se desplazan?

Para hacerse una idea de por qué se produce el desplazamiento de la imagen
haz una fotografía a una estatua e imprímela. Ahora, defórmala y estírala
para que imite la forma de la estatua. Esto es lo que ocurre cuando se
georreferencia una imagen.

Afortunadamente, progresivamente se van construyendo satélites con mayor
precisión de imagen y resoluciones extremadamente precisas (a menudo la unidad 
está en centímetros). Sin embargo, todavía los satélites no georreferencian,
por lo que la unidad sigue estando en torno a un metro. Una georreferenciación
en torno a 5-10 m se considera buena.

Cuando se quiere levantar con precisión una zona basándose en imágenes 
satélitales hay que tener en mente que una imagen de alta resolución
no es el único aspecto que permite una buena localización. Casi todos
los objetos presentes en la imagen están desplazados de su localización
en el terreno.

Hay formas de minimizar la imprecisión provocada por el desplazamiento
de la imagen. A continuación te contamos los dos escenarios y los 
métodos principales para sortear los desplazamientos:

1. quieres trazar a partir de imágenes en una zona que ya ha sido 
levantada en OSM,

2. quieres trazar a partir de imágenes en un área en la que aún no hay
datos en OSM.

Desplazamiento con datos existentes en OSM
------------------------------------------

Algunas veces, tras descargar datos de OSM, añadir fotografías y
acercarnos a la mejor resolución, te das cuenta de que los datos
existentes en OSM, especialmente las carreteras no se superponen
exactamente con los objetos de la fotografía.

![existing data][]

Muchos principiantes en OSM creen que las carreteras han sido trazadas
de forma incorrecta y mueven las mismas a lo que parece ser la mejor 
posición. ¡Mover la carretera podría estar completamente __MAL__! Es
posible que la imagen esté mal alineada en comparación con la realidad
en campo.

Una forma de comprobar que una imagen está desplazada es mediante el uso
de trazas GPS. Para hacer esto, añade __trazas GPS existentes__ (tuyas o
de otras personas-- puedes encontrar más información en [Subir datos GPS al servidor](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)
al área que estás trazando. Haz clic en descargar ![download][] y después
marca «Datos GPS en bruto» en la parte superior de la ventana «Descargar».
Después de la descarga aparecerá una capa adicional denominada «Datos GPX descargados».

![downloaded GPX][]

En este ejemplo, con los datos GPS (en rojo) añadidos puedes ver que los
datos existentes (las carreteras) están colocados correctamente. La fotografía
no está correctamente georreferenciada y tiene un desplazamiento en comparación
con la realidad. Debe ser ajustada.

> Que no te confunda si las trazas aparecen como una conjunto de líneas
> y no como una única línea sólida. La mayoría de dispositivos GPS tienen una
> precisión de 2-5 m, que es suficiente para las carreteras ya que no se conduce 
> o camina por el centro de la carretera. Intenta imaginar una media de las 
> trazas GPS en medio de las líneas existentes.

Para desplazar la imagen al lugar correcto, haz clic con el botón derecho
del ratón en la capa de la fotografía o en el menú «Imágenes», abre 
«Nuevo desplazamiento», o usa el botón de ajuste de la imagen ![adjust button][]
en la barra de herramientas izquierda. Arrastra entonces la imagen hasta
que quede correctamente situada según las trazas GPS. Haz clic en otra
herramienta cuando hayas acabado. Observa que en algunos proyectos la gente
guarda el desplazamiento en el wiki o en otras fuentes, de forma que las
personas que están trabajando juntas en la misma zona pueden compartir
valores comunes del mismo. También puedes ponerle al desplazamiento un
«Nombre del marcador» si lo necesitas para usarlo de nuevo en un futuro.
Este desplazamiento se guarda en nuevo menú disponible en el desplegable
«Imágenes».

![adjust window][]

![downloaded GPX][]

Ahora que la fotografía está ajustada puedes trazar sobre ella. Mientras
haces el levantamiento puedes ocultar «Datos GPX descargados» si interfiere
con tu trabajo.

![adding to existing data][]

Recuerda una última cosa: ¡el desplazamiento podría no ser el mismo a
lo largo de toda la extensión de la imagen! Esto es especialmente cierto
en zonas con un relieve accidentado. Así que cuando parezca que la
imagen está desplazada de nuevo, repite el proceso completo.

Desplazamiento sin datos en OSM
-------------------------------

Podría ser que fueras el primero en levantar una zona en OSM, por
ejemplo en una remota zona rural o en países en desarrollo. Por tanto,
no puedes descargar datos de OSM existentes ni trazas GPS.

![no data][]

¿Cómo afrontar esta situación sin tener ninguna referencia para controlar
el desplazamiento de la imagen? Hay dos formas de sortear el problema:

1.  Ir a la zona para tomar datos: si tienes la posibilidad de usar un GPS en la zona,
    toma puntos de referencia usando infraestructura destacada o en objetos
    que sean visibles en la fotografía y/o realiza trazas de las carreteras.
    Después añade estos datos a JOSM.

2. Usar datos existentes: si no puedes ir a tomar datos en campo, otra
    opción es tomar datos de otras __Bases de Datos de Licencia Abierta (ODbl)__.
    Si puedes, es mejor comprobar las imágenes con otras fotografías que
    estén correctamente alineadas. Si estás corrigiendo el desplazamiento
    de una imagen en base a otra, la forma más fácil de hacerlo es
    utilizar transparencia. Para hacer esto, simplemente haz clic
    en la línea de gradiente y cambia la opacidad de la capa.

    ![change opacity][]

Normalmente las fotografía de las administraciones públicas tienen una resolución
pobre (más de 10 metros de resolución) por lo que podría ser peor que
la imagen anterior.

Si tienes acceso a datos vectoriales, las carreteras, lagos, ríos y edificios
son tu mejor opción para determinar el desplazamiento de la fotografía.
Intenta alejarte de los bordes ya que estos no son fiables para descubrir
si una fotografía está desalineada.

Resumen
-------

Trazar sobre fotografías es una técnica que hace que el levantamiento de 
datos en OSM sea más rápido y eficiente. Sin embargo, debe hacerse con precisión
y cuidado. Hay veces en los que se está levantando una zona y la imagen de 
esa zona está desplazada. Hay formas de lidiar con fotografías 
inexactas, ya sea porque la imagen tiene poca resolución o
porque está mal georreferenciada.. Estas formas implican principalmente georreferenciar la imagen con
trazas GPS.



[puzzle]: {{site.baseurl}}/images/offset_puzzle_es.png
[existing data]: {{site.baseurl}}/images/offset_existing_data_en.png
[download]: {{site.baseurl}}/images/offset_tool_download_en.png
[downloaded GPX]: {{site.baseurl}}/images/offset_downloaded_gpx_en.png
[adjust button]: {{site.baseurl}}/images/offset_tool_adjust_en.png
[adjust window]: {{site.baseurl}}/images/offset_adjust_window_es.png
[adding to existing data]: {{site.baseurl}}/images/offset_add_to_data_en.png
[no data]: {{site.baseurl}}/images/offset_no_data_en.png
[change opacity]: {{site.baseurl}}/images/offset_change_opacity_es.png
