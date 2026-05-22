'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEW = { once: true, margin: '-100px' } as const
const TRANSITION = { duration: 0.9, ease: EASE }

const TOOLS = [
  {
    initial: 'W',
    name: 'Write',
    status: 'Live' as const,
    tagline: 'AI writing assistant untuk bisnis.',
    description:
      'Dari caption Instagram sampai email campaign, semua dalam gaya brand kamu. Write memahami nada bicaramu dan memproduksi konten yang terasa seperti ditulis oleh kamu — bukan robot.',
    features: ['Template siap pakai', 'Tone customization', 'Export langsung'],
    cta: 'Coba Sekarang →',
    href: 'https://write.zareshmeridian.com',
  },
  {
    initial: 'P',
    name: 'Plan',
    status: 'Soon' as const,
    tagline: 'Strategi konten otomatis.',
    description:
      'Input target bisnis, Plan output kalender konten 30 hari yang aligned dengan goals. Tidak ada lagi kebingungan "hari ini posting apa" — Plan yang urus strategi, kamu fokus eksekusi.',
    features: ['Content calendar', 'Hashtag research', 'Posting schedule'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
  {
    initial: 'L',
    name: 'Lens',
    status: 'Soon' as const,
    tagline: 'Analisis performa digital dalam satu dashboard.',
    description:
      'Pantau semua channel tanpa pindah-pindah tab. Lens mengumpulkan data dari semua platform digitalmu dan menyajikannya dalam insight yang bisa langsung ditindaklanjuti.',
    features: ['Multi-platform analytics', 'Custom reports', 'Competitor tracking'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
  {
    initial: 'D',
    name: 'Desk',
    status: 'Soon' as const,
    tagline: 'Dashboard operasional bisnis digital.',
    description:
      'Task, klien, invoice — semua dalam satu tempat. Desk menggantikan tiga sampai lima aplikasi berbeda yang selama ini bikin overhead operasionalmu membengkak.',
    features: ['Client management', 'Invoice generator', 'Task tracking'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
  {
    initial: 'B',
    name: 'Bloom',
    status: 'Soon' as const,
    tagline: 'Sistem monetisasi konten.',
    description:
      'Dari digital product sampai membership — setup dalam 30 menit. Bloom dirancang supaya siapa pun bisa mulai menjual pengetahuannya secara digital tanpa butuh developer.',
    features: ['Digital product store', 'Membership system', 'Payment integration'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
]

const ECOSYSTEM_TOOLS = ['Write', 'Plan', 'Lens', 'Desk', 'Bloom']

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'var(--color-ink)',
          }}
        >
          {/* Purple blob */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-5%',
                top: '10%',
                width: '640px',
                height: '640px',
                background:
                  'radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.1) 45%, transparent 70%)',
                filter: 'blur(60px)',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '5%',
                bottom: '15%',
                width: '480px',
                height: '480px',
                background:
                  'radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 65%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
              }}
            />
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '780px',
              textAlign: 'center',
              padding: '0 3rem',
            }}
          >
            <motion.p
              className="label-section"
              style={{ justifyContent: 'center', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            >
              Products
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--color-paper)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.01em',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              Tools yang Kami Bangun untuk Kami Sendiri —{' '}
              <span style={{ color: 'var(--color-products)', fontStyle: 'italic' }}>
                Kini untuk Kamu
              </span>
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(245,241,234,0.55)',
                marginBottom: '2.5rem',
                maxWidth: '560px',
                margin: '0 auto 2.5rem',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            >
              Setiap tool lahir dari kebutuhan nyata menjalankan bisnis digital sehari-hari.
              Kami pakai sendiri dulu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            >
              <Link
                href="https://write.zareshmeridian.com"
                className="btn-primary"
              >
                Coba Write — Gratis
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Tools Grid ─────────────────────────────── */}
        <section style={{ padding: '8rem 3rem' }}>
          <motion.p
            className="label-section"
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
          >
            Tools
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(245,241,234,0.06)' }}>
            {TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: index * 0.08 }}
                style={{
                  background: 'var(--color-ink)',
                  padding: '3.5rem',
                  display: 'flex',
                  gap: '4rem',
                  alignItems: 'flex-start',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    'var(--color-ink-2)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    'var(--color-ink)')
                }
              >
                {/* Left */}
                <div style={{ flexShrink: 0, minWidth: '220px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '5rem',
                      fontWeight: 300,
                      lineHeight: 1,
                      color: 'rgba(184,145,42,0.12)',
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {tool.initial}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: 'var(--color-paper)',
                      letterSpacing: '0.04em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {tool.name}
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '999px',
                      border:
                        tool.status === 'Live'
                          ? '1px solid rgba(16,185,129,0.5)'
                          : '1px solid rgba(245,241,234,0.15)',
                      color:
                        tool.status === 'Live'
                          ? '#10B981'
                          : 'rgba(245,241,234,0.35)',
                      background:
                        tool.status === 'Live'
                          ? 'rgba(16,185,129,0.08)'
                          : 'transparent',
                    }}
                  >
                    {tool.status === 'Live' ? '● Live' : '○ Coming Soon'}
                  </span>
                </div>

                {/* Right */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-products)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {tool.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.8,
                      color: 'rgba(245,241,234,0.6)',
                      marginBottom: '2rem',
                    }}
                  >
                    {tool.description}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {tool.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          fontSize: '0.8125rem',
                          color: 'rgba(245,241,234,0.45)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'var(--color-gold)',
                            flexShrink: 0,
                            opacity: 0.6,
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tool.href}
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--color-gold-light)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--color-gold)')
                    }
                  >
                    {tool.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Ecosystem ──────────────────────────────── */}
        <section
          style={{
            padding: '8rem 3rem',
            background: 'var(--color-ink-2)',
            textAlign: 'center',
          }}
        >
          <motion.p
            className="label-section"
            style={{ justifyContent: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
          >
            Ekosistem
          </motion.p>

          <motion.h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--color-paper)',
              marginBottom: '4rem',
              lineHeight: 1.2,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.1 }}
          >
            Semua Tools, Satu Ekosistem
          </motion.h2>

          {/* Diagram */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              overflowX: 'auto',
              paddingBottom: '1rem',
              marginBottom: '3rem',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.2 }}
          >
            {ECOSYSTEM_TOOLS.map((name, i) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      border: '1px solid rgba(184,145,42,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        name === 'Write'
                          ? 'rgba(184,145,42,0.08)'
                          : 'rgba(139,92,246,0.05)',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color:
                          name === 'Write'
                            ? 'var(--color-gold)'
                            : 'rgba(139,92,246,0.7)',
                      }}
                    >
                      {name[0]}
                    </span>
                    {name === 'Write' && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#10B981',
                        }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '0.5625rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color:
                        name === 'Write'
                          ? 'var(--color-gold)'
                          : 'rgba(245,241,234,0.35)',
                    }}
                  >
                    {name}
                  </span>
                </div>

                {i < ECOSYSTEM_TOOLS.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '1px',
                        background: 'rgba(184,145,42,0.25)',
                      }}
                    />
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M0 4H6M6 4L3 1M6 4L3 7"
                        stroke="rgba(184,145,42,0.4)"
                        strokeWidth="0.75"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.p
            style={{
              fontSize: '0.875rem',
              color: 'rgba(245,241,234,0.35)',
              letterSpacing: '0.05em',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.3 }}
          >
            Dirancang untuk bekerja bersama. Satu data, banyak tools.
          </motion.p>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section
          style={{
            padding: '8rem 3rem',
            textAlign: 'center',
            background: 'var(--color-ink)',
          }}
        >
          <motion.h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--color-paper)',
              marginBottom: '2.5rem',
              lineHeight: 1.2,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
          >
            Akses Semua Tools
          </motion.h2>

          <motion.div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.15 }}
          >
            <Link href="https://write.zareshmeridian.com" className="btn-primary">
              Mulai dengan Write — Gratis
            </Link>
            <Link href="#" className="btn-ghost">
              Daftar Waitlist
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
