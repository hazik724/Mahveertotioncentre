import SchoolGalleryPage from "@/components/SchoolGalleryImages"
import SchoolGalleryHero from "@/components/SchoolGalleryHero"
export default function SchoolAboutPage() {
  return (
    <>
    <section className="mt-20">
      <SchoolGalleryHero/>
    </section>
     <section >
      <SchoolGalleryPage/>
    </section>
    </>
  )
}
