---
layout: doc
title: Creation of OSM Notes
permalink: /en/beginner/notes/
lang: en
category: beginner
---

Creation of OSM Notes
=====================

One of the main components of OpenStreetMap is notes, which have been an integral part of the project since 2013. In this section, you will learn what notes are, their states, how to create notes to be produced in map changes, the communication that is generated from notes, the process of creating notes from different applications, and to finish with a bit of history of this functionality. 

Please note that we will only deal with note creation in this document. For note resolution, you can visit the note resolution section.


# What are Notes for?

The purpose of the notes is both (a) to describe an error or inconsistency between OSM map and reality and (b) to provide map users with a feedback mechanism. The above allows OSM to be kept up to date. This is used a lot when we do fieldwork (i.e., when you are on the street or in a park), where we can identify three types of inconsistencies or elements that differ from the map in the following ways:
 
* Elements that are not on the map but do exist in reality.
* Elements that are incorrectly mapped, either by their properties or location, for example, a pet store is now a supermarket.
* Elements that simply no longer exist.

The notes system internally provides a communication mechanism between the reporting user and the mapper making the change. This allows for a space where questions can be asked about the identified inconsistency, answers can be given to these questions, and a more accurate map modification can be made.

We have observed that the notes generate significant interest in users who prefer to contribute to the project in a different way than mapping. This has allowed us to extend the community of mappers, where some specialise in reporting certain elements through notes while walking.


## Note Attributes

Notes are defined with the following properties:

* Text: describes the identified inconsistency, which can be several lines long.
* Location: is defined by longitude and latitude, which can be determined by GPS (GNSS) or by moving a pushpin 📌 on the map.
* Username (Optional): the note will be created anonymously if the user is not registered in OSM.
* Number or identifier: identifies the note from the whole set of notes.
* Date: indicates when it was created.

In addition, a note can include additional comments. This means there will always be an initial comment when the note is created. Subsequently, all other comments will pertain to the communication between users and mappers. It should be clarified that only registered users can add a comment. It is also important to note that it cannot be modified once a comment has been published. The only action that can be taken is to request the DWG to hide it if a comment violates OSM's data processing policies. For instance, if a note contains personal data.


# States and Actions

The notes have three states:

* Open.
* Closed.
* Hidden - This type applies to those notes that the DWG has hidden because they are against OSM data handling policies. 

There are several actions on the notes:

* Create note (Open): Corresponds to the initial creation process.
* Resolve note (Open -> Closed): This is the resolution of notes only by a registered user, where a comment can be included.
* Comment note (Open -> Open): When a registered user adds text to a note.
For example, when a user asks for more details of the environment or the user who created it wants to describe the initial note better.
* Reopen note (Closed -> Open): When a user disagrees with the note resolution and decides to reactivate it.

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
