'use client'

import { motion } from 'framer-motion'
import { BarChart3, FileText, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * LiveDemosSection - Interactive capability showcases
 */

const demos = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics Dashboard',
    description:
      'Live-updating dashboard with interactive charts. Built in 3 hours to demonstrate speed + quality.',
    action: 'Try Live Demo',
    actionUrl: '/demos/dashboard',
    color: 'primary' as const,
    badge: 'Live Now ✨',
    available: true,
  },
  {
    icon: FileText,
    title: 'Smart Note Management',
    description:
      'Full markdown note app with search and organization. LocalStorage-based, no backend needed.',
    action: 'Coming Soon',
    actionUrl: '#',
    color: 'secondary' as const,
    badge: 'In Progress',
    available: false,
  },
  {
    icon: Sparkles,
    title: 'CSV Data Visualizer',
    description:
      'Upload any CSV, get instant beautiful charts. Export as PNG. No signup required.',
    action: 'Coming Soon',
    actionUrl: '#',
    color: 'primary' as const,
    badge: 'In Progress',
    available: false,
  },
]

export const LiveDemosSection = () => {
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
            See Our Work{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don&apos;t take our word for it. Try our live demos. No signup, no
            sales pitch.
          </p>
        </motion.div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {demos.map((demo, index) => {
            const Icon = demo.icon
            return (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {demo.available ? (
                  <Link href={demo.actionUrl}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        'group block h-full p-6 rounded-xl',
                        'bg-bg-secondary border border-border-subtle',
                        'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]',
                        'transition-all duration-300',
                        'cursor-pointer'
                      )}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={cn(
                            'w-12 h-12 rounded-lg flex items-center justify-center',
                            'bg-gradient-to-br transition-all duration-300',
                            demo.color === 'primary'
                              ? 'from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20'
                              : 'from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20'
                          )}
                        >
                          <Icon
                            className={cn(
                              'w-6 h-6',
                              demo.color === 'primary'
                                ? 'text-primary'
                                : 'text-secondary'
                            )}
                          />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                          {demo.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                        {demo.title}
                      </h3>
                      <p className="text-text-secondary mb-6 leading-relaxed min-h-[80px]">
                        {demo.description}
                      </p>

                      {/* Action */}
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-200">
                        <span>{demo.action}</span>
                        <span className="ml-2">→</span>
                      </div>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    className={cn(
                      'h-full p-6 rounded-xl',
                      'bg-bg-secondary border border-border-subtle',
                      'opacity-60 cursor-not-allowed'
                    )}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={cn(
                          'w-12 h-12 rounded-lg flex items-center justify-center',
                          'bg-gradient-to-br',
                          demo.color === 'primary'
                            ? 'from-primary/20 to-primary/10'
                            : 'from-secondary/20 to-secondary/10'
                        )}
                      >
                        <Icon
                          className={cn(
                            'w-6 h-6',
                            demo.color === 'primary'
                              ? 'text-primary'
                              : 'text-secondary'
                          )}
                        />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-text-muted/10 border border-text-muted/30 text-text-muted text-xs font-semibold">
                        {demo.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {demo.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed min-h-[80px]">
                      {demo.description}
                    </p>

                    {/* Action */}
                    <div className="flex items-center text-text-muted font-semibold">
                      <span>{demo.action}</span>
                      <span className="ml-2">→</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-4">
            Impressed? Imagine what we can build for your business.
          </p>
          <Link
            href="/how-we-build"
            className="text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            See how we build so fast →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
