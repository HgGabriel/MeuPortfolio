import { Link } from 'react-router-dom'
import { featuredProjects } from '../../data'
import Watermark from '../Watermark'

export default function Projects() {
  return (
    <section
      data-sec="3"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[110px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]"
    >
      <Watermark className="absolute top-20 right-4 z-0 font-poppins text-[60px] font-extrabold tracking-[-4px] text-wm select-none sm:right-[40px] sm:text-[110px] lg:top-24 lg:right-[60px] lg:text-[150px]">
        PROJECTS
      </Watermark>
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <Watermark direction="up" duration={600} distance={20} className="mb-9 flex items-baseline gap-4 lg:mb-11">
          <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
            03
          </span>
          <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Projetos</h2>
        </Watermark>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-11">
          {featuredProjects.map((p, i) => (
            <Watermark key={p.slug} direction="up" duration={650} delay={i * 90} distance={28} className="flex flex-col">
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
              <Link
                to={`/projetos/${p.slug}`}
                className="inline-flex items-center gap-[10px] font-oswald text-[13.5px] font-semibold tracking-[1px] text-accent"
              >
                <span className="h-[2px] w-[26px] bg-accent" />
                EXPLORAR
              </Link>
            </Watermark>
          ))}
        </div>
        <Watermark direction="up" duration={600} delay={120} distance={20} className="mt-12 flex justify-center">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-[10px] rounded-[30px] border border-line px-7 py-[13px] font-oswald text-[13.5px] font-semibold tracking-[1px] text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            VER TODOS OS MEUS PROJETOS →
          </Link>
        </Watermark>
      </div>
    </section>
  )
}
