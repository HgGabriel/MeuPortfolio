import { experience } from '../../data'

export default function Experience() {
  return (
    <section
      data-sec="2"
      className="relative flex min-h-screen items-center overflow-hidden pt-[100px] pr-[90px] pb-20 pl-[120px]"
    >
      <div className="absolute top-24 right-[60px] z-0 font-poppins text-[118px] font-extrabold tracking-[-4px] text-wm select-none">
        EXPERIENCE
      </div>
      <div className="relative z-2 mx-auto w-full max-w-[1240px]">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-poppins text-6xl leading-none font-extrabold tracking-[-2px] text-soft">
            02
          </span>
          <h2 className="m-0 font-oswald text-[42px] font-bold text-accent">Experiência</h2>
        </div>
        <div className="flex max-w-[760px] flex-col gap-[34px] border-l-2 border-line pl-[34px]">
          {experience.map((e) => (
            <div key={e.period} className="relative">
              <div className="absolute top-[6px] -left-[42px] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--bg)]" />
              <div className="mb-[5px] font-oswald text-[13px] font-medium tracking-[1px] text-accent">
                {e.period}
              </div>
              <div className="font-poppins text-xl font-semibold text-fg">{e.role}</div>
              <div className="mt-[2px] mb-2 text-[14.5px] font-medium text-muted">{e.org}</div>
              <p className="m-0 text-[15px] leading-[1.7] text-muted">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
