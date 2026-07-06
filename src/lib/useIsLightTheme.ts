import { useEffect, useState } from 'react'

/**
 * O tema é aplicado via classe `light` em `document.documentElement` (ver App.tsx).
 * Ler o DOM direto evita prop-drilling do estado de tema por vários componentes.
 */
export function useIsLightTheme(): boolean {
  const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'))

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => setIsLight(root.classList.contains('light')))
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return isLight
}
