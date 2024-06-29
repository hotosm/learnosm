---
layout: doc
title: Criação de notas OSM
permalink: /pt/beginner/notes/
lang: pt
category: beginner
---

Criação de notas OSM
=====================

Um dos principais componentes do OpenStreetMap são as notas, que têm sido uma parte integrante do projeto desde 2013. Nesta secção, vai ficar a saber o que são notas, os seus estados, como criar notas para serem produzidas em alterações ao mapa, a comunicação que é gerada a partir das notas, o processo de criação de notas a partir de diferentes aplicações e, para terminar, um pouco da história desta funcionalidade. 

Tenha em atenção que neste documento apenas trataremos da criação de notas. Para a resolução de notas, pode visitar a secção de resolução de notas. Além disso, incluímos um glossário de acrónimos e termos no final deste artigo.


# Para que servem as notas?

O objetivo das notas é: (a) descrever um erro ou incoerência entre o mapa OSM e a realidade e (b) proporcionar aos utilizadores do mapa um mecanismo de comentários. O acima exposto permite manter o OSM atualizado. Isto é muito utilizado quando fazemos trabalho de campo (ou seja, quando estamos na rua ou num parque), onde podemos identificar três tipos de inconsistências ou elementos que diferem do mapa das seguintes formas:
 
* Elementos que não constam do mapa mas que existem na realidade.
* Elementos que estão incorretamente mapeados, quer pelas suas propriedades quer pela sua localização, por exemplo, uma loja de animais é agora um supermercado.
* Elementos que simplesmente já não existem.

O sistema de notas proporciona internamente um mecanismo de comunicação entre o utilizador que faz o relatório e o mapeador que faz a alteração. Isto permite um espaço onde podem ser feitas perguntas sobre a inconsistência identificada, onde podem ser dadas respostas a essas perguntas e onde pode ser feita uma modificação mais exacta do mapa.

Observámos que as notas geram um interesse significativo nos utilizadores que preferem contribuir para o projeto de uma forma diferente do mapeamento. Isto permitiu-nos alargar a comunidade de mapeadores, onde alguns se especializam em relatar certos elementos através de notas enquanto caminham.


## Atributos das notas

As notas são definidas com as seguintes propriedades:

* Texto: descreve a incoerência identificada, que pode ter várias linhas.
* Localização: é definida pela longitude e latitude, que podem ser determinadas por GPS (GNSS) ou movendo um alfinete 📌 no mapa.
* Nome de utilizador (opcional): a nota será criada anonimamente se o utilizador não estiver registado no OSM.
* Número ou identificador: identifica a nota no conjunto das notas.
* Data: indica quando foi criada.

Para além disso, uma nota pode incluir comentários adicionais. Isto significa que haverá sempre um comentário inicial quando a nota é criada. Posteriormente, todos os outros comentários serão relativos à comunicação entre os utilizadores e os mapeadores. É importante esclarecer que apenas os utilizadores registados podem adicionar um comentário. Também é importante notar que não pode ser modificado depois de um comentário ter sido publicado. A única ação que pode ser tomada é solicitar ao DWG (Data Working Group)  que o oculte se um comentário violar as políticas de processamento de dados do OSM. Por exemplo, se um comentário contiver dados pessoais.


# Estados e ações

As notas têm três estados:

* Aberta.
* Fechada.
* Oculta - Este tipo aplica-se às notas que o DWG ocultou por serem contrárias às políticas de tratamento de dados do OSM. 

Existem várias ações sobre as notas:

* Criar nota (aberta): corresponde ao processo de criação inicial.
* Resolver nota (aberta -> fechada): esta é a resolução de notas apenas por um utilizador registado, onde pode ser incluído um comentário.
* Comentar nota (aberta -> aberta): quando um utilizador registado adiciona texto a uma nota.
Por exemplo, quando um utilizador pede mais detalhes sobre as redondezas ou o utilizador que a criou quer descrever melhor a nota inicial.
* Reabrir nota (fechada -> aberta): quando um utilizador não concorda com a resolução da nota e decide reativá-la.

![States for a note][]


# Considerações sobre a criação de boas notas

Recorde-se que as notas descrevem um erro ou inconsistência entre o mapa (OSM) e a realidade. Normalmente, as notas são criadas no local. Por exemplo, quando uma pessoa está a caminhar, tem um dispositivo com o mapa OpenStreetMap e vê que há algo que difere da realidade.

