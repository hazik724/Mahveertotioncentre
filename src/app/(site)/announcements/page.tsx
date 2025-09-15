import type { Metadata } from "next";
import api from "@/lib/api"; // ✅ centralized axios

type Announcement = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export const metadata: Metadata = {
  title: "Announcements | My School",
  description: "Stay updated with the latest announcements from our school.",
};

export default async function AnnouncementsPage() {
  let announcements: Announcement[] = [];

  try {
    const res = await api.get<Announcement[]>("/announcements");
    announcements = res.data;
  } catch {
    // ✅ Fail silently and show UI message
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600 text-lg">
          🚨 Failed to load announcements. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-600">
        📢 Announcements from Principal
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {announcements.length > 0 ? (
          announcements.map((a) => (
            <div
              key={a.id}
              className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-red-600">{a.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(a.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">{a.content}</p>
              </div>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Announcement from Principal
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No announcements available.
          </p>
        )}
      </div>
    </div>
  );
}
