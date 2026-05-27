'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Studio', href: '/studio' },
  { label: 'Academy', href: '/academy' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Kontak', href: '/contact' },
] as const

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.25rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled
          ? 'rgba(14, 13, 11, 0.92)'
          : 'linear-gradient(to bottom, rgba(14,13,11,0.8) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(245, 241, 234, 0.06)'
          : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: 'var(--color-gold)',
            lineHeight: 1,
          }}
        >
          Zaresh Meridian
        </span>
        <span
          style={{
            fontSize: '0.5rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245, 241, 234, 0.35)',
            lineHeight: 1,
          }}
        >
          Build · Market · Automate
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: '2.25rem', listStyle: 'none' }} aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: pathname === link.href
                ? 'var(--color-gold)'
                : 'rgba(245, 241, 234, 0.55)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => {
              if (pathname !== link.href)
                (e.target as HTMLAnchorElement).style.color = 'rgba(245,241,234,0.9)'
            }}
            onMouseLeave={(e) => {
              if (pathname !== link.href)
                (e.target as HTMLAnchorElement).style.color = 'rgba(245,241,234,0.55)'
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Portal CTA */}
      <Link
        href="/portal"
        style={{
          fontSize: '0.625rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '0.5rem 1.25rem',
          border: '1px solid rgba(184,145,42,0.35)',
          color: 'var(--color-gold)',
          textDecoration: 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(184,145,42,0.1)'
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-gold)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(184,145,42,0.35)'
        }}
      >
        Client Portal
      </Link>

      {/* Mobile hamburger — visible below md */}
      <button
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        onClick={() => setMenuOpen((v) => !v)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--color-paper)',
          cursor: 'pointer',
          fontSize: '1.25rem',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
