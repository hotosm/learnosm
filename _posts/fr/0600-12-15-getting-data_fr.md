---
layout: doc
title: Obtenir des données OSM
permalink: /fr/osm-data/getting-data/
lang: fr
category: osm-data
---

Obtenir des données OSM
=================  

> Révisé le 5 avril 2016

Lorsque vous souhaitez obtenir les données OpenStreetMap les plus récentes, le moyen le plus simple est de télécharger un extrait depuis un site Web. Il existe plusieurs services Web qui fournissent des extraits de données pour une zone de votre choix.  

Téléchargement des extraits de données
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) est une société spécialisée dans le travail avec OpenStreetMap. Elle fournit une variété d'extraits gratuits au format shapefile et OSM brut sur son [site de téléchargement] (http://download.geofabrik.de). L'avantage de télécharger les données de GeoFabrik est qu'elles sont mises à jour quotidiennement, et que c'est facile et fiable. Un inconvénient est que les données sont extraites par pays, et que tous les pays ne sont pas disponibles.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) fournit des fichiers shape et le format OSM brut pour les villes du monde entier, extraits chaque semaine. Ceci est utile si vous recherchez des extraits de données pour une seule ville.

>Rappelez-vous que les éléments dans OpenStreetMap ont un nombre illimité de balises "libres",
>Mais les fichiers shape ont des attributs stockés dans un nombre limité de colonnes. Cela signifie que
>que lorsque les données OSM sont converties en fichiers shape, seules les balises spécifiées seront
>inclus dans le tableau du fichier de forme. Les sites Web énumérés ci-dessus fournissent des fichiers shape
>avec un ensemble par défaut de balises communes, mais si vous voulez extraire des balises spécifiques
>Vous devrez utiliser l'un des services plus spécialisés de la section suivante
>ou apprenez à exporter les données vous-même.

Extraits personnalisés
-------------------

### Exportations HOT  

La [Humanitarian OpenStreetMap Team](http://hotosm.org) a créé un service qui permet aux utilisateurs de sélectionner la zone qu'ils souhaitent extraire et d'utiliser les [JOSM Presets]( /fr/josm/josm-presets/)
pour sélectionner des balises personnalisées à inclure dans l'extrait. Ce service est disponible dans tous les pays où HOT travaille, à l'adresse [export.hotosm.org] (http://export.hotosm.org).

![hot exports][]

### BBBike  

Vous pouvez sélectionner votre propre zone dans n'importe quelle partie du monde en utilisant le service à l'adresse [http://extract.bbbike.org/](http://extract.bbbike.org/). Les inconvénients sont que vous ne pouvez pas sélectionner des balises personnalisables et que la quantité de données que vous pouvez télécharger est limitée.  

### Overpass

Overpass est une API (Application Programming Interface) permettant d'extraire des données d'une copie en lecture seule de la base de données principale d'OpenStreetMap, qui peut fournir une quantité de données presque arbitraire. En utilisant un langage d'interrogation, vous pouvez personnaliser le sous-ensemble de données que vous obtenez. Vous pouvez utiliser l'API soit directement en générant une requête http, soit par le biais de l'interface turbo de l'overpass.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) est un générateur de requêtes interactif où vous devez d'abord zoomer sur la région appropriée de la carte. Saisissez votre requête dans le champ gauche de la page et déclenchez toutes les actions à l'aide des boutons situés en haut de l'interface. Si vous êtes novice en matière de langage de requête, l'utilisation de l'assistant devrait vous permettre de démarrer. Le wiki OSM contient une [description complète] (http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) de la syntaxe du langage de requête ainsi qu'une [collection d'exemples] (http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

La carte mettra en évidence toutes les données sélectionnées par votre requête, que vous pourrez ensuite modifier. Appuyez sur "Run" pour rafraîchir l'affichage des résultats. Lorsque vous êtes satisfait de ce que vous voyez, "Exporter" vous offre un certain nombre de choix, parmi lesquels les données OSM brutes. Si la quantité de données est limitée, vous pouvez tout aussi bien y accéder directement après avoir basculé entre la vue cartographique et la vue des données à l'aide des boutons les plus à droite en haut. L'option d'exportation *Query -> compact OverpassQL* génère un hyperlien à utiliser pour l'API Overpass.

![overpass turbo][]

Si vous souhaitez élaborer une requête sophistiquée afin d'obtenir un sous-ensemble de données provenant d'une grande zone, il est judicieux de tester et d'améliorer cette requête dans Overpass Turbo sur une petite zone. Vous pouvez ensuite effectuer un zoom arrière sur l'ensemble de la région qui vous intéresse et utiliser l'url de la requête résultante directement pour l'API. La section suivante explique comment procéder.

#### Overpass API

[L'API Overpass](http://wiki.openstreetmap.org/wiki/Overpass_API) est un service dédié, optimisé pour l'interrogation mais pas pour l'écriture des données OpenStreetMap. Grâce à cette optimisation, il fonctionne très rapidement par rapport à l'API principale de la base de données et n'a pratiquement aucune limite sur la quantité de données transférées. Plusieurs instances de ce service sont disponibles sur le net, celle utilisée dans l'exemple suivant fournit également des informations sur [sa page d'accueil] (http://overpass-api.de/)

Si vous disposez d'une URL de requête fonctionnelle pour soumettre une requête http à l'API Overpass, un outil tel que [wget](https://www.gnu.org/software/wget/) - disponible pour différents systèmes d'exploitation, voir [here](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - vous permet de télécharger les données OSM brutes directement depuis le serveur et de les stocker localement. L'extrait suivant est un script pour l'interpréteur de commandes bash commun aux systèmes Unix qui obtient toutes les données à l'intérieur d'une boîte de délimitation spécifiée :

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>Que se passe-t-il ici (pour les curieux qui ne veulent pas lire la documentation complète du langage de requête) ?  
>node(...) sélectionne tous les noeuds à l'intérieur d'une boîte de délimitation ;  
>< récurseur complet, c'est-à-dire qu'il sélectionne toutes les voies contenant ces nœuds et toutes les relations contenant ces nœuds et ces voies ;  
>rel(br) sélectionne toutes les relations parentales des relations obtenues jusqu'à présent (sinon les relations maîtresses ne seraient pas obtenues)
>



Résumé
-------  

Les services mentionnés dans ce chapitre sont tout ce dont l'utilisateur moyen a besoin pour obtenir les données OSM qu'il souhaite et être en mesure de les utiliser dans un logiciel SIG. Cependant, vous souhaiterez peut-être apprendre des méthodes plus puissantes pour travailler vous-même avec les données. Les autres chapitres de cette section sont assez techniques, mais présentent des méthodes plus avancées de manipulation et d'accès aux données OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png