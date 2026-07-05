import { useEffect, useRef, useState } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import GridPulseBackground from './components/GridPulseBackground'
import Header from './components/Header'
import SocialRail from './components/SocialRail'
import { HomeNavContext } from './contexts/HomeNavContext'

export type Lang = 'PT' | 'EN'

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [lang, setLang] = useState<Lang>('PT')
  // Home section state lives here so the Header can highlight/navigate
  // even though the scroll logic itself belongs to HomePage.
  const [section, setSection] = useState(0)
  const scrollTo = useRef<((i: number) => void) | null>(null)
  const location = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)
  const firstRenderRef = useRef(true)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  // Move keyboard/screen-reader focus to the page content after navigation.
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    contentRef.current?.focus({ preventScroll: true })
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-x-hidden font-poppins text-fg">
      <HomeNavContext.Provider value={{ section, setSection, scrollTo }}>
        <GridPulseBackground />
        <Header
          lang={lang}
          theme={theme}
          onToggleLang={() => setLang((l) => (l === 'PT' ? 'EN' : 'PT'))}
          onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        />
        <SocialRail />
        <div ref={contentRef} tabIndex={-1} className="outline-none">
          <Outlet />
        </div>
      </HomeNavContext.Provider>
      <ScrollRestoration />
    </div>
  )
}
