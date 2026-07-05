import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-cinco')!

/** Assinatura: linha do tempo vertical do processo, da descoberta ao deploy. */
export default function Projeto05() {
  const steps = [
    {
      phase: 'DESCOBERTA',
      title: 'Entendendo o problema',
      body: 'Como o projeto começou: a conversa, a dor ou a ideia que deu origem a tudo. O que você pesquisou antes de escrever a primeira linha de código.',
    },
    {
      phase: 'PROTÓTIPO',
      title: 'Primeira versão no ar',
      body: 'O caminho até o primeiro protótipo navegável: o que ficou de fora de propósito e o que o protótipo provou (ou derrubou).',
    },
    {
      phase: 'CONSTRUÇÃO',
      title: 'Do protótipo ao produto',
      body: 'As semanas de build: stack escolhida, arquitetura, os refactors que doeram e as decisões que salvaram tempo depois.',
    },
    {
      phase: 'LANÇAMENTO',
      title: 'Deploy e vida real',
      body: 'O que aconteceu quando usuários reais chegaram: métricas, feedbacks, hotfixes — e o que entrou no roadmap por causa disso.',
    },
  ]

  return (
    <ProjectPageShell meta={meta}>
      <Watermark direction="up" duration={650} distance={24}>
        <h1 className="mb-4 font-poppins text-[38px] leading-[1.05] font-extrabold tracking-[-1.5px] text-fg sm:text-[50px]">
          {meta.name}
        </h1>
        <p className="mb-6 max-w-[560px] text-[17px] leading-[1.8] text-muted">{meta.tagline}</p>
        <div className="mb-14 font-oswald text-[13px] tracking-[2px] text-(--accent-project)">
          A HISTÓRIA, DO ZERO AO DEPLOY
        </div>
      </Watermark>

      <div className="flex max-w-[820px] flex-col gap-2 border-l-2 border-line">
        {steps.map((s, i) => (
          <Watermark key={s.phase} direction="left" duration={650} delay={i * 90} distance={24} className="relative pb-12 pl-8 sm:pl-10">
            <div className="absolute top-[4px] -left-[9px] flex size-4 items-center justify-center rounded-full border-2 border-(--accent-project) bg-bg" />
            <div className="mb-2 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
              {s.phase}
            </div>
            <h2 className="mb-3 font-poppins text-[24px] font-semibold tracking-[-0.5px] text-fg">
              {s.title}
            </h2>
            <p className="m-0 mb-5 max-w-[600px] text-[15.5px] leading-[1.8] text-muted">{s.body}</p>
            <div className="flex aspect-[16/7] max-w-[600px] items-center justify-center rounded-[12px] border border-line bg-(--accent-project-soft)">
              <span className="font-oswald text-[11px] tracking-[2px] text-muted uppercase">
                registro desta fase
              </span>
            </div>
          </Watermark>
        ))}
      </div>
    </ProjectPageShell>
  )
}
