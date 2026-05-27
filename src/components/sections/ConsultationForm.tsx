'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { api } from '@/lib/api'
import type { ServiceInterest, BudgetRange } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service_interest: ServiceInterest | ''
  budget_range: BudgetRange | ''
  message: string
}

const SERVICE_OPTIONS: { value: ServiceInterest; label: string; color: string }[] = [
  { value: 'studio', label: 'Studio — Digital Marketing', color: 'var(--color-studio)' },
  { value: 'academy', label: 'Academy — Kursus & Skill', color: 'var(--color-academy)' },
  { value: 'products', label: 'Products — Tools & SaaS', color: 'var(--color-products)' },
  { value: 'multi', label: 'Semua / Tidak yakin', color: 'var(--color-gold)' },
]

const BUDGET_OPTIONS: { value: BudgetRange; label: string }[] = [
  { value: '<5M', label: 'Di bawah Rp 5 juta' },
  { value: '5-20M', label: 'Rp 5 – 20 juta' },
  { value: '20-50M', label: 'Rp 20 – 50 juta' },
  { value: '50-200M', label: 'Rp 50 – 200 juta' },
  { value: '200M+', label: 'Di atas Rp 200 juta' },
]

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', company: '',
    service_interest: '', budget_range: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.service_interest) {
      setErrorMsg('Pilih layanan yang kamu minati.')
      return
    }
    setStatus('loading')
    setErrorMsg('')

    try {
      await api.createLead({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        service_interest: form.service_interest as ServiceInterest,
        budget_range: form.budget_range as BudgetRange || undefined,
        message: form.message || undefined,
        source: 'contact_form',
      })
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--color-ink-2)',
          border: '1px solid rgba(184,145,42,0.2)',
        }}
      >
        <div style={{
          width: '48px', height: '48px',
          borderRadius: '50%',
          border: '1px solid var(--color-gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: 'var(--color-gold)', fontSize: '1.25rem',
        }}>
          ✓
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.875rem',
          fontWeight: 300, marginBottom: '1rem',
        }}>
          Pesan kamu sudah diterima
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,241,234,0.45)', lineHeight: 1.8 }}>
          Kami akan menghubungi kamu dalam 1–2 hari kerja untuk konsultasi awal.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Name + Email */}
      <div className="form-grid-2">
        <label style={fieldWrap}>
          <span style={labelStyle}>Nama Lengkap *</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={e => update('name', e.target.value)}
            placeholder="Nama kamu"
            style={inputStyle}
          />
        </label>
        <label style={fieldWrap}>
          <span style={labelStyle}>Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="email@kamu.com"
            style={inputStyle}
          />
        </label>
      </div>

      {/* Phone + Company */}
      <div className="form-grid-2">
        <label style={fieldWrap}>
          <span style={labelStyle}>Nomor WhatsApp</span>
          <input
            type="tel"
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
            placeholder="+62 812 3456 7890"
            style={inputStyle}
          />
        </label>
        <label style={fieldWrap}>
          <span style={labelStyle}>Nama Bisnis / Perusahaan</span>
          <input
            type="text"
            value={form.company}
            onChange={e => update('company', e.target.value)}
            placeholder="Nama bisnis kamu"
            style={inputStyle}
          />
        </label>
      </div>

      {/* Service Interest */}
      <div style={fieldWrap}>
        <span style={labelStyle}>Layanan yang kamu minati *</span>
        <div className="form-grid-2" style={{ gap: '0.5rem' }}>
          {SERVICE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => update('service_interest', opt.value)}
              style={{
                padding: '0.875rem 1rem',
                background: form.service_interest === opt.value
                  ? 'rgba(184,145,42,0.12)'
                  : 'var(--color-ink-3)',
                border: `1px solid ${form.service_interest === opt.value ? opt.color : 'rgba(245,241,234,0.08)'}`,
                color: form.service_interest === opt.value ? opt.color : 'rgba(245,241,234,0.55)',
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <label style={fieldWrap}>
        <span style={labelStyle}>Estimasi Anggaran</span>
        <select
          value={form.budget_range}
          onChange={e => update('budget_range', e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="">Pilih rentang anggaran</option>
          {BUDGET_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>

      {/* Message */}
      <label style={fieldWrap}>
        <span style={labelStyle}>Ceritakan kebutuhan kamu</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          placeholder="Apa tantangan bisnis kamu saat ini? Apa yang ingin kamu capai?"
          style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
        />
      </label>

      {errorMsg && (
        <p style={{ fontSize: '0.8125rem', color: '#e87a50' }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim Permintaan Konsultasi'}
      </button>
    </form>
  )
}

const fieldWrap: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: '0.5rem',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.625rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--color-gold)',
}

const inputStyle: React.CSSProperties = {
  background: 'var(--color-ink-3)',
  border: '1px solid rgba(245,241,234,0.08)',
  color: 'var(--color-paper)',
  padding: '0.875rem 1rem',
  fontSize: '0.875rem',
  width: '100%',
  outline: 'none',
  fontFamily: 'var(--font-sans)',
  transition: 'border-color 0.2s ease',
}
