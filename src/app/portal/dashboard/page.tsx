'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { api } from '@/lib/api'
import type { Project, User } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const

const STATUS_LABEL: Record<string, string> = {
  pending: 'Menunggu Review',
  in_review: 'Dalam Review',
  revision_requested: 'Revisi Diminta',
  revised: 'Sudah Direvisi',
  approved: 'Disetujui',
}

const STATUS_COLOR: Record<string, string> = {
  pending: 'rgba(245,241,234,0.35)',
  in_review: 'var(--color-studio)',
  revision_requested: '#f59e0b',
  revised: 'var(--color-academy)',
  approved: 'var(--color-academy)',
}

export default function PortalDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadData = useCallback(async () => {
    const token = typeof window !== 'undefined' ? sessionStorage.getItem('zm_token') : null
    if (!token) { router.replace('/portal'); return }

    api.setToken(token)
    try {
      const stored = sessionStorage.getItem('zm_user')
      if (stored) setUser(JSON.parse(stored))

      const res = await api.getProjects()
      setProjects(res.data)
    } catch {
      setError('Gagal memuat data. Silakan muat ulang halaman.')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => { loadData() }, [loadData])

  function handleLogout() {
    sessionStorage.removeItem('zm_token')
    sessionStorage.removeItem('zm_user')
    router.replace('/portal')
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ink)' }}>
        <p style={{ color: 'rgba(245,241,234,0.3)', fontSize: '0.875rem', letterSpacing: '0.1em' }}>Memuat...</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-ink)' }}>
      {/* Top bar */}
      <header style={{
        borderBottom: '1px solid rgba(245,241,234,0.06)',
        padding: '1.25rem 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.125rem',
            fontWeight: 600, letterSpacing: '0.06em', color: 'var(--color-gold)',
          }}>
            Zaresh Meridian
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {user && (
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,241,234,0.4)' }}>
              {user.full_name}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              background: 'none', border: '1px solid rgba(245,241,234,0.12)',
              color: 'rgba(245,241,234,0.4)', fontSize: '0.6875rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '0.5rem 1rem', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Keluar
          </button>
        </div>
      </header>

      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="label-section" style={{ marginBottom: '2.5rem' }}>Dashboard Klien</p>

          {error && (
            <p style={{ color: '#e87a50', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{error}</p>
          )}

          {projects.length === 0 ? (
            <div style={{
              padding: '4rem', textAlign: 'center',
              background: 'var(--color-ink-2)',
              border: '1px solid rgba(245,241,234,0.06)',
            }}>
              <p style={{ color: 'rgba(245,241,234,0.35)', fontSize: '0.875rem' }}>
                Belum ada proyek aktif. Tim kami akan menambahkannya setelah onboarding.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const totalDeliverables = project.deliverables.length
  const approved = project.deliverables.filter(d => d.status === 'approved').length
  const needsAction = project.deliverables.filter(
    d => d.status === 'in_review' || d.status === 'revised'
  ).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      style={{
        background: 'var(--color-ink-2)',
        border: '1px solid rgba(245,241,234,0.06)',
        padding: '2rem',
      }}
    >
      {/* Project header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.25rem' }}>
            {project.name}
          </h2>
          {project.description && (
            <p style={{ fontSize: '0.8125rem', color: 'rgba(245,241,234,0.35)' }}>{project.description}</p>
          )}
        </div>
        <span style={{
          fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          padding: '0.375rem 0.875rem',
          background: project.status === 'active' ? 'rgba(16,185,129,0.1)' : 'rgba(245,241,234,0.05)',
          color: project.status === 'active' ? 'var(--color-academy)' : 'rgba(245,241,234,0.3)',
          border: `1px solid ${project.status === 'active' ? 'rgba(16,185,129,0.2)' : 'rgba(245,241,234,0.08)'}`,
        }}>
          {project.status === 'active' ? 'Aktif' : project.status === 'paused' ? 'Dijeda' : 'Selesai'}
        </span>
      </div>

      {/* Progress */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(245,241,234,0.35)' }}>
            {approved} / {totalDeliverables} deliverable disetujui
          </span>
          {needsAction > 0 && (
            <span style={{ fontSize: '0.75rem', color: '#f59e0b' }}>
              {needsAction} menunggu tindakanmu
            </span>
          )}
        </div>
        <div style={{ height: '2px', background: 'rgba(245,241,234,0.06)', borderRadius: '1px' }}>
          <div style={{
            height: '100%',
            width: `${totalDeliverables ? (approved / totalDeliverables) * 100 : 0}%`,
            background: 'var(--color-gold)',
            borderRadius: '1px',
            transition: 'width 0.8s ease',
          }} />
        </div>
      </div>

      {/* Deliverables list */}
      {project.deliverables.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {project.deliverables.map(d => (
            <Link
              key={d.id}
              href={`/portal/deliverables/${d.id}?project=${project.id}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.875rem 1rem',
                background: 'var(--color-ink-3)',
                textDecoration: 'none',
                border: '1px solid rgba(245,241,234,0.04)',
                transition: 'border-color 0.2s',
              }}
            >
              <span style={{ fontSize: '0.875rem', color: 'var(--color-paper)' }}>{d.title}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {d.revision_count > 0 && (
                  <span style={{ fontSize: '0.6875rem', color: 'rgba(245,241,234,0.3)' }}>
                    Rev. #{d.revision_count}
                  </span>
                )}
                <span style={{
                  fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: STATUS_COLOR[d.status] ?? 'rgba(245,241,234,0.35)',
                }}>
                  {STATUS_LABEL[d.status] ?? d.status}
                </span>
                <span style={{ color: 'rgba(245,241,234,0.2)', fontSize: '0.875rem' }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  )
}
