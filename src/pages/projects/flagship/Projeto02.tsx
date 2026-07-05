import { featuredProjects, placeholderImage } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-dois')!

/** Assinatura: split-screen — mídia fixa à esquerda, narrativa rolando à direita. */
export default function Projeto02() {
  const chapters = [
    {
      label: 'O PROBLEMA',
      title: 'Comece pela dor',
      body: 'Descreva o problema que motivou o projeto. O painel de telas à esquerda acompanha o leitor enquanto a história avança aqui.',
    },
    {
      label: 'A SOLUÇÃO',
      title: 'O que foi construído',
      body: 'Explique a solução em termos de experiência: fluxos, telas, interações. Aponte qual das telas ao lado corresponde a este capítulo.',
    },
    {
      label: 'POR DENTRO',
      title: 'Arquitetura e stack',
      body: 'Conte como o front conversa com o back, onde os dados vivem e qual decisão técnica você defenderia numa entrevista.',
    },
    {
      label: 'O SALDO',
      title: 'Resultado e aprendizados',
      body: 'Feche com o que este projeto provou: números, feedback de usuários ou a habilidade nova que ele destravou em você.',
    },
  ]

  return (
    <ProjectPageShell meta={meta}>
      <Watermark direction="up" duration={650} distance={24}>
        <h1 className="mb-4 font-poppins text-[38px] leading-[1.05] font-extrabold tracking-[-1.5px] text-fg sm:text-[50px]">
          {meta.name}
        </h1>
        <p className="mb-12 max-w-[560px] text-[17px] leading-[1.8] text-muted">{meta.tagline}</p>
      </Watermark>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Painel de mídia fixo no scroll (desktop) */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col gap-5">
            {['tela principal', 'fluxo em destaque', 'detalhe de interação'].map((shot, i) => (
              <Watermark key={shot} direction="left" duration={650} delay={i * 90} distance={24}>
                <div className="aspect-[16/10] overflow-hidden rounded-[14px] border border-line bg-(--accent-project-soft)">
                  <img
                    src={placeholderImage(`${meta.slug}-${shot}`)}
                    alt={shot}
                    className="size-full object-cover"
                  />
                </div>
              </Watermark>
            ))}
          </div>
        </div>

        {/* Narrativa */}
        <div className="flex flex-col gap-14">
          {chapters.map((c, i) => (
            <Watermark key={c.label} direction="up" duration={600} delay={i * 60} distance={22}>
              <div className="mb-3 font-oswald text-[12.5px] tracking-[2px] text-(--accent-project)">
                {c.label}
              </div>
              <h2 className="mb-4 font-poppins text-[26px] font-semibold tracking-[-0.5px] text-fg">
                {c.title}
              </h2>
              <p className="m-0 text-[16px] leading-[1.85] text-muted">{c.body}</p>
            </Watermark>
          ))}
        </div>
      </div>
    </ProjectPageShell>
  )
}
