# Contributing to LearnOSM

Thankyou for your interest in contributing to [learnosm.org](http://learnosm.org). This file explains how to make
contributions. We can also coordinate work with ['issues' here on github](https://github.com/hotosm/learnosm/issues?state=open), and discussion on the [learnosm-coord Mailing list](https://lists.openstreetmap.org/listinfo/learnosm-coord). Be sure to follow these channels if you are interested in ongoing contribution. 

## Text modifications and translations

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

## Contributing to site

Same as with content, to contribute, [fork this repository](https://help.github.com/articles/fork-a-repo), modify, then issue a [pull request](https://help.github.com/articles/using-pull-requests).

The site is hosted using [GitHub Pages](http://pages.github.com/), any changes to the gh-pages branch automatically update the site within minutes.
