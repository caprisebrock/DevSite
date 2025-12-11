'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageSquare, Code, Rocket } from 'lucide-react'

/**
 * ProcessSection - How We Work timeline
 */

const steps = [
  {
    icon: Calendar,
    title: 'Discovery Call',
    description: 'Book a $150 strategy call. We discuss your needs, timeline, and budget.',
    duration: '30-60 min',
  },
  {
    icon: MessageSquare,
    title: 'Scope & Proposal',
    description: 'Detailed project spec, tech stack, timeline, and fixed price. No surprises.',
    duration: '2-3 days',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build. You get weekly updates and demos. Your feedback shapes the product.',
    duration: '4-12 weeks',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Deploy to production. Training, documentation, 30-day support included.',
    duration: 'Ongoing',
  },
]

export const ProcessSection = () => {
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
            How We Work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Simple, transparent process. No hidden fees, no scope creep, no surprises.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-border-subtle md:left-8" />
                )}

                <div className="flex gap-6 mb-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <span className="text-sm text-text-muted">{step.duration}</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
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
