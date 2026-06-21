import { useMemo } from 'react'
import { jobs } from '../data/jobs'
import JobCard from './JobCard'

export default function JobList({ activeCategory, search }) {
  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory = activeCategory === 'all' || job.category === activeCategory
      const q = search.trim().toLowerCase()
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.org.toLowerCase().includes(q) ||
        job.notificationNo.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <section id="jobs" style={{ paddingTop: 8, paddingBottom: 80 }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>
            {activeCategory === 'all' ? 'All notifications' : 'Filtered notifications'}
          </h2>
          <span className="mono" style={{ fontSize: 13, color: 'var(--slate-light)' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '64px 24px',
              border: '1px dashed var(--line)',
              borderRadius: 16,
              color: 'var(--slate)',
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>No notifications match your search</p>
            <p style={{ fontSize: 14, marginTop: 6 }}>Try a different keyword or clear the category filter.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
