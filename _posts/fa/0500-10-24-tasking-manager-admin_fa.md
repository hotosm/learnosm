---
layout: doc-rtl
title: ایجاد پروژه در مدیریت وظایف ۲
permalink: /fa/coordination/tasking-manager-project-admin/
lang: fa
category: coordination
---

**این راهنما یک نسخه قدیمی از مدیریت وظایف را توصیف می‌کند. اگر رابط کاربری نسخه‌ای که استفاده می‌کنید با آنچه که در اینجا توضیح داده شده متفاوت به نظر می‌رسد، باید [راهنمای نسخه ۳](/fa/coordination/tasking-manager3-project-admin) را ببینید.**

# مدیر پروژه مدیریت وظایف OSM

مدیریت وظایف OpenStreetMap برای هدایت کارزار نقشه، مدیریت فعال‌سازی HOT یا ایجاد وظایف نقشه‌کشی برای دانشجویان نقشه‌کش ضروری است. مدیریت وظایف کار را به قطعات جغرافیایی قابل کنترل تقسیم می‌کند، که باعث کاهش تداخلات، به ویژه با تعداد زیاد نقشه‌کشهای متفرق در نقاط مختلف، می‌شود. مدیریت وظایف همچنین با ارائه مجموعه‌ای از دستورالعمل‌ها برای نقشه‌کشها (به عنوان مثال نقشه همه جاده‌ها و ساختمان‌ها را بکش) به ارائه نقشه‌های صحیح و کیفیت داده‌ها کمک می‌کند. به طور خلاصه، مدیریت وظایف چگونگی تنظیم و هدایت گردش کار برای فعالیت‌های نقشه‌کشی آزاد می‌باشد. این ماژول مدیریت اساسی مدیریت وظایف OSM برای رویدادهای نقشه‌کشی موفق را توصیف می‌کند. 

 این راهنما به طور خاص برای افرادی که نیاز به دستورالعمل در مورد بکارگیری مدیریت وظایف OSM دارند، شامل ایجاد و اصلاح پروژه‌های نقشه‌کشی برای رویدادهای آزاد نقشه، یعنی 'کارزارهای نقشه' (mapathons) نوشته شده است. این راهنما در مورد تمام موارد بکارگیری مدیریت وظایف OSM از جمله مدیریت وظایف HOT <http://tasks.hotosm.org/> و مدیریت وظایف TeachOSM قابل اجرا است. لیستی از دیگر موارد مدیریت وظایف OSM را می‌توانید در [ویکی OpenStreetMap](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager) مشاهده کنید.

از HOT یا مدیریت وظایف OSM اغلب با **TM2** اشاره می‌شود که خلاصه شده مدیریت وظایف نسخه ۲ (Tasking Manager, version 2) است. 

## وارد شدن و دسترسی به سطوح
اولین چیزی که باید درک شود سطح دسترسی است. تمام دسترسی به TM2 از طریق <https://www.openstreetmap.org> مجاز است. برای دسترسی به TM2 باید یک حساب کاربری (OpenStreetMap (OSM داشته باشید. هنگامی که این حساب را داشتید، <http://tasks.hotosm.org/> را ببینید و روی **ورود با استفاده از OpenStreetMap** کلیک کنید تا شما را به صفحه‌ای از OSM که می‌توانید به مدیریت وظایف مجوز دهید تا دسترسی محدود به حساب OSMتان داشته باشد، ارجاع دهد. 

### سطح دسترسی در مدیریت وظایف OSM
مدیریت وظایف OSM دارای سه سطح دسترسی کاربر است:
-  **کاربر** - ابتدایی‌ترین سطح. کاربر قادر به ورود به TM2 و استفاده از قابلیت‌های آن برای یافتن و انتخاب یک پروژه نقشه‌کشی و کار بر روی آن است. این سطح استفاده به طور کامل در [راهنمای مدیریت وظایف OSM در LearnOSM](/fa/coordination/tasking-manager/) شرح داده شده است. توجه داشته باشید که برخی از پروژه‌ها، مانند مواردی که در حالت پیش‌نویس (یعنی منتشر نشده) هستند برای کاربران قابل مشاهده نیستند.  
- **مدیر پروژه** - مدیران پروژه دسترسی به ایجاد و به‌روزرسانی پروژه‌های TM2 را دارند.  
- **مدیر** - مدیران دسترسی دارند تا سطوح دسترسی کاربران در TM2 را مدیریت کنند.
برای ایجاد پروژه جدید با استفاده از TM2، به سطح دسترسی مدیر پروژه نیاز دارید.

