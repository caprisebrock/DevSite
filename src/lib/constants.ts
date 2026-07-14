/**
 * Global constants for the DevSite project
 * Keep design tokens in sync with tailwind.config.ts and globals.css
 */

// Site metadata
export const SITE_NAME = 'Day One Devs'
export const SITE_LOGO = '/dayonelogo-transparent.png'
export const SITE_DESCRIPTION =
  'Full-stack product engineering for workflow-heavy apps: AI systems, document automation, SaaS platforms, and codebase stabilization.'
export const SITE_URL = 'https://dayonedevs.com'
export const CONTACT_EMAIL = 'jah-amiel@muniflow.io'

/** Display name for resume / hiring surfaces. */
export const RESUME_NAME = 'Jahamiel Douglas'

// Navigation links
export const NAV_LINKS = [
  { label: 'Portfolio', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'How We Build', href: '/how-we-build' },
  { label: 'Pricing', href: '/pricing' },
] as const

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jahamiel-douglas-a63b50343/',
  github: 'https://github.com/JahacksV1',
  twitter: '',
} as const

// Animation durations (in ms) - sync with ANIMATION_SYSTEM.md
export const DURATION = {
  instant: 100,
  fast: 200,
  normal: 300,
  slow: 400,
  slower: 600,
} as const

// Easing curves - sync with ANIMATION_SYSTEM.md
export const EASING = {
  default: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
} as const

// Breakpoints - sync with tailwind.config.ts
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// API endpoints (when needed)
export const API_ROUTES = {
  // Add API routes as needed
} as const

// External integrations (update with real values)
export const INTEGRATIONS = {
  calLink: 'caprisee-zqlila/strategy-call-150',
  stripeLink: '', // e.g., 'https://buy.stripe.com/xxx'
} as const

// Cal.com modal configuration
export const CAL_CONFIG = {
  theme: 'dark',
  styles: {
    branding: {
      brandColor: '#00ffc6', // Mint-cyan primary
      darkBrandColor: '#00d4a3', // Dimmed variant
      highlightColor: '#a78bfa', // Purple accent
    },
  },
  hideEventTypeDetails: false,
  layout: 'month_view',
}

// Price ranges for services
export const PRICE_RANGES = {
  starter: '$10k - $15k',
  standard: '$15k - $30k',
  enterprise: '$30k - $50k+',
} as const
