# Implementation Plan

Generated: 2026-02-22
Last Updated: 2026-02-22

## Phase 1: Scaffold (High Priority)

### 1.1 Project Initialization
- [x] Initialize Next.js 15 project with App Router
- [x] Install Nextra v4 dependencies (`npm install nextra nextra-theme-docs`)
- [x] Install Pagefind for search (`npm install -D pagefind`)
- [x] Configure package.json scripts (dev with turbopack, postbuild for pagefind)

### 1.2 App Router Configuration
- [x] Create `app/layout.tsx` with Nextra theme config (navbar, footer, search, sidebar)
- [x] Create `app/[[...mdxPath]]/page.tsx` catch-all route for MDX content
- [x] Create `mdx-components.tsx` at project root with docs components

### 1.3 Nextra Configuration
- [x] Create `next.config.mjs` with Nextra plugin
- [x] Import theme CSS in layout (`import 'nextra-theme-docs/style.css'`)
- [x] Configure Head component with brand colors (teal accent, dark/light modes)

### 1.4 Content Structure
- [x] Create `content/` directory
- [x] Create `content/_meta.ts` with top-level nav
- [x] Create `content/index.mdx` homepage

### 1.5 Framework Sections (minimal viable)
- [x] Create `content/frameworks/_meta.ts`
- [x] Create `content/frameworks/index.mdx` (Frameworks Overview)
- [x] Create `content/frameworks/9q/_meta.ts`
- [x] Create `content/frameworks/9q/index.mdx` (9Q overview with grid table)
- [x] Create `content/frameworks/aaa/_meta.ts`
- [x] Create `content/frameworks/aaa/index.mdx` (AAA overview)
- [x] Create `content/frameworks/llv/_meta.ts`
- [x] Create `content/frameworks/llv/index.mdx` (LLV overview)
- [x] Create `content/frameworks/4a/_meta.ts`
- [x] Create `content/frameworks/4a/index.mdx` (4A overview)

### 1.6 Reference Section
- [x] Create `content/reference/_meta.ts`
- [x] Create `content/reference/index.mdx`
- [x] Create `content/reference/licensing.mdx` (required from Phase 1)

### 1.7 Deployment Setup
- [x] Update `.gitignore` (add `_pagefind/`)
- [x] Test local build (`npm run build`) - PASSED
- [ ] Verify dev server works (`npm run dev`)
- [ ] Deploy to Vercel

## Phase 2: Core Content (Medium Priority)

### 2.1 9Q Framework Complete
- [ ] Create `content/frameworks/9q/the-grid.mdx`
- [ ] Create `content/frameworks/9q/quadrants.mdx` (all Q1-Q9 definitions)
- [ ] Create `content/frameworks/9q/portfolio-shape.mdx`
- [ ] Create `content/frameworks/9q/business-model-navigator.mdx`
- [ ] Create `content/frameworks/9q/co-intelligence-index.mdx`
- [ ] Create `content/frameworks/9q/validation.mdx`

### 2.2 AAA Framework Complete
- [ ] Create `content/frameworks/aaa/assist.mdx`
- [ ] Create `content/frameworks/aaa/augment.mdx`
- [ ] Create `content/frameworks/aaa/adapt.mdx`
- [ ] Create `content/frameworks/aaa/maturity-gates.mdx`
- [ ] Create `content/frameworks/aaa/capability-navigator.mdx`

### 2.3 LLV Framework Complete
- [ ] Create `content/frameworks/llv/lines.mdx`
- [ ] Create `content/frameworks/llv/loops.mdx`
- [ ] Create `content/frameworks/llv/vibes.mdx`
- [ ] Create `content/frameworks/llv/rhythm-signatures.mdx`
- [ ] Create `content/frameworks/llv/case-studies.mdx`

### 2.4 4A Framework Complete
- [ ] Create `content/frameworks/4a/abandon-gate.mdx`

### 2.5 Agent-Readable JSON
- [ ] Create `public/api/frameworks.json`
- [ ] Create `public/api/9q-grid.json`
- [ ] Create `public/api/aaa-maturity.json`
- [ ] Create `public/api/glossary.json`

### 2.6 Priority Components
- [ ] Create `components/QuadrantGrid.tsx` (interactive 3x3 grid)
- [ ] Create `components/FrameworkCard.tsx` (framework display card)
- [ ] Create `components/CaseStudyCard.tsx` (case study display)
- [ ] Register components in `mdx-components.tsx`

## Phase 3: Expand (Low Priority)

### 3.1 Foundations Section
- [ ] Create `content/foundations/_meta.ts`
- [ ] Create `content/foundations/index.mdx`
- [ ] Create `content/foundations/co-intelligence.mdx`
- [ ] Create `content/foundations/delete-before-digital.mdx`
- [ ] Create `content/foundations/the-helix-moment.mdx`

### 3.2 Diagnostics Section
- [ ] Create `content/diagnostics/_meta.ts`
- [ ] Create `content/diagnostics/index.mdx`
- [ ] Create `content/diagnostics/ai-readiness.mdx`
- [ ] Create `content/diagnostics/capability-position-alignment.mdx`
- [ ] Create `content/diagnostics/competitive-landscape.mdx`

### 3.3 Playbooks Section
- [ ] Create `content/playbooks/_meta.ts`
- [ ] Create `content/playbooks/index.mdx`
- [ ] Create `content/playbooks/government.mdx`
- [ ] Create `content/playbooks/enterprise.mdx`
- [ ] Create `content/playbooks/first-90-days.mdx`

### 3.4 Case Studies Section
- [ ] Create `content/case-studies/_meta.ts`
- [ ] Create `content/case-studies/index.mdx`
- [ ] Create `content/case-studies/department-of-education.mdx`
- [ ] Create `content/case-studies/city-of-mitcham.mdx`
- [ ] Create `content/case-studies/timberlink.mdx`
- [ ] Create `content/case-studies/australian-market.mdx`

### 3.5 Book Section
- [ ] Create `content/book/_meta.ts`
- [ ] Create `content/book/index.mdx`
- [ ] Create `content/book/thesis.mdx`
- [ ] Create `content/book/mclaren.mdx`

### 3.6 Reference Complete
- [ ] Create `content/reference/glossary.mdx`
- [ ] Create `content/reference/framework-map.mdx`

### 3.7 Additional Components
- [ ] Create `components/MaturityTier.tsx`
- [ ] Create `components/Callout.tsx`
- [ ] Create `components/FrameworkMap.tsx`
- [ ] Create `components/LicenseBadge.tsx`

## Phase 4: Interactive (Future)

### 4.1 Self-Assessment
- [ ] Create self-assessment quiz component
- [ ] Create AI readiness quiz flow

### 4.2 Interactive Visualizations
- [ ] Make QuadrantGrid fully interactive (click-through to quadrants)
- [ ] Create CoIntelligence Index calculator component
- [ ] Create framework interconnection visualization

## Completed

- [x] Phase 1: Scaffold - Core setup complete (2026-02-22)
  - Next.js 15 + Nextra v4 + Pagefind
  - App Router with catch-all MDX route
  - Homepage + 4 framework overview pages + reference/licensing
  - Build passing

---

## Notes

- This is Nextra v4 (App Router) - NOT v3 (Pages Router)
- No `theme.config` file - all config via Layout component props
- Content in `content/` directory, not `pages/`
- `_meta.ts` files (TypeScript), not `_meta.json`
- All frameworks use ™ symbol on first reference
- Client data must be anonymized
