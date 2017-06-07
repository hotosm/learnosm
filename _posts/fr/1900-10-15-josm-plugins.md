---
layout: doc
title: Greffons JOSM
permalink: /fr/josm/josm-plugins/
lang: fr
category: josm
otherguides: "Les autres niveaux"
---

Préférences et greffons JOSM
============================

À mesure que vous progressez dans votre technique d'édition des données,
vous aurez envie d'ajouter des fonctionnalités à JOSM pour augmenter votre
efficacité cartographique. Pour cela, JOSM vous offre de nombreux greffons 
(_plugins_) à installer, des outils supplémentaires dédiés à des tâches précises.
Vous avez déjà installé plusieurs greffons si vous avez suivi ce tutoriel.
Dans le chapitre précédent, vous avez installé un greffon dédié au SDS (Separate
Data Store), et avant cela, le greffon vous permettant d'utiliser les Walking Papers.
Il existe de très nombreux plugins différents pour JOSM, et nous allons couvrir
certains des plus utiles dans ce chapitre.

![plug]({{site.baseurl}}/images/plugins_html_m76fc73bd_en.png)

Chaque fois que vous voulez installer un nouveau greffon, cliquez sur 
Modifier --\> Préférences, puis sur l'onglet «Greffons». Si vous ne voyez pas une
liste des greffons disponibles, cliquez sur «Télécharger la liste».
Pour installer un greffon, cliquez sur la case à sa gauche puis sur Valider.
Ensuite, vous devez redémarrer JOSM, ce qui se révèle fastidieux à la longue.
Heureusement, nous allons commencer par installer un greffon qui relance JOSM pour vous !

Greffons recommandés :

