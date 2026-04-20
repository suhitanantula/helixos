import type { MDXComponents } from 'mdx/types'
import { QuadrantGrid } from './components/QuadrantGrid'
import { FrameworkCard } from './components/FrameworkCard'
import { CaseStudyCard } from './components/CaseStudyCard'
import { MaturityTier } from './components/MaturityTier'

function HelixMDXWrapper({ children }: { children: React.ReactNode }) {
  return <article className="helix-article">{children}</article>
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    wrapper: HelixMDXWrapper,
    QuadrantGrid,
    FrameworkCard,
    CaseStudyCard,
    MaturityTier,
    ...components,
  }
}
