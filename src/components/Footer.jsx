export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'white', padding: '56px 0 28px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 32,
            paddingBottom: 36,
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
              <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="7" fill="var(--saffron)" />
                <path
                  d="M7 11 C7 9.5 8 9 9.5 9 H22.5 C24 9 25 9.5 25 11 V13 C23.5 13 23.5 15 25 15 V17 C23.5 17 23.5 19 25 19 V21 C25 22.5 24 23 22.5 23 H9.5 C8 23 7 22.5 7 21 V19 C8.5 19 8.5 17 7 17 V15 C8.5 15 8.5 13 7 13 Z"
                  fill="var(--ink)"
                />
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>Adirvion</span>
            </div>
            <p style={{ fontSize: 14, color: '#94A3B8', maxWidth: 320, lineHeight: 1.6 }}>
              An independent listing of government job notifications across India.
              Adirvion is not affiliated with any government department, ministry,
              or recruitment board.
            </p>
          </div>

          <FooterCol
            title="Categories"
            links={['Railway', 'Banking', 'SSC', 'UPSC', 'Defence', 'State PSC']}
          />
          <FooterCol title="Resources" links={['How it works', 'Submit a notification', 'Report an error', 'Contact us']} />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            paddingTop: 24,
          }}
        >
          <p style={{ fontSize: 13, color: '#64748B' }}>© 2026 Adirvion. All listings link to official sources.</p>
          <p className="mono" style={{ fontSize: 12, color: '#64748B' }}>
            Always cross-check the last date on the official notification before applying.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p style={{ fontSize: 13, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 14 }}>
        {title}
      </p>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((link) => (
          <li key={link}>
            <a href="#" style={{ fontSize: 14, color: '#CBD5E1' }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
