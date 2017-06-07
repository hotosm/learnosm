---
layout: doc
title: Geofabrik အသုံးပြုခြင်းနှင့် HOT ထုတ်ယူခြင်း
permalink: /my/osm-data/geofabrik-and-hot-export/
lang: my
category: osm-data
---

Geofabrik အသုံးပြုခြင်းနှင့် HOT ထုတ်ယူခြင်း
================

> ဤလမ်းညွှန်ချက်ကို [Geofabrik_and_HOT_Export_my.odt](/files/Geofabrik_and_HOT_Export_my.odt) (သို့မဟုတ်) [Geofabrik_and_HOT_Export_my.pdf](/files/Geofabrik_and_HOT_Export_my.pdf) တွင် download ပြုလုပ်၍ရယူနိုင်ပါသည်။  
> Reviewed 2016-09-05  

OpenStreetmap (OSM) တွင်ဘယ်လို data ထည့်မယ် ဘယ်လိုပြုပြင်မယ်ဆိုတာလေ့လာပြီးနောက် ယခု data တွေကို အရံ (back up) အဖြစ်ရယူချင်သည် (သို့မဟုတ်) Quantum GIS ([www.qgis.org](http://www.google.com/url?q=http%3A%2F%2Fwww.qgis.org%2F&sa=D&sntz=1&usg=AFQjCNFCIP2pVPi5ohw-5H7tJ4CzApRQlg)).ကဲ့သို့သော open source software လုပ်ငန်းလုပ်ဆောင်ကြည့်မည်ဆိုလျှင် ရကောင်းရနိုင်ပါသည်။  

Geofabrik ဝက်ဘ်ဆိုက်ဒ်ပေါ်တွင် OSM DATA များအားရယူခြင်း
-------------------------------------

OSM data ကို [http://download.geofabrik.de/openstreetmap/](http://www.google.com/url?q=http%3A%2F%2Fdownload.geofabrik.de%2Fopenstreetmap%2F&sa=D&sntz=1&usg=AFQjCNGtPxBJsD_G-JOi6U5hWJSqey8KCw) တွင်အလွယ်တကူ download ပြုလုပ်၍ရယူနိုင်ပါသည်။

![download-geofabrik][]

၎င်း data များကိုအပိုင်းပေါင်းများစွာ ပိုင်းခြားထားပါသည်။ အပြာရောင်ဇယားပေါ်ကို နှိပ်ကြည့်ခြင်းဖြင့် အင်ဒိုနီးရှားနိုင်ငံအား အာရှ၏ဒေသခွဲတစ်ခုအဖြစ် တွေ့မြင်နိုင်ပါသည်။ နှိပ်ပြီးလျှင်အောက်ပါအတိုင်း ပေါ်လာမည်ဖြစ်သည်။  

![geofabrik-asia][]

စာမျက်နှာ၏အပေါ်ဘယ်ဘက်ထောင့်တွင် ပေါ်လာပြီဆိုလျှင် ၎င်းဒေသခွဲကို အာရှ၏နိုင်ငံများအဖြစ် မည်ကဲ့သို့ခွဲခြား၊ ပိုင်းခြားထားသည်ဆိုသည်ကို ဆက်လက်ကြည့်ရှုပါ။ လိုချင်သောနေရာကိုရရန် အပြာရောင်ဇယားပေါ်တွင် အင်ဒိုနီးရှား(Indonesian state) ကိုနှိပ်ပါ။ ထို့နောက်အောက်ပါကဲ့သို့ ထွက်ပေါ်လာမည်ဖြစ်သည်။  

![geofabrik-indonesia][]

ထို့နောက် အင်ဒိုနီးရှား၏ data ကို shapefile (.shp) အဖြစ်ရယူချင်လျှင် Indonesia-latest.shp.zip ဆိုသည့်အပြာရောင် link ကိုနှိပ်လိုက်လျှင် download ပြုလုပ်ပြီး သိမ်းဆည်းထားမည်ဖြစ်သည်။ download ပြုလုပ်ပြီးသိမ်းဆည်း၍ ရသော format များစွာထဲကမှ point တွေ၊ line တွေ၊ polygon တွေအဖြစ်နဲ့ သိမ်းဆည်းလို့ရသည့် shapefile (.shp) format သည်လူကြိုက်အများဆုံးဖြစ်ပါသည်။  

သင့်အနေဖြင့် နောက်ဆုံး data ကိုမည်သည့်အချိန်က တင်ထားသည်ဆိုတာကိုစစ်ဆေးသိရှိနိုင်ပါသည်။ သင်သတိပြုရန်မှာ server မှ ၂၄ နာရီလျှင်တစ်ကြိမ်သာ data အချက်အလက်များအား ပြောင်းလဲဖော်ပြသောကြောင့် သင့်အနေဖြင့် data များကိုOSM သို့တင်ပြီးလျှင်ပြီးချင်း download ပြုလုပ်ရန်အတွက်ချက်ချင်း ပေါ်လာမည်မဟုတ်ပေ။ သင့်အနေဖြင့် server မှ နောက်ဆုံး updates ပြုလုပ်သည့်အချိန်အထိစောင့်ဆိုင်းရမည်ဖြစ်သည်။  

HOT-Export ဝက်ဘ်ဆိုက်ဒ်ပေါ်တွင် OSM Data များအားရယူခြင်း
--------------------------------------

အကယ်၍သင်အနေဖြင့် နေရာတစ်ခုခုအား attribute အကြောင်းအရာတစ်ခုခုဖြင့်သာ download ပြုလုပ်ချင်သည်ဆိုလျှင် Hot-Exports data download ဝန်ဆောင်မှုကိုအသုံးပြုနိုင်ပါသည်။<http://export.hotosm.org/> ကိုနှိပ်လိုက်လျှင်အောက်ပါအတိုင်းပေါ်လာမည်ဖြစ်သည်။  

![hot-export][]

သင့်အနေဖြင့် ၎င်းwebsite မှ data များကိုရယူချင်လျှင် account တစ်ခုရှိမည်ဖြစ်သည်။ account တစ်ခု ပြုလုပ်ရန်အတွက်ဘယ်ဘက်အောက်ခြေမှ **Create Account** ဆိုတာကိုနှိပ်ပါ။ ပြီးလျှင်သင်၏အီးမေးလ်(email)၊passwordနှင့် အတည်ပြုသည့် password တို့ကိုထည့်ပြီး ပေါ်လာတဲ့လမ်းညွှန်ချက်အတိုင်း ဆက်လက်လုပ်ဆောင်ရမည်ဖြစ်သည်။ “သင့် account အားအတည်ပြုရန်အတွက် သင့် email ဆီသို့အတည်ပြုချက်ရယူသော link တစ်ခုပို့ထားပါတယ်။ကျေးဇူးပြု၍ သင့် account အား activate ပြုလုပ်ရန်အတွက် ၎င်းlink အားဖွင့်ပါ” ဆိုသောစာတိုတစ်ခုပေါ်လာသည်ကို သင်မြင်ရမည်ဖြစ်သည်။ ထို့နောက် account ကို အသုံးပြုရန် ထို link သို့ဝင်ပြီး account ပြုလုပ်ခြင်းကိုအဆုံးသတ်ပါ။  

![hot-export-account][]

ထို့နောက် သင် create ပြုလုပ်ခဲ့သော သင်၏account ကိုအသုံးပြု၍ log in ပြုလုပ်ပါ။  

![hot-export-login][]

သင့်အနေဖြင့် Log in ကိုအောင်မြင်စွာပြုလုပ်ပြီးသွားလျှင် data များကိုရယူရန်အတွက် **New Job**ကိုနှိပ်၍သင်၏အမည်နှင့် သင့်အလုပ်အကြောင်း ကိုဖြည့်စွက်ပါ။ မြေပုံပေါ်မှသင်ရယူလိုသည့်နေရာကို ရွေးချယ်ပြီး save ကိုနှိပ်လိုက်ပါ။  

![new-export-job][]

Preset file နဲ့ translation file ဆိုပြီးနှစ်မျိုးရွေးချယ်၍ရပါသည်။ ဒါမှမဟုတ် နှစ်မျိုးလုံးကိုသဘောမကျလျှင်လည်းကျော်သွား၍ရပါသည်။  

![job-configuration][]

သင်ရွေးချယ်လိုက်တဲ့ နေရာအကျယ်အဝန်းနှင့် server ရဲ့လုပ်နိုင်စွမ်းအပေါ်မူတည်ပြီး download ပြုလုပ်သည့်အချိန်ကြာမြင့်မည် ဖြစ်ပါသည်။ ESRI shapefile ကဲ့သို့သော မိမိကြိုက်နှစ်သက်သည့်file format ကိုရွေးချယ်ပြီး download ပြုလုပ်နိုင်ပါသည်။ သင် download ပြုလုပ်လိုက်သည့်အရာများအားလုံးသည် မကြာသေးမီကသင်ပြုလုပ်ထားသည့်job အပေါ်တွင်ပေါ်နေမှာဖြစ်သည့်အတွက် သင့်အနေဖြင့် ၎င်းဧရိယာတစ်ခုတည်းကိုသာ download ပြန်လည်ပြုလုပ်ချင်သည်ဆိုလျှင် ထို job ကိုပြန်ရှာပြီး download ပြန်လည်ပြုလုပ်နိုင်ပါသည်။ New Job ဆိုပြီး Job အသစ်တစ်ခုထပ်မံ၍ ဖန်တီးရန်မလိုအပ်ပေ။  

![job-created][]

[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export]: /images/osm-data/hot-export.png
[hot-export-account]: /images/osm-data/hot-export-account.png
[hot-export-login]: /images/osm-data/hot-export-login.png
[new-export-job]: /images/osm-data/new-export-job.png
[job-configuration]: /images/osm-data/job-configuration.png
[job-created]: /images/osm-data/job-created.png
