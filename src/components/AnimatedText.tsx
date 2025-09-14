"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedText({ children, delay = 0, className }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
