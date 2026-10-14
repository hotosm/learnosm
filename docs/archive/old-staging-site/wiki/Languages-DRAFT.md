#Languages & Translations - DRAFT  

##Transifex - managing the translation process (Uploading a file/module for translation)

Although it is possible to use a different source language for each module for translation, in this example English is used, and the Tranisfex site for LearnOSM is set to use English as the default.  

The files within LearnOSM have a suffix of .md  and are in the **markdown** format. The Transifex site does not entirely understand this format, but it will accept the files with their original filename, if they are described as a .txt file when uploading them. 

Revision of the modules is an ongoing process, so please only upload a module once it has been reviewed and amended as necessary. To submit a file/module for translaton, navigate to <https://www.transifex.com/hotosm/learnosm-1/content/> and click on the green button **+ Add New Resource** which will launch a window 

![selection_001](https://cloud.githubusercontent.com/assets/6763965/9771238/b0415c2e-572c-11e5-80fa-c2ac04fba396.jpg)

**File** - In the top box, browse to the file to be uploaded - for example;  
/home/nick/HOT/Test_Learnosm/Nick-Tallguy.github.io/_posts/en/coordination/0500-10-25-tasking-manager.md  
**NAME** - use the filename, eg: 0500-10-25-tasking-manager.md  
**FILE FORMAT** - use .txt

& upload the file. 

The file / module will be processed by the Transifex site and broken up into strings suitable for translation. Add a tag to the file to indicate which section the module belongs in, eg; **coordination**


##Transifex - downloading a completed translation  

You may have to explore the Transifex site to establish when a module has been translated - further investigation needed to see if it will send a notification.

Within the language concerned, click on the filename for a file which is completely translated, and click on **Download for use**, and your file will be downloaded;  
**for_use_learnosm-1_0600-12-13-osm-in-qgismd_de.txt**  

rename the file: **0600-12-13-osm-in-qgis.md** and place it in the appropriate folder, in this case
    /home/nick/HOT/Test_Learnosm/Nick-Tallguy.github.io/_posts/de/osm-data  

Before uploading, make sure the header information does not need amending. In this instance the translator has already carried out the necessary changes, and the header information is;

    ---
    layout: doc
    title: OSM-Daten in QGIS nutzen
    permalink: /de/osm-data/osm-in-qgis/
    lang: de
    category: osm-data
    ---
    
    OSM-Daten in QGIS nutzen
    =================

Now add this to LearnOSM, probably via this staging site, in your usual way. 

>**Note**  
>If in any doubt, run a few 'dip tests' on the text provided just to make sure LearnOSM is not being improperly used, for instance as a pizza sales advert! Perhaps put a few phrases through a translation site just to ensure the results are as expected.  

**The Transifex process seems to alter the formatting slightly** -  

      ![download complete][]
      
      -      The OSM data wil  

becomes  

      ![download complete][]
      
      -⇥ Die OSM-Da

which can be simply fixed using a search & replace in a text editor.  Search on -x and replace it with 6 spaces.  


##Adding New Languages
This involves editing 3 files;

/all-translation.json  
/_config.yml  
/_layouts/default.html  

###all-translation.json
Controls the language fields at the top of each web page. Adding a new language involves adding a section with this format (just copy & paste an existing section and then alter the two letter iso code explained below).    

	]
      },{
	"lang":"nb",
		"chapters":[
	  {% for post in site.posts %}
	  {% if {{post.lang}} == 'nb' %}
	  {% unless post.nosearch %}
	      {% include post.json %},
	  {% endunless %}
	  {% endif %}
	  {% endfor %}
	  {"label":"",
	   "url":""}
	]

In this instance **nb** is the two digit [iso 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).   
>Please note that **no** CANNOT be used as github reads this as a negative statement & does not display the page.

###config.yml  
Use copy and paste to add a section, for instance  

    nb:  
    tagline: "Lær deg OpenStreetMap steg for steg"  
    contribute: "Hjelpe oss å forbedre våre guider"  
    trainingspan: "Kan du hjelpe til med å organisere workshops?"  
    training: "Se her for øvelser for denne guiden (på norsk)"  
    feedbackspan: "Var dette kapittelet nyttig?"  
    feedback: "Gi oss tilbakemelding og hjelp oss med å forbedre guidene!"  
    getstarted: "Kom i gang"  


###_layouts/default.html  
Use an html editor such as [Bluefish editor](http://bluefish.openoffice.nl/index.html), scroll through the file until you find this section  

     <div class="fillG cell12" id="banner-top">
      <small class='language-switcher marginL cell6 cf'>
        <a lang='en'>English</a> |
        <a lang='de'>Deutsch</a> |
        <a lang='es'>Español</a> |
        <a lang='fr'>Français</a> |
        <a lang='hr'>Hrvatski</a> |
        <a lang='bi'>Bahasa Indonesia</a> |
        <a lang='it'>Italiano</a> |
        <a lang='ja'>日本語</a> |
        <a lang='nb'>Norsk</a> |
        <a lang='nl'>Netherlands</a> |
        <a lang='pt'>Português</a> |
        <a lang='ru'>Русский</a> |
        <a lang='sw'>Kiswahili</a> |
        <a lang='uk'>Українська</a> |
        <a lang='zh'>Simplified Chinese</a>
      </small>

& add an appropriate line before saving.  