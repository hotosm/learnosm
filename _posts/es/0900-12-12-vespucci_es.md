---
layout: doc
title: Vespucci
permalink: /es/mobile-mapping/vespucci/
lang: es
category: mobile-mapping
---

Vespucci
==============

Vespucci es una herramienta gratuita para la edición de datos de OpenStreetMap y conocida por funcionar en una amplia gama de dispositivos, por ejemplo, teléfonos inteligentes, tablets. Soporta la mayoría de las operaciones disponibles en los editores OSM de escritorio. Sin embargo, esta aplicación solo está disponible para dispositivos Android y funciona para todas las versiones de Android desde la 4.0.

Puedes descargarla desde la Tienda Google Play, Amazon o F-Droid. Los APK de la versión y la beta de la aplicación también están disponibles en su repositorio de GitHub.

## Características

-   Crear, editar y eliminar nodos, vías y relaciones.
-   Mover nodos.
-   Mover y rotar vías.
-   Agregar nodos a las vías.
-   Extraer nodo de la vía.
-   Mejorar geometría de la vía.
-   Ortogonalizar vías (escuadrar).
-   Mover múltiples elementos.
-   Admite multipolígonos.
-   Crear, editar y eliminar etiquetas.
-   Funciones de deshacer y rehacer.
-   Editar relaciones y crear nuevas restricciones de turno.
-   Compatibilidad con los preajustes JOSM.
-   Descargar y almacenar teselas de imágenes de fondo.
-   Descargar y subir al servidor OSM.
-   Almacenamiento y lectura de archivos de datos OSM en formato JOSM.
-   Mostrar problemas de validación y FIXMEs.
-   Etiquetas y nombres de calles faltantes.
-   Añadir, comentar y cerrar los errores de OSM Notes y Osmose.
-   Cargar, grabar y cargar una traza GPX.
-   Mostrar fotografías georreferenciadas.
-   Apoyo a los datos OSM en mosaico de MapSplit.
-   Admite la lectura de archivos de datos OSM en formato PBF.
-   ...y muchos más.

## Mapeo con Vespucci

Los datos OSM en Vespucci se llaman objetos. Los puntos se llaman nodos, las líneas se llaman caminos y los polígonos se llaman caminos cerrados.

Para añadir datos de OSM utilizando Vespucci, es necesario que inicies sesión en tu cuenta de OpenStreetMap. Inicia sesión tocando el ícono "Más opciones" (situado en la parte inferior derecha de la pantalla) y seleccionando "Autorizar OAuth" en "Herramientas...". Escribe tu nombre de usuario (o dirección de correo electrónico) y contraseña de OSM, y luego toca "Iniciar sesión". Si no tienes una cuenta de OSM, selecciona "Registrar ahora" en su lugar.

![Login][]

Vespucci necesitará acceso a tu cuenta. Para autorizar el acceso a tu cuenta, toca "Conceder acceso" después de iniciar sesión. Asegúrate de que todas las casillas estén marcadas para maximizar lo que puedes hacer en Vespucci.

![Allow][]

Después de iniciar sesión, localiza tu área de interés a través del ícono "GPS" o a través de "Buscar" en "Más opciones". Cambia el fondo del mapa a las imágenes que desees haciendo clic en las tres líneas de la esquina superior derecha y haciendo clic en "OpenStreetMap(Estándar)", ya que es la imagen por defecto, y así aparecerán todas las imágenes disponibles.

![SelectImagery][]

Para editar sin conexión, selecciona "Descargar la vista actual" o "Borrar y descargar la vista actual" bajo el ícono "Transferir". Esto te permitirá descargar y editar el área mostrada en tu pantalla con una imagen de fondo guardada de tu elección. La edición sin conexión evitará que edites los datos de OSM al mismo tiempo que otros cartógrafos, evitando así los problemas de calidad de los datos que puedan surgir.

![Offline][]

Desbloquea el mapa para poder empezar a añadir datos. Para ello, toca el ícono del candado en la esquina superior izquierda de la pantalla. Mantén pulsado el ícono de desbloqueo y luego toca Normal para poder añadir y editar nodos, caminos y etiquetas. Si seleccionas la opción "solo etiquetas", solo podrás editarlas.

![StartEditing][]

### Añadir y editar etiquetas

Para añadir o editar etiquetas, pulsa sobre el objeto deseado. Aparecerá un nuevo conjunto de íconos en la parte inferior de la pantalla. Toca el ícono "Añadir preselección" o el ícono "Editar propiedades" para añadir o modificar las etiquetas.

