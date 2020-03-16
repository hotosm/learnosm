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

Hay muchas funciones disponibles con Osmosis, y puede leer sobre cada una de ellas en detalle en la [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). Sin embargo, muchas de las funciones son bastante complejas y difíciles de entender, especialmente si recién está comenzando con los programas de línea de comandos y OpenStreetMap. Este capítulo servirá para presentar Osmosis, instalarlo en Windows y comenzar con un comando básico de Osmosis.  

Instalar Osmosis
----------------

Al igual que osm2pgsql en el capítulo anterior, necesitaremos descargar y configurar **osmosis** para poder ejecutarlo desde la línea de comandos. El proceso para esto será muy similar a osm2pgsql.  

También necesitará algunos datos OSM sin procesar para trabajar. Si desea seguir los ejemplos de este capítulo, descargue nuestro archivo de muestra [aquí](/files/sample_osmosis.osm.pbf). También puede usar un archivo de datos sin procesar de su elección.  

Siga estos pasos para descargar y preparar Osmosis:  

- Primero, descargue Osmosis [aquí](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).  
- Descomprima la carpeta y colóquela en algún lugar de su sistema donde no se mueva. Tendremos que agregar su ubicación a la ruta del sistema para que pueda ejecutarse desde la línea de comandos.  

![unzip it][]

- Haga clic en el menú de inicio y tipee "system path".  

![system path][]

- Debería ver una opción llamada "Editar las variables de entorno del sistema". Haz click en eso.  

![edit variables][]

- Haga clic en el botón llamado "Variables de entorno".  

![env variables][]

- En la parte inferior encontrará la variable llamada "Ruta" y haga clic en "Modificar ..."  

![find path][]

- Debe agregar el directorio donde se encuentra osmosis.bat a la variable Ruta.  

![edit path][]

- Agregue un punto y coma al final del directorio anterior y luego escriba la ruta completa del directorio de ósmosis. Por ejemplo, si coloca la carpeta **osmosis-latest** directamente en el directorio **C:\\**, la ruta sería:  
	
      C:\osmosis-latest\bin

- Haga clic en Aceptar varias veces para guardar sus nuevos ajustes.  
- **osmosis** deberíamos estar trabajando ahora. Comprobémoslo.  
- Abra el símbolo del sistema de Windows. Puede hacer esto haciendo clic en el menú Inicio y escribiendo "**cmd**". Aparecerá la aplicación del símbolo del sistema y puede presionar Intro o hacer clic en ella.  

![cmd][]

- En la ventana negra de comando que se abre, tipee:  

      osmosis

- Si todo funciona correctamente, debería recibir un mensaje como este:  

![osmosis test][]

- Si no ve un resultado como este, y dice que no puede encontrar la aplicación **osmosis**, entonces es posible que haya ingresado la variable Path incorrectamente.  

Filtrando Datos
---------------

La ósmosis debería funcionar correctamente desde la línea de comandos ahora. Para poder ejecutar las operaciones de ejecución en nuestro archivo de datos, necesitamos cambiar el directorio de trabajo al lugar donde hemos colocado el archivo **sample_osmosis.osm.pbf**. Para simplificar las cosas, hemos colocado este archivo en el directorio **C:\**.  

- Para cambiar el directorio de trabajo en el símbolo del sistema al directorio C:\, escriba el siguiente comando y presione Intro:  

      cd C:\
    
- La solicitud debería cambiar, lo que indica que ahora está en el directorio C: \.  

![cd command][]

Ahora aprendamos nuestro primer comando de Osmosis. Ejecutaremos un comando que filtra todas las escuelas de nuestro archivo grande.  

Para hacer esto, necesitamos decirle a Osmosis algunas cosas. Necesitamos especificar:  

- un archivo de entrada (sample_osmosis.osm.pbf)  
- algunas reglas que especifican que deseamos filtrar  
- un archivo de salida (sacaremos un archivo .osm sin comprimir para poder abrirlo en JOSM)  

El comando que vamos a ejecutar es:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Intente ejecutar este comando en el símbolo del sistema. Cuando termine, debería ver un nuevo archivo en su directorio, llamado ** schools.osm **. Si abrimos el nuevo archivo en JOSM, podemos ver que solo las escuelas se han filtrado del archivo de muestra.  

![schools osm][]

Echemos un vistazo al comando que ejecutamos pieza por pieza para comprender cómo funciona todo. Primero, llamamos al nombre del programa.

      osmosis

A continuación, proporcionamos el archivo de entrada. Recuerde que este archivo es un formato comprimido. **--rbf** es en realidad la abreviatura de **--read-pbf-fast **. Osmosis entiende que el archivo que suministramos después de este indicador es el archivo del que queremos leer.  

      --rbf sample_osmosis.osm.pbf

El siguiente fragmento de nuestro comando dice * - nkv keyValueList = "amenity.school" *. Puede suponer que esto indica que la ósmosis debería filtrar todo con la etiqueta **amenity=school**. **--nkv** es la abreviatura de **--node-key-value**. Este comando indica que Osmosis debería filtrar solo los nodos con las claves y los valores suministrados en la siguiente lista. Además, se pueden agregar conjuntos key.value colocando comas entre ellos.  

      --nkv keyValueList="amenity.school"

Por último, proporcionamos el nombre y el formato del archivo de salida. Usamos la bandera **- wx**, que es la abreviatura de **--write-xml**. Tenga en cuenta que también podríamos usar **-- wb**, que es la contraparte de **--rbf**, si quisiéramos generar los datos nuevamente en formato PBF.  

      --wx schools.osm

Moviendo Hacia Adelante
---------------

El número de tareas de procesamiento que se pueden realizar con Osmosis es enorme, y para obtener más información, es mejor consultar la página [Uso detallado de Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) en la Wiki.  

Una tarea útil es poder dividir un gran archivo OSM sin procesar en partes separadas, ya sea suministrando rectángulos o creando archivos poligonales delimitadores. Puede obtener una base básica en este proceso en la [página de ejemplos de Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

[unzip it]: /images/osm-data/unzip-it.png
[ruta sistema]: /images/osm-data/system-path.png
[modificar variables]: /images/osm-data/edit-environment-variables.png
[variables env]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[modificar ruta]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[prueba osmosis]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[escuelas osm]: /images/osm-data/schools-osm.png


