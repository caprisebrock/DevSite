'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock } from 'lucide-react'

/**
 * GuaranteesSection - Trust signals and commitments
 */

const guarantees = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description:
      'If we can&apos;t deliver what we scoped, we&apos;ll make it right or refund your deposit.',
  },
  {
    icon: Award,
    title: 'Full Code Ownership',
    description:
      'All code, designs, and IP belong to you. No licensing, no restrictions.',
  },
  {
    icon: Users,
    title: '30-Day Support',
    description:
      'Post-launch support included. Bug fixes, deployments, and training covered.',
  },
  {
    icon: Clock,
    title: 'Fixed-Price Projects',
    description:
      'No hourly billing surprises. Scope is locked, price is agreed upfront.',
  },
]

export const GuaranteesSection = () => {
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
            Our Commitments
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We take your investment seriously. Here&apos;s what you can expect when working with us.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-bg-secondary border border-border-subtle hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {guarantee.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
