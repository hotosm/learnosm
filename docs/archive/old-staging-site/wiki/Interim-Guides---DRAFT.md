
There are something in the region of 100 guides in [Learnosm](http://learnosm.org/en/) many of which appear in several languages. However most guides lack at least one language, which leads to '404' or 'broken link' messages.  

For instance, go to [Putting Maps on a Website with Mapbox](http://learnosm.org/en/map-design/mapbox/), then click on the link for [French](http://learnosm.org/fr/map-design/mapbox/) and you will see a web page indicating **404:Page Not Found**, which is not particularly helpful as you now do not know which languages that particular guide may be available in. Furthermore, if you start in French on the site, and search for **Putting Maps on a Website with Mapbox** you will receive no hits. 

Interim Guides are being created to improve this situation. For instance, in any language, search for **wiki** and you will get a hit for **Editing the OSM Wiki**, which when clicked on will display a [Page similar to this Russian version](http://nick-tallguy.github.io/ru/intermediate/editing-the-wiki/). You can now see which languages the guide is available in, and chose something that may help you. Furthermore there is a short link to the [Transifex site ](https://www.transifex.com) where our translations are taking place. So, instead of a broken link, we now have information helping to solve our problem, and we have information on how we can help to translate the site. 

The Aim
-------  
is to produce a guide for each missing language guide. You can view the [current position in relation to guides within LearnOSM in this 'read only' document](https://docs.google.com/spreadsheets/d/1NlJHTYAYpyyF5o9D8UMAsSzFG7lHY2cIi2mzncx530w/edit?usp=sharing). Click on the tab relating to a [staging site](http://nick-tallguy.github.io/en/), which is where we test things before passing them on to LearnOSM. The third column onwards on this spreadsheet relates to a language identified by its two letter ISO code (there are variations - the site cannot cope with 'no' so 'nb' has been used). Make sure you scroll down - there are currently 111 rows in use on this spreadsheet.  

As you scroll down, you will start to see the word 'missing' appearing in cells, which indicates that there is no guide available in that language, and no interim guide has been created either. You should also see at least a few cells that have been coloured khaki, and have the word **Interim** in the cell.

Producing an Interim Guide using the GitHub website tools
---------------------------------------------------------
These instructions are based upon the short [Github Guide to Editing Files](https://help.github.com/articles/editing-files-in-another-user-s-repository/)  

Initially navigate to [one of the existing interim guides, such as this one for updating the wiki](https://github.com/Nick-Tallguy/Nick-Tallguy.github.io/blob/master/_posts/en/intermediate/0300-12-25-editing-the-wiki.md), click on the pencil symbol so you see the file in its raw state, and copy & paste the entire file contents into a text editor such as notepad or gedit. Chose a name for it such as interim.txt & save it.  

Look at the [site audit spreadsheet](https://docs.google.com/spreadsheets/d/1NlJHTYAYpyyF5o9D8UMAsSzFG7lHY2cIi2mzncx530w/edit?usp=sharing) and establish which guide you would like to produce an interim guide for.  

Establish which languages that guide is actually available in, and navigate to one of the existing guides on [the staging site on Github](https://github.com/Nick-Tallguy/Nick-Tallguy.github.io). Navigate to the file for an existing guide - I'm showing the Tasking Manager in this example (_posts/en/coordination/0500-10-25-tasking-manager.md) by clicking on _posts then the two letter code for the language where a guide already exists, for instance en - I'm going to choose /coordination/ and the file 0500-10-25-tasking-manager.md. When the guide displays it's header will look something like this (after you've clicked on the pencil symbol)  

    ---  
    layout: doc  
    title: Tasking Manager  
    permalink: /en/coordination/tasking-manager/  
    lang: en  
    category: coordination  
    ---  
    
    Tasking Manager   
    ================= 

Copy this header information, and paste it into your text editor, replacing the header information that you did have. 

Save your document again, which should look like this;  

    ---  
    layout: doc  
    title: Tasking Manager  
    permalink: /en/coordination/tasking-manager/  
    lang: en  
    category: coordination  
    ---  
    
    Tasking Manager   
    ================= 
    
    This guide is currently unavailable. It is being translated. Please refer  
    to it in: 
    [English as a Google document](https://docs.google.com/document/d/1G2LrM0ASKh7X175Hi16srnOBtofmsZwlj5x7EJTvi1g/edit)  
    or  
    Please refer to it in [French](/fr/intermediate/editing-the-wiki/)
    
    To help produce translations for this site, go to <https://www.transifex.com> and search for **HOT-OSM**.  

I wish to produce an interim guide for placing in the French section of LearnOSM, so I change the 'en' letters to 'fr' in my text editor file;  

    permalink: /en/coordination/tasking-manager/  

becomes  

    permalink: /fr/coordination/tasking-manager/  


&  

    lang: en  

becomes  

    lang: fr  


There is no google doc available in French for this - [list is available from the LearnOSM wiki] (https://github.com/hotosm/learnosm/wiki) so I delete that section & amend my links to the guides that do exist.  


    Please refer to it in [French](/fr/intermediate/editing-the-wiki/)  

becomes  

    Please refer to it in [English](/en/coordination/tasking-manager/)  

### The New document ready to insert  

If the guide is available in other languages as well, I add this information to the text file, and my text file now looks like this:  
     
    ---  
    layout: doc  
    title: Tasking Manager  
    permalink: /fr/coordination/tasking-manager/  
    lang: fr  
    category: coordination  
    ---  
    
    Tasking Manager   
    =================  
    
    This guide is currently unavailable. It is being translated. 
    Please refer to it in:  
    [English](/en/coordination/tasking-manager/)  
    [Deutsch](/de/coordination/tasking-manager/)  
    [Bahasa Indonesia](/bi/coordination/tasking-manager/)  
    [Español](/es/coordination/tasking-manager/)  
    [日本語](/ja/coordination/tasking-manager/)  
    
    To help produce translations for this site, go to <https://www.transifex.com> and search for **HOT-OSM**.  

###Creating the new interim guide in Github.

Navigate to where you wish to insert the guide  

[_posts/fr/coordination/](https://github.com/Nick-Tallguy/Nick-Tallguy.github.io/tree/master/_posts/fr/coordination) and click on the **+** symbol to insert a new file.  

You will need to name your new file - the same as the original in the English section = **0500-10-25-tasking-manager.md**  

The text in the file is a complete copy and paste of the contents of the text file you created. You can click on preview to make sure that the formatting appears okay, before you save your changes, submitting a 'pull request' which will place your changes into the queue for one of the site admins to deal with. 
