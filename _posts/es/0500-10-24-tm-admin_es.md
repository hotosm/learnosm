---
layout: doc
title: Guía del Administrador de Tasking Manager
permalink: /es/coordination/tm-admin/
lang: es
category: coordination
---

# Guía del Administrador de Tasking Manager


**Si la interfaz de usuario de la versión que utiliza se ve diferente a la descrita aquí, entonces debe consultar [nuestra descripción de la versión](/es/coordination/tm-disambiguation)**

Índice por secciones
-------------
-  [Iniciar sesión](/en/coordination/tm-admin/#login-and-access)
-  [Permisos](/en/coordination/tm-admin/#permissions)
-  [Crear un proyecto](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Definir área de mapeo](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definir tareas](/en/coordination/tm-admin/#define-tasks)
    -  [Zona del proyecto](/en/coordination/tm-admin/#project-area-trim)
    -  [Advanzado: Define el área de mapeo y las tareas con geodatos importados](/en/coordination/tm-admin/#advanced-define-mapping-project-areas-and-tasks-with-imported-geodata)
-  [Editar proyecto de mapeo](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Descripción - lo primero que tienen que aprender los usuarios sobre su proyecto](/en/coordination/tm-admin/#description)
    -  [Instrucciones - qué deben hacer los usuarios](/en/coordination/tm-admin/#instructions)
    -  [Metadatos - a donde pertence el proyecto](/en/coordination/tm-admin/#metadata)
    -  [Áreas prioritarias - dónde usuarios deben comenzar a mapear](/en/coordination/tm-admin/#priority-areas)
    -  [Imágenes - base para elaborar mapas](/en/coordination/tm-admin/#imagery)
    -  [Permisos - quién puede mapear y validar](/en/coordination/tm-admin/#permissions)
    -  [Consejos útiles - cómo rellenar todos los campos](/en/coordination/tm-admin/#helpful-hints)
    -  [Publicar - No olvides o no acabará nunca su trabajo](/en/coordination/tm-admin/#publish)

El Tasking Manager es la herramienta esencial para coordinar el mapeo en OpenStreetMap. Apoya las iniciativas de mapeo humanitario, realizando mapathons o creando tareas de mapeo para los estudiantes. La aplicación divide un área de interés en trozos geográficos manejables que pueden ser completados rápidamente y en colaboración. Este enfoque permite la distribución de tareas a muchos cartografos individuales, a la vez que reduce los posibles conflictos de edición. 

El software fomenta la precisión y la calidad de los datos cartográficos proporcionando un conjunto coherente de instrucciones para sus cartografistas (por ejemplo, 'cartografiar todas las carreteras y edificios'). En resumen, el Administrador de Tareas es la forma de configurar y dirigir el flujo de trabajo para las actividades cartográficas abiertas. 

Esta guía describe la administración básica del Tasking Manager. Cubre las instrucciones para crear y modificar proyectos de mapeo y los permisos de manejo para el mapeo y la revisión de los datos obtenidos por colaboración masiva.

## Iniciar sesión

Para acceder al Tasking Manager se necesita una cuenta de OpenStreetMap (OSM). Puede visitar el [HOT Tasking Manager](http://tasks.hotosm.org), o cualquier otra instancia de la comunidad de su preferencia. Allí haga clic en `Regístrese` y le redirigirá a la página web de [OpenStreetMap](https://www.openstreetmap.org) para crear su cuenta. O haga clic en `Iniciar sesión` si ya tiene una, y en la ventana emergente puede darle al Tasking Manager acceso limitado a su cuenta de OSM.

## Permisos

El nivel de usuario más básico es **mapper**. Los mapeadores pueden acceder al Tasking Manager para encontrar y seleccionar un proyecto de mapeo en el que trabajar. Toda la funcionalidad del mapeador se describe en la [Guía del mapeador del Tasking Manager sobre LearnOSM]](/es/coordination/tm-user/). Tenga en cuenta que algunos proyectos, como los que se encuentran en estado de borrador (es decir, no publicados), o restringidos a ciertos equipos, no son visibles para los mapeadores habituales

Todos los permisos especiales son manejados por *organizaciones* y *equipos*. Una **organización** es la entidad coordinadora, y bajo cada organización se pueden crear proyectos y equipos de mapeo. Una organización podría, por ejemplo, representar a un usuario de datos como una organización humanitaria, o cualquier comunidad de OpenStreetMap. Si necesita configurar su organización en el Tasking Manager, contacte con los mantenedores técnicos de la aplicación de Tasking Manager.

Cada organización tiene uno o más **administradores**. Ellos tienen el permiso para crear y modificar los proyectos asociados. Se puede acceder a todas las opciones de administración a través de la sección `Administrar` en la navegación principal.

Los administradores de una organización pueden crear **equipos**. Los equipos son grupos de usuarios y pueden ser públicos o privados. También tienen uno o más administradores. Los equipos pueden ser creados de manera que los usuarios puedan unirse a un equipo por su cuenta o "sólo con invitación", lo que significa que los administradores de los equipos son notificados sobre las solicitudes para unirse y deben decidir sobre ellas.

Para cada proyecto, los administradores pueden asignar equipos específicos para conceder o restringir el acceso a la cartografía, definir quién puede validar los datos o quién puede editar los metadatos del proyecto.


## Crear proyecto de mapeo

Para acceder a la sección de administración, haga clic en `Administrar` en la navegación de la parte superior, en la primera fila verá un espacio para 'Proyectos'. A su lado, haga clic en el botón `Agregar` para crear uno.

![TM Add Project][]

Puede elegir entre definir el área de interés (área de mapeo) de su proyecto de mapeo por cualquiera de los dos:

* Opción 1: `Dibujar` el área de interés en un mapa web (método preferido)
* Opción 2: `Subir archivo` para importar el área de interés desde un geojson, KML o shapefile. Esto también puede incluir una tarea específica (encontrar más información en la parte de "Creación de proyectos avanzados" más abajo)

![TM New][]

### Definir área de mapeo

![TM Draw AoI][]

1. Puede pasar de una capa de fondo a otra utilizando los botones en la parte superior.
1. Haga clic en el botón `Dibujar` situado a la izquierda.
2. Para dibujar un polígono que represente el área del mapa en el marco del mapa, mantenga pulsado el botón derecho del ratón para mover el mapa sin hacer clic, lo que añadirá un nodo. El polígono debe enmarcar firmemente el área de interés. Esto ahorra tiempo para completar las baldosas que no son de interés (por ejemplo, el océano, el bosque).
3. Haga clic en el punto de inicio para completar el polígono.
4. Continúe añadiendo nodos con un solo clic del ratón. Un doble clic del ratón terminará el polígono. <! -Después de completar un polígono puedes mover los nodos o añadir nuevos para obtener el área tal y como la quieres.-->

### Definir tareas

Después de que el área de mapeo general haya sido definida, se va a dividir en áreas más pequeñas llamadas *Tareas*. Estas tareas deben tener un buen tamaño para que puedan ser completadas rápidamente y en colaboración, con muchas personas contribuyendo a un objetivo de proyecto colectivo.

![TM Tile Sizes][]

El área de mapeo se divide automáticamente en en celdas de rejilla y cada celda se convierte en una tarea. Utiliza los botones `Mayor` y `Menor` para ajustar el tamaño general de los cuadros de tareas.

> Usar una imagen de satélite para determinar un buen tamaño de la tarea es muy útil. Puede cambiar entre varias capas de fondo del mapa con los botones de la parte superior del mapa. <!-- Si tienes imágenes personalizadas para el proyecto, también puedes cargarlas usando el botón en la parte superior derecha del mapa y poniendo una url TMS o WMS. -->

Después de ajustar el tamaño de la cuadrícula de tareas de base, puedes dividir selectivamente ciertas tareas en cuatro más pequeñas con el botón `clic para dividir`. O puedes `Dibujar el área a dividir`, y te permitirá dibujar un polígono sobre un área y todas las tareas dentro de ella se dividirán en cuatro nuevas cada una. El botón de reinicio eliminará todas tus divisiones personalizadas.

** Tamaños de la tareas **: Por favor, tómese su tiempo y defina cuidadosamente los tamaños de las tareas. El tamaño óptimo de la tarea depende en gran medida de la cantidad de objetos que se solicitan para ser mapeados en cada tarea. Los tamaños de las tareas en las zonas rurales son generalmente más grandes que para los proyectos de mapeo, que se trata de digitalizar los edificios en las ciudades por las zonas de asentamientos densos. Idealmente, trate de mapear un área del proyecto usted mismo para ver los desafíos y el esfuerzo de mapearla. Esto debería ayudarte a decidir el tamaño óptimo del cuadrado.

Se recomienda elegir tamaños de tareas que los mapeadores puedan completar en 15-20 minutos.

> Consideraciones para decidir el tamaño de las tareas:
> - Los mapeadores principiantes necesitan aproximadamente cuatro veces más tiempo que los mapeadores experimentados.
> - Los cartografos principiantes necesitan desarrollar un ojo para las imagenes satelitales. Encontrar las características correctas puede ser difícil.
> - Los mapeadores principiantes se enfrentan a retos para trazar características muy similares, como edificios.
> - Un cuadrado puede ser dividido más tarde, pero no hay opción de unir los cuadrados.
> - En el borde y en los rincones de las tareas, siempre existe la posibilidad de entrar en conflicto con un compañero mapista a tu lado. Tareas más pequeñas significan más esquinas y bordes. Hay una compensación en el tamaño para facilitar a los cartografos, pero no para producir conflictos de mapeo entre ellos.

Después de finalizar la definición de los tamaños de las tareas, haga clic en `Siguiente`.

### Zona del proyecto

![TM Trim][]

Después de determinar los tamaños de las tareas, tendrá la opción de recortar las tareas hasta la extensión de su área de mapeo. Si simplemente hace clic en `Recortar` entonces se salta todos los cuadros de la tarea que no contienen el área de mapeo

![TM Trim coarse][]

Si marcas la casilla de recortar el área exacta antes de hacer clic en `Recortar`, entonces obtienes formas de tareas arbitrarias en el borde.

![TM Trim fine][]

Después de finalizar el recorte del área de mapeo, haga clic en `Next`.


### Guardar el proyecto

Dale un título al proyecto (puede ser editado en la siguiente pantalla) y haz clic en `Crear`. El primer paso está completado.

Aprenda más sobre cómo añadir descripciones e instrucciones al proyecto y conseguir que se publique a los cartografos en nuestro capítulo "Editar un proyecto de cartografía" más abajo.

### Advanzado: Define el área de mapeo y las tareas con geodatos importados

Las aplicaciones de escritorio geoespaciales como JOSM o QGIS permiten a los cartografos dibujar con mayor precision las areas de interes, en comparacion con el resbaladizo mapa web dentro del Tasking Manager. También puede determinar de antemano formas y tamaños de tareas especiales.

> El Tasking Manager es una aplicación web. Por favor, asegúrese de que el archivo que suba se reduzca en su tamaño. Puede que quieras simplificar las geometrías primero y cortar demasiados dígitos de las coordenadas.

**Subir un archivo GeoJSON o KML del área de interés a ser cartografiada**

1. En el primer paso de la creación de un proyecto, haz clic en la opción 2, el botón ‘Subir archivo’.
2. Busque su fichero en el cuadro de subida de ficheros.
3. Haz clic en el nombre del archivo para resaltarlo y luego haz clic en ‘Open’.
4. Áreas de interés importados no pueden ser editados.

Después de subir un archivo al Administrador de Tareas puede seleccionar si desea definir las tareas como 

1. `Rejilla cuadriculada`, con la funcionalidad descrita anteriormente para definir tareas.
2. `Geometrías arbitrarias`, provenientes del archivo que acabas de subir.

**Definir geometrías arbitrarias**

Si subió un archivo para definir su área de proyecto, ese archivo también puede contener las formas para las tareas individuales. Por ejemplo, si el área de interés consiste en un polígono, el proyecto tendrá una sola tarea. Esto sólo debería utilizarse en casos especiales y por razones específicas. Por ejemplo, un proyecto de importación de carreteras podría necesitar formas de tareas personalizadas o el resultado de un proceso de reducción de área de mapeo.

Tenga en cuenta que las geometrías arbitrarias no se pueden dividir. Sólo deben utilizarse en casos especiales, ya que tienen implicaciones en el rendimiento de la herramienta.

## Editar proyecto de mapeo

Después de que un proyecto ha sido inicialmente establecido y creado, tienes que editar su información y configuración:

- Descripción - Se utiliza para inclusión en listas y para transmitir información motivadora para los cartógrafos
- Instrucciones - Instrucciones detalladas sobre qué y cómo mapear los objetos/entidades/funciones necesarias
- Metadatos - Información adicional utilizada para categorizar el Proyecto. A menudo se utiliza para filtrar la lista completa de proyectos.
- Imágenes - Lugar para proporcionar una URL TMS y la licencia requerida.
- Áreas prioritarias - Permite especificar las partes del Proyecto que deben ser mapeadas primero.
- Permisos - Permite restringir el acceso al proyecto para su mapeo y validación.
- Ajustes - Fecha de vencimiento del proyecto y preajustes del JOSM.
- Acciones - Enviar mensajes a los colaboradores, validar e invalidar todo el proyecto con un solo clic.

> Rellenar esta información con cuidado es una parte esencial para el éxito de un proyecto de cartografía. Es muy importante que los objetivos y los recursos del proyecto se comuniquen claramente para que los cartografos conozcan la información específica e importante. Tenga presente que los cartógrafos pueden no tener experiencia previa con OpenStreetMap y no estarán familiarizados con las directrices de marcado.
> Es aconsejable confinar un proyecto a una clase de objetos a ser mapeados. Si se necesita un mapa base de un área, es mejor dividirlo en varios proyectos, uno para las carreteras, otro para los edificios, etc. Ahora los principiantes pueden centrarse en una pequeña clase de objetos mientras aprenden a cartografiarlos correctamente.

### Descripción

![TM Description][]

Esta pantalla permite establecer el estado del proyecto como Borrador, Publicado o Archivado, la prioridad, una descripción corta utilizada en los listados de proyectos y la descripción larga disponible una vez que un mapeador ha seleccionado el proyecto.

Tanto la descripción corta como la larga deben proporcionar información acerca de por qué existe el proyecto, quién utilizará los datos y el impacto que se espera que tenga el mapeo. Estos campos soportan el texto en Markdown y pueden incluir imágenes y videos.

### Instrucciones

![TM Instructions][]

**Objetos a mapear** - Una lista de las características que quieres que los usuarios cartografíen. Generalmente, cuantas menos características mejor, ya que es más probable que se completen.

> Los proyectos que piden que se cartografíen muchos elementos son difíciles para los cartografos y difíciles de validar.  Tardan mucho más tiempo en conseguir un buen conjunto de datos utilizables. Los tamaños de las tareas también son difíciles de hacer eficientes para los diferentes tipos de mapeo, por ejemplo, los edificios necesitan pequeñas plazas de tareas, las carreteras y las vías fluviales necesitan plazas de tareas más grandes. Hacer múltiples proyectos sobre la misma área para obtener edificios y características lineales mapeadas es una mejor práctica.

**Comentario al conjunto de cambios** - Este es el comentario al conjunto de cambios por defecto que se adjuntará a cada carga de datos en OSM. Usualmente incluye algo que identifica el Tasking Manager en el que reside el proyecto y las características que fueron mapeadas. A menudo se utiliza para "etiquetas almohadillah" para ayudar a identificar la organización que solicita y/o hace el mapeo. También puede describir el mapeo que se está haciendo, por ejemplo, "Mapeo de edificios".

> Se debería instruir a los usuarios para que hagan comentarios útiles sobre lo que han mapeado, pero siempre es una buena idea ayudarles con buenos comentarios por defecto.

**Instrucciones detalladas** - Aquí es donde la mayoría de sus instrucciones detalladas serán colocadas y lo que esperamos que cada mapeador y validador lea cuidadosamente y siga.

Vea las siguientes notas sobre cómo crear buenas instrucciones.

**Por instrucciones de la tarea** - Estas se mostrarán cuando un mapeador seleccione una tarea y también tiene una característica especial que permite que los URLs específicos de la tarea sean elaborados en base al típico "mapa deslizable" con las coordenadas x, y, z.

### Metadatos

![TM Metadata][]

> Todos estos campos deben ser rellenados y no serán opcionales en futuras versiones del Tasking Manager.

**Nivel de mapeador** - Esto es una indicación de la dificultad del proyecto de mapeo. Hay 3 opciones: Principiante, Intermedio y Avanzado. Este ajuste es una indicación para el mapeador de qué nivel de experiencia debe tener para tener más éxito en el proyecto de mapeo. Puede utilizarse en el filtrado de la lista de proyectos y el nivel sugerido puede ser requerido en la pantalla de permisos.

**Tipos de mapeo** - Se utiliza en el filtrado de listas de proyectos y ayuda a los mapeadores a encontrar los proyectos que les gusta mapear.

**Organización** - La organización cuyos directores de proyecto deben tener permisos administrativos para este proyecto. La organización debe haber sido registrada previamente con el Tasking Manager.

**Intereses** - Se utiliza para sugerir proyectos a los cartografos. Los cartografos especifican sus intereses en su perfil.

**ID del filtro OSMCha** - OSMCha se ofrece como un enlace desde el resumen de contribuciones. El filtro estándar limita la salida al cuadro delimitador del proyecto y a las contribuciones no anteriores a la fecha de creación del proyecto y con el nombre del proyecto en el comentario del changeset. Si cree que algo diferente sería un mejor enfoque para analizar los conjuntos de cambios de su proyecto, entonces proporcione una URL OSMCha o un ID de filtro de OSMCha aquí.

### Áreas prioritarias

![TM Priority Area][]

Utilice las herramientas proporcionadas para dibujar las áreas que deben ser mapeadas primero. Puede tener múltiples áreas prioritarias para un proyecto. También puede cambiar las áreas prioritarias en cualquier momento.

> Durante la cartografía de desastres, al principio del evento, tener un área grande de cartografía del proyecto y usar áreas prioritarias para enfocar la cartografía a medida que llega nueva información es una buena práctica.

### Imágenes

Campo URL - Un campo que toma un URL TMS que pasará automáticamente al Editor OSM que utiliza el mapeador o validador. Por favor, siga el ejemplo, es muy importante que esté formateado correctamente para que funcione en todos los editores.

Licencia - Opcionalmente, si hay una licencia específica requerida para que el mapeador acepte usar las imágenes, puede seleccionarla aquí. Si necesita una licencia que no está disponible, puede ponerse en contacto con un administrador para la instalación del Tasking Manager y pedirle que la añada.

### Permisos

![TM Permissions][]

**Permisos de mapeo** - Permite exigir que un mapeador esté en el nivel adecuado para mapear en el proyecto (pantalla de Metadatos arriba). Los niveles de los mapeadores se pueden establecer manualmente, pero se aplican automáticamente en base a los cambios totales. También puede requerir que un mapeador sea parte de un equipo. Los equipos pueden ser seleccionados a continuación

**Permisos de validación** - Permite exigir que un mapeador esté en el nivel adecuado para validar en el proyecto (pantalla de Metadatos arriba). Los niveles de los mapeadores se pueden establecer manualmente, pero se aplican automáticamente en base a los cambios totales. También puede requerir que un validador sea parte de un equipo. Los equipos pueden ser seleccionados a continuación

**Equipos** - Seleccionar equipos para el mapeo y la validación. Si lo hace, entonces puede restringir el mapeo y/o validación a los miembros del equipo usando los controles de arriba. Puedes seleccionar varios equipos para cada rol. Selecciona un equipo, elige un rol y pulsa "Añadir". Una vez que hayas añadido un equipo, podrás editar su función o eliminar la asignación.

**Privacidad** - Esto restringe el acceso al proyecto a los usuarios que forman parte del equipo al que pertenece el proyecto.

### Ajustes

![TM Settings][]

**Idioma por defecto** - Configura el idioma por defecto de las instrucciones para un proyecto.

**Editores** - Restringe los editores disponibles a los revisados. Puede especificar diferentes conjuntos para el mapeo y para la validación.

**Obligar la selección al azar** - Si está marcada, los usuarios no pueden seleccionar una tarea específica para el mapeo.

### Acciones

![TM Actions][]

**Enviar un mensaje a todos los colaboradores** - Esto enviará un mensaje de Tasking Manager a todos los que han marcado una tarea como completa o válida. Puede ser usado para agradecer a los contribuyentes y/o guiarlos a otros proyectos en un portafolio/campaña. También debe ser usado antes de usar cualquiera de las dos opciones de Validar/Invalidar todas las tareas descritas a continuación.

**Mapeo, validación e invalidación** - Esto establecerá el estado de todas las tareas ya sea mapeadas, validadas o invalidadas. Manejar con cuidado pues no es posible deshacer el cambio.

**Restablecer las tareas** - Esto restablecerá todas las tareas a su estado prístino, pero las acciones anteriores seguirán disponibles en el historial de tareas. Manejar con cuidado pues no es posible deshacer el cambio.

** Transferir propiedad del proyecto** - Permite especificar otro usuario que se convertirá en el propietario de este proyecto. Manejar con cuidado Manejar con cuidado pues no es posible deshacer el cambio.

**Clonar proyecto** - Esto creará un duplicado del proyecto excepto por el área de mapeo, la cuadrícula de tareas y las áreas de prioridad que tendrá que reimportar o redibujar.

**Eliminar Proyecto** - Esto eliminará permanentemente el proyecto del Administrador de Tareas. Manejar con cuidado pues no es posible deshacer el cambio. Esta acción ya no está disponible tan pronto como se haya hecho cualquier contribución al proyecto.

### Notas de instrucción

Por favor, use un lenguaje sencillo, ya que su público objetivo puede estar compuesto de personas que no son angloparlantes.

1. El título del proyecto ya debería revelar qué entidades deben ser mapeadas. Prefiera un título como
*#1396 - Mapas perdidos: Estado de Níger (norte), Nigeria (proyecto 1: carreteras y zonas residenciales)*
2. Los mensajes más importantes deben aparecer primero en la pestaña de instrucciones para asegurar que se lean. Esto incluiría cualquier imagen especial para usar en lugar de Bing. Las primeras frases podrían mencionar que no es necesario cartografiar todas las casas si el proyecto es sobre carreteras y zonas residenciales, por ejemplo. O que es necesario cartografiar cada casa si el proyecto se va a utilizar para estimar la densidad de población. Estos son los mensajes que también deberían aparecer en la ficha de descripción.
3. Otros puntos de aclaración: Si el proyecto es adecuado sólo para cartografistas con un cierto nivel de experiencia. Por ejemplo, el proyecto utiliza importaciones o los datos existentes deben realinearse con trazas de GPS o alguna otra imagen (véase la sección anterior). Expréselo de modo que los nuevos cartógrafos se sientan invitados a contribuir a otros proyectos, pero comprendan que en este caso se requieren técnicas avanzadas.
4. Hay directrices que cubren los errores comunes que vemos al validar. Un ejemplo es la compilación de Blake Girardot sobre [mapeo en África Occidental](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Utilice el enlace en las instrucciones y explique que es necesario adherirse a estas directrices.
5. El recurso definitivo sobre el etiquetado es el [wiki de OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Para muchas tareas relacionadas con HOT la página sobre [etiquetado de carreteras en África](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) es la especialización adecuada y la lectura altamente recomendada para todo mapeador. Si su proyecto debe adherirse a diferentes estándares de etiquetado, entonces escriba una página similar en el wiki y enlácela en sus instrucciones.


### Consideraciones sobre imágenes

En la mayoría de los casos usamos las imágenes estándar de Bing. Pero hay situaciones en las que podrías querer elegir una fuente alternativa:

1. Bing no proporciona una cobertura de alta resolución para su área de mapeo.
2. Bing tiene una considerable cobertura nubosa en esta área.
3. Necesitas imágenes más nuevas para la evaluación post-desastre.

Si Bing no resulta adecuado, entonces Mapbox es la siguiente opción. Sólo debes buscar otras fuentes si ninguna de ellas cumple con tus requisitos.

En tales casos no basta con elegir una fuente compatible con la licencia y ponerla a disposición a través de un servicio WMS o TMS. Es probable que su área de mapeo ya haya sido parcialmente mapeada usando imágenes de Bing o Mapbox y puede haber un notable desplazamiento entre las imágenes. Debe observar de cerca varias ubicaciones de su área de mapeo y determinar el desplazamiento entre sus imágenes y los datos previamente mapeados. Si los datos existentes de OSM están desplazados con respecto a sus imágenes pero se ajustan a las imágenes de Bing, entonces normalmente asumimos que Bing es el estándar de oro, a menos que tengamos rastros de GPS que demuestren que esta suposición es errónea.

Si hay un desplazamiento constante entre sus imágenes y Bing a través del área de mapeo, entonces esto podría ser corregido en el servidor para que las imágenes de varias fuentes cargadas en el editor coincidan. Si esto no es posible, si el desplazamiento varía a través del área de mapeo o si los datos existentes están alineados con varias fuentes, entonces es el momento para el plan B:

El punto importante es que debe desarrollar una estrategia sobre cómo hacer frente a estas cuestiones y proporcionar instrucciones detalladas a los mapeadores y validadores. Le sugerimos encarecidamente que declare tal proyecto "sólo para cartografistas experimentados" y que explique que la experiencia en este caso no significa haber cartografiado más de 200 edificios, sino haber tratado ya con cuestiones de alineación y diferentes fuentes de imágenes.

Una posible estrategia podría incluir estos pasos:

1. Indique claramente qué imágenes deben considerarse como la referencia a la que debe alinearse cualquier otra cosa. En este caso asumamos que la referencia es Bing.
2. Asegúrate de que todas las características existentes que también son visibles en Bing estén alineadas con las imágenes de Bing, es decir, volver a alinear de ser necesario.
3. Alinear las imágenes alternativas a las características existentes (y por lo tanto a Bing) utilizando la función offset de imágenes del editor.
4. Añade nuevas características de las imágenes alternativas ahora correctamente alineadas.

Es importante que el paso 3 se repita para cada tarea del proyecto y que los cuadrados de las tareas individuales no sean demasiado grandes porque las compensaciones de las imágenes pueden variar considerablemente a lo largo de un área cartográfica, en particular en particular si el terreno no es plano. Incluso pueden producirse discontinuidades en las imágenes a lo largo de un proyecto - búsquelas y avise a los contribuyentes de tal problema.

Aquí hay algunas sugerencias de información que podría incluir en las instrucciones del proyecto:

- [directrices generales para los distintos editores](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [un gif animado sobre la alineación de imágenes en iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [el capítulo de alineación de imágenes josm en learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Corregir y publicar

Revise las distintas pestañas para asegurarse de que la redacción y el formato son correctos, y las instrucciones son claras. Si necesita hacer cambios o mejoras en su proyecto, haga clic en el enlace "Editar" en la esquina superior derecha de la página.
Si el proyecto está listo para el mapeo, haga clic en el enlace "Publicar". Una vez que el proyecto se publique, estará disponible para su mapeo para cualquier persona con una cuenta de OSM, a menos que se haya especificado un grupo de usuarios en la pestaña de 'Usuarios permitidos', en cuyo caso sólo los usuarios permitidos podrán trabajar en él. Si es necesario, se pueden hacer ediciones al proyecto después de su publicación haciendo clic en el enlace 'Editar'.

[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM Draw AoI]: /images/coordination/tm4_draw_aoi.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
