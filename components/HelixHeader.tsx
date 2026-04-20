'use client'

import { usePathname } from 'next/navigation'

const BREADCRUMB_MAP: Record<string, string[]> = {
  '/': ['HELIX OS'],
  '/frameworks': ['HELIX OS', 'FRAMEWORKS'],
  '/frameworks/9q': ['HELIX OS', '9Q GRID'],
  '/frameworks/9q/the-grid': ['HELIX OS', '9Q GRID', 'THE GRID'],
  '/frameworks/9q/quadrants': ['HELIX OS', '9Q GRID', 'QUADRANTS'],
  '/frameworks/9q/portfolio-shape': ['HELIX OS', '9Q GRID', 'PORTFOLIO SHAPE'],
  '/frameworks/9q/co-intelligence-index': ['HELIX OS', '9Q GRID', 'CO-INTELLIGENCE INDEX'],
  '/frameworks/aaa': ['HELIX OS', 'CAPABILITY MODEL'],
  '/frameworks/aaa/assist': ['HELIX OS', 'CAPABILITY MODEL', 'ASSIST'],
  '/frameworks/aaa/augment': ['HELIX OS', 'CAPABILITY MODEL', 'AUGMENT'],
  '/frameworks/aaa/adapt': ['HELIX OS', 'CAPABILITY MODEL', 'ADAPT'],
  '/frameworks/llv': ['HELIX OS', 'LINES, LOOPS & VIBES'],
  '/frameworks/helix-engine': ['HELIX OS', 'HELIX ENGINE v6'],
  '/diagnostic': ['HELIX OS', 'DIAGNOSTICS', '9Q DIAGNOSTIC'],
}

function getBreadcrumb(pathname: string): string[] {
  if (BREADCRUMB_MAP[pathname]) return BREADCRUMB_MAP[pathname]
  const parts = pathname.split('/').filter(Boolean)
  return ['HELIX OS', ...parts.map(p => p.toUpperCase().replace(/-/g, ' '))]
}

export function HelixHeader() {
  const pathname = usePathname()
  const crumbs = getBreadcrumb(pathname)

  return (
    <header className="helix-header">
      <div className="helix-breadcrumb">
        {crumbs.map((crumb, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {i > 0 && <span className="breadcrumb-sep">●</span>}
            <span style={i === crumbs.length - 1 ? { color: 'var(--grey1)' } : {}}>
              {crumb}
            </span>
          </span>
        ))}
      </div>
      <button className="helix-search-trigger" disabled>
        SEARCH THE OS ↗
      </button>
    </header>
  )
}
