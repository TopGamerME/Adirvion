import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(255, 248, 240, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="var(--ink)" />
            <path
              d="M7 11 C7 9.5 8 9 9.5 9 H22.5 C24 9 25 9.5 25 11 V13 C23.5 13 23.5 15 25 15 V17 C23.5 17 23.5 19 25 19 V21 C25 22.5 24 23 22.5 23 H9.5 C8 23 7 22.5 7 21 V19 C8.5 19 8.5 17 7 17 V15 C8.5 15 8.5 13 7 13 Z"
              fill="var(--saffron)"
            />
            <line x1="16" y1="11" x2="16" y2="21" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 21,
              letterSpacing: '-0.02em',
            }}
          >
            Adirvion
          </span>
        </a>

        <nav
          style={{ display: 'flex', alignItems: 'center', gap: 28 }}
          aria-label="Primary"
        >
          <a href="#jobs" className="nav-link">Browse jobs</a>
          <a href="#categories" className="nav-link nav-link-hide-mobile">Categories</a>
          <a href="#how-it-works" className="nav-link nav-link-hide-mobile">How it works</a>
          <a
            href="#jobs"
            style={{
              background: 'var(--ink)',
              color: 'white',
              fontSize: 14,
              fontWeight: 600,
              padding: '10px 18px',
              borderRadius: 999,
            }}
          >
            View today's list
          </a>
        </nav>
      </div>

      <style>{`
        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          opacity: 0.75;
        }
        .nav-link:hover {
          opacity: 1;
        }
        @media (max-width: 720px) {
          .nav-link-hide-mobile { display: none; }
        }
      `}</style>
    </header>
  )
}
