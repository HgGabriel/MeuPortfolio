import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-quatro')!

/** Assinatura: estética de terminal — monoespaçada, comentários de código como títulos. */
export default function Projeto04() {
  const blocks = [
    {
      comment: '// problema',
      cmd: '$ cat contexto.md',
      body: 'Descreva o problema como se fosse a saída de um comando: direto, sem enfeite. Este projeto é o mais "de máquina" dos oito — a página inteira ecoa o CodeTerminal da home.',
    },
    {
      comment: '// solução',
      cmd: '$ npm run build:solucao',
      body: 'O que foi construído, em tom técnico. Liste endpoints, jobs, filas — o que fizer sentido para este projeto de back-end.',
    },
    {
      comment: '// desafios',
      cmd: '$ git log --oneline desafios/',
      body: 'Os bugs difíceis, as decisões de infraestrutura, o que quebrou às 2h da manhã. Histórias reais valem mais que uma lista de tecnologias.',
    },
  ]

  return (
    <ProjectPageShell meta={meta}>
      <Watermark direction="up" duration={650} distance={24}>
        <div className="mb-2 font-mono text-[13px] text-(--accent-project)">~/projetos/{meta.slug}</div>
        <h1 className="mb-4 font-mono text-[34px] leading-[1.1] font-bold tracking-[-1px] text-fg sm:text-[46px]">
          {meta.name.toLowerCase().replace(/\s+/g, '-')}
          <span className="animate-pulse text-(--accent-project)">_</span>
        </h1>
        <p className="mb-12 max-w-[560px] font-mono text-[14.5px] leading-[1.8] text-muted">
          <span className="text-(--accent-project)"># </span>
          {meta.tagline}
        </p>
      </Watermark>

      <div className="flex flex-col gap-8">
        {blocks.map((b, i) => (
          <Watermark key={b.comment} direction="up" duration={600} delay={i * 70} distance={20}>
            <div className="overflow-hidden rounded-[12px] border border-line bg-card">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                <span className="size-[10px] rounded-full bg-(--accent-project-soft)" />
                <span className="size-[10px] rounded-full bg-(--accent-project-soft)" />
                <span className="size-[10px] rounded-full bg-(--accent-project)" />
                <span className="ml-3 font-mono text-[12.5px] text-muted">{b.comment}</span>
              </div>
              <div className="px-5 py-6 sm:px-7">
                <div className="mb-3 font-mono text-[13.5px] text-(--accent-project)">{b.cmd}</div>
                <p className="m-0 max-w-[680px] font-mono text-[14px] leading-[1.9] text-muted">
                  {b.body}
                </p>
              </div>
            </div>
          </Watermark>
        ))}
      </div>

      <Watermark direction="up" duration={600} delay={100} distance={20}>
        <div className="mt-10 rounded-[12px] border border-line bg-(--accent-project-soft) px-5 py-6 sm:px-7">
          <div className="mb-2 font-mono text-[13px] font-semibold text-(--accent-project)">
            $ echo $RESULTADO
          </div>
          <p className="m-0 font-mono text-[14px] leading-[1.8] text-fg">
            Feche com o resultado em uma linha memorável — a saída final do programa.
          </p>
        </div>
      </Watermark>
    </ProjectPageShell>
  )
}
