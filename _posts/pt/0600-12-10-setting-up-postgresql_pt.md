---
layout: doc
title: Configurar o PostgreSQL
permalink: /pt/osm-data/postgresql/
lang: pt
category: osm-data
---

PostgreSQL e PostGIS
====================


Neste capítulo, veremos como configurar o PostgreSQL no Windows e como criar uma base de dados na qual pode armazenar dados geográficos. Neste capítulo, vamos utilizar o software SIG de código aberto QGIS, pelo que será útil se já estiver familiarizado com ele. No capítulo seguinte, veremos como importar dados do OpenStreetMap para uma base de dados PostgreSQL.  

Instalação do PostgreSQL e do PostGIS
----------------------------------

Nesta secção iremos instalar o PostgreSQL e depois adicionar as extensões espaciais do PostGIS. Isso é bastante fácil de configurar usando o instalador de um clique. Navegue seu navegador web até o site do PostgreSQL e a página de descarregamento <http://www.postgresql.org/download/>  

![postgresql website][]

A partir daqui, pode encontrar instruções de instalação para diferentes sistemas operativos. Clique na hiperligação "**Windows**".  
Esta página explica o que o instalador de 1 clique faz. Ele instalará três componentes diferentes:  

* **PostgreSQL server**: o software da base de dados, o componente central  
* **pgAdmin 4**: a interface gráfica para gerir as suas bases de dados  
* **StackBuilder**: uma ferramenta para adicionar aplicações adicionais; utilizá-la-emos para adicionar as extensões PostGIS  

Clique em **Descarregar**.  

![postgresql download][]

Você verá várias opções diferentes do instalador para diferentes versões do software PostgreSQL. Descarregue a versão mais recente para a sua versão do Windows.

![postgresql version][]

Quando o descarregamento estiver concluído, execute o instalador com um clique.  

![install 1][]

Clique em "**Seguinte**" para navegar pelo assistente de instalação. As opções predefinidas devem estar corretas. Terá de fornecer uma palavra-passe para o primeiro utilizador da base de dados (o utilizador é postgres). Este utilizador tem privilégios de superutilizador, o que significa que pode fazer tudo o que quiser, por isso não se esqueça da palavra-passe que utilizar!  

> Pode criar tantas bases de dados quantas quiser com o Postgresql. Poderá querer uma base de dados para os seus dados geográficos e bases de dados separadas para outros projetos em que esteja a trabalhar. E pode querer que diferentes pessoas tenham diferentes tipos de acesso a estas bases de dados. Para este efeito, todas as bases de dados que cria utilizam o conceito de **utilizadores** e **funções**. Uma base de dados deve ser sempre propriedade de um utilizador e, normalmente, esse utilizador necessita de uma palavra-passe para poder fazer alterações à base de dados. Pode ser dada permissão a outros utilizadores para acederem a uma base de dados, e podem ser-lhes atribuídas determinadas funções. Por exemplo, pode querer um utilizador da base de dados que apenas possa ler informação da base de dados, mas não a possa alterar. Ou pode querer um utilizador que possa adicionar dados, mas não tenha permissão para os eliminar. Com utilizadores e funções, isto é possível. Por agora, não nos vamos preocupar muito com isto, mas lembre-se que a sua base de dados é propriedade de um **utilizador** e que, para aceder à base de dados, precisa do nome e da palavra-passe do utilizador. O primeiro utilizador que criamos (chamado postgres) é um **superutilizador**, o que significa que tem permissão para fazer tudo com as bases de dados.  

Depois de ter clicado no assistente e aceite as opções de configuração predefinidas, o assistente instalará tudo por si. Poderá demorar alguns minutos.  

Quando a instalação estiver concluída, o assistente perguntar-lhe-á se pretende iniciar o StackBuilder, que é o utilitário que nos permitirá instalar o PostGIS. Certifique-se de que a caixa está selecionada antes de clicar em "**Terminar**".  

![install 2][]

Agora que instalámos com êxito o PostgreSQL, precisamos de adicionar as extensões PostGIS. Quando o assistente do StackBuilder abrir, selecione a sua instalação do PostgresSQL no menu pendente e clique em **Seguinte**. O assistente terá um aspeto semelhante a este:  

![install 3][]

Abra o separador "Extensões espaciais" e assinale a caixa junto a PostGIS. No momento da redação deste documento, a versão mais recente do PostGIS é a 2.1.  

![install 4][]

Clique em **Próximo** para transferir as extensões e instalá-las. Quando solicitado, clique em "**Concordo**" para aceitar os termos e condições.  

O instalador do PostGIS fará mais perguntas, mas geralmente as opções predefinidas estão corretas. Pode dizer-lhe para criar a primeira base de dados automaticamente, mas iremos aprender a fazê-lo nós próprios a seguir. Para iniciar a instalação do PostGIS, terá de fornecer a palavra-passe postgres que criou quando instalou o PostgreSQL.  

![install 5][]

Se lhe for pedido que registe a variável de ambiente **GDAL_DATA**, clique em "**Sim**".  

![install 6][]

Quando a instalação estiver concluída, clique em "**Fechar**" e depois em "**Concluir**".  

