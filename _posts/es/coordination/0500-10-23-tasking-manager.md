---
layout: doc
title: Gestor de Tareas
permalink: /es/coordination/tasking-manager/
lang: es
category: coordination
---

# Gestor de Tareas

En esta sección vamos a ver el Gestor de Tareas (en inglés *Tasking Manager*), una herramienta intuitiva que los colaboradores pueden utilizar para ordenar un área mediante una cuadrícula, y poder trabajar de forma conjunta cartografiando el área de forma organizada.

El Gestor de Tareas de OSM permite a colaboradores de todo el mundo ayudar cartografiando una región con un mínimo riesgo de que se solapen las zonas de trabajo.

Esto permite que la gente sobre el terreno y la gente trabajando remotamente (llamados a veces *cartógrafos de sillón*) colaboren de manera efectiva, rápida y evitando que sea necesario rehacer el trabajo debido a conflictos.


## Vista general del proceso
1. Un Administrador elige un área  en OpenStreetMap que necesita ser actualizada. El administrador se asegura de que haya imágenes satélite de fondo sobre las que los colaboradores puedan calcar, y crea un proyecto que cubra ese área. Hay que especificar el nivel de detalle que se necesita, así como la urgencia y otras informaciones que necesitarán los colaboradores. Una vez completado, el Administrador publica el proyecto en el Gestor de Tareas, si bien es posible editar y hacer cambios con posterioridad, si fuera necesario.

2. Un colaborador remoto selecciona la tarea de un cuadrado, completa el trazado, y lo marca como completo.

3. Un segundo colaborador remoto comprueba que el cuadrado está completo a un nivel satisfactorio y lo marca en consecuencia como validado.

4. El progreso del proyecto se puede monitorizar desde la pestaña "*stats*" del proyecto, y pudiendo bajarlo de nivel o archivarlo si así lo considerara el Administrador.

## Opciones y enlaces

El Gestor de Tareas inicialmente se muestra en inglés. Si quiere seleccionar otro idioma pulse en **en** en la franja roja de la cabecera.

![Gestor de Tareas Languages][]

Para obtener información acerca del Gestor de Tareas, los patrocinadores de HOT, colaboradores y ayuda se ha de hacer clic en la sección **About** en la parte superior de la pantalla.

![Gestor de Tareas About][]

Una vez conectado con su usuario, puede pulsar sobre el nombre de usuario que aparece en la parte superior. Desde ahí podrá:

- Acceder a la lista de proyectos en los que ha completado tareas.
- Ir a la pantalla de sus mensajes (**Messages**) dentro del Gestor de Tareas (no es la misma que la del sistema de mensajes de OSM)
- Desconectar
- Ver la lista de usuarios que han contribuido completando cuadrados en el Gestor de Tareas. Se pueden utilizar los enlaces para ver más información del usuario seleccionado, como cuáles y cuantas tareas de cuadrados tiene completadas.

![Gestor de Tareas Username_list][]

