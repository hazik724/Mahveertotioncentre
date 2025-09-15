"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, Transition } from "framer-motion"
import { useRef } from "react"

// Fix typing issue here 👇
const floatTransition: Transition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  // Artistic parallax effect
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-100 text-gray-900">
      {/* Abstract Blobs */}
      <motion.div
        style={{ y: yBlob1 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={floatTransition}
        className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        style={{ y: yBlob2 }}
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ ...floatTransition, duration: 4 }}
        className="absolute bottom-[-10rem] right-[-6rem] w-[30rem] h-[30rem] bg-red-300 rounded-full blur-3xl opacity-20"
      />

      {/* Floating doodle icons */}
      <motion.span
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-32 text-red-400 text-5xl select-none"
      >
        ✨
      </motion.span>
      <motion.span
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 text-red-500 text-4xl select-none"
      >
        🌸
      </motion.span>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 relative z-10">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl sm:text-5xl lg:text-3xl font-extrabold leading-snug text-red-700 drop-shadow-sm"
            >
              <span className="inline-block bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
                Pre-Medical (Future Doctors / Healers)
              </span>
              <br/>
              
              <br />
              Pre-Engineering (Future Innovators / Engineers)
            </motion.h1>

            <motion.p
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 max-w-xl text-lg text-gray-700 leading-relaxed"
            >“Building Minds, Creating Futures” <br />

“Innovation Starts With Knowledge” <br />

“Tomorrow’s Engineers Learn Today” <br />

“Designing Future With Precision” <br />

“Where Engineering Dreams Begin” <br />
            </motion.p>

          
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg rounded-[2.5rem] bg-white p-8 shadow-xl border border-red-100"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Floating images */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={floatTransition}
                  className="col-span-2 sm:col-span-1 overflow-hidden rounded-3xl shadow-lg"
                >
                  <Image
                    src="/images/Engineering.jpg"
                    alt="Kids learning"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ ...floatTransition, duration: 3.5 }}
                  className="hidden sm:block overflow-hidden rounded-3xl shadow-lg"
                >
                  <Image
                    src="/images/Medical.jpg"
                    alt="Kid smiling"
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>

              
            </motion.div>
          </div>
        </div>
      </div>

      {/* Artistic Wave Separator */}
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
