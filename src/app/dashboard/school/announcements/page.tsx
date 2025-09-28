import SchoolAnnouncementsTable from "./SchoolAnnouncementsTable"

export default async function SchoolAnnouncementsPage() {
  let announcements = []

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/school/announcements`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    announcements = await res.json()
  } catch (err) {
    console.error("Failed to fetch school announcements:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">School Announcements</h1>
      <SchoolAnnouncementsTable initialData={announcements} />
    </div>
  )
}
