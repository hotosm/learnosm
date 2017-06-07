---
layout: doc
title: PostgreSQL အားတည်ဆောက်ခြင်း
permalink: /my/osm-data/postgresql/
lang: my
category: osm-data
---

PostgreSQL နှင့် PostGIS
====================

> ဤလမ်းညွှန်ချက်ကို [PostgreSQL_my.odt](/files/PostgreSQL_my.odt) (သို့မဟုတ်) [PostgreSQL_my.pdf](/files/PostgreSQL_my.pdf) တွင် download ပြုလုပ်၍ရယူနိုင်ပါသည်။  
> Reviewed 2016-09-10

ဤအခန်းတွင် Windows ကွန်ပြူတာတွေမှာ PostgreSQL ကိုမည်ကဲ့သို့ install ပြုလုပ်ရမည်ဆိုသည်နှင့် မြေပြင်နဲ့ပါတ်သက်သောအချက်အလက်များအားသိမ်းဆည်းနိုင်သည့်database တစ်ခုမည်ကဲ့သို့တည်ဆောက်မည်ဆိုသည်ကို ဖော်ပြ ပေးမည်ဖြစ်သည်။ အခမဲ့သုံးစွဲခွင့်ရသည့် QGIS ဆော့လ်ဝဲလ် ကိုအသုံးပြုမည်ဖြစ်သည့်အတွက် သင်အရင်ကသုံးစွဲခဲ့ဖူးလျှင်အရမ်းကို အထောက်အကူဖြစ်မည်ဖြစ်ပါသည်။ အခုလာမယ့်အပိုင်းမှာဆိုရင်တော့ PostgreSQL database ထဲသို့ OpenStreetMap data များအားမည်ကဲ့သို့ထည့်သွင်းမည် ဆိုသည်ကိုတွေ့ရမည်ဖြစ်သည်။  

PostgreSQL နှင့် PostGIS တို့အား install ပြုလုပ်ခြင်း
----------------------------------

ဤအပိုင်းတွင် PostgreSQL ကို အရင် install ပြုလုပ်ပြီး PostGIS spatial extensions တွေကိုဆက်လက်ထည့်သွင်းသွားမည်ဖြစ်သည်။ install ပြုလုပ်တာတွေကတော့ လွယ်လွယ်ကူကူ click လေးတစ်ချက်နှိပ်ပြီးလုပ်သွားရုံပင်ဖြစ်သည်။ PostgreSQL ဝက်ဘ်ဆိုက်ဒ်ကိုသွားပြီး download ပြုလုပ်ရန်အတွက် <http://www.postgresql.org/download/> ကိုနှိပ်ပါ။  

![postgresql website][]

ဤနေရာတွင် သင့်အနေဖြင့် operating systems အမျိုးမျိုးအတွက် install ပြုလုပ်နိုင်သည့် instructions များကိုတွေ့ရမည်ဖြစ်သည်။ အကယ်၍ သင့််ကွန်ပြူတာက window OS ဆိုလျှင်တော့ “**Windows**”  ဆိုတာကိုနှိပ်ပြီး download ပြုလုပ်ပါ။  
၎င်းစာမျက်နှာတွင် click လေးတစ်ချက်လွယ်လွယ်ကူကူနှိပ်ပြီး installလုပ်ရင်ဘာတွေဖြစ်လာမယ်ဆိုတာကို ပြသပေးမှာပဲ ဖြစ်ပါသည်။ ၎င်းတွင်မတူညီကွဲပြားခြားနားသော အပိုင်း (၃) ပိုင်းဖြင့်install လုပ်ရမည်ဖြစ်သည်။  

* **PostgreSQL server**: အဓိကအလုပ်လုပ်မည့် database software  
* **pgAdmin III**: ကိုယ့်ရဲ့ database တွေကို စီမံခန့်ခွဲရန်အတွက်graphic ပိုင်းဆိုင်ရာ လုပ်ဆောင်မှု  
* **StackBuilder**: အခြားသော application များကိုထပ်ပေါင်းထည့်ရန် tool တစ်ခု; PostGIS extensions ကို install လုပ်ရန်အတွက်အဆိုပါ tool ကိုအသုံးပြုမည်ဖြစ်သည်။  

