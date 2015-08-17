# Contributing to LearnOSM

Thank you for your interest in contributing to [learnosm.org](http://learnosm.org). This file explains how to make
contributions. We can also coordinate work with ['issues' here on github](https://github.com/hotosm/learnosm/issues?state=open), and discussion on the [learnosm-coord Mailing list](https://lists.openstreetmap.org/listinfo/learnosm-coord). Be sure to follow these channels if you are interested in ongoing contribution. 

## Text modifications

For minor edits (typos, spelling, etc), you can use the [online github editing tools](https://help.github.com/articles/editing-files-in-another-user-s-repository/) to propose changes.

# Translations via Transifex
We are now using <https://www.transifex.com> to carry out the majority of our translations for LearnOSM. This is much simpler to manage for both the translator & the techie team. Please go to <https://www.transifex.com> and search for HOT-OSM, then LearnOSM if you can assist with any translations. 

# Translation workflow - new from November 2014  
Choose from one of the three options. The file will need to be created & placed in the correct folder.   

#### In translation header

This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

Also consider adding the header in the translation language.


## Option A  
The document for translation is sent as an email attachment to the translator. The files are simple text files and can be edited with any text editor, or a stand alone markdown editor may be installed by the editor if they prefer. At intervals the translator emails the partially translated file back, and the updates are integrated back into the site.   

## Option B
This workflow does not require the translator to install or run any software programmes on their computer & should be easy to administer. It has only become possible due to recent improvements to the editing process, explained here [online github editing tools](https://help.github.com/articles/editing-files-in-another-user-s-repository/).  

**Workflow for Option B**  
1.  A volunteer translator makes contact and agrees with a github helper on a section/chapter for translation. An issue is opened on LearnOSM ['issues' here on github](https://github.com/hotosm/learnosm/issues?state=open) listing the translator, github helper and exactly which section of LearnOSM is being translated.  
2.  Ensure the chapter of LearnOSM is up to date (probably from English).  
3.  Create a copy of the original document in the new language folder, ensure it has the header explaining that it is in the process of being translated.  
4.  The translator gets a github account & is directed to the file for translation.  
5.  The translator replaces the original text in the document with new language, issuing pull requests as they go - as per [online github editing tools](https://help.github.com/articles/editing-files-in-another-user-s-repository/). The translated text will only appear on LearnOSM when the 'pull request' has been authorised by a site administrator.  
6.  The translator can view the document by clicking on it in the repository - ensure the link is included in the issue, so that it is easy for all parties to find.    
7.  Either the translator or the github helper obtains screenshots in correct language & puts them in appropriate folder, updating the links in the translated document.  


## Option C  
Daniel Joseph has written a [detailed explanation of the translation workflow](https://github.com/AmericanRedCross/Guides/blob/master/TranslationWorkflow_LearnOSM/translatorWorkflow.md) assuming no technical/github know-how.

The outline procedure for contributing is: [fork the LearnOSM repository](https://help.github.com/articles/fork-a-repo), improve content or site, then issue a [pull request](https://help.github.com/articles/using-pull-requests).

Other guides than the beginner guide are managed in Google documents. Refer to a listing of these documents [in the wiki](https://github.com/hotosm/learnosm/wiki/_pages).

LearnOSM is built with [Jekyll](http://jekyllrb.com/). All content can be found under `_posts/`. The site is multilingual and posts are organized by language code (`_posts/bi`, `_posts/en`, etc).

It's handy to run the site locally when editing content or code - Jekyll documentation contains a good section on [installation](http://jekyllrb.com/docs/installation/).

For fresh translations always start with a copy of the English guide.

### Quick install guide for Windows

- Download and install [Ruby 1.9](http://rubyinstaller.org/downloads/), enable the PATH setting during installation
- Open a command prompt (cmd.exe) and install jekyll by typing `gem install jekyll`
- Install rdiscount by typing `gem install rdiscount --platform=ruby -v 1.6.8`
- Navigate to your local learnosm repository `cd C:\learnosm`
- Start the local webserver by executing the following 2 commands, or save them to a .bat file and start:

	```
    chcp 65001
    jekyll --rdiscount > jekyll_log.txt 2> jekyll_errorlog.txt
    ```

- Open a browser and go to localhost:4000

### Front matter for guide documents

Each chapter in a guide constitutes a markdown document. In order to handle languages and translations and to relate the document with a specific guide and a couple of [YAML Frontmatter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) rules need to be in place.

Example front matter for a guide chapter:

    layout: doc
    title: Moving Forward
    permalink: /en/beginner/moving-forward/
    lang: en
    category: beginner

Explanation:

- `layout` must be `doc`
- `title` is the plain title of the document, must not be repeated in the document's body
- `permalink` is the path to the document, must contain the language prefix (`en` in this case)
- `lang` is the language prefix of the document and must be the same as in `permalink`. This is redundant with `permalink` for Jekyll specific reasons.
- `category` contains the guide's shortname (currently there is only one guide in the Jekyll site: `beginner`).

### Structure, folders, file names
https://github.com/hotosm/learnosm/wiki/File-naming-in-_posts-directory

### Content formatting
https://github.com/hotosm/learnosm/wiki/Markdown-post-guidelines

### Images
https://github.com/hotosm/learnosm/wiki/Images-guidelines-beta

### Style guide
Proposal at https://hackpad.com/Proposed-Style-Guide-for-LearnOSM-1JJxS8NIQSX


## Contributing to site

Same as with content, to contribute, [fork this repository](https://help.github.com/articles/fork-a-repo), modify, then issue a [pull request](https://help.github.com/articles/using-pull-requests).

The site is hosted using [GitHub Pages](http://pages.github.com/), any changes to the gh-pages branch automatically update the site within minutes.
