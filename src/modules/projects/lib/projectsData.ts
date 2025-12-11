/**
 * Projects Data
 * TODO: Replace iframe URLs with real project demos
 */

export interface Project {
  id: string
  title: string
  category: 'SaaS' | 'AI' | 'Automation' | 'Enterprise'
  timeline: string // "Built in 11 days", "Built in 8 days", etc.
  timelineDays: number // For filtering
  description: string
  challenge: string
  beforeDayOne: string // What they tried before hiring you
  solution: string[]
  results: string
  techStack: string[]
  scope: string // "$14,500 | 11 days"
  productionGrade: boolean // MVP vs. Production-ready
  discoveryDepth: 'Light' | 'Standard' | 'Deep' // How much discovery was needed
  iframeUrl?: string // Optional demo URL
  demoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'ai-crm-saas',
    title: 'AI-Powered CRM for Sales Teams',
    category: 'SaaS',
    timeline: 'Built in 11 Days',
    timelineDays: 11,
    description: 'Multi-tenant SaaS with real-time notifications, Stripe billing, and custom dashboards.',
    challenge: 'Founder needed demo for investor pitch in 2 weeks. No-code tools hit limits, agencies quoted 10+ weeks.',
    beforeDayOne: 'Tried Bubble and Softr (hit limitations), contacted 3 agencies (all quoted 10-12 weeks and $40k+).',
    solution: [
      'Multi-tenant architecture',
      'Real-time notifications (WebSocket)',
      'Stripe subscription billing',
      'Custom sales pipeline dashboards',
      'Mobile-responsive design',
    ],
    results: 'Demoed on Day 12, raised $150k seed round, now has 12 paying customers.',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'WebSocket'],
    scope: '$14,500 | 11 days',
    productionGrade: true,
    discoveryDepth: 'Standard',
    featured: true,
  },
  {
    id: 'document-analysis',
    title: 'AI Document Processing Platform',
    category: 'AI',
    timeline: 'Built in 8 Days',
    timelineDays: 8,
    description: 'GPT-4 powered document extraction with secure storage and real-time processing.',
    challenge: 'Legal startup needed AI document processing for beta launch. Traditional dev quoted 8-10 weeks.',
    beforeDayOne: 'Looked at off-the-shelf tools (too generic), contacted dev shops (too slow for beta deadline).',
    solution: [
      'GPT-4 integration for key data extraction',
      'Secure document storage (AWS S3)',
      'Real-time processing with progress indicators',
      'Usage analytics dashboard',
      'Export to structured JSON/CSV',
    ],
    results: 'Launched beta with 12 paying customers in week 3, processing 500+ docs/month.',
    techStack: ['Next.js', 'OpenAI', 'AWS', 'PostgreSQL'],
    scope: '$16,000 | 8 days',
    productionGrade: true,
    discoveryDepth: 'Deep',
    featured: true,
  },
  {
    id: 'automation-hub',
    title: 'Multi-System Automation Hub',
    category: 'Automation',
    timeline: 'Built in 6 Days',
    timelineDays: 6,
    description: 'Real-time webhook orchestration connecting Shopify, Stripe, and internal tools.',
    challenge: 'E-commerce company burning 30 hours/week on manual data sync between systems.',
    beforeDayOne: 'Tried Zapier (too limited for complex workflows), considered hiring full-time dev (too slow).',
    solution: [
      'Real-time webhook orchestration',
      'Automated data sync across 3 systems',
      'Error monitoring and alerts',
      'Custom admin dashboard',
      'Automatic retry logic',
    ],
    results: 'Saved 30 hours/week of manual work, ROI recovered in 3 weeks.',
    techStack: ['Node.js', 'Redis', 'Webhooks', 'APIs'],
    scope: '$12,000 | 6 days',
    productionGrade: true,
    discoveryDepth: 'Light',
    featured: true,
  },
]

export const categories = [
  'All',
  'SaaS',
  'AI',
  'Automation',
  'Enterprise',
] as const

export const timelineFilters = [
  'All Projects',
  'Under 1 Week',
  '1-2 Weeks',
  '2-4 Weeks',
  '4+ Weeks',
] as const

export type Category = (typeof categories)[number]
export type TimelineFilter = (typeof timelineFilters)[number]
