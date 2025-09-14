import api from "@/lib/api"
import ApplicationsTable from "./ApplicationsTable"

export default async function ApplicationsPage() {
  let applications = []
  try {
    const res = await api.get("/applications") // ✅ Your NestJS route
    applications = res.data
  } catch (err) {
    console.error("Failed to fetch applications:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>
      <ApplicationsTable initialData={applications} />
    </div>
  )
}
