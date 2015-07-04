---
layout: doc
title: Éditer avec JOSM
permalink: /fr/josm/editing-with-josm/
lang: fr
category: josm
otherguides: "Les autres niveaux"
---

# Éditer avec JOSM

Dans le [Chapitre 3]({{site.baseurl}}/fr/josm/start-josm/), vous avez
installé JOSM et commencé à tracer vos premiers points, lignes et polygones.
Vous avez ajouté des attributs pour ces objets afin de leur attribuer des
informations. À la fin, vous avez été en mesure de dessiner votre propre carte
dans JOSM.

Tracer des cartes dans le chapitre 3 a été un exercice pour apprendre JOSM et
apprendre à tracer sur la carte pour y ajouter des endroits. Mais nos cartes
n'étaient pas exactes, car nous n'avions pas encore ajouté de localisation. Dans
les deux derniers chapitres, nous avons examiné deux outils, les GPS et les
Walking Papers, qui nous permettent de recueillir la localisation actuelle des
lieux (en général, les récepteurs GPS permettent de déterminer votre position
avec une précision de + / - 10 mètres, de sorte qu'ils peuvent ne pas être tout
à fait exacts, en particulier si vous ne prenez qu'un seul point). Ces lieux
sont représentés par des coordonnées.

Dessiner une *vraie* carte, soit une carte où tous les points, les lignes et
polygones sont à leur localisation propre, ce n'est pas différent des cartes
tracées au cours des chapitres précédents — mais maintenant, nous allons
utiliser nos points et pistes GPS, et nos Walking Papers, pour tracer des cartes
similaires à leur bon endroit sur la planète.

Dans ce chapitre, nous allons apprendre à modifier la carte sur OpenStreetMap
et à les améliorer. Nous allons apprendre le cycle de base de la cartographie
sur OSM:

<!-- This text is hidden - 
1. **Télécharger** des données de la carte OSM actuelle

    -   [Tour de JOSM]({{site.baseurl}}/fr/beginner/editing-with-josm/#a-tour-of-josm)
    -   [Télécharger des données OSM]({{site.baseurl}}/fr/beginner/editing-with-josm/#download-osm-data)
    -   [Couches JOSM]({{site.baseurl}}/fr/beginner/editing-with-josm/#josm-layers)

2. **Éditer** en utilisant les pistes GPS, Walking Papers, et les notes comme un guide

    -   [Editer]({{site.baseurl}}/fr/beginner/editing-with-josm/#edit)
    -   [Attributs]({{site.baseurl}}/fr/beginner/editing-with-josm/#tags)

3. **Enregistrer** les modifications dans la base OpenStreetMap

    -   [Télécharger les modifications]({{site.baseurl}}/fr/beginner/editing-with-josm/#upload-changes)
    -   [Voir vos modifications sur la carte]({{site.baseurl}}/fr/beginner/editing-with-josm/#see-your-changes-on-the-map)
    -   [Sauvegarder les fichiers OSM]({{site.baseurl}}/fr/beginner/editing-with-josm/#saving-osm-files)

À la fin de ce chapitre, nous serons en mesure de voir nos ajouts sur la
carte OSM.


## Un Tour de JOSM

-   Tout d'abord, démarrez JOSM à partir du Menu de programmes de votre
    ordinateur.

-   Ensuite, chargez votre fichier GPX et votre Walking Paper dans JOSM. Vous
    n'avez pas besoin d'ouvrir les deux à la fois ; mais vous pouvez, si vous le souhaitez. Reportez-vous aux deux précédents chapitres si vous ne vous
    souvenez pas comment faire.

-   Un tour rapide des fonctionnalités de JOSM : JOSM a de nombreuses
    caractéristiques. Vous êtes déjà familier ave la fenêtre principale de JOSM
    — c'est la fenêtre de la carte, et c'est là que la plupart de l'action se
    déroule. À cet endroit, vous visualisez, éditez et ajoutez les données dans
    la base OpenStreetMap.

-   La fenêtre à droite de la carte contient une série de panneaux avec chacun
    une fonction différente. En général, lorsque vous installez JOSM,
    plusieurs panneaux sont affichés par défaut, tels que les calques,
    Propriétés et Sélection. Lorsque vous sélectionnez un point, une ligne ou
    une forme sur la fenêtre de la carte, il sera affiché dans le panneau de
    sélection. L'information relative à l'objet sera affichée dans le panneau Propriétés, et le nom d'utilisateur de l'auteur de cet objet sera affiché
    dans le panneau Auteurs.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_46acf705_en.png)

-   Sur le côté gauche de JOSM, il y a plusieurs barres d'outils sous forme de
    nombreux boutons. Au haut de cette barre, se trouvent différents boutons qui
    controlent ce que vous pouvez faire avec votre souris. Vous êtes déjà
    familier avec les deux premiers, l'outil de sélection et de l'outil de
    dessin. les autres outils sont utiles pour zoomer, supprimer un objet,
    dessiner une forme, ou créer une ligne qui est parallèle à une autre ligne.

-   En dessous de ces outils, se retrouvent plusieurs autres boutons. Ceux-ci 
    contrôlent ce que vous voyez sur le côté droit de JOSM. Avec ces boutons
    vous pouvez ouvrir et fermer les boîtes à droite, comme les propriétés, la
    sélection et auteur.
	 
## Télécharger des données OSM

Rappelez-vous le cycle d'édition d'OpenStreetMap décrit dans l'introduction
de ce chapitre. **Télécharger**, **éditer**, **sauver**. Avant d'éditer, nous
devons télécharger les données existantes dans la base OSM pour la zone à
éditer.

-   Lorsque vous ouvrez votre piste GPX ou le fichier du Walking Paper, la
    fenêtre de la carte affiche ce contenu, et se déplace automatiquement pour
    couvrir les coordonnées couvertes dans le fichier. Suite à l'ouverture de
    vos fichiers, regardez dans le fond à gauche de JOSM. Vous pouvez voir la
    latitude et la longitude (Coordonnées) du curseur de votre souris.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m58e5f3e7_en.png)

-   Parce que la fenêtre de la carte montre déjà la zone que l'on veut
    modifier, il est facile de télécharger les données OpenStreetMap pour cette zone.
    Cliquez sur «Fichier» dans le coin supérieur gauche de JOSM et cliquez sur «Télécharger de OSM». Cela permettra d'ouvrir la fenêtre de téléchargement. Vous pouvez accéder à
    cette fenêtre plus simplement en cliquant sur le bouton de téléchargement décrit ci-dessous:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m6f2281c2_en.png)

-   Lorsque la fenêtre de téléchargement s'ouvre, vous devriez voir une carte
    avec une boîte rose dessinée au-dessus. Si vous ne voyez pas la carte,
    cliquez sur l'onglet marqué «Carte Slippy».

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m1318e890_en.png)

-   La boîte rose correspond à la zone de la carte que nous aimerions
    télécharger pour l'édition. À l'ouverture, elle correspond à la zone
    affichée dans la fenêtre Carte. Sauf si vous avez déplacé la fenêtre de la
    carte, vous pouvez immédiatement télécharger la zone correspondante à votre
    fichier GPS ou votre Walking Paper. Toutefois, si vous souhaitez télécharger
    une grande surface, vous pouvez dessiner une nouvelle boîte. Pour cela,
    cliquez sur la carte, maintenez le bouton gauche de la souris et faites
    glisser la souris pour créer une boîte. Relâchez le bouton de la souris pour terminer le dessin de la boîte.

-   Lorsque vous êtes satisfait de la taille et de l'emplacement de la boîte,
    cliquez sur «Télécharger» en bas de la fenêtre. JOSM obtiendra ces données à
    partir de la base OpenStreetMap et les transférera automatiquement dans la
    fenêtre de votre carte, prêtes à être éditées.
end of hidden text-->

## Couches JOSM

-   Ouvrez votre fichier GPS et téléchargez les données à partir
    d'OpenStreetMap, si ce n'est déjà fait. Vous remarquerez peut-être que
    lorsque vous ouvrez un fichier, ou ajoutez un Walking Paper, ou le
    téléchargez à partir d'OpenStreetMap, un autre élément est ajouté dans le
    panneau Calques sur le côté droit de JOSM. Vos panneaux de couches peuvent ressembler à ceci:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2b7c3b_en.png)

-   Chaque élément de cette liste représente une source de données différente
    que vous avez ouverte dans la fenêtre de votre carte. Dans l'exemple
    ci-dessus, «couche de données 2» correspond aux données OpenStreetMap que
    nous voulons modifier. «Marqueurs» correspond aux waypoints du GPS, et
    «30 Juni 201-gpx» correspond au fichier GPS. Enfin, «Walking Papers» est la
    couche créée quand vous avez ajouté le Walking Paper dans JOSM. Vous pouvez
    ajouter la couche d'imagerie Bing (i.e. imagerie par satellite), en cliquant
    sur «Imagerie» dans le menu en haut de JOSM et en sélectionnant «Bing Sat».

-   Pour masquer une de ces couches, sélectionnez-la avec votre souris et
    cliquez sur le bouton «Afficher / Masquer» qui ressemble à ceci:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2e696f_en.png)

-   Vous devriez voir la couche sélectionnée disparaître de la fenêtre «Carte».
    Cliquez sur «Afficher / Masquer» de nouveau, et elle réapparaîtra.

-   Vous pouvez fermer une couche en la sélectionnant et en cliquant sur le 
    bouton «Suppression» :

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m172543d8_en.png)

-   Enfin, il est important de savoir que vous ne pouvez modifier que la couche
    considérée comme *active* par JOSM. Si vous ne parvenez pas à éditer la
    carte, c'est probablement parce que vous n'avez pas la bonne couche définie
    comme active. La plupart des couches, telles que les points GPS, Walking
    Papiers et l'imagerie satellite, ne peuvent pas être modifiées. Les couches
    que vous pouvez modifier (les données de OpenStreetMap) sont généralement
    appelées «Data Layer 1».

-   Si vous voulez qu'une couche devienne active, sélectionnez-la dans le
    panneau «Calques», puis cliquez sur le bouton «Activer»:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_de83a77_en.png)

## Éditer

L'étape suivante consiste à éditer la carte et y ajouter de nouveaux éléments.
Ce n'est pas toujours facile au début, mais avec la pratique verrez que ce sera
de mieux en mieux.

-   Si vous voulez déplacer un point, une ligne ou une forme, utilisez
    **sélectionner l'outil**. Cliquez sur un objet et faites-le glisser où il
    devrait être. Ceci peut être utilisé pour corriger la position des éléments
    qui ont été mis au mauvais endroit.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m2eb4096c_en.png)

