import type { Metadata } from "next";
import HeroReviews from "@/components/HeroReviews";
import ReviewsSection from "@/components/ReviewsSection";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Reviews | Mahveer Tuition Center (MTC)",
  description:
    "Read genuine reviews from students and parents about Mahveer Tuition Center (MTC). Discover why we are trusted for quality education.",
  keywords: [
    "Mahveer Tuition Center Reviews",
    "MTC Student Testimonials",
    "Parent Feedback MTC",
    "Education Reviews Pakistan",
  ],
  openGraph: {
    title: "Reviews | Mahveer Tuition Center (MTC)",
    description:
      "What do parents and students say about MTC? Read testimonials and reviews about our tuition center.",
    url: "https://yourschooldomain.com/reviews",
    siteName: "Mahveer Tuition Center",
    images: [
      {
        url: "https://yourschooldomain.com/images/reviews-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student and Parent Reviews - MTC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | Mahveer Tuition Center (MTC)",
    description:
      "Hear from students and parents about their experience with Mahveer Tuition Center.",
    images: ["https://yourschooldomain.com/images/reviews-banner.jpg"],
  },
  alternates: {
    canonical: "https://yourschooldomain.com/reviews",
  },
};

// ✅ Reviews Page
export default async function ReviewsPage() {
  const res = await fetch("http://localhost:4000/reviews", {
    cache: "no-store", // ✅ always fresh data
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
      {/* ✅ Inject JSON-LD for Reviews + Ratings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
      />

      <HeroReviews />
      <ReviewsSection initialReviews={reviews} />
    </>
  );
}
