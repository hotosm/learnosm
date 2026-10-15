---
layout: doc
title: osm2pgsql
permalink: /my/osm-data/osm2pgsql/
lang: my
category: osm-data
---

osm2pgsql
==========


ပြီးခဲ့တဲ့သင်ခန်းစာတွင် window ထဲမှ PostGIS နှင့်Postgresql ဘယ်လို ဖွဲ့စည်းထားသလဲဆိုတာ၊ database ကိုဘယ်လို တည်ဆောက်ထားသလဲဆိုတာ နှင့် shapefile တွေကို ဘယ်လိုအသုံးချသလဲ ဆိုတာ ကျွန်ုပ်တို့လေ့လာခဲ့ပြီးဖြစ်ပါသည်။ Database တစ်ခုအတွင်းသို့ OpenStreetMap အချက်အလက်များရောက်ရှိနိုင်ရန်အတွက် shapefile loader ကိုအသုံးပြု၍အချက်အလက်များကို shapefile ပုံစံ(format) ပြောင်းလဲရယူကာထည့်သွင်းနိုင်ပါသည်။ သို့သော်လည်း သင်လိုချင်သော အချက်အလက်များအကုန်မပါဝင်ပဲ ကျန်ခဲ့နိုင်ပါသည်။ ဤသင်ခန်းစာတွင်PostGIS database အတွင်းသို့ OSM အချက်အလက်အကြမ်းများထည့်သွင်း(load)ရန်အတွက်command-line program ဖြစ်သည့် **osm2pgsql** အားမည်ကဲ့သို့ အသုံးပြုရမည်ဆိုသည်ကိုသင်ယူနိုင်ပါမည်။  

ကျွန်ုပ်တို့၏ windows ပေါ်တွင် osm2pgsql ကိုအသုံးပြုနိုင်ရန်အတွက် အဆင့်အလိုက်လေ့လာရမည်ဖြစ်သည်။ ၎င်းအဆင့်များသည် အခြားသောစနစ်များနှင့်အခြေခံသဘောတရားချင်းတူညီနေပါမည်။ သင့်အနေဖြင့် PostGIS database(s) ကိုမှန်ကန်စွာထည့်သွင်းထားပြီးပြီဟုယူဆပါသည်။  

osm2pgsql အားရယူခြင်း
-------------

Windows များအတွက် osm2pgsql version ကို download ပြုလုပ်ရန်  <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows> သို့သွားပါ။  

![windows binary][]

- **osm2pgsql.zip** ဟုအမည်ပေးထားသောဖိုင် ကို download ပြုလုပ်ပါ။  
- အပေါ်မှ zip ဖိုင်ကို unzip ပြုလုပ်ပါ။ ကျွန်ုပ်တို့၏ system path အတွင်းသို့ unzipped folder၏တည်နေရာကို ထည့်သွင်းရန်လိုအပ်သောကြောင့် unzipped လုပ်ထားသည့်folder ကိုနောက်ပိုင်းတွင်ရွေ့လျားမှုပြုလုပ်မည်မဟုတ်သည့်နေရာတွင်ထားပါ။  

![unzip it][]

- osm2pgsql လမ်းကြောင်းထဲတွင် unzipped ပြုလုပ်ထားသောဖိုင် ( osm2pgsql.exe) ကိုတွေ့ရပါမည်။ ထိုအရာက ကျွန်ုပ်တို့၏ အချက်အလက်များကို ထည့်သွင်းခြင်း(import)ပြုလုပ်ရန်အတွက် အသုံးပြုရမည့် program တစ်ခု ဖြစ်ပါသည်။ သို့သော် windows တွင် unzip folder ကိုရှာဖွေနိုင်ရန်အတွက် ကျွန်ုပ်တို့၏ system path အတွင်းသို့ unzip folder ၏ တည်နေရာကို ထည့်သွင်းထားရမည်။ Start Menu ကိုနှိပ်၍ “system path”ဟုရိုက်ပါ။  

![system path][]

- သင့်အနေဖြင့် “Edit the system environment variables”  ကိုမြင်တွေ့ရမှာဖြစ်ပြီး၎င်းကိုနှိပ်လိုက်ပါ။  

