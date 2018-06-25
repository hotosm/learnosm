---
layout: doc
title: Éditeur iD
permalink: /fr/beginner/id-editor/
lang: fr
category: beginner
---

L’Éditeur iD
=============

> Ce guide peut être téléchargé : [beginner_id-editor_fr.odt](/files/beginner_id-editor_fr.odt) ou [beginner_id-editor_fr.pdf](/files/beginner_id-editor_fr.pdf)  
Révision 2016-03-30  

- TOC
{:toc}

L’Éditeur iD est, de facto, l’éditeur OpenStreetMap basé sur un navigateur web. iD est rapide et facile d’utilisation. Il permet de cartographier a partir de sources de données variées telles que des images satellites, des images aériennes, des traces GPS, Field Papers ou Mapillary.  

L’Éditeur iD est un très bon moyen de contribuer de petites modifications qui ne requièrent pas les fonctionnalités avancées de JOSM (un logiciel de cartographie plus avancé). Ce chapitre illustre les bases de l’édition avec iD.  

Lancer l'éditeur iD
----------------------

	L’Éditeur iD requiert une connexion internet active.  
	﻿Ouvrez votre navigateur internet et allez sur le site web OpenStreetMap à l’adresse [http://www.openstreetmap.org](http://www.openstreetmap.org).  
	**Connectez-vous** avec votre compte OpenStreetMap  
	Centrez et zoomez la carte sur la zone que vous souhaitez éditer. Vous pouvez déplacer la vue en maintenant le bouton gauche de la souris enfoncé et en tirant la carte vers l’endroit désiré.  
	Cliquez sur la petite flèche à côté de **Modifier**. Cliquez ensuite sur **Modifier avec iD (éditeur intégré au navigateur)**.  

![image1][]


Interface Utilisateur de l’Éditeur iD
-------------------------
![image2][]

1. **Panel d’Édition :** Ce panel affiche les tags associés à l’objet sélectionné sur la carte.  
	Vous pouvez ajouter ou éditer les tags dans ce panel.  
2. **Outils :** Ce panel offre des outils d’édition basiques :  
    Tracer un point (nœud), *raccourci* **1** ![image3][]{: height="24px"}  
    Tracer une ligne (chemin), *raccourci* **2** ![image4][]{: height="24px"}  
    Tracer un polygone (forme), *raccourci* **3** ![image5][]{: height="24px"}  
    Annuler, *raccourci* **Ctrl+z** ![image6][]{: height="24px"}  
    Rétablir, *raccourci* **Ctrl+y** ![image7][]{: height="24px"}  
    Sauvegarder, *raccourci* **Ctrl+s** ![image8][]{: height="24px"}  
3. ***Carte :*** Ce panel affiche plusieurs fonctions de configuration :  
    Zoomer, *raccourci* **+** ![image9][]{: height="24px"}  
    Dézoomer, *raccourci* **-** ![image10][]{: height="24px"}  
    Me localiser ![image11][]{: height="24px"}  
    Paramètres du fond de carte, *raccourci* **b** ![image12][]{: height="24px"}  
    Données cartographiques, *raccourci* **f** ![Map Data][]{: height="24px"}  
    Aide, *raccourci* **h** ![image13][]{: height="24px"}  
4. **Panel d’information :** Ce panel affiche des informations variées telles que l’échelle et les utilisateurs ayant contribué à cette zone.  

Configurer le fond de carte
--------------------------------

Cliquez sur le bouton **Paramètres du fond de carte** ou utilisez le *raccourci* **b**.![image14][]{: height="24px"}  
![image15][]  
Pour changer le **niveau de luminosité** cliquer sur l’une des icônes, les niveaux proposés sont 100%, 75%, 50%, et 25% ![image16][]{: height="24px"}  
Vous pouvez aussi **changer le fond de carte** pour le fournisseur de votre choix (le fond par défaut est Bing Aerial Imagery).  

Vous pouvez ajouter vos propres tuiles en cliquant sur **Personnalisé**. Par exemple, si vous souhaitez ajouter un **Field Paper** [^fieldpaper], cliquez sur **Personnalisé** puis cliquez sur l’icône de loupe (rechercher) pour ouvrir la fenêtre suivante :-  
![image17][]   
et entrez votre **URL FieldPaper**, qui sera quelque chose comme : <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Pour **afficher des traces GPS depuis votre ordinateur** (au format GPX), glissez-déposez le fichier GPX dans l’éditeur iD.  
Pour activer les **traces GPS OpenStreetMap**, cliquez sur la case à cocher. Dans l’image suivante, les traces GPS publiques s’affichent de plusieurs couleurs, indiquant la direction du trajet.  
![osm gps traces][]  
S’il y a un [décalage d’imagerie](/fr/josm/aerial-imagery), vous pouvez **corriger le décalage** en cliquant sur **Corriger le décalage de l’imagerie**. ![image18][]  

- Cliquez sur les flèches de navigation pour déplacer l’imagerie. Cliquez sur réinitialiser pour retourner à la position par défaut. ![image20][]  

Édition Basique avec iD  
----------------------  

### Ajouter des Points  

Pour ajouter un nouveau nœud (point), cliquez sur le bouton **Point**. ![image3][]{: height="24px"}  

- Le curseur de la souris devient un signe plus (+). Maintenant, cliquez à un endroit qui marque un emplacement. Par exemple, s'il y a un hôpital dans votre région, cliquez à l'emplacement du bâtiment de l'hôpital.  
![image21][]  
- Remarquez qu'un nouveau nœud (point) a été ajouté. En même temps, le panneau de gauche change pour afficher un formulaire où vous pouvez sélectionner des attributs pour l'objet. Cliquez sur **Hospital Grounds** pour marquer le point comme étant un hôpital.  
![image22][]  
- Vous pouvez utiliser le formulaire pour renseigner d'autres informations détaillées concernant votre nœud. Vous pouvez renseigner le nom de l'hôpital, l'adresse, et/ou d'autres informations additionnelles. Notez que chaque type d'élément cartographique a des options différentes, selon l'attribut que vous choisissez dans le panneau des éléments.  
- Si vous faites une erreur, comme un mauvais emplacement, vous pouvez déplacer votre nœud à un nouvel emplacement en maintenant le bouton gauche de votre souris sur votre nœud et en le glissant. Vous pouvez aussi supprimer votre nœud en cliquant avec le bouton droit de la souris sur votre nœud, puis en cliquant sur le bouton qui ressemble à une poubelle. ![image23][]{: height="24px"}  
Un « point » créé dans l'éditeur iD est en fait un « nœud » indépendant avec un ensemble d'« attributs ».  

### Dessiner des Lignes  

Pour ajouter une nouvelle ligne, cliquer sur le bouton **Ligne**. ![image4][]{: height="24px"}  

- Le curseur de votre souris se change en un signe plus (+). Trouvez une route qui n'a pas été dessinée sur la carte et tracez-là. Cliquez sur un point où le segment de route commence, déplacez votre souris, puis cliquez pour ajouter des points supplémentaires. Double-cliquez pour terminer l'action de dessin. Notez le panneau sur la gauche.  
![image24][]  
- Comme pour un point, sélectionnez les attributs appropriés pour votre ligne.  
- Vous pouvez déplacer des points de la ligne en faisant un clic gauche sur un point et en le glissant.  
- Vous pouvez aussi déplacer toute la ligne en la sélectionnant, puis en choisissant l'outil **Déplacer**. Puis glissez la ligne vers une nouvelle position. ![image30][]{: height="24px"}  
- Quand vous faites un clic gauche sur un point individuel (nœud) sur la ligne, vous pouvez voir ces outils :  
- Supprimer le point de la ligne. ![image23][]{: height="24px"}  
- Déconnecter le point de la ligne. ![image26][]{: height="24px"}  
- Diviser la ligne en deux lignes au niveau du point sélectionné. ![image27][]{: height="24px"}  
- Quand vous faites un clic gauche sur une ligne (mais pas sur un point), vous pouvez voir ces outils :  
- Supprimer la ligne. ![image23][]{: height="24px"}  
- Créer un cercle à partir d'une ligne (disponible seulement si la ligne fait une boucle fermée). ![image29][]{: height="24px"}  
- Déplacer une ligne. ![image30][]{: height="24px"}  
- Faire une forme rectangulaire à partir d'une ligne (disponible seulement si la ligne fait une boucle fermée). ![image31][]{: height="24px"}  
- Inverser la direction de la ligne (utile pour les rivières et les rues à sens unique). ![image32][]{: height="24px"}  

Une « ligne » créée dans l'éditeur iD est en fait un « chemin » (« way ») avec des « attributs » (« tags ») associés.

>Note concernant la **Suppression** : en général, vous devriez améliorer les éléments de carte faits par d'autres personnes, plutôt que de les supprimer, si c'est possible. Vous pouvez supprimer vos propres erreurs, mais vous devriez essayer *d'ajuster* les objets de la carte créés par d'autres personnes, si nécessaire. Cela permet de préserver l'historique des modifications des éléments dans la base de données OSM, et c'est plus respectueux pour vos camarades cartographes. Si vous pensez vraiment que quelque chose devrait être supprimé, vous pouvez envisager de commencer par en parler au cartographe d'origine, ou à une des listes de diffusions OSM.

### Dessiner des Formes (Polygones)

Pour ajouter une nouvelle forme à plusieurs côtés (polygone), cliquez sur le bouton **Polygone**. ![image34][]{: height="24px"}  

- Le curseur de votre souris se changera en un signe plus (+). Essayez de tracer un bâtiment en vous basant sur l'imagerie satellite.  
- Vous pouvez remarquer que la couleur de votre polygone change en fonction des attributs que vous lui assignez.  
![image35][]  
- Les outils disponibles quand vous sélectionnez un polygone sont similaires à ceux disponibles pour une ligne.  

Un « polygone » dans l'éditeur iD est en fait un « chemin fermé » (qui fait une boucle) avec des attributs.

Sauvegarder vos modifications
-----------------------------

Quand (et si) vous voulez sauvegarder vos modifications dans OpenStreetMap, cliquez sur le bouton **Sauvegarder**. Le panneau de gauche affichera le panneau de sauvegarde.  
![image36][]  

- Écrivez un commentaire qui décrit vos modifications, puis cliquez sur **Envoyer**.  

> Si vous avez modifié le même élément cartographique (point, chemin ou polygone) en même temps qu'une autre personne, un avertissement s'affichera, indiquant que vos modifications ne peuvent pas être sauvegardée tant que vous n'avez pas résolu les **conflits** - choisissez quelles modifications il faut garder, puis sauvegardez vos modifications. *Pour résoudre un conflit, il faut souvent accepter les modifications de l'autre personne. Dans ce cas, vous aurez sûrement intérêt à retourner sur l'élément en question pour refaire vos modifications (**cette fois, sauvegarder rapidement après vos modifications, pour éviter un nouveau conflit !**).*

Informations additionnelle et attributs spécifiques
---------------------------------------------------

Quand vous êtes en train de modifier un objet, vous pouvez voir une bande d'icônes en bas du panneau des attributs. Vous pouvez ajouter des informations complémentaires en cliquant sur ces icônes :

- Ajouter une altitude ![image37][]{: height="24px"}  
- Ajouter des notes  ![image38][]{: height="24px"}  
- Ajouter des informations de contact / un numéro de téléphone ![image39][]{: height="24px"}  
- Ajouter un attribut de source ![image40][]{: height="24px"}  
- Ajouter un site Web ![image41][]{: height="24px"}  
- Ajouter des informations sur l'accessibilité ![image42][]{: height="24px"}  
- Ajouter un lien Wikipédia ![image43][]{: height="24px"}  

Vous pouvez aussi ajouter des attributs spécifiques en cliquant sur **All tags**. ![image44][]{: height="24px"}  

- Cela montrera tous les attributs attachés à l'élément.  
![image45][]  
- Cliquez sur le signe plus (+) pour ajouter des attributs et des valeurs, ou cliquez sur l'icône en forme de corbeille pour les supprimer.

iD vs JOSM
----------  

**iD est bien pour...**

- quand vous faites des modifications simples  
- quand vous avez une connexion rapide à Internet, pour charger l'imagerie satellite et sauvegarder vos modifications  
- quand vous voulez être sûr de suivre un ensemble de règles simples et cohérentes pour les attributs  
- quand vous ne pouvez pas installer un logiciel sur l'ordinateur que vous utilisez

**JOSM est mieux...**

- quand vous ajoutez de nombreux bâtiments (voir le greffon buildings_tool)
- quand vous modifiez de nombreux polygones ou lignes qui existent déjà
- quand vous êtes hors connexion, ou quand vous utilisez une connexion à Internet instable
- quand vous utilisez un ensemble d'attributs spécifiques (ou des présélections personnalisées)

[^fieldpaper]: Il y a une [section de LearnOSM](/fr/mobile-mapping/field-papers/) avec plus d'informations sur les Field Papers.




[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png
