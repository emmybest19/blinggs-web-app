# Trade-offs: Blingg Platform

## 1. Six console apps
- **Chose:** one app per staff team
- **Over:** a single admin app with role checks
- **Why:** each team only downloads and reaches its own code.
- **Cost:** more apps to build and deploy.

## 2. Monorepo
- **Chose:** a pnpm workspace
- **Over:** separate repos
- **Why:** shared theme and admin kit change in one commit for every app.
- **Cost:** tooling needs care, like pinned Node and pnpm versions.

## 3. Packages as source
- **Chose:** Vite transpiles shared packages directly
- **Over:** building and versioning each package
- **Why:** editing admin-kit hot reloads in the running console.
- **Cost:** packages cannot be published or versioned on their own.

## 4. Enforced import rules
- **Chose:** a lint rule that fails on app to app imports
- **Over:** relying on code review
- **Why:** keeps the isolation real as the code grows.
- **Cost:** shared code must move into a package first.

## 5. Single page apps with Vite
- **Chose:** React Router SPAs
- **Over:** a server rendered framework
- **Why:** consoles sit behind login, so SEO does not matter there.
- **Cost:** the marketing site gives up server rendering.

## 6. Mock data for now
- **Chose:** `data/*.data.js` files and a demo sign in
- **Over:** waiting for the backend
- **Why:** screens could be built and reviewed early.
- **Cost:** the demo access flag must be turned off before real launch.
