'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Statistics from '../components/Statistics'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
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
      <Contact />

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