'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Studio', href: '/studio' },
  { label: 'Academy', href: '/academy' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Vision', href: '/vision' },
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

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled || menuOpen
            ? 'rgba(14, 13, 11, 0.96)'
            : 'linear-gradient(to bottom, rgba(14,13,11,0.8) 0%, transparent 100%)',
          backdropFilter: (scrolled || menuOpen) ? 'blur(16px)' : 'none',
          borderBottom: scrolled || menuOpen
            ? '1px solid rgba(245, 241, 234, 0.06)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px', zIndex: 110 }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem', fontWeight: 600,
            letterSpacing: '0.08em', color: 'var(--color-gold)', lineHeight: 1,
          }}>
            Zaresh Meridian
          </span>
          <span style={{
            fontSize: '0.5rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: 'rgba(245, 241, 234, 0.35)', lineHeight: 1,
          }}>
            Build · Market · Automate
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--color-gold)' : 'rgba(245, 241, 234, 0.55)',
                textDecoration: 'none', transition: 'color 0.3s',
              }}
              onMouseEnter={e => { if (pathname !== link.href) (e.target as HTMLAnchorElement).style.color = 'rgba(245,241,234,0.9)' }}
              onMouseLeave={e => { if (pathname !== link.href) (e.target as HTMLAnchorElement).style.color = 'rgba(245,241,234,0.55)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Portal CTA — desktop */}
        <Link
          href="/portal"
          className="nav-portal-cta"
          style={{
            fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '0.5rem 1.25rem',
            border: '1px solid rgba(184,145,42,0.35)',
            color: 'var(--color-gold)', textDecoration: 'none',
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

        {/* Hamburger — mobile only */}
        <button
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
          className="nav-hamburger"
          style={{
            background: 'none', border: 'none',
            color: 'var(--color-paper)', cursor: 'pointer',
            padding: '0.25rem', zIndex: 110,
            display: 'flex', flexDirection: 'column',
            gap: '5px', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--color-paper)',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--color-paper)',
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--color-paper)',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 90,
            background: 'rgba(14,13,11,0.98)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            gap: '0.25rem',
            paddingTop: '5rem',
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 7vw, 2.5rem)',
                fontWeight: 300,
                letterSpacing: '0.05em',
                color: pathname === link.href ? 'var(--color-gold)' : 'rgba(245,241,234,0.65)',
                textDecoration: 'none',
                padding: '0.6rem 2rem',
                transition: 'color 0.2s',
                animationDelay: `${i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ marginTop: '2rem' }}>
            <Link
              href="/portal"
              style={{
                fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '0.75rem 2rem',
                border: '1px solid rgba(184,145,42,0.4)',
                color: 'var(--color-gold)', textDecoration: 'none',
              }}
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
