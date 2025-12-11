'use client'

import { motion } from 'framer-motion'
import { Layers, Sparkles, Workflow } from 'lucide-react'
import { ServiceCard } from './ServiceCard'

/**
 * ServicesSection - 6 high-value service offerings
 * Bento box grid layout with hover effects
 */

const services = [
  {
    icon: Sparkles,
    title: 'MVP Launch',
    description:
      'Working app, deployed live, ready for users. Clean architecture that scales when you need it. Perfect for validating ideas, demos, or first customers. Typical timeline: 1-2 weeks.',
    tech: ['Production-ready', 'You own everything', 'Deployed live'],
    price: '$10k-15k',
    color: 'primary' as const,
  },
  {
    icon: Layers,
    title: 'Full Product Build',
    description:
      'Everything you need to go to market with confidence. Advanced features, integrations, security hardening, performance optimization. Built to handle real scale from launch.',
    tech: ['Enterprise-grade', 'CI/CD included', '30-day support'],
    price: '$18k-35k',
    color: 'secondary' as const,
  },
  {
    icon: Workflow,
    title: 'Ongoing Partnership',
    description:
      'Continuous product development after launch. New features, improvements, bug fixes, performance monitoring. We become your extended engineering team. No long-term contracts.',
    tech: ['Monthly capacity', 'Flexible scope', 'Cancel anytime'],
    price: '$8k-12k/month',
    color: 'primary' as const,
  },
]

export const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32">
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
            How We Work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            AI-accelerated development with senior-level oversight.
            Choose the engagement that fits your timeline and budget.
          </p>
        </motion.div>

        {/* Services Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* Removed redundant CTA - already have hero + final CTA on homepage */}
      </div>
    </section>
  )
}
