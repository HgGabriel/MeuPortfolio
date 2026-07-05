import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects, minorProjects } from '../../data'
import Watermark from '../../components/Watermark'

export default function AllProjectsPage() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden px-6 pt-[54px] pb-16 sm:px-10 lg:pt-[70px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-[9px] font-oswald text-sm tracking-[1px] text-muted transition-colors hover:text-accent"
          >
            ← VOLTAR AO INÍCIO
          </Link>
          <div className="mb-3 font-oswald text-[15px] tracking-[2px] text-accent">PORTFÓLIO</div>
          <h1 className="mb-4 font-poppins text-[34px] font-extrabold tracking-[-1px] text-fg sm:text-[44px] lg:text-5xl">
            Todos os meus projetos
          </h1>
          <p className="mb-12 max-w-[560px] text-[16px] leading-[1.8] text-muted">
            Os oito em destaque têm uma página própria, com a história completa de cada um. Os
            demais são experimentos e projetos menores que também valem uma olhada.
          </p>

          {/* EM DESTAQUE */}
          <div className="mb-6 font-oswald text-[13px] tracking-[2px] text-muted">EM DESTAQUE</div>
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {featuredProjects.map((p, i) => (
              <Watermark key={p.slug} direction="up" duration={600} delay={i * 60} distance={22}>
                <Link
                  to={`/projetos/${p.slug}`}
                  style={{ '--accent-project': p.accent, '--accent-project-soft': p.accentSoft } as CSSProperties}
                  className="group flex h-full flex-col rounded-[20px] border border-line bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-(--accent-project) sm:p-7"
                >
                  <div className="mb-5 flex aspect-[16/9] items-center justify-center rounded-[12px] border border-line bg-(--accent-project-soft)">
                    <span className="font-oswald text-xs tracking-[2px] text-muted uppercase">
                      {p.shot}
                    </span>
                  </div>
                  <div className="mb-2 flex items-baseline justify-between gap-3 font-oswald text-[12.5px] tracking-[1.5px]">
                    <span className="text-(--accent-project)">{p.year}</span>
                    <span className="text-muted uppercase">{p.role}</span>
                  </div>
                  <h2 className="mb-2 font-poppins text-[22px] font-semibold text-fg">{p.name}</h2>
                  <p className="mb-5 text-[14.5px] leading-[1.7] text-muted">{p.tagline}</p>
                  <div className="mt-auto inline-flex items-center gap-[10px] font-oswald text-[13px] font-semibold tracking-[1px] text-(--accent-project)">
                    <span className="h-[2px] w-[26px] bg-(--accent-project) transition-all duration-200 group-hover:w-[40px]" />
                    VER PROJETO
                  </div>
                </Link>
              </Watermark>
            ))}
          </div>

          {/* OUTROS PROJETOS */}
          <div className="mb-6 font-oswald text-[13px] tracking-[2px] text-muted">
            OUTROS PROJETOS
          </div>
          <div className="flex flex-col gap-4">
            {minorProjects.map((p, i) => (
              <Watermark key={p.slug} direction="up" duration={550} delay={i * 50} distance={18}>
                <Link
                  to={`/projetos/${p.slug}`}
                  className="group flex flex-col gap-3 rounded-[16px] border border-line bg-card px-6 py-5 transition-colors duration-200 hover:border-accent sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-oswald text-[12.5px] tracking-[1.5px] text-accent">
                      {p.year}
                    </span>
                    <div>
                      <div className="font-poppins text-[17px] font-semibold text-fg">{p.name}</div>
                      <div className="mt-[2px] text-[14px] leading-[1.6] text-muted">{p.desc}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden flex-wrap gap-2 sm:flex">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-[20px] border border-line px-3 py-[4px] font-oswald text-[12px] tracking-[0.5px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="font-oswald text-accent transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </Watermark>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
