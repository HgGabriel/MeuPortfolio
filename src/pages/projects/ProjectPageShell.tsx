import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getRecommendedProjects, placeholderImage } from '../../data'
import type { FeaturedProject, MinorProject, Project } from '../../data'

interface ProjectPageShellProps {
  meta: FeaturedProject | MinorProject
  children: ReactNode
}

function RecommendedCard({ project, sharedTags }: { project: Project; sharedTags: string[] }) {
  const accent = 'accent' in project ? project.accent : undefined
  const accentSoft = 'accentSoft' in project ? project.accentSoft : undefined
  const description = 'tagline' in project ? project.tagline : project.desc

  return (
    <Link
      to={`/projetos/${project.slug}`}
      style={
        accent ? ({ '--accent-project': accent, '--accent-project-soft': accentSoft } as CSSProperties) : undefined
      }
      className={`group flex flex-col gap-5 rounded-[20px] border border-line bg-card p-5 transition-all duration-200 hover:-translate-y-1 sm:flex-row sm:items-center sm:p-6 ${
        accent ? 'hover:border-(--accent-project)' : 'hover:border-accent'
      }`}
    >
      <div
        className={`aspect-[16/9] shrink-0 overflow-hidden rounded-[12px] border border-line sm:aspect-square sm:w-[160px] ${
          accent ? 'bg-(--accent-project-soft)' : 'bg-line/15'
        }`}
      >
        <img src={placeholderImage(project.slug)} alt={project.shot} className="size-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mb-2 flex items-baseline justify-between gap-3 font-oswald text-[12.5px] tracking-[1.5px]">
          <span className={accent ? 'text-(--accent-project)' : 'text-accent'}>{project.year}</span>
          <span className="text-muted uppercase">{project.role}</span>
        </div>
        <div className="mb-2 font-poppins text-[18px] font-semibold text-fg">{project.name}</div>
        <p className="mb-4 text-[14px] leading-[1.6] text-muted">{description}</p>
        <span className="mt-auto flex flex-wrap gap-2">
          {sharedTags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-[20px] border border-line px-3 py-[4px] font-oswald text-[12px] tracking-[0.5px] text-muted"
            >
              {t}
            </span>
          ))}
        </span>
      </div>
    </Link>
  )
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
  const recommended = getRecommendedProjects(meta.slug, 4)

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

          {recommended.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 font-oswald text-xs tracking-[2px] text-muted">
                OUTROS PROJETOS
              </div>
              <div className="flex flex-col gap-5">
                {recommended.map((p) => (
                  <RecommendedCard
                    key={p.slug}
                    project={p}
                    sharedTags={p.tags.filter((t) => meta.tags.includes(t))}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
