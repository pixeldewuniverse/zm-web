'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const NODES = [
  { label: 'Studio', color: '#3B82F6', desc: 'Belajar dari masalah nyata' },
  { label: 'Academy', color: '#10B981', desc: 'Mengajarkan solusinya' },
  { label: 'Products', color: '#8B5CF6', desc: 'Menskalakan hasilnya' },
]

const GAPS = [
  {
    title: 'Tool tanpa Studio',
    body: 'Tidak tahu masalah nyata — membangun fitur yang tidak dipakai.',
    color: '#3B82F6',
  },
  {
    title: 'Kursus tanpa bukti Studio',
    body: 'Hanya teori — siswa merasakan gap antara kursus dan realita.',
    color: '#10B981',
  },
  {
    title: 'Konsultan tanpa Products',
    body: 'Revenue linear — tidak bisa scale di luar waktu founder.',
    color: '#8B5CF6',
  },
]

export default function FlywheelSection() {
  return (
    <section
      className="section-pad"
      style={{ background: 'var(--color-ink-2)', borderTop: '1px solid rgba(245,241,234,0.06)' }}
    >
      <motion.p
        className="label-section"
        style={{ marginBottom: '1rem' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        Flywheel
      </motion.p>

      <motion.h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--color-paper)',
          marginBottom: '4rem',
          maxWidth: '600px',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
      >
        Satu Sistem.{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Tiga Titik Masuk.</em>
      </motion.h2>

      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          marginBottom: '4rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
      >
        {NODES.map((node, i) => (
          <div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: i < NODES.length - 1 ? '1' : 'none' }}>
            <motion.div
              style={{
                background: 'var(--color-ink-3)',
                border: `1px solid ${node.color}33`,
                padding: '2rem 2.5rem',
                minWidth: '180px',
                position: 'relative',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
            >
              <div
                style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: node.color,
                  marginBottom: '1rem',
                  boxShadow: `0 0 8px ${node.color}`,
                }}
              />
              <p
                style={{
                  fontSize: '0.5625rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: node.color,
                  marginBottom: '0.75rem',
                }}
              >
                {node.label}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.5)', lineHeight: 1.6 }}>
                {node.desc}
              </p>
            </motion.div>

            {i < NODES.length - 1 && (
              <motion.div
                style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '48px', padding: '0 0.5rem' }}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.12 }}
                /* transformOrigin handled via CSS: origin is left */
              >
                <div style={{ flex: 1, height: '1px', background: 'rgba(184,145,42,0.25)' }} />
                <span style={{ color: 'var(--color-gold)', fontSize: '0.875rem', marginLeft: '4px', opacity: 0.7 }}>→</span>
              </motion.div>
            )}
          </div>
        ))}

        <motion.div
          style={{ display: 'flex', alignItems: 'center', padding: '0 0.5rem', minWidth: '60px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
        >
          <div style={{ flex: 1, height: '1px', background: 'rgba(184,145,42,0.25)' }} />
          <span style={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', opacity: 0.6, marginLeft: '6px', whiteSpace: 'nowrap' }}>loop</span>
        </motion.div>
      </motion.div>

      <div className="grid-3" style={{ marginBottom: '3rem' }}>
        {GAPS.map((gap, i) => (
          <motion.div
            key={gap.title}
            style={{
              background: 'var(--color-ink)',
              padding: '2rem 2.5rem',
              borderLeft: `2px solid ${gap.color}44`,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
          >
            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(232,122,80,0.6)',
                marginBottom: '0.75rem',
              }}
            >
              Tanpa integrasi
            </p>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 400,
                color: 'var(--color-paper)',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              {gap.title}
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.4)', lineHeight: 1.75 }}>
              {gap.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        style={{
          fontSize: '0.875rem',
          color: 'rgba(245,241,234,0.35)',
          lineHeight: 1.8,
          borderTop: '1px solid rgba(245,241,234,0.06)',
          paddingTop: '2rem',
          fontStyle: 'italic',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        Bersama, ketiganya{' '}
        <span style={{ color: 'rgba(245,241,234,0.65)' }}>memvalidasi, mengajarkan, dan menskala</span>
        {' '}— terus-menerus.
      </motion.p>
    </section>
  )
}
