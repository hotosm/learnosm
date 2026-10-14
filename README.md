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

## Translations and staging

| Site | Built from |
|---|---|
| https://learnosm.org | `gh-pages` |
| https://staging.learnosm.org | `transifex-sync` + any `staging/*` branches |

1. Translators work in [Transifex](https://app.transifex.com/hotosm/learnosm-1/).
2. Every night, translations that are at least 10% complete are pushed to the `transifex-sync`
   branch, and staging is rebuilt.
3. Check them on staging. When they look good,
   [open a PR from `transifex-sync` to `gh-pages`](https://github.com/hotosm/learnosm/compare/gh-pages...transifex-sync)
   and merge it to publish.

- Fix translation mistakes in Transifex, not in this repo: `transifex-sync` is rebuilt every
  night, so edits made there are lost.
- To hold back a translation, add its filename to [`.tx/hold.txt`](.tx/hold.txt).
- To try a change on staging only, push it to a branch in this repo named `staging/<name>`
  (e.g. `staging/playground`). Staging adds the changes from every `staging/*` branch on top of
  the translations; a branch that conflicts is skipped. Staging rebuilds nightly, or
  [on demand](https://github.com/hotosm/learnosm-staging/actions). Merge the branch into
  `gh-pages` to publish it, or delete it to drop it.