ထို့နောက် **Download** ကိုနှိပ်ပါ။  

![postgresql download][]

PostgreSQL ရဲ့ version အမျိုးမျိုးအတွက် install လုပ်ပုံအမျိုးမျိုးကို တွေ့ရမည်ဖြစ်သည်။ နောက်ဆုံး ထွက် version ကို download ပြုလုပ်ပါ။ ယခုဤစာထဲတွင် နောက်ဆုံး version မှာ 9.3.1 ဖြစ်ပါ သည်။ **Win x86-32** ကိုနှိပ်ပါ။ သို့သော် ၎င်းသည် 32-bit အတွက်သာဖြစ်သည်။အကယ်၍သင့်ကွန်ပြူတာသည် 64-bit ဆိုလျှင် 64-bit ကိုနှိပ်ပါ။  

![postgresql version][]

Download ပြုလုပ်ပြီးလျှင် click တစ်ချက်အလွယ်တကူနှိပ်ပြီး install ပြုလုပ်ပါ။  

![install 1][]

ဘာကိုမျှမပြုပြင်ဘဲ  “**Next**” ကိုနှိပ်ပြီးဆက်သွားပါ။ သင့်အနေဖြင့်ပထမဆုံး database အသုံးပြုသူ (the user is postgres)အတွက် password တစ်ခုလိုပါလိမ့်မည်။ ၄င်း password ဖြင့် အသုံးပြုသူသည် ကိုယ်ပြုလုပ်ချင်သောအရာကို အလွယ်တကူပြုလုပ်နိုင်သည့်အတွက် password မမေ့ရန်အရေးကြီးပါသည်။  

> Postgresql ကိုအသုံးပြုပြီး database များကို ကိုယ်ကြိုက်သလောက်ဖန်တီး၍ရပါသည်။ သင်၏geographic data များအတွက် database လိုအပ်သလို သင်လက်ရှိလုပ်နေသည့် အလုပ်များအတွက်လည်း သီးခြား database များလိုအပ်ပါလိမ့်မည်။ သင့်အနေဖြင့်၎င်းdatabase များကိုဝင်ရောက်မှုပုံစံအမျိုးမျိုးရှိစေရန်အတွက်လူအများကြီးလိုအပ်နိုင်ပါသည်။ ထိုကြောင့် သင်ဖန်တီးလိုက်သော database တိုင်းကို **users** နှင့် **roles**ဆိုသည့်အပိုင်းများထည့်သွင်းအသုံးပြုရခြင်းဖြစ်သည်။ database တစ်ခုကို အသုံးပြုသူတစ်ယောက်တည်းကသာပိုင်ဆိုင်ပြီး အဆိုပါ databaseကိုအပြောင်းအလဲများပြုလုပ်လိုလျှင် အသုံးပြုသူမှ password ဖြင့့်အသုံးပြုရပါသည်။ တခြားအသုံးပြုသူများကိုလည်း အသုံးပြုရန်အတွက်ခွင့်ပြုပေး၍ရပြီး သူတို့အတွက်သင့်တော်သော အပိုင်းအခြားတစ်ခုအထိ စီမံခန့်ခွဲခွင့်ပေးထားနိုင်ပါသည်။ ဥပမာ။ ။သင်အနေဖြင့် databaseထဲတွင်ရှိသောသတင်းအချက်အလက်များကို မည်သည့်အရာမျှ ပြောင်းလဲခွင့်မရှိဘဲ ဖတ်၍သာရသည့်အသုံးပြုသူတစ်ယောက်ကို ပြုလုပ်တာမျိုး၊ နောက်ပြီးလျှင်အဆိုပါ database ထဲသို့ အသစ်များသာထပ်ထည့်နိုင်ပြီးရှိပြီးသားဖြစ်သောအချက်အလက်များကိုဖျက်ခွင့်မရှိသည့်အသုံးပြုသူတစ်ယောက်ကို ပြုလုပ်တာမျိုး။ users နဲ့ roles ဆိုတဲ့အပိုင်းများဖြင့် အဆိုပါနည်းများကိုပြု လုပ်၍ရပါသည်။ ယခုလောလောဆယ်တွင် ထိုအရာများအတွက်တွေးပူနေစရာမလိုသေးဘဲ database တစ်ခုကို  **အသုံးပြုသူ** (user) တစ်ယောက်တည်း ကသာပိုင်ဆိုင်သည်ဟုမှတ်ထားပြီး အသုံးပြုသူ၏အမည် (user’s name) နှင့် password တို့လိုအပ်မည်ဖြစ်သည်။ ပထမဆုံး ကျွန်ုပ်တို့ပြုလုပ်မည့် user (postgres ဟုအမည်ပေးထားသော) မှာ **superuser** ဖြစ်ပြီး database ထဲတွင်ရှိသောအရာအားလုံးကို စီမံခန့်ခွဲလုပ်ပိုင်ခွင့်ရှိပါသည်။  

