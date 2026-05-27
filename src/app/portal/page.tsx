'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { api } from '@/lib/api'
import { DEMO_CREDENTIALS, DEMO_USER } from '@/lib/demo-data'

const EASE = [0.16, 1, 0.3, 1] as const

export default function PortalLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function fillDemo() {
    setEmail(DEMO_CREDENTIALS.email)
    setPassword(DEMO_CREDENTIALS.password)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    // Demo account — bypass API
    if (
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password
    ) {
      sessionStorage.setItem('zm_token', 'demo-token')
      sessionStorage.setItem('zm_user', JSON.stringify(DEMO_USER))
      sessionStorage.setItem('zm_demo', '1')
      router.push('/portal/dashboard')
      return
    }

    try {
      const res = await api.login({ email, password })
      api.setToken(res.data.access_token)
      sessionStorage.setItem('zm_token', res.data.access_token)
      sessionStorage.setItem('zm_user', JSON.stringify(res.data.user))
      sessionStorage.removeItem('zm_demo')
      router.push('/portal/dashboard')
    } catch (err: unknown) {
      setStatus('error')
      const apiErr = err as { error?: string }
      setErrorMsg(apiErr?.error ?? 'Login gagal. Periksa email dan password kamu.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-ink)',
      padding: '2rem',
      position: 'relative',
    }}>
      <div className="grid-overlay" />

      <motion.div
        style={{
          width: '100%', maxWidth: '420px',
          position: 'relative', zIndex: 10,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'block', marginBottom: '2.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'var(--color-gold)',
          }}>
            Zaresh Meridian
          </span>
        </Link>

        <div style={{
          background: 'var(--color-ink-2)',
          border: '1px solid rgba(245,241,234,0.06)',
          padding: '2.5rem',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            fontWeight: 300,
            marginBottom: '0.5rem',
          }}>
            Client Portal
          </h1>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.4)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Masuk untuk melihat proyek dan memberikan feedback.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelStyle}>Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@kamu.com"
                style={inputStyle}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={labelStyle}>Password</span>
              <input
                required
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={inputStyle}
              />
            </label>

            {errorMsg && (
              <p style={{ fontSize: '0.8125rem', color: '#e87a50' }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary"
              style={{ opacity: status === 'loading' ? 0.6 : 1, width: '100%', textAlign: 'center' }}
            >
              {status === 'loading' ? 'Masuk...' : 'Masuk ke Portal'}
            </button>
          </form>
        </div>

        {/* Demo account hint */}
        <div style={{
          marginTop: '1.25rem',
          padding: '1rem 1.25rem',
          background: 'rgba(184,145,42,0.06)',
          border: '1px solid rgba(184,145,42,0.15)',
        }}>
          <p style={{ fontSize: '0.6875rem', color: 'rgba(245,241,234,0.45)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.625rem' }}>Demo</span>
            {' '}— gunakan akun berikut untuk mencoba portal:
          </p>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(245,241,234,0.55)', lineHeight: 2 }}>
            <span style={{ color: 'rgba(245,241,234,0.3)' }}>email</span>{' '}
            {DEMO_CREDENTIALS.email}<br />
            <span style={{ color: 'rgba(245,241,234,0.3)' }}>pass </span>{' '}
            {DEMO_CREDENTIALS.password}
          </div>
          <button
            type="button"
            onClick={fillDemo}
            style={{
              marginTop: '0.75rem',
              background: 'none',
              border: '1px solid rgba(184,145,42,0.25)',
              color: 'var(--color-gold)',
              fontSize: '0.625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.4rem 0.875rem',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(184,145,42,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
          >
            Isi Otomatis
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.75rem', color: 'rgba(245,241,234,0.25)' }}>
          Belum punya akses?{' '}
          <Link href="/contact" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
            Hubungi kami
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.625rem', letterSpacing: '0.2em',
  textTransform: 'uppercase', color: 'var(--color-gold)',
}

const inputStyle: React.CSSProperties = {
  background: 'var(--color-ink-3)',
  border: '1px solid rgba(245,241,234,0.08)',
  color: 'var(--color-paper)',
  padding: '0.875rem 1rem',
  fontSize: '0.875rem', width: '100%',
  outline: 'none', fontFamily: 'var(--font-sans)',
}
