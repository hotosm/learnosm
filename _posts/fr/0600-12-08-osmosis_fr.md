---
layout: doc
title: Manipuler les données avec Osmosis
permalink: /fr/osm-data/osmosis/
lang: fr
category: osm-data
---

Manipuler les données avec Osmosis
===============================


**Osmosis** est un puissant outil en ligne de commande pour manipuler et traiter les données brutes **.osm**. Il est souvent utilisé pour traiter de gros fichiers de données, pour diviser des fichiers OSM en plus petits morceaux, et pour appliquer un changeset afin de mettre à jour un fichier existant.  

Il existe un grand nombre de fonctions disponibles avec Osmosis, et vous pouvez lire les détails de chacune d'entre elles sur le [Wiki] (http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). Cependant, beaucoup de ces fonctions sont assez complexes et difficiles à comprendre, en particulier si vous débutez avec des programmes en ligne de commande et OpenStreetMap. Ce chapitre servira à présenter Osmosis, à l'installer sur Windows et à démarrer avec une commande Osmosis de base.  

Installer Osmosis
----------------

Comme pour osm2pgsql dans le chapitre précédent, nous devrons télécharger et configurer **osmosis** afin de pouvoir l'exécuter à partir de la ligne de commande. La procédure à suivre est très similaire à celle de osm2pgsql.  

Vous aurez également besoin de quelques données OSM brutes pour travailler. Si vous souhaitez suivre les exemples de ce chapitre, téléchargez notre fichier d'exemple [ici] (/files/sample_osmosis.osm.pbf). Vous pouvez également utiliser un fichier de données brutes de votre choix.  

Suivez ces étapes pour télécharger et préparer Osmosis :  

- Tout d'abord, téléchargez Osmosis [ici] (http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).  
- Dézippez le dossier et placez-le à un endroit de votre système où il ne sera pas déplacé. Nous devrons ajouter son emplacement au chemin du système afin qu'il puisse être exécuté à partir de la ligne de commande.  

![unzip it][]

- Cliquez sur le menu Démarrer et tapez "chemin du système".  

![system path][]

- Vous devriez voir une option appelée "Modifier les variables d'environnement du système". Cliquez dessus.  

![edit variables][]

- Cliquez sur le bouton intitulé "Variables d'environnement".  

![env variables][]

- En bas, trouvez la variable nommée " Path " et cliquez sur " Edit... ".  

![find path][]

- Vous devez ajouter le répertoire où se trouve osmosis.bat à la variable Path.  

![edit path][]

- Ajoutez un point-virgule à la fin du répertoire précédent, puis tapez le chemin d'accès complet du répertoire d'osmosis. Par exemple, si vous placez le dossier **osmosis-latest** 	directement dans le répertoire **C:\\**, le chemin sera le suivant :  
	
      C:\osmosis-latest\bin

- Cliquez plusieurs fois sur OK pour enregistrer les nouveaux paramètres.  
- **osmosis** devrait fonctionner maintenant. Vérifions-le.  
- Ouvrez l'invite de commande Windows. Vous pouvez le faire en cliquant sur le menu Démarrer et en tapant "**cmd**". L'application Invite de commandes s'affiche et vous pouvez appuyer sur Entrée ou cliquer dessus.  

![cmd][]

- Dans la fenêtre de commande noire qui s'ouvre, tapez :  

      osmosis

- Si tout fonctionne correctement, vous devriez obtenir un message comme celui-ci :  

![osmosis test][]

- Si vous n'obtenez pas ce résultat et que le système indique qu'il ne peut pas trouver l'application **osmosis**, il se peut que vous ayez mal saisi la variable Path.  

Filtrage des données
---------------

Osmosis devrait maintenant fonctionner correctement à partir de la ligne de commande. Afin de pouvoir exécuter des opérations sur notre fichier de données, nous devons changer le répertoire de travail à l'endroit où nous avons placé le fichier **sample_osmosis.osm.pbf**. Pour simplifier les choses, nous avons placé ce fichier dans le répertoire **C:\**.  

- Pour remplacer le répertoire de travail de l'invite de commande par le répertoire C:\, tapez la commande suivante et appuyez sur Entrée :  

      cd C:\
    
- L'invite devrait changer, indiquant que vous vous trouvez maintenant dans le répertoire C:\.  

![cd command][]

Maintenant, apprenons notre première commande Osmosis. Nous allons exécuter une commande qui filtre toutes les écoles de notre grand fichier.  

Pour ce faire, nous devons dire quelques choses à Osmosis. Nous devons spécifier :  

- un fichier d'entrée (sample_osmosis.osm.pbf)  
- des règles qui définissent ce que nous voulons filtrer  
- un fichier de sortie (nous produirons un fichier .osm non compressé afin de pouvoir l'ouvrir dans JOSM)  

La commande que nous allons exécuter est :  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Essayez d'exécuter cette commande dans l'invite de commande. Lorsqu'elle est terminée, vous devriez voir un nouveau fichier dans votre répertoire, appelé **schools.osm**. Si nous ouvrons ce nouveau fichier dans JOSM, nous pouvons voir que seules les écoles ont été filtrées à partir du fichier d'exemple.  

![schools osm][]

Examinons la commande que nous avons exécutée morceau par morceau pour comprendre comment tout cela fonctionne. D'abord, nous appelons le nom du programme.

      osmosis

Ensuite, nous fournissons le fichier d'entrée. Rappelez-vous que ce fichier est un format compressé. **--rbf** est en fait l'abréviation de **--read-pbf-fast**. Osmosis comprend que le fichier que nous fournissons après cet indicateur est le fichier à partir duquel nous voulons lire.  

      --rbf sample_osmosis.osm.pbf

La partie suivante de notre commande dit *--nkv keyValueList="amenity.school "*. Vous pouvez imaginer que cela indique que l'osmose doit filtrer tout ce qui a la balise **amenity=school**. **--nkv** est l'abréviation de **--node-key-value**. Cette commande indique qu'Osmosis devrait filtrer uniquement les nœuds ayant les clés et les valeurs fournies dans la liste suivante. Des ensembles clé-valeur supplémentaires peuvent être ajoutés en plaçant des virgules entre eux.  

      --nkv keyValueList="amenity.school"

Enfin, nous fournissons le nom et le format du fichier de sortie. Nous utilisons l'indicateur **-wx**, qui est un raccourci pour **--write-xml**. Notez que nous pourrions également utiliser **--wb**, qui est l'équivalent de **--rbf**, si nous voulions sortir les données au format PBF.  

      --wx schools.osm

Allons plus loin
---------------

Le nombre de tâches de traitement pouvant être effectuées avec Osmosis est énorme, et pour en savoir plus, il est préférable de se référer à la page [Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) du Wiki.  

Une tâche utile est de pouvoir diviser un gros fichier OSM brut en parties séparées, soit en fournissant des rectangles, soit en créant des fichiers de polygones de délimitation. Vous pouvez obtenir des informations de base sur ce processus à la page [Osmosis Examples] (http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png