Install ပြုလုပ်သည့်အဆင့်တိုင်းကို ဘာမျှမပြောင်းလဲဘဲ “Next” ကိုဆက်တိုက်နှိပ်သွားလျှင် အလိုလျှောက် install ပြုလုပ်သွားပြီး မိနစ်အနည်းငယ်ကြာလျှင်install ပြုလုပ်ခြင်းပြီးစီးသွားပါမည်။  

Install ပြုလုပ်ခြင်း၏နောက်ဆုံးအဆင့်တွင် သင့်အား StackBuilder ကိုဖွင့်ပေးမလားဟု မေးပါလိမ့်မည်။ သို့သော်လည်းထိုအရာရှိမှသာ PostGIS ကို installပြုလုပ်၍ရသည်ဖြစ်သောကြောင့်“**Finish**”ကိုမနှိပ်မီ StackBuilderကိုအမှန်ခြစ်ခဲ့ရန်အရေးကြီးပါသည်။  

![install 2][]

အခု PostgreSQL ကို install ပြုလုပ်၍ပြီးစီးသွားပြီဖြစ်သောကြောင့်PostGIS extensionsတွေကိုထပ်ထည့်ကြရမည်ဖြစ်သည်။ StackBuilder ကိုဖွင့်လိုက်ပြီးလျှင်dropdown menu မှPostgreSQL ကိုရွေးပြီး **Next** ကိုနှိပ်ပါ။ အောက်မှာပြထားသကဲ့သို့ပင်ဖြစ်နေမည်။  

![install 3][]

“Spatial Extensions” ဆိုသည့် tab ကိုဖွင့်ပြီး PostGIS ၏ဘေးရှိ လေးထောင့်ကွက်ကိုအမှတ်ခြစ်ပေးပါ။ ဒီထဲမှာဆို ရင်တော့ PostGIS ၏version သည် 2.1 ဖြစ်သည်။  

![install 4][]

Extensions များကို download ပြုလုပ်ပြီး install ပြုလုပ်ရန်အတွက် **Next** ကိုနှိပ်ပါ။ ပြီးလျှင် “**I Agree**” ကိုဆက်နှိပ်ပါ။  

PostGIS သည် install လုပ်နေစဉ်မေးခွန်းများစွာ မေးပါလိမ့်မယ်။ သို့သော်ဘာမျှပြင်စရာမလိုဘဲ Next ကိုပဲဆက်နှိပ်သွားပါ။ သင့်အနေဖြင့်ပထမဆုံး database ကိုသူ့အလိုအလျောက်ဖန်တီးပေးအောင်ပြုလုပ်လို့ရသော်လည်းနောက်ပိုင်းမှသာကိုယ်ကိုယ်တိုင် ဘယ်လိုလုပ်မည်လည်းဆိုသည်ကိုလေ့လာပါမည်။ PostGIS ကို install ပြုလုပ်ရန်အတွက် သင်သည်PostgreSQL ကို installပြုလုပ်ခဲ့စဉ်ကအသုံးပြုခဲ့သော password ကိုလိုအပ်ပါသည်။  

