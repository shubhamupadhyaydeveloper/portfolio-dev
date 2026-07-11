import { useEffect, useRef } from 'react'

/**
 * Reveal-on-scroll that can NEVER leave content stuck hidden.
 * Content is visible by default in CSS; the `.js [data-reveal]` rule only hides it once JS is
 * active, and this observer adds `.is-in` to fade each item in as it enters the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!items.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      items.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 8) * 60}ms`
      io.observe(el)
    })

    // Safety net: if anything is still hidden after a moment (e.g. already in view), reveal it.
    const t = window.setTimeout(() => {
      items.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight) el.classList.add('is-in')
      })
    }, 1200)

    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [])

  return ref
}
