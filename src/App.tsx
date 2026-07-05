import { useCallback, useEffect, useRef, useState } from 'react'
import GridPulseBackground from './components/GridPulseBackground'
import Header from './components/Header'
import NumberRail from './components/NumberRail'
import SocialRail from './components/SocialRail'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Connect from './components/sections/Connect'
import DetailsPage from './components/DetailsPage'

export type View = 'main' | 'details'
export type Lang = 'PT' | 'EN'

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [view, setView] = useState<View>('main')
  const [section, setSection] = useState(0)
  const [lang, setLang] = useState<Lang>('PT')
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  // Scroll-spy: highlight the section closest to the viewport
  useEffect(() => {
    if (view !== 'main') return
    const onScroll = () => {
      if (!rootRef.current) return
      const secs = rootRef.current.querySelectorAll<HTMLElement>('[data-sec]')
      const y = window.scrollY + window.innerHeight * 0.35
      let cur = 0
      secs.forEach((s) => {
        const top = s.getBoundingClientRect().top + window.scrollY
        if (top <= y) cur = Number(s.dataset.sec)
      })
      setSection(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [view])

  const scrollToSection = useCallback(
    (i: number) => {
      const doScroll = () => {
        const el = rootRef.current?.querySelector<HTMLElement>(`[data-sec="${i}"]`)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 56
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
      if (view !== 'main') {
        setView('main')
        setTimeout(doScroll, 90)
      } else {
        doScroll()
      }
    },
    [view],
  )

  const goDetails = useCallback((target: 'personal' | 'proj') => {
    setView('details')
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      const el = rootRef.current?.querySelector<HTMLElement>(`#${target}`)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 56
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 110)
  }, [])

  const goHome = useCallback(() => scrollToSection(0), [scrollToSection])

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-hidden font-poppins text-fg">
      <GridPulseBackground />
      <Header
        view={view}
        section={section}
        lang={lang}
        theme={theme}
        onNav={scrollToSection}
        onGoHome={goHome}
        onGoPersonal={() => goDetails('personal')}
        onGoProjDetails={() => goDetails('proj')}
        onToggleLang={() => setLang((l) => (l === 'PT' ? 'EN' : 'PT'))}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      {view === 'main' && <NumberRail section={section} onNav={scrollToSection} />}
      <SocialRail />

      {view === 'main' ? (
        <main>
          <Home onGoConnect={() => scrollToSection(4)} />
          <About onGoPersonal={() => goDetails('personal')} />
          <Experience />
          <Projects onExplore={() => goDetails('proj')} />
          <Connect />
          <footer className="border-t border-line p-10 text-center font-oswald text-[13px] tracking-[0.5px] text-muted">
            © 2026 Hiago Gabriel — Feito com café e código
          </footer>
        </main>
      ) : (
        <DetailsPage onGoHome={goHome} />
      )}
    </div>
  )
}
