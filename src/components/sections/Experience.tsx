import { experience, experienceSnapshot, placeholderImage } from '../../data'
import Watermark from '../Watermark'

export default function Experience() {
  return (
    <section
      data-sec="2"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[100px] lg:pr-[90px] lg:pb-20 lg:pl-[120px]"
    >
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <div className="relative mb-9 lg:mb-12">
          <Watermark className="pointer-events-none absolute top-1/2 right-0 z-0 -translate-y-1/2 font-poppins text-[46px] font-extrabold tracking-[-4px] text-wm select-none sm:text-[84px] lg:text-[118px]">
            EXPERIENCE
          </Watermark>
          <Watermark direction="up" duration={600} distance={20} className="relative z-2 flex items-baseline gap-4">
            <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
              02
            </span>
            <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Experiência</h2>
          </Watermark>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
          {/* Timeline */}
          <div className="flex flex-col gap-[42px] border-l-2 border-line pl-[34px]">
            {experience.map((e, i) => (
              <Watermark key={`${e.org}-${i}`} direction="left" duration={650} delay={i * 90} distance={24} className="relative">
                <div className="absolute top-[6px] -left-[42px] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--bg)]" />

                <div className="flex items-start gap-4">
                  {/* Logo da empresa (ou monograma como fallback) */}
                  <div className="size-12 shrink-0 overflow-hidden rounded-[10px] border border-line bg-card">
                    <img
                      src={e.logo || placeholderImage(`${e.org}-${e.period}`, 96, 96)}
                      alt={`Logo ${e.org}`}
                      className="size-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="mb-[5px] font-oswald text-[13px] font-medium tracking-[1px] text-accent">
                      {e.period}
                    </div>
                    <div className="font-poppins text-xl font-semibold text-fg">{e.role}</div>
                    <div className="mt-[2px] text-[14.5px] font-medium text-muted">{e.org}</div>
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-[14px] flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[20px] border border-line px-3 py-[5px] font-oswald text-[12.5px] tracking-[0.3px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Atividades principais */}
                <ul className="mt-[14px] flex flex-col gap-[9px]">
                  {e.activities.map((a, ai) => (
                    <li key={ai} className="flex gap-[10px] text-[15px] leading-[1.6] text-muted">
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Watermark>
            ))}
          </div>

          {/* Cartão-resumo fixo */}
          <Watermark
            direction="right"
            duration={700}
            delay={120}
            distance={28}
            className="lg:sticky lg:top-[120px]"
          >
            <div className="rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-sm">
              <div className="mb-5 font-oswald text-sm font-medium tracking-[1.5px] text-muted">
                EM RESUMO
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                {experienceSnapshot.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-poppins text-[32px] leading-none font-extrabold tracking-[-1px] text-fg">
                      {s.value}
                    </div>
                    <div className="mt-[6px] text-[13px] leading-tight text-muted">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-6 flex items-center gap-[10px] rounded-xl border border-line bg-soft px-4 py-3">
                <span className="relative flex size-2.5 shrink-0">
                  {experienceSnapshot.available && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                  )}
                  <span className={`relative inline-flex size-2.5 rounded-full ${experienceSnapshot.available ? 'bg-accent' : 'bg-muted'}`} />
                </span>
                <span className="font-oswald text-[13px] font-medium tracking-[0.5px] text-fg">
                  {experienceSnapshot.availability}
                </span>
              </div>

              <div className="mb-3 font-oswald text-[12px] font-medium tracking-[1.5px] text-muted">
                STACK PRINCIPAL
              </div>
              <div className="mb-6 flex flex-wrap gap-2">
                {experienceSnapshot.coreStack.map((s) => (
                  <span
                    key={s}
                    className="rounded-[20px] border border-line bg-card px-3 py-[5px] font-oswald text-[12.5px] tracking-[0.3px] text-fg"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
                href={experienceSnapshot.cvHref}
                className="inline-flex w-full items-center justify-center gap-[10px] rounded-[30px] border border-line px-6 py-[13px] font-oswald text-[13.5px] font-semibold tracking-[1px] text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                BAIXAR CV →
              </a>
            </div>
          </Watermark>
        </div>
      </div>
    </section>
  )
}
