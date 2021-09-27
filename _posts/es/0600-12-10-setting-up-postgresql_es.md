---
layout: doc
title: Configurando PostgreSQL
permalink: /es/osm-data/postgresql/
lang: es
category: osm-data
---

PostgreSQL y PostGIS
====================


En este capítulo veremos cómo configurar PostgreSQL en Windows y cómo crear una base de datos en la que pueda almacenar datos geográficos. Utilizaremos el software de código abierto SIG QGIS en este capítulo, por lo que será útil si ya está familiarizado con él. En el siguiente capítulo, veremos cómo importar datos de OpenStreetMap a una base de datos PostgreSQL.  

Instalando PostgreSQL y PostGIS
----------------------------------

En esta sección instalaremos PostgreSQL y luego agregaremos las extensiones espaciales de PostGIS. Esto es bastante fácil de configurar con el instalador de un clic. Navegue su navegador web al sitio web de PostgreSQL y la página de descarga <http://www.postgresql.org/download/>  

![postgresql website][]

Desde aquí puede encontrar instrucciones de instalación para diferentes sistemas operativos. Haga clic en el enlace "**Windows**".  
Esta página explica lo que hará el instalador de un clic. Instalará tres componentes diferentes:  

* **Servidor PostgreSQL**: el software de la base de datos, el componente central  
* **pgAdmin 4**: La interfaz gráfica para gestionar sus bases de datos  
* **StackBuilder**: una herramienta para agregar aplicaciones adicionales; usaremos esto para agregar las extensiones PostGIS  

Haga clic en **Descargar**.  

![postgresql download][]

Verá varias opciones de instalador para diferentes versiones del software PostgreSQL. Descargue la versión más reciente para su versión de Windows.

![postgresql version][]

Cuando haya terminado de descargar, ejecute el instalador de un clic.  

![install 1][]

Haga clic en "**Siguiente**" para navegar por el asistente de instalación. Las opciones predeterminadas deberían estar bien. Deberá proporcionar una contraseña para el primer usuario de la base de datos (el usuario es postgres). Este usuario tiene privilegios de superusuario, lo que significa que puede hacer lo que quiera, ¡así que no olvide la contraseña que usa!  

> Puede crear tantas bases de datos como desee con Postgresql. Es posible que desee una base de datos para sus datos geográficos y bases de datos separadas para otros proyectos en los que está trabajando. Y es posible que desee que diferentes personas tengan diferentes tipos de acceso a estas bases de datos. Para este propósito, cada base de datos que cree utiliza el concepto de ** usuarios ** y ** roles **. Una base de datos siempre debe ser propiedad de un usuario y, por lo general, ese usuario necesitará una contraseña para realizar cambios en la base de datos. A los usuarios adicionales se les puede otorgar permiso para acceder a una base de datos, y se les puede dar ciertos roles. Por ejemplo, es posible que desee un usuario de la base de datos que solo pueda leer información de la base de datos, pero no pueda cambiarla. O puede que desee un usuario que pueda agregar datos, pero que no tenga permiso para eliminarlos. Con usuarios y roles, esto es posible. Por ahora no nos preocuparemos demasiado por esto, solo recuerde que su base de datos es propiedad de un ** usuario **, y para acceder a la base de datos necesitará el nombre y la contraseña del usuario. El primer usuario que creamos (llamado postgres) es un ** superusuario **, lo que significa que tienen permiso para hacer todo con las bases de datos.  

Después de hacer clic en el asistente y aceptar las opciones de configuración predeterminadas, el asistente instalará todo por usted. Puede tomar unos minutos.  

Cuando finalice la instalación, el asistente le preguntará si desea iniciar StackBuilder, que es la utilidad que nos permitirá instalar PostGIS. Asegúrese de que la casilla esté marcada antes de hacer clic en "**Finalizar**".  

![install 2][]

Ahora hemos instalado con éxito PostgreSQL y necesitamos agregar las extensiones de PostGIS. Cuando se abra el asistente de StackBuilder, seleccione su instalación de PostgresSQL en el menú desplegable y haga clic en **Siguiente**. Se verá algo como esto:  

![install 3][]

Abra la pestaña "Extensiones espaciales" y marque la casilla junto a PostGIS. Al momento de escribir este artículo, la versión más reciente de PostGIS es 2.1.  

![install 4][]

Haga clic en **Siguiente** para descargar las extensiones e instalarlas. Cuando se le solicite, haga clic en "**Acepto**" para aceptar los términos y condiciones.  

El instalador de PostGIS hará más preguntas, pero generalmente las opciones predeterminadas están bien. Puede decirle que cree la primera base de datos automáticamente, pero a continuación aprenderemos cómo hacerlo nosotros mismos. Para comenzar la instalación de PostGIS, deberá proporcionar la contraseña de Postgres que creó cuando instaló PostgreSQL.  

![install 5][]

Si se le solicita que registre la variable de entorno **GDAL_DATA**, haga clic en "**Sí**".  

![install 6][]

Cuando se complete la instalación, haga clic en "**Cerrar**" y luego en "**Finalizar **".  

Creando una Base de Datos
--------------------

