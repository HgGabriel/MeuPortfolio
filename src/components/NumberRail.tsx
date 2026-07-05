import { Fragment } from 'react'

const LABELS = ['00', '01', '02', '03', '04']

interface NumberRailProps {
  section: number
  onNav: (i: number) => void
}

export default function NumberRail({ section, onNav }: NumberRailProps) {
  return (
    <div className="pointer-events-none fixed inset-y-0 left-[30px] xl:left-[50px] 2xl:left-[calc(50%-750px)] z-40 hidden flex-col items-center justify-center lg:flex">
      {LABELS.map((label, i) => {
        const active = section === i
        const isPast = i < section

        // Past sections are slightly highlighted/brighter, active is accent, future is muted/30
        let stateClasses = ''
        if (active) {
          stateClasses = 'scale-125 font-bold text-accent'
        } else if (isPast) {
          stateClasses = 'scale-100 font-medium text-fg/80'
        } else {
          stateClasses = 'scale-100 font-normal text-muted/30'
        }

        return (
          <Fragment key={label}>
            <span
              onClick={() => onNav(i)}
              className={`pointer-events-auto cursor-pointer font-poppins text-[15px] tracking-[1px] transition-all duration-[250ms] hover:text-accent ${stateClasses}`}
            >
              {label}
            </span>
            {i < LABELS.length - 1 && (
              <div
                className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
                  section === i ? 'h-[94px]' : 'h-[22px]'
                }`}
              >
                <div
                  className={`w-[1px] bg-muted/40 transition-all duration-300 ease-in-out ${
                    section === i ? 'h-[78px] opacity-100' : 'h-0 opacity-0'
                  }`}
                />
              </div>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

