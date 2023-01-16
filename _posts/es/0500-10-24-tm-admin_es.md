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
-  [Inicio de sesión y acceso](/en/coordination/tm-admin/#login-and-access)
-  [Permisos](/en/coordination/tm-admin/#permissions)
-  [Crear un proyecto](/en/coordination/tm-admin/#create-a-project)
    -  [Definir área de mapeo](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definir tareas](/en/coordination/tm-admin/#define-tasks)
    -  [Avanzado: Definir tareas con datos importados](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Recorte del área del proyecto](/en/coordination/tm-admin/#project-area-trim)
    -  [Dele nombre al proyecto](/en/coordination/tm-admin/#name-the-project)
-  [Editar un proyecto](/en/coordination/tm-admin/#edit-a-project)
    -  [Descripción: lo primero que los usuarios conocen de su proyecto](/en/coordination/tm-admin/#description)
    -  [Instrucciones - qué deben hacer los usuarios](/en/coordination/tm-admin/#instructions)
    -  [Metadatos - al que pertenece el proyecto](/en/coordination/tm-admin/#metadata)
    -  [Áreas prioritarias - donde los usuarios deben empezar a mapear](/en/coordination/tm-admin/#priority-areas)
    -  [Imágenes: la base de la cartografía](/en/coordination/tm-admin/#imagery)
    -  [Permisos - quién puede asignar y validar](/es/coordinación/tm-admin/#permisos)
    -  [Ajustes](/en/coordination/tm-admin/#settings)
    -  [Acciones](/en/coordination/tm-admin/#actions)
    -  [Editor personalizado](/en/coordination/tm-admin/#custom-editor)
    -  [Guardar y probar](/en/coordination/tm-admin/#save-and-test)
    -  [Publicar](/en/coordination/tm-admin/#publish)
-  [Gestión de proyectos](/en/coordination/tm-admin/#project-management) 
    -  [Sea receptivo](/en/coordination/tm-admin/#be-responsive)
    -  [Proyectos de secuenciación](/en/coordination/tm-admin/#sequencing-projects)
    -  [Ciclo de vida del proyecto](/en/coordination/tm-admin/#project-lifecycle)
-  [Información adicional](/en/coordination/tm-admin/#additional-information)
    -  [Consideraciones sobre las imágenes](/en/coordination/tm-admin/#considerations-concerning-imagery)

El Administrador de Tareas es la herramienta esencial para coordinar la cartografía en OpenStreetMap. Apoya las iniciativas de cartografía humanitaria, la realización de mapatones o la creación de tareas de cartografía para estudiantes. La aplicación divide un área de interés en trozos geográficos manejables que pueden completarse rápidamente y en colaboración. Este enfoque permite distribuir las tareas entre muchos cartógrafos individuales, reduciendo al mismo tiempo los posibles conflictos de edición. 

El software fomenta la obtención de datos cartográficos precisos y de calidad proporcionando un conjunto coherente de instrucciones para sus cartógrafos (por ejemplo, "cartografiar todas las carreteras y edificios"). En resumen, el Administrador de Tareas es la forma de configurar y dirigir el flujo de trabajo de las actividades cartográficas abiertas. 

Esta guía describe la administración básica del Administrador de Tareas. Cubre las instrucciones para crear y modificar proyectos de mapeo y manejar los permisos para el mapeo y la revisión de los datos de crowdsourcing.

## Inicio de sesión y acceso

Para acceder al Administrador de Tareas se necesita una cuenta de OpenStreetMap (OSM). Puedes visitar el [HOT Administrador de Tareas](http://tasks.hotosm.org), o cualquier otra instancia comunitaria de tu preferencia. Allí haga clic en `Sign up` y le redirigirá al [sitio web de OpenStreetMap](https://www.openstreetmap.org) para crear su cuenta. O haz clic en `Log in` si ya tienes una, y en la ventana emergente puedes dar al Administrador de Tareas acceso limitado a tu cuenta de OSM.

## Permisos

El nivel de usuario más básico es el de **mapeador**. Los mapeadores son capaces de entrar en el Administrador de Tareas para encontrar y seleccionar un proyecto de mapeo en el que trabajar. Toda la funcionalidad del mapeador se describe en la [Guía del mapeador del Administrador de Tareas de LearnOSM](/es/coordinación/tm-user/). Tenga en cuenta que algunos proyectos, como los que están en estado de borrador (es decir, sin publicar), o restringidos a ciertos equipos, no son visibles para los mapeadores habituales. 

Todos los permisos especiales son manejados por *organizaciones* y *equipos*. Una **organización** es el paraguas principal, y bajo cada organización se pueden crear proyectos y equipos de mapeo. Una organización puede representar a un usuario de datos como una organización humanitaria, o cualquier comunidad de OpenStreetMap. Si necesita configurar su organización en el Administrador de Tareas, póngase en contacto con los responsables técnicos de la instancia del Administrador de Tareas. Consulte [HOT Organizaciones de Administrador de Tareas](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) para ver una lista de las organizaciones que están presentes en el Administrador de Tareas de HOT. Si su comunidad u organización no está en la lista y le gustaría crear proyectos en el Administrador de Tareas de HOT, por favor, rellene [este formulario](http://bit.ly/HOTTasking) para registrar su interés. 

Cada organización tiene uno o más **gestores**. Tienen permiso para crear y modificar los proyectos asociados. Se puede acceder a todas las opciones de los gestores a través de la sección `Gestión` en la navegación principal.

Los responsables de una organización pueden crear **equipos**. Los equipos son grupos de usuarios de OpenStreetMap y pueden ser públicos o privados. También tienen uno o más gestores de equipo. Los equipos pueden configurarse de manera que los usuarios puedan unirse a un equipo por sí mismos o 'sólo por invitación', lo que significa que los gestores del equipo son notificados sobre las solicitudes de adhesión y deben decidir sobre ellas.

Para cada proyecto, los administradores pueden asignar equipos específicos para conceder o restringir el acceso a la cartografía, definir quién puede validar los datos o quién más puede editar los metadatos del proyecto.

## Crear un proyecto

Haga clic en `Administrar` en la navegación de la parte superior. En la primera fila verá un espacio para 'Proyectos'. Al lado, haga clic en el botón `Añadir` para crear uno.

![TM Add Project][]

Puede elegir entre definir el área de interés (área cartográfica) de su proyecto cartográfico

* Opción 1: `Dibujar` el área de interés manualmente
* Opción 2: `Cargar archivo` para importar el área de interés como GeoJSON, KML o archivo shape comprimido

![TM New][]

### Definir el área de mapeo

* Opción 1: `Dibujar` el área de interés manualmente

1. Puede pasar de una capa de fondo a otra utilizando los botones en la parte superior.
1. Haga clic en el botón `Dibujar` de la izquierda.
2. Para dibujar un polígono que represente el área de mapeo en el marco del mapa, mantenga pulsado el botón derecho del ratón para mover el mapa sin hacer clic, lo que añadirá un nodo. El polígono debe enmarcar estrechamente el área de interés. Esto ahorra tiempo a la hora de completar los mosaicos que no son de interés (por ejemplo, el océano o el bosque).
3. Haga clic en su punto de partida para completar el polígono. <!--Después de completar un polígono puede mover los nodos o añadir otros nuevos para conseguir el área tal y como la quiere.-->

<br>

* Opción 2: `Cargar archivo` para importar el área de interés como GeoJSON, KML o shapefile comprimido

1. En el primer paso de la creación de un proyecto, haga clic en `Cargar archivo`.
2. Busque su archivo en la ventana de carga de archivos.
3. Haga clic en el nombre del archivo para resaltarlo y luego haga clic en "Abrir".
4. Las áreas de interés importadas no pueden ajustarse en el Administrador de Tareas.

Es posible que esté cargando un archivo que ya tiene las tareas (pequeños cuadros de asignación) predefinidas. Encontrará más información al respecto en la sección [Definir tareas con datos importados](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data) más abajo.

> NOTA: ¡El Administrador de Tareas tiene límites! El límite técnico máximo para un proyecto es de 5.000 km2, aunque para garantizar que su proyecto no tarde demasiado en completarse, intente mantenerlo por debajo de los 1.000 km2. Si necesitas cartografiar un área mayor que ésta, tendrás que crear varios proyectos. Podrás ver el tamaño del proyecto en la esquina inferior izquierda de la vista previa del mapa. 

### Definir tareas

Una vez definida el área de mapeo global, se va a dividir en áreas más pequeñas llamadas *Tareas*. Debe considerar el tamaño de las tareas de su proyecto con mucho cuidado. Los proyectos bien diseñados tienen tamaños de tarea apropiados, lo que permite completarlos con la mayor eficiencia posible. 

![TM Tile Sizes][]

El área del proyecto se divide automáticamente en casillas de la cuadrícula y cada casilla se convierte en una tarea. Utilice los botones `Mayor` y `Menor` para ajustar el tamaño total de las casillas de la tarea. El tamaño de la tarea por defecto es probablemente demasiado grande. Cuando modifique el tamaño de la tarea, tenga en cuenta el tamaño de la tarea que aparece a la izquierda junto a 'El tamaño de cada tarea es de aproximadamente ... km2'.

Tómese su tiempo y establezca el tamaño de las tareas con mucho cuidado. Intente reducir el tamaño de la tarea hasta el punto en que crea que un cartógrafo seguro tardaría **15 minutos en completarla**. El tamaño óptimo de la tarea depende totalmente de las características que se les pida a los cartógrafos que identifiquen y de la densidad de dichas características. Por ejemplo, un proyecto de cartografía de carreteras en una zona rural tendría tareas mucho mayores que un proyecto que implique la digitalización de edificios en un asentamiento denso.

> Acérquese y active las imágenes de Bing para determinar un buen tamaño de la tarea. Puedes cambiar entre varias capas de mapa de fondo con los botones de la parte superior del mapa.

Después de haber ajustado el tamaño total de la tarea, puede dividir selectivamente ciertas tareas en cuatro más pequeñas con el botón `Clic para dividir`. O puede `Dibujar un área para dividir`, y le permitirá dibujar un polígono sobre un área para dividir todas las tareas dentro de ella. Estas funciones son especialmente útiles si la densidad de la característica que desea mapear varía en el área de su proyecto. Por ejemplo, puede haber una zona costera densamente construida que necesite tareas pequeñas y una zona rural interior que necesite tareas mucho más grandes. El botón `Reset` eliminará todas las divisiones personalizadas.

Consideraciones para decidir el tamaño de las tareas:
-  Las tareas pueden dividirse, pero no hay opción de volver a fusionarlas una vez creado el proyecto.
-  Una vez que se ha creado un proyecto, la división de tareas requiere mucho tiempo y tiene que hacerse tarea por tarea.
-  En los bordes y esquinas de las tareas, hay un mayor potencial de conflictos entre mapeadores vecinos. Las tareas más pequeñas implican más esquinas y bordes. El tamaño de las tareas tiene que facilitar el trabajo de los cartógrafos, pero sin que se produzcan conflictos entre ellos.
-  Las tareas pequeñas son más fáciles de mapear, pero un mayor número de tareas significa que los mapeadores deben dedicar más tiempo a actualizar el estado de cada una, por lo que los proyectos con tareas demasiado pequeñas pueden resultar ineficaces.
-  Los mapeadores principiantes necesitan aproximadamente cuatro veces más tiempo que los experimentados.
-  Los cartógrafos principiantes tienen que desarrollar un ojo para las imágenes de satélite. Puede ser difícil encontrar los objetos espaciales correctos.

Una vez que esté satisfecho con el tamaño de sus tareas, haga clic en `Siguiente`.

### Avanzado: Definir tareas con datos importados

Si ha cargado un archivo para definir el área de su proyecto, ese archivo también puede contener las formas para las tareas individuales. Por ejemplo, un proyecto completado de MapSwipe que se centra en áreas pobladas o una cuadrícula compleja que ha creado previamente en QGIS. Si este es el caso, asegúrese de activar la opción "Establecer tareas utilizando polígonos cargados". Esto saltará directamente a la etapa de nombramiento de la creación del proyecto. 

![TM New Polys][]

### Recorte del área del proyecto

![TM Trim][]

Después de determinar el tamaño de las tareas, tendrá la opción de recortarlas a la medida de su área de mapeo. Seguramente querrá hacer esto. Haga clic en `Recortar` para eliminar todos los cuadros de tareas que no se superpongan al área de su proyecto. 

![TM Trim coarse][]

Si activa la opción "Recortar las tareas para definir el área de interés exacta para el mapeo" antes de hacer clic en `Recortar`, las partes de la tarea que se superponen en el borde de su área de interés se recortarán de forma brusca contra su área de interés.

![TM Trim fine][]

El recorte brusco puede dar lugar a algunas tareas extremadamente pequeñas. Estas pequeñas tareas pueden confundir a los cartógrafos. Puede optar por eliminarlas seleccionando `Descartar` cuando vea el mensaje "Hay... tareas de menos de 2.000 m2. ¿Desea descartarlas?".

> Tome nota del número de tareas que tiene su proyecto (mire en la esquina inferior izquierda de su mapa). El límite técnico máximo para el número de tareas en un proyecto de Tasking Manager es de 5.000. Sin embargo, para garantizar que su proyecto no tarde demasiado tiempo en completarse, intente mantenerlo por debajo de las 1.000 tareas; si necesita mapear un área mayor, intente dividirla en proyectos más pequeños. 

Haga clic en `Siguiente`.

### Dele nombre al proyecto

El nombre de un proyecto es uno de sus aspectos más importantes a la hora de ser descubierto por el público en general. Intente incluir el nombre del país en el que se encuentra el proyecto (por ejemplo, Sudán del Sur), el motivo del mapeo (por ejemplo, Vacunación COVID) y también la ubicación más específica, tal vez el nombre del distrito o asentamiento (por ejemplo, el condado de Yambio). Por ejemplo, un nombre de proyecto completo podría ser _Sudán del Sur, Vacunación COVID, Condado de Yambio_. 

Asegúrese de que su organización está seleccionada en el campo 'Organización'. 

> Antes de completar esta etapa, asegúrese de que está satisfecho con el área de interés del proyecto y el número total de tareas, ya que estos elementos no pueden ajustarse posteriormente.

Haga clic en `Crear`. Su proyecto se creará pero no se publicará inmediatamente - primero se le dirigirá al menú de edición del proyecto. 

## Editar un proyecto

Ahora verá el menú 'Editar' de su proyecto. Antes de que el proyecto pueda ser guardado, necesitará ir a través del menú 'Editar' cuidadosamente para completar la configuración. Aquí tiene un resumen rápido de los submenús que verá en la parte izquierda:

- Descripción - Establezca el estado, la prioridad y la descripción de texto asociados a su proyecto.
- Instrucciones - Instrucciones detalladas sobre cómo trazar los objetos espaciales necesarios y abordar el proyecto.
- Metadatos - Define los objetos espaciales que necesitan ser mapeados. También incluye información utilizada para categorizar los proyectos, utilizada en el filtrado de proyectos.
- Áreas prioritarias - Le permite especificar las partes dentro del área del proyecto que deben ser mapeadas primero.
- Imágenes - Elija las imágenes que se cargarán de forma predeterminada cuando los voluntarios mapeen su proyecto. 
- Permisos - Le permite restringir el acceso al proyecto para la asignación y la validación.
- Configuración - Activar/desactivar editores alternativos como RapiD.
- Acciones: potentes acciones masivas que puedes realizar en tu proyecto, como clonar o eliminar.
- Editor personalizado - Añade un editor personalizado utilizando una URL

> Rellenar esta información cuidadosamente es una parte esencial del éxito de un proyecto cartográfico. Es especialmente importante que la descripción del proyecto y las instrucciones se comuniquen con claridad para que los cartógrafos sean conscientes de la importancia de la calidad de los datos y de las mejores prácticas. Hay que tener en cuenta que los colaboradores pueden no tener experiencia previa con OpenStreetMap y es poco probable que estén familiarizados con las directrices de etiquetado.

### Descripción

![TM Description][]

#### Estado

El primero es el estado del proyecto. Se puede establecer como **Borrador**, **Publicado** o **Archivado**.

- **Borrador** - Su proyecto comenzará en modo borrador. En este modo no será descubrible y no será posible que el público contribuya a él. Esto es perfecto mientras aún estás configurando tu proyecto y probándolo antes de su lanzamiento.
- **Publicado** - Cuando haya completado la configuración de su proyecto, lo haya probado y esté contento de que se publique y esté abierto para su mapeo/validación.
- **Archivado** - Todos los proyectos deberían acabar archivados. Los proyectos archivados son públicos pero están bloqueados para las contribuciones. Debería considerar archivar su proyecto si:
  - Está 100% mapeado y validado
  - Las instrucciones o las imágenes están sustancialmente anticuadas
  - El proyecto se creó hace más de un año
  - Los datos del mapa ya no son necesarios para fines humanitarios en la zona del proyecto

#### Prioridad

A continuación está la prioridad del proyecto. Esto dicta qué tan cerca del frente del Administrador de Tareas se verá el proyecto en la página de Explorar Proyectos. Puede establecerse como **Urgente**, **Alto**, **Medio** o **Bajo**.

- **Urgente** - Sólo se establece este estado si el proyecto es **en respuesta a una catástrofe y las necesidades de datos son inmediatas**. Muy pocos proyectos tienen este nivel de prioridad. 
- **Alto** - Para proyectos que no son necesariamente en respuesta a una catástrofe pero los datos se necesitan en un **plazo corto**. 
- **Medio** - Si los datos son necesarios pero no en un plazo especialmente corto.
- **Bajo** - Si quieres publicar tu proyecto pero no quieres que sea muy destacado. Tal vez prefieras compartir tu proyecto con grupos específicos utilizando la URL del proyecto.

#### Descripción corta

Añade al menos dos frases que describan brevemente tu proyecto. Esto es importante porque los voluntarios lo leerán para decidir si quieren contribuir. Intenta explicar claramente **por qué** se recogen los datos y **cómo se utilizarán los datos del mapa**. 

> Estos campos admiten **Markdown** y pueden incluir imágenes (arrastrando y soltando) y vídeos (añadiendo una URL de YouTube para su incrustación automática).

#### Descripción 'larga'

Aquí puede entrar en más detalles sobre su proyecto. Proporcione más información sobre la razón de ser del proyecto, quién utilizará los datos y el impacto que se espera que tenga la cartografía. Si el proyecto incluye colaboraciones o socios, puede ampliar la información aquí. 

> Para cualquiera de estos campos de texto puede elegir añadir traducciones adicionales. Si desea añadir una traducción, haga clic en el código de idioma de dos letras e introduzca el texto traducido. Para los usuarios que hayan configurado el Administrador de Tareas en ese idioma, se mostrará automáticamente el proyecto en ese idioma. Por defecto, el campo inicial es el idioma inglés, esto se puede modificar en el submenú "Configuración" de su proyecto.

#### Fecha de vencimiento

Si tiene una fecha en la que desea que su proyecto esté completamente mapeado y validado, puede añadirla aquí. Esto es opcional y una vez superada la fecha no cambia nada para el proyecto y los voluntarios pueden seguir contribuyendo después. Los colaboradores verán la fecha de vencimiento junto al proyecto.

### Instrucciones

![TM Instructions][]

#### Comentario sobre conjunto de cambio

Aquí puede añadir etiquetas de seguimiento adicionales que se rellenarán automáticamente cada vez que alguien guarde su trabajo mientras mapea su proyecto. Por ejemplo, si quiere empezar a hacer un seguimiento de todas las contribuciones en todos los proyectos de tu organización, puede añadirles una etiqueta de seguimiento común, por ejemplo #MSF o #cartONG. Por favor, trate de **mantener estas etiquetas cortas** y no añada demasiadas, los comentarios de los conjuntos de cambios desordenados son confusos de interpretar y se debe dejar espacio para que los mapeadores dejen comentarios descriptivos de los conjuntos de cambios. 

> Por favor, tenga en cuenta que una etiqueta única de seguimiento del proyecto ya estará presente, por ejemplo #hotosm-project-11188 - **por favor, déjela como está**, es muy importante para el seguimiento del progreso del proyecto. El número al final de la etiqueta es el ID único de su proyecto.

#### Instrucciones detalladas

Añada instrucciones descriptivas para que los mapeadores y validadores las sigan mientras trabajan en su proyecto. Su proyecto será público, por lo que **escriba las instrucciones para usuarios inexpertos** sin conocimientos locales o contextuales. Por favor, utilice un lenguaje sencillo, ya que su público objetivo puede no ser hablante nativo de español.

1. Escriba la información más importante en la parte superior para asegurarse de que es prominente. Esto podría incluir una descripción de las imágenes y una advertencia de un problema de compensación de imágenes con orientación. O puede indicar a los cartógrafos que ignoren los caminos y las pistas en un proyecto de cartografía de carreteras y se centren en las carreteras más destacadas.
2. Añadir instrucciones específicas de contexto/ubicación. Éstas varían considerablemente, pero ayudarán a los cartógrafos a interpretar las imágenes de satélite. Por ejemplo, "Espere ver muchas chozas circulares de paja marrón en este proyecto de Sudán del Sur" o "Los asentamientos en Guatemala suelen estar densamente construidos, haga un zoom muy grande cuando mapee cada edificio para asegurarse de que no se conectan o se superponen". Arrastra y suelta las capturas de pantalla de las imágenes aéreas en las instrucciones para mejorar esta sección.
3. Incluya definitivamente una descripción detallada de **cómo mapear cada objeto espacial** que desea que sea mapeado. Mire los proyectos existentes (pero recientes) en el Administrador de Tareas para ver si puede tomar prestado algún texto instructivo existente (¡tenga cuidado que algunos proyectos no tendrán buenas instrucciones!).
4. El recurso definitivo sobre el etiquetado es el [wiki de OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Para muchos proyectos relacionados con HOT, la página sobre [etiquetado de carreteras en África](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) es la especialización adecuada y puede valer la pena enlazarla en las instrucciones de su proyecto. Si su proyecto debe adherirse a normas de etiquetado diferentes, escriba una página similar en la Wiki y enlácela en sus instrucciones.
5. Otros puntos de aclaración: Si el proyecto es adecuado sólo para los cartógrafos con un cierto nivel de experiencia. Por ejemplo, el proyecto utiliza importaciones o los datos existentes deben realinearse con las trazas del GPS o alguna otra imagen. Fórmulas para que los nuevos cartógrafos se sientan invitados a contribuir a otros proyectos, pero que entiendan que en este caso se requieren técnicas avanzadas.
6. Hay directrices que cubren los errores comunes que vemos al validar. Un ejemplo es la compilación de Blake Girardot sobre [mapeo en África Occidental](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Utilice el enlace en las instrucciones y explique que es necesario adherirse a estas directrices.

#### Por Instrucciones de Tarea 

Esto es opcional, pero es posible añadir un breve fragmento de instrucciones adicionales que los mapeadores verán mientras trabajan en una tarea. Esto se ve en la parte derecha de la vista del editor del Gestor de Tareas, encima de la sección "Estado de la Tarea". Esto se verá en todo momento mientras se mapea, así que si hay algo **particularmente importante** sobre lo que usted quiere **instruir a los mapeadores** puede añadirlo aquí. 

### Metadatos

![TM Metadata][]

#### Nivel de mapeador(a)

Esto cambia el nivel de dificultad que se **muestra** para su proyecto. Considere esto con mucho cuidado, los proyectos complejos que se establecen inadecuadamente a la dificultad de principiante **pueden dar lugar a importantes problemas de calidad de datos**. 

> Tenga en cuenta que esto no cambia quién puede **realmente contribuir** a su proyecto, esas restricciones se implementan en el submenú Permisos.

La mayoría de los proyectos están configurados en dificultad **Principiante** o **Intermedio**, un puñado de proyectos están configurados en Avanzado. 

- **Principiante** - Considere esto si su proyecto es fácil de mapear y:
  - Sólo está pidiendo a los contribuyentes que mapeen una característica, en particular **sólo edificios**.
  - La densidad de objetos espaciales es baja, es decir, en una zona **rural**.
  - Hay una **baja cantidad** de datos OSM existentes en el área de su proyecto
  - No hay problemas de alineación de imágenes
- **Intermedio** - Si su proyecto es más difícil de mapear, debería considerarse si:
  - Está pidiendo a los contribuyentes que mapeen más de una característica, por ejemplo, edificios **y** carreteras
  - Hay una densidad media/alta de esas características en la zona de su proyecto, es decir, zonas **urbanas**.
  - Existen **sustanciales** datos de OSM en el área de su proyecto
  - Puede haber **problemas de alineación de las imágenes** o pedir a los colaboradores que utilicen más de una fuente de imágenes
- **Avanzado** - Si el proyecto es extremadamente difícil de mapear, considere esto si:
  - En la zona de su proyecto hay una densidad muy alta, es decir, **zonas urbanas centrales**.
  - Hay **muchos** datos OSM existentes en el área de tu proyecto
  - Hay problemas **complejos de alineación de imágenes**.

#### Tipos de mapeo

Active o desactive estas opciones en función de las características que desee asignar a su proyecto. Por lo general, **cuantas menos características mejor**, ya que los proyectos que pretenden mapear demasiadas características suelen tener dificultades para avanzar. 

> Los proyectos que piden que se mapeen muchos objetos espaciales son difíciles para los mapeadores y difíciles de validar. Tardan mucho más en obtener un buen conjunto de datos utilizables. El tamaño de las tareas también es difícil de hacer eficiente para los diferentes tipos de cartografía, por ejemplo, los edificios necesitan cuadrados de tareas pequeños, las carreteras y las vías fluviales necesitan cuadrados de tareas más grandes. La mejor práctica consiste en realizar varios proyectos en la misma zona para cartografiar por separado los edificios y las carreteras y vías fluviales. 

#### Preconfiguraciones del Editor iD

Si elige uno o más elementos de la lista desplegable, los mapeadores que utilicen iD sólo podrán asignar estas características a los objetos que mapeen. Esto se recomienda para los principiantes, **proyectos sólo de construcción**. Esto significa que los colaboradores no podrán etiquetar otras características, aunque lo intenten. Evite el uso de preajustes para proyectos más complejos, ya que puede convertirse rápidamente en una carga. Por ejemplo, un proyecto de mapeo de carreteras necesitaría docenas de preajustes para asegurar que todos los tipos de carreteras puedan ser mapeados. 

#### Organization

Your organization name should be in here already, otherwise choose it from the dropdown menu.

#### Campaña

Si ha creado varios proyectos asociados entre sí, puede optar por asignarlos a una campaña. Los usuarios pueden filtrar los proyectos por el nombre de la campaña en la página Explorar Proyectos. Por ejemplo, si su proyecto está asociado a la eliminación de la malaria, puede ponerlo en la campaña "Eliminación de la malaria". Para solicitar la creación de nombres de campaña adicionales, complete [este formulario](https://forms.gle/qafvkp4iAxnY6rjE6).

#### Categorías

Seleccione aquí los temas relacionados con su proyecto. Los colaboradores pueden especificar sus intereses en estas categorías en su página de configuración.

#### OSMCha filtro ID

[OSMCha](https://osmcha.org/) es una potente herramienta de control de calidad de datos que puede resultarle útil para supervisar las contribuciones a su proyecto. El filtro estándar confina la salida a la caja de límites del proyecto y a las contribuciones no más antiguas que la fecha de creación del proyecto y con el nombre del proyecto en el comentario del conjunto de cambios. Si crees que algo diferente sería un mejor enfoque para analizar los conjuntos de cambios de tu proyecto, entonces proporciona una URL de OSMCha o un id de filtro de OSMCha aquí. El filtro OSMCha está disponible al final de la página de resumen de su proyecto.

### Áreas prioritarias

![TM Priority Area][]

Utilice las herramientas aquí para dibujar las áreas que deben ser mapeadas primero. Puede tener varias áreas prioritarias para un proyecto. También puede cambiar las áreas prioritarias en cualquier momento. El área prioritaria será resaltada para que los voluntarios la prioricen y si seleccionan "Mapear una tarea" se seleccionará aleatoriamente una tarea del área prioritaria en primer lugar. 

> Durante la elaboración de mapas de catástrofes, en las primeras fases del suceso, disponer de una amplia zona de mapeo del proyecto y utilizar áreas prioritarias para centrar el mapeo a medida que llega la nueva información suele ser la mejor práctica.

### Imágenes

En el menú desplegable, elija la fuente de imágenes aéreas que desea cargar automáticamente para su proyecto. Si las imágenes no aparecen en el menú desplegable, puede elegir "Personalizado" y añadir una URL TMS. 

> Tenga en cuenta que el Administrador de Tareas **no puede alojar imágenes personalizadas**, éstas deben ser alojadas externamente y enlazadas mediante una URL TMS. Si estás contento con que tus imágenes estén abiertas para su uso, considera usar [OpenAerialMap](https://openaerialmap.org/) para alojar tus imágenes.

Licencia - Opcionalmente, si hay una licencia específica que los cartógrafos deben aceptar al usar las imágenes, puede seleccionarla aquí. Por ejemplo, para las imágenes de Maxar es "DigitalGlobe Satellite EULA". Si necesita una licencia que no está disponible, puede ponerse en contacto con un administrador de la instalación del Administrador de Tareas y pedirle que la añada.

### Permisos

En el menú "Metadatos" podemos cambiar el nivel de dificultad que se **muestra** para un proyecto. En el menú "Permisos" podemos cambiar quién puede **acceder** a un proyecto. Es importante recordar los distintos niveles de usuario:

- **Usuario principiante** - Cualquier usuario que acabe de crear su cuenta o que haya hecho **menos de 250 cambios** (guardados)
- **Usuario intermedio** -  cualquier usuario que haya realizado entre **250 y 500 cambios**.
- **Usuario avanzado** - Cualquier usuario que haya realizado más de **500 cambios**.

> Al igual que antes, considere los permisos con mucho cuidado, los proyectos complejos que no permiten que todos los usuarios contribuyan pueden dar lugar a **problemas significativos de calidad de datos**. 

![TM Permissions][]

#### Permisos de mapeo

Aquí puede elegir quién puede **mapear** su proyecto:

- Si su proyecto es fácil de contribuir y lo considera un proyecto para principiantes, es posible que quiera establecer esto en **'Cualquier usuario'**.
- Si su proyecto es más complejo y requiere más experiencia, restrinja la asignación a **'Sólo usuarios con nivel intermedio o avanzado'**. 
- Si quiere ser aún más selectivo, también puede exigir que un mapeador forme parte de un **equipo**. Los equipos deben definirse a continuación.

#### Permisos de validación

Aquí puede elegir quién puede **validar** su proyecto. La validación es donde los mapeadores más experimentados comprueban las contribuciones que se hacen dentro de su proyecto, por lo tanto esto debe ser restringido a "Sólo usuarios con nivel intermedio o avanzado" **como mínimo**. **En principio**, debería restringir la validación aún más a **'Sólo miembros del equipo'**, pero cuando lo haga debe recordar **definir esos equipos** a continuación. 

#### Equipos

Utilice los filtros para buscar y añadir equipos. Puede añadir su(s) propio(s) equipo(s), pero también puede añadir otros equipos. Una vez que haya añadido un equipo, asegúrese de seleccionar un rol (mapeador, validador, director de proyecto). 

Los permisos de equipo no funcionarán a menos que haya restringido los permisos de mapeo y/o validación a "Sólo miembros del equipo". Si concede a un equipo el acceso de Director de Proyecto, esto permitirá a los miembros de su equipo editar el proyecto.

> En el Administrador de Tareas de HOT, siéntase libre de añadir dos de los equipos de validación más grandes, a saber, los "Validadores Globales de HOT" y los "Aprendices de Validador" de HOT. Por favor, tenga en cuenta que, aunque esto da a los miembros del equipo **permiso** para validar su proyecto, **no significa necesariamente** que ellos **validarán** su proyecto. 

#### Privacidad

Al hacer que un proyecto sea "Privado" se ocultará el proyecto a todos los usuarios excepto a los que formen parte de los equipos definidos anteriormente. 

### Ajustes

![TM Settings][]

#### Idioma predeterminado

Al modificar esto, cambiará el idioma predeterminado del título, la descripción y las instrucciones de su proyecto.

#### Editores para mapeo/validación

Esto restringe los editores disponibles a los marcados. Puede especificar diferentes conjuntos para el mapeo y para la validación. Tenga en cuenta que aquí es posible habilitar el editor RapiD asistido por IA. 

#### Aplicar la selección aleatoria de tareas

Si se activa, los contribuyentes no pueden seleccionar tareas específicas para la asignación.

### Acciones

Aquí puede realizar potentes acciones masivas en tu proyecto. **Tenga cuidado** con muchas de estas opciones, **no son reversibles**. 

![TM Actions][]

#### Mensaje a todos los contribuyentes

Envía un mensaje del Administrador de Tareas a todos los que han marcado una tarea como completa o válida. Puede utilizarse para agradecer a los colaboradores y/o guiarlos hacia otros proyectos de una campaña. También debería utilizarse antes de usar cualquiera de las dos opciones de Validar/Invalidar todas las tareas que se describen a continuación.

#### Mapeo, validación e invalidación

Esto establecerá el estado de todas las tareas como asignadas, validadas o invalidadas. Manejar con cuidado ya que no se puede deshacer.

#### Restablecer tareas

Esto restablecerá todas las tareas a su estado prístino, pero las acciones anteriores pueden seguir viéndose en el historial de tareas. Manéjelo con cuidado ya que no se puede deshacer.

#### Transferir la propiedad del proyecto

Puedes especificar otro administrador dentro de su organización que pasará a figurar como creador del proyecto. Busque su nombre de usuario en OSM. 

#### Clonar Proyecto

Esta útil opción creará un duplicado del proyecto, manteniendo toda la **configuración idéntica** excepto el área de interés, la cuadrícula de tareas y las áreas prioritarias, que tendrá que reimportar o redibujar. Esta opción le permitirá **ahorrar mucho tiempo** si está creando una serie de proyectos similares que cubren un área grande. 

#### Borrar Proyecto

Esto **borrará permanentemente** el proyecto del Administrador de Tareas. Manéjelo con cuidado, ya que no se puede deshacer. No es posible eliminar un proyecto después de que se hayan hecho contribuciones al mismo.

### Editor personalizado

Si desea enlazar con un editor que no aparece en el menú "Configuración", puede añadir aquí una URL a ese editor. 

### Guardar y probar

Una vez que esté satisfecho con la configuración de su proyecto, pulse `Guardar`. Vea su proyecto seleccionando `Acceso al proyecto` y `Página del proyecto`. **Revise su proyecto cuidadosamente**, asegúrese de que las instrucciones son claras y la redacción y el formato son correctos. 

**Intente asignar una tarea**, ¿se cargan correctamente las imágenes? ¿Son las instrucciones lo suficientemente claras? Si necesita hacer cambios o mejoras en su proyecto, haga clic en el botón `Editar` de la página del proyecto. 

### Publicar

Después de comprobar y probar su proyecto, si está satisfecho con él y está listo para empezar a mapearlo, haga clic en el botón `Editar` de la página del proyecto y, en el menú 'Descripción', cambie el estado a 'Publicado'. Una vez publicado el proyecto, el público en general podrá ver su proyecto y contribuir a él. 

> Tenga en cuenta que puede acceder al menú "Editar" de su proyecto y modificar los ajustes en cualquier momento, incluso si el mapeo está en curso.

## Gestión de proyecto

Enhorabuena. Ha creado un proyecto, ahora tendrá que asegurarse de que lo gestione eficazmente. 

### Sea receptivo

Como creador del proyecto, es **responsable** de **responder a las preguntas** que surjan en la sección **Preguntas y comentarios** de la página de tu proyecto. Esta sección a menudo incluirá consejos u orientaciones útiles de la comunidad en general, tómatelos en serio, responda y edite sus proyectos cuando sea necesario. 

> Para activar las notificaciones cuando hay nuevas publicaciones en la sección de Preguntas y Comentarios, haga clic en su nombre de usuario de OSM en el Administrador de Tareas y elija `Configuración`. Activa las notificaciones para "Preguntas y comentarios".

En la página del proyecto, su nombre de usuario también aparecerá junto a "creado por...". Esto significa que también puede recibir mensajes directos de OSM, asegúrese de leerlos y responderlos. 

> Si se siente abrumado por las preguntas, tenga en cuenta que recibirá menos si sigue esta orientación: _Lo primero que puede hacer para apoyar a los mapeadores, y a los validadores, es tener proyectos bien diseñados con instrucciones y descripciones fáciles de entender pero completas._

### Proyectos de secuenciación

Si ha creado varios proyectos en serie **no los publiques todos a la vez**. No es el único que crea proyectos, tener un número razonable de proyectos (uno o dos) con la prioridad adecuada está bien. Publicar media docena a la vez saturará el Administrador de Tareas. Mantenga el resto en borrador o con una prioridad menor, mientras que en todo momento sólo se trabaja en uno o dos. Puede notar que los colaboradores pierden el entusiasmo si ven muchos proyectos similares a la vez que avanzan poco.

### Ciclo de vida del proyecto

Siga el progreso de mapeo y validación de sus proyectos. Recuerde que **todos los proyectos deben acabar siendo archivados**. Tendrá que hacerlo manualmente, así que no pierda de vista el progreso, la prioridad o la relevancia de sus proyectos. Si se traslada a otra organización, asegúrese de **traspasar** sus proyectos en curso a su sustituto. 

## Información adicional

### Consideraciones sobre las imágenes

Antes de crear su proyecto, compruebe las imágenes en varios lugares diferentes de la zona de su proyecto para hacer una evaluación de las imágenes. En la mayoría de los casos, las imágenes Maxar o Bing deberían satisfacer sus necesidades. Sin embargo, hay situaciones en las que podría querer elegir una fuente alternativa. Es posible que tenga que tener en cuenta lo siguiente a la hora de elegir sus imágenes: 

1. Si se necesita una cartografía cuidadosa y detallada, elija las imágenes más claras y de mayor resolución.
2. Si su prioridad es disponer de las imágenes más actualizadas, alterne entre las fuentes de imágenes estándar para buscar las imágenes más recientes. Busque indicios de desarrollo, como nuevos edificios o desmonte de terrenos, para hacerse una idea de las imágenes más actualizadas. Últimamente, Maxar ha sido la más actualizada, pero esto varía según la ubicación. 
3. Comprueba la nubosidad, aunque una fuente de imágenes puede satisfacer sus necesidades si está muy nublada o brumosa sus mapeadores tendrán problemas para mapear con ella.
4. Comprueba la alineación, si hay muchos datos OSM existentes que se alinean con un conjunto de imágenes de satélite, entonces puede tener sentido elegir las mismas imágenes. Si hay problemas de alineación, asegúrese de escribir instrucciones claras detallando cómo esperas que los contribuyentes se ocupen de los problemas de desplazamiento/alineación. 

> A menudo es muy difícil obtener una fecha exacta de captura de imágenes de los proveedores de imágenes por satélite. Las principales fuentes son los "mosaicos", en los que se unen una serie de imágenes (a menudo con fechas de captura muy diferentes). A veces, esta unión llega hasta el nivel de píxel individual. A falta de información, la comparación de imágenes suele ser la mejor opción para encontrar las imágenes más recientes. 

#### Alineación de imágenes

Es posible que el área de su proyecto ya haya sido parcialmente cartografiada utilizando imágenes más antiguas y que haya una desalineación notable entre los objetos cartografiados más antiguos y las imágenes más recientes disponibles. Inspeccione varias ubicaciones en su área de mapeo para determinar esto. Si hay un problema de alineación, asegúrese de incluir instrucciones detalladas que indiquen el mejor enfoque que deben adoptar los cartógrafos. Los proyectos con problemas de alineación de imágenes es mejor que se restrinjan a los cartógrafos más experimentados. 

No existe un conjunto de instrucciones estándar cuando se trata de cuestiones de alineación de imágenes. Depende mucho del contexto. A veces se indica a los cartógrafos que se alineen con los rastros del GPS, y otras veces se les dice que se alineen con los rasgos lineales cartografiados, como carreteras y vías fluviales. He aquí un ejemplo de enfoque: 

1. Indique claramente qué imagen debe considerarse la referencia a la que debe alinearse todo lo demás. En este caso, supongamos que la referencia es Maxar.
2. Asegúrese de que todas los objetos espaciales existentes que también son visibles en Maxar están alineados con las imágenes de Maxar, es decir, realinee si es necesario.
3. Añada nuevos objetos espaciales a partir de las imágenes Maxar, ahora correctamente alineadas.

A menudo se indica a los cartógrafos que busquen el _menor esfuerzo_ cuando se trata de problemas de alineación de imágenes. Esto significa que los colaboradores deben variar su enfoque en función de la situación en su tarea individual: 

- Si hay mucha cartografía existente en una tarea que está constantemente desalineada, podría requerir el menor esfuerzo cambiar el desplazamiento de las imágenes para ajustarse a la cartografía existente y luego cartografiar el pequeño número de objetos restantes en la tarea. 
- Si la cartografía existente es menor, o los objetos están desalineados de forma inconsistente (es decir, el grado de desalineación varía en el espacio), entonces podría ser más fácil alterar la posición de los objetos mapeados para alinearlos con las imágenes y luego mapear los objetos restantes en la tarea.

Si su proyecto tiene problemas de alineación, asegúrese de que los cuadrados de la tarea no son demasiado grandes, ya que las desviaciones de las imágenes pueden variar considerablemente a lo largo de una zona cartográfica, especialmente si el terreno no es plano. Incluso pueden producirse discontinuidades en las imágenes a lo largo de un proyecto.

> Aunque los mapeadores individuales pueden modificar manualmente el desplazamiento de las imágenes durante el mapeo, no es posible que usted, como creador del proyecto, cambie el desplazamiento de las imágenes a nivel del proyecto. Sin embargo, si utiliza sus propias imágenes aéreas alojadas en otro lugar, puede modificar el desplazamiento en origen. Sin embargo, tenga en cuenta que la alineación puede variar considerablemente en el espacio y que el simple hecho de cambiar el desplazamiento general no siempre corrige los problemas de alineación. 

No dude en consultar estos recursos adicionales sobre alineación de imágenes:

- [Directrices generales para varios editores](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Gif animado sobre la alineación de imágenes en iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Capítulo de alineación de imágenes JOSM en learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
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
