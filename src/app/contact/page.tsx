'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ConsultationForm from '@/components/sections/ConsultationForm'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEWPORT = { once: true, margin: '-80px' } as const

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'var(--color-ink)',
            padding: 'clamp(7rem, 15vw, 12rem) 1.5rem clamp(4rem, 8vw, 6rem)',
            textAlign: 'center',
          }}
        >
          <div className="grid-overlay" />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 50% 60% at 50% 80%, rgba(184,145,42,0.12) 0%, transparent 70%)',
          }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '680px' }}>
            <motion.p
              className="label-section"
              style={{ justifyContent: 'center', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              Konsultasi
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            >
              Mari{' '}
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
                bicara
              </em>
              {' '}tentang bisnismu
            </motion.h1>

            <motion.p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(245,241,234,0.45)',
                lineHeight: 1.8,
                maxWidth: '480px',
                margin: '0 auto',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              Isi formulir di bawah dan tim kami akan menghubungi kamu dalam 1–2 hari kerja.
            </motion.p>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ padding: '6rem 1.5rem 8rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="contact-grid">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <ConsultationForm />
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            >
              <InfoBlock
                label="Waktu Respon"
                text="1–2 hari kerja (Senin–Jumat). Untuk urusan mendesak, hubungi kami via WhatsApp."
              />
              <InfoBlock
                label="Konsultasi Awal"
                text="Sesi 30 menit gratis untuk memahami kebutuhan kamu sebelum kami ajukan proposal."
              />
              <InfoBlock
                label="Yang Kami Butuhkan"
                text="Ceritakan bisnis kamu, tantangan saat ini, dan tujuan yang ingin dicapai. Semakin detail, semakin baik."
              />

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(245,241,234,0.06)' }} />

              <div>
                <span style={{
                  fontSize: '0.625rem', letterSpacing: '0.25em',
                  textTransform: 'uppercase', color: 'var(--color-gold)',
                }}>
                  Kontak Langsung
                </span>
                <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.55)', marginTop: '0.75rem', lineHeight: 1.7 }}>
                  hello@zareshmeridian.com
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(184,145,42,0.2)', paddingLeft: '1.25rem' }}>
      <span style={{
        fontSize: '0.625rem', letterSpacing: '0.25em',
        textTransform: 'uppercase', color: 'var(--color-gold)',
        display: 'block', marginBottom: '0.5rem',
      }}>
        {label}
      </span>
      <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.75 }}>
        {text}
      </p>
    </div>
  )
}
