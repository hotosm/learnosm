---
layout: doc
title: BasicAirData GPS Logger
permalink: /pt/mobile-mapping/basicairdata-gpslogger/
lang: pt
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Revisto em 2021-06-12

![BasicAirData-GPSLogger-002][]

O BasicAirData GPS Logger é uma aplicação simples para registar a sua posição e o seu percurso. É um localizador GPS básico e leve, centrado na precisão, com vista à poupança de energia. Esta aplicação é muito precisa na determinação da altitude se ativar a correção automática da altitude EGM96 nas configurações. Pode gravar todas as suas viagens, visualizá-las no seu visualizador externo preferido (tem de ser instalado) diretamente a partir da lista de percursos na aplicação e partilhá-las em formato KML, GPX e TXT de várias formas.

A aplicação está disponível para dispositivos Android, é gratuita e de código aberto.

A aplicação pode ser descarregada gratuitamente a partir do [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Em alternativa, o APK pode ser descarregado diretamente no repositório do GPSLogger [GitHub](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Funcionalidades
--------

![BasicAirData-GPSLogger-000][]

* Gravação de percursos - a aplicação não tem mapas integrados
* Uma interface moderna com um tema escuro de baixo consumo e uma interface com separadores
* Gravação em primeiro e segundo plano (No Android 6+, desative todas as otimizações e monitorização da bateria para esta aplicação)
* Criação de marcadores de posição também durante a gravação
* Visualização da informação GPS
* Correção manual da altitude (adição de um desvio global)
* Correção automática da altitude com base no modelo geoide terrestre NGA EGM96 (deve ser ativado nas configurações)
* Estatísticas de percursos em tempo real
* Lista de percursos na aplicação que mostra a lista de percursos gravados
* Visualização dos seus percursos utilizando qualquer visualizador KML/GPX instalado, diretamente a partir da lista de percursos
* Exportação do percurso na pasta /GPSLogger do seu dispositivo, em KML, GPX e TXT
* Partilha de percursos, em formato KML, GPX e TXT, por e-mail, Dropbox, Google Drive, FTP...
* Utiliza unidades métricas, imperiais ou náuticas

Utilização básica
-----------

![BasicAirData-GPSLogger-001][]

Se a localização GPS não estiver ativa no seu telemóvel, ative-a. Em seguida, vá para uma área aberta e inicie o GPS Logger.

1. Aguarde até que a aplicação encontre a correção. Quando disponível, o separador __GPS FIX__ começará a mostrar as coordenadas do Fix. Nesta altura (quando possível), deve esperar pelo menos mais um minuto antes de avançar para a fase seguinte, de modo a permitir que o sinal estabilize
2. Clique no botão __Gravar__ do painel inferior para iniciar a gravação de pontos de percursos. O botão fica vermelho. Para ligar e desligar o processo de gravação em qualquer altura, clique nesse botão. Na parte superior do botão, a aplicação mostra o número de pontos do percurso gravado.
Pode ir ao separador __PERCURSO__ para ver em tempo real as estatísticas da sua viagem.
3. Quando a viagem estiver concluída, clique no botão __Parar__ para finalizar (terminar) o trajeto ativo. Aparecerá uma caixa de diálogo, clique em __OK__ para confirmar.
4. Vá para o separador __TRACKLIST__, onde encontrará o percurso que acabou de gravar. Toque na faixa. Aparecerá um menu. Pode optar por partilhar o percurso de várias formas, visualizá-lo utilizando um visualizador externo instalado, editar os detalhes do percurso, exportá-lo para a pasta /GPSLogger do seu telemóvel ou eliminá-lo da lista de percursos. Os formatos utilizados para exportação podem ser configurados no ecrã de configurações.

Importação de percursos GPX no OpenStreetMap Editor
--------------------------------------------

Quando terminar a recolha de dados no terreno, pode importar os percursos GPX para utilizar no JOSM, iD ou outro editor OpenStreetMap.
Pode utilizar este procedimento simples em duas etapas:

1. Guarde o percurso GPX no seu computador pessoal de uma das seguintes formas:
* Vá à lista de percursos do GPS Logger, toque no percurso pretendido e, em seguida, clique em __Exportar__; o ficheiro GPX será criado e guardado na pasta /GPSLogger do seu dispositivo Android (certifique-se que o formato GPX está ativado no ecrã de configurações). Em seguida, ligue o telemóvel ao PC utilizando um cabo USB e mova (ou copie) os seus percursos GPX para o PC utilizando o gestor de ficheiros;
* Como alternativa, pode utilizar a funcionalidade __Partilhar__ para enviar o ficheiro para o PC (pode fazê-lo através de e-mail, FTP ou utilizando muitos serviços na nuvem). As possibilidades de partilha dependem das aplicações de terceiros instaladas no seu dispositivo Android;
2. Importar o percurso GPX para o seu editor OpenStreetMap: usar os percursos GPX com os editores JOSM e iD é fácil, basta arrastar os ficheiros e largá-los na aplicação (ou no separador do navegador, no caso do iD).

Documentação oficial
----------------------

- Para mais informações sobre esta aplicação, pode ler [este artigo] (http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Aqui](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) pode encontrar um guia de iniciação e uma descrição geral das configurações da aplicação.<br>
- Problemas durante a utilização ou configuração do GPS Logger? Leia a página [Perguntas frequentes] (https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions)!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg