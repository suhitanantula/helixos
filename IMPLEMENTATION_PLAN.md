# Implementation Plan

Generated: 2026-02-22
Last Updated: 2026-02-22

## Phase 1: Scaffold — COMPLETE

- [x] Initialize Next.js 15 + Nextra v4 + Pagefind
- [x] App Router configuration (layout, catch-all, mdx-components)
- [x] Content structure with _meta.ts files
- [x] Homepage + framework overviews
- [x] Reference section with licensing
- [x] Build passing, Git initialized
- [x] Deployed to Vercel (queued)

## Phase 2: Core Content — IN PROGRESS

### 2.1 9Q Framework — COMPLETE
- [x] `content/frameworks/9q/the-grid.mdx`
- [x] `content/frameworks/9q/quadrants.mdx`
- [x] `content/frameworks/9q/portfolio-shape.mdx`
- [x] `content/frameworks/9q/business-model-navigator.mdx`
- [x] `content/frameworks/9q/co-intelligence-index.mdx`
- [x] `content/frameworks/9q/validation.mdx`

### 2.2 AAA Framework — COMPLETE
- [x] `content/frameworks/aaa/assist.mdx`
- [x] `content/frameworks/aaa/augment.mdx`
- [x] `content/frameworks/aaa/adapt.mdx`
- [x] `content/frameworks/aaa/maturity-gates.mdx`
- [x] `content/frameworks/aaa/capability-navigator.mdx`

### 2.3 LLV Framework — COMPLETE
- [x] `content/frameworks/llv/lines.mdx`
- [x] `content/frameworks/llv/loops.mdx`
- [x] `content/frameworks/llv/vibes.mdx`
- [ ] `content/frameworks/llv/rhythm-signatures.mdx`
- [ ] `content/frameworks/llv/case-studies.mdx`

### 2.4 4A Framework
- [ ] `content/frameworks/4a/abandon-gate.mdx`

### 2.5 Agent-Readable JSON
- [ ] `public/api/frameworks.json`
- [ ] `public/api/9q-grid.json`
- [ ] `public/api/aaa-maturity.json`
- [ ] `public/api/glossary.json`

### 2.6 Priority Components
- [ ] `components/QuadrantGrid.tsx`
- [ ] `components/FrameworkCard.tsx`
- [ ] `components/CaseStudyCard.tsx`
- [ ] Register in `mdx-components.tsx`

## Phase 3: Expand (Low Priority)

### 3.1 Foundations Section
- [ ] co-intelligence.mdx
- [ ] delete-before-digital.mdx
- [ ] the-helix-moment.mdx

### 3.2 Diagnostics Section
- [ ] ai-readiness.mdx
- [ ] capability-position-alignment.mdx
- [ ] competitive-landscape.mdx

### 3.3 Playbooks Section
- [ ] government.mdx
- [ ] enterprise.mdx
- [ ] first-90-days.mdx

### 3.4 Case Studies Section
- [ ] department-of-education.mdx
- [ ] city-of-mitcham.mdx
- [ ] timberlink.mdx
- [ ] australian-market.mdx

### 3.5 Book Section
- [ ] thesis.mdx
- [ ] mclaren.mdx

### 3.6 Reference Complete
- [ ] glossary.mdx
- [ ] framework-map.mdx

## Phase 4: Interactive (Future)

- [ ] Self-assessment components
- [ ] Interactive QuadrantGrid
- [ ] CoIntelligence Index calculator

## Completed Commits

1. `a884f67` — Phase 1 Scaffold (2026-02-22)
2. `45221eb` — Phase 2 Framework Detail Pages (2026-02-22)

## Current Stats

- **Pages**: 22
- **Words indexed**: 1,282
- **Build status**: Passing
- **Deploy status**: Queued on Vercel

---

## Notes

- Nextra v4 (App Router) — no theme.config
- `_meta.ts` files (TypeScript)
- Avoid `>` `<` in tables (use "Above", "Under")
- ™ symbol on first reference per page
