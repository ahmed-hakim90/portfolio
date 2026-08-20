# SYSTEM_MAP

**Product:** Ahmed Abdulhakim Portfolio (`ahmed-abdulhakim-portfolio`)  
**Purpose:** Public personal portfolio for a Frontend Engineer at Sokany — case studies, writing, gallery, and booking.  
**Last updated:** 2026-08-20

## Core / runtime

Next.js App Router + Once UI + MDX case studies/posts. Static generation for content routes. Optional GitHub GraphQL (server token). Contact via WhatsApp / email / schedule.

## Modules

| ID | Name | Category |
|----|------|----------|
| MOD / 01 | Home | Positioning + featured systems |
| MOD / 02 | Work | Case study listing + detail |
| MOD / 03 | Blog | MDX writing + case narratives |
| MOD / 04 | Gallery | Screenshot archive from project images |
| MOD / 05 | About | Bio, experience, skills, GitHub |
| MOD / 06 | Schedule | Call booking |
| MOD / 07 | Terms | Legal / usage |
| MOD / 08 | Contact surfaces | WhatsApp, email, social (cross-cutting) |

## Primary path

**Visitor → Home (role + Sokany systems) → Work / featured case study → Live demo or Schedule → Contact**

Secondary: Blog write-up → Work slug · Gallery → Work slug · About → Schedule

## Counts

- Roles: 1 (public visitor)
- Modules: 8
- Integrations: GitHub (optional), WhatsApp, email, Form/schedule, Egypt Vision demo URL (env), Mailchimp (off)

## Roles

| Role | Acts where |
|------|------------|
| Public visitor | All marketing routes; no auth for content |
| Site owner | Content via MDX + env vars; optional page password via `PAGE_ACCESS_PASSWORD` |

## Integrations

| System | Status |
|--------|--------|
| Vercel hosting | Live |
| GitHub API (repos + contributions) | Live when `GITHUB_TOKEN` set |
| WhatsApp / mailto | Live |
| Schedule (/schedule) | Live |
| `NEXT_PUBLIC_EGYPT_VISION_2030_DEMO_URL` | Env-gated |
| Mailchimp | Off (`newsletter.display: false`) |

## Key routes

| Route | Entry |
|-------|--------|
| `/` | `src/app/page.tsx` + `src/resources/content.tsx` |
| `/work` | `src/app/work/page.tsx` · pin order in `Projects.tsx` |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` · MDX in `src/app/work/projects/` |
| `/blog` | `src/app/blog/page.tsx` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` · MDX in `src/app/blog/posts/` |
| `/gallery` | `src/app/gallery/page.tsx` · `getProjectGalleryImages()` |
| `/about` | `src/app/about/page.tsx` |
| `/schedule` | `src/app/schedule/page.tsx` |
| `/terms` | `src/app/terms/page.tsx` |
