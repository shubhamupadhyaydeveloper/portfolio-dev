import { useEffect, useRef } from 'react'

/** Thin accent bar pinned to the top, width tracks scroll progress. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? doc.scrollTop / max : 0
      if (ref.current) {
        ref.current.style.transform = `scaleX(${pct})`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
      style={{ transform: 'scaleX(0)' }}
      ref={ref}
    />
  )
}
