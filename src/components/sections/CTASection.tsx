import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{
      padding: '10rem 3rem',
      borderTop: '1px solid rgba(245,241,234,0.06)',
      textAlign: 'center',
    }}>
      <p className="label-section" style={{ justifyContent: 'center', marginBottom: '2rem' }}>Mulai Sekarang</p>

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(40px, 6vw, 80px)',
        fontWeight: 300, lineHeight: 1.1,
        marginBottom: '1.5rem',
      }}>
        Siap tumbuh secara{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>terukur?</em>
      </h2>

      <p style={{
        fontSize: '0.875rem', color: 'rgba(245,241,234,0.4)',
        maxWidth: '360px', margin: '0 auto 3rem', lineHeight: 1.8,
      }}>
        Bergabunglah dengan perempuan Indonesia yang membangun bisnis digital bersama Zaresh Meridian.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/studio" className="btn-primary">Mulai dengan Studio</Link>
        <Link href="/academy" className="btn-ghost">Gabung Academy</Link>
      </div>
    </section>
  )
}