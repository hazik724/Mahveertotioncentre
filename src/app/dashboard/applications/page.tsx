import ApplicationsTable from "./ApplicationsTable"

export default async function ApplicationsPage() {
  let applications: any[] = []

  try {
    // ✅ Use native fetch for server-side
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications`, {
      cache: "no-store", // ✅ always fetch fresh data
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch applications: ${res.status}`)
    }

    applications = await res.json()
  } catch (err) {
    console.error("❌ Failed to fetch applications (SSR):", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>
      <ApplicationsTable initialData={applications} />
    </div>
  )
}
