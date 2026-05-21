'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-ink)',
      }}
    >
      {/* Animated lights */}
      <style>{`
        @keyframes drift-1 {
          0%   { transform: translate(0, 0) scale(1); }
          25%  { transform: translate(120px, -80px) scale(1.15); }
          50%  { transform: translate(60px, 100px) scale(0.9); }
          75%  { transform: translate(-80px, 40px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-2 {
          0%   { transform: translate(0, 0) scale(1); }
          25%  { transform: translate(-100px, 60px) scale(0.85); }
          50%  { transform: translate(-40px, -90px) scale(1.2); }
          75%  { transform: translate(90px, -30px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-3 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(80px, 120px) scale(1.1); }
          66%  { transform: translate(-60px, 60px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: '10%', top: '15%',
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(184,145,42,0.2) 0%, transparent 65%)',
          filter: 'blur(50px)', borderRadius: '50%',
          animation: 'drift-1 18s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', right: '10%', top: '20%',
          width: '420px', height: '420px',
          background: 'radial-gradient(ellipse, rgba(184,145,42,0.1) 0%, transparent 65%)',
          filter: 'blur(70px)', borderRadius: '50%',
          animation: 'drift-2 24s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', left: '40%', bottom: '10%',
          width: '360px', height: '360px',
          background: 'radial-gradient(ellipse, rgba(140,110,50,0.13) 0%, transparent 65%)',
          filter: 'blur(60px)', borderRadius: '50%',
          animation: 'drift-3 20s ease-in-out infinite',
        }} />
      </div>

      {/* TOP LEFT — CTA */}
      <Link
        href="/studio"
        style={{
          position: 'absolute', top: '2rem', left: '2rem',
          fontSize: '0.625rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--color-paper)',
          textDecoration: 'none',
          border: '1px solid rgba(245,241,234,0.35)',
          borderRadius: '999px',
          padding: '0.5rem 1.25rem',
          transition: 'border-color 0.3s, color 0.3s',
          zIndex: 10,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-gold)'
          ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,241,234,0.35)'
          ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-paper)'
        }}
      >
        Mulai Sekarang
      </Link>

      {/* LEFT tagline */}
      <p style={{
        position: 'absolute', left: '2rem', bottom: '50%',
        transform: 'translateY(50%)',
        fontSize: '0.625rem', letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(245,241,234,0.6)',
        zIndex: 10,
      }}>
        Build · Market
      </p>

      {/* RIGHT tagline */}
      <p style={{
        position: 'absolute', right: '2rem', bottom: '50%',
        transform: 'translateY(50%)',
        fontSize: '0.625rem', letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(245,241,234,0.6)',
        zIndex: 10,
      }}>
        Automate · Scale
      </p>

      {/* CENTER — Logo mark + wordmark */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '1.25rem',
        zIndex: 10, position: 'relative',
      }}>
        {/* Meridian mark SVG */}
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle */}
          <circle cx="36" cy="36" r="34" stroke="rgba(184,145,42,0.35)" strokeWidth="0.5"/>
          {/* Inner circle */}
          <circle cx="36" cy="36" r="22" stroke="rgba(184,145,42,0.2)" strokeWidth="0.5"/>
          {/* Vertical meridian line */}
          <line x1="36" y1="4" x2="36" y2="68" stroke="rgba(184,145,42,0.6)" strokeWidth="0.75"/>
          {/* Dashed horizon */}
          <line x1="4" y1="36" x2="68" y2="36" stroke="rgba(184,145,42,0.4)" strokeWidth="0.75" strokeDasharray="4 4"/>
          {/* Center dot */}
          <circle cx="36" cy="36" r="3" fill="#B8912A"/>
        </svg>

        {/* Wordmark */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            color: 'var(--color-paper)',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            Zaresh Meridian
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            color: 'rgba(245,241,234,0.4)',
            letterSpacing: '0.1em',
            marginTop: '0.25rem',
          }}>
            & Co.
          </div>
        </div>
      </div>

      {/* BOTTOM CENTER — tagline */}
      <p style={{
        position: 'absolute', bottom: '2.5rem',
        left: '50%', transform: 'translateX(-50%)',
        fontSize: '0.6875rem', letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(245,241,234,0.45)',
        textAlign: 'center', whiteSpace: 'nowrap',
        zIndex: 10,
      }}>
        Bisnis yang tumbuh saat kamu istirahat.
      </p>
    </section>
  )
}