A chave para criar boas notas é descrever a inconsistência do mapa tanto quanto possível e lembrar-se que a pessoa que a vai resolver pode não conhecer ou ter visitado a área. Por conseguinte, forneça o melhor contexto para a pessoa que vai ler e tentar resolver a nota. Por exemplo, é bom utilizar pontos cardeais (norte, sul, este, oeste) e evitar indicações como à direita, à frente, etc., uma vez que a pessoa que vai resolver a nota não tem o ponto de referência de onde se encontra quando cria a nota.

Quando estiver registado no OpenStreetMap e criar notas com a sua conta de utilizador, será notificado por e-mail de quaisquer alterações à nota. Isto permite-lhe acompanhar o progresso da resolução da nota e poder responder a quaisquer questões que surjam. Algumas aplicações permitem-lhe carregar fotografias associadas às notas para descrever graficamente o contexto. Se estiver a utilizar uma aplicação com esta funcionalidade, tire partido dela. Recomendamos que indique sempre para onde aponta a câmara (para nordeste, para o chão, etc.). Se tiver dúvidas, pode utilizar uma aplicação de bússola no seu telemóvel; com esta, o mapeador compreenderá a orientação da sua fotografia para resolver a nota.

Sabemos que está apenas a começar a ler este guia e a descobrir o mundo do OSM. Quando estiver mais avançado nesta leitura, aprenderá a mapear um elemento ou caraterística em pormenor. Isto vai ajudá-lo a descrever melhor um objeto através de uma nota para que mais propriedades sejam mapeadas.

## Idioma

O idioma em que é mais fluente é o melhor para escrever uma nota. Lembre-se de que a pessoa que resolve a nota, se não compreender o seu texto, pode utilizar um tradutor em linha (como o deepl.com ou o pons.com), uma vez que a maior parte das resoluções de notas é feita a partir de um computador. Pode também escrevê-la no idioma do país onde se encontra ou, eventualmente, em inglês, mas é preferível utilizar um idioma em que se sinta confortável e em que se consiga exprimir melhor.

## Precisão da localização

A localização da nota deve ser tão exacta quanto possível em relação à localização do erro ou incoerência no mapa. A nota pode introduzir um erro no mapa em vez de corrigir algo quando a nota é colocada a alguns metros de distância da localização pretendida. É necessário aguardar um momento para que o seu dispositivo identifique a sua localização, ou pode mover manualmente o pino sobre o elemento do mapa que pretende modificar.

Não se esqueça de que a pessoa que vai endereçar a nota pode não estar familiarizada com a zona. Assim, se o GPS (GNSS) não o tiver localizado corretamente e indicar que se encontra no passeio em frente, a modificação no mapa será do outro lado da rua, o que será incorreto.

## Hashtags

Por vezes, há atividades em que muitas pessoas criam notas com o mesmo objetivo (por exemplo, uma mapatona para adicionar detalhes de bairros). Para identificar isto, recomendamos a utilização de um ou vários hashtags para descrever a atividade. Desta forma, poderá procurar as notas associadas à hashtag e processá-las mais facilmente.


# Notas más

Lembre-se de que as notas não devem incluir informações pessoais, opiniões, dados pessoais ou publicidade. Também não se destinam a fazer perguntas. Como já foi referido, os mapeadores que processam as notas podem não conhecer o terreno, pelo que não poderão responder às suas perguntas. O contrário, porém, é verdadeiro. Uma vez que se encontra no local, pode identificar erros ou incoerências no mapa e comunicá-los como nota.

## Notas mecânicas

São aquelas criadas em massa a partir do computador, onde são identificados os elementos do mapa a corrigir. Esta não é uma prática recomendada pela comunidade, uma vez que é importante distinguir entre evidências observadas diretamente no terreno e inconsistências detetadas apenas por meios remotos. Por exemplo, quando se utiliza um editor como o iD ou o JOSM, e se decide identificar edifícios mal desenhados criando uma nota para cada edifício. Existem ferramentas disponíveis para esse fim específico que têm uma melhor gestão de áreas com prevenção de conflitos nas edições. Verá estas ferramentas mais adiante neste guia. Algumas delas são o Gestor de Tarefas, o MapRoulette e o DAMN Project, que utilizam formatos como o GeoJSON para carregar em massa vários pontos no mapa. 


# Notificações

