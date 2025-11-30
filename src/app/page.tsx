'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Statistics from '../components/Statistics'
import Tools from '../components/Tools'
import ScrollToTop from '../components/ScrollToTop'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'

export default function Home() {
  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Frontend Development", level: 85 },
    { name: "React/Next.js", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Figma", level: 85 }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />

      {/* About Section */}
      <About />

      {/* Statistics Section */}
      <Statistics />

      {/* Projects Section */}
      <Projects />

      {/* Experience Timeline */}
      <Experience />

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6 pt-20 scroll-mt-20">
        <AnimatedSection>
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Skills & Expertise
            </motion.h2>
            <div className="max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mb-6 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Tools & Technologies */}
      <Tools />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center px-6 pt-20 scroll-mt-20">
        <AnimatedSection>
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <form className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-300 hover:border-blue-400 dark:hover:border-blue-500 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <AnimatedSection>
          <div className="container mx-auto px-4 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              © 2024 Muh. Ikhsan Fahmi. All rights reserved.
            </motion.p>
            <motion.p
              className="mt-2 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Made with ❤️ using Next.js, Tailwind CSS & Framer Motion
            </motion.p>
          </div>
        </AnimatedSection>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}