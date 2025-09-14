import api from "@/lib/api"
import JobsTable from "./JobsTable"

export default async function JobsPage() {
  let jobs = []
  try {
    const res = await api.get("/jobs") // NestJS endpoint
    jobs = res.data
  } catch (err) {
    console.error("Failed to fetch jobs:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>
      <JobsTable initialData={jobs} />
    </div>
  )
}
