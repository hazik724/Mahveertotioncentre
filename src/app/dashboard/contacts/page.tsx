import api from "@/lib/api"
import ContactsTable from "./ContactsTable"

export default async function ContactsPage() {
  let contacts = []
  try {
    const res = await api.get("/contacts") // ✅ Your NestJS route
    contacts = res.data
  } catch (err) {
    console.error("Failed to fetch contacts:", err)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Contacts</h1>
      <ContactsTable initialData={contacts} />
    </div>
  )
}
