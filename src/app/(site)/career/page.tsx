import type { Metadata } from "next";
import HeroCareer from "@/components/HeroCareer";
import JobBoardClient from "@/components/JobBoardClient";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Careers | Mahveer Tuition Center (MTC)",
  description:
    "Explore exciting career opportunities at Mahveer Tuition Center (MTC). Join our team of passionate educators and help shape the future of learning.",
  keywords: [
    "Mahveer Tuition Center Jobs",
    "Teaching Careers",
    "MTC Vacancies",
    "Join MTC Faculty",
    "Education Jobs Pakistan",
  ],
  openGraph: {
    title: "Careers | Mahveer Tuition Center (MTC)",
    description:
      "Join Mahveer Tuition Center and be part of a team dedicated to excellence in education. Explore open job positions now.",
    url: "https://yourschooldomain.com/careers",
    siteName: "Mahveer Tuition Center",
    images: [
      {
        url: "https://yourschooldomain.com/images/careers-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Mahveer Tuition Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Mahveer Tuition Center (MTC)",
    description:
      "Looking for a teaching job? Explore vacancies at Mahveer Tuition Center (MTC) and apply today.",
    images: ["https://yourschooldomain.com/images/careers-banner.jpg"],
  },
  alternates: {
    canonical: "https://yourschooldomain.com/careers",
  },
};

// ✅ Careers Page
export default async function JobBoardPage() {
  const res = await fetch("http://localhost:4000/jobs", {
    cache: "no-store", // ✅ Always fetch fresh jobs
  });
  const jobs = await res.json();

  // ✅ JSON-LD Schema for each job
  const jobSchema = jobs.map((job: any) => ({
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: job.desc,
    datePosted: job.createdAt,
    validThrough: job.validThrough || "2025-12-31", // fallback if not provided
    employmentType: "FULL_TIME", // or PART_TIME, adjust as needed
    hiringOrganization: {
      "@type": "EducationalOrganization",
      name: "Mahveer Tuition Center (MTC)",
      sameAs: "https://yourschooldomain.com",
      logo: "https://yourschooldomain.com/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "99 S.t Jomblo Park",
        addressLocality: "Pekanbaru",
        postalCode: "28292",
        addressCountry: "Indonesia",
      },
    },
  }));

  return (
    <>
      {/* ✅ Inject JobPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      <HeroCareer />
      <JobBoardClient jobs={jobs} />
    </>
  );
}
