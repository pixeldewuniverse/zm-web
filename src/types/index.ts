// ─── Auth ─────────────────────────────────────────────────────────────────────

export type UserRole = 'admin' | 'studio_lead' | 'client' | 'student' | 'visitor'
export type InterestType = 'studio' | 'academy' | 'products'

export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  company?: string
  profile_picture_url?: string
  bio?: string
  interest_type?: InterestType
  email_verified_at?: string
  two_factor_enabled: boolean
  status: 'active' | 'inactive' | 'deactivated' | 'deleted'
  role: UserRole
  last_login_at?: string
  created_at: string
  updated_at: string
}

export interface AuthTokens {
  access_token: string
  refresh_token: string
  expires_in: number
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  full_name: string
  interest_type: InterestType
}

// ─── Leads / CRM ──────────────────────────────────────────────────────────────

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'negotiating' | 'won' | 'lost' | 'inactive'
export type LeadSource = 'contact_form' | 'referral' | 'linkedin' | 'instagram' | 'organic' | 'direct' | 'csv_import'
export type ServiceInterest = 'studio' | 'academy' | 'products' | 'multi'
export type BudgetRange = '<5M' | '5-20M' | '20-50M' | '50-200M' | '200M+'

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service_interest: ServiceInterest
  budget?: number
  budget_range?: BudgetRange
  source: LeadSource
  quality_score: number
  status: LeadStatus
  owner_id?: string
  last_contacted_at?: string
  created_at: string
  updated_at: string
}

export interface LeadDetail extends Lead {
  activities: LeadActivity[]
  emails: LeadEmail[]
  qualifications?: LeadQualification
}

export interface LeadActivity {
  id: string
  lead_id: string
  activity_type: 'email_sent' | 'email_opened' | 'email_clicked' | 'call_scheduled' | 'proposal_shared' | 'payment_received' | 'status_changed' | 'note_added'
  description: string
  actor_id?: string
  metadata?: Record<string, unknown>
  timestamp: string
}

export interface LeadEmail {
  id: string
  lead_id: string
  email_id: string
  subject: string
  body?: string
  direction: 'sent' | 'received'
  from_email: string
  to_email: string
  sent_at: string
  opened_at?: string
  click_count: number
}

export interface LeadQualification {
  id: string
  lead_id: string
  confirmed_budget?: number
  timeline?: 'ASAP' | '1-3 months' | '3-6 months' | '6+ months'
  decision_maker?: string
  decision_maker_role?: string
  pain_points?: string
  competition?: boolean
  qualified_at: string
}

export interface CreateLeadRequest {
  name: string
  email: string
  phone?: string
  company?: string
  service_interest: ServiceInterest
  budget_range?: BudgetRange
  source: LeadSource
  message?: string
}

// ─── Deliverables & Revisions ─────────────────────────────────────────────────

export type DeliverableStatus = 'pending' | 'in_review' | 'revision_requested' | 'revised' | 'approved'
export type RevisionType = 'Design' | 'Content' | 'Structure' | 'Other'

export interface Deliverable {
  id: string
  project_id: string
  title: string
  description?: string
  file_url?: string
  file_name?: string
  status: DeliverableStatus
  revision_count: number
  max_free_revisions: number
  approved_at?: string
  created_at: string
  updated_at: string
}

export interface Revision {
  id: string
  deliverable_id: string
  revision_number: number
  revision_type: RevisionType
  feedback: string
  attachment_url?: string
  is_additional: boolean
  additional_charge?: number
  notes?: string
  submitted_at: string
  implemented_at?: string
}

export interface CreateRevisionRequest {
  revision_type: RevisionType
  feedback: string
  attachment_url?: string
}

export interface Project {
  id: string
  client_id: string
  name: string
  description?: string
  status: 'active' | 'paused' | 'completed'
  deliverables: Deliverable[]
  created_at: string
}

// ─── API Response Wrappers ────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: true
  data: T
}

export interface ApiError {
  success: false
  error: string
  code: string
  details?: Record<string, string[]>
  timestamp: string
}

export interface PaginatedResponse<T> {
  success: true
  data: T[]
  pagination: {
    current_page: number
    total_pages: number
    per_page: number
    total: number
  }
}
