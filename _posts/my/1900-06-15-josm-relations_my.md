---
layout: doc
title: JOSM စုဖွဲ့ဖော်ပြခြင်း(Relations)
permalink: /my/josm/josm-relations/
lang: my
category: josm
---

စုဖွဲ့ဖော်ပြခြင်း (Relations)
==========

> Reviewed 2017-06-06  

In the [Beginner’s Guide](/en/beginner) we explained that there are three types of objects that can be drawn in OpenStreetMap - points (nodes), lines (ways), and polygons (closed ways). Lines contain numerous points, and the line itself carries the attributes that define what it represents.  Polygons are the same as lines, except that the the line must finish where it begins in order to form a shape.  

ထို့အပြင် Relations ဟုခေါ်သော အမျိုးအစားတစ်ခုကိုလည်း OpenStreetMap မြေပုံများတွင် တွေ့မြင်နိုင်သည်။ မျဉ်းကြောင်းများအပေါ်တွင် အမှတ်များပါလေ့ရှိသကဲ့သို့ 
Relation တစ်ခုတွင်လည်း အမှတ်၊မျဉ်းကြောင်းနှင့် ဗဟုဂံပုံစသည့် အစုအဝေးများပါဝင်နိုင်ပါသည်။ မြေပုံရေးဆွဲမှုစွမ်းရည် တိုးတက်လိုပါက relations များကို ပြုပြင်တည်းဖြတ်ခြင်းကိုလည်း နားလည်သိရှိရန်လိုအပ်သည်။  

ဥပမာ။ အလယ်တွင် ကွက်လပ်ချန်လျက် လေးဘက်လေးတန် ကာရံဆောက်လုပ်ထားသော အဆောက်အဦကို မြေပုံထုတ်သည်ဆိုပါစို့။ အဆောက်အဦ၏အပြင်ဘက်အနားကို ခြုံငုံမိသောဗဟုဂံပုံတစ်ခုနှင့် အလယ်ကွက်လပ်ကိုကန့်သတ်ပြထားသောဗဟုဂံပုံများလိုအပ်မည်။ သို့မှသာယင်းကွက်လပ်ကို အဆောက်အဦ၏အစိတ်အပိုင်းတွင်မပါဝင်ကြောင်း ညွန်ပြနိုင်မည်ဖြစ်၏။ ထိုသို့ရေးဆွဲထားခြင်းကို relation ဟုသတ်မှတ်သည်။ Relation တွင် ဗဟုဂံပုံများစွာပါဝင်နိုင်ပြီး အဆောက်အဦ၏သတ်မှတ်ဖော်ပြချက်များကို ဗဟုဂံပုံများတွင်မဟုတ်ဘဲ relation တခုလုံးနှင့်တွဲစပ်ပေးရမည်။  

![An example of a multipolygon][]

မြေပုံပေါ်ရှိ အရာဝတ္ထုများကိုစုဖွဲ့ပြလိုလျှင် Relations ကိုအသုံးပြုသည်။ အခြားဥပမာများမှာ ... ဘတ်စ်ကားလမ်းကြောင်းများ၊ မြစ်နှင့် လမ်းမများကဲ့သို့ ရှည်လျားရှုပ်ထွေးသောအရာများ၊ တက္ကသိုလ်အဆောက်အဦများကဲ့သို့ တနေရာတည်းတွင်စုဝေးတည်ရှိသော ဗဟုဂံပုံအမျိုးမျိုးတို့ကိုစုဖွဲ့ပြလိုလျှင်အသုံးပြုသည်။  

OpenStreetMap တွင်တွေ့ရှိနိုင်သော Relations အမျိုးအစား ၄ မျိုးရှိသည်။ ယင်းတို့မှာ ဗဟုဂံပုံအမျိုးမျိုး၊ လမ်းကြောင်းများ၊ နယ်မြေသတ်မျဉ်းများနှင့် တားမြစ်ကန့်သတ်ချက်များ ( ဥပမာ.“ဘယ်”မကွေ့ရ) တို့ဖြစ်သည်။ ယခုသင်ခန်းစာတွင် ဗဟုဂံပုံအမျိုးမျိုးနှင့် လမ်းကြောင်းဖော်ပြချက်များကိုရှင်းလင်းပြသမည်ဖြစ်သည်။  

ဗဟုဂံပုံအမျိုးမျိုးပါဝင်သော Relations များဖန်တီးခြင်း
-------------------------------

ရှေ့ပိုင်းတွင်ဖော်ပြခဲ့သော ဗဟုဂံပုံ relation ကဲ့သို့အရာကို ရေးဆွဲရန်လေ့လာကြပါစို့။  

