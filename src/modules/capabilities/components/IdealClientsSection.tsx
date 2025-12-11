'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

/**
 * IdealClientsSection - Who we work with + Not a fit
 */

const idealClients = [
  'Startups building SaaS products',
  'Businesses automating workflows',
  'Companies needing AI integration',
  'Teams replacing expensive SaaS tools',
  'Anyone with complex, custom needs',
]

const notAFit = [
  'Budget under $5k',
  'Need it done in 2 weeks',
  'Want template customization',
  'Looking for just design (no code)',
  'Prefer hourly billing',
]

export const IdealClientsSection = () => {
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
            Who We Work With
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We&apos;re selective about projects. Here&apos;s who we&apos;re a great fit for - and who we&apos;re not.
          </p>
        </motion.div>

        {/* Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Perfect Fit */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-primary/5 border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              ✅ Perfect Fit
            </h3>
            <ul className="space-y-4">
              {idealClients.map((client) => (
                <li key={client} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{client}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not A Fit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-bg-secondary border border-border-subtle"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              ❌ Not A Fit
            </h3>
            <ul className="space-y-4">
              {notAFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-text-secondary">
            Being clear about who we don&apos;t serve helps us deliver better results for those we do.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
