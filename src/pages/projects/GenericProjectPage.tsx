import { placeholderImage } from '../../data'
import type { MinorProject } from '../../data'
import ProjectPageShell from './ProjectPageShell'
import Watermark from '../../components/Watermark'

interface GenericProjectPageProps {
  project: MinorProject
}

/** Template data-driven usado pelos projetos menores (sem página exclusiva). */
export default function GenericProjectPage({ project }: GenericProjectPageProps) {
  return (
    <ProjectPageShell meta={project}>
      <Watermark direction="up" duration={650} distance={24}>
        <h1 className="mb-5 font-poppins text-[36px] leading-[1.05] font-extrabold tracking-[-1.5px] text-fg sm:text-[48px] lg:text-[56px]">
          {project.name}
        </h1>
        <p className="mb-10 max-w-[640px] text-[17px] leading-[1.8] text-muted">{project.long}</p>
      </Watermark>

      <Watermark direction="up" duration={650} delay={120} distance={24}>
        <div className="mb-10 aspect-[16/9] overflow-hidden rounded-[14px] border border-line bg-card">
          <img src={placeholderImage(project.slug)} alt={project.shot} className="size-full object-cover" />
        </div>
      </Watermark>

      <Watermark direction="up" duration={650} delay={200} distance={24}>
        <div className="mb-4 font-oswald text-[13px] tracking-[2px] text-accent">DESTAQUES</div>
        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-[14px] text-[15.5px] leading-[1.7] text-muted">
              <span className="mt-[11px] h-[2px] w-[22px] shrink-0 bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      </Watermark>
    </ProjectPageShell>
  )
}
