# Feature Specifications

## Technical Stack

- **Framework**: Next.js 15+ with App Router
- **Documentation**: Nextra v4 (docs theme)
- **Search**: Pagefind (NOT FlexSearch)
- **Styling**: Tailwind CSS (via Nextra)
- **Deployment**: Vercel

## v4-Specific Requirements

### CRITICAL: Nextra v4 Architecture

1. **No `theme.config` file** - theme options go as props on Layout components
2. **Content directory, not pages** - MDX in `content/`, not `pages/`
3. **`_meta.js` not `_meta.json`** - JS files that export default objects
4. **Must import theme CSS** - `import 'nextra-theme-docs/style.css'`
5. **Must create `mdx-components.jsx`** at project root
6. **Pagefind postbuild step** - `pagefind --site .next/server/app --output-path public/_pagefind`

### Project Structure

```
helixos/
├── app/
│   ├── layout.jsx                    # Root layout with theme config
│   └── [[...mdxPath]]/
│       └── page.jsx                  # Catch-all route for MDX
├── content/                          # ALL MDX content here
├── components/                       # Custom React components
├── public/
│   └── api/                          # Agent-readable JSON
├── mdx-components.jsx                # Global MDX components
├── next.config.mjs                   # Nextra config
└── package.json
```

## Required Components

### Priority 1 (Phase 2)
- `QuadrantGrid.tsx` - Interactive 9Q 3×3 grid
- `FrameworkCard.tsx` - Framework display card
- `CaseStudyCard.tsx` - Case study display

### Priority 2 (Phase 3)
- `MaturityTier.tsx` - AAA tier with progress indicator
- `Callout.tsx` - Styled callout box
- `FrameworkMap.tsx` - Framework interconnection visual
- `LicenseBadge.tsx` - Licensing status badge

### Priority 3 (Phase 4)
- Self-assessment quiz components
- CoIntelligence Index calculator
- Interactive framework visualizations

## QuadrantGrid Component Spec

- Renders 3×3 CSS Grid
- Each cell: quadrant number, name, definition
- Clickable - links to quadrant detail page
- `highlighted` prop for emphasis
- `annotation` prop for notes
- Responsive - stacks on mobile
- Uses teal accent (`#2E8B8B`) for highlights
- Must be `'use client'` for onClick handlers

## Search Configuration

Pagefind search with postbuild script:
```bash
pagefind --site .next/server/app --output-path public/_pagefind
```

Add to `.gitignore`:
```
_pagefind/
```

## Deployment

- Auto-deploy to Vercel on push to main
- Preview deployments for PRs
