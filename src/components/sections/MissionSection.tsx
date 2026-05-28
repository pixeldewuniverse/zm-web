'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const quoteY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      ref={sectionRef}
      className="mission-grid section-pad"
      style={{ borderTop: '1px solid rgba(245,241,234,0.06)' }}
    >
      <motion.blockquote
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 3vw, 44px)',
          fontWeight: 300, lineHeight: 1.3, fontStyle: 'italic',
          color: 'rgba(245,241,234,0.85)',
          y: quoteY,
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        "Jutaan orang punya ide bagus. Sedikit yang punya{' '}
        <span style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>infrastruktur</span>
        {' '}untuk mengubah ide menjadi income berkelanjutan."
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="label-section" style={{ marginBottom: '1.5rem' }}>Keyakinan Inti</p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9, marginBottom: '2rem' }}>
          Kebanyakan bisnis dibangun di atas asumsi: butuh ide besar, modal besar, atau jaringan besar untuk scale. Kebenarannya lebih sederhana — dan lebih sulit: kamu butuh <em style={{ color: 'rgba(245,241,234,0.7)' }}>sistem</em>.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9, marginBottom: '2rem' }}>
          ZM ada untuk mendemokratisasi infrastruktur itu. Bukan platform untuk para pahlawan. Tapi sistem operasi bagi orang biasa untuk mencapai hasil luar biasa — bukan melalui keberuntungan, tapi melalui sistem.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.9 }}>
          Ika adalah user pertama semua produk ZM.{' '}
          <em style={{ color: 'rgba(245,241,234,0.65)' }}>Eat our own cooking.</em>
        </p>
      </motion.div>
    </section>
  )
}
