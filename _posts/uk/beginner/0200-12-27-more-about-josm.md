---
layout: doc
title: Редагування в JOSM
permalink: /uk/beginner/more-about-josm/
lang: uk
category: beginner
---

Редагування в JOSM
==================
В попередньому розділі ми встановили JOSM та розпочали креслити власні перші точки, лінії та фігури. Ми застосували шаблони для цих об’єктів для того щоб додати інформацію про них. І наприкінці ми змогли накреслити власну мапу в JOSM.

Це було гарною практикою і зараз ми готові почати редагувати дані в OpenStreetMap.

В цьому розділі ми докладно ознайомимось з інтерфейсом  JOSM, та з тим як використовувати його для ствоерння мапи OpenStreetMap.

Цикл редагування
----------------
Редагування OpenStreetMap за допомогою JOSM схоже на редагування в iD, з яким ми познайомились раніше. Але так як JOSM є застосунком для стільниці, він працює трохи інакше. Процес редагування та додавання об’єктів в OpenStreetMap за допомогою JOSM завжди буде наступним:

1. **Завантаження** поточних даних з OSM
2. **Редагування** даних з використанням супникових знімків, GPS, Обхідних листів (Field Papers) та нотаток в якості підказок
3. **Збереження** змін в OpenStreetMap

Завантаження даних OSM
----------------------
Першим кроком в редагуванні є завантаження даних для ділянки, яку ви бажаєте покращити. Пам’ятайте, що це потрібно робити кожного разу, коли ви бажаєте змінити мапу, тому що дані часто оновлюються іншим учасниками.

-	В меню “Файл” (“File”) зверху ліворуч в JOSM оберіть пункт “Завантажити з OSM” (“Download from OSM”). Буде відкрите вікно для завантаження. Ви також можете відкрити це вікно просто клацнувши на значок завантаження на панелі інструментів:

![JOSM Download Button][]

-  Коли буде відкрите вікно завантаження ви повинні побачити мапу з рожевим прямокутником на ній. Якщо ви не бачите мапу, клацніть на вкладку “Мапа” (“Slippy map”).

![JOSM Download Dialog][]

-  Рожева рамка показує ділянку на мапі, дані з якої будуть завантажені для редагування. Скористайтейсь мишею для пересування та змінення масштабу мапи до того місця, яке вам добре відоме, наприклад, вашого міста чи району. Керування таке ж саме як і на основній мапі JOSM. За допомогою правої кнопки миші можна перестягувати мапу, а коліщатком змінювати масштаб.

>	Якщо ви працюєте на ноутбуці, іноді може бути важко збільшувати та зменшувати масштабування. Робота в JOSM відбувається значно легше, якщо ви використовуєте мишу, але сучасні ноутбуки дозволяють виконувати ці ж дії за допомоги тачпаду.

-	Обведіть прямокутну ділянку, навколо місця, яке ви бажаєте завантажити. Щоб накреслити прямокутник заново, клацніть на мапі, натиснть та утримуйте ліву кнопку миші та потягніть її для створення нового прямокутника. Відпустіть кнопку миші для закінчення виділення ділнки.
-  Якщо розмір та місце виділеної ділянки вас задовольняє, натисніть на кнопку “Завантажити” (“Download”) внизу вікна. JOSM завантажить дані з виділеної ділянки з OpenStreetMap та відкриє їх в основному вікні з мапою для редагування.

### Додавання знімків
Якщо ви прочитали попередні розділи, коли ми додавали наші перші точки за допомогою редактора iD, ви пам’ятаєте що крім даних мапи були присутні супутникові знімки, які допомогали нам визначати об’єкти на місцевості. Ці знімки були надані Microsoft Bing, сервісом який люб’язно надає їх для учасників OpenStreetMap для обкреслювання об’єктів та покращення даних мапи.

-	Для додавання супутникових знімків Bing в JOSM, оберіть "Фон" ("Imagery") в основному меню JOSM,  а потім — “Bing аерофотознімки" (“Bing Sat”).

>   Якщо в вашому меню відсутній пункт “Bing аерофотознімки" (“Bing Sat”), вам потрібно активувати його в налаштуваннях JOSM. Перейдіть Правити (Edit) -> Налаштування (Preferences) та натисніть на позначку “WMS TMS”. Можливо вам доведеться пошукати його в переліку.
>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>
>   Виберіть “Bing аерофотознімки" (“Bing Sat”). Натисніть “Активувати” (“Activate”).


