---
layout: doc
title: Vespucci
permalink: /es/mobile-mapping/vespucci/
lang: es
category: mobile-mapping
---

Vespucci
==============

Vespucci es una herramienta gratuita para la edición de datos de OpenStreetMap y conocida por funcionar en una amplia gama de dispositivos, por ejemplo, Teléfonos Inteligentes, Tabletas. Soporta la mayoría de las operaciones disponibles en los editores OSM de escritorio. Sin embargo, esta aplicación sólo está disponible para dispositivos Android y funciona para todas las versiones de Android desde la 4.0.

Puedes descargarla desde la Tienda Google Play, Amazon o F-Droid. Los APKs de la versión y la beta de la aplicación también están disponibles en su repositorio de GitHub.

## Características

-   Crear, editar, y eliminar nodos, vías y relaciones.
-   Mover nodos
-   Mover y rotar vías
-   Agregar nodos a las vías
-   Extraer nodo de la vía
-   Mejorar geometría de la vía
-   Ortogonalizar vías (escuadrar)
-   Mover múltiples elementos
-   Admite multi-polígonos
-   Crear, editar y eliminar etiquetas
-   Funciones de deshacer y rehacer
-   Editar relaciones y crear nuevas restricciones de turno
-   Compatibilidad con los preajustes JOSM
-   Descargar y almacenar azulejos de imágenes de fondo
-   Descargar y subir al Servidor OSM
-   Almacenamiento y lectura de archivos de datos OSM en formato JOSM
-   Mostrar problemas de validación y FIXMEs
-   Faltan etiquetas y nombres de calles
-   Añadir, comentar y cerrar los errores de OSM Notes y Osmose
-   Cargar, grabar y cargar una traza GPX
-   Mostrar fotografías georreferenciadas
-   Apoyo a los datos OSM en mosaico de MapSplit
-   Admite la lectura de archivos de datos OSM en formato PBF
-   ..y muchos más

## Cartografía con Vespucci

Los datos OSM en Vespucci se llaman objetos. Los puntos se llaman nodos, las líneas se llaman caminos y los polígonos se llaman caminos cerrados.

Para añadir datos de OSM utilizando Vespucci, es necesario que inicie sesión en su cuenta de OpenStreetMap. Inicie sesión tocando el icono "Más opciones" (situado en la parte inferior derecha de la pantalla) y seleccionando "Autorizar OAuth" en "Herramientas...". Escriba su nombre de usuario (o dirección de correo electrónico) y contraseña de OSM, y luego toque "Iniciar sesión". Si no tiene una cuenta de OSM, seleccione "Registrar ahora" en su lugar.

![Login][]

Vespucci necesitará acceso a su cuenta. Para autorizar el acceso a su cuenta, toque "Conceder acceso" después de iniciar la sesión. Asegúrese de que todas las casillas estén marcadas para maximizar lo que puede hacer en Vespucci.

![Allow][]

Después de iniciar sesión, localice su área de interés a través del icono "GPS" o a través de "Buscar" en "Más opciones". Cambie el fondo del mapa a las imágenes que desee haciendo clic en las tres líneas de la esquina superior derecha y haciendo clic en "OpenStreetMap(Standard)", ya que es la imagen por defecto, y así aparecerán todas las imágenes disponibles.

![SelectImagery][]

Para editar sin conexión, seleccione "Descargar la vista actual" o "Borrar y descargar la vista actual" bajo el icono "Transferir". Esto le permitirá descargar y editar el área mostrada en tu pantalla con una imagen de fondo guardada de tu elección. La edición sin conexión evitará que edite los datos de OSM al mismo tiempo que otros cartógrafos, evitando así los problemas de calidad de los datos que puedan surgir.

![Offline][]

Desbloquee el mapa para poder empezar a añadir datos. Para ello, toque el icono del candado en la esquina superior izquierda de la pantalla. Mantenga pulsado el icono de desbloqueo y luego toque Normal para poder añadir y editar nodos, caminos y etiquetas. Si selecciona la opción "sólo etiquetas", sólo podrás editarlas.

![StartEditing][]

### Añadir y editar etiquetas

Para añadir o editar etiquetas, pulse sobre el objeto deseado. Aparecerá un nuevo conjunto de iconos en la parte inferior de la pantalla. Toque el icono "Añadir preselección" o el icono "Editar propiedades" para añadir o modificar las etiquetas.

![EditTags][]

### Añadir/crear nuevos objetos

Para añadir un nuevo objeto, toca el botón verde grande en la esquina inferior derecha de la pantalla y selecciona lo que quieres añadir. Acércate y toca donde quieras poner el objeto.

![AddObject][]

Para crear un nuevo nodo, seleccione añadir nodo y pulse sobre la zona en la que desea colocar el nodo.

![AddNode][]

Para crear una vía, elige añadir camino y toca continuamente la pantalla hasta que obtengas el resultado deseado.

![AddWay][]

