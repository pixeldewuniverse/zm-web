'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 3rem',
      borderTop: '1px solid rgba(245,241,234,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: 'var(--color-gold)',
        }}>
          Zaresh Meridian & Co.
        </div>
        <div style={{
          fontSize: '0.5625rem',
          letterSpacing: '0.2em',
          color: 'rgba(245,241,234,0.2)',
          textTransform: 'uppercase',
          marginTop: '3px',
        }}>
          Build · Market · Automate
        </div>
      </div>

      <p style={{
        fontSize: '0.625rem',
        color: 'rgba(245,241,234,0.15)',
        letterSpacing: '0.05em',
      }}>
        © {new Date().getFullYear()} Zaresh Meridian — Bali, Indonesia
      </p>
    </footer>
  )
}
