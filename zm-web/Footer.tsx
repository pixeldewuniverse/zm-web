import Link from 'next/link'

const FOOTER_LINKS = {
  Ekosistem: [
    { label: 'Studio', href: '/studio' },
    { label: 'Academy', href: '/academy' },
    { label: 'Products', href: '/products' },
  ],
  Tools: [
    { label: 'Write', href: 'https://write.zareshmeridian.com' },
    { label: 'Plan', href: 'https://tools.zareshmeridian.com' },
    { label: 'Lens', href: 'https://tools.zareshmeridian.com' },
    { label: 'Desk', href: 'https://tools.zareshmeridian.com' },
    { label: 'Bloom', href: 'https://tools.zareshmeridian.com' },
  ],
  Perusahaan: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Karir', href: '/karir' },
    { label: 'Kontak', href: '/kontak' },
  ],
} as const

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-ink-2)',
        borderTop: '1px solid rgba(245, 241, 234, 0.06)',
        padding: '5rem 3rem 2.5rem',
      }}
    >
      {/* Top grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '3rem',
          marginBottom: '4rem',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--color-gold)',
              marginBottom: '0.25rem',
            }}
          >
            Zaresh Meridian
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              fontStyle: 'italic',
              color: 'rgba(245,241,234,0.3)',
              marginBottom: '1.25rem',
            }}
          >
            & Co.
          </div>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(245, 241, 234, 0.4)',
              lineHeight: 1.8,
              maxWidth: '280px',
            }}
          >
            Membantu bisnis tumbuh secara terukur melalui strategi digital yang cerdas — sekaligus membekali perempuan dengan skill dan keberanian untuk memiliki income sendiri.
          </p>

          {/* Social */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            {['Instagram', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,241,234,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = 'var(--color-gold)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = 'rgba(245,241,234,0.3)')
                }
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        {Object.entries(FOOTER_LINKS).map(([group, links]) => (
          <div key={group}>
            <div
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(245,241,234,0.25)',
                marginBottom: '1.25rem',
              }}
            >
              {group}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'rgba(245, 241, 234, 0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = 'var(--color-paper)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = 'rgba(245,241,234,0.45)')
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(245, 241, 234, 0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '0.6875rem', color: 'rgba(245, 241, 234, 0.18)' }}>
          © {new Date().getFullYear()} Zaresh Meridian & Co. — Bali, Indonesia
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy', 'Terms of Use'].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                fontSize: '0.6875rem',
                color: 'rgba(245, 241, 234, 0.18)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
