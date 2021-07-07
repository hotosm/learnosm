---
layout: doc
permalink: /en/contribute/translator-images/
lang: en
title: Translators - adding localised images for your language
category: contribute
nosearch: true
---

Translators - How to add local images for your language
======================================================

Most of the images on LearnOSM contain English words, but it is easy to add images which have the words in your language. This will also make understanding much easier for visitors to the site.  

Although the eventual aim is to have your nice new images on the main LearnOSM site, initially it is best to add them to our testing site, which you can find on Github at <https://github.com/Nick-Tallguy/Nick-Tallguy.github.io>. Once the images are uploaded and working here, one of the site admin's will quickly add them to the main site for LearnOSM.  

- TOC
{:toc}

Login to Github
-----------------

You will need a login for <https://github.com/>  

### Fork the staging site

Once you have a login to Github you will need to navigate to the testing and staging site at <https://github.com/Nick-Tallguy/Nick-Tallguy.github.io>  and **fork** the site by clicking on the **fork** button to the top right ![fork][]{: height="24px"}  

![Github 1][]

Your fork of the site will be an exact copy of the site at the time you created it - as the site is updated, your fork will be *behind* the staging site, and you will have to update it - more on this later, and if you are uploading images only once, you may never have to update your fork.   

Images - preparation
--------------------

### png format
It is possible to use other formats, such as .gif, but for a simple static image the easiest format is .png  

### image size

Maximum of 520 px (pixels) on the longest side. The site is viewed throughout the world, and has to load quickly and for static images there is currently a limit of 520px imposed.  

### Filenames for your image

Using **0200-12-27-start-osm.md** as an example and the image **start-osm_website.png** which has text on it in English.  

The files you have been translating are all in the **_posts** folder.  

Navigate to the file on **your fork of the repository** - this link is for the testing site - make sure you go to your fork instead <https://github.com/Nick-Tallguy/Nick-Tallguy.github.io/blob/master/_posts/0200-12-27-start-osm.md> and look for the image you want to replace. When you find the image, click on it, and it will load as a separate page, and the image will be identified as **Nick-Tallguy.github.io/images/beginner/start-osm_website.png**  

Assuming you have a new image, and your language is **Italian** (Transifex identifies your language with the code **it**), you should name your new image **start-osm_website_it.png**.  In other words, you have taken the original filename and added **_it** to it, just before it's identifier of .png.  

Uploading the image
--------------------

Navigate to the correct folder **of your fork**. The images are stored in a folder **images** and a sub-folder named after the category  

At the top of the file **0200-12-27-start-osm.md** you will see the header information;  

      ---  
      layout: doc
      title: OpenStreetMap.org
      permalink: /en/beginner/start-osm/
      lang: en
      category: beginner
      ---

From this, you can see your category is **beginner**, and you should navigate to that folder within the images folder - <https://github.com/Nick-Tallguy/Nick-Tallguy.github.io/tree/master/images/beginner> - you should be able to see the original **start-osm_website.png** image in this folder.  
 
The top of the web page will look like this  

![Github 1][]

To the right you can see the buttons ![Github 2][]{: height="24px"} and you should click on the **Upload files** button and upload each of your images that you have prepared.  

Having uploaded your images, you will need to .......  

Submit a pull request
----------------------

These images showing the flow should help  


![pull-request][]

![comment-pull][]

![compare-fork][]

or follow this guide **GitHub beginners guide - recommended!** <https://guides.github.com/activities/hello-world/>  

Updating Transifex so your new images display
---------------------------------------------

Return to Transifex, and at the foot of the module you have prepared the images for, you will see the image location and name, for instance  

      [website]: /images/beginner/start-osm_website.png

which you now change to 

      [website]: /images/beginner/start-osm_website_it.png

Go through each of the images that you have uploaded a new image for, updating the filename.

Finally - the images will display within a day or two
------------------------------------------------------

One of the site admin's will need to merge your pull request, and then your images will appear on the staging site at <http://nick-tallguy.github.io/en/>  

And once everyone is happy with the images and links, the changed files and new images will be added to <http://learnosm.org/en/>.  

Any problems, please make contact   
-----------------------------------

- send an email to <learnosm@hotosm.org>  
- send an email from the contribute section of <http://nick-tallguy.github.io/en/>, or  
- raise an issue on Github at <https://github.com/hotosm/learnosm/issues>, or  
- raise an issue on Transifex  

All of these means (and some others!) make their way to the same team.  


[Github 1]: /images/contribute/translate-image-header.png
[Github 2]: /images/contribute/translate-image-upload.png
[fork]: /images/contribute/translate-image-fork.png
[Github 2]: /images/contribute/translate-image-upload.png
[pull-request]: /images/contribute/creating_new_pull_request.png
[comment-pull]: /images/contribute/comment_your_pull_request.png
[compare-fork]: /images/contribute/choose_your_fork_to_compare.png
