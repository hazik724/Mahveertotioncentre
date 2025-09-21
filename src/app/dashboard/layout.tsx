// app/dashboard/layout.tsx
"use client";

import AdminGuard from "@/components/AdminGuard"; 
import DashboardLayoutContent from "@/components/dashboard/DashboardLayoutContent";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </AdminGuard>
  );
}
