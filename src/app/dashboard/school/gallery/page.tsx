import SchoolGalleryTable from "./SchoolGalleryTable";

export default async function SchoolGalleryPage() {
  let gallery: any[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/school/gallery`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    gallery = await res.json();
  } catch (err) {
    console.error("Failed to fetch gallery:", err);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">School Gallery</h1>
      <SchoolGalleryTable initialData={gallery} />
    </div>
  );
}
