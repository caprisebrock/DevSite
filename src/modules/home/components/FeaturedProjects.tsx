'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ProjectCard } from './ProjectCard'

/**
 * FeaturedProjects - Showcase 3 best projects
 * Proof of work, reduces perceived risk
 */

const projects = [
  {
    category: 'Built in 11 Days',
    title: 'AI-Powered CRM for Sales Teams',
    challenge: 'Founder needed a demo for investor pitch in 2 weeks. No-code tools hit limits, agencies quoted 10+ weeks.',
    solution: [
      'Multi-tenant architecture',
      'Real-time notifications',
      'Stripe billing integration',
      'Custom dashboards',
    ],
    tech: ['Next.js', 'Supabase', 'Stripe'],
    results: 'Demoed on Day 12, raised $150k seed round',
    scope: '$14,500 | 11 days',
    image: '/projects/crm-preview.png',
  },
  {
    category: 'Built in 8 Days',
    title: 'Document Analysis Platform',
    challenge: 'Legal startup needed AI document processing for beta launch. Traditional dev quoted 8-10 weeks minimum.',
    solution: [
      'GPT-4 integration for extraction',
      'Secure document storage',
      'Real-time processing',
      'Usage analytics dashboard',
    ],
    tech: ['OpenAI', 'Next.js', 'AWS'],
    results: 'Launched beta with 12 paying customers in week 3',
    scope: '$16,000 | 8 days',
    image: '/projects/legal-ai-preview.png',
  },
  {
    category: 'Built in 6 Days',
    title: 'Multi-System Automation Hub',
    challenge: 'E-commerce company burning 30 hours/week on manual data sync between Shopify, Stripe, and internal tools.',
    solution: [
      'Real-time webhook orchestration',
      'Automated data sync',
      'Error monitoring',
      'Custom admin dashboard',
    ],
    tech: ['Node.js', 'Redis', 'APIs'],
    results: 'Saved 30 hours/week, ROI in 3 weeks',
    scope: '$12,000 | 6 days',
    image: '/projects/integration-preview.png',
  },
]

export const FeaturedProjects = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/50">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Built Fast, Built Right
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real projects, real timelines, real results.
            See how we turn ideas into deployed apps in days.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="group">
              See All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
