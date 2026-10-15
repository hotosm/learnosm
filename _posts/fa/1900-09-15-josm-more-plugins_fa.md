---
layout: doc-rtl
title: افزونه‌های Building Tools و Utilsplugin2 در JOSM
permalink: /fa/josm/josm-more-plugins/
lang: fa
category: josm
---

افزونه‌های Building Tools و Utilsplugin2 در JOSM
============


افزونه‌های **buildings_tools** و **utilsplugin2** عملکردهای بسیار عالی به JOSM اضافه می‌کنند. در این بخش نگاه نزدیک‌تری به قابلیت‌های آن‌ها می‌اندازیم.  

افزونهٔ Buildings Tools
--------------------------

اگر قبلاً نصب نکرده‌اید، با دنبال‌کردن دستورالعمل در [افزونه‌های JOSM](/fa/josm/josm-plugins) آن را نصب کنید.  

![Buildings tools plugin][]

افزونهٔ Buildings Tools برای دیجیتالی‌کردن ساختمان‌ها بسیار مفید است. با این افزونه می‌توانید یک ضلع ساختمانی مستطیل‌شکل را رسم و به‌آسانی شکل آن را گسترش دهید. اگر ساختمان‌های زیادی را دیجیتالی می‌کنید، این افزونه تعداد کلیک را کاهش می‌دهد و درنتیجه در زمان شما صرفه‌جویی می‌کند.  

به‌محض نصب افزونه، دکمهٔ جدیدی در سمت چپ JOSM می‌بینید که شبیه به این است: ![Buildings tools button][]{: height="29px"}

JOSM را باز کنید و ناحیه‌ای را که می‌خواهید ساختمان‌هایش را بکشید دانلود کنید.  

### Rectangular Buildings

* ابزار ساختمان را انتخاب کنید و دو بار کلیک کنید تا یک خط روی نقشه بکشید.  

![Draw edge][]

* سپس ماوس را حرکت دهید و دوباره کلیک کنید تا یک مستطیل کشیده شود.  

![Extend building][]

* با این کار نه‌تنها مستطیل را فقط با سه کلیک ایجاد می‌کنید، بلکه به‌طور خودکار برچسب **building=yes** نیز به شکل داده می‌شود.  

### Circular Buildings

* In "More tools"->"Draw building modes" select "Set building shape to circle" or use the shortcut ALT+Z (when switchitng back to drawing rectangular buildings use ALT+R). Then draw the diameter of the building.

![Round building][]

### ساختمان‌های پیچیده

همچنین می‌توانید ساختمان‌هایی که شکلی پیچیده دارند را رسم کنید. برای این کار ابتدا چند ساختمان هم‌پوشان رسم کنید و سپس آن‌ها را با هم ادغام نمایید.  

* دو ساختمان که با هم هم‌پوشانی داشته باشند بکشید به‌طوری که شکلی L-مانند بسازند.  
* هردو ساختمان را انتخاب کنید (برای انتخاب چند چیز، کلید SHIFT را نگه دارید).  
* به Tools ->‏ Join overlapping Areas بروید یا SHIFT+J را از صفحه‌کلید بزنید.  

![Merge buildings][]

### ویرایش تنظیمات

علاوه بر این، می‌توانید تنظیمات پیش‌فرض افزونه را تغییر دهید.  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* چنانچه ساختمان‌های زیادی با شکل و اندازهٔ یکسان ایجاد می‌کنید، می‌توانید طول و عرض ساختمان‌ها را مشخص کنید، مثلاً ۶×۱۰ متر (واحد به متر است).  

![Set buildings size dialog][]

* با تعیین اندازهٔ ساختمان، برای رسم آن ساختمان‌هایی با اندازهٔ دقیق، فقط به دو کلیک نیاز دارید.  

در نهایت، اگر می‌خواهید یک سری تگ پیش‌فرض اضافه کنید که به‌طور خودکار برای هر ساختمان به کار رود، می‌توانید روی دکمهٔ 'پیشرفته' (Advanced) کلیک کنید. به‌عنوان مثال، اگر همهٔ ساختمان‌هایی که ترسیم می‌کنید در یک خیابان قرار دارند، می‌توانید یک برچسب اضافه کنید که خیابان را مشخص کند و به‌صورت خودکار به همهٔ ساختمان‌ها اعمال شود.  

![Buildings advanced][]


Utilsplugin2
-------------

اگر قبلاً نصب نکرده‌اید، دستورالعمل نصب را در [افزونه‌های JOSM](/fa/josm/josm-plugins) دنبال کنید.  

![Utilsplugin2 plugin][]

پس از نصب افزونه و راه‌اندازی مجدد JOSM، در بالا یک منوی جدید به نام «ابزارهای بیشتر» (More Tools) خواهید داشت.  

![More tools menu][]

لایهٔ جدیدی ایجاد کنید و برخی از ابزارهای جدید را آزمایش کنید. در اینجا برخی از مفیدترین ابزارهای جدید را شرح می‌دهیم:  

1. **افزودن گره در تقاطع‌ها:** این ابزار برای اضافه‌کردن گره‌های فراموش‌شده در تقاطع راه‌های انتخاب‌شده بسیار مفید است. جاده‌ها همیشه باید در جایی که هم را قطع می‌کنند یک گره مشترک داشته باشند.  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **اضافه‌کردن تگ منبع:** این ابزار افزودن تگ منبع را ساده می‌کند. این عملکرد منبعی را که آخرین بار مشخص شده به خاطر می‌سپارد و آن را به اشیا اضافه می‌کند. می‌توانید منبع را تنها با یک کلیک درج کنید.  

4. **جانشین‌کردن هندسه:** (Replace Geometry) اگر می‌خواهید یک شیئی که بد رسم شده را دوباره بکشید، اما مایلید تاریخچه، مشخصات و شناسهٔ آن شی را نگه دارید، این ابزار فوق‌العاده است. برای مثال، اگر به یک ساختمان پیچیده بر بخورید که رسم ضعیفی دارد، به‌جای اینکه یکی‌یکی هر گره را ساختمان را با مشقّت جابه‌جا کنید، می‌توانید آن شی را از اول ترسیم کنید، سپس شیء قدیمی و جدید را انتخاب کنید و Replace Geometry را بزنید تا همهٔ اطلاعات قبلی منتقل شود.  

    ![Replace geometry][]


### ابزارهای انتخاب بیشتر

**Utilsplugin2** ابزارهای بیشتری را در منوی «انتخاب» (Selection) ارائه می‌کند. آن‌ها را امتحان کنید.  

![Selection menu][]

یکی از ابزارهای انتخاب موردعلاقهٔ ما **Unselect Nodes** است. این ابزار تمام گره‌ها را از انتخاب در می‌آورد. زمانی که کادری برای انتخاب چندین شی می‌کشید اما نمی‌خواهید گره‌های موجود در تمام خطوط و اشکال را انتخاب کنید، این عملکرد بسیار مفید است.  

![Unselect nodes][]

موفق باشید!  


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

