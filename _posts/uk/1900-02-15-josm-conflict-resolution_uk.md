---
layout: doc
title: JOSM – розв’язання конфліктів
permalink: /uk/josm/josm-conflict-resolution/
lang: uk
category: josm
---

JOSM – розв’язання конфліктів
====================

> Редакція 2016-09-27  

Іноді, коли ви намагаєтесь в JOSM завантажити результати вашої кропіткої праці на сервер, ви можете побачити це неприємне повідомлення про виникнення конфліктів в даних.  
![conflict detected][]  
То що ж відбувається? Ви завантажуєте з сервера частину даних, що містить, наприклад, точку А. Потім, поки ви змінюєте вашу копію даних, хтось інший також завантажує дані з точкою А, змінює її, та надсилає зміна назад до OpenStreetMap. тепер, коли ви пробуєте завантажити вашу версію точки А, вона є відмінною від тої, що зберігалась до цього на сервері. Отже JOSM не знає до якої версії точки А потрібно внести зміни.  

Конфлікти
----------

Іноді, JOSM може з’ясувати що робити у випадку появи конфлікту в даних самостійно і видасть вам повідомлення схоже на це:  
![resolved automatically][]  
Це означає, що JOSM автоматично вирішив, що елементи у вашій локальній копії даних не будуть завантажені до головного сервера тому що вони вже були вилучені іншим мапером. Але деякі конфлікти не мають простих способів розв’язання, які JOSM може застосувати самотужки, тож JOSM залишає право вибору дій за мапером, для вибору найкращого варіанту. Це означає, що вам доведеться розв’язувати конфлікти в даних самим.  

Цей діалог каже нам, що нам треба переглянути всі конфлікти в даних Шарі 1:  
![warning unresolved][]  

Це вікно містить попередження про те, що у вас можуть виникнути конфлікти у вашій копії даних. Якщо ви оновити вашу копію даних даними з сервера, ви зможете виправити конфлікти, яки можуть з’явитись:  
![check on server][]  

Це вікно сповіщає про те, що JOSM не вдалося вилучити точку, через те що вона залишається пов’язаною з лінією. Щоб виправити цей випадок, вам потрібно повернутись  в JOSM та розв’язати конфлікти перед надсиланням даних до сервера.  
![still in use][]  

Розв’язання конфліктів
--------------------

Розв’язувати конфлікти в JOSM, насправді, не так вже і складно, як це може здаватись з першого погляду. В основному, для кожного конфлікту JOSM запропонує вам два варіанти: або залишити вашу версію, або ж застосувати версію даних, що зберігається на сервері. Вам треба буде зробити вибір, або залишити вашу версію змін, або оновлену версію даних з сервера.  
Ви можете подумати, “звісно ж, моя версія краща!” І, можливо, ви праві. Але повернімось назад, на початок цього розділу. Поки ви були зайняті внесенням власних змін, інший мапер додав багато іншої інформації до однієї з точок з вашої копії даних. Якщо ви оберете залишити вашу версію, замість версії іншого мапера, ви можете втратити важливі дані, додані ним. Отже, вам краще подумати про те, як залишити його версію та поєднати його зміни з вашими.  
Коли у вас з’явиться повідомлення про конфлікт, вам краще натиснути кнопку “Синхронізувати …” (“Synchronize ... only”). Вам, можливо, доведеться зробити це для кількох об’єктів, але краще розв’язувати конфлікти по одному.  
![synchronize node][]  
Після натискання на цю кнопку з’явиться вікно, в якому детально описується ваш конфлікт. Повідомлення про помилку може виглядати складно, але це воно досить просте. Ви знатимете, який тип конфлікту у вас виник по червоному квадрату на верхній вкладці. Конфлікт у наведеному нижче прикладі стосується властивостей, таких як розташування та існування об’єкта. Ось чому тут містяться координати та згадується стан.  

**Типи конфліктів:**

