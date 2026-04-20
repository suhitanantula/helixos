'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  {
    module: 'OVERVIEW',
    items: [
      { label: 'Helix OS', href: '/' },
      { label: 'Frameworks', href: '/frameworks' },
    ],
  },
  {
    module: 'THE 9Q GRID',
    items: [
      { label: 'Overview', href: '/frameworks/9q' },
      { label: 'The Grid', href: '/frameworks/9q/the-grid' },
      { label: 'Quadrants', href: '/frameworks/9q/quadrants' },
      { label: 'Portfolio Shape', href: '/frameworks/9q/portfolio-shape' },
      { label: 'Co-Intelligence Index', href: '/frameworks/9q/co-intelligence-index' },
    ],
  },
  {
    module: 'CAPABILITY MODEL',
    items: [
      { label: 'AAA Overview', href: '/frameworks/aaa' },
      { label: 'Assist', href: '/frameworks/aaa/assist' },
      { label: 'Augment', href: '/frameworks/aaa/augment' },
      { label: 'Adapt', href: '/frameworks/aaa/adapt' },
    ],
  },
  {
    module: 'LINES, LOOPS & VIBES',
    items: [
      { label: 'Overview', href: '/frameworks/llv' },
      { label: 'Lines', href: '/frameworks/llv/lines' },
      { label: 'Loops', href: '/frameworks/llv/loops' },
      { label: 'Vibes', href: '/frameworks/llv/vibes' },
    ],
  },
  {
    module: 'HELIX ENGINE v6',
    items: [
      { label: 'Overview', href: '/frameworks/helix-engine' },
    ],
  },
  {
    module: 'BOOKS',
    items: [
      { label: 'All Books', href: '/books' },
      { label: 'The Helix Moment', href: '/books/helix-moment' },
      { label: 'The Policy Playbook', href: '/books/policy-playbook' },
    ],
  },
  {
    module: 'DIAGNOSTICS',
    items: [
      { label: '9Q Diagnostic', href: '/diagnostic', soon: true },
    ],
  },
  {
    module: 'AGENT ACCESS',
    items: [
      { label: 'LLM Index', href: '/llms.txt' },
      { label: 'API Reference', href: '/api/frameworks.json' },
      { label: 'MCP Server', href: '/mcp', soon: true },
    ],
  },
]

export function HelixSidebar() {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <aside className="helix-sidebar">
      <div className="sidebar-logo">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="sidebar-logo-mark">Helix OS</span>
          <span className="sidebar-logo-sub">os.suhitanantula.com</span>
        </Link>
      </div>

      <nav className="sidebar-nav">
        {NAV.map((section) => (
          <div key={section.module} className="sidebar-module">
            <span className="sidebar-module-label">{section.module}</span>
            {section.items.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`sidebar-item${active ? ' active' : ''}`}
                  style={item.soon ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                >
                  {item.label}
                  {item.soon && (
                    <span style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: '8px',
                      letterSpacing: '0.1em',
                      marginLeft: '6px',
                      color: 'var(--grey2)',
                    }}>
                      SOON
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a
          href="https://suhitanantula.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-footer-link"
        >
          suhitanantula.com ↗
        </a>
        <a
          href="https://suhitanantula.com/books"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-footer-link"
        >
          Books ↗
        </a>
      </div>
    </aside>
  )
}
