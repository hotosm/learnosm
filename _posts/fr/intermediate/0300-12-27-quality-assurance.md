---
layout: doc
title: Assurance qualité
permalink: /fr/intermediate/quality-assurance/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---


Assurance qualité
==================

Introduction
------------

Bien qu’il soit aisé d’apprendre la cartographie avec OpenStreetMap, en
maîtriser tous les aspects techniques est une entreprise ardue et de
plus longue haleine. Tout le monde commet des erreurs dans OSM, mais
cela n’empêche pas le projet de progresser constamment, car même
lorsqu’une personne contribue de façon erronée, il se trouve toujours
d’autres cartographes OSM pour contribuer et corriger les erreurs. La
maîtrise s’acquiert au fil de la pratique d’OSM et avec elle les bonnes
façons de cartographier.

Ce chapitre a pour objectif de vous aider à contribuer au mieux au
projet OSM. Nous aborderons dans ce chapitre :

1.  L’outil de validation : la présentation détaillée de différentes
    techniques d’édition avec JOSM pour améliorer la qualité de votre
    travail.
2.  Les avertissements les plus courants.

En cartographiant d’emblée de façon juste, vous gagnerez toujours du
temps.

![image](/images/fr/0300-12-27-quality-assurance/image07.png)

*Cette fenêtre d’avertissement vous informe qu’il y a des données
suspectes dans le groupe de modifications que vous essayez d’envoyer et
que vous devriez revoir les erreurs listées. Il s’agit là d’un exemple
de l’approche de contrôle de qualité OSM permettant de créer des données
de qualité, d’identifier les objets sans attribut, superposés ou
incomplets afin de les corriger.*

JOSM comprend un outil de validation, le Validateur de données, qui
permet la détection automatique de certains problèmes. Cet outil est
très utile pour identifier les erreurs qui vous ont échappé lors de vos
éditions. Le Validateur de JOSM identifie deux catégories de problèmes :

-   **Erreurs :** Il est important de corriger ces types de problèmes, vous
    ne devez jamais les ignorer. Il peut s’agir par exemple d’objets
    dupliqués, de lignes ou de polygones superposés.
-   **Avertissements :** Il s’agit de problèmes également à résoudre, mais
    qui dans certains cas ne sont pas des erreurs (exemple typique :
    l’absence de nom pour une rue résidentielle) et peuvent donc être
    tolérés.

Il convient de remarquer que le Validateur, lorsqu’il est appliqué à une
zone de travail étendue, vous signalera tous les problèmes qu’il est à
même d’identifier et dont la liste ne se limite pas aux vôtres. L’outil
de validation analysera en effet l’intégralité de la couche de données
téléchargée et vous signalera tous les problèmes identifiés et non ceux
correspondant seulement à vos éditions. Vous pouvez donc voir des
problèmes créés par d’autres contributeurs que vous pouvez corriger ou
laisser tels quels, l’outil de validation vous permettant de traiter les
problèmes un par un.

1. L’outil de validation
------------------------

Regardons de plus près comment utiliser l’outil de validation en suivant
les étapes qui suivent :

-   Télécharger une section de carte avec JOSM.
-   Si vous ne voyez pas la fenêtre de validation dans le panneau des
    fenêtres latérales à droite, cliquez sur le bouton bleu « Valider »
    dans la barre d’outils verticale de gauche.

![image](/images/fr/0300-12-27-quality-assurance/image06.png)

-   Assurez-vous qu’aucun objet ou ensemble d’objets ne soit
    sélectionnés avant de lancer l’outil de validation. S’il est lancé
    sur une sélection, la recherche de problèmes sera limitée aux seuls
    objets sélectionnés et non à tous ceux inclus dans la zone
    téléchargée.
-   Dans la fenêtre de validation, cliquez sur « Valider ».

![image](/images/fr/0300-12-27-quality-assurance/image09.png)

-   L’aspect de la carte change et un calque de validation OSM est
    ajouté : les problèmes sujets à avertissement y figurent cerclés de
    jaune et les problèmes sujets à erreurs en rouge.
-   En même temps, la liste des avertissements et des erreurs détectés
    par le Validateur s’affiche dans la fenêtre des Résultats de
    validation.

![image](/images/fr/0300-12-27-quality-assurance/image02.png)

