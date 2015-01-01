---
layout: doc
title: Creating Custom Presets
permalink: /de/editing/creating-presets/
lang: de
category: editing
---

Creating Custom Presets
=======================


This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

---

In the [previous chapter](/en/editing/josm-presets) we looked at how custom
presets menus can be added into JOSM. In this chapter we will cover how to create your own custom presets files.

WARNING! This is an advanced topic... consider yourself warned!

Introduction to XML
-------------------
In order to create our own Presets menu, we first need to understand a language called XML. If you're already familiar with XML feel free to jump the next section.

XML, which stands for “Extensible Mark-up Language”, is a computer language similar to HTML.  The key difference is that XML is designed to carry data, not display it.  Many applications on the internet use XML to transmit data, including OpenStreetMap.  XML uses elements, and each element can contain child elements inside it.  For example, let’s imagine that we want to create an XML file that contains data about a restaurant menu.  We must create a root element to contain all the data about our menu.  Our root element will have an opening and a closing tag, like this:

	<menu>
      ... whatever data we want to include in our menu ...
	</menu>

Information is contained inside an element, and within each element there can be more elements.

  	<menu>
	  <item name=“Hamburger”>
		<cost>400</cost>
		<description>Delicious beef patty</description>
	  </item>
	  <item name=“Nasi Goreng”>
		<cost>200</cost>
		<description>Indonesian Fried Rice</description>
	  </item>
  	</menu>

In this example we have placed two &lt;item&gt; elements within our &lt;menu&gt; element to describe two different items that are contained in the menu.  Each item contains two more elements in them, &lt;cost&gt; and &lt;description&gt;.  Notice also how we have written name=”Hamburger” inside the opening &lt;item&gt; tag.  This is called an attribute, and adds information about the element.


### XML Terminology
-	**root element:** the outermost element of an XML document, which describes what is contained
-	**element:** any XML object, contained by opening and closing tags, such as &lt;item&gt; ... data ... &lt;/item&gt;
-	**tag:** something contained in brackets, such as &lt;item&gt;.  &lt;item&gt; is the
	opening tag of an element, and &lt;/item&gt; is the closing tag. Don't confuse this
	with OSM tags, which have a different meaning.
-	**attribute:** a piece of information contained inside a tag, such as name=“Hamburger”

Using XML to hold and transmit data is great because it is easy to understand for computers.


JOSM Presets Files
-------------------
Let's add a sample presets file into JOSM and analyze how it works.

-	Download the file [sample_presets.xml](/files/sample_presets.xml).
-	Then load it into JOSM as described in the [previous chapter](/en/editing/josm-presets).
-	Create a new layer and a new object.
-	Go the the Presets menu. There will be a new item named "Sample Building." Click on it.

![sample building menu][]

Notice that the form which appears has three fields in it, and each accepts a different type of input. The first field, building name, accepts a text string as input. The second, building use, has a dropdown box. The final field is a check box, meaning that it can only have one of two values, on or off.

![sample presets form][]

Now let's look at the XML file which defines this Preset form.

-	Find the XML file on your computer and open it with a text editor. If you are using Windows you can use the Notepad 	program. If you want a more easy-to-use editor, you might download the free Notepad++ application.
-	The **sample_presets.xml** file looks like this:

![sample presets file][]

For now, let's ignore the first six lines and the final line, and focus on everything between the &lt;item&gt; tags.

The first line looks like this:

	<item name="Sample Building" type="node,closedway">

This is the opening tag of an item which is added to the menu. It has two attributes, name and type. The name defines how this will appear on the Presets menu. The type limits this preset to specific types of objects. In this case, the preset can only be applied to points and shapes - in other words, nodes and closed ways. If you try to apply this preset to a line, it won't work.

Let's look at the next line:

	<label text="Building Form" />

When you click on the menu and open the sample form, at the top you see the text "Building Form." This is the text defined in this line. This defines a &lt;label&gt; element, which simply displays text in the form. The text is defined by the attribute *text="some text"*.

Go down a few lines and find this:

	<key key="building" value="yes" />

This is one of the tags that will be applied to the object we have selected. Because it uses the element &lt;key&gt;, the OSM tag given here will be automatically applied when the preset is chosen. Hence this object will automatically obtain the tag *building=yes*.

The next line is a bit different, using the &lt;text&gt; element.

	<text key="name" text="Name of Building" default=""
		delete_if_empty="true" />

The &lt;text&gt; element creates a blank field. When the form is created in JOSM, the user will be able to fill in the empty field. Because the attribute *delete_if_empty="true"* is set, no tag will be added if the user leaves this field empty.

The dropdown box on the form is defined in the following line:

	<combo key="building:use" text="Building Use"
		values="residential, commercial, industrial"
		display_values="Residential, Commercial,
		Industrial"/>

A dropdown box is defined by the &lt;combo&gt; element. As with the &lt;text&gt; element, the attribute *key* defines the tag key. The value is then chosen from a list of possible *values*. The *display_values* attribute allows you to choose different names to be displayed in the dropdown box, which may be easier to understand than the OSM tag values.

Lastly, let's look at the line which defines the checkbox.

	<check key="building:vacant" text="Is the building
		vacant?" default="off" delete_if_empty="true" />

The &lt;check&gt; element defines - you guessed it! - the checkbox. The attribute *default="off"* states that the box will be unchecked by default. The remaining attributes you have already seen.

Creating Your Own Presets File
------------------------------

The best way to create your own presets file is to take one that already exists, and manipulate it fulfill your objectives.  Feel free to edit this sample file and experiment with it to learn the basics. Just remember that each time you save it, you will need to restart JOSM to load the changes.

Before you start creating your own presets, you need to think carefully about the tags that you will use. Inventing new tags is another topic altogether. Generally, you should utilize existing OSM tags when they exist. Most existing tags are listed on the [Map Features page on the OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).

This sample file contains most of the elements that you will find in a JOSM presets file - there aren't very many form elements. If you'd like to experiment with a more complex presets file, download the [dhaka_presets.xml](/files/dhaka_presets.xml) file here.

Additionally, a detailed explanation of all possible elements can be found [here](http://josm.openstreetmap.de/wiki/TaggingPresets).

Good luck!


[sample building menu]: /images/en/editing/creating-custom-presets/sample-building-menu.png
[sample presets form]: /images/en/editing/creating-custom-presets/sample-presets-form.png
[sample presets file]: /images/en/editing/creating-custom-presets/sample-presets-file.png
