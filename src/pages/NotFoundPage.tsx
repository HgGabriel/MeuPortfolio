import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-16">
      <div className="relative text-center">
        <div
          aria-hidden
          className="pointer-events-none select-none font-poppins text-[140px] leading-none font-extrabold tracking-[-8px] text-wm sm:text-[220px] lg:text-[280px]"
        >
          404
        </div>
        <div className="relative -mt-8 sm:-mt-12">
          <h1 className="mb-3 font-poppins text-[26px] font-bold text-fg sm:text-[32px]">
            Página não encontrada
          </h1>
          <p className="mx-auto mb-8 max-w-[380px] text-[15.5px] leading-[1.7] text-muted">
            O endereço que você acessou não existe — talvez o projeto tenha mudado de lugar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 font-oswald text-sm tracking-[1px]">
            <Link to="/" className="inline-flex items-center gap-[9px] text-accent">
              ← VOLTAR AO INÍCIO
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-[9px] text-muted transition-colors hover:text-accent"
            >
              VER PROJETOS
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
