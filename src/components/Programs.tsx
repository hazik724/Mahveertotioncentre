"use client"

import { motion } from "framer-motion"
import { BookOpen, Cog, Languages,HeartPulse, Gamepad2 } from "lucide-react"

const programs = [
  {
    title: "Pre-",
    subtitle: "Engeenering",
    description: "The Pre-Engineering program is designed for future innovators and problem-solvers. Covering mathematics, physics, and chemistry in depth, we prepare students for engineering universities and technical careers. Our approach emphasizes analytical thinking, practical application, and a strong grasp of core concepts to shape tomorrow’s engineers.",
    icon: Cog,
    color: "bg-red-600",
  },
  {
    title: "Pre-",
    subtitle: "Medical",
    description: "Our Pre-Medical program lays the foundation for aspiring doctors, pharmacists, and life science professionals. With expert faculty, detailed subject coverage, and a focus on conceptual clarity, students are prepared for both board exams and entry tests. At MTC, we blend theory with practice, ensuring students gain the knowledge and confidence to excel in the medical field.",
    icon: HeartPulse,
    color: "bg-red-600",
  },
  {
    title: "Exam Preparation ",
    subtitle: "Course",
    description: "Success in exams requires more than just memorization — it needs strategy, discipline, and expert guidance. Our Exam Preparation program focuses on past papers, time management, and concept-based revision. With personalized coaching and test sessions, we ensure every student walks into the exam hall with confidence and clarity.",
    icon: BookOpen,
    color: "bg-red-600",
  },
  {
    title: "Language & Communication ",
    subtitle: "Skills",
    description: "Strong communication opens doors to limitless opportunities. This program helps students improve their English speaking, writing, and presentation skills. Through interactive sessions, debates, and practical exercises, students learn to express themselves with confidence, a skill that benefits them not only academically but also in their personal and professional lives.",
    icon: Languages,
    color: "bg-red-600",
  },
]

export default function Programs() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Our Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-2 text-lg text-gray-600"
        >
          Exciting Features to Make Learning Fun!
        </motion.p>

        {/* Program Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${program.color} text-white rounded-2xl shadow-lg p-6 flex flex-col`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-800 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">
                  {program.title}{" "}
                  <span className="italic font-medium">{program.subtitle}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
