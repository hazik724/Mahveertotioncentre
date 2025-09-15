import JobsTable from "./JobsTable"

export default async function JobsPage() {
  let jobs = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
      cache: "no-store", // ✅ ensures fresh jobs every time
    })
    if (!res.ok) throw new Error("Failed to fetch jobs")
    jobs = await res.json()
  } catch {
    // 🚨 fail silently
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>
      <JobsTable initialData={jobs} />
    </div>
  )
}
