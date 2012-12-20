# Learn OSM

Repository for http://hotosm.github.com/learnosm/en/

Any updates in the gh-pages branch automatically update the site within minutes.

LearnOSM is built with Jekyll, learn more about Jekyll here:

[Jekyll](http://jekyllrb.com/)

## Front matter for guide documents

Each chapter in a guide constitutes a markdown document. In order to handle languages and translations and to relate the document with a specific guide and a couple of [YAML Frontmatter] rules need to be in place. *Note that the front matter described here is subject to slight changees with the [ongoing site build](https://github.com/hotosm/learnosm/issues/8).*

Example front matter for a guide chapter:

    layout: doc
    title: Moving Forward
    permalink: /en/beginner/moving-forward
    lang: en
    category: beginner

Explanation:

- `layout` must be `doc`
- `title` is the plain title of the document, must not be repeated in the document's body
- `permalink` is the path to the document, must contain the language prefix (`en` in this case)
- `lang` is the language prefix of the document and must be the same as in `permalink`. This is redundant with `permalink` for Jekyll specific reasons.
- `category` contains the guide's shortname (`beginner` in this case)
