'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function AnimatedSection({ 
  children, 
  className = "",
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Opacity based on scroll position - fade in when scrolling down, fade out when scrolling up
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  // Y transform based on direction - animate in when scrolling down, animate out when scrolling up
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], 
    direction === 'down' ? [60, 0, 0, -60] : 
    direction === 'up' ? [-60, 0, 0, 60] : 
    [30, 0, 0, -30])

  // X transform for left/right
  const x = direction === 'left' || direction === 'right'
    ? useTransform(scrollYProgress, [0, 0.2, 0.8, 1],
        direction === 'left' ? [-60, 0, 0, 60] : [60, 0, 0, -60])
    : undefined

  // Initial animation variants
  const getInitialVariant = () => {
    switch (direction) {
      case 'down':
        return { opacity: 0, y: 60 }
      case 'up':
        return { opacity: 0, y: -60 }
      case 'left':
        return { opacity: 0, x: -60 }
      case 'right':
        return { opacity: 0, x: 60 }
      default:
        return { opacity: 0, y: 30 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialVariant()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialVariant()}
      style={{ 
        opacity: direction === 'fade' ? undefined : opacity,
        y: (direction === 'left' || direction === 'right' || direction === 'fade') ? undefined : y,
        x: (direction === 'left' || direction === 'right') ? x : undefined
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}