- ပုံသဏ္ဍာန်တစ်ခုကို ဦးစွာရေးဆွဲပါ။ ယခုဥပမာတွင် ထောင့်မှန်စတုဂံ ၃ ခုကိုရေးဆွဲပါမည်။ အောက်ပါပုံတွင် ကြည့်ပါ။

![Multipolygon ways][]

- ကွန်ပျူတာကီးဘုတ်မှ SHIFT ခလုတ်ကိုဖိလျက် ပုံများကိုတစ်ခုချင်းစီ နှိပ်၍ရွေးချယ်ပါ။  
- Choose *Tools->Create multipolygon* from the menu.  
- The tags window now contains the new multipolygon.

![New mp object][]

- Click on the edit button.  

- You should now see the relation editor window. This is a little bit complex because now you are adding tags to a collection of ways.  

![Building relation][]

- Relation အတွက် အညွှန်းဖော်ပြချက်ကို Tags and Members အကန့်တွင်တွေ့နိုင်သည်။ (အထက်ပါပုံတွင်ရှု)။ အညွှန်းများအကြောင်းကို ယခင်သင်ခန်းစာများတွင်ဖော်ပြပြီးဖြစ်သည်။  
- Relation တွင်ပါဝင်သောအစုဝင်များကို အောက်ဖက်ရှိဇယားကွက်တွင်တွေ့မြင်နိုင်သည်။ ယခုဥပမာတွင် အစုဝင် ၃ စုပါဝင်သည်ကိုတွေ့ရမည်။  
- Notice that we already have one tag defined for us, *type=multipolygon*. We need to add one more tag that defines the kind of object which the relation represents. We must add a tag that says *building=yes*.  
- အညွှန်းဖော်ပြချက်နေရာတွင် ကလစ်နှိပ်၍ရိုက်ထည့်ပေးရန်ဖြစ်သည်။ (ပုံတွင်ရှု)  

![Building yes][]

- The **roles** have already been properly assigned to the ways. Each member of a relation has a role, which indicates what that member's purpose is. In this case, the role of the outside polygon must be defined as **outer** and the role of the two inner polygons must be defined as **inner**. These are the roles that are available for members of a multipolygon.  

- မှန်ကန်မှုရှိပါက OK ကိုနှိပ်ပါ။ ဗဟုဂံပုံအမျိုးမျိုးပါဝင်သော relation ဖန်တီးမှု ပြီးမြောက်ပြီဖြစ်သည်။  

![New multipolygon][]

ထိုသို့သော ဗဟုဂံပုံအမျိုးမျိုးကိုဖန်တီးပြီးပါ ကမြေပုံပေါ်တွင် အောက်ဖော်ပြပုံအတိုင်း တွေ့မြင်ရမည်ဖြစ်သည်။  

![Multipolygon in Mapnik][]

