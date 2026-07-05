import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-seis')!

/** Assinatura: bento grid — a página inteira é um mosaico de cards. */
export default function Projeto06() {
  return (
    <ProjectPageShell meta={meta}>
      <Watermark direction="up" duration={650} distance={24}>
        <h1 className="mb-4 font-poppins text-[38px] leading-[1.05] font-extrabold tracking-[-1.5px] text-fg sm:text-[50px]">
          {meta.name}
        </h1>
        <p className="mb-12 max-w-[560px] text-[17px] leading-[1.8] text-muted">{meta.tagline}</p>
      </Watermark>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Intro — card largo */}
        <Watermark direction="up" duration={600} distance={20} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <div className="flex h-full flex-col justify-between rounded-[20px] border border-line bg-card p-7 sm:p-8">
            <div>
              <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
                O PROJETO
              </div>
              <p className="m-0 text-[16px] leading-[1.85] text-muted">
                O card principal do mosaico: dois parágrafos sobre o problema e a solução. Os cards
                menores ao redor carregam os destaques — números, stack e telas.
              </p>
            </div>
            <div className="mt-6 flex aspect-[16/8] items-center justify-center rounded-[12px] border border-line bg-(--accent-project-soft)">
              <span className="font-oswald text-[11px] tracking-[2px] text-muted uppercase">{meta.shot}</span>
            </div>
          </div>
        </Watermark>

        {/* Métricas */}
        {[
          { big: '00%', label: 'métrica de impacto' },
          { big: '00s', label: 'métrica de performance' },
        ].map((m, i) => (
          <Watermark key={m.label} direction="up" duration={600} delay={80 + i * 60} distance={20}>
            <div className="flex h-full flex-col justify-center rounded-[20px] border border-line bg-card p-7 text-center">
              <div className="font-poppins text-[44px] leading-none font-extrabold text-(--accent-project)">
                {m.big}
              </div>
              <div className="mt-2 font-oswald text-[12px] tracking-[1.5px] text-muted uppercase">
                {m.label}
              </div>
            </div>
          </Watermark>
        ))}

        {/* Stack */}
        <Watermark direction="up" duration={600} delay={140} distance={20} className="lg:col-span-2">
          <div className="h-full rounded-[20px] border border-line bg-card p-7">
            <div className="mb-4 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
              STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-[20px] border border-line bg-(--accent-project-soft) px-4 py-[7px] font-oswald text-[13px] tracking-[0.4px] text-fg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Watermark>

        {/* Desafio — card destacado */}
        <Watermark direction="up" duration={600} delay={180} distance={20} className="sm:col-span-2 lg:col-span-2">
          <div className="h-full rounded-[20px] border border-(--accent-project) bg-(--accent-project-soft) p-7 sm:p-8">
            <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
              O MAIOR DESAFIO
            </div>
            <p className="m-0 text-[15.5px] leading-[1.8] text-fg">
              O único card colorido do mosaico guarda a melhor história: o problema mais difícil e
              como você o resolveu.
            </p>
          </div>
        </Watermark>

        {/* Telas extras */}
        {['tela secundária', 'tela mobile'].map((shot, i) => (
          <Watermark key={shot} direction="up" duration={600} delay={220 + i * 60} distance={20}>
            <div className="flex aspect-square items-center justify-center rounded-[20px] border border-line bg-card">
              <span className="font-oswald text-[11px] tracking-[2px] text-muted uppercase">{shot}</span>
            </div>
          </Watermark>
        ))}
      </div>
    </ProjectPageShell>
  )
}
