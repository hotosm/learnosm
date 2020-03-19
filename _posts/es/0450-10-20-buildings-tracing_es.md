---
layout: doc
title: Trazado de edificios rectangulares - editor iD
permalink: /es/hot-tips/tracing-rectangular-buildings/
lang: es
category: hot-tips
---

Trazado de edificios rectangulares - editor iD
============

> Actualizado 2019-06-23

- TOC
{:toc}

Lo Esencial
----------

![Rectangular building][]  

> Esta imagen ![keymon]{: height="24px"} muestra qué botones o rueda de un mouse se han utilizado y qué botones del teclado fueron presionados.  

Puntos a tener en cuenta;  

- Para terminar de trazar un área, haga doble clic en el último punto,  
- Si el edificio debe tener esquinas cuadradas, asegúrese de trazarlo con esquinas cuadradas, o use la herramienta para escuadrar las esquinas (en inglés, atajo **q**).  
- ¡Asegúrese de etiquetar!  
- El tamaño importa - *las estimaciones de población se basan en el área de construcción acumulativa en un área determinada*,  
- el tamaño correcto de la construcción correcta ayudará a las personas a ubicar su aldea,  
- Amplíe lo suficiente para ver los detalles: una escala de zoom de 20 metros o menos suele ser la correcta.  
- **Buscando edificios** - escanee con su escala en algún lugar entre 50 metros y 80 metros. Tenga cuidado con las sombras y las líneas rectas (¡los edificios redondos son más difíciles de encontrar!)  
- Los edificios y carreteras, ríos, **landuse=residential** u otras características no deben superponerse.  
- Si comete un error, use el botón **Deshacer** ![back arrow]{: height="26px"} para deshacer sus últimos cambios.  
- Todos estamos mejorando el mapa. Si el mapeador anterior ha dejado a los edificios con una forma divertida o incorrecta de alguna manera, corríjalo y considere enviarles un mensaje cortés.  

Edificios oscurecidos o vistos en ángulo  
--------------------------------------

![building-obscured][]  

Es común que la imagen de satélite se tome en un ángulo que hace que el edificio parezca distorsionado. En la imagen de arriba, la imagen de la derecha muestra cómo se debe rastrear el edificio. A menudo es más fácil trazar el contorno del techo, luego arrastrarlo hasta el punto donde las paredes se encuentran con el suelo: esta fue la técnica utilizada para trazar el edificio de arriba. Observe también que un edificio parcialmente oscurecido por árboles se ha trazado correctamente como rectangular. 

Edificios con techo surcado
----------------------------
 
La mayoría de los edificios tienen esquinas a 90 grados o son edificios redondos.  

![building-ridge][]  
Este edificio tiene esquinas de 90 grados, pero tiene una cresta en el techo. El ángulo de la cámara inicialmente hace que el edificio tenga una forma extraña.  

![building-tree-ridge][]  
Este edificio tiene un árbol que lo oculta parcialmente. Es un edificio rectangular.  

En partes aisladas del mundo, es común usar láminas de hierro corrugado como techo; cuando son nuevas, reflejarán la luz solar, lo que crea un **efecto de destello muy brillante** en las imágenes satelitales. Es común que los edificios tengan una veranda o sean **en forma de L** y debe asegurarse de que su trazado siga la forma del edificio.  
Al trazar el contorno del edificio, debe intentar trazar el edificio en el tamaño correcto y en el punto donde sus paredes se encuentran con el suelo: ¡haga lo mejor que pueda! En muchas partes del mundo, los edificios se construyen parcialmente y luego se dejan sin techos hasta que se venden o, de lo contrario, se quieren usar. Mapear un edificio sin techo como un edificio normal, ya que no lleva mucho tiempo agregar un techo, y el techo puede haber sido agregado ya, en el tiempo transcurrido desde que se tomaron las imágenes satelitales.  

Haga su mejor esfuerzo: incluso los expertos estarán en desacuerdo a veces, y a veces solo queda ir allí para ver exactamente qué hay realmente. **En caso de duda, agréguelo como un edificio.**  

Etiquetas de edificio
-------------

Como estamos etiquetando edificios que nunca hemos visitado y con los que no estamos familiarizados, el esquema de etiquetado más seguro y recomendado es **building**=**yes** que puede ver en un edificio etiquetado correctamente si se desplaza hacia la parte inferior de panel de etiquetado y haga clic en **Todas las etiquetas**.  

Vea también  
---------

- [![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Videos Tutoriales del Equipo Humanitario OpenStreetMap - Agregando un Edificio a OpenStreetMap")  
*Subtítulos disponibles en algunos idiomas*  

- [Entrada del diario de Ivan Gayton para Hadjer Lamis, Chad - los comentarios de otros indican que la descripción también se ajusta a otras partes del mundo](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "Trazar un edificio rectangular, escuadrar las esquinas y agregar etiquetas."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "Antes y después - trazado de un edificio visto en ángulo"
[building-video]: /images/hot-tips/building-video.png "Videos Tutoriales del Equipo Humanitario OpenStreetMap - Agregando un Edificio a OpenStreetMap"