import { Link } from 'react-router-dom'
import StackIcon from 'tech-stack-icons'
import { skills } from '../../data'
import { STACK_ICON_NAMES } from '../../lib/stackIcons'
import { useIsLightTheme } from '../../lib/useIsLightTheme'
import Watermark from '../Watermark'

export default function About() {
  const isLight = useIsLightTheme()

  return (
    <section
      data-sec="1"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[100px] lg:pr-[90px] lg:pb-20 lg:pl-[120px]"
    >
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <div className="relative mb-9 lg:mb-[46px]">
          <Watermark className="pointer-events-none absolute top-1/2 right-0 z-0 -translate-y-1/2 font-poppins text-[64px] font-extrabold tracking-[-4px] text-wm select-none sm:text-[110px] lg:text-[150px]">
            ABOUT
          </Watermark>
          <Watermark direction="up" duration={600} distance={20} className="relative z-2 flex items-baseline gap-4">
            <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
              01
            </span>
            <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Sobre</h2>
          </Watermark>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-[60px]">
          <Watermark direction="left" duration={700} delay={100} distance={28}>
            <p className="mb-5 text-[17px] leading-[1.8] text-fg">
              Comecei a programar movido pela curiosidade de entender como as coisas funcionam por
              trás da tela — e nunca mais parei. Hoje trabalho ponta a ponta, do banco de dados à
              interface, cuidando para que cada detalhe faça sentido para quem usa.
            </p>
            <p className="m-0 text-base leading-[1.8] text-muted">
              Valorizo código limpo, design consistente e produtos que resolvem problemas reais.
              Fora do trabalho, você me encontra ouvindo hip hop, mestrando uma mesa de RPG ou
              treinando para a próxima corrida.
            </p>
            <Link
              to="/sobre"
              className="mt-7 inline-flex items-center gap-[10px] font-oswald text-sm font-semibold tracking-[1px] text-accent"
            >
              <span className="h-[2px] w-[26px] bg-accent" />
              MAIS SOBRE MIM →
            </Link>
          </Watermark>
          <Watermark direction="right" duration={700} delay={100} distance={28}>
            <div className="mb-4 font-oswald text-sm font-medium tracking-[1px] text-muted">
              STACK & FERRAMENTAS
            </div>
            <div className="grid grid-cols-3 gap-2">
              {skills.map((s, i) => {
                const icon = STACK_ICON_NAMES[s]
                return (
                  <Watermark key={s} direction="up" duration={450} delay={200 + i * 45} distance={14}>
                    <div className="flex flex-col items-center justify-center gap-[6px] rounded-[14px] border border-line bg-card px-2 py-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent">
                      {icon && (
                        <StackIcon
                          name={icon}
                          variant={isLight ? 'light' : 'dark'}
                          className="size-[22px] shrink-0"
                        />
                      )}
                      <span className="font-oswald text-[11px] tracking-[0.4px] text-fg">{s}</span>
                    </div>
                  </Watermark>
                )
              })}
            </div>
          </Watermark>
        </div>
      </div>
    </section>
  )
}
