// components/dashboard/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNav } from "@/lib/nav";
import NavItem from "./NavItem";

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="px-5 py-5">
        <Link href="/dashboard" onClick={onNavigate}>
          <div className="text-xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
              School Dashboard
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-2 pb-4">
        {dashboardNav.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
            onClick={onNavigate}
          />
        ))}
      </nav>

      <div className="border-t px-4 py-3 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Your School
      </div>
    </div>
  );
}
