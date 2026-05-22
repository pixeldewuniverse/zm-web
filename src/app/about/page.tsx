'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEW = { once: true, margin: '-100px' } as const
const TRANSITION = { duration: 0.9, ease: EASE }

const VALUES = [
  {
    title: 'Jujur dulu',
    body: 'Tidak ada janji palsu. Kalau something tidak cocok untuk kamu, kami akan bilang.',
  },
  {
    title: 'Eat our own cooking',
    body: 'Ika pakai semua produk ZM untuk bisnisnya sendiri. Bukan showcase, tapi proof.',
  },
  {
    title: 'Tidak ada yang harus sendirian',
    body: 'Komunitas, mentor, dan sistem support ada untuk memastikan kamu tidak stuck.',
  },
  {
    title: 'Bisnis ≠ mengorbankan keluarga',
    body: 'Kami percaya keduanya bisa berjalan beriringan kalau sistemnya benar.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────── */}
        <section
          style={{
            padding: '8rem 3rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <motion.p
            className="label-section"
            style={{ marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            About
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: placeholder image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              <div
                style={{
                  aspectRatio: '4/5',
                  background: 'var(--color-ink-2)',
                  border: '1px solid rgba(184,145,42,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Corner accents */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    width: '24px',
                    height: '24px',
                    borderTop: '1px solid rgba(184,145,42,0.6)',
                    borderLeft: '1px solid rgba(184,145,42,0.6)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    width: '24px',
                    height: '24px',
                    borderBottom: '1px solid rgba(184,145,42,0.6)',
                    borderRight: '1px solid rgba(184,145,42,0.6)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '6rem',
                    fontWeight: 300,
                    color: 'rgba(184,145,42,0.2)',
                    letterSpacing: '-0.02em',
                    userSelect: 'none',
                  }}
                >
                  Ika
                </span>
              </div>
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: 'var(--color-paper)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Ika —{' '}
                <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
                  Founder
                </span>{' '}
                Zaresh Meridian &amp; Co.
              </h1>

              <p
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: 'var(--color-paper-muted)',
                  maxWidth: '480px',
                }}
              >
                Perempuan yang belajar marketing keras-keras supaya tidak ada yang bisa
                tipu-tipu soal angka.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Story ──────────────────────────────────── */}
        <section
          style={{
            padding: '8rem 3rem',
            background: 'var(--color-ink-2)',
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={TRANSITION}
            >
              Cerita
            </motion.p>

            <motion.h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 300,
                color: 'var(--color-paper)',
                marginBottom: '3rem',
                lineHeight: 1.2,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.1 }}
            >
              Kenapa Zaresh Meridian Ada
            </motion.h2>

            {[
              `Ika mulai belajar marketing dari nol — tidak ada mentor, tidak ada bekal formal. Yang ada hanya kebutuhan mendesak untuk menghidupkan bisnis sendiri. Di tengah jalan, ia pernah kena tipu agensi yang menjanjikan bintang tapi menghasilkan laporan penuh angka tanpa makna. Dari situ ia memutuskan: satu-satunya cara adalah belajar sendiri sampai benar-benar paham, sampai tidak ada orang yang bisa membodohinya lagi dengan jargon dan grafik cantik tanpa konversi nyata.`,

              `Makin dalam ia belajar, makin jelas polanya: banyak perempuan lain yang menghadapi persis masalah yang sama. Tidak ada resources marketing yang jujur dan ramah untuk pemula. Semua terasa terlalu teknis atau terlalu mahal. Yang tersedia di internet kebanyakan konten bule yang jauh dari konteks bisnis lokal, atau kursus mahal yang isinya tipis. Ada kekosongan besar — dan kekosongan itu menyakitkan banyak orang.`,

              `Zaresh Meridian lahir bukan sebagai solusi instan, tapi sebagai jawaban sistemik. Bukan sekadar agensi yang mengerjakan marketing kamu, bukan sekadar academy yang mengajarkan teori, tapi ekosistem lengkap: Studio untuk yang butuh tim profesional, Academy untuk yang ingin belajar dan mandiri, serta Products — tools yang dipakai Ika sendiri setiap hari untuk menjalankan bisnis ini. Satu ekosistem, satu misi.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  color: 'rgba(245,241,234,0.6)',
                  marginBottom: i < 2 ? '2rem' : 0,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ ...TRANSITION, delay: 0.1 * (i + 1) }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>

        {/* ── North Star ─────────────────────────────── */}
        <section style={{ padding: '8rem 3rem' }}>
          <motion.div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              border: '1px solid rgba(184,145,42,0.35)',
              padding: '4rem 4.5rem',
              position: 'relative',
              background:
                'linear-gradient(135deg, rgba(184,145,42,0.06) 0%, rgba(184,145,42,0.02) 60%, transparent 100%)',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
          >
            {/* Decorative gold glow */}
            <div
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '240px',
                height: '240px',
                background:
                  'radial-gradient(ellipse, rgba(184,145,42,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            <p
              style={{
                fontSize: '0.5625rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '2rem',
              }}
            >
              North Star
            </p>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 300,
                color: 'var(--color-paper)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}
            >
              "Berapa perempuan yang bisa kami bantu punya income sendiri dari bisnis
              digital —{' '}
              <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
                tanpa mengorbankan keluarga?
              </span>
              "
            </p>
          </motion.div>
        </section>

        {/* ── Values ─────────────────────────────────── */}
        <section
          style={{
            padding: '8rem 3rem',
            background: 'var(--color-ink-2)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={TRANSITION}
            >
              Nilai
            </motion.p>

            <motion.h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
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
              Apa yang Kami Percaya
            </motion.h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1px',
                background: 'rgba(245,241,234,0.06)',
              }}
            >
              {VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  style={{
                    background: 'var(--color-ink-2)',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ ...TRANSITION, delay: index * 0.08 }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-gold)',
                      opacity: 0.4,
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 500,
                      color: 'var(--color-paper)',
                      lineHeight: 1.3,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.75,
                      color: 'rgba(245,241,234,0.5)',
                    }}
                  >
                    {value.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
            Kerja Sama atau Ada Pertanyaan?
          </motion.h2>

          <motion.div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.15 }}
          >
            <Link href="mailto:halo@zareshmeridian.com" className="btn-primary">
              Hubungi Kami
            </Link>
            <Link href="/studio" className="btn-ghost">
              Lihat Layanan Studio
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