အတွင်းအပြင်ခွဲခြားဖော်ပြရန်လိုအပ်သော ရှုပ်ထွေးသည့်အဆောက်အဦများ၊ ကျွန်းပေါ်ထွန်းသည့်မြစ် များကိုရေးဆွဲရာတွင် ဗဟုဂံပုံအမျိုးမျိုးပါဝင်သော အစုအဖွဲ့ကိုအသုံးပြုသည်။ အသေးစိတ်လေ့လာလိုပါက [OSM Wiki](http://wiki.openstreetmap.org/wiki/Relation:multipolygon) တွင်ဝင်ရောက်ကြည့်ရှုနိုင်ပါသည်။  

လမ်းကြောင်းအစုအဖွဲ့ဖော်ပြသည့် Relations
----------------

လမ်းကြောင်းရှည်များကို ဖော်ပြရာတွင် relations ဖြင့်ပြသခြင်းကအသုံးဝင်သည်။ ဥပမာ။ ဘတ်စ်ကားလမ်းကြောင်း၊ စက်ဘီးလမ်းကြောင်းများတွင် လမ်းပိုင်းများစွာပါဝင်လေ့ရှိသည်။ ထိုသို့သော လမ်းကြောင်းများကို ဖော်ပြရာတွင် မည်သည့်လမ်းပိုင်းများပါဝင်သည်ကို relation ချိတ်ဆက်ဖော်ပြနိုင်သည်။ ကားမှတ်တိုင်ကဲ့သို့ ထပ်ဆောင်းဖြည့်စွက်မှုများလည်း relation တွင်ထည့်သွင်းနိုင်သည်။ (အောက်ပုံတွင်ရှု)  

![Route relation][]

JOSM ဆော့ဖ်ဝဲလ်တွင် ဘတ်စ်ကားလမ်းကြောင်းပြ မြေပုံတစ်ခုရေးဆွဲခြင်းကိုလေ့လာကြည့်ပါမည်။  

- ပြေးဆွဲသောလမ်းကြောင်းများကို ဦးစွာရွေးပါ။ လမ်းကြောင်းပေါ်သို့ တစ်စိတ်တစ်ပိုင်းသာပါဝင်သောလမ်းများတွင် "Split Way" ကိရိယာကိုအသုံးပြု၍စိစစ်ခွဲခြားပါ။  
- When all the segments are selected, go to *Presets->Transport->Public Transport->Public Transport Route (Bus)*.  

![Public transport preset][]

- A new window pops up where you can enter information which applies to the route as a whole.

![New route relation][]

It is important to select the specific route type from the dropdown menu at the top. For bus routes two options are available, bus and trolleybus. Typically you would also enter name, reference number, from and to.

- "New Relation" တွင်ကလစ်နှိပ်ပါ။ ဗဟုဂံပုံအမျိုးမျိုးစုဖွဲ့ခြင်းမှာကဲ့သို့ မျက်နှာပြင်တစ်ခုထပ်မံထွက်ပေါ်လာသည်ကိုမြင်ရမည်။  

![Bus route relation][]

- *type=multipolygon* အစား *type=route* ဟုဖော်ပြထားသော အညွှန်းတစ်ခုမှတ်သားပြီးဖြစ်သည်ကိုသတိပြုပါ။ အခြားသောလမ်းကြောင်းများနှင့် ကွဲလွဲမှုရှိစေရန် ဘက်စ်ကားလမ်းကြောင်းဖြစ်သည်ကိုခွဲခြားဖော်ပြသည့် အညွှန်းတစ်ခုလည်းတွေ့ရမည်ဖြစ်သည်။  
- ပါဝင်သည့်လမ်းပိုင်းများ၏ **အခန်းကဏ္ဍ** (role) ကိုစဉ်းစားရန်အပိုင်းသို့ရောက်လာပါပြီ။ ယခုအပိုင်းသည် လမ်းကြောင်းတစ်ခုကို ဖော်ပြသည့်အတွက် အတွင်း၊ အပြင်ပိုင်းများကို သတ်မှတ်ဖော်ပြရန်မလိုပေ။ လမ်းကြောင်းတစ်ခု၏အစိတ်အပိုင်းအဖြစ် ဆော့ဖ်ဝဲလ်မှသိရှိနိုင်ပါသည်။ လမ်းပိုင်းတစ်ခုစီ၏ role ကို **route** အဖြစ်ဖော်ပြပေးနိုင်သော်လည်း ထိုသို့ပြုလုပ်ပေးရန်မလိုပေ။  
- ထို့နောက် OK ကိုနှိပ်ပါ။ လမ်းကြောင်းများစုဖွဲ့မှုကိုပြသော relation ပြုလုပ်မှု ပြီးမြောက်ပြီဖြစ်သည်။  

> မှတ်ချက်။ ။မြေပုံပေါ်ရှိ relations များအားလုံးကို အလိုရှိပါက ဘယ်ဘက်တွင်ရှိသောယခုပုံစံခလုတ်ကိုနှိပ်၍ relations များကိုဖော်ပြသော အကွက်ကိုဖွင့်လှစ်နိုင်သည်။![relation panel button][]{: height="30px"} ထိုအကွက်တွင်ပြုလုပ်ပြီးခဲ့သော relations များကို ပြုပြင်တည်းဖြတ်ခြင်း၊ အသစ်ရေးဆွဲခြင်းများပြုလုပ်နိုင်သည်။  

အကျဉ်းချုပ်ဖော်ပြချက်
-------

Relations များသည် နားလည်ရခက်ပြီး မကြာခဏအသုံးပြုရခြင်းမျိုးလည်းမရှိချေ။ သို့သော်နားလည်ထားရန်လိုအပ်ပေသည်။ မြေပုံရေးဆွဲရာတွင် relations အသုံးပြုရန်လိုအပ်လာပါက ယခုလေ့လာထားသည်များကို ပြန်လည်အသုံးချနိုင်ရန်အတွက်ရည်ရွယ်ပါသည်။ OSM Wiki တွင်ဖော်ပြထားသော အချက်အလက်များကလည်း သင့်ကို ကူညီထောက်ပံ့ပေးပါလိမ့်မည်။


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png