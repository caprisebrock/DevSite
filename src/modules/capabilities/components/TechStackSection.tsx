'use client'

import { motion } from 'framer-motion'

/**
 * TechStackSection - Visual showcase of technologies
 */

const techCategories = [
  {
    category: 'Frontend',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    tech: ['Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'REST APIs'],
  },
  {
    category: 'AI & ML',
    tech: ['OpenAI', 'Claude', 'LangChain', 'Vector DBs', 'Embeddings'],
  },
  {
    category: 'Infrastructure',
    tech: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Monitoring'],
  },
  {
    category: 'Integrations',
    tech: ['Stripe', 'Twilio', 'YouTube API', 'Cal.com', 'Webhooks'],
  },
]

export const TechStackSection = () => {
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
            Modern Tech Stack
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We build with cutting-edge technologies. No legacy code, no outdated frameworks.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl bg-bg-secondary border border-border-subtle"
            >
              <h3 className="text-sm font-semibold text-primary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-text-muted">
            + Any API or integration you need. If it has documentation, we can build with it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
