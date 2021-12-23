---
layout: doc
title: Complemento Opendata - datos de una hoja de cálculo
permalink: /es/josm/opendata-plugin/
lang: es
category: josm
---

Complemento OpenData - usar datos de una hoja de cálculo
============


- TDC
{:toc}

Esta guía describe cómo añadir datos a OpenStreetMap que pueden estar en forma de hoja de cálculo, probablemente obtenidos por un estudio de campo utilizando una herramienta como ODK collect o Kobo collect. 

**Nota: si los datos que piensas añadir a OpenStreetMap se pueden denominar "importación", debes consultar la página [Wiki Importar Guías de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Import/Guidelines). En caso de duda, lo mejor es consultar primero**.


Instalar el Complemento Opendata
--------------------------

Si aún no lo ha hecho, instale este complemento siguiendo las instrucciones en [Complementos JOSM](/es/josm/josm-plugins). 

![Opendata][]

Una vez instalado, puede hacer clic en ![Preferencias Opendata][]   
para acceder a cualquiera de los módulos más específicos.  

![Opendata modules][]

Esta guía está utilizando la funcionalidad básica, y no se está cargando ningún módulo.

Preparar la hoja de cálculo  
-------------------------

La página wiki en <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData> proporciona información más detallada sobre los formatos que se pueden utilizar. Para nuestros propósitos estamos asumiendo que la hoja de cálculo ha sido descargada y pasada a nosotros en la propiedad **.xlsx** que no se cargará en el complemento de opendata. 

- Abra la hoja de cálculo en un programa de código abierto como LibreOffice, que está disponible para la mayoría de los sistemas operativos <http://www.libreoffice.org/>, 
- y luego guárdela en un formato de código abierto. Nuestra hoja de cálculo que era **tiendas.xlsx** se convierte en **tiendas.ods**. 

Aunque ahora es posible cargar la hoja de cálculo en josm, es mejor realizar otras modificaciones para facilitar el proceso antes de hacerlo. 

### latitud & longitud

El complemento Opendata es muy bueno para extraer la latitud y la longitud de las hojas de cálculo, pero si tiene alguna duda es mejor que cambie los títulos de las columnas a un formato más sencillo; 

![latitude longitude][]

se vuelve;

![latitude longitude corrected][]

### Llave y Valor

#### La etiqueta nombre

Nuestro objetivo ahora es modificar la hoja de cálculo para que la información tenga el formato esperado por OpenStreetMap. Los encabezamientos de las columnas serán los valores **Key**, y los datos de la hoja de cálculo se convertirán en el elemento **Value**. Para nuestra hoja de cálculo simple, modifique el encabezamiento de la primera columna de **Name_of_the_shop** a **name**. Utilizando el formato clave=valor, nuestra primera línea de la hoja de cálculo se convierte ahora en 
**name=Tony's Supermarket**

Si su hoja de cálculo tiene más de un nombre, como un **local name** o un **official name**, consulte la página wiki en <https://wiki.openstreetmap.org/wiki/Names> que enumera muchas alternativas posibles para que sus actualizaciones en OpenStreetMap puedan contener todos los nombres que probablemente se utilicen o busquen. 

#### Columnas sin un encabezado

Si elimina el encabezado de una columna, pero mantiene los datos debajo de ella, entonces los datos quedan efectivamente ocultos para JOSM. 

![opendata 1][]

#### Columnas con datos de diferentes claves

![opendata mixed][]

La persona que diseña la encuesta y la que la lleva a cabo no suelen conocer las etiquetas y los valores que han evolucionado en OpenStreetMap. La columna **shop** de mi hoja de cálculo contiene en realidad datos de dos etiquetas diferentes, y la hoja de cálculo deberá modificarse. El título de la columna **Tipe of shop** puede cambiarse por **shop**, para los siguientes datos; 
shop=supermarket 
shop=convenience 
shop=hairdresser 

pero **restaurant** y **fast_food** son de la clave **amenity**.

Hay que insertar una nueva columna con el título **amenity**, y mover los datos, de modo que nuestra hoja de cálculo tenga ahora este aspecto; 

![opendata shop amenity][]

#### sub etiquetas

El encabezado de la columna **Does_the_shop_have_toilet_faci** se ha abreviado durante el proceso de encuesta, y originalmente decía **Does the shop have toilet facilities?**. 