## Primeros pasos con el Gestor de Tareas
Se puede echar un vistazo a los proyectos en calidad de visitante, pero para participar activamente hay que conectarse al Gestor de Tareas (utilice su nombre de usuario de OpenStreetMap), abriendo en el navegador la página [tasks.hotosm.org](http://tasks.hotosm.org). Podrá ver algo similar a esto:

![Gestor de Tareas Login][]

- Pulse “*login to OpenStreetMap*”
- Está usted permitiendo al Gestor de Tareas tener cierto acceso a su cuenta de OpenStreetMap. Pulse “*Save Changes*”.

![Authorizing access to OSM account by the Gestor de Tareas][]

## Encontrar un proyecto
La lista de proyectos en curso se puede ordenar por:

- Mayor prioridad
- Fecha de creación
- Ultima actualización

Se puede refinar aun más la lista pulsando en la caja de **Your Projects**, para ver solo los proyectos en los que se está participando. También se puede utilizar una búsqueda por texto para localizar proyectos que contengan determinado texto, por ejemplo **Ebola** (Esta búsqueda no distingue mayúsculas de minusculas).

Es habitual referirse a los proyectos por su número de proyecto., por ejemplo, [**#711 - Ebola Outbreak, Kayes, Mali - Pre-emptive building mapping**](http://tasks.hotosm.org/project/711), y también se puede utilizar el número para buscar en el campo de búsquedas.

- Pulse sobre los títulos azules de los proyectos para ver más información acerca de ese proyecto.

![Job description][]

## Descripción

Todo lo que se necesita conocer acerca del proyecto se encuantra aquí. A la izquierda hay una descripción del proyecto de mapeo y qué es lo que se necesita cartografiar. A la derecha está la cuadrícula con el área a trazar.

- La línea malva en los cuadrados del perímetro de un proyecto indica el límite del proyecto. Esta línea suele seguir las imágenes de fondo, por lo que puede tener una forma inhabitual. A pesar de que es posible trazar fuera de ese perímetro, no es necesario y los validadores no tendrán en cuenta ese trabajo.

- Las zonas rosas del mapa indican las zonas prioritarias a cartografiar.
- Los cuadrados amarillos ya están completados.
- El borde amarillo indica que se está trabajando sobre ese cuadrado en ese momento.
- Los cuadrados verdes han sido completados y validados.
- El resto de cuadrados están pendientes de completar o han sido previamente invalidados.

### Pestaña de Instrucciones (Instructions Tab)
Muestra qué se necesita trazar en esta tarea. El rango de dificultad de la tarea, apta para principiantes, intermedia o para colaboradores avanzados, y las instrucciones que lo explican.

Asegurese de leer y entender este apartado. Hay distintos estilos de proyectos de mapas, para diferentes propósitos. Algunas actividades comunes en los proyectos son:

- Redes de carreteras: Utilizadas por las gente que está sobre el terreno para tomar datos mediante dispositivos y herramientas de navegación portátiles, y que permiten saber cómo acceder a las zonas remotas.
- Mapear poblaciones: Utilizadas a menudo para identificar las áreas donde vive la gente y que pueden ser afectadas.
- Mapear edificios: Utilzado para evaluación de daños or contact tracing with diseases
- Mapear ríos, valles y otros elementos.

No todas las zonas del mundo son iguales a la nuestra, por lo que es necesario especificar la forma concreta que hay que utilizar para etiquetar los elementos del mapa en cada área. Por ejemplo, las redes de carreteras en África son muy diferentes de las redes de carreteras habituales en America o Europa.

Hay un apartado indicando el **Comentario del conjunto de cambios** , (**Changeset comment** ), ue habrá que copiar y pegar en el programa editor al guardar o subir los cambios, junto con la información de la **fuente**, (**source**), información que, dependiendo del editor, puede ser necesario copiar y pegar también en el campo correspondinete del editor.

A veces hay disponibles imágenes específicas para una determinada tarea. Puede suceder que haya que aceptar algún acuerdo de licencia para poder acceder a ellas. Las instrucciones indican normalmente la manera más fácil de cargar estas imágenes en los editores, por ejemplo en JOSM.

Cuando se está comprobando un cuadrado marcado como completo, se supone que se comprueba que todos los requerimientos que se indican en la pestaña de instrucciones se han completado. Puede pasar que completar un cuadrado sea bastante difícil. Se proporciona una guía sobre cómo desbloquear cuadrados o sobre cómo proporcionar información útil al siguiente colaborador.

### Pestaña de Actividad (Activity tab)
En esta pestaña se puede ver, en orden cronológico, la actividad que a tenido lugar en esa tarea.

### La pestaña de Status (Stats tab)
Contiene un gráfico con el progreso y otras informaciones.

También tiene una lista de los colaboradores que han completado al menos un cuadrado dentro del proyecto. Para ver qué cuadrados han completado se puede pasar el cursor del ratón por encima del nombre del usuario y los cuadrados que haya completado serán los únicos visibles (**utilice esta técnica para localizar los cuadrados que ha completado usted mismo anteriormente**).

Una vez localizado el cuadrado sobrevolando el ratón sobre el nombre de usuario, se puede pulsar en el cuadrado para ver los comentarios que han dejado para ese cuadrado los colaboradores que han trazado y los validadores, que es una buena manera de obtener 'feedback' de los validadores.

### Pestaña de Contribuir (Contribute tab)
Pulse cuando esté preparado para empezar a cartografiar. Se puede seleccionar el cuadrado para trazar, o seleccionando directamente un cuadrado en el mapa, o pulsando en el botón "Tarea aleatoria" ("Take a Task at random").

![Picking a task][]

## Seleccionar un cuadrado para trazar
![Assigned task square][]
Una vez seleccionado un cuadrado se puede mirar si tiene alguna historia, como puede ser algún colaborador que ya ha comenzado con ese cuadrado, pero que se dio cuenta de que no podía acabarlo.

Si selecciona un cuadrado accidentalmente, se puede liberar pulsando en el control azul de cerrado - **x** - que se muestra en la siguiente captura de pantalla.

Pulsando el botón **Start Mapping** se bloquea el cuadrado de forma que ningún otro colaborador pueda seleccionarlo hasta que el cuadrado sea liberado, iniciándose además un contador de tiempo de dos horas ( 120 minutos), al final del cual el cuadrado se liberará automáticamente.

Es una buena práctica comprobar regularmente el contador de tiempo, es fácil enfrascarse en el trabajo y no darse uno cuenta de que el cuadrado ha sido liberado y otro colaborador lo ha  seleccionado y ha comenzado a trazar en él. Esto puede ser una fuente de conflictos y problemas.

### Selecciones de edición

Una vez bloqueado un cuadrado se nos mostrarán distintas opciones para editar:

![Editing options][]

#### Editar con JOSM
- Cuando se selecciona esta forma de editar, (y dando por hecho que se ha configurado JOSM para permitir el control remoto), se cargarán automáticamente los datos de OSM en JOSM (*asegurese de que no tiene activado el plugin de 'descargar datos automáticamente', se puede desactivar desde el menú fichero*), y también se cargarán automáticamente las imágenes de fondo para poder calcar sobre ellas.

#### Editar con iD
- Seleccionando el editor iD, automáticamente se abrirá una nueva pestaña o ventana en el navegador, con los datos existentes de OSM cargados. El navegador Internet Explorer no soporta aún el editor iD y carga automáticamente el editor Potlatch 2. La pestaña o ventana original con el Task Manager seguirá estando disponible en el navegador.

#### Editar con Potlatch 2
- El editor se cargará en una nueva pestaña o ventana.

#### Walking Papers / Field Papers
- Para utilizar únicamente cuando se esté involucrado en un proyecto en el que un colaborador local ha realizado una toma de datos sobre el terreno anotando la información recogida en los mapas papel. Este mapa puede escanearse y utilizarse como imagen de fondo por parte de un colaborador remoto para leer la información y actualizar los datos en OpenStreetMap.

### Subdividiendo un cuadrado (Splitting a square)
Una vez seleccionado un cuadrado e inspeccionado con las imágenes de fondo, puede suceder que requiera mucho trabajo de detalle para trazarlo. Un ejemplo podría ser trazar los edificios en áreas urbanas densas, o localizar pequeñas poblaciones en áreas muy extensas.

Como guía se puede usar que si la tarea del cuadrado no se puede completar por una persona en las dos horas del contador de bloqueo, se puede subdividir el cuadrado en cuatro cuadrados más pequeños.

*Utilice con precaución* - Cuando los cuadrados son demasiado pequeños es difícil diferenciar los tipos de carreteras o caminos, o identificar otros elementos del mapa.

Además, los comentarios que hubiera sobre el cuadrado que subdividimos dejarán de estar disponibles.

### Liberar un cuadrado antes de haberlo completado
Si comienza a trabajar en un cuadrado y, por algún motivo no se puede completar la tarea, es una buena costumbre dejar unos comentarios acerca de ese cuadrado.

Solo hay que explicar lo que queda por hacer y elegir **unlock**. Esté seguro de que los comentarios son importantes y su objetivo es ayudar al siguiente colaborador.

Por ejemplo:

    Casi completo, la pequeña población arriba
    a la izquierda queda pendiente de trazar

### Terminar un cuadrado
Es difícil estar seguro de que se ha completado totalmente un cuadrado. Pero se puede marcar como completo si se cree que está bastante completo, los contenidos se repasarán por otro colaborador durante la validación y cualquier pequeño añadido se podrá hacer en ese momento.

Para que el trabajo se haga de una manera más efectiva, es mejor marcar los cuadrados como completos que dejarlos para que otros colaboradores, también inseguros, gasten también tiempo en repasarlos.

Cuando haya terminado de editar y piense que el cuadrado está completo, guarde todos los cambios pendientes en el editor y vuelva al gestor de tareas.

Añada comentarios en la caja detallando qué ha quedado acabado y, lo que es más importante, qué cosas no se han podido hacer. Por ejemplo: 'Completado hasta donde se puede ver, pero la esquina superior derecha está cubierta de nubes y no ha sido posible calcar ese área'.

Pulse sobre el botón "Mark Task as Done" y el trabajo quedará listo para ser revisado.

### Enviar un mensaje desde la caja de comentarios
Cuando se deja un comentario acerca de un cuadrado, se puede enviar el comentario como mensaje a un colaborador concreto.

Se hace de manera similar a Twitter, simplemente escribiendo el símbolo @ y a continuación el nombre del usuario. Esto hará que se envíe un mensaje al usuario conteniendo los comentarios de esa caja, más un enlace al cuadrado al que se refieren los comentarios.

Por ejemplo:

    @Tallguy nice work tracing the building
    details here. You missed a small group
    of houses on the upper left of the tile,
    I added a few in, but some still remain.

Esto es muy útil cuando se está validando o añadiendo sobre un trabajo anterior, se puede proporcionar feedback, o agradecimientos o más.

Tenga en cuenta que participa mucha gente de todo el mundo, por lo que es preferible utilizar lenguaje claro y sencillo. Si se están mirando comentarios en otros idiomas, herramientas com el traductor de google pueden ser razonablemente efectivas.

### Referirse a un cuadrado concreto al enviar un mensaje
Si necesita enviar un mensaje, como puede ser un correo electrónico, y se quiere referir a un cuadrado concreto de un proyecto (a lo mejor para identificar algún detalle de la imagen satélite):

1. Pulse en el cuadrado que se quiere mencionar
2. Pulse en la barra de direcciones del navegador, que mostrará algo similar a 'http://tasks.hotosm.org/project/713#task/259'
3. Seleccione todo el texto de la barra de direcciones con el ratón o con el atajo de teclado **Ctrl+A**, y a continuación copielo al portapapeles (**Ctrl+C**).
4. En el correo electrónico, mensaje IRC, u otro tipo de mensaje, pegue el texto copiado pulsando el botón derecho del ratón + paste o mediante el atajo de teclado **Ctrl+V**, con lo que escribiremos el enlace al cuadrado concreto.

### Obtener ayuda en directo
![IRC_help][]

Desde el Gestor de Tareas:
1. Pulse el botón **OSM HOT IRC Channel #hot**
2. Teclée un nombre de usuario (su nombre de usuario OSM?), o utilice los caracteres por defecto
3. Seleccione al final de la lista desplegable **hot**

![IRC using][]

- A la derecha de la pantalla hay una lista con los usuarios que están conectados en ese momento
- Teclée su mensaje en la caja que hay en la esquina inferior izquierda de la pantalla (la caja, a veces, aparece tapada por otros textos, que desaparecerán cuando la seleccione).
- Para dirigir el mensaje a un usuario concreto, incluya en el mensaje el nombre de usuario que aparece en la lista de la derecha. Teclée y luego pulse la tecla *RETURN* para enviar el comentario. El sistema es en directo, así que espere la respuesta. Seguramente su nombre de usuario aparecerá en la respuesta para indicarle que el comentario va dirigido a usted. Normalmente se recibe la respuesta en unos segundos, así que, por favor, espere.
- Una alternativa sencilla puede encontrarse en [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)
- Se puede encontrar información adicional acerca de como utilizar el chat IRC de OpenStreetMap en [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)
- De manera opcional se pueden utilizar otros clientes chat-irc (Server=irc.oftc.net, and channel=#hot)

### Editar las pistas y consejos (hints and tips)
Hasta ahora usted ha adquirido un buen conocimiento acerca de qué es el Gestor de Tareas y algunas de las funciones que ofrece. En contra de la edición normal, esta opción se utiliza a veces para proyectos críticos en el tiempo y con un alto número de participantes. Esta opción es un poco diferente de lo que hemos visto hasta ahora.

Algunas advertencias que conviene prestar atención cuando se trabaja con esta herramienta:

 * Evite trazar fuera de su cuadrado, otros colaboradores podrían estar trabajando en esos cuadrados, dando lugar a duplicación de esfuerzos. Es correcto trazar objetos que están sobre el borde, por ejemplo un edificio, pero no vaya más allá.
 * Extienda las carreteras, ríos u otros elementos lineales un poco más allá del borde, así el siguiente colaborador podrá extenderlos desde donde los deje usted.
 * Si tiene dudas acerca de un elemento concreto, use la sección de comentarios para preguntar o eche un vistazo al wiki.
 * Si comete un error importante, por ejemplo borrar un elemento de primer orden o una relación, utilice la caja de comentarios para pedir ayuda a otros colaboradores acerca de como revertir la situación. Procure incluir el conjunto de cambios ('changeset') o una descripción de qué ha ocurrido. Al tratarse de un trabajo colaborativo, hay muchos otros colaboradores para ayudar. Es importante tener en cuenta que todo el mundo comete errores alguna vez.
 * No dude en pedir consejo, los colaboradores que validan su trabajo pueden ser bruscos o directos, pero sabiéndolo, es correcto establecer un diálogo con ellos, el resultado será positivo para todas las partes.
 * No debe validar usted mismo su propio trabajo, otro par de ojos conduce siempre a una mejor calidad del mapa resultado.
 * No se preocupe si otros colaboradores son bruscos al validar su trabajo. Igual que usted, lo único que quieren es asegurarse de que todos los datos se trazan adecuadamente. El 'feedback' se refiere siempre al trabajo pendiente, no es en absoluto una crítica al trabajo que ha realizado.

Un paso más allá
----------------

Pulse el enlace correspondiente para lecturas adicionales acerca de:

*  [To start the beginner series about OpenStreetMap & learning to map](/en/beginner/start-osm/)
*  [To continue with the Remote, Armchair or Mapathon section of LearnOSM](/en/coordination/remote/)


[Gestor de Tareas Login]: /images/en/coordination/tasking_manager/tasking_manager_image01.png
[Gestor de Tareas Username_list]: /images/en/coordination/tasking_manager/tasking_manager_image02.png
[Authorizing access to OSM account by the Gestor de Tareas]: /images/en/coordination/tasking_manager/tasking_manager_image03.png
[Job description]: /images/en/coordination/tasking_manager/tasking_manager_image04.png
[Picking a task]: /images/en/coordination/tasking_manager/tasking_manager_image05.png
[Assigned task square]: /images/en/coordination/tasking_manager/tasking_manager_image06.png
[Editing options]: /images/en/coordination/tasking_manager/tasking_manager_image07.png
[IRC_help]: /images/en/coordination/tasking_manager/tasking_manager_image08.png
[IRC using]: /images/en/coordination/tasking_manager/tasking_manager_image09.png
[Gestor de Tareas About]: /images/en/coordination/tasking_manager/tasking_manager_image011.png
[Gestor de Tareas Languages]: /images/en/coordination/tasking_manager/tasking_manager_image012.png
