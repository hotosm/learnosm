---
layout: doc
title: Guía del Administrador de Tasking Manager
permalink: /es/coordination/tm-admin/
lang: es
category: coordination
---

# Guía del Administrador de Tasking Manager


**Si la interfaz de usuario de la versión que utilizas se ve diferente a la descrita aquí, entonces debes consultar [nuestra descripción general de las versiones](/es/coordination/tm-disambiguation)**

Índice por secciones
-------------
-  [Inicio de sesión y acceso](/es/coordination/tm-admin/#login-and-access)
-  [Permisos](/es/coordination/tm-admin/#permissions)
-  [Crear un proyecto](/es/coordination/tm-admin/#create-a-project)
    -  [Definir área de mapeo](/es/coordination/tm-admin/#define-mapping-area)
    -  [Definir tareas](/es/coordination/tm-admin/#define-tasks)
    -  [Avanzado: Definir tareas con datos importados](/es/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Recorte del área del proyecto](/es/coordination/tm-admin/#project-area-trim)
    -  [Nombrar el proyecto](/es/coordination/tm-admin/#name-the-project)
-  [Editar un proyecto](/es/coordination/tm-admin/#edit-a-project)
    -  [Descripción: lo primero que los usuarios conocen de tu proyecto](/es/coordination/tm-admin/#description)
    -  [Instrucciones: qué deben hacer los usuarios](/es/coordination/tm-admin/#instructions)
    -  [Metadatos: a qué pertenece el proyecto](/es/coordination/tm-admin/#metadata)
    -  [Áreas prioritarias: dónde deben empezar a mapear los usuarios](/es/coordination/tm-admin/#priority-areas)
    -  [Imágenes: la base de la cartografía](/es/coordination/tm-admin/#imagery)
    -  [Permisos: quién puede asignar y validar](/es/coordinación/tm-admin/#permisos)
    -  [Configuración](/es/coordination/tm-admin/#settings)
    -  [Acciones](/es/coordination/tm-admin/#actions)
    -  [Editor personalizado](/es/coordination/tm-admin/#custom-editor)
    -  [Guardar y probar](/es/coordination/tm-admin/#save-and-test)
    -  [Publicar](/es/coordination/tm-admin/#publish)
-  [Gestión de proyectos](/es/coordination/tm-admin/#project-management) 
    -  [Sé receptivo](/es/coordination/tm-admin/#be-responsive)
    -  [Secuenciación de proyectos](/es/coordination/tm-admin/#sequencing-projects)
    -  [Ciclo de vida del proyecto](/es/coordination/tm-admin/#project-lifecycle)
-  [Información adicional](/es/coordination/tm-admin/#additional-information)
    -  [Consideraciones sobre las imágenes](/es/coordination/tm-admin/#considerations-concerning-imagery)

El Tasking Manager es la herramienta esencial para coordinar la cartografía en OpenStreetMap. Apoya las iniciativas de cartografía humanitaria, la realización de mapatones o la creación de tareas de cartografía para estudiantes. La aplicación divide un área de interés en trozos geográficos manejables que pueden completarse rápidamente y en colaboración. Este enfoque permite distribuir las tareas entre muchos cartógrafos individuales, reduciendo al mismo tiempo los posibles conflictos de edición. 

El software fomenta la obtención de datos cartográficos precisos y de calidad proporcionando un conjunto coherente de instrucciones para sus cartógrafos (por ejemplo, "cartografiar todas las carreteras y edificios"). En resumen, el Tasking Manager es la forma de configurar y dirigir el flujo de trabajo de las actividades cartográficas abiertas. 

Esta guía describe la administración básica del Tasking Manager. Cubre las instrucciones para crear y modificar proyectos de mapeo y manejar los permisos para el mapeo y la revisión de los datos de *crowdsourcing*.

## Inicio de sesión y acceso

Para acceder al Tasking Manager se necesita una cuenta de OpenStreetMap (OSM). Puedes visitar el [HOT Tasking Manager](http://tasks.hotosm.org) o cualquier otra instancia comunitaria de tu preferencia. Allí, haz clic en `Registrarse` y te redirigirá al [sitio web de OpenStreetMap](https://www.openstreetmap.org) para crear tu cuenta. O haz clic en `Iniciar sesión` si ya tienes una, y en la ventana emergente puedes dar al Tasking Manager acceso limitado a tu cuenta de OSM.

## Permisos

El nivel de usuario más básico es el de **mapeador**. Los mapeadores pueden acceder al Tasking Manager para buscar y seleccionar un proyecto de mapeo en el que trabajar. Toda la funcionalidad del mapeador se describe en la [Guía del mapeador del Tasking Manager de LearnOSM](/es/coordinación/tm-user/). Ten en cuenta que algunos proyectos, como los que están en estado de borrador (es decir, sin publicar) o restringidos a ciertos equipos, no son visibles para los mapeadores habituales. 

Todos los permisos especiales son gestionados por *organizaciones* y *equipos*. Una **organización** es el paraguas principal, y bajo cada organización se pueden crear proyectos y equipos de mapeo. Una organización puede representar a un usuario de datos como una organización humanitaria o cualquier comunidad de OpenStreetMap. Si necesitas configurar tu organización en el Tasking Manager, ponte en contacto con los responsables técnicos de la instancia del Tasking Manager. Consulta [HOT Organizaciones de Tasking Manager](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) para ver una lista de las organizaciones que están presentes en el Tasking Manager de HOT. Si tu comunidad u organización no está en la lista y te gustaría crear proyectos en el Tasking Manager de HOT, por favor, rellena [este formulario](http://bit.ly/HOTTasking) para registrar tu interés. 

Cada organización tiene uno o más **gestores**. Tienen permiso para crear y modificar los proyectos asociados. Se puede acceder a todas las opciones de los gestores a través de la sección `Gestionar` en la navegación principal.

Los responsables de una organización pueden crear **equipos**. Los equipos son grupos de usuarios de OpenStreetMap y pueden ser públicos o privados. También tienen uno o más gestores de equipo. Los equipos pueden configurarse de manera que los usuarios puedan unirse a un equipo por sí mismos o 'solo por invitación', lo que significa que los gestores del equipo son notificados sobre las solicitudes de adhesión y deben decidir sobre ellas.

Para cada proyecto, los administradores pueden asignar equipos específicos para conceder o restringir el acceso a la cartografía, definir quién puede validar los datos o quién más puede editar los metadatos del proyecto.

## Crear un proyecto

Haz clic en `Gestionar` en la navegación de la parte superior. En la primera fila verás un espacio para 'Projects'. Junto a él, haz clic en el botón `Añadir` para crear uno.

![TM Add Project][]

Puedes elegir entre definir el área de interés (área de mapeo) de tu proyecto de mapeo:

* Opción 1: `Dibujar` el área de interés manualmente
* Opción 2: `Subir archivo` para importar el área de interés como un GeoJSON, KML o archivo *shapefile* comprimido

![TM New][]

### Definir el área de mapeo

* Opción 1: `Dibujar` el área de interés manualmente

1. Puedes cambiar de una capa de fondo a otra utilizando los botones de la parte superior.
1. Haz clic en el botón `Dibujar` de la izquierda.
2. Para dibujar un polígono que represente el área de mapeo en el marco del mapa, mantén pulsado el botón derecho del ratón para mover el mapa sin hacer clic, lo que añadirá un nodo. El polígono debe enmarcar estrechamente el área de interés. Esto ahorra tiempo a la hora de completar las teselas que no son de interés (por ejemplo, el océano o el bosque).
3. Haz clic en tu punto de partida para completar el polígono. <!--Después de completar un polígono puedes mover los nodos o añadir otros nuevos para conseguir el área tal y como la quiere.-->

<br>

* Opción 2: `Subir archivo` para importar el área de interés como un GeoJSON, KML o archivo *shapefile* comprimido

1. En el primer paso de la creación de un proyecto, haz clic en `Subir archivo`.
2. Busca tu archivo en la ventana de carga de archivos.
3. Haz clic en el nombre del archivo para resaltarlo y luego haz clic en "Abrir".
4. Las áreas de interés importadas no se pueden ajustar en el Tasking Manager.

Es posible que estés cargando un archivo que ya tiene las tareas (pequeñas cuadrículas de asignación) predefinidas. Encontrarás más información al respecto en la sección [Definir tareas con datos importados](/es/coordination/tm-admin/#advanced:-define-tasks-with-imported-data) más abajo.

> NOTA: ¡El Tasking Manager tiene límites! El límite técnico máximo para un proyecto es de 5.000 km2, aunque para garantizar que tu proyecto no tarde demasiado en completarse, intenta mantenerlo por debajo de los 1.000 km2. Si necesitas cartografiar un área mayor que esta, tendrás que crear varios proyectos. Podrás ver el tamaño del proyecto en la esquina inferior izquierda de la vista previa del mapa. 

### Definir tareas

Después de que se haya definido el área de mapeo general, se dividirá en áreas más pequeñas llamadas *Tareas*. Debes considerar los tamaños de las tareas de tu proyecto con mucho cuidado. Los proyectos bien diseñados tienen tamaños de tarea apropiados, lo que permite completarlos con la mayor eficiencia posible. 

![TM Tile Sizes][]

El área del proyecto se divide automáticamente en celdas de cuadrícula y cada celda se convierte en una tarea. Utiliza los botones `Más grande` y `Más pequeño` para ajustar el tamaño general de las cuadrículas de tareas. Es probable que el tamaño de tarea predeterminado sea demasiado grande. A medida que modificas el tamaño de la tarea, ten en cuenta el tamaño de la tarea que aparece a la izquierda junto a 'El tamaño de cada tarea es de aproximadamente ... km2'.

Tómate tu tiempo y define los tamaños de las tareas con mucho cuidado. Intenta reducir el tamaño de la tarea hasta el punto en que creas que un mapeador seguro tardaría **15 minutos en completarla**. El tamaño óptimo de la tarea depende totalmente de las características que se les pida a los mapeadores que identifiquen y de la densidad de dichas características. Por ejemplo, un proyecto de cartografía de carreteras en una zona rural tendría tareas mucho mayores que un proyecto que implique la digitalización de edificios en un asentamiento denso.

> Acércate y activa las imágenes de Bing para determinar un buen tamaño de tarea. Puedes cambiar entre varias capas de mapa de fondo con los botones de la parte superior del mapa.

Después de haber ajustado el tamaño general de la tarea, puedes dividir selectivamente ciertas tareas en cuatro más pequeñas con el botón `Clic para dividir`. O puedes `Dibujar área para dividir`, y te permitirá dibujar un polígono sobre un área para dividir todas las tareas dentro de ella. Estas funciones son especialmente útiles si la densidad de la característica que deseas mapear varía a través de tu área de proyecto. Por ejemplo, puede haber una zona costera densamente construida que necesite tareas pequeñas y una zona rural interior que necesite tareas mucho más grandes. El botón `Restablecer` eliminará todas tus divisiones personalizadas.

Consideraciones para decidir los tamaños de las tareas:
-  Las tareas se pueden dividir, pero no hay opción de volver a fusionarlas una vez creado el proyecto.
-  Una vez que se ha creado un proyecto, dividir las tareas lleva mucho tiempo y hay que hacerlo tarea por tarea.
-  En los bordes y esquinas de las tareas, hay un mayor potencial de conflictos entre mapeadores vecinos. Las tareas más pequeñas implican más esquinas y bordes. Hay que encontrar un equilibrio en el tamaño de las tareas para facilitar el trabajo de los mapeadores, pero sin que se produzcan conflictos entre ellos.
-  Las tareas pequeñas son más fáciles de mapear, pero un mayor número de tareas significa que los mapeadores deben dedicar más tiempo a actualizar el estado de cada una, por lo que los proyectos con tareas demasiado pequeñas pueden resultar ineficaces.
-  Los mapeadores principiantes necesitan aproximadamente cuatro veces más tiempo que los experimentados.
-  Los mapeadores principiantes necesitan desarrollar un ojo para las imágenes satelitales. Puede resultar difícil detectar las características correctas.

Una vez que estés satisfecho con los tamaños de tus tareas, haz clic en `Siguiente`.

### Avanzado: Definir tareas con datos importados

Si has cargado un archivo para definir el área de tu proyecto, ese archivo también puede contener las formas para las tareas individuales. Por ejemplo, un proyecto completado de MapSwipe que se centra en áreas pobladas o una cuadrícula compleja que has creado previamente en QGIS. Si este es el caso, asegúrate de activar la opción "Establecer tareas utilizando polígonos cargados". Esto saltará directamente a la etapa de nombramiento de la creación del proyecto. 

![TM New Polys][]

### Recorte del área del proyecto

![TM Trim][]

Después de determinar el tamaño de las tareas, tendrás la opción de recortarlas a la extensión de tu área de mapeo. Casi con toda seguridad querrás hacer esto. Haz clic en `Recortar` para eliminar todas las cuadrículas de tareas que no se superpongan al área de tu proyecto. 

![TM Trim coarse][]

Si activas la opción "Recortar las tareas para definir el área de interés exacta para el mapeo" antes de hacer clic en `Recortar`, las partes de la tarea que se superponen en el borde de tu área de interés se recortarán bruscamente contra tu área de interés.

![TM Trim fine][]

El recorte brusco puede dar lugar a algunas tareas extremadamente pequeñas. Estas pequeñas tareas pueden confundir a los mapeadores. Puedes optar por eliminarlas seleccionando `Descartar` cuando veas el mensaje "Hay... tareas de menos de 2.000 m2. ¿Desea descartarlas?".

> Toma nota del número de tareas que tiene tu proyecto (mira en la esquina inferior izquierda de tu mapa). El límite técnico máximo para el número de tareas en un proyecto de Tasking Manager es de 5.000. Sin embargo, para garantizar que tu proyecto no tarde demasiado tiempo en completarse, intenta mantenerlo por debajo de las 1.000 tareas; si necesitas cartografiar un área mayor, intenta dividirla en proyectos más pequeños. 

Haz clic en `Siguiente`.

### Nombrar el proyecto

El nombre de un proyecto es uno de sus aspectos más importantes a la hora de ser descubierto por el público en general. Intenta incluir el nombre del país en el que se encuentra el proyecto (por ejemplo, Sudán del Sur), el motivo del mapeo (por ejemplo, Vacunación COVID) y también la ubicación más específica, tal vez el nombre del distrito o asentamiento (por ejemplo, el condado de Yambio). Por ejemplo, un nombre de proyecto completo podría ser _Sudán del Sur, Vacunación COVID, Condado de Yambio_. 

Asegúrate de que tu organización está seleccionada en el campo 'Organización'. 

> Antes de completar esta etapa, asegúrate de que estás satisfecho con el área de interés del proyecto y el número total de tareas, ya que estos elementos no se pueden ajustar posteriormente.

Haz clic en `Crear`. Tu proyecto se creará pero no se publicará inmediatamente; primero se te dirigirá al menú de edición del proyecto. 

## Editar un proyecto

Ahora verás el menú 'Editar' de tu proyecto. Antes de que el proyecto pueda guardarse, tendrás que revisar cuidadosamente el menú 'Editar' para completar la configuración. Aquí tienes un resumen rápido de los submenús que verás en el lado izquierdo:

- Descripción - Define el estado, la prioridad y la descripción del texto asociados a tu proyecto.
- Instrucciones - Instrucciones detalladas sobre cómo trazar los objetos espaciales necesarios y abordar el proyecto.
- Metadatos - Define los objetos espaciales que necesitan ser mapeados. También incluye información utilizada para categorizar los proyectos, utilizada en el filtrado de proyectos.
- Áreas prioritarias - Te permite especificar las partes dentro del área del proyecto que deben ser mapeadas primero.
- Imágenes - Elige las imágenes que se cargarán de forma predeterminada cuando los voluntarios mapeen tu proyecto. 
- Permisos - Te permite restringir el acceso al proyecto para el mapeo y la validación.
- Configuración - Activar/desactivar editores alternativos como RapiD.
- Acciones: acciones masivas potentes que puedes realizar en tu proyecto, como clonar o eliminar.
- Editor personalizado - Añade un editor personalizado utilizando una URL

> Rellenar esta información cuidadosamente es una parte esencial del éxito de un proyecto de mapeo. Es especialmente importante que la descripción del proyecto y las instrucciones se comuniquen con claridad para que los mapeadores sean conscientes de la importancia de la calidad de los datos y de las mejores prácticas. Hay que tener en cuenta que los colaboradores pueden no tener experiencia previa con OpenStreetMap y es poco probable que estén familiarizados con las directrices de etiquetado.

### Descripción

![TM Description][]

#### Estado

Primero está el estado del proyecto. Se puede establecer como **Borrador**, **Publicado** o **Archivado**.

- **Borrador** - Tu proyecto comenzará en modo borrador. En este modo no será visible y no será posible que el público contribuya a él. Esto es perfecto mientras aún estás configurando tu proyecto y probándolo antes de su lanzamiento. 
- **Publicado** - Cuando hayas completado la configuración de tu proyecto, lo hayas probado y estés contento con que se publique y esté abierto para el mapeo/validación.
- **Archivado** - Todos los proyectos deberían acabar archivados. Los proyectos archivados son públicos pero están bloqueados para las contribuciones. Deberías considerar archivar tu proyecto si:
  - Está mapeado y validado al 100%
  - Las instrucciones o las imágenes están sustancialmente desactualizadas
  - El proyecto se creó hace más de un año
  - Los datos del mapa ya no son necesarios para fines humanitarios en la zona del proyecto

#### Prioridad

A continuación está la prioridad del proyecto. Esto dicta qué tan cerca del frente del Tasking Manager se verá el proyecto en la página Explorar Proyectos. Se puede establecer como **Urgente**, **Alta**, **Media** o **Baja**.

- **Urgente** - Solo establece este estado si el proyecto es **en respuesta a una catástrofe y las necesidades de datos son inmediatas**. Muy pocos proyectos tienen este nivel de prioridad. 
- **Alta** - Para proyectos que no son necesariamente en respuesta a una catástrofe pero los datos se necesitan en un **plazo corto**. 
- **Media** - Si los datos son necesarios pero no en un plazo especialmente corto.
- **Baja** - Si quieres publicar tu proyecto pero no quieres que sea muy destacado. Tal vez prefieras compartir tu proyecto con grupos específicos utilizando la URL del proyecto.

#### Descripción corta

Añade al menos dos frases que describan brevemente tu proyecto. Esto es importante porque los voluntarios lo leerán para decidir si quieren contribuir. Intenta explicar claramente **por qué** se recogen los datos y **cómo se utilizarán los datos del mapa**. 

> Estos campos admiten **Markdown** y pueden incluir imágenes (arrastrando y soltando) y vídeos (añadiendo una URL de YouTube para su incrustación automática).

#### Descripción 'larga'

Aquí puedes entrar en más detalles sobre tu proyecto. Proporciona más información sobre la razón de ser del proyecto, quién utilizará los datos y el impacto que se espera que tenga la cartografía. Si el proyecto incluye colaboraciones o socios, puedes ampliar la información aquí. 

> Para cualquiera de estos campos de texto, puedes elegir añadir traducciones adicionales. Si quieres añadir una traducción, haz clic en el código de idioma de dos letras e introduce el texto traducido. Para los usuarios que hayan configurado el Tasking Manager en ese idioma, se mostrará automáticamente el proyecto en ese idioma. Por defecto, el campo inicial es el idioma inglés; esto se puede modificar en el submenú "Configuración" de tu proyecto.

#### Fecha de vencimiento

Si tienes una fecha en la que quieres que tu proyecto esté completamente mapeado y validado, puedes añadirla aquí. Esto es opcional y, una vez superada la fecha, no cambia nada para el proyecto y los voluntarios pueden seguir contribuyendo después. Los colaboradores verán la fecha de vencimiento junto al proyecto.

### Instrucciones

![TM Instructions][]

#### Comentario sobre el conjunto de cambios

Aquí puedes añadir etiquetas de seguimiento adicionales que se rellenarán automáticamente cada vez que alguien guarde su trabajo mientras mapea tu proyecto. Por ejemplo, si quieres empezar a hacer un seguimiento de todas las contribuciones en todos los proyectos de tu organización, puedes añadirles una etiqueta de seguimiento común, por ejemplo, #MSF o #cartONG. Por favor, trata de **mantener estas etiquetas cortas** y no añadas demasiadas; los comentarios de los conjuntos de cambios desordenados son confusos de interpretar y se debe dejar espacio para que los mapeadores dejen comentarios descriptivos de los conjuntos de cambios. 

> Ten en cuenta que una etiqueta de seguimiento única del proyecto ya estará presente, por ejemplo, #hotosm-project-11188 - **por favor, déjala como está**, es muy importante para el seguimiento del progreso del proyecto. El número al final de la etiqueta es el ID único de tu proyecto.

#### Instrucciones detalladas

Añade instrucciones descriptivas para que los mapeadores y validadores las sigan mientras trabajan en tu proyecto. Tu proyecto será público, por lo que **escribe las instrucciones para usuarios inexpertos** sin conocimientos locales o contextuales. Por favor, utiliza un lenguaje sencillo, ya que tu público objetivo puede no ser hispanohablante nativo.

1. Escribe la información más importante en la parte superior para asegurarte de que sea visible. Esto podría incluir una descripción de las imágenes y una advertencia de un problema de compensación de imágenes con orientación. O podrías indicar a los mapeadores que ignoren los caminos y las pistas en un proyecto de cartografía de carreteras y se centren en las carreteras más destacadas.
2. Añade instrucciones específicas de contexto/ubicación. Estas varían considerablemente, pero ayudarán a los mapeadores a interpretar las imágenes satelitales. Por ejemplo, "Espera ver muchas chozas circulares de paja marrón en este proyecto de Sudán del Sur" o "Los asentamientos en Guatemala suelen estar densamente construidos; acércate mucho cuando mapees cada edificio para asegurarte de que no se conectan ni se superponen". Arrastra y suelta capturas de pantalla de las imágenes aéreas en las instrucciones para mejorar esta sección.
3. Definitivamente incluye una descripción detallada de **cómo mapear cada objeto espacial** que deseas que sea mapeado. Mira los proyectos existentes (pero recientes) en el Tasking Manager para ver si puedes tomar prestado algún texto instructivo existente (¡ten cuidado de que algunos proyectos no tendrán buenas instrucciones!).
4. El recurso definitivo sobre el etiquetado es el [wiki de OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Para muchos proyectos relacionados con HOT, la página sobre [etiquetado de carreteras en África](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) es la especialización adecuada y puede valer la pena enlazarla en las instrucciones de tu proyecto. Si tu proyecto debe adherirse a normas de etiquetado diferentes, escribe una página similar en la Wiki y enlácela en tus instrucciones.
5. Otros puntos de aclaración: si el proyecto es adecuado solo para los mapeadores con un cierto nivel de experiencia. Por ejemplo, el proyecto utiliza importaciones o los datos existentes deben realinearse con las trazas del GPS o alguna otra imagen. Redáctalo de forma que los nuevos mapeadores se sientan invitados a contribuir a otros proyectos, pero que entiendan que en este caso se requieren técnicas avanzadas.
6. Hay directrices que cubren los errores comunes que vemos al validar. Un ejemplo es la compilación de Blake Girardot sobre [mapeo en África Occidental](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Utiliza el enlace en las instrucciones y explica que es necesario adherirse a estas directrices.

#### Por Instrucciones de Tarea 

Esto es opcional, pero puedes añadir un breve fragmento de instrucciones adicionales que los mapeadores verán mientras trabajan en una tarea. Esto se ve en el lado derecho de la vista del editor del Tasking Manager, encima de la sección "Estado de la Tarea". Esto se verá en todo momento mientras se mapea, así que si hay algo **particularmente importante** sobre lo que quieres **instruir a los mapeadores**, puedes añadirlo aquí. 

### Metadatos

![TM Metadata][]

#### Nivel de mapeador

Esto cambia el nivel de dificultad que se **muestra** para tu proyecto. Considéralo con mucho cuidado; los proyectos complejos que se establecen inadecuadamente en la dificultad de principiante **pueden dar lugar a importantes problemas de calidad de los datos**. 

> Ten en cuenta que esto no cambia quién puede **realmente contribuir** a tu proyecto; esas restricciones se implementan en el submenú Permisos.

La mayoría de los proyectos están configurados con una dificultad de **Principiante** o **Intermedio**, y un puñado de proyectos están configurados en Avanzado. 

- **Principiante** - Considéralo si tu proyecto es fácil de mapear y:
  - Solo estás pidiendo a los contribuyentes que mapeen una característica, en particular **solo edificios**.
  - La densidad de objetos espaciales es baja, es decir, en una zona **rural**.
  - Hay una **baja cantidad** de datos OSM existentes en el área de tu proyecto
  - No hay problemas de alineación de imágenes
- **Intermedio** - Si tu proyecto es más difícil de mapear, deberías considerarlo si:
  - Estás pidiendo a los contribuyentes que mapeen más de una característica, por ejemplo, edificios **y** carreteras
  - Hay una densidad media/alta de esas características en la zona de tu proyecto, es decir, zonas **urbanas**.
  - Existen **datos sustanciales** de OSM en el área de tu proyecto
  - Puede haber **problemas de alineación de las imágenes** o pides a los colaboradores que utilicen más de una fuente de imágenes
- **Avanzado** - Si el proyecto es extremadamente difícil de mapear, considéralo si:
  - En la zona de tu proyecto hay una densidad muy alta de características, es decir, **zonas urbanas centrales**.
  - Hay **muchos** datos OSM existentes en el área de tu proyecto
  - Hay problemas **complejos de alineación de imágenes**.

#### Tipos de mapeo

Activa o desactiva estas opciones en función de las características que desees que se mapeen en tu proyecto. Por lo general, **cuantas menos características, mejor**, ya que los proyectos que pretenden mapear demasiadas características suelen tener dificultades para avanzar. 

> Los proyectos que piden que se mapeen muchos objetos espaciales son difíciles para los mapeadores y difíciles de validar. Tardan mucho más en obtener un buen conjunto de datos utilizables. Los tamaños de las tareas también son difíciles de hacer eficientes para los diferentes tipos de cartografía, por ejemplo, los edificios necesitan cuadrículas de tareas pequeñas, las carreteras y las vías fluviales necesitan cuadrículas de tareas más grandes. La mejor práctica consiste en realizar varios proyectos en la misma zona para cartografiar por separado los edificios y las carreteras y vías fluviales. 

#### Preconfiguraciones del Editor iD

Si eliges uno o más elementos de la lista desplegable, los mapeadores que utilicen iD solo podrán asignar estas características a los objetos que mapeen. Esto se recomienda para los proyectos de principiantes, **solo de construcción**. Esto significa que los colaboradores no podrán etiquetar otras características, aunque lo intenten. Evita el uso de preajustes para proyectos más complejos, ya que puede convertirse rápidamente en una carga. Por ejemplo, un proyecto de mapeo de carreteras necesitaría que se añadieran docenas de preajustes para garantizar que todos los tipos de carreteras puedan ser mapeados. 

#### Organización

El nombre de tu organización ya debería estar aquí; de lo contrario, selecciónalo en el menú desplegable.

#### Campaña

Si has creado varios proyectos asociados entre sí, puedes optar por asignarlos a una campaña. Los usuarios pueden filtrar los proyectos por el nombre de la campaña en la página Explorar Proyectos. Por ejemplo, si tu proyecto está asociado a la eliminación de la malaria, puedes ponerlo en la campaña "Eliminación de la malaria". Para solicitar la creación de nombres de campaña adicionales, completa [este formulario](https://forms.gle/qafvkp4iAxnY6rjE6).

#### Categorías

Selecciona aquí los temas relacionados con tu proyecto. Los colaboradores pueden especificar sus intereses en estas categorías en su página de configuración.

#### ID de filtro de OSMCha

[OSMCha](https://osmcha.org/) es una potente herramienta de control de calidad de datos que puede resultarte útil para supervisar las contribuciones a tu proyecto. El filtro estándar confina la salida a la caja de límites del proyecto y a las contribuciones no más antiguas que la fecha de creación del proyecto y con el nombre del proyecto en el comentario del conjunto de cambios. Si crees que algo diferente sería un mejor enfoque para analizar los conjuntos de cambios de tu proyecto, entonces proporciona una URL de OSMCha o un ID de filtro de OSMCha aquí. El filtro de OSMCha está disponible al final de la página de resumen de tu proyecto.

### Áreas prioritarias

![TM Priority Area][]

Utiliza las herramientas de aquí para dibujar las áreas que deben ser mapeadas primero. Puedes tener varias áreas prioritarias para un proyecto. También puedes cambiar las áreas prioritarias en cualquier momento. El área prioritaria se resaltará para que los voluntarios la prioricen, y si seleccionan "Mapear una tarea", se seleccionará aleatoriamente una tarea del área prioritaria en primer lugar. 

> Durante la elaboración de mapas de catástrofes, en las primeras fases del suceso, disponer de una amplia zona de mapeo del proyecto y utilizar áreas prioritarias para centrar el mapeo a medida que llega la nueva información suele ser la mejor práctica.

### Imágenes

En el menú desplegable, elige la fuente de imágenes aéreas que quieres que se cargue automáticamente para tu proyecto. Si las imágenes no aparecen en el menú desplegable, puedes elegir "Personalizado" y añadir una URL TMS. 

> Ten en cuenta que el Tasking Manager **no puede alojar imágenes personalizadas**; estas deben alojarse externamente y enlazarse mediante una URL TMS. Si estás contento con que tus imágenes estén abiertas para su uso, considera la posibilidad de utilizar [OpenAerialMap](https://openaerialmap.org/) para alojar tus imágenes.

Licencia: opcionalmente, si hay una licencia específica que los mapeadores deben aceptar al utilizar las imágenes, puedes seleccionarla aquí. Por ejemplo, para las imágenes de Maxar es "DigitalGlobe Satellite EULA". Si necesitas una licencia que no está disponible, puedes ponerte en contacto con un administrador de la instalación del Tasking Manager y pedirle que la añada.

### Permisos

En el menú "Metadatos", podíamos cambiar el nivel de dificultad que se **muestra** para un proyecto. En el menú "Permisos", podemos cambiar quién puede **acceder** realmente a un proyecto. Es importante recordar los distintos niveles de usuario:

- **Usuario principiante** - Cualquier usuario que acabe de crear su cuenta o que haya realizado **menos de 250 conjuntos de cambios** (guardados)
- **Usuario intermedio** - Cualquier usuario que haya realizado entre **250 y 500 conjuntos de cambios**.
- **Usuario avanzado** - Cualquier usuario que haya realizado más de **500 conjuntos de cambios**.

> Como antes, considera los permisos con mucho cuidado; los proyectos complejos que no permiten que todos los usuarios contribuyan pueden dar lugar a **problemas significativos de calidad de los datos**. 

![TM Permissions][]

#### Permisos de mapeo

Aquí puedes elegir quién puede **mapear** tu proyecto:

- Si tu proyecto es fácil de contribuir y lo consideras un proyecto para principiantes, es posible que quieras establecer esto en **'Cualquier usuario'**.
- Si tu proyecto es más complejo y requiere más experiencia, restringe el mapeo a **'Solo usuarios con nivel intermedio o avanzado'**. 
- Si quieres ser aún más selectivo, también puedes exigir que un mapeador forme parte de un **equipo**. Los equipos deben definirse a continuación.

#### Permisos de validación

Aquí puedes elegir quién puede **validar** tu proyecto. La validación es donde los mapeadores más experimentados comprueban las contribuciones que se realizan dentro de tu proyecto, por lo que esto debe restringirse a "Solo usuarios con nivel intermedio o avanzado" **como mínimo**. **Idealmente**, deberías restringir la validación aún más a **'Solo miembros del equipo'**, pero cuando lo hagas debes recordar **definir esos equipos** a continuación. 

#### Equipos

Utiliza los filtros para buscar y añadir equipos. Puedes añadir tu(s) propio(s) equipo(s), pero también puedes añadir otros equipos. Una vez que hayas añadido un equipo, asegúrate de seleccionar un rol (Mapeador, Validador, Gestor de proyecto). 

Los permisos de equipo no funcionarán a menos que hayas restringido los permisos de mapeo y/o validación a "Solo miembros del equipo". Si concedes a un equipo el acceso de Gestor de Proyecto, esto permitirá a los miembros de tu equipo editar el proyecto.

> En el Tasking Manager de HOT, siéntete libre de añadir dos de los equipos de validación más grandes, a saber, los "HOT Global Validators" y los "Validator Trainees" de HOT. Ten en cuenta que, aunque esto da a los miembros del equipo **permiso** para validar tu proyecto, **no significa necesariamente** que ellos **validarán** tu proyecto. 

#### Privacidad

Al activar la opción "Privado", se ocultará el proyecto a todos los usuarios, excepto a los que formen parte de los equipos definidos anteriormente. 

### Configuración

![TM Settings][]

#### Idioma predeterminado

Al modificar esto, cambiarás el idioma predeterminado del título, la descripción y las instrucciones de tu proyecto.

#### Editores para el mapeo/validación

Esto restringe los editores disponibles a los marcados. Puedes especificar conjuntos diferentes para el mapeo y para la validación. Ten en cuenta que aquí puedes habilitar el editor RapiD asistido por IA. 

#### Aplicar la selección aleatoria de tareas

Si se activa, los colaboradores no pueden seleccionar tareas específicas para el mapeo.

### Acciones

Aquí puedes realizar acciones masivas potentes en tu proyecto. **Ten cuidado** con muchas de estas opciones, **no son reversibles**. 

![TM Actions][]

#### Mensaje a todos los colaboradores

Envía un mensaje del Tasking Manager a todos los que han marcado una tarea como completa o válida. Puedes utilizarlo para agradecer a los colaboradores y/o guiarlos hacia otros proyectos de una campaña. También deberías utilizarlo antes de usar cualquiera de las dos opciones de Validar/Invalidar todas las tareas que se describen a continuación.

#### Mapeo, validación e invalidación

Esto establecerá el estado de todas las tareas como mapeadas, validadas o invalidadas. Manejar con cuidado, ya que no se puede deshacer.

#### Restablecer tareas

Esto restablecerá todas las tareas a su estado original, pero las acciones anteriores pueden seguir viéndose en el historial de tareas. Manejar con cuidado, ya que no se puede deshacer.

#### Transferir la propiedad del proyecto

Puedes especificar otro gestor dentro de tu organización que pasará a figurar como creador del proyecto. Busca su nombre de usuario de OSM. 

#### Clonar proyecto

Esta útil opción creará un duplicado del proyecto, manteniendo toda la **configuración idéntica** excepto el área de interés, la cuadrícula de tareas y las áreas prioritarias, que tendrás que reimportar o redibujar. Esta opción te permitirá **ahorrar mucho tiempo** si estás creando una serie de proyectos similares que cubren un área grande. 

#### Eliminar proyecto

Esto **eliminará permanentemente** el proyecto del Tasking Manager. Manejar con cuidado, ya que no se puede deshacer. No es posible eliminar un proyecto después de que se hayan realizado contribuciones al mismo.

### Editor personalizado

Si quieres enlazar con un editor que no aparece en el menú "Configuración", puedes añadir aquí una URL a ese editor. 

### Guardar y probar

Una vez que estés satisfecho con la configuración de tu proyecto, pulsa `Guardar`. Visualiza tu proyecto seleccionando `Acceder al proyecto` y `Página del proyecto`. **Revisa tu proyecto cuidadosamente**; asegúrate de que las instrucciones son claras y de que la redacción y el formato son correctos. 

**Intenta mapear una tarea**, ¿se cargan las imágenes correctamente? ¿Son las instrucciones lo suficientemente claras? Si necesitas hacer cambios o mejoras en tu proyecto, haz clic en el botón `Editar` de la página del proyecto. 

### Publicar

Después de comprobar y probar tu proyecto, si estás satisfecho con él y está listo para empezar a mapear, haz clic en el botón `Editar` de la página del proyecto y, en el menú "Descripción", cambia el estado a 'Publicado'. Una vez que el proyecto esté publicado, el público en general podrá ver tu proyecto y contribuir a él. 

> Ten en cuenta que puedes acceder al menú "Editar" de tu proyecto y modificar los ajustes en cualquier momento, incluso si el mapeo está en curso.

## Gestión de proyectos

¡Enhorabuena! Has creado un proyecto; ahora tendrás que asegurarte de que lo gestionas eficazmente. 

### Sé receptivo

Como creador del proyecto, eres **responsable** de **responder a las preguntas** que surjan en la sección **Preguntas y comentarios** de la página de tu proyecto. Esta sección a menudo incluirá consejos u orientaciones útiles de la comunidad en general; tómalos en serio, responde y edita tus proyectos cuando sea necesario. 

> Para activar las notificaciones cuando haya nuevas publicaciones en la sección de Preguntas y Comentarios, haz clic en tu nombre de usuario de OSM en el Tasking Manager y elige `Configuración`. Activa las notificaciones para "Preguntas y comentarios".

En la página del proyecto, tu nombre de usuario también aparecerá junto a "creado por...". Esto significa que también puedes recibir mensajes directos de OSM; asegúrate de leerlos y responderlos. 

> Si te sientes abrumado por las preguntas, ten en cuenta que recibirás menos si sigues esta orientación: _Lo primero que puedes hacer para apoyar a los mapeadores, y a los validadores, es tener proyectos bien diseñados con instrucciones y descripciones fáciles de entender pero completas._

### Secuenciación de proyectos

Si has creado varios proyectos en serie, **no los publiques todos a la vez**. No eres el único que crea proyectos; tener un número razonable de proyectos (uno o dos) con la prioridad adecuada está bien. Publicar media docena a la vez saturará el Tasking Manager. Mantén el resto en borrador o con una prioridad menor, mientras que en todo momento solo se trabaja en uno o dos. Puedes notar que los colaboradores pierden el entusiasmo si ven muchos proyectos similares a la vez que avanzan poco.

### Ciclo de vida del proyecto

Haz un seguimiento del progreso del mapeo y la validación de tus proyectos. Recuerda que **todos los proyectos deben acabar archivados**. Tendrás que hacerlo manualmente, así que no pierdas de vista el progreso, la prioridad o la relevancia de tus proyectos. Si te trasladas a otra organización, asegúrate de **transferir** tus proyectos en curso a tu sustituto. 

## Información adicional

### Consideraciones sobre las imágenes

Antes de crear tu proyecto, comprueba las imágenes en varios lugares diferentes de la zona de tu proyecto para hacer una evaluación de las imágenes. En la mayoría de los casos, las imágenes de Maxar o Bing deberían satisfacer tus necesidades. Sin embargo, hay situaciones en las que podrías querer elegir una fuente alternativa. Es posible que tengas que tener en cuenta lo siguiente a la hora de elegir tus imágenes: 

1. Si se necesita una cartografía cuidadosa y detallada, elige las imágenes más claras y de mayor resolución.
2. Si tu prioridad es disponer de las imágenes más actualizadas, alterna entre las fuentes de imágenes estándar para buscar las imágenes más recientes. Busca indicios de desarrollo, como nuevos edificios o desmonte de terrenos, para hacerte una idea de las imágenes más actualizadas. Últimamente, Maxar ha sido la más actualizada, pero esto varía según la ubicación. 
3. Comprueba la nubosidad; aunque una fuente de imágenes puede satisfacer tus necesidades, si está muy nublada o brumosa, tus mapeadores tendrán problemas para mapear con ella.
4. Comprueba la alineación; si hay muchos datos OSM existentes que se alinean con un conjunto de imágenes satelitales, entonces puede tener sentido elegir las mismas imágenes. Si hay problemas de alineación, asegúrate de escribir instrucciones claras detallando cómo esperas que los contribuyentes se ocupen de los problemas de desplazamiento/alineación. 

> A menudo es muy difícil obtener una fecha exacta de captura de imágenes de los proveedores de imágenes por satélite. Las principales fuentes son los "mosaicos", en los que se unen una serie de imágenes (a menudo con fechas de captura muy diferentes). A veces, esta unión llega hasta el nivel de píxel individual. A falta de información, la comparación de imágenes suele ser la mejor opción para encontrar las imágenes más recientes. 

#### Alineación de imágenes

Es posible que el área de tu proyecto ya haya sido parcialmente cartografiada utilizando imágenes más antiguas y que haya una desalineación notable entre los objetos cartografiados más antiguos y las imágenes más recientes disponibles. Inspecciona varias ubicaciones en tu área de mapeo para determinar esto. Si hay un problema de alineación, asegúrate de incluir instrucciones detalladas que indiquen el mejor enfoque que deben adoptar los mapeadores. Los proyectos con problemas de alineación de imágenes es mejor que se restrinjan a los mapeadores más experimentados. 

No existe un conjunto de instrucciones estándar cuando se trata de cuestiones de alineación de imágenes. Depende mucho del contexto. A veces se indica a los mapeadores que se alineen con las trazas del GPS, y otras veces se les dice que se alineen con los rasgos lineales cartografiados, como carreteras y vías fluviales. He aquí un ejemplo de enfoque: 

1. Indica claramente qué imagen debe considerarse la referencia a la que debe alinearse todo lo demás. En este caso, supongamos que la referencia es Maxar.
2. Asegúrate de que todas los objetos espaciales existentes que también son visibles en Maxar están alineados con las imágenes de Maxar, es decir, realinéalos si es necesario.
3. Añade nuevos objetos espaciales a partir de las imágenes Maxar, ahora correctamente alineadas.

A menudo se indica a los mapeadores que busquen el _menor esfuerzo_ cuando se trata de problemas de alineación de imágenes. Esto significa que los colaboradores deben variar su enfoque en función de la situación en su tarea individual: 

- Si hay mucha cartografía existente en una tarea que está constantemente desalineada, podría requerir el menor esfuerzo cambiar el desplazamiento de las imágenes para ajustarse a la cartografía existente y luego cartografiar el pequeño número de objetos restantes en la tarea. 
- Si la cartografía existente es menor, o los objetos están desalineados de forma inconsistente (es decir, el grado de desalineación varía en el espacio), entonces podría ser más fácil alterar la posición de los objetos mapeados para alinearlos con las imágenes y luego mapear los objetos restantes en la tarea.

Si tu proyecto tiene problemas de alineación, asegúrate de que las cuadrículas de tareas no sean demasiado grandes, ya que las desviaciones de las imágenes pueden variar considerablemente a lo largo de una zona cartográfica, especialmente si el terreno no es plano. Incluso pueden producirse discontinuidades en las imágenes a lo largo de un proyecto. Busca estas discontinuidades y avisa a los colaboradores de este problema.

> Aunque los mapeadores individuales pueden modificar manualmente el desplazamiento de las imágenes durante el mapeo, no puedes, como creador del proyecto, cambiar el desplazamiento de las imágenes a nivel del proyecto. Sin embargo, si utilizas tus propias imágenes aéreas alojadas en otro lugar, puedes modificar el desplazamiento en origen. Sin embargo, ten en cuenta que la alineación puede variar considerablemente en el espacio y que el simple hecho de cambiar el desplazamiento general no siempre corrige los problemas de alineación. 

No dudes en consultar estos recursos adicionales sobre la alineación de imágenes:

- [Directrices generales para varios editores](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Gif animado sobre la alineación de imágenes en iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Capítulo de alineación de imágenes de JOSM en LearnOSM](http://learnosm.org/es/josm/correcting-imagery-offset)


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
