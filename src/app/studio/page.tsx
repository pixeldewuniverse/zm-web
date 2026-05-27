'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEWPORT = { once: true, margin: '-100px' } as const

const SERVICES = [
  {
    number: '01',
    title: 'Social Media System',
    description: 'Konten, strategi, dan jadwal penuh dalam satu sistem yang berjalan konsisten.',
  },
  {
    number: '02',
    title: 'Ads & Performance',
    description: 'Meta Ads, Google Ads, dan optimasi ROI per rupiah yang kamu keluarkan.',
  },
  {
    number: '03',
    title: 'Brand Identity',
    description: 'Visual dan suara brand yang konsisten di semua platform dan touchpoint.',
  },
  {
    number: '04',
    title: 'Email Marketing',
    description: 'Sequence, automation, dan segmentasi list yang menghasilkan pendapatan nyata.',
  },
  {
    number: '05',
    title: 'SEO & Content',
    description: 'Konten yang ditemukan, dibaca, dan dikonversi menjadi pelanggan setia.',
  },
  {
    number: '06',
    title: 'Analytics & Reporting',
    description: 'Dashboard dan laporan yang bisa diambil keputusan bisnis setiap minggu.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Audit',
    description: 'Kami telaah kondisi marketing bisnis kamu secara mendalam — celah, potensi, dan prioritas.',
  },
  {
    number: '02',
    title: 'Strategi',
    description: 'Roadmap custom sesuai tujuan bisnis, bukan template yang sama untuk semua.',
  },
  {
    number: '03',
    title: 'Eksekusi',
    description: 'Tim kami eksekusi strategi dengan presisi — konten, iklan, sistem, semuanya.',
  },
  {
    number: '04',
    title: 'Optimasi',
    description: 'Kami review, ukur, dan perbaiki setiap bulan supaya hasilnya terus meningkat.',
  },
]

export default function StudioPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            width: '100vw',
            minHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-ink)',
          }}
        >
          <style>{`
            @keyframes studio-drift-1 {
              0%   { transform: translate(0, 0) scale(1); }
              33%  { transform: translate(80px, -60px) scale(1.12); }
              66%  { transform: translate(-50px, 80px) scale(0.92); }
              100% { transform: translate(0, 0) scale(1); }
            }
            @keyframes studio-drift-2 {
              0%   { transform: translate(0, 0) scale(1); }
              33%  { transform: translate(-90px, 50px) scale(0.88); }
              66%  { transform: translate(60px, -70px) scale(1.1); }
              100% { transform: translate(0, 0) scale(1); }
            }
          `}</style>

          {/* Background blobs — gold with subtle blue tint */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', left: '8%', top: '20%',
              width: '560px', height: '560px',
              background: 'radial-gradient(ellipse, rgba(184,145,42,0.4) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
              filter: 'blur(50px)', borderRadius: '50%',
              animation: 'studio-drift-1 20s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', right: '5%', top: '30%',
              width: '480px', height: '480px',
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, rgba(184,145,42,0.1) 40%, transparent 70%)',
              filter: 'blur(55px)', borderRadius: '50%',
              animation: 'studio-drift-2 26s ease-in-out infinite',
            }} />
          </div>

          {/* Grid overlay */}
          <div className="grid-overlay" />

          {/* Content */}
          <div style={{
            position: 'relative', zIndex: 10,
            maxWidth: '760px', margin: '0 auto',
            padding: 'clamp(7rem, 15vw, 10rem) 1.5rem clamp(5rem, 10vw, 8rem)',
            textAlign: 'center',
          }}>
            <motion.p
              className="label-section"
              style={{ justifyContent: 'center', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              Studio
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 72px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--color-paper)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.01em',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            >
              Sistem Digital Marketing yang Benar —{' '}
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
                Bukan Sekadar Konten
              </em>
            </motion.h1>

            <motion.p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(245,241,234,0.5)',
                lineHeight: 1.8,
                maxWidth: '520px',
                margin: '0 auto 3rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              Kami bangun mesin pertumbuhan untuk bisnis perempuan Indonesia, bukan sekadar konten yang habis.
            </motion.p>

            <motion.div
              style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            >
              <Link href="/contact" className="btn-primary">Mulai Konsultasi</Link>
              <Link href="#layanan" className="btn-ghost">Lihat Layanan</Link>
            </motion.div>

            {/* Studio accent line */}
            <motion.div
              style={{
                width: '1px', height: '80px',
                background: 'linear-gradient(to bottom, var(--color-studio), transparent)',
                margin: '4rem auto 0',
                opacity: 0.5,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 0.5, scaleY: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
            />
          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────────────── */}
        <section id="layanan" className="section-pad">
          <motion.p
            className="label-section"
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Layanan
          </motion.p>

          <div className="grid-3">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
                style={{
                  background: 'var(--color-ink-2)',
                  padding: '2.75rem 2.25rem',
                  borderBottom: '1px solid rgba(184,145,42,0.08)',
                  transition: 'background 0.3s ease',
                }}
                whileHover={{ backgroundColor: '#1f1d19' } as never}
              >
                {/* Number + color dot row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem',
                }}>
                  <span style={{
                    fontSize: '0.5625rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(245,241,234,0.2)',
                  }}>
                    {service.number}
                  </span>
                  {/* Studio blue accent dot */}
                  <span style={{
                    display: 'inline-block',
                    width: '6px', height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-studio)',
                    boxShadow: '0 0 8px rgba(59,130,246,0.6)',
                  }} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--color-paper)',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(245,241,234,0.4)',
                  lineHeight: 1.75,
                }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ────────────────────────────────────────── */}
        <section className="section-pad" style={{
          background: 'var(--color-ink-2)',
          borderTop: '1px solid rgba(245,241,234,0.06)',
          borderBottom: '1px solid rgba(245,241,234,0.06)',
          textAlign: 'center',
        }}>
          <motion.p
            className="label-section"
            style={{ justifyContent: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Proses
          </motion.p>

          <motion.h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: '5rem',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            Bagaimana Kami{' '}
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Bekerja</em>
          </motion.h2>

          {/* Steps row */}
          <div className="grid-4 studio-steps" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Connector line */}
            <div className="step-connector" style={{
              position: 'absolute',
              top: '28px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(184,145,42,0.3) 20%, rgba(59,130,246,0.4) 80%, transparent)',
            }} />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0 1.5rem',
                  position: 'relative',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
              >
                {/* Step circle */}
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: 'var(--color-ink)',
                  border: '1px solid rgba(184,145,42,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem',
                  position: 'relative', zIndex: 1,
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.15em',
                    color: 'var(--color-gold)',
                  }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--color-paper)',
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.75rem',
                  color: 'rgba(245,241,234,0.4)',
                  lineHeight: 1.8,
                  textAlign: 'center',
                }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ────────────────────────────────────── */}
        <section
          id="konsultasi"
          className="section-pad-lg"
          style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)',
          }} />

          <motion.p
            className="label-section"
            style={{ justifyContent: 'center', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Mulai Sekarang
          </motion.p>

          <motion.h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            Siap Membangun{' '}
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
              Mesin Pertumbuhan?
            </em>
          </motion.h2>

          <motion.p
            style={{
              fontSize: '0.875rem',
              color: 'rgba(245,241,234,0.4)',
              maxWidth: '400px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            Jadwalkan konsultasi gratis dan kami akan tunjukkan strategi yang tepat untuk bisnis kamu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary">Jadwalkan Konsultasi</Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}
