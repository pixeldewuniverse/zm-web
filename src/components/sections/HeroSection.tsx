'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  const blob1Y = useTransform(scrollY, [0, 500], [0, -80])
  const blob2Y = useTransform(scrollY, [0, 500], [0, -140])
  const blob3Y = useTransform(scrollY, [0, 500], [0, -100])
  const logoY  = useTransform(scrollY, [0, 500], [0, -60])

  return (
    <motion.section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-ink)',
      }}
    >
      {/* Animated lights */}
      <style>{`
        @keyframes drift-1 {
          0%   { transform: translate(0, 0) scale(1); }
          25%  { transform: translate(120px, -80px) scale(1.15); }
          50%  { transform: translate(60px, 100px) scale(0.9); }
          75%  { transform: translate(-80px, 40px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-2 {
          0%   { transform: translate(0, 0) scale(1); }
          25%  { transform: translate(-100px, 60px) scale(0.85); }
          50%  { transform: translate(-40px, -90px) scale(1.2); }
          75%  { transform: translate(90px, -30px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-3 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(80px, 120px) scale(1.1); }
          66%  { transform: translate(-60px, 60px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      {/* Blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div style={{
          y: blob1Y,
          position: 'absolute', left: '10%', top: '15%',
          width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(184,145,42,0.55) 0%, rgba(184,145,42,0.15) 40%, transparent 70%)',
          filter: 'blur(40px)', borderRadius: '50%',
          animation: 'drift-1 18s ease-in-out infinite',
        }} />
        <motion.div style={{
          y: blob2Y,
          position: 'absolute', right: '10%', top: '20%',
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(212,169,62,0.45) 0%, rgba(184,145,42,0.12) 40%, transparent 70%)',
          filter: 'blur(50px)', borderRadius: '50%',
          animation: 'drift-2 24s ease-in-out infinite',
        }} />
        <motion.div style={{
          y: blob3Y,
          position: 'absolute', left: '40%', bottom: '10%',
          width: '480px', height: '480px',
          background: 'radial-gradient(ellipse, rgba(184,145,42,0.4) 0%, rgba(140,110,50,0.1) 40%, transparent 70%)',
          filter: 'blur(45px)', borderRadius: '50%',
          animation: 'drift-3 20s ease-in-out infinite',
        }} />
      </div>

      {/* LEFT tagline — hidden on mobile */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="hero-side-tag"
        style={{
          position: 'absolute', left: '2rem', top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '0.625rem', letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.5)',
          zIndex: 10,
        }}
      >
        Build · Market
      </motion.p>

      {/* RIGHT tagline — hidden on mobile */}
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="hero-side-tag"
        style={{
          position: 'absolute', right: '2rem', top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '0.625rem', letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.5)',
          zIndex: 10,
        }}
      >
        Automate · Scale
      </motion.p>

      {/* CENTER — Logo */}
      <motion.div
        style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '1.5rem',
          zIndex: 10, position: 'relative',
          y: logoY,
        }}
      >
        {/* SVG mark */}
        <motion.svg
          width="100" height="100" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle cx="36" cy="36" r="34" stroke="rgba(184,145,42,0.35)" strokeWidth="0.5"/>
          <circle cx="36" cy="36" r="22" stroke="rgba(184,145,42,0.2)" strokeWidth="0.5"/>
          <line x1="36" y1="4" x2="36" y2="68" stroke="rgba(184,145,42,0.6)" strokeWidth="0.75"/>
          <line x1="4" y1="36" x2="68" y2="36" stroke="rgba(184,145,42,0.4)" strokeWidth="0.75" strokeDasharray="4 4"/>
          <circle cx="36" cy="36" r="3" fill="#B8912A"/>
        </motion.svg>

        {/* Wordmark */}
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--color-paper)',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            Zaresh Meridian
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(14px, 2vw, 26px)',
            fontStyle: 'italic',
            color: 'rgba(245,241,234,0.35)',
            letterSpacing: '0.15em',
            marginTop: '0.5rem',
          }}>
            & Co.
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        style={{
          position: 'absolute', bottom: '2.5rem',
          left: '50%', transform: 'translateX(-50%)',
          fontSize: '0.6875rem', letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,234,0.4)',
          textAlign: 'center', whiteSpace: 'nowrap',
          zIndex: 10,
        }}
      >
        Sistem lebih kuat dari heroisme. Komunitas lebih berumur dari personal brand.
      </motion.p>
    </motion.section>
  )
}
