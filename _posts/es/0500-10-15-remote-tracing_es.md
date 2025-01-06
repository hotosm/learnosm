---
layout: doc
title: Trazado de caminos, edificios, cuerpos de agua y uso de suelo 
permalink: /es/coordination/remote-tracing/
lang: es
category: coordination
---

Trazando caminos, edificios, cuerpos de agua y uso del suelo
===========================================

> Revisado 2016-02-08  

Siguiendo la sección [Remote, Armchair & Mapathon Section of LearnOSM](/es/coordination/remote/), que necesitarás si no tienes experiencia en el mapeo de HOT.  


Índice de sección
=====

[Caminos y carreteras, incluyendo senderos y pistas](/es/coordination/remote-tracing/#roads)  
[La red de carreteras](/es/coordination/remote-tracing/#the-highway-network)  
[Límite de uso de suelo residencial](/es/coordination/remote-tracing/#residential-boundaries)  
[Edificios, muros, vallas, complejos y barreras](/es/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Caminos

Cualquier tipo de caminos, desde autopistas hasta pistas y senderos, se etiquetan como "carretera" en OpenStreetMap. Es importante que las carreteras se agreguen correctamente a la base de datos (datos de OpenStreetMap) ya que se utilizan de muchas maneras:  

- El software de navegación, como los dispositivos Garmin y las aplicaciones en teléfonos inteligentes como Osmand, puede proporcionar información de rutas a grandes distancias si se les carga la información correcta. Como estos dependen del GPS dentro del dispositivo para localizar la posición en relación con el mapa base cargado en ellos, es importante que las carreteras estén realmente dentro de aproximadamente 15 metros del lugar correcto, ¡o no funcionarán!  
- Planificar la ruta para un gran camión de 'ayuda' es mucho más fácil si puedes diferenciar entre un sendero y una carretera principal, con todas las etapas intermedias.  
- Saber si la superficie de la carretera es asfalto o lodo blando marcará la diferencia en la planificación de tu ruta.
- Al intentar trazar la propagación de una enfermedad, la descripción de la víctima de "cerca del cruce de calles" es importante si puedes ver el cruce en el mapa.

### <a name="highways-howto"></a> Carreteras - Cómo mapear

![iD 3][]

1.  Cuando traces carreteras, asegúrate de estar lo suficientemente cerca. Como guía inicial, establece la escala en unos 20 metros y traza la carretera de modo que tu trazado tenga suficientes puntos para mantenerla sobre la carretera que puedes ver en la imagen satelital o muy cerca de ella. En la captura de pantalla anterior, puedes ver que he trazado la carretera que me pasaron, abajo, a través de los árboles y abajo, hasta otro edificio donde aparentemente se detiene. Donde los árboles están cerca de la carretera y la imagen la obtiene una cámara aérea, parece como si la carretera se estrechara al pasar por los árboles. Sin embargo, es solo el efecto de los árboles que oscurecen la vista, y la carretera tiene el mismo ancho en todo momento.  
2.  También he trazado otra sección de la carretera, asegurándome de que esté conectada en cada extremo: iD lo muestra con un punto de color ligeramente más grande y oscuro en el cruce. Es importante que las carreteras se unan y "compartan un nodo común" para que el software de rutas proporcione la guía correcta.  
3.  La carretera está etiquetada como 'highway=residential', y también he agregado 'surface=unpaved'.  
4.  Para obtener una descripción completa del etiquetado dentro de África, consulta la página wiki [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Existe un alto riesgo de sufrir conflictos que te impedirán guardar tu trabajo cuando trabajes en cualquier carretera que se extienda a otras cuadrículas donde los mapeadores también la estarán editando. Es recomendable guardar todos tus cambios antes de editar la carretera y luego guardar tus cambios a intervalos muy frecuentes, como después de agregar cada 6 nodos.


### La red de carreteras

![JOSM 4][]

Esta captura de pantalla muestra JOSM con el estilo HOT-OSM-Validate en uso [estilos JOSM](https://josm.openstreetmap.de/wiki/Styles). Aunque está diseñado para ayudar a los validadores, puede ser muy útil al realizar el mapeo inicial. Cualquier cosa que sea de color rojo tiene algún tipo de problema: los colores restantes se explican en la clave de esta captura de pantalla.  

1.  Esta sección de carretera está coloreada en rojo porque la etiqueta se ha escrito incorrectamente y se ha utilizado una letra mayúscula. La etiqueta debería ser highway=unclassified, lo que debería dar como resultado un color marrón claro en la captura de pantalla.  
2.  Esto es parte de la red de carreteras para el pueblo al suroeste. Esta red se conecta con el resto de la red de carreteras de África.  
3.  Estas secciones de carretera están "aisladas". No se conectan con el pueblo ni con otras carreteras de ninguna manera. En su formato actual no son muy útiles y se requerirá de futuras investigaciones para determinar si se pueden conectar al resto de la red o si se debería considerar eliminarlas.  


**¿Carretera o arroyo?**

![iD 5][]

No hay vistas de estilo disponibles para ayudar a usar iD, pero en esta captura de pantalla puedes ver un área de vegetación y suelo. El suelo parece ser limo o tal vez incluso un área de marismas sin el agua presente. Las líneas punteadas en blanco y negro representan los senderos en iD y las he resaltado temporalmente y luego he eliminado una de ellas para mostrar el terreno.  

1.  highway=path o lecho fluvial... ¡Probablemente ambos! Las carreteras de todos los tamaños con frecuencia siguen un valle fluvial y, en muchos casos, pueden seguir el curso de un río o arroyo de temporada. En este caso, parece ser un área plana inundada que en el momento en que se tomó la imagen satelital estaba seca y se utilizaba como sendero. Esto debería etiquetarse como:  
highway=path  
seasonal=yes  
surface=unpaved  
2.  El sendero se puede ver claramente avanzando hacia la banda de árboles y arbustos, pero no es posible ver su curso exacto a través de los árboles. En estas circunstancias, puedes estar seguro de que el sendero, la pista o la carretera están presentes. Solo está oscurecido por los árboles. He mapeado esto continuando el sendero que estaba trazando donde se podía ver claramente en el suelo, como una línea recta a través de los árboles hasta la continuación visible y clara del otro lado. Usa esto con precaución, pero en este caso es obvio que el sendero está presente y su recorrido es probable que esté muy cerca de la línea que he dibujado. Este es un uso más extremo: es más habitual estimar el recorrido de una carretera por solo unos pocos metros donde tu visión está oscurecida por uno o dos árboles.  
3.  Habiendo eliminado el sendero para poder ver el suelo con claridad, puedo reemplazarlo fácilmente usando la función 'deshacer' de iD.  

***


## Límites residenciales

Los límites residenciales se utilizan para muchos propósitos en OpenStreetMap.  

+ El uso más simple es poder ver áreas residenciales con niveles de zoom más altos al ver [OpenStreetMap.org](http://www.openstreetmap.org), donde están coloreadas de gris pálido en la vista estándar.  
+ Cuando no hay tiempo para mapear en detalle desde el principio, el proyecto dentro del Task Manager con frecuencia requerirá algo similar a esto:  

>    Mapea infraestructuras esenciales como escuelas, lugares de culto y mercados.  
>    Traza el límite de los asentamientos y cementerios.  
>    Trazaremos carreteras más adelante en otra tarea.   
+  landuse=residential también se puede utilizar con fines estadísticos, y el mapeo preciso se vuelve importante  

* Si puedes establecer cuántas personas residen normalmente en cada vivienda y  
 cuántas viviendas se construyen normalmente en un área determinada, entonces  
 una vez que hayas resuelto el área cubierta por el límite landuse=residential,  
 puedes establecer una población muy aproximada para esa área.  
 La estimación del número de trabajadores humanitarios y la cantidad de medicamentos ahora se vuelve más realista.
* Los nombres y límites de lugares a menudo se importan de otras fuentes, pero la ubicación no siempre es precisa. Una vez que tengas un límite residencial, la persona que realiza la importación puede ver dónde probablemente debería estar el nombre del lugar.


### <a name="residential-howto"></a> landuse=residential - cómo mapear


** En un mundo ideal **  

*Etapa 1*: se toma la decisión de mapear un área y un mapeador rápidamente pone un límite del terreno muy irregular con landuse=residential alrededor de un área,  
*Etapa 2*: se crea el proyecto del Task Manager y los mapeadores individuales refinan el límite para que esté más cerca de los edificios, etc.  

![JOSM residential][]

![iD residential][]
 
Las capturas de pantalla de iD y JOSM anteriores muestran un uso correcto del límite landuse=residential.  

1.  El límite debe cerrarse para que el punto inicial de la línea (vía) se una al punto final.  
2.  Los segmentos y nodos de los límites no deben unirse a las carreteras, cursos de agua, edificios ni a ningún otro elemento. En esencia, no debe compartir ningún nodo. Pero pueden cruzarse.  
3.  El límite debe estar bastante cerca de los edificios y de cualquier jardín o patio que forme parte de la agrupación.  


En la captura de pantalla a continuación, mi cuadrado contiene parte del límite landuse=residential. La persona que completó el cuadrado a mi derecha ha continuado con el uso de la tierra = límite residencial a través de su cuadrado y luego me lo 'entregó' correctamente al colocar el límite justo dentro de mi cuadrado para que yo pueda establecer exactamente dónde debería estar en mi cuadrado.  


![JOSM residential 1][]

Agregaré nodos adicionales al límite, extendiéndolo horizontalmente a través de mi cuadrado para que rodee los edificios, y en la parte inferior continuaré el límite como una línea recta justo dentro del cuadrado debajo del mío para que la persona que seleccione el cuadrado debajo del mío pueda extenderlo alrededor de cualquier edificio que puedan tener.  

Esta es una operación difícil: puedes ver solo una pequeña parte de todo el pueblo / ciudad / villa y, aunque hagas lo mejor posible con el límite landuse=residential, es extremadamente probable que un validador que tenga una visión general de varias cuadrículas necesite ordenar el límite lo mejor que pueda después de que las cuadrículas individuales hayan sido mapeadas.  

> Existe un alto riesgo de sufrir conflictos cuando se trabaja en un límite landuse=residential, ya que se extiende a otras cuadrículas donde los mapeadores también lo editarán. Se recomienda guardar todos los cambios antes de editar el límite y luego guardar los cambios a intervalos muy frecuentes, como después de agregar cada 6 nodos.

***


***  

Los edificios se agregan a los datos del mapa por varias razones:  

* La densidad de los edificios en un área da una muy buena indicación del número de personas que residen allí.  
* El tamaño, la forma y la ubicación de un edificio pueden ayudar a identificarlo como un sitio potencial de evacuación o tratamiento.  
* El tamaño, la forma y la ubicación relativa de los edificios se pueden usar para identificar ubicaciones particulares como pozos, estaciones de ayuda, escuelas, etc.  
* Existe la posibilidad de estimar el grado de daño sufrido por un edificio, que se puede utilizar para estimar las posibles víctimas y el nivel de apoyo que puede requerirse; esto está actualmente en discusión (enero de 2015) para uso futuro.  


### <a name="buildings-howto"></a> Edificios: cómo mapear

La gran mayoría de los edificios que requieren mapeo para HOT se basan en formas rectangulares con esquinas cuadradas o son redondos. Si un edificio parece ser una mezcla de ambos, es más probable que estés viendo un edificio cuyo contorno está oscurecido por una sombra, reflejo, follaje o similar.  

Para algunas tareas donde solo se requiere el contorno de un área, la tarea puede especificar que los edificios se mapeen como nodos, pero estas situaciones ahora son raras.  


#### building=yes

A menos que las instrucciones del proyecto indiquen lo contrario, los edificios deben etiquetarse como **building=yes**  

* A menudo puede haber una demora entre que se toma la imagen satelital y se lleva a cabo el mapeo. Es posible que el edificio que estás mirando que parece no tener techo ya se haya completado y esté habitado. También es posible que estés mirando un edificio con varios pisos, estando los inferiores habitados y los superiores deshabitados.  

> **Mapeo de edificios usando iD**: cuando uses la herramienta de área dentro de iD para crear la forma básica, debes recordar cambiar la etiqueta a building=yes. La configuración predeterminada simplemente etiquetará la forma como area=yes. Si tu trazado es de un edificio con esquinas cuadradas, tómate el tiempo para cuadrar el elemento trazado (resáltalo y usa el atajo 'q').  

* JOSM es mucho más rápido para mapear edificios: [Las herramientas de construcción de JOSM se explican aquí.](/es/josm/josm-more-plugins/#the-buildings-tools-plugin)  

![Buildings iD][]

Esta captura de pantalla muestra parte de una cuadrícula que se está editando. Observa la escala en la parte inferior de 15 metros, aproximadamente la cifra a la que debes apuntar al editar características. Al trazar, debes apuntar a ubicar el edificio donde se encuentra con el suelo:  

1.  **Edificios redondos.** En este caso, son bastante bajos y su sombra es difícil de ver. Si estuvieras parado entre ellos, parecerían domos. He mapeado y etiquetado solo uno de ellos hasta ahora **building=yes**. Para agregar rápidamente los edificios redondos restantes en JOSM o iD, seleccionaría este (resáltalo), atajo de teclado *Ctrl+c*, movería mi cursor al centro de otro edificio redondo del mismo tamaño, atajo de teclado *Ctrl+v*. Cuando todos los edificios redondos de este tamaño se hayan agregado en mi cuadrícula, pego un edificio sobre un edificio redondo de diferente tamaño, JOSM - uso *Alt+Ctrl* y el ratón para cambiar su tamaño al tamaño correcto, lo copio y luego lo pego sobre todos los edificios redondos del mismo tamaño.  
2.  **Edificios rectangulares.** Estos edificios en particular están proyectando una sombra notable. La sombra puede ayudar a identificar la forma de un edificio que está parcialmente oscurecido por otro elemento. Encontrarás que muchos edificios no son tan simples y tienen una galería o tienen forma de "L". Debes trazar la forma real del edificio, ya que esto ayudará a identificarlo cuando se agreguen nombres y otros datos como parte del proceso de encuestas de campo.  
3.  **Barreras: muros (o setos) de un complejo.** Habiendo examinado la imagen, acercando y alejando el zoom hasta que estoy satisfecho con la forma del objeto (usa también su sombra para identificarlo), creo que esto es un muro y lo he etiquetado como **barrier=wall**. Las alternativas incluyen barrier=fence y barrier=hedge.  
4.  He unido la barrier=wall al building=yes en la esquina del edificio.  


### La imagen satelital distorsiona la forma del edificio.


![Buildings_2][]

1.  La imagen satelital de arriba es de un edificio, pero el satélite no estaba directamente encima, por lo que el edificio parece distorsionado y un muro final es visible en la imagen. Debido a este ángulo, el techo a dos aguas no parece rectangular. El sol está prácticamente directamente encima del edificio, por lo que la sombra del edificio indicada por las flechas de la figura 1 confirma que el edificio es rectangular.  

2.  Para mapear este edificio, crea un rectángulo que se extienda desde las flechas del punto 2 hasta donde estimes que termina el edificio, indicado por el punto 3 en esta imagen.  


***


***


# Sigue leyendo

- [Consejos de mapeo HOT de África Occidental por el usuario Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
- [Entrada wiki de OSM sobre validación](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
- [Highway Tag Africa: la referencia preferida para el etiquetado de carreteras en África](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
- [Tutorial breve en francés sobre mapeo remoto](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png