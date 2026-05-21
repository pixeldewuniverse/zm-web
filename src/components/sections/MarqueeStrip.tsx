const ITEMS = ['Studio', 'Academy', 'Products', 'Build', 'Market', 'Automate', 'zareshmeridian.com']
const TRACK = [...ITEMS, ...ITEMS]

export default function MarqueeStrip() {
  return (
    <div style={{
      borderTop: '1px solid rgba(245,241,234,0.06)',
      borderBottom: '1px solid rgba(245,241,234,0.06)',
      padding: '1rem 0', overflow: 'hidden',
    }} aria-hidden>
      <div className="marquee-track" style={{ display: 'flex', gap: '3rem', width: 'max-content' }}>
        {TRACK.map((item, i) => (
          <span key={i} style={{
            display: 'flex', alignItems: 'center', gap: '2rem',
            fontSize: '0.625rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'rgba(245,241,234,0.22)',
            whiteSpace: 'nowrap',
          }}>
            {item}
            <span style={{ width: '3px', height: '3px', background: 'var(--color-gold)', borderRadius: '50%', opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  )
}