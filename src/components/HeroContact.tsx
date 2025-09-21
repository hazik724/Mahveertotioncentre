"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-br from-red-600 via-rose-500 to-red-700 text-white overflow-hidden rounded-b-3xl">
      {/* Decorative Background Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[600px] h-[600px] bg-white rounded-full blur-3xl -top-40 -left-40"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.8, delay: 0.3 }}
        className="absolute w-[500px] h-[500px] bg-rose-300 rounded-full blur-3xl -bottom-32 -right-32"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Let’s <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">Connect</span>
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl opacity-90"
        >
          Have questions or ideas? We’re here to listen and help you grow. Reach out to our team today.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="#contact-form"
            className="px-8 py-3 rounded-2xl bg-white text-red-600 font-semibold shadow-lg hover:shadow-2xl transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
