import { projects } from '../../data'

interface ProjectsProps {
  onExplore: () => void
}

export default function Projects({ onExplore }: ProjectsProps) {
  return (
    <section
      data-sec="3"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[110px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]"
    >
      <div className="absolute top-20 right-4 z-0 font-poppins text-[60px] font-extrabold tracking-[-4px] text-wm select-none sm:right-[40px] sm:text-[110px] lg:top-24 lg:right-[60px] lg:text-[150px]">
        PROJECTS
      </div>
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <div className="mb-9 flex items-baseline gap-4 lg:mb-11">
          <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
            03
          </span>
          <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Projetos</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-11">
          {projects.map((p) => (
            <div key={p.name} className="flex flex-col">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[14px] border border-line bg-card bg-[repeating-linear-gradient(135deg,var(--soft)_0,var(--soft)_1px,transparent_1px,transparent_13px)]">
                <span className="font-oswald text-xs tracking-[2px] text-muted uppercase">
                  {p.shot}
                </span>
              </div>
              <h3 className="mt-5 mb-3 font-poppins text-[23px] font-semibold text-fg">{p.name}</h3>
              <div className="mb-[14px] flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[20px] border border-line px-3 py-[5px] font-oswald text-[12.5px] tracking-[0.3px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mb-4 text-[15px] leading-[1.7] text-muted">{p.desc}</p>
              <div
                onClick={onExplore}
                className="inline-flex cursor-pointer items-center gap-[10px] font-oswald text-[13.5px] font-semibold tracking-[1px] text-accent"
              >
                <span className="h-[2px] w-[26px] bg-accent" />
                EXPLORAR
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