- [Restart]({{site.baseurl}}/en/josm/josm-plugins/#restart) (ajoute un bouton ´redémarrer´)
- [Mirrored Download]({{site.baseurl}}/en/josm/josm-plugins/#mirrored-download) (vous permet de télécharger plus de données OSM)]
- [Direct Upload]({{site.baseurl}}/en/josm/josm-plugins/#direct-upload) (vous permet d'envoyer vos traces GPS)]
- [Editgpx]({{site.baseurl}}/en/josm/josm-plugins/#edit-gpx) (vous permet de modifier vos traces GPS)]
- [Print]({{site.baseurl}}/en/josm/josm-plugins/#print)

Nous vous recommandons également ces greffons, qui sont abordés dans d'autres chapitres :

- Walking Papers
- Buildings\_tool
- Utilsplugin2

Mirrored Download
-----------------

![]({{site.baseurl}}/images/plugins_html_m2c477766_en.png)

__Mirrored Download__ vous permet de télécharger plus vite les données OSM.
Au lieu d'utiliser le serveur OSM central, il vous permet de configurer un 
miroir, qui est une réplique exacte des données, mais situé plus près de vous
(en terme de réseau internet).

Une fois ce greffon installé, vous obtenez une nouvelle entrée dans le 
menu Fichier «Télécharger depuis un miroir OSM…»

![]({{site.baseurl}}/images/plugins_html_1f3d8d84_en.png)

Ensuite, le téléchargement se passe exactement de la même manière que ce que 
vous avez déjà vu, mais avec un peu de chance, il sera beaucoup plus rapide !

Direct Upload
-------------

![]({{site.baseurl}}/images/plugins_html_m37f530e4_en.png)

__DirectUpload__ envoie vos traces GPX au serveur OSM directement par JOSM
(voir les **Annexes** pour plus de détails). Avec ce greffon installé, vous
pouvez voir une entrée «Envoyer les traces» dans le menu Outils.

![]({{site.baseurl}}/images/plugins_html_m53ca88fd_en.png)

Si vous cliquez dessus, cette fenêtre va apparaître :

![]({{site.baseurl}}/images/plugins_html_2e01a9a7_en.png)

Dans le champ «Attributs», ajoutez des mots-clés (séparés par des virgules,
sans espaces) précisant votre trace GPS. Par exemple, 
«Pays,région,commune,quartier,nom de rue».
Ensuite, indiquez une description de vos attributs. Une liste déroulante vous
permet de réutiliser des attributs et des descriptions précédemment entrés.
Enfin, choisissez le type de visibilité que vous voulez appliquer à vos traces.
Il y a quatre niveaux, de privé à identifiable. Tout est expliqué plus loin
dans les [Annexes]{{site.baseurl}}/learnosm/fr/).

Cliquez sur le bouton «Envoyer la trace». Si vous n'êtes pas connecté à votre
compte OSM, vous devez le faire maintenant.

À la fin de l'envoi, un état «OK» apparaître dans la zone d'affichage et le bouton
«Envoyer la trace» passera en grisé. Vous trouverez plus de détails sur 
ce greffon et les envois de traces GPS dans les [Annexes]{{site.baseurl}}/learnosm/fr/).


edit gpx
--------

![]({{site.baseurl}}/images/plugins_html_m1d1170b2_en.png)

**EditGpx** vous permet de préparer des traces GPX avant de les envoyer à OSM.
Souvent, vos traces comportent des tronçons que vous préférez supprimer. Ce greffon
vous permet de supprimer rapidement des points et d'assurer un certain anonymat
en modifiant l'horodatage de la trace.

Une fois que le greffon est installé, dans la barre d'outil de gauche, vous aurez
accès à ce nouvel outil.
![]({{site.baseurl}}/images/plugins_html_42e55708_en.png)

1. Ouvrez un fichier GPX file dans JOSM![]({{site.baseurl}}/images/plugins_html_3fabdc1a_en.png)

2. Cliquez sur le nouveau bouton ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) dans la barre latérale gauche. Les données GPX vont être importées dans un nouveau calque EditGpx.
Chaque point de la trace sera surligné en jaune
![]({{site.baseurl}}/images/plugins_html_m3f86e83d_en.png)

3. Maintenant, marquez les points (en cliquant) ou les zones (en dessinant un
rectangle) à supprimer. Le surlignage jaune doit disparaître.
![]({{site.baseurl}}/images/plugins_html_m7e01ae1f_en.png)

4. Faites un clic-droit sur le nom du calque et choisissez 
«Convertir en calque GPX» dans le menu contextuel.

5. Vous pouvez maintenant enregistrer le calque GPX normal comme fichier, ou l'envoyer 
au serveur OSM (par exemple avec le greffon [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![]({{site.baseurl}}/images/plugins_html_m66e7a0a9_en.png)

Si vous cherchez une méthode simple pour imprimer une carte pendant que
vous modifier les données dans JOSM, installez ce greffon. Vous n'obtiendrez
pas une sortie stylée, mais un aperçu rapide des données disponibles dans JOSM.
Ce greffon ajoute au menu Fichier l'entrée «Imprimer…»

![]({{site.baseurl}}/images/plugins_html_mbd3c18f_en.png)

qui ouvre la boîte de dialogue «Imprimer la carte», semblable à :

![]({{site.baseurl}}/images/plugins_html_49f16afc_en.png)

Vous pouvez modifier les réglages d'impression. Si la page est vide (grise),
cochez la case «Aperçu de la carte» à droite. Vous pouvez zoomer / dé-zoomer 
sur la carte grâce au champ «Échelle» et changer la résolution d'impression
en ajustant le nombre de «ppi» (points par pouces).
Quand vous êtes satisfait de vos réglages, cliquez sur le bouton «Imprimez».


Résumé
------

Voilà quelques greffons parmi les plus utiles disponibles dans JOSM, mais 
n'hésitez pas à en tester d'autres. Comme vous l'avez déjà vu, le menu 
Préférences > Greffons précise pour chacun une courte description, et vous ouvre 
une page web avec tous les détails si vous cliquez sur le lien «plus d'infos…»


![]({{site.baseurl}}/images/plugins_html_17ea8a4b_en.png)

Bonne chance !

Annexe
------

Détails sur DirectUpload
------------------------

![]({{site.baseurl}}/images/plugins_html_m7e14a056_en.png)

Envoyer vos traces GPS et waypoints au serveur OSM est utile pour plusieurs raisons.
_(Si vous ne voulez pas que vos points GPX soient visibles par d'autres, 
vous pouvez passer cette section. Vous pouvez tout simplement afficher vos traces GPX
dans JOSM en stockant localement les fichiers correspondant)._
En premier lieu, les traces GPS sont le moyen le plus efficace de collecter et de 
géoréférencer des objets dans OSM.

Les récepteurs GPS ont une meilleure précision que l'imagerie satellite et sont
utiles pour déterminer le décalage des images satellites, surtout si les traces
GPS sont nombreuses. Voir [Utiliser l'imagerie aérienne]({{site.baseurl}}/fr/josm/aerial-imagery/)

L'envoi de traces au serveur permet un meilleur partage de l'information.
Il permet la contribution de personnes qui n'ont pas accès au terrain,
ou qui ne possèdent tout simplement pas de récepteur GPS.
Vous avez deux manières d'envoyer vos traces : 1) le plugin JOSM ou
2) le site web principal d'OSM.

> Note : les waypoints GPS waypoints ne peuvent pas être envoyés directement 
> dans la base OSM. Cependant, ils peuvent être convertis en traces et envoyés
> temporairement, par exemple afin d'être utilisés comme couche de fond dans Potlatch.

Après avoir ouvert votre fichier GPX dans JOSM et cliqué sur 
«Outils» puis sur «Envoyer les traces», décrivez le fichier GPX
avec quelques attributs. Pour la visibilité, vous pouvez choisir une valeur entre
privé, public, traçable, identifiable.

1.  **Identifiable** : Votre trace sera visible publiquement dans **vos traces GPS** 
    et dans la liste des traces publiques. Les autres utilisateurs peuvent 
    télécharger la trace brute et la relier à votre nom d'utilisateur.
    L'horodatage de vos points est aussi disponible via l'API GPS publique.

2.  **Public** : Votre trace sera visible publiquement dans **vos traces GPS** 
    et dans la liste des traces publiques. Les autres utilisateurs peuvent 
    toujours télécharger la trace brute et les horodatages contenus.
    Cependant, les données fournies par l'API ne référencent pas votre page,
    et ne contiennent pas les horodatages, même si les points sont ordonnés 
    chronologiquement.

3.  **Traçable** : La trace ne sera **pas** affichée sur les listes publiques,
    mais les points seront bien disponibles via l'API GPS publique **avec leurs
    horodatages**. Les autres utilisateurs pourront télécharger la trace, mais elle
    ne vous sera pas associée.

4.  **Privé** : La trace ne sera **pas** affichée sur les listes publiques.
    Les points seront disponibles dans l'ordre chronologique via l'API GPS
    **mais sans leurs horodatages réels**.

![]({{site.baseurl}}/images/plugins_html_2009cd0_en.png)

Envoyer les traces GPS en ligne
-------------------------------

1. Allez à l'adresse [http://www.openstreetmap.org/](http://www.openstreetmap.org/) 
et connectez-vous.

2. Sélectionnez «Traces GPS» à gauche de la bannière.![]({{site.baseurl}}/images/plugins_html_32e7d3be_en.png)

3. Sélectionnez
[Envoyer une trace](http://www.openstreetmap.org/trace/create).
Vous pouvez également **Voir toutes vos traces** pour vérifier vos envois précédents. 

4. Localisez votre fichier local avec le bouton dédié. Commentez-le dans les champs
Description et Balises, et choisissez la Visibilité que vous préférez.
Si vous avez de nombreux fichiers .gpx, vous pouvez les compresser dans une archive zip
avant de les envoyer. Ils seront traités comme un gros fichier gpx, et une seule entrée
sera ajoutée à la liste des traces. ![]({{site.baseurl}}/images/plugins_html_m63dc490_en.png)

5. Cliquez sur *Envoyer*.
Le fichier sera envoyé au serveur OSM, où il ira rejoindre la file des
fichiers en attente d'insertion dans la base de données.
