import ReviewsTable from "./ReviewsTable"

export default async function ReviewsPage() {
  let reviews = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
      cache: "no-store", // ✅ ensures fresh reviews
    })
    if (!res.ok) throw new Error("Failed to fetch reviews")
    reviews = await res.json()
  } catch (err) {
    console.error("Failed to fetch reviews:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Reviews</h1>
      <ReviewsTable initialData={reviews} />
    </div>
  )
}
