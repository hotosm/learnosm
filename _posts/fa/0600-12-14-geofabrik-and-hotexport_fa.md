---
layout: doc-rtl
title: استفاده از برون‌بردهای Geofabrik و HOT
permalink: /fa/osm-data/geofabrik-and-hot-export/
lang: fa
category: osm-data
---

استفاده از برون‌بردهای Geofabrik و HOT
================

> تاریخ بازبینی ۱۳۹۵/۰۶/۱۵  

پس از اینکه نحوهٔ اضافه‌کردن و ویرایش داده در OpenStreetMap (OSM) را آموختیم، اکنون شاید مایل باشید که داده را دریافت کنید تا از آن پشتیبان بگیرید یا آن را با استفاده از نرم‌افزار سیستم اطلاعات جغرافیایی منبع‌بازی مانند [Quantum GIS](http://www.qgis.org) پردازش کنید.  

گرفتن دادهٔ OSM در وبسایت Geofabrik
-------------------------------------

دادهٔ OSM را می‌توان به‌راحتی با دانلود از [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/) به دست آورد.

![download-geofabrik][]

داده به چندین منطقه تقسیم می‌شود. اندونزی کشوری در آسیاست، پس روی منطقهٔ Asia در جدول آبی کلیک می‌کنیم و سپس صفحه‌ٔ آسیا به شکل زیر ظاهر می‌شود:  

![geofabrik-asia][]

بعد از ظاهرشدن در بالای صفحه، می‌ببینید که این ناحیه به کشورهای آسیا تقسیم شده است. برای دریافت داده، باید روی کشور اندونزی در جدول آبی کلیک کنید، و سپس چیزی شبیه این دیده می‌شود:  

![geofabrik-indonesia][]

سپس اگر می‌خواهید دادهٔ اندونزی را در قالب شیپ‌فایل (‎.shp) به دست آورید، روی لینک indonesia-latest.shp.zip کلیک کنید و فایل دانلود می‌شود. چندین قالب برای دانلود وجود دارد. یکی از قالب‌های محبوب، شیپ‌فایل (shp) با لایهٔ points،‏ polyline و polygon است.  

می‌توانید آخرین زمان به‌روزرسانی داده را بررسی کنید. لطفاً توجه داشته باشید که کارساز معمولاً داده را هر ۲۴ ساعت یک بار به‌روز می‌کند، بنابراین اگر به‌تازگی داده‌ای را به OSM آپلود کرده‌اید، هنگامی که آن را دانلود می‌کنید به‌طور خودکار نمایش داده نمی‌شود بلکه می‌بایست منتظر آخرین به‌روزرسانی کارساز (Server) بمانید.  

گرفتن دادهٔ OSM در وبسایت HOT Export Tool
--------------------------------------

[تیم بشردوستانهٔ OpenStreetMap](https://www.hotosm.org/) ‏(HOT) یک سرویس آنلاین ایجاد کرده که به کاربران اجازه می‌دهد گزیده‌های (extracts) دلخواه از OSM را برای هر نقطه از جهان با انتخاب منطقهٔ موردنظر، عارضه‌های نقشه و قالب‌های فایل ایجاد کنند. در عرض چند دقیقه، دادهٔ روزآمد OSM برون‌برد، پالایش و تبدیل می‌شود. بخش زیر چگونگی استفاده از ابزار برون‌برد (Export Tool) را به شما آموزش می‌دهد. این اطلاعات را می‌توانید از بخش [Learn](https://export.hotosm.org/en/v3/learn) در export.hotosm.org نیز پیدا کنید.

![hot-export-tool][]

## شروع سریع

هر شخصی می‌تواند با استفاده از Export Tool یک خروجی سفارشی از OpenStreetMap ایجاد کند؛ فقط یک حساب کاربری ثبت کنید. می‌توانید با حساب OpenStreetMap از openstreetmap.org نیز ثبت‌نام کنید و یک نشانی ایمیل معتبر ارائه کنید که از آن برای ارسال لینک فایل برون‌بُرده پس از تکمیل، استفاده می‌شود.

## شناسایی منطقهٔ موردنظر

در Export Tool چندین روش برای انتخاب منطقهٔ موردنظر (AOI) وجود دارد. شامل: تایپ و جستجو، مشخص‌کردن مختصات یک کادر محصورکننده، کشیدن کادر محصورکننده، رسم آزاد یک چندضلعی، استفاده از نمای فعلی یا آپلود یک فایل geojson.

![export-tool-create][]

هنگامی که در ابزار HOT Export Tool «ثبت ورود» (log in) زدید، زبانهٔ Create در دسترس قرار خواهد گرفت. زبانهٔ Create جایی است که برون‌برد خود را تنظیم می‌کنیم. برای این منظور، آن را در سمت چپ توصیف کنید و سپس AOI خود را از نقشهٔ سمت راست انتخاب نمایید. 

![export-tool-describe][]

### نوار جستجو
شش روش برای تعریف AOI برای برون‌برد وجود دارد. در اولین و دومین مورد از نوار جستجو استفاده می‌شود که می‌توان یک محل را با نوشتن نام آن و انتخاب آن از گزینه‌های زیرینش یا با تعیین مختصات کادر محصورکننده پیدا کرد. مختصات‌های minimum X،‏ minimum Y،‏ maximum X و maximum Y (غرب، جنوب، شرق، شمال) از یک کشور را می‌توان در [لیست CSV ارائه‌شده توسط Humanitarian Data Exchange ‏(HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries) پیدا کرد.

![export-tool-search][]
![export-tool-coordinates][]


### دیجیتالی‌کردن 
روش سوم و چهارم برای انتخاب AOI در Export Tool، به یکی از این روش‌ها انجام می‌شود: کشیدن یک کادر محصورکننده با انتخاب گزینهٔ Box از ستون ابزارهای سمت راست صفحه، یا با انتخاب ابزار Draw و رسم آزادانهٔ یک چندضلعی مستقیماً روی نقشه.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### آپلود چندضلعی
دو روش آخر که در آن یک AOI را می‌توان انتخاب کرد، از طریق ابزار This View (این نما) در سمت راست نقشه است که محدودهٔ نمای فعلی نقشه را دریافت می‌کند، یا با ابزار Import (درون‌برد) که شما را قادر می‌سازد تا چندضلعی منطقه را آپلود کنید.  

![export-tool-area-view][]
![export-tool-area-import1][]


چندضلعی درون‌بردی باید یک فایل GeoJSON در مختصات جغرافیایی WGS84 باشد. یکی از راه‌های ایجاد فایل GeoJSON این است که از سایت geojson.io استفاده کنید. هنگامی که منطقه در [geojson.io](http://geojson.io/) انتخاب شد، متن موجود در کادر سمت راست را کپی کنید و در یک ویرایشگر دلخواه، مانند [Atom](https://atom.io/)، درج کنید و فایل GeoJSON خود را ذخیره نمایید.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


برای اینکه Export Tool فایل GeoJSON را بپذیرد باید کمی آن را ویرایش کرد. لطفاً توجه داشته باشید که این فایل نمی‌تواند multipolygons باشد. این فایل در ساده‌ترین شکل فقط باید بیان کند که یک type: Polygon است و مختصات نقاط/گره‌های شناسانندهٔ منطقه را لیست کند. سپس فایل GeoJSON توسط ابزار، تجزیه و خوانش (Parse) می‌شود و برای تعیین AOI استفاده می‌گردد.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## انتخاب قالب‌های فایل

این ابزار اجازه می‌دهد تا دادهٔ OSM پیش از پالایش داده برای عارضه‌های نقشه و تگ‌های مشخص‌شده از سوی کاربر، از طریق Overpass API در قالب فایل بومی‌اش، یعنی (Protocol Buffer Binary (PBF، استخراج شود. به‌محض اینکه داده پالایش شد، داده به قالب‌های انتخابی کاربر تبدیل می‌شود.  

در حال حاضر این ابزار می‌تواند دادهٔ OSM را به این قالب‌ها تبدیل کند: Shapefile .shp -‏ GeoPackage .gpkg -‏ Garmin .img -‏ Google Earth .kml -‏ OSM .pbf -‏ MAPS.ME .mwm -‏ OsmAnd .obf و MBTiles .mbtiles. حداقل یکی از قالب‌های فایل باید انتخاب شود تا برون‌برد انجام شود، اما هیچ محدودیتی برای انتخاب چندگانه وجود ندارد و می‌تواند با تیک‌زدن چندین کادر انجام شود.

![export-tool-file-formats][]


### Shapefile .shp
Shapefile یک قالب جدولی است که Esri آن را ساخته است. شیپ‌فایل محبوب‌ترین قالب فایل برای دادهٔ GIS است. هر شیپ‌فایل در واقع ۳ تا ۴ فایل جداگانه است که معمولاً در یک آرشیو ZIP با هم جمع شده‌اند. Shapefileها محدودیت‌های خاصی از قبیل اندازهٔ فایل، که حداکثر ۲ گیگابایت باید باشد و محدودیت ۱۰ نویسه‌ای برای طول نام ستون دارند. دربارهٔ [Shapefile .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) در بخش Learn بیشتر بخوانید.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackage دادهٔ مکانی را در یک پایگاه‌دادهٔ SQLite تکی ذخیره می‌کند. Geopackageها بسیار شبیه به پایگاه‌داده‌های SpatiaLite-enabled SQLite هستند. این‌ها در بسیاری از کاربردهای عمدهٔ GIS باید قابل‌استفاده باشند. Geopackageها در عمل از حجم نامحدود فایل و تعداد نامحدود ستون در جداول پشتیبانی می‌کنند و پشتیبانی کاملی از یونیکد دارند. این فایل‌ها به‌خصوص ایدئال هستند اگر بخواهید روی داده پرس‌وجوهای SQL اجرا کنید. در بخش Learn دربارهٔ [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) بیشتر مطالعه کنید.

![export-tool-sql][]


### Garmin .img
هر فایل ‎.IMG شامل تمام اطلاعاتی است که برای رندر نقشه روی دستگاه همراه GPS گارمین موردنیاز است. لطفاً توجه داشته باشید که سبک نقشه‌نگاری ‎.img و انتخاب عارضه‌های نقشه، به عارضه‌های انتخاب‌شده در Export Tool وابسته نیست، بلکه یک سبک (style) پیشفرض بر اساس تمام دادهٔ OSM استفاده می‌شود. در بخش Learn دربارهٔ [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) بیشتر بخوانید.

![export-tool-garmin][]


### Google Earth .kml
Keyhole Markup Language یا KML به معنی زبان نشانه‌گذاری Keyhole یک قالب مبتنی بر XML برای مدل‌سازی جغرافیایی نقطه‌ها، خط‌ها، چندضلعی‌ها و مشخصه‌های مرتبط است. Google Earth شناخته‌شده‌ترین پلتفرم کاوشگر نمای زمین است که از KML استفاده می‌کند، که علت ساخت آن هم همین است. دربارهٔ [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) در بخش Learn بیشتر بخوانید.

![export-tool-google-earth][]


### OSM .pbf
قالب دادهٔ استاندارد OSM یک سند XML از گره‌ها، راه‌ها و رابطه‌هاست. قالب Protocol Buffer Binary Format ‏(PBF) نمایشی بهینه از OSM XML است که روی دیسک حجم کم‌تری می‌گیرد و سریع‌تر خوانده می‌شود. این قالب فقط با ابزارهای خاص OSM، مانند نرم‌افزار ویرایش OSM، سازگار است. هر فایل PBF‎. که ابزار برون‌برد ارائه می‌کند باید بر اساس ارجاع‌ها کامل باشد، یعنی هر گره، راه یا رابطه‌ای که یک راه یا رابطه به آن ارجاع می‌دهد، باید در PBF ظاهر شود. دربارهٔ [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) در بخش Learn بیشتر بدانید.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me یک برنامهٔ ناوبری GPS و نقشه برای گوشی‌های هوشمند و تبلت‌های Android و iOS است، که به‌ویژه از نقشه‌کشی و ناوبری آفلاین پشتیبانی می‌کند. دربارهٔ [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) در بخش Learn بیشتر بخوانید. برای استفاده از یک برون‌برد سفارشی در Maps.me روی اندروید، لطفاً این مراحل را دنبال کنید:
* Maps.me را باز کنید و به منطقهٔ موردنظر خود بروید
* درخواست Maps.me را بپذیرید و منطقهٔ پیشنهادشده را دانلود کنید
* Maps.me را ببندید
* یک برون‌برد MWM بسازید
* فایل برون‌بُرده را دانلود کنید، آن را از حالت فشرده خارج کنید و فایل ‎.mwm را به دستگاه خود کپی کنید
* با استفاده از مدیر فایل اندروید (File Manager)، به مکان حاوی فایل ‎.mwm بروید
* انگشت خود را روی آن نگه دارید و سپس دکمهٔ «کپی» (copy) یا «برش» (cut) را بزنید
* به MapsWithMe بروید و پوشه با بالاترین رقم را باز کنید (به‌عنوان مثال 170917)
* با زدن روی دکمهٔ «چسباندن» (paste)، فایل ‎.mwm خود را به این پوشه کپی/منتقل کنید
* فایل ‎.mvm فعلی برای منطقهٔ موردنظرتان را حذف کنید و نام فایل آن را یادداشت کنید
* فایل ‎.mwm خود را تغییر نام دهید تا نام آن مطابق نام فایلی شود که خود Maps.me برای آن منطقه دانلود کرده بود (و لحظاتی پیش آن را حذف کردید). برای این کار روی نام فایل انگشت خود را نگه دارید (تا انتخاب شود) و سپس با زدن دکمهٔ «بیشتر» (سه نقطه روی هم) تغییر نام را انتخاب کنید.
* Maps.me را باز کنید

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd نیز یک برنامهٔ ناوبری GPS و نقشه برای گوشی‌های Android و iOS و همچنین تبلت‌هاست، که به‌ویژه از رندرینگ، مسیریابی و جستجوی آفلاین پشتیبانی می‌کند. اطلاعات بیشتر دربارهٔ برنامه و ویژگی‌های متعدد [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) را در وبسایت خودش مطالعه کنید. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles یک قالب فایل برای ذخیرهٔ کاشی‌های نقشه در یک فایل واحد است. Export Tool اجازه می‌دهد تا کاربران فایل‌های MBTiles حاوی کاشی‌های OSM بسازند، که می‌توانند به‌عنوان منبع محتوای آفلاین در برنامه‌های کاربردی که از آن‌ها پشتیبانی می‌کنند استفاده شوند. لطفاً توجه داشته باشید که تمام عارضه‌های OSM در منطقهٔ انتخابی از طریق Export Tool به درون MBTiles استخراج می‌شود و در زبانهٔ 3‎ Data به‌جای درخت تگ استاندارد و گزینهٔ انتخاب عارضه با YAML، به‌طور خودکار منوی اُفتان Source (منبع) و دامنهٔ زوم ظاهر می‌شود. دربارهٔ [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) در بخش Learn بیشتر بخوانید.

![export-tool-mbtiles][]


قالب‌های فایل بیشتری به‌طور پیوسته پیشنهاد می‌شود و به Export Tool اضافه می‌شود. اگر قالب فایلی وجود دارد که دوست دارید در آینده اضافه شود، لطفاً در مخزن [GitHub](https://github.com/hotosm/osm-export-tool/issues) نظرتان را بنویسید. برای اطلاعات بیشتر دربارهٔ هر کدام از قالب‌های فایل، لطفاً صفحهٔ File Formats (قالب‌های فایل) را در بخش [آموزش](https://export.hotosm.org/en/v3/learn) وبسایت مشاهده کنید.



## شخصی‌سازی عارضه‌های نقشه

این ابزار به کاربر امکان می‌دهد تا دادهٔ انتخابی در منطقهٔ تعریف‌شدهٔ موردنظر را سفارشی کند. این دادهٔ OSM با استفاده از پالایه‌های تگ و انتخاب کلیدها، از طریق Tag Tree یا YAML Form تعریف می‌شود. درخت تگ برای کارهای رایج کاربرد دارد، و مجموعهٔ منظمی از پالایه‌ها و انتخاب‌ها را ارائه می‌کند، درحالی‌که پیکربندی YAML، با استفاده از یک تعریف پالایه‌ایِ شبه-SQL کنترل کاملی روی پالایه‌ها و انتخاب‌ها ارائه می‌دهد.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM پایگاه‌داده‌ای جهانی و آزاد از عارضه‌های جغرافیایی تگ‌گذاری‌شده با سه نوع عنصر است:
گره‌ها (Nodes)، که هر گره یک نقطه در سطح زمین را نشان می‌دهد
راه‌ها (Ways)، که هر راه مجموعه‌ای از گره‌هاست که می‌توانند خط‌ها یا چندضلعی‌ها را تشکیل دهند
رابطه‌ها (Relations)، که مجموعه‌ای از گره‌ها، راه‌ها یا سایر رابطه‌ها هستند

هر کدام از این عناصر می‌توانند هر تعداد برچسب key=value داشته باشند. به‌عنوان مثال، یک دفتر پست می‌تواند با یک «راه» که دارای تگ‌های building=yes و amenity=post_office است، مشخص شود. بیایید ببینیم این برچسب‌ها را چگونه می‌توان در Export Tool با استفاده از درختوارهٔ برچسب‌ها و فرم YAML تعریف کرد تا دادهٔ OSM را پالایش کنیم.

### Tag Tree
Tag Tree (درخت تگ) ساده‌ترین راه برای شروع انتخاب عارضه‌هاست. به‌آسانی گزینه‌های موردنظر پدر یا فرزند را علامت‌گذاری کنید. لطفاً توجه داشته باشید که انتخاب هر یک از گزینه‌های پدر، سایر تگ‌های key=value متناظر با آن زمینه و همچنین گزینه‌های فرزند زیر آن اضافه خواهد شد. هر گزینهٔ پدر پرس‌وجوی متفاوتی برای پالایش داده دارد، بنابراین بسیار توصیه می‌شود که نحو (syntax) هر زمینه را نگاه کنید. برای این کار نشانگر ماوس را روی گزینه‌ها ببرید تا کادر اطلاعات در سمت راست نمایش داده شود. 

![export-tool-treetag-sql][]


برای مثال انتخاب گزینهٔ Emergency پدر، به‌طور خودکار گزینه‌های فرزند Police Station،‏ Ambulance Station و Fire Station در زیر آن را انتخاب می‌کند. درعین‌حال، علاوه بر این تمام تگ‌هایی را که emergency=yes،‏ amenity=police و amenity=fire_station باشد در پرس‌وجوی SQL زیر انتخاب می‌کند:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

گزینهٔ پدر همیشه معادل گزینه‌های فرزند زیرینش نیست که بخواهید با انتخاب آن همهٔ تگ‌های متناظر با یک زمینه را به دست آورید. تگ‌های OSM پیوسته در حال تکامل‌اند و ما می‌خواهیم مطمئن باشیم که این ابزار می‌تواند با این تغییرات سازگار شود. فقط پرکاربردترین تگ‌های key=value به‌عنوان گزینه‌های فرزند نمایش داده می‌شوند و گزینه‌های پدر برای شمول مواردی است که پرکاربرد نیستند، اما در یک زمینه قرار می‌گیرند. اگر برای تغییر این زمینه‌ها و تگ‌ها پیشنهادهایی دارید، لطفاً در [این صفحه‌گسترده](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) که برای ایجاد Tag Tree (درختوارهٔ تگ) استفاده می‌شود، نظر دهید و در صورت تناسب ما آن را به کار خواهیم بست.

![export-tool-treetag-spreadsheet][]


### YAML Form
یک پیکربندی YAML، می‌تواند کنترلی کامل برای اِعمال پالایه‌ها بر دادهٔ OSM فراهم کند، که این کار را با استفاده از یک تعریف پالایه‌ای شبه-SQL برای اِعمال تگ‌های key=value انجام می‌دهد. لطفاً توجه داشته باشید که Tag Tree نیز در YAML Form نحو (syntax) تولید می‌کند، بنابراین هر گزینهٔ پدر و فرزندِ انتخاب‌شده به‌طور خودکار در کادر YAML به کار گرفته می‌شود. این به‌عنوان نقطهٔ شروع پرس‌وجو عمل می‌کند و می‌تواند بیشتر ویرایش شود. 

![export-tool-treetag-yaml][]


استفاده از YAML به‌دلیل سادگی و سازگاری آن با SQL است. قالب انتخاب عارضه در YAML  شبیه فایل‌های styleی است که برنامه‌هایی مانند osm2pgsql و imposm استفاده می‌کنند: به whitespace حساس است؛ هر عنصر فرزند در زیر عنصر پدر تورفتگی دارد و قبل از آن یک خط تیره (dash) وجود دارد؛ بعد از این خط تیره باید یک فاصله وجود داشته باشد. یک نمونهٔ مقدماتی از انتخاب عارضه با 3 زمینه (buildings،‏ waterways و hospitals) را در زیر می‌بینید:

![export-tool-yaml-code1][]


YAML، ‏Themeها را دارد و دو ساختار داده: Mapping و List
* Theme در مثال فوق buildings است
* Mappingها در مثال بالا عبارت‌اند از: types و select 
* Listها در مثال بالا عبارت‌اند از: عناصر فرزند select و types

YAML:‏ Themeها
* Themeها کلیدهای سطح بالا در سند YAML هستند. با نویسه‌های معتبر شامل حروف، اعداد و خط زیر (_). 

YAML: انواع هندسه
* مقادیر list زیر types از mappingها می‌تواند یک یا چند مورد از ‘<span dir="ltr">- points</span>’،‏ ‘<span dir="ltr">- lines</span>’،‏ ‘<span dir="ltr">- polygons</span>’ باشد. اگر کلید types وجود نداشته باشد، هر سه نوع هندسه در theme گنجانده خواهد شد.

YAML: انتخاب ستون‌ها
* آیتم‌های list زیر کلید select از mappingها، ستون‌های هر theme را مشخص می‌کنند. مثال زیر ستون‌های name و amenity را همراه با مقدارشان از OSM ایجاد می‌کند:

![export-tool-yaml-code2][]


YAML: پالایه‌ها (فیلترها)
* پالایه‌ها، زیرِ کلید where:‎ در هر theme قرار دارند، و تعریف می‌کنند که چه زیرمجموعه‌ای از عارضه‌های OSM به آن theme تعلق دارد. مثال زیر theme را فقط به عارضه‌هایی پالایش می‌کند که کلید natural مقدار waterway دارد:

![export-tool-yaml-code3][]


لطفاً توجه داشته باشید که تقریباً همیشه نوعی پالایش لازم است، درغیراین‌صورت theme به‌سادگی تمام عارضه‌های OSM برای انواع هندسه‌های انتخابی را شامل می‌شود. هر پالایه با استفاده از نحوِ شبه-SQL مشخص می‌شود. با کلیدواژه‌های معتبر IS NOT NULL،‏ AND،‏ OR،‏ IN،‏ = و <span dir="ltr">!=</span>.

![export-tool-yaml-code4][]


پیش‌تنظیم‌های JOSM
نسخه‌های قدیمی‌تر Export Tool از فایل‌های پیش‌تنظیم JOSM (قالب ‎.XML) استفاده می‌کردند تا انتخاب‌های عارضه را تعریف کنند. نسخهٔ جدید از YAML استفاده می‌کند، زیرا برای تبدیل دادهٔ OSM انعطاف‌پذیرتر است. البته Export Tool جدید، می‌تواند پیش‌تنظیم‌های JOSM را به پیکربندی‌های YAML تبدیل کند. برای این منظور روی دکمهٔ Load from JOSM Preset .XML بزنید. لطفاً توجه داشته باشید اگر پیش‌تنظیم پیچیده‌تر باشد، ممکن است لازم باشد به‌عنوان یک پیکربندی YAML جدید بر اساس عناصر item موجود در ‎.XML نوشته شود.

![export-tool-load-preset][]



### پیکربندی‌ها (Configurations)

پیکربندی‌های YAML را می‌توانید برای استفاده در آینده از طریق صفحهٔ Configs، تعریف و ذخیره کنید. مفید است که برای یک پروژه یک پیکربندی ایجاد کنید که بعداً می‌توانید در تمام برون‌بردهای مربوط به آن پروژه استفاده نمایید. به پیکربندی، یک name (نام) و description (توضیحات) بدهید که باعث می‌شود سایر کاربران بتوانند آن را پیدا کنند. با برداشتن علامت Public (عمومی)، پیکربندی فقط برای همین کاربر قابل‌مشاهده خواهد بود. 

![export-tool-configuration-saved][]


لطفاً توجه داشته باشید که پیکربندی‌ها قابل‌ویرایش هستند، که برای تکمیل انتخاب عارضه در طی انجام پروژه مفید است. پیکربندی‌های ذخیره‌شدهٔ YAML را می‌توان هنگام ایجاد یک برون‌برد، از طریق گزینهٔ Stored Configuration (پیکربندی ذخیره‌شده) در زبانهٔ ‎3 Data انتخاب کرد. از نوار جستجو برای پیداکردن پیکربندی‌های مرتبط با پروژهٔ خود استفاده کنید.

![export-tool-configuration-stored][]


برای اطلاعات بیشتر دربارهٔ انتخاب‌های عارضه و YAML، لطفاً Selecting Features و YAML Specification را در بخش [Learn](https://export.hotosm.org/en/v3/learn) در وبسایت ببینید. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




