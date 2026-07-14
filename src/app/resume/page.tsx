import type { Metadata } from 'next'
import { RESUME_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${RESUME_NAME} — Full-Stack Product Engineer`,
  description: `${RESUME_NAME}: ${SITE_DESCRIPTION} Resume for hiring managers, founders, and technical recruiters.`,
  openGraph: {
    title: `${RESUME_NAME} — Full-Stack Product Engineer | Day One Devs`,
    description: SITE_DESCRIPTION,
  },
}

export { default } from '@/modules/resume'
