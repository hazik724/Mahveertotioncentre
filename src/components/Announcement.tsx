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
import api from "@/lib/api";
import { toast } from "react-hot-toast"; // ✅ toast for errors

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
    let isMounted = true; // ✅ avoid setting state after unmount

    const fetchLatest = async () => {
      try {
        console.log("👉 NEXT_PUBLIC_API_URL =", process.env.NEXT_PUBLIC_API_URL);

        const res = await api.get("/announcements/latest");
        if (isMounted) {
          setLatest(res.data);
        }
        console.log("👉 Latest announcement:", res.data);
      } catch (error) {
        console.error("❌ Error fetching latest announcement:", error);
        toast.error("Failed to load announcements.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLatest();

    return () => {
      isMounted = false;
    };
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

            {/* ✅ Loading / Data / Empty */}
            {loading ? (
              <p className="text-gray-500">⏳ Loading...</p>
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

            {/* ✅ Link to all announcements */}
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
                    router.push("/announcements");
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
