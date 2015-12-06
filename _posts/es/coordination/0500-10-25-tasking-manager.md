---
layout: doc
title: Administrador de tareas
permalink: /es/coordination/tasking-manager/
lang: es
category: coordination
---

#Administrador de tareas

> Esta guía puede ser descargada como [tasking-manager_es.odt](/files/tasking-manager_es.odt) o [tasking-manager_es.pdf](/files/tasking-manager_es.pdf)  
> Revisado 2015-08-26  

Índice de secciones
-------------
-  [Descripción general de cómo HOT utiliza el Administrador de Tareas](/es/coordination/tasking-manager/#resumen-del-proceso)  
-  [Idiomas, Opciones, enlaces de ayuda y otros enlaces. Su página de usuario - lista de los proyectos en los que ha ayudado y mensajes](/es/coordination/tasking-manager/#opciones-y-enlaces)  
-  [Iniciar sesión](/es/coordination/tasking-manager/#familiarizndose-con-el-tasking-manager)  
-  [Encontrar un proyecto](/es/coordination/tasking-manager/#localizando-un-proyecto)  
-  [Description, Map grid, Instructions, Contributing, Activity, Statistics for a project](/es/coordination/tasking-manager/#descripcin)  
-  [Selecting a square to map, timer, releasing](/es/coordination/tasking-manager/#seleccionar-un-cuadrado-a-mapear)  
-  [JOSM, iD, Potlatch 2, Field Papers, Walking Papers](/es/coordination/tasking-manager/#opciones-de-edicin)  
-  [Dividir un cuadrado](/es/coordination/tasking-manager/#dividir-un-cuadrado)  
-  [Liberar un cuadrado antes de que se haya completado](/es/coordination/tasking-manager/#liberar-un-cuadrado-antes-de-que-se-haya-completado)  
-  [Marking your square as complete](/es/coordination/tasking-manager/#terminando-un-cuadrado)  
-  [Envío de un mensaje de la caja de comentarios](/es/coordination/tasking-manager/#envo-de-un-mensaje-de-la-caja-de-comentarios)  
-  [Refiriéndose a un cuadrado en particular cuando se envía un correo electrónico](/es/coordination/tasking-manager/#refirindose-a-un-cuadrado-en-particular-cuando-se-enva-un-correo-electrnico)  
-  [Cómo obtener ayuda en vivo - IRC, Internet Relay Chat](/es/coordination/tasking-manager/#cmo-obtener-ayuda-en-vivo)  
-  [Consejos de edición y sugerencias](/es/coordination/tasking-manager/#consejos-de-edicin-y-sugerencias)


El HOT Tasking Manager, <http://tasks.hotosm.org/>, es una herramienta intuitiva que los mapeadores pueden usar para asignar un área dentro de una cuadrícula para trabajar junto con otros mapeadores para mapear un área de manera organizada. Esto le permite a los mapeadores alrededor del mundo ayudar a mapear una región definida con un riesgo mínimo de que las áreas en las que se trabaja se sobrepongan y también permite a las personas tanto en campo como vía remota (también conocidos como mapeadores de escritorio) colaborar efectiva y rápidamente, evitando así posible re-trabajo accidental debido a conflictos.


## Resumen del proceso

Un administrador selecciona un área que requiera de actualización en OpenStreetMap. El administrador asegura que están disponibles imágenes de satélite adecuadas para que mapeadores remotos creen trazas y crea un proyecto que abarca la zona de interés. El nivel de detalle exigido y la urgencia se especifica en el proyecto junto con cualquier otra información que el mapeador remoto requiera. Cuando esté satisfecho, el administrador publicará el proyecto en el Administrador de Tareas, aunque también pueden hacer cambios más adelante si fuera necesario.

2. Un mapeador remoto selecciona la tarea dentro de un cuadrado, completa el mapeo en dicha área y marca el cuadrado como completo.

2. Un segundo mapeador remoto verifica que el cuadrado esté completo hasta un nivel satisfactorio y marca el cuadrado como 'validado'.

4. El progreso del mapeo del proyecto puede ser monitoreado desde la sección "stats" del proyecto y el proyecto puede ser degradado o archivado de acuerdo a lo que requiera el administrador.


## Opciones y enlaces

- El Task Manager se despliega inicialmente en Inglés - para cambiar a otro idioma de clic en **English** en el banner superior de color rojo. 

- Para información acerca del Tasking Manager, patrocinadores de HOT, socios y ayuda, de clic en **About** en la parte superior de la página.

- Una vez que haya iniciado sesión, puede hacer clic en su nombre de usuario en la parte superior. Aquí puede:  

- Acceder a la lista de proyectos para los cuales has completado cuadros.
- Ir a la pantalla de **Mensajes** dentro del Tasking Manager (esto no es lo mismo que el sistema de mensajes de OpenStreetMap)
-Cerrar sesión
-Ver una lista de todos los usuarios que han contribuido a completar los cuadros dentro del Tasking Manager. Puede acceder a los enlaces para ver más información acerca del usuario que seleccionó, como en qué tareas ha completado cuadros y su historial de ediciones de OSM.

![Tasking Manager Username_list][]

##Familiarizándose con el Tasking Manager

Puede ver el proyecto como visitante pero si quiere participar debes iniciar sesión dentro del Tasking Manager - use su nombre de usuario y password de OpenStreetMap. Abra su navegador web y vaya a <http://tasks.hotosm.org>. Verá una página como esta:

![Tasking Manager Login][]

- Haga clic en "Iniciar sesión en OpenStreetMap"
- Está de acuerdo en permitir a esta aplicación cierto acceso a su cuenta de OpenStreetMap. De clic en "Guardar Cambios."

![Authorizing access to OSM account by the Tasking Manager][]


##Localizando un proyecto

La lista actual de proyectos puede ser ordenada por:

- Alta prioridad
- Fecha de creación, o
- Última actualización

Puede refinar más su lista dando clic en **Sus Proyectos**, para ver sólo los proyectos en los que ha participado, ya sea que haya completado un cuadrado o no. Los validadores también encontrarán proyectos en los que han contribuido cuadros validados, mediante el uso de esta opción. Puede utilizar una búsqueda de texto para localizar proyectos que contienen determinadas cadenas de texto, como **Ébola** (la búsqueda no distingue entre mayúsculas y minúsculas).  

Los proyectos son usualmente referidos por su número de proyecto, por ejemplo, [**#711 - Ebola Outbreak, Kayes, Mali - Pre-emptive building mapping**](http://tasks.hotosm.org/project/711), y en este caso puede buscar #711 para encontrar este proyecto.


- De clic en un título azul de proyecto para ver más información acerca de dicho proyecto.

![Job description][]

## Descripción

¡Todo lo que necesitas saber sobre el proyecto está aquí! A la izquierda está una descripción del proyecto de mapeo y lo que se requiere. En el lado derecho hay una cuadrícula que muestra el área a ser mapeada;  

- Línea malva normalmente visible en el perímetro del cuadrado de un proyecto indica la frontera del proyecto. Esta frontera sigue normalmente las imágenes disponibles, por lo que puede parecer una forma inusual. A pesar de eso el mapeo se puede completar fuera de esa frontera, no es un requisito y no será considerado por los validadores.  
- Las zonas rosadas del mapa indican las zonas de mayor prioridad,  
- Las cuadrículas de color amarillo se han completado,  
- Un borde amarillo indica que se está trabajando ahora en el cuadrado,  
- Los cuadrados verdes se han completado y "validado", y  
- Los cuadrados restantes todavía tienen que ser completados, o han sido invalidados (los cuadrados invalidados son de un color más oscuro).  

### Pestaña de instrucciones
Esto muestra lo que se requiere en la tarea de mapeo. Las tareas varían en dificultad, apto para mapeadores principiantes, intermedios y avanzados - y las instrucciones explicarán esto. 

Asegúrese de leer y comprender esta sección. Hay muchos estilos de proyecto de mapeo, para muchos propósitos diferentes. Algunas de las actividades comunes del proyecto incluyen:

- Redes de carreteras: Utilizado por las personas en el terreno para cargar datos en herramientas de navegación portátiles, y descubrir cómo acceder a zonas remotas
- Mapeo de publos: A menudo se utiliza para identificar los lugares donde vive la gente y puede ser impactada
- Mapeo de edificios: Se utiliza para la evaluación de daños o localización de los contactos con las enfermedades. También se utiliza para las estimaciones de población.
- Mapeo de ríos, paredes y otras características

No todas las áreas del mundo son similares a la suya, por lo que puede recibir consejos de etiquetado específicos. Por ejemplo, la red de carreteras de África es muy diferente a los sistemas típicos de autopistas americanas o europeas.

Habrá una sección que indica el **Comentario del conjunto de cambios** que debe asegurarse de que aparezca en su programa de edición al cargar/guardar los cambios, junto con la **fuente** de información que (dependiendo de su software de edición) debe copiar y pegar en el campo de origen al hacer cambios.

A veces, puede haber imágenes específicas para la tarea disponibles - puede que tenga que aceptar una licencia para acceder a ellas.
Las Instrucciones generalmente indicarán la forma más fácil de cargar esto en editores como JOSM.

Al revisar un cuadrado marcado como completo, los validadores esperarán que los requisitos de la pestaña de instrucciones hayan sido completados. Puede que completar todo un cuadrado sea muy difícil - a continuación hay disponible una guía de como desbloquear un cuadrado; así como también proporcionar información útil para el próximo mapeador.

### Pestaña de actividad  
Esta muestra la actividad que ha tenido lugar dentro de la tarea en orden cronológico.  

### Pestaña de estadísticas  
Contiene un gráfico del progreso y otra información. 

La ficha de estadísticas también contiene una lista de mapeadores que han completado al menos un cuadrado dentro del proyecto - para ver qué cuadrados han completado, puede *pasar el cursor del ratón* sobre un nombre de usuario, y los cuadrados que han completado se convertirán en los único visibles (**usa esto para ubicar los cuadrados que ha completado previamente**).

Una vez que haya localizado el cuadrado al pasar el ratón sobre el nombre de usuario, puede hacer clic en un cuadrado para ver los comentarios que han dejado mapeadores y validadores del cuadrado, que es una forma útil de obtener retroalimentación de los validadores.  

### Pestaña de contribución  
Haga clic en cuando esté listo para comenzar a mapear. Usted puede elegir su cuadrado para trabajar seleccionándolo en el mapa, o haciendo clic en la opción "Tomar una tarea al azar". 

![Picking a task][]

## Seleccionar un cuadrado a mapear  
![Assigned task square][]  
Después de haber seleccionado su cuadrado podrá ver si hay alguna historia en este cuadrado, como un mapeador que al empezar pudo darse cuenta que no tienen tiempo para completar el cuadrado.  

Si selecciona accidentalmente un cuadrado, lo puede liberar de nuevo haciendo clic en el control azul de cerrar - **x** - que se muestra en la imagen de arriba.

Al hacer clic en el botón **Comenzar mapeo** se bloquea el cuadrado para que ningún otro mapeador pueda seleccionarlo hasta que se libere de nuevo, y comienza un temporizador de cuenta atrás de 2 horas (120 minutos), al final del cual el cuadrado se libera automáticamente. 
Es una buena práctica comprobar su temporizador de cuenta atrás de forma regular - es fácil llegar a ser absorbido por el mapeo y no darse cuenta de que su cuadrado ha sido liberado, y ha sido seleccionado por otro mapeador que ha comenzado a mapear también. Esto puede conducir a conflictos y problemas.


### Opciones de edición

Diferentes opciones para la edición se presentan tan pronto como bloquea un cuadrado.

![Editing options][]  

#### Editar con JOSM  
- Inicie JOSM antes de utilizar este enlace y cargará automáticamente los datos de OSM existentes en JOSM.  
> 1. 'Activar control remoto' tiene que estar marcada - se encuentra en **Editar / Preferencias / Control remoto**
  2. Si ha instalado el plug-in 'continuosDownload' lo mejor es desactivarlo (desmarque 'Descargar datos OSM continuamente' bajo el menú **Archivo** en JOSM. 
  3. Si JOSM no carga las imágenes automáticamente, lo que normalmente se puede encontrar bajo el menú **Imágenes**. [Más información de las imágenes aquí](/es/josm/more-about-josm/#add-imagery)

#### Editor iD  
- Seleccione esta opción para iniciar automáticamente una nueva pestaña o ventana del navegador web, con datos existentes de OSM cargados. El navegador web Internet Explorer no admite actualmente iD y cargará Potlatch 2 en su lugar. Su pestaña original o ventana con el Administrador de tareas todavía estará presente.  

#### Potlatch 2  
- El editor se cargará en una nueva ventana o pestaña.  
- Potlatch no mostrará automáticamente el cuadro de delimitación de tareas, pero puede hacerlo siguiendo este procedimiento:
  1. En el Administrador de Tareas, seleccione una casilla y haga clic en Iniciar Mapeo para bloquearla
  2. En el Administrador de Tareas, seleccione Editar con JOSM (si aparece una ventana diciendo "control remoto JOSM no respondió ..." simplemente haga clic en Aceptar).
  3. Debajo del botón Editar con JOSM, el texto dirá "Sugerencia: Descargue el siguiente archivo .gpx ...". Descargue el archivo .gpx, y tenga en cuenta donde se guarda.
  4. En el Administrador de Tareas, cambie Editar con JOSM a Editar con Potlatch 2. Potlatch debe abrirse en una nueva pestaña.
  5. En Potlatch, seleccione Fondo, a continuación, Archivo vectorial...
  6. En la ventana Cargar archivo vectorial, en la parte inferior junto a Archivo, haga clic en Abrir y vaya al archivo .gpx que acaba de descargar
  7. En la ventana Cargar archivo vectorial, asegúrese de que la casilla de la columna Mostrar está marcada para el archivo .gpx, a continuación, cierre la ventana
  8. Potlatch debe mostrar ahora el límite como un cuadrado (probablemente cían). Tenga en cuenta que Potlatch todavía carga datos fuera de los límites.

#### Walking Papers / Field Papers
- Para su uso sólo cuando está involucrado en un proyecto donde un mapeador local, ha llevado a cabo un estudio de terreno y marcó en un mapa impreso información como nombres de calles. Este mapa puede ser escaneado de nuevo y utilizado como imagen de fondo para que un mapeador remoto o local lea la información y actualice los datos de OpenStreeetMap.  

### Dividir un cuadrado  
Habiendo seleccionado su cuadrado e inspeccionado con las imágenes del lugar, puede darse cuenta de que hay demasiado detalle requerido para el mapeo. Un ejemplo de esto puede ser trazado de edificios en zonas urbanas densamente pobladas, o ubicar pequeños pueblos en grandes áreas.

Como orientación, donde no es posible para una persona para completar en el plazo 2 horas a menudo se puede dividir la tarea en 4 áreas más pequeñas.

*Utilizar con precaución* - si / cuando los cuadrados se dividen demasiado, es difícil juzgar qué tipo de carretera está involucrada, y la identificación de otras características.

Tenga en cuenta que otros comentarios útiles sobre el trabajo previamente completado ya no estarán disponibles.

### Liberar un cuadrado antes de que se haya completado
Si se empieza a trabajar en un cuadrado, pero no se puede completar por alguna razón, es una buena práctica dejar un comentario en el cuadrado.

Simplemente detalle lo que queda y elija **desbloquear**. Asegúrese de que sus comentarios sean relevantes y apunten a ayudar al próximo mapeador.

Por ejemplo:

    Casi completo, pequeño pueblo arriba a la izquierda 
    del cuadrado para ser trazado

### Terminando un cuadrado
Es muy difícil estar completamente seguro de que ha completado un cuadrado - sin embargo, es aceptable marcar el cuadrado como completa si está bastante seguro - los contenidos serán comprobados por otro mapeador al validar, y cualquier pequeño agregado se pueden hacer luego. 

Para que el proceso funcione con mayor eficacia, los mapeadores tienen que marcar cuadrados como completas en lugar de dejarlas para otros mapeadores "no seguros" que deben pasar el tiempo también verificando. 

Cuando tenga la edición terminada y piense que el cuadrado está completo, guarde las ediciones restantes con su programa de edición, y luego vuelva al Administrador de tareas.

Añada comentarios a la caja detallando lo que que logró y lo más importante, lo que tiene dudas. Por ejemplo; "Completé lo que pude ver, pero hay nube que cubre la esquina superior derecha del cuadrado y no puedo trazar esa área".

Haga clic en el botón "Marcar tarea como lista", y su trabajo está listo para su revisión.

### Envío de un mensaje de la caja de comentarios
Al dejar un comentario sobre un cuadrado, puede hacer que el comentario sea enviado como un mensaje a un mapeador nombrado.

Al igual que Twitter, simplemente utilice un @ seguido del nombre de usuario. Esto enviará un mensaje al usuario que contiene los comentarios de este cuadro, además de un enlace al cuadrado que se refiere el comentario. 

Por ejemplo:

    @Tallguy buen trabajo trazando el edificio  
    aquí. Se perdió un grupo pequeño  
    de casas en la parte superior izquierda del cuadrado,  
    He añadido unos cuantos, pero algunos todavía faltan.

Esto es particularmente útil cuando se valida o agrega al trabajo previo de otro - puede proporcionar retroalimentación, agradecimientos o más.

Es posible que desee proporcionar un enlace a un sitio que puede ayudar al mapeador, como <http://learnosm.org/es/coordination/remote-tracing/#buildings-walls-compounds-barriers>

Tenga en cuenta que muchas personas de todo el mundo van a participar, por lo que prefieren un lenguaje sencillo y claro. Si se encuentra con comentarios en otros idiomas, herramientas como el traductor Google son razonablemente eficaces.



### Refiriéndose a un cuadrado en particular cuando se envía un correo electrónico  
Si necesita enviar un mensaje, como un correo electrónico o un mensaje de IRC, y está consultando algo relativo a un cuadrado en particular dentro de un proyecto (tal vez necesita ayuda para identificar algo de las imágenes de satélite):  

1. Haga clic en el cuadrado en cuestión  
2. Haga clic en la barra de direcciones de su navegador web, que debería mostrar algo similar a 'http://tasks.hotosm.org/project/713#task/259'  
3. Resalte con el ratón todo el texto en la barra de direcciones, o use la combinación de teclas **Ctrl+A** para seleccionar todo el texto, a continuación, utilizar las teclas de acceso directo **Ctrl+C** para copiar el texto  
4. En su correo electrónico, mensaje de IRC, u otro mensaje,  
o bien, haga clic derecho del ratón y pegar,  
o la combinación de teclas **Ctrl+V**, para pegar el enlace en el mensaje. 

### Cómo obtener ayuda en vivo 
![IRC_help][] 

Desde el administrador de tareas;  
1. Haga clic en **OSM HOT IRC Channel #hot**  
2. Introduzca un nombre de usuario (¿Su nombre de usuario de OSM?), o utilice los personajes predefinidos  
3. En la parte inferior de la lista desplegable, seleccione **hot**  

![IRC using][]  

- A la derecha de la pantalla se muestra una lista de usuarios que están en línea ahora.  
- Escriba su mensaje en el cuadro en la parte inferior izquierda de la pantalla (esto a veces se oscurece temporalmente por otro texto, pero va a desaparecer mientras selecciona la caja.  
- Para dirigir un mensaje a un individuo en particular, incluya su nombre de usuario de la lista a la derecha dentro de su mensaje. Escriba y utilice la tecla Intro para enviar su comentario. El sistema es "en vivo" por lo que esperó la respuesta - su nombre de usuario a menudo se utiliza en la respuesta para mostrar que se dirige a usted. Normalmente recibirá una respuesta dentro de unos pocos segundos, así que por favor espere.  
- Un sistema simple alternativo se puede encontrar en [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Más información sobre el uso de IRC con OpenStreetMap se puede encontrar en [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternativamente, puede utilizar un cliente de IRC de su elección (Servidor=irc.oftc.net, y canal=#hot)  


### Consejos de edición y sugerencias
Ahora tiene una buena comprensión de lo que es el Administrador de tareas, y algunas de las diversas funciones que soporta. A diferencia de la edición normal, esta herramienta se utiliza a menudo para proyectos de tiempo crítico con muchos participantes - esto puede ser un poco diferente a lo que estamos acostumbrados. 

Algunos consejos generales para prestar atención al trabajar con esta herramienta:

 * Evite el mapeo lejano fuera de su cuadrado - otros mapeadores pueden estar trabajando en esa área, lo que resulta en duplicación de esfuerzos. Está bien para mapear objetos como edificios superpuestos un límite, pero no ir más lejos - subir los cambios inmediatamente después de mapear algo en la frontera.
 * Extender caminos, arroyos, u otras características ligeramente en los límites - esto permite que el próximo mapeador continuar donde lo dejó, pero suba los cambios tan pronto como haya terminado de editarlo.
 * Si tiene alguna duda acerca de lo que es un elemento particular, utilice la sección de comentarios para hacer preguntas o consulte la wiki.
 * Si comete un error grave - por ejemplo, borrar un elemento importante o una relación - use el IRC o la caja de comentarios de pedir a otros mapeadores ayuda para revertir esto. Trate de incluir el conjunto de cambios, o una descripción de lo que ocurrió. Al ser una tarea de colaboración, muchos otros creadores de mapas están para ayudarle - es importante recordar que todos cometemos errores a veces.
 * No dude en pedir opinión - los mapeadores validando su trabajo pueden ser cortantes o ir directamente al punto, pero si saben que pueden dialogar, el resultado es a menudo mucho mejor para todos los involucrados. Puede ser difícil comunicarse en otro idioma, y es fácil parecer brusco cuando se tiene que traducir, así como pasar un mensaje en un idioma que no se es fluido.
 * No debe validar su propio trabajo - un segundo par de ojos siempre conducirá a un mapeo de mejor calidad.
 * No se preocupe si otros mapeadores son escueto al validar su trabajo - como usted, lo que quieren es asegurarse de que todos los datos están mapeados con precisión. La retroalimentación es siempre sobre el trabajo que falta, no la crítica de sus esfuerzos hasta ahora.

[Tasking Manager Login]: /images/coordination/tasking_manager_image01.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[Authorizing access to OSM account by the Tasking Manager]: /images/coordination/tasking_manager_image03.png
[Job description]: /images/coordination/tasking_manager_image04.png
[Picking a task]: /images/coordination/tasking_manager_image05.png
[Assigned task square]: /images/coordination/tasking_manager_image06.png
[Editing options]: /images/coordination/tasking_manager_image07.png
[IRC_help]: /images/coordination/tasking_manager_image08.png
[IRC using]: /images/coordination/tasking_manager_image09.png
[Tasking Manager About]: /images/coordination/tasking_manager_image011.png
[Tasking Manager Languages]: /images/coordination/tasking_manager_image012.png
