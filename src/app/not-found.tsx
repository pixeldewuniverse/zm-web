import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0E0D0B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem',
        gap: '2rem',
      }}
    >
      {/* Meridian compass mark */}
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.7 }}
      >
        {/* Outer circle */}
        <circle cx="36" cy="36" r="34" stroke="rgba(184,145,42,0.35)" strokeWidth="0.5" />
        {/* Inner circle */}
        <circle cx="36" cy="36" r="22" stroke="rgba(184,145,42,0.2)" strokeWidth="0.5" />
        {/* Vertical meridian line */}
        <line x1="36" y1="4" x2="36" y2="68" stroke="rgba(184,145,42,0.6)" strokeWidth="0.75" />
        {/* Dashed horizon */}
        <line
          x1="4"
          y1="36"
          x2="68"
          y2="36"
          stroke="rgba(184,145,42,0.4)"
          strokeWidth="0.75"
          strokeDasharray="4 4"
        />
        {/* Center dot */}
        <circle cx="36" cy="36" r="3" fill="#B8912A" />
      </svg>

      {/* 404 */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 300,
          color: '#B8912A',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        404
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: '0.875rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.4)',
        }}
      >
        Halaman tidak ditemukan
      </p>

      {/* Back link */}
      <Link href="/" className="btn-ghost">
        ← Kembali ke Beranda
      </Link>
    </div>
  )
}
