'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'

interface ProjectCardProps {
  project: Project
  index: number
  onViewDetails: () => void
}

/**
 * ProjectCard - Individual project showcase card
 * Shows iframe placeholder with description of what to add
 */
export const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'group rounded-xl overflow-hidden',
        'bg-bg-secondary border border-border-subtle',
        'hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]',
        'transition-all duration-300'
      )}
    >
      {/* Project Preview - Iframe Placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-bg-tertiary to-bg-elevated">
        {project.iframeUrl ? (
          <iframe
            src={project.iframeUrl}
            className="w-full h-full"
            title={project.title}
          />
        ) : (
          // Placeholder when no iframe URL
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <Eye className="w-12 h-12 text-text-muted mb-4 opacity-50" />
            <p className="text-sm text-text-muted mb-2">
              <strong>TODO:</strong> Add iframe URL
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Replace <code className="text-primary">iframeUrl</code> in{' '}
              <code>projectsData.ts</code> with deployed project URL
            </p>
            <div className="mt-4 px-3 py-1 rounded bg-bg-tertiary border border-border-subtle">
              <span className="text-xs font-mono text-text-muted">
                {project.id}
              </span>
            </div>
          </div>
        )}

        {/* Timeline Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-bg-primary/90 backdrop-blur-sm border border-primary/50 shadow-[0_0_20px_rgba(0,255,198,0.3)]">
          <span className="text-sm font-semibold text-primary">
            {project.timeline}
          </span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-subtle">
          <span className="text-xs font-medium text-text-secondary">
            {project.category}
          </span>
        </div>

        {/* View Details Overlay */}
        <motion.button
          onClick={onViewDetails}
          className={cn(
            'absolute inset-0 bg-bg-primary/80 backdrop-blur-sm',
            'flex items-center justify-center',
            'opacity-0 group-hover:opacity-100',
            'transition-opacity duration-300'
          )}
        >
          <span className="flex items-center gap-2 text-primary font-semibold">
            <Eye className="w-5 h-5" />
            View Details
          </span>
        </motion.button>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        {/* Challenge */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">
            The Challenge
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Results */}
        <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <div className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-1">
            Result
          </div>
          <p className="text-sm font-semibold text-primary">{project.results}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Scope */}
        <div className="text-xs text-text-muted mb-4">
          {project.scope}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex-1 flex items-center justify-center gap-2',
                'px-4 py-2 rounded-lg',
                'bg-primary/10 border border-primary/30',
                'text-primary font-semibold text-sm',
                'hover:bg-primary/20 transition-all duration-200'
              )}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <button
            onClick={onViewDetails}
            className={cn(
              'flex-1 flex items-center justify-center gap-2',
              'px-4 py-2 rounded-lg',
              'bg-bg-tertiary border border-border-subtle',
              'text-text-secondary font-semibold text-sm',
              'hover:border-primary hover:text-primary transition-all duration-200'
            )}
          >
            <Eye className="w-4 h-4" />
            Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}
