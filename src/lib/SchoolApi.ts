// frontend/src/lib/schoolApi.ts
import api from "@/lib/api"

export interface SchoolAnnouncement {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

// Fetch all school announcements
export const getSchoolAnnouncements = async () => {
  const { data } = await api.get<SchoolAnnouncement[]>("/school/announcements")
  return data
}

// Add new school announcement
export const addSchoolAnnouncement = async (payload: { title: string; content: string }) => {
  const { data } = await api.post<SchoolAnnouncement>("/school/announcements", payload)
  return data
}

// Update announcement
export const updateSchoolAnnouncement = async (id: number, payload: { title: string; content: string }) => {
  const { data } = await api.put<SchoolAnnouncement>(`/school/announcements/${id}`, payload)
  return data
}

// Delete announcement
export const deleteSchoolAnnouncement = async (id: number) => {
  const { data } = await api.delete(`/school/announcements/${id}`)
  return data
}