Aunque existe una etiqueta independiente para los baños, que suele añadirse a un nodo dentro de un edificio, en realidad se refiere a los baños accesibles al público. Si realizamos nuestro propio estudio, sabemos exactamente lo que se pretendía con la pregunta y la respuesta, pero si se trata de información que nos han pasado, probablemente habrá que consultar lo que se pretendía. También es muy útil poder cargar las preguntas del estudio en un teléfono y realizar un "simulacro" de estudio para poder ver la disposición de las preguntas. Es necesario leer detenidamente la página wiki en <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets> y estudiar la encuesta original antes de modificar la hoja de cálculo. En particular, la entrada de la wiki contiene la información 

- *Por favor, no utilice toilet=yes (singular). En general, se ruega que no se mapeen los baños que no son inaccesibles al público. Muchos edificios tienen baños en su interior para los trabajadores o los propietarios, pero su mapeo podría crear conflictos innecesarios o expectativas poco realistas. Utiliza toilets=no para los lugares en los que podrías esperar encontrar un baño utilizable (por ejemplo, una estación de tren o el inicio de un sendero) en los que no hay baños públicos disponibles.* 

Siguiendo los consejos de la wiki lo mejor posible, mi hoja de cálculo modificada para la información sobre los baños dice ahora; 

![opendata toilets][]


He borrado el encabezado de varias columnas para que los datos no sean visibles cuando realice la edición en JOSM. 

Cargando la hoja de cálculo en JOSM
---------------------------------

Haz clic en ![josm abrir][], navega hasta donde esté guardada tu hoja de cálculo y ábrela dentro de JOSM. 

![opendata pop up][]  

Es posible que aparezca una ventana emergente pidiéndole que confirme el "método de proyección" utilizado al recoger los datos. El complemento Opendata intentará calcular el "método de proyección" utilizado y lo presentará como la opción más probable. A no ser que el topógrafo haya modificado la configuración, lo más sensato es aceptar la proyección sugerida y comprobar al editarla que los puntos creados aparecen en las ubicaciones más probables. 

![opendata spreadsheet loaded][]

¡Enhorabuena! Has hecho todo el trabajo duro y estás casi listo para actualizar OpenStreetMap con tus nuevos y bonitos datos de la encuesta. 

Usando el complemento ToDo
----------------------

Dentro de JOSM seleccione todos los elementos añadidos por su hoja de cálculo, ya sea por; 

- desplácese hasta que todos sean visibles, luego arrastre el ratón desde la parte superior izquierda a la inferior derecha mientras mantiene pulsado el botón izquierdo del ratón, o 
- utilice **Ctrl+f** para realizar una búsqueda. He buscado por **nombre**, ya que aparece en mis 5 encuestas. 

asegúrese de haber seleccionado todas sus encuestas - hay cinco encuestas en mi hoja de cálculo y necesita tener 5 objetos seleccionados. 

![5 selected][]

En el panel del complemento ToDo, haga clic en **Añadir**. 

![opendata todo add][]

y la lista de elementos a añadir debería aparecer en el panel. 

![opendata todo loaded][]

Cargue los datos OpenStreetMap como una capa independiente
-------------------------------------------

Haz doble clic en el elemento superior de su lista ToDo, lo que lo centrará en tu panel de edición, y haz clic en el icono ![descargar][].

Cuando aparezca la ventana de diálogo de descarga, asegúrese de poner una marca en ![descargar nueva capa][] (abajo a la izquierda en la siguiente captura de pantalla) para que sus datos OSM no se descarguen en sus datos de la hoja de cálculo.

![download dialog][]


Compare los datos entre las capas
------------------------------------

Asegúres de comprobar cuidadosamente los datos que tiene en su hoja de cálculo con los datos existentes en OpenStreetMap. Hay formas de copiar etiquetas, o partes de etiquetas (mire en los menús **Herramientas** y **Más herramientas** de JOSM, o lea los capítulos anteriores dentro de LearnOSM) entre las capas. En muchos casos usted estará fusionando datos nuevos con datos existentes. Compruebe cuidadosamente los datos, si es necesario verificando el historial y la fuente de las diferentes características - siempre es posible que los datos dentro de OpenStreetMap sean más recientes o más precisos que los datos de su hoja de cálculo. 

Cuando haya actualizado la información de una línea de la hoja de cálculo, utilice el botón **Marcar** del complemento ToDo para pasar al siguiente elemento - puede que tenga que descargar más datos de OSM si el siguiente elemento está fuera del área ya descargada. 


[Opendata]: /images/josm/opendata-plugin.png
[Opendata preferences]: /images/josm/opendata-preferences.png
[Opendata modules]: /images/josm/opendata-modules.png
[latitude longitude]: /images/josm/opendata-latitude-longitude.png
[latitude longitude corrected]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm open]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 selected]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[download]: /images/josm/josm-download-button.png
[download dialog]: /images/josm/josm_download-dialog.png
[download new layer]: /images/josm/download-as-new-layer.png

