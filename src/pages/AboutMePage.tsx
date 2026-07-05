import { Link } from 'react-router-dom'
import { education, hobbies } from '../data'
import Watermark from '../components/Watermark'

export default function AboutMePage() {
  return (
    <main className="pt-16">
      {/* FORA DA TELA */}
      <section
        id="personal"
        className="relative overflow-hidden px-6 pt-[54px] pb-14 sm:px-10 lg:pt-[70px] lg:pr-[90px] lg:pb-[60px] lg:pl-[120px]"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-[9px] font-oswald text-sm tracking-[1px] text-muted transition-colors hover:text-accent"
          >
            ← VOLTAR AO INÍCIO
          </Link>
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

      {/* FORMAÇÃO ACADÊMICA */}
      <section
        id="formacao"
        className="relative overflow-hidden px-6 pt-12 pb-14 sm:px-10 lg:pt-[60px] lg:pr-[90px] lg:pb-[70px] lg:pl-[120px]"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-3 font-oswald text-[15px] tracking-[2px] text-accent">
            FORMAÇÃO
          </div>
          <h2 className="mb-8 font-poppins text-[34px] font-extrabold tracking-[-1px] text-fg sm:text-[44px] lg:mb-11 lg:text-5xl">
            Formação acadêmica
          </h2>
          <div className="flex max-w-[760px] flex-col gap-[34px] border-l-2 border-line pl-[34px]">
            {education.map((e, i) => (
              <Watermark
                key={`${e.period}-${e.degree}`}
                direction="left"
                duration={650}
                delay={i * 90}
                distance={24}
                className="relative"
              >
                <div className="absolute top-[6px] -left-[42px] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--bg)]" />
                <div className="mb-[5px] font-oswald text-[13px] font-medium tracking-[1px] text-accent">
                  {e.period}
                </div>
                <div className="font-poppins text-xl font-semibold text-fg">{e.degree}</div>
                <div className="mt-[2px] mb-2 text-[14.5px] font-medium text-muted">
                  {e.institution}
                </div>
                <p className="m-0 text-[15px] leading-[1.7] text-muted">{e.desc}</p>
                {e.highlights && (
                  <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-[10px] text-[14.5px] leading-[1.6] text-muted">
                        <span className="mt-[9px] h-[2px] w-[14px] shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </Watermark>
            ))}
          </div>
        </div>
      </section>

      {/* COMO EU TRABALHO */}
      <section
        id="valores"
        className="relative overflow-hidden px-6 pt-8 pb-16 sm:px-10 lg:pt-6 lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-3 font-oswald text-[15px] tracking-[2px] text-accent">
            JEITO DE TRABALHAR
          </div>
          <h2 className="mb-8 font-poppins text-[34px] font-extrabold tracking-[-1px] text-fg sm:text-[44px] lg:mb-11 lg:text-5xl">
            O que me guia
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {[
              {
                tag: 'PRINCÍPIO 01',
                title: 'Placeholder de valor',
                body: 'Descreva aqui um princípio seu: como você encara código, aprendizado ou trabalho em equipe.',
              },
              {
                tag: 'PRINCÍPIO 02',
                title: 'Placeholder de valor',
                body: 'Descreva aqui um segundo princípio: consistência, curiosidade, atenção ao detalhe — o que fizer sentido.',
              },
              {
                tag: 'PRINCÍPIO 03',
                title: 'Placeholder de valor',
                body: 'Descreva aqui um terceiro princípio, fechando o retrato de como é trabalhar com você.',
              },
            ].map((v) => (
              <div
                key={v.tag}
                className="rounded-[20px] border border-line bg-card px-7 py-[34px] transition-all duration-200 hover:-translate-y-1 hover:border-accent"
              >
                <div className="mb-2 font-oswald text-xs tracking-[2px] text-accent">{v.tag}</div>
                <h3 className="mb-3 font-poppins text-[22px] font-semibold text-fg">{v.title}</h3>
                <p className="m-0 text-[15px] leading-[1.75] text-muted">{v.body}</p>
              </div>
            ))}
          </div>
          <Link
            to="/"
            className="mt-11 inline-flex items-center gap-[9px] font-oswald text-sm tracking-[1px] text-accent"
          >
            ← VOLTAR AO INÍCIO
          </Link>
        </div>
      </section>
    </main>
  )
}
