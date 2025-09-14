"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const values = [
    { title: "Respect", desc: "At Mahveer Tuition Center, we believe that respect is the foundation of a healthy learning environment. We teach our students to value themselves, their peers, and their teachers, fostering a culture of kindness, empathy, and understanding. By encouraging respectful interactions, we create a space where every voice is heard and every individual feels valued." },
    { title: "Excellence", desc: "Excellence is at the core of everything we do. From providing high-quality teaching to maintaining modern facilities and resources, we ensure that students have every opportunity to achieve their best. We inspire learners to pursue excellence not only in academics but also in character, discipline, and lifelong learning." },
    { title: "Integrity", desc: "Integrity guides our actions and decisions at MTC. We emphasize honesty, responsibility, and strong moral values in both learning and personal growth. By instilling integrity, we prepare students to become individuals who uphold fairness and truth, ensuring they succeed with dignity and earn respect in every walk of life" },
    { title: "Creativity", desc: "At Mahveer Tuition Center, we see creativity as a powerful tool for learning and growth. We encourage students to think beyond traditional boundaries, explore new ideas, and express themselves in innovative ways. By integrating creative activities and problem-solving approaches into our teaching, we help learners develop curiosity, confidence." },
  ];

  return (
    <section className="py-20 px-6 md:px-24 bg-white">
      {/* Who We Are */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-red-600 mb-6 tracking-tight">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-25">
          Serving the community of <span className="font-semibold">[Location/City]</span>{" "}
          for over <span className="font-semibold">[X] years</span>. <br />
          Offering classes from <span className="font-semibold">[Nursery/Primary]</span>{" "}
          to <span className="font-semibold">[Grade/Level]</span>, following the{" "}
          <span className="font-semibold">[Curriculum Name]</span>. <br />
          Supported by a team of highly qualified and passionate teachers.
        </p>
      </motion.div>

      {/* Our Values */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold text-red-600 text-center mb-12">
          Our Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl bg-white">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-red-600 mb-12">
                    {val.title}
                  </h4>
                  <p className="text-gray-600">{val.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Join Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <h3 className="text-3xl font-semibold text-red-600 mb-6">
          Join Us on Our Journey
        </h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
          We welcome you to become part of the{" "}
          <span className="font-semibold">[Your School Name]</span> family – 
          where every child’s potential is valued, nurtured, and celebrated.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 bg-red-600 text-white text-lg rounded-full shadow hover:bg-gray-800 transition"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
