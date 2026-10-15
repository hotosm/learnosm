---
layout: doc
title: Aerial Imagery
permalink: /fr/josm/aerial-imagery/
lang: fr
category: josm
---

Imagerie aérienne
================

> Révisé le 21 septembre 2015  

Le traçage de l'imagerie est un moyen facile et puissant de contribuer à OSM. L'utilisation de l'imagerie pour dessiner des points, des lignes et des surfaces sur le terrain est appelée **digitalisation**. Elle peut souvent être séparée de l'acte de collecte des données d'attributs sur le terrain, qui est souvent appelé **vérification au sol**. La numérisation de l'imagerie peut fournir le squelette des cartes OSM, ce qui facilite la vérification au sol pour les personnes sur le terrain. Dans ce chapitre, nous allons en apprendre un peu plus sur le fonctionnement de l'imagerie aérienne.  

A propos de l'imagerie
-------------

L'imagerie aérienne est le terme que l'on utilise pour décrire les photographies qui sont prises depuis le ciel. Elles peuvent être prises à partir d'avions, de drones, d'hélicoptères ou même de cerfs-volants et de ballons, mais la source la plus courante d'imagerie provient de satellites en orbite autour de la Terre.  

[Dans le chapitre sur le GPS](/fr/mobile-mapping/using-gps), nous avons découvert les dizaines de satellites en orbite autour de la Terre qui permettent à nos récepteurs GPS d'identifier notre latitude et notre longitude. En plus de ces satellites GPS, il existe également des satellites qui prennent des photos de la Terre. Ces photos sont ensuite manipulées pour pouvoir être utilisées dans des logiciels SIG (cartographie). L'imagerie aérienne de Bing est constituée de photos satellites.  

Résolution
----------

Toutes les photographies numériques sont composées de pixels. Si vous zoomez de très près sur une photographie, vous remarquerez que l'image commence à devenir floue, et vous finirez par voir qu'une image est constituée de milliers de petits carrés de couleur différente. Cela est vrai, que la photographie soit prise avec un appareil photo portatif, un téléphone portable ou un satellite en orbite autour de la Terre.  

![Image resolution][]

La résolution fait référence au nombre de pixels de largeur par le nombre de pixels de hauteur d'une image. Plus il y a de pixels, plus la résolution est élevée, ce qui signifie que vous êtes en mesure de voir plus de détails dans la photographie. La résolution des appareils photo portatifs est souvent mesurée en mégapixels. Plus votre appareil est capable d'enregistrer de mégapixels, plus la résolution de vos photos est élevée.  

L'imagerie aérienne est identique, sauf que nous parlons généralement de résolution différemment. La mesure est importante avec les photographies aériennes - ainsi, un pixel représente une certaine distance sur le sol. Nous décrivons généralement l'imagerie comme une "imagerie de résolution de deux mètres", ce qui signifie qu'un pixel équivaut à deux mètres sur le sol. Les images d'un mètre de résolution ont une résolution plus élevée que cela, et celles de 50 cm sont encore plus élevées. Il s'agit généralement de la gamme d'images fournies par Bing, bien qu'elle varie d'un endroit à l'autre. Dans de nombreux endroits, la résolution est inférieure à deux mètres, et il devient alors difficile d'identifier les objets sur l'image.  

![Comparison of low and high resolution imagery][]

Plus la résolution d'une image aérienne est élevée, plus elle est facile à utiliser pour la réalisation de cartes.  

Géoréférencement
---------------

Chaque pixel d'une photographie aérienne a une taille, et chaque pixel a également un emplacement. Comme nous l'avons mentionné plus haut, ceci est dû au fait que les photographies aériennes sont géoréférencées.  

Tout comme un point GPS a une latitude et une longitude, il en va de même pour les pixels d'une image aérienne. Cependant, tout comme une mauvaise résolution peut poser des problèmes de cartographie, les images mal géoréférencées peuvent également poser des problèmes.  

Réfléchissons un instant au fonctionnement du géoréférencement et aux raisons pour lesquelles il est difficile à réaliser. Lorsque quelqu'un géoréférence une image, il identifie d'abord une poignée de pixels dans l'image qui sont des emplacements connus. Si nous avons une photographie carrée, nous pouvons identifier les coordonnées des quatre coins, ce qui permet de placer correctement l'ensemble de l'image.  

Tout cela semble très simple, mais considérez ceci : La Terre est ronde, les lentilles des appareils photo sont rondes, mais les photographies sont plates et bidimensionnelles. Cela signifie que lorsqu'une image plate est reproduite sur la Terre ronde, il y aura toujours un étirement de l'image et une distorsion. Imaginez que vous essayez d'aplatir une peau d'orange. Elle ne sera pas rectangulaire. À cause de ce problème, tous les pixels d'une image aérienne peuvent ne pas être parfaitement placés.  

Heureusement, des personnes très intelligentes ont mis au point des algorithmes astucieux pour résoudre ce problème, de sorte que l'imagerie que vous voyez sur Bing est pratiquement exacte. Dans la plupart des endroits, les erreurs ne sont pas perceptibles, et elles conviennent parfaitement à la réalisation de cartes. Les zones les plus courantes où l'imagerie est inexacte sont les zones vallonnées et montagneuses. Dans le chapitre [Correction du décalage de l'imagerie](/fr/josm/correction du décalage de l'imagerie), nous verrons comment corriger ce problème.  

[Résolution de l'image]: /images/josm/orange-resolution.png
[Comparaison de l'imagerie à basse et haute résolution]: /images/josm/low-res-high-res.png