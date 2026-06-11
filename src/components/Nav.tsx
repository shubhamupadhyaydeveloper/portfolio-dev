import { useEffect, useState } from 'react'
import { Wordmark } from './Wordmark'
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? (
        // sun
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // moon
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

const LINKS = [
  { href: '#about', id: 'about', label: 'about' },
  { href: '#work', id: 'work', label: 'work' },
  { href: '#projects', id: 'projects', label: 'projects' },
  { href: '#education', id: 'education', label: 'education' },
  { href: '#contact', id: 'contact', label: 'contact' },
]

export function Nav() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md">
      <div className="border-b border-rule/70 bg-bg/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
          <Wordmark />
          <div className="flex items-center gap-6">
            <ul className="hidden gap-6 text-sm text-muted sm:flex">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`link-underline transition-colors hover:text-ink ${
                      active === link.id ? 'is-active text-ink' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              get in touch
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
