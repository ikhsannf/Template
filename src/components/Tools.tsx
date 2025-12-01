'use client'

import { motion } from 'framer-motion'

interface Tool {
    name: string
    category: 'design' | 'frontend' | 'backend' | 'other'
    icon: string
    color: string
}

export default function Tools() {
    const tools: Tool[] = [
        // Design Tools
        { name: "Figma", category: "design", icon: "🎨", color: "from-purple-500 to-pink-500" },
        { name: "Adobe XD", category: "design", icon: "💎", color: "from-pink-500 to-red-500" },
        { name: "Photoshop", category: "design", icon: "🖼️", color: "from-blue-500 to-cyan-500" },

        // Frontend
        { name: "React", category: "frontend", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", category: "frontend", icon: "▲", color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", category: "frontend", icon: "📘", color: "from-blue-600 to-blue-800" },
        { name: "Tailwind", category: "frontend", icon: "🎐", color: "from-teal-500 to-cyan-500" },
        { name: "Vue.js", category: "frontend", icon: "💚", color: "from-green-500 to-emerald-500" },

        // Backend
        { name: "Node.js", category: "backend", icon: "🟢", color: "from-green-600 to-green-800" },
        { name: "MongoDB", category: "backend", icon: "🍃", color: "from-green-500 to-teal-500" },
        { name: "Firebase", category: "backend", icon: "🔥", color: "from-yellow-500 to-orange-500" },

        // Other
        { name: "Git", category: "other", icon: "📦", color: "from-orange-500 to-red-500" },
        { name: "VS Code", category: "other", icon: "💻", color: "from-blue-500 to-indigo-500" },
        { name: "Postman", category: "other", icon: "📮", color: "from-orange-400 to-orange-600" }
    ]

    const categories = [
        { id: 'design', label: 'Design Tools', emoji: '🎨' },
        { id: 'frontend', label: 'Frontend', emoji: '💻' },
        { id: 'backend', label: 'Backend', emoji: '⚙️' },
        { id: 'other', label: 'Other Tools', emoji: '🛠️' }
    ]

    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Tools & Technologies
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Tools by Category */}
                <div className="space-y-12">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                                <span className="text-3xl">{category.emoji}</span>
                                {category.label}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                                {tools
                                    .filter(tool => tool.category === category.id)
                                    .map((tool, index) => (
                                        <motion.div
                                            key={tool.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="group relative"
                                        >
                                            <div className={`bg-gradient-to-br ${tool.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center aspect-square select-none`}>
                                                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                                    {tool.icon}
                                                </div>
                                                <div className="text-white font-bold text-sm text-center">
                                                    {tool.name}
                                                </div>
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                                {tool.name}
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    )
}
