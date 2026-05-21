'use client'

import Link from 'next/link'

type Tool = {
  initial: string
  name: string
  description: string
  href: string
  isLive?: boolean
}

const TOOLS: Tool[] = [
  {
    initial: 'W',
    name: 'Write',
    description: 'AI writing assistant untuk konten bisnis yang convert',
    href: 'https://write.zareshmeridian.com',
    isLive: true,
  },
  {
    initial: 'P',
    name: 'Plan',
    description: 'Perencanaan konten dan strategi marketing otomatis',
    href: 'https://tools.zareshmeridian.com',
  },
  {
    initial: 'L',
    name: 'Lens',
    description: 'Analisis performa dan insight digital bisnis kamu',
    href: 'https://tools.zareshmeridian.com',
  },
  {
    initial: 'D',
    name: 'Desk',
    description: 'Dashboard operasional bisnis terpadu dalam satu layar',
    href: 'https://tools.zareshmeridian.com',
  },
  {
    initial: 'B',
    name: 'Bloom',
    description: 'Sistem pertumbuhan dan monetisasi yang terstruktur',
    href: 'https://tools.zareshmeridian.com',
  },
]

export default function ToolsSection() {
  return (
    <section style={{ padding: '7.5rem 3rem' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <p className="label-section" style={{ marginBottom: '1rem' }}>
            SaaS Ecosystem
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              maxWidth: '320px',
            }}
          >
            Tools yang{' '}
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
              bekerja
            </em>{' '}
            untuk kamu.
          </h2>
        </div>

        <Link
          href="https://tools.zareshmeridian.com"
          className="btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.625rem', alignSelf: 'flex-end' }}
        >
          tools.zareshmeridian.com →
        </Link>
      </div>

      {/* Tools grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '2px',
        }}
      >
        {TOOLS.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        background: 'var(--color-ink-2)',
        padding: '2rem 1.75rem',
        position: 'relative',
        textDecoration: 'none',
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background =
          'var(--color-ink-3)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background =
          'var(--color-ink-2)'
      }}
    >
      {/* Live badge */}
      {tool.isLive && (
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '0.5rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '0.1875rem 0.5rem',
            background: 'var(--color-gold-dim)',
            color: 'var(--color-gold)',
          }}
        >
          Live
        </span>
      )}

      {/* Icon box */}
      <div
        className="font-display"
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid rgba(184,145,42,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          fontSize: '1.25rem',
          fontWeight: 300,
          color: 'var(--color-gold)',
          lineHeight: 1,
        }}
      >
        {tool.initial}
      </div>

      <p
        style={{
          fontSize: '0.9375rem',
          fontWeight: 500,
          color: 'var(--color-paper)',
          marginBottom: '0.5rem',
        }}
      >
        {tool.name}
      </p>

      <p
        style={{
          fontSize: '0.75rem',
          color: 'rgba(245,241,234,0.38)',
          lineHeight: 1.65,
        }}
      >
        {tool.description}
      </p>
    </Link>
  )
}
