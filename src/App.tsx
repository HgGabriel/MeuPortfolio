import { useCallback, useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
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
  // Locks wheel/keyboard input while a snap animation is running.
  const animatingRef = useRef(false)
  // Mirrors `section` so event handlers read the current value without stale closures.
  const sectionRef = useRef(0)
  const lockTimerRef = useRef(0)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  useEffect(() => {
    sectionRef.current = section
  }, [section])

  // Scroll-spy: highlight the section closest to the viewport
  useEffect(() => {
    if (view !== 'main') return
    const onScroll = () => {
      // Don't fight the snap animation — it sets the active section explicitly.
      if (animatingRef.current || !rootRef.current) return
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
          sectionRef.current = i
          setSection(i)
          // Hold the lock for the duration of the smooth scroll.
          animatingRef.current = true
          clearTimeout(lockTimerRef.current)
          lockTimerRef.current = window.setTimeout(() => {
            animatingRef.current = false
          }, 800)
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

  // Snappy section navigation: one wheel flick / arrow key = next section
  useEffect(() => {
    if (view !== 'main') return

    const sections = () =>
      Array.from(rootRef.current?.querySelectorAll<HTMLElement>('[data-sec]') ?? [])

    const go = (dir: number) => {
      const next = sectionRef.current + dir
      if (next < 0 || next >= sections().length) return false
      scrollToSection(next)
      return true
    }

    // Timestamp of the previous wheel event, used to tell a fresh flick apart
    // from the inertia tail of the gesture that already triggered a snap.
    let lastWheel = 0

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 4) return
      const gap = e.timeStamp - lastWheel
      lastWheel = e.timeStamp

      // During the snap animation, swallow scrolls but let the fixed-duration
      // lock expire on its own — never renew it, or it stays stuck.
      if (animatingRef.current) {
        e.preventDefault()
        return
      }
      // Ignore momentum/continuation events; only act on the start of a gesture.
      if (gap < 120) return

      const dir = e.deltaY > 0 ? 1 : -1
      // If the current section is taller than the viewport, let the user scroll
      // through it naturally before snapping to the next one.
      const cur = sections()[sectionRef.current]
      if (cur) {
        const rect = cur.getBoundingClientRect()
        if (dir > 0 && rect.bottom > window.innerHeight + 2) return
        if (dir < 0 && rect.top < -2) return
      }
      if (go(dir)) e.preventDefault()
    }

    const onKey = (e: KeyboardEvent) => {
      if (animatingRef.current) return
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      let dir = 0
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) dir = 1
      else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) dir = -1
      else return
      if (go(dir)) e.preventDefault()
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      clearTimeout(lockTimerRef.current)
    }
  }, [view, scrollToSection])

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
          <footer className="border-t border-line px-6 py-8 text-center font-oswald text-[13px] tracking-[0.5px] text-muted sm:p-10">
            <div className="mb-5 flex justify-center gap-7 lg:hidden">
              {[
                { label: 'Email', icon: Mail },
                { label: 'LinkedIn', icon: Linkedin },
                { label: 'GitHub', icon: Github },
                { label: 'Instagram', icon: Instagram },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="text-muted transition-colors duration-200 hover:text-accent"
                >
                  <Icon size={20} strokeWidth={1.6} />
                </a>
              ))}
            </div>
            © 2026 Hiago Gabriel — Feito com café e código
          </footer>
        </main>
      ) : (
        <DetailsPage onGoHome={goHome} />
      )}
    </div>
  )
}