-   Utiliser les outils de **Dessin** pour dessiner des nouveaux points, des
    lignes et des formes. Décrivez ces objets en les sélectionnant dans le menu «Attributs», comme vous l'avez fait dans le [Chapitre 3]({{site.baseurl}}/en/beginner/start-josm/).

-   Rappelez-vous que vos points GPS et les infos de vos Walking Papers ne sont
    pas automatiquement transférés dans OpenStreetMap. Vous devez les ajouter à
    la carte OSM *numériquement*, en utilisant l'outil de dessin. Mais vos
    points, pistes et objets tracés dans le Walking Paper peuvent être vus en
    arrière-plan comme un guide de traçage.

-   Supposons que vous avez enregistré un waypoint sur votre GPS nommé 030 et
    vous avez écrit dans vos notes que 030 est une école. Pour ajouter ce point
    dans OpenStreetMap, vous devez sélectionner l'outil de dessin, et
    double-cliquer au-dessus du point 030 dans la fenêtre de votre carte. Cela
    va créer un point. Puis allez dans le menu «Attributs», et trouvez
    l'attribut pour l'école. Entrez le nom de l'école et cliquez sur «Appliquez les attributs». Faites de même pour ajouter des lignes et des polygones.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_1cb5aeb4_en.png)
	
## Balises

