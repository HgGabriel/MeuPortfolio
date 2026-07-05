import { skills } from '../../data'

interface AboutProps {
  onGoPersonal: () => void
}

export default function About({ onGoPersonal }: AboutProps) {
  return (
    <section
      data-sec="1"
      className="relative flex min-h-screen items-center overflow-hidden pt-[100px] pr-[90px] pb-20 pl-[120px]"
    >
      <div className="absolute top-24 right-[60px] z-0 font-poppins text-[150px] font-extrabold tracking-[-4px] text-wm select-none">
        ABOUT
      </div>
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <div className="mb-[46px] flex items-baseline gap-4">
          <span className="font-poppins text-6xl leading-none font-extrabold tracking-[-2px] text-soft">
            01
          </span>
          <h2 className="m-0 font-oswald text-[42px] font-bold text-accent">Sobre</h2>
        </div>
        <div className="grid grid-cols-[1.15fr_1fr] items-start gap-[60px]">
          <div>
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
            <div
              onClick={onGoPersonal}
              className="mt-7 inline-flex cursor-pointer items-center gap-[10px] font-oswald text-sm font-semibold tracking-[1px] text-accent"
            >
              <span className="h-[2px] w-[26px] bg-accent" />
              MAIS SOBRE MIM →
            </div>
          </div>
          <div>
            <div className="mb-4 font-oswald text-sm font-medium tracking-[1px] text-muted">
              STACK &amp; FERRAMENTAS
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-[30px] border border-line bg-card px-4 py-[9px] font-oswald text-sm tracking-[0.4px] text-fg"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
