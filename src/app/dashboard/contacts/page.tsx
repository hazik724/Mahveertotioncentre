import ContactsTable from "./ContactsTable"

export default async function ContactsPage() {
  let contacts = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
      cache: "no-store", // ✅ always fresh data, no caching issues
    })
    if (!res.ok) throw new Error("Failed to fetch contacts")
    contacts = await res.json()
  } catch {
    // 🚨 fail silently, no console logs in production
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Contacts</h1>
      <ContactsTable initialData={contacts} />
    </div>
  )
}
