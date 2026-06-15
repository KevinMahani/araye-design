import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number          // ms delay before transition starts
  distance?: number       // px to travel (default 28)
  className?: string
  style?: React.CSSProperties
  tag?: keyof JSX.IntrinsicElements
}

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 28,
  className = '',
  style = {},
  tag: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)
  // Cast to ElementType to avoid "union too complex" TS error on dynamic tags
  const El = Tag as React.ElementType

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial transform before observer fires
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <El
      ref={ref}
      className={`sr ${className}`}
      style={{ '--sr-distance': `${distance}px`, ...style } as React.CSSProperties}
    >
      {children}
    </El>
  )
}
