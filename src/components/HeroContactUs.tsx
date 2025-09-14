"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white overflow-hidden">
      {/* Decorative glowing circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1], opacity: [0, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          Get in Touch With <span className="text-yellow-300">MTC</span>
        </motion.h1>

        <p className="text-lg text-white/90 mb-12">
          We’d love to hear from you. Whether it’s a question, feedback, or a
          new idea, our team is always ready to connect and help you move
          forward.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition">
            <Phone className="w-8 h-8 text-yellow-300 mb-3" />
            <p className="font-semibold">+92 300 1234567</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition">
            <Mail className="w-8 h-8 text-yellow-300 mb-3" />
            <p className="font-semibold">contact@mtc.edu.pk</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition">
            <MapPin className="w-8 h-8 text-yellow-300 mb-3" />
            <p className="font-semibold text-center">
              Main Campus, Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