- **Властивості:**  Об’єкт було посунуто (координати) або вилучено  
- **Теґи:**  Теґи відрізняються  
- **Точки:**  Лінія в різних версіях складається із різних точок  
- **Члени:**  Зв’язок в різних версіях складається з різних членів  
![properties with conflicts][]  

Конфлікти виникають тільки між двома змінами за раз. Якщо у вас три чи більше конфліктів, вам доведеться розв’язати їх ланцюжки. Все одно, вам треба обирати або вашу, або чужу версію, або ж зливати їх між собою, але не більше ніж для двох версій за раз.   

У прикладі вище, у вас немає варіанта поєднати дві версії. Натисніть на перший стовпець, або Моя версія, якщо ви бажаєте зберегти її. Клацніть Версія з сервера, якщо ви вирішите, що зміни інших є кращими.  
![conflicts resolved][]  

Після того, як ви оберете яка версія краще, натисніть на кнопку “Застосувати…” (“Apply Resolution”). У вас може з’явитись ще кілька попереджень про конфлікти перед тим, як ви нарешті зможете завантажити ваші дані на сервер. Внесіть ваші зміни та натисніть на кнопку “Надіслати”. У вас може з’явитись повідомлення:  
![command stack][]  

На панелі діалогів, меню Панель ‣ Конфлікти, ви можете побачити перелік наявних конфліктів. Загальна кількість нерозв’язаних конфліктів показується в заголовку панелі. Ви можете виділити та розв’язати конфлікт клацнувши на ньому. Корисно мати цю панель під рукою, коли вам треба розв’язати велику кількість конфліктів.  
![one unresolved][]  
Ви не зможете надіслати ваші зміни на сервер доки не очистите цей список.  

Шляхи щодо уникнення конфліктів
------------------------

### Частіше надсилання змін на сервер

Для мінімізації випадків виникнення конфліктів, а також мінімізації їх кількості, рекомендується регулярно надсилати ваші зміна на сервер. Конфлікти виникають частіше у тих, хто тяжіє до створення власної копії даних та несвоєчасному їх надсиланню на сервер. Найкращим способом уникнення конфліктів є завантаження невеликої ділянки, внесення змін в дані та негайне надсилання цих змін на сервер. Чим довший проміжок часу між завантаженням даних та їх зворотнім надсиланням на сервер, тим більше ймовірність, що хто-небудь інший змінить їх за цей час. Якщо ви берете участь у Мапатоні та редагуєте, наприклад, довгу дорогу, є шанс, що хтось інший змінює її в іншому місці пороч з вами також; завантажуйте ваші зміни частіше, принаймні кожні 6 правок!  

### Редагування тільки в межах завантаженої області

Редагування лише в межах завантаженої ділянки зменшує ризик виникнення конфліктів. Переконайтесь що ви не вносите зміни поза межами завантаженої ділянки. Ви можете легко ідентифікувати території, дані для яких ще не були завантажені по спеціальній заливці діагональним штрихованням.   

![edit outside area][]  

Підсумки
--------
Коли ви вносите зміни за допомогою JOSM, у вас є ризик виникнення конфліктів в даних. Конфлікти виникають, коли один об’єкт змінюється двома маперами одночасно. Розуміючи природу конфліктів даних, ви зможете правильно їх розв’язати та надіслати ваші правки на сервер OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Appendix. More Specific Conflicts

### Tag Conflicts

If the tags of one version of an objects are different from the tags of
another version, the Conflict dialog shows a ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
the tab Tags. Click on the tab to display a dialog for resolving tag
conflicts.

There are three tables displayed in this dialog, from left to right:

1.  My version: shows the tags of the first object version participating
    in this conflict. These are usually the tags of the object version
    in your local data set.
2.  Merged version: shows the merged tags. This table is initially
    empty. The more tag conflicts you resolve, the more tag values will
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participating in this conflict. These are usually the tags of the
    object version currently stored on the server.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
and which you want to discard.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
and the background color turns to green.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
have to resolve differences in the list of
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)of two
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png