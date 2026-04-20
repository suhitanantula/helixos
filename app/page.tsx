import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Helix OS — Operating Infrastructure',
  description:
    'The operating infrastructure for co-intelligent strategy. Access the Helix Lab frameworks, diagnostics, and AI companions.',
}

const LAYERS = [
  {
    num: '01',
    name: 'Human Layer',
    desc: 'For clients, readers, and practitioners.',
    items: [
      'Framework pages',
      '9Q Diagnostic',
      'Book AI companions',
      'Engagement pathways',
    ],
  },
  {
    num: '02',
    name: 'LLM Layer',
    desc: 'For models that need structured context.',
    items: [
      '/llms.txt',
      '/api/frameworks.json',
      '/api/books.json',
      '/knowledge/[book].md',
    ],
  },
  {
    num: '03',
    name: 'Agent Layer',
    desc: 'For agents that need callable tools.',
    items: [
      'MCP server',
      'get_framework()',
      'run_9q_diagnostic()',
      'OpenAPI spec',
    ],
  },
]

const FRAMEWORKS = [
  {
    id: '9Q',
    name: 'The 9Q Framework',
    question: 'Where should our AI portfolio be positioned?',
    href: '/frameworks/9q',
  },
  {
    id: 'AAA',
    name: 'AAA Maturity Model',
    question: 'Are we ready? How do we progress?',
    href: '/frameworks/aaa',
  },
  {
    id: 'LLV',
    name: 'Lines, Loops & Vibes',
    question: "What's the rhythm of our organisation?",
    href: '/frameworks/llv',
  },
  {
    id: 'HE6',
    name: 'Helix Engine v6',
    question: 'How do we structure strategic analysis with AI?',
    href: '/frameworks/helix-engine',
  },
]

export default function LandingPage() {
  return (
    <div style={{ maxWidth: '800px' }}>
      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-sys-label">
          Helix OS — v1.0
        </div>
        <h1 className="landing-headline">
          The operating infrastructure<br />
          for <em>co-intelligent</em> strategy.
        </h1>
        <p className="landing-sub">
          Four trademarked frameworks. Three access layers. One unified logic.
          Built for clients who need to move, models that need to read, and agents that need to act.
        </p>
        <div className="landing-cta-row">
          <Link href="/frameworks/9q" className="cta-primary">
            Explore frameworks
          </Link>
          <Link href="/frameworks/aaa" className="cta-secondary">
            Assess your maturity
          </Link>
          <a
            href="https://suhitanantula.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            Work with Suhit ↗
          </a>
        </div>
      </section>

      {/* Three-layer diagram */}
      <section className="layer-diagram">
        <div className="layer-diagram-label">
          System Architecture
        </div>
        <div className="layers-grid">
          {LAYERS.map((layer) => (
            <div key={layer.num} className="layer-cell">
              <div className="layer-cell-num">{layer.num}</div>
              <div className="layer-cell-name">{layer.name}</div>
              <div className="layer-cell-desc">{layer.desc}</div>
              <ul className="layer-cell-items">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Framework grid */}
      <section className="frameworks-section">
        <div className="section-label">Core Frameworks</div>
        <div className="framework-grid">
          {FRAMEWORKS.map((fw) => (
            <Link key={fw.id} href={fw.href} className="framework-card">
              <div className="framework-card-id">{fw.id}</div>
              <div className="framework-card-name">{fw.name}</div>
              <div className="framework-card-q">{fw.question}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
