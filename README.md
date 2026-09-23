# Lost Tomb Explorer | Grand Egyptian Museum

A multi-page React + Vite + Tailwind CSS tourism website for a fictional
Egyptian archaeology museum, built to feel like a real, working tourist site.

## What's included

- **Full site navigation** — every link and button goes somewhere real:
  Home, Artifacts (gallery + detail pages), Discoveries (news + article
  pages), Timeline, Tickets (plan picker + working booking form), Team,
  and Contact (working contact form + map).
- **Fully responsive** — mobile hamburger menu, responsive grids on every
  section (1 column on phones, 2 on tablets, 3 on desktop), fluid hero and
  stats sections.
- **Working search** — the navbar search box live-filters artifacts and
  discoveries and jumps straight to the matching page.
- **Client-side routing** with `react-router-dom` (HashRouter, so it works
  on any static host with zero server configuration — no 404s on refresh).
- **Realistic content** — 8 artifacts, 6 news/discovery articles, a 7-era
  history timeline, and a 5-person team, all with individual detail pages.

## Getting started

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, section blocks, PageHeader
  pages/        Route-level pages (Home, Artifacts, Tickets, Contact, ...)
  data/         Content for artifacts, discoveries, team, and pricing plans
  assets/       Images and fonts
```

## Deploying

The site is a static build — after `npm run build`, upload the contents of
`dist/` to any static host (Netlify, Vercel, GitHub Pages, S3, etc.). Because
routing uses `HashRouter`, no special server rewrite rules are needed.

## Next steps you may want to add

- Connect the ticket and contact forms to a real backend or email service.
- Replace the stock photography in `src/assets/images` with your own
  photography or licensed images.
- Swap the OpenStreetMap embed in the Contact page for your real address.
