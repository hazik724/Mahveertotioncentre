"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/lib/api";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SchoolHeaderWithAnnouncement() {
  const [isOpen, setIsOpen] = useState(false);
  const [latestAnnouncement, setLatestAnnouncement] = useState<{ title: string; content: string; createdAt: string } | null>(null);

  const navLinks = [
    { name: "Home", href: "/school/about" },
    { name: "Announcements", href: "/school/announcements" },
    { name: "Reviews", href: "/school/reviews" },
    { name: "Gallery", href: "/school/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Tuition", href: "/" }
  ];

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await api.get("/school/announcements?latest=1");
        setLatestAnnouncement(res.data[0] || null);
      } catch (err) {
        console.error("Failed to fetch latest announcement:", err);
      }
    }
    fetchLatest();
  }, []);

  return (
    <header className="bg-red-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl font-bold">Mahveer School</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-200 transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}

          {/* Latest announcement button */}
         {latestAnnouncement && (
  <Dialog>
    <DialogTrigger asChild>
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }}
        whileTap={{ scale: 0.95 }}
        className="ml-4 px-5 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Latest Announcement
      </motion.button>
    </DialogTrigger>

    <DialogContent className="sm:max-w-lg w-full rounded-xl bg-white shadow-2xl p-6 border border-red-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-600">
            {latestAnnouncement.title}
          </DialogTitle>
        </DialogHeader>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {latestAnnouncement.content}
        </p>

        <p className="mt-4 text-gray-400 text-sm italic">
          {new Date(latestAnnouncement.createdAt).toLocaleDateString()}
        </p>

        <div className="mt-6 flex justify-between items-center flex-wrap gap-3">
          <Link href="/school/announcements">
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              View All
            </Button>
          </Link>
          <Button
            variant="default"
            className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
          >
            Close
          </Button>
        </div>
      </motion.div>
    </DialogContent>
  </Dialog>
)}

        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-full bg-white rounded transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-red-600 overflow-hidden md:hidden"
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile latest announcement button */}
              {latestAnnouncement && (
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-2 text-red-600 bg-white hover:bg-gray-200 font-bold">
                        Latest Announcement
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{latestAnnouncement.title}</DialogTitle>
                      </DialogHeader>
                      <p className="mt-2">{latestAnnouncement.content}</p>
                      <p className="mt-4 text-gray-500 text-sm">
                        {new Date(latestAnnouncement.createdAt).toLocaleDateString()}
                      </p>
                      <div className="mt-4 text-right">
                        <Link href="/school/announcements">
                          <Button variant="outline">View All</Button>
                        </Link>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
