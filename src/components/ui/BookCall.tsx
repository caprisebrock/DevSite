'use client'

import { type ReactNode } from 'react'
import { Button } from './Button'
import { openCalModal } from '@/lib/integrations/cal'

interface BookCallProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  children?: ReactNode
  className?: string
}

/**
 * BookCall - Opens Cal.com booking modal for strategy calls
 * Cal.com is preloaded in CalProvider, so this opens instantly
 *
 * @example
 * <BookCall variant="primary" size="lg">
 *   Book $150 Strategy Call
 * </BookCall>
 */
export const BookCall = ({
  variant = 'primary',
  size = 'md',
  children = 'Book a Call',
  className,
}: BookCallProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={openCalModal}
      className={className}
    >
      {children}
    </Button>
  )
}

export default BookCall

