---
layout: doc
title: Correção do desvio de imagens aéreas
permalink: /pt/josm/correcting-imagery-offset/
lang: pt
category: josm
---

Desvio de imagens aéreas
===============

> Revisto em 2015-09-21  

Os fornecedores de imagens aéreas normalmente fazem um bom trabalho de georreferenciação das suas imagens, mas ocasionalmente as imagens podem estar fora de posição. Isto é particularmente verdade em áreas acidentadas ou montanhosas, onde pode ser difícil esticar uma imagem plana sobre uma área da Terra com muitos contornos. Quando se carregam imagens aéreas no JOSM, por vezes podem estar a dez metros ou mais da sua verdadeira posição. A isto chama-se **imagery offset** (desvio, deslocamento ou alinhamento de imagens aéreas, conforme o contexto).  

Repare na imagem seguinte que duas fotografias aéreas separadas foram georreferenciadas e fundidas. Como a georreferenciação não é um processo perfeito, as imagens não se alinham perfeitamente uma com a outra. Assim, uma delas, ou ambas, deve estar incorreta.  

![Misaligned imagery][]

Aprendemos duas formas principais de fazer mapas - uma é utilizando imagens aéreas para identificar características no terreno e outra é utilizando o GPS para registar trajetos e pontos de passagem e depois adicioná-los ao OpenStreetMap. A vantagem das imagens aéreas é óbvia. Permite-lhe a si, o mapeador, ver o quadro completo, observar vários detalhes da imagem, considerar o seu conhecimento da área e localizar facilmente estradas, edifícios e áreas. No entanto, uma das principais vantagens do GPS é o facto de não sofrer de desvios como as imagens. Um GPS fornecerá sempre uma latitude e longitude corretas. A única exceção é quando os sinais de satélite são interrompidos por edifícios altos ou montanhas, mas neste caso é fácil reconhecer o erro. Observe o traço do GPS nesta imagem, comparado com a camada de imagens aéreas do Bing por baixo:  

![Aerial vs GPS][]

Com base no que sabemos agora, é evidente que o traço de GPS é provavelmente exato e que a imagem por baixo dele está deslocada. Portanto, agora temos de perguntar: "se as imagens podem estar deslocadas, como é que ainda as podemos utilizar e fazer mapas precisos?"  

Correção do desvio de imagens aéreas
-------------------------

A resposta à pergunta anterior é que podemos mover as imagens aéreas de modo a que fiquem alinhadas com coisas que sabemos estarem na localização correta, tais como trajetos GPS. É fácil corrigir o desvio das imagens aéreas no JOSM.  

As melhores referências para ajustar as imagens são os trajetos GPS que seguem as estradas. E quanto mais trilhos GPS tiver como referência, mais preciso será o alinhamento das suas imagens. Uma vez que os utilizadores do OpenStreetMap enviam frequentemente os seus percursos GPS para a base de dados do OSM, podemos descarregá-los e utilizá-los para alinhar as nossas imagens.  

- Clique no botão de descarregar. ![JOSM download button][]{: height="24px"}  

- Marque a caixa ao lado de "Trilhos GPS do OpenStreetMap” ![Download raw GPS data][]{: height="24px"} perto da parte superior da janela Descarregar. Selecione a sua área e clique em "Descarregar".  

- Isto irá descarregar uma camada adicional para o JOSM contendo trajetos GPS. Dependendo de quantos trilhos foram enviados pelos utilizadores do OSM, poderá ver poucos trilhos (ou mesmo nenhum):  

![Few GPS tracks from OSM][]

- Ou pode ver muitos trilhos:  

![Many GPS tracks from OSM][]

- Para ajustar uma camada de imagens, clique no botão "Novo alinhamento" ![Adjust imagery offset button][]{: height="24px"} no topo do JOSM ou no menu Imagens de fundo ‣ Novo Alinhamento.  

- Ignorando a caixa que aparece, utilize o rato para arrastar a camada de imagens de modo a que fique corretamente alinhada com os percursos GPS. Os trajetos GPS devem estar alinhados com as estradas nas imagens o mais próximo possível. Verá que os números de desvio na caixa mudam.  

