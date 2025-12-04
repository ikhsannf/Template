'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface Stat {
    id: number
    value: number
    label: string
    suffix: string
    icon: string
}

export default function Statistics() {
    const stats: Stat[] = [
        { id: 1, value: 20, label: "Projects Completed", suffix: "+", icon: "🚀" },
        { id: 2, value: 15, label: "Happy Clients", suffix: "+", icon: "😊" },
        { id: 3, value: 50, label: "GitHub Repos", suffix: "+", icon: "⭐" },
        { id: 4, value: 1000, label: "Cups of Coffee", suffix: "+", icon: "☕" }
    ]

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <StatCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = stat.value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }
    }, [isInView, stat.value])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3"
                animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
                {stat.icon}
            </motion.div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                {count}{stat.suffix}
            </div>
            <div className="text-blue-100 dark:text-blue-200 font-medium text-xs sm:text-sm lg:text-base">
                {stat.label}
            </div>
        </motion.div>
    )
}
