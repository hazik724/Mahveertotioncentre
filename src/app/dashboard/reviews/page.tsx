import api from "@/lib/api"
import ReviewsTable from "./ReviewsTable"

export default async function ReviewsPage() {
  let reviews = []
  try {
    const res = await api.get("/reviews") // ✅ Your NestJS route
    reviews = res.data
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
