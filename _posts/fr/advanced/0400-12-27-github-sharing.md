---
layout: doc
title: Partage de projets en ligne avec Github
permalink: /fr/advanced/github-sharing/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Partage de projets en ligne avec Github
=========================================

Introduction
------------

GitHub est un service web d'hébergement et de gestion collaborative de
développement de logiciels basé sur le programme Git. De manière
résumée, à travers GitHub vous pouvez accéder aux fichiers d’un projet
que quelqu'un d’autre a créé ou bien créer votre projet et permettre à
d’autres utilisateurs d’y accéder. L’historique de l’évolution des
projets dans github est également conservé, ce qui, au besoin, permet de
pouvoir revenir à des versions antérieures. À cela s’ajoute bien
d’autres fonctionnalités. L’objectif de ce chapitre est de donner des
bases pour l’utilisation de GitHub.

1. Les dépôts (repositories) GitHub
-----------------------------------

-   Avec votre navigateur, accédez à la page d’accueil de GitHub :
    [http://www.github.com](http://www.github.com). Rappelons qu’il y a
    une différence entre Github et Git. Git est un programme de suivi de
    version qui peut transformer en repository tout dossier dans votre
    machine. Git prend en compte également le suivi de tous les
    changements qui s’opèrent dans un dépôt donné. GitHub est un service
    web qui permet aux usagers de partager leurs dépôts Git et ainsi de
    facilement collaborer sur des projets. Retenir qu’essentiellement
    GitHub permet à ses utilisateurs de créer des dépôts qui peuvent
    contenir de multiples fichiers, dossiers et sous-dossiers.
-   Vous verrez la liste de tous les dépôts de HOT à l’adresse
    [https://github.com/hotosm](https://github.com/hotosm). Vous
    remarquerez dans la barre latérale gauche, le nombre total de dépôts
    (18 à l’instant d’écriture de ce chapitre) et le total des
    participants dans le groupe. Dans la section principale de la page
    se trouve la liste des dépôts et une description pour chacun d’eux.
    Vous pouvez cliquer sur un de ces dépôts et en consulter le contenu.
-   Un dépôt est l’équivalent d’un dossier de projet. Quand on regarde
    un dépôt sur GitHub, on voit la version la plus récente des
    fichiers.
-   Les dépôts ou repositories peuvent être publics ou privés. Pour
    rendre un dépôt privé sous GitHub il faut un compte payant. Dans un
    cadre open-source, nous travaillerons uniquement avec des dépôts
    publics.
-   Quand un dépôt est public, on peut facilement télécharger son
    contenu et l’utiliser. Si vous avez les permissions, vous pouvez
    également modifier les fichiers et sauvegarder vos changements dans
    GitHub.

![image](/images/fr/0400-12-27-github-sharing/image01.png)

2. Accéder à un dépôt GitHub
----------------------------

Il est utile de comprendre comment accéder aux fichiers d’un dépôt pour
une utilisation personnelle.

-   Repérez le dépôt nommé tilemill-projects-windows. Ce dépôt contient
    plusieurs projets TileMill pouvant s’exécuter sous Windows. Un de
    ces projets utilise une base de données PostGIS comme source de
    données et le deuxième utilise une base SQLite. Si vous n’avez pas
    repéré le dépôt, vous y accèderez à cette adresse :
    [https://github.com/hotosm/tilemill-projects-windows](https://github.com/hotosm/tilemill-projects-windows).

![image](/images/fr/0400-12-27-github-sharing/image05.png)

-   Vous pouvez visualiser le contenu des dossiers et tous les fichiers
    listés dans ce dépôt. Ceci vous donnera une idée du contenu du
    projet. La plupart des projets contiennent un fichier nommé
    README.md. Le readme est un fichier texte qui contient des
    informations basiques à propos du dépôt : généralement on y retrouve
    toutes les instructions pour l’installation du projet. Le contenu du
    fichier readme sera affiché juste après la liste des fichiers
    contenus dans le dépôt. Vous pouvez donc directement le lire. Ouvrez
    le sous-dossier osm-sqlite et allez jusqu’en bas de page pour voir
    le contenu du readme.

![image](/images/fr/0400-12-27-github-sharing/image06.png)

-   Pour télécharger l’ensemble des ressources du projet, cliquez
    simplement sur le bouton “ZIP” et tous les fichiers du projet seront
    téléchargés sur votre ordinateur dans un dossier zippé.

![image](/images/fr/0400-12-27-github-sharing/image00.png)

![image](/images/fr/0400-12-27-github-sharing/image09.png)

Si vous voulez uniquement accéder aux fichiers du projet à travers
GitHub, ce qui précède est tout ce dont vous avez besoin. Si vous
désirez en savoir plus sur Git et GitHub, continuez la lecture de ce
chapitre.

3. Qu’est-ce donc Git ?
-----------------------

Git et GitHub sont deux applications distinctes. Github est un site web
pour héberger des dépôts et qui facilite ainsi la collaboration sur des
projets entre plusieurs intervenants. Le site GitHub fonctionne avec Git
qui est un programme qui permet à des utilisateurs de sauvegarder
différentes versions des fichiers durant le cycle de vie d’un projet.

Regardons de plus près comment le programme Git fonctionne. Au début, il
peut être un peu difficile d’en comprendre les principes de base. Comme
précisé précédement, Git garde l’historique des fichiers d’un dépôt.
Plutôt que d’enregister un fichier à chaque changement, Git sauvegarde
le fichier une fois. Par la suite, à chaque fois que vous enregistrez
une nouvelle version, Git sauvegarde les changements qui s’appliquent à
votre fichier. Ceci rend la sauvegarde de fichiers plus efficace.

En permettant de travailler en mode déconnecté ou sur des copies de vos
fichiers en ligne et sauvegardés dans GitHub, Git réduit le risque de
perte et d’endommagement des fichiers. Quand vous le jugez opportun,
vous pouvez faire un commit (envoi de vos changements) pour ainsi
synchroniser votre travail avec le dépôt GitHub. Quand vous placez un
projet dans GitHub, plusieurs personnes peuvent copier et modifier le
même fichier.

Les principales étapes pour travailler avec un dépôt GitHub sont
expliquées ci-dessous :

**1. Clone :** dupliquer le dépôt de GitHub vers votre machine

**2. Modify :** modifier les fichiers copiés en local

**3. Stage :** déterminer les changements que vous voulez synchroniser

**4. Commit :** envoyer vos modifications

**5. Sync :** synchroniser vos changements avec le dépôt

Git est bien sûr plus complet et plus compliqué, surtout quand on aborde
les notions de merging, comparing et de branching. Nous n’allons pas
aborder tous ces concepts d’un seul coup. Commençons par voir comment
dupliquer (cloner) un dépôt pour l’avoir en local.

4. Installation de Git
----------------------

-   Vous pouvez facilement installer une interface pour travailler avec
    Git. Il faut vous rendre à l’adresse
    [https://help.github.com/articles/set-up-git\#platform-windows](https://help.github.com/articles/set-up-git#platform-windows)
    et télécharger puis installer le programme. Il y a bien sûr
    différentes versions pour différents systèmes d’exploitation.

![image](/images/fr/0400-12-27-github-sharing/image13.png)

-   Cliquez sur “Download GitHub for Windows” pour télécharger
    l’installateur.
-   Suivre les instructions pour réussir l’installation.

5. Créer un compte GitHub
-------------------------

-   Pour créer un compte GitHub, rendez-vous à l’adresse
    [https://github.com/plans](https://github.com/plans). Si vous
    prévoyez de travailler uniquement avec des dépôts publics, vous
    pouvez simplement choisir de créer un compte gratuit.

![image](/images/fr/0400-12-27-github-sharing/image11.png)

-   Cliquez sur “Create a free account” et suivez les instructions pour
    créer votre compte.

6. Créer un nouveau dépôt ou repository
---------------------------------------

-   Nous allons maintenant créer un nouveau dépôt. Cliquez sur “Create a
    New Repo” dans la section à droite en haut du site.

![image](/images/fr/0400-12-27-github-sharing/image10.png)

-   Donnez un nom et une description à votre projet. Par défaut vous
    aurez un dépôt public et le projet sera vide à sa création. Nous
    pouvons y placer un fichier readme, en cochant la case “Initialize
    this project with a README”.

![image](/images/fr/0400-12-27-github-sharing/image07.png)

-   Maintenant que le dépôt est créé, vous pouvez le cloner en local,
    sur votre ordinateur. Lancez le programme GitHub que vous venez
    d’installer. Vous allez ajouter les informations GITHUB pour que le
    programme puisse accéder à votre compte. Vous pourrez par la suite
    changer ces informations en vous rendant sur la page des
    préférences.
-   Retrouvez la liste de vos dépôts GitHub en cliquant sur votre nom
    d'utilisateur. Quand vous avez repéré le nouveau projet, cliquez sur
    “Clone to Computer”.

![image](/images/fr/0400-12-27-github-sharing/image12.png)

-   Une boîte de dialogue va s’ouvrir et vous allez parcourir votre
    disque local pour indiquer dans quel dossier le nouveau projet sera
    copié.
-   Une fois le dépôt cloné, vous pouvez travailler dans le dossier du
    projet de votre ordinateur comme sous n’importe quel autre dossier.
    La seule différence est que le dossier de votre projet contient des
    fichiers cachés qui retracent les changements que vous avez
    effectués et qui permettent de synchroniser le dépôt local avec le
    dépôt en ligne.
-   Dans notre exemple nous avons copié le sous-dossier geography-class
    sur lequel nous travaillions avec TileMill dans le chapitre
    précédent.
-   Retournez au programme Git et cliquez sur la flèche à droite du nom
    de votre projet.

![image](/images/fr/0400-12-27-github-sharing/image08.png)

-   Vous allez voir la liste de tous les fichiers que avez modifiés ou
    ajoutés. Dans notre exemple, nous avons ajouté tous les nouveaux
    fichiers dans le sous-dossier geography-class. Pour sauvegarder nos
    changements, nous allons en saisir un résumé descriptif et faire un
    commit.

![image](/images/fr/0400-12-27-github-sharing/image14.png)

-   Cliquez sur “Commit” pour faire un commit au niveau local.
-   Enfin nous avons besoin de synchroniser nos changements avec le
    dépôt distant dans GitHub. Cliquez sur “Sync” pour lancer la
    synchronisation.

![image](/images/fr/0400-12-27-github-sharing/image03.png)

-   Retournez à votre navigateur et allez visiter la page de votre dépôt
    sur GitHub. Vous verrez que les fichiers de notre commit ont été
    transférés avec succès.

![image](/images/fr/0400-12-27-github-sharing/image02.png)

Résumé
------

Dans ce chapitre nous avons abordé une introduction à Git et GitHub qui
vous permettra de commencer à gérer vos projets en ligne et à accéder
aux projets d’autres collaborateurs. Pour plus d’information, nous vous
recommandons fortement de lire les pages d’aide sur GitHub :
[https://help.github.com/](https://help.github.com/).