-   Lorsque vous dessinez un point, une ligne ou une forme, vous avez défini son
    emplacement, mais pas les informations sur ce qu'il est. En d'autres termes,
    nous savons ***où*** il est, mais pas ***ce*** qu'il est. Jusqu'à maintenant,
    nous avons utilisé les éléments dans le menu «Attributs» pour définir ce
    qu'il **est**. La façon dont OpenStreetMap sait ce qu'**est** un objet se fait
    à l'aide d'**attributs**.

-   Un *attribut* est une étiquette que vous pouvez mettre sur quelque chose.
    Par exemple, si  je dessine un carré, c'est seulement un carré. Mais ensuite
    je lui ajoute plusieurs attributs qui décrivent ce que c'est : c'est un
    bâtiment, le nom du bâtiment est «Menara Thamrin», le bâtiment est de 16
    niveaux en hauteur.

-   Vous pouvez ajouter autant d'attributs que vous souhaitez à un objet. Les
    attributs sont enregistrés en tant que paires de texte, appelées les
    **clés** et **valeurs**. Dans OpenStreetMap, les attributs décrits ci-dessus
    serait en fait :

    `building = yes, name = Menara Thamrin, building:levels = 16`

-   Si vous sélectionnez un objet dans JOSM, vous pouvez voir tous les attributs
    qui lui sont attribués à partir du panneau «Propriétés» sur la droite.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m945ccee_en.png)