![EditTags][]

### Añadir/crear nuevos objetos

Para añadir un nuevo objeto, toca el botón verde grande en la esquina inferior derecha de la pantalla y selecciona lo que quieres añadir. Acércate y toca donde quieres poner el objeto.

![AddObject][]

Para crear un nuevo nodo, selecciona añadir nodo y pulsa sobre la zona en la que deseas colocar el nodo.

![AddNode][]

Para crear una vía, elige añadir camino y toca continuamente la pantalla hasta que obtengas el resultado deseado.

![AddWay][]

Para crear un camino/polígono cerrado, crea caminos y simplemente toca el primer nodo del primer camino que creaste para cerrar el polígono. Toca el ícono "Añadir preselección" para añadir etiquetas a tu polígono. Los caminos no etiquetados son de color fucsia, mientras que los caminos etiquetados son de color según sus etiquetas/propiedades (es decir, los edificios etiquetados son de color beige, los cursos de agua etiquetados son de color azul, etc.).

![AddPolygon][]

### Añadir un nodo a una vía

Selecciona la vía en la que deseas añadir un nodo. Pulsa el botón verde grande en la esquina inferior derecha de la pantalla y selecciona añadir nodo. Toca donde quieras que aparezca el nuevo nodo. Se añadirá un nuevo nodo en la ubicación seleccionada.

![AddNodeToWay][]

### Editar y mover objetos

Para mover un objeto, tócalo una vez y muévelo al lugar que desees.

Para cuadrar un polígono, selecciónalo y elige la opción "cuadrado" en el ícono "Más opciones".

![ModifyObject][]

### Deshacer/Rehacer

Para revertir tus cambios, toca el ícono "Deshacer" en la esquina inferior izquierda de la pantalla. Al tocarlo, se revertirán los cambios más recientes.

![Undo][]

Para rehacer, haz una pulsación larga en el ícono "Deshacer". Aparecerá una lista de las operaciones que has deshecho. Selecciona lo que deseas rehacer.

![Redo][]

### Subir tus cambios

Para subir tus cambios, toca el ícono "Transferir" en la parte inferior de la pantalla y selecciona "Subir datos al servidor OSM". Aparecerá una lista de tus cambios. Toca "Propiedades" para introducir los comentarios de tus cambios y luego toca "Subir". Si la carga es exitosa, tus cambios aparecerán inmediatamente en OSM.

![Upload][]

Subir tus cambios a OpenStreetMap requiere que estés conectado a Internet y que hayas iniciado sesión en tu cuenta de OSM, así que asegúrate de haber iniciado sesión antes de editar.

## Búsqueda de lugares

Para localizar tu ubicación actual, toca el ícono "GPS" en la parte inferior de la pantalla y selecciona "Ir a la ubicación actual". La pantalla se acercará automáticamente a tu ubicación. Ten en cuenta que el GPS de tu dispositivo debe estar activado para que esto funcione.

![Goto][]

Para localizar otros lugares, pulsa el ícono "Más opciones" y selecciona Buscar. Escribe el nombre del lugar deseado y selecciona buscar. Asegúrate de que estás buscando "con Nominatim" para realizar una búsqueda de lugares con Nominatim.

![Search][]

## Otros ajustes de Vespucci

Para editar las propiedades de fondo de tu mapa, toca el ícono de "Preferencias" en la parte inferior de tu pantalla. Aparecerá una ventana de configuración de la interfaz de usuario. Elige lo que quieras ajustar de la lista. En esta opción también puedes editar los ajustes de la interfaz de usuario, los datos y los ajustes de edición, la ubicación y los ajustes del servidor, etc.

![Preferences][]

Algunos parámetros pueden ajustarse en el ícono "Más opciones". Para alinear la capa de fondo de tu mapa (si hay un desplazamiento), pulsa "Alinear fondo" en "Herramientas...". Para ello es necesario estar conectado a la red.

![AlignImagery][]

Para borrar las cachés de teselas descargadas, selecciona Herramientas > Más herramientas de imágenes > Vaciar todas las cachés de teselas. Esto vaciará todas las cachés de teselas que tengas en el dispositivo.

![ClearTiles][]

También puedes proporcionar retroalimentación a los desarrolladores de Vespucci utilizando tu cuenta de GitHub u OSM en el ícono "Más opciones".

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
