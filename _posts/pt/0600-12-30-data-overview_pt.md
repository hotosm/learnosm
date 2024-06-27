---
layout: doc
title: Visão geral dos dados OSM
permalink: /pt/osm-data/data-overview/
lang: pt
category: osm-data
---

Visão geral dos dados OSM
==================


> Revisto em 2016-09-05

<!--Nesta secção, vamos analisar como funciona o OpenStreetMap, o que nos ajudará a compreender melhor como os dados estão estruturados e como podemos utilizá-los da melhor forma.-->

Como funciona o OSM
--------------
Vejamos como funciona o OpenStreetMap. Milhares de utilizadores em todo o mundo adicionam e editam continuamente o mapa, mas o que se passa nos bastidores?  

Quando um utilizador faz alterações usando software de edição como o JOSM ou o iD, o software comunica com um servidor central do OpenStreetMap e notifica-o das suas alterações. Nesse servidor existe uma enorme base de dados, que contém toda a informação de localização e atributos sobre cada uma das características geográficas de todo o OpenStreetMap.  

Como o OSM é gratuito e aberto, qualquer pessoa pode descarregar todos os dados desta base de dados. No entanto, devido à sua enorme dimensão (*os dados têm mais de 30 GB mesmo quando comprimidos*), é quase impossível trabalhar com todos os dados de uma só vez.  

Devido a esta limitação, existem vários métodos de **exportação** e **extração** de dados que são abordados nesta secção. Exportar significa converter os dados do OpenStreetMap do seu formato nativo para um formato que lhe seja conveniente. Isto é ligeiramente diferente de **extrair** dados, que significa cortar os dados da área da sua escolha. Também pode significar extrair as características específicas que pretende de uma área. Estes termos são muitas vezes utilizados indistintamente. Aprenderemos mais sobre isto na secção Dados OSM.  

Utilização de geodados
--------------
Se não é um utilizador experiente de SIG, é importante compreender a diferença entre o software de edição OSM, como o JOSM, e o software SIG, como o Quantum GIS e o ArcGIS.  

Editores como o iD ou o JOSM têm uma função central em que são muito bons - facilitar aos utilizadores a edição do OpenStreetMap. Mas não são software destinado a analisar ou consultar dados.
é preferível deixar esta função para outras aplicações. O software GIS, como o gratuito e de código aberto [Quantum GIS (QGIS)](http://www.qgis.org), permite aos utilizadores desenhar mapas com bom aspeto, consultar e analisar dados, e muito mais. O software GIS também pode ser usado para editar geodados, mas é muito mais fácil editar o OpenStreetMap com os editores dedicados do OSM.  

No próximo capítulo vamos analisar mais detalhadamente os formatos de ficheiros que estão associados ao OpenStreetMap e aos dados geográficos em geral. Depois, veremos as várias formas de aceder e manipular os dados do OSM e de os converter entre diferentes tipos de ficheiros.  


Obter os dados
-----------------

Isso é ótimo, mas como é que se obtêm os dados que se pretendem?  

Neste capítulo vamos abordar as várias formas de exportar dados OSM. Limitar-nos-emos ao básico, mas tenha em mente que, para utilizar os dados de forma eficaz, provavelmente necessitará de software SIG,
como a aplicação gratuita Quantum GIS.  

Antes de começarmos, vamos rever alguma terminologia. Primeiro, **exportar** significa converter os dados do OpenStreetMap do seu formato nativo XML para um formato que lhe seja conveniente. Isto é ligeiramente diferente de **extrair** dados, que significa cortar os dados da área da sua escolha. Também pode significar extrair as características específicas que pretende de uma área. Iremos utilizar estes termos frequentemente neste capítulo, pelo que é importante compreender a diferença.  

A API do OSM
------------
O processo de edição do OSM funciona graças ao que se designa por API, que permite ao software de edição comunicar com o servidor central. Por exemplo, quando se está a utilizar o JOSM e se seleciona a área que se pretende mapear, é enviada uma chamada API para o servidor, solicitando todos os dados existentes na área selecionada.  

De facto, quando descarrega dados no JOSM, está a **extrair** os dados de uma área específica do mundo. Os dados são então enviados para si no formato **.osm**, que pode depois editar no JOSM. Se descarregar dados no JOSM e depois os guardar, verá que o tipo de ficheiro é **.osm**. Falaremos mais sobre isto no próximo capítulo.  
