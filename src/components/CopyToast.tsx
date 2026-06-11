import { useEffect, useRef, useState } from 'react'

/** Tiny "copied" pill — fires on a real copy event or a dispatched `copytoast` CustomEvent. */
export function CopyToast() {
  const [count, setCount] = useState(0)
  const [label, setLabel] = useState('copied to clipboard')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const show = (text?: string) => {
      setLabel(text ? `copied ${text}` : 'copied to clipboard')
      setCount((c) => c + 1)
    }

    const onCopy = () => {
      const text = window.getSelection()?.toString().trim()
      if (!text) return
      show()
    }
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail
      show(detail)
    }

    document.addEventListener('copy', onCopy)
    window.addEventListener('copytoast', onCustom as EventListener)
    return () => {
      document.removeEventListener('copy', onCopy)
      window.removeEventListener('copytoast', onCustom as EventListener)
    }
  }, [])

  useEffect(() => {
    if (count === 0) return
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCount(0), 1400)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [count])

  const visible = count > 0

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface px-3.5 py-1.5 font-mono text-xs text-ink shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]">
        <span className="text-accent">✓</span> {label}
      </span>
    </div>
  )
}