-   Les erreurs doivent toujours toutes être corrigées. Pour cela, on
    procède objet par objet. Il est recommandé de zoomer sur l’élément
    sujet à erreur. Pour zoomer, il faut faire un clic droit sur cet
    élément dans la fenêtre de validation et cliquer sur « Zoomer sur
    problème^[[a]](#cmnt1)^ ».
-   Certains problèmes peuvent être automatiquement corrigés par JOSM.
    C’est le cas par exemple des « Nœuds dupliqués ». Des problèmes de
    ce type, lorsqu’ils sont sélectionnés, rendent le bouton « Réparer »
    actif.

![image](/images/fr/0300-12-27-quality-assurance/image03.png)

-   Cliquez sur ce bouton pour réparer ces problèmes. La plupart des
    problèmes devront cependant être corrigés manuellement un par un
    avec le niveau de zoom pertinent ; répétez pour cela l’opération
    initiale.

-   La plupart du temps, il y a plus d’avertissements que d’erreurs.
    Afficher un avertissement est une manière pour JOSM d’indiquer de
    possibles problèmes. Il convient alors de procéder à l’examen des
    avertissements un par un pour établir s’il s’agit ou non de
    problèmes et, si besoin, de les corriger.
-   Si vous jugez qu’un des éléments de la liste des avertissements ne
    correspond pas à un problème, sélectionnez-le et cliquez sur «
    Ignorer », l’avertissement sera alors enlevé de la liste.
-   Vous pouvez relancez l’outil de validation à tout moment en cliquant
    sur « Valider ».

2. Avertissements les plus courants
-------------------------------------

### A. Chemins non fermés

Un polygone non fermé. Un exemple typique est fourni par les objets
bâtiments dont le dernier nœud n’est pas identique au
premier.

![image](/images/fr/0300-12-27-quality-assurance/image08.png)

Pour corriger, sélectionnez le premier et le dernier nœud du polygone,
allez dans le menu Outils puis cliquez sur « Fusionner les nœuds ».

### B. Bâtiments superposés

![image](/images/fr/0300-12-27-quality-assurance/image00.png)

Pour corriger cette erreur, il faudra déplacer les nœuds du premier
bâtiment hors de la surface délimitée par le deuxième bâtiment. Si ce
sont deux immeubles avec un mur mitoyen, vous pouvez simplement
fusionner les nœuds.

### C. Nœuds ou chemins sans attribut

Si quelqu’un dessine des points ou des lignes et oublie d’ajouter des
attributs, ces objets n’ont aucune signification.

![image](/images/fr/0300-12-27-quality-assurance/image04.png)

Pour corriger cette erreur, sélectionnez l’objet en question et ajoutez
les attributs nécessaires ou, si l’objet a été dessiné par erreur,
supprimez-le tout simplement.

### D. Chemin se terminant à côté d’un autre chemin

Un chemin qui se termine à côté d’un autre chemin sans qu’ils aient un
point d’intersection en commun figurera parmi les avertissements.
Vérifiez si possible avec l’imagerie satellite si ces deux chemins sont
en réalité connectés. À noter qu’un chemin piétonnier rejoignant une
route doit y être connecté. Dans certains cas, les deux objets ne sont
pas connectés dans la réalité, et cet avertissement n’appelle alors
aucune action. Il sert à détecter les chemins qui
auraient dû avoir un point d’intersection mais qui sont restés non
connectés.

![image](/images/fr/0300-12-27-quality-assurance/image11.png)

### E. Chemins se croisant

Ce problème correspond à deux types de situation :

-   Des lignes qui se croisent sans intersection (par exemple des
    routes). Il convient soit de créer une intersection, soit de
    préciser que les objets ne s’intersectent pas parce qu’ils ne sont
    pas au même niveau, en indiquant sur quelles couches ils se
    trouvent, sachant que, par défaut, tous se trouvent au niveau du sol
    (attribut layer=0). Un pont aura comme attribut layer=1 ou un tunnel avec layer=-1 et le
    problème sera réglé.

![image](/images/fr/0300-12-27-quality-assurance/image01.png)

-   Des lignes et des polygones qui se croisent (par exemple une route
    et un bâtiment). Là encore, soit il faut créer des intersections,
    soit il faut ajouter des attributs avec la clé layer.

![image](/images/fr/0300-12-27-quality-assurance/image05.png)

OpenStreetMap procède aussi du travail des contributeurs qui éditent et
corrigent les erreurs. La validation des données est très importante
pour améliorer la carte. Si vous n’avez pas le temps ou l’opportunité
d’être sur le terrain avec un récepteur GPS ou d’avoir accès à de
l’imagerie satellite, contribuer au projet OSM à travers la correction
des données existantes constitue un apport fondamental.

Résumé
--------

Dans ce chapitre sont couverts différents aspects du contrôle de qualité
dans OSM. Sont passées en revue différentes manières d’améliorer la
qualité des contributions à la base de données. Sont ensuite présentés
l’outil de validation de JOSM qui permet d’améliorer la qualité des
données OpenStreetMap, les problèmes de validation les plus fréquents
qu’il détecte et les solutions pour y remédier. Dans le chapitre
suivant, nous allons aborder le Gestionnaire de Tâches de HOT, qui est
un bon outil de coordination pour les contributeurs OSM dans le monde.
