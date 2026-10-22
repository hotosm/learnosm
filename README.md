# LearnOSM

Repository for https://learnosm.org 

![homepage](https://raw.github.com/hotosm/learnosm/gh-pages/homepage.png)

Any updates in the gh-pages branch automatically update the site within minutes.

## Contributing

For minor edits *in English documents*, simply locate the post you are interested in via the [posts](_posts) directory, and use the [edit](https://help.github.com/articles/editing-files-in-another-user-s-repository/) feature to fix typos, grammar and other minor items.

If you want to rework a document, submit a new document, modify pictures please [contact us](mailto:learnosm@hotosm.org) so that we can find the most convenient way for you. You may fork the project and submit a pull request but we nevertheless recommend to discuss your plans before investing a large amount of work.

<!--
Check out [CONTRIBUTING.md](CONTRIBUTING.md) for more on how to contribute directly to LearnOSM, run the site locally or develop new content.
-->

**Important:** If you want to translate documents from English or improve one of the existing translations, please check out  https://learnosm.org/en/contribute/translator/. We no longer accept translated contents in pull requests but use Transifex in order to manage translations.

## Staging

| Site | Repo (`gh-pages` branch) |
|---|---|
| https://learnosm.org | [hotosm/learnosm](https://github.com/hotosm/learnosm) |
| https://staging.learnosm.org | [hotosm/learnosm-staging](https://github.com/hotosm/learnosm-staging) |

learnosm-staging is a fork of this repo. Staging is where work happens; learnosm.org is what's published.

- **English content:** edit `_posts/en` in learnosm-staging directly (GitHub's edit button is fine).
- **Translations:** made in [Transifex](https://app.transifex.com/hotosm/learnosm-1/). Every night,
  translations at least 10% complete are committed to learnosm-staging. Fix mistakes in Transifex,
  not in the repo, or they get overwritten. To hold one back, add its filename to `.tx/hold.txt`.
- Staging redeploys on every commit, usually within a few minutes.
- **Publish:** [open a PR from learnosm-staging to learnosm](https://github.com/hotosm/learnosm/compare/gh-pages...hotosm:learnosm-staging:gh-pages)
  and merge it. Everything on staging goes live.
- Changes merged straight into learnosm (e.g. typo PRs) are merged back into staging every night.
