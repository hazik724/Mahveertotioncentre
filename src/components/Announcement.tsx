"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

type Announcement = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function AnnouncementDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [latest, setLatest] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await axios.get("http://localhost:4000/announcements/latest"); 
        setLatest(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching latest announcement:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="font-medium hover:text-red-600 transition"
        >
          Announcements
        </Button>
      </DialogTrigger>

      <AnimatePresence>
        {open && (
          <DialogContent className="sm:max-w-lg text-red-600">
            <DialogHeader>
              <DialogTitle>Latest Announcement</DialogTitle>
            </DialogHeader>

            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : latest ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-4 border rounded-lg bg-gray-50 shadow-md"
              >
                <h3 className="text-lg font-semibold">{latest.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(latest.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700">{latest.content}</p>
              </motion.div>
            ) : (
              <p className="text-gray-500">No announcements available.</p>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    router.push("/announncement"); // full announcements page
                  }, 300);
                }}
              >
                View All Announcements
              </Button>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
