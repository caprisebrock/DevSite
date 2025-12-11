'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, MessageSquare, BarChart3, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * LiveDemosSection - Interactive capability showcases
 * TODO: Wire up real demos when built
 */

const demos = [
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Call and talk to our AI receptionist. Test if you can tell it&apos;s AI.',
    action: 'Call Now',
    actionUrl: '#', // TODO: Add Vapi.ai/Bland.ai phone number
    color: 'primary' as const,
    badge: 'Try Live',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Upload a PDF contract or invoice. Watch AI extract key data instantly.',
    action: 'Upload & Test',
    actionUrl: '#', // TODO: Add document AI demo URL
    color: 'secondary' as const,
    badge: 'Interactive',
  },
  {
    icon: MessageSquare,
    title: 'Custom AI Chatbot',
    description: 'Chat with an AI trained on custom data. See how we integrate GPT-4.',
    action: 'Start Chat',
    actionUrl: '#', // TODO: Add chatbot demo URL
    color: 'primary' as const,
    badge: 'Live Demo',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Explore an analytics dashboard with live data updates and charts.',
    action: 'View Dashboard',
    actionUrl: '#', // TODO: Add dashboard demo URL
    color: 'secondary' as const,
    badge: 'Interactive',
  },
  {
    icon: Sparkles,
    title: 'Smart Note Management',
    description: 'Our full-featured note app with AI organization and YouTube integration.',
    action: 'Try Smart Shelf',
    actionUrl: '#', // TODO: Add Smart Shelf URL
    color: 'primary' as const,
    badge: 'Full App',
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
            Test Our Capabilities Live
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don&apos;t take our word for it. Try our demos yourself. No signup, no sales pitch.
          </p>
        </motion.div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                <motion.a
                  href={demo.actionUrl}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'group block h-full p-8 rounded-xl',
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
                          demo.color === 'primary' ? 'text-primary' : 'text-secondary'
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
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-200">
                    <span>{demo.action}</span>
                    <span className="ml-2">→</span>
                  </div>

                  {/* TODO Badge (visible in code, not to users) */}
                  {demo.actionUrl === '#' && (
                    <div className="mt-4 text-xs text-text-muted opacity-50">
                      TODO: Wire up demo URL
                    </div>
                  )}
                </motion.a>
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
          <a
            href="#contact"
            className="text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            Let&apos;s talk about your project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
