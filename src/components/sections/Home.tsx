import { MapPin } from 'lucide-react'

interface HomeProps {
  onGoConnect: () => void
}

export default function Home({ onGoConnect }: HomeProps) {
  return (
    <section
      data-sec="0"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pr-[90px] pb-[60px] pl-[120px]"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1.05fr_.95fr] items-center gap-10">
        <div className="relative z-2">
          <div className="mb-4 flex items-center gap-2 font-oswald text-[15px] tracking-[0.5px] text-muted">
            <MapPin size={16} strokeWidth={1.7} />
            São Paulo, Brasil
          </div>
          <h1 className="m-0 font-poppins text-[66px] leading-none font-extrabold tracking-[-1.5px] text-accent">
            Hiago
            <br />
            Gabriel
          </h1>
          <h2 className="mt-[14px] mb-0 font-oswald text-[27px] font-semibold tracking-[0.5px] text-fg">
            Desenvolvedor Full-Stack
          </h2>
          <div className="mt-[18px] mb-[26px] h-1 w-14 rounded-[2px] bg-accent" />
          <p className="mb-[30px] max-w-[460px] text-[15.5px] leading-[1.75] text-muted">
            Sou um desenvolvedor full-stack que gosta de aprender e transformar ideias em produtos
            digitais bem construídos. Busco criar soluções que ofereçam experiências online
            excelentes — explore meu portfólio e conheça meu trabalho.
          </p>
          <div className="flex gap-[14px]">
            <button
              onClick={onGoConnect}
              className="cursor-pointer rounded-[40px] border-none bg-accent px-[34px] py-[15px] font-oswald text-sm font-semibold tracking-[1px] text-white transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_12px_26px_rgba(229,50,42,0.35)]"
            >
              CONTATO
            </button>
            <button className="cursor-pointer rounded-[40px] border-[1.5px] border-accent bg-transparent px-[34px] py-[15px] font-oswald text-sm font-semibold tracking-[1px] text-accent transition-colors duration-[180ms] hover:bg-accent hover:text-white">
              CURRÍCULO
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute z-0 text-center font-poppins text-[150px] leading-[0.8] font-extrabold tracking-[-4px] text-wm select-none">
            GA
            <br />
            BRIEL
          </div>
          <div className="relative z-2 size-[380px] animate-glow overflow-hidden rounded-3xl border border-line">
            <img src="/hero.gif" alt="hero" className="block size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
