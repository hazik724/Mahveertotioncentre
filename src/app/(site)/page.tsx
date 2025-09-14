import dynamic from "next/dynamic";
import HeroSlider from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import WhyChooseUs from "@/components/WhyChooseUS";
import Whychooseus from "@/components/Whychooseus2";
import Programs from "@/components/Programs";
import Principle from "@/components/Principle";
import AOSWrapper from "@/components/AosWrapper";
import ImgBackground from "@/components/ImgBackground";
import Video from "@/components/video";
import BubbleCluster from "@/components/BubbleCluster";
import WhatMtcOffers from "@/components/WhatMtcOffers";
import Script from "next/script";
import { Metadata } from "next";

// ✅ SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "Mahveer Tuition Centre | Unlocking Knowledge, Empowering Futures",
  description:
    "Mahveer Tuition Centre offers Pre-Medical, Pre-Engineering, Exam Preparation, and Language courses. Join us to achieve academic success with expert guidance.",
  keywords: [
    "Mahveer Tuition Centre",
    "Tuition Lahore",
    "Pre-Medical classes",
    "Pre-Engineering coaching",
    "Exam preparation",
    "Best tuition in Lahore",
  ],
  alternates: {
    canonical: "https://yourdomain.com/", // <-- replace with your real domain
  },
  openGraph: {
    title: "Mahveer Tuition Centre | Unlocking Knowledge, Empowering Futures",
    description:
      "Join Mahveer Tuition Centre for Pre-Medical, Pre-Engineering & Language courses — shaping future leaders through quality education.",
    url: "https://yourdomain.com/",
    siteName: "Mahveer Tuition Centre",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // 1200x630 image
        width: 1200,
        height: 630,
        alt: "Mahveer Tuition Centre",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahveer Tuition Centre | Unlocking Knowledge, Empowering Futures",
    description:
      "Pre-Medical, Pre-Engineering & Exam Prep courses at Mahveer Tuition Centre. Learn with expert teachers and a proven system.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ JSON-LD Schema for Organization
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Mahveer Tuition Centre",
  url: "https://yourdomain.com",
  logo: "https://yourdomain.com/logo.png",
  sameAs: [
    "https://www.facebook.com/yourpage",
    "https://twitter.com/yourhandle",
    "https://www.instagram.com/yourhandle",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92 300 1234567",
      contactType: "Customer Service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* ✅ JSON-LD Schema */}
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgSchema)}
      </Script>

      {/* ✅ Page Sections */}
      <BubbleCluster />
      <Principle />
      <section className="my-10">
        <Video />
      </section>

      <section className="mb-9">
        <HeroSlider />
      </section>

      <section>
        <main className="bg-red-600 p-10 rounded-2xl mt-10">
          <AOSWrapper>
            <section data-aos="fade-up" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Unified System, Stronger Outcomes
              </h2>
              <p className="text-lg text-gray-100">
                “At Mahveer Tuition Centre, our unified approach combines
                innovative teaching, structured learning, and personalized
                support to ensure every student achieves stronger outcomes and
                reaches their full potential.”
              </p>
            </section>
          </AOSWrapper>
        </main>
      </section>

      <section className="my-10">
        <ImgBackground />
      </section>
      <Programs />
      <Whychooseus />

      <section className="my-10">
        <InfoSection />
      </section>

      <section className="my-10">
        <WhatMtcOffers />
      </section>

      <section>
        <WhyChooseUs />
      </section>
    </>
  );
}
