// src/app/(site)/careers/page.tsx
import type { Metadata } from "next";
import HeroCareer from "@/components/HeroCareer";
import JobBoardClient from "@/components/JobBoardClient";

type Job = {
  id: number;
  title: string;
  desc: string;
  createdAt: string;
  validThrough?: string;
};

export const metadata: Metadata = {
  title: "Careers | Mahveer Tuition Center (MTC)",
  description:
    "Explore exciting career opportunities at Mahveer Tuition Center (MTC). Join our team of passionate educators and help shape the future of learning.",
};

export default async function JobBoardPage() {
  let jobs: Job[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs`, // ✅ dynamic base URL
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");

    jobs = await res.json();
  } catch (err) {
    // ❌ don’t crash the whole page
    jobs = [];
  }

  // ✅ JSON-LD Schema
  const jobSchema = jobs.map((job) => ({
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: job.desc,
    datePosted: job.createdAt,
    validThrough: job.validThrough || "2025-12-31",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "EducationalOrganization",
      name: "Mahveer Tuition Center (MTC)",
      sameAs: "https://mtc.edu.pk",
      logo: "https://mtc.edu.pk/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "99 S.t Jomblo Park",
        addressLocality: "Pekanbaru",
        postalCode: "28292",
        addressCountry: "Pakistan",
      },
    },
  }));

  return (
    <>
      {/* ✅ Inject JobPosting JSON-LD */}
      {jobs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
        />
      )}

      <HeroCareer />
      <JobBoardClient jobs={jobs} />
    </>
  );
}
