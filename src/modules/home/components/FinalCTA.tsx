'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button, BookCall } from '@/components/ui'

/**
 * FinalCTA - Bold closing call-to-action
 * Multiple conversion paths, urgency, clear next step
 */
export const FinalCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10" />
      </div>

      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-text-primary mb-2">
              Ready to Move Fast?
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Let&apos;s Talk
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-4">
            We have 3 project slots open this month.
          </p>
          <p className="text-base text-text-muted mb-12 max-w-2xl mx-auto">
            Free discovery call. No pressure. We&apos;ll discuss your idea, timeline, budget, 
            and whether we&apos;re a good fit. (We&apos;re honest if we&apos;re not.)
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <BookCall variant="primary" size="lg" className="group">
              Book Free Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </BookCall>
            <Button variant="secondary" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Instead
            </Button>
          </motion.div>

          {/* Not a Fit Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 p-8 rounded-xl bg-bg-secondary border border-border-subtle"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              We&apos;re Not for Everyone
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wide">
                  ❌ Don&apos;t Book If You:
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Need a $3k marketing website</li>
                  <li>• Want hourly billing with no timeline</li>
                  <li>• Aren&apos;t ready to start in 2-4 weeks</li>
                  <li>• Budget under $8k</li>
                </ul>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                  ✅ We&apos;re a Fit If You:
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Have a real problem to solve</li>
                  <li>• Value speed + quality equally</li>
                  <li>• Ready to start this week/next week</li>
                  <li>• Budget $10k+ (flexible on scope)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-border-subtle"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">
                  No Contracts
                </div>
                <div className="text-sm text-text-muted">
                  Fixed price, no hourly surprises
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">
                  Full Ownership
                </div>
                <div className="text-sm text-text-muted">
                  You own everything (code, IP, repos)
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">
                  30-Day Support
                </div>
                <div className="text-sm text-text-muted">
                  We don&apos;t disappear after launch
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
