# LearnOSM Translation Staging: Migration Plan

Move the nightly Transifex → staging-site pipeline off Nick Allen's personal server and GitHub account
onto HOT-owned infrastructure (Windmill + `hotosm` GitHub org + `learnosm.org` Route53 zone).

---

## 1. Background

### Current flow (to be replaced)

1. Nightly (05:35) on Nick's server, `tx-10pc_pull_git_push.sh`:
   - `git pull` on a full clone of `github.com/Nick-Tallguy/Nick-Tallguy.github.io` (~1 GB).
   - `tx pull -a --minimum-perc 10`: pulls every translation ≥10% complete into `translations/`.
   - Copies `0[1-9]*.md` and `19*.md` into a temp folder (the `*.txt` resources, which look like video
     subtitles, are ignored).
   - Strips the **first line starting with `>`** (`sed -i '0,/^>/{/^>/d;}'`) from every file
     **except** these prefixes: `0170-*`, `0200-12-03-*`, `0200-12-05-*`, `0200-12-23*`,
     `0200-12-31-*`, `0450-*`, `0500-*`, `0900-12-04*`, `1900-12-31*`.
   - Moves `*_<lang>.md` into `_posts/<lang>/`, commits, pushes.
2. That repo's GitHub Pages build is the staging site (`nick-tallguy.github.io/en`).
3. A reviewer checks new translations there and **copies them over to `hotosm/learnosm` by hand**.

Problems: it depends on one person's server and account, the copy to prod is manual, and the script
relies on state that persists between runs (`cp -u` mtimes, a temp folder emptied at the end).

### Target flow

```
                        ┌───────────────────────── Windmill (HOT) ─────────────────────────┐
Transifex ── tx pull ──►│ DAILY  learnosm_transifex_sync.sh                                │
 (TX_TOKEN)             │   shallow/sparse clone hotosm/learnosm@gh-pages                  │
                        │   → tx pull + transform → force-push branch `transifex-sync`     │
                        │   → dispatch staging deploy workflow                             │
                        └──────────────────────────────────────────────────────────────────┘
                                         │ push                      │ workflow_dispatch
                                         ▼                           ▼
                     hotosm/learnosm                       hotosm/learnosm-staging (tiny repo,
                       gh-pages   ◄── manual PR ── transifex-sync   one workflow file, no content)
                       → learnosm.org                       checkout hotosm/learnosm@transifex-sync
                                                            → jekyll build → GitHub Pages
                                                            → staging.learnosm.org
```

Key properties:

- **Staging-only changes go on `staging/*` branches.** Any branch named `staging/<name>` in
  `hotosm/learnosm` is applied on top of the sync branch when staging builds, so it's visible on
  staging.learnosm.org but not on learnosm.org. Merge it into `gh-pages` to go live, or delete it.
  Staging rebuilds every night, or on demand from the Actions tab of `hotosm/learnosm-staging`.

- **Stateless and rebuilt nightly.** Every run starts from prod `gh-pages` plus a fresh, full Transifex pull.
  The `transifex-sync` branch is always "prod + all pending translations". There are never merge
  conflicts, and after a merge the diff drops to zero by itself.
- **Prod only changes via a PR, opened by hand when a batch is ready.** Branch protection on `gh-pages` makes sure the bot can't deploy directly.
- **The staging repo is only a Pages host.** It holds one workflow file and no content, so there's no 1 GB
  duplicate and no fork to keep in sync. It's needed because GitHub Pages allows one site per repo.
- **Staging matches the PR.** Staging builds from the same branch the PR merges.

---

## 2. Review-process implications (agree these with the Training WG first)

1. **Fix formatting in Transifex, not in the PR.** The branch is rebuilt from scratch nightly, so
   edits made on `transifex-sync` are lost the next night. Edits made directly in prod would show up
   in the PR as a "revert" until fixed in Transifex. Transifex is the source of truth. (This was
   already partly true before, since any later Transifex change overwrote manual fixes.)
