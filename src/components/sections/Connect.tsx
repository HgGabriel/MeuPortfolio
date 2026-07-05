import Watermark from '../Watermark'

export default function Connect() {
  return (
    <section
      data-sec="4"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:pt-[100px] lg:pr-[90px] lg:pb-[90px] lg:pl-[120px]"
    >
      <div className="relative z-2 mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-[70px]">
        <Watermark direction="left" duration={700} distance={28}>
          <div className="relative mb-6 lg:mb-9">
            <Watermark className="pointer-events-none absolute top-1/2 right-0 z-0 -translate-y-1/2 font-poppins text-[64px] font-extrabold tracking-[-4px] text-wm select-none sm:text-[100px] lg:text-[80px]">
              CONNECT
            </Watermark>
            <div className="relative z-2 flex items-baseline gap-4">
              <span className="font-poppins text-4xl leading-none font-extrabold tracking-[-2px] text-soft sm:text-5xl lg:text-6xl">
                04
              </span>
              <h2 className="m-0 font-oswald text-[30px] font-bold text-accent sm:text-[36px] lg:text-[42px]">Conectar</h2>
            </div>
          </div>
          <h3 className="mb-4 font-poppins text-2xl font-semibold text-fg sm:text-3xl">Vamos conversar</h3>
          <p className="m-0 max-w-[400px] text-base leading-[1.8] text-muted">
            Tem um projeto interessante, uma oportunidade ou só quer trocar uma ideia? Vou adorar
            receber sua mensagem.
          </p>
        </Watermark>
        <Watermark direction="right" duration={700} delay={100} distance={28}>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <Watermark direction="up" duration={500} delay={220} distance={16}>
              <label className="mb-[9px] block font-oswald text-sm tracking-[0.5px] text-fg">
                Nome
              </label>
              <input
                placeholder="João da Silva"
                className="w-full rounded-[40px] border border-line bg-card px-[22px] py-[15px] font-poppins text-base text-fg"
              />
            </Watermark>
            <Watermark direction="up" duration={500} delay={280} distance={16}>
              <label className="mb-[9px] block font-oswald text-sm tracking-[0.5px] text-fg">
                Email
              </label>
              <input
                placeholder="joao@exemplo.com"
                className="w-full rounded-[40px] border border-line bg-card px-[22px] py-[15px] font-poppins text-base text-fg"
              />
            </Watermark>
            <Watermark direction="up" duration={500} delay={340} distance={16}>
              <label className="mb-[9px] block font-oswald text-sm tracking-[0.5px] text-fg">
                Mensagem
              </label>
              <textarea
                placeholder="Olá! Vamos nos conectar."
                rows={4}
                className="w-full resize-y rounded-[22px] border border-line bg-card px-[22px] py-[15px] font-poppins text-base text-fg"
              />
            </Watermark>
            <Watermark direction="up" duration={500} delay={400} distance={16}>
              <button className="w-full cursor-pointer rounded-[40px] border-none bg-accent p-4 font-oswald text-sm font-semibold tracking-[1px] text-white transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_12px_26px_rgba(229,50,42,0.35)]">
                ENVIAR MENSAGEM
              </button>
            </Watermark>
          </form>
        </Watermark>
      </div>
    </section>
  )
}
