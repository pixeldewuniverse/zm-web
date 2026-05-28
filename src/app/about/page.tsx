'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEW = { once: true, margin: '-100px' } as const
const TRANSITION = { duration: 0.9, ease: EASE }

const NAME_COLS = [
  {
    label: 'Zaresh',
    accent: 'var(--color-gold)',
    body: 'Kekayaan, Kelimpahan, Kemelimpahan — tapi bukan hanya uang. Kaya dalam pilihan. Kaya dalam kebebasan waktu. Kaya dalam kepastian bisa menghidupi keluarga tanpa minta izin siapapun. Zaresh adalah kondisi emosional dari kedaulatan finansial.',
  },
  {
    label: 'Meridian',
    accent: 'var(--color-studio)',
    body: 'Sebuah garis referensi; titik navigasi. Kamu tersesat di hutan \'bagaimana cara mulai?\' Meridianmu adalah arah yang masuk akal. Bukan satu-satunya jalur — tapi jalurmu, dikalibrasi untuk posisimu sekarang.',
  },
  {
    label: '& Co.',
    accent: 'var(--color-academy)',
    body: '\'Co.\' berarti kolaborasi, kemitraan, kebersamaan. Setiap orang yang membangun income di sini bergabung dengan kolektif yang membangun masa depan yang sama. Kesuksesan kamu membuat jalur orang berikutnya lebih jelas.',
  },
]

const ARMS = [
  {
    num: '01',
    accent: 'var(--color-studio)',
    title: 'Studio',
    subtitle: 'The Proof',
    body: 'Bukti bahwa metodologi ZM benar-benar bekerja untuk masalah bisnis nyata. Bukan teori — praktik, diaudit oleh klien yang membayar. Melayani UMKM yang kesulitan eksekusi marketing, agensi yang butuh mitra teknis, brand yang ingin implementasi AI automation.',
    href: '/studio',
  },
  {
    num: '02',
    accent: 'var(--color-academy)',
    title: 'Academy',
    subtitle: 'The Bridge',
    body: 'Mengambil perempuan (atau siapapun) yang takut untuk mulai dan memindahkan mereka ke \'saya mengerti jalannya.\' Bukan kursus biasa — ini knowledge Studio yang dikodifikasi dan diskala. Komunitas agar pelajar tidak merasa sendirian.',
    href: '/academy',
  },
  {
    num: '03',
    accent: 'var(--color-products)',
    title: 'Products',
    subtitle: 'The Leverage',
    body: 'Bukti bahwa sistem scale tanpa tambahan waktu manusia. Memungkinkan builder menciptakan sesuatu yang menghasilkan revenue saat mereka tidur, mentoring, atau liburan. Write, Plan, Lens, Desk, Bloom — setiap tool satu pekerjaan.',
    href: '/products',
  },
]

const VOICE = [
  {
    title: 'Jujur',
    body: 'Tidak ada hype. Tidak ada urgensi palsu. Kalau butuh 6 bulan, kami bilang 6 bulan. Kalau sulit, kami bilang sulit.',
  },
  {
    title: 'Spesifik',
    body: 'Kami tidak bilang \'kebebasan finansial.\' Kami bilang \'Rp 50 juta per bulan recurring revenue tanpa kerja 80 jam.\' Spesifik membangun kepercayaan.',
  },
  {
    title: 'Instruktif',
    body: 'Kami tunjukkan, bukan hanya inspirasi. Framework. Cara implementasi. Tiga contoh. Di mana bisa gagal. Mengajar ke skeptis, bukan ke yang sudah percaya.',
  },
  {
    title: 'Hangat, Bukan Lembek',
    body: 'Kami peduli. Kami tidak memanjakan. Ekspektasi tinggi karena kami tahu kamu bisa memenuhinya. Rayakan usaha, bukan hanya hasil.',
  },
  {
    title: 'Indonesia Autentik',
    body: 'Ditulis untuk pengusaha Indonesia, menggunakan konteks Indonesia. Bukan menerjemahkan guru-speak bule ke bahasa Indonesia.',
  },
  {
    title: 'Anti-Guru',
    body: 'Kami tidak memposisikan siapapun sebagai tidak bisa salah. Kami tunjukkan kegagalan, pivot, taruhan yang salah. Otoritas dari sistem, bukan karisma.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Section 1: Hero / Core Belief ─────────── */}
        <section
          className="section-pad-lg"
          style={{
            background: 'var(--color-ink)',
            paddingTop: 'calc(8rem + 80px)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '3rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            >
              Keyakinan Inti
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                color: 'var(--color-paper)',
                letterSpacing: '-0.015em',
                marginBottom: '2rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              "Kebanyakan bisnis dibangun di atas kebohongan: bahwa kamu butuh ide besar, modal besar, atau jaringan besar untuk scale."
            </motion.h1>

            <motion.p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontStyle: 'italic',
                color: 'var(--color-gold)',
                lineHeight: 1.5,
                marginBottom: '2.5rem',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            >
              Kebenarannya lebih sederhana dan lebih sulit: kamu butuh sistem.
            </motion.p>

            <motion.p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.85,
                color: 'rgba(245,241,234,0.5)',
                maxWidth: '680px',
                marginBottom: '2.5rem',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
            >
              Jutaan orang punya ide bagus. Sedikit yang punya infrastruktur untuk mengubah ide menjadi income berkelanjutan. Zaresh Meridian &amp; Co. ada untuk mendemokratisasi infrastruktur itu.
            </motion.p>

            <motion.p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.8,
                color: 'var(--color-paper)',
                maxWidth: '680px',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            >
              Setiap orang yang membangun income melalui ZM membuktikan bahwa sistem bekerja. Kesuksesan mereka bukan pengecualian — itu bisa direplikasi. Dan itulah seluruh intinya.
            </motion.p>
          </div>
        </section>

        {/* ── Section 2: Name Meaning ────────────────── */}
        <section
          className="section-pad"
          style={{ background: 'var(--color-ink-2)' }}
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
              Kenapa Nama Ini Penting
            </motion.p>

            <div className="grid-3">
              {NAME_COLS.map((col, i) => (
                <motion.div
                  key={col.label}
                  style={{
                    borderTop: `2px solid ${col.accent}`,
                    paddingTop: '1.5rem',
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ ...TRANSITION, delay: i * 0.1 }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 500,
                      color: col.accent,
                      marginBottom: '1rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {col.label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.8,
                      color: 'rgba(245,241,234,0.6)',
                    }}
                  >
                    {col.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Three Arms ──────────────────── */}
        <section
          className="section-pad"
          style={{ background: 'var(--color-ink)' }}
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
              Satu Ekosistem, Tiga Titik Masuk
            </motion.p>

            <div className="grid-3">
              {ARMS.map((arm, i) => (
                <motion.div
                  key={arm.num}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ ...TRANSITION, delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        color: 'rgba(245,241,234,0.25)',
                      }}
                    >
                      {arm.num}
                    </span>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: arm.accent,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: 'var(--color-paper)',
                        lineHeight: 1.2,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {arm.title}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: arm.accent,
                        opacity: 0.8,
                      }}
                    >
                      {arm.subtitle}
                    </p>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.8,
                      color: 'rgba(245,241,234,0.55)',
                      flexGrow: 1,
                    }}
                  >
                    {arm.body}
                  </p>

                  <Link
                    href={arm.href}
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: arm.accent,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    Selengkapnya →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Brand Voice ─────────────────── */}
        <section
          className="section-pad"
          style={{ background: 'var(--color-ink-2)' }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={TRANSITION}
            >
              Bagaimana Kami Berbicara
            </motion.p>

            <motion.h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: 'var(--color-paper)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                marginBottom: '4rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.1 }}
            >
              Suara Brand
            </motion.h2>

            <div className="grid-2">
              {VOICE.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  style={{
                    borderTop: '1px solid rgba(245,241,234,0.1)',
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ ...TRANSITION, delay: i * 0.07 }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: 'var(--color-paper)',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {trait.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.75,
                      color: 'rgba(245,241,234,0.55)',
                    }}
                  >
                    {trait.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Positioning ─────────────────── */}
        <section
          className="section-pad"
          style={{
            background: 'var(--color-ink)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.p
              className="label-section"
              style={{ marginBottom: '1.5rem', display: 'inline-block' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={TRANSITION}
            >
              Positioning
            </motion.p>

            <motion.h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 300,
                color: 'var(--color-paper)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                marginBottom: '3rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.1 }}
            >
              Infrastruktur untuk income mandiri
            </motion.h2>

            <motion.blockquote
              style={{
                border: '1px solid rgba(184,145,42,0.3)',
                background: 'rgba(184,145,42,0.04)',
                padding: '3rem',
                marginBottom: '3rem',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--color-paper)',
                lineHeight: 1.7,
                letterSpacing: '-0.005em',
                textAlign: 'left',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.15 }}
            >
              "Untuk builder di seluruh Indonesia yang ingin membangun income mandiri — terhalang oleh gatekeeping, fragmentasi tool, atau isolasi — Zaresh Meridian &amp; Co. adalah ekosistem terpadu dari layanan terverifikasi, edukasi scalable, tools otomasi, dan komunitas autentik, yang menghilangkan hambatan antara ide dan eksekusi melalui sistem, bukan heroisme."
            </motion.blockquote>

            <motion.div
              style={{ textAlign: 'left' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ ...TRANSITION, delay: 0.2 }}
            >
              <p
                style={{
                  fontSize: '0.5625rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem',
                }}
              >
                Bukan
              </p>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.85,
                  color: 'rgba(245,241,234,0.5)',
                }}
              >
                Bukan platform guru lain yang menjual rahasia atau jalan pintas. Bukan pabrik kursus yang memaksimalkan enrollment. Bukan vendor SaaS terputus tanpa konteks masalah bisnis nyata. Kami perusahaan infrastruktur yang percaya sistem bekerja lebih baik dari heroisme. Dan kami membuktikannya melalui operasi kami sendiri.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Section 6: CTA ────────────────────────── */}
        <section
          className="section-pad"
          style={{
            background: 'var(--color-ink-2)',
            textAlign: 'center',
          }}
        >
          <motion.h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 300,
              color: 'var(--color-paper)',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              marginBottom: '1.5rem',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={TRANSITION}
          >
            Mulai dari Mana yang Masuk Akal Untukmu
          </motion.h2>

          <motion.p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: 'rgba(245,241,234,0.55)',
              maxWidth: '560px',
              margin: '0 auto 3rem',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...TRANSITION, delay: 0.1 }}
          >
            Studio kalau kamu butuh tim ahli sekarang. Academy kalau kamu ingin belajar dan bangun sendiri. Products kalau kamu butuh tools yang bekerja.
          </motion.p>

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
            transition={{ ...TRANSITION, delay: 0.2 }}
          >
            <Link href="/contact" className="btn-primary">
              Konsultasi dengan Studio
            </Link>
            <Link href="/academy" className="btn-ghost">
              Gabung Academy
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
