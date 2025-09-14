// components/JobCardSkeleton.tsx
"use client";

export default function JobCardSkeleton() {
  return (
    <div className="bg-white border border-red-100 p-6 rounded-2xl shadow-lg animate-pulse">
      <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-6"></div>
      <div className="h-10 w-32 bg-gray-300 rounded"></div>
    </div>
  );
}
