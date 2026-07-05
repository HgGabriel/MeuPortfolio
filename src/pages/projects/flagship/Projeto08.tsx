import { featuredProjects } from '../../../data'
import ProjectPageShell from '../ProjectPageShell'
import Watermark from '../../../components/Watermark'

const meta = featuredProjects.find((p) => p.slug === 'projeto-oito')!

/** Assinatura: estudo de caso long-form — coluna estreita, ritmo de leitura, pull quote. */
export default function Projeto08() {
  return (
    <ProjectPageShell meta={meta}>
      <div className="mx-auto max-w-[680px]">
        <Watermark direction="up" duration={650} distance={24}>
          <div className="mb-4 font-oswald text-[13px] tracking-[2px] text-(--accent-project)">
            ESTUDO DE CASO
          </div>
          <h1 className="mb-6 font-poppins text-[36px] leading-[1.1] font-extrabold tracking-[-1.5px] text-fg sm:text-[46px]">
            {meta.name}
          </h1>
          <p className="mb-12 text-[19px] leading-[1.75] text-muted">{meta.tagline}</p>
        </Watermark>

        <Watermark direction="up" duration={650} delay={100} distance={22}>
          <div className="mb-12 flex aspect-[16/9] items-center justify-center rounded-[14px] border border-line bg-(--accent-project-soft)">
            <span className="font-oswald text-xs tracking-[2px] text-muted uppercase">{meta.shot}</span>
          </div>
        </Watermark>

        <Watermark direction="up" duration={600} distance={20}>
          <h2 className="mb-4 font-poppins text-[24px] font-semibold tracking-[-0.5px] text-fg">
            Onde tudo começou
          </h2>
          <p className="mb-10 text-[16.5px] leading-[1.9] text-muted">
            Este formato é para o projeto com a melhor história. Escreva como um artigo: contexto,
            personagens, o problema aparecendo aos poucos. Parágrafos curtos, uma ideia por vez.
          </p>
        </Watermark>

        <Watermark direction="up" duration={600} distance={20}>
          <blockquote className="mb-10 border-l-4 border-(--accent-project) py-1 pl-6 sm:pl-8">
            <p className="m-0 font-poppins text-[22px] leading-[1.55] font-medium text-fg sm:text-[25px]">
              “Uma frase que resume a virada do projeto — o momento em que tudo fez sentido.”
            </p>
          </blockquote>
        </Watermark>

        <Watermark direction="up" duration={600} distance={20}>
          <h2 className="mb-4 font-poppins text-[24px] font-semibold tracking-[-0.5px] text-fg">
            A construção
          </h2>
          <p className="mb-6 text-[16.5px] leading-[1.9] text-muted">
            Aqui entra o miolo técnico, ainda em tom de narrativa: as escolhas, os becos sem saída,
            o refactor que valeu a pena. Intercale com a imagem abaixo para dar respiro.
          </p>
          <div className="mb-10 flex aspect-[16/8] items-center justify-center rounded-[14px] border border-line bg-card">
            <span className="font-oswald text-[11px] tracking-[2px] text-muted uppercase">
              diagrama ou tela do processo
            </span>
          </div>
        </Watermark>

        <Watermark direction="up" duration={600} distance={20}>
          <h2 className="mb-4 font-poppins text-[24px] font-semibold tracking-[-0.5px] text-fg">
            O que ficou
          </h2>
          <p className="mb-0 text-[16.5px] leading-[1.9] text-muted">
            O desfecho: o que o projeto entregou, o que você levaria dele para qualquer trabalho
            futuro, e por que ele fecha a lista dos oito.
          </p>
        </Watermark>
      </div>
    </ProjectPageShell>
  )
}
