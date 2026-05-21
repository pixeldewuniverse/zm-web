import Link from 'next/link'

const TOOLS = [
  { initial: 'W', name: 'Write', description: 'AI writing assistant', href: 'https://write.zareshmeridian.com', live: true },
  { initial: 'P', name: 'Plan', description: 'Strategi konten otomatis', href: '#' },
  { initial: 'L', name: 'Lens', description: 'Analisis performa digital', href: '#' },
  { initial: 'D', name: 'Desk', description: 'Dashboard operasional', href: '#' },
  { initial: 'B', name: 'Bloom', description: 'Sistem monetisasi', href: '#' },
]

export default function ToolsSection() {
  return (
    <section style={{
      padding: '8rem 3rem',
      borderTop: '1px solid rgba(245,241,234,0.06)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <p className="label-section">Tools</p>
        <Link href="https://tools.zareshmeridian.com" target="_blank" style={{
          fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.3)', textDecoration: 'none',
        }}>
          tools.zareshmeridian.com →
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: 'rgba(245,241,234,0.06)' }}>
        {TOOLS.map((tool) => (
          <Link key={tool.name} href={tool.href} target="_blank" style={{
            display: 'block', background: 'var(--color-ink)',
            padding: '2.5rem 2rem', textDecoration: 'none', position: 'relative',
          }}>
            {tool.live && (
              <span style={{
                position: 'absolute', top: '1rem', right: '1rem',
                fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--color-gold)', border: '1px solid rgba(184,145,42,0.3)',
                padding: '2px 6px',
              }}>Live</span>
            )}
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              fontWeight: 300, color: 'rgba(184,145,42,0.4)',
              marginBottom: '1.5rem', lineHeight: 1,
            }}>{tool.initial}</div>
            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-paper)', marginBottom: '0.5rem' }}>{tool.name}</p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,241,234,0.3)', lineHeight: 1.6 }}>{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}