![Adjust imagery offset][]

- Se desejar, pode guardar estas definições de desvio introduzindo um nome de marcador e clicando em OK. Pode depois aplicar automaticamente as mesmas definições mais tarde, acedendo a Imagens de fundo ‣ Alinhamento da imagem de fundo e clicando no seu marcador.  
- Se não pretender guardar o desvio, basta clicar em OK sem introduzir um nome para o marcador.  

E se não existirem trajetos GPS no OpenStreetMap e não tiver um GPS? Sem rastos de GPS, é difícil alinhar as imagens. Se se tratar de uma área relativamente vazia (não foi feito muito mapeamento), pode optar por utilizar simplesmente as imagens tal como estão e corrigir os dados mais tarde. É melhor mapear uma área com 20 ou 30 metros de desvio do que não mapear nada.  

Se conseguir identificar positivamente a latitude e longitude de um objeto no solo, pode garantir que as imagens estão corretamente colocadas seguindo estes passos:  

1. Identifique o objeto cuja posição conhece na imagem.  
2. Clique na latitude e longitude no canto inferior esquerdo do JOSM.![JOSM lat lon][]{: height="24px"}  
3. Na caixa de diálogo que se abre, introduza a latitude e a longitude do local que conhece e introduza um número pequeno para o zoom, cerca de 5 ou 10.  
![JOSM lat lon dialogue][]
4. Isto fará zoom e centrará o mapa para a sua longitude e latitude. Agora pode mover as imagens como fez anteriormente para que a caraterística que conhece fique centrada na posição correta.  

Se, por outro lado, a área já tiver sido extensivamente mapeada, então esperamos que os mapeadores anteriores tenham desenhado os objetos nas suas localizações corretas. Neste caso, pode alinhar as imagens com o mapa OSM, mas tenha cuidado! Outros mapeadores podem não estar cientes do deslocamento das imagens e podem ter cometido erros quando fizeram o mapeamento.  


A base de dados de deslocações de imagens aéreas
---------------------------

Agora já sabe como ter em atenção e corrigir o desvio das imagens, mas há um grande problema com esta abordagem que ainda não foi abordado. Se todos os utilizadores do OpenStreetMap ajustarem as imagens de forma diferente, todos estarão a mapear com fundos ligeiramente diferentes.  

Imagine que está a mapear uma pequena cidade e que se apercebe que as imagens aéreas do Bing estão deslocadas 15 metros para norte. Por isso, ajusta as imagens e utiliza-as para mapear toda a cidade com precisão. Mas depois outra pessoa quer adicionar algo ao mapa, descarrega os dados e carrega as imagens aéreas do Bing, mas não sabe do desvio de imagens aéreas que descobriu! Vão pensar que algo está errado e que todos os objetos da cidade estão deslocados 15 metros e vão começar a movê-los, o que não é correto! Isto pode ser desastroso para os dados cartográficos da cidade.  

Por este motivo, é importante que todos os utilizadores conheçam o deslocamento das imagens aéreas e verifiquem-no sempre antes de mapear uma área. Para ajudar a resolver este problema, algumas pessoas inteligentes criaram um plugin que permite aos utilizadores guardar informações de deslocamento numa base de dados e partilhá-las com outros. Vamos ver como isto funciona:  

- Abra o menu Preferências no JOSM e clique no separador Módulos.![JOSM plugins tab][]{: height="24px"}  

- Localize o plug-in "imagery_offset_db" e selecione a caixa junto ao mesmo.  

![Imagery_offset_db plugin][]

- Clique em OK. Terá de reiniciar o JOSM para concluir a instalação do plugin.  

Da mesma forma que é possível guardar deslocamentos como favoritos, este plugin permite-lhe guardar deslocamentos numa base de dados central e aceder aos deslocamentos que outros utilizadores criaram. Assim, se um mapeador criar um deslocamento de imagens aéreas numa área, outros utilizadores podem utilizar exatamente o mesmo deslocamento para mapear.  