2. **Holding back a contribution** (e.g. from an unknown translator): add a line to `.tx/hold.txt`
   in `hotosm/learnosm` (§5), or reject/unreview the strings in Transifex. Longer term, consider
   `tx pull --mode reviewed` so only strings reviewed in Transifex get pulled.
3. **Merge when ready.** When a batch looks good on staging, open a PR from
   <https://github.com/hotosm/learnosm/compare/gh-pages...transifex-sync> and merge it. It keeps
   updating with each daily push until merged. Merging replaces the manual copy step. (A scheduled
   job to open the PR automatically was considered and dropped: not needed at current volume.)
4. **New languages.** Transifex may produce languages that prod doesn't have yet. The old script
   targets `ar, bn_BD, ca, he, jv, kn, lb, lt, pt_BR, sl`, which have no `_posts/` folder in prod.
   Their files will show up in the PR. Going live properly also needs a `translations.<lang>` block in
   `_config.yml`, which is a separate manual PR. Reviewers can put them in `hold.txt` until then.
5. **Open questions:**
   - Is the `>`-strip exclusion list still accurate? The old script has a commented-out
     `rm 0500-10-29*`, so the list is clearly maintained by hand.
   - Should the `*.txt` resources (`essential_setup`, `adding-a-building-...`, etc.) stay excluded?
   - Is `--minimum-perc 10` still the right threshold?

---

## 3. Resources & accounts

| Item | Owner | Notes |
|---|---|---|
| Transifex API token | HOT **service account** in the `hotosm` Transifex org | Needs read access to project `learnosm-1`. The API v3 / Go `tx` CLI requires a token even for public projects. Don't use a personal account. |
| GitHub token | HOT bot account (fine-grained PAT) or org GitHub App | See scopes below |
| `hotosm/learnosm-staging` repo | `hotosm` org | Public, empty except one workflow |
| DNS `staging.learnosm.org` | Route53 zone `learnosm.org` | CNAME → `hotosm.github.io.` |
| Windmill folder `f/shared` (workspace `hot-staff`) | HOT Windmill | 1 script, 1 schedule, 1 new secret variable |

### GitHub token scopes (fine-grained PAT, resource owner `hotosm`)

| Repository | Permission | Why |
|---|---|---|
| `hotosm/learnosm` | Contents: **Read and write** | push `transifex-sync` branch |
| `hotosm/learnosm-staging` | Actions: **Read and write** | `workflow_dispatch` the staging deploy |
| (both) | Metadata: Read | implicit |

Set an expiry and a calendar reminder to rotate it, or use a GitHub App installation token to avoid
expiry entirely.

### Windmill secret variables

| Path | Value |
|---|---|
| `f/shared/transifex_api_key` | Transifex API token (**already exists**; currently a personal token, swap for a service-account token) |
| `f/shared/github-repo-rw` | GitHub token above (existing HOT token, read/write on hotosm repos) |

Marked **secret**.

---

## 4. One-off setup steps

### 4.1 `hotosm/learnosm` (prod repo)

1. **Branch protection on `gh-pages`** (Settings → Rules/Branches):
   - Require a pull request before merging.
   - Don't add the bot to any bypass list.
   - Block force pushes and deletions.
   - Leave `transifex-sync` **unprotected**, because the bot force-pushes and deletes it.
2. **PR adding the Transifex config:**
   - Add `.tx/config`, with the content of the `config` file Nick provided, unchanged.
     `file_filter = translations/...` is fine because the sync script runs `tx` in a scratch directory,
     not in the repo.
   - Add `.tx/hold.txt`, an empty file for now (§5).
   - Jekyll ignores dot-directories by default, so `.tx/` won't be published.
