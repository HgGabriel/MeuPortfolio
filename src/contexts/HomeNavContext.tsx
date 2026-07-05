import { createContext, useContext } from 'react'
import type { RefObject } from 'react'

export interface HomeNav {
  /** Seção ativa da home (0–4); só é atualizada enquanto a rota "/" está montada. */
  section: number
  setSection: (i: number) => void
  /** Registrado pela HomePage no mount; null fora da home. */
  scrollTo: RefObject<((i: number) => void) | null>
}

export const HomeNavContext = createContext<HomeNav | null>(null)

export function useHomeNav() {
  const ctx = useContext(HomeNavContext)
  if (!ctx) throw new Error('useHomeNav precisa estar dentro de HomeNavContext.Provider')
  return ctx
}
