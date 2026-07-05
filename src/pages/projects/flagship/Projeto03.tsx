import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-tres')!

/** Assinatura: tipografia oversized e blocos assimétricos alternados. */
export default function Projeto03() {
  return (
    <ProjectPageShell meta={meta}>
      {/* Hero tipográfico */}
      <Watermark direction="up" duration={700} distance={28}>
        <h1 className="mb-6 font-poppins text-[52px] leading-[0.95] font-extrabold tracking-[-3px] text-fg sm:text-[80px] lg:text-[104px]">
          {meta.name.split(' ')[0]}
          <br />
          <span className="text-(--accent-project)">{meta.name.split(' ').slice(1).join(' ') || 'Projeto'}</span>
        </h1>
        <p className="mb-16 max-w-[480px] text-[17px] leading-[1.8] text-muted">{meta.tagline}</p>
      </Watermark>

      {/* Blocos assimétricos */}
      <div className="flex flex-col gap-14">
        <Watermark direction="left" duration={650} distance={28}>
          <div className="max-w-[620px]">
            <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
              O PROBLEMA
            </div>
            <p className="m-0 text-[17px] leading-[1.85] text-fg">
              Um parágrafo forte sobre o problema, escrito para segurar o leitor. Este bloco fica
              alinhado à esquerda; o próximo desliza para a direita.
            </p>
          </div>
        </Watermark>

        <Watermark direction="right" duration={650} distance={28} className="lg:ml-auto lg:w-[70%]">
          <div className="flex aspect-[16/9] items-center justify-center rounded-[14px] border border-line bg-(--accent-project-soft)">
            <span className="font-oswald text-xs tracking-[2px] text-muted uppercase">{meta.shot}</span>
          </div>
        </Watermark>

        <Watermark direction="left" duration={650} distance={28} className="lg:w-[70%]">
          <div className="rounded-[20px] border border-line bg-card p-8 sm:p-10">
            <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
              A SOLUÇÃO
            </div>
            <p className="m-0 text-[16px] leading-[1.85] text-muted">
              Descreva a solução construída. O contraste entre blocos largos e estreitos, esquerda e
              direita, cria o ritmo visual desta página — mantenha os textos curtos.
            </p>
          </div>
        </Watermark>

        <Watermark direction="right" duration={650} distance={28} className="lg:ml-auto lg:w-[62%]">
          <div className="border-l-4 border-(--accent-project) pl-6 sm:pl-8">
            <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-muted">
              DECISÃO TÉCNICA
            </div>
            <p className="m-0 font-poppins text-[20px] leading-[1.6] font-medium text-fg sm:text-[24px]">
              “Uma frase-manifesto sobre a decisão técnica mais importante do projeto.”
            </p>
          </div>
        </Watermark>

        <Watermark direction="up" duration={650} distance={24}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {['Stack', 'Desafio', 'Resultado'].map((t) => (
              <div key={t} className="rounded-[16px] border border-line bg-card p-6">
                <div className="mb-2 font-oswald text-[12px] tracking-[2px] text-(--accent-project) uppercase">
                  {t}
                </div>
                <p className="m-0 text-[14.5px] leading-[1.7] text-muted">
                  Um resumo curto sobre {t.toLowerCase()} — duas ou três linhas no máximo.
                </p>
              </div>
            ))}
          </div>
        </Watermark>
      </div>
    </ProjectPageShell>
  )
}