Quando cria uma nota que descreve uma inconsistência no mapa, este texto associado a uma localização será enviado para a base de dados do OSM. Depois, um mapeador do OSM irá ler a sua nota para a resolver e, se tiver dúvidas sobre essa descrição, pode adicionar um comentário onde pode pedir-lhe mais detalhes. Se tiver criado a nota com a sua conta de utilizador no OpenStreetMap, receberá um e-mail com as perguntas do mapeador. Qualquer comentário que adicione será notificado a todos os mapeadores que tenham comentado anteriormente a nota. É assim que as pessoas envolvidas numa nota começam a interagir. 

![Notification by email][]


# Criação de notas

A funcionalidade para criar, comentar e fechar notas está incluída em diferentes aplicações. Aqui, vamos demonstrar como pode criar notas em algumas aplicações que consideramos mais adequadas para esta atividade. Muitas das aplicações aqui apresentadas têm secções detalhadas neste guia (LearnOSM), mas esta secção apresenta uma visão geral da funcionalidade relacionada com as notas nestas aplicações.

## StreetComplete

Quando vir algo que mereça uma nota, pode manter o dedo premido no mapa e aparecerá um menu flutuante. Aí, opta por criar uma nota e pode descrever a incongruência. Existe também a opção de incluir uma fotografia para um melhor contexto. Certifique-se de que a aplicação envia os dados para o OpenStreetMap para publicar a sua nota.

![Creating a note in StreetComplete][]


## Every Door

Existem vários modos de edição na barra horizontal na parte inferior da aplicação. Escolha o último, que é o das notas. Um botão circular azul será ativado no canto inferior direito para adicionar notas. Depois de colocar o alfinete, pode escrever o texto da nota. Lembre-se de enviar as alterações para que a sua nota fique registada no OpenStreetMap.

![Creating a note in Every-door][]


## OnOSM

Esta página Web permite-lhe acrescentar dados sobre os estabelecimentos através da criação de uma nota. Possui um mecanismo que solicita as informações necessárias e preenche um modelo. No final, publica os dados no OSM através de uma nota.

As notas criadas por esta página são sempre anónimas, uma vez que não é necessário utilizar as credenciais do OSM. Consequentemente, não receberá um e-mail quando um mapeador processar a sua nota, pelo que deverá visitar constantemente a página da nota para verificar o seu estado.

![Creating a note in OnOSM.org][]


## OsmAnd

Selecione um elemento no mapa (por exemplo, um edifício, uma estrada) e no botão "Ações" do painel inferior, selecione "Criar nota OSM". Descreva no texto a incongruência, clique em "Adicionar nota ao OSM" e por fim clique em "Enviar".

![Creating a note in OSMAND][]


## Página inicial do OSM.org

A partir da página inicial do OpenStreetMap.org, faça zoom na área de interesse e, em seguida, o ícone de adicionar nota será ativado. Lembre-se que se fizer este procedimento sem iniciar sessão, criará uma nota anónima e não receberá notificações da sua resolução. Aparecerá uma caixa de texto onde poderá dar instruções, e quando clicar em "Adicionar nota", estará dentro do OSM.

![Creating a note in osm.org][]


# Histórico

Agora que já sabe o básico sobre as notas, vamos terminar esta secção com alguma história. Antes das notas existirem na base de dados do OpenStreetMap, um projeto paralelo oferecia esta funcionalidade. O projeto chamava-se OpenStreetBugs e fornecia as ferramentas essenciais para os utilizadores documentarem inconsistências no mapa usando texto e coordenadas. A funcionalidade era excelente para reportar inconsistências, pelo que foi tomada a decisão de a integrar no OpenStreetMap, permitindo o seu acesso através da API. De notar que quando a API 0.6 foi definida e implementada, esta versão não incluía a funcionalidade das notas.

De facto, as notas foram incluídas num aditamento posterior a esta versão.
Em 2013, o serviço de notas foi oferecido como parte da API.
Em 2014, todos os relatórios do OpenStreetBugs tinham sido migrados para a base de dados do OSM.
Em 2017, já tinham sido criadas 1 milhão de notas em todo o mundo.


[States for a note]: /images/beginner/note-states.png
[Notification by email]: /images/beginner/email-messages.png
[Creating a note in StreetComplete]: /images/beginner/streetcomplete.gif
[Creating a note in Every-door]: /images/beginner/every-door.gif
[Creating a note in OnOSM.org]: /images/beginner/onosm.gif
[Creating a note in OSMAND]: /images/beginner/osmand.gif
[Creating a note in osm.org]: /images/beginner/website.gif
