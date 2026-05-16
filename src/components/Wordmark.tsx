import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import { useAccent } from '../hooks/useAccent'
import { profile } from '../content/profile'

export function Wordmark() {
  const { cycle, label } = useAccent()
  const dotRef = useRef<HTMLSpanElement | null>(null)

  const handleClick = () => {
    cycle()
    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { scale: 1 },
        {
          scale: 1.35,
          duration: 0.14,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut',
        },
      )
    }
  }

  return (
    <a
      href="#top"
      className="group inline-flex items-baseline gap-[2px] font-mono text-base text-ink"
    >
      <span>{profile.wordmark}</span>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}
        aria-label={`Cycle accent color. Current: ${label}.`}
        title={`accent: ${label} — click to cycle`}
        className="-mb-[1px] inline-flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
      >
        <span
          ref={dotRef}
          className="block h-[7px] w-[7px] rounded-full bg-accent"
        />
      </button>
    </a>
  )
}
