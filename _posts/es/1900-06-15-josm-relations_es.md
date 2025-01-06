---
layout: doc
title: Relaciones JOSM
permalink: /es/josm/josm-relations/
lang: es
category: josm
---

Relaciones
==========

> Revisado 2017-06-06  

En la [Guía para principiantes](/es/beginner) te explicamos que hay tres tipos de objetos que puedes dibujar en OpenStreetMap: puntos (nodos), líneas (vías) y polígonos (vías cerradas). Las líneas contienen numerosos puntos, y la propia línea lleva los atributos que definen lo que representa. Los polígonos son lo mismo que las líneas, excepto que la línea debe terminar donde comienza para formar una figura.  

En realidad, te mentimos un poco, porque existe otro tipo de objeto en OpenStreetMap, llamado relación. De la misma manera que una línea se compone de otros
puntos, una relación contiene un grupo de otros objetos, ya sean puntos, líneas o polígonos. Si quieres mejorar tus habilidades de edición, es importante que entiendas y sepas cómo editar correctamente las relaciones.  

Por ejemplo, imagina que quieres mapear un edificio que tiene patios en el centro. Tendrías que dibujar un polígono alrededor del exterior del edificio, y querrías otros polígonos alrededor de los patios para indicar que no forman parte del edificio. Este es un ejemplo de una relación. La relación contendría varios polígonos, y los atributos del edificio se adjuntarían a la relación, no a los polígonos.  

![An example of a multipolygon][]

Las relaciones se utilizan para representar cualquier cosa que requiera un conjunto de objetos para su definición. Otros ejemplos son las rutas de autobús (un conjunto de líneas), los objetos largos y complejos (ríos o carreteras), o varios polígonos que forman parte de una ubicación (como los edificios de una universidad).  

Principalmente, hay cuatro tipos de relaciones que encontrarás en OSM: Multipolígonos, Rutas, Límites y Restricciones (como, no girar a la izquierda). En esta sección, cubriremos los Multipolígonos y las Rutas.  

Crear Relaciones Multipolígono
-------------------------------

Veamos cómo crear una relación multipoligonal como la que se muestra arriba.  

- Primero, dibuja tus figuras. En este caso dibujaremos tres polígonos: un rectángulo exterior y dos rectángulos más pequeños.

![Multipolygon ways][]

- Selecciona todos los polígonos. Recuerda que puedes seleccionar varios objetos manteniendo pulsada la tecla MAYÚS (SHIFT) y haciendo clic en cada uno de ellos.  
- Elige *Herramientas->Crear multipolígono* en el menú.  
- La ventana de etiquetas ahora contiene el nuevo multipolígono.

![New mp object][]

- Haz clic en el botón editar.  

- Ahora deberías ver la ventana del editor de relaciones. Esto es un poco complejo porque ahora estás añadiendo etiquetas a un conjunto de vías.  

![Building relation][]

- Observa que en la parte superior del panel están las etiquetas de la relación. Estas etiquetas funcionan de la misma manera que siempre funcionan las etiquetas.  
- En la parte inferior hay una lista de los miembros de la relación. Esta relación tiene tres miembros, es decir, las tres vías que forman parte de nuestra relación.  
- Fíjate en que ya tenemos una etiqueta definida, *type=multipolygon*. Necesitamos añadir una etiqueta más que defina el tipo de objeto que representa la relación. Debemos añadir una etiqueta que diga *building=yes*.  
- Haz clic en el cuadro de etiquetas y añade esta etiqueta.  

![Building yes][]

- Los **roles** ya han sido asignados correctamente a las vías. Cada miembro de una relación tiene un rol, que indica cuál es el propósito de ese miembro. En este caso, el rol del polígono exterior debe definirse como **outer** y el rol de los dos polígonos interiores debe definirse como **inner**. Estos son los roles disponibles para los miembros de un multipolígono.  

- Haz clic en Aceptar y tu relación multipoligonal estará completa.  

![New multipolygon][]

Cuando creas un multipolígono como este, se representará en el mapa de esta manera:  

![Multipolygon in Mapnik][]

Puedes usar multipolígonos para cualquier objeto complejo que requiera polígonos interiores y exteriores, como un edificio o un río con zonas de tierra en su interior. Puedes encontrar información detallada sobre los multipolígonos en la [Wiki de OSM](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Relaciones de Ruta
----------------

Las relaciones también son muy útiles para representar rutas largas. Por ejemplo, una ruta de autobús o de bicicleta sigue varios segmentos de carretera. Para definir una ruta de este tipo, podemos crear una relación que contenga todos los segmentos de carretera que forman parte de la ruta. También se pueden incluir características adicionales, como las paradas de autobús, como miembros de una relación de ruta.  

![Route relation][]

Veamos cómo crear una relación para una ruta de autobús en JOSM:  

- Primero, selecciona todas las vías por las que pasa la ruta. Es posible que tengas que dividir algunas calles en segmentos separados si solo una parte de ellas pertenece a la relación. Puedes hacerlo con la herramienta "Dividir vía".  
- Cuando hayas seleccionado todos los segmentos, ve a *Preajustes->Transporte->Transporte público->Ruta de transporte público (autobús)*.  

![Public transport preset][]

- Aparecerá una nueva ventana donde puedes introducir información que se aplica a la ruta en su conjunto.

![New route relation][]

Es importante seleccionar el tipo de ruta específica en el menú desplegable de la parte superior. En el caso de las rutas de autobús, hay dos opciones disponibles: autobús y trolebús. Lo normal es introducir también el nombre, el número de referencia, el origen y el destino.

- Haz clic en "Nueva relación". Verás que aparece la ventana de la relación, igual que cuando creas un multipolígono.  

![Bus route relation][]

- Observa que ya hay etiquetas que definen la relación como una ruta. En lugar de *type=multipolygon*, tenemos *type=route*. También tenemos una etiqueta que la define como una ruta de autobús, en lugar de otro tipo de ruta.  
- Ahora puedes pensar, ¿cuál debería ser el **rol** de los miembros? Bueno, en el caso de una ruta, no necesitamos definir el rol de los miembros. Al dejar el rol en blanco, el software sabe que simplemente forman parte de la ruta. También podríamos definir el rol de cada segmento como **route**, pero no es necesario.  
- Haz clic en Aceptar y tu relación de rutas estará completa.  

> Si quieres una lista de todas las relaciones del mapa, puedes abrir el panel de relaciones haciendo clic en este botón de la izquierda: ![relation panel button][]{: height="30px"}. Esto abrirá un panel donde puedes seleccionar, editar y crear nuevas relaciones.  

Resumen
-------

Las relaciones pueden ser difíciles de entender y no es necesario usarlas con frecuencia, pero es importante conocerlas. De vez en cuando, te darás cuenta de que necesitas una relación para mapear algo correctamente, y puedes usar este conocimiento, y encontrar más información en la Wiki de OSM, para ayudarte a mapear relaciones de forma correcta.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png