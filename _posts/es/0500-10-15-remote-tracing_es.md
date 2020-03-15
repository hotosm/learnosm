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

Siguiendo de la sección [Remote, Armchair & Mapathon Section of LearnOSM](/es/coordination/remote/), que necesitará si no tiene experiencia en el mapeo de HOT.  


Índice de sección
=====

[Carreteras y autopistas, incluidos caminos y pistas](/es/coordination/remote-tracing/#roads)  
[La red de autopistas](/es/coordination/remote-tracing/#the-highway-network)  
[Límite de uso de suelo residencial](/es/coordination/remote-tracing/#residential-boundaries)  
[Edificios, muros, cercas, compuestos y barreras](/es/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Caminos

Cualquier tipo de caminos, desde rutas a trazas y senderos, están etiquetadas "carretera" en OpenStreetMap. Es importante que las carreteras estén correctamente agregadas a la base de datos (datos de OpenStreetMap) por cuanto son usadas de tantos modos:  

Software de navegación tales como los artefactos Garmin y aplicaciones en teléfonos inteligentes como Osmand, pueden proporcionar información de ruteo para grandes distancias, si se les carga la información correcta. Como depende del gps dentro del artefacto para localizar la posición en relación al mapa base cargado dentro de ellos, es importante que las carreteras estén realmente dentro de aproximadamente 15 metros del lugar correcto, o no funcionarán!  
- La planificación de la ruta para un gran camión de 'ayuda' es mucho más fácil si puede diferenciar entre un camino y un camino troncal, con todas las etapas intermedias.  
- Saber si la superficie de la carretera es asfalto o lodo blando hará la diferencia en la planificación de su ruta.
- Al intentar trazar la propagación de una enfermedad, la descripción de la víctima de "cerca del cruce de calles" es importante si puede ver el cruce en el mapa.

### <a name="highways-howto"></a> Carreteras - Cómo mapear

![iD 3][]

1. Cuando esté trazando carreteras, asegúrese de amplificar lo suficiente. Como guía de inicio, fije la escala a aproximadamente 20 metros, y trace la carretera de modo que su trazado tenga suficientes puntos en él para mantenerlo sobre, o muy próximo a, el camino que puede ver en su imagen satelital. En la captura de pantalla arriba, puede ver que he trazado el camino que me han pasado, abajo, a través de los árboles y abajo, hasta otro edificio donde aparentemente se detiene. Donde los árboles están próximos al camino, y la imagen es obtenida por una cámara aérea, el camino parece angostarse mientras atraviesa los árboles. Sin embargo, es solo el efecto de los árboles oscureciendo la vista, siendo el camino del mismo ancho todo a lo largo.  
2. También he trazado otra sección de la carretera, asegurándome de que esté conectada en cada extremo: iD muestra esto con un punto de color ligeramente más grande y oscuro en el cruce. Es importante que las carreteras se unan y "compartan un nodo común" para que el software de enrutamiento proporcione la guía correcta.  
3. La carretera está etiquetada como 'autopista = residencial', y también he agregado 'superficie = sin pavimentar'.  
4. Para obtener una descripción completa del etiquetado dentro de África, consulte la página wiki [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Hay un alto riesgo de sufrir conflictos que le impedirán grabar su trabajo cuando esté trabajando sobre una carretera, lo que se extiende a otras cuadrículas donde los mapeadores también están editando. Es aconsejable grabar todos sus cambios antes de editar la carretera, y luego grabar sus cambios a intervalos muy frecuentes, como cada 6 nodos agregados.


### La red de carreteras

![JOSM 4][]

Esta captura de pantalla muestra JOSM con el estilo HOT-OSM-Validate en uso [estilos JOSM](https://josm.openstreetmap.de/wiki/Styles). Aunque está diseñado para ayudar a los validadores, puede ser muy útil al realizar el mapeo inicial. Cualquier cosa que sea de color rojo tiene algún tipo de problema: los colores restantes se explican en la clave de esta captura de pantalla.  

1. Esta sección de carretera está coloreada en rojo porque la etiqueta ha sido tipeada incorrectamente y una letra mayúscula ha sido utilizada. La etiqueta debiera ser highway = sin clasificar, lo que debería ser dado por resultado un color marrón claro en la captura de pantalla.  
2. Esto es parte de la red de carreteras para el pueblo al sudoeste. Esta red conecta con el resto de la red de carreteras de África.  
3. Estas secciones de carretera están "aisladas". No se conectan con el pueblo o con otras carreteras de ningún modo. En su formato actual no son muy útiles y se requerirá de futuras investigaciones para determinar si pueden ser conectadas al resto de la red, o si se debiera considerar borrarlas.  


**¿Carretera o arroyo?**

![iD 5][]

No hay vistas de estilo disponibles para ayudar a usar iD, pero en esta captura de pantalla puede ver un área de vegetación y tierra. El suelo parece ser limo o tal vez incluso un área de marismas sin el agua presente. Las líneas punteadas en blanco y negro representan las rutas en iD & las he resaltado temporalmente & y luego he eliminado una de ellas para mostrar el terreno.  

1. highway=path (Carretera=sendero) o stream bed (lecho fluvial).. ¡Probablemente ambos! Las carreteras de todos los tamaños frecuentemente siguen un valle fluvial y en muchos casos puede que sigan el curso de un río o arroyo de temporada. En este caso aparenta ser un área plana inundada que al momento en que la imagen satelital fue tomada estaba seca, y siendo utilizada como un sendero. Esto debiera ser etiquetado como:  
highway=path  
seasonal=yes  
surface=unpaved  
2. El sendero puede ser visto avanzando dentro de la banda de árboles y matorrales, pero no es posible ver su curso exacto a través de los árboles. En estas circunstancias puede tener la certeza de que el sendero, traza o carretera está presente. Solo está oscurecido por los árboles. He mapeado esto continuando el sendero que estaba trazando donde puede ser visto claramente en el suelo, como una línea recta a través de los árboles hasta la visible y clara continuación del otro lado. Use esto con cautela, pero en esta instancia es obvio que el sendero está presente y su senda es probablemente muy próxima a la línea que he dibujado. Este es un uso más extremo - es más habitual estimar la senda de una carretera por solo unos pocos metros donde tu visión de ella está oscurecida por uno o dos árboles.  
3. Habiendo eliminado la ruta para poder ver el suelo claramente, puedo reemplazarla fácilmente usando la función 'deshacer' de iD.  

***


## Límites residenciales

Los límites residenciales se utilizan para muchos propósitos en OpenStreetMap.  

+ El uso más simple es poder ver áreas residenciales con niveles de zoom más altos al ver [OpenStreetMap.org](http://www.openstreetmap.org), donde están coloreadas de gris pálido en la vista estándar.  
+ Cuando no hay tiempo para mapear en detalle desde el principio, el proyecto dentro del Task Manager con frecuencia requerirá algo similar a esto:  

>    Mapear infraestructuras esenciales como escuelas, lugares de culto y mercados.  
>    Rastreo de salida de asentamientos y cementerios.  
>    Trazaremos caminos más adelante en otra Tarea.   
+  landuse=residential también se puede utilizar con fines estadísticos, y el mapeo preciso se vuelve importante  

* Si puede establecer cuántas personas residen normalmente en cada vivienda, y  
 cuántas viviendas se construyen normalmente en un área determinada, entonces  
 una vez que haya resuelto el área cubierta por el límite landuse=residential,  
 puede establecer una población muy aproximada para esa área.  
 La estimación del número de trabajadores humanitarios y la cantidad de medicamentos ahora se vuelve más realista.
* Los nombres y límites de lugares a menudo se importan de otras fuentes, pero la ubicación no siempre es precisa. Una vez que tenga un límite residencial, la persona que realiza la importación puede ver dónde probablemente debería estar el nombre del lugar.


### <a name="residential-howto"></a> landuse=residential - cómo mapear


** En un mundo ideal **  

*Etapa 1*: se toma la decisión de mapear un área, y un mapeador rápidamente pone un límite  del terreno muy irregular con landuse=residential alrededor de un área,  
*Etapa 2*: se crea el proyecto del Task Manager y los mapeadores individuales refinan el límite para que esté más cerca de los edificios, etc.  

![JOSM residential][]

![iD residential][]
 
Las capturas de pantalla de iD y JOSM anteriores muestran un uso correcto límite landuse=residential.  

1. El límite debe cerrarse para que el punto inicial de la línea (way o vía) se una al punto final.  
2. Los segmentos y nodos de los límites no deben unirse a las carreteras, cursos de agua, edificios o cualquier otro elemento. En esencia no debe compartir ningún nodo. Pero pueden cruzarse.  
3. El límite debe estar bastante cerca de los edificios y de cualquier jardín o patio que forme parte de la agrupación.  


En la captura de pantalla a continuación, mi cuadrado contiene parte de límite landuse=residential. La persona que completó el cuadrado a mi derecha ha continuado con el uso de la tierra = límite residencial a través de su cuadrado, y luego me lo 'entregó' correctamente al colocar el límite justo dentro de mi cuadrado para que yo pueda establecer exactamente dónde debería estar en mi cuadrado.  


![JOSM residential 1][]

Agregaré nodos adicionales al límite, extendiéndolo horizontalmente a través de mi cuadrado para que rodee los edificios, y en la parte inferior continuaré el límite como una línea recta justo dentro del cuadrado debajo del mío para que la persona que seleccione el cuadrado debajo el mío podrá extenderlo alrededor de cualquier edificio que puedan tener.  

Esta es una operación difícil: puede ver solo una pequeña parte de todo el pueblo / ciudad / villa y, aunque haga lo mejor posible con el límite landuse=residential, es extremadamente probable que un validador que tenga una visión general de varias plazas necesite para ordenar el límite lo mejor que puedan después de que los cuadrados individuales hayan sido mapeados.  

> Existe un alto riesgo de sufrir conflictos cuando se trabaja en un límite landuse=residential, ya que se extiende a otros cuadrados donde los mapeadores también lo editarán. Se recomienda guardar todos los cambios antes de editar el límite y luego guardar los cambios a intervalos muy frecuentes, como después de agregar cada 6 nodos.

***


## Edificios muros compuestos barreras  

Los edificios se agregan a los datos del mapa por varias razones;  

* La densidad de los edificios en un área da una muy buena indicación del número de personas que residen allí.  
* El tamaño, la forma y la ubicación de un edificio pueden ayudar a identificarlo como un sitio potencial de evacuación o tratamiento.  
* El tamaño, la forma y la ubicación relativa de los edificios se pueden usar para identificar ubicaciones particulares como pozos, estaciones de ayuda, escuelas, etc.  
* Existe la posibilidad de estimar el grado de daño sufrido por un edificio, que se puede utilizar para estimar las posibles víctimas y el nivel de apoyo que puede requerirse; esto está actualmente en discusión (enero de 2015) para uso futuro.  


### <a name="buildings-howto"></a> Edificios: cómo mapear

La vasta mayoría de los edificios que requieren de mapeo para HOT son basados en formas rectangulares con esquinas cuadradas o son redondos. Si un edificio aparente tiene una mezcla de ambos, es más probable que esté viendo un edificio cuyo contorno esté oscurecido por una sombra, reflejo, follaje o similar.  

Para algunas tareas donde solo el bordeado de un área es requerida, la tarea puede especificar que los edificios sean mapeados como nodos, pero estas situaciones son ahora raras.  


#### building=yes

A menos que las instrucciones del proyecto indiquen lo contrario, los edificios deben ser etiquetados como **building=yes***  

* A menudo puede haber demora entre la imagen satelital es tomada, y el mapeo llevado a cabo. Es posible que el edificio que está mirando que aparenta no tener techo, he sido ahora completado y habitado. También es posible que esté mirando un edificio con varios pisos, estando los inferiores habitados, y los superiores deshabitados.  

> **Mapeo de edificios usando iD**: cuando usa la herramienta de área dentro de iD para crear la forma básica, debe recordar cambiar la etiqueta a building = yes. La configuración predeterminada simplemente etiquetará la forma como area = yes. Si su trazado es de un edificio con esquinas cuadradas, tómese el tiempo para escuadrar el elemento trazado (resáltelo y use el acceso directo 'q').  

* JOSM es mucho más rápido para mapear edificios - [Las herramientas de construcción de JOSM se explican aquí.](/es/josm/josm-more-plugins/#the-buildings-tools-plugin)  

![Buildings iD][]

Esta captura de pantalla muestra parte de una cuadrícula siendo editada. Note la escala en la parte inferior de 15 metros - respecto de la figura a la que debe apuntar cuando edite características. Cuando haga la traza, debe apuntar a ubicar el edificio donde se encuentra con el suelo.  

1. **Edificios redondos.** En este caso son bastante bajos y su sombra es difícil de ver. Si estuviese parado entre ellos, parecerían domos. He mapeado y etiquetado solo uno de ellos hasta ahora **building=yes**. Para agregar rápidamente los restantes edificios en JOSM o iD, seleccionaría este (resáltalo), atajo de teclado * Ctrl + c ", muevo mi teclado al centro de otro edificio redondo del mismo tamaño, atajo de teclado * Ctrl + v *. los edificios redondos de este tamaño han sido añadidos en mi cuadrícula, pego un edificio sobre un edificio redondo de distinto tamaño, JOSM - uso * Alt + Ctrl * y mouse para redimensionarlo a su tamaño correcto. Cópielo y luego péguelo sobre todos los edificios redondos del mismo tamaño.  
2. **Edificios rectangulares** Estos edificios en particular están proyectando una sombra notoria. La sombra puede ayudar a identificar la forma de un edificio que está parcialmente oscurecido por otro elemento. Encontraron que muchos edificios no son tan simples, y tienen una galería o forma de "L". Debes trazar la verdadera forma del edificio ya que esto debe identificarlo cuando nombres y otra información es agregada como parte del proceso de encuestas.  
3. **Barriers-walls (o hedges) de un compuesto.** Habiendo examinado la imagen ampliando y reduciendo hasta que estoy satisfecho de la forma del objeto (usa también su sombre para identificarlo), creo que esto es una pared , y lo etiquetado ** barrera = muro **. Alternativas incluidas barrera = valla y barrera = setos  
4. He unido la barrier=wall al building=yes en la esquina del edificio.  


### Imagen satelital distorsionando la forma del edificio.


![Buildings_2][]

1. La imagen satelital arriba, es de un edificio, pero el satélite no está directamente arriba, por lo que el edificio se ve distorsionado y el final de una pared es visible en la imagen. Debido a este ángulo, el techo no parece rectangular. El sol está prácticamente encima del edificio, por lo que la sombra del edificio indicada por las flechas de la figura 1 confirma que el edificio es rectangular.  

2. Para mapear el edificio, crear un rectángulo que se extienda desde las flechas del punto 2, hasta donde estima que el edificio termina, indicado por el punto 3 en esta imagen.  


***


Más para continuar - vea los enlaces debajo para más guía.


# Continuar leyendo

- [Consejos de mapeo HOT de África Occidental por el usuario Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
- [Entrada wiki de OSM sobre validación](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
- [Highway Tag Africa - la referencia preferida para el etiquetado de carreteras en África](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
- [Tutorial breve en francés sobre mapeo remoto](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png