![edit variables][]

- “**Environment Variables**” ဟုအမည်ပေးထားသော ခလုတ်ကိုနှိပ်ပါ။  

![env variables][]

- အောက်နားတွင်“**Path**” အမည်ကိုတွေ့လျှင် တစ်ချက်နှိပ်ပြီး “**Edit...**”ကိုထပ်နှိပ်ပါ။  

![find path][]

- သင့်အနေဖြင့် Path variable ထဲရှိ osm2pgsql.exe ဖိုင်၏တည်နေရာလမ်းကြောင်းကို ထည့်သွင်းရပါမည်။  

![edit path][]

- ဆီမီးကော်လံတစ်ခု(semicolon) ကို အရင်ကပေးထားခဲ့သည့်လမ်းကြောင်း၏ အဆုံးတွင်ထည့်ပါ။ ပြီးလျှင် osm2pgsql.exe  ဖိုင်၏လမ်းကြောင်းအပြည့်အစုံကို ရိုက်ထည့်ပါ။ ဥပမာအနေဖြင့် အကယ်၍သင်သည် **osm2pgsql** folder အား**C:\\** လမ်းကြောင်းထဲသို့တိုက်ရိုက်ထည့်ထားခဲ့လျှင် လမ်းကြောင်းသည်အောက်ပါကဲ့သို့ဖြစ်နေပါလိမ့်မည်။  
	
**C:\osm2pgsql\Win32**  

- Settings အသစ်ကို save ရန် အကြိမ်များစွာ OK  ခလုတ်ကိုနှိပ်ပါ။  
- ယခု **osm2pgsql** စတင်အလုပ်လုပ်လိမ့်မည်ဖြစ်သည်။ စတင်အလုပ်လုပ်ကြည့်ကြပါစို့။  
- Windows Command Prompt ကိုဖွင့်လိုက်ပါ။  Start Menu ကိုနှိပ်ပြီး"**cmd**" ဟုရိုက်လိုက်ပါ။ Command Prompt application ပေါ်လာလျင် Enter ကိုနှိပ်လိုက်ပါ။  

![cmd][]

- အမဲရောင် command window ပေါ်လာလျှင်အောက်ပါအတိုင်းရိုက်ထည့်ပါ။  

**osm2pgsql**

- လုပ်ငန်းစဉ်များ မှန်မှန်ကန်ကန် အလုပ်လုပ်မည်ဆိုလျင် သင့်command window တွင်အောက်ပါအတိုင်းမြင်ရလိမ့်မည်။  

![osm2pgsql test][]

- အကယ်၍သင်သည် အထက်ပါအတိုင်းမမြင်ရလျှင် **osm2pgsql** application ကိုရှာမတွေ့ခြင်းဖြစ်သည်။ သင့်အနေဖြင့်  အထက်ကဝင်ရောက်ခဲ့သောလမ်းကြောင်း (Path variable) သည်မမှန်ကန်ခြင်းကြောင့်ဖြစ်နိုင်ပါသည်။  

OSM Data အချက်အလက်အကြမ်းများအားရယူခြင်း
---------------------
Before we can run **osm2pgsql** we need to have some raw OSM data to import into a database. If you don't already have a **.osm** file that you can use, try downloading a file from <https://download.bbbike.org/osm/bbbike/>. This site hosts many OSM extracts for different cities.  Find a city to import and download the PBF file for it. PBF files are compressed versions of the normal **.osm** files. You can use any of the extract services listed in the chapter on [getting data](/en/osm-data/getting-data), if you'd like the raw data for another area.  

Style ဖိုင်ကိုရယူခြင်း
------------------
**osm2pgsql** သည် database အတွင်းသို့ ထည့်သွင်း (import) နေသည့်အချိန်တွင် မည်သည့်ရည်ညွှန်းချက်များ ပါဝင်ရမည်ဆိုသည်ကို သတ်မှတ်ရန်အတွက် custom style ဖိုင်ကိုအသုံးပြုရန်လိုအပ်ပါသည်။ [ဤနေရာတွင် default style ဖိုင်ကို download ပြုလုပ်၍ရယူနိုင်ပါသည်။](/files/default.style)  

