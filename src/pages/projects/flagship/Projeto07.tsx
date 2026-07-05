import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-sete')!

/** Assinatura: galeria horizontal de telas + números grandes de resultado. */
export default function Projeto07() {
  const shots = ['tela 01 — home', 'tela 02 — checkout', 'tela 03 — dashboard', 'tela 04 — mobile']
  const metrics = [
    { big: '000', label: 'usuários no primeiro mês' },
    { big: '00%', label: 'de conversão a mais' },
    { big: '0.0s', label: 'de tempo de carregamento' },
  ]

  return (
    <ProjectPageShell meta={meta}>
      <Watermark direction="up" duration={650} distance={24}>
        <h1 className="mb-4 font-poppins text-[38px] leading-[1.05] font-extrabold tracking-[-1.5px] text-fg sm:text-[50px]">
          {meta.name}
        </h1>
        <p className="mb-10 max-w-[560px] text-[17px] leading-[1.8] text-muted">{meta.tagline}</p>
      </Watermark>

      {/* Galeria horizontal */}
      <Watermark direction="up" duration={650} delay={100} distance={24}>
        <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
          O PRODUTO EM TELAS
        </div>
        <div className="terminal-scroll -mx-6 mb-14 flex gap-5 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10">
          {shots.map((s) => (
            <div
              key={s}
              className="flex aspect-[16/10] w-[280px] shrink-0 items-center justify-center rounded-[14px] border border-line bg-(--accent-project-soft) sm:w-[380px]"
            >
              <span className="font-oswald text-[11px] tracking-[2px] text-muted uppercase">{s}</span>
            </div>
          ))}
        </div>
      </Watermark>

      {/* Narrativa curta */}
      <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Watermark direction="left" duration={650} distance={24}>
          <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
            O PROBLEMA
          </div>
          <p className="m-0 text-[16px] leading-[1.85] text-muted">
            Um parágrafo sobre a dor que existia antes. Este layout é para projetos com cara de
            produto: as telas falam primeiro, o texto sustenta.
          </p>
        </Watermark>
        <Watermark direction="right" duration={650} distance={24}>
          <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
            A SOLUÇÃO
          </div>
          <p className="m-0 text-[16px] leading-[1.85] text-muted">
            Um parágrafo sobre o que foi construído e as decisões técnicas por trás — pagamento,
            infraestrutura, o que fizer o projeto brilhar.
          </p>
        </Watermark>
      </div>

      {/* Números grandes */}
      <Watermark direction="up" duration={650} delay={80} distance={24}>
        <div className="grid grid-cols-1 gap-6 rounded-[20px] border border-line bg-card px-8 py-10 sm:grid-cols-3 sm:gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-poppins text-[52px] leading-none font-extrabold tracking-[-2px] text-(--accent-project)">
                {m.big}
              </div>
              <div className="mt-3 font-oswald text-[12.5px] tracking-[1.5px] text-muted uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Watermark>
    </ProjectPageShell>
  )
}
