---
layout: doc
title: iD Editor
permalink: /sq/beginner/id-editor/
lang: sq
category: beginner
---

iD Editor
=============

> Rishikuar 2019-06-10

Do filloni të hartëzoni me Tasking Manager për HOT apo MissingMaps etj? Shikoni [HOT-tips section](/sq/hot-tips/).  

- TOC
{:toc}

iD Editor është de fakto editori OpenStreetMap në versionin web. iD është i shpejtë dhe i lehtë për tu përdorur dhe lejon vënien e informacioneve në hartë nga burime të ndryshme të të dhënave si satelitët dhe imazhet ajrore, GPS, Field Papers ose Mapillary.  

iD Editor është një mënyrë e shkëlqyer për të edituar për ndyshime të vogla dhe të shpejta të cilat nuk kërkojnë veçoritë e shkëlqyera të JOSM (një editor më i avancuar për krijimin e hartave). Ky kapitull demostron bazat e editimit me iD.  

Fillimi në iD Editor
----------------------

-⇥iD editor kërkon një lidhje aktive në Internet.  
-⇥Hapni shfletuesin tuaj të Internetit dhe shkoni në faqen e OpenStreetMap në [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-⇥**Login** duke përdorur llogarinë tuaj në OpenStreetMap  
-⇥Panoramoje dhe zmadhoje hartën në zonën që ju doni të editoni. Ju mund ta panoramoni duke mbajtur shtypur butonin e majtë të mausit dhe ta tërhiqni hartën në zonën e dëshiruar.  
-⇥Klikoni në shigjetën e vogël ngjitur me **Edit**. Pastaj klikoni **Edit with iD (in-browser editor)**.  

![image1][]


Ndërfaqja me përdoruesin e iD Editor
-------------------------
![image2][]

1. **Paneli i Editimit të Cilësive:** Ky panel tregon etiketat për objektin e përzgjedhur në hartë.   
	Ju mund të shtoni apo redaktoni etiketat të quajturat 'tags' nga ky panel.  
2. **Mjetet:** Ky panel tregon mjetet kryesore të editimit:  
    Vizato pikë (node), *shkurtimisht butoni* **1** ![image3][]{:height="24px"}  
    Vizato vijë (way), *shkurtimisht butoni* **2** ![image4][]{: height="24px"}  
    Vizato formë (polygon), *shkurtimisht butoni* **3** ![image5][]{: height="24px"}  
    Kthehu pas, *shkurtimisht butonat* **Ctrl+z** ![image6][]{: height="24px"}  
    Ribëje, *shkrutimisht butonat* **Ctrl+y** ![image7][]{: height="24px"}  
    Ruaj ndryshimet, *shkurtimisht butonat* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Paneli i hartës:** Ky panel tregon funksione të ndryshme të konfigurimit:  
    Zmadhoni, *shkurtimisht butoni* **+** ![image9][]{: height="24px"}  
    Zvogëloni, *shkurtimisht butoni* **-** ![image10][]{: height="24px"}  
    Shkoni tek vendodhja juaj ![image11][]{: height="24px"}  
    Konfiguroni shtresën e sfondit, *shkurtimisht butoni* **b** ![image12][]{: height="24px"}  
    Të dhënat e hartës, *shkurtimisht butoni* **f** ![Map Data][]{: height="24px"}  
    Çështjet, *shkurtimisht butoni* **i** ![Issues][]{: height="24px"}  
    Hap menunë e ndihmës, *shkurtimisht butoni* **h** ![image13][]{: height="24px"}  
4. **Paneli i informacionit:** Ky panel shfaq të dhëna të ndryshme, si shiritin e shkallëzimit dhe cilët përdorues kanë kontribuar në atë zonë.  

## Konfigurimi i Shtresës së Sfondit

Klikoni ikonën për **Cilësimet e sfondit** ose përdorni *shkurtimisht butonin* **b**.![image14][]{: height="24px"}  
![image15][]  
Ju mund të **ndryshoni shtresën në sfond** bazuar në mundësuesin e preferuar të imazheve (i parazgjedhur është imazheria nga Bing Aerial).  

Ju mund të shtoni pllakt tuaja në hartë duke klikuar në **Custom**. Për shembull, nvse ju doni të **shtoni një Field Paper** [^fieldpaper], klikoni **Custom** pastaj klikoni në ikonën e lupës zmadhuese (search) për të hapur dritaren pasardhëse:  
![image17][]   
dhe vendosni **FieldPaper snapshot URL** që keni, e cila do të jetë diçka si kjo: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Për të **shfaqur GPS tracks nga kompjuteri juaj** (formati GPX), mereni dhe vendoseni skedarin GPX në iD editor.  
Për të aktivizuar **OpenStreetMap GPS traces** klikoni në kutinë. Në imazhin më poshtë, gjurmimet GPS publike janë të shfaqura në ngjyra të ndryshme, duke treguar drejtimin e udhëtimit.   
![osm gps traces][]  
Për të ndryshuar **paraqitjen e imazherisë** klikoni **Display Options**.  
![DisplayOptions][]  
Nëse aty ka [imagery offset](/en/josm/aerial-imagery), ju mund ta  **korigjoni offset të imazherisë** duke klikuar **Adjust imagery offset**.  
![image18][]  

- Klikoni butonin e navigimit për të lëvizur imazherinë. Klinoni butonin e reset-imit për tu kthyer në pozicionin fillestar. ![image20][]  

Editime Themelore me iD  
----------------------  

### Shtim i Pikave  

Për të shtuar një pikë të re, klikoni në buttonin **Point**. ![image3][]{: height="24px"}  

- Kursori i mausit tuaj do të ndryshojë në shenjën e plusit (+). Tashmë, klikoni në pozicionin që ju dini për të shënjuar një lokacion. Për shembull, nëse ju dini që është një spital pranë zonës suaj, klikoni në vendin ku ndodhet ndërtesa e spitalit.  
![image21][]  
- Vini re se një pikë e re është shtuar. Në të njëjtën kohë, paneli në të majtë do të ndryshojë duke shfaqur një formë ku ju mund të zgjidhni atributet për objektin e krijuar. Klikoni **Hospital Grounds** për ta etiketuar pikën si spital.  
![image22][]  
- Ju mund ta përdorni formën për të vendosur informacion të detajuar për pikën tuaj. Ju mund të plotësoni emrin, adresën apo dhe informacione të tjera shtesë për spitalin. Vëreni se secila veçori do të ketë opsione të ndryshme, në varësi të etiketës që ju zgjidhni nga paneli i veçorive (features).  
- Nëse ju bëni një gabim, si vendosja e një lokacioni jo në pozicionin e duhur, ju mund ta lëvizni pikën tuaj tek një vendndodhje e re duke mbajtur butonin e majtë të mausit klikuar dhe duke e tërhequr atë. Ose, nëse doni të fshnini një pikë, klikoni maus tek pika, dhe aktivizoni menunë e kontekstit duke klikuar me të djathtën e mausit dhe pastaj klikoni në butonin që duket si kosh plehrash. ![PointToolDelete][]{: height="24px"}  
Një "pikë" e krijuar në iD editor është aktualisht një "nyje" e vetme me një set "etiketash" në të.  

### Vizatimi i vijave  

Për të shtuar një vijë të re, klikoni në butonin **Line**. ![image4][]{: height="24px"}  

- Kursori i mausit tuaj do të ndryshojë në shenjën e plusit (+). Gjeni një rrugë e cila nuk është vendosur në hartë dhe gjurmojeni atë. Klikoni një herë në pikën ku segmenti i rrugës fillon, lëvizni mausin tuaj dhe klikoni për të shtuar pika përgjatë segmentit. Klikoni dy herë për të përfunduar procesin e vizatimit. Vini re panelin në të majtë.  
![image24][]  
- Ashtu se me pikën, përzgjidhni etiketat e përshtatshme për vijën tuaj.  
- Ju mund të tërhiqni pikat nga vija duke klikuar me të majtën e mausit në një pikë dhe duke e zvarritur atë.  
- Kur ju klikoni me të majtën e mausit në një pikë individuale (node) në vijë dhe klikoni me të djathtën e mausit apo shtypni tastën e hapësirës, ju do shikoni mjetet e mëposhtme:  
  - Vazhdoni vijën nga kjo pikë  ![PointToolContinue][]{: height="24px"}  
  - Ndajini vijat në këtë pikë ![PointToolDisconnect][]{: height="24px"}  
  - Ndajeni një vijë në dy vija në këtë pikë. ![PointToolSplit][]{: height="24px"}  
  - Fshijeni pikën nga vija. ![PointToolDelete][]{: height="24px"}  
- Kur klikoni me të djathtën e mausit në një vijë (por jo pikë), do të shihni këto mjete:  
  -   Krijoni një rreth nga vija (aktive vetëm kur vija është e mbyllur) ![LineToolCircularize][]{: height="24px"}  
  -   Ndajeni vijën nga objektet e tjera ![LineToolDisconnect][]{: height="24px"}  
  -   Zhvendosni vijën ![LineToolMove][]{: height="24px"}  
  -   Bëjini katrore të gjithë këndet ![LineToolSquare][]{: height="24px"}  
  -   Reflektojen vijën përgjatë aksit të shkurtër ![LineToolReflectShort][]{: height="24px"}  
  -   Reflektojeni vijën përgjatë aksit të gjatë ![LineToolReflectLong][]{: height="24px"}  
  -   Ndryshoni drejtimin e vijës (është mirë tek lumenjtë & dhe rrugët me një drejtim) ![LineToolReverse][]{: height="24px"}  
  -   Rrotullojeni vijën rreth qendrës së saj ![LineToolRotate][]{: height="24px"}  
  -   Drejtojeni vijën ![LineToolStraighten][]{: height="24px"}  
  -  Fshijeni vijën. ![LineToolDelete][]{: height="24px"}  

Një "vijë" e krijuar në iD editor është aktualisht një "rrugë"" me "etiketa" në të.

> Një shënim që duhet konsideruar rreth **Fshirjes**: Në përgjithësi duhet ti shmangni fshirjen e objekteve të krijuara nga njerëz të tjerë nëse ka nevojë vetëm për përmirësim. Ju mund të fshini gabimet tuaja, por duhet të përpiqeni të *rregulloni* objektet e hartëzuara nga njerëz të tjerë nëse kanë nevojë për ndryshime. Kjo mënyrë ruan historinë e artikujve në databazën e OSM dhe respekton shokët e tjerë hartëzues. Nëse  ju mendoni vërtet se një objekt duhet fshirë, konsideroni të pyesni personin i cili e krijoi atë ose një nga listat e email-eve të OSM më parë.

### Vizatim i formave (Poligonet)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

Saving Your Changes
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD versus JOSM
---------------  

**iD is good for...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.



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
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png