import { CATEGORIES } from '../data/jobs'

export default function FilterBar({ activeCategory, setActiveCategory, search, setSearch }) {
  return (
    <div id="categories" style={{ position: 'sticky', top: 72, zIndex: 40, background: 'var(--paper)', paddingTop: 4, paddingBottom: 16 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          background: 'var(--paper-raised)',
          border: '1px solid var(--line)',
          borderRadius: 16,
          padding: 14,
        }}
      >
        <div style={{ position: 'relative', flex: '1 1 220px', minWidth: 200 }}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--slate-light)"
            strokeWidth="2"
            style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by post, organisation, or notification no."
            aria-label="Search government jobs"
            style={{
              width: '100%',
              padding: '11px 14px 11px 40px',
              borderRadius: 10,
              border: '1px solid var(--line)',
              fontSize: 14,
              fontFamily: 'var(--font-body)',
              background: 'var(--paper)',
              color: 'var(--ink)',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: '2 1 420px' }}>
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '9px 16px',
                  borderRadius: 999,
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: active ? '1.5px solid var(--ink)' : '1.5px solid var(--line)',
                  background: active ? 'var(--ink)' : 'transparent',
                  color: active ? 'white' : 'var(--slate)',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
