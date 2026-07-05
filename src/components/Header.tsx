import { useState, useRef } from 'react'
import { Globe, Sun, Moon } from 'lucide-react'
import type { View, Lang } from '../App'

interface HeaderProps {
  view: View
  section: number
  lang: Lang
  theme: 'dark' | 'light'
  onNav: (i: number) => void
  onGoHome: () => void
  onGoPersonal: () => void
  onGoProjDetails: () => void
  onToggleLang: () => void
  onToggleTheme: () => void
}

const NAV_ITEMS = [
  { label: 'Home', sec: 0 },
  { label: 'About', sec: 1 },
  { label: 'Experience', sec: 2 },
  { label: 'Projects', sec: 3 },
  { label: 'Connect', sec: 4 },
]

export default function Header({
  view,
  section,
  lang,
  theme,
  onNav,
  onGoHome,
  onGoPersonal,
  onGoProjDetails,
  onToggleLang,
  onToggleTheme,
}: HeaderProps) {
  const [aboutOpen, setAboutOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleAboutLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150)
  }

  const handleAboutEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setAboutOpen(true)
  }

  const navClass = (sec: number) => {
    const active = view === 'main' && section === sec
    return `cursor-pointer transition-colors duration-200 ${
      active ? 'font-semibold text-fg' : 'font-normal text-navc'
    }`
  }

  return (
    <header className="fixed inset-x-0 top-0 z-60 flex h-16 items-center justify-between border-b border-line bg-bg px-[34px] backdrop-blur-[8px] transition-colors duration-[450ms]">
      {/* Logo */}
      <div
        onClick={onGoHome}
        className="flex cursor-pointer items-center gap-[2px] font-poppins text-[26px] leading-none font-extrabold tracking-[-1px]"
      >
        <span className="text-accent">h</span>
        <span className="text-fg">g</span>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-[30px] font-oswald text-[15px] tracking-[0.5px]">
        {NAV_ITEMS.map((item) =>
          item.label === 'About' ? (
            <div
              key={item.label}
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
              className="relative flex items-center gap-1"
            >
              <span
                onClick={() => {
                  setAboutOpen(false)
                  onNav(item.sec)
                }}
                className={navClass(item.sec)}
              >
                About
              </span>
              <span className="translate-y-px text-[10px] text-navc">▾</span>
              {aboutOpen && (
                <div className="absolute -left-[14px] top-[30px] min-w-[236px] animate-drop-in rounded-[14px] border border-line bg-card p-2 font-poppins shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <div
                    onClick={() => {
                      setAboutOpen(false)
                      onNav(1)
                    }}
                    className="cursor-pointer rounded-[9px] px-[13px] py-[11px] text-[13.5px] font-medium text-fg transition-colors duration-150 hover:bg-soft"
                  >
                    Seção Sobre
                  </div>
                  <div
                    onClick={() => {
                      setAboutOpen(false)
                      onGoPersonal()
                    }}
                    className="flex cursor-pointer items-center justify-between rounded-[9px] px-[13px] py-[11px] text-[13.5px] font-medium text-fg transition-colors duration-150 hover:bg-soft"
                  >
                    <span>Mais sobre mim</span>
                    <span className="text-accent">→</span>
                  </div>
                  <div
                    onClick={() => {
                      setAboutOpen(false)
                      onGoProjDetails()
                    }}
                    className="flex cursor-pointer items-center justify-between rounded-[9px] px-[13px] py-[11px] text-[13.5px] font-medium text-fg transition-colors duration-150 hover:bg-soft"
                  >
                    <span>Detalhes dos projetos</span>
                    <span className="text-accent">→</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span key={item.label} onClick={() => onNav(item.sec)} className={navClass(item.sec)}>
              {item.label}
            </span>
          ),
        )}
      </nav>

      {/* Language + theme */}
      <div className="flex items-center gap-[18px]">
        <div
          onClick={onToggleLang}
          title="Trocar idioma (visual)"
          className="flex cursor-pointer items-center gap-[6px] font-oswald text-[13px] font-medium tracking-[0.5px] text-navc"
        >
          <Globe size={19} strokeWidth={1.6} />
          <span>{lang}</span>
        </div>
        <div
          onClick={onToggleTheme}
          title="Trocar tema"
          className="flex size-[34px] cursor-pointer items-center justify-center rounded-[9px] text-fg transition-colors duration-150 hover:bg-soft"
        >
          {theme === 'dark' ? <Sun size={19} strokeWidth={1.7} /> : <Moon size={19} strokeWidth={1.7} />}
        </div>
      </div>
    </header>
  )
}