### Éditer les attributs

Vous pouvez ajouter, modifier et supprimer ces attributs dans ce panneau.
Cependant, les attributs sont traditionnellement en anglais. Il est souvent
préférable d'utiliser le menu «Attributs». Lorsque vous ajoutez ou modifiez des
étiquettes, telles que «route principale» au lieu de «sentier», le style
change en fonction de l'étiquette.

Pour modifier un objet existant :

-   Sélectionnez-le.

-   Ensuite, vous pouvez éditer les attributs de l'une des deux manières
    suivantes:

    1.  Vous pouvez utiliser le Menu des attributs pour ouvrir un formulaire et modifier les informations

    2. Vous pouvez éditer les attributs directement dans la fenêtre «Propriétés»
    sur la droite.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_94da59a_en.png)

### Erreur courante: ajouter des attributs aux nœuds d'un objet au lieu de les ajouter à des lignes ou des polygones

Lorsque vous ajoutez des balises à un nœud, vous sélectionnez le nœud, puis
ajoutez vos attributs (ou utilisez le menu «Attributs»). Lorsque vous voulez
ajouter des attributs à une ligne ou un polygone, il est important que vous sélectionniez la ligne, et non les noeuds qui composent cette ligne.

Une erreur courante consiste à utiliser l'outil de sélection de JOSM pour tracer
un cadre autour d'un objet, ce qui a pour effet de sélectionner à la fois la
**ligne** ET les **nœuds** qui la composent. Lorsque vous ajoutez les attributs,
ceux-ci sont alors ajoutés *et* à la ligne *et* aux nœuds qui la composent.
Assurez-vous de ne sélectionner que les *lignes** lorsque vous souhaitez leur
ajouter des attributs.

![]({{site.baseurl}}/images/EditingWithJOSM_html_2746cce8_en.png)

> Vous pouvez trouver plus d'information sur les attributs et les presets dans
> le guide intermédiaire, «Chapitre 4: XML et attributs JOSM».

## Télécharger les modifications

Après avoir effectué quelques changements pour améliorer la carte, nous allons
enregistrer ces modifications dans la base OpenStreetMap. Pour enregistrer les
modifications, nous devons être connecté à Internet, parce que nous allons
téléverser les modifications vers la base OpenStreetMap.

-   Cliquez sur «Fichier» dans le menu du haut, puis cliquez sur «Envoyer». Ceci
    va ouvrir la fenêtre de téléchargement. Vous pouvez accéder à cette fenêtre
    en cliquant simplement sur le bouton de téléchargement, illustré ici:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_67f320b3_en.png)

