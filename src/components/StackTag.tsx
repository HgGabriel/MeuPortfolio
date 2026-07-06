import StackIcon from 'tech-stack-icons'
import { STACK_ICON_NAMES } from '../lib/stackIcons'
import { useIsLightTheme } from '../lib/useIsLightTheme'

interface StackTagProps {
  label: string
  className: string
}

/** Pill de tag: ícone + nome quando a tag é uma tecnologia conhecida, só texto caso contrário. */
export default function StackTag({ label, className }: StackTagProps) {
  const icon = STACK_ICON_NAMES[label]
  const isLight = useIsLightTheme()

  return (
    <span className={`inline-flex items-center gap-[6px] ${className}`}>
      {icon && <StackIcon name={icon} variant={isLight ? 'light' : 'dark'} className="size-[13px] shrink-0" />}
      {label}
    </span>
  )
}
