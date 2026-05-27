'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { api } from '@/lib/api'

const EASE = [0.16, 1, 0.3, 1] as const

export default function PortalLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await api.login({ email, password })
      api.setToken(res.data.access_token)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('zm_token', res.data.access_token)
        sessionStorage.setItem('zm_user', JSON.stringify(res.data.user))
      }
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

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: 'rgba(245,241,234,0.25)' }}>
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
