import Link from 'next/link'

export default function CTASection() {
  return (
    <section
      style={{
        padding: '10rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,145,42,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Circle ornaments */}
      {[600, 450, 300].map((size, i) => (
        <div
          key={size}
          aria-hidden
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: size,
            height: size,
            borderRadius: '50%',
            border: `1px ${i === 1 ? 'dashed' : 'solid'} rgba(184,145,42,${
              i === 0 ? '0.05' : i === 1 ? '0.08' : '0.1'
            })`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="label-section" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
          Mulai Perjalananmu
        </p>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(42px, 6vw, 80px)',
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          Siap tumbuh
          <br />
          secara{' '}
          <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
            terukur?
          </em>
        </h2>

        <p
          style={{
            fontSize: '0.9375rem',
            color: 'rgba(245,241,234,0.42)',
            maxWidth: '380px',
            margin: '0 auto 3rem',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Bergabunglah dengan perempuan Indonesia yang sudah membangun bisnis
          digital mereka bersama Zaresh Meridian.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/studio" className="btn-primary">
            Mulai dengan Studio
          </Link>
          <Link href="/academy" className="btn-ghost">
            Gabung Academy
          </Link>
        </div>
      </div>
    </section>
  )
}
