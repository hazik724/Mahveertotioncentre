"use client"

import { motion } from "framer-motion"

export default function HeroVideo() {
  return (
    <section className="relative text-center py-32 text-white overflow-hidden rounded-2xl shadow-lg">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/bgVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating gradient shapes */}
      <motion.span
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-red-400 via-pink-300 to-yellow-200 rounded-full opacity-40 blur-3xl"
        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.span
        className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-pink-400 via-red-300 to-yellow-200 rounded-full opacity-30 blur-3xl"
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Mahveer Tuition Center
        </motion.h1>

        <motion.p
          className="text-lg mb-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Building future leaders through quality education, innovation, and care.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
         
        </motion.div>
      </div>
    </section>
  )
}
