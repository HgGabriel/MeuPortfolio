import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '../../data'
import type { FeaturedProject, MinorProject } from '../../data'

interface ProjectPageShellProps {
  meta: FeaturedProject | MinorProject
  children: ReactNode
}

/**
 * Moldura comum de toda página de projeto: link de volta, faixa de metadados,
 * links externos e CTA de próximo projeto. O conteúdo (children) herda o tema
 * do projeto via --accent-project / --accent-project-soft; o chrome da moldura
 * permanece no vermelho do portfólio.
 */
export default function ProjectPageShell({ meta, children }: ProjectPageShellProps) {
  const accent = 'accent' in meta ? meta.accent : undefined
  const accentSoft = 'accentSoft' in meta ? meta.accentSoft : undefined
  const featIdx = featuredProjects.findIndex((p) => p.slug === meta.slug)
  const next = featIdx >= 0 ? featuredProjects[(featIdx + 1) % featuredProjects.length] : null

  const externalLink = (label: string, href?: string) =>
    href ? (
      <a
        key={label}
        href={href}
        target={href === '#' ? undefined : '_blank'}
        rel="noreferrer"
        onClick={href === '#' ? (e) => e.preventDefault() : undefined}
        className="inline-flex items-center gap-[6px] font-oswald text-[13.5px] tracking-[0.8px] text-muted transition-colors hover:text-accent"
      >
        {label}
        <ArrowUpRight size={15} strokeWidth={1.8} />
      </a>
    ) : null

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden px-6 pt-[54px] pb-16 sm:px-10 lg:pt-[70px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-[9px] font-oswald text-sm tracking-[1px] text-muted transition-colors hover:text-accent"
            >
              ← TODOS OS PROJETOS
            </Link>
            <div className="flex gap-[22px]">
              {externalLink('VER DEMO', meta.links.demo)}
              {externalLink('CÓDIGO', meta.links.repo)}
            </div>
          </div>

          <div className="mb-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-6 font-oswald text-[13px] tracking-[1.5px]">
            <span className="text-accent">{meta.year}</span>
            <span className="text-muted uppercase">{meta.role}</span>
            <span className="flex flex-wrap gap-2">
              {meta.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-[20px] border border-line px-3 py-[4px] text-[12px] tracking-[0.5px] text-muted"
                >
                  {t}
                </span>
              ))}
            </span>
          </div>

          <div
            style={
              accent
                ? ({
                    '--accent-project': accent,
                    '--accent-project-soft': accentSoft,
                  } as CSSProperties)
                : undefined
            }
          >
            {children}
          </div>

          {next && (
            <Link
              to={`/projetos/${next.slug}`}
              className="group mt-16 flex items-center justify-between gap-6 rounded-[20px] border border-line bg-card px-7 py-8 transition-colors duration-200 hover:border-accent sm:px-10"
            >
              <div>
                <div className="mb-2 font-oswald text-xs tracking-[2px] text-muted">
                  PRÓXIMO PROJETO
                </div>
                <div className="font-poppins text-[24px] font-semibold text-fg sm:text-[28px]">
                  {next.name}
                </div>
              </div>
              <span className="font-oswald text-xl text-accent transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}
