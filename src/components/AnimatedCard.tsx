"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function AnimatedCard({ icon, title, description, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
    >
      <div className="text-red-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
