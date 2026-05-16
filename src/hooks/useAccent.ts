import { useCallback, useEffect, useState } from 'react'

export type AccentName = 'inkblue' | 'sage' | 'plum' | 'terracotta' | 'amber'

export const ACCENTS: Record<AccentName, { rgb: string; label: string }> = {
  inkblue: { rgb: '60 95 150', label: 'blue' },
  sage: { rgb: '94 122 95', label: 'sage' },
  plum: { rgb: '122 74 107', label: 'plum' },
  terracotta: { rgb: '200 85 61', label: 'terracotta' },
  amber: { rgb: '176 122 44', label: 'amber' },
}

const ORDER: AccentName[] = ['inkblue', 'sage', 'plum', 'terracotta', 'amber']
const STORAGE_KEY = 'port:accent'

function applyAccent(name: AccentName) {
  document.documentElement.style.setProperty('--accent', ACCENTS[name].rgb)
}

export function useAccent() {
  const [accent, setAccent] = useState<AccentName>(() => {
    if (typeof window === 'undefined') return 'inkblue'
    const stored = window.localStorage.getItem(STORAGE_KEY) as AccentName | null
    return stored && stored in ACCENTS ? stored : 'inkblue'
  })

  useEffect(() => {
    applyAccent(accent)
    window.localStorage.setItem(STORAGE_KEY, accent)
  }, [accent])

  const cycle = useCallback(() => {
    setAccent((current) => {
      const idx = ORDER.indexOf(current)
      return ORDER[(idx + 1) % ORDER.length]
    })
  }, [])

  return { accent, cycle, label: ACCENTS[accent].label }
}
