import AnnouncementsTable from "./AnnouncementsTable"

export default async function AnnouncementsPage() {
  let announcements = []

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements`, {
      cache: "no-store", // ✅ always fetch fresh data
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    announcements = await res.json()
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
