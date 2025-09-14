"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Job {
  id: number;
  title: string;
  desc: string;
}

interface Props {
  jobs: Job[];
}

export default function JobBoardClient({ jobs }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:4000/applications", {
        ...formData,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 2000);
      setFormData({ name: "", email: "", phone: "", qualification: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative bg-white border border-red-100 rounded-2xl shadow-lg overflow-hidden group"
        >
          {/* 🔴 Top Accent Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>

          {/* 🔹 Card Content */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
              {job.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {job.desc}
            </p>

            {/* Apply Button */}
            <Dialog open={open && selectedJob?.id === job.id} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-md hover:from-red-700 hover:to-red-600 transition-all"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg rounded-2xl shadow-2xl p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-red-600 mb-2">
                    Apply for {job.title}
                  </DialogTitle>
                  <p className="text-gray-500 text-sm">
                    Fill in your details and we’ll get back to you soon.
                  </p>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  <Input
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                  <Input
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                  <Textarea
                    name="qualification"
                    placeholder="Your Qualifications"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />

                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-md hover:from-red-700 hover:to-red-600 transition-all"
                    onClick={handleSubmit}
                  >
                    Submit Application
                  </Button>
                </div>

                {/* ✅ Success animation */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center p-6"
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mb-3"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-16 h-16 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </motion.div>
                      <p className="text-green-600 font-semibold text-lg">
                        Application Sent!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
