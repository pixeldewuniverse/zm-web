'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEW = { once: true, margin: '-100px' } as const
const TRANSITION = { duration: 0.9, ease: EASE }

type ToolStatus = 'Live' | 'Testing' | 'Soon'

const TOOLS: Array<{
  initial: string
  name: string
  status: ToolStatus
  tagline: string
  price: string
  description: string
  features: string[]
  cta: string
  href: string
}> = [
  {
    initial: 'W',
    name: 'Write',
    status: 'Testing',
    tagline: 'AI writing assistant untuk bisnis Indonesia.',
    price: 'Rp 99–199rb / bulan',
    description:
      'Dari caption Instagram sampai email campaign — semua dalam gaya brand kamu. Write memahami nada bicaramu dan memproduksi konten yang terasa ditulis oleh kamu, bukan robot. Sudah dipakai internal ZM Studio sebelum dirilis ke publik.',
    features: ['Brand tone customization', 'Template siap pakai (IG, email, ads)', 'Export langsung ke platform'],
    cta: 'Daftar Early Access →',
    href: '#',
  },
  {
    initial: 'P',
    name: 'Plan',
    status: 'Soon',
    tagline: 'Perencanaan marketing dan content calendar.',
    price: 'Rp 149–299rb / bulan',
    description:
      'Input target bisnis, Plan output kalender konten 30 hari yang aligned dengan goals. Tidak ada lagi kebingungan "hari ini posting apa" — Plan urus strategi, kamu fokus eksekusi.',
    features: ['Content calendar otomatis', 'Campaign planning', 'Posting schedule & reminder'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
  {
    initial: 'L',
    name: 'Lens',
    status: 'Soon',
    tagline: 'Analytics & reporting marketing dalam satu layar.',
    price: 'Rp 199–399rb / bulan',
    description:
      'Pantau semua channel tanpa pindah-pindah tab. Lens mengumpulkan data dari semua platform digitalmu dan menyajikannya dalam insight yang bisa langsung ditindaklanjuti — bukan sekadar angka.',
    features: ['Multi-platform analytics', 'Custom report builder', 'Insight otomatis mingguan'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
  {
    initial: 'D',
    name: 'Desk',
    status: 'Soon',
    tagline: 'Operasional bisnis: invoice, CRM, proposal.',
    price: 'Rp 79–149rb / bulan (atau gratis + biaya transaksi)',
    description:
      'Task, klien, invoice, dan proposal — semua dalam satu tempat. Desk menggantikan tiga sampai lima aplikasi berbeda yang selama ini bikin overhead operasionalmu membengkak.',
    features: ['Invoice & proposal generator', 'CRM sederhana', 'Task & project tracking'],
    cta: 'Daftar Waitlist →',
    href: '#',
  },
  {
    initial: 'B',
    name: 'Bloom',
    status: 'Soon',
    tagline: 'Platform edukasi untuk course creator.',
    price: 'Rp 199–399rb / bulan',
    description:
      'Dari kursus online sampai membership community — setup dalam 30 menit. ZM Academy sendiri dibangun di atas Bloom. Kami tidak menjual sesuatu yang belum kami pakai sendiri.',
    features: ['Course & membership builder', 'Payment terintegrasi', 'Student progress tracking'],
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
              Products — The Leverage
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
              Revenue Saat Kamu{' '}
              <span style={{ color: 'var(--color-products)', fontStyle: 'italic' }}>
                Tidur, Mentoring, atau Liburan
              </span>
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(245,241,234,0.55)',
                maxWidth: '560px',
                margin: '0 auto 1.25rem',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            >
              Products membuktikan sistem scale tanpa tambahan waktu manusia. Kami dogfood sendiri — setiap tool dipakai oleh Studio dan Academy sebelum dijual.
            </motion.p>

            <motion.p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(245,241,234,0.25)',
                lineHeight: 1.7,
                maxWidth: '440px',
                margin: '0 auto 2.5rem',
                fontStyle: 'italic',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
            >
              Output lebih banyak, usaha sama. Bukan trade time for money — build infrastructure.
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
                          : tool.status === 'Testing'
                          ? '1px solid rgba(184,145,42,0.4)'
                          : '1px solid rgba(245,241,234,0.15)',
                      color:
                        tool.status === 'Live'
                          ? '#10B981'
                          : tool.status === 'Testing'
                          ? 'var(--color-gold)'
                          : 'rgba(245,241,234,0.35)',
                      background:
                        tool.status === 'Live'
                          ? 'rgba(16,185,129,0.08)'
                          : tool.status === 'Testing'
                          ? 'rgba(184,145,42,0.06)'
                          : 'transparent',
                    }}
                  >
                    {tool.status === 'Live' ? '● Live' : tool.status === 'Testing' ? '◐ Internal Testing' : '○ Coming Soon'}
                  </span>
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'rgba(245,241,234,0.4)',
                    marginTop: '0.75rem',
                    letterSpacing: '0.05em',
                  }}>
                    {tool.price}
                  </p>
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
