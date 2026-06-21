const STEPS = [
  {
    title: 'We track official sources',
    body: 'Notifications are sourced directly from Railway Boards, SSC, UPSC, IBPS, State PSCs, Defence services and PSU career pages — not forwarded messages.',
    icon: (
      <path d="M3 10l9-6 9 6-9 6-9-6zM3 10v8M21 10v8M12 16v6" />
    ),
  },
  {
    title: 'We verify before listing',
    body: 'Every vacancy count, eligibility line and last date is checked against the original PDF notification before it appears on Adirvion.',
    icon: <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'You apply on the official site',
    body: "Adirvion never collects applications or fees. Every listing links straight to the recruiting body's own portal.",
    icon: <path d="M14 3h7v7M21 3l-9 9M5 5h6v2H5v12h12v-6h2v8H5a2 2 0 01-2-2V7a2 2 0 012-2z" />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '64px 0 80px', background: 'var(--paper-raised)', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div style={{ maxWidth: 540, marginBottom: 44 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700 }}>Built to be checked, not just trusted</h2>
          <p style={{ fontSize: 16, marginTop: 10 }}>
            Sarkari job information spreads fast and gets stale faster. Here's how we
            keep listings accurate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
          {STEPS.map((step, i) => (
            <div key={step.title}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: i === 1 ? 'var(--saffron)' : 'var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {step.icon}
                </svg>
              </div>
              <h3 style={{ fontSize: 16.5, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--slate)' }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
