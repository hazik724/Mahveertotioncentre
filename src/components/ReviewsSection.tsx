"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import api from "@/lib/api"; // ✅ use centralized axios instance

type Review = {
  id: number;
  name: string;
  message: string;
  createdAt: string;
};

export default function ReviewsSection({ initialReviews }: { initialReviews: Review[] }) {
  const [reviews, setReviews] = useState<Review[]>(
    [...initialReviews].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  );

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Handle form submit with api.ts
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await api.post<Review>("/reviews", { name, message });

      // Insert new review at the top
      setReviews([res.data, ...reviews]);
      setName("");
      setMessage("");

      toast.success("🎉 Review submitted successfully!");
    } catch (err) {
      toast.error("❌ Failed to submit review");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Students Reviews ❤️
      </motion.h2>

      {/* Review Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-lg mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Share Your Experience
        </h3>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none mb-4"
          required
        />
        <textarea
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none mb-6"
          rows={4}
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:opacity-90 text-white font-semibold py-3 rounded-xl transition transform hover:scale-[1.02]"
        >
          Submit Review
        </button>
      </motion.form>

      {/* Display Reviews */}
      <div className="w-full max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <motion.div
              key={r.id}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-white/40 hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg text-red-600 mb-2">{r.name}</h3>
              <p className="text-gray-700 italic leading-relaxed">“{r.message}”</p>
              <p className="text-xs text-gray-400 mt-3">
                {new Date(r.createdAt).toLocaleDateString()}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No reviews yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
}
