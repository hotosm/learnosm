---
layout: doc
title: Создание заметок OSM
permalink: /ru/beginner/notes/
lang: ru
category: beginner
---

Создание заметок OSM
=====================

Одним из главных компонентов OpenStreetMap являются заметки (notes), которые стали неотъемлемой частью проекта с 2013 года. В этом разделе вы узнаете, что такое заметки, какими бывают их статусы, как создавать заметки в процессе внесения изменений на карту, как устроено общение в заметках, как создавать их из различных приложений, а в конце мы кратко разберем историю появления этой функции.

Обратите внимание, что в этом разделе мы рассмотрим только создание заметок. По поводу закрытия заметок вы можете обратиться к разделу, посвященному разрешению заметок. Кроме того, в конце этой статьи мы добавили глоссарий сокращений и терминов.


# Для чего нужны заметки?

Цель заметок в том, чтобы (а) описать ошибку или неточность между картой OSM и реальностью и (б) предоставить пользователям карты механизм обратной связи. Всё вышеперечисленное позволяет поддерживать OSM в актуальном состоянии. Эта функция активно используется при полевых работах(например, когда вы находитесь непосредственно на улице или в парке), где можно выявить три типа несоответствий или элементов, отличающихся от карты:
 
* Элементы, которые отсутствуют на карте, но существуют в реальности.
* Элементы, которые были отмечены на карту с ошибками - в их свойствах или местоположении. Например, зоомагазин стал супермаркетом.
* Элементы, которые просто больше не существуют.

Внутренняя система заметок обеспечивает механизм связи между пользователем, сообщившим об ошибке, и картографом, вносящим изменения. Это позволяет создать пространство, где можно задать вопросы о выявленном несоответствии, получить на них ответы и в итоге более точно скорректировать карту.

Мы заметили, что заметки вызывают большой интерес у пользователей, которые предпочитают вносить свой вклад в проект иначе, чем просто рисовать карту. Это позволило нам расширить сообщество: некоторые участники теперь специализируются именно на отправке заметок о различных объектах прямо во время прогулок.


## Атрибуты заметок

Заметки характеризуются следующими свойствами:

* Текст: описывает выявленное несоответствие и может занимать несколько строк.
* Местоположение: определяется долготой и широтой, которые можно получить с помощью GPS (ГНСС) или перемещая маркер-булавку 📌 по карте.
* Имя пользователя (необязательно): заметка будет создана анонимно, если пользователь не зарегистрирован в OSM.
* Номер или идентификатор: уникальный номер заметки в базе данных.
* Дата: показывает когда заметка была создана.

Кроме того, заметка может содержать дополнительные комментарии. Это значит, что при создании заметки всегда создаётся первый (исходный) комментарий. Все последующие комментарии будут относиться к переписке между обычными пользователями и картографами. Стоит отметить, что добавлять комментарии могут только зарегистрированные пользователи. Также важно иметь в виду, что после публикации комментарий нельзя изменить или отредактировать. Единственное, что можно сделать, если комментарий нарушает правила обработки данных OSM - попросить Рабочую группу по данным (DWG) скрыть его. Например, если в тексте заметки содержатся персональные данные.


# Статусы и действия

У заметок существует три статуса:

* Открыта.
* Закрыта.
* Скрыта - этот вид относится к заметкам, которые были скрыты Рабочей группой по данным (DWG), поскольку они нарушают правила обработки данных OSM.

С заметками можно совершать несколько действий:

* Создать заметку (Открыта): соответствует начальному процессу создания.
* Разрешить заметку (Открыта -> Закрыта): это действие, доступное только зарегистрированным пользователям, при котором можно добавить комментарий.
* Прокомментировать заметку (Открыта -> Открыта): когда зарегистрированный пользователь добавляет комментарий к заметке.
Например, когда один пользователь запрашивает более подробные сведения об окружении, или когда сам создатель заметки хочет точнее описать изначальную проблему.
* Переоткрыть заметку (Закрыта -> Открыта): когда пользователь не согласен с решением по заметке и решает активировать её снова.

![States for a note][]


# Considerations for Creating Good Notes

Recall that the notes describe an error or inconsistency between the map (OSM) and reality. Typically, notes are created on-site; for example, when a person is walking, has a device with the OpenStreetMap map, and sees that there is something that differs from reality.

The key to creating good notes is to describe the map inconsistency as much as possible and remember that the person who will solve it may not know or have visited the area. Therefore, provide the best context for the person who will read and try to solve the note. For example, it is good to use cardinal points (north, south, east, west) and avoid indications such as to the right, to the front, etc., since the person who will solve the note does not have the reference point of where you are located when creating the note.

When you are registered in OpenStreetMap and create notes with your user, you will be notified by email of any changes to the note. This allows you to keep track of the progress of the note's resolution and to be able to answer any questions that arise. Some applications allow you to upload photos associated with the notes to describe the context graphically. If you are using an application with this functionality, take advantage of it. We recommend always indicating where the camera points (to the northeast, to the ground, etc.). If you have doubts, you can use a compass application on your cell phone; with this, the mapper will understand the orientation of your photo to solve the note.

We know you are just starting to read this guide and discovering the world of OSM. When you are further along in this reading, you will learn to map an element or feature in detail. This will help you describe an object better through a note so that more properties are mapped.

## Language

