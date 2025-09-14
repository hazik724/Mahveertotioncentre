"use client"

import { motion } from "framer-motion"
import { Lightbulb, Heart, Star } from "lucide-react"

const features = [
  {
    title: "Creative Learning",
    description:
      "At Mahveer Tuition Center, we believe that true education goes beyond textbooks and exams. Our creative learning approach encourages students to think critically, explore new ideas, and express themselves through innovative activities. By blending academic concepts with practical applications, interactive lessons, and fun projects, we make learning engaging and memorable. This not only enhances understanding but also nurtures imagination, problem-solving skills, and a lifelong love for learning.",
    icon: Lightbulb,
  },
  {
    title: "Safe & Caring",
    description:
      "At Mahveer Tuition Center, we prioritize the well-being of every student by creating a safe and caring environment where learning thrives. Our classrooms are built on trust, respect, and encouragement, ensuring that students feel valued and supported at every step. With dedicated teachers who understand individual needs, we foster not just academic growth but also emotional confidence, helping students learn with comfort, positivity, and peace of mind.",
    icon: Heart,
  },
  {
    title: "Proven Excellence",
    description:
      "At Mahveer Tuition Center, our track record speaks for itself. Year after year, our students achieve top results in academics and beyond, proving the strength of our teaching methods and commitment to success. With a blend of experienced guidance, structured learning, and personalized support, we consistently deliver excellence that prepares students for higher education and future careers. Our history of achievement is not just about grades—it’s about building confident, capable individuals ready to excel in every aspect of life.",
    icon: Star,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-red-600"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Helping kids learn in the most fun and effective way possible.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-red-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-left"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
