"use client";

import { motion } from "framer-motion";
import { GraduationCap, Home, NotebookPen, Laptop } from "lucide-react";

const features = [
  {
    icon: <NotebookPen className="w-10 h-10 text-red-600" />,
    title: "Study material",
    description:
      "We provide students with well-structured study notes, past papers, and exam-focused guides that simplify even the toughest concepts. Our materials are carefully designed to match the latest curriculum and exam requirements, helping students prepare with confidence and efficiency.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-red-600" />,
    title: "Digital Resources",
    description:
      "Learning at MTC goes beyond the classroom. With access to multimedia tools, interactive lessons, and online resources, students benefit from a modern learning approach that makes complex topics engaging and easy to understand.",
  },
  {
    icon: <Home className="w-10 h-10 text-red-600" />,
    title: "Comfortable Environment",
    description:
      "We believe that a peaceful and supportive environment is key to effective learning. Our classrooms are spacious, clean, and student-friendly, ensuring comfort while maintaining focus and discipline.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-red-600" />,
    title: "Counseling & Guidance",
    description:
      "At MTC, we go beyond academics by offering personalized counseling sessions. Whether it’s choosing the right career path or overcoming academic challenges, our mentors provide guidance that helps students make informed and confident decisions about their future.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-red-600 py-16 px-6 lg:px-20 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What make   M T C  diffrent from others ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-md rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
