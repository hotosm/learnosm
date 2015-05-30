---
layout: doc
title: JOSM Presets
permalink: /de/editing/josm-presets/
lang: de
category: editing
---

JOSM Presets
============


This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

---

If you've been using JOSM for long, by now you understand a bit
about tags and presets. Every object is defined by two things - first,
it's geometry (whether it's a point, line, or shape and its location),
and second, its attributes which come in the form of tags.

When you draw an object and select from the Presets menu, the correct tags
are automatically applied to the object.

If you like using presets, what happens when you want to add tags that
are not contained in the menu, or when you want to customize your own tags?

In this case, you can add custom menu items to the Presets. In this section
we will see how to do this. In the [following chapter](/en/editing/creating-presets),
we will cover how to create custom presets files of your own.


Add Presets
-----------

The menus and submenus that make up the Presets menu are stored in files
which describe how to create the menus and forms that come up when you
click on a preset, and how to define what tags are added to an object
based on how the form is filled out.

Presets files can either be added from an online archive, or saved on your
computer locally and added into JOSM.

-	To add a new entry to the Presets menu, open JOSM and go to Edit->Preferences.
-	Click on the third tab down, which looks like a grid covering the planet.

![tagging presets tab][]

-	At the top, click on "Tagging Presets."

![tagging presets menu][]

-	Add a presets file from the internet by selecting one in the list on
	the left, and clicking on the blue arrow. In this example, we will
	add the presets named "Buildings Indonesia by Kate Chapman."

![example presets][]

-	You will see a new item appear in the list on the right.
-	Click OK.
-	You will need to restart JOSM.
-	Create a new layer and add a point or shape.
-	Go to the Presets menu. Click on the item named "Building," which
	has now been added at the bottom of the menu.

![indonesia building form][]

-	If you don't speak Indonesian, this might be hard to read, but
	nonetheless you have been successful and added a custom preset menu.

-	If you have been given a custom presets file, you can add it to the menu
	in a similar way. Simply return to the Preferences menu, and instead
	of selecting from the list, click on the (+) button in the upper right.

![plus button][]

-	Locate your file and give it a name if you like.
-	Click OK.


[tagging presets tab]: /images/en/editing/josm-presets/tagging-presets-tab.png
[tagging presets menu]: /images/en/editing/josm-presets/tagging-presets-menu.png
[example presets]: /images/en/editing/josm-presets/example-presets.png
[indonesia building form]: /images/en/editing/josm-presets/indonesia-building-form.png
[plus button]: /images/en/editing/josm-presets/plus-button.png


