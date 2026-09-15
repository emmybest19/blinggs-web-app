# Blingg Platform

A pnpm monorepo holding every Blingg web surface: the public marketing site and
six independently deployed staff consoles.

Built with React 19, React Router 7, Vite 7 and Tailwind CSS 4.

## Getting started

```bash
pnpm install          # installs every workspace
pnpm dev              # marketing site on :5173
pnpm dev:finance      # one console on its own port
pnpm dev:admins       # all six consoles at once
pnpm dev:all          # everything

pnpm build            # build every app
pnpm lint             # lint every workspace
```

Requires Node >= 20.19 and pnpm 11. Run `corepack enable` if `pnpm` is missing.

## Apps

| App                 | Dev port | Purpose                                                        |
| ------------------- | -------- | -------------------------------------------------------------- |
| `main-app`          | 5173     | Public marketing site — home, features, how-it-works, waitlist  |
| `super-admin`       | 4100     | Staff accounts, console access, feature flags, global audit log |
| `finance-admin`     | 4200     | Transactions, settlements, reconciliation, fees                 |
| `compliance-admin`  | 4300     | KYC review, sanctions screening, cases, regulatory reports      |
| `support-admin`     | 4400     | Customer tickets, account lookup, disputes                      |
| `community-admin`   | 4500     | Savings groups, moderation, announcements                       |
| `security-admin`    | 4600     | Access control, threat alerts, device audit                     |

Each console is a **separate application with its own build, own deploy and its
own session**. Signing into finance-admin does not sign you into
security-admin — that isolation is the reason they are split.

## Packages

| Package                  | Consumed by      | Holds                                                      |
| ------------------------ | ---------------- | ---------------------------------------------------------- |
| `@blingg/theme`          | all 7 apps       | Design tokens (colours, fonts) and web fonts               |
| `@blingg/admin-kit`      | the 6 consoles   | Admin shell, auth guard, login screen, tables, primitives  |
| `@blingg/eslint-config`  | all workspaces   | Shared flat ESLint config                                  |

Packages are consumed **as source** — there is no build step. Vite resolves the
workspace symlink to the real path and transpiles the JSX directly, so editing
`admin-kit` hot-reloads in whichever console you have running.

## Running a single workspace

```bash
pnpm --filter finance-admin dev
pnpm --filter finance-admin build
pnpm --filter './apps/*-admin' build     # all six consoles
```

## Deployment

Each app deploys as its own project with its own root directory
(`apps/<name>`), build command `pnpm build` and output `dist`. Every app carries
a `vercel.json` rewriting all paths to `index.html` so client-side routes
survive a refresh.

Vercel's filesystem is **case-sensitive** — asset paths must match filenames
exactly.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for layering rules, the shared theme
and how to add a console.
