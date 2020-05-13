---
layout: doc
title: Tracer des bâtiments rectangulaires - Éditeur iD
permalink: /fr/hot-tips/tracing-rectangular-buildings/
lang: fr
category: hot-tips
---

Tracer des bâtiments rectangulaires - Éditeur iD
============

> Mis à jour le 2019-06-23

- TOC
{:toc}

L'essentiel
----------

![Rectangular building][]  

> Cette image ![keymon]{: height="24px "} vous montre quels boutons ou molette d'une souris ont été utilisés et quels boutons du clavier ont été enfoncés.  

Points à noter :  

- Pour terminer le tracé d'une zone, double-cliquez sur le dernier point,  
- Si le bâtiment doit avoir des coins carrés, assurez-vous de le tracer avec des coins carrés, ou utilisez l'outil pour rendre les coins carrés (raccourci **q**).  
- Assurez-vous d'ajouter les tags !  
- La taille compte - *Les estimations de la population sont basées sur la superficie cumulée des bâtiments dans une zone donnée*  
- la bonne taille du bâtiment dans la bonne direction aidera les gens à localiser leur village,  
- Zoomez assez pour voir les détails - une échelle de zoom de 20 mètres ou moins est généralement appropriée.  
- **Recherche de bâtiments** - scannez avec votre échelle entre 50 et 80 mètres. Attention aux ombres et aux lignes droites (les bâtiments ronds sont plus difficiles à trouver !)  
- Les bâtiments et les routes, les rivières, les limites de zone résidentielle (**landuse=residential**) ou d'autres éléments ne doivent pas se chevaucher.  
- Si vous faites une erreur, utilisez le bouton **Annuler** ![back arrow]{: height="26px "} pour annuler votre (vos) dernière(s) modification(s)  
- On améliore tous la carte. Si le contributeur précédent a laissé les bâtiments avec une forme étrange ou incorrecte d'une manière ou d'une autre, corrigez-les et envisagez de leur envoyer un message poli.  

Bâtiments partiellement cachés ou vus sous un angle  
--------------------------------------

![building-obscured][]  

Il est courant que l'image satellite soit prise à un angle qui rend le bâtiment déformé. Dans l'image ci-dessus, l'image à droite montre comment le bâtiment doit être tracé. Il est souvent plus facile de tracer le contour du toit, puis de le faire glisser au point où les murs rencontrent le sol - c'était la technique utilisée pour tracer le bâtiment ci-dessus. Notez également qu'un bâtiment partiellement caché par les arbres a été correctement tracé comme rectangulaire. 

Bâtiments avec un toit strié
----------------------------
 
La plupart des bâtiments ont soit des coins à 90 degrés, soit ce sont des bâtiments ronds.  

![building-ridge][]  
Ce bâtiment a des coins de 90 degrés, mais a une crête sur son toit. L'angle de la caméra donne initialement une forme étrange au bâtiment.  

![building-tree-ridge][]  
Ce bâtiment a un arbre qui l'occulte partiellement. C'est un bâtiment rectangulaire.  

Dans des régions isolées du monde, il est courant d'utiliser des panneaux de tôle ondulée comme toiture - lorsqu'ils sont nouveaux, ils reflètent la lumière du soleil, ce qui crée un reflet très lumineux** sur l'imagerie satellite. Il est courant que les bâtiments aient une véranda ou soient en **forme de L** et vous devez vous assurer que votre tracé suit la forme du bâtiment.  
Lorsque vous tracez le contour du bâtiment, vous devez essayer de tracer le bâtiment à la bonne taille, et au point où ses murs rencontrent le sol - faites de votre mieux ! Dans de nombreuses régions du monde, les bâtiments sont partiellement construits, puis laissés sans toiture jusqu'à ce qu'ils soient vendus ou devenus nécessaire. Cartographiez un bâtiment sans toit comme un bâtiment normal car il ne faut pas longtemps pour y ajouter un toit, et le toit peut avoir déjà été ajouté, depuis que l'imagerie satellite a été prise.  

Faites de votre mieux - même les experts seront parfois en désaccord, et parfois il nécessaire d'aller sur place pour voir exactement ce qui est vraiment là. **En cas de doute, ajoutez-le en tant que bâtiment. **  

Attributs des bâtiments
-------------

Comme nous ajoutons des attributs à des bâtiments que nous n'avons jamais visités et que nous ne connaissons pas, le schéma de balisage le plus sûr et recommandé est **building**=**yes** que vous pouvez voir sur un bâtiment correctement annoté si vous faites défiler vers le bas le panel des attributs et cliquez sur **Tous les tags**.  

Voir aussi  
---------

- [![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Tutoriaux Vidéos de l’équipe Humanitaire OpenstreetMap - Ajout d'un bâtiment à OpenStreetMap")  
*Sous-titres disponibles dans certaines langues*  

- [L'entrée du journal d'Ivan Gayton pour Hadjer Lamis, Tchad - les commentaires des autres indiquent que la description correspond aussi à d'autres parties du monde](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "Tracer un bâtiment rectangulaire, rendre les coins rectangulaires et ajouter des attributs."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "Before & after - tracing a building seen at an angle"
[building-video]: /images/hot-tips/building-video.png "Tutoriaux Vidéos de l’équipe Humanitaire OpenstreetMap - Ajout d'un bâtiment à OpenStreetMap"