import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  gradient?: boolean
}

export default function Section({
  children,
  className,
  containerClassName,
  id,
  gradient = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        gradient && 'hero-gradient',
        className
      )}
    >
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
