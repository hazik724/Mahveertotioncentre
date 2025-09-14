// lib/nav.ts
import {
  LayoutDashboard,
  Megaphone,
  BriefcaseBusiness,
  FileText,
  Star,
  Inbox,
  Users2,
} from "lucide-react";

export const dashboardNav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/announcements", label: "Announcements", icon: Megaphone },
  { href: "/dashboard/jobs", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/dashboard/applications", label: "Applications", icon: FileText },
  { href: "/dashboard/reviews", label: "Reviews", icon: Star },
  { href: "/dashboard/contacts", label: "Contacts", icon: Inbox },
  { href: "/dashboard/users", label: "Users", icon: Users2 },
];
