---
layout: doc
title: Imágenes aéreas
permalink: /es/josm/aerial-imagery/
lang: es
category: josm
---

Imágenes aéreas
================

> Revisado 2015-09-21  

El trazado de imágenes es una forma fácil y poderosa de contribuir a OSM. El uso de imágenes para dibujar puntos, líneas y formas en el suelo se denomina **digitalización**. A menudo se puede separar del acto de recopilar datos de atributos en el terreno, lo que suele denominarse **verificación en campo**. La digitalización de imágenes puede proporcionar el esqueleto de los mapas de OSM, lo que facilita la verificación en campo para las personas que están en el terreno. En este capítulo, aprenderemos un poco más sobre cómo funcionan las imágenes aéreas.  

Acerca de las imágenes
-------------

Imágenes aéreas es el término que usamos para describir fotografías tomadas desde el cielo. Estas se pueden tomar desde aviones, drones, helicópteros o incluso cometas y globos, pero la fuente más común de imágenes proviene de los satélites que orbitan la Tierra.  

[En el capítulo sobre GPS](/es/mobile-mapping/using-gps) aprendimos sobre las docenas de satélites que orbitan la Tierra y que permiten a nuestros receptores GPS identificar nuestra latitud y longitud. Además de estos satélites GPS, también hay satélites que toman fotos de la Tierra. Estas fotos luego se manipulan para que puedan usarse en software GIS (de mapeo). Las imágenes aéreas de Bing se componen de fotografías de satélite.  

Resolución
----------

Todas las fotografías digitales están formadas por píxeles. Si haces un acercamiento muy grande a una fotografía, notarás que la imagen comienza a volverse borrosa y, finalmente, verás que una imagen está formada por miles de pequeños cuadrados que son cada uno de un color diferente. Esto ocurre ya sea que la fotografía se tome con una cámara de mano, un teléfono móvil o un satélite en órbita alrededor de la Tierra.  

![Image resolution][]

La resolución se refiere al número de píxeles de ancho por el número de píxeles de alto que tiene una imagen. Más píxeles significa una resolución más alta, lo que significa que puedes ver más detalles en la fotografía. La resolución de las cámaras de mano a menudo se mide en megapíxeles. Cuantos más megapíxeles pueda grabar tu cámara, mayor será la resolución de tus fotos.  

Con las imágenes aéreas pasa lo mismo, excepto que generalmente hablamos de resolución de manera diferente. La medición es importante con las fotografías aéreas; pues un píxel representa una cierta distancia en el suelo. Por lo general, describimos las imágenes como “imágenes con una resolución de dos metros”, lo que significa que un píxel equivale a dos metros en el suelo. Las imágenes con una resolución de un metro tendrían una resolución más alta que esta y la resolución de 50 cm sería aún mayor. Este es generalmente el rango de imágenes que proporciona Bing, aunque varía entre ubicaciones y en muchos lugares es mayor a dos metros, lo que vuelve difícil identificar los objetos en la imagen.  

![Comparison of low and high resolution imagery][]

Cuanto mayor sea la resolución de una imagen aérea, más fácil será utilizarla para hacer mapas.  

Georreferenciación
---------------

Cada píxel de una fotografía aérea tiene un tamaño y cada píxel tiene también una ubicación. Como mencionamos anteriormente, esto se debe a que las fotografías aéreas están georreferenciadas.  

Al igual que un punto GPS tiene latitud y longitud, también la tendrán los píxeles en una imagen aérea. Sin embargo, así como una mala resolución puede plantear desafíos para el mapeo, también lo pueden hacer las imágenes mal georreferenciadas.  

Pensemos por un momento en cómo funciona la georreferenciación y por qué es un desafío hacerlo. Cuando alguien georreferencia una imagen, primero se identifica un puñado de píxeles en la imagen que son ubicaciones conocidas. Si tenemos una fotografía cuadrada, podríamos identificar las coordenadas de las cuatro esquinas y, de esa manera, toda la imagen se puede colocar correctamente.  

Todo esto parece bastante simple, pero considera esto: la Tierra es redonda; las lentes de las cámaras son redondas; sin embargo, las fotografías son planas y bidimensionales. Esto significa que cuando se mapea una imagen plana en la Tierra redonda, siempre habrá algún estiramiento y distorsión de la imagen. Imagínate tratando de aplanar una cáscara de naranja. No acabará siendo rectangular. Debido a este problema, es posible que todos los píxeles de una imagen aérea no estén perfectamente ubicados.  

Afortunadamente, algunas personas realmente inteligentes han ideado ingeniosos algoritmos para resolver este problema, por lo que las imágenes que ves en Bing están bastante cerca de ser precisas. En la mayoría de los lugares, no se notará incorrecto en absoluto y ciertamente está bien para hacer mapas. Las áreas más comunes en las que las imágenes se ubican de manera incorrecta son las áreas montañosas. En el [capítulo Corrección del desplazamiento de imágenes] (/es/josm/correcting-imagery-offset) veremos cómo corregir este problema.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png