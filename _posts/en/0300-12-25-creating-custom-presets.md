---
layout: doc
title: Creating Custom Presets
permalink: /en/intermediate/creating-custom-presets/
lang: en
category: intermediate
---

XML and JOSM Presets
====================

Introduction
------------

By now you probably have a good understanding of how objects are drawn
in JOSM, and how you add information to these objects to describe what
they are.  You add attributes to a point, line, or shape by attaching
**tags** to it.  By using the JOSM presets menu, you can easily attach the
correct tags to an object by finding the type of object you want to
create through a menu, and then filling in information in a form.  In
this chapter we will review **tags** and **presets** once more, and then learn
how we can create our own presets menus to use in JOSM.


** ​1.  Tags and Presets**

Remember that after you draw an object on the map in JOSM, you need to
attach **tags** in order to describe what it is, it’s name, and any any
other attributes.  For example when you want to create a clothing shop
with the name “Some Clothing Shop”, you need two tags - one to describe
the point as a clothing shop, and one to hold the name.  In JOSM, the
tags are shown in the Properties window when an object is selected.

![]({{site.baseurl}}/images/en_int_ch7_image15.png)

Tags consist of two parts, the **key** and the **value**.  The key typically
defines the type of information you are attaching, and the value defines
the specific object.  Here, we have two tags, and hence two pairs of
keys and values.

**KEY = VALUE**

**name = Some Clothing Shop**

**shop = clothes**

When we create a point with these tags, JOSM knows to display the icon
like this:

![]({{site.baseurl}}/images/en_int_ch7_image11.png)

And when we look at this on the openstreetmap.org website, the object
looks like this:

![]({{site.baseurl}}/images/en_int_ch7_image07.png)

The reason this works is because we’ve applied the appropriate **tags**.

Because OpenStreetMap is so open, anybody can add any tags they want to
anything.  But what happens when mappers in England disagree with
mappers in Japan about the best way to tag something?  For example, it
is important that all schools have the same tag describing it as a
school.  If some people tag schools as **amenity=school** but others tag
them as **education=school**, it is a problem.  Hence, people must agree on
how to tag places.

OpenStreetMap has been around for many years now, so there is an
accepted standard for how to identify most types of locations, and those
are listed on the Map Features page on the OSM Wiki.

