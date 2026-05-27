import type {
  ApiResponse,
  ApiError,
  PaginatedResponse,
  AuthTokens,
  User,
  Lead,
  LeadDetail,
  CreateLeadRequest,
  Deliverable,
  Revision,
  CreateRevisionRequest,
  Project,
  LoginRequest,
  RegisterRequest,
} from '@/types'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://zareshmeridian.com/api/v1'

class ApiClient {
  private token: string | null = null

  setToken(token: string | null) {
    this.token = token
  }

  private async request<T>(
    path: string,
    init: RequestInit = {}
  ): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      ...(init.headers as Record<string, string> ?? {}),
    }

    const res = await fetch(`${BASE_URL}${path}`, { ...init, headers })

    if (!res.ok) {
      const err: ApiError = await res.json().catch(() => ({
        success: false,
        error: res.statusText,
        code: 'UNKNOWN',
        timestamp: new Date().toISOString(),
      }))
      throw err
    }

    return res.json() as Promise<T>
  }

  // ── Auth ───────────────────────────────────────────────────────────────────

  async login(body: LoginRequest) {
    return this.request<ApiResponse<AuthTokens & { user: User }>>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  async register(body: RegisterRequest) {
    return this.request<ApiResponse<{ user_id: string; email: string; message: string }>>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  async refreshToken(refreshToken: string) {
    return this.request<ApiResponse<Pick<AuthTokens, 'access_token' | 'expires_in'>>>('/auth/refresh', {
      method: 'POST',
      headers: { Authorization: `Bearer ${refreshToken}` },
    })
  }

  // ── Leads ──────────────────────────────────────────────────────────────────

  async getLeads(params?: {
    page?: number
    limit?: number
    status?: string
    source?: string
    service_interest?: string
    search?: string
    sort_by?: string
  }) {
    const qs = params ? '?' + new URLSearchParams(
      Object.fromEntries(Object.entries(params).filter(([, v]) => v != null).map(([k, v]) => [k, String(v)]))
    ) : ''
    return this.request<PaginatedResponse<Lead>>(`/leads${qs}`)
  }

  async getLead(id: string) {
    return this.request<ApiResponse<LeadDetail>>(`/leads/${id}`)
  }

  async createLead(body: CreateLeadRequest) {
    return this.request<ApiResponse<Lead>>('/leads', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  async updateLead(id: string, body: Partial<Lead>) {
    return this.request<ApiResponse<Lead>>(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  // ── Projects & Deliverables ────────────────────────────────────────────────

  async getProjects() {
    return this.request<ApiResponse<Project[]>>('/projects')
  }

  async getDeliverables(projectId: string) {
    return this.request<ApiResponse<Deliverable[]>>(`/projects/${projectId}/deliverables`)
  }

  async getDeliverable(projectId: string, deliverableId: string) {
    return this.request<ApiResponse<Deliverable & { revisions: Revision[] }>>(`/projects/${projectId}/deliverables/${deliverableId}`)
  }

  async approveDeliverable(projectId: string, deliverableId: string) {
    return this.request<ApiResponse<Deliverable>>(`/projects/${projectId}/deliverables/${deliverableId}/approve`, {
      method: 'POST',
    })
  }

  async requestRevision(projectId: string, deliverableId: string, body: CreateRevisionRequest) {
    return this.request<ApiResponse<Revision>>(`/projects/${projectId}/deliverables/${deliverableId}/revisions`, {
      method: 'POST',
      body: JSON.stringify(body),
    })
  }
}

export const api = new ApiClient()
