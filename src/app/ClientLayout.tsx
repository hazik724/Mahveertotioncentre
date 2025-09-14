"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import SyncLoader from "react-spinners/SyncLoader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // ✅ Show loader on first load + every route change
  useEffect(() => {
    if (!pathname) return;

    setLoading(true); // show loader immediately
    const timer = setTimeout(() => setLoading(false), 1200); // control loader duration
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loader + Page Transition */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <SyncLoader color="#dc2626" size={15} />
          </motion.div>
        ) : (
          <motion.div
            key={pathname} // ensures animation per route
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Toasts available everywhere */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "12px",
            background: "linear-gradient(135deg, #dc2626, #f87171)",
            color: "#fff",
            padding: "12px 16px",
            fontWeight: "500",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          },
        }}
      />
    </>
  );
}
