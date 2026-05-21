const ITEMS = [
  'Studio',
  'Academy',
  'Products',
  'Build',
  'Market',
  'Automate',
  'zareshmeridian.com',
]

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS]

export default function MarqueeStrip() {
  return (
    <div
      style={{
        borderTop: '1px solid rgba(245,241,234,0.05)',
        borderBottom: '1px solid rgba(245,241,234,0.05)',
        padding: '1.125rem 0',
        overflow: 'hidden',
      }}
      aria-hidden
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '4rem',
          width: 'max-content',
        }}
      >
        {TRACK.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(245,241,234,0.28)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span
              style={{
                width: '4px',
                height: '4px',
                background: 'var(--color-gold)',
                borderRadius: '50%',
                opacity: 0.4,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