Quando utilizar camadas de imagens aéreas, deve SEMPRE verificar se existem deslocamentos e, quando criar o seu próprio deslocamento, deve SEMPRE guardá-lo nesta base de dados.  


Adicionar deslocamentos de imagens a partir da base de dados
------------------------------------

Quando adiciona uma camada de imagens aéreas, o novo plugin alerta-o de que deve verificar a base de dados de imagens aéreas para um deslocamento existente. Verá um ícone com um ponto de exclamação vermelho na parte superior do JOSM, como este:  

![Imagery offset notification][]

- Clique no botão e o plugin irá comunicar com a base de dados para ver se existem desvios nesta área.  
- Aqui descarregámos dados OSM e trajetos GPS em Kuta, Bali, Indonésia. Neste caso, encontrámos um desvio existente. Clique nele para o aplicar ao mapa.  

![Offset in Kuta bali][]

- Isto faz com que a camada de imagens se desloque. No entanto, quando adicionamos o deslocamento de outra pessoa desta forma, devemos verificar se é válido comparando-o com os trajetos GPS.  

![Comparing imagery offset from GPS tracks][]

- Podemos ver que a camada de imagens aéreas está de facto desalinhada. Não queremos que outros utilizadores utilizem este deslocamento, por isso devemos marcá-lo como incorreto na base de dados. Clique novamente no botão de "Alinhamentos" (já não terá um ponto de exclamação vermelho).  

![Offsets button][]

- Desta vez, quando a caixa de diálogo for aberta, clique com o botão direito do rato no desvio e clique em "Depreciar deslocamento".  

![Deprecate offset][]

- Clique em "Sim" para confirmar.  
- Terá de introduzir um motivo para a depreciação deste desvio.  

![Deprecate reason][]


Adicionar deslocamento de imagens aéreas à base de dados
------------------------------------

Agora que marcámos o desvio deste utilizador como "obsoleto", devemos adicionar um desvio melhorado à base de dados.  

1. Clique no botão "Novo alinhamento". ![Adjust imagery offset button][]{: height="24px"}  
2.  Ajuste as imagens de modo a corresponderem aos trajetos GPS. Clique em OK na caixa.  
3.  Agora, vá para Imagens de fundo ‣ Guardar alinhamento...  
![Store imagery offset][]
4.  Introduza uma descrição do alinhamento na caixa que se abre.  
![Offset description][]
5.  Clique em OK. O seu alinhamento será guardado na base de dados.  
6.  Agora vamos ocultar a camada GPS e ver os dados OSM em comparação com as imagens aéreas corretamente colocadas.  

![Corrected imagery][]

Oh não! Alguém mapeou esta área com imagens desalinhadas, pelo que a área não está corretamente mapeada. Isto levará algum tempo a corrigir.


Site da base de dados de imagens aéreas alinhadas
--------------------------------

Por último, para mais informações sobre a base de dados de desvios, pode visitar o site em [http://offsets.textual.ru/](http://offsets.textual.ru/). Este lista todos os alinhamentos que foram carregados para a base de dados e também tem uma funcionalidade de mapa interessante que visualiza onde os alinhamentos estão localizados, como pode ver aqui:  

![http://offsets.textual.ru/][]

> Um último aspeto a ter em conta é que as imagens aéreas podem não estar alinhadas à mesma distância em todo o lado! Isto é especialmente verdade em regiões onde existem muitas colinas e montanhas. Por isso, se as imagens aéreas parecerem estar deslocadas de forma diferente em áreas diferentes, terá de as mover novamente.  

Sumário
--------

Quando está a iniciar o OpenStreetMap, não precisa de se preocupar muito com o alinhamento das imagens aéreas. Mas se vir as edições de outro mapeador que parecem desalinhadas com as imagens aéreas, deve sempre considerar que pode haver um alinhamento antes de começar a alterar os objetos. E se ainda não estiver preparado para lidar com desvios, lembre-se que é melhor mapear uma área com 20 ou 30 metros de desvio do que não a mapear de todo. Mas, sempre que possível, lembre-se de que pode ocorrer um desvio de imagem e utilize os passos deste capítulo para o corrigir quando necessário.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










