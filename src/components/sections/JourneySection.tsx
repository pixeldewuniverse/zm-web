'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const LAYERS = [
  {
    number: '01',
    label: 'Discovery',
    tagline: 'Saya tidak tahu ini mungkin',
    happening: ['Baca case study', 'Dengar dari teman', 'Lihat konten', 'Sadar ada komunitas'],
    provided: 'Konten yang membuka kemungkinan',
  },
  {
    number: '02',
    label: 'Belonging',
    tagline: 'Ada orang seperti saya di sini',
    happening: ['Gabung workshop gratis', 'Masuk komunitas', 'Lihat cerita orang se-daerah', 'Merasa tidak sendirian'],
    provided: 'Komunitas & workshop akses gratis',
  },
  {
    number: '03',
    label: 'Learning',
    tagline: 'Saya mengerti arsitekturnya',
    happening: ['Ambil kursus Academy', 'Mungkin beli SaaS tool', 'Belajar KENAPA sistemnya bekerja', 'Dapat bukti di bisnis sendiri'],
    provided: 'Academy, Products, dan sistem yang terbukti',
  },
  {
    number: '04',
    label: 'Building',
    tagline: 'Saya sedang menciptakan sesuatu nyata',
    happening: ['Mungkin hire Studio', 'Jadi mentor Academy', 'Pakai tools untuk otomasi', 'Mulai dapat income berarti'],
    provided: 'Studio, mentorship, dan tools skala lanjut',
  },
  {
    number: '05',
    label: 'Legacy',
    tagline: 'Saya membantu orang berikutnya melihat ini mungkin',
    happening: ['Kisah mereka jadi case study', 'Mentor atau investasi di builder lain', 'Tidak lagi minta izin', 'Memberi izin ke orang lain'],
    provided: 'Platform, cerita, dan kepemimpinan komunitas',
  },
]

export default function JourneySection() {
  return (
    <section
      className="section-pad"
      style={{ background: 'var(--color-ink)', borderTop: '1px solid rgba(245,241,234,0.06)' }}
    >
      <motion.p
        className="label-section"
        style={{ marginBottom: '1rem' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        Perjalanan
      </motion.p>

      <motion.h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--color-paper)',
          marginBottom: '1.25rem',
          maxWidth: '560px',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
      >
        Bukan funnel.{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Pertumbuhan.</em>
      </motion.h2>

      <motion.p
        style={{
          fontSize: '0.875rem',
          color: 'rgba(245,241,234,0.35)',
          lineHeight: 1.8,
          marginBottom: '5rem',
          maxWidth: '480px',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        Revenue datang dari berguna di setiap layer, bukan hanya mengkonversi ke paid.
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {LAYERS.map((layer, i) => {
          const isEven = i % 2 === 1
          return (
            <motion.div
              key={layer.number}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1px 1fr',
                gap: '0',
                borderTop: '1px solid rgba(245,241,234,0.06)',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
              }}
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}
            >
              <div
                style={{
                  padding: isEven ? '0 3rem 0 0' : '0 3rem 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  ...(isEven ? { order: 3, paddingLeft: '3rem', paddingRight: '0' } : {}),
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.5rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(184,145,42,0.5)',
                    }}
                  >
                    {layer.number}
                  </span>
                  <span
                    style={{
                      fontSize: '0.5625rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                    }}
                  >
                    {layer.label}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2vw, 26px)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--color-paper)',
                    lineHeight: 1.3,
                    marginBottom: '1.25rem',
                  }}
                >
                  "{layer.tagline}"
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(245,241,234,0.35)', lineHeight: 1.7 }}>
                  <span style={{ color: 'rgba(245,241,234,0.5)', fontSize: '0.5625rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Kami sediakan
                  </span>
                  {layer.provided}
                </p>
              </div>

              <div
                style={{
                  width: '1px',
                  background: 'rgba(245,241,234,0.06)',
                  margin: '0 0',
                  ...(isEven ? { order: 2 } : {}),
                }}
              />

              <div
                style={{
                  padding: '0 3rem',
                  ...(isEven ? { order: 1, paddingLeft: '0', paddingRight: '3rem' } : { paddingLeft: '3rem', paddingRight: '0' }),
                }}
              >
                <p style={{ fontSize: '0.5625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,241,234,0.25)', marginBottom: '1rem' }}>
                  Apa yang terjadi
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {layer.happening.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '0.8125rem',
                        color: 'rgba(245,241,234,0.45)',
                        lineHeight: 1.6,
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.625rem',
                      }}
                    >
                      <span style={{ color: 'rgba(184,145,42,0.4)', fontSize: '0.5rem', flexShrink: 0 }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
