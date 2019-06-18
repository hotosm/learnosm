---
layout: doc
permalink: /en/contribute/translator/
lang: en
title: Translators using Transifex - instructions
category: contribute
nosearch: true
---

Translators using Transifex - instructions
========================

**This guide is still at the draft stage.**  

- TOC
{:toc}

This guide is an updated version of the guides currently located at <https://github.com/Nick-Tallguy/Nick-Tallguy.github.io/wiki/Translator-instructions-for-Transifex>. When these instructions are complete they will be added to the site at <http://learnosm.org/en/> and made to appear in all available languages.  

Transifex
------------

The volunteers who update LearnOSM have tried various ways to provide translations for the site, but have found that the simplest for all concerned involves using <https://www.transifex.com> . We are part of the Humanitarian OpenStreetMap Team <https://hotosm.org/> and fall within their charitable status. Transifex kindly allow us to use their services free of charge.  

The Two sites
-------------

### LearnOSM
The main LearnOSM site is at <http://learnosm.org/> and this is the site we are aiming to update. If you search on the internet, this is the site you will find. The modules on this site are all at 100% completion, but there are a few shortcuts in place to make sure that visitors do not get .404 errors.   

There are also some translations on this site which were created before we started using Transifex. However, these modules are gradually becoming out of date, and we would like them replaced with new translations provided by you using Transifex.  

### The Staging or testing site
We have a second site <http://nick-tallguy.github.io/> which we use for testing purposes, and which is used to allow translators to check on their progress and see how the site will appear in their language.  

When we are testing things out they will appear on the staging site - but sometimes they never appear on the main LearnOSM site - not all ideas are good! If we are considering altering the layout of pages, changing the margins, or otherwise altering the site it will appear here first. Modules which are being developed are also created on the staging site and reviewed before being placed on the main site, and into Transifex for your translation.  

The staging site is also there for you to check on your progress and to make sure things are formatted correctly - if you accidentally alter the 'address' for an image, the image will not appear on the web page, but you can review your work here, return to Transifex and fix the problem. **Modules appear on the staging site when they are at least 10% translated.** If you can't find the module you've been translating, you've probably made a mistake which we hope you can correct using the information from this guide. We're still working out the best time(s) to update the site, and at present (June 2017) the site updates at least once a day.  

Getting started
---------------

1. Go to <https://www.transifex.com> and log in, or create an account.  
2. Once logged in, search for **HOTOSM** and when you find it, request to join the team of translators  
3. **HOTOSM** has several different projects on Transifex and LearnOSM is not always the most urgent - for instance a new version of the Tasking Manager may need 'strings' translated ready for its deployment.  

### Joining a Language Team

Before requesting a new language, check to see which languages are already in use. It may be that your language team already exists within **HOTOSM**, and you just need to change your search slightly.  

A language team may include; translators, reviewers and co-ordinators, or you may be the only person doing the translations for your language.  

### 1-essential_setup txt

There are some language 'strings' which appear within fairly complex files needed to make LearnOSM work in your language. These strings have been put together into a file called **1-essential_setup.txt** and this file should be your first priority when starting to translate LearnOSM.  

Please check back on this file at intervals as well please, as we sometimes add extra strings - for instance we added a ![up-arrow][]{: height="24px"} at the bottom of each page, and it needed the language string **Return to top of page**.  

**Please note**  
Most, but not all of the strings are a simple translation.  
However, the string:  

      Replace all of this text with the one word to be   
      used in the 'language switcher', such as English,   
      Español, or Русский  

just requires you to provide the name of your language in its native tongue. This may only be one word, such as **Español**, or it may be more than one word.  

### The Beginner Section is next

Please translate the following, preferably in this order;  

1. 0200-12-31-beginner.md  
2. 0200-12-29-introduction.md  
3. 0200-12-27-start-osm.md  

**We will only add you're completed translations to the main LearnOSM site once you have translated *1-essential_setup.txt, 0200-12-31-beginner.md, 0200-12-29-introduction.md, and 0200-12-27-start-osm.md***  

Translating a module - using 0200-12-31-beginner as an example  
--------------------  

The first few lines of any module (apart from 1-essential_setup.txt) are instructions to the computer on how and where to display the module. If you get it wrong you may have trouble finding it, and it may cause problems elsewhere on the site - however, the problems are easily fixed - read on......  

### Three dashes  

      ---  

The three dashes are a computer instruction - just copy them. You can use this button ![tx-copy-button][]{: height="34px"} and then click on ![tx-save][]{: height="34px"}  


### layout doc

      layout: doc  

is a computer instruction and should be copied across unchanged. The computer is not friendly and it will not accept any variations! The spacing must be exactly the same and it must be a colon. The safest thing to do is ![tx-copy-button][]{: height="34px"} and then click on ![tx-save][]{: height="34px"}  

> If your is a right to left language, such as Arabic or Persian, please add **-rtl** after **doc** so that it reads **layout: doc-rtl**  

### permalink en beginner

      permalink: /en/beginner/  

This needs altering. The **/en/** part of the string is instructing the computer that this is part of the English section. You need to alter this to your language. Transifex is very helpful, if you look at your screen you will see in the web address bar something like (I'm using Hungarian in this example)  

      https://www.transifex.com/hotosm/learnosm-1/translate/#hu/0200-12-31-beginnermd/51681420  

and the /#hu/ indicates that the language code is **hu**. You will also see this information elsewhere on your screen, looking something like this ![Hungarian][]{: height="34px"}  

In this example, with the language code **hu**, you need to change the string to read  

      permalink: /hu/beginner/  

and then save it.  

Some language codes have more than two letters, such as **zh_TW**.  Please ensure that you use your language code in exactly the same way as Transifex does. The permalink for Taiwanese is;  

      permalink: /zh_TW/beginner/

### lang en

      lang: en

Copy this using the ![tx-copy-button][]{: height="34px"} button, then change the /en/ part so that it reads (for Taiwanese);  

      lang: zh_TW

### title Beginner's guide

      title: Beginner's guide  

Copy using the ![tx-copy-button][]{: height="34px"} button, then translate the text after **title:** - for Taiwanese this becomes (make sure there is a space after title:);  

      title: 初學者指南  

### category beginner  

      category: beginner  

Copy this and do not change anything - it remains as;  

      category: beginner  

### cover yes

      cover: yes  

Copy this and do not change anything - it remains as;  

      cover: yes  

### nosearch true

      nosearch: true

Copy this and do not change anything - it remains as;  

      nosearch: true

### Beginner's Guide

Translate this - for Taiwanese it becomes;  

      初學者指南  

### line of equals signs

Copy this and do not change anything - it remains as;  

      ======

### This guide shows step by step how to get started etc

Translate this in full - the full phrase in Taiwanese becomes;  

      初學者指南將會導引你一步一步進入開放街圖的世界。你會學會  

### how to set up an account etc

Translate the full string(s) - for Taiwanese this becomes;  

      會如何申請帳號，如何使用地圖繪圖軟體，以及如何到外實地探查  

### and collect information to put on the map etc

Translate the full strings until you reach the;  

      [HOT Remote Mapping](/en/coordination/)  

For Taiwanese this becomes;  

      [人道主義開放街圖團隊遠端製圖](/zh_TW/coordination/) 的資訊  

so that the full string for Taiwanese is;  

      ，收集資訊畫到地圖上。協作章節包含了關於[人道主義開放街圖團隊遠端製圖](/zh_TW/coordination/) 的資訊  

Notice that the language code has been changed from **en** to **zh_TW**  

### This guide may be downloaded as etc

> This guide may be downloaded as ......

LearnOSM will no longer be providing downloadable documents in this fashion. The style sheet for the site has been updated and prints may be obtained by using the menu of the web browser you are viewing the site with (Chrome, Firefox, etc..). As it would be very time consuming to have every document translated again, just because this paragraph has been removed, a software 'fix' has been implemented, which blanks the first instance of text beginning with a > symbol.

It is easier to replace this section of text with something like;  
\> This text may be ignored as it is no longer required and will not appear on the website.

### Reviewed 2017 etc

      > Reviewed 2015-07-12  

in Taiwanese becomes;  

      > 2015-07-12 審閱  

The \> remains, **Reviewed** is translated, and the date is put into a format that would be understood (The date in this section uses the format)  

      Year-month-day of month  

 > Don't forget you can review your translations on <http://nick-tallguy.github.io/en/> - this site updates roughly once a day.  


## 0200-12-29-introduction  

The first parts of this module follows the pattern you have learnt whilst translating the beginner module, but there are some additional things to be aware of.

### A village in Indonesia

      ![A village in Indonesia][]

This is all computer instruction, use ![tx-copy-button][]{: height="34px"} and then click on ![tx-save][]{: height="34px"}  

it remains as;  

      ![A village in Indonesia][]

Sometimes you will see the image link with extra information, such as this link for the ![tx-save][]{: height="34px"} button;  

      ![tx-save][]{: height="34px"}

copy it unchanged.  

Please do this for all of the image links that you find whilst translating.  

### A village in Indonesia - the anchor

Near the end of translating a module you will find the anchor's for the image links. The anchor for \!\[A village in Indonesia\]\[\] appears as;  

      [A village in Indonesia]: /images/beginner/village-in-indonesia.png  

and should be copied across unchanged.  

      [A village in Indonesia]: /images/beginner/village-in-indonesia.png  

## Hidden Text

Some text is hidden from the normal viewers, perhaps as instructions, or more likely as something which will be expanded upon later. It takes the form of;  

      <!-- all of the text between these markers is hidden -->  

You do not need to translate this text, but please copy it across unchanged (so that your translation is at 100% when you finished, and it will then be copied across to the main site. Sometimes the hidden text can be extremely large, extending over several paragraphs.  

Any problems, please make contact   
-----------------------------------

- send an email to <learnosm@hotosm.org>  
- send an email from the contribute section of <http://nick-tallguy.github.io/en/>, or  
- raise an issue on Github at <https://github.com/hotosm/learnosm/issues>, or  
- raise an issue on Transifex  

All of these means (and some others!) make their way to the same team.  

<!--
Links to Transifex guides  

-----------------------------------------------------------

## Below this line is waiting for review - the 'old instructions'

You are viewing these instructions on a 'staging site', but the information is transferred frequently between this site and the main LearnOSM site. The [current staging site can be viewed here](http://nick-tallguy.github.io/en/). By using this staging site as an interim, we can check that we haven't lost any formatting marks in the translation process. Don't worry about losing the formatting - we'll put it back in afterwards, as long as we can work out where it goes.

LearnOSM has been using Transifex for a while, but we're still learning! Feedback is appreciated. At present we're not sure how many formatting marks will actually appear in the file that you view, or in the file which we download at the end of the process, so this guide is written on a very provisional basis.

There are limitations on how many languages we can actually display on LearnOSM. Please check if there is a generic version of your language before requesting another language. Although Transifex can cope with the variations on Spanish & English, LearnOSM cannot - please can you see if the main language 'will do'. Get in touch if there is a real problem and we'll try to sort something out.

## Priorities  

We are carrying out a review of any guide before uploading it to Transifex, and you will see the date of that review at the head of the file. Some of these guides may already have been translated, but we can only offer the guide for translation from the latest version, which will be the one with the review date. It may be that only the context has altered where some guides have moved to different sections of LearnOSM. As there is no way for us to indicate that a particular module does not need translating in a particular language, you may wish to compare the modules against what is already on [LearnOSM](http://nick-tallguy.github.io/en/), in case it has already been translated. In a perfect world we would like each module translated, and another person to verify the translation - this is possible with the Transifex system, but only if enough people provide translations!



### essential-setup txt

This is the file that contains all of the strings we need to use to make a language appear on the site, and to label all of the buttons. It's the first file we will need translating. Many of the strings appear on the Home page of the language you are translating, other strings will be used by the maintenance volunteers when they are adding downloadable versions of the guides, and also to add links to available sections.  

### The priorities column  

When you view the list of 'resources' for translation you should see a timer icon at the far right of the list. We can alter the priority of a guide using this timer. At present the only 'resource' which has a priority set is the **essential-setup.txt** resource which we need for ongoing maintenance. If / when there is an ongoing **Activation** because of a disaster, other guides may be labelled as more urgent.  

### beginners section  
For anyone new to Hot, the beginners section will give them some understanding of the system, and how to carryout basic editing.

### JOSM
Considered by many to be the editor needed if a 'mapper' is to progress beyond the beginner stage.  

### Coordination  
This section is being completely reviewed during 2015, & sections will only appear for translation when we are satisfied they are anticipated to be 'stable'. 

### Other Chapters
If you have an interest in a particular subject, or role within an organisation, you may wish to translate something from elsewhere on the site. If we've reviewed it, and the images associated with the site, it will be available for translation. If there is something you wish to see translated, but it is not available at present, please let us know and we will prioritize it.  email to learnosm@hotosm.org is the easiest route.
## What to translate
### From this header,  
`---`  
`layout: doc`  
`title: iD Editor`  
`permalink: /en/beginner/id-editor/`  
`lang: en`  
`category: beginner`  
`---`  
only the title **iD Editor** requires translation.

### From the main body  
Please only change the words in the text - the formatting marks should be left in place  
`The iD Editor`  
`=============`  

`> This guide may be downloaded as [beginner_id-editor_en.odt](/files/beginner_id-editor_en.odt) or [beginner_id-editor_en.pdf](/files/beginner_id-editor_en.pdf)  `  

In the extract above, you should ignore   
`[beginner_id-editor_en.odt](/files/beginner_id-editor_en.odt)`  
and  
`[beginner_id-editor_en.pdf](/files/beginner_id-editor_en.pdf)`  

This link should also be ignored  
`![image1][]`  
as should the file link which relates to it, which will probably be at the foot of the page.  
`[image1]: /images/beginner/id-editor_image1.png`    

The spaces at the beginning of lines of text are formatting instructions that the text and images should be indented. There are often two spaces at the end of a line of text, which is also a formatting instruction, as is  `>`  if it is at the beginning of a line. 
-->

[up-arrow]: /images/arrow-up.png
[tx-copy-button]: /images/contribute/tx-copy-button.png
[tx-save]: /images/contribute/tx-save.png
[Hungarian]: /images/contribute/Hungarian.png
