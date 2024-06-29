---
layout: doc
title: osm2pgsql
permalink: /pt/osm-data/osm2pgsql/
lang: pt
category: osm-data
---

osm2pgsql
==========


No capítulo anterior vimos como configurar o Postgresql com o PostGIS no Windows e como configurar uma base de dados e carregá-la com dados shapefile. Para colocar os dados do OpenStreetMap numa base de dados, pode obter os dados em formato shapefile e usar o carregador de shapefile, mas isso pode deixá-lo sem todos os dados que deseja. Neste capítulo vamos aprender a usar o **osm2pgsql**, um programa de linha de comandos para carregar dados OSM em bruto para uma base de dados PostGIS.  

Iremos percorrer os passos para configurar o osm2pgsql no Windows, embora os passos devam ser praticamente os mesmos noutro sistema operativo, assumindo que configurou corretamente as suas bases de dados PostGIS.  

Obter o osm2pgsql
-------------

Para descarregar a versão Windows do osm2pgsql, aceda a <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Descarregue o ficheiro com o nome **osm2pgsql.zip**  
- Descompacte o ficheiro no seu sistema. Deve mover a pasta descompactada para um local para onde não a vá mover mais tarde, porque precisamos de adicionar a sua localização ao caminho do sistema.  

![unzip it][]

- No diretório osm2pgsql que descompactou está um ficheiro chamado osm2pgsql.exe. Este é um programa que vamos executar para importar os dados, mas para que o Windows o encontre, precisamos de adicionar a sua localização ao caminho do sistema. Clique no menu Iniciar e digite "system path".  

![system path][]

- Deverá ver uma opção chamada "Edit the system environment variables" (Editar as variáveis de ambiente do sistema). Clique nela.  

![edit variables][]

- Clique no botão “**Environment Variables**” (variáveis de ambiente)  

![env variables][]

- Na parte inferior, localize a variável denominada “**Path**” e clique em “**Edit...**”  

![find path][]

- É necessário adicionar o diretório onde se encontra o osm2pgsql.exe à variável Path.  

![edit path][]

- Adicione um ponto e vírgula ao final do diretório anterior e, em seguida, digite o caminho completo do diretório osm2pgsql.exe. Por exemplo, se colocar a pasta **osm2pgsql** diretamente no diretório **C:\\** o caminho seria:  
	
**C:\osm2pgsql\Win32**  

- Clique várias vezes em OK para guardar as novas definições.  
- **osm2pgsql** deve estar a funcionar agora. Vamos verificar.  
- Abra a linha de comandos do Windows. Para isso, clique no menu Iniciar e digite "**cmd**". A aplicação da linha de comandos aparecerá e pode premir Enter ou clicar nela.  

![cmd][]

- Na janela de comando preta que se abre, digite:  

**osm2pgsql**

- Se tudo estiver a funcionar corretamente, deverá receber uma mensagem como esta:  

![osm2pgsql test][]

- Se não vir uma mensagem de erro como esta, e disser que não consegue encontrar a aplicação **osm2pgsql**, então poderá ter introduzido a variável Path incorretamente.  

Obter dados em bruto do OSM
---------------------
Antes de podermos correr o **osm2pgsql** precisamos de ter alguns dados OSM em bruto para importar para uma base de dados. Se ainda não tem um ficheiro **.osm** que possa utilizar, tente descarregar um ficheiro de <https://download.bbbike.org/osm/bbbike/>. Este site aloja muitos extratos OSM para diferentes cidades. Encontre uma cidade para importar e descarregue o ficheiro PBF para ela. Os ficheiros PBF são versões comprimidas dos ficheiros **.osm** normais. Pode utilizar qualquer um dos serviços de extração listados no capítulo sobre [obter dados](/pt/osm-data/getting-data), se pretender os dados em bruto para outra área.  

Obter o ficheiro de estilo
------------------
**osm2pgsql** requer a utilização de um ficheiro de estilo personalizado para definir que etiquetas são incluídas na base de dados durante a importação. Pode descarregar o ficheiro de estilo predefinido [aqui](/files/default.style).  

Importar os dados
-------------------
Abra o PgAdmin III e crie uma nova base de dados com o nome **osm**, tal como fez no capítulo anterior. Para importar os dados, vamos executar o programa **osm2pgsql** através da linha de comandos. 

- Clique no menu Iniciar e digite "cmd" e Enter para abrir a linha de comandos.  

![command prompt][]

Aqui vamos correr a aplicação **osm2pgsql** com várias opções. Precisamos pelo menos de a fornecer com:  

- A localização do ficheiro de dados OSM  
- O nome da base de dados e o nome de utilizador da base de dados  
- O ficheiro de estilo que define quais as etiquetas OSM que serão importadas para a base de dados  

Colocámos o nosso ficheiro OSM no diretório **C:\\** para facilitar este processo.  

- Digite o seguinte comando, substituindo a localização do ficheiro OSM e do ficheiro de estilo pela sua própria localização.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Prima Enter. Se tudo correr bem, o processo deve começar a correr. Pode demorar alguns minutos até que todos os dados sejam carregados na base de dados.  

![osm2pgsql output][]

- Se o ficheiro OSM em bruto for grande, poderá ser necessário adicionar memória adicional ao processo de importação osm2pgsql. Para o fazer, adicione o seguinte ao comando:  

      --cache 600

Testar
-----------

Podemos testar se a importação foi bem sucedida e visualizar os dados na nossa base de dados utilizando o QGIS.  

- Abra o QGIS e clique no botão "Add PostGIS Layers" (Adicionar camadas PostGIS). ![qgis add postgis button][]{: height="24px"}

- Em “Connections” (Ligações) na parte superior, clique em “**New**” (Novo).  
- Dê um nome à nova ligação. Em base de dados, escreva **osm** (o nome da sua base de dados).  
- Introduza o nome de utilizador postgres e a sua palavra-passe abaixo.  

![connection settings][]

- Clique em OK para guardar as configurações de conexão. Em seguida, clique em "Connect" (conectar) para se conectar ao seu servidor PostgreSQL.  
- Clique ao lado de "public" para ver todas as camadas (tabelas) na sua base de dados. Repare que o osm2pgsql cria uma tabela separada para diferentes tipos de objetos - pontos, linhas e polígonos. Também cria uma tabela de estradas, que contém apenas as estradas principais.  

![postgis layers][]

- Selecione uma ou mais camadas e clique em "Add" (adicionar). Se lhe for pedido, selecione WGS84 como CRS.  
- Se tudo correr bem, verá as camadas que selecionou apresentadas no QGIS.  

![osm in qgis][]



Resumo
-------

Quando quiser importar dados do OpenStreetMap para a sua própria base de dados, **osm2pgsql** é uma ótima ferramenta. Pode ser extremamente útil quando é necessário obter os dados OSM mais atualizados e personalizar os atributos pretendidos, ou quando se trabalha em projetos mais complexos.  

Uma outra ferramenta de importação foi desenvolvida recentemente, chamada [imposm](http://imposm.org/) e oferece alguma velocidade e outras melhorias em relação ao osm2pgsql, embora até ao momento em que escrevemos este artigo faltem-lhe outras funções chave que estão prometidas na versão 3 do imposom.  

Para mais informações sobre o osm2pgsql, consulte a wiki do OSM - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
