'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface Project {
    id: number
    title: string
    description: string
    category: 'web' | 'mobile' | 'design'
    technologies: string[]
    image: string
    liveUrl?: string
    githubUrl?: string
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all')

    const projects: Project[] = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Modern e-commerce website with shopping cart, payment integration, and admin dashboard",
            category: "web",
            technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
            image: "/projects/ecommerce.jpg",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management tool with drag & drop, real-time updates, and team features",
            category: "web",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            image: "/projects/taskapp.jpg",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Mobile Banking UI",
            description: "Clean and intuitive mobile banking interface with modern design principles",
            category: "design",
            technologies: ["Figma", "UI/UX", "Prototyping"],
            image: "/projects/banking.jpg",
            liveUrl: "#"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Real-time weather application with beautiful data visualization and forecasts",
            category: "web",
            technologies: ["Vue.js", "Chart.js", "API"],
            image: "/projects/weather.jpg",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 5,
            title: "Fitness Tracker App",
            description: "Mobile app design for tracking workouts, nutrition, and health metrics",
            category: "mobile",
            technologies: ["React Native", "Firebase", "UI/UX"],
            image: "/projects/fitness.jpg",
            liveUrl: "#"
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Creative portfolio website with stunning animations and modern design",
            category: "web",
            technologies: ["Next.js", "Framer Motion", "Tailwind"],
            image: "/projects/portfolio.jpg",
            liveUrl: "#",
            githubUrl: "#"
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    const filters = [
        { id: 'all', label: 'All Projects', icon: '🎨' },
        { id: 'web', label: 'Web Apps', icon: '💻' },
        { id: 'mobile', label: 'Mobile', icon: '📱' },
        { id: 'design', label: 'UI/UX', icon: '✨' }
    ]

    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                        A collection of my recent work showcasing web development, mobile apps, and UI/UX design
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 lg:mb-16 px-2"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id as any)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 ${activeFilter === filter.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-1 sm:mr-2">{filter.icon}</span>
                            <span className="hidden xs:inline sm:inline">{filter.label}</span>
                            <span className="xs:hidden sm:hidden">{filter.id === 'all' ? 'All' : filter.id}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                {/* Project Image */}
                                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-white text-4xl sm:text-5xl lg:text-6xl opacity-50">
                                            {project.category === 'web' && '💻'}
                                            {project.category === 'mobile' && '📱'}
                                            {project.category === 'design' && '🎨'}
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6 gap-2 sm:gap-4"
                                    >
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-900 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Live Demo
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-white rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                GitHub
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Project Info */}
                                <div className="p-4 sm:p-5 lg:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16 sm:py-20"
                    >
                        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
                            No projects found in this category
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
