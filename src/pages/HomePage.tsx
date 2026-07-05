import { useCallback, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import NumberRail from '../components/NumberRail'
import Home from '../components/sections/Home'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Connect from '../components/sections/Connect'
import { useHomeNav } from '../contexts/HomeNavContext'

export default function HomePage() {
  const { section, setSection, scrollTo } = useHomeNav()
  const location = useLocation()
  const navigate = useNavigate()
  const rootRef = useRef<HTMLDivElement>(null)
  // Locks wheel/keyboard input while a snap animation is running.
  const animatingRef = useRef(false)
  // Mirrors `section` so event handlers read the current value without stale closures.
  const sectionRef = useRef(0)
  const lockTimerRef = useRef(0)
  // Guards the location.state?.sec handling against StrictMode double-invoke.
  const handledStateRef = useRef(false)

  useEffect(() => {
    sectionRef.current = section
  }, [section])

  // Scroll-spy: highlight the section closest to the viewport
  useEffect(() => {
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
    // Sync once after mount, when ScrollRestoration already placed the viewport.
    const raf = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [setSection])

  const scrollToSection = useCallback(
    (i: number) => {
      const el = rootRef.current?.querySelector<HTMLElement>(`[data-sec="${i}"]`)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY
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
    },
    [setSection],
  )

  // Expose scrollToSection to the Header (via context) while the home is mounted.
  useEffect(() => {
    scrollTo.current = scrollToSection
    return () => {
      scrollTo.current = null
    }
  }, [scrollTo, scrollToSection])

  // Arriving from another route with a target section (Header nav off-home).
  useEffect(() => {
    if (handledStateRef.current) return
    handledStateRef.current = true
    const sec = (location.state as { sec?: number } | null)?.sec
    if (typeof sec === 'number' && sec > 0) {
      requestAnimationFrame(() => scrollToSection(sec))
      navigate('.', { replace: true, state: null })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Snappy section navigation: one wheel flick / arrow key = next section
  useEffect(() => {
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
  }, [scrollToSection])

  return (
    <div ref={rootRef}>
      <NumberRail section={section} onNav={scrollToSection} />
      <main>
        <Home onGoConnect={() => scrollToSection(4)} />
        <About />
        <Experience />
        <Projects />
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
    </div>
  )
}
