import { experience } from '../../data'
import Watermark from '../Watermark'

export default function Experience() {
  return (
    <section
      data-sec="2"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[100px] lg:pr-[90px] lg:pb-20 lg:pl-[120px]"
    >
      <Watermark className="absolute top-20 right-4 z-0 font-poppins text-[46px] font-extrabold tracking-[-4px] text-wm select-none sm:right-[40px] sm:text-[84px] lg:top-24 lg:right-[60px] lg:text-[118px]">
        EXPERIENCE
      </Watermark>
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <Watermark direction="up" duration={600} distance={20} className="mb-9 flex items-baseline gap-4 lg:mb-12">
          <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
            02
          </span>
          <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Experiência</h2>
        </Watermark>
        <div className="flex max-w-[760px] flex-col gap-[34px] border-l-2 border-line pl-[34px]">
          {experience.map((e, i) => (
            <Watermark key={e.period} direction="left" duration={650} delay={i * 90} distance={24} className="relative">
              <div className="absolute top-[6px] -left-[42px] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--bg)]" />
              <div className="mb-[5px] font-oswald text-[13px] font-medium tracking-[1px] text-accent">
                {e.period}
              </div>
              <div className="font-poppins text-xl font-semibold text-fg">{e.role}</div>
              <div className="mt-[2px] mb-2 text-[14.5px] font-medium text-muted">{e.org}</div>
              <p className="m-0 text-[15px] leading-[1.7] text-muted">{e.desc}</p>
            </Watermark>
          ))}
        </div>
      </div>
    </section>
  )
}
