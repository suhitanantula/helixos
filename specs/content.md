# Content Specifications

## Content Directory Structure

All MDX content lives in `content/` (NOT `pages/`).

```
content/
├── index.mdx                          # Homepage / Welcome to HelixOS
├── _meta.js                           # Top-level nav ordering
│
├── foundations/
│   ├── _meta.js
│   ├── index.mdx                      # "The Helix Lab Philosophy"
│   ├── co-intelligence.mdx            # What is Co-Intelligence?
│   ├── delete-before-digital.mdx      # Delete Before Digital methodology
│   └── the-helix-moment.mdx           # The Helix Moment (book overview)
│
├── frameworks/
│   ├── _meta.js
│   ├── index.mdx                      # "Frameworks Overview"
│   │
│   ├── llv/
│   │   ├── _meta.js
│   │   ├── index.mdx                  # Lines, Loops & Vibes overview
│   │   ├── lines.mdx
│   │   ├── loops.mdx
│   │   ├── vibes.mdx
│   │   ├── rhythm-signatures.mdx
│   │   └── case-studies.mdx
│   │
│   ├── aaa/
│   │   ├── _meta.js
│   │   ├── index.mdx                  # AAA Maturity Model overview
│   │   ├── assist.mdx
│   │   ├── augment.mdx
│   │   ├── adapt.mdx
│   │   ├── maturity-gates.mdx
│   │   └── capability-navigator.mdx
│   │
│   ├── 9q/
│   │   ├── _meta.js
│   │   ├── index.mdx                  # 9Q Framework overview
│   │   ├── the-grid.mdx
│   │   ├── quadrants.mdx
│   │   ├── portfolio-shape.mdx
│   │   ├── business-model-navigator.mdx
│   │   ├── co-intelligence-index.mdx
│   │   └── validation.mdx
│   │
│   └── 4a/
│       ├── _meta.js
│       ├── index.mdx                  # 4A Process overview
│       └── abandon-gate.mdx
│
├── diagnostics/
│   ├── _meta.js
│   ├── index.mdx                      # "Assessment Tools"
│   ├── ai-readiness.mdx
│   ├── capability-position-alignment.mdx
│   └── competitive-landscape.mdx
│
├── playbooks/
│   ├── _meta.js
│   ├── index.mdx                      # "Implementation Playbooks"
│   ├── government.mdx
│   ├── enterprise.mdx
│   └── first-90-days.mdx
│
├── case-studies/
│   ├── _meta.js
│   ├── index.mdx                      # Case studies overview
│   ├── department-of-education.mdx
│   ├── city-of-mitcham.mdx
│   ├── timberlink.mdx
│   └── australian-market.mdx
│
├── book/
│   ├── _meta.js
│   ├── index.mdx                      # Book landing
│   ├── thesis.mdx
│   └── mclaren.mdx
│
└── reference/
    ├── _meta.js
    ├── index.mdx                      # Reference & glossary
    ├── glossary.mdx
    ├── framework-map.mdx
    └── licensing.mdx
```

## Agent-Readable Layer

### Frontmatter Requirements

Every MDX page must have:
- `title` - Page title
- `description` - Page description

Optional custom metadata export:
```mdx
export const frameworkMeta = {
  framework: "9q",
  version: "1.0",
  lastUpdated: "2026-02-22",
  tags: ["strategy", "positioning"],
  related: ["aaa", "co-intelligence-index"]
}
```

### JSON API Exports

Create structured data at `public/api/`:
- `frameworks.json` - List of all frameworks
- `9q-grid.json` - 9Q grid structure
- `aaa-maturity.json` - AAA tiers and gates
- `glossary.json` - Key terms

## Content Guidelines

- Use ™ symbol on first reference per page (9Q Framework™, AAA Maturity Model™)
- Client data must be anonymized unless explicitly approved
- Tables are first-class citizens for framework content
- Code blocks use Shiki syntax highlighting