Dataအချက်အလက်များထည့်သွင်းခြင်း
-------------------
PgAdmin III ကိုဖွင့်ပါ။ ပြီးခဲ့သည့်သင်ခန်းစာ တွင်ပြုလုပ်ခဲ့သည့်အတိုင်း database အသစ်ကို  **osm** အမည်နှင့် ပြုလုပ်ပါ။ အချက်အလက်များကိုထည့်သွင်း (import) ရန်ကျွန်ုပ်တို့အနေဖြင့် **osm2pgsql** program ကိုcommand line အသုံးပြု၍လည်ပတ်လိမ့်မည်ဖြစ်သည်။ 

- Command Prompt ကိုဖွင့်ရန် Start Menu ကိုနှိပ်၍ "cmd" ဟုရိုက်ပါ။  ပြီးလျှင်Enter ခလုတ်ကိုနှိပ်ပါ။  

![command prompt][]

ကျွန်ုပ်တို့သည်**osm2pgsql** ကိုအမျိုးမျိုးသောစနစ်များဖြင့်အသုံးပြုနိုင်ပါသည်။ကျွန်ုပ်တို့အနေဖြင့်၎င်းတို့ဖြင့်အလုပ်လုပ်ရန်အတွက် အနိမ့်ဆုံးလိုအပ်ချက်များမှာ−  

- OSM အချက်အလက်ဖိုင်၏တည်နေရာ  
- Database ၏အမည်နှင့် database သုံးစွဲသူ၏အမည်  
- Database အတွင်းသို့ မည်သည့် OSM အညွှန်းများကိုထည့်သွင်းအသုံးပြုမည်ဟူ၍ သတ်မှတ်ထားသော style ဖိုင်  

အသုံးပြုရလွယ်ကူစေရန်အတွက် ကျွန်ုပ်တို့၏OSM  ဖိုင်များကို **C:\\** လမ်းကြောင်းထဲသို့ထည့်ထားပြီးဖြစ်သည်။  

- style ဖိုင် နှင့် OSM ဖိုင်တို့၏တည်နေရာကိုအစားထိုးပြောင်းလဲရန် အောက်တွင်ပြထားသည့် command အတိုင်းရိုက်ထည့်ပါ။

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Enter ကိုနှိပ်ပါ။ လုပ်ငန်းစဉ်များမှန်ကန်စွာပြုလုပ်ထားလျှင် လုပ်ငန်းစဉ်စတင်ပြီးအလုပ်လုပ်နေပါလိမ့်မည်။ “database” အတွင်းသို့အချက်အလက်များအားလုံးကို ထည့်သွင်းရန် မိနစ်အနည်းငယ်ကြာမြင့်ပါလိမ့်မည်။  

![osm2pgsql output][]

- အကယ်၍ OSM ဖိုင်အရွယ်အစားကြီးနေလျှင် osm2pgsl ကိုထည့်သွင်း (import) သည့်လုပ်ငန်းစဉ်ကို လုပ်ဆောင်ရန်မှတ်ဉာဏ် (memory) အသစ်ကိုထပ်ထည့်ရန်လိုအပ်ပါသည်။ အထက်ပါအတိုင်းလုပ်ဆောင်ရန် command တွင်ဤကဲ့သို့ cache 600 ဟုရိုက်ထည့်ရမည်။  

      --cache 600

စမ်းသပ်မှုပြုလုပ်ခြင်း
-----------

ကျွန်ုပ်တို့အနေဖြင့် QGIS ကိုအသုံးပြု၍ database ထဲသို့ ကျွန်ုပ်တို့ထည့်သွင်းထားသည့်အချက်အလက်များအောင်မြင်စွာထည့်သွင်းပြီးစီးမှုကိုစမ်းသပ်ကြည့်ရှုနိုင်ပါသည်။  

- QGIS ကိုဖွင့်ပါ။ "Add PostGIS Layers" ခလုတ်ကိုနှိပ်ပါ။ ![qgis add postgis button][]{: height="24px"}