[http://wiki.openstreetmap.org/wiki/Map_Features](http://wiki.openstreetmap.org/wiki/Map_Features)

This web page has grown longer and longer over the years as people have
sought to map more and more things and have needed more tags to do so.
 It is impossible to remember all of these tags, and quite a hassle to
look them up every time you need them.  Hence, JOSM has a Presets menu
which makes it much easier to apply the correct tags to an object.  With
the Presets menu, we can easily find the entry for school, enter
information into a form, and not have to worry about whether the correct
tag is **amenity=school** or **education=school** or something else entirely.

![]({{site.baseurl}}/images/en_int_ch7_image09.png)

Notice that when you add attributes using the presets menu, the correct
tags are automatically added in the Properties menu on the right.

JOSM comes with most of the presets that you will need already loaded,
but sometimes you may want to add your own presets to create tags for
the specific type of data you are collecting.  The remainder of this
chapter will explain how to create a custom Presets menu.


​**2.  Introduction to XML**

In order to create our own Presets menu, we first need to understand a
language called XML.  XML, which stands for “Extensible Mark-up
Language”, is language similar to HTML.  The key difference is that XML
is designed to carry ***data***, not display it.  Many applications on the
internet use XML to transmit data, including OpenStreetMap.  XML uses
***elements***, and each element can contain child elements inside it.  For
example, let’s imagine that we want to create an XML file that contains
data about a restaurant menu.  We must create a ***root element*** to contain
all the data about our menu.  Our root element will have an opening and
a closing tag, like this:

     <menu>

     ... whatever data we want to include in our menu ...

     </menu>

Information is contained inside an element, and within each element
there can be more elements.

     <menu>

       <item name=“Hamburger”>

        <cost>400</cost>

        <description>Delicious beef patty with cheddar
        cheese</description>

        </item>

        <item name=“Nasi Goreng”>

        <cost>200</cost>

        <description>Traditional Indonesian Fried Rice</description>

        </item>

      </menu>

In this example we have placed two < item> elements within our < menu>
element to describe two different items that are contained in the menu.
 Each item contains two more elements in them, < cost> and
< description>.  Notice also how we have written
***name=”Hamburger”*** inside the opening < item> tag.  This is called an
attribute, and adds information about the element.



* * * * *

**XML Terminology**

**root element:**  the outermost element of an XML document, which describes
what is contained

**element:**  any XML object, contained by opening and closing tags, such as
< item> ... data ... < /item>

**tag:**  something contained in brackets, such as < item>.  < item> is
the **opening tag** of an **element**, and < /item> is the **closing tag**

**attribute:**  a piece of information contained inside a tag, such as
**name=“Hamburger”**

* * * * *


Using XML to hold and transmit data is great because it is easy to
understand for computers.  To provide one more example, this is what the
XML might look like for the point we created in JOSM previously:

    <osm>

      <node id="6799999167" lat="-8.7542864" lon="123.5516224" user="rukeli" 
      uid="923929" visible="true" version="4" changeset="8343565" 
      timestamp="2011-06-04T21:50:42Z">

      <tag k="name" v="Some Clothing Shop"/>

      <tag k="shop" v="clothes"/>

      </node>

    </osm>

This XML has a root element < osm> which indicates that OpenStreetMap
data is contained inside.  Then it has one < node> element which is the
OpenStreetMap way of describing a ***point***.  The node has numerous
***attributes***, including a unique id number, the coordinates of the point,
the user who created the point, and some additional information which we
will not discuss right now.  Between the opening < node> tag and the
closing < /node> tag there are two more elements of type < tag>.  Each
< tag> has an attribute k and an attribute v.  These are the
***keys*** and ***values*** that we added in JOSM.  Notice that the < tag> elements
don’t have a closing < /tag>.  This is because they don’t have any
other elements contained within them, but instead have a forward slash
indicating that it does not require a closing tag.  < tag ...attributes
/>


** 3. JOSM Presets Files**

As you’ve already discovered, JOSM comes pre-loaded with a presets menu
that includes most common types of geographic options.  But sometimes
you want to add additional presets for specific information that you
want to collect.  You can create your own presets menu by writing it in
XML, and then loading it in JOSM.  First, let’s look at how we can load
additional presets menus into JOSM.

*  Open JOSM and open the Preferences menu by going to Edit -->
    Preferences.
*  Click on the third icon from the top which looks like this:

![]({{site.baseurl}}/images/en_int_ch7_image25.png)

*  Click on the third tab labelled Tagging Presets.
*  Select *“***Buildings*** by Kate Chapman”* and click on the right arrow
    button to add it to Active presets.

![]({{site.baseurl}}/images/en_int_ch7_image00.png)

*  Click OK.
*  Restart JOSM.
*  Create a new layer by going to File --> New Layer.
*  Create a point and make sure it is selected.
*  Go to the Presets menu.  You should now see the presets that you
    added at the bottom.  Click on “Building” to see the the building
    presets form.

![]({{site.baseurl}}/images/en_int_ch7_image12.png)     ![]({{site.baseurl}}/images/en_int_ch7_image20.png)

When we added these new presets through the preferences menu, what we
were doing is adding an XML file that describes how the new menu should
behave.  In the next sections, we will learn how to create our own XML
presets file that we can load into JOSM.


**4. A Sample Presets File**

To understand how a presets file is written, let’s first look at the XML
for one of the pre-loaded presets in JOSM.  When you go to the presets
menu and select Facilities --> Culture --> Place of Worship you will
see a form like this:

![]({{site.baseurl}}/images/en_int_ch7_image19.png)

The XML for this form looks like this:

    <item name="Place of Worship" icon="presets/church.png" 
    type="node,closedway,relation">

      <link href="http://wiki.openstreetmap.org/wiki/Tag:amenity=place_of_worship"/>

      <label text="Edit Place of Worship" />

      <key key="amenity" value="place_of_worship" />

      <text key="name" text="Name" default="" delete_if_empty="true"/>

     <combo key="religion" text="Religion" values="bahai,buddhist,
    christian,hindu,jain,jewish,muslim,sikh,spiritualist,
    taoist,unitarian,zoroastrian" default="" delete_if_empty="true" />

      <combo key="denomination" text="Denomination" values="anglican,
    baptist,catholic,evangelical,jehovahs_witness,lutheran,methodist,
    mormon,orthodox,pentecostal,presbyterian,protestant,quaker,
    shia,sunni" default="" delete_if_empty="true" />

      <combo key="service_times" text="Service Times" values="Su
    10:00,Su 10:30,Su 11:00" default="" delete_if_empty="true" />

      <combo key="opening_hours" text="Opening Hours for visiting"
    values="24/7,Mo-Fr 08:30-20:00,Tu-Su 08:00-15:00;Sa 08:00-12:00"
    default="" delete_if_empty="true" />

    </item>

This may look complex, but it is not as difficult as it may seem.  Let’s
walk through it line by line.

The first line is the opening tag of our root element < item>.  There
are several attributes describing the element.

*****
<table border="1">
<tr>
<td>name="Place of Worship"  </td>
<td>The name of what you are creating. </td>
</tr>
<tr>
<td>icon="presets/church.png" </td>
<td>The icon of the object.  PNGs are the most effective in OSM since they are compressed low-color graphics with transparent backgrounds. </td>
</tr>
<tr>
<td> type="node,closedway,relation" </td>
<td>  The types of object that this preset can be applied to.  Node means it can be applied on a point, way means it can be applied to a line, closedway means it can be applied to a shape, and relation means it can be applied to a relation, which is a type of OSM object we have not discussed.  Notice that way is not an option here, because a place of worship cannot be a line - it must be a point or a shape.  </td>
</tr>
</table>
*****

The second line provides a link to the OpenStreetMap wiki page for this
type of location.

    <link href="http://wiki.openstreetmap.org/wiki/Tag:amenity=place_of_worship"/>

The third line has the tag < label> and describes what text should be
shown at the top of the form.

    <label text="Edit Place of Worship" />

The fourth line describes a tag that will automatically be applied to
the object when the preset is selected.  In this case, we want the
object to have the tag **amenity=place_of_worship**.

    <key key="amenity" value="place_of_worship" />

The fifth line describes the first thing that will be shown on our form,
and how to create a tag when it is filled in.  The tag is < text> which
indicates that the form should have a text box for the user to fill in.
 The attribute **key=“name”** describes what key should be used when the tag
is created.  The value will be whatever the user enters in the text box.
 The attribute **text=“Name”** describes what should be written on the form
next to the text box.  The final attribute indicates that no tag should
be created if the text box is left empty.

    <text key="name" text="Name" default="" delete_if_empty="true" />

The lines after this are similar, but instead of text boxes, dropdown
boxes are created where the user can select from different options.  The
tag used for this is < combo>

The final line of the XML is the closing tag < /item>


​** 5. Creating Your Own Presets File**

Now follow along as we create our own presets file.  We will create an
example presets menu which will allow us to tag buildings or points
according to the type of utilities access that they have available.  For
this, let’s invent some new tags:

****************************************************************************************************************************************************************************************
| Key                             | Possible Values                  |                                                        |
| ------------------------------- | ---------------------------------|--------------------------------------------------------|
| utility:water                   | well, municipal, yes, no         | does the household have access to water?  well indicates it has access to well water.  municipal indicates it has pipes running to it.  If we want to be less descriptive, we can select yes or no to indicate if the building has water access 
| utility:electrical              | yes, no                          | Does the household have electrical access?             
| utility:phone                   | landline, mobile, yes, no        | Does the hosuehold have phone access?  landline indicates that there is a hard phone line in the house. mobile indicates that the household has a mobile phone.  If we want to be less descriptive, we can use yes or no              
| utility:internet                | landline, mobile, yes, no        | Same values as for phone, this will indicate if the household has internet access 
****************************************************************************************************************************************************************************************

When the preset we create is selected, we will also automatically add
the tag **building=yes**, and we will create a tag with the key **name** that
the user can fill in with using a text box.

Now look at the possible tags we have described in the table above.
 What is the best way to represent each of these on the form?  For **name**,
we want to create a text box, because the user can fill in any name that
they want for this tag.  For **utility:water, utility:phone,
and utility:internet**, there are four possible values that the user can
select from on our form, so the best way to add this is with a **combo
box** - that is, a dropdown menu where the user can select one of the
options.  The tag **utility:electrical** only has two possible values,
**yes** or **no**, so the best way to show this on our form is with a checkbox,
although we could use a dropdown box if we wanted as well.  When we are
finished our form should look like this:

![]({{site.baseurl}}/images/en_int_ch7_image06.png)

*  Open a text editor and follow along as we create the XML for this
preset.  A simple and common editor to use on Windows is called
Notepad.  DO NOT use a word processing program like Microsoft Word.

![]({{site.baseurl}}/images/en_int_ch7_image23.png)

*  First, we need to create a root element in our XML so that JOSM
knows it is a presets file.

![]({{site.baseurl}}/images/en_int_ch7_image03.png)

*  Next let’s create an element called <group>.  This is not actually
necessary because we are only creating one preset, but it will
demonstrate how we can create submenus with many different options
on our presets menu.  Don’t forget to add the closing tags
</group> and </presets> to your elements.

![]({{site.baseurl}}/images/en_int_ch7_image18.png)

*  Now we can create an item on our menu.  We want to create an
<item> element inside of the group element.  Add the following
text:
************
    <item name="Household"> 

    </item>
************
*  Inside the <item> element we will add the text box, combo boxes,
and check box that we want on our form.  Add the following inside
your <item> element:
***********
    <item name="Household">

      <key key="building" value="yes"/>

      <text key="name" text="Name" default="" 
      delete_if_empty="true" />

      <combo key="utility:water" text="Water Access" values="well,
      municipal, yes, no" default="" delete_if_empty="true"/>

      <check key="utility:electrical" text="Electricity Access" />

      <combo key="utility:phone" text="Phone Access" values="landline,
      mobile, yes, no" display_values="Landline Phone, Mobile Phone,
      Yes, No" />

      <combo key="utility:internet" text="Internet Access" values="landline, mobile, 
      yes, no" display_values="Landline Access, Mobile Internet Access,
      Yes, No" />

    </item>
***********
*  When you are finished your file will look like this:

![]({{site.baseurl}}/images/en_int_ch7_image02.png)

Much of this is similar to what you saw previously.  Let’s analyze it.Inside the < item> element we have created six more elements:

*  < key >
*  < text >
*  < combo >
*  < check >
*  < combo >
*  < combo >

Can you guess what each of these elements do?  They create different
items on our presets form in JOSM.  The first line, < key key="building" value="yes"/>, does not display anything on our form, but tells JOSM to
automatically apply the tag **building=yes** to our object when this preset is selected.

The second line, < text key="name" text="Name" default=""
delete_if_empty="true" />, creates a text field with the key **name**, as
we saw when we looked at the presets XML in the previous section.

We have three < combo> elements and each elements has several
attributes.  **key** indicates what key should be created for the tag.
 **text** indicates what text should be displayed on our form.  **values** are
the possible values that the user can select in the dropdown box.  And
we’ve added something new - the attribute **display_values**, which let’s
us show different text in the dropdown boxes than the values that will
be created.  This is useful if we want the form to be more descriptive
about the the options a user can select, or if we want the display
values to be in a different language from English.

Lastly, we’ve added one new element, a checkbox.  The code for this is
simple, < check key="utility:electrical" text="Electricity Access" />.
 This simple creates a check box on our form.  When it is selected, JOSM
will add a tag to our object that says **utility:electrical=yes**.

* Finally, let’s save the XML file so that we can load it into JOSM.
In Notepad, go to File --> Save.
* Type in household_access.xml as the filename.
* In the box that says “Save as type:” be sure to select “All Files”,
because we don’t want to save the file as a text document, but
rather as an XML document.
*  Click Save



​** 6.  Try It!**

Now let’s open our presets file in JOSM and see how it looks!

*  Open the Preferences in JOSM and go to Tagging Presets, as you did 
previously.
*  On the right side next to Active presets click on the + button.

![]({{site.baseurl}}/images/en_int_ch7_image16.png)

*  Type “Household Presets” into the Name field.
*  Next to URL / File, open the xml file that you just created.
*  Click OK, and OK again to save your preferences.
*  Restart JOSM.
*  Create a new layer and add a point.
*  Go to the presets menu.  You should see the menu that you just
created!

![]({{site.baseurl}}/images/en_int_ch7_image13.png)

Summary
-------

Congratulations!  You now know a lot about tags, presets, and how to
create your own presets XML.  Using what you have learned here, you
should be able to create extensive presets options to add all different
tags to your data.

We have covered most, but not all of the possible elements in a presets
file.  If there is something you want to create on your form that we
haven’t covered here, check out the following appendix for a more
complete list of the elements you can put into your Presets XML.

* * * * *

Appendix A - Presets XML Elements
---------------------------------

Here we list all of the elements you may need in your Presets XML.  This
is also described on the JOSM wiki at
[http://josm.openstreetmap.de/wiki/TaggingPresets](http://josm.openstreetmap.de/wiki/TaggingPresets).


​** 1.  Menu Elements**

These are the elements that form the skeleton of the preset menu.

![]({{site.baseurl}}/images/en_int_ch7_image24.png)

< group>  Used to group items in sub menus. name is required, icon is
an optional attribute.

< item>     Every item is one possible preset to select. name is
required, icon is optional attribute.

< separator/>  Inserts a line separator into the menu.


** 2.  Form Elements**

These elements specify the type of tag.  They categorise how labels are
grouped and how they appear in the menu.

* < label>  Static text to display on a form.  text is a required
attribute.

      <label text="select sport:"/>

![]({{site.baseurl}}/images/en_int_ch7_image04.png)

* < optional>  Used to group some optional elements of an item. Possibly
equivalent to < label text="Optional Attributes:"/>


      < optional>
       < combo key="boundary" text="Boundary type
       "values="administrative,national,civil, political" default=""
       delete_if_empty="true"/>

       < combo key="admin_level" text="Administrative level" 
       values="1,2,3,4,5,6,7,8,9,10" default=""
       delete_if_empty="true"> 
      < /optional>

![]({{site.baseurl}}/images/en_int_ch7_image01.png)

* < space/>  Add some space (ie a newline) in the preset display.
Possibly equivalent to < label text=" "/>

      <label text="Edit Address Interpolation"/><space/><combo
      key="addr:interpolation" text="Numbering scheme"
      values="odd,even,all,alphabetic" default="odd"/>

![]({{site.baseurl}}/images/en_int_ch7_image26.png)

* < link>  Specify a web link for this feature or to anything else of
use. The href attribute is required.

      <link href="http://wiki.openstreetmap.org/wiki/Proposed_
      features/House_numbers/Karlsruhe_Schema"/>

![]({{site.baseurl}}/images/en_int_ch7_image10.png)

* < text>  A text edit field to enter any arbitrary string from the user.
key is mandatory, text, default and required is optional.  Example:

      <text key="name" text="Name" default="" delete_if_empty="true" />

![]({{site.baseurl}}/images/en_int_ch7_image21.png)

* < combo>  Displays a multiple choice combo box. key and values are
mandatory and text, default, editable and required is optional. If
editable is true (default), combo boxes can be edited as if they were
text fields (additional to the drop down menu). Non editable combo boxes can only contain one of the specified values.

      <combo key="religion" text="Religion"
      values="bahai,buddhist,christian,hindu,jain,jewish,muslim,
      sikh,spiritualist,taoist,unitarian,zoroastrian" default=""
      delete_if_empty="true" />

![]({{site.baseurl}}/images/en_int_ch7_image08.png)

* < multiselect> Displays a list from which zero or more items can be chosen. key and 
values are mandatory, and text, default, delimiter, and required are
optional. The selected values will be concatenated with the specified
delimiter (default: semicolon) and written to the tag value. If a tag
value has already been set when the preset dialog is opened, the
multiselect will attempt to mark the appropriate items in the list as
select. If the tag value cannot be represented by a combination of
choices in the list, then the list will be disabled so that the user
cannot accidentally overwrite a custom value. In contrast to the "combo"
element, the "multiselect" expects the list of values, descriptions etc.
to use the specified delimiter, i.e. by default you will have to use a
semicolon. You can specify delimiter="," but then a comma will also be
used in the tag value.

      <text key="license_classes" text="License Classes"
      values="A1;A;B;BE;C" default="" delete_if_empty="true"
      />

![]({{site.baseurl}}/images/en_int_ch7_image14.png)

* < check> A checkbox which the user can only select or deselect. The key attribute
is mandatory. text, default and required is optional.                  

      <check key="fuel:diesel" text="Diesel" default="off"
      delete_if_empty="true"/><check key="fuel:biodiesel" text="Bio
      Diesel" default="off" delete_if_empty="true"/><check
      key="fuel:GTL_diesel" text="Diesel (Gas To Liquid - ultimate diesel)"
      default="off" delete_if_empty="true"/><check key="fuel:HGV_diesel"
      text="Diesel for Heavy Good Vehicles" default="off"
      delete_if_empty="true"/><check key="fuel:octane_91" text="Octane
      91" default="off" delete_if_empty="true"/><check
      key="fuel:octane_95" text="Octane 95" default="off"
      delete_if_empty="true"/><check key="fuel:octane_98" text="Octane
      98" default="off" delete_if_empty="true"/><check
      key="fuel:octane_100" text="Octane 100" default="off"
      delete_if_empty="true"/>

![]({{site.baseurl}}/images/en_int_ch7_image22.png)

* < key> key is always required, whether it be text, text combo or multi-select.
 If the value defined is present, the key will be set. If
value attribute is omitted, the key is removed.  In other words, <key>
does not add anything descriptive to the form.  It merely automatically
adds a tag when the preset is selected.  For example, if you click on
the building preset, the <key> tag automatically applies
“building=yes” to the object.  This tag sets a key to a specific value.

![]({{site.baseurl}}/images/en_int_ch7_image17.png)


**3.  Attributes**

Attributes of tags have the following meaning:



**name="a_name"**

Specify a display name for an item. This name will be shown in the
preset pop-up to display the tagging preset.

    Ex. < item name= “bridge”>

**name_context="context"**

This provides context for the name of an object. When there are multiple
objects with the same name this attribute provides clarity in labeling.
For example, motorcycle fuel stations are differentiated with car fuel
stations though this attribute.

    Ex. < item name="Gas_Station" name_context="Motorcycle”> OR < item
    name="Gas_Station" name_context="Car”>

**type="data_type"**

When this attribute is used, only objects of the given type can be
selected for that tagging preset.  Options include "node", "relation",
"way", "closedway" or any comma separated combination of them.

    Ex. < item name="Highway" type="way">

**icon="iconname"**

This guy specifies what icon will be used on the pop-up screen. The name
of the icon must be within a classpath in the subdirectory of
/images/symbols. You can load plugin-jar's to provide those images as
well. The image will be used as icon to display in the selection list
and when adding the preset to the toolbar. The icon should be quadratic
in size.

    Ex. < item name="Construction" icon="presets/construction.png"
    type="way">

Check out [http://mapbox.com/maki/](http://mapbox.com/maki/) for mapping
icons.

**key="some_key"**

This specifies the property key that will be modified by the item.

    Ex. < key key="junction" value="roundabout" /> OR < check key="tunnel"
    text="Tunnel" default="off" /> < key key=>, < text key= >, 
    < check key= >, < combo key= >

**text="Any text"**

This text is the description that will be displayed before (after in
case of < check>) the item (checkbox, multi-select option, etc).

    Ex. < check key="lit" text="Lit" default="off" delete_if_empty="true"/>

    < check key="oneway" text="Oneway" default="off"
    delete_if_empty="true" />

    < combo key="foot" text="Foot" values="yes,designated,official,no">

    < label_text= >

**text_context="context"**

Like name_context, this attribute provides translation context. It
separates text attributes that use the same words but have different
meanings (not required for in-file translations).

    Ex. < combo key="fuel" text="Fuel" text_context="grill">
    values="charcoal,electric,wood" OR < label text="Edit Goods"
    text_context="aerialway" />

**default="default_value"**

The default value for an item. If not specified, the current value of
the key is chosen as default (if applicable). Most often, the default
can be < default=” ” >

    Ex. < combo key="parking" text="Type"
    values="multi-storey,surface,underground" default="surface"
    delete_if_empty="true" /> OR < combo key="park_ride" text="Park and
    Ride" values="yes,no" default="" delete_if_empty="true" />

**delete_if_empty="true"**

If the text (or combo) box is left empty, the key is removed instead
inserting an key with empty value. Default is "false".

    Ex. < combo key="fee" text="Fee" values="yes,no" default=""
    delete_if_empty="true" /> OR < check key="motorroad" text="Motorroad"
    default="off" delete_if_empty="false" /> (This is unnecessary because 
    default is false... )

**values="entry1,entry2,entry3"**

A list of entries (for the combo box and multiselect). The list has to
be separated by commas (for the combo box) or by the specified delimiter
(for the multiselect). If a value contains the delimiter, the delimiter
may be escaped with a backslash. If a value contains a backslash, it
must also be escaped with a backslash.

    Ex. < combo key="surface" text="Surface"
    values="paved,unpaved,asphalt,concrete,metal,wood,paving_stones,cobblestone,
    gravel,pebblestone,compacted,grass_paver,grass,sand,ground">

**values_context="context"**

Translation context for name attribute to separate same words with
different meanings (not required for in-file translations).

    Ex. < combo key="location" text="Location"
    values="underground,underwater,overground" values_context="pipeline"
    default="" delete_if_empty="true" />

**display_values="Entry1,Entry2,Entry3"**

A list of entries that is displayed to the user. Must be the same number
of entries as values and editable must be false or not specified. For
the delimiter character and escaping, see the remarks at values.

**value="value"**

Specify a value to be entered in the < key> tag.

    Ex. < key key="man_made" value="crane" />

**value_on="true_value"**

Specify the true value to be entered in the < key> tag (default is
"yes").

value_on: the value to set when checked (default is "yes")

**value_off="false_value"**

Specify the false value to be entered in the < key> tag (default is
"no").

value_off: the value to set when unchecked (default is 'no')

**editable="false"**

The combo box is read only, which means that the user can only select an
item in the list.

use_last_as_default="true"

For combo boxes or text fields the last value is used as default. Using
"force" enforces this behaviour also for already tagged objects.

    Ex. < text key="addr:street" text="Street name"
    use_last_as_default="true" delete_if_empty="true" /> OR

    < text key="addr:city" text="City name" use_last_as_default="true"
    delete_if_empty="true" /> OR < text key="addr:postcode" text="Post
    code" use_last_as_default="true" delete_if_empty="true" /> OR

    < combo key="addr:country" text="Country code"
    values="AT,CH,DE,FR,GB,IT,US" use_last_as_default="true"
    delete_if_empty="true" />

**required="true"**

Preset is not valid unless value for this key is entered. Used by
Properties Dialog to show list of presets for selected object.

    Ex. < combo key="bridge" text="Bridge"
    values="yes,viaduct,swing,aqueduct" required="true" default="yes" />

**rows="count"**

    < check key="payment:coins" text="Coins" default="off"
    delete_if_empty="true" />

Specifies the number of rows in multiselect entry.

    Ex. < text key="note" text="Note" default="" delete_if_empty="true"
    rows=“2” />^[[d]](#cmnt4)^
