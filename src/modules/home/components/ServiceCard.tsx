'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  tech: string[]
  price: string
  color: 'primary' | 'secondary'
  index: number
}

/**
 * ServiceCard - Individual service offering card
 * Extracted to keep ServicesSection under 150 lines
 */
export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  tech,
  price,
  color,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'group h-full p-8 rounded-xl',
          'bg-bg-secondary border border-border-subtle',
          'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]',
          'transition-all duration-300',
          'cursor-pointer'
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center mb-6',
            'bg-gradient-to-br transition-all duration-300',
            color === 'primary'
              ? 'from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20'
              : 'from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20'
          )}
        >
          <Icon
            className={cn(
              'w-6 h-6',
              color === 'primary' ? 'text-primary' : 'text-secondary'
            )}
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>

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

        {/* Price */}
        <div className="text-sm font-semibold text-primary">{price}</div>
      </motion.div>
    </motion.div>
  )
}