The language you are most fluent in is the best language to write a note. Remember that the person solving the note, if they do not understand your text, may use an online translator (such as deepl.com or pons.com) since most note-solving is done from a computer. You can also write it in the language of the country you are in, or possibly in English, but it is best to use a language in which you feel comfortable and can express yourself better.

## Location Accuracy

The location of the note must be as accurate as possible to the location of the error or inconsistency on the map. The note may introduce an error on the map instead of correcting something when the note is placed a few meters away from the required location. It is necessary to wait a moment for your device to identify its location, or you can manually move the pin over the map element you wish to modify.

Keep in mind that the person who will address the note may not be familiar with the area. So, if the GPS (GNSS) has not located you correctly and indicates that you are on the sidewalk in front, the modification on the map will be on the other side of the street, which will be incorrect.

## Hashtags

Sometimes, there are activities in which many people create notes for the same purpose (for example, a mapathon to add neighbourhood details). To identify this, we recommend using one or several Hashtags to describe the activity. With this, you will be able to search for the notes associated with the hashtag and process them more easily.


# Bad Notes

Remember that the notes must not include personal information, opinions, personal data, or advertising. Nor are they for asking questions. As previously mentioned, mappers who process the notes may not know the terrain, so they will be unable to answer your questions. The opposite, however, is true. Since you are on-site, you can identify errors or inconsistencies in the map and report them as a note.

## Mechanical Notes

These are those created massively from the computer where elements of the map to be corrected are identified. This is not a practice recommended by the community since it is important to distinguish between evidence observed directly in the field and inconsistencies detected only by remote means. For example, when using an editor such as iD or JOSM, and you decide to identify poorly drawn buildings by creating a note for each building. There are tools available for that specific purpose that have better area management with conflict prevention in the edits. You will see these tools later in this guide. Some of them are Tasking Manager, MapRoulette, and DAMN Project, which use formats such as GeoJSON to mass-load various points on the map.  


# Notifications

When you create a note describing an inconsistency on the map, this text associated with a location will be sent to the OSM database. Then, an OSM mapper will read your note to resolve it, and if they have doubts about that description, they can add a comment where they can ask you for more details. If you have created the note with your OpenStreetMap user, you will receive an email with the mapper's questions. Any comments you add will be notified to all mappers who have previously commented on the note. This is how the people involved in a note begin to interact. 

![Notification by email][]


# Creation of Notes

The functionality to create, comment, and close notes is included in different applications. Here, we’ll demonstrate how you can create notes in some applications that we consider most suitable for this activity. Many of the applications presented here have detailed sections in this guide (LearnOSM), but this section presents an overview of the functionality related to notes in these applications.

## StreetComplete

When you see something that deserves to create a note, you can hold your finger down on the map, and a floating menu will appear. There, you choose to create a note, and you can describe the incongruity. There is also the option to include a photo for better context. Ensure the application uploads the data to OpenStreetMap to publish your note.

![Creating a note in StreetComplete][]


## Every-Door

There are several editing modes on the horizontal bar at the bottom of the application. Choose the last one, which is for notes. A blue circular button will be activated on the lower right corner to add notes. After placing the pin, you can type the note’s text. Remember to upload the changes so your note is registered in OpenStreetMap.

![Creating a note in Every-door][]


## OnOSM

This webpage allows you to add details of establishments by creating a note. It has a mechanism that asks for the necessary information and fills in a template. At the end, it publishes the data in OSM through a note.

Notes created by this page are always anonymous since you are not required to use OSM credentials. Consequently, you will not receive an email when a mapper processes your note, so you must constantly visit the note page to check its status.

![Creating a note in OnOSM.org][]


## OsmAnd

Select an element on the map (e.g., a building, a road), and in the "Actions" option, select "Open a note" in OSM. Describe in the text the incongruence, and finally click on "Upload".

![Creating a note in OSMAND][]


## OSM.org Homepage

From the OpenStreetMap.org home page, zoom into the area of interest, and then the add-note icon will be enabled. Remember that if you do this procedure without logging in, you will create an anonymous note and not receive notifications of its resolution. A text box will appear where you can give instructions, and when you click "Add note," you will be inside OSM.

![Creating a note in osm.org][]


# History

Now that you know the basics of notes, let's finish this section with some history. Before notes as such existed within the OpenStreetMap database, a parallel project offered this functionality. The project was named OpenStreetBugs and provided the essential tools for users to document map inconsistencies using text and coordinates. The functionality was excellent for reporting inconsistencies, so the decision was made to integrate it into OpenStreetMap, allowing it to be accessed through the API. It should be noted that when API 0.6 was defined and implemented, this version did not include the functionality for the notes.

Indeed, the notes were included in a later addition to this version.
In 2013, the notes service was offered as part of the API.
By 2014, all OpenStreetBugs reports had been migrated to the OSM database.
In 2017, 1 million notes had already been created worldwide.


[States for a note]: /images/beginner/note-states.png
[Notification by email]: /images/beginner/email-messages.png
[Creating a note in StreetComplete]: /images/beginner/streetcomplete.gif
[Creating a note in Every-door]: /images/beginner/every-door.gif
[Creating a note in OnOSM.org]: /images/beginner/onosm.gif
[Creating a note in OSMAND]: /images/beginner/osmand.gif
[Creating a note in osm.org]: /images/beginner/website.gif