### Огляд JOSM
Тепер у нас є завантаженні дані OpenStreetMap, а також шар із супутниковими знамками Bing, давайте ще раз подивимося на інтерфейс JOSM.

![JOSM layout][]

The main window you are already familiar with - this is the map window, and 
it is where most of the action takes place. Here you will view, edit, and
add to the OpenStreetMap data.

To the right of the map window are a series of panels, each of which has
its own function. Typically when you first install JOSM several
panels are shown by default, such as Layers, Properties, and
Selection. When you select a point, line, or shape in the map
window, it will be shown in the Selection panel. Information about
the object will be shown in the Properties panel, and the username
of the author of that object will be shown in the Authors panel.

These panels can be opened or closed by clicking on the various buttons on
lower left side of JOSM. Above these buttons in the upper right are tools which
change what you can do with your mouse. You are already familiar with some of them,
the Select tool and the Draw tool. Below them are tools which make it easier to
zoom in, delete an object, draw a shape, or create a line that is parallel
to another line.


Edit
----
So we have completed step one of the editing process - Downloading. We have
prepared JOSM with satellite imagery as a reference. The next step is to edit
the map and add new items.

Depending on the area that you chose to download, there may be a lot or very
little existing map data. But notice that it is the same sort of data that we
have seen previously - points, lines, and shapes that represent real-life locations.

-	Use the techniques you have already learned to add a couple points to the map
	of places that you know. If you see any mistakes, try to fix them.
-	You don't need to be too aggressive while you are learning. If you are unsure
	about something it's better to leave it as it is.
-	If you want to move a point, line, or shape, use the
    **select tool**. Click on an object and drag it where it
    should be. This can be used to correct the location of items that
    have been put in the wrong place.

![JOSM select tool][]

-  Use the **draw tool** to draw new points, lines, and shapes.
    Describe these objects by selecting from the Presets menu, as you
    did in the previous section. 

>	Never edit the map outside of the area you have downloaded. You
>	can see the rectangular area you have downloaded has a solid background,
>	while the area you have not downloaded has diagonal pinstriped lines.
>
>	![JOSM area downloaded][]

Save Changes
--------------
The third and final step to complete our edits is to upload the changes we have
made to the OpenStreetMap database. To save the changes, we must
be connected to the internet.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

![JOSM Upload Button][]

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

![JOSM Upload Dialog][]

-  Click “Upload Changes”.

-	If this is your first time saving changes to OpenStreetMap, you will
    be asked for your OpenStreetMap username and password.
-	Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

![JOSM Authenticate][]

-	You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have edited the map on OpenStreetMap.

>	When you are editing, always be sure to upload your changes before you
>	close JOSM. Even if you still have more editing to do, upload your changes,
>	and then go through the process again later when you have time to edit. You
>	don't want to lose your work!

See your changes on the map
---------------------------
-  Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-  Move the map to the area that you edited.
-  You should see your changes now appearing on the map! If you don’t,
    try pressing CTRL+R to refresh the web page. Sometimes the map
    doesn’t update properly and needs to be reloaded.
-  What if you don’t see your changes? Don’t worry - it may take a few
    minutes for the changes to be shown on the map. Also, check your
    additions in JOSM to make sure that you added them correctly. A good
    general rule is, if your point has an icon in JOSM, then it should
    be seen on the main map at the OpenStreetMap website.

Summary
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing
is great, but it's not the only aspect of making maps. Of course you also
need to learn how to go outside and collect information about places on the
ground.

In the next sections we will learn about two methods - GPS and Field Papers,
which are used to collect geographic data. The information from both of these
can then be imported into JOSM, and used to edit the map.

Moving Forward
--------------

Click on the link for further reading on:  
 
*  [Surveying with GPS](/en/beginner/using-gps/)  
*  [Field Papers](/en/beginner/field-papers/)
*  [Editing Field Data](/en/beginner/editing-with-josm/) 


[JOSM Download Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image00_download-button.png
[JOSM Download Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image01_download-dialog.png
[JOSM Preferences up down]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image02_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image03_preferences-wms-tms.png
[JOSM layout]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image04_layout.png
[JOSM select tool]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image05_select-tool.png
[JOSM area downloaded]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image06_area-downloaded.png
[JOSM Upload Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image07_upload-button.png
[JOSM Upload Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image08_upload-dialog.png
[JOSM Authenticate]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image09_authenticate.png
