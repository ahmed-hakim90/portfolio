# Project Agent Rules

Personal site for Ahmed Abdulhakim. Astro + React islands + Tailwind, laid out like kroking.dev.

Read the relevant `docs/` files before product, UI, or shared architecture work.

- Copy lives in `src/data/` (`profile.ts`, `career.ts`, `projects.ts`). Do not put biography in components.
- Keep case studies that have no public demo without an outbound link.
- Do not send contact messages to a third-party inbox. The form opens the visitor's email app.
- Read `SYSTEM_MAP.md` before changing routes or modules.
- Understand the affected journey, roles, permissions, data contracts, and downstream impact before coding.
- Diagnose root causes before adding UI workarounds. Preserve business logic unless the request explicitly changes it.
- Reuse and extend existing tokens, components, patterns, validation, and domain logic before creating alternatives.
- Keep work mobile-first and verify RTL/LTR where supported or plausible. Use logical layout properties, not scattered direction patches.
- Do not add arbitrary colors, spacing, radii, shadows, typography, duplicate patterns, decorative clutter, or generic AI-looking UI.
- Cover loading, empty, error, partial, stale, disabled, validation, success, and permission states.
- Preserve semantics, keyboard access, focus, contrast, accessible names, touch targets, and reduced motion.
- Review performance, dependency cost, rendering, assets, queries, caching, and cross-screen regressions.
- Record durable product/design/architecture decisions in `docs/`.
- Completion requires targeted tests and rendered visual QA across mobile, tablet, laptop, and desktop; compilation alone is insufficient.
- Do not mass-redesign. Follow the staged foundation plan.