![install 5][]

**GDAL_DATA** ၏ပတ်ဝန်းကျင်ပြောင်းလဲမှုကို မှတ်ပုံတင်ခိုင်းလျှင် "**Yes**" ကိုနှိပ်ပါ။  

![install 6][]

Installation ပြုလုပ်ပြီးသွားလျှင် “**Close**” နှင့်“**Finish**”ကိုနှိပ်ပါ။  

Database တစ်ခုဖန်တီးခြင်း
--------------------

ယခုကျွန်ုပ်တို့ မဖြစ်မနေလိုအပ်သည့် software ကို install ပြုလုပ်ပြီးလျှင် databaseတစ်ခုစတင်ဖန်တီးမည်ဖြစ်သည်။ Query ပြုလုပ်ခြင်းနှင့် 
database များကို modify ပြုလုပ်ရန်အတွက် pgAdmin III ကိုသုံးပါမည်။  

![pgadmin3][]

PgAdmin III သည် PostgreSQL တွင်တရားဝင်သုံးသည့်ချိတ်ဆက် program တစ်ခုဖြစ်ပြီး သင်၏ data table များကို ထိန်းချုပ်အသုံးပြုရန် SQL language ကိုသင့်အားအသုံးပြုခွင့်ပေးထားပါသည်။ ထို့ပြင်command-line မှ database များကိုဖန်တီးရန်နှင့်ထိန်းချုပ်အသုံးပြုရန်အတွက်လည်းပြုလုပ်နိုင်ပါသည်။ ယခုလောလောဆယ်တွင် pgAdmin III သည် စတင်ရန်အတွက်လွယ်ကူသည့်နည်းလမ်းတစ်ခုဖြစ်ပါသည်။  

pgAdmin III ကိုဖွင့်လိုက်ပါ။ ကွန်ပျူတာ၏ Start Menu ထဲရှိ All Programs -> PostgreSQL 9.3 > pgAdmin III ထဲတွင်ရှာပါ။  

![pgadmin3 start][]

panel ထဲရှိ Servers အောက်မှ ဘယ်ဘက်ခြမ်းတွင်ရှိသော PostgreSQL ပေါ်သို့ right-clickနှိပ်ပြီး “**Connect**”ကိုနှိပ်ပါ။  

![postgresql connect][]

Software ကို install ပြုလုပ်ခဲ့စဉ်အချိန်က သင်ပြုလုပ်ခဲ့သည့်postgre ၏ user password ကိုရိုက်ထည့်ပါ။ Database ဖန်တီးရန်နှင့်၎င်းထဲရှိdata များအသုံးပြုနိုင်ရန် username နှင့် password ကိုမှတ်မိဖို့ရန်လိုအပ်ပါသည်။  

![enter password][]

**Databases** ပေါ်သို့ right click နှိပ်ပြီး **New Database**ကိုရွေးပါ။  

![new database][]

