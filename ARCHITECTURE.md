# Architecture

Blingg Web is organised **by feature**, not by file type. A feature owns its
data, components, hooks and pages, and exposes a small public surface through
its barrel file. Changing "the blog" means touching one folder.

## Layers

```
src/
├── main.jsx              entry point — mounts <App />
├── app/                  the shell: routing, layouts, chrome, 404
├── features/             one folder per product capability
├── shared/               reusable, feature-agnostic building blocks
└── styles/               global CSS + animations
```

Imports may only flow **downward**:

```
app  ──▶  features  ──▶  shared
```

* `app/` may import from any feature (it composes them into routes).
* `features/` may import from `shared/`, never from another feature.
* `shared/` imports from nothing above it — it must stay generic.

These rules are enforced by `no-restricted-imports` in `eslint.config.js`.

## Path aliases

Declared in both `vite.config.js` (for bundling) and `jsconfig.json` (for
editor navigation):

| Alias        | Resolves to     |
| ------------ | --------------- |
| `@/*`        | `src/*`         |
| `@app/*`     | `src/app/*`     |
| `@features/*`| `src/features/*`|
| `@shared/*`  | `src/shared/*`  |

## Anatomy of a feature

Not every feature needs every folder — add a folder when there is something to
put in it.

```
features/blog/
├── api/          data access (swap this for HTTP without touching the UI)
├── data/         static seed content
├── hooks/        feature-specific React logic
├── components/   presentational pieces used only by this feature
├── pages/        route-level composition
├── constants.js
└── index.js      public API — the ONLY entry point other layers may import
```

### The barrel rule

Other layers import `@features/blog`, never `@features/blog/components/...`.
The barrel is the contract; everything behind it is free to move.

```js
// ✅
import { BlogPage } from '@features/blog'

// ❌ reaches past the public API — ESLint will reject this
import ArticleCard from '@features/blog/components/ArticleCard'
```

## Current features

| Feature             | Routes                       | Owns                                    |
| ------------------- | ---------------------------- | --------------------------------------- |
| `home`              | `/`                          | Hero + download CTA                     |
| `product-features`  | `/features`                  | Canonical feature list, showcase, groups |
| `how-it-works`      | `/howItWorks`                | Onboarding steps, capability cards      |
| `blog`              | `/blog`, `/blog/:id`         | Articles, cards, article detail         |
| `faq`               | `/faq`                       | Q&A groups, contact form                |
| `legal`             | `/privacyPolicy`, `/termsOfService`, `/cookiesPolicy` | Policy documents + shared renderer |
| `about`             | `/about`                     | Story, pillars, values                  |
| `admin`             | `/subadmin`                  | Article editor, draft persistence       |

## Routing

`app/router/routes.js` is the single source of truth for every path. Use
`ROUTES.blog` rather than `'/blog'`, and `buildPath(ROUTES.blogDetail, { id })`
for parameterised links.

`app/router/navigation.js` describes the header, footer and 404 link lists as
data, so adding a nav item is a one-line change.

Every route except `/` is **code-split** via `React.lazy` in
`app/router/AppRouter.jsx`, so visitors download only the feature they open.

## Content lives in data files

Marketing copy is data, not markup. Section content sits in `data/*.data.js`
and components render it. The three legal pages share one `LegalDocument`
renderer driven by a document descriptor — adding a policy means adding a data
file, not another 400-line page.

## Where to put new code

* New page or capability → new folder in `features/`, exported from its barrel,
  wired into `AppRouter`.
* Used by two or more features → `shared/`.
* Site-wide chrome or routing → `app/`.
* Company details, socials, brand colours → `shared/config/site.config.js`.
