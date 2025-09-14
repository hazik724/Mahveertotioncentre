"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroCareers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-400 text-white">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-bounce" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Build Your Future <br /> With{" "}
            <span className="text-yellow-300">Mahveer Tuition Centre</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0"
          >
            At MTC, we believe in nurturing not just students, but also our
            team. Join a dynamic community of passionate educators and
            professionals dedicated to shaping brighter futures. Together, we
            create impact, inspire growth, and achieve excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="/careers/apply"
              className="px-6 py-3 rounded-xl font-semibold bg-white text-red-600 shadow-lg hover:bg-red-50 transition"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-xl font-semibold border border-white/40 text-white hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Right Image/Illustration */}
        <div className="lg:col-span-6 flex justify-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-md"
          >
            <Image
              src="/images/mahveer1.jpg"
              alt="Join our team"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-6 -left-6 bg-white text-red-600 px-4 py-2 rounded-xl font-bold shadow-lg"
            >
              🚀 We’re Hiring!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
