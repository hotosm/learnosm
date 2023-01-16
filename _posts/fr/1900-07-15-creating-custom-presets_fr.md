---
layout: doc
title: JOSM - Création de préréglages personnalisés
permalink: /fr/josm/creating-presets/
lang: fr
category: josm
---

JOSM - Création de préréglages personnalisés
=======================


Dans le [chapitre précédent](/fr/josm/josm-presets), nous avons vu comment des menus de préréglages personnalisés peuvent être ajoutés à JOSM. Dans ce chapitre, nous allons voir comment créer vos propres fichiers de préréglages personnalisés.  

AVERTISSEMENT ! Il s'agit d'un sujet avancé... soyez avertis !  

Introduction à XML
-------------------

Afin de créer notre propre menu de préréglages, nous devons d'abord comprendre un langage appelé XML. Si vous êtes déjà familiarisé avec le langage XML, vous pouvez passer directement à la section suivante.  

XML, qui signifie "Extensible Mark-up Language", est un langage informatique similaire au HTML. La principale différence est que le XML est conçu pour transporter des données et non pour les afficher. De nombreuses applications sur Internet utilisent le XML pour transmettre des données, y compris OpenStreetMap. Le XML utilise des éléments, et chaque élément peut contenir des éléments subordonnés. Par exemple, imaginons que nous voulions créer un fichier XML contenant des données sur le menu d'un restaurant. Nous devons créer un élément racine pour contenir toutes les données relatives à notre menu. Notre élément racine aura une balise d'ouverture et une balise de fermeture, comme ceci :

      <menu>
      ... toutes les données que nous voulons inclure dans notre menu ...
      </menu>

L'information est contenue dans un élément, et chaque élément peut contenir d'autres éléments.  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>Delicious beef patty</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Indonesian Fried Rice</description>
        </item>
      </menu>

Dans cet exemple, nous avons placé deux éléments &lt;item&gt ; dans notre élément &lt;menu&gt ; pour décrire deux éléments différents qui sont contenus dans le menu. Chaque élément contient deux autres éléments, &lt;cost&gt ; et &lt;description&gt ;. Remarquez également comment nous avons écrit name="Hamburger" à l'intérieur de la balise d'ouverture &lt;item&gt ;. C'est ce qu'on appelle un attribut, qui ajoute des informations sur l'élément.


### Terminologie XML

- **élément racine:** l'élément le plus externe d'un document XML, qui décrit ce qu'il contient  
- **élément:** tout objet XML, contenu par des balises ouvrantes et fermantes, comme &lt;item&gt ; ... data ... &lt;/item&gt ;  
- **tag:** quelque chose contenu entre parenthèses, comme &lt;item&gt ;. &lt;item&gt ; est la balise d'ouverture d'un élément, et &lt;/item&gt ; est la balise de fermeture. Ne confondez pas avec les balises OSM, qui ont une signification différente.  
- **attribut:** un élément d'information contenu dans une balise, tel que name="Hamburger"  

L'utilisation du langage XML pour contenir et transmettre des données est excellente car elle est facile à comprendre pour les ordinateurs.  


Fichiers de préréglages JOSM
-------------------

Ajoutons un exemple de fichier de présélections dans JOSM et analysons son fonctionnement.  

- Téléchargez le fichier [sample_presets.xml] (/files/sample_presets.xml).  
- Chargez-les ensuite dans JOSM comme décrit dans le [chapitre précédent] (/fr/josm/josm-presets).  
- Créez un nouveau calque et un nouvel objet.  
- Allez dans le menu Presets. Il y aura un nouvel élément nommé "Sample Building". Cliquez dessus.  

![sample building menu][]

Remarquez que le formulaire qui apparaît comporte trois champs, chacun acceptant un type de saisie différent. Le premier champ, nom du bâtiment, accepte une chaîne de texte comme entrée. Le deuxième, utilisation du bâtiment, comporte une liste déroulante. Le dernier champ est une case à cocher, ce qui signifie qu'il ne peut avoir qu'une seule des deux valeurs suivantes : activé ou désactivé.

![sample presets form][]

Examinons maintenant le fichier XML qui définit ce formulaire prédéfini.

