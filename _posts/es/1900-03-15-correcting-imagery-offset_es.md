---
layout: doc
title: Corrección del desplazamiento de imágenes
permalink: /es/josm/correcting-imagery-offset/
lang: es
category: josm
---

Desplazamiento de imagen
===============

> Revisado 2015-09-21  

Los proveedores de imágenes suelen hacer un buen trabajo de georreferenciación de sus imágenes, pero en ocasiones estas pueden estar fuera de posición. Esto ocurre especialmente en zonas montañosas, donde puede ser difícil extender una imagen plana sobre una zona de la Tierra con muchas curvas de nivel. Cuando se cargan las imágenes en JOSM, a veces pueden estar a diez metros o más de su posición real. Esto se denomina **desplazamiento de las imágenes**.  

Observa en la siguiente imagen que dos fotografías aéreas distintas han sido georreferenciadas y fusionadas. Como la georreferenciación no es un proceso perfecto, las imágenes no se alinean perfectamente entre sí. Por lo tanto, una de ellas, o ambas, deben ser inexactas.  

![Misaligned imagery][]

Hemos aprendido dos formas principales de hacer mapas: una es utilizando imágenes aéreas para identificar características sobre el terreno y otra es utilizando el GPS para registrar trazas y puntos de ruta y luego añadirlos a OpenStreetMap. La ventaja de las imágenes aéreas es evidente. Te permite a ti, el cartógrafo, ver la imagen completa, observar varios detalles de la imagen, tener en cuenta tu conocimiento de la zona y rastrear fácilmente carreteras, edificios y áreas. Sin embargo, una de las principales ventajas del GPS es que no sufre desplazamientos como las imágenes. Un GPS siempre te proporcionará una latitud y longitud correctas. La única excepción es cuando las señales del satélite se ven interrumpidas por edificios altos o montañas, pero en este caso es fácil reconocer el error. Observa la traza del GPS en esta imagen, comparada con la capa de imágenes aéreas de Bing que hay debajo:  

![Aerial vs GPS][]

Por lo que sabemos ahora, está claro que la traza del GPS es probablemente exacta y la imagen que hay debajo está fuera de lugar. Así que ahora debemos preguntarnos: "Si las imágenes pueden estar fuera de lugar, ¿cómo podemos seguir utilizándolas y hacer mapas precisos?".  

Corregir el desplazamiento de imágenes
-------------------------

La respuesta a la pregunta anterior es que podemos mover las imágenes para que se alineen con cosas que sabemos que están en la ubicación correcta, como las trazas de GPS. Es fácil corregir el desplazamiento de las imágenes en JOSM.  

Las mejores referencias para ajustar las imágenes son las trazas de GPS que siguen las carreteras. Y cuantas más trazas de GPS tengas como referencia, más precisa será la alineación de tus imágenes. Como los usuarios de OpenStreetMap suelen subir sus trazas de GPS a la base de datos de OSM, podemos descargarlas y utilizarlas para alinear nuestras imágenes.  

- Haz clic en el botón de descarga. ![JOSM download button][]{: height="24px"}  

- Marca la casilla junto a "Datos GPS sin procesar" ![Download raw GPS data][]{: height="24px"} cerca de la parte superior de la ventana de descarga. Selecciona tu zona y haz clic en "Descargar".  

- Esto descargará una capa adicional a JOSM que contiene trazas de GPS. Dependiendo de la cantidad de trazas que hayan subido los usuarios de OSM, puede que veas pocas trazas (o incluso ninguna):  

![Few GPS tracks from OSM][]

- O, podrías ver muchas trazas:  

![Many GPS tracks from OSM][]

- Para ajustar una capa de imágenes, haz clic en el botón "Ajustar desplazamiento de imágenes" ![Adjust imagery offset button][]{: height="24px"} en la parte superior de JOSM.  

- Ignorando el cuadro que aparece, utiliza el ratón para arrastrar la capa de imágenes de modo que se alinee correctamente con las trazas del GPS. Las trazas del GPS deben alinearse con las carreteras en las imágenes lo más cerca posible. Verás que los números de desplazamiento en el cuadro cambian.  

![Adjust imagery offset][]

