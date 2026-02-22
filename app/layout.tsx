import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'HelixOS — The Helix Lab',
    template: '%s | HelixOS'
  },
  description: 'The canonical source of truth for The Helix Lab frameworks, methodologies, and diagnostic tools.',
  openGraph: {
    siteName: 'HelixOS',
    type: 'website'
  }
}

const navbar = (
  <Navbar
    logo={<b>HelixOS</b>}
    projectLink="https://thehelixlab.co"
  />
)

const footer = (
  <Footer className="flex-col items-center md:items-start">
    © {new Date().getFullYear()} The Helix Lab. All rights reserved.
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: 'rgb(10, 38, 71)',
          light: 'rgb(248, 255, 254)'
        }}
        color={{
          hue: { dark: 174, light: 174 },
          saturation: { dark: 55, light: 55 }
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/thehelixlab/helixos/tree/main/content"
          editLink="Edit this page"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          search={<Search placeholder="Search HelixOS..." />}
          toc={{ title: 'On This Page' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
