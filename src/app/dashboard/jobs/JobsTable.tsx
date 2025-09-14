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

export default function JobsTable({ initialData }: { initialData: any[] }) {
  const [jobs, setJobs] = useState(initialData || [])
  const [newJob, setNewJob] = useState({ title: "", desc: "" })

  // ✅ Create
  const handleAdd = async () => {
    if (!newJob.title || !newJob.desc) return
    const res = await api.post("/jobs", newJob)
    setJobs([...jobs, res.data])
    setNewJob({ title: "", desc: "" })
  }

  // ✅ Update
  const handleUpdate = async (id: number, updated: any) => {
    const res = await api.patch(`/jobs/${id}`, updated)
    setJobs(jobs.map((j) => (j.id === id ? res.data : j)))
  }

  // ✅ Delete
  const handleDelete = async (id: number) => {
    await api.delete(`/jobs/${id}`)
    setJobs(jobs.filter((j) => j.id !== id))
  }

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>All Jobs</CardTitle>

          {/* Add Job Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Job</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Job</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="desc">Description</Label>
                  <Textarea
                    id="desc"
                    value={newJob.desc}
                    onChange={(e) => setNewJob({ ...newJob, desc: e.target.value })}
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
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((j) => (
              <TableRow key={j.id}>
                <TableCell>{j.title}</TableCell>
                <TableCell>{j.desc}</TableCell>
                <TableCell>{new Date(j.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right space-x-2">
                  
                  {/* Edit Job */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Job</DialogTitle>
                      </DialogHeader>
                      <EditForm job={j} onSave={handleUpdate} />
                    </DialogContent>
                  </Dialog>

                  {/* Delete Job */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                      </DialogHeader>
                      <p>This will permanently delete the job.</p>
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline">Cancel</Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(j.id)}
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

// 🔹 Edit Form for Jobs
function EditForm({ job, onSave }: { job: any, onSave: (id: number, updated: any) => void }) {
  const [form, setForm] = useState({
    title: job.title,
    desc: job.desc,
  })

  const handleSubmit = () => {
    onSave(job.id, form)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="desc">Description</Label>
        <Textarea
          id="desc"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
      </div>
      <Button onClick={handleSubmit} className="w-full">Update</Button>
    </div>
  )
}
