"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ import next/image

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
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20">
        Meet Our <span className="text-red-600">Faculty</span>
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate array for infinite loop */}
          {[...team, ...team].map((member, index) => (
            <div
              key={index}
              className="relative min-w-[220px] h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* ✅ Replaced img with Next.js Image */}
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, 220px" // responsive size hint
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

