---
layout: doc
title: Втулки Building Tools та Utilsplugin2
permalink: /uk/josm/josm-more-plugins/
lang: uk
category: josm
---

Втулки Building Tools та Utilsplugin2
============


Втулки **buildings_tools** та **utilsplugin2** додають чудові інструменти та розширюють можливості JOSM. В цім розділі ми розкажемо про це докладніше.  

Втулок Buildings Tools
--------------------------

Якщо ви ще не зробили цього, встановіть втулок використовуючи рекомендації з розділу про [Втулки JOSM](/uk/josm/josm-plugins).    

![Buildings tools plugin][]

Втулок Buildings Tools дуже корисний для додавання будинків. Він дозволяє накреслити одну сторону прямокутника будинку і одним додатковим рухом створити з лінії прямокутник. Якщо вам треба накреслити багато будинків, цей втулок зекономить вам тисячі кліків, а з ними і час.  

Після встановлення втулка, ліворуч на панелі інструментів, ви побачите кнопку: ![Buildings tools button][]{: height="29px"}

Завантажте в JOSM ділянку на якій ви бажаєте додати будинки.  

### Прямокутні будівлі

* Оберіть інструмент building tool і двома кліками накресліть лінію вздовж стіни будинку.  

![Draw edge][]

* Потім потягніть мишу в бік, щоб перетворити лінію в прямокутник, клацніть третій раз для завершення креслення.  

![Extend building][]

* Це дозволить вам не тільки накреслити прямокутник в три кліки, а також додасть теґ **building=yes** до полігону будівлі.  

### Кругові будівлі

* В меню "Ще…"->"Режими креслення будівель" виберіть "Зробити контур будівлі круглим" або використовуйте швидку комбінацію клавіш ALT+Z (при поверненні до креслення прямокутних будівель використовуйте ALT+R). Потім проведіть лінію діаметра будівлі.

![Round building][]

### Будники складної форми

Ви також можете додавати на мапу будинки складної форми, що не є простими прямокутниками. Для цього накресліть кілька прямокутників, що перекривають один одного, для кожної із частин, а потім об’єднайте їх.  

* Накресліть два контури, щоб перекривають друг друга, так щоб вони утворили літеру L.  
* Виділіть обидва будинки (натисніть та утримуйте SHIFT для того щоб виділити більше ніж один об’єкт).  
* В меню Інструменти знайдіть пункт Об’єднати полігони, що перекриваються (Join overlapping Areas) або натисніть  SHIFT+J.  

![Merge buildings][]

### Зміна параметрів

Крім того, ви можете змінити стандартні налаштування втулка.  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* Якщо вам потрібно додати багато однакових за розмірами будинків, ви можете встановити відповідні значення ширини та довжини будівлі, наприклад 6 x 10 метрів (одиниці виміру в метрах).  

![Set buildings size dialog][]

* Завдяки встановленню довжини та ширини, вам буде потрібно зробити тільки два кліки для додавання будинків бажаного розміру.  

Нарешті, ви можете натиснути кнопку Додатково… (Advanced), якщо ви хочете вказати додаткові теґи, які будуть автоматично додаватись до кожної будівлі.  

![Buildings advanced][]


Utilsplugin2
-------------

* Якщо ви ще не зробили цього, встановіть втулок використовуючи рекомендації з розділу про [Втулки JOSM](/uk/josm/josm-plugins).    

![Utilsplugin2 plugin][]

Після встановлення втулка та перезапуску JOSM у вас з’явиться новий пункт меню “Ще інструменти”.  

![More tools menu][]

Створіть новий шар та спробуйте роботу нових інструментів. Тут ми розкажемо вам про кілька найкорисніших з них:  

1. **Додати точку на перетині ліній / Add Nodes at Intersections:**  Цей інструмент є дуже корисним для додавання відсутніх спільних точок в місцях перетину ліній, виділіть потрібні лінії для початку. Особливо це важливо для доріг, на перехрестях дороги повинні мати спільні точки, що робить можливим правильне прокладання маршрутів.  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Додати теґ source / Add Source Tag:** Цей інструмент спрощує додавання теґу source. Він зберігає останнє додане значення і дозволяє додавати його до наступних об’єктів, тож ви можете додавати теґ в один клік.  

4. **Замінити геометрію / Replace Geometry:** Цей інструмент є знахідкою у випадках, коли є потреба накреслити заново об’єкти, геометрія яких є дуже неточною або навіть помилковою, але вам потрібно зберегти історію змін цих об’єктів, їх теґи та ідентифікатори. Наприклад, якщо ви бачите будинок складної форми, який накреслено досить приблизно, замість того щоб змінювати його контур перетягуючи точку за точкою, накресліть його наново, виділіть новий та старий контури та скористуйтесь цим інструментом для перенесення всієї наявної інформації зі старого контуру на новий.  

    ![Replace geometry][]


### Більше інструментів для виділення

**Utilsplugin2** також надає додаткові інструменти в меню “Виділення” (“Selection”). Спробуйте їх також.  

![Selection menu][]

Одним з популярних є інструмент **Зняти виділення з точок / Unselect Nodes**. Він дозволяє залишити виділеними тільки лінії та полігони після того, як ви виділили всі об’єкти на мапі з допомогою миші або клавішного скорочення.  

![Unselect nodes][]

Хай щастить!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