Database တစ်ခုအသစ်လုပ်မည်ဆိုလျှင် အမည်၊ ပိုင်ရှင်ကဲ့သို့အချက်အလက်အနည်းငယ် ထည့်သွင်းရန်လိုပါသည်။ Propoerties tab ထဲတွင် database အသစ်၏အမည်ကိုထည့်ပါ။ ဤဥပမာထဲမှာဆိုလျှင် ကျွန်ုပ်တို့ကတော့ ကျွန်ုပ်တို့၏ database အသစ်ကို gisdb ဟုအမည်ပေးလိုက်ပါသည်။ နောက်ပြီး ကျွန်ုပ်တို့ database၏ပိုင်ရှင်အမည်ကိုလည်းပဲပေးထားသင့်ပါသည်။ ယခုလောလောဆယ်တွင်အသုံးပြုသူတစ်ယောက်တည်းသာဖြစ်သောကြောင့် ကျွန်ုပ်တို့၏ database ကို ပိုင်ရှင်အမည်ထည့်ကြရအောင်။ (မှတ်ချက်။      ။လုံခြုံရေးအတွက်ဆိုလျှင် superuser permission မပါဘဲပိုင်ရှင်အမည်ထည့်ထားတာဟာကောင်းပါတယ်။သို့သော် ယခုလောလောဆယ်မှာတော့ အဲဒီကိစ္စနှင့်ပါတ်သက်ပြီးဘာမှစိတ်မပူပါနှင့်။)  

![new database form][]

<!-- Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This will create our database with the proper spatial columns. -->

Database တစ်ခုဆောက်လုပ်ရန်အတွက်**OK** ကိုနှိပ်ပါ။ ယခုအခါ “**Databases**”  အောက်တွင် သင့်၏ database စာရင်းကိုတွေ့ရမည်ဖြစ်ပါသည်။ Database ကို PostGIS extensions တွေလုပ်ချိတ်ဆက်ဖို့command တစ်ခု run ပေးရမည်ဖြစ်သည်။ PgAdmain III ရဲ့ထိပ်ဆုံးရှိ ![sql button][]{: height="24px"}ကိုနှိပ်ပါ။  



Query window ထဲတွင်  

**CREATE EXTENSION postgis;** ဟုစာရိုက်ထည့်ပါ။  

ထို့နောက်"**Execute query**" ကိုနှိပ်ပါ။  

![postgis command][]

နမူနာ Data များထည့်သွင်းခြင်း (ရွေးချယ်ခွင့်ရှိသော)
---------------------------

ယခုအဆင့်ထိ ပြုလုပ်ရသည်မှာအဆင်ပြေပြီး QGIS နှင့်လည်းအခက်အခဲမရှိဘူးဆိုလျှင် ကျွန်ုပ်တို့၏new database ထဲသို့ data များထည့်သွင်းခြင်းကိုလုပ်ဆောင်လိုက်ပါ။ ထိုသို့လုပ်ဆောင်ရန်အတွက်ကျွန်ုပ်တို့သည် shapefile များကိုပုံစံပြောင်းပြီး database ထဲသို့ထည့်ပေးမည့်utility တစ်ခုကိုအသုံးပြုရမည်ဖြစ်သည်။  

Panel ထဲရှိ ဘယ်ဘက်ခြမ်းထဲမှ သင်၏ new database ကိုရွေးချယ်ထားပြီး**Plugins -> PostGIS Shapefile and DBF loader 2.1**သို့သွားပါ။

![shapefile loader][]

 - “**Add File**” ကိုနှိပ်ပြီး ကိုယ့်ရဲ့ကွန်ပျူတာထဲရှိ shapefile တစ်ခုကိုရှာရွေးပါ။
- အကယ်၍သင်ထံတွင် shapefile မရှိဘူးဆိုလျှင် [ဤနေရာတွင် download ပြုလုပ်၍ရယူနိုင်ပါသည်။](/files/buildings_sample.zip)
- ဖိုင်တစ်ခုကို ရွေးချယ်ပြီးပြီဆိုလျှင်“**Import**” ကိုနှိပ်ပါ။အရာအားလုံးအဆင်ပြေစွာချောချောမွေ့မွေ့ပြီးသွားလျှင် “**Shapefile import completed**”ဟူ၍ပေါ်လာမည်ဖြစ်သည်။

![add shapefile][]

