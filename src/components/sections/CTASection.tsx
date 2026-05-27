'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="section-pad-lg" style={{
      borderTop: '1px solid rgba(245,241,234,0.06)',
      textAlign: 'center',
    }}>
      <motion.p
        className="label-section"
        style={{ justifyContent: 'center', marginBottom: '2rem' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Mulai Sekarang
      </motion.p>

      <motion.h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 80px)',
          fontWeight: 300, lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        Siap tumbuh secara{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>terukur?</em>
      </motion.h2>

      <motion.p
        style={{
          fontSize: '0.875rem', color: 'rgba(245,241,234,0.4)',
          maxWidth: '360px', margin: '0 auto 3rem', lineHeight: 1.8,
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        Bergabunglah dengan perempuan Indonesia yang membangun bisnis digital bersama Zaresh Meridian.
      </motion.p>

      <motion.div
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <Link href="/contact" className="btn-primary">Mulai Konsultasi Gratis</Link>
        <Link href="/academy" className="btn-ghost">Gabung Academy</Link>
      </motion.div>
    </section>
  )
}
