"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

const team: TeamMember[] = [
  { name: "John Doe", role: "Principal", img: "/images/user.jpg" },
  { name: "Sarah Khan", role: "Vice Principal", img: "/images/user.jpg" },
  { name: "Ali Raza", role: "Math Teacher", img: "/images/user.jpg" },
  { name: "Emily Smith", role: "Science Teacher", img: "/images/user.jpg" },
  { name: "Ahmed Ali", role: "Sports Coach", img: "/images/user.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Meet Our <span className="text-red-600">Faculty</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...team, ...team].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 2 }}
              className="relative min-w-[250px] h-[340px] rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/30 cursor-pointer group"
            >
              {/* Faculty Image */}
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Overlay Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-6 text-center text-white"
              >
                <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
                <p className="text-sm opacity-80">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-red-200 rounded-full blur-[200px] -top-40 -left-40 opacity-30"></div>
      <div className="absolute w-[400px] h-[400px] bg-rose-400 rounded-full blur-[200px] -bottom-40 -right-40 opacity-30"></div>
    </section>
  );
}
