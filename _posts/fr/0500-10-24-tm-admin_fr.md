---
layout: doc
title: Guide de l'administrateur du gestionnaire de tâches
permalink: /fr/coordination/tm-admin/
lang: fr
category: coordination
---

# Guide de l'administrateur du gestionnaire de tâches


**Si l'interface utilisateur de la version que vous utilisez est différente de celle décrite ici, vous devriez consulter [notre aperçu des versions](/fr/coordination/tm-disambiguation)**.

Index de la section
-------------
-  [Connexion et accès](/fr/coordination/tm-admin/#connexion-et-accès)
-  [Permissions](/fr/coordination/tm-admin/#permissions)
-  [Créer un projet](/fr/coordination/tm-admin/#créer-un-projet)
    -  [Définir la zone de cartographie](/fr/coordination/tm-admin/#définir-la-zone-de-cartographie)
    -  [Définir les tâches](/fr/coordination/tm-admin/#définir-les-tâches)
    -  [Avancé : Définir les tâches avec des données importées](/fr/coordination/tm-admin/#avancé-:-définir-les-tâches-avec-des-données-importées)
    -  [Découpage des zones de projet](/fr/coordination/tm-admin/#découpage-des-zones-de-projet)
    -  [Nommez le projet](/fr/coordination/tm-admin/#nommez-le-projet)
-  [Editer un projet](/fr/coordination/tm-admin/#éditer-un-projet)
    -  [Description - la première chose que les utilisateurs apprennent sur votre projet](/fr/coordination/tm-admin/#description)
    -  [Instructions - ce que les utilisateurs doivent faire](/fr/coordination/tm-admin/#instructions)
    -  [Métadonnées - à qui appartient le projet](/fr/coordination/tm-admin/#métadonnées)
    -  [Zones prioritaires - où les utilisateurs devraient commencer à cartographier](/fr/coordination/tm-admin/#zones-prioritaires)
    -  [Imagerie - la base de la cartographie](/fr/coordination/tm-admin/#imagerie)
    -  [Permissions - qui est autorisé à cartographier et à valider](/fr/coordination/tm-admin/#permissions)
    -  [Paramètres](/fr/coordination/tm-admin/#paramètres)
    -  [Actions](/fr/coordination/tm-admin/#actions)
    -  [Éditeur personnalisé](/fr/coordination/tm-admin/#éditeur-personnalisé)
    -  [Sauvegarde et test](/fr/coordination/tm-admin/#sauvegarde-et-test)
    -  [Publier](/fr/coordination/tm-admin/#publier)
-  [Gestion du projet](/fr/coordination/tm-admin/#gestion-du-projet) 
    -  [Être réactif](/fr/coordination/tm-admin/#être-réactif)
    -  [Séquencement du projet](/fr/coordination/tm-admin/#séquencement-du-projet)
    -  [Cycle de vie du projet](/fr/coordination/tm-admin/#cycle-de-vie-du-projet)
-  [Informations supplémentaires](/fr/coordination/tm-admin/#informations-supplémentaires)
    -  [Remarques concernant l'imagerie](/fr/coordination/tm-admin/#remarques-concernant-l’imagerie)

Le gestionnaire de tâches est l'outil essentiel pour coordonner la cartographie sur OpenStreetMap. Il soutient les initiatives de cartographie humanitaire, l'organisation de mapathons ou la création de tâches cartographiques pour les étudiants. L'application divise une zone d'intérêt en morceaux géographiques gérables qui peuvent être réalisés rapidement et en collaboration. Cette approche permet de distribuer les tâches à de nombreux cartographes individuels, tout en réduisant les conflits d'édition possibles. 

Le logiciel encourage la précision et la qualité des données cartographiques en fournissant un ensemble cohérent d'instructions à vos cartographes (par exemple, "cartographier toutes les routes et tous les bâtiments"). En bref, le gestionnaire de tâches vous permet de configurer et de diriger le flux de travail pour les activités de cartographie ouverte. 

Ce guide décrit l'administration de base du gestionnaire de tâches. Il couvre les instructions pour créer et modifier les projets de cartographie et les autorisations de gestion pour la cartographie et l'examen des données provenant de sources multiples.

## Connexion et accès

Un compte OpenStreetMap (OSM) est nécessaire pour se connecter au gestionnaire de tâches. Vous pouvez visiter le [gestionnaire de tâches de HOT] (http://tasks.hotosm.org), ou toute autre instance communautaire de votre choix. Cliquez ensuite sur `S'inscrire` et vous serez redirigé vers le [site Web d'OpenStreetMap] (https://www.openstreetmap.org) pour créer votre compte. Ou cliquez sur `Se connecter` si vous avez déjà un compte, et dans la fenêtre de dialogue, vous pouvez donner au gestionnaire de tâches un accès limité à votre compte OSM.

## Permissions

Le niveau d'utilisateur le plus basique est celui de **cartographe**. Les cartographes peuvent se connecter au gestionnaire de tâches pour trouver et sélectionner un projet de cartographie sur lequel travailler. Toutes les fonctionnalités du cartographe sont décrites dans le [Guide du cartographe du gestionnaire de tâches LearnOSM] (/fr/coordination/tm-user/). Notez que certains projets, tels que ceux à l'état de projet (c'est-à-dire non publiés), ou restreints à certaines équipes, ne sont pas visibles pour les cartographes réguliers. 

Toutes les autorisations spéciales sont gérées par les *organisations* et les *équipes*. Une **organisation** est le parapluie principal, et sous chaque organisation, des projets et des équipes de cartographie peuvent être créés. Une organisation peut représenter un utilisateur de données tel qu'une organisation humanitaire, ou toute communauté OpenStreetMap. Si vous avez besoin de configurer votre organisation sur le gestionnaire de tâches, contactez les techniciens chargés de la maintenance de l'instance du gestionnaire de tâches. Voir [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) pour une liste des organisations présentes dans le gestionnaire de tâches de HOT. Si votre communauté ou votre organisation ne figure pas dans cette liste et que vous souhaitez créer des projets dans le gestionnaire de tâches de HOT, veuillez remplir [ce formulaire] (http://bit.ly/HOTTasking) pour manifester votre intérêt. 

Chaque organisation a un ou plusieurs **gestionnaires**. Ils ont la permission de créer et de modifier les projets associés. Toutes les options du gestionnaire sont accessibles par la section `Gestion` dans la navigation principale.

Les responsables d'une organisation peuvent créer des **équipes**. Les équipes sont des groupes d'utilisateurs d'OpenStreetMap et elles peuvent être publiquement visibles ou privées. Elles ont également un ou plusieurs gestionnaires d'équipe. Les équipes peuvent être configurées de manière à ce que les utilisateurs puissent les rejoindre de leur propre chef ou sur invitation uniquement, ce qui signifie que les responsables d'équipe sont informés des demandes d'adhésion et doivent prendre une décision à leur sujet.

Pour chaque projet, les administrateurs peuvent désigner des équipes spécifiques pour accorder ou restreindre l'accès à l'une ou l'autre des cartographies, définir qui peut valider les données ou qui peut modifier les métadonnées du projet.

## Créer un projet

Cliquez sur `Gestion` dans la navigation en haut. Dans la première ligne, vous voyez un espace pour 'Projets'. A côté, cliquez sur le bouton `Ajouter` pour en créer un.

![TM Add Project][]

Vous pouvez choisir de définir la zone d'intérêt (zone de cartographie) de votre projet de cartographie de l'une des manières suivantes :

* Option 1 : `Dessinez` la zone d'intérêt manuellement
* Option 2 : `Télécharger le fichier` pour importer la zone d'intérêt en tant que fichier GeoJSON, KML ou shapefile zippé.

![TM New][]

### Définir la zone de cartographie

* Option 1 : `Dessinez` la zone d'intérêt manuellement

1. Vous pouvez passer à d'autres couches d'arrière-plan à l'aide des boutons situés en haut. 
1. Cliquez sur le bouton `Dessiner` à gauche.
2. Pour dessiner un polygone représentant la zone de cartographie dans le cadre de la carte, maintenez le bouton droit de la souris enfoncé pour déplacer la carte sans cliquer, ce qui ajoutera un nœud. Le polygone doit encadrer étroitement la zone d'intérêt. Cela permet de gagner du temps pour compléter les tuiles qui ne présentent pas d'intérêt ( ex : océan, forêt).
3. Cliquez sur votre point de départ pour compléter le polygone. <!--Après avoir complété un polygone, vous pouvez déplacer les nœuds ou en ajouter de nouveaux pour obtenir la zone exactement comme vous le souhaitez.-->

<br>

* Option 2 : `Télécharger le fichier` pour importer la zone d'intérêt en tant que fichier GeoJSON, KML ou shapefile zippé.

1. Dans la première étape de la création d'un projet, cliquez sur `Upload file`.
2. Naviguez jusqu'à votre fichier dans la fenêtre de téléchargement de fichiers.
3. Cliquez sur le nom du fichier pour le mettre en évidence, puis cliquez sur ‘Ouvrir’.
4. Les centres d'intérêt importés ne peuvent pas être ajustés dans le gestionnaire de tâches.

Il se peut que vous téléchargiez un fichier dont les tâches (petits carrés de cartographie) sont déjà prédéfinies. Vous trouverez plus d'informations à ce sujet dans la section [Définir des tâches avec des données importées](/fr/coordination/tm-admin/#Avancé:Définir-les-tâches-avec-des-données-importées) ci-dessous.

> NOTE : Le gestionnaire de tâches a des limites ! La limite technique maximale d'un projet est de 5 000 km2, mais pour que votre projet ne prenne pas trop de temps, essayez de le garder en dessous de 1 000 km2. Si vous devez cartographier une zone plus grande que cela, vous devrez créer plusieurs projets. Vous pourrez voir la taille du projet dans le coin inférieur gauche de la carte d'aperçu. 

### Définir les tâches

Après avoir défini la zone de cartographie globale, celle-ci va être divisée en zones plus petites appelées *Tâches*. Vous devez considérer très attentivement la taille des tâches de votre projet. Les projets bien conçus ont des tailles de tâches appropriées, ce qui leur permet d'être réalisés aussi efficacement que possible. 

![TM Tile Sizes][]

La zone du projet est automatiquement divisée en cellules de grille et chaque cellule devient une tâche. Utilisez les boutons `Plus grand` et `Plus petit` pour ajuster la taille globale des cases de la tâche. La taille par défaut de la tâche est probablement beaucoup trop grande. Lorsque vous modifiez la taille de la tâche, notez la taille de la tâche indiquée à gauche à côté de 'La taille de chaque tâche est d'environ ... km2'.

Prenez votre temps et définissez la taille de vos tâches très soigneusement ! Essayez de réduire la taille de votre tâche jusqu'à ce que vous pensiez qu'il faut à un cartographe confiant **15 minutes pour la réaliser**. La taille optimale de la tâche dépend entièrement de la ou des caractéristiques que vous demandez aux cartographes d'identifier et de la densité de ces caractéristiques. Par exemple, un projet de cartographie routière dans une zone rurale aura des tâches beaucoup plus importantes qu'un projet qui consiste à numériser des bâtiments dans une agglomération dense.

> Zoomer et activer l'imagerie Bing pour déterminer une bonne taille de tâche. Vous pouvez passer d'une couche de fond de carte à une autre à l'aide des boutons situés en haut de la carte.

Après avoir ajusté la taille globale de la tâche, vous pouvez diviser sélectivement certaines tâches en quatre plus petites avec le bouton `Cliquer pour diviser`. Ou vous pouvez `dessiner une zone à diviser`, et il vous permettra de dessiner un polygone sur une zone pour diviser toutes les tâches à l'intérieur. Ces fonctions sont particulièrement utiles si la densité de l'élément que vous souhaitez cartographier varie dans votre zone de projet. Par exemple, il peut y avoir une zone côtière densément construite qui nécessite de petites tâches et une zone rurale intérieure qui nécessite des tâches beaucoup plus importantes. Le bouton `réinitialiser` supprimera tous vos fractionnements personnalisés.

Remarques pour décider de la taille des tâches : 
-  Les tâches peuvent être divisées, mais il n'y a pas d'option pour les fusionner à nouveau une fois qu'un projet est créé.
-  Une fois qu'un projet est créé, la répartition des tâches prend beaucoup de temps et doit être effectuée une tâche à la fois.
-  Les conflits potentiels entre cartographes voisins sont plus nombreux aux coins et aux limites des tâches. Des tâches plus petites signifient plus de coins et de bords. Il faut trouver un compromis entre la taille de la tâche pour faciliter la tâche des cartographes, mais aussi pour éviter les conflits cartographiques entre eux.
-  Les petites tâches sont plus faciles à cartographier, mais un plus grand nombre de tâches signifie que les cartographes doivent passer plus de temps à mettre à jour le statut de chacune d'entre elles, et les projets dont les tâches sont trop petites peuvent donc être inefficaces.
-  Les cartographes débutants ont besoin d'environ quatre fois plus de temps que les cartographes expérimentés.
-  Les cartographes débutants doivent développer un œil pour l'imagerie satellite. Il peut être difficile de repérer les bonnes caractéristiques.

Une fois que vous êtes satisfait de la taille de vos tâches, cliquez sur `Suivant`.

### Avancé : Définir les tâches avec des données importées

Si vous avez téléchargé un fichier pour définir la zone de votre projet, ce fichier peut également contenir les formes pour les tâches individuelles. Par exemple, un projet terminé de MapSwipe qui se concentre sur les zones peuplées ou une grille complexe que vous avez pré-créée dans QGIS. Si c'est le cas, assurez-vous d'activer l'option "Définir les tâches en utilisant les polygones téléchargés". Vous passerez ainsi directement à l'étape de dénomination de la création du projet. 

![TM New Polys][]

### Découpage des zones de projet

![TM Trim][]

Après avoir déterminé la taille des tâches, vous aurez la possibilité de les réduire à l'étendue de votre zone de cartographie. Vous voudrez certainement le faire. Cliquez sur `Découpage` pour supprimer tous les carrés de tâches qui ne chevauchent pas votre zone de projet. 

![TM Trim coarse][]

Si vous activez l'option 'Découper les tâches pour définir la zone d'intérêt exacte pour la cartographie' avant de cliquer sur `Découper`, les portions de tâches qui se chevauchent à la limite de votre zone d'intérêt seront découpées de façon nette par rapport à votre zone d'intérêt.

![TM Trim fine][]

Un découpage précis peut donner lieu à des tâches extrêmement petites. Ces tâches minuscules peuvent perturber les cartographes. Vous pouvez choisir de les supprimer en sélectionnant `supprimer` lorsque vous voyez le message 'There are ... tasks smaller than 2,000m2. Voulez-vous les supprimer ?'

> Prenez note du nombre de tâches que comporte votre projet (regardez dans le coin inférieur gauche de votre carte). La limite technique maximale du nombre de tâches dans un projet du gestionnaire de tâches est de 5 000. Toutefois, pour que votre projet ne prenne pas trop de temps, essayez de le maintenir en dessous de 1 000 tâches. Si vous devez cartographier une zone plus étendue, essayez de la diviser en plusieurs petits projets. 

Cliquez sur `Suivant`.

### Nommez le projet

Le nom d'un projet est l'un de ses aspects les plus importants lorsqu'il s'agit d'être découvert par le grand public. Essayez d'inclure le nom du pays dans lequel le projet est situé (par exemple, le Sud-Soudan), la raison de la cartographie (par exemple, la vaccination COVID) et également l'emplacement plus spécifique, peut-être le nom du district ou de la localité (par exemple, le comté de Yambio). Par exemple, un nom de projet complet pourrait être : _Soudan du Sud, Vaccination COVID, Comté de Yambio_. 

Assurez-vous que votre organisation est sélectionnée dans le champ 'Organization'. 

> Avant de terminer cette étape, assurez-vous que vous êtes satisfait de la délimitation de la zone d'intérêt du projet et du nombre des tâches, car ces éléments ne peuvent pas être modifiés par la suite. 

Cliquez sur `Créer`. Votre projet sera créé mais il ne sera pas publié immédiatement - vous serez d'abord dirigé vers le menu d'édition du projet. 

## Éditer un projet

Vous voyez maintenant le menu 'Édition' de votre projet. Avant de pouvoir sauvegarder le projet, vous devrez parcourir attentivement le menu 'Édition' pour terminer la configuration. Voici un résumé rapide des sous-menus que vous verrez sur le côté gauche :

- Description - Définissez le statut, la priorité et la description textuelle associés à votre projet.
- Instructions - Instructions détaillées sur la manière de cartographier les caractéristiques nécessaires et d'aborder le projet.
- Métadonnées - Définissent les caractéristiques qui doivent être cartographiées. Comprend également les informations utilisées pour catégoriser les projets, utilisées pour filtrer les projets.
- Zones prioritaires - Vous permet de spécifier les parties de la zone du projet qui doivent être cartographiées en premier.
- Imagerie - Choisissez l'imagerie qui sera chargée par défaut lorsque les volontaires cartographieront votre projet. 
- Permissions - Permet de restreindre l'accès au projet pour la cartographie et la validation.
- Paramètres - Activez/désactivez les éditeurs alternatifs tels que RapiD.
- Actions - Des actions groupées puissantes que vous pouvez exécuter sur votre projet, comme le clonage ou la suppression.
- Éditeur personnalisé - Ajouter un éditeur personnalisé en utilisant une URL

> Remplir soigneusement ces informations est une partie essentielle de la réussite d'un projet de cartographie. Il est particulièrement important que la description et les instructions du projet soient clairement communiquées afin que les cartographes soient conscients de l'importance de la qualité des données et des meilleures pratiques. Gardez à l'esprit que les contributeurs peuvent ne pas avoir d'expérience préalable d'OpenStreetMap et ne sont probablement pas familiers avec les directives de balisage.

### Description

![TM Description][]

#### Statut

Le premier est le statut du projet. Il peut être défini comme suit : **Brouillon**, **Publié**, ou **Archivé**.

- **Brouillon** - Votre projet démarrera en mode brouillon. Dans ce mode, il ne pourra pas être découvert et il ne sera pas possible pour le public d'y contribuer. C'est l'idéal lorsque vous êtes encore en train de mettre en place votre projet et de le tester avant sa publication. 
- **Publié** - Lorsque vous avez terminé la configuration de votre projet, que vous l'avez testé et que vous êtes heureux qu'il soit listé publiquement et ouvert à la cartographie/validation.
- **Archivé** - Tous les projets devraient finir par être archivés. Les projets archivés sont publics mais bloqués pour les contributions. Vous devriez envisager d'archiver votre projet si :
  - Il est cartographié et validé à 100%.
  - Les instructions ou l'imagerie sont largement obsolètes.
  - Le projet a été créé il y a plus d'un an
  - Les données cartographiques ne sont plus nécessaires à des fins humanitaires dans la zone du projet.

#### Priorité

Ensuite, il y a la priorité du projet. Elle détermine à quel point le projet sera visible dans la page d'exploration des projets du gestionnaire de tâches. Elle peut être réglée sur **Urgent**, **Elevé**, **Moyen** ou **Bas**.

- **Urgent** - Ne définissez ce statut que si le projet est **en réponse à une catastrophe et que les besoins en données sont immédiats**. Très peu de projets ont ce niveau de priorité. 
- **Élevé** - Pour les projets qui ne sont pas nécessairement en réponse à une catastrophe, mais les données sont nécessaires dans un **court délai**. 
- **Moyen** - Si les données sont nécessaires mais pas dans un délai particulièrement court.
- **Faible** - Si vous souhaitez publier votre projet mais que vous ne voulez pas le rendre très visible. Vous pouvez préférer partager votre projet avec des groupes spécifiques en utilisant l'URL du projet.

#### Courte description

Ajoutez au moins deux phrases qui décrivent brièvement votre projet. C'est important car les volontaires liront cette description pour décider de leur contribution. Essayez d'expliquer clairement **pourquoi** les données sont collectées et **comment les données cartographiques seront utilisées**. 

> Ces espaces permettent d'utiliser **Markdown** et peuvent inclure des images (par glisser-déposer) et des vidéos (ajouter une URL YouTube pour une intégration automatique).

#### Longue description

Vous pouvez entrer dans le détail de votre projet ici. Fournissez plus d'informations sur la raison d'être du projet, qui utilisera les données et l'impact attendu de la cartographie. Si le projet implique des collaborations ou des partenaires, vous pouvez en parler ici. 

> Pour chacun de ces champs de texte, vous pouvez choisir d'ajouter des traductions supplémentaires. Si vous souhaitez ajouter une traduction, cliquez sur le code de langue à deux lettres et saisissez le texte traduit. Pour les utilisateurs qui ont réglé le gestionnaire de tâches sur cette langue, le projet s'affichera automatiquement dans cette langue. Par défaut, le champ initial est la langue anglaise, ce qui peut être modifié dans le sous-menu "Paramètres" de votre projet.

#### Date d'échéance

Si vous avez une date à laquelle vous souhaitez que votre projet soit complètement cartographié et validé, vous pouvez l'ajouter ici. C'est facultatif et une fois la date dépassée, cela ne change rien au projet et les volontaires peuvent continuer à contribuer par la suite. Les contributeurs verront la date d'échéance indiquée à côté du projet. 

### Instructions

![TM Instructions][]

#### Commentaire sur les changements

Vous pouvez ajouter ici des balises de suivi supplémentaires qui s'afficheront automatiquement chaque fois que quelqu'un enregistre son travail dans le cadre de votre projet. Par exemple, si vous souhaitez commencer à suivre toutes les contributions de tous les projets de votre organisation, vous pouvez leur ajouter une balise de suivi commune, par exemple #MSF ou #cartONG. Essayez de **garder ces balises courtes** et n'en ajoutez pas trop, les commentaires de modifications encombrés sont difficiles à interpréter et il faut laisser de l'espace aux cartographes pour qu'ils puissent laisser des commentaires de modifications descriptifs. 

> Veuillez noter qu'une balise de suivi de projet unique sera déjà présente, par exemple #hotosm-project-11188 - **vous pouvez la laisser telle quelle**, elle est très importante pour le suivi de l'avancement du projet. Le numéro à la fin de la balise est un identifiant unique pour votre projet.

#### Instructions détaillées

Ajoutez des instructions descriptives que les cartographes et les validateurs devront suivre lorsqu'ils travailleront sur votre projet. Votre projet sera public, donc **rédigez des instructions pour des utilisateurs inexpérimentés** n'ayant aucune connaissance locale ou contextuelle. Veuillez utiliser un langage simple, car votre public cible n'est peut-être pas de langue maternelle anglaise.

1. Indiquez les informations les plus importantes en haut de la page pour qu'elles soient bien visibles. Il peut s'agir d'une description de l'imagerie et d'un avertissement sur un problème de décalage de l'imagerie avec les directives. Il peut aussi s'agir d'une instruction aux cartographes d'ignorer les chemins et les pistes dans un projet de cartographie des autoroutes et de se concentrer sur les autoroutes les plus importantes.
2. Ajoutez des instructions spécifiques au contexte ou à l'emplacement. Celles-ci varient considérablement mais aideront les cartographes à interpréter l'imagerie satellite. Par exemple : "Attendez-vous à voir de nombreuses huttes circulaires brunes au toit de chaume dans ce projet au Sud-Soudan" ou "Les colonies au Guatemala sont souvent densément construites, zoomez très loin lorsque vous cartographiez chaque bâtiment pour vous assurer qu'ils ne se connectent pas ou ne se chevauchent pas". Faites glisser et déposez des captures d'écran d'images aériennes dans les instructions ici pour améliorer cette section.
3. Incluez impérativement une description détaillée de **la manière de cartographier chaque élément** que vous souhaitez cartographier. Regardez les projets existants (mais récents) sur le gestionnaire de tâches pour voir si vous pouvez emprunter un texte d'instruction existant (attention, certains projets n'auront pas de bonnes instructions !).
4. La ressource définitive sur le balisage est le [wiki OpenStreetMap] (http://wiki.openstreetmap.org/wiki/Map_Features). Pour de nombreux projets liés à HOT, la page sur [le balisage des autoroutes en Afrique] (http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) est la spécialisation appropriée et il peut être utile de créer un lien dans les instructions de votre projet. Si votre projet doit respecter des normes de balisage différentes, rédigez une page similaire dans le wiki et insérez un lien dans vos instructions.
5. Autres points de clarification : Si le projet ne convient qu'aux cartographes ayant un certain niveau d'expérience. Par exemple, le projet utilise des importations ou les données existantes doivent être réalignées sur les traces GPS ou sur une autre imagerie. Formulez cela de manière à ce que les nouveaux cartographes se sentent invités à contribuer à d'autres projets mais comprennent que des techniques avancées sont requises dans ce cas.
6. Il existe des directives qui couvrent les erreurs courantes que nous rencontrons lors de la validation. Un exemple est la compilation de Blake Girardot sur [la cartographie en Afrique de l'Ouest] (http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Utilisez le lien dans les instructions et expliquez que le respect de ces directives est obligatoire.

#### Instructions par tâche 

Cette option est facultative, mais il est possible d'ajouter un court extrait d'instructions supplémentaires que les cartographes verront pendant qu'ils travaillent sur une tâche. Ces instructions sont affichées sur le côté droit de la vue de l'éditeur du gestionnaire de tâches, au-dessus de la section "État des tâches". Il sera visible à tout moment pendant la cartographie, donc s'il y a quelque chose de **particulièrement important** sur lequel vous voulez **instruire les cartographes**, vous pouvez l'ajouter ici. 

### Métadonnées

![TM Metadata][]

#### Niveau du cartographe

This changes the difficultly level which is **displayed** for your project. Consider this very carefully, complex projects which are inappropriately set to Easy difficulty **can result in significant data quality issues**. 

> Notez que cela ne change pas qui peut **réellement contribuer** à votre projet, ces restrictions sont mises en œuvre dans le sous-menu Permissions.

Most projects are set to either **Easy** or **Moderate** difficulty, a handful of projects are set to Challenging. 

- **Easy** - Consider this if your project is easy to map and:
  - Vous ne demandez aux contributeurs que de cartographier une seule caractéristique, en particulier **les bâtiments uniquement**.
  - La densité des éléments est faible, c'est-à-dire dans une zone **rurale**.
  - Il existe une **faible quantité** de données OSM existantes dans votre zone de projet.
  - Il n'y a pas de problème d'alignement de l'imagerie
- **Moderate** - If your project is trickier to map, this should be considered if:
  - Vous demandez aux contributeurs de cartographier plus d'un élément, par exemple des bâtiments **et** des routes.
  - Il y a une densité moyenne/haute de ces éléments dans votre zone de projet, c'est-à-dire des zones **urbaines**.
  - Il existe des données OSM **substantielles** dans la zone de votre projet.
  - Il peut y avoir des **problèmes d'alignement d'images** ou vous demandez aux contributeurs d'utiliser plus d'une source d'images.
- **Challenging** - If the project is extremely difficult to map, consider this if: 
  - Il existe des caractéristiques de très haute densité dans la zone de votre projet, c'est-à-dire des zones **centrales urbaines**.
  - Il y a **beaucoup** de données OSM existantes dans la zone de votre projet
  - Il y a des problèmes **complexes d'alignement d'images**

#### Types de cartographie

Activez ou désactivez ces options en fonction des fonctionnalités que vous souhaitez cartographier dans votre projet. En général, **moins il y a de fonctionnalités, mieux c'est**, car les projets qui visent à cartographier trop de fonctionnalités ont souvent du mal à progresser. 

> Les projets qui demandent la cartographie d'un grand nombre d'éléments sont difficiles pour les cartographes et difficiles à faire valider. Ils prennent beaucoup plus de temps pour obtenir un bon ensemble de données utilisables. La taille des tâches est également difficile à rendre efficace pour différents types de cartographie, par exemple, les bâtiments nécessitent de petits carrés de tâches, les routes et les voies navigables nécessitent des carrés de tâches plus grands. La meilleure pratique consiste à réaliser plusieurs projets sur la même zone pour cartographier séparément les bâtiments et les routes/voies d'eau. 

#### Préréglages de l'éditeur iD

If you choose one or more items from the drop-down list then mappers using iD will only be able to assign these features to the objects they map. This is recommended for easy, **buildings-only projects**. It will mean that contributors will not be able to tag other features, even if they try. Avoid using presets for more complex projects, as it can quickly become a burden. For example, a highway mapping project would need dozens of presets to be added to ensure all highway types could be mapped. 

#### Organisation

Le nom de votre organisation devrait déjà figurer ici, sinon choisissez-le dans le menu déroulant.

#### Campagne

Si vous avez créé plusieurs projets qui sont associés les uns aux autres, vous pouvez choisir de les affecter à une campagne. Les utilisateurs peuvent filtrer les projets par nom de campagne sur la page Explorer les projets. Par exemple, si votre projet est associé à l'élimination du paludisme, vous pouvez le placer sous la campagne "Élimination du paludisme". Pour demander la création de noms de campagne supplémentaires, veuillez remplir [ce formulaire] (https://forms.gle/qafvkp4iAxnY6rjE6). 

#### Catégories

Sélectionnez ici les thèmes qui se rapportent à votre projet. Les contributeurs peuvent préciser leurs intérêts dans ces catégories dans leur page de paramètres.

#### ID du filtre OSMCha

[OSMCha](https://osmcha.org/) est un outil puissant d'assurance de la qualité des données qui peut vous être utile pour surveiller les contributions à votre projet. Le filtre standard limite la sortie à la boîte de délimitation du projet et aux contributions qui ne sont pas plus anciennes que la date de création du projet et avec le nom du projet dans le commentaire des modifications. Si vous pensez que quelque chose de différent serait une meilleure approche pour analyser les changesets de votre projet, fournissez une URL OSMCha ou un identifiant de filtre OSMCha ici. Le filtre OSMCha est disponible à la fin de la page d'aperçu de votre projet. 

### Zones prioritaires

![TM Priority Area][]

Utilisez les outils ici pour dessiner les zones qui doivent être cartographiées en premier. Vous pouvez avoir plusieurs zones prioritaires pour un projet. Vous pouvez également modifier les zones prioritaires à tout moment. La zone prioritaire sera mise en évidence pour que les volontaires puissent la classer par ordre de priorité. S'ils sélectionnent "Cartographier une tâche", une tâche de la zone prioritaire sera sélectionnée de manière aléatoire. 

> Lors de la cartographie des catastrophes, au début de l'événement, la meilleure pratique consiste souvent à disposer d'une vaste zone de projet de cartographie et à utiliser des zones prioritaires pour cibler la cartographie au fur et à mesure de l'arrivée de nouvelles informations.

### Imagerie

Dans le menu déroulant, choisissez la source d'imagerie aérienne que vous souhaitez charger automatiquement pour votre projet. Si l'imagerie n'est pas répertoriée dans le menu déroulant, vous pouvez choisir "Personnalisé", puis ajouter une URL TMS. 

> Notez que le gestionnaire de tâches **ne peut pas héberger d'images personnalisées**, celles-ci doivent être hébergées en externe et liées à l'aide d'une URL TMS. Si vous souhaitez que votre imagerie soit ouverte à l'utilisation, veuillez envisager d'utiliser [OpenAerialMap] (https://openaerialmap.org/) pour héberger votre imagerie.

License - Optionally, if there is a specific license required for the mappers to accept when using the imagery, you can select it here. If you need a license that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

Dans le menu 'Métadonnées', nous avons pu modifier le niveau de difficulté qui était **affiché** pour un projet. Dans le menu 'Permissions', nous pouvons modifier les personnes autorisées à **accéder** à un projet. Il est important de se rappeler les différents niveaux d'utilisateurs :

- Utilisateur **débutant** - Tout utilisateur qui vient de créer son compte ou qui a effectué **moins de 250 changements** (sauvegardes).
- Utilisateur **Intermédiaire** - Tout utilisateur ayant effectué entre **250 et 500 modifications**.
- Utilisateur **Avancé** - Tout utilisateur ayant effectué **plus de 500 modifications**.

> Les projets complexes qui autorisent de manière inappropriée tous les utilisateurs à contribuer peuvent entraîner **des problèmes importants de qualité des données**. 

![TM Permissions][]

#### Permissions de cartographie

Ici, vous pouvez choisir qui peut **cartographier** votre projet :

- If your project is easy to contribute towards and you consider it an easy project you might want set this to **'Any user'**.
- Si votre projet est plus complexe et nécessite plus d'expérience, limitez la cartographie à **"Uniquement les utilisateurs ayant un niveau intermédiaire ou avancé "**. 
- Si vous voulez être encore plus sélectif, vous pouvez également exiger qu'un cartographe fasse partie d'une **équipe**. Les équipes doivent alors être définies ci-dessous.

#### Autorisations de validation

Ici, vous pouvez choisir qui peut **valider** votre projet. La validation est l'étape où des cartographes plus expérimentés vérifient les contributions apportées à votre projet. Elle doit donc être limitée aux 'utilisateurs de niveau intermédiaire ou avancé' **au minimum**. **Dans l'idéal**, vous devriez restreindre la validation encore plus loin, à **'Seulement les membres de l'équipe'**, mais lorsque vous faites cela, vous devez vous rappeler de **définir ces équipes** ci-dessous. 

#### Équipes

Utilisez les filtres pour rechercher et ajouter des équipes. Vous pouvez ajouter votre propre équipe (ou vos propres équipes), mais n'hésitez pas à ajouter d'autres équipes. Une fois que vous avez ajouté une équipe, veillez à sélectionner un rôle (cartographe, validateur, chef de projet). 

Les autorisations d'équipe ne fonctionneront pas si vous n'avez pas restreint les autorisations de cartographie et/ou de validation aux "membres de l'équipe uniquement". Si vous accordez à une équipe un accès de chef de projet, les membres de cette équipe pourront modifier le projet.

> Dans le gestionnaire de tâches HOT, n'hésitez pas à ajouter deux des plus grandes équipes de validation, à savoir les 'validateurs mondiaux de HOT' et les 'validateurs stagiaires' de HOT. Veuillez noter que, bien que cela donne à ces membres de l'équipe la **permission** de valider votre projet, cela **ne signifie pas nécessairement** qu'ils **valideront** votre projet.

#### Confidentialité

Le fait de rendre un projet 'privé' le rendra invisible à tous les utilisateurs, sauf à ceux qui font partie des équipes définies ci-dessus. 

### Paramètres

![TM Settings][]

#### Langue par défaut

En modifiant cette option, vous changerez la langue par défaut du titre, de la description et des instructions de votre projet.

#### Éditeurs pour la cartographie/validation

Cela restreint les éditeurs disponibles à ceux qui sont cochés. Vous pouvez spécifier des ensembles différents pour la cartographie et pour la validation. Notez qu'il est possible d'activer l'éditeur RapiD assisté par l'IA ici. 

#### Appliquer la sélection aléatoire des tâches

Si cette option est activée, les contributeurs ne peuvent pas sélectionner des tâches spécifiques pour le mappage.

### Actions

Ici, vous pouvez effectuer des actions groupées puissantes sur votre projet. **Faites attention** avec beaucoup de ces options, **elles ne sont pas réversibles**. 

![TM Actions][]

#### Message à tous les contributeurs

Envoie un message du gestionnaire de tâches à tous ceux qui ont marqué une tâche comme étant complète ou valide. Il peut être utilisé pour remercier les contributeurs et/ou les guider vers d'autres projets dans une campagne. Elle doit également être utilisée avant d'utiliser l'une des deux options Valider/Invalider toutes les tâches décrites ci-dessous.

#### Cartographie, validation et invalidation

Ceci définira le statut de toutes les tâches comme étant soit cartographié, validé ou invalidé. A manipuler avec précaution car il n'y a pas d'annulation.

#### Réinitialisation des tâches

Cette opération ramène toutes les tâches à leur état initial, mais les actions précédentes restent visibles dans l'historique des tâches. Manipulez-les avec précaution car il n'y a pas d'annulation.

#### Transférer la propriété du projet

Vous pouvez indiquer un autre responsable au sein de votre organisation qui sera répertorié comme le créateur du projet. Recherchez son nom d'utilisateur OSM. 

#### Cloner le projet

Cette option très utile permet de créer un double du projet, en conservant l'ensemble de la **structure identique** à l'exception de la zone d'intérêt, de la grille des tâches et des zones prioritaires que vous devrez réimporter ou redessiner. Cette option vous fera **gagner beaucoup de temps** si vous créez une série de projets similaires couvrant une grande surface. 

#### Supprimer le projet

Cela **supprimera définitivement** le projet du gestionnaire de tâches. Manipulez-la avec précaution car il n'y a pas d'annulation possible. Il n'est pas possible de supprimer un projet après y avoir apporté des contributions.

### Éditeur personnalisé

Si vous souhaitez créer un lien vers un éditeur qui ne figure pas dans le menu "Paramètres", vous pouvez ajouter une URL vers cet éditeur ici. 

### Sauvegarde et test

Une fois que vous êtes satisfait de la configuration de votre projet, cliquez sur `Enregistrer`. Visualisez votre projet en sélectionnant `Accès au projet` et `Page du projet`. **Vérifiez soigneusement votre projet**, assurez-vous que les instructions sont claires et que la formulation et le formatage sont corrects. 

**Essayez de cartographier une tâche**, l'imagerie se charge-t-elle correctement ? Les instructions sont-elles suffisamment claires ? Si vous devez apporter des modifications ou des améliorations à votre projet, cliquez sur le bouton `Modifier` sur la page du projet. 

### Publier

Après avoir vérifié et testé votre projet, si vous en êtes satisfait et si vous êtes prêt à lancer la cartographie, cliquez sur le bouton `Editer` de la page du projet et, dans le menu "Description", changez le statut en ‘Publié‘. Une fois le projet publié, le grand public pourra voir votre projet et y contribuer. 

> Notez que vous pouvez accéder au menu 'Éditer' de votre projet et modifier les paramètres à tout moment, même si la cartographie est en cours.

## Gestion du projet

Félicitations ! Vous avez créé un projet, maintenant vous devez vous assurer que vous le gérez efficacement. 

### Être réactif

En tant que créateur du projet, vous êtes **responsable** de **répondre aux questions** qui apparaissent dans la section **Questions et commentaires** de votre page de projet. Cette section comprendra souvent des conseils utiles ou des astuces de la communauté au sens large. Prenez-les au sérieux, répondez-y et apportez des modifications à vos projets si nécessaire. 

> Pour activer les notifications lorsqu'il y a de nouveaux messages dans la section "Questions et commentaires", cliquez sur votre nom d'utilisateur OSM dans le gestionnaire de tâches et choisissez `Paramètres`. Activez les notifications pour les "Questions et commentaires".

Sur la page du projet, votre nom d'utilisateur sera également indiqué à côté de "créé par ...". Cela signifie que vous pouvez également recevoir des messages directs d'OSM. Veillez à les lire et à y répondre. 

> Si vous êtes submergés de questions, sachez que vous en recevrez moins si vous suivez ces conseils : _La première chose que vous pouvez faire pour aider les cartographes et les validateurs, c'est d'avoir des projets bien conçus avec des instructions et des descriptions faciles à comprendre mais complètes._

### Séquencement du projet

Si vous avez créé un certain nombre de projets dans une série **ne les publiez pas tous en même temps**. Vous n'êtes pas le seul à créer des projets, avoir un nombre raisonnable de projets (un ou deux) à la priorité appropriée est bien. Si vous en publiez une demi-douzaine à la fois, le gestionnaire de tâches sera débordé. Gardez les autres à l'état de brouillon ou à un niveau de priorité inférieur, mais à tout moment, seuls un ou deux projets sont en cours de réalisation. Vous remarquerez peut-être que les contributeurs perdent leur enthousiasme s'ils voient beaucoup de projets similaires en même temps qui progressent peu.

### Cycle de vie du projet

Suivez l'évolution de la cartographie et de la validation de vos projets. N'oubliez pas que **tous les projets doivent finir par être archivés**. Vous devrez le faire manuellement, alors ne perdez pas de vue l'avancement, la priorité ou la pertinence de vos projets. Si vous changez d'organisation, veillez à **transmettre** vos projets en cours à votre remplaçant.

## Informations supplémentaires

### Remarques concernant l'imagerie

Before creating your project, check the imagery in several different locations across your project area to make an imagery assessment. In most cases either Esri or Bing imagery should suit your needs. However, there are situations where you might want to choose an alternative source. You may need to consider the following when choosing your imagery: 

1. Si une cartographie minutieuse et détaillée est nécessaire, choisissez l'imagerie la plus claire et la plus haute résolution.
2. If your priority is to have the most up-to-date imagery, flick between the standard imagery sources to look for the most recent imagery. Look for indications of development such as new buildings or land clearance to get an idea of the most up-to-date imagery.
3. Vérifiez la couverture nuageuse. Bien qu'une source d'imagerie puisse répondre à vos besoins, si elle est très nuageuse ou brumeuse, vos cartographes auront du mal à l'utiliser.
4. Vérifiez l'alignement, s'il existe de nombreuses données OSM existantes qui s'alignent sur un jeu d'images satellites, il peut être judicieux de choisir les mêmes images. S'il y a des problèmes d'alignement, assurez-vous de rédiger des instructions claires détaillant comment vous attendez des contributeurs qu'ils traitent les problèmes de décalage/alignement. 

> Il est souvent très difficile d'obtenir une date de capture d'image exacte auprès des fournisseurs d'images satellite. Les principales sources sont des 'mosaïques' où une série d'images (souvent avec des dates de capture très différentes) sont assemblées. Parfois, cet assemblage va jusqu'au niveau du pixel individuel. En l'absence d'informations, la comparaison d'images est donc souvent le meilleur choix pour trouver l'imagerie la plus récente. 

#### Alignement de l'imagerie

Votre zone de projet a peut-être déjà été partiellement cartographiée à l'aide d'une imagerie plus ancienne et il peut y avoir un désalignement notable entre les objets cartographiés plus anciens et l'imagerie disponible plus récente. Inspectez divers endroits de votre zone de cartographie pour le déterminer. S'il y a un problème d'alignement, assurez-vous d'inclure des instructions détaillées décrivant la meilleure approche à adopter pour les cartographes. Les projets présentant des problèmes d'alignement d'images doivent être réservés à des cartographes plus expérimentés. 

Il n'y a pas d'instructions standard lorsqu'il s'agit de problèmes d'alignement d'images. Cela dépend beaucoup du contexte. Parfois, on demande aux cartographes de s'aligner sur les traces GPS, parfois sur les éléments linéaires cartographiés tels que les autoroutes et les voies navigables. Voici un exemple d'approche : 

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Add new features from the now correctly aligned to Bing imagery.

Les cartographes ont souvent pour instruction de rechercher le _moindre effort_ lorsqu'il s'agit de problèmes d'alignement d'images. Ce qui signifie que les contributeurs sont invités à varier leur approche en fonction de la situation dans leur tâche individuelle : 

- S'il y a beaucoup de cartographie existante dans une tâche qui est constamment mal alignée, le moindre effort pourrait consister à modifier le décalage de l'imagerie pour l'adapter à la cartographie existante, puis à cartographier le petit nombre d'objets restants dans la tâche. 
- S'il y a moins de cartographie existante, ou si les objets sont mal alignés de manière incohérente (c'est-à-dire que le degré de désalignement varie dans l'espace), il peut être plus facile de modifier la position des objets cartographiés pour les aligner avec l'imagerie, puis de cartographier les objets restants dans la tâche.

Si votre projet présente des problèmes d'alignement, assurez-vous que vos carrés de tâches ne sont pas trop grands car les décalages d'imagerie peuvent varier considérablement dans une zone de cartographie, en particulier si le terrain n'est pas plat. Même des discontinuités d'imagerie peuvent se produire dans un projet - soyez attentifs à ces discontinuités et informez les contributeurs d'un tel problème.

> Bien que les cartographes individuels puissent modifier manuellement le décalage de l'imagerie pendant la cartographie, il ne vous est pas possible, en tant que créateur de projet, de modifier le décalage de l'imagerie au niveau du projet. Cependant, si vous utilisez votre propre imagerie aérienne qui est hébergée ailleurs, vous pouvez modifier le décalage à la source. Cependant, veuillez noter que l'alignement peut varier considérablement dans l'espace et que le simple fait de modifier le décalage global ne permet pas toujours de corriger les problèmes d'alignement. 

N'hésitez pas à consulter ces ressources supplémentaires sur l'alignement des images :

- [Directives générales pour les différents rédacteurs](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Gif animé sur l'alignement des images dans iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Chapitre sur l'alignement des images de la JOSM dans learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
