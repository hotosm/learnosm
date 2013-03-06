# Learn OSM

Repository for http://hotosm.github.com/learnosm/en/

Any updates in the gh-pages branch automatically update the site within minutes.

## Site architecture

LearnOSM is built with [Jekyll](http://jekyllrb.com/). All content can be found under `_posts/`. The site is multilingual and posts are organized by language code (`_posts/bi`, `_posts/en`, etc).

Additional content materials can be found in [the wiki](https://github.com/hotosm/learnosm/wiki/_pages).

## Contributing

To contribute, [fork this repository](https://help.github.com/articles/fork-a-repo), improve content or site, then issue a [pull request](https://help.github.com/articles/using-pull-requests).

Other guides than the beginner guide are managed in Google documents. Refer to a listing of these documents [in the wiki](https://github.com/hotosm/learnosm/wiki/_pages).

It's handy to run the site locally when editing content or code - Jekyll documentation contains a good section on [installation](https://github.com/mojombo/jekyll/wiki/Install).

### Front matter for guide documents

Each chapter in a guide constitutes a markdown document. In order to handle languages and translations and to relate the document with a specific guide and a couple of [YAML Frontmatter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) rules need to be in place.

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
- `category` contains the guide's shortname (currently there is only one guide in the Jekyll site: `beginner`).
