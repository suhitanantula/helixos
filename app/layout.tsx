import type { Metadata } from 'next'
import './globals.css'
import { HelixSidebar } from '../components/HelixSidebar'
import { HelixHeader } from '../components/HelixHeader'

export const metadata: Metadata = {
  title: {
    default: 'Helix OS — Operating Infrastructure',
    template: '%s | Helix OS',
  },
  description:
    'The operating infrastructure behind co-intelligent strategy. Frameworks, diagnostics, and AI tools for organisations navigating AI transformation.',
  openGraph: {
    siteName: 'Helix OS',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="helix-root">
          <HelixSidebar />
          <div className="helix-content-area">
            <HelixHeader />
            <main className="helix-main">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