- “Connections” အောက်တွင်ရှိသော “**New**” ခလုတ်ကိုနှိပ်ပါ။  
- Name နေရာတွင်ဆက်သွယ်မှုအသစ်အတွက်အမည်အသစ်ပေးပါ။ Database ၏အောက်တွင် **osm** ( သင့် database ၏အမည်) ကိုရိုက်ပါ။  
- Username နေရာတွင် postgres၏ username ကိုရိုက်ထည့်ပါ။ ပြီးလျှင် ၎င်းအောက်တွင်ရှိသော စကားဝှက်(password)နေရာတွင် မိမိသတ်မှတ်ချင်သည့်စကားဝှက်ကိုရိုက်ထည့်ပါ။  

![connection settings][]

- OK ခလုတ်ကို နှိပ်ပါ။ ထို့နောက် PostgreSQL server ကိုချိတ်ဆက်ရန် “Connect” ကိုနှိပ်ပါ။  
- Database ထဲတွင်ရှိသော layer များအားလုံးကိုမြင်နိုင်စေရန် "public" ကိုနောက်ထပ်နှိပ်ပါ။ သတိပြုရမည်မှာ osm2pgsql သည် အမျိုးမျိုးသော ပုံစံများဖြစ်သည့် - အမှတ်(point), မျဉ်းကြောင်း(line), ပုံသဏ္ဍာန်(polygon) များအတွက် သီးသန့်ဇယားတစ်ခုချင်းစီ ဖန်တီးပေးသည်။ ထို့ပြင် ၎င်းသည်အဓိကလမ်းများသာပါဝင်သည့် လမ်းများနှင့်သက်ဆိုင်သော ဇယားကွက်ကိုလည်း ဖန်တီးပေးပါသည်။  

![postgis layers][]

- တစ်ခု သို့မဟုတ် တစ်ခုထက်ပိုသော layers များကိုရွေးချယ်ပါ။ ပြီးလျှင် "Add" ကိုနှိပ်ပါ။ အကယ်၍ CRS ကိုရွေးချယ်ရန်လိုအပ်ပါက WGS84 ကိုရွေးချယ်ပါ။  
- အထက်ပါအတိုင်းကောင်းမွန်စွာအလုပ်လုပ်လျှင် ဖွင့်ရန်ရွေးချယ်ထားသည့် layers များကို QGIS ထဲတွင်မြင်ရပါလိမ့်မည်။  

![osm in qgis][]



အကျဉ်းချုပ်ဖော်ပြချက်
-------

ကိုယ်ပိုင် database အတွင်းသို့ OpenStreetMap အချက်အလက်များကို ထည့်သွင်းအသုံးပြု (import) မည်ဆိုလျှင် **osm2pgsql** သည်အလွန်ကောင်းမွန်သည့် ကိရိယာ (tool) တစ်ခုဖြစ်သည်။ သင့်အနေဖြင့် နောက်ဆုံးပေါ် OSM အချက်အလက်များကို ရရှိရန်လိုအပ်လျှင်နှင့် attributes များကို စိတ်ကြိုက်ပိုင်းခြား အသုံးပြုရန်လိုအပ်မည်ဆိုလျှင် (သို့) ရှုပ်ထွေးသောစီမံကိန်းများတွင် အလုပ်လုပ်ချင်လျှင် osm2pgsql သည်အလွန့်အလွန်အသုံးဝင်နိုင်ပါသည်။  

မကြာသေးမီက [imposm](http://imposm.org/) ဟုခေါ်သော အခြားထည့်သွင်းအသုံးပြု၍ရသည့် ကိရိယာ (import tool) ကို တိုးတက်ကောင်းမွန်အောင်ပြုလုပ်နေပါသည်။ imposom version 3 တွင်အခြားလုပ်ဆောင်ချက်(functions) များကိုထည့်သွင်းရေးသားခြင်းမရှိသော်လည်း  osm2pgsql ထက် ပိုမိုကောင်းမွန်မှု၊အလုပ်လုပ်သည့်အခါမြန်ဆန်မှုကို ရရှိနိုင်မည်ဖြစ်ပါသည်။  

နောက်ထပ်ပိုမို၍ လေ့လာလိုပါက အောက်ပါ OSM Wiki - <http://wiki.openstreetmap.org/wiki/Osm2pgsql> တွင်သွားရောက်လေ့လာနိုင်ပါသည်။  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
