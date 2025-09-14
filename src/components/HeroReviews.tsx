"use client"

import { motion } from "framer-motion"

export default function ReviewsHero() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-900 overflow-hidden rounded-b-3xl">
      {/* Decorative shapes */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 mb-6"
        >
          What Our Students Say
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Discover how Mahveer Tuition Center has made a difference in the
          learning journeys of our students. Real stories, real impact, and a
          community built on trust and success.
        </motion.p>

        {/* Decorative trust badges */}
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
            🏆 Proven Success
          </span>
        </motion.div>
      </div>
    </section>
  )
}
