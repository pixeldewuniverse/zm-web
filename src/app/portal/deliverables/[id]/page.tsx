'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { api } from '@/lib/api'
import { DEMO_PROJECTS, DEMO_REVISIONS } from '@/lib/demo-data'
import type { Deliverable, Revision, RevisionType } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const

const REVISION_CHARGE = 500_000

type DeliverableWithRevisions = Deliverable & { revisions: Revision[] }

export default function DeliverablePage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const searchParams = useSearchParams()
  const projectId = searchParams.get('project') ?? ''

  const [deliverable, setDeliverable] = useState<DeliverableWithRevisions | null>(null)
  const [loading, setLoading] = useState(true)
  const [panel, setPanel] = useState<'idle' | 'revision' | 'approving'>('idle')
  const [actionStatus, setActionStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [revisionForm, setRevisionForm] = useState({ revision_type: 'Content' as RevisionType, feedback: '' })
  const [errorMsg, setErrorMsg] = useState('')

  const load = useCallback(async () => {
    const token = typeof window !== 'undefined' ? sessionStorage.getItem('zm_token') : null
    if (!token) { router.replace('/portal'); return }
    api.setToken(token)

    try {
      const isDemo = sessionStorage.getItem('zm_demo') === '1'
      if (isDemo) {
        const allDeliverables = DEMO_PROJECTS.flatMap(p => p.deliverables)
        const found = allDeliverables.find(d => d.id === params.id)
        if (!found) { setErrorMsg('Deliverable tidak ditemukan.'); setLoading(false); return }
        setDeliverable({ ...found, revisions: DEMO_REVISIONS[found.id] ?? [] })
      } else {
        const res = await api.getDeliverable(projectId, params.id)
        setDeliverable(res.data)
      }
    } catch {
      setErrorMsg('Gagal memuat deliverable.')
    } finally {
      setLoading(false)
    }
  }, [params.id, projectId, router])

  useEffect(() => { load() }, [load])

  async function handleApprove() {
    if (!deliverable) return
    setPanel('approving')
    setActionStatus('loading')
    const isDemo = typeof window !== 'undefined' && sessionStorage.getItem('zm_demo') === '1'
    try {
      if (!isDemo) await api.approveDeliverable(projectId, deliverable.id)
      setDeliverable(d => d ? { ...d, status: 'approved', approved_at: new Date().toISOString() } : d)
      setActionStatus('done')
      setPanel('idle')
    } catch {
      setActionStatus('error')
      setErrorMsg('Gagal menyetujui. Silakan coba lagi.')
    }
  }

  async function handleRevision(e: React.FormEvent) {
    e.preventDefault()
    if (!deliverable || !revisionForm.feedback.trim()) return
    setActionStatus('loading')
    const isDemo = typeof window !== 'undefined' && sessionStorage.getItem('zm_demo') === '1'
    try {
      const nextNum = deliverable.revision_count + 1
      const newRevision: Revision = {
        id: `rev-demo-${Date.now()}`,
        deliverable_id: deliverable.id,
        revision_number: nextNum,
        revision_type: revisionForm.revision_type,
        feedback: revisionForm.feedback,
        is_additional: nextNum > deliverable.max_free_revisions,
        additional_charge: nextNum > deliverable.max_free_revisions ? REVISION_CHARGE : undefined,
        submitted_at: new Date().toISOString(),
      }
      if (!isDemo) await api.requestRevision(projectId, deliverable.id, revisionForm)
      setDeliverable(d => d
        ? { ...d, status: 'revision_requested', revision_count: nextNum, revisions: [...d.revisions, newRevision] }
        : d
      )
      setActionStatus('done')
      setPanel('idle')
      setRevisionForm({ revision_type: 'Content', feedback: '' })
    } catch {
      setActionStatus('error')
      setErrorMsg('Gagal mengirim permintaan revisi. Silakan coba lagi.')
    }
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ink)' }}>
        <p style={{ color: 'rgba(245,241,234,0.3)', fontSize: '0.875rem' }}>Memuat...</p>
      </div>
    )
  }

  if (!deliverable) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ink)' }}>
        <p style={{ color: '#e87a50', fontSize: '0.875rem' }}>{errorMsg || 'Deliverable tidak ditemukan.'}</p>
      </div>
    )
  }

  const isApproved = deliverable.status === 'approved'
  const nextRevisionNumber = deliverable.revision_count + 1
  const isFreeRevision = nextRevisionNumber <= deliverable.max_free_revisions
  const canAct = !isApproved && deliverable.status !== 'revision_requested'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-ink)' }}>
      {/* Top bar */}
      <header style={{
        borderBottom: '1px solid rgba(245,241,234,0.06)',
        padding: '1.25rem 2.5rem',
        display: 'flex', alignItems: 'center', gap: '1.5rem',
      }}>
        <Link href="/portal/dashboard" style={{ color: 'rgba(245,241,234,0.4)', textDecoration: 'none', fontSize: '0.75rem' }}>
          ← Kembali
        </Link>
        <span style={{ color: 'rgba(245,241,234,0.15)' }}>|</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-paper)' }}>
          {deliverable.title}
        </span>
      </header>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <p className="label-section" style={{ marginBottom: '0.75rem' }}>Deliverable</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300 }}>
                {deliverable.title}
              </h1>
              {deliverable.description && (
                <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.4)', marginTop: '0.5rem' }}>
                  {deliverable.description}
                </p>
              )}
            </div>

            <StatusBadge status={deliverable.status} />
          </div>

          {/* File download */}
          {deliverable.file_url && (
            <div style={{
              padding: '1.25rem 1.5rem',
              background: 'var(--color-ink-2)',
              border: '1px solid rgba(245,241,234,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '1rem',
              marginBottom: '2rem',
            }}>
              <div>
                <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.25rem' }}>
                  File
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-paper)' }}>
                  {deliverable.file_name ?? 'Deliverable File'}
                </p>
              </div>
              <a
                href={deliverable.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline"
              >
                Unduh File
              </a>
            </div>
          )}

          {/* Revision history */}
          {deliverable.revisions.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,241,234,0.3)', marginBottom: '1rem' }}>
                Riwayat Revisi
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {deliverable.revisions.map(rev => (
                  <div key={rev.id} style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--color-ink-2)',
                    border: '1px solid rgba(245,241,234,0.05)',
                    borderLeft: `2px solid ${rev.is_additional ? '#f59e0b' : 'rgba(184,145,42,0.3)'}`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                        Revisi #{rev.revision_number} — {rev.revision_type}
                        {rev.is_additional && (
                          <span style={{ color: '#f59e0b', marginLeft: '0.5rem' }}>
                            (+Rp {(rev.additional_charge ?? REVISION_CHARGE).toLocaleString('id-ID')})
                          </span>
                        )}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: 'rgba(245,241,234,0.25)' }}>
                        {new Date(rev.submitted_at).toLocaleDateString('id-ID')}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.55)', lineHeight: 1.6 }}>
                      {rev.feedback}
                    </p>
                    {rev.notes && (
                      <p style={{ fontSize: '0.75rem', color: 'rgba(245,241,234,0.35)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Catatan tim: {rev.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Revision counter info */}
          <div style={{
            padding: '1rem 1.25rem',
            background: 'rgba(184,145,42,0.05)',
            border: '1px solid rgba(184,145,42,0.12)',
            marginBottom: '2rem',
            fontSize: '0.8125rem',
            color: 'rgba(245,241,234,0.45)',
            lineHeight: 1.6,
          }}>
            Revisi terpakai: <strong style={{ color: 'var(--color-gold)' }}>{deliverable.revision_count}</strong> dari{' '}
            <strong style={{ color: 'var(--color-gold)' }}>{deliverable.max_free_revisions}</strong> revisi gratis.
            {deliverable.revision_count >= deliverable.max_free_revisions && (
              <span style={{ color: '#f59e0b' }}>
                {' '}Revisi berikutnya dikenakan biaya Rp {REVISION_CHARGE.toLocaleString('id-ID')}.
              </span>
            )}
          </div>

          {/* Action buttons */}
          {canAct && (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <button
                onClick={() => setPanel('revision')}
                className="btn-ghost"
              >
                Minta Revisi
              </button>
              <button
                onClick={handleApprove}
                disabled={actionStatus === 'loading'}
                className="btn-primary"
                style={{ opacity: actionStatus === 'loading' ? 0.6 : 1 }}
              >
                {panel === 'approving' && actionStatus === 'loading' ? 'Menyetujui...' : 'Setujui Deliverable'}
              </button>
            </div>
          )}

          {isApproved && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.2)',
            }}>
              <span style={{ color: 'var(--color-academy)' }}>✓</span>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-academy)' }}>
                Deliverable ini sudah disetujui.
              </p>
            </div>
          )}

          {deliverable.status === 'revision_requested' && (
            <div style={{
              padding: '1rem 1.25rem',
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.2)',
              fontSize: '0.875rem', color: '#f59e0b',
            }}>
              Permintaan revisi kamu sedang diproses tim kami (1–3 hari kerja).
            </div>
          )}

          {/* Revision Panel */}
          <AnimatePresence>
            {panel === 'revision' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{
                  marginTop: '2rem',
                  padding: '2rem',
                  background: 'var(--color-ink-2)',
                  border: '1px solid rgba(245,241,234,0.08)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 300, marginBottom: '0.5rem' }}>
                  Minta Revisi #{nextRevisionNumber}
                </h3>
                {!isFreeRevision && (
                  <p style={{ fontSize: '0.8125rem', color: '#f59e0b', marginBottom: '1.25rem' }}>
                    ⚠️ Ini adalah revisi berbayar (Rp {REVISION_CHARGE.toLocaleString('id-ID')}). Kamu akan dikonfirmasi sebelum diproses.
                  </p>
                )}

                <form onSubmit={handleRevision} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={labelStyle}>Jenis Revisi</span>
                    <select
                      value={revisionForm.revision_type}
                      onChange={e => setRevisionForm(f => ({ ...f, revision_type: e.target.value as RevisionType }))}
                      style={inputStyle}
                    >
                      {(['Design', 'Content', 'Structure', 'Other'] as RevisionType[]).map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={labelStyle}>Feedback Spesifik *</span>
                    <textarea
                      required
                      rows={5}
                      value={revisionForm.feedback}
                      onChange={e => setRevisionForm(f => ({ ...f, feedback: e.target.value }))}
                      placeholder="Jelaskan secara spesifik apa yang ingin diubah..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    />
                  </label>

                  {errorMsg && (
                    <p style={{ fontSize: '0.8125rem', color: '#e87a50' }}>{errorMsg}</p>
                  )}

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      type="submit"
                      disabled={actionStatus === 'loading'}
                      className="btn-primary"
                      style={{ opacity: actionStatus === 'loading' ? 0.6 : 1 }}
                    >
                      {actionStatus === 'loading' ? 'Mengirim...' : 'Kirim Permintaan'}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPanel('idle'); setErrorMsg('') }}
                      className="btn-ghost"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const labels: Record<string, string> = {
    pending: 'Menunggu Review',
    in_review: 'Dalam Review',
    revision_requested: 'Revisi Diminta',
    revised: 'Sudah Direvisi',
    approved: 'Disetujui',
  }
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    pending: { bg: 'rgba(245,241,234,0.04)', border: 'rgba(245,241,234,0.1)', text: 'rgba(245,241,234,0.35)' },
    in_review: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.25)', text: 'var(--color-studio)' },
    revision_requested: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', text: '#f59e0b' },
    revised: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', text: 'var(--color-academy)' },
    approved: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', text: 'var(--color-academy)' },
  }
  const c = colors[status] ?? colors.pending

  return (
    <span style={{
      fontSize: '0.625rem', letterSpacing: '0.18em', textTransform: 'uppercase',
      padding: '0.4rem 0.875rem',
      background: c.bg, border: `1px solid ${c.border}`, color: c.text,
      flexShrink: 0,
    }}>
      {labels[status] ?? status}
    </span>
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
