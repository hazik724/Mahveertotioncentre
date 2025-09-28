import SchoolReviewsTable from "./SchoolReviewsTable"

export default async function SchoolReviewsPage() {
  let reviews = []

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/school/reviews`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    reviews = await res.json()
  } catch (err) {
    console.error("Failed to fetch school reviews:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">School Reviews</h1>
      <SchoolReviewsTable initialData={reviews} />
    </div>
  )
}