- Trouvez le fichier XML sur votre ordinateur et ouvrez-le avec un éditeur de texte. Si vous utilisez Windows, vous pouvez utiliser le programme Notepad. Si vous souhaitez un éditeur plus facile à utiliser, vous pouvez télécharger l'application gratuite Notepad++.  
- Le fichier **sample_presets.xml** ressemble à ceci :  

![sample presets file][]

Pour l'instant, ignorons les six premières lignes et la dernière ligne, et concentrons-nous sur tout ce qui se trouve entre les balises &lt;item&gt ;.

La première ligne ressemble à ceci :

      <item name="Sample Building" type="node,closedway">

Il s'agit de la balise d'ouverture d'un élément qui est ajouté au menu. Elle possède deux attributs, le nom et le type. Le nom définit la façon dont cet élément apparaîtra dans le menu Préréglages. Le type limite ce préréglage à des types d'objets spécifiques. Dans ce cas, le préréglage ne peut être appliqué qu'aux points et aux surfaces - en d'autres termes, aux nœuds et aux voies fermées. Si vous essayez d'appliquer ce préréglage à une ligne, il ne fonctionnera pas.  

Regardons la ligne suivante :  

      <label text="Building Form" />

Lorsque vous cliquez sur le menu et ouvrez le formulaire type, vous voyez en haut le texte "Formulaire de construction". Il s'agit du texte défini dans cette ligne. Celle-ci définit un élément &lt;label&gt ;, qui affiche simplement du texte dans le formulaire. Le texte est défini par l'attribut *text="some text "*.  

Descendez de quelques lignes et trouvez ceci :  

      <key key="building" value="yes" />

Il s'agit de l'une des balises qui sera appliquée à l'objet que nous avons sélectionné. Comme il utilise l'élément &lt;key&gt ;, le tag OSM donné ici sera automatiquement appliqué lorsque le préréglage sera choisi. Cet objet obtiendra donc automatiquement le tag *building=yes*.  

La ligne suivante est un peu différente et utilise l'élément "text".  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

L'élément &lt;text&gt ; crée un champ vide. Lorsque le formulaire est créé dans JOSM, l'utilisateur pourra remplir le champ vide. Comme l'attribut *delete_if_empty="true "* est défini, aucune balise ne sera ajoutée si l'utilisateur laisse ce champ vide.  

La boîte à liste déroulante du formulaire est définie dans la ligne suivante :  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

Une boîte déroulante est définie par l'élément &lt;combo&gt ;. Comme pour l'élément &lt;text&gt ;, l'attribut *key* définit la clé de la balise. La valeur est ensuite choisie dans une liste de *valeurs* possibles. L'attribut *display_values* permet de choisir différents noms à afficher dans la liste déroulante, qui peuvent être plus faciles à comprendre que les valeurs des balises OSM.  

Enfin, examinons la ligne qui définit la case à cocher.  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

L'élément &lt;check&gt ; définit - vous l'avez deviné ! - la case à cocher. L'attribut *default="off "* indique que la case sera décochée par défaut. Vous avez déjà vu les autres attributs.  

Création de votre propre fichier de préréglages
------------------------------

La meilleure façon de créer votre propre fichier de préréglage est d'en prendre un qui existe déjà, et de le manipuler pour atteindre vos objectifs. N'hésitez pas à modifier ce fichier d'exemple et à l'expérimenter pour en apprendre les bases. N'oubliez pas que chaque fois que vous l'enregistrez, vous devez redémarrer JOSM pour charger les modifications.  

Avant de commencer à créer vos propres préréglages, vous devez réfléchir soigneusement aux balises que vous allez utiliser. Inventer de nouvelles balises est un tout autre sujet. En général, vous devez utiliser les balises OSM existantes lorsqu'elles existent. La plupart des balises existantes sont répertoriées sur la page [Map Features on the OSM Wiki] (http://wiki.openstreetmap.org/wiki/Map_Features).  

Ce fichier d'exemple contient la plupart des éléments que vous trouverez dans un fichier de préréglage JOSM - il n'y a pas beaucoup d'éléments de formulaire. Si vous souhaitez expérimenter avec un fichier de préréglage plus complexe, téléchargez le fichier [dhaka_presets.xml](/files/dhaka_presets.xml) ici.  

En outre, une explication détaillée de tous les éléments possibles peut être trouvée [ici] (http://josm.openstreetmap.de/wiki/TaggingPresets).  

Bonne chance !  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png
