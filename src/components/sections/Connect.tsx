export default function Connect() {
  return (
    <section
      data-sec="4"
      className="relative flex min-h-screen items-center overflow-hidden pt-[100px] pr-[90px] pb-[90px] pl-[120px]"
    >
      <div className="absolute top-[120px] right-10 z-0 font-poppins text-[150px] font-extrabold tracking-[-4px] text-wm select-none">
        CONNECT
      </div>
      <div className="relative z-2 mx-auto grid w-full max-w-[1240px] grid-cols-2 items-center gap-[70px]">
        <div>
          <div className="mb-9 flex items-baseline gap-4">
            <span className="font-poppins text-6xl leading-none font-extrabold tracking-[-2px] text-soft">
              04
            </span>
            <h2 className="m-0 font-oswald text-[42px] font-bold text-accent">Conectar</h2>
          </div>
          <h3 className="mb-4 font-poppins text-3xl font-semibold text-fg">Vamos conversar</h3>
          <p className="m-0 max-w-[400px] text-base leading-[1.8] text-muted">
            Tem um projeto interessante, uma oportunidade ou só quer trocar uma ideia? Vou adorar
            receber sua mensagem.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
          <div>
            <label className="mb-[9px] block font-oswald text-sm tracking-[0.5px] text-fg">
              Nome
            </label>
            <input
              placeholder="João da Silva"
              className="w-full rounded-[40px] border border-line bg-card px-[22px] py-[15px] font-poppins text-[15px] text-fg"
            />
          </div>
          <div>
            <label className="mb-[9px] block font-oswald text-sm tracking-[0.5px] text-fg">
              Email
            </label>
            <input
              placeholder="joao@exemplo.com"
              className="w-full rounded-[40px] border border-line bg-card px-[22px] py-[15px] font-poppins text-[15px] text-fg"
            />
          </div>
          <div>
            <label className="mb-[9px] block font-oswald text-sm tracking-[0.5px] text-fg">
              Mensagem
            </label>
            <textarea
              placeholder="Olá! Vamos nos conectar."
              rows={4}
              className="w-full resize-y rounded-[22px] border border-line bg-card px-[22px] py-[15px] font-poppins text-[15px] text-fg"
            />
          </div>
          <button className="cursor-pointer rounded-[40px] border-none bg-accent p-4 font-oswald text-sm font-semibold tracking-[1px] text-white transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_12px_26px_rgba(229,50,42,0.35)]">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  )
}
