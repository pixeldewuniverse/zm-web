'use client'

import { motion } from 'framer-motion'

export default function MissionSection() {
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section
      style={{
        padding: '8rem 3rem',
        borderTop: '1px solid rgba(245,241,234,0.06)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
      }}
    >
      <motion.blockquote
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 300, lineHeight: 1.3, fontStyle: 'italic',
          color: 'rgba(245,241,234,0.85)',
        }}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReduced ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
      >
        "Bisnis yang paling kuat adalah yang{' '}
        <span style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>tujuannya tidak bisa dibeli</span>
        {' '}oleh kompetitor manapun."
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReduced ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="label-section" style={{ marginBottom: '1.5rem' }}>Filosofi</p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9, marginBottom: '2rem' }}>
          Kami percaya memiliki income sendiri, membangun bisnis digital, dan tetap hadir untuk keluarga — bukan pilihan yang saling mengorbankan.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9 }}>
          Ika adalah user pertama semua produk ZM.{' '}
          <em style={{ color: 'rgba(245,241,234,0.65)' }}>Eat our own cooking.</em>
        </p>
      </motion.div>
    </section>
  )
}
