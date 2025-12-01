'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function About() {
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  const infoCards = [
    {
      title: "Nama",
      content: "Muh. Ikhsan Fahmi",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Domisili",
      content: "Bandung, Indonesia",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "ikhsan.f3105@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Phone",
      content: "+62 822-4658-5832",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Pendidikan",
      content: "Telkom University",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
        </svg>
      )
    },
    {
      title: "Status",
      content: "Mahasiswa",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const interests = [
    "Frontend Development",
    "UI/UX Design",
    "Graphic Design"
  ]

  return (
    <>
      {/* About Section */}
      <section id="about" className="min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center px-6 pt-20 pb-20 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
              About Me
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about creating innovative solutions through technology
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center lg:items-start">
            {/* Left Column - Photo Card */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative group"
              >
                {/* Main Photo Card */}
                <motion.div
                  className="w-64 h-80 sm:w-72 sm:h-[28rem] md:w-80 md:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src="/assets/myphoto.jpg"
                    alt="Muh. Ikhsan Fahmi"
                    fill
                    className="object-cover transition-transform duration-200"
                    priority
                  />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-400 rounded-full opacity-70"
                    animate={{
                      y: [0, 15, 0],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  ></motion.div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-200"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Single Card containing all content */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 md:p-5"
              >
                {/* Hello There Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mb-3"
                >
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Hello There!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                    Saya adalah mahasiswa Teknologi Informasi di Telkom University yang memiliki passion dalam Graphic Design, dan UI/UX Design. Saya senang mempelajari hal-hal baru seperti saat ini, saya tertarik memahami Frontend Development dan selalu berusaha untuk mengembangkan kemampuan saya dalam bidang desain, khususnya dalam Graphic Design dan UI/UX design.
                  </p>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="grid grid-cols-2 gap-2 mb-3"
                >
                  {infoCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                      viewport={{ once: false, amount: 0.3 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2.5 shadow-sm hover:shadow-md transition-all duration-100 cursor-pointer group border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-100">
                          <div className="text-white flex items-center justify-center">
                            {card.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-500 dark:text-gray-400 text-[10px] md:text-xs mb-0.5">
                            {card.title}
                          </h3>
                          <p className="text-gray-900 dark:text-white text-[11px] md:text-xs font-semibold leading-tight">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Interests & Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mb-3"
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Interests & Focus
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {interests.map((interest, index) => (
                      <motion.span
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * index + 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-100"
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 dark:border-gray-600 my-3"></div>

                  {/* Download CV Button */}
                  <motion.button
                    onClick={() => setShowDownloadModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden group w-full"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Download My CV
                      <motion.svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </motion.svg>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      initial={false}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CV Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowDownloadModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Download My CV
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get my latest resume with all my experience and skills.
              </p>

              <div className="text-left mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What's included:
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Professional experience & skills</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Education & certifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Portfolio highlights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Contact information</span>
                  </li>
                </ul>
              </div>

              <motion.a
                href="/cv/CV_Muh_Ikhsan_Fahmi.pdf"
                download="CV_Muh_Ikhsan_Fahmi.pdf"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg mb-4 block text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowDownloadModal(false)}
              >
                Download CV (PDF)
              </motion.a>

              <button
                onClick={() => setShowDownloadModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}