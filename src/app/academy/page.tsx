'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEW = { once: true, margin: '-100px' } as const
const TRANSITION = { duration: 0.9, ease: EASE }

// ─── Data ───────────────────────────────────────────────────────────────────

const LEARN_POINTS = [
  'Struktur campaign yang benar',
  'Targeting audience yang tepat',
  'Copywriting iklan yang convert',
  'Analisis & optimasi harian',
  'Scaling budget dengan aman',
  'Retargeting & lookalike strategy',
]

const MODULES = [
  {
    id: 1,
    title: 'Fondasi Meta Ads',
    count: 5,
    lessons: [
      'Apa itu Meta Ads & kenapa bisnis kamu butuh ini',
      'Struktur akun: Business Manager & Ads Manager',
      'Mengenal campaign, ad set, dan ad',
      'Jenis-jenis objektif iklan',
      'Setup pixel dan konversi',
    ],
  },
  {
    id: 2,
    title: 'Riset Audience & Targeting',
    count: 4,
    lessons: [
      'Cara menentukan target audience yang tepat',
      'Interest targeting vs behavior targeting',
      'Custom audience dari data sendiri',
      'Membaca audience insight dengan benar',
    ],
  },
  {
    id: 3,
    title: 'Membuat Iklan yang Convert',
    count: 6,
    lessons: [
      'Framework copywriting iklan yang terbukti',
      'Desain visual yang berhenti di scroll',
      'Video ad vs image ad: kapan pakai apa',
      'Headline & primary text yang kuat',
      'A/B testing kreatif iklan',
      'Membuat ad yang terasa native, bukan promosi',
    ],
  },
  {
    id: 4,
    title: 'Launching & Monitoring',
    count: 5,
    lessons: [
      'Checklist sebelum launch campaign',
      'Metrik yang paling penting dipantau',
      'Cara membaca laporan dengan tepat',
      'Tanda-tanda iklan perlu dioptimasi',
      'Kapan membunuh iklan yang tidak perform',
    ],
  },
  {
    id: 5,
    title: 'Optimasi & Scaling',
    count: 4,
    lessons: [
      'Strategi optimasi budget harian',
      'Teknik scaling horizontal dan vertikal',
      'Mengatasi ad fatigue',
      'Mempertahankan ROAS saat scaling',
    ],
  },
  {
    id: 6,
    title: 'Studi Kasus & Praktik',
    count: 3,
    lessons: [
      'Studi kasus bisnis fashion & lifestyle',
      'Studi kasus bisnis jasa & coaching',
      'Workshop: bangun campaign kamu sendiri',
    ],
  },
]

const COURSE_FEATURES = [
  '6 modul + 27 video pelajaran',
  'Akses seumur hidup, termasuk update',
  'Komunitas eksklusif peserta',
  'Template & swipe file iklan',
  'Sertifikat penyelesaian',
]

const TESTIMONIALS = [
  {
    quote:
      'Setelah ikut Meta Ads Mastery, ROAS toko saya naik dari 1,8x jadi 4,2x dalam 6 minggu. Strategi yang diajarkan benar-benar praktis dan langsung bisa dipraktikkan.',
    name: 'Rina Kusuma',
    result: 'ROAS naik 2,4x dalam 6 minggu',
  },
  {
    quote:
      'Saya yang sebelumnya takut buang uang di iklan sekarang confident manage budget Rp 5 juta/bulan sendiri. Modul targeting-nya beneran membuka mata.',
    name: 'Sari Rahayu',
    result: 'Hemat biaya agency Rp 3 juta/bulan',
  },
  {
    quote:
      'Produk digital saya terjual 200+ copy hanya dari satu campaign yang saya buat sendiri setelah selesai kursus ini. Worth it banget.',
    name: 'Dewi Anggraini',
    result: '200+ penjualan dari 1 campaign',
  },
]

const FAQS = [
  {
    q: 'Apakah kursus ini cocok untuk pemula?',
    a: 'Ya. Kursus ini dirancang dari nol — kamu tidak perlu pengalaman iklan sebelumnya. Kami mulai dari struktur dasar Meta Ads sampai strategi scaling yang advanced.',
  },
  {
    q: 'Berapa lama saya punya akses ke materi?',
    a: 'Akses seumur hidup. Setelah beli sekali, kamu bisa kembali kapanpun — termasuk semua update materi di masa depan tanpa biaya tambahan.',
  },
  {
    q: 'Apakah ada refund jika tidak puas?',
    a: 'Ya, kami memberikan garansi uang kembali 30 hari tanpa pertanyaan. Jika kamu sudah menonton semua modul dan tidak merasakan manfaat, kami kembalikan penuh.',
  },
  {
    q: 'Saya perlu budget iklan berapa untuk praktik?',
    a: 'Kamu bisa mulai praktik dengan budget mulai dari Rp 50.000/hari. Yang penting adalah memahami strukturnya dulu, bukan besarnya budget.',
  },
  {
    q: 'Apakah ada sesi live atau tanya jawab?',
    a: 'Materi berupa video on-demand yang bisa ditonton kapan saja. Kamu juga mendapat akses ke komunitas eksklusif peserta di mana kamu bisa bertanya dan berdiskusi.',
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function ModuleAccordion({
  module,
  isOpen,
  onToggle,
  index,
}: {
  module: (typeof MODULES)[number]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ ...TRANSITION, delay: index * 0.06 }}
      style={{
        borderBottom: '1px solid rgba(245,241,234,0.07)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.2em',
              color: 'var(--color-academy)',
              flexShrink: 0,
              minWidth: '28px',
            }}
          >
            {String(module.id).padStart(2, '0')}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.0625rem',
              fontWeight: 400,
              color: 'var(--color-paper)',
              lineHeight: 1.3,
            }}
          >
            {module.title}
          </span>
          <span
            style={{
              fontSize: '0.6875rem',
              color: 'rgba(245,241,234,0.3)',
              flexShrink: 0,
            }}
          >
            {module.count} pelajaran
          </span>
        </div>
        <span
          style={{
            color: 'var(--color-academy)',
            fontSize: '1.25rem',
            fontWeight: 300,
            lineHeight: 1,
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            display: 'inline-block',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: '0 0 1.5rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}
            >
              {module.lessons.map((lesson, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.8125rem',
                    color: 'rgba(245,241,234,0.5)',
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--color-academy)',
                      flexShrink: 0,
                      marginTop: '0.4em',
                      opacity: 0.6,
                    }}
                  />
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FaqAccordion({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof FAQS)[number]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ ...TRANSITION, delay: index * 0.07 }}
      style={{
        borderBottom: '1px solid rgba(245,241,234,0.07)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '1.5rem',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontSize: '0.9375rem',
            color: 'var(--color-paper)',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            color: 'var(--color-gold)',
            fontSize: '1.25rem',
            fontWeight: 300,
            lineHeight: 1,
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            display: 'inline-block',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(245,241,234,0.5)',
                lineHeight: 1.8,
                paddingBottom: '1.5rem',
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AcademyPage() {
  // Module accordion state — track which module ID is open (null = all closed)
  const [openModule, setOpenModule] = useState<number | null>(null)
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleModule = (id: number) =>
    setOpenModule((prev) => (prev === id ? null : id))
  const toggleFaq = (idx: number) =>
    setOpenFaq((prev) => (prev === idx ? null : idx))

  return (
    <>
      {/* Sticky mobile CTA media query */}
      <style>{`
        .sticky-mobile-cta { display: none; }
        @media (max-width: 767px) {
          .sticky-mobile-cta {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: var(--color-ink-2);
            border-top: 1px solid rgba(184,145,42,0.2);
            padding: 0.875rem 1.5rem;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
          }
        }
        @keyframes academy-drift-1 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(-70px, 50px) scale(1.08); }
          66%  { transform: translate(60px, -60px) scale(0.94); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes academy-drift-2 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(80px, -40px) scale(0.9); }
          66%  { transform: translate(-50px, 70px) scale(1.12); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      <Navbar />

      <main>
        {/* ── HERO ────────────────────────────────────────────── */}
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
          {/* Background blobs — academy green */}
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
                left: '-5%',
                top: '25%',
                width: '580px',
                height: '580px',
                background:
                  'radial-gradient(ellipse, rgba(16,185,129,0.28) 0%, rgba(16,185,129,0.06) 45%, transparent 70%)',
                filter: 'blur(55px)',
                borderRadius: '50%',
                animation: 'academy-drift-1 22s ease-in-out infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '0%',
                top: '15%',
                width: '500px',
                height: '500px',
                background:
                  'radial-gradient(ellipse, rgba(184,145,42,0.22) 0%, rgba(16,185,129,0.08) 40%, transparent 70%)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                animation: 'academy-drift-2 28s ease-in-out infinite',
              }}
            />
          </div>

          {/* Grid overlay */}
          <div className="grid-overlay" />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '760px',
              margin: '0 auto',
              padding: '10rem 3rem 8rem',
              textAlign: 'center',
            }}
          >
            <motion.p
              className="label-section"
              style={{ justifyContent: 'center', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              Academy — The Bridge
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
              Dari{' '}
              <em style={{ color: 'var(--color-academy)', fontStyle: 'italic' }}>
                "Saya Takut Mulai"
              </em>
              {' '}ke "Saya Mengerti Jalannya"
            </motion.h1>

            <motion.p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(245,241,234,0.5)',
                lineHeight: 1.8,
                maxWidth: '540px',
                margin: '0 auto 1.25rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              Academy mengambil pelajaran nyata dari proyek Studio — bukan teori — dan mengubahnya menjadi framework yang bisa dipelajari dan dijalankan oleh siapapun.
            </motion.p>

            <motion.p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(245,241,234,0.25)',
                lineHeight: 1.7,
                maxWidth: '460px',
                margin: '0 auto 3rem',
                fontStyle: 'italic',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            >
              Mentor, bukan sales. Komunitas agar tidak merasa sendirian. Target: first revenue dalam 6–12 minggu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            >
              <Link href="#kursus" className="btn-primary">
                Lihat Kursus
              </Link>
            </motion.div>

            {/* Academy accent line */}
            <motion.div
              style={{
                width: '1px',
                height: '80px',
                background:
                  'linear-gradient(to bottom, var(--color-academy), transparent)',
                margin: '4rem auto 0',
                opacity: 0.45,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 0.45, scaleY: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
            />
          </div>
        </section>

        {/* ── FEATURED COURSE ─────────────────────────────────── */}
        <section
          id="kursus"
          style={{ padding: '8rem 3rem', maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Section label */}
          <motion.p
            className="label-section"
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
          >
            Kursus Unggulan
          </motion.p>

          {/* Two-column layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) 360px',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* ── LEFT: Course Detail ───────────────────────── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={TRANSITION}
                style={{ marginBottom: '1.5rem' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 1rem',
                    border: '1px solid rgba(16,185,129,0.4)',
                    color: 'var(--color-academy)',
                    background: 'rgba(16,185,129,0.08)',
                  }}
                >
                  Kursus Unggulan
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: 'var(--color-paper)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: 0.05 }}
              >
                Meta Ads Mastery
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-academy)',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.02em',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: 0.1 }}
              >
                Dari nol sampai profitable campaign dalam 30 hari
              </motion.p>

              {/* Description */}
              <motion.p
                style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(245,241,234,0.5)',
                  lineHeight: 1.85,
                  marginBottom: '2.5rem',
                  maxWidth: '560px',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: 0.15 }}
              >
                Kursus ini dirancang untuk pemilik bisnis dan freelancer perempuan yang
                ingin menguasai Meta Ads dari nol — tanpa harus bergantung pada agency
                mahal. Kamu akan belajar cara membangun, menjalankan, dan mengoptimasi
                campaign yang benar-benar menghasilkan, bukan sekadar menambah reach.
              </motion.p>

              {/* What you'll learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: 0.2 }}
                style={{ marginBottom: '3rem' }}
              >
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,241,234,0.35)',
                    marginBottom: '1.25rem',
                  }}
                >
                  Yang akan kamu pelajari
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem 2rem',
                  }}
                >
                  {LEARN_POINTS.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.875rem',
                        color: 'rgba(245,241,234,0.65)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--color-academy)',
                          fontWeight: 500,
                          flexShrink: 0,
                          fontSize: '0.75rem',
                          marginTop: '0.1em',
                        }}
                      >
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Modules accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: 0.25 }}
              >
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,241,234,0.35)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Kurikulum
                </p>
                <div
                  style={{
                    borderTop: '1px solid rgba(245,241,234,0.07)',
                  }}
                >
                  {MODULES.map((mod, i) => (
                    <ModuleAccordion
                      key={mod.id}
                      module={mod}
                      isOpen={openModule === mod.id}
                      onToggle={() => toggleModule(mod.id)}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: Pricing Card (sticky on desktop) ───── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.15 }}
              style={{ position: 'sticky', top: '6rem' }}
            >
              <div
                style={{
                  background: 'var(--color-ink-2)',
                  border: '1px solid rgba(184,145,42,0.2)',
                  padding: '2.5rem 2rem',
                }}
              >
                {/* Access label */}
                <p
                  style={{
                    fontSize: '0.5625rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--color-academy)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Akses Seumur Hidup
                </p>

                {/* Prices */}
                <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '2.25rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      color: 'var(--color-paper)',
                      lineHeight: 1,
                    }}
                  >
                    Rp 997.000
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.625rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.625rem',
                      background: 'rgba(16,185,129,0.15)',
                      border: '1px solid rgba(16,185,129,0.35)',
                      color: 'var(--color-academy)',
                    }}
                  >
                    50% OFF
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(245,241,234,0.3)',
                    textDecoration: 'line-through',
                    marginBottom: '2rem',
                  }}
                >
                  Rp 1.997.000
                </p>

                {/* Feature list */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid rgba(245,241,234,0.07)',
                  }}
                >
                  {COURSE_FEATURES.map((feat, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.8125rem',
                        color: 'rgba(245,241,234,0.6)',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--color-academy)',
                          fontWeight: 500,
                          flexShrink: 0,
                          fontSize: '0.75rem',
                        }}
                      >
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Link
                  href="#"
                  className="btn-primary"
                  style={{ display: 'block', textAlign: 'center', width: '100%' }}
                >
                  Daftar Sekarang
                </Link>

                {/* Guarantee note */}
                <p
                  style={{
                    fontSize: '0.6875rem',
                    color: 'rgba(245,241,234,0.3)',
                    textAlign: 'center',
                    marginTop: '1rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  30-hari uang kembali
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────── */}
        <section
          style={{
            padding: '8rem 3rem',
            background: 'var(--color-ink-2)',
            borderTop: '1px solid rgba(245,241,234,0.06)',
            borderBottom: '1px solid rgba(245,241,234,0.06)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '4rem' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={TRANSITION}
            >
              Hasil Nyata
            </motion.p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                background: 'rgba(245,241,234,0.06)',
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ ...TRANSITION, delay: i * 0.1 }}
                  style={{
                    background: 'var(--color-ink-2)',
                    padding: '2.5rem 2rem',
                  }}
                >
                  {/* Quote mark */}
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '3rem',
                      color: 'var(--color-academy)',
                      opacity: 0.3,
                      lineHeight: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    "
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(245,241,234,0.6)',
                      lineHeight: 1.8,
                      marginBottom: '2rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {t.quote}
                  </p>

                  <div>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--color-paper)',
                        fontWeight: 500,
                        marginBottom: '0.35rem',
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: '0.6875rem',
                        color: 'var(--color-academy)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t.result}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section style={{ padding: '8rem 3rem' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '3rem' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={TRANSITION}
            >
              FAQ
            </motion.p>

            <motion.h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                color: 'var(--color-paper)',
                marginBottom: '3rem',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.1 }}
            >
              Pertanyaan yang Sering Ditanya
            </motion.h2>

            <div style={{ borderTop: '1px solid rgba(245,241,234,0.07)' }}>
              {FAQS.map((item, i) => (
                <FaqAccordion
                  key={i}
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() => toggleFaq(i)}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ─────────────────────────────────────── */}
        <section
          style={{
            padding: '10rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16,185,129,0.07) 0%, transparent 70%)',
            }}
          />

          <motion.p
            className="label-section"
            style={{ justifyContent: 'center', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
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
              position: 'relative',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.1 }}
          >
            Mulai Belajar{' '}
            <em style={{ color: 'var(--color-academy)', fontStyle: 'italic' }}>
              Hari Ini
            </em>
          </motion.h2>

          <motion.p
            style={{
              fontSize: '0.875rem',
              color: 'rgba(245,241,234,0.4)',
              maxWidth: '420px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.2 }}
          >
            Bergabung bersama ratusan perempuan yang sudah membuktikan bahwa bisnis
            digital bisa dikelola sendiri dengan skill yang tepat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.3 }}
          >
            <Link href="#" className="btn-primary">
              Daftar Meta Ads Mastery
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* ── STICKY MOBILE CTA ───────────────────────────────── */}
      <div className="sticky-mobile-cta">
        <div>
          <p
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,241,234,0.4)',
              marginBottom: '0.2rem',
            }}
          >
            Meta Ads Mastery
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              fontWeight: 300,
              color: 'var(--color-paper)',
              lineHeight: 1,
            }}
          >
            Rp 997.000
          </p>
        </div>
        <Link href="#" className="btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          Daftar Sekarang
        </Link>
      </div>
    </>
  )
}
