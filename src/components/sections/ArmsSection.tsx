import Link from 'next/link'

type Arm = {
  number: string
  slug: 'studio' | 'academy' | 'products'
  label: string
  title: string
  description: string
  color: string
  colorDim: string
  href: string
}

const ARMS: Arm[] = [
  {
    number: '01',
    slug: 'studio',
    label: 'Studio',
    title: 'Digital\nMarketing',
    description:
      'Kami bangun sistem marketing dan digital yang benar untuk bisnis kamu — bukan sekadar konten, tapi mesin pertumbuhan yang bekerja otomatis.',
    color: 'var(--color-studio)',
    colorDim: 'var(--color-studio-dim)',
    href: '/studio',
  },
  {
    number: '02',
    slug: 'academy',
    label: 'Academy',
    title: 'Skills &\nKeberanian',
    description:
      'Untuk perempuan yang tidak tahu mulai dari mana. Kami hadir sebagai mentor yang sudah terbukti, bukan sales. Belajar, bertumbuh, miliki income sendiri.',
    color: 'var(--color-academy)',
    colorDim: 'var(--color-academy-dim)',
    href: '/academy',
  },
  {
    number: '03',
    slug: 'products',
    label: 'Products',
    title: 'Tools &\nSistem',
    description:
      'Tools dan sistem yang accessible untuk menjalankan bisnis dan belajar — tanpa kerumitan teknis yang menguras energi dan waktu.',
    color: 'var(--color-products)',
    colorDim: 'var(--color-products-dim)',
    href: '/products',
  },
]

export default function ArmsSection() {
  return (
    <section style={{ padding: '7.5rem 3rem' }}>
      {/* Header */}
      <p className="label-section" style={{ marginBottom: '1rem' }}>
        Ekosistem Kami
      </p>
      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: '5rem',
          maxWidth: '420px',
        }}
      >
        Tiga lengan,{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
          satu tujuan.
        </em>
      </h2>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
      >
        {ARMS.map((arm) => (
          <ArmCard key={arm.slug} arm={arm} />
        ))}
      </div>
    </section>
  )
}

function ArmCard({ arm }: { arm: Arm }) {
  return (
    <div
      style={{
        background: 'var(--color-ink-2)',
        padding: '3rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.35s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--color-ink-3)'
        const bar = el.querySelector<HTMLDivElement>('[data-top-bar]')
        if (bar) bar.style.opacity = '1'
        const num = el.querySelector<HTMLDivElement>('[data-number]')
        if (num) num.style.opacity = '0.1'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--color-ink-2)'
        const bar = el.querySelector<HTMLDivElement>('[data-top-bar]')
        if (bar) bar.style.opacity = '0'
        const num = el.querySelector<HTMLDivElement>('[data-number]')
        if (num) num.style.opacity = '0.04'
      }}
    >
      {/* Top color bar */}
      <div
        data-top-bar
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: arm.color,
          opacity: 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Large background number */}
      <div
        data-number
        className="font-display"
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '1.5rem',
          fontSize: '5rem',
          fontWeight: 300,
          color: 'var(--color-paper)',
          opacity: 0.04,
          lineHeight: 1,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {arm.number}
      </div>

      {/* Arm tag */}
      <span
        style={{
          display: 'inline-block',
          fontSize: '0.5625rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: arm.color,
          border: `1px solid ${arm.colorDim}`,
          padding: '0.3125rem 0.75rem',
          marginBottom: '1.5rem',
          fontWeight: 500,
        }}
      >
        {arm.label}
      </span>

      {/* Title */}
      <h3
        className="font-display"
        style={{
          fontSize: '2.25rem',
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: '1rem',
          whiteSpace: 'pre-line',
        }}
      >
        {arm.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.8125rem',
          color: 'rgba(245,241,234,0.5)',
          lineHeight: 1.8,
          marginBottom: '2rem',
        }}
      >
        {arm.description}
      </p>

      {/* Link */}
      <Link
        href={arm.href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.625rem',
          fontSize: '0.625rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          textDecoration: 'none',
          transition: 'gap 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = '0.875rem'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = '0.625rem'
        }}
      >
        Lihat {arm.label} <span>→</span>
      </Link>
    </div>
  )
}
