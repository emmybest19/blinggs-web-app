# Architecture

## Layout

```
blinggs-web/
├── pnpm-workspace.yaml     workspace globs + the dependency catalog
├── apps/
│   ├── main-app/           public marketing site
│   ├── super-admin/
│   ├── finance-admin/
│   ├── compliance-admin/
│   ├── support-admin/
│   ├── community-admin/
│   └── security-admin/
└── packages/
    ├── theme/              design tokens, shared by all 7 apps
    ├── admin-kit/          shell + primitives, shared by the 6 consoles
    └── eslint-config/      shared flat ESLint config
```

Imports flow **downward only**:

```
apps  ──▶  packages
```

An app may import any package. An app may **never** import another app — that
would undo the isolation the six-app split exists for. `no-restricted-imports`
in `@blingg/eslint-config` fails the build if you try.

Packages may import other packages (`admin-kit` depends on `theme`), but never
an app.

## Why six apps instead of one admin

Each console is a separate build, so a support agent's browser never downloads
the security console's code. Access is granted per surface, and sessions are
namespaced per console (`blingg.admin.session.<id>`) so signing into one is not
signing into another.

The cost of that isolation is duplication, which `@blingg/admin-kit` absorbs:
every console shares one shell, one auth flow and one set of primitives. A
console app is roughly a domain descriptor, a routes array and its pages.

## Anatomy of a console

```
apps/finance-admin/
├── index.html
├── vite.config.js          fixed dev port, '@' alias
├── eslint.config.js        createConfig() from the shared package
└── src/
    ├── main.jsx            ~12 lines — mounts <AdminApp>
    ├── domain.js           identity: id, accent, nav, role
    ├── routes.jsx          React Router children array
    ├── data/*.data.js      mock records (swap for an api/ layer)
    ├── pages/*.jsx         one file per nav entry
    └── styles/index.css    theme imports + the @source line
```

`main.jsx` is the whole runtime:

```jsx
import { AdminApp } from '@blingg/admin-kit'
import { domain } from './domain'
import { routes } from './routes'

createRoot(root).render(<AdminApp domain={domain} routes={routes} />)
```

`AdminApp` builds the router: a public `/login`, an authenticated shell wrapping
your routes, an `errorElement`, and a catch-all. Auth, chrome and error handling
are not the console's problem.

### The domain descriptor

One object drives the sidebar, the login screen, the accent colour and the
session key:

```js
export const domain = {
  id: 'finance',
  accent: 'finance',        // → --color-domain-finance
  short: 'FI',              // sidebar mark
  name: 'Finance',
  console: 'Finance Console',
  role: 'Finance Operator',
  nav: [
    { to: '/', label: 'Overview', end: true },
    { to: '/transactions', label: 'Transactions' },
    { to: '/settlements', label: 'Settlements', badge: 3 },
  ],
}
```

## Styling

Tailwind CSS 4, configured in CSS rather than a config file.

`@blingg/theme` exports two stylesheets, and **order matters**:

```css
@import "@blingg/theme/fonts.css";   /* first — @import url() must lead */
@import "tailwindcss";
@import "@blingg/theme/tokens.css";  /* after — @theme is last-wins */
@import "@blingg/admin-kit/admin.css";

@source "../../../../packages/admin-kit/src";
```

Tokens must load *after* Tailwind or its defaults overwrite `--font-sans` and
friends. Fonts must load *before* everything, because `@import url()` is only
legal at the top of a stylesheet.

That last line is easy to miss and fails silently: **Tailwind only scans the app's
own source tree.** Without registering `admin-kit` as a source, none of the
shell's utilities get emitted and the sidebar renders unstyled.

### Breakpoints

`main-app` defines its own breakpoint scale (`xs` 375 → `3xl` 1440) in its
`index.css`, inherited from the stylesheets it was migrated from. The consoles
use Tailwind's defaults. This is why breakpoints are *not* in the shared theme —
one scale would put one of those two groups on the wrong one.

## Dependency versions

`pnpm-workspace.yaml` holds a `catalog:`. Apps declare `"react": "catalog:"`
rather than a range, so every workspace moves together and no two apps can drift
onto different React or Vite majors. Bump the version in one place.

## Packages are source, not builds

Workspace packages have no build step. `exports` points at `src/index.js`, pnpm
symlinks the package, and Vite resolves through the symlink to the real path —
which is outside `node_modules`, so `@vitejs/plugin-react` transpiles it like
any app file. Editing `admin-kit` hot-reloads the running console.

## Adding a console

1. Copy an existing console's directory and rename it in `package.json`.
2. Give it an unused dev port in `vite.config.js`.
3. Add a `--color-domain-<id>` token in `packages/theme/tokens.css` and a matching
   row in `packages/admin-kit/src/theme/accents.js` — the accent classes are
   spelled out in full because Tailwind cannot see a computed class name.
4. Write `domain.js`, `routes.jsx` and the pages.
5. `pnpm install` to link it.

## Where to put new code

* Used by one app → that app's `src/`.
* Used by two or more consoles → `packages/admin-kit`.
* A colour, font or token → `packages/theme`.
* A lint rule → `packages/eslint-config`.

## Known gaps

* **Auth is a stub.** `packages/admin-kit/src/session/sessionStore.js` accepts any
  email plus any non-empty password and stores the session in `localStorage`.
  Replace `authenticate()` with the real identity service — the provider, guard
  and login screen stay as they are.
* **Console data is mock.** Every `src/data/*.data.js` is static. The pages read
  those shapes, so adding an `api/` layer does not touch the components.
* `main-app` still has dead links (`/affiliate`, `/EarlyAccess`, `/watchdemo`) and
  placeholder `#hash` footer links, and its `/blog` and `/faq` pages are stubs.
