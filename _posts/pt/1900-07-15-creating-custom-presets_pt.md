---
layout: doc
title: JOSM - Criar modelos de etiquetas personalizados
permalink: /pt/josm/creating-presets/
lang: pt
category: josm
---

JOSM - Criar modelos de etiquetas personalizados
=======================


No [capítulo anterior](/pt/josm/josm-presets) vimos como os menus de modelos de etiquetas personalizados podem ser adicionados ao JOSM. Neste capítulo iremos abordar a forma de criar os seus próprios ficheiros de modelos de etiquetas personalizados.  

AVISO! Este é um tópico avançado... considere-se avisado!  

Introdução ao XML
-------------------

Para criar o nosso próprio menu Modelos de etiquetas, primeiro precisamos de compreender uma linguagem chamada XML. Se já estiver familiarizado com XML, pode saltar para a secção seguinte.  

XML, que significa "Extensible Mark-up Language", é uma linguagem informática semelhante ao HTML. A principal diferença é que a XML foi concebida para transportar dados e não para os apresentar. Muitas aplicações na Internet usam XML para transmitir dados, incluindo o OpenStreetMap. O XML usa elementos e cada elemento pode conter elementos filhos no seu interior. Por exemplo, imaginemos que queremos criar um ficheiro XML que contém dados sobre o menu de um restaurante. Temos de criar um elemento de raiz para conter todos os dados sobre o nosso menu. O nosso elemento de raiz terá uma etiqueta de abertura e uma etiqueta de fecho, como esta:

      <menu>
      ... quaisquer dados que queiramos incluir no nosso menu ...
      </menu>

A informação está contida num elemento e dentro de cada elemento podem existir mais elementos.  

      <menu>
        <item name=“Hambúrguer”>
          <cost>400</cost>
          <description>Deliciosa empada de carne de vaca</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Arroz frito indonésio</description>
        </item>
      </menu>

Neste exemplo, colocámos dois elementos &lt;item&gt; dentro do nosso elemento &lt;menu&gt; para descrever dois itens diferentes que estão contidos no menu. Cada item contém mais dois elementos, &lt;cost&gt; e &lt;description&gt;. Repare também como escrevemos name="Hambúrger" dentro da etiqueta de abertura &lt;item&gt;. A isto chama-se um atributo e acrescenta informação sobre o elemento.


### Terminologia XML

- **elemento raiz:** o elemento mais externo de um documento XML, que descreve o que está contido  
- **elemento:** qualquer objeto XML, contido em etiquetas de abertura e fecho, tais como as &lt;item&gt; ... dados ... &lt;/item&gt;  
- **etiqueta:** algo contido entre parênteses, como &lt;item&gt;.  &lt;item&gt; é a etiqueta de abertura de um elemento, e &lt;/item&gt; é a etiqueta de fecho. Não confundir com as etiquetas OSM, que têm um significado diferente.  
- **atributo:** um pedaço de informação contido numa etiqueta, como name="Hambúrger"  

A utilização da XML para guardar e transmitir dados é ótima porque é fácil de compreender para os computadores.  


Ficheiros de modelos de etiquetas JOSM
-------------------

Vamos adicionar um ficheiro exemplificativo de modelos de etiquetas ao JOSM e analisar como funciona.  

- Descarregue o ficheiro [sample_presets.xml](/files/sample_presets.xml).  
- Em seguida, carregue-o no JOSM como descrito no [capítulo anterior](/pt/josm/josm-presets).  
- Crie uma nova camada e um novo objeto.  
- Vá para o menu Modelos de etiquetas. Haverá um novo item chamado "Sample Building". Clique nele.  

![sample building menu][]

Repare que o formulário que aparece tem três campos e cada um aceita um tipo diferente de entrada. O primeiro campo, "Name of Building" (nome do edifício), aceita uma cadeia de texto como entrada. O segundo, "Building Use" (utilização do edifício), tem uma caixa pendente. O último campo é uma caixa de seleção, o que significa que só pode ter um de dois valores, ligado ou desligado.

![sample presets form][]

Vejamos agora o ficheiro XML que define este formulário de modelo de etiquetas.

