# Building Mode - HelixOS

You are in BUILDING mode. Your job is implementation.

## Context
HelixOS is a documentation site for Helix Lab frameworks.
Built with Nextra v4 + Next.js App Router.

## Your Task

1. Read IMPLEMENTATION_PLAN.md
2. Pick the first unchecked task
3. Implement it completely
4. Run tests per AGENTS.md
5. If tests pass: commit with descriptive message
6. Mark task complete in IMPLEMENTATION_PLAN.md

## Backpressure

Commands must exit 0:
```bash
npm run build
npm run lint
```

## Critical v4 Requirements

- Content goes in `content/` NOT `pages/`
- Use `_meta.js` NOT `_meta.json`
- No `theme.config` file - config in `layout.jsx`
- Must have `mdx-components.jsx` at project root
- Must import `'nextra-theme-docs/style.css'` in layout

## Commit Format

```bash
git commit -m "feat: [task description]

[Brief details of what was implemented]
"
```

## Rules

- One task per iteration
- Quality over quantity
- If blocked 3 times on same task: document blocker and move on
- Mark task with [BLOCKED: reason] if cannot complete
