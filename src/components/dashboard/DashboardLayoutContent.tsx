"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, LayoutDashboard, Megaphone, FileText, Briefcase,Star, Mail } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Announcements", href: "/dashboard/announcements", icon: <Megaphone className="w-5 h-5" /> },
  { name: "Applications", href: "/dashboard/applications", icon: <FileText className="w-5 h-5" /> },
  { name: "Jobs", href: "/dashboard/jobs", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Reviews", href: "/dashboard/reviews", icon: <Star className="w-5 h-5" /> },
  { name: "Contacts", href: "/dashboard/contacts", icon: <Mail className="w-5 h-5" /> },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    
    <div className="flex min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white/80 backdrop-blur-xl border-r border-red-200 shadow-xl transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
            Admin Panel
          </h2>
        </div>
        <nav className="px-4 space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  active
                    ? "bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-red-200 px-6 py-4 shadow-sm">
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-red-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-xl font-bold text-gray-800">School Admin Dashboard</h1>
          <div className="text-sm text-gray-500">Admin</div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
