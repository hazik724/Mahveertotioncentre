import type { Metadata } from "next";
import { AnimatedText } from "@/components/AnimatedText";
import { AnimatedCard } from "@/components/AnimatedCard";
import { BookOpen, Target, Users } from "lucide-react"; 
import AboutSection from "@/components/AboutContent";
import Faculty from "@/components/Faculty";
import HeroAbout from "@/components/HeroAbout";
import Image from "next/image"; // ✅ import next/image

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "About Us | Mahveer Tuition Center (MTC)",
  description:
    "Learn about Mahveer Tuition Center's mission, vision, values, and dedicated faculty. Discover how MTC empowers students through quality education and leadership.",
  keywords: [
    "About Mahveer Tuition Center",
    "MTC Vision Mission Values",
    "Best tuition center faculty",
    "Quality education Pakistan",
  ],
  openGraph: {
    title: "About Us | Mahveer Tuition Center (MTC)",
    description:
      "Discover MTC’s vision, mission, values, and faculty. Building future leaders with quality education and innovation.",
    url: "https://yourschooldomain.com/about",
    siteName: "Mahveer Tuition Center",
    images: [
      {
        url: "https://yourschooldomain.com/images/flower9.jpg",
        width: 1200,
        height: 630,
        alt: "Mahveer Tuition Center About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mahveer Tuition Center (MTC)",
    description:
      "Get to know Mahveer Tuition Center’s vision, mission, values, and team of faculty shaping future leaders.",
    images: ["https://yourschooldomain.com/images/flower9.jpg"],
  },
  alternates: {
    canonical: "https://yourschooldomain.com/about",
  },
};

// ✅ JSON-LD Schema (to inject in Head)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Mahveer Tuition Center (MTC)",
  url: "https://yourschooldomain.com",
  logo: "https://yourschooldomain.com/images/logo.png",
  description:
    "Mahveer Tuition Center provides quality education, empowering students with vision, mission, and values to thrive academically and personally.",
  founder: {
    "@type": "Person",
    name: "Mahveer Kumar Lohia",
  },
  sameAs: [
    "https://facebook.com/mtc", 
    "https://instagram.com/mtc",
    "https://linkedin.com/company/mtc"
  ],
};

export default function AboutPage() {
  return (
    <main>
      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroAbout />
      <Faculty />

      {/* Hero Section */}
      <section className="relative text-center py-32 text-white rounded-2xl overflow-hidden shadow-lg">
        {/* ✅ Next/Image replaces background */}
        <Image
          src="/images/Aboutus.jpg"
          alt="About Us Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">About Us!</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Building future leaders through quality education, innovation, and care.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-red-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedText>
            <h2 className="text-4xl font-bold text-red-600 mb-12">
              What We Stand For
            </h2>
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard
              icon={<Target />}
              title="Our Vision"
              description="At Mahveer Tuition Center (MTC), our vision is to become a trusted hub of academic excellence where students not only achieve their educational goals but also develop skills, values, and confidence to thrive in life..."
              delay={0.1}
            />
            <AnimatedCard
              icon={<BookOpen />}
              title="Our Mission"
              description="At Mahveer Tuition Center (MTC), our mission is to empower students with the knowledge, skills, and confidence they need to excel academically and personally..."
              delay={0.3}
            />
            <AnimatedCard
              icon={<Users />}
              title="Our Values"
              description="At Mahveer Tuition Center (MTC), our values form the heart of everything we do. We are committed to excellence, growth, integrity, and care for every learner..."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
    {/* Founder Section */}
<section className="flex flex-col md:flex-row items-center py-20 px-6 md:px-12">
  {/* Text Content */}
  <div className="md:w-1/2 text-center md:text-left">
    <h1 className="text-5xl font-extrabold mb-8 text-red-600">
      Mahveer Kumar Lohia
    </h1>
    <p className="text-lg mb-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Doloribus dicta iusto
      assumenda nulla delectus, aspernatur quis minima non dolorum maxime Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi maiores ipsum consectetur voluptates voluptatem dolore ea, labore sequi obcaecati iste itaque reiciendis eveniet perspiciatis nulla nisi neque molestiae facilis quaerat ducimus accusantium beatae! Nemo labore deserunt exercitationem tempora officia fugiat fuga numquam! Voluptatem, accusamus. Quod ducimus voluptas distinctio consectetur?
    </p>
  </div>

  {/* Image Content */}
  <div className="relative w-full max-w-md h-[400px] mt-10 md:mt-0 ml-auto">
    <Image
      src="/images/AboutMahveer.jpg"
      alt="Founder Mahveer Kumar Lohia"
      fill
      className="rounded-2xl shadow-lg object-cover"
    />
  </div>
</section>


      <section>
        <AboutSection />
      </section>
    </main>
  );
}