Para crear un camino/polígono cerrado, cree caminos y simplemente toque el primer nodo del primer camino que creó para cerrar el polígono. Toque el icono "Añadir preselección" para añadir etiquetas a su polígono. Los caminos no etiquetados son de color fushia, mientras que los caminos etiquetados son de color según sus etiquetas/propiedades (es decir, los edificios etiquetados son de color beige, los cursos de agua etiquetados son de color azul, etc.).

![AddPolygon][]

### Añadir un nodo a una vía

Seleccione la vía en la que desea añadir un nodo. Pulse el botón verde grande en la esquina inferior derecha de la pantalla y seleccione añadir nodo. Toque donde quiera que aparezca el nuevo nodo. Se añadirá un nuevo nodo en la ubicación seleccionada.

![AddNodeToWay][]

### Editar y mover objetos

Para mover un objeto, tóquelo una vez y muévalo al lugar que desee.

Para cuadrar un polígono, selecciónelo y elija la opción "cuadrado" en el icono "Más opciones".

![ModifyObject][]

### Deshacer/Rehacer

Para revertir sus cambios, toque el icono "Deshacer" en la esquina inferior izquierda de la pantalla. Al tocarlo, se revertirán los cambios más recientes.

![Undo][]

Para rehacer, haga una pulsación larga en el icono "Deshacer". Aparecerá una lista de las operaciones que ha deshecho. Seleccione lo que desea rehacer.

![Redo][]

### Subir sus cambios

Para subir sus cambios, toque el icono "Transferir" en la parte inferior de la pantalla y seleccione "Subir datos al servidor OSM". Aparecerá una lista de sus cambios. Toque "Propiedades" para introducir los comentarios de sus cambios y luego toque "Subir". Si la carga es exitosa, sus cambios aparecerán inmediatamente en OSM.

![Upload][]

Subir sus cambios a OpenSteetMap requiere que esté conectado a Internet y que haya iniciado sesión en su cuenta de OSM, así que asegúrese de haber iniciado sesión antes de editar.

## Búsqueda de lugares

Para localizar su ubicación actual, toque el icono "GPS" en la parte inferior de la pantalla y seleccione "Ir a la ubicación actual". La pantalla se acercará automáticamente a su ubicación. Tenga en cuenta que el GPS de su dispositivo debe estar activado para que esto funcione.

![Goto][]

Para localizar otros lugares, pulse el icono "Más opciones" y seleccione Buscar. Escriba el nombre del lugar deseado y seleccione buscar. Asegúrese de que está buscando "con Nominatim" para realizar una búsqueda de lugares con Nominatim.

![Search][]

## Otros ajustes de Vespucci

Para editar las propiedades de fondo de su mapa, toque el icono de "Preferencias" en la parte inferior de tu pantalla. Aparecerá una ventana de configuración de la interfaz de usuario. Elija lo que quiera ajustar de la lista. En esta opción también puede editar los ajustes de la interfaz de usuario, los datos y los ajustes de edición, la ubicación y los ajustes del servidor, etc.

![Preferences][]

Algunos parámetros pueden ajustarse en el icono "Más opciones". Para alinear la capa de fondo de su mapa (si hay un desplazamiento), pulse "Alinear fondo" en "Herramientas...". Para ello es necesario estar conectado a la red.

![AlignImagery][]

Para borrar las cachés de teselas descargadas, seleccione Herramientas &gt; Más herramientas de imágenes &gt; Vaciar todas las cachés de teselas. Esto vaciará todas las cachés de teselas que tenga en el dispositivo.

![ClearTiles][]

También puede proporcionar retroalimentación a los desarrolladores de Vespucci utilizando su cuenta de GitHub u OSM en el icono "Más opciones".

![Feedback][]

[Login]:        /images/mobile-mapping/vespucci-login.png
[Allow]:        /images/mobile-mapping/vespucci-allow.png
[SelectImagery]:/images/mobile-mapping/vespucci-select-imagery.png
[Offline]:      /images/mobile-mapping/vespucci-offline.png
[StartEditing]: /images/mobile-mapping/vespucci-start-editing.png
[EditTags]:     /images/mobile-mapping/vespucci-edit-tags.png
[AddObject]:    /images/mobile-mapping/vespucci-add-object.png
[AddNode]:      /images/mobile-mapping/vespucci-add-node.png
[AddWay]:       /images/mobile-mapping/vespucci-add-way.png
[AddPolygon]:   /images/mobile-mapping/vespucci-add-polygon.png
[AddNodeToWay]: /images/mobile-mapping/vespucci-add-node-to-way.png
[ModifyObject]: /images/mobile-mapping/vespucci-modify-object.png
[Undo]:         /images/mobile-mapping/vespucci-undo.png
[Redo]:         /images/mobile-mapping/vespucci-redo.png
[Goto]:         /images/mobile-mapping/vespucci-goto.png
[Search]:       /images/mobile-mapping/vespucci-search.png
[Upload]:       /images/mobile-mapping/vespucci-upload.png
[Preferences]:  /images/mobile-mapping/vespucci-preferences.png
[AlignImagery]: /images/mobile-mapping/vespucci-align-imagery.png
[ClearTiles]:   /images/mobile-mapping/vespucci-clear-tile-cache.png
[Feedback]:     /images/mobile-mapping/vespucci-feedback.png
