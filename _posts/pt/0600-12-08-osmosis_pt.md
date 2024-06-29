---
layout: doc
title: Manipulação de dados com Osmosis
permalink: /pt/osm-data/osmosis/
lang: pt
category: osm-data
---

Manipulação de dados com Osmosis
===============================


O **Osmosis** é uma poderosa ferramenta de linha de comandos para manipular e processar dados brutos **.osm**. É frequentemente utilizada para processar grandes ficheiros de dados, para dividir ficheiros OSM em partes mais pequenas e para aplicar um conjunto de alterações para atualizar um ficheiro existente.  

Há um grande número de funções disponíveis no Osmosis, e pode ler sobre cada uma delas em pormenor na [wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). No entanto, muitas das funções são bastante complexas e difíceis de compreender, particularmente se estiver a iniciar-se nos programas de linha de comandos e no OpenStreetMap. Este capítulo servirá para apresentar o Osmosis, instalá-lo no Windows e começar com um comando básico do Osmosis.  

Instalar o Osmosis
----------------

Tal como o osm2pgsql no capítulo anterior, teremos de descarregar e configurar o **Osmosis** para o podermos executar a partir da linha de comandos. O processo para isso será muito similar ao do osm2pgsql.  

Também vai precisar de alguns dados OSM em bruto para trabalhar. Se quiser seguir os exemplos deste capítulo, descarregue o nosso ficheiro de amostra [aqui](/files/sample_osmosis.osm.pbf). Também pode utilizar um ficheiro de dados em bruto à sua escolha.  

Siga estes passos para descarregar e preparar o Osmosis:  

- Primeiro, descarregue o Osmosis [aqui](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).  
- Descompacte a pasta e coloque-a num local do sistema onde não possa ser movida. Teremos de adicionar a sua localização ao caminho do sistema para que possa ser executado a partir da linha de comandos.  

![unzip it][]

- Clique no menu Iniciar e escreva "system path" (caminho do sistema).  

![system path][]

- Deverá ver uma opção chamada "Edit the system environment variables" (Editar as variáveis de ambiente do sistema). Clique nela.  

![edit variables][]

- Clique no botão “Environment Variables” (variáveis de ambiente).   

![env variables][]

- Na parte inferior, localize a variável denominada "Path" e clique em "Editar...”  

![find path][]

- É necessário adicionar o diretório onde se encontra o ficheiro osmosis.bat à variável Path.  

![edit path][]

- Adicione um ponto e vírgula ao final do diretório anterior e, em seguida, digite o caminho completo do diretório do Osmosis. Por exemplo, se você colocar a pasta **osmosis-latest** 	diretamente no diretório **C:\\**** o caminho seria:  
	
      C:\osmosis-latest\bin

- Clique várias vezes em OK para guardar as novas definições.  
- O **Osmosis** deve estar a funcionar agora. Vamos verificar.  
- Abra a linha de comandos do Windows. Para isso, clique no menu Iniciar e digite "**cmd**". A aplicação da linha de comandos aparecerá e pode premir Enter ou clicar nela.  

![cmd][]

- Na janela de comandos preta que se abre, digite:  

      osmosis

- Se tudo estiver a funcionar corretamente, deverá receber uma mensagem como esta:  

![osmosis test][]

- Se não vir resultados como este e disser que não consegue encontrar a aplicação **osmosis**, então poderá ter introduzido incorretamente a variável Path.  

Filtrar dados
---------------

O Osmosis deve estar agora a funcionar corretamente a partir da linha de comandos. Para executar operações no nosso ficheiro de dados, temos de mudar o diretório de trabalho para o local onde colocámos o ficheiro **sample_osmosis.osm.pbf**. Para simplificar as coisas, colocámos este ficheiro no **diretório C:\**.  

- Para alterar o diretório de trabalho na linha de comandos para o diretório C:\, digite o seguinte comando e pressione Enter:  

      cd C:\
    
- A linha de comandos deve mudar, indicando que está agora no diretório C:\.  

![cd command][]

Agora vamos aprender o nosso primeiro comando Osmosis. Vamos executar um comando que filtra todas as escolas do nosso grande ficheiro.  

Para o fazer, precisamos de dizer ao Osmosis algumas coisas. Precisamos de especificar:  

- um ficheiro de entrada (sample_osmosis.osm.pbf)  
- algumas regras que definem o que queremos filtrar  
- um ficheiro de saída (vamos produzir um ficheiro .osm não comprimido para o podermos abrir no JOSM)  

O comando que vamos executar é:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Tente executar este comando na linha de comandos. Quando terminar, deverá ver um novo ficheiro no seu diretório, chamado **schools.osm**. Se abrirmos o novo ficheiro no JOSM, podemos ver que apenas as escolas foram filtradas do ficheiro de amostra.  

![schools osm][]

Vamos dar uma olhadela ao comando que executámos, peça por peça, para perceber como tudo funciona. Primeiro, chamamos o nome do programa.

      osmosis

Em seguida, fornecemos o ficheiro de entrada. Lembre-se que este ficheiro é um formato comprimido. **--rbf** é na verdade uma abreviação para **--read-pbf-fast**. O Osmosis entende que o ficheiro que fornecemos depois desta flag é o ficheiro a partir do qual queremos ler.  

      --rbf sample_osmosis.osm.pbf

A parte seguinte do nosso comando diz *--nkv keyValueList="amenity.school "*. Pode adivinhar que isto indica que o Osmosis deve filtrar tudo o que tem a etiqueta **amenity=school**. **--nkv** é a abreviatura de **--node-key-value**. Este comando indica que o Osmosis deve filtrar apenas nós com as chaves e valores fornecidos na lista a seguir. Podem ser adicionados conjuntos adicionais de chave.valor colocando vírgulas entre eles.  

      --nkv keyValueList="amenity.school"

Por fim, fornecemos o nome e o formato do ficheiro de saída. Usamos a flag **-wx**, que é uma abreviatura de **--write-xml**. Note que também poderíamos usar **--wb**, que é a contrapartida de **--rbf**, se quiséssemos produzir os dados novamente no formato PBF.  

      --wx schools.osm

Avançar
---------------

O número de tarefas de processamento que podem ser feitas com o Osmosis é enorme e para saber mais é melhor consultar a página [Utilização pormenorizada do Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) na wiki.  

Uma tarefa útil é ser capaz de dividir um grande ficheiro OSM em partes separadas, quer fornecendo retângulos, quer criando ficheiros de polígonos delimitadores. Pode obter uma base básica sobre este processo na página [Página de exemplos Osmosis] (http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

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


