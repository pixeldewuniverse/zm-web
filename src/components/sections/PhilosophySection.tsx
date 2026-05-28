'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const NOT_LIST = [
  'Platform guru yang menjual "rahasia" — tidak ada rahasia; hanya kerja dan sistem',
  'Pabrik kursus yang memaksimalkan enrollment — kami peduli outcome, bukan volume',
  'Vendor tool yang menjual kompleksitas kepada orang yang butuh kesederhanaan',
  'Donasi perempuan — kami bisnis profit yang melayani pengusaha',
  'Personal brand — founder adalah operator, bukan brand; ekosistemnya yang jadi brand',
  'Skema cepat kaya — kami tolak urgensi, hype, dan janji yang butuh terus-menerus membeli',
  'Tergantung founder — kalau bisnis butuh founder untuk bekerja, itu gagal',
]

const IS_LIST = [
  'Sistem operasi untuk kemandirian digital',
  'Bukti bahwa tim kecil dan lean bisa melayani jutaan orang',
  'Jembatan dari "saya takut" ke "saya profitable"',
  'Komunitas di mana kesuksesan kamu membuat kesuksesan orang lain lebih terlihat',
  'Bisnis yang dirancang untuk berjalan tanpa perhatian konstan founder',
  'Systems-first — kami dogfood filosofi kami sendiri',
  'Anti-guru — kami tunjukkan pekerjaan kami, bukan persona kami',
]

export default function PhilosophySection() {
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
        Prinsip
      </motion.p>

      <motion.h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--color-paper)',
          marginBottom: '4rem',
          maxWidth: '560px',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
      >
        Posisi{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Yang Jelas.</em>
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          <div
            style={{
              background: 'var(--color-ink)',
              padding: '2.5rem',
              height: '100%',
            }}
          >
            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(232,122,80,0.7)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ display: 'inline-block', width: '16px', height: '1px', background: 'rgba(232,122,80,0.4)' }} />
              Bukan
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
              {NOT_LIST.map((item, i) => (
                <motion.li
                  key={i}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(245,241,234,0.4)',
                    lineHeight: 1.75,
                    padding: '1rem 0 1rem 1.25rem',
                    borderLeft: '2px solid rgba(232,122,80,0.4)',
                    borderBottom: i < NOT_LIST.length - 1 ? '1px solid rgba(245,241,234,0.04)' : 'none',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.06 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        >
          <div
            style={{
              background: 'var(--color-ink)',
              padding: '2.5rem',
              height: '100%',
            }}
          >
            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(184,145,42,0.8)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ display: 'inline-block', width: '16px', height: '1px', background: 'rgba(184,145,42,0.5)' }} />
              Kami
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
              {IS_LIST.map((item, i) => (
                <motion.li
                  key={i}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(245,241,234,0.6)',
                    lineHeight: 1.75,
                    padding: '1rem 0 1rem 1.25rem',
                    borderLeft: '2px solid rgba(184,145,42,0.6)',
                    borderBottom: i < IS_LIST.length - 1 ? '1px solid rgba(245,241,234,0.04)' : 'none',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.06 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
