---
layout: doc-rtl
title: Aerial Imagery
permalink: /ar/josm/aerial-imagery/
lang: ar
category: josm
---

الصور الجوية
================

> تمت المراجعة 2015-09-21  

تتبع الصور هو وسيلة سهلة وقوية للمساهمة في OSM. يُسمى استخدام الصور لرسم النقاط والخطوط والأشكال على الأرض **الرقمة**. ويمكن في كثير من الأحيان فصلها عن فعل جمع بيانات السمة على الأرض، والتي غالبا ما تسمى **الأرض الحقيقة**. يمكن أن توفر الرقمنة الصور الهيكلية لخرائط OSM، مما يجعل عملية البحث عن الأراضي في أرض الواقع أسهل للأشخاص في هذا المجال. في هذا الفصل سوف نتعلم أكثر عن كيفية عمل الصور الجوية.  

نبذة عن الصورة ( الجوية )
-------------

الصور الجوية هي المصطلح الذي نستخدمه لوصف الصور التي يتم التقاطها من السماء. ويمكن أخذ هذه الصور من الطائرات، الطائرات بدون طيار، المروحيات، أو حتى الطائرات الورقية والبالونات، ولكن المصدر الأكثر شيوعا للصور يأتي من الأقمار الصناعية التي تدور حول الأرض.  

[في الفصل المتعلق بنظام تحديد المواقع العالمي] (/en/mobile-mapping/using-gps) تعلمنا عن عشرات الأقمار الصناعية التي تدور حول الأرض والتي تسمح لمستقبلنا بتحديد خطوط الطول ودوائر العرض لدينا. وبالإضافة إلى أقمار الـGPS الصناعية هذه ، هناك أيضا أقمار تلتقط صور للأرض.  هذه الصور يتم التعديل عليها لاحقا بحيث يمكن استخدامها في برنامج GIS (برنامج رسم خرائط). تتكون صور Bing الجوية من صور أقمار صناعية.  

الدقة
----------

جميع الصور الرقمية تتكون من بكسل. إذا قمت بالتكبير جيدا على صورة، ستلاحظ بعض الضباب على الصورة، وفي نهاية المطاف سترى أن الصورة تتكون من الآلاف من المربعات الصغيرة كل بلون مختلف. هذا صحيح ما إذا كانت الصورة مأخوذة بكاميرا محمولة باليد، هاتف محمول أو قمر صناعي يدور حول الأرض.  

![دقة الصورة][]

Resolution refers to the number of pixels wide by the number of pixels high that an image is.  More pixels means higher resolution, which means that you are able to see greater detail in the photograph.  Resolution in handheld cameras is often measured in megapixels.  The more megapixels your camera is able to record, the higher the resolution of your photos.  

Aerial imagery is the same, except that we usually talk about resolution differently.  Measurement is important with aerial photographs - hence, a pixel represents a certain distance on the ground.  We usually describe imagery as something like “two meter resolution imagery,” which means that one pixel is equivalent to two meters on the ground.  One meter resolution imagery would have a higher resolution than this, and 50cm resolution would be higher still.  This is generally the range of imagery that is provided by Bing, though it varies between locations, and in many places it is worse than two meters, at which point it becomes difficult to identify objects in the image.  

![Comparison of low and high resolution imagery][]

كلما زادت دقة الصورة الجوية، كان من الأسهل استخدامها في صنع الخرائط.  

الإسناد الجغرافي
---------------

كل بكسل من صورة جوية لها حجم، ولكل بكسل أيضا موقع. وكما ذكرنا أعلاه، يرجع ذلك إلى أن الصور هي صور جغرافية مرجعية.  

تماما كما لنقطة GPS خط طول ودائرة عرض، نفس الشيء لبكسلات في الصورة الجوية. ومع ذلك، كما قد تتسبب الصور ضعيفة الجودة في جلب تحديات أثناء رسم الخرائط، قد تجلبها الصور ذات المرجعية الجغرافية السيئة كذلك.  

Let's think for a moment about how georeferencing works, and why it is challenging to do. When somebody georeferences an image, they first identify a handful of pixels in the image that are known locations. If we have a square photograph, we might identify the coordinates of all four corners, and that way the whole image can be correctly placed.  

This all seems quite simple, but consider this: Earth is round; camera lenses are round; yet photographs are flat and 2-dimensional. This means that when a flat image is being mapped onto the round Earth, there is always going to be some stretching of the image and distortion. Imagine trying to flatten an orange-peel. It won't end up rectangular. Because of this problem, all of the pixels in an aerial image might not be perfectly placed.  

Luckily, some really smart people have devised clever algorithms for solving this problem, and so the imagery that you see on Bing is pretty close to being accurate. In most places it won't be noticeably wrong at all - and it's certainly fine for making maps. The most common areas for imagery to be inaccurately located are in hilly, mountainous areas. In the [Correcting Imagery Offset chapter](/en/josm/correcting-imagery-offset) we will see how to correct for this problem.  

[دقة الصورة]: /images/josm/orange-resolution.png
[مقارنة الصور ذات الدقة المنخفضة والعالية]: /images/josm/low-res-high-res.png