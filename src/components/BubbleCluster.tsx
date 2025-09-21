"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section>
      <div className="relative py-12 bg-red-600 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44 overflow-hidden rounded-lg">
        {/* Background Image for desktop */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="absolute inset-0 hidden lg:block"
>
  <Image
    src="/images/Books.jpg"
    alt="Books background"
    fill
    className="object-cover object-right-bottom"
    priority
  />
</motion.div>

        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-red-500 rounded-full opacity-20 blur-2xl"
              style={{
                width: Math.random() * 100 + 40,
                height: Math.random() * 100 + 40,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight"
            >
              Mahveer Tuition Center
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-base font-normal leading-7 text-gray-100 lg:max-w-md xl:pr-0 lg:pr-16"
            >“Mahveer Tuition Center – Shaping Minds, Building Futures.
Where Curiosity Meets Excellence in Every Classroom.”
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-3 py-3 text-base font-bold leading-7 text-red-600 transition-all duration-300 bg-white rounded-md shadow-md sm:px-6 hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
              >
                MDCAT
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-2 py-3 text-base font-bold leading-7 text-white transition-all duration-300 border rounded-md sm:px-4 border-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-offset-gray-900"
              >
                ECAT
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Mobile Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 lg:hidden"
        >
        <Image
  src="/images/bgg.webp"
  alt="Mobile background"
  priority
  width={1200}  // adjust width according to your design
  height={800}  // adjust height according to your design
  className="object-cover w-full h-full rounded-lg"
/>
        </motion.div>
      </div>
    </section>
  )
}
