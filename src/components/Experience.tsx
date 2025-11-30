'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
    id: number
    year: string
    title: string
    organization: string
    description: string
    type: 'education' | 'work' | 'achievement'
    icon: string
}

export default function Experience() {
    const timeline: TimelineItem[] = [
        {
            id: 1,
            year: "2023 - Present",
            title: "Information Technology Student",
            organization: "Telkom University",
            description: "Studying Information Technology with focus on Software Engineering and UI/UX Design. Active in various tech communities and projects.",
            type: "education",
            icon: "🎓"
        },
        {
            id: 2,
            year: "2024",
            title: "UI/UX Design Intern",
            organization: "Tech Startup Indonesia",
            description: "Designed user interfaces for mobile and web applications, conducted user research, and created interactive prototypes using Figma.",
            type: "work",
            icon: "💼"
        },
        {
            id: 3,
            year: "2023",
            title: "Frontend Developer",
            organization: "Freelance Projects",
            description: "Developed responsive websites and web applications for various clients using React, Next.js, and modern web technologies.",
            type: "work",
            icon: "💻"
        },
        {
            id: 4,
            year: "2023",
            title: "Best UI/UX Design Award",
            organization: "University Design Competition",
            description: "Won first place in university-wide design competition for innovative mobile app interface design.",
            type: "achievement",
            icon: "🏆"
        },
        {
            id: 5,
            year: "2022",
            title: "Web Development Bootcamp",
            organization: "Online Learning Platform",
            description: "Completed intensive 6-month bootcamp covering HTML, CSS, JavaScript, React, and Node.js fundamentals.",
            type: "education",
            icon: "📚"
        }
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'education':
                return 'from-blue-500 to-cyan-500'
            case 'work':
                return 'from-purple-500 to-pink-500'
            case 'achievement':
                return 'from-yellow-500 to-orange-500'
            default:
                return 'from-gray-500 to-gray-600'
        }
    }

    const getTypeBadge = (type: string) => {
        switch (type) {
            case 'education':
                return { label: 'Education', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' }
            case 'work':
                return { label: 'Work', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' }
            case 'achievement':
                return { label: 'Achievement', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' }
            default:
                return { label: 'Other', color: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' }
        }
    }

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience & Education
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        My journey through education, work experiences, and achievements
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-row`}
                            >
                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                                    <motion.div
                                        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                        whileHover={{ scale: 1.02, y: -5 }}
                                    >
                                        {/* Year Badge */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                {item.year}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeBadge(item.type).color}`}>
                                                {getTypeBadge(item.type).label}
                                            </span>
                                        </div>

                                        {/* Title & Organization */}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                                            {item.organization}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                                    <motion.div
                                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center text-2xl shadow-lg border-4 border-white dark:border-gray-900`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Want to know more about my journey?
                    </p>
                    <motion.button
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Full CV
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
