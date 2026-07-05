import { useEffect, useRef, useState } from 'react'
import { placeholderImage } from '../data'

interface TiltPreviewProps {
  /** Slug do projeto — usado como seed estável da imagem de placeholder. */
  slug: string
  /** Texto alternativo (acessibilidade) para a imagem. */
  shot: string
  /** Cor de destaque do projeto — usada no glare e no glow do hover. */
  accent: string
  className?: string
}

/** Inclinação máxima da moldura, em graus (intensidade contida). */
const MAX_TILT = 10
/** Deslocamento da camada de parallax, em px. */
const PARALLAX = 12
/** Easing de retorno ao soltar o mouse (hoverEasing do CodePen original). */
const RETURN_EASING = 'cubic-bezier(0.23, 1, 0.32, 1)'

const cardBaseClass = 'relative aspect-[16/10] overflow-hidden rounded-[14px] border border-line bg-card'
const imageClass = 'pointer-events-none absolute -inset-[6%] size-[112%] object-cover'

/**
 * Moldura do preview de projeto com efeito 3D + parallax seguindo o mouse.
 *
 * Fica aninhada dentro do `Watermark` (que é dono do transform de reveal), então
 * o tilt vive num nó próprio e não briga por `transform`. Em touch/mobile ou com
 * `prefers-reduced-motion`, cai numa moldura estática sem listeners.
 */
export default function TiltPreview({ slug, shot, accent, className = '' }: TiltPreviewProps) {
  const [enabled, setEnabled] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLImageElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    setEnabled(
      window.matchMedia('(pointer: fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
  }, [])

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const imageUrl = placeholderImage(slug)

  if (!enabled) {
    // Fallback estático: mesma imagem, sem tilt/parallax (touch, reduced-motion).
    return (
      <div className={`${cardBaseClass} ${className}`}>
        <img src={imageUrl} alt={shot} className="absolute inset-0 size-full object-cover" />
      </div>
    )
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateY(${px * MAX_TILT}deg) rotateX(${-py * MAX_TILT}deg)`
      }
      if (layerRef.current) {
        layerRef.current.style.transform = `translate(${-px * PARALLAX}px, ${-py * PARALLAX}px)`
      }
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, ${accent}, transparent 60%)`
      }
    })
  }

  const handleMouseEnter = () => {
    // Segue o cursor instantaneamente durante o hover.
    for (const el of [cardRef.current, layerRef.current]) {
      if (el) el.style.transition = 'none'
    }
    if (glareRef.current) {
      glareRef.current.style.transition = 'opacity 0.6s ease'
      glareRef.current.style.opacity = '0.18'
    }
    if (cardRef.current) {
      cardRef.current.style.boxShadow = `0 18px 40px -18px ${accent}, 0 0 0 1px ${accent}33`
    }
  }

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafRef.current)
    const returnTransition = `transform 0.45s ${RETURN_EASING}`
    if (cardRef.current) {
      cardRef.current.style.transition = `${returnTransition}, box-shadow 0.45s ${RETURN_EASING}`
      cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
      cardRef.current.style.boxShadow = 'none'
    }
    if (layerRef.current) {
      layerRef.current.style.transition = returnTransition
      layerRef.current.style.transform = 'translate(0px, 0px)'
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
    >
      <div ref={cardRef} className={cardBaseClass} style={{ willChange: 'transform' }}>
        {/* Camada de parallax: imagem maior que a moldura para não revelar
            bordas ao transladar. */}
        <img ref={layerRef} src={imageUrl} alt={shot} className={imageClass} style={{ willChange: 'transform' }} />
        {/* Glare: brilho radial na cor do projeto, seguindo o cursor. */}
        <div ref={glareRef} aria-hidden className="pointer-events-none absolute inset-0" style={{ opacity: 0 }} />
      </div>
    </div>
  )
}
