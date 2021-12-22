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

En la [Guía para principiantes](/es/beginner) explicamos que hay tres tipos de objetos que se pueden dibujar en OpenStreetMap: puntos (nodos), líneas (vías) y polígonos (vías cerradas). Las líneas contienen numerosos puntos, y la propia línea lleva los atributos que definen lo que representa. Los polígonos son lo mismo que las líneas, excepto que la línea debe terminar donde comienza para formar una forma.  

De hecho, le mentimos, porque existe otro tipo de objeto en OpenStreetMap, llamado relaciones. De la misma manera que una línea se compone de otras
puntos, una relación contiene un grupo de otros objetos, ya sean puntos, líneas o polígonos. Si quiere avanzar en sus habilidades de edición, es importante que entienda y sepa cómo editar correctamente las relaciones.  

Por ejemplo, imagine que quiere mapear un edificio que tiene patios en el centro. Tendría que dibujar un polígono alrededor del exterior del edificio, y querría otros polígonos alrededor de los patios para indicar que no forman parte del edificio. Este es un ejemplo de relación. La relación contendría varios polígonos - y los atributos del edificio se adjuntarían a la relación, no a los polígonos.  

![An example of a multipolygon][]

Las relaciones se utilizan para representar cualquier cosa que requiera una colección de objetos para su definición. Otros ejemplos son las rutas de autobús (una colección de líneas), los objetos largos y complejos (ríos o carreteras), o múltiples polígonos que forman parte de una ubicación (como los edificios de una universidad).  

Hay principalmente cuatro tipos de relaciones que encontrará en OSM: Multipolígonos, Rutas, Límites y Restricciones (como, no girar a la izquierda). En esta sección cubriremos los Multipolígonos y las Rutas.  

Crear Relaciones Multipolígono
-------------------------------

Veamos cómo crear una relación multipoligonal como la que se muestra arriba.  

- En primer lugar, dibuje sus formas. En este caso dibujaremos tres polígonos, un rectángulo exterior y dos rectángulos más pequeños.

![Multipolygon ways][]

- Seleccione todos los polígonos. Recuerda que puede seleccionar varios objetos manteniendo pulsada la tecla MAYÚS (SHIFT) y haciendo clic en cada uno de ellos.  
- Elija *Herramientas->Crear multipolígono* en el menú.  
- La ventana de etiquetas contiene ahora el nuevo multipolígono.

![New mp object][]

- Clic en el botón editar.  

- Ahora debería ver la ventana del editor de relaciones. Esto es un poco complejo porque ahora estás añadiendo etiquetas a una colección de formas.  

![Building relation][]

- Observe que en la parte superior del panel están las etiquetas de la relación. Estas etiquetas funcionan de la misma manera que siempre funcionan las etiquetas.  
- En la parte inferior hay una lista de los miembros de la relación. Esta relación tiene tres miembros, es decir, las tres vías que forman parte de nuestra relación.  
- ObservE que ya tenemos una etiqueta definida, *type=multipolygon*. Tenemos que añadir una etiqueta más que defina el tipo de objeto que representa la relación. Debemos añadir una etiqueta que diga *building=yes*.  
- Haga clic en el cuadro de etiquetas y añada esta etiqueta.  

![Building yes][]

- Los **roles** ya han sido debidamente asignados a las vías. Cada miembro de una relación tiene un rol, que indica cuál es el propósito de ese miembro. En este caso, el rol del polígono exterior debe definirse como **outer** y el rol de los dos polígonos interiores debe definirse como **inner**. Estos son los roles disponibles para los miembros de un multipolígono.  

- Haz clic en Aceptar y tu relación multipoligonal estará completa.  

![New multipolygon][]

Cuando crea un multipolígono como este, se representará en el mapa de esta manera:  

![Multipolygon in Mapnik][]

Los multipolígonos se pueden utilizar para cualquier objeto complejo que requiera polígonos interiores y exteriores, como un edificio o un río con parches de tierra en su interior. Se puede encontrar información detallada sobre los multipolígonos en la [Wiki de OSM](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Relaciones de Ruta
----------------

Las relaciones también son muy útiles para representar rutas largas. Por ejemplo, una ruta de autobús o de bicicleta sigue varios segmentos de carretera. Para definir una ruta de este tipo, podemos crear una relación que contenga todos los segmentos de carretera que forman parte de la ruta. Las características adicionales, como las paradas de autobús, también pueden ser miembros de una relación de ruta.  

![Route relation][]

Veamos cómo crear una relación para una ruta de autobús en JOSM:  

- En primer lugar, seleccione todas las vías por las que discurre la ruta. Es posible que tenga que dividir algunas calles en segmentos separados si sólo una parte de ellas pertenece a la relación. Puede hacerlo con la herramienta "Dividir vía".  
- Cuando todos los segmentos estén seleccionados, vaya a *Preajustes->Transporte->Transporte público->Ruta de transporte público (autobús)*.  

![Public transport preset][]

- Aparece una nueva ventana en la que puede introducir información que se aplica a la ruta en su conjunto.

![New route relation][]

Es importante seleccionar el tipo de ruta específica en el menú desplegable de la parte superior. En el caso de las rutas de autobús, hay dos opciones disponibles: autobús y trolebús. Lo normal es introducir también el nombre, el número de referencia, el origen y el destino.

- Haga clic en "Nueva relación". Verás que aparece la ventana de la relación, igual que cuando creas un multipolígono.  

![Bus route relation][]

- Observe que ya hay etiquetas que definen la relación como una ruta. En lugar de *type=multipolygon*, tenemos *type=route*. También tenemos una etiqueta que lo define como una ruta de autobús, en lugar de otro tipo de ruta.  
- Ahora puede pensar, ¿cuál debe ser el **role** de los miembros? Bueno, en el caso de una ruta, no necesitamos definir el rol de los miembros. Dejando el rol en blanco el software sabe que simplemente son parte de la ruta. También podríamos definir el rol de cada segmento como **route**, pero no es necesario.  
- Haga clic en Aceptar y su relación de rutas estará completa.  

> Si quiere una lista de todas las relaciones del mapa, puede abrir el panel de relaciones haciendo clic en este botón de la izquierda: ![botón del panel de relaciones][]{: height="30px"}. Esto abrirá un panel en el que podrá seleccionar, editar y crear nuevas relaciones.  

Resumen
-------

Las relaciones pueden ser difíciles de entender y no es necesario utilizarlas a menudo, pero es necesario conocerlas. De vez en cuando puede darse cuenta de que necesita una relación para mapear algo correctamente, y puede usar este conocimiento, y encontrar más información en la Wiki de OSM, para ayudarle a mapear relaciones correctamente.


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