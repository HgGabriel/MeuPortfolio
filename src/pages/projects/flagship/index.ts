import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

/**
 * Registro das 8 páginas exclusivas. A chave é o slug em data.tsx
 * (featuredProjects) — ao renomear um projeto, atualize os dois lugares
 * e o nome do arquivo da página.
 */
export const flagshipPages: Record<string, LazyExoticComponent<ComponentType>> = {
  'projeto-um': lazy(() => import('./Projeto01')),
  'projeto-dois': lazy(() => import('./Projeto02')),
  'projeto-tres': lazy(() => import('./Projeto03')),
  'projeto-quatro': lazy(() => import('./Projeto04')),
  'projeto-cinco': lazy(() => import('./Projeto05')),
  'projeto-seis': lazy(() => import('./Projeto06')),
  'projeto-sete': lazy(() => import('./Projeto07')),
  'projeto-oito': lazy(() => import('./Projeto08')),
}
