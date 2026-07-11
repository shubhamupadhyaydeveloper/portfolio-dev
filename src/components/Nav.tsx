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
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:border-accent hover:text-accent"
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
  const [menuOpen, setMenuOpen] = useState(false)

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

  useEffect(() => {
    setMenuOpen(false)
  }, [active])

  return (
    <header className="sticky top-3 z-30 px-4 sm:top-4 sm:px-6">
      <nav className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-rule bg-surface/75 px-4 py-2.5 shadow-[0_8px_30px_-18px_rgb(0_0_0/0.35)] backdrop-blur-md sm:px-5">
          <Wordmark />
          <div className="flex items-center gap-2 sm:gap-5">
            <ul className="hidden gap-5 text-sm text-muted sm:flex">
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
              className="btn-accent hidden rounded-full px-3.5 py-1.5 text-sm transition-all sm:inline-flex"
            >
              get in touch
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:border-accent hover:text-accent sm:hidden"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-2 rounded-2xl border border-rule bg-surface/95 p-2 shadow-[0_8px_30px_-18px_rgb(0_0_0/0.35)] backdrop-blur-md sm:hidden">
            <ul className="flex flex-col text-sm text-muted">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active === link.id ? 'true' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-3 py-2.5 transition-colors hover:bg-bg hover:text-ink ${
                      active === link.id ? 'text-ink' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 block rounded-xl px-3 py-2.5 font-medium text-accent transition-colors hover:bg-bg"
                >
                  get in touch
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
