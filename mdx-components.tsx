import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { QuadrantGrid } from './components/QuadrantGrid'
import { FrameworkCard } from './components/FrameworkCard'
import { CaseStudyCard } from './components/CaseStudyCard'
import { MaturityTier } from './components/MaturityTier'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, React.ComponentType>) {
  return {
    ...docsComponents,
    QuadrantGrid,
    FrameworkCard,
    CaseStudyCard,
    MaturityTier,
    ...components
  }
}
