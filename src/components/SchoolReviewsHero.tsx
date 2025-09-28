"use client"

import { motion } from "framer-motion"

export default function ReviewsHero() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-900 overflow-hidden rounded-b-3xl">
      {/* Animated decorative shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-10 -left-10 w-40 h-40 bg-red-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-60 h-60 bg-red-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-100 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 mb-6"
        >
          What Parents & Students Say
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Hear from our school community! Parents and students share real experiences,
          growth stories, and the success they’ve achieved with Mahveer School.
          Your feedback is invaluable to us.
        </motion.p>

        {/* Animated badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <span className="px-4 py-2 bg-white rounded-full shadow text-red-600 font-semibold text-sm">
            ★ Trusted by Parents
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-red-600 font-semibold text-sm">
            🌟 Loved by Students
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-red-600 font-semibold text-sm">
            🏆 Academic Excellence
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-red-600 font-semibold text-sm">
            📝 Share Your Review
          </span>
        </motion.div>

        
      </div>
    </section>
  )
}
