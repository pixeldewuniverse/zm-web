import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 3rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(184,145,42,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 15% 80%, rgba(184,145,42,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Circle ornament — meridian motif */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '520px',
          height: '520px',
          border: '1px solid rgba(184,145,42,0.1)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      >
        {/* Inner rings */}
        {[380, 240].map((size) => (
          <div
            key={size}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: size,
              height: size,
              border: `1px solid rgba(184,145,42,${size === 380 ? '0.07' : '0.13'})`,
              borderRadius: '50%',
            }}
          />
        ))}

        {/* Vertical meridian line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '15%',
            transform: 'translateX(-50%)',
            width: '1px',
            height: '70%',
            background:
              'linear-gradient(to bottom, transparent, rgba(184,145,42,0.4), transparent)',
          }}
        />

        {/* Center dot */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '8px',
            height: '8px',
            background: 'var(--color-gold)',
            borderRadius: '50%',
            boxShadow: '0 0 12px rgba(184,145,42,0.5)',
          }}
        />

        {/* Dashed horizon */}
        <div
          style={{
            position: 'absolute',
            left: '15%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '70%',
            height: '1px',
            background:
              'repeating-linear-gradient(to right, rgba(184,145,42,0.3) 0px, rgba(184,145,42,0.3) 6px, transparent 6px, transparent 14px)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          className="label-section animate-fade-up"
          style={{ marginBottom: '1.5rem' }}
        >
          Zaresh Meridian & Co. — Bali, Indonesia
        </p>

        <h1
          className="font-display animate-fade-up delay-200"
          style={{
            fontSize: 'clamp(52px, 7vw, 92px)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            maxWidth: '700px',
          }}
        >
          Bisnis yang tumbuh
          <br />
          saat kamu{' '}
          <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
            istirahat.
          </em>
        </h1>

        <p
          className="animate-fade-up delay-300"
          style={{
            marginTop: '1.75rem',
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: 'var(--color-paper-muted)',
            maxWidth: '440px',
            lineHeight: 1.8,
          }}
        >
          Strategi digital, sistem marketing, dan skill yang membekali
          perempuan Indonesia untuk memiliki income sendiri — tanpa
          mengorbankan keluarga.
        </p>

        <div
          className="animate-fade-up delay-400"
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/studio" className="btn-primary">
            Mulai Bersama Kami
          </Link>
          <Link href="/about" className="btn-ghost">
            Kenali ZM
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '3rem',
          fontSize: '0.625rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.2)',
          writingMode: 'vertical-rl',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        Scroll
        <span
          style={{
            display: 'block',
            width: '1px',
            height: '48px',
            background: 'rgba(245,241,234,0.12)',
          }}
        />
      </div>
    </section>
  )
}
