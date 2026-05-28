'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const EASE = [0.16, 1, 0.3, 1] as const
const VIEWPORT = { once: true, margin: '-80px' } as const

const YEARS = [
  {
    year: 'Tahun 1',
    score: 32,
    label: 'Fondasi',
    desc: 'Sistem terdokumentasi, council terbentuk, revenue otomatis pertama aktif.',
    metrics: ['8 dari 12 playbook terdokumentasi', '5 pemimpin council aktif', '300+ anggota Academy', '500+ pengguna SaaS', 'Rp 23jt dari sistem otomatis'],
  },
  {
    year: 'Tahun 2',
    score: 52,
    label: 'Pertumbuhan',
    desc: 'Komunitas memimpin sebagian besar inisiatif, Products mulai scale sendiri.',
    metrics: ['Community leads 70% keputusan', 'Semua 12 playbook aktif', 'Academy punya peer mentor', '5 klien retainer Studio', 'Products self-sustaining'],
  },
  {
    year: 'Tahun 3',
    score: 68,
    label: 'Kematangan',
    desc: 'Keputusan mengikuti framework, founders fokus strategi bukan eksekusi.',
    metrics: ['50%+ revenue dari sistem otomatis', 'Founders hanya di strategi', 'Produk baru dari feedback komunitas', '68% keputusan tanpa founder', '1,000+ anggota Academy'],
  },
  {
    year: 'Tahun 4',
    score: 81,
    label: 'Scale',
    desc: 'Founders hanya sebagai advisor, tim manajemen menjalankan operasional harian.',
    metrics: ['Tim 6+ anggota', 'Council membuat keputusan anggaran', 'Founders advisors only', '81% revenue otomatis', 'Referral > outbound sales'],
  },
  {
    year: 'Tahun 5',
    score: 92,
    label: 'Warisan',
    desc: 'Founders bisa cuti 3 bulan dan bisnis tetap berjalan. Ini inheritance model.',
    metrics: ['92% founder independence', '5,000+ pengguna SaaS', 'Komunitas co-own misi', 'CEO level person memimpin operasi', 'Siap generasi founder berikutnya'],
  },
]

const METRICS = [
  {
    label: 'Income dari Sistem Otomatis',
    y1: 'Rp 23jt (18% revenue)',
    y5: 'Rp 125jt (60% revenue)',
    desc: 'SaaS subscriptions + digital products + affiliate — tanpa kerja manual founder.',
    color: 'var(--color-gold)',
  },
  {
    label: 'Sistem Terdokumentasi',
    y1: '8 dari 12 playbook',
    y5: '12 dari 12, diiterasi aktif',
    desc: 'Setiap proses yang berulang tertulis — bukan hidup di kepala seseorang.',
    color: 'var(--color-studio)',
  },
  {
    label: 'Kepemimpinan Komunitas',
    y1: '5 pemimpin inti',
    y5: '5 inti + 15+ rotasi',
    desc: 'Council membuat keputusan nyata hingga Rp 50jt tanpa input founder.',
    color: 'var(--color-academy)',
  },
  {
    label: 'Event Dipimpin Komunitas',
    y1: '3–4 per bulan',
    y5: '6+ per bulan',
    desc: 'Workshop, sesi mentoring, community call — tanpa founder sebagai host.',
    color: 'var(--color-products)',
  },
  {
    label: 'Konten dari Komunitas/Otomasi',
    y1: '35%',
    y5: '80%',
    desc: 'Kurrikulum, artikel, spotlight — dibuat komunitas atau sistem, bukan founder.',
    color: 'var(--color-gold)',
  },
  {
    label: 'Pengguna SaaS Aktif',
    y1: '500+',
    y5: '5,000+',
    desc: 'Monthly active users di semua tools: Write, Plan, Lens, Desk, Bloom.',
    color: 'var(--color-studio)',
  },
]

const PLAYBOOKS = [
  'Studio Client Onboarding',
  'Academy Curriculum Framework',
  'Product Feature Prioritization',
  'Community Moderation Standards',
  'Pricing Decision Matrix',
  'Hiring & Team Expansion',
  'Marketing Campaign Templates',
  'Revenue Share Calculation',
  'Community Council Decision Framework',
  'Content Production Pipeline',
  'Financial Review & Reporting',
  'Crisis & Exception Handling',
]

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          position: 'relative', minHeight: '70vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', background: 'var(--color-ink)',
          padding: 'clamp(8rem,15vw,12rem) 1.5rem 5rem',
          textAlign: 'center',
        }}>
          <div className="grid-overlay" />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 50% 60% at 50% 80%, rgba(184,145,42,0.1) 0%, transparent 70%)',
          }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '780px' }}>
            <motion.p className="label-section" style={{ justifyContent: 'center', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}>
              5-Year Vision
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 76px)',
                fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem',
              }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}>
              The{' '}
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Inheritance</em>
              {' '}Model
            </motion.h1>

            <motion.p
              style={{ fontSize: '0.9375rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.85, maxWidth: '600px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}>
              Dalam 5 tahun, Zaresh Meridian bukan proyek yang mati ketika foundernya kelelahan. Ini institusi hidup dengan proses terdokumentasi, tim terlatih, dan sistem yang bekerja tanpa input konstan founder.
            </motion.p>

            <motion.div
              style={{ marginTop: '3rem', display: 'inline-block', padding: '1rem 2rem', border: '1px solid rgba(184,145,42,0.2)', background: 'rgba(184,145,42,0.04)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}>
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,241,234,0.3)', marginBottom: '0.4rem' }}>
                Tes Keberhasilan Tahun 5
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontStyle: 'italic', color: 'rgba(245,241,234,0.7)' }}>
                "Bisakah kamu cuti 3 bulan dan kembali ke bisnis yang tetap berkembang?"
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Independence Timeline */}
        <section className="section-pad" style={{ background: 'var(--color-ink-2)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.p className="label-section" style={{ marginBottom: '1rem' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE }}>
              Founder Independence Score
            </motion.p>
            <motion.h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '4rem', lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}>
              Progres Menuju Bisnis yang{' '}
              <em style={{ color: 'var(--color-gold)' }}>Tidak Butuh Founder</em>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {YEARS.map((yr, i) => (
                <motion.div key={yr.year}
                  initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT} transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                  style={{
                    background: 'var(--color-ink)',
                    border: '1px solid rgba(245,241,234,0.06)',
                    padding: '1.75rem 2rem',
                    display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'center',
                  }}>
                  {/* Score */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem', fontWeight: 300,
                      color: 'var(--color-gold)', lineHeight: 1,
                    }}>
                      {yr.score}%
                    </div>
                    <div style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,241,234,0.3)', marginTop: '0.25rem' }}>
                      {yr.year}
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: 'rgba(245,241,234,0.4)', marginTop: '0.25rem' }}>
                      {yr.label}
                    </div>
                  </div>

                  <div>
                    {/* Progress bar */}
                    <div style={{ height: '2px', background: 'rgba(245,241,234,0.06)', marginBottom: '1rem', position: 'relative' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${yr.score}%` }}
                        viewport={VIEWPORT}
                        transition={{ duration: 1.2, ease: EASE, delay: i * 0.08 + 0.2 }}
                        style={{ height: '100%', background: 'linear-gradient(to right, var(--color-gold), rgba(184,145,42,0.4))' }}
                      />
                    </div>

                    <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.5)', marginBottom: '1rem', lineHeight: 1.6 }}>
                      {yr.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {yr.metrics.map(m => (
                        <span key={m} style={{
                          fontSize: '0.6875rem', padding: '0.25rem 0.75rem',
                          background: 'rgba(184,145,42,0.06)',
                          border: '1px solid rgba(184,145,42,0.12)',
                          color: 'rgba(245,241,234,0.45)',
                        }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Metrics */}
        <section className="section-pad" style={{ background: 'var(--color-ink)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.p className="label-section" style={{ marginBottom: '1rem' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE }}>
              Metrik Utama
            </motion.p>
            <motion.h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '3.5rem', lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}>
              Yang Kami Ukur
            </motion.h2>

            <div className="grid-3">
              {METRICS.map((m, i) => (
                <motion.div key={m.label}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT} transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
                  style={{
                    background: 'var(--color-ink-2)', padding: '2rem',
                    borderTop: `2px solid ${m.color}`,
                  }}>
                  <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: m.color, marginBottom: '1rem' }}>
                    {m.label}
                  </p>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.6875rem', color: 'rgba(245,241,234,0.3)' }}>Tahun 1</span>
                      <span style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.6)' }}>{m.y1}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '0.6875rem', color: 'rgba(245,241,234,0.3)' }}>Tahun 5</span>
                      <span style={{ fontSize: '0.875rem', color: m.color, fontWeight: 500 }}>{m.y5}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(245,241,234,0.35)', lineHeight: 1.7 }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 12 Playbooks */}
        <section className="section-pad" style={{ background: 'var(--color-ink-2)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.p className="label-section" style={{ marginBottom: '1rem' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE }}>
              Documented Systems Layer
            </motion.p>
            <motion.h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '0.75rem', lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}>
              12 Core Playbooks
            </motion.h2>
            <motion.p
              style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.4)', marginBottom: '3rem', maxWidth: '560px', lineHeight: 1.7 }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}>
              Setiap proses yang berulang tertulis, bukan hidup di kepala seseorang. Anggota tim baru membaca playbook, bukan mendapat pelatihan personal dari founder.
            </motion.p>

            <div className="grid-4" style={{ gap: '1px', background: 'rgba(245,241,234,0.06)' }}>
              {PLAYBOOKS.map((p, i) => (
                <motion.div key={p}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE, delay: i * 0.04 }}
                  style={{ background: 'var(--color-ink)', padding: '1.5rem 1.25rem' }}>
                  <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'rgba(184,145,42,0.35)', display: 'block', marginBottom: '0.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.6)', lineHeight: 1.5 }}>{p}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.12)' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.4)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--color-gold)' }}>Target:</span>
                {' '}Tahun 1: 8 dari 12 terdokumentasi &nbsp;·&nbsp; Tahun 2: Semua 12, aktif digunakan &nbsp;·&nbsp; Tahun 5: Living documents, diperbarui bulanan berdasarkan data
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Quote */}
        <section className="section-pad-lg" style={{ background: 'var(--color-ink)', textAlign: 'center' }}>
          <motion.div
            style={{ maxWidth: '800px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT} transition={{ duration: 0.9, ease: EASE }}>
            <p className="label-section" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
              Filosofi
            </p>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
              fontWeight: 300, lineHeight: 1.5, fontStyle: 'italic',
              color: 'rgba(245,241,234,0.7)',
              borderLeft: '2px solid rgba(184,145,42,0.3)',
              paddingLeft: '2rem', textAlign: 'left',
            }}>
              "Zaresh Meridian & Co. bukan bisnis yang dibangun untuk membuat foundernya cepat kaya. Ini bisnis yang dibangun untuk membuktikan bahwa{' '}
              <span style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>sistem lebih kuat dari heroisme</span>,
              komunitas lebih berkelanjutan dari kepribadian, dan infrastruktur melayani lebih banyak orang daripada guruisme."
            </blockquote>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
