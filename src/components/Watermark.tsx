import { useEffect, useRef, useState } from 'react'

interface WatermarkProps {
  className?: string
  children: React.ReactNode
  direction?: 'right' | 'left' | 'up' | 'down' | 'fade'
  /** ms to hold before the transition starts once visible, for staggered sequences */
  delay?: number
  /** ms transition length */
  duration?: number
  /** px offset the element travels in from */
  distance?: number
}

export default function Watermark({
  className = '',
  children,
  direction = 'right',
  delay = 0,
  duration = 1200,
  distance = 48,
}: WatermarkProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const offset = () => {
    switch (direction) {
      case 'left':
        return `translateX(-${distance}px)`
      case 'up':
        return `translateY(${distance}px)`
      case 'down':
        return `translateY(-${distance}px)`
      case 'fade':
        return 'translateY(0)'
      case 'right':
      default:
        return `translateX(${distance}px)`
    }
  }

  return (
    <div
      ref={ref}
      className={`watermark-transition ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : offset(),
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
