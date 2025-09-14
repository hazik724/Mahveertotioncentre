"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import AnnouncementDialog from "../components/Announcement"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide relative">
          MTC
          <span className="absolute left-0 -bottom-1 w-12 h-[2px] bg-white rounded"></span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link prefetch
              key={link.href}
              href={link.href}
              className="relative text-white font-medium transition-colors duration-200 hover:text-gray-200"
            >
              {link.label}
              {/* Subtle underline hover */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <AnnouncementDialog />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-red-600 text-white px-4 pb-4 shadow-inner"
          >
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-2 rounded hover:bg-red-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <AnnouncementDialog />
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