-   La fenêtre qui apparaît affiche la liste des objets que vous ajoutez et les
    objets que vous modifiez ou supprimez. Dans la boîte en bas de la fenêtre,
    vous êtes invité à fournir un commentaire sur les modifications que vous
    avez apportées. Entrez une description de vos modifications. Dans un
    contexte collaboratif comme OpenStreetMap, il est important de décrire de
    façon générale l'objet de ces ajouts, modifications et suppressions.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)

-   Cliquez sur «Télécharger les modifications».

-   Si c'est la première fois que vous apportez des modifications dans
    OpenStreetMap à partir de JOSM, on vous demandera de fournir votre nom d'utilisateur et votre mot de passe que vous avez créé précédemment.

-   Saisissez-les dans la fenêtre qui apparaît. Si vous cochez la case dans
    cette fenêtre, votre nom d'utilisateur et votre mot de passe seront
    sauvegardés et vous n'aurez pas besoin de les entrer à nouveau à l'avenir.
    Cliquez sur «Authentification».

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)

-   Vous devrez attendre quelques secondes pour que vos modifications soient 
    transférées. Et voilà! Vous avez fait votre première modification à
    OpenStreetMap. Vous pouvez continuer à éditer pour ajouter tous vos points
    si vous le souhaitez. Assurez-vous toujours de téléverser vos modifications
    avant de fermer JOSM.

## Voir vos modifications sur la carte

-   Ouvrez votre navigateur Internet et allez à
    [http://openstreetmap.org/](http://openstreetmap.org/)

-   Déplacez la carte vers la zone que vous avez modifiée.

-   Vous devriez voir vos modifications apparaitre maintenant sur la carte!
    Si vous ne les voyez pas, essayez d'appuyer sur «CTRL + R» pour actualiser
    la page Web. Parfois, la carte ne se met pas à jour correctement et doit
    être rechargée.

-   Que faire si vous ne voyez pas vos modifications ? Ne vous inquiétez pas. Ça
    peut prendre plusieurs minutes avant que les changements apparaissent sur la
    carte. En outre, vérifiez vos ajouts dans JOSM pour vous assurer que vous
    les avez ajoutés correctement. Une bonne règle générale: si une icône est
    associé à votre point dans JOSM, alors il devrait être vu sur la carte
    principale sur le site OpenStreetMap.

## Enregistrement des fichiers OSM

Parfois, après avoir téléchargé des données OSM, vous voulez les enregistrer
localement, par exemple pour pouvoir les éditer sans connexion Internet, puis
téléverser les modifications plus tard quand vous avez de nouveau accès à
Internet.

-   Pour enregistrer un fichier OSM, assurez-vous que c'est le calque actif dans
    le panneau «Calques». Cliquez sur «Fichier» dans le menu du haut, puis
    cliquez sur «Enregistrer». Choisissez un emplacement pour le fichier et
    donnez-lui un nom. Vous pouvez également enregistrer en cliquant sur ce
    bouton :

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m3d7a0a33_en.png)

-   Vous pouvez maintenant fermer JOSM et vos données seront sauvegardées.
    Lorsque vous voulez accéder au fichier à nouveau, il suffit d'ouvrir JOSM,
    aller au menu «Fichier», et cliquer sur «Ouvrir».


## Résumé

Maintenant que vous avez vu comment ajouter des données à la base OpenStreetMap,
quelle est la prochaine étape ? Rappelez-vous que les cartes OSM s'améliorent en
permanence. Chacun des changements que vous apportez à la carte participe à
l'améliorer avec le temps. Et, de même que vous pouvez améliorer le leur, les
autres contributeurs peuvent améliorer votre travail.

Dans le dernier chapitre, nous allons mettre JOSM de côté pour examiner
certains projects intéressants bâtis sur les données d'OpenStreetMap, et voir
comment vous pouvez continuez votre apprentissage.
