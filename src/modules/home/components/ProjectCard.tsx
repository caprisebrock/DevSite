'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  category: string
  title: string
  challenge: string
  solution: string[]
  tech: string[]
  results: string
  scope: string
  index: number
}

/**
 * ProjectCard - Individual project showcase card
 * Extracted to keep FeaturedProjects under 150 lines
 */
export const ProjectCard = ({
  category,
  title,
  challenge,
  solution,
  tech,
  results,
  scope,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'group h-full rounded-xl overflow-hidden',
          'bg-bg-secondary border border-border-subtle',
          'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]',
          'transition-all duration-300'
        )}
      >
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-text-muted/50 text-sm">Project Screenshot</div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle">
            <span className="text-xs font-semibold text-primary">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Challenge */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-text-secondary mb-1">
              The Challenge:
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-text-secondary mb-2">
              Our Solution:
            </h4>
            <ul className="space-y-1">
              {solution.map((item) => (
                <li
                  key={item}
                  className="text-sm text-text-muted flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Results */}
          <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm font-semibold text-primary">{results}</p>
          </div>

          {/* Scope */}
          <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
            <span className="text-sm text-text-muted">{scope}</span>
            <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
