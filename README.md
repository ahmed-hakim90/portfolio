# Ahmed Abdulhakim

Personal site for **Ahmed Abdulhakim** — Frontend Engineer.
Static [Astro](https://astro.build) build, React islands, Tailwind. The layout follows [kroking.dev](https://kroking.dev/) ([source](https://github.com/Mahmoudgalalz/kroking)); the career, projects, and contact details are Ahmed's.

## What's in here

| Piece | Where | What it does |
| --- | --- | --- |
| Career map | `src/components/CareerHeatmap.tsx` | Heat grid of six tracks × every month since 2018. Hover a cell, click a month, filter by employer, or flip to a table. |
| Live GitHub pulse | `src/components/LivePulse.tsx` | Contribution calendar and public activity for `ahmed-hakim90`, fetched in the visitor's browser. |
| Stack map | `src/components/StackMap.tsx` | Pick a domain or a technology to see the roles and projects that used it. |
| Command palette | `src/components/CommandPalette.tsx` | `⌘K` / `/` — jump to a page, section, role, or project. |
| Timeline | `src/components/Timeline.tsx` | Role-by-role detail at `/work#<role-id>`. |
| Projects | `src/data/projects.ts` | Featured products and earlier work. Case studies without a public demo have no outbound link. |

## Editing content

All copy lives in `src/data/`:

- `profile.ts` — name, links, summary, tracks, domains
- `career.ts` — roles, per-track weights, dated milestones, education
- `projects.ts` — featured projects and earlier work

Adding a role to `career.ts` re-renders the heatmap, the timeline, the stack map, and the command palette.

The contact form opens the visitor's email app. It does not post the message to a third-party inbox.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run check` | Astro + TypeScript diagnostics |
| `npm run build` | Typecheck, then build to `./dist/` |
| `npm run preview` | Serve the production build locally |
