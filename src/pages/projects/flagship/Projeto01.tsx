import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-um')!

/** Assinatura: editorial — número gigante no hero e seções numeradas em duas colunas. */
export default function Projeto01() {
  const sections = [
    {
      num: '01',
      title: 'Contexto',
      body: 'Qual problema existia antes deste projeto? Descreva o cenário, quem sofria com ele e por que valia a pena resolver. Dois ou três parágrafos curtos.',
    },
    {
      num: '02',
      title: 'Solução',
      body: 'O que você construiu e como ele ataca o problema. Fale das escolhas de produto antes das técnicas: o que o usuário passou a conseguir fazer.',
    },
    {
      num: '03',
      title: 'Decisões técnicas',
      body: 'As duas ou três decisões de arquitetura que definiram o projeto — e o porquê de cada uma. É aqui que um recrutador técnico vai prestar atenção.',
    },
    {
      num: '04',
      title: 'Resultado',
      body: 'O que mudou depois do deploy: métricas, feedback, aprendizados. Se não houver números, conte o que você levaria para o próximo projeto.',
    },
  ]

  return (
    <ProjectPageShell meta={meta}>
      {/* Hero editorial */}
      <div className="relative mb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 select-none font-poppins text-[120px] leading-none font-extrabold tracking-[-8px] text-(--accent-project-soft) sm:text-[180px] lg:text-[240px]"
        >
          01
        </div>
        <Watermark direction="up" duration={650} distance={24} className="relative">
          <h1 className="mb-5 max-w-[700px] font-poppins text-[40px] leading-[1.02] font-extrabold tracking-[-2px] text-fg sm:text-[56px] lg:text-[68px]">
            {meta.name}
          </h1>
          <p className="max-w-[520px] text-[18px] leading-[1.75] text-muted">{meta.tagline}</p>
        </Watermark>
      </div>

      <Watermark direction="up" duration={650} delay={120} distance={24}>
        <div className="mb-16 flex aspect-[16/8] items-center justify-center rounded-[14px] border border-line bg-(--accent-project-soft)">
          <span className="font-oswald text-xs tracking-[2px] text-muted uppercase">{meta.shot}</span>
        </div>
      </Watermark>

      {/* Seções numeradas em duas colunas */}
      <div className="flex flex-col">
        {sections.map((s, i) => (
          <Watermark key={s.num} direction="up" duration={600} delay={i * 60} distance={20}>
            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[220px_1fr] lg:gap-12">
              <div className="flex items-baseline gap-4">
                <span className="font-poppins text-[28px] leading-none font-extrabold tracking-[-1px] text-(--accent-project)">
                  {s.num}
                </span>
                <h2 className="m-0 font-oswald text-[20px] font-semibold tracking-[0.5px] text-fg">
                  {s.title}
                </h2>
              </div>
              <p className="m-0 max-w-[640px] text-[16px] leading-[1.85] text-muted">{s.body}</p>
            </div>
          </Watermark>
        ))}
      </div>
    </ProjectPageShell>
  )
}