ယခု datatbase ထဲမှ data များကို QGIS ထဲသို့ ထည့်ကြပါစို့။ သင့်ထံတွင် QGIS software မရှိဘူးဆိုရင် [QGIS website](http://www.qgis.org/site/forusers/download.html) တွင် download ပြုလုပ်၍ရယူနိုင်ပါသည်။  

- QGIS ကိုဖွင့်ပြီး ![qgis add postgis button][]{: height="24px"} ခလုတ်ကိုနှိပ်ပါ။  
- ထိပ်ဆုံးတွင်ရှိသော “Connections” ၏အောက်မှ“**New**”ကိုနှိပ်ပါ။  
- Connection အသစ်ကိုအမည်တစ်ခုပေးပါ။ database ရဲ့အောက်တွင် **gisdb**  (သို့မဟုတ် သင်၏database ကိုအမည်ပေးခဲ့သော မည်သည့်အမည်ပဲဖြစ်ဖြစ်) ရိုက်ထည့်ပါ။ postgres ၏username နှင့် password ကိုထည့်ပါ။  

![connection settings][]

- Connection setting များကိုသိမ်းရန်**OK** ကိုနှိပ်ပါ။ ထို့နောက် သင်၏PostgreSQL server ကိုချိတ်ဆက်ရန် “Connect” ကိုနှိပ်ပါ။ သင်၏ username နှင့် passwordကိုနောက်ထပ်တစ်ခါထပ်ထည့်ရန်လိုအပ်ပါလိမ့်မည်။  
- အရာအားလုံးအောင်မြင်စွာပြီးဆုံးသွားလျှင် database ထဲသို့သင်ထည့်လိုက်သော shapefile layer (သို့မဟုတ် layer များစွာကို ပုံစံအမျိုးမျိုးဖြင့်) သင်မြင်ရလိမ့်မည်ဖြစ်သည်။ layer တစ်ခုကိုရွေးချယ်ပြီး သင်၏မြေပုံထဲတွင်ထည့်ရန် “**Add**” ကိုနှိပ်ပါ။  

![your data layer][]

သင့်အနေဖြင့် Layer ထည့်သည့်အခါတွင် coordinate systemရွေးချယ်ပေးရန်လိုအပ်လိမ့်မည်ဖြစ်ပါသည်။  OpenStreetMap အသုံးပြုသည့် coordinate system ဖြစ်သော WGS 84 ကိုသင့်အနေဖြင့်ပိုပြီးရွေးချယ်ချင်လိမ့်မည်ဖြစ်သည်။  

> သင့်အနေဖြင့်သိထားသင့်သည်ကတော့ ၎င်း layer သည် QGIS ထဲသို့တိုက်ရိုက်ထည့်ထားသောshapefile တစ်ခုအလုပ်လုပ်သည့်အတိုင်းအတူတူပင်ဖြစ်သည်။ တစ်ခုတည်းသောမတူညီမှုကတော့သင်သည် data များကို edit ပြုလုပ်လိုက်လျှင် သင်edit ပြုလုပ်လိုက်သောပြောင်းလဲမှုများကိုdatabase ထဲသို့ သွားရောက်သိမ်းဆည်းထားလိမ့်မည်ဖြစ်သည်။  

အကျဉ်းချုပ်ဖော်ပြချက်
-------

ယခုဆိုလျှင် ကျွန်ုပ်တို့ PostgreSQLနှင့် PostGIS များကိုမည်ကဲ့သို့ install ပြုလုပ်သည်၊ database ကိုမည်ကဲ့သို့ဖန်တီးသည်ဆိုသည်ကိုသိပြီးပြီဖြစ်၍ database ထဲသို့ OSM dataများကိုထည့်ရာ၌အသုံးပြုသည့် utilities တွေကိုစမ်းသပ်အသုံးပြုကြည့်၍ရပြီဖြစ်ပါသည်။ ၎င်းကို[နောက်လာမည့်အခန်း](/en/osm-data/osm2pgsql) တွင်ကျွန်ုပ်တို့ကြည့်ရှုလေ့လာနိုင်မည်ဖြစ်ပါသည်။  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







