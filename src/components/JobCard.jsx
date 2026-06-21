import { useState } from 'react'
import { getStatus, formatDate } from '../data/jobs'

const STATUS_STYLES = {
  open: { bg: 'var(--emerald-light)', fg: 'var(--emerald)', label: 'Open' },
  urgent: { bg: 'var(--coral-light)', fg: 'var(--coral)', label: 'Closing soon' },
  closed: { bg: '#F1EFE8', fg: '#888780', label: 'Closed' },
}

export default function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false)
  const status = getStatus(job)
  const tone = STATUS_STYLES[status.tone]

  return (
    <article
      id={job.id}
      style={{
        display: 'flex',
        background: 'var(--paper-raised)',
        border: '1px solid var(--line)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        scrollMarginTop: 160,
      }}
      className="job-card"
    >
      <div style={{ flex: 1, padding: '22px 22px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div>
            <p className="mono" style={{ fontSize: 12, color: 'var(--slate-light)', marginBottom: 6 }}>
              {job.notificationNo} · {job.location}
            </p>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>
              {job.title}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 4 }}>{job.org}</p>
          </div>
          <span
            style={{
              flexShrink: 0,
              fontSize: 12,
              fontWeight: 700,
              padding: '5px 11px',
              borderRadius: 999,
              background: tone.bg,
              color: tone.fg,
              whiteSpace: 'nowrap',
            }}
          >
            {tone.label}
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 14,
            marginTop: 18,
            paddingTop: 16,
            borderTop: '1px dashed var(--line)',
          }}
        >
          <Stat label="Vacancies" value={job.vacancies ? job.vacancies.toLocaleString('en-IN') : 'Not specified'} />
          <Stat label="Qualification" value={job.qualification} />
          <Stat label="Age limit" value={job.ageLimit} />
          <Stat label="Application fee" value={job.applicationFee} />
        </div>

        {expanded && (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px dashed var(--line)' }}>
            <p style={{ fontSize: 14, color: 'var(--slate)' }}>{job.description}</p>
            <div style={{ display: 'flex', gap: 24, marginTop: 14, flexWrap: 'wrap' }}>
              <Stat label="Posted" value={formatDate(job.postedDate)} />
              <Stat label="Last date to apply" value={formatDate(job.lastDate)} />
              {job.examDate && <Stat label="Exam date" value={formatDate(job.examDate)} />}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
          <button
            onClick={() => setExpanded((v) => !v)}
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: 'var(--ink)',
              background: 'transparent',
              border: '1px solid var(--line)',
              borderRadius: 8,
              padding: '9px 14px',
            }}
          >
            {expanded ? 'Show less' : 'View full details'}
          </button>
          <a
            href={job.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: 'white',
              background: 'var(--saffron)',
              borderRadius: 8,
              padding: '9px 14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Apply on official site
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </div>

      {/* Signature element: ticket-stub countdown edge */}
      <div
        style={{
          flexShrink: 0,
          width: 92,
          background: status.tone === 'closed' ? '#F1EFE8' : 'var(--ink)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderLeft: '2px dashed rgba(255,255,255,0.25)',
        }}
        aria-hidden="true"
      >
        <span
          className="mono"
          style={{
            fontSize: status.daysLeft > 0 && status.tone !== 'closed' ? 30 : 16,
            fontWeight: 700,
            color: status.tone === 'closed' ? '#888780' : status.tone === 'urgent' ? 'var(--coral)' : 'white',
            lineHeight: 1,
          }}
        >
          {status.tone === 'closed' ? '—' : status.daysLeft <= 0 ? '0' : status.daysLeft}
        </span>
        <span
          className="mono"
          style={{
            fontSize: 10,
            color: status.tone === 'closed' ? '#888780' : '#94A3B8',
            marginTop: 6,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            textAlign: 'center',
          }}
        >
          {status.tone === 'closed' ? 'closed' : 'days left'}
        </span>
      </div>

      <style>{`
        .job-card { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .job-card:hover { box-shadow: var(--shadow-card-hover); transform: translateY(-2px); }
      `}</style>
    </article>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: 11, color: 'var(--slate-light)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>
        {label}
      </p>
      <p style={{ fontSize: 13.5, color: 'var(--ink)', fontWeight: 500 }}>{value}</p>
    </div>
  )
}
