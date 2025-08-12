import React from 'react'

type RevealOnScrollProps = {
  children: React.ReactNode
  animation?: 'up' | 'down' | 'fade'
  delayMs?: number
  className?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export default function RevealOnScroll({
  children,
  animation = 'up',
  delayMs = 0,
  className,
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: RevealOnScrollProps): JSX.Element {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  // Inline transition-based entrance to avoid relying on global CSS utilities
  const initialTransform = animation === 'up' ? 'translateY(16px) scale(0.98)'
    : animation === 'down' ? 'translateY(-10px) scale(0.98)'
    : 'none'

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'none',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: animation === 'fade' ? 'ease-out' : 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDuration: animation === 'fade' ? '600ms' : '750ms',
    transitionDelay: isVisible && delayMs ? `${delayMs}ms` : undefined,
    willChange: 'opacity, transform',
  }

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform: initialTransform,
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: animation === 'fade' ? 'ease-out' : 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDuration: animation === 'fade' ? '600ms' : '750ms',
    transitionDelay: undefined,
    willChange: 'opacity, transform',
  }

  return (
    <div ref={containerRef} className={className} style={isVisible ? visibleStyle : hiddenStyle}>
      {children}
    </div>
  )
}