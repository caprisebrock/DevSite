import { CONTACT_EMAIL, RESUME_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const resumeProfile = {
  name: RESUME_NAME,
  title: 'Full-Stack Product Engineer',
  focusAreas: [
    'Workflow Systems',
    'AI Safety',
    'Document Automation',
    'SaaS Platforms',
  ],
  location: 'Remote',
  email: CONTACT_EMAIL,
  siteUrl: SITE_URL,
  linkedin: SOCIAL_LINKS.linkedin,
  github: SOCIAL_LINKS.github,
  summary:
    'I build full-stack software for complex workflows: AI-assisted products, document automation, transaction systems, and internal tools. My work focuses on explicit business rules, secure data boundaries, reliable state transitions, and interfaces that help users make high-consequence decisions with confidence.',
}

export const coreStrengths = [
  'Full-stack product development (Next.js, TypeScript, Postgres/Supabase)',
  'Workflow and state-machine design',
  'AI orchestration with deterministic safety gates and evaluation tooling',
  'Document automation and structured parsing',
  'API, database, and authorization design (including RLS)',
  'SaaS billing architecture, webhooks, and integration boundaries',
  'Migration strategy and legacy-system modernization',
]

export const experience = {
  company: 'Day One Devs',
  role: 'Full-Stack Product Engineer',
  dates: '2024 – Present',
  summary:
    'Built and stabilized full-stack applications for workflow-heavy products, including AI communication tools, municipal-finance software, document-review systems, and SaaS platforms.',
  bullets: [
    'Contributed to AI-assisted workflows using deterministic safety gates, structured model outputs, persistent context, entitlement controls, and evaluation tooling.',
    'Built workflow and document-review systems involving state transitions, audit history, user confirmation, secure storage, and integration boundaries.',
    'Designed API, database, authorization, billing, webhook, and migration patterns for multi-step SaaS products.',
    'Refactored complex application areas into clearer modules, service layers, hooks, and typed contracts.',
    'Produced architecture notes, migration handoffs, testing plans, and technical documentation to preserve decisions and reduce future maintenance risk.',
  ],
}

export interface ResumeProject {
  title: string
  subtitle: string
  status: string
  contribution: string
  slug: string
  bullets: string[]
  skills: string[]
}

export const selectedProjects: ResumeProject[] = [
  {
    title: 'Social Q',
    subtitle: 'AI-Assisted Communication Analysis Platform',
    status: 'Live demo — auth required',
    contribution: 'Built',
    slug: 'social-q',
    bullets: [
      'Multi-stage AI workflow combining deterministic routing, structured model output, analysis, interpretation, and send-strategy generation.',
      'Safety controls for ambiguity, unsupported relationship claims, message-direction errors, and hold / do-not-send recommendations.',
      'Anonymous-first identity flow with authenticated account migration, ownership scoping, and entitlement metering.',
      'AI evaluation tooling covering safety-specific failures, hold behavior, clarification quality, and hallucinated patterns.',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'Supabase',
      'OpenAI',
      'RLS',
      'RevenueCat',
      'Evaluation systems',
    ],
  },
  {
    title: 'Muni Clerk',
    subtitle: 'Deterministic Document Review for Municipal Bond Resolutions',
    status: 'Private case study',
    contribution: 'Built',
    slug: 'muni-clerk',
    bullets: [
      'Deterministic detection pipeline with ordered rules, validation, overlap resolution, stable grouping, and false-positive controls.',
      'Review-state model separating detected values, user-confirmed mappings, applied replacements, skipped occurrences, and version history.',
      'Editor-native DOCX workflow with canonical text mapping, validated editor ranges, and right-to-left transactional replacements.',
      'Secure read-only integration boundary for pulling authorized municipal term-sheet data into the review workflow.',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'ProseMirror',
      'DOCX',
      'Rule engines',
      'Supabase',
      'API contracts',
    ],
  },
  {
    title: 'PRO-Muni / MuniFlow',
    subtitle: 'Municipal Finance Workflow and Transaction Platform',
    status: 'Private case study',
    contribution: 'Contributed / built core modules',
    slug: 'muniflow-platform',
    bullets: [
      'Catalog-driven deal-context engine that maps transaction setup data into configurable overlays, active modules, and relevant term-sheet fields.',
      'Migration path from a legacy rules engine using compatibility views, adapters, synchronized derived state, and explicit legacy retirement.',
      'Secure authorization boundaries for deal membership, webhooks, scoped external access, and service-layer operations.',
      'Queue-first inbound email design, notification infrastructure, and CI foundations (including static security checks).',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'Supabase',
      'RLS',
      'Webhooks',
      'Feature flags',
      'CI',
    ],
  },
  {
    title: 'Bond Generator',
    subtitle: 'Municipal Bond Certificate Generation Workflow',
    status: 'Live demo — public',
    contribution: 'Built',
    slug: 'bond-generator',
    bullets: [
      'Deterministic DOCX certificate assembly from templates, maturity schedules, and CUSIP data.',
      'Editable validation preview before generation, draft persistence, and streaming output for large series.',
      'Stripe subscription billing architecture with webhook-driven access control (feature-flagged; not claimed as active monetization).',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'Supabase',
      'Stripe',
      'DOCX',
      'xlsx',
      'Sentry',
    ],
  },
]

export const skillsGrouped = [
  {
    label: 'Languages & Frameworks',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js'],
  },
  {
    label: 'Data & Auth',
    items: ['PostgreSQL', 'Supabase', 'RLS', 'Zod', 'SQL migrations'],
  },
  {
    label: 'AI & Documents',
    items: [
      'OpenAI structured outputs',
      'Deterministic safety gates',
      'Eval harnesses',
      'ProseMirror',
      'DOCX pipelines',
    ],
  },
  {
    label: 'Delivery',
    items: [
      'Vercel',
      'GitHub Actions / CI',
      'Stripe webhooks',
      'Sentry',
      'Playwright / Vitest',
    ],
  },
]

export const audienceNotes = [
  {
    audience: 'Hiring managers',
    copy: 'I ship workflow-heavy product surfaces end-to-end — not just UI screens. Expect clear ownership of APIs, data boundaries, and verification.',
  },
  {
    audience: 'Founders / YC teams',
    copy: 'I can join as a product engineer on a core workflow, stabilize a fragile MVP, or scope the first milestone for an AI or document-heavy product.',
  },
]
