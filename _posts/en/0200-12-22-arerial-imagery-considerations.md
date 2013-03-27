---
layout: doc
title: Using Aerial Imagery
permalink: /en/beginner/aerial-imagery/
lang: en
category: beginner
---

Using Aerial Imagery
====================

Tracing over imagery is both an easy and powerful way to contribute to
OSM. Especially when resolution is high and skies are clear, digitizing
from satellite imagery can provide the skeleton of OSM maps. This is
useful because it makes ground-truthing, or gathering attribute data,
easier for people in the field.

Nonetheless, tracing from imagery requires some precautions so that
objects are not placed in the wrong location. There are two important
aspects that must be considered when tracing from imagery:

1.  Resolution: The resolution refers to the detail of imagery or the
    number of pixels from which the image is comprised. A pixel is the
    smallest unit of an image. The smaller the area of the pixel the
    better the resolution. With smaller pixels you are able to
    distinguish between objects on earth better, as evidenced by
    the figure below. On the left is an image with low resolution, and
    fewer pixels per image. It is hard to distinguish the puzzle piece
    because a majority of the image is considered part of the puzzle
    piece. On the other hand, the image on the right with high
    resolution has smaller pixel units and therefore enables the puzzle
    piece to be much
    more distinguishable. In OSM, you are most likely to be able to use
     high resolution imagery. Satellite civil imagery offers
    resolution under “1 meter”, which means each pixel of the imagery
    represents a one meter squared. That is pretty good!

    ![puzzle][]

2.  Georeference: Georeference is a term for how closely the imagery’s pixels match the
    actual locations on the ground. This matching is a relatively complex process,
    and the greater the terrain variation and relief, the harder it is to achieve a good
    georeference. Satellites are hundreds of kilometers from the
    surface of the earth and when they take flat pictures to represent
    the curved earth there is bound to be some distortion and offset. The 
    fact that some of the images are taken at an angle to the surface of the earth
    complicates this process, especially when looking at buildings.
    The existence of offsets is shown slightly when you move between two
    images covering the same area, e.g. when you zoom in and the former
    displayed layer replaces another one with better resolution. Can you
    see shifts in the objects displayed in the imagery?

To get an idea of why the offset occurs imagine taking a picture of a
statue with a wide-angle lens and printing it. Now try to deform and stretch it so that it
matches the actual shape of the statue. This is what occurs when georeferencing
imagery.

Satellites are being built with progressively greater
imagery precision and therefore extremely accurate resolution (the unit
is often in centimeters). On the other hand, the georeference provided by
satellites is still off. The amount of mismatch is still described in 
units of meters. A 5-10 m georeference mismatch is considered good.

In summary, when you are trying to map an area accurately based on satellite
imagery, keep in mind that high resolution is not the only
aspect that permits good location. Almost all objects in the image are
offset from the ground location.

There are ways that you can minimize the imprecision of the imagery
offset. You will be exposed to two main scenarios and methods for
overcoming imagery offset:

1. you want to trace over imagery in an area that has already been
mapped in OSM

2. you want to trace over an imagery in an area where there is no
existing data in OSM

Offsets with existing data in OSM
---------------------------------

Sometimes after downloading OSM data, adding the imagery, and zooming
into the best resolution, you realize that the existing OSM data,
especially roads, does not correctly overlay the imagery objects.

![existing data][]

Many OSM beginners believe that the roads have been traced incorrectly
and thus move the roads to what appear to be the better location. Moving
the road may be completely __WRONG__! There is a possibility instead that the
imagery is poorly aligned in comparison to the reality in the field.

A way to check or prove that the imagery is offset is through using GPS
tracks. To do so, add __existing GPS tracks__ (yours or
other people's-- more information on how to do this can be found in
[Adding](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[GPS](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[Data](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[to](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[OSM](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[server](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit))
to the area you are tracing. Click on
![download][] then tick «Raw GPS
data» near the top in the «Download» window. After downloading, an
additional layer «Downloaded GPX data» will appear.

![downloaded GPX][]

In this example, with the GPS tracks (in red) added you can see that the
existing objects (here: the roads) are positioned correctly. The imagery is
actually not correctly georeferenced, and has an offset in comparison
with the reality. It has to be adjusted.

> Do not be confused that the tracks appear like a sequence of
> lines and not one solid line. Most GPS devices have a 2-5 m accuracy,
> which is sufficient for roads because you do not drive or walk in the
> middle of the road. Try to imagine an average GPS trace somewhere in the
> middle of the existing lines.

To offset imagery, right-click the imagery layer or menu «Imagery», open
«New offset», or use the imagery adjust button
![adjust button][] in left toolbar. Then
drag the imagery so that it is correctly overlaid by the tracks. Click
on another tool when it is over. Note that for some projects people will
save offset information to the wiki or other sources so that people
working together on areas can share common values. You can also give the
offset a “Bookmark name” if you need to use it again in the future. This
offset is saved in a new “Imagery offset” menu available from the
imagery drop-down.

![adjust window][]

![downloaded GPX][]

Now that the imagery is adjusted you can trace over it. While mapping
you can hide the layer «Downloaded GPX data» if it interferes with your
work.

![adding to existing data][]

One last thing to remember: the offset might not be the same over the full
extent of the imagery! This is especially true in regions with a marked
relief. So when the imagery seems to be offset again, repeat the whole
process.

Offsets with no existing data in OSM
------------------------------------

It may happen that you are the first one to OSM map an area, e.g. in
remote rural areas or in developing countries. Therefore, neither
existing OSM data nor GPS tracks can be downloaded.

![no data][]

How can you deal with this since you do not have any reference to
control the offset of the imagery? There are two ways around this:

1.  Go into the field: If you or others have the possibility to use a GPS in the
    area, take waypoints on significant infrastructure or objects that
    are visible on the imagery and/or make tracks of the roads,
    then add them in JOSM.

2.  Use existing data: If you cannot go into the field then another
    option is to gather other __Open Database License data (ODbl)__
    If you can it is best to check the imagery with another image that
    is correctly aligned. If you are offsetting an image based on
    another one, using transparency is the easiest way. To do this,
    simply click the gradient line and change the opacity of the layer.

    ![change opacity][]

Usually administration imagery has poor resolution, over ten meters of
resolution, and so might be worse than the previous image.

If you have access to vector data, roads, lakes, rivers and buildings
are your best options for determining how offset your imagery is. Try to
stay away from boundary lines because those are not reliable for
figuring out if imagery is misaligned.

Summary
-------

Tracing imagery is a technique that makes mapping in OSM faster and more
efficient. However, it must be done with precision and care. There are
times when you are digitizing an area and the imagery itself may be off.
Whether it be through poor resolution or poorly georeferenced imagery,
there are ways you can deal with inaccurate imagery. They mainly involve
referencing imagery with GPS traces and tracks.

[puzzle]: {{site.baseurl}}/images/offset_puzzle_en.png
[existing data]: {{site.baseurl}}/images/offset_existing_data_en.png
[download]: {{site.baseurl}}/images/offset_tool_download_en.png
[downloaded GPX]: {{site.baseurl}}/images/offset_downloaded_gpx_en.png
[adjust button]: {{site.baseurl}}/images/offset_tool_adjust_en.png
[adjust window]: {{site.baseurl}}/images/offset_adjust_window_en.png
[adding to existing data]: {{site.baseurl}}/images/offset_add_to_data_en.png
[no data]: {{site.baseurl}}/images/offset_no_data_en.png
[change opacity]: {{site.baseurl}}/images/offset_change_opacity_en.png