Ahora que hemos instalado todo el software necesario, crearemos una base de datos. Utilizaremos pgAdmin 4, que es un cliente de base de datos gráfico que es útil para consultar y modificar
bases de datos.  

![pgadmin3][]

PgAdmin 4 es el cliente oficial de PostgreSQL y le permite utilizar el lenguaje SQL para manipular sus tablas de datos. También es posible crear y manipular bases de datos desde la línea de comandos, pero por ahora, pgAdmin 4 es una forma fácil de empezar.  

Abra pgAdmin 4. Debería estar en el Menú de Inicio bajo Todos los Programas -> PostgreSQL 9.3 > pgAdmin 4.  

![pgadmin3 start][]

En el panel de la izquierda debajo de Servidores, haga clic derecho donde dice PostgreSQL y haga clic en "**Conectar**".  

![postgresql connect][]

Ingrese la contraseña de usuario de postgres que creó cuando instaló el software. Recuerde que el nombre de usuario y la contraseña son necesarios para que pueda crear y acceder a una base de datos.  

![enter password][]

Haga clic derecho en **Bases de datos** y seleccione **Nueva base de datos** ...  

![new database][]

Debe ingresar algunos datos para crear la nueva base de datos: nombre y propietario. En la pestaña Propiedades, asigne un nombre a la nueva base de datos. En este ejemplo, nombramos nuestra base de datos gisdb. También deberíamos darle a nuestra base de datos un propietario. Como solo tenemos un usuario en este momento, proporcionemos a nuestra base de datos el propietario de postgres. (Nota: por razones de seguridad, generalmente es una buena idea crear usuarios sin permiso de superusuario, pero por ahora no nos preocuparemos por esto).  

![new database form][]

<! - En la pestaña Definición, mantenga los valores predeterminados, pero al lado de Plantilla seleccione template_postgis. Esto creará nuestra base de datos con las columnas espaciales adecuadas. -->

Haga clic en **Aceptar** para crear la base de datos. Ahora verás tu base de datos listada en "**Bases de datos**". Ahora necesitamos ejecutar un comando para habilitar la base de datos con las extensiones de PostGIS. Haga clic en ![botón sql][]{: height="24px"} en la parte superior de PgAdmin 4.  



En la ventana de consulta, escriba:  

**CREATE EXTENSION postgis;**  

Luego haga clic en el botón "**Ejecutar consulta**".  

![postgis command][]

Cargar Datos de Muestra (opcional)
---------------------------

Si hasta ahora se siente cómodo y está familiarizado con QGIS, sígalo mientras cargamos algunos datos en nuestra nueva base de datos. Para hacer esto, utilizaremos una utilidad que convierte los archivos de forma y los carga en la base de datos.  

Asegúrese de que su nueva base de datos está seleccionada en el panel de la izquierda y vaya a **Complementos -> Cargador PostGIS Shapefile and DBF 2.x**.

![shapefile loader][]

- Haga clic en "**Agregar archivo**" y busque un archivo de forma en su sistema de archivos.
- Si no tiene ningún archivo de forma, puede descargar una muestra [aquí](/files/buildings_sample.zip).
- Una vez que haya seleccionado un archivo, haga clic en "**Importar**". Si todo transcurre sin problemas, la salida mostrará "**Importación de Shapefile completada**".

![add shapefile][]

Ahora carguemos los datos de nuestra base de datos en la aplicación QGIS. Si no tiene QGIS, puede descargarlo en el [sitio web de QGIS](http://www.qgis.org/site/forusers/download.html).  

- Abra QGIS y haga clic en el botón ![qgis add postgis button][]{: height="24px"}.  
- En "Conexiones" en la parte superior, haga clic en "**Nuevo**".  
- Dé un nombre a la nueva conexión. En la base de datos, escriba **gisdb** (o lo que sea que haya denominado su base de datos). Ingrese el nombre de usuario postgres y su contraseña a continuación.  

![connection settings][]

- Haga clic en **Aceptar** para guardar la configuración de conexión. Luego haga clic en "Conectar" para conectarse a su servidor PostgreSQL. Es posible que deba ingresar su nombre de usuario y contraseña nuevamente.  
- Si todo tiene éxito, verá la capa del archivo de forma (o varias capas con diferentes tipos de características) que cargó en la base de datos disponible aquí. Seleccione una capa y haga clic en "**Agregar**" para agregarla a su mapa.  

![your data layer][]

Cuando agregue la capa, deberá seleccionar un sistema de coordenadas para mostrar los datos. Lo más probable es que desee seleccionar WGS 84, que es el sistema de coordenadas que utiliza OpenStreetMap.  

> La capa se comporta igual que si hubiera cargado un archivo de forma directamente en QGIS. La única diferencia es que si edita la capa, los cambios se guardarán en su base de datos.  

Resumen
-------

Ahora que ha visto cómo configurar PostgreSQL y PostGIS, así como cómo crear una nueva base de datos, está listo para probar las utilidades que nos permiten importar datos OSM sin procesar en una base de datos. Echaremos un vistazo a esto en el [próximo capítulo](/es​/osm-data/osm2pgsql).  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