Criar uma base de dados
--------------------

Agora que instalámos todo o software necessário, vamos criar uma base de dados. Utilizaremos o pgAdmin 4, que é um cliente gráfico de base de dados que é útil para consultar e modificar
bases de dados.  

![pgadmin3][]

O pgAdmin 4 é o cliente oficial do PostgreSQL e permite-lhe utilizar a linguagem SQL para manipular as suas tabelas de dados. Também é possível criar e manipular bases de dados a partir da linha de comandos, mas, para já, o pgAdmin 4 é uma forma fácil de começar.  

Abra o pgAdmin 4. Ele deve estar no menu Iniciar em Todos os programas -> PostgreSQL 9.3 > pgAdmin 4.  

![pgadmin3 start][]

No painel à esquerda, em Servidores, clique com o botão direito do rato onde diz PostgreSQL e clique em "**Ligar**".  

![postgresql connect][]

Introduza a palavra-passe do utilizador postgres que criou quando instalou o software. Lembre-se de que o nome de utilizador e a palavra-passe são necessários para poder criar e aceder a uma base de dados.  

![enter password][]

Clique com o botão direito do rato em **Bases de dados** e selecione **Nova base de dados**...  

![new database][]

É necessário introduzir algumas informações para criar a nova base de dados: nome e proprietário. No separador Propriedades, dê um nome à nova base de dados. Neste exemplo, chamamos à nossa base de dados gisdb. Também devemos atribuir um proprietário à nossa base de dados. Como neste momento só temos um utilizador, vamos atribuir à nossa base de dados o proprietário postgres. (Nota: por razões de segurança, é normalmente uma boa ideia criar utilizadores sem permissão de superutilizador, mas por agora não nos vamos preocupar com isso).  

![new database form][]

<!-- No separador Definição, mantenha as predefinições, mas ao lado de Modelo selecione template_postgis. Isto criará a nossa base de dados com as colunas espaciais adequadas. -->

Clique em **OK** para criar a base de dados. Verá agora a sua base de dados listada em "**Bases de dados**". Agora, precisamos de executar um comando para ativar a base de dados com as extensões PostGIS. Clique em ![sql button][]{: height="24px"} na parte superior do PgAdmin 4.  



Na janela de consulta, digite:  

**CREATE EXTENSION postgis;**  

Em seguida, clique no botão "**Executar consulta**".  

![postgis command][]

Carregar dados de amostra (opcional)
---------------------------

Se até agora se sentiu confortável e está familiarizado com o QGIS, acompanhe-nos enquanto carregamos alguns dados para a nossa nova base de dados. Para o fazer, vamos utilizar um utilitário que converte shapefiles e os carrega para a base de dados.  

Certifique-se de que a sua nova base de dados está selecionada no painel da esquerda e vá para **Plugins -> PostGIS Shapefile and DBF loader 2.x**.

![shapefile loader][]

-	Clique em "**Adicionar ficheiro**" e localize um shapefile no seu sistema de ficheiros.
-	Se não tiver shapefiles, pode descarregar uma amostra [aqui](/files/buildings_sample.zip).
-	Depois de ter selecionado um ficheiro, clique em "**Importar**". Se tudo correr bem, o resultado será "**Importação de ficheiro de forma concluída**".

![add shapefile][]

Agora vamos carregar os dados da nossa base de dados para a aplicação QGIS. Se não tiver o QGIS, pode descarregá-lo no [sítio Web do QGIS] (http://www.qgis.org/site/forusers/download.html).  

-	Abra o QGIS e clique no botão ![qgis add postgis button][]{: height="24px"}.  
-	Em "Ligações", na parte superior, clique em "**Nova**".  
-	Dê um nome à nova ligação. Em base de dados, escreva **gisdb** (ou o nome que deu à sua base de dados). Introduza o nome de utilizador postgres e a sua palavra-passe abaixo.  

![connection settings][]

-	Clique em **OK** para guardar as configurações de conexão. Em seguida, clique em "Conectar" para se conectar ao seu servidor PostgreSQL. Poderá ter de introduzir novamente o seu nome de utilizador e palavra-passe.  
-	Se tudo correr bem, verá a camada shapefile (ou várias camadas com diferentes tipos de características) que carregou na base de dados disponível aqui. Selecione uma camada e clique em "**Adicionar**" para a adicionar ao seu mapa.  

![your data layer][]

Quando adicionar a camada, terá de selecionar um sistema de coordenadas para apresentar os dados. O mais provável é selecionar WGS 84, que é o sistema de coordenadas utilizado pelo OpenStreetMap.  

> A camada comporta-se da mesma forma como se tivesse carregado um shapefile diretamente no QGIS. A única diferença é que se editar a camada, as alterações serão guardadas na sua base de dados.  

Resumo
-------

Agora que já viu como configurar o PostgreSQL e o PostGIS, bem como criar uma nova base de dados, está pronto para experimentar os utilitários que nos permitem importar dados brutos do OSM para uma base de dados. Iremos abordar este assunto no [próximo capítulo](/pt/osm-data/osm2pgsql).  



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







