"use client"

import { motion } from "framer-motion"

export default function FeaturesSection() {
  const cardVariants = {
    hidden: { scaleY: 0, opacity: 0, originY: 1 },
    visible: { scaleY: 1, opacity: 1, originY: 1 },
  }

  return (
    <>
      {/* Blockquote */}
      <section>
        <motion.blockquote
          className="text-5xl font-extrabold mb-8 mt-30 text-red-600 tracking-widest text-center origin-bottom"
          initial={{ scaleY: 0, opacity: 0, originY: 1 }}
          whileInView={{ scaleY: 1, opacity: 1, originY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          What  
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-0 before:bg-red-500 ml-3 mr-3">
            <span className="relative text-white dark:text-gray-950">M T C</span>
          </span>
          offers you.
        </motion.blockquote>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-22 mb-30">
        {[
          { title: "Experienced Teachers", text: "At Mahveer Tuition Center, our experienced teachers are the heart of everything we do. Each educator brings years of hands-on teaching experience, a deep understanding of the curriculum, and a genuine passion for nurturing young minds. They don’t just teach; they inspire curiosity, critical thinking, and a love for learning that lasts a lifetime. By using innovative teaching methods, personalized guidance, and continuous mentorship, our teachers ensure that every student receives the support they need to excel academically and grow confidently. From one-on-one attention to engaging classroom discussions, " },
          { title: "Acadmeic Exellence", text: "At Mahveer Tuition Center, academic excellence is at the core of our mission. We go beyond traditional learning by providing structured lessons, advanced resources, and personalized guidance that empower students to achieve outstanding results. Our curriculum is designed to strengthen concepts, sharpen problem-solving skills, and build confidence in every subject. With continuous assessments, feedback, and one-on-one mentorship, we ensure that every student not only performs well in exams but also develops the discipline and focus necessary to excel in higher education and beyond." },
          { title: "Safe & Supportive Environment", text: "We believe that learning flourishes best in a safe and supportive environment. At Mahveer Tuition Center, every student is valued, respected, and encouraged to grow both academically and personally. Our classrooms foster positivity, inclusivity, and collaboration, creating a space where students feel comfortable asking questions, exploring ideas, and expressing themselves. With attentive teachers and a culture built on trust and care, MTC provides a nurturing atmosphere that helps students build resilience, confidence, and strong character alongside their academic journey." },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition origin-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} // <-- safe way
          >
            <h3 className="text-xl font-bold mb-5 text-red-600">{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </section>
    </>
  )
}