- Si lo deseas, puedes guardar estos ajustes de desplazamiento introduciendo un nombre de marcador y haciendo clic en Aceptar. Luego puedes aplicar automáticamente los mismos ajustes más tarde yendo a Imágenes ‣ Desplazamiento de imágenes y haciendo clic en tu marcador.  
- Si no deseas guardar el desplazamiento, simplemente haz clic en Aceptar sin introducir un nombre de marcador.  

¿Qué pasa si no hay trazas de GPS en OpenStreetMap y no tienes un GPS? Sin trazas de GPS, es difícil alinear las imágenes. Si se trata de una zona relativamente vacía (no se ha hecho mucha cartografía), puedes optar por utilizar las imágenes tal cual y corregir los datos más tarde. Es mejor tener un mapa de un área con 20 o 30 metros de desviación que no tener ningún mapa.  

Si puedes identificar positivamente la latitud y la longitud de un objeto sobre el terreno, puedes asegurarte de que las imágenes están correctamente situadas siguiendo estos pasos:  

1. Identifica el objeto cuya posición conoces en la imagen.  
2. Haz clic en la latitud y la longitud en la esquina inferior izquierda de JOSM.![JOSM lat lon][]{: height="24px"}  
3. En el cuadro de diálogo que se abre, introduce la latitud y la longitud del lugar que conoces, e introduce un número pequeño para el acercamiento, unos cinco o diez.  
![JOSM lat lon dialogue][]
4. Esto ampliará y centrará el mapa a tu longitud y latitud. Ahora puedes mover las imágenes como lo hiciste anteriormente para que el objeto espacial que conoces esté centrado en la posición correcta.  

Si, por el contrario, la zona ya ha sido ampliamente mapeada, cabe esperar que los anteriores cartógrafos hayan dibujado los objetos en su ubicación correcta. En este caso, puedes alinear las imágenes con el mapa OSM, pero ten cuidado. Es posible que otros cartógrafos no conozcan el desplazamiento de las imágenes y que hayan cometido errores al cartografiar.  


La base de datos de desplazamiento de imágenes
---------------------------

Ahora ya sabes cómo vigilar y corregir el desplazamiento de las imágenes, pero hay un problema importante con este enfoque que hemos pasado por alto hasta ahora. Si cada usuario de OpenStreetMap ajusta las imágenes de forma diferente, todo el mundo estará mapeando con fondos ligeramente diferentes.  

Imagina que estás mapeando una pequeña ciudad y te das cuenta de que las imágenes de Bing están desplazadas 15 metros hacia el norte. Así que ajustas las imágenes y las utilizas para cartografiar toda la ciudad con precisión. Pero entonces otra persona quiere añadir algo al mapa, así que descarga los datos y carga las imágenes de Bing, pero no conoce el desplazamiento de las imágenes que has descubierto. Pensará que algo está mal y que todos los objetos de la ciudad están mal colocados por 15 metros, y empezará a moverlos, lo cual no es correcto. Esto puede ser desastroso para los datos cartográficos de la ciudad.  

Por esta razón, es importante que todos los usuarios conozcan el desplazamiento de las imágenes y que lo comprueben siempre antes de cartografiar una zona. Para ayudar con este problema, algunas personas inteligentes crearon un complemento que permite a los usuarios guardar la información de desplazamiento en una base de datos y compartirla con otros. Veamos cómo funciona:  

- Abre el menú de Preferencias en JOSM y haz clic en la pestaña Complementos.![JOSM plugins tab][]{: height="24px"}  

- Busca el complemento llamado "imagery_offset_db" y marca la casilla junto a él.  

![Imagery_offset_db plugin][]

- Haz clic en Aceptar. Deberás reiniciar JOSM para finalizar la instalación del complemento.  

De la misma manera que se pueden guardar los desplazamientos como marcadores, este complemento te permite guardar los desplazamientos en una base de datos central y acceder a los desplazamientos que otros usuarios han creado. Por lo tanto, si un mapeador crea un desplazamiento de imágenes en un área, otros usuarios pueden utilizar exactamente el mismo desplazamiento para mapear.  

Cuando uses capas de imágenes aéreas, deberías comprobar SIEMPRE si existen desplazamientos y, cuando crees tu propio desplazamiento, deberías guardarlo SIEMPRE en esta base de datos.  


