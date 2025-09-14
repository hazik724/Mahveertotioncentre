"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import api from "@/lib/api"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Megaphone,
  FileText,
  Star,
  Mail,
} from "lucide-react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

export default function DashboardPage() {
  const [stats, setStats] = useState({
    announcements: 0,
    applications: 0,
    reviews: 0,
    contacts: 0,
  })
  const [applicationsData, setApplicationsData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [ann, apps, revs, cons] = await Promise.all([
          api.get("/announcements"),
          api.get("/applications"),
          api.get("/reviews"),
          api.get("/contacts"),
        ])

        setStats({
          announcements: ann.data.length,
          applications: apps.data.length,
          reviews: revs.data.length,
          contacts: cons.data.length,
        })

        // Group applications per month
        const grouped = apps.data.reduce((acc: any, app: any) => {
          const month = new Date(app.createdAt).toLocaleString("default", { month: "short" })
          acc[month] = (acc[month] || 0) + 1
          return acc
        }, {})

        setApplicationsData(
          Object.entries(grouped).map(([month, count]) => ({
            month,
            count,
          }))
        )
      } catch (err) {
        console.error("Failed to fetch stats:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const cards = [
    {
      title: "Announcements",
      value: stats.announcements,
      icon: <Megaphone className="w-10 h-10 text-white" />,
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Applications",
      value: stats.applications,
      icon: <FileText className="w-10 h-10 text-white" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Reviews",
      value: stats.reviews,
      icon: <Star className="w-10 h-10 text-white" />,
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Contacts",
      value: stats.contacts,
      icon: <Mail className="w-10 h-10 text-white" />,
      gradient: "from-rose-500 to-red-700",
    },
  ]

  // 🌟 Spinner while loading
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full shadow-lg"
        />
      </div>
    )
  }

  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-100">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-red-600 via-rose-500 to-orange-400 text-transparent bg-clip-text text-center drop-shadow-lg"
      >
        Dashboard Analytics
      </motion.h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <Card className="rounded-3xl shadow-2xl border-0 bg-white/40 backdrop-blur-xl overflow-hidden hover:scale-105 transition-transform">
              <div className={`bg-gradient-to-r ${card.gradient} p-6 flex items-center justify-center`}>
                {card.icon}
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-700 tracking-wide">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-extrabold text-gray-900">
                  {card.value}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Applications Chart */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Card className="rounded-3xl shadow-xl border-0 bg-white/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Applications Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={applicationsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#374151" />
                <YAxis stroke="#374151" />
                <Tooltip />
                <Bar dataKey="count" fill="url(#colorApps)" radius={[10, 10, 0, 0]} />
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
