---
layout: doc
title: Configurando PostgreSQL
permalink: /es/osm-data/postgresql/
lang: es
category: osm-data
---

PostgreSQL y PostGIS
====================


En este capítulo veremos cómo configurar PostgreSQL en Windows y cómo crear una base de datos en la que puedas almacenar datos geográficos. Utilizaremos el *software* SIG de código abierto QGIS en este capítulo, por lo que será útil si ya estás familiarizado con él. En el siguiente capítulo, veremos cómo importar datos de OpenStreetMap a una base de datos PostgreSQL.   

Instalar PostgreSQL y PostGIS
----------------------------------

En esta sección instalaremos PostgreSQL y luego agregaremos las extensiones espaciales de PostGIS. Esto es bastante fácil de configurar con el instalador de un clic. Navega con tu navegador web al sitio web de PostgreSQL y la página de descarga <http://www.postgresql.org/download/>.   

![postgresql website][]

Desde aquí puedes encontrar instrucciones de instalación para diferentes sistemas operativos. Haz clic en el enlace "**Windows**".   
Esta página explica lo que hará el instalador de un clic. Instalará tres componentes diferentes:   

* **Servidor PostgreSQL**: El *software* de la base de datos, el componente principal.  
* **pgAdmin 4**: La interfaz gráfica para administrar tus bases de datos.  
* **StackBuilder**: Una herramienta para agregar aplicaciones adicionales; la usaremos para agregar las extensiones PostGIS.   

Haz clic en **Descargar**.   

![postgresql download][]

Verás varias opciones de instalador para diferentes versiones del *software* PostgreSQL. Descarga la versión más reciente para tu versión de Windows.

![postgresql version][]

Cuando termine de descargarse, ejecuta el instalador de un clic.   

![install 1][]

Haz clic en "**Siguiente**" para navegar por el asistente de instalación. Las opciones predeterminadas deberían estar bien. Deberás proporcionar una contraseña para el primer usuario de la base de datos (el usuario es postgres). Este usuario tiene privilegios de superusuario, lo que significa que puede hacer lo que quiera, ¡así que no olvides la contraseña que uses!   

> Puedes crear tantas bases de datos como quieras con Postgresql. Es posible que desees una base de datos para tus datos geográficos y bases de datos separadas para otros proyectos en los que estés trabajando. Y puede que quieras que diferentes personas tengan diferentes tipos de acceso a estas bases de datos. Para este propósito, cada base de datos que crees utiliza el concepto de **usuarios** y **roles**. Una base de datos siempre debe ser propiedad de un usuario y, por lo general, ese usuario necesitará una contraseña para realizar cambios en la base de datos. A los usuarios adicionales se les puede otorgar permiso para acceder a una base de datos y se les pueden asignar ciertos roles. Por ejemplo, es posible que desees un usuario de la base de datos que solo pueda leer información de la base de datos, pero no pueda cambiarla. O puede que quieras un usuario que pueda agregar datos, pero que no tenga permiso para eliminarlos. Con usuarios y roles, esto es posible. Por ahora no nos preocuparemos demasiado por esto; solo recuerda que tu base de datos es propiedad de un **usuario** y, para acceder a la base de datos, necesitarás el nombre y la contraseña del usuario. El primer usuario que creamos (llamado postgres) es un **superusuario**, lo que significa que tiene permiso para hacer todo con las bases de datos.   

Después de hacer clic en el asistente y aceptar las opciones de configuración predeterminadas, el asistente instalará todo por ti. Puede tardar unos minutos.   

Cuando finalice la instalación, el asistente te preguntará si deseas iniciar StackBuilder, que es la utilidad que nos permitirá instalar PostGIS. Asegúrate de que la casilla esté marcada antes de hacer clic en "**Finalizar**".  

![install 2][]

Ahora hemos instalado PostgreSQL correctamente y necesitamos agregar las extensiones de PostGIS. Cuando se abra el asistente de StackBuilder, selecciona tu instalación de PostgresSQL en el menú desplegable y haz clic en **Siguiente**. Se verá algo como esto:   

![install 3][]

Abre la pestaña "Extensiones espaciales" y marca la casilla junto a PostGIS. En el momento de escribir este artículo, la versión más reciente de PostGIS es 2.1.   

![install 4][]

Haz clic en **Siguiente** para descargar las extensiones e instalarlas. Cuando se te solicite, haz clic en "**Acepto**" para aceptar los términos y condiciones.   

El instalador de PostGIS te hará más preguntas, pero generalmente las opciones predeterminadas están bien. Puedes indicarle que cree la primera base de datos automáticamente, pero a continuación aprenderemos cómo hacerlo nosotros mismos. Para comenzar la instalación de PostGIS, deberás proporcionar la contraseña de Postgres que creaste al instalar PostgreSQL.   

![install 5][]

Si se te solicita que registres la variable de entorno **GDAL_DATA**, haz clic en "**Sí**".   

![install 6][]

Cuando se complete la instalación, haz clic en "**Cerrar**" y luego en "**Finalizar**".   

Crear una base de datos
--------------------

