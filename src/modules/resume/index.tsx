'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  audienceNotes,
  coreStrengths,
  experience,
  resumeProfile,
  selectedProjects,
  skillsGrouped,
} from './lib/resumeData'

/**
 * Resume page — recruiter / founder facing profile.
 * Evidence-first; mirrors corrected project case-study claims.
 */
const ResumePage = () => {
  return (
    <main>
      {/* Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
        <div className="container-main max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary border border-border-subtle mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-secondary font-medium">
                Resume · Day One Devs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3 tracking-tight">
              {resumeProfile.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
              {resumeProfile.title}
            </p>
            <p className="text-sm text-text-muted mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                {resumeProfile.focusAreas.join(' · ')}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {resumeProfile.location}
              </span>
            </p>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl mb-8">
              {resumeProfile.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${resumeProfile.email}`}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl',
                  'bg-gradient-to-br from-primary to-primary/80',
                  'text-bg-primary font-semibold',
                  'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200'
                )}
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
              {resumeProfile.linkedin && (
                <a
                  href={resumeProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl',
                    'bg-bg-tertiary border border-border-subtle text-text-secondary font-semibold',
                    'hover:border-primary hover:text-primary transition-all duration-200'
                  )}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              {resumeProfile.github && (
                <a
                  href={resumeProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl',
                    'bg-bg-tertiary border border-border-subtle text-text-secondary font-semibold',
                    'hover:border-primary hover:text-primary transition-all duration-200'
                  )}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              <Link
                href="/projects"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl',
                  'bg-bg-tertiary border border-border-subtle text-text-secondary font-semibold',
                  'hover:border-primary hover:text-primary transition-all duration-200'
                )}
              >
                View technical projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-12 border-b border-border-subtle bg-bg-secondary/40">
        <div className="container-main max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {audienceNotes.map((note) => (
              <div
                key={note.audience}
                className="p-5 rounded-xl bg-bg-secondary border border-border-subtle"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  For {note.audience}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {note.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 border-b border-border-subtle">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Core strengths
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {coreStrengths.map((item) => (
              <li
                key={item}
                className="text-sm text-text-secondary leading-relaxed pl-4 border-l-2 border-primary/40"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 border-b border-border-subtle bg-bg-secondary/40">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Experience
          </h2>
          <div className="rounded-xl bg-bg-secondary border border-border-subtle p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-bold text-text-primary">
                    {experience.company}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {experience.role}
                </p>
              </div>
              <p className="text-sm text-text-muted font-mono">
                {experience.dates}
              </p>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              {experience.summary}
            </p>
            <ul className="space-y-3">
              {experience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm text-text-muted leading-relaxed flex gap-2"
                >
                  <span className="text-primary shrink-0 mt-1">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="py-16 border-b border-border-subtle">
        <div className="container-main max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Selected projects
            </h2>
            <p className="text-sm text-text-secondary">
              Technical proof for hiring and founder conversations. Status labels
              reflect what the repos and deployments support today.
            </p>
          </div>

          <div className="space-y-6">
            {selectedProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl bg-bg-secondary border border-border-subtle p-6 md:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold border bg-bg-tertiary border-border-subtle text-text-muted">
                      {project.contribution}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold border bg-primary/10 border-primary/30 text-primary">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                  What I contributed
                </p>
                <ul className="space-y-2 mb-4">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-text-muted leading-relaxed flex gap-2"
                    >
                      <span className="text-primary shrink-0 mt-1">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  Full case study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-b border-border-subtle bg-bg-secondary/40">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {skillsGrouped.map((group) => (
              <div
                key={group.label}
                className="p-5 rounded-xl bg-bg-secondary border border-border-subtle"
              >
                <p className="text-sm font-semibold text-text-primary mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-lg bg-bg-tertiary text-text-secondary border border-border-subtle"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-main max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Next step
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto mb-6 leading-relaxed">
            Open to full-time product engineering roles and scoped founder
            engagements. Selected demos and case studies are available to
            review — ask for access where a project is private.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${resumeProfile.email}?subject=Resume%20%2F%20Day%20One%20Devs`}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                'bg-gradient-to-br from-primary to-primary/80',
                'text-bg-primary font-semibold',
                'hover:shadow-[0_0_20px_rgba(0,255,198,0.35)] transition-all duration-200'
              )}
            >
              <Mail className="w-4 h-4" />
              {resumeProfile.email}
            </a>
            {resumeProfile.linkedin && (
              <a
                href={resumeProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
            {resumeProfile.github && (
              <a
                href={resumeProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            <Link
              href="/how-we-build"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              See how I work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResumePage
