"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GalleryItem = {
  id: number;
  title: string;
  url: string;
};

export default function SchoolGalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/school/gallery`, {
          cache: "no-store",
        });
        const data = await res.json();
        setGallery(data);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      }
    }
    fetchGallery();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
        School Gallery
      </h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {gallery.map((item) => (
          <motion.div
            key={item.id}
            className="relative w-full break-inside-avoid rounded-xl overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full object-cover rounded-xl"
              style={{ display: "block" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
