"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, Transition } from "framer-motion"
import { useRef } from "react"

const floatTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
}

export default function AdminInfo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -30])
  const yShape1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const yShape2 = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} className="relative rounded-3xl bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24 lg:py-32 overflow-hidden">
      {/* Animated Abstract Shapes */}
      <motion.div
        style={{ y: yShape1 }}
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={floatTransition}
        className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-tr from-red-200 via-pink-200 to-white rounded-full opacity-40 blur-3xl"
      />
      <motion.div
        style={{ y: yShape2 }}
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{ ...floatTransition, duration: 5 }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tr from-red-300 via-pink-300 to-white rounded-full opacity-30 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Text */}
        <div className="lg:col-span-7 relative z-10">
          <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 40, opacity: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 relative inline-block"
          >
            Meet Our Administrator
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-gradient-to-r from-red-600 to-pink-500 rounded-full"></span>
          </motion.h2>

          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl"
          >
            <span className="font-semibold text-red-600">Mahveer Kumar Lohia</span> leads
            our school with over 15 years of experience in education and administration. 
            Passionate about nurturing talent and fostering innovation, she ensures every
            student thrives in a safe, inspiring, and supportive environment.
          </motion.p>

          <motion.blockquote
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 pl-4 border-l-4 border-red-500 text-gray-700 italic"
          >
            “Education is the art of unlocking potential, one student at a time.”
          </motion.blockquote>
        </div>

        {/* RIGHT: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
          {/* Floating image background shape */}
          <motion.div
            style={{ y: yImg }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={floatTransition}
            className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-tr from-gray-200 via-black-200 to-white rounded-full opacity-30 blur-3xl rouded-3xl"
          />

          {/* Admin Image */}
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.95, opacity: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <Image
              src="/images/Mahveer1.jpg" // replace with actual admin image
              alt="Administrator"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>

      {/* Optional Decorative SVG Wave at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,128C672,149,768,139,864,117.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
    </section>
  )
}