- Localize o ficheiro XML no seu computador e abra-o com um editor de texto. Se estiver a utilizar o Windows, pode utilizar o programa Notepad. Se pretender um editor mais fácil de utilizar, pode descarregar a aplicação gratuita Notepad++.  
- O ficheiro **sample_presets.xml** tem o seguinte aspeto:  

![sample presets file][]

Por agora, vamos ignorar as primeiras seis linhas e a linha final e concentrarmo-nos em tudo o que se encontra entre as etiquetas &lt;item&gt;.

A primeira linha tem o seguinte aspeto:

      <item name="Sample Building" type="node,closedway">

Esta é a etiqueta de abertura de um item que é adicionado ao menu. Tem dois atributos, nome e tipo. O nome define como este item aparecerá no menu Modelos de etiquetas. O tipo limita este modelo de etiquetas a tipos específicos de objetos. Neste caso, o modelo de etiquetas só pode ser aplicado a pontos e formas - por outras palavras, nós e formas fechadas. Se tentar aplicar este modelo de etiquetas a uma linha, ela não funcionará.  

Vejamos a linha seguinte:  

      <label text="Building Form" />

Quando clica no menu e abre o formulário de exemplo, no topo vê o texto "Building Form". Este é o texto definido nesta linha. Isso define um elemento &lt;label&gt;, que simplesmente apresenta o texto no formulário. O texto é definido pelo atributo *texto="algum texto"*.  

Descendo algumas linhas, encontramos isto:  

      <key key="building" value="yes" />

Esta é uma das etiquetas que será aplicada ao objeto que selecionámos. Como usa o elemento &lt;key&gt;, a etiqueta OSM dada aqui será automaticamente aplicada quando a o modelo de etiquetas for escolhido. Assim, este objeto obterá automaticamente a etiqueta *building=yes*.  

A linha seguinte é um pouco diferente, utilizando o elemento &lt;text&gt;.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

O elemento &lt;text&gt; cria um campo em branco. Quando o formulário é criado no JOSM, o utilizador poderá preencher o campo vazio. Como o atributo *delete_if_empty="true"* está definido, nenhuma etiqueta será adicionada se o utilizador deixar este campo vazio.  

A caixa pendente no formulário é definida na linha seguinte:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

Uma caixa suspensa é definida pelo elemento &lt;combo&gt;. Tal como acontece com o elemento &lt;text&gt;, o atributo *key* define a chave da etiqueta. O valor é então escolhido a partir de uma lista de *valores* possíveis. O atributo *display_values* permite-lhe escolher nomes diferentes para serem apresentados na caixa pendente, que podem ser mais fáceis de compreender do que os valores da etiqueta OSM.  

Por último, vejamos a linha que define a caixa de verificação.  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

O elemento &lt;check&gt; define - adivinhou! - a caixa de verificação. O atributo *default="off"* indica que a caixa estará desmarcada por defeito. Os restantes atributos já foram vistos.  

Criar o seu próprio ficheiro de modelos de etiquetas
------------------------------

A melhor forma de criar o seu próprio ficheiro de modelos de etiquetas é pegar num que já exista e manipulá-lo para atingir os seus objetivos. Sinta-se à vontade para editar este ficheiro de exemplo e experimentar com ele para aprender o básico. Lembre-se apenas que de cada vez que o guardar, terá de reiniciar o JOSM para carregar as alterações.  

Antes de começar a criar as suas próprias predefinições, tem de pensar cuidadosamente nas etiquetas que vai utilizar. Inventar novas etiquetas é outro assunto. Geralmente, deve utilizar as etiquetas OSM existentes, quando estas existirem. A maioria das tags existentes estão listadas na página [Características do mapa na wiki do OSM](https://wiki.openstreetmap.org/wiki/Pt:Map_Features).  

Este ficheiro de exemplo contém a maioria dos elementos que encontrará num ficheiro de modelos de etiquetas JOSM - não há muitos elementos de formulário. Se gostaria de experimentar um ficheiro de modelos de etiquetas mais complexo, descarregue o ficheiro [dhaka_presets.xml](/files/dhaka_presets.xml) aqui.  

Além disso, pode ser encontrada uma explicação pormenorizada de todos os elementos possíveis [aqui](http://josm.openstreetmap.de/wiki/TaggingPresets).  

Boa sorte!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png