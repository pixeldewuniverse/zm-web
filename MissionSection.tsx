export default function MissionSection() {
  return (
    <section
      style={{
        padding: '7.5rem 3rem',
        background: 'var(--color-ink-2)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center',
      }}
    >
      {/* Left — Quote */}
      <blockquote
        className="font-display"
        style={{
          fontSize: 'clamp(28px, 3.5vw, 46px)',
          fontWeight: 300,
          lineHeight: 1.35,
          fontStyle: 'italic',
          color: 'rgba(245,241,234,0.88)',
        }}
      >
        "Bisnis yang paling kuat adalah yang{' '}
        <strong
          style={{
            color: 'var(--color-gold)',
            fontStyle: 'normal',
            fontWeight: 400,
          }}
        >
          tujuannya tidak bisa dibeli
        </strong>{' '}
        oleh kompetitor manapun."
      </blockquote>

      {/* Right — Body */}
      <div>
        <p className="label-section" style={{ marginBottom: '1rem' }}>
          Filosofi Kami
        </p>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'rgba(245,241,234,0.48)',
            lineHeight: 1.9,
            marginBottom: '2.5rem',
          }}
        >
          Zaresh Meridian ada karena kami percaya bahwa memiliki penghasilan
          sendiri, membangun bisnis digital, dan tetap hadir untuk keluarga —
          bukan pilihan yang saling mengorbankan.
          <br />
          <br />
          Kami{' '}
          <em style={{ color: 'rgba(245,241,234,0.65)', fontStyle: 'italic' }}>
            eat our own cooking.
          </em>{' '}
          Ika adalah user pertama semua produk ZM. Setiap sistem yang kami
          ajarkan sudah kami jalankan sendiri.
        </p>

        {/* North Star box */}
        <div
          style={{
            padding: '1.75rem 2rem',
            border: '1px solid rgba(184,145,42,0.18)',
            background: 'rgba(184,145,42,0.04)',
            position: 'relative',
          }}
        >
          {/* Star label */}
          <span
            style={{
              position: 'absolute',
              top: '-0.625rem',
              left: '1.75rem',
              fontSize: '0.875rem',
              color: 'var(--color-gold)',
              background: 'var(--color-ink-2)',
              padding: '0 0.5rem',
              lineHeight: 1,
            }}
            aria-hidden
          >
            ★
          </span>

          <p
            className="font-display"
            style={{
              fontSize: '0.875rem',
              color: 'rgba(245,241,234,0.55)',
              lineHeight: 1.85,
              fontStyle: 'italic',
            }}
          >
            5 tahun dari sekarang, ZM berhasil jika ada perempuan di Sulawesi,
            Kalimantan, atau NTT yang bilang:{' '}
            <strong
              style={{ color: 'rgba(245,241,234,0.8)', fontWeight: 400 }}
            >
              "Aku bisa kasih makan anakku dari income sendiri karena belajar
              dari Zaresh Meridian."
            </strong>{' '}
            Dan bisnis ini tetap berjalan ketika Ika istirahat.
          </p>
        </div>
      </div>
    </section>
  )
}
