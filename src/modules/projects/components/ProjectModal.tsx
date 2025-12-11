'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '../lib/projectsData'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * ProjectModal - Full project details in modal
 * Expanded view with large iframe and all details
 */
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'relative w-full max-w-6xl max-h-[90vh] overflow-y-auto',
            'bg-bg-secondary border border-border-default rounded-xl',
            'shadow-2xl'
          )}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={cn(
              'absolute top-4 right-4 z-10',
              'p-2 rounded-lg',
              'bg-bg-tertiary border border-border-subtle',
              'hover:border-primary hover:text-primary',
              'transition-all duration-200'
            )}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview - Large Iframe */}
          <div className="relative h-96 bg-gradient-to-br from-bg-tertiary to-bg-elevated">
            {project.iframeUrl ? (
              <iframe
                src={project.iframeUrl}
                className="w-full h-full"
                title={project.title}
              />
            ) : (
              // Placeholder
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    📌 Add Your Project Demo Here
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Replace the <code className="text-primary">iframeUrl</code> in{' '}
                    <code>projectsData.ts</code> with your deployed project URL.
                  </p>
                  <div className="p-4 rounded-lg bg-bg-tertiary border border-border-subtle text-left">
                    <p className="text-xs font-mono text-text-muted mb-2">
                      Project ID: <span className="text-primary">{project.id}</span>
                    </p>
                    <p className="text-xs text-text-muted">
                      Example: https://your-project-demo.vercel.app
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold shadow-[0_0_20px_rgba(0,255,198,0.3)]">
                  {project.timeline}
                </span>
                <span className="px-3 py-1 rounded-full bg-bg-tertiary border border-border-subtle text-text-muted text-sm font-medium">
                  {project.category}
                </span>
                {project.productionGrade && (
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium">
                    Production-Grade
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                {project.title}
              </h2>
              <p className="text-base text-text-muted mb-2">{project.scope}</p>
            </div>

            {/* Before Day One */}
            <div className="mb-6 p-4 rounded-lg bg-bg-tertiary border border-border-subtle">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-2">
                Before Day One
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.beforeDayOne}
              </p>
            </div>

            {/* Challenge */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">
                The Challenge
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                What We Built
              </h3>
              <ul className="space-y-2">
                {project.solution.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-text-secondary"
                  >
                    <span className="text-primary mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Discovery & Process */}
            <div className="mb-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-bg-tertiary border border-border-subtle">
                <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">
                  Discovery Depth
                </div>
                <div className="text-primary font-semibold">{project.discoveryDepth}</div>
                <div className="text-xs text-text-secondary mt-1">
                  {project.discoveryDepth === 'Light' && 'Quick requirements, fast iteration'}
                  {project.discoveryDepth === 'Standard' && 'Full vision extraction, user flows'}
                  {project.discoveryDepth === 'Deep' && 'Extensive planning, compliance review'}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-bg-tertiary border border-border-subtle">
                <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">
                  Build Type
                </div>
                <div className="text-primary font-semibold">
                  {project.productionGrade ? 'Production-Ready' : 'MVP/Demo'}
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  {project.productionGrade 
                    ? 'Scalable architecture, full features' 
                    : 'Working prototype, core features only'}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-sm font-semibold text-primary mb-2">Results</h3>
              <p className="text-text-primary font-semibold">{project.results}</p>
            </div>

            {/* Actions */}
            {project.demoUrl && (
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center gap-2',
                    'px-6 py-3 rounded-lg',
                    'bg-gradient-to-br from-primary to-primary-dim',
                    'text-bg-primary font-semibold',
                    'hover:shadow-glow-lg transition-all duration-200'
                  )}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
