---
layout: doc
title: JOSM - Adicionar imagens TMS, WMS ou WMTS
permalink: /pt/josm/josm-adding-imagery/
lang: pt
category: josm
---

JOSM - Adição de imagens aéreas
================

> Revisto em 2016-09-09  

Nem todas as imagens aéreas estão incluídas no menu de imagens do JOSM, mas são fáceis de adicionar se lhe tiverem sido fornecidas as informações da hiperligação.  

Neste exemplo, estamos a trabalhar a partir do [Gestor de Tarefas HOT](http://tasks.hotosm.org/) e as imagens necessárias para completar um dos projetos têm de ser adicionadas manualmente ao JOSM. O princípio de adicionar a hiperligação da imagem é o mesmo, seja qual for a edição em que esteja a trabalhar, desde que lhe seja fornecida a hiperligação. Há também ocasiões em que as hiperligações previstas não funcionam como esperado e pode ser necessário adicionar as imagens manualmente, se conseguir obter a informação da hiperligação.  

A partir do separador de informações do Gestor de Tarefas, ou da sua outra fonte de informações, copie toda a secção Imagens aéreas.  

![TM Imagery][]

Vá ao menu Preferências do JOSM (**Editar / Preferências**, ou numa máquina Apple **JOSM / Preferências**)  

![Preferences WMS TMS 1][]

Clique no ícone ![WMS_TMS_button][]{: height="24px"} e neste caso o ícone ![+TMS_button][]{: height="24px"}.  

> Os URLs TMS têm normalmente {x}{y} e {z}, os URLs WMS são normalmente muito longos e têm {width} e {height}, os URLs WMTS têm normalmente WMTSCapabilities.xml. Se não tiver a certeza do tipo de URL de imagens que tem, pode tentar adicioná-los como tipos diferentes para ver qual funciona.  

![Preferences WMS TMS 3][]

**Caixa 1.** Cole as informações que copiou do separador de informações do Gestor de Tarefas na primeira caixa da janela. O JOSM irá verificá-las e, se estiverem corretas, o processo de verificação irá repetir as informações na caixa 3 (ver abaixo). Se não aparecer na caixa 3 no espaço de alguns segundos, verifique se não se esqueceram acidentalmente de letras ou se não adicionaram acidentalmente "espaço em branco" no início ou no fim - apenas a hiperligação real deve ser copiada e colada.  
**Caixa 2.** Normalmente, esta caixa é deixada em branco, exceto se tiver recebido outras instruções.  
**Caixa 3.** Contém agora uma cópia duplicada da Caixa 1, gerada pelo processo de verificação no âmbito do JOSM.  
**Caixa 4.** Introduza um nome para a camada - como as minhas imagens foram identificadas no Gestor de Tarefas como "As imagens de satélite para este projeto são gentilmente fornecidas pela Digital Globe através do seu serviço +Vivid". Chamei à minha camada "Digital Globe + Vivid".  

![Preferences WMS TMS 4][]

Clique no botão ![OK_button][]{: height="24px"} e a imagem que adicionou aparecerá no fundo da lista - poderá ter de se deslocar para baixo para a localizar.  

![Preferences WMS TMS 5][]

Clique no botão ![OK_button][]{: height="24px"} para fechar a janela de preferências e regressar ao JOSM. Quando precisar de utilizar as imagens, clique na palavra **Imagens de fundo** no menu na parte superior do ecrã e selecione-a na lista alfabética. Em alternativa, com as teclas **Alt + I** deve mostrar o menu de Imagens de fundo (estes atalhos podem variar de acordo com a definição do idioma).  

![Preferences WMS TMS 6][]

**Sugestão** Se as imagens não forem carregadas, verifique como aparecem na lista. Neste exemplo, **TMS** aparece duas vezes. Pode editar a ligação no JOSM para que apareça apenas uma vez, o que provavelmente corrigirá o problema.

![TMS TMS][]

Adicionar um servidor WMS
===========

A adição de um servidor WMS é muito semelhante à adição de um servidor TMS, com uma diferença importante. Os servidores WMS fornecem normalmente mais do que uma camada de imagens à escolha e deve selecionar uma camada ao adicionar o servidor WMS nas preferências, ou especificar que selecionará uma camada a utilizar sempre que selecionar o servidor a partir do menu Imagens de fundo na interface principal do JOSM.

Para adicionar um servidor WMS, abra a caixa de diálogo de preferências de imagens do JOSM como mostrado acima, mas desta vez clique no botão "Adicionar WMS" ![wms_add_button][]

A caixa de diálogo resultante será parecida com a que se segue:
![wms_entry_dialog_numbered][]

**Caixa 1.** Introduza o URL do servidor WMS neste campo. Deve ser apenas um URL típico que comece por http ou https  
**Botão 2.** Depois de introduzir o URL, clicar no botão "Obter camadas". O JOSM contactará o servidor WMS e obterá uma lista de camadas disponíveis a partir desse servidor  
**Caixa 3.** É aqui que será apresentada a lista de camadas disponíveis. Pode haver pastas que precisam de ser expandidas para ver as camadas disponíveis  
**Menu pop-down 4.** Formato da imagem - este formato será normalmente selecionado automaticamente depois de clicar numa das camadas da **Caixa 3**; pode oferecer mais do que um tipo de formato de imagem, mas geralmente o formato é jpeg ou png.  
**Caixa 5** Esta caixa é gerada automaticamente depois de selecionar uma camada na **Caixa 3**. Será longa e complicada, mas, normalmente, não tem qualquer problema e é mais informativa, não devendo ser editada.  
**Caixa 6.** Introduza um nome para o servidor ou camada. Um nome predefinido será preenchido com base no URL, mas pode introduzir um nome mais significativo. Este é o nome que aparecerá no menu JOSM Imagens de fundo quando quiser adicionar a camada ao seu painel de camadas na interface JOSM normal.  

> Exemplo de servidor WMS com muitos níveis interessantes: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Certifique-se de que clica efetivamente numa camada se pretender que o item de menu Imagens de fundo carregue sempre a mesma camada. No exemplo acima, quando a camada é selecionada no menu Imagens de fundo, será sempre carregada a camada "Base de dados mundial de áreas protegidas".

Se pretender escolher a camada a carregar sempre que selecionar o servidor no menu Imagens de fundo e poder carregar facilmente várias camadas a partir do servidor guardado, basta marcar a caixa "Armazenar apenas o ponto final WMS". Isto também desativará a seleção de uma camada e o campo de verificação do URL.

![wms_end_point_only_highlighted][]  

Clique no botão ![OK_button][]{: height="24px"} e a imagem que adicionou aparecerá no fundo da lista - poderá ter de se deslocar para baixo para a localizar.  

![Preferences WMS TMS 5][]

Clique no botão ![OK_button][]{: height="24px"} para fechar a janela de preferências e regressar ao JOSM. Quando precisar de utilizar as imagens, clique na palavra **Imagens de fundo** no menu na parte superior do ecrã e selecione-a na lista alfabética. Em alternativa, com as teclas **Alt + I** deve mostrar o menu de Imagens de fundo (estes atalhos podem variar de acordo com a definição do idioma).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg