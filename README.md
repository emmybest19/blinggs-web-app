# Blingg Web

Marketing site for **Blingg** — a SocialTech platform combining secure
messaging, payments and group contributions. Built with React 19, React Router
7, Vite 7 and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # ESLint (includes architecture boundary rules)
```

## Project structure

The codebase is organised **by feature**. Each feature owns its data,
components and pages, and is imported through its barrel:

```
src/
├── app/        routing, layouts, header/footer, 404
├── features/   home · product-features · how-it-works · blog · faq · legal · about · admin
├── shared/     UI primitives, config, hooks, helpers
└── styles/     global CSS and animations
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the layering rules, path aliases
and where to put new code.

## Deployment

`vercel.json` rewrites all paths to `index.html` so client-side routes resolve
on refresh. Static assets live in `public/` — note that Vercel's filesystem is
**case-sensitive**, so asset paths must match filenames exactly.
