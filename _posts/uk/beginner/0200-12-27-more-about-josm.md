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

Головне вікно, з яким ви вже познайомились, — є вікном мапи в якому відбувається більшість дій. Тут ми будемо переглядати, змінювати та додавати дані OpenStreetMap.

Праворуч від вікна мапи знаходиться набір панелей, кожна з яких відповідає за власну функцію. Зазвичай, після початкового встановлення JOSM показується кілька типових панелей, таких як Шари (Layers), Теґи/Членство (Properties) та Виділення (Selection). Коли ви віділяєте точку, лінію або фігуру на мапі, вони з’являються на панелі Виділення (Selection). Інформація про об’єкт показується на панелі Теґи/Членство (Properties), а на панелі Автори (Authors) показується інформація про авторів об’єктів.

Ці панелі можуть бути відкрити або закриті натисканням кнопок в нижній частині панелі інструментів ліворуч від вікна мапи в JOSM. Над цими кнопками знаходяться інструменти, якими ми обираємо можливі дії, що виконуються мишею. Ви вже знайомі з деяким з них, інструментом Виділення (Select tool) та інструментом Креслення (Draw tool). Під ними інструменти, що полегшують масштабування, вилучення об’єктів, креслення фігур, чи креслення паралельних ліній.


Редагування
-----------
Отже ми виконали перший крок процесу редагування даних — Завантаження. Ми підготували в JOSM фоновий шар зі супутниковими знімками, по яких ми будемо креслити. Наступний крок — редагування мапи та додавання нових об’єктів.

В залежності від місцевості, яку ви оберете для редагування, у вас може бути багато чи мало внесених раніше даних мапи. Але зверніть увагу, що це ті ж самі типи даних, з якими ми познайомились раніше — точки, лінії та фігури, що які представляють місцевість в реальному житті.

-	Використовуйте ті ж прийоми, які ви вивчили додавши кілька точок на мапу у місці, що добре вам відоме. Якщо ви побачили помилки, спробуйте виправити їх.
-	Ви не повинні бути занадто напористими в той час як ви вчитеся. Якщо ви не впевнені в чомусь краще залишити все як є.
-	Якщо вам потрібно пересунути точкку, лінію або фігуру використовуйте **інструмент Виділення**. Клацніть на об’єкт та перетягніть його у потрібне місце. Цей прийом використовується для коригування помилкового місця знаходження об’єктів.

![JOSM select tool][]

-  Використовуйте **інструмент Креслення** для креслення нових точок, ліній та фігур. Описуйте об’єкти за допомогою Заготовок (Presets) із відповідного меню, так як це ми робили в попередньому розділі.

>	Ніколи не змінюйте мапу за межами завантажених ділянок. Ви можете побачити, що ділянка, яку ви завантажили, буде мати суцільний фон, в той час як, незаватаженна ділянка буде мати діагональне штрихування.
>
>	![JOSM area downloaded][]

Збереження змін
---------------
Третій та фінальний крок, що завершує вашу роботу — надсилання зроблених вами змін до бази даних OpenStreetMap. Для того, щоб зберегти зміни потрібно під’єднатись до Інтернету.

-  Оберіть меню “Файл” (“File”) в основному меню вгорі та натисніть “Надіслати дані на сервер” (“Upload Data”). З’явиться вікно надсилання даних. Також його можна викликати, натиснувши на кнопку надсилання даних:

![JOSM Upload Button][]

-  У вікні надсилання даних показується перелік об’єктів, які були дадані, змінені або вилучені вами. В нижній частині вікна вам буде запропоновано додати опис ваших змін. Додайте їх.

![JOSM Upload Dialog][]

-  Натисніть “Надіслати зміни” (“Upload Changes”).

-	Якщо це ваш перший раз збереження змін в OpenStreetMap, вам буде запропоновано ввести ваш логін і пароль OpenStreetMap.
-	Введіть їх у наступному вікні. Якщо ви поставите позначку, логін і пароль будуть збережені в налаштуваннях і вам не доведеться вводити їх в майбутньому знов. Натисніть “Автентифікація” (“Authenticate”).

![JOSM Authenticate][]

-	Вам треба трохи зачекати доки ваші зміни будуть надіслані, після чого можна вважати, що роботу завершено! Ви внесли зміни до мапи OpenStreetMap.

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
