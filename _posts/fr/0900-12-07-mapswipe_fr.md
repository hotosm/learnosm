---
layout: doc
title: MapSwipe
permalink: /fr/mobile-mapping/mapswipe/
lang: fr
category: mobile-mapping
---

MapSwipe
==============

MapSwipe est une application mobile qui vise à préparer l'imagerie satellite pour la cartographie à plus grande échelle dans OpenStreetMap (OSM). Grâce aux informations de MapSwipe, les cartographes d'OSM n'ont pas besoin de passer un temps précieux à balayer des zones non peuplées (par exemple, des déserts ou des forêts) ou des zones dont les données sont de mauvaise qualité. Ces zones ont déjà été filtrées par Mapswipe. La frontière rouge sur cette image marque la zone d'intérêt, les zones vertes sont celles acceptées par Mapswipe comme des zones contenant des caractéristiques.

![TM][]

Mapswipe se distingue des autres formes de cartographie par sa simplicité et sa facilité d'utilisation.

## Comment utiliser Mapswipe

Vous devez d'abord choisir votre "mission". Chaque mission contient plusieurs tuiles d'images que vous pouvez faire défiler.

Ce que vous pouvez faire avec les tuiles dépend du type de mission.

- Zone construite. Appuyer sur la tuile si elle contient l'un des éléments (bâtiment, route, etc).
 ![contains][]

- Empreinte de bâtiment. Indique si un élément cartographique est correct ou non
 ![shape][]

- Détection de modification (expérimental). Avec des images avant/après; l'utilisateur devra identifier s'il y a eu des changements
 ![changed][]

## Demander un projet

Mapswipe est développé par le [Projet Missing Maps](https://www.missingmaps.org/). Toutefois, d'autres organisations peuvent demander à utiliser Mapswipe.

Voir aussi

- [Page principale du projet](https://mapswipe.org/en/about.html)
- [Wiki OSM](https://wiki.openstreetmap.org/wiki/MapSwipe)
- [MapSwipe sur YouTube](https://youtu.be/mwRdtnfFcUw)


[TM]:       /images/mobile-mapping/mapswipe_tm.png
[contains]: /images/mobile-mapping/mapswipe_contains.png
[shape]:    /images/mobile-mapping/mapswipe_shape.png
[changed]:  /images/mobile-mapping/mapswipe_changed.png