Ahora que hemos instalado todo el *software* necesario, crearemos una base de datos. Usaremos pgAdmin 4, que es un cliente de base de datos gráfico que es útil para consultar y modificar 
bases de datos.   

![pgadmin3][]

pgAdmin 4 es el cliente oficial de PostgreSQL y te permite utilizar el lenguaje SQL para manipular tus tablas de datos. También es posible crear y manipular bases de datos desde la línea de comandos, pero, por ahora, pgAdmin 4 es una forma fácil de empezar.   

Abre pgAdmin 4. Debería estar en el menú Inicio en Todos los programas -> PostgreSQL 9.3 > pgAdmin 4.   

![pgadmin3 start][]

En el panel de la izquierda, debajo de Servidores, haz clic con el botón derecho donde dice PostgreSQL y haz clic en "**Conectar**".   

![postgresql connect][]

Ingresa la contraseña del usuario postgres que creaste al instalar el *software*. Recuerda que el nombre de usuario y la contraseña son necesarios para que puedas crear y acceder a una base de datos.   

![enter password][]

Haz clic con el botón derecho en **Bases de datos** y selecciona **Nueva base de datos**.   

![new database][]

Debes ingresar algunos datos para crear la nueva base de datos: nombre y propietario. En la pestaña Propiedades, asígnale un nombre a la nueva base de datos. En este ejemplo, llamamos a nuestra base de datos gisdb. También deberíamos darle a nuestra base de datos un propietario. Como solo tenemos un usuario en este momento, asignemos a nuestra base de datos el propietario postgres. (Nota: por razones de seguridad, generalmente es una buena idea crear usuarios sin permiso de superusuario, pero por ahora no nos preocuparemos por esto).   

![new database form][]

<!-- En la pestaña Definición, mantén los valores predeterminados, pero al lado de Plantilla selecciona template_postgis. Esto creará nuestra base de datos con las columnas espaciales adecuadas. -->

Haz clic en **Aceptar** para crear la base de datos. Ahora verás tu base de datos listada en "**Bases de datos**". Ahora necesitamos ejecutar un comando para habilitar la base de datos con las extensiones de PostGIS. Haz clic en ![botón sql][]{: height="24px"} en la parte superior de PgAdmin 4.   



En la ventana de consulta, escribe:   

**CREATE EXTENSION postgis;**  

Luego haz clic en el botón "**Ejecutar consulta**".   

![postgis command][]

Cargar Datos de Muestra (opcional)
---------------------------

Si hasta ahora te sientes cómodo y estás familiarizado con QGIS, sigue estos pasos mientras cargamos algunos datos en nuestra nueva base de datos. Para hacer esto, utilizaremos una utilidad que convierte los archivos shapefile y los carga en la base de datos.   

Asegúrate de que tu nueva base de datos esté seleccionada en el panel de la izquierda y ve a **Complementos -> Cargador de shapefiles y DBF de PostGIS 2.x**.

![shapefile loader][]

- Haz clic en "**Añadir archivo**" y busca un archivo shapefile en tu sistema de archivos.
- Si no tienes ningún archivo shapefile, puedes descargar una muestra [aquí](/files/buildings_sample.zip).
- Una vez que hayas seleccionado un archivo, haz clic en "**Importar**". Si todo transcurre sin problemas, la salida mostrará "**Importación de Shapefile completada**".

![add shapefile][]

Ahora carguemos los datos de nuestra base de datos en la aplicación QGIS. Si no tienes QGIS, puedes descargarlo en el [sitio web de QGIS](http://www.qgis.org/site/forusers/download.html).   

- Abre QGIS y haz clic en el botón ![qgis add postgis button][]{: height="24px"}.   
- En "Conexiones", en la parte superior, haz clic en "**Nueva**".   
- Dale un nombre a la nueva conexión. En "Base de datos", escribe **gisdb** (o el nombre que le hayas dado a tu base de datos). Ingresa el nombre de usuario postgres y tu contraseña a continuación.   

![connection settings][]

- Haz clic en **Aceptar** para guardar la configuración de conexión. Luego, haz clic en "Conectar" para conectarte a tu servidor PostgreSQL. Es posible que debas ingresar tu nombre de usuario y contraseña nuevamente.   
- Si todo tiene éxito, verás la capa del archivo shapefile (o varias capas con diferentes tipos de características) que cargaste en la base de datos disponible aquí. Selecciona una capa y haz clic en "**Añadir**" para agregarla a tu mapa.   

![your data layer][]

Cuando agregues la capa, deberás seleccionar un sistema de coordenadas para mostrar los datos. Lo más probable es que desees seleccionar WGS 84, que es el sistema de coordenadas que utiliza OpenStreetMap.   

> La capa se comporta igual que si hubieras cargado un archivo shapefile directamente en QGIS. La única diferencia es que si editas la capa, los cambios se guardarán en tu base de datos.   

Resumen
-------

Ahora que has visto cómo configurar PostgreSQL y PostGIS, así como cómo crear una nueva base de datos, estás listo para probar las utilidades que nos permiten importar datos OSM sin procesar en una base de datos. Echaremos un vistazo a esto en el [próximo capítulo](/es/osm-data/osm2pgsql).   



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







