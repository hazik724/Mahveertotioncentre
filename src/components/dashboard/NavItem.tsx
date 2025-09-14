// components/dashboard/NavItem.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavItem({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}: {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
        active
          ? "bg-red-600/10 text-red-700 ring-1 ring-red-600/20"
          : "hover:bg-red-600/5"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="font-medium">{label}</span>
    </Link>
  );
}
