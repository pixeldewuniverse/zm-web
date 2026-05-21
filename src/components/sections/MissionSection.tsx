export default function MissionSection() {
  return (
    <section style={{
      padding: '8rem 3rem',
      borderTop: '1px solid rgba(245,241,234,0.06)',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
    }}>
      <blockquote style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 3vw, 44px)',
        fontWeight: 300, lineHeight: 1.3, fontStyle: 'italic',
        color: 'rgba(245,241,234,0.85)',
      }}>
        "Bisnis yang paling kuat adalah yang{' '}
        <span style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>tujuannya tidak bisa dibeli</span>
        {' '}oleh kompetitor manapun."
      </blockquote>

      <div>
        <p className="label-section" style={{ marginBottom: '1.5rem' }}>Filosofi</p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9, marginBottom: '2rem' }}>
          Kami percaya memiliki income sendiri, membangun bisnis digital, dan tetap hadir untuk keluarga — bukan pilihan yang saling mengorbankan.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9 }}>
          Ika adalah user pertama semua produk ZM.{' '}
          <em style={{ color: 'rgba(245,241,234,0.65)' }}>Eat our own cooking.</em>
        </p>
      </div>
    </section>
  )
}