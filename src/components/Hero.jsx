import { jobs, getStatus, formatDate } from '../data/jobs'

export default function Hero() {
  const urgent = jobs
    .map((j) => ({ job: j, status: getStatus(j) }))
    .filter(({ status }) => status.tone !== 'closed')
    .sort((a, b) => a.status.daysLeft - b.status.daysLeft)
    .slice(0, 6)

  const totalOpen = jobs.filter((j) => getStatus(j).tone !== 'closed').length
  const totalVacancies = jobs
    .filter((j) => getStatus(j).tone !== 'closed' && j.vacancies)
    .reduce((sum, j) => sum + j.vacancies, 0)

  return (
    <section id="top" style={{ paddingTop: 56, paddingBottom: 0 }}>
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <span
            className="mono"
            style={{
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--saffron-dark)',
              background: 'rgba(255, 107, 53, 0.1)',
              padding: '6px 12px',
              borderRadius: 999,
              marginBottom: 20,
              textTransform: 'uppercase',
            }}
          >
            {totalOpen} notifications open today
          </span>

          <h1
            style={{
              fontSize: 'clamp(34px, 5.5vw, 56px)',
              lineHeight: 1.06,
              fontWeight: 700,
              color: 'var(--ink)',
            }}
          >
            Every government vacancy in India,
            <span style={{ color: 'var(--saffron)' }}> tracked to the day it closes.</span>
          </h1>

          <p style={{ fontSize: 18, marginTop: 20, maxWidth: 560, color: 'var(--slate)' }}>
            Railways, Banking, SSC, UPSC, Defence, State PSCs and PSUs — verified
            notifications, eligibility and deadlines in one place, so you never
            miss a last date again.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <a
              href="#jobs"
              style={{
                background: 'var(--saffron)',
                color: 'white',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 26px',
                borderRadius: 999,
                boxShadow: '0 8px 20px rgba(255, 107, 53, 0.28)',
              }}
            >
              Browse open notifications
            </a>
            <a
              href="#how-it-works"
              style={{
                color: 'var(--ink)',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 22px',
                borderRadius: 999,
                border: '1.5px solid var(--line)',
              }}
            >
              How verification works
            </a>
          </div>

          <p className="mono" style={{ fontSize: 13, marginTop: 18, color: 'var(--slate-light)' }}>
            {totalVacancies.toLocaleString('en-IN')}+ vacancies currently open across {jobs.length} active notifications
          </p>
        </div>
      </div>

      {/* Signature element: a closing-soon ledger ticker, like a departure board */}
      <div style={{ marginTop: 48, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--ink)' }}>
        <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--coral)',
                display: 'inline-block',
                animation: 'pulse 1.8s ease-in-out infinite',
              }}
              aria-hidden="true"
            />
            <span
              className="mono"
              style={{ fontSize: 12, color: '#FCD9C8', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Closing soonest
            </span>
          </div>

          <div className="ticker-scroll" style={{ display: 'flex', gap: 28, overflowX: 'auto', paddingBottom: 4 }}>
            {urgent.map(({ job, status }) => (
              <a
                key={job.id}
                href={`#${job.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 8,
                  flexShrink: 0,
                  borderRight: '1px solid rgba(255,255,255,0.12)',
                  paddingRight: 28,
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: status.tone === 'urgent' ? 'var(--coral)' : 'var(--emerald)',
                  }}
                >
                  {status.daysLeft <= 0 ? 'Today' : `${status.daysLeft}d`}
                </span>
                <span style={{ fontSize: 14, color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  {job.title.split('—')[0].trim()}
                </span>
                <span className="mono" style={{ fontSize: 12, color: '#94A3B8', whiteSpace: 'nowrap' }}>
                  → {formatDate(job.lastDate)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .ticker-scroll::-webkit-scrollbar { height: 4px; }
        .ticker-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
      `}</style>
    </section>
  )
}
