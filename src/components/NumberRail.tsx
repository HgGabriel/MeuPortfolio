const LABELS = ['00', '01', '02', '03', '04']

interface NumberRailProps {
  section: number
  onNav: (i: number) => void
}

export default function NumberRail({ section, onNav }: NumberRailProps) {
  return (
    <div className="pointer-events-none fixed inset-y-0 left-[30px] z-40 flex flex-col items-center justify-center gap-[22px]">
      {LABELS.map((label, i) => {
        const active = section === i
        return (
          <span
            key={label}
            onClick={() => onNav(i)}
            className={`pointer-events-auto cursor-pointer font-poppins text-[15px] tracking-[1px] transition-all duration-[250ms] ${
              active ? 'scale-125 font-bold text-accent' : 'scale-100 font-normal text-muted'
            }`}
          >
            {label}
          </span>
        )
      })}
    </div>
  )
}
