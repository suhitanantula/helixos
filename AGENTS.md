# HelixOS - Agent Operations Guide

## Project Overview

HelixOS is the **published source of truth** for The Helix Lab's frameworks, methodologies, and diagnostic tools. Built with Nextra v4 + Next.js App Router.

**Three-layer content architecture:**
| Layer | Domain | Purpose |
|-------|--------|---------|
| Personal site | suhitanantula.com | Front door, authority |
| Newsletter | thehelixloop.com | Ongoing conversation |
| **HelixOS** | helixos.thehelixlab.co | Canonical frameworks |

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Documentation**: Nextra v4 (docs theme)
- **Search**: Pagefind
- **Styling**: Tailwind CSS (via Nextra)
- **Deployment**: Vercel

## Build & Run Commands

```bash
# Development (with Turbopack)
npm run dev

# Build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Project Structure (Nextra v4)

```
helixos/
├── app/
│   ├── layout.jsx                # Root layout with theme config
│   └── [[...mdxPath]]/
│       └── page.jsx              # Catch-all for MDX content
├── content/                      # ALL MDX content here
│   ├── _meta.js                  # Top-level nav ordering
│   ├── index.mdx                 # Homepage
│   ├── foundations/
│   ├── frameworks/
│   │   ├── 9q/
│   │   ├── aaa/
│   │   ├── llv/
│   │   └── 4a/
│   ├── diagnostics/
│   ├── playbooks/
│   ├── case-studies/
│   ├── book/
│   └── reference/
├── components/                   # Custom React components
├── public/
│   └── api/                      # Agent-readable JSON
├── mdx-components.jsx            # Global MDX components
├── next.config.mjs               # Nextra config
├── specs/                        # Requirements
├── IMPLEMENTATION_PLAN.md        # Task list
├── PROMPT_build.md               # Build mode instructions
├── PROMPT_plan.md                # Planning mode instructions
└── AGENTS.md                     # This file
```

## v4-Specific Rules

1. **No `theme.config` file** - config via Layout component props
2. **Content in `content/`** - NOT `pages/`
3. **`_meta.js` files** - NOT `_meta.json`
4. **Import theme CSS** - `import 'nextra-theme-docs/style.css'`
5. **`mdx-components.jsx` at root** - required

## Content Conventions

### MDX Files
- Frontmatter: `title`, `description`
- Use ™ on first reference: 9Q Framework™, AAA Maturity Model™
- Tables for structured framework content
- Anonymize client data unless approved

### File Naming
- Lowercase with hyphens: `co-intelligence.mdx`
- Index files for sections: `index.mdx`
- `_meta.js` for navigation order

## Testing Backpressure

1. **Build must pass**: `npm run build` exits 0
2. **TypeScript clean**: No errors
3. **Links resolve**: No broken internal links
4. **Content renders**: Dev server shows pages

## Deployment

Auto-deploys to Vercel on push to main.
Preview deployments for PRs.

## Key Learnings

- Nextra v4 = App Router only (no Pages Router)
- Theme config = props on Layout/Navbar/Footer/Head components
- Search = Pagefind (postbuild script)
- MDX components = `mdx-components.jsx` at project root
