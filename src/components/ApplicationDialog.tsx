"use client";
import { useState } from "react";
import axios from "axios";

type ApplicationDialogProps = {
  jobId: number;
  jobTitle: string;
  open: boolean;
  onClose: () => void;
};

export default function ApplicationDialog({ jobId, jobTitle, open, onClose }: ApplicationDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:3000/applications", {
        ...formData,
        // careerId: jobId, // uncomment if your Application model still has careerId
      });
      alert(`Application for ${jobTitle} submitted! ✅`);
      setFormData({ name: "", email: "", phone: "", qualification: "" });
      onClose();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-2xl relative animate-slideIn">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-red-600">
          Apply for {jobTitle}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 font-semibold transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
