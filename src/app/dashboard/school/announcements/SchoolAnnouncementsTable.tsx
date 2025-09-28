"use client"

import { useState } from "react"
import api from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SchoolAnnouncementsTable({ initialData }: { initialData: any[] }) {
  const [announcements, setAnnouncements] = useState(initialData || [])
  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", content: "" })

  // ✅ Create
  const handleAdd = async () => {
    if (!newAnnouncement.title || !newAnnouncement.content) return
    const res = await api.post("/school/announcements", newAnnouncement)
    setAnnouncements([...announcements, res.data])
    setNewAnnouncement({ title: "", content: "" })
  }

  // ✅ Update
  const handleUpdate = async (id: number, updated: any) => {
    const res = await api.patch(`/school/announcements/${id}`, updated)
    setAnnouncements(announcements.map((a) => (a.id === id ? res.data : a)))
  }

  // ✅ Delete
  const handleDelete = async (id: number) => {
    await api.delete(`/school/announcements/${id}`)
    setAnnouncements(announcements.filter((a) => a.id !== id))
  }

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>All School Announcements</CardTitle>

          {/* Add Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Announcement</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Announcement</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newAnnouncement.title}
                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={newAnnouncement.content}
                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                  />
                </div>
                <Button onClick={handleAdd} className="w-full">Save</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {announcements.map((a) => (
              <TableRow key={a.id}>
                <TableCell>{a.title}</TableCell>
                <TableCell>{a.content}</TableCell>
                <TableCell>{new Date(a.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right space-x-2">

                  {/* ✅ Edit Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Announcement</DialogTitle>
                      </DialogHeader>
                      <EditForm announcement={a} onSave={handleUpdate} />
                    </DialogContent>
                  </Dialog>

                  {/* ✅ Delete Confirmation */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                      </DialogHeader>
                      <p>This will permanently delete the announcement.</p>
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline">Cancel</Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(a.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// 🔹 Edit form as sub-component
function EditForm({ announcement, onSave }: { announcement: any, onSave: (id: number, updated: any) => void }) {
  const [form, setForm] = useState({
    title: announcement.title,
    content: announcement.content,
  })

  const handleSubmit = () => {
    onSave(announcement.id, form)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
      </div>
      <Button onClick={handleSubmit} className="w-full">Update</Button>
    </div>
  )
}
