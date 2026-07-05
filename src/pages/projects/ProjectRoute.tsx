import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { minorProjects } from '../../data'
import { flagshipPages } from './flagship'
import GenericProjectPage from './GenericProjectPage'
import NotFoundPage from '../NotFoundPage'

/**
 * Resolve /projetos/:slug — primeiro procura uma página flagship exclusiva,
 * depois um projeto menor (template genérico), senão 404.
 */
export default function ProjectRoute() {
  const { slug } = useParams<{ slug: string }>()

  const Flagship = slug ? flagshipPages[slug] : undefined
  if (Flagship) {
    return (
      <Suspense fallback={null}>
        <Flagship />
      </Suspense>
    )
  }

  const minor = minorProjects.find((p) => p.slug === slug)
  if (minor) return <GenericProjectPage project={minor} />

  return <NotFoundPage />
}