Agregar desplazamiento de imágenes de la base de datos
------------------------------------

Cuando añadas una capa de imágenes, el nuevo complemento te avisará de que debes comprobar la base de datos de imágenes en busca de un desplazamiento existente. Verás un ícono con un signo de exclamación rojo en la parte superior de JOSM, así:  

![Imagery offset notification][]

- Haz clic en el botón y el complemento se comunicará con la base de datos para ver si existen desplazamientos en esta zona.  
- Aquí hemos descargado los datos de OSM y las trazas de GPS en Kuta, Bali, Indonesia. En este caso, hemos encontrado un desplazamiento existente. Haz clic en él para aplicarlo al mapa.  

![Offset in Kuta bali][]

- Esto hace que la capa de imágenes se desplace. Sin embargo, cuando añadimos un desplazamiento ajeno como este, debemos comprobar que es válido comparándolo con las trazas del GPS.  

![Comparing imagery offset from GPS tracks][]

- Podemos ver que la capa de imágenes está de hecho desalineada. No queremos que otros usuarios utilicen este desplazamiento, así que debemos marcarlo como incorrecto en la base de datos. Haz clic de nuevo en el botón "Desplazamientos" (ya no tendrá un signo de exclamación rojo).  

![Offsets button][]

- Esta vez, cuando se abra el cuadro de diálogo, haz clic con el botón derecho del ratón en el desplazamiento y haz clic en "Rechazar desplazamiento".  

![Deprecate offset][]

- Haz clic en "Sí" para confirmar.  
- Tendrás que introducir una razón para eliminar este desplazamiento.  

![Deprecate reason][]


Agregar desplazamiento de imágenes a la base de datos
------------------------------------

Ahora que hemos marcado el desplazamiento de este usuario como "obsoleto", debemos agregar un desplazamiento mejorado a la base de datos.  

1. Haz clic en el botón "Ajustar el desplazamiento de las imágenes". ![Adjust imagery offset button][]{: height="24px"}  
2. Ajusta las imágenes para que coincidan con las trazas del GPS. 3. Haz clic en Aceptar en el cuadro.  
3. Ahora ve a Desplazamiento ‣ Almacenar desplazamiento de imágenes...  
![Store imagery offset][]
4. Introduce una descripción del desplazamiento en el cuadro que se abre.  
![Offset description][]
5. Haz clic en Aceptar. Tu desplazamiento se guardará en la base de datos.  
6. Ahora vamos a ocultar la capa del GPS y a mirar los datos de OSM frente a las imágenes correctamente colocadas.  

![Corrected imagery][]

¡Oh, no! Alguien mapeó esta zona con imágenes mal alineadas, por lo que la zona no está correctamente mapeada. Esto tomará algún tiempo para arreglar.


Sitio web de la base de datos de desplazamiento de imágenes
--------------------------------

Por último, para obtener más información sobre la base de datos de desplazamientos, puedes visitar el sitio web en [http://offsets.textual.ru/](http://offsets.textual.ru/). En ella se enumeran todos los desplazamientos que se han cargado en la base de datos y también cuenta con un interesante mapa que visualiza la ubicación de los desplazamientos, como puede verse aquí:  

![http://offsets.textual.ru/][]

> Una última cosa que hay que recordar es que las imágenes pueden no estar desplazadas a la misma distancia en todas partes. Esto ocurre especialmente en regiones donde hay muchas colinas y montañas. Por lo tanto, si las imágenes parecen estar desplazadas de forma diferente en distintas zonas, tendrás que volver a moverlas.  

Resumen
--------

Cuando se está empezando con OpenStreetMap, no hay que preocuparse demasiado por el desfase de las imágenes. Pero si ves que las ediciones de otro cartógrafo parecen estar desalineadas con respecto a las imágenes, siempre debes considerar que puede haber un desplazamiento antes de empezar a cambiar sus objetos. Y si aún no estás preparado para lidiar con los desfases, recuerda que es mejor mapear un área con 20 o 30 metros de desfase que no mapearla en absoluto. Pero siempre que sea posible, recuerda que puede producirse un desplazamiento de las imágenes y utiliza los pasos de este capítulo para corregirlo cuando sea necesario.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










