import { Mail, Linkedin, Github, Instagram } from 'lucide-react'

const LINKS = [
  { label: 'Email', icon: Mail },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'GitHub', icon: Github },
  { label: 'Instagram', icon: Instagram },
]

export default function SocialRail() {
  return (
    <div className="fixed inset-y-0 right-7 z-40 hidden flex-col items-center justify-center gap-5 lg:flex">
      <div className="h-14 w-px bg-line" />
      {LINKS.map(({ label, icon: Icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          onClick={(e) => e.preventDefault()}
          className="text-muted transition-all duration-200 hover:-translate-x-[2px] hover:text-accent"
        >
          <Icon size={18} strokeWidth={1.6} />
        </a>
      ))}
      <div className="h-14 w-px bg-line" />
    </div>
  )
}
