---
layout: doc
title: Manipulando Datos con Osmosis
permalink: /es/osm-data/osmosis/
lang: es
category: osm-data
---

Manipulando datos con Osmosis
===============================


**Osmosis** es una poderosa herramienta de línea de comandos para manipular y procesar datos **.osm** sin procesar. A menudo se usa para procesar archivos de datos grandes, para dividir archivos OSM en partes más pequeñas y para aplicar un conjunto de cambios para actualizar un archivo existente.  

Hay muchas funciones disponibles con Osmosis, y puedes leer sobre cada una de ellas en detalle en la [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). Sin embargo, muchas de las funciones son bastante complejas y difíciles de entender, especialmente si recién estás comenzando con los programas de línea de comandos y OpenStreetMap. Este capítulo servirá para presentar Osmosis, instalarlo en Windows y comenzar con un comando básico de Osmosis.   

Instalar Osmosis
----------------

Al igual que osm2pgsql en el capítulo anterior, necesitaremos descargar y configurar **osmosis** para poder ejecutarlo desde la línea de comandos. El proceso para esto será muy similar a osm2pgsql.  

También necesitarás algunos datos OSM sin procesar para trabajar. Si deseas seguir los ejemplos de este capítulo, descarga nuestro archivo de muestra [aquí](/files/sample_osmosis.osm.pbf). También puedes usar un archivo de datos sin procesar de tu elección.   

Sigue estos pasos para descargar y preparar Osmosis:   

- Primero, descarga Osmosis [aquí](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).   
- Descomprime la carpeta y colócala en algún lugar de tu sistema donde no se mueva. Tendremos que agregar su ubicación a la ruta del sistema para que pueda ejecutarse desde la línea de comandos.   

![unzip it][]

- Haz clic en el menú de inicio y escribe "ruta del sistema".   

![system path][]

- Deberías ver una opción llamada "Editar las variables de entorno del sistema". Haz clic en ella.   

![edit variables][]

- Haz clic en el botón llamado "Variables de entorno".   

![env variables][]

- En la parte inferior encontrarás la variable llamada "Ruta" y haz clic en "Editar..."   

![find path][]

- Debes agregar el directorio donde se encuentra osmosis.bat a la variable Ruta.   

![edit path][]

- Agrega un punto y coma al final del directorio anterior y luego escribe la ruta completa del directorio de ósmosis. Por ejemplo, si colocas la carpeta **osmosis-latest** directamente en el directorio **C:\\**, la ruta sería:   
	
      C:\osmosis-latest\bin

- Haz clic en Aceptar varias veces para guardar la nueva configuración.   
- **osmosis** debería funcionar ahora. Comprobémoslo.   
- Abre el símbolo del sistema de Windows. Puedes hacerlo haciendo clic en el menú Inicio y escribiendo "**cmd**". Aparecerá la aplicación del símbolo del sistema y puedes presionar Intro o hacer clic en ella.   

![cmd][]

- En la ventana negra de comandos que se abre, escribe:   

      osmosis

- Si todo funciona correctamente, deberías recibir un mensaje como este:   

![osmosis test][]

- Si no ves un resultado como este, y dice que no puede encontrar la aplicación **osmosis**, entonces es posible que hayas ingresado la variable Path incorrectamente.   

Filtrado de datos
---------------

Osmosis debería funcionar correctamente desde la línea de comandos ahora. Para poder ejecutar las operaciones en nuestro archivo de datos, necesitamos cambiar el directorio de trabajo al lugar donde hemos colocado el archivo **sample_osmosis.osm.pbf**. Para simplificar las cosas, hemos colocado este archivo en el directorio **C:\**.   

- Para cambiar el directorio de trabajo en el símbolo del sistema al directorio C:\, escribe el siguiente comando y presiona Intro:   

      cd C:\
    
- La solicitud debería cambiar, lo que indica que ahora estás en el directorio C:\.   

![cd command][]

Ahora aprendamos nuestro primer comando de Osmosis. Ejecutaremos un comando que filtra todas las escuelas de nuestro archivo grande.  

Para hacer esto, necesitamos decirle a Osmosis algunas cosas. Necesitamos especificar:  

- un archivo de entrada (sample_osmosis.osm.pbf)  
- algunas reglas que especifican qué deseamos filtrar   
- un archivo de salida (sacaremos un archivo .osm sin comprimir para poder abrirlo en JOSM)  

El comando que vamos a ejecutar es:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Intenta ejecutar este comando en el símbolo del sistema. Cuando termine, deberías ver un nuevo archivo en tu directorio, llamado ** schools.osm **. Si abrimos el nuevo archivo en JOSM, podemos ver que solo las escuelas se han filtrado del archivo de muestra.   

![schools osm][]

Echemos un vistazo al comando que ejecutamos pieza por pieza para comprender cómo funciona todo. Primero, llamamos al nombre del programa.

      osmosis

A continuación, proporcionamos el archivo de entrada. Recuerda que este archivo está en un formato comprimido. **--rbf** es en realidad la abreviatura de **--read-pbf-fast **. Osmosis entiende que el archivo que proporcionamos después de este indicador es el archivo del que queremos leer.   

      --rbf sample_osmosis.osm.pbf

El siguiente fragmento de nuestro comando dice * - nkv keyValueList = "amenity.school" *. Puedes suponer que esto indica que la ósmosis debería filtrar todo con la etiqueta **amenity=school**. **--nkv** es la abreviatura de **--node-key-value**. Este comando indica que Osmosis debería filtrar solo los nodos con las claves y los valores suministrados en la siguiente lista. Además, se pueden agregar conjuntos key.value colocando comas entre ellos.   

      --nkv keyValueList="amenity.school"

Por último, proporcionamos el nombre y el formato del archivo de salida. Usamos el indicador **- wx**, que es la abreviatura de **--write-xml**. Ten en cuenta que también podríamos usar **-- wb**, que es la contraparte de **--rbf**, si quisiéramos generar los datos nuevamente en formato PBF.   

      --wx schools.osm

Moviendo Hacia Adelante
---------------

El número de tareas de procesamiento que se pueden realizar con Osmosis es enorme y, para obtener más información, es mejor consultar la página [Uso detallado de Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) en la Wiki.   

Una tarea útil es poder dividir un gran archivo OSM sin procesar en partes separadas, ya sea proporcionando rectángulos o creando archivos poligonales delimitadores. Puedes obtener una base básica en este proceso en la [página de ejemplos de Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Examples).   

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png


