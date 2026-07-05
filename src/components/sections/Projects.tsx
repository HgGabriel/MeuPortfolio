import { Link } from 'react-router-dom'
import { featuredProjects } from '../../data'
import Watermark from '../Watermark'
import TiltPreview from '../TiltPreview'

export default function Projects() {
  return (
    <section
      data-sec="3"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[110px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]"
    >
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <div className="relative mb-9 lg:mb-11">
          <Watermark className="pointer-events-none absolute top-1/2 right-0 z-0 -translate-y-1/2 font-poppins text-[60px] font-extrabold tracking-[-4px] text-wm select-none sm:text-[110px] lg:text-[150px]">
            PROJECTS
          </Watermark>
          <Watermark direction="up" duration={600} distance={20} className="relative z-2 flex items-baseline gap-4">
            <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
              03
            </span>
            <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Projetos</h2>
          </Watermark>
          <Watermark direction="up" duration={600} delay={60} distance={20} className="relative z-2 mt-6 max-w-2xl">
            <p className="text-[15px] text-fg leading-relaxed font-medium">
              Estes são os projetos que tenho mais orgulho no momento. Tenho outros também que podem ser vistos em{' '}
              <Link to="/projetos" className="font-bold text-accent hover:underline transition-colors decoration-2 underline-offset-2">
                meu portfólio completo
              </Link>
              .
            </p>
          </Watermark>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-11">
          {featuredProjects.map((p, i) => (
            <Watermark key={p.slug} direction="up" duration={650} delay={i * 90} distance={28} className="flex flex-col">
              <TiltPreview slug={p.slug} shot={p.shot} accent={p.accent} />
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
            className="inline-flex items-center gap-3 rounded-[30px] border-2 border-accent px-8 py-3 font-oswald text-[14.5px] font-bold tracking-[1.2px] text-accent transition-all duration-200 hover:gap-4 hover:bg-accent/10"
          >
            VER TODOS OS MEUS PROJETOS →
          </Link>
        </Watermark>
      </div>
    </section>
  )
}
