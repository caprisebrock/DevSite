'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

/**
 * NavLink - Atomic navigation link component
 * Follows ghost button pattern from DESIGN_SYSTEM.md with active state indicator
 */
export const NavLink = ({ href, children, onClick, className }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        // Base styles - ghost button pattern
        'relative px-4 py-2 rounded-lg',
        'text-base font-medium',
        'transition-all duration-200',
        // Hover & active states
        isActive
          ? 'text-primary'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
        // Focus state for accessibility
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        className
      )}
    >
      {children}
      {/* Active indicator - animated underline */}
      {isActive && (
        <motion.span
          layoutId="navIndicator"
          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-primary-dim rounded-full"
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
    </Link>
  )
}
