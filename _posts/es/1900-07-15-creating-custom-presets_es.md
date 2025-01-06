---
layout: doc
title: JOSM - Creación de preajustes personalizados
permalink: /es/josm/creating-presets/
lang: es
category: josm
---

JOSM: creación de preajustes personalizados
=======================


En el [capítulo anterior](/es/josm/josm-presets) vimos cómo se pueden agregar menús de presets personalizados a JOSM. En este capítulo veremos cómo crear tus propios archivos de preajustes personalizados.  

¡ADVERTENCIA! Este es un tema avanzado ... ¡considérate advertido!  

Introducción a XML
-------------------

Para crear nuestro propio menú de Presets, primero necesitamos entender un lenguaje llamado XML. Si ya estás familiarizado con XML, no dudes en pasar a la siguiente sección.  

XML, que significa "Lenguaje de marcado extensible", es un lenguaje de computadora similar al HTML. La diferencia clave es que XML está diseñado para transportar datos, no mostrarlos. Muchas aplicaciones en Internet usan XML para transmitir datos, incluido OpenStreetMap. XML usa elementos, y cada elemento puede contener elementos secundarios dentro de él. Por ejemplo, imaginemos que queremos crear un archivo XML que contenga datos sobre el menú de un restaurante. Debemos crear un elemento raíz para contener todos los datos sobre nuestro menú. Nuestro elemento raíz tendrá una etiqueta de apertura y cierre, como esta:

      <menu>
      ... cualquier dato que queramos incluir en nuestro menú ...
      </menu>

La información está contenida dentro de un elemento, y dentro de cada elemento puede haber más elementos.  

      <menu>
        <item name=“Hamburgesa”>
          <cost>400</cost>
          <description>Deliciosa hamburguesa de carne</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Arroz frito de Indonesia</description>
        </item>
      </menu>

En este ejemplo, hemos colocado dos elementos &lt;item&gt dentro de nuestro elemento &lt;menu&gt; para describir dos elementos diferentes que están contenidos en el menú. Cada elemento contiene dos elementos más en ellos, &lt;cost&gt; y &lt;description&gt;. Observa también cómo hemos escrito name = "Hamburguesa" dentro de la apertura de etiqueta &lt;item&gt;. Esto se llama un atributo y agrega información sobre el elemento.


### Terminología XML

- **elemento raíz:** el elemento más externo de un documento XML, que describe lo que está contenido  
- **elemento:** cualquier objeto XML, contenido por etiquetas de apertura y cierre, como &lt;item&gt; ... data ... &lt;/item&gt;  
- **etiqueta:** algo contenido entre paréntesis, como &lt;item&gt;.  &lt;item&gt; es la etiqueta de apertura de un elemento, y &lt;/item&gt; Es la etiqueta de cierre. No confundas esto con las etiquetas OSM, que tienen un significado diferente.  
- **atributo:** una información contenida dentro de una etiqueta, como name=“Hamburguesa”  

Usar XML para almacenar y transmitir datos es excelente porque es fácil de entender para las computadoras.  


Archivos preestablecidos JOSM
-------------------

Agreguemos un archivo de presets de muestra en JOSM y analicemos cómo funciona.  

- Descarga el archivo [sample_presets.xml](/files/sample_presets.xml).  
- Luego cárgalo en JOSM como se describe en el [capítulo anterior](/es/josm/josm-presets).  
- Crea una nueva capa y un nuevo objeto.  
- Ve al menú Presets. Habrá un nuevo elemento llamado "Sample Building". Haz clic en él.  

![sample building menu][]

Observa que el formulario que aparece tiene tres campos y cada uno acepta un tipo diferente de entrada. El primer campo, nombre del edificio, acepta una cadena de texto como entrada. El segundo, uso de construcción, tiene un cuadro desplegable. El campo final es una casilla de verificación, lo que significa que solo puede tener uno de dos valores, activado o desactivado.

![sample presets form][]

Ahora veamos el archivo XML que define este formulario preestablecido.

- Busca el archivo XML en tu computadora y ábrelo con un editor de texto. Si estás utilizando Windows, puedes usar el programa Bloc de notas. Si deseas un editor más fácil de usar, puedes descargar la aplicación gratuita Notepad++.  
- El archivo **sample_presets.xml** tiene este aspecto:  

![sample presets file][]

Por ahora, ignoremos las primeras seis líneas y la línea final, y centrémonos en todo lo que se encuentra entre etiquetas &lt;item&gt;

La primera línea se ve así:

      <item name="Sample Building" type="node,closedway">

Esta es la etiqueta de apertura de un elemento que se agrega al menú. Tiene dos atributos, nombre y tipo. El nombre define cómo aparecerá esto en el menú Presets. El tipo limita este preajuste a tipos específicos de objetos. En este caso, el preajuste solo se puede aplicar a puntos y formas, en otras palabras, nodos y formas cerradas. Si intentas aplicar este valor predeterminado a una línea, no funcionará.  

Veamos la siguiente línea:  

      <label text="Building Form" />

Al hacer clic en el menú y abrir el formulario de muestra, en la parte superior verás el texto "Formulario de creación". Este es el texto definido en esta línea. Esto define una elemento &lt;label&gt;, que simplemente muestra texto en el formulario. El texto está definido por el atributo *text="some text"*.  

Baja unas pocas líneas y encuentra esto:  

      <key key="building" value="yes" />

Esta es una de las etiquetas que se aplicarán al objeto que hemos seleccionado. Debido a que utiliza el elemento &lt;key&gt;, la etiqueta OSM que se proporciona aquí se aplicará automáticamente cuando se elija el valor predeterminado. Por lo tanto, este objeto obtendrá automáticamente la etiqueta *building=yes*.  

La siguiente línea es un poco diferente, usando el &lt;text&gt; elemento.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

El elemento &lt;text&gt; crea un campo en blanco. Cuando se crea el formulario en JOSM, el usuario podrá completar el campo vacío. Como el atributo *delete_if_empty="true"* está establecido, no se agregará ninguna etiqueta si el usuario deja este campo vacío.  

El cuadro desplegable del formulario se define en la siguiente línea:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

Un cuadro desplegable se define mediante el elemento &lt;combo&gt;. Al igual que con el elemento &lt;text&gt, el atributo *key* define la clave de etiqueta. El valor se elige de una lista de posibles *valores*. El atributo *display_values​​* te permite elegir diferentes nombres para mostrar en el cuadro desplegable, que pueden ser más fáciles de entender que los valores de etiqueta OSM.  

Por último, veamos la línea que define la casilla de verificación.  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

El elemento &lt;check&gt; define la casilla de verificación. El atributo *default="off"* indica que la casilla estará desmarcada por defecto. Los atributos restantes que ya has visto.  

Crear su propio archivo de preajustes
------------------------------

La mejor manera de crear tu propio archivo de preajustes es tomar uno que ya existe y manipularlo para cumplir tus objetivos. Siéntete libre de editar este archivo de muestra y experimenta con él para aprender los conceptos básicos. Solo recuerda que cada vez que lo guardes, deberás reiniciar JOSM para cargar los cambios.  

Antes de comenzar a crear tus propios ajustes preestablecidos, debes pensar detenidamente sobre las etiquetas que usarás. Inventar nuevas etiquetas es otro tema completamente diferente. En general, debes utilizar las etiquetas OSM existentes cuando existan. La mayoría de las etiquetas existentes se enumeran en la página [Elementos del mapa en el Wiki de OSM] (http://wiki.openstreetmap.org/wiki/Map_Features).  

Este archivo de muestra contiene la mayoría de los elementos que encontrarás en un archivo de preajustes JOSM; no hay muchos elementos de formulario. Si deseas experimentar con un archivo de presets más complejo, descarga el archivo [dhaka_presets.xml](/files/dhaka_presets.xml) aquí.  

Además, se puede encontrar una explicación detallada de todos los elementos posibles [aquí] (http://josm.openstreetmap.de/wiki/TaggingPresets).  

¡Buena suerte!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png