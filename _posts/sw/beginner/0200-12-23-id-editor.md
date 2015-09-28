---
layout: doc
title: iD Editor
permalink: /sw/beginner/id-editor/
lang: sw
category: beginner
---

The iD Editor
=============

Kifungu hiki cha LearnOSM kipo katika mchakato wa kutafsiriwa. Kama ungependa kusaidia katika kutafsiri tovuti hii, 
tafadhali tazama [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md). 

> Huu muongozo unaweza kupakuliwa kama  [beginner_id-editor_sw.odt](/files/beginner_id-editor_sw.odt) au [beginner_id-editor_sw.pdf](/files/beginner_id-editor_sw.pdf)  
> Imepitiwa 2015-08-22  


iD editor ni mtandao msingi wa kuhariri OpenStreetMap. Hii iD ni haraka na rahisi kuitumia,na inakuruhusu kupata ramani kwa kutumia vyanzo mbalimbali vya data kama vile picha za anga, GPS, Field Papers au Mapillary.

Edita ya iD ni njia kuu ya kuhariri wakati unataka kufanya mabadiliko madogo na rahisi, na kukukwepesha na utata wote ambao utaupata kwakutumia JOSM. Hii sura inelezea jinsi ya kutumia edita ya iD.

Kufungua iD Editor
----------------------
-	Kutumia iD editor itabidi uwe umeonganishwa kwenye mtandao.
-	Fungua browser ya mtandao na nenda
[http://www.openstreetmap.org](http://www.openstreetmap.org).
-	**Login** kwa kutumia akaunti ya OpenStreetMap.
-	 Sogeza na kuza ramani yako mpaka kwenye eneo unalolitaka kufanya mabadiliko. Unaweza kusogeza kwa kushikilia upande wa kushoto na kusogeza ramani kwenye eneo unalolitaka.
- Then click **Edit with iD (in-browser editor)**.Bonyeza kwenye kijimshale kidogo karibu na kitufe cha **Edit**. Halafu  bonyeza Edit na ID (in-browser editor).


![image1][]


iD Editor User Interface
-------------------------
![image2][]

1. **Edit Feature Panel:** Hii paneli inaonyesha tags kutoka katika kitu ulichokichagua kwenye ramani.
	Unaweza kuchagua au kuhariri tags kutoka kwenye hii paneli. 
2. **Tools:** Hii paneli inaonyesha vifaa vya kuhariri: 
	- Chora pointi (node), *njia ya mkato* **1**  
 	![image3][]  


	- Chora mstari (way), *njia ya mkato* **2**  
 	![image4][]  


 	- Chora umbo (polygon), *njia ya mkato* **3**  
 	![image5][]  


 	- Kurudi nyuma, *njia ya mkato* **Ctrl+z**   
 	![image6][]

 	- Kwenda mbele, *njia ya mkato* **Ctrl+y**   
 	![image7][]  


 	- Kuhifadhi mabadiliko, *njia ya mkato* **Ctrl+s**   
 	![image8][]  



3. **Map panel:** Hii paneli inaonyesha configuration functions mbalimbali:
  	- Kuangalia iwe kubwa, *njia ya mkato* **+**   
 	![image9][]  


 	- Kuangalia iwe ndogo, *njia ya mkato* **-**   
 	![image10][]  


 	- Nenda eneo lako
 	![image11][]  


 	- Kurekebisha background layer, *njia ya mkato* **b**   
 	![image12][]

 	- Map Data, *njia ya mkato **f**   
 	![Map Data][]  


 	-  Fungua menu ya msaada, *shortcut key* **h**   
 	![image13][]  



4. **Information panel:** Hii paneli inaonyesha taarifa mbalimbali, kama vile scale bar na ambapo watumiaji wamechangia katika hilo eneo. 

Kurekebisha  Background Layer
--------------------------------
Kabla hujaanza kuhariri, unaweza kubadilisha background layer.

-	Bonyeza kitufe cha **Background settings**  au tumia  *njia ya mkato* **b**.
![image14][]  


-	Utaona paneli kama hii:
![image15][]  

 
-	Unaweza kubadili **brightness level** kwa kubonyeza moja kati haya masanduku:
![image16][]  

-	Kuna aina nne za brightness levels - 100%, 75%, 50%, na 25%. Bonyeza kila moja kuona utofauti zake .
-	Pia unaweza **change the background layer** kutegemea na tile ulizonazo na unayopenda.
	(iliyopo ni picha ya anga ya bing). Jaribu na machaguo mengine uone yaliyopo katika hii listi.
-	Unaweza kuongeza tile yako mwenyewe kwa kubonyeza **Custom**.
-	Kwa mfano, kama unataka **add a Field Paper**, bonyeza **Custom**  halafu bonyeza katika magnifying glass (search)           icon kufungua hii window:-  
![image17][]

 na ingiza **FieldPaper snapshot URL**, ambazo zitakuwa kitu kama hichi:  <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>  



-	Unaweza **kuweka GPS tracks kutoka kwenye computer yako** (GPX format). Ni rahisi kwani unavuta na kuweka faili la GPX katika iD editor.
-  Unaweza kuruhusu **OpenStreetMap GPS traces** zikaonekana  GPS traces kwa watu waote zile zilizopo za hilo eneo. Katika picha hapo chini, public GPS traces zimeonyeshwa kwa rangi mbalimbali,zikieleza uelekeo wa safari. 

![osm gps traces][]

-	Kama kuna [imagery offset](/en/josm/aerial-imagery), unaweza  **correct the imagery offset** kwa kubonyeza Fix Alignment.
![image18][]  


- Bonyeza navigation buttons kusogeza picha ya anga. Bonyeza sehemu ya reset kurudi kwenye  default ya mwanzo.  
![image20][]  


Kuhariri kwa iD
----------------------
Sasa tuanze kuhariri kwa kutumia iD.

### Kuongeza pointi
-	Kuongeza pointi mpya, bonyeza katika kitufe cha **Point** .

![image3][]

-	Kipanya chako kitabadilika na kuwa alama ya  (+) . Sasa, bonyeza eneo ambalo unalijua kuweka sehemu. Kwa mfano, kama unajua kama kuna hospitali katika eneo lako, bonyeza katika hilo eneo ambalo jengo a hospitali lipo.

![image21][]

-	Hakikisha kwamba pointi mpya imeongezwa. Muda huo huo, paneli ya kushoto itabadilika na kuonyesha fomu ambayo unaweza kuchagua sifa ya kitu. Bonyeza **Hospital** ili kuipa sifa pointi kama hospitali.

![image22][]

-	Unaweza kutumia fomu kujaza taarifa za kina kuhusu pointi. Unaweza kujaza jina la hospitali, anwani, na /au taarifa nyingine. Angalizo kila sifa itakuwa na machagulio tofauti, kutegemea na tag gani umechagua kutoka kwenye paneli ya sifa. 
-	Kama umefanya kosa, kama vile kukosea eneo, unaweza kusogeza pointi kwenye eneo jipya kwa kushikilia upande wa kushoto wa kipanya katika pointi yako na kuisogeza. Au, kama unataka kufuta pointi, bonyeza upande wa kushoto wa kipanya katika pointi na halafu bonyeza sehemu inayoonekana kama chombo cha takataka. 

![image23][]

"Pointi" iliyotengenezwa na  iD editor  ambayo inayojulikana kama "node" inayokuwa na "tags" ndani yake.

### Kuchora mistari
-	Kuongeza mstari mpya, bonyeza katika sehemu ya  **Line** .

![image4][]

-	Kipanya chako kitabadilika na kuwa na alama ya jumlisha  (+) sign. Tafuta barabara ambayo haijachorwa kwenye ramani na uichorea. Bonyeza kwenye pointi ambayo barabara inaanzia, sogeza kipanya chako, na bonyeza kwenye kuongeza pointi. Bonyeza mara mbili kumalizia zoezi la kuchora. Angalia paneli upande wa kushoto.

![image24][]

-	Kama ilivyo kwa pointi, chagua tag sahihi kwenye mstari wako.
-	Unaweza kusogeza pointi kutoka kwenye mstari kwa kubonyeza upande wa kushoto wa kipanya na kusogeza.
-	Pia unaweza kusogeza mstari wote kwa kuuchagua, na kuchagua  **Move tool**. Halafu sogeza mstari kwenye eneo lingine jipya.

![image30][]

-	Pale unapobonyeza upande wa kushoto wa kipanya kwenye pointi yako (node) katika mstari, utaona hivi vifaa: 

	- Kufuta pointi kutoka kwenye mstari
	![image23][]
	- Kutenganisha pointi kutoka kwenye mstari
	![image26][]
	- Kutenganisha mstari kuwa mistari miwili kutoka kwenye pointi uliyoichagua
	![image27][]

-	Ukibonyeza  upande wa kushoto wa kipanya (lakini siyo pointi), utaona hizi tools:

	- Delete line
	![image23][]
	- Create a circle from a line (inafanya kazi pale mstari unapokuwa umefungwa)
	![image29][]
	- Move line
	![image30][]
	- Form a square shape from a line (inafanya kazi pale mstari unapokuwa umefungwa)
	![image31][]
	- Reverse line direction (nzuri kwa mito na barabara zinazoenda upande mmoja)
	![image32][]

 "line" iliyotengenezwa katika  iD editor inakuwa ni "way" ikiwa na "tags" ndani yake .

>Kitu cha kuzingatia  **Deleting**: Kiujumla inabidi ujiepushe na kufuta taarifa za watu wengine kama zinahitaji tu marekebisho. Unaweza kufuta makosa yako mwenyewe, lakini unaweza kujaribu *adjust* kwa zile taarifa walizoweka watu wengine kama zinahitaji mabadiliko. Hii inahifadhi historia ya kile kitu katika database za OSM na ni heshima kwa mtengeneza ramani mwenzio. Kama unahisi kitu inabidi kifutwe, zingatia kumuuliza aliyechukua hizo taarifa au moja kati ya OSM barua pepe  kuhusu hilo jambo kwanza.

### Kuchora Maumbo (Polygons)
-	Kuongeza kitu kipya chenye umbo, bonyeza katika sehemu ya **Area** .

![image34][]

-	Kipanya chako kitabadilika na kuwa na alama ya (+). Jaribu kuchora jengo kutumia picha ya anga kama muongozo.
-	Utagundua kama rangi ya umbo lako limebadilika kutegemea na sifa ulizoziweka kwenye hicho kitu.

![image35][]

-      Vile vifaa vilivyopo pale unapochagua umbo ni sawa na vile vyote pale unapochagua mstari.

 "polygon" katika iD editor ni "closed way" na  tags ndani yake.

 Kuhifadhi Mabadiliko Yako
--------------------
-	Pale (na kama vile) unataka kuhifadhi mabadiliko yako katika OpenStreetMap, bonyeza kitufe cha  **Save**. Paneli upande wa kushoto itaonyesha paneli ya kuupload.

![image36][]

-	Ingiza maelezo kuhusu mabadiliko uliyofanya na bonyeza **Save**.


Taarifa zilizoongezwa  na Custom Tags
---------------------------------------
-	Pale unapohariri kitu, utaona icons zimejipanga chini ya paneli ya sifa. Unaweza kuongeza taarifa kwa kubonyeza hizi icons:

	- Add elevation
 	![image37][]
 	- Add notes
 	![image38][]
 	- Add contacts / phone number
 	![image39][]
 	- Add source tag
 	![image40][]
 	- Add website
 	![image41][]
 	- Add accessibility information
 	![image42][]
 	- Add Wikipedia link
 	![image43][]

-	 Au, unaweza kuongeza custom tags by clicking **All tags**.

![image44][]

-	Hii itaonyesha tags zote zilizowekwa kwenye hicho kitu.

![image45][]

-	Bonyeza alama ya ongeza (+) kuongeza keys na values au bonyeza trash icon kufuta tags.

iD na  JOSM
---------------
iD ni nzuri kwa... 

-	Pale unapohariri vitu rahisi  
-	Pale unapokuwa na mtandao mzuri kuweka picha na kuhifadhi ulivyohariri.  
-	Pale unapotaka uhakika kwa kufuata utaratibu unaotakiwa na tagging scheme rahisi.
-	Pale unapokuwa umezuiwa kuweka programu kwenye compture yako unayotumia.

JOSM ni nzuri... 

-       Pale unapohariri majengo mengi(Angalia buildings_tool plugin)
-	Pale unapohariri maumbo mengi au mistari ambayo tayari ipo.
-       Pale panapokuwa hamna mtandao mzuri au haupo kwenye mtandao kabisa.
-	Pale unapokuwa unatumia  tagging sheme maalum  (au custom presets)



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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png