## شروع یک پروژه جدید در TM2 

![TM New][]

نام کاربری خود در گوشه بالا راست را کلیک کنید، سپس یک **پروژه جدید ایجاد کنید.**را بزنید. پس از آن ممکن است بین کشیدن منطقه مورد علاقه روی نقشه یا وارد کردن کادر محدوده از یک فایل، انتخاب کنید؛  

![TM Draw or Import][]

> وارد کردن یک فایل حاوی ناحیه مشخص همیشه بر کشیدن دستی پروژه مدیریت وظایف ترجیح داده می‌شود. ابزارهایی مانند JOSM ،QGIS و غیره می‌توانند جهت ایجاد فایل برای وارد کردن به مدیریت وظایف استفاده شوند.

#### کشیدن منطقه مورد علاقه برای نقشه‌کشی

![TM Draw][]

1. بر روی دکمه ‘Draw’ در گوشه سمت راست بالا کلیک کنید.
2. برای رسم چندضلعی نشان‌دهنده منطقه مورد علاقه در کادر نقشه، دکمه سمت راست ماوس را پایین نگه دارید تا نقشه را بدون کلیک کردن حرکت دهید، که یک گره را اضافه می‌کند. چندضلعی باید کاملاْ هم اندازه منطقه مورد علاقه باشد. اینکار موجب صرفه‌جویی در زمان جهت تکمیل کاشی‌هایی می‌شود که مورد علاقه نیستند (به عنوان مثال اقیانوس، جنگل)  
3. برای تکمیل چندضلعی، روی نقطه شروع آن کلیک کنید  

یا

#### آپلود یک فایل GeoJSON یا KML از منطقه مورد علاقه برای نقشه‌کشی  

1. بر روی دکمه ‘Import’ کلیک کنید،  
2. در پنجره آپلود فایل دنبال فایل خود بگردید   
3. روی نام فایل کلیک کنید تا فایل را انتخاب کرده و سپس روی ‘Open’ کلیک کنید.  


### مربع وظیفه 

محدوده مورد نظری که توسط بارگذاری فایل یا توسط دست کشیده شده در چهارچوب نقشه ظاهر می‌شود و سپس از شما خواسته خواهد شد که چگونه این منطقه به وظایف مجزا تقسیم شود. دو گزینه وجود دارد:  

1. چهارخانه (Square Grid) - مدیر وظایف منطقه کل پروژه را به طور مساوی به مربع‌های هم‌اندازه تقسیم می‌کند. این روش معمولاْ یک ایده بسیار خوب برای پروژه‌های جمعی عمومی است.
2. قطعات هندسی دلخواه - اگر برای تعریف منطقه پروژه خود فایلی را  آپلود کردید، آن فایل می‌تواند حاوی شکلهای هر وظیفه هم باشد. باید برای ایجاد شکلهای وظیفه سفارشی، یک نیاز خاص نقشه‌کشی وجود داشته باشد. برای مثال پروژه‌ای که در آن واردکردن جاده‌ها صورت میگیرد ممکن است نیاز به شکلهای وظیفه سفارشی داشته باشد.

### استفاده از حالت چهارخانه برای مربعهای وظیفه
برای ایجاد کاشی‌های مربع یکنواخت، گزینه Square Grid را انتخاب کرده و روی Next کلیک کنید.  
منطقه مورد علاقه به طور خودکار به سلول‌های شبکه تقسیم می‌شود و هر سلول یک وظیفه می‌شود. هرچقدر منطقه پروژه بزرگتر باشد، مربعهای حاصل بزرگتر خواهند بود. اندازه بهینه کاشی را بر اساس پنج گزینه کاشی نسبی تعیین کنید. به همین ترتیب، در صورتی که اندازه کاشی کوچکتر باشد، وظایف بیشتری در صفحه نمایش نشان داده می‌شود. بنابراین اندازه کاشی بهینه به دو عامل اندازه منطقه (برای یک پروژه بزرگ کاشی‌های کوچکتر ایجاد کنید) و تعداد ویژگی‌های که احتمالاْ باید در هر کاشی نقشه‌کشی شوند، بستگی دارد. به طور کلی، هر اندازه منطقه مورد علاقه و/یا تعداد ویژگیهای احتمالی افزایش یابد، اندازه کاشی انتخاب شده برای پروژه باید کاهش یابد. 

![TM Tile Sizes][]{: width="1500"}

***ملاحظات قبل از تصمیم‌گیری در مورد اندازه کاشی***

- در یک کارزار نقشه (Mapathon)، یک نقشه‌کش تازه‌کار یک منطقه را در تقریباْ یک چهارم سرعت نقشه‌کش با تجربه نقشه می‌کشد (بسیاری خیلی کندتر شروع می‌کنند، اما به زودی سریعتر می‌شوند). 
- نقشه‌کش جدید به سختی ویژگی‌های مد نظر را در تصاویر ماهواره‌ای پیدا میکند تا زمانی که آنها را واقعاْ بکشد. پیدا کردن کلبه‌های مدور که از مواد طبیعی ساخته شده‌اند در یک منطقه مملو از بوته‌های گرد، شیب منحنی یادگیری یک تازه وارد را کند می‌کند.
- همچنین برای یک نقشه‌کش جدید کشیدن تعداد زیادی ویژگی مانند ساختمانهای فراوان سخت است.
- بعداْ در روند کار شما این فرصت را دارید تا برای یک نقشه‌کش یک مربع را 'تقسیم' کنید - تقسیم یک مربع به چهار قسمت به نقشه‌کش‌های جدید کمک می‌کند تا مربعی داشته باشند که از عهده آن برمی‌آیند.  
- احتمال قوی بیشتر مشکلات هر مربع در لبه‌ها و گوشه‌های آن رخ می‌دهد. بنابراین مربع‌های کوچکتر به معنی داشتن گوشه و لبه‌های بیشتر است که منجر به مضاعف شدن کار نقشه‌کشی و نیز از دست رفتن اشیاء می‌شود. درمورد چگونگی ایجاد مربع، یک شمشیر دو لبه وجود دارد که از یک طرف ممکن است برای نقشه‌کش جدید آسانتر شود اما از سوی دیگر به علت گوشه‌ها و لبه‌های بیشتر باعث افزایش اشتباهات می‌شود.
- می‌توان یک مربع را تقسیم کرد، اما هیچ گزینه‌ای برای پیوستن مربع‌ها و بزرگتر کردن آنها وجود ندارد. بنابراین هنگام تقسیم کردن مراقب باشید.
- **نتیجه‌گیری** سعی کنید یک تکه از پروژه خود را خودتان نقشه‌کشی کنید تا ببینید که چه مقدار آسان است و با چه مشکلاتی مواجه می‌شوید. این می‌تواند به شما در تصمیم‌گیری در مورد اندازه بهینه مربع کمک کند. اجازه تقسیم را بدهید، اما نه به بی‌نهایت - برخی از نقشه‌کش‌های جدید به طور مداوم مربع را تا زمانی که آنقدر کوچک شود که دیگر کشیدن نقشه آن خیلی سخت باشد، تقسیم می‌کنند.  

### قطعات هندسی دلخواه
اگر یک فایل را برای تعیین منطقه پروژه خود آپلود کنید، امکان آن وجود دارد که اطلاعاتی درباره اشکال دقیقی که می‌خواهید هر وظیفه پروژه داشته باشد را نیز درون خود داشته باشد. اگر AOI شامل یک چندضلعی باشد، این پروژه تنها یک وظیفه دارد. این مورد به طور کلی مورد نیاز نیست و فقط باید برای نیازهای خاص مد نظر باشد.

### ملاحظات مربوط به تصاویر ماهواره‌ای

در بیشتر موارد ما از تصاویر استاندارد Bing استفاده می‌کنیم. اما شرایطی وجود دارد که ممکن است بخواهید یک منبع جایگزین را انتخاب کنید:

1. چنانچه بینگ پوشش با وضوح بالا برای منطقه مورد علاقه شما (AOI) ارائه نمی‌دهد.
2. چنانچه تصاویر بینگ پوشش ابری قابل توجهی در آن منطقه داشته باشد.
3. چنانچه برای ارزیابی پس از فاجعه، تصاویر جدیدتری نیاز دارید.

اگر بینگ کافی نباشد، Mapbox انتخاب بعدی است. شما فقط باید در صورتی که هیچیک از این دو نیاز شما را برآورده نکند، دنبال منابع دیگر بگردید.

در چنین مواردی کافی نیست که یک منبع سازگار با مجوز را انتخاب کنید و آن را از طریق سرویس WMS یا TMS در دسترس قرار دهید. احتمالاْ AOI شما تا حدی با استفاده از تصاویر Bing یا Mapbox نقشه‌کشی شده باشد و ممکن است بین تصاویر ناترازی قابل توجهی وجود داشته باشد. باید نگاه دقیقی به مکانهای مختلف AOI خود بیندازید و بین تصاویرتان با داده‌های قبلاْ نقشه‌کشی شده میزان ناترازی را تعیین کنید. اگر داده‌های موجود  OSM با تصاویر شما افست دارد اما با تصاویر Bing تقریباْ تراز هستند در آن صورت معمولاْ تصاویر بینگ را "استاندارد طلایی" فرض می‌کنیم، مگر اینکه ردیابی‌های GPSای داشته باشیم که ثابت کند این فرض اشتباه است.

اگر بین تصاویرتان با تصاویر بینگ در سراسر AOI اختلاف یکنواختی وجود داشته باشد، این بایستی روی سرور اصلاح شود تا تصاویری که از منابع مختلف بارگذاری می‌شوند در ویرایشگر مطابقت داشته باشند. اگر اینکار امکان پذیر نیست، و  افست در سراسر AOI متغیر است و یا اینکه داده‌های موجود با منابع مختلف هماهنگ بود، آن زمان از برنامه B استفاده می‌کنیم:

نکته مهم این است که برای چگونگی مقابله با این مسائل و ارائه دستورالعمل‌های دقیق به نقشه‌کشها و اعتباردهنده‌ها بایستی یک استراتژی ایجاد کنید. ما به شدت پیشنهاد می‌کنیم که چنین پروژه‌ای را "فقط برای نقشه‌کشهای باتجربه" اعلام کنید و توضیح دهید که تجربه در این مورد به این معنی نیست که مثلاْ بیشتر از ۲۰۰ ساختمان را رسم کرده باشید بلکه این است که با مسائل تراز و منابع مختلف تصویری کار کرده باشید.

یک راهبرد احتمالی شامل این مراحل است:

1. به وضوح مشخص کنید که چه تصویری باید مرجع باشد که هر چیز دیگری باید با آن تراز شود. در این مورد بگذارید فرض کنیم مرجع Bing است.
2. اطمینان حاصل کنید که تمام ویژگی های موجود که در تصاویر Bing نیز قابل مشاهده هستند با آن تصاویر تراز هستند، یعنی اینکه در صورت لزوم مجدداْ تراز کنید.
3. با استفاده از عملکرد افست تصاویر ویرایشگر، تصویرهای جایگزین را با ویژگی‌های موجود (و به این ترتیب با Bing) تطبیق دهید.
4. عوارض جدید را با استفاده از تصاویر جایگزینی که حالا دیگر به درستی تراز شده‌اند اضافه کنید.

مهم است که گام ۳ برای هر وظیفه پروژه تکرار شود و هر مربع‌ نباید بیش از حد بزرگ باشند، زیرا افست تصاویر می‌تواند بطور قابل توجهی در یک AOI متفاوت باشند، به خصوص اگر زمین مسطح نمی‌باشد. حتی ناپایداری‌های تصویری در یک پروژه ممکن است رخ دهد - مراقب آنها باشید و چنین مشکلی را به مشارکت‌کنندگان گوشزد کنید.

در اینجا چند تکه اطلاعات پیشنهادی که در دستورالعملهای پروژه باید در نظر بگیرید عبارتند از:

- [دستورالعمل های کلی برای ویرایشگران مختلف](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [یک GIF متحرک درباره تنظیم تصویر در iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [فصل ترازکردن تصاویر در JOSM در learnOSM](http://learnosm.org/fa/josm/correcting-imagery-offset)

## ایجاد پروژه و اضافه کردن توضیحات
پس از انتخاب اندازه کاشی، روی "ایجاد پروژه" (Create Project) کلیک کنید. 

![TM Create Project][]

اینکار پروژه را در مدیریت وظایف ایجاد می‌کند و صفحه‌ای باز می‌کند که می‌توانید توصیف‌ها، دستورالعمل‌ها و سایر اطلاعات مربوط به پروژه را ارائه کنید. به خاطر داشته باشید که نباید این را دست کم بگیرید. قسمت عادلانه‌ای از نقشه‌کشها (در بسیاری موارد اکثریت آنها) تجربه قبلی در OpenStreetMap و/یا HOT ندارند و بدین ترتیب با دستورالعملهای تگ‌گذاری آشنا نیستند. بسیار مهم است که اهداف پروژه واضح باشد و همه منابعی که نقشه‌کشها باید روی آن حساب کنند در اینجا قرار داده شده است. اغلب توصیه می‌شود که یک پروژه به یک کلاس از اشیاء اختصاص داده شود. اگر نیاز به نقشه پایه یک منطقه دارید بهتر است آن را به پروژه‌های مختلف تقسیم کنید، یکی برای جاده‌ها، یکی برای ساختمان‌ها و غیره. در اینصورت مبتدی‌ها می‌توانند روی یک کلاس کوچک از اشیا تمرکز کنند و یاد بگیرند که چگونه آنها را به درستی نقشه بکشند. در غیر این صورت ممکن است با تعداد زیادی کاشی که هر کدام حاوی تعداد کمی از هر چیزی هستند اما در واقع کامل نیستند مواجه شوید.

لطفاْ از زبان ساده استفاده کنید، زیرا ممکن است زبان مادری مخاطبان مورد نظر شما انگلیسی نباشد.

1. عنوان پروژه باید نشان دهد که چه مواردی باید نقشه‌کشی شوند. عناوینی مانند ذیل را ارجح هستند 
 *#1396 - نقشههای گمشده: ایالت نیجر (شمال)، نیجریه (پروژه ۱: جاده‌ها و مناطق مسکونی)*
2. پیام‌های مهم باید در زبانه دستورالعمل در همان ابتدا نشان داده شوند تا اطمینان حاصل شود که خوانده می‌شوند. هرنوع تصاویر خاصی که به جای Bing استفاده می‌شود نیز باید در این توضیح گنجانده شود. برای مثال، در صورتیکه پروژه مربوط به جاده‌ها و مناطق مسکونی باشد در همان جملات اول می‌توان ذکر کرد که لزومی به تکمیل همه ساختمانها نیست. یا این که لازم است نقشه همه خانه‌ها کشیده شود اگر پروژه برای تخمین تراکم جمعیتی استفاده می‌شود. این‌ها پیامهایی هستند که باید در برگه توضیحات نیز نمایش داده شوند.
3. سایر نکات شفاف‌سازی: اگر پروژه فقط مناسب نقشه‌کشهای با سطح معینی از تجربه است، عنوان کنید. مثلاْ، پروژه از ایمپورت استفاده می‌کند یا داده‌های موجود بایستی با تصاویر ماهواره‌ای دیگر یا ردیابی‌های GPS تراز شود (به بخش قبل رجوع کنید). به نحوی عنوان کنید که نقشه‌کشهای جدید احساس کنند دعوت به مشارکت در سایر پروژه‌ها شده‌اند، اما بفهمند که تکنیک‌های پیشرفته در این پروژه مورد نیاز است.
4. دستورالعمل‌هایی وجود دارد که خطاهای رایجی که در طی اعتباردهی میبینیم را پوشش می‌دهد. یکی از نمونه‌های آن، تألیف Blake Girardot درباره [نقشه‌کشی در غرب آفریقا](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips) است. از لینک در دستورالعمل استفاده کنید و توضیح دهید که پیروی از این دستورالعمل‌ها الزامی است.
5. منبع قطعی در برچسب‌گذاری [ویکی OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features) است. برای بسیاری از وظایف مرتبط با HOT، صفحه [تگ‌گذاری بزرگراه‌ها در آفریقا](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) صفحه تخصصی ویژه است و خواندن آن به همه نقشه‌کش‌ها بسیار توصیه می‌شود. اگر پروژه شما باید از استانداردهای برچسب‌گذاری متفاوتی پیروی کند، در آنصورت صفحه مشابهی را در ویکی بنویسید و لینک آن را در دستورالعمل‌هایتان قرار دهید.

<!--Hidden Text - Google discussion group on TM - https://groups.google.com/a/hotosm.org/forum/?utm_medium=email&utm_source=footer#!msg/tm-project-managers/5OVNGMBsQv0/01Wxw95cBwAJ 

Youtube video concerning the development & code updates for TM = https://www.youtube.com/watch?v=hFFlrm9wKcA
from email by Pete Masters
Hi Polyglot, just in case it is useful, we worked with Pierre Giraud when he visited London to do a tech introduction to the tasking manager. It's here if you're interested: https://www.youtube.com/watch?v=hFFlrm9wKcA

Cheers,

Pete


Before Creating a Task
Should this task be a Missing Maps Task? 
Will the project have a direct field mapping component?
Is the project disaster related? 
If yes it should be a HOT project not Missing Maps. Contact the activation lead.
Is the project backed by one of the existing Missing Maps members?
Is the imagery high quality without clouds?
If no contact ARC to see if they can help get new imagery from US Department of State
Task Creation Process
To create a new project, you must be logged into the Tasking Manager - use your OpenStreetMap account username & password. Note that you must have certain permissions assigned to your OpenStreetMap account in order to create a new project in the Tasking Manager.  Open your Internet browser and go to tasks.hotosm.org. You will see a page like this:


Once you are logged in, click on your username in the upper right hand corner.
In the drop down menu, click “Create a New Project”.

There are two options for creating a project: 
Draw an area of interest to be mapped
Upload a GeoJSON or KML file of the area of interest to be mapped

Option 1 - Draw
Click the ‘Draw’ button
Draw a polygon representing the area of interest in the map frame (right click; keep the right click pressed to move the map without adding a node)
Note: the polygon should tightly fit the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest)

Double click to complete the polygon

Option 2 - Import GeoJSON or KML
Click the ‘Import’ button

Browse to your file in the File Upload window
Click the file name to highlight the file and then click ‘Open’.

The area of interest defined in the GeoJSON or KML file will appear in the map frame, and you will then be asked to choose how the area of interest is split into individual tasks.  There are two options:
Square Grid - AOI is automatically split into grid cells and each cell becomes a task.
Arbitrary Geometries - Each individual polygon in the AOI represents an individual task.  If the AOI consists of one polygon, the project will have just one task.
Note: this guide only covers the square grid option.

Select the Square Grid option and click next.
Determine the optimal tile size based on the five Tile Size options. Important: the size of tiles is relative, i.e. the same size level will be bigger on a large project than on a small one (“S” or “M” tiles are thus not always of the same size). Note that each polygon will become a single task.  As such, a smaller tile size will result in more tasks as shown in the screenshots below.  The optimal tile size will therefore depend both on the size of the area (create smaller tiles for a large project) and the number of features that will likely need to be mapped within each tile.  Generally speaking, as the size of the area of interest and/or the number of likely features increases, the tile size chosen for the project should decrease. The ideal size of a square is roughly 45 min - 1 hour of work. At larger mapathons or in denser cities smaller tasks (~20 min) are better.



After choosing a tile size, click “Create Project”.  This establishes the project in the task manager and opens a screen where you can provide the descriptions, instructions and other information about the project if needed.  
On the ‘Description’ tab:
set the Priority appropriately
name the project using the “Name of the Project” text box
If the task is specifically for the Missing Maps effort, use the following naming convention:  Missing Maps: <Location/Project Name>
provide a description in the ‘Description’ box.  Note: formatting in the Description box is based on ‘Markdown’.  Tips for using ‘Markdown’ can be found by clicking the ‘Markdown’ link below the Description box. Note: it is necessary to add a blank line between paragraphs to separate them.
If you are creating a task specifically for the Missing Maps project, include the following language as part of the description: ‘The Missing Maps project aims to map the most vulnerable places in the world (affected by humanitarian crises: disease epidemics, conflict, natural disasters, poverty, environmental crises). Building on HOT's disaster preparedness projects, the Missing Maps tasks facilitate pre-emptive mapping of priority countries to better facilitate disaster response, medical activities and resource allocation when crises occur.’



On the ‘Instructions’ tab:
list the features that need to be mapped in the “Entities to Map” box, e.g. buildings and primary roads.
in the ‘Changeset Comment’ box, enter the changeset comment that mappers should use when uploading the data they have mapped.  The comments should indicate various things about the project.  E.g., the comment ‘Bukama, #DRC #hotosm-project-1145 #MissingMaps #Bing’ indicates the location of the task, the project number, that the project is specifically for Missing Maps, and that Bing imagery is being used for the task.  Changeset comments will obviously vary by project, but should generally be used as a quick indicator/description of the project.
enter detailed instructions that the mappers need to follow in the “Detailed Instructions” box.  At a minimum, detailed instructions must indicate what features to map, how to tag the features, and the imagery source to be used in this project.  Other details should be included as appropriate.  Note: formatting in the Description box is based on ‘Markdown’.  Tips for using ‘Markdown’ can be found by clicking the ‘Markdown’ link below the “Detailed Instructions” box.
Add to the detailed instructions if there is any cloud coverage that might hamper the mapping of tiles. Request mappers to mention cloud coverage in the comment field, and mark the task as done.
If appropriate, enter additional information specific to tasks in the “Per Task Instructions (Optional)” box.  This will be used if anything needs specific needs to be done for individual tasks within the project.  


On both ‘Description’ and ‘Instructions’ tabs, you can translate the content by clicking on the language icon above the text boxes (en, fr, etc.). If no text is entered for language, the default language (English) will appear instead. You’ll notice that the different text boxes don’t switch languages at once when you select it on one, you’ll need to select the language you want to edit on each box individually.

The ‘Area’ tab is not yet functional.

The ‘Imagery’ tab can be used if an imagery source other than the standard OSM imagery sources in OSM needs to be used.  There are also various licensing options via the Required License dropdown if a special license is required for the alternate imagery source.

The “Priority Areas” tab is used to define priority areas for the task if necessary.  This is done by manually drawing the priority areas in the map frame.  Once saved these areas will be shown  as high priority on the map on the main project page.  Tools are also available on the ‘Priority Areas’ tab to edit or delete an existing high priority area.

If necessary, access to the new project can be limited to a certain group of users via the “Allowed Users” tab.  In order to limit access, first click in the check box next to “Private”.  Then enter the username of a user that should have access in the “Allowed Users” text entry box and click the “Add User” button.  Repeat for additional users that need access.  Note: In order for the user's name to be available to add to the Allowed Users - they first must visit the URL for your instance of OSMTM and Authorize access to their OpenStreetMap account. After they've done this, their username should be available for the administrator to add. 

The “Misc” tab provides options to add a due date and a JOSM preset.  The due date can be entered in the “Project due date” box and represents the date after which the project will automatically be archived.  Users can also load a JOSM preset XML file to assist with tagging if appropriate.  

After entering the description, instructions, and any necessary information on the other tabs, click on “Save the Modifications”, which will take you back to the main project page.  

Out of date wiki entry - for update when this guide complete  http://wiki.openstreetmap.org/wiki/Tasking_manager_admin
- end of hidden text-->
  
### اصلاح و انتشار
زبانه‌های مختلف را برای اطمینان از صحت جمله‌بندی و قالب‌بندی و شفافیت دستورالعمل‌ها دوباره خوانده و ویرایش کنید. اگر نیاز به تغییرات یا پالایش در پروژه خود دارید، روی لینک ‘Edit’ در گوشه بالا سمت راست صفحه کلیک کنید. 

![TM Edit Project][]

اگر پروژه آماده نقشه‌کشی شد، روی پیوند ‘Publish’ کلیک کنید. به محض انتشار پروژه، پروژه برای نقشه‌کشی برای هر کسی که دارای یک حساب کاربری OSM است در دسترس است، مگر اینکه یک گروه خاص از کاربران در برگه ‘Allowed Users’ مشخص شده باشند، که در آن صورت فقط کاربران مجاز قادر به کار بر روی پروژه خواهند بود. در صورت لزوم، بعد از انتشار با کلیک روی لینک ‘Edit’، هنوز می‌توان پروژه را ویرایش کرد.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png