3. Delete the loose copies `config` and `tx-10pc_pull_git_push.sh` from the repo root (currently
   untracked; don't commit them to `gh-pages`, or Jekyll will publish them).

### 4.2 `hotosm/learnosm-staging`

1. Create a public repo `hotosm/learnosm-staging` with a README and `main` as the default branch.
2. Add `.github/workflows/deploy.yml` (§5).
3. Settings → Pages → Source: **GitHub Actions**.
4. Settings → Pages → Custom domain: `staging.learnosm.org`. Tick **Enforce HTTPS** once the
   certificate has been issued.
5. Settings → Environments → `github-pages`: allow deployments from `main`.

### 4.3 DNS (Route53, zone `learnosm.org`)

| Name | Type | Value | TTL |
|---|---|---|---|
| `staging.learnosm.org` | CNAME | `hotosm.github.io.` | 300 |
| `_github-pages-challenge-hotosm.learnosm.org` | TXT | *(value from GitHub org settings)* | 300 |

The second record comes from **github.com/organizations/hotosm/settings/pages → Add a domain →
`learnosm.org`**. Verifying the domain at org level stops any other GitHub account from claiming
`staging.learnosm.org` (or any `*.learnosm.org`) if our Pages repo is ever misconfigured or deleted.
That's the standard protection against subdomain takeover. Existing records (apex A → GitHub Pages, `www`
→ S3 redirect) are unchanged.

### 4.4 Windmill

1. Check the secret variable `f/shared/github-repo-rw` covers the scopes in §3.
2. Check the worker image has `git`, `curl`, `jq`, `tar`, `base64`, and GNU `sed`. If `jq` is
   missing, add it via a worker-group init script (`apt-get install -y jq`) or a custom image.
3. Deploy the script `f/shared/learnosm_transifex_sync` (§5) from `hotosm/windmill-scripts`.
4. Schedules (UTC):
   - `transifex_sync`: `0 35 5 * * *` (daily 05:35, same as today).
     Windmill uses 6-field cron with seconds.
5. Set an **error handler** on the schedule (Slack/email to whoever owns this) so failures are seen.
6. Windmill git sync puts the script under version control in HOT's Windmill repo.

### 4.5 Cutover

1. Run the new pipeline alongside Nick's for 1–2 weeks. Compare the `transifex-sync` branch diff with what
   lands in `Nick-Tallguy.github.io`. They should match, except that new-language files show up in the
   branch and stale files in Nick's repo don't.
2. Ask Nick to disable his cron job.
3. Update `CONTRIBUTING.md` / Training WG docs: staging URL is `https://staging.learnosm.org/en/`,
   merging happens via a PR opened by hand, and fixes go in Transifex.
4. Ask Nick to archive `Nick-Tallguy.github.io`, or add a notice pointing to the new staging URL.

---

## 5. Code

The code lives in the repos, not here, so there's only one copy to maintain:

| What | Where |
|---|---|
| Daily sync script (§1 target flow) | `hotosm/windmill-scripts`: `hot-staff/f/shared/learnosm_transifex_sync.sh` (+ `.script.yaml`) |
| Schedule (committed **disabled**) | `hot-staff/f/shared/learnosm_transifex_sync_daily.schedule.yaml` (`0 35 5 * * *`) |
| Transifex config | `hotosm/learnosm`: `.tx/config` (Nick's `config`, unchanged) |
| Hold list | `hotosm/learnosm`: `.tx/hold.txt` (one filename glob per line, `#` comments) |
| Staging deploy workflow | `hotosm/learnosm-staging`: `.github/workflows/deploy.yml` |

Implementation notes:
- Secrets are read with `wmill variable get <path> --json | jq -r .value`, the same pattern as
  `f/shared/tm_sandbox_exports`.
- The language of each file is derived from the `file_filter` prefixes in `.tx/config`
  (e.g. `0450-10-25-id_issues_` + `pt_BR` + `.md`), so there's no hard-coded language list.
  Files that don't match a known prefix are skipped with a warning.
- The `>`-strip exclusion list and the `0[1-9]*.md` / `19*.md` filter are ported 1:1.
- Front-matter repair for translations: `lang:` is forced to the file's language, `/en/...`
  permalinks become `/<lang>/...`, and a missing slash is restored (`/zh_CNjosm/` → `/zh_CN/josm/`).
  Pages whose front matter has no `layout:`/`permalink:`/`lang:` (e.g. a translator translated the
  keys themselves) are logged as `WARNING` and must be fixed in Transifex.
- `.tx/config` differs from Nick's copy in two `file_filter`s (`0450-12-25-id_issues_`,
  `0450-12-27-id-imag_`), matching the file names actually used on the site.
