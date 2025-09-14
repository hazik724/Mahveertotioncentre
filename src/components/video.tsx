"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function LazyVideoResponsive() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.section
      className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      onViewportEnter={() => {
        if (videoRef.current && !isPlaying) {
          videoRef.current.play()
          setIsPlaying(true)
        }
      }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain sm:object-cover"
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.section>
  )
}
