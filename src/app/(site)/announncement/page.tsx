import { Metadata } from "next";
import axios from "axios";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Announcements | My School",
  description: "Stay updated with the latest announcements from our school.",
  openGraph: {
    title: "Announcements | My School",
    description: "Stay updated with the latest announcements from our school.",
    url: "https://www.yourschool.com/announcements",
    siteName: "My School",
    type: "website",
    images: [
      {
        url: "https://www.yourschool.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "My School Announcements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Announcements | My School",
    description: "Stay updated with the latest announcements from our school.",
    images: ["https://www.yourschool.com/images/og-image.png"],
  },
};

type Announcement = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default async function AnnouncementsPage() {
  try {
    const res = await axios.get<Announcement[]>(
      "http://localhost:4000/announcements"
    );
    const announcement = res.data;

    return (
      <div className="min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-center mb-10 text-red-600">
          📢 Announcements from Principal
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {announcement.length > 0 ? (
            announcement.map((a) => (
              <div
                key={a.id}
                className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-red-600">{a.title}</h2>
                  <p className="text-sm text-gray-500">
                    {new Date(a.createdAt).toLocaleDateString()}
                  </p>
                  <p className="mt-3 text-gray-700 leading-relaxed">{a.content}</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  Announcement from Principal
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No announcements available.
            </p>
          )}
        </div>

        {/* ✅ JSON-LD structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.yourschool.com/announcements",
              },
              headline: "School Announcements",
              description:
                "Stay updated with the latest announcements from our school.",
              publisher: {
                "@type": "Organization",
                name: "My School",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.yourschool.com/images/logo.png",
                },
              },
              datePublished: announcement[0]?.createdAt || new Date().toISOString(),
              dateModified: announcement[0]?.updatedAt || new Date().toISOString(),
            }),
          }}
        />
      </div>
    );
  } catch (error) {
    throw new Error("Failed to fetch announcements");
  }
}