- When nothing differs from `gh-pages` (all merged), the sync script deletes `transifex-sync`,
  which also closes any open PR, and staging falls back to building `gh-pages`.
- When the content and base are unchanged since the last run, nothing is pushed, so any open PR
  timeline stays quiet.
- The staging build removes `CNAME`, overrides `url`, disallows robots, drops the Matomo
  tracking script and adds a red "STAGING" banner. None of this is committed.
- The script was tested end to end against a local bare repo with stubbed `tx`/`wmill`/`curl`
  (strip / no-strip, hold, new-language folder, `.txt` skipped, no-op re-run, branch deletion after merge).

---

## 6. Implementation checklist

- [ ] Agree review-process changes (§2) with the Training WG, and answer the open questions there
- [ ] Transifex service account + API token
- [ ] GitHub bot account / App + token with scopes in §3
- [ ] `hotosm/learnosm`: branch protection on `gh-pages` (§4.1)
- [ ] `hotosm/learnosm`: PR adding `.tx/config` + `.tx/hold.txt`; remove loose `config` / script from root
- [ ] Create `hotosm/learnosm-staging` with `deploy.yml`, Pages source = Actions (§4.2)
- [ ] Route53: `staging` CNAME + org domain-verification TXT (§4.3)
- [ ] Verify `learnosm.org` in hotosm org Pages settings
- [ ] Windmill: variable, script, schedule, error handler (§4.4)
- [ ] Manual run of `transifex_sync` → check branch diff + staging site
- [ ] Parallel run 1–2 weeks against Nick's pipeline (§4.5)
- [ ] Nick disables cron; update docs; archive old staging repo

## 7. Follow-ups outside the pipeline

- **English source changes don't reach Transifex automatically.** When an `_posts/en/` file that
  is a Transifex resource changes (e.g. the TM5 section in `tm-disambiguation`), someone with
  Transifex access must update the source (`tx push --source -r <resource>`, or upload in the
  Transifex UI). This was previously done by hand by the staging maintainers.
- Fix in Transifex: the German `0600-12-09-osm2pgsql` translation has translated front-matter keys
  (`Titel:`, `Sprache:` ...); fixed in prod, but the sync will bring it back until fixed upstream.

## 8. Things to verify during implementation

- ~~Pin a real `tx` release.~~ `v1.6.17` is the latest (checked 2026-10-14); amd64/arm64 assets picked by `uname -m`.
- ~~Windmill internal variables API.~~ Uses `wmill variable get` + `jq`, already used by `f/shared/tm_sandbox_exports`.
- **Transifex token works with the Go `tx` CLI** (it needs an API v3 token) and has access to `learnosm-1`.
- **`--filter=blob:none --sparse` with `--depth 1` push.** This should work against github.com. If
  pushing fails, drop `--filter`/`--sparse` and keep `--depth 1`. That clones ~240 MB instead of a few MB.
- **The `>`-strip.** Compare a few files with Nick's output to confirm that removing the first `>` line
  is still the right fix for current Transifex output.
- **`actions/jekyll-build-pages` matches prod.** Check that its output matches what prod's classic
  Pages build produces: the `jekyll-redirect-from` and `jekyll-sitemap` plugins are both in the
  github-pages allowlist.
