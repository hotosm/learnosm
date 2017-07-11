---
layout: doc
title: Immagini aeree
permalink: /it/josm/aerial-imagery/
lang: it
category: josm
---

Immagini Aeree
================

> Questa guida può essere scaricata come [aerial-imagery_it.odt](/files/aerial-imagery_it.odt) oppure [aerial-imagery_it.pdf](/files/aerial-imagery_it.pdf)  
> Revisionato il 2015-09-21  

Tracciare immagini aeree è un modo semplice e potente di contribuire a OSM. Usare le immagini per disegnare punti, linee e forme è detto **digitizing** (digitalizzazione). Questa può anche essere separato dall'attività di raccolta di dati sul posto che è spesso chiamato **ground-truthing** (lavoro sul campo). Digitalizzare un'immagine può fornire lo scheletro delle mappe OSM, il che renderà più semplice l'attività delle persone sul campo. In questo capitolo impareremoqualcosa in più su come funzionano le immagini aeree.  

Cosa sono
-------------

Immagini aeree è il termine che usiamo per descrivere fotografie scattate dal cielo. Queste possono essere state riprese da aerei, droni, elicotteri o anche da aquiloni e palloni aerostatici, ma la fonte più comune di immagini sono i satelliti che orbitano attorno alla Terra.  

[Nel capitolo sul GPS](/it/mobile-mapping/using-gps) abbiamo appreso delle dozzine di satelliti che orbitano attorno alla Terra e permettono ai nostri ricevitori GPS di conoscere la nostra latitudine e longitudine. Oltre a questi satelliti GPS, esistono anche dei satelliti che scattano foto alla Terra. Queste foto sono poi manipolate in modo da poter essere utilizzate nei software (di mappatura) GIS. Le Bing Aerial Imagery sono immagini satellitari.  

Risoluzione
----------

Tutte le fotografie digitali sono costituite da pixel. Se ingrandisci abbastanza una fotografia, noterai che comincerà a diventare sfocata e, infine, vedrai che l'immagine è composta da migliaia di piccoli quadrati, ognuno di un diverso colore. Questo vale sia che l'immagine sia stata scattata con una macchina fotografica o con un telefono, sia che sia stata scattata da un satellite.  

![Image resolution][]

La risoluzione fa riferimento al numero di pixel di larghezza per il numero di pixel di altezza dell'immagine. Più pixel corrispondono ad una maggiore risoluzione, il che significa che sarai in grado di cogliere un maggior numero di dettagli nella fotografia. La risoluzione delle fotocamere portatili è spesso misurata in megapixel. Più megapixel ha la tua fotocamera, maggiore sarà la risoluzione delle tue foto.  

Per le immagini aeree è lo stesso, salvo che indichiamo la risoluzione in maniera diversa. Le misure sono importanti nelle fotografie aeree, perciò un pixel rappresenterà una certa distanza sul terreno. Solitamente descriviamo le immagini come "immagini con risoluzione due metri", il che significa che un pixel equivale a due metri sul terreno. Un'immagine di risoluzione un metro avrà una risoluzione più alta di questa e una risoluzione di 50cm sarà più alta ancora. Questo è in genere l'intervallo delle immagini fornite da Bing, anche se varia da zona a zona ed in alcuni posti è anche peggiore di due metri, tale da rendere difficile identificare gli oggetti all'interno dell'immagine.  

![Comparison of low and high resolution imagery][]

Più la risoluzione di un'immagine è alta tanto più facile sarà utilizzarla per mappare.  

Georeferenziazione
---------------

Ogni pixel di un'immagine aerea ha una dimensione e ogni pixel ha anche una posizione. Questo è dato dal fatto che le fotografie aeree sono georeferenziate.  

Proprio come un punto GPS ha una propria latitudine e longitudine, così ce l'hanno anche i pixel in un'immagine aerea. Tuttavia, come la bassa risoluzione può rendere difficoltosa la mappatura, così può fare anche anche un'immagine mal georeferenziata.  

Pensiamo un attimo a come funziona la georeferenziazione, e a perchè è così impegnativa da fare. Quando qualcuno georeferenzia un'immagine, per prima cosa identifica una manciata di pixel nell'immagine che rappresentano posizioni note. Se avessimo una fotografia quadrata, potremmo identificare le coordinate dei quattro angoli e in tal modo tutta l'immagine sarebbe correttamente posizionata.  

Tutto ciò appare abbastanza semplice ma pensiamo un attimo, la terra è sferica, tuttavia le fotografie sono piatte, bidimensionali. Questo significa che, quando mappiamo un'immagine piatta sulla Terra sferica, ci sarà sempre uno stiramento dell'immagine e un po' di distorsione. Immagina di provare ad appiattire la buccia di un'arancia. Non diventerà mai rettangolare. A causa di questo problema tutti i pixel di un'immagine aerea non saranno proprio perfettamente posizionati.  

Fortunatamente, delle persone veramente intelligenti hanno ideato degli ingegnosi algoritmi per risolvere questo problema. Quindi l'immagine che vedi su Bing è abbastanza prossima all'essere precisa. In molti posti non sarà affatto male e sarà di sicuro adatta a realizzare delle mappe. Le zone più comuni in cui le immagini presentano errori di posizionamento sono le zone montuose, collinari. Nel capitolo [correggere lo scostamento delle immagini](/it/josm/correcting-imagery-offset) vedremo come correggere questo problema.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png