'use client'

import Link from 'next/link'

const ARMS = [
  {
    number: '01',
    label: 'Studio',
    title: 'Digital Marketing',
    description: 'Sistem marketing dan digital yang benar — bukan sekadar konten, tapi mesin pertumbuhan.',
    color: '#3B82F6',
    href: '/studio',
  },
  {
    number: '02',
    label: 'Academy',
    title: 'Skills & Keberanian',
    description: 'Untuk perempuan yang tidak tahu mulai dari mana. Mentor, bukan sales.',
    color: '#10B981',
    href: '/academy',
  },
  {
    number: '03',
    label: 'Products',
    title: 'Tools & Sistem',
    description: 'Tools accessible untuk menjalankan bisnis — tanpa kerumitan teknis.',
    color: '#8B5CF6',
    href: '/products',
  },
]

export default function ArmsSection() {
  return (
    <section style={{ padding: '8rem 3rem' }}>
      <p className="label-section" style={{ marginBottom: '4rem' }}>Ekosistem</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(245,241,234,0.06)' }}>
        {ARMS.map((arm) => (
          <Link
            key={arm.label}
            href={arm.href}
            style={{ textDecoration: 'none', display: 'block', background: 'var(--color-ink)', padding: '3rem 2.5rem', transition: 'background 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-ink-2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-ink)')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.5625rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: arm.color }}>{arm.label}</span>
              <span style={{ fontSize: '0.625rem', color: 'rgba(245,241,234,0.2)', letterSpacing: '0.1em' }}>{arm.number}</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              fontWeight: 300, lineHeight: 1.1,
              color: 'var(--color-paper)', marginBottom: '1.25rem',
            }}>
              {arm.title}
            </h3>

            <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.4)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              {arm.description}
            </p>

            <span style={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
              Selengkapnya →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}