'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const prefersReduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <footer style={{
      padding: '3rem',
      borderTop: '1px solid rgba(245,241,234,0.06)',
    }}>
      <motion.div
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1.5rem',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '1rem',
            fontWeight: 600, letterSpacing: '0.08em', color: 'var(--color-gold)',
          }}>Zaresh Meridian & Co.</div>
          <div style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', color: 'rgba(245,241,234,0.2)', textTransform: 'uppercase', marginTop: '3px' }}>
            Build · Market · Automate
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { label: 'Studio', href: '/studio' },
            { label: 'Academy', href: '/academy' },
            { label: 'Products', href: '/products' },
            { label: 'Instagram', href: '#' },
            { label: 'LinkedIn', href: '#' },
          ].map((link) => (
            <Link key={link.label} href={link.href} style={{
              fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(245,241,234,0.28)', textDecoration: 'none', transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-paper)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,241,234,0.28)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p style={{ fontSize: '0.625rem', color: 'rgba(245,241,234,0.15)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Zaresh Meridian — Bali, Indonesia
        </p>
      </motion.div>
    </footer>
  )
}
