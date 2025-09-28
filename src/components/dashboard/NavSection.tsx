// components/NavSection.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
}

interface NavSectionProps {
  title?: string
  items: NavItem[]
}

export default function NavSection({ title, items }: NavSectionProps) {
  const pathname = usePathname()

  return (
    <div>
      {title && <div className="mt-6 mb-2 text-xs font-bold text-red-500">{title}</div>}
      {items.map((item) => {
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
    </div>
  )
}
