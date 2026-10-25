# SYSTEM_MAP

**Product:** Ahmed Abdulhakim Portfolio (`ahmed-abdulhakim-portfolio`)  
**Purpose:** Public personal site — career map, selected operational products, and contact.  
**Last updated:** 2026-10-25

## Core / runtime

Astro static site with React islands and Tailwind. Content is authored in `src/data/`. GitHub activity is fetched in the browser from public APIs. Contact opens a mailto draft.

## Modules

| ID | Name | Category |
|----|------|----------|
| MOD / 01 | Home | Positioning, career heat, GitHub pulse, shipped notes, stack, featured projects, contact |
| MOD / 02 | Career | Role timeline, heatmap, education |
| MOD / 03 | Projects | Domain-filtered board plus earlier work |
| MOD / 04 | Contact surfaces | Email, WhatsApp, GitHub, LinkedIn, X |

## Primary path

**Visitor → Home (role + current focus) → Career or a featured project → Live demo, GitHub, or contact**

## Counts

- Roles: 1 (public visitor)
- Modules: 4
- Integrations: GitHub public API (live), WhatsApp, email

## Roles

| Role | Acts where |
|------|------------|
| Public visitor | Home, career, projects, contact |
| Site owner | Content in `src/data/` |

## Integrations

| System | Status |
|--------|--------|
| Vercel hosting | Expected static host |
| GitHub REST + contribution mirror | Live, anonymous, cached in the browser |
| WhatsApp / mailto | Live |
| Third-party contact inbox | Off |

## Key routes

| Route | Entry |
|-------|--------|
| `/` | `src/pages/index.astro` |
| `/work` | `src/pages/work.astro` |
| `/projects` | `src/pages/projects.astro` |
