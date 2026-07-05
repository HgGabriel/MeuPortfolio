import { hobbies, projects } from "../data";
import Watermark from "./Watermark";

interface DetailsPageProps {
  onGoHome: () => void;
}

export default function DetailsPage({ onGoHome }: DetailsPageProps) {
  return (
    <main className="pt-16">
      {/* PERSONAL */}
      <section
        id="personal"
        className="relative overflow-hidden px-6 pt-[54px] pb-14 sm:px-10 lg:pt-[70px] lg:pr-[90px] lg:pb-[60px] lg:pl-[120px]"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <div
            onClick={onGoHome}
            className="mb-10 inline-flex cursor-pointer items-center gap-[9px] font-oswald text-sm tracking-[1px] text-muted transition-colors hover:text-accent"
          >
            ← VOLTAR AO INÍCIO
          </div>
          <div className="mb-3 font-oswald text-[15px] tracking-[2px] text-accent">
            FORA DA TELA
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-center mb-14">
            <div>
              <h1 className="mb-[18px] font-poppins text-[34px] leading-[1.05] font-extrabold tracking-[-1.5px] text-fg sm:text-[46px] lg:text-[58px]">
                Um pouco
                <br />
                mais sobre mim
              </h1>
              <p className="max-w-[560px] text-[17px] leading-[1.8] text-muted">
                Código é uma grande paixão, mas não a única. Três coisas dão
                ritmo aos meus dias fora do teclado:
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <Watermark
                direction="right"
                duration={800}
                delay={150}
                distance={32}
                className="relative z-2 overflow-hidden rounded-4xl sm:h-[10px] lg:w-[410px] lg:h-[350px]"
              >
                <img
                  src="https://professorlotus.com/Sprites/Gliscor.gif"
                  alt="hero"
                  className="block size-full object-cover"
                />
              </Watermark>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {hobbies.map((h) => (
              <div
                key={h.title}
                className="rounded-[20px] border border-line bg-card px-7 py-[34px] transition-all duration-200 hover:-translate-y-1 hover:border-accent"
              >
                <div className="mb-[22px] flex size-[52px] items-center justify-center rounded-[14px] bg-[rgba(229,50,42,0.12)] text-accent">
                  {h.icon}
                </div>
                <div className="mb-2 font-oswald text-xs tracking-[2px] text-accent">
                  {h.tag}
                </div>
                <h3 className="mb-3 font-poppins text-[22px] font-semibold text-fg">
                  {h.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.75] text-muted">
                  {h.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 rounded-[20px] border border-line bg-linear-[120deg,rgba(229,50,42,0.14),rgba(229,50,42,0.03)] px-6 py-8 sm:flex-row sm:items-center sm:gap-7 sm:px-10 sm:py-[34px]">
            <div className="font-poppins text-[42px] leading-none font-extrabold text-accent sm:text-[52px]">
              15K
            </div>
            <div>
              <div className="font-poppins text-[19px] font-semibold text-fg">
                Rumo à minha primeira São Silvestre
              </div>
              <div className="mt-1 text-[15px] text-muted">
                Treinando um quilômetro de cada vez para os 15 km mais famosos
                do Brasil, em 31 de dezembro.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section
        id="proj"
        className="relative overflow-hidden px-6 pt-12 pb-16 sm:px-10 lg:pt-[60px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-3 font-oswald text-[15px] tracking-[2px] text-accent">
            PORTFÓLIO
          </div>
          <h2 className="mb-8 font-poppins text-[34px] font-extrabold tracking-[-1px] text-fg sm:text-[44px] lg:mb-11 lg:text-5xl">
            Detalhes dos projetos
          </h2>
          <div className="flex flex-col gap-[30px]">
            {projects.map((p) => (
              <div
                key={p.name}
                className="grid grid-cols-1 gap-6 rounded-[20px] border border-line bg-card p-5 transition-colors duration-200 hover:border-accent sm:p-7 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-10"
              >
                <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-line bg-[repeating-linear-gradient(135deg,var(--soft)_0,var(--soft)_1px,transparent_1px,transparent_13px)]">
                  <span className="font-oswald text-xs tracking-[2px] text-muted uppercase">
                    {p.shot}
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 font-poppins text-[26px] font-semibold text-fg">
                    {p.name}
                  </h3>
                  <p className="mb-4 text-[15.5px] leading-[1.75] text-muted">
                    {p.long}
                  </p>
                  <div className="mb-[18px] flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-[20px] border border-line px-3 py-[5px] font-oswald text-[12.5px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-[22px] font-oswald text-[13.5px] tracking-[0.8px]">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-[7px] text-accent"
                    >
                      VER DEMO →
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-[7px] text-muted transition-colors hover:text-fg"
                    >
                      CÓDIGO
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            onClick={onGoHome}
            className="mt-11 inline-flex cursor-pointer items-center gap-[9px] font-oswald text-sm tracking-[1px] text-accent"
          >
            ← VOLTAR AO INÍCIO
          </div>
        </div>
      </section>
    </main>
  );
}
