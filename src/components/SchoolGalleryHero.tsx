"use client";

import { motion } from "framer-motion";

export default function GalleryHeroText() {
  const text = "Welcome to MTC School Gallery • Explore Creativity • Memories • Fun • Learning • ";
  const repeatedText = Array(20).fill(text).join(" "); // Repeat for continuous scroll

  return (
    <section className="relative bg-red-50 py-16 overflow-hidden rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-red-600 text-center mb-10 z-10 relative">
          School Gallery
        </h1>

        {/* Animated Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="whitespace-nowrap text-2xl sm:text-3xl font-bold text-red-600"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {repeatedText}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
