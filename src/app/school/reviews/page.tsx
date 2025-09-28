import SchoolReviewsHero from "@/components/SchoolReviewsHero"
import SchoolReviewSection from "@/components/SchoolReviewSection"

export default async function ReviewsPage() {
  // Use api.ts helper instead of hardcoded URL
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/school/reviews`, {
    cache: "no-store",        // 🚀 no caching
    next: { revalidate: 0 },  // 🚀 disable ISR
  });
   const reviews = await res.json();

  // ✅ Build JSON-LD Schema
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Mahveer Tuition Center (MTC)",
    url: "https://yourschooldomain.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        reviews.length > 0
          ? (
              reviews.reduce((sum: number, r: any) => sum + r.rating, 0) /
              reviews.length
            ).toFixed(1)
          : "5.0",
      reviewCount: reviews.length || 1,
    },
    review: reviews.map((r: any) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name || "Anonymous",
      },
      datePublished: r.createdAt,
      reviewBody: r.message,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };

  return (
    <>
    <section>
<SchoolReviewsHero/>
    </section>
    <section>
<SchoolReviewSection initialReviews={reviews}/>
    </section>
    </>
   
  )
}
