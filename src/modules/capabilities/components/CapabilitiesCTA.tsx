'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BookCall } from '@/components/ui'

export const CapabilitiesCTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-text-primary mb-2">
              Ready to See What We Can
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Build for You?
            </span>
          </h2>

          <p className="text-lg text-text-secondary mb-8">
            Book a $150 strategy call. We&apos;ll discuss your project, explore solutions, 
            and give you a clear roadmap.
          </p>

          <BookCall variant="primary" size="lg" className="group">
            Schedule Strategy Call - $150
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </BookCall>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm text-text-muted"
          >
            Money-back guarantee if we can&apos;t deliver on your needs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
