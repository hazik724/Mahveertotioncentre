import api from "@/lib/api"
import AnnouncementsTable from "./AnnouncementsTable"

export default async function AnnouncementsPage() {
  let announcements = []
  try {
    const res = await api.get("/announcements")
    announcements = res.data
  } catch (err) {
    console.error("Failed to fetch announcements:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Announcements</h1>
      <AnnouncementsTable initialData={announcements} />
    </div>
  )
}
