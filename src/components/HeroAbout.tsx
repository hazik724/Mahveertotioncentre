"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-600 text-white overflow-hidden rounded-3xl mb-10">
      {/* Decorative background shapes */}
      <div className="absolute inset-0">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-20 right-20 w-60 h-60 bg-red-600 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            About <span className="text-yellow-300">Mahveer Tuition Center</span>
          </h1>
          <p className="text-lg sm:text-xl text-red-50 max-w-2xl mx-auto lg:mx-0">
            Shaping the future through knowledge, care, and innovation. At MTC,
            we are dedicated to providing students with the tools, values, and
            confidence to achieve excellence and become tomorrow’s leaders.
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30">
            <Image
              src="/images/AboutHeroImg.jpg"
              alt="MTC About Us"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
