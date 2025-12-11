'use client'

import { motion } from 'framer-motion'

/**
 * TrustBar - Tech stack and credibility signals
 * Horizontal scrolling marquee effect
 */
export const TrustBar = () => {
  const techStack = [
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'Redis',
    'OpenAI',
    'Stripe',
    'AWS',
    'Vercel',
    'Tailwind',
  ]

  return (
    <section className="py-12 border-y border-border-subtle bg-bg-secondary/50 backdrop-blur-sm">
      <div className="container-main">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-text-muted mb-8"
        >
          Built with enterprise-grade technology
        </motion.p>

        {/* Tech Stack Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {/* Duplicate for seamless loop */}
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary border border-border-subtle text-text-secondary font-mono text-sm hover:border-primary hover:text-primary transition-colors duration-200"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">9 Days</div>
            <div className="text-sm text-text-muted">Average Build Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-text-muted">Projects Shipped</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
            <div className="text-sm text-text-muted">Missed Deadlines</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-text-muted">Code Ownership</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
