---
layout: doc
title: JOSM ajoutant des images tms, wms ou wmts
permalink: /fr/josm/josm-adding-imagery/
lang: fr
category: josm
---

JOSM - Ajout d'images aériennes
================

> Révisé le 9 septembre 2016  

Toutes les images aériennes ne figurent pas dans le menu d'imagerie du JOSM, mais il est facile de les ajouter si vous avez reçu les informations sur le lien.  

Dans cet exemple, nous travaillons à partir du [gestionnaire de tâches] (http://tasks.hotosm.org/) et les images nécessaires à la réalisation d'un des projets doivent être ajoutées manuellement au JOSM. Le principe de l'ajout du lien de l'image est le même quel que soit le montage sur lequel vous travaillez, du moment que le lien vous est fourni. Il arrive également que les liens prévus ne fonctionnent pas comme prévu et qu'il soit nécessaire d'ajouter l'imagerie manuellement, si vous pouvez obtenir les informations du lien.  

À partir de l'onglet d'information du gestionnaire de tâches, ou de votre autre source d'information, copiez toute la section Imagerie.  

![TM Imagery][]

Allez dans le menu Préférences de JOSM (**Edit / Préférences**, ou sur une machine Apple **JOSM / Préférences**)  

![Preferences WMS TMS 1][]

Cliquez sur l'icône ![WMS_TMS_button][]{ : height="24px"}, et dans ce cas l'icône ![+TMS_button][]{ : height="24px"}.  

> Les URL TMS contiennent généralement {x}{y} et {z}, les URL WMS sont généralement très longues et contiennent {width} et {height}, les URL WMTS contiennent généralement WMTSCapabilities.xml. Si vous n'êtes pas sûr du type d'URL d'imagerie que vous avez, vous pouvez essayer de les ajouter sous différents types pour voir lequel fonctionne.  

![Preferences WMS TMS 3][]

**Box 1.**Collez les informations que vous avez copiées de l'onglet Informations du gestionnaire de tâches dans la première case de la fenêtre. Le JOSM la vérifiera, et si elle est correcte, le processus de vérification répétera l'information dans la case 3 (voir ci-dessous). Si les informations n'apparaissent pas dans le cadre 3 au bout de quelques secondes, vérifiez que vous n'avez pas accidentellement oublié des lettres ou ajouté des "espaces blancs" au début ou à la fin.  
**Box 2.** Cette case est normalement laissée en blanc, sauf si vous avez reçu d'autres instructions.  
**Box 3.** contient maintenant une copie de la box 1, générée par le processus de vérification dans le JOSM.  
**Box 4.** Entrez un nom pour la couche - comme mon imagerie a été identifiée dans le gestionnaire de tâches comme "L'imagerie satellite pour ce projet est aimablement fournie par Digital Globe à travers leur service +Vivid". J'ai nommé ma couche "Digital Globe + Vivid".  

![Preferences WMS TMS 4][]

Cliquez sur le bouton ![OK_button][]{ : height="24px"}, et l'image que vous avez ajoutée apparaîtra au bas de la liste - vous devrez peut-être la faire défiler pour la trouver.  

![Preferences WMS TMS 5][]

Cliquez sur le bouton ![OK_button][]{ : height="24px"} pour fermer la fenêtre des préférences et revenir à JOSM. Lorsque vous avez besoin d'utiliser l'imagerie, cliquez sur le mot **Imagerie** dans le menu en haut de l'écran et sélectionnez-le dans la liste alphabétique. Vous pouvez également utiliser **Alt + I** pour afficher le menu d'imagerie (ces raccourcis peuvent varier en fonction de la langue).  

![Preferences WMS TMS 6][]

**Astuce** Si les images ne se chargent pas, vérifiez comment elles apparaissent dans la liste. Dans cet exemple, **tms** apparaît deux fois. Vous pouvez modifier le lien dans josm pour qu'il n'apparaisse qu'une seule fois, ce qui corrigera probablement le problème.

![TMS TMS][]

Ajouter un serveur WMS
===========

L'ajout d'un serveur WMS est très similaire à l'ajout d'un serveur TMS, avec une différence importante. Les serveurs WMS fournissent généralement plus d'une couche d'imagerie à choisir et vous devez soit sélectionner une couche lors de l'ajout du serveur WMS dans les préférences, soit spécifier que vous sélectionnerez une couche à utiliser chaque fois que vous sélectionnerez le serveur dans le menu Imagerie de l'interface principale de JOSM.

Pour ajouter un serveur WMS, ouvrez la boîte de dialogue des préférences de l'imagerie JOSM comme indiqué ci-dessus, mais cliquez cette fois sur le bouton "Ajouter WMS" ! [wms_add_button][]

La boîte de dialogue qui en résulte ressemblera à celle ci-dessous :
![wms_entry_dialog_numbered][]

**Box 1.**Entrez l'URL du serveur WMS dans ce champ. Il doit s'agir d'une URL typique qui commence par http ou https  
**Button 2.** Après avoir saisi l'URL, cliquez sur le bouton "Get Layers". La JOSM contactera le serveur WMS et obtiendra une liste des couches disponibles sur ce serveur  
**Box 3.** C'est ici que la liste des couches disponibles sera affichée. Il peut y avoir des dossiers qui doivent être développés pour voir les couches disponibles.  
**Menu déroulant 4.** Format de l'image - il sera généralement sélectionné automatiquement après avoir cliqué sur l'un des calques dans **Boîte 3** il peut offrir plus d'un type de format d'image, mais généralement jpeg ou png est le format.  
**Box 5.** est générée automatiquement après la sélection d'une couche dans la boîte 3. Elle sera longue et compliquée, mais elle est généralement très bien et est plus informative et ne doit pas être modifiée.  
**Box 6.** Saisissez un nom pour le serveur ou la couche. Un nom par défaut sera rempli en fonction de l'URL, mais vous pouvez saisir un nom plus significatif. Il s'agit du nom qui apparaîtra dans le menu Imagerie JOSM lorsque vous voudrez ajouter la couche à votre panneau de couches dans l'interface JOSM normale.  

> Exemple de serveur WMS avec de nombreuses couches intéressantes : http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Veillez à cliquer réellement sur une couche si vous souhaitez que l'élément du menu Imagerie charge toujours la même couche. Dans l'exemple ci-dessus, lorsque le calque est sélectionné dans le menu Imagerie, il chargera toujours le calque "World Database of Protected Areas".

Si vous souhaitez choisir la couche à charger chaque fois que vous sélectionnez le serveur dans le menu Imagerie et pouvoir charger facilement plusieurs couches à partir du serveur d'enregistrement, cochez la case "Store WMS endpoint only". Cela désactivera également la sélection d'un calque et le champ de vérification de l'URL.

![wms_end_point_only_highlighted][]  

Cliquez sur le bouton ![OK_button][]{ : height="24px"}, et l'image que vous avez ajoutée apparaîtra au bas de la liste - vous devrez peut-être la faire défiler pour la trouver.  

![Preferences WMS TMS 5][]

Cliquez sur le bouton ![OK_button][]{ : height="24px"} pour fermer la fenêtre des préférences et revenir à JOSM. Lorsque vous avez besoin d'utiliser l'imagerie, cliquez sur le mot **Imagerie** dans le menu en haut de l'écran et sélectionnez-le dans la liste alphabétique. Vous pouvez également utiliser **Alt + I** pour afficher le menu d'imagerie (ces raccourcis peuvent varier en fonction de la langue).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg
