"use client"

import { useState, useEffect } from "react"
import api from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"

export default function ApplicationsTable({ initialData }: { initialData: any[] }) {
  const [applications, setApplications] = useState(initialData || [])
  const [loading, setLoading] = useState(false)

  // ✅ Always fetch fresh applications on mount
  useEffect(() => {
    const fetchApps = async () => {
      setLoading(true)
      try {
        const res = await api.get("/applications", { params: { t: Date.now() } }) // no-cache trick
        setApplications(res.data)
      } catch (err) {
        console.error("Failed to fetch applications:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchApps()
  }, [])

  // ✅ Delete
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/applications/${id}`)
      setApplications(applications.filter((a) => a.id !== id))
    } catch (err) {
      console.error("Delete failed:", err)
    }
  }

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle>All Applications</CardTitle>
      </CardHeader>

      <CardContent>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Qualification</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.length > 0 ? (
                applications.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell>{a.name}</TableCell>
                    <TableCell>{a.email}</TableCell>
                    <TableCell>{a.phone || "—"}</TableCell>
                    <TableCell>{a.qualification}</TableCell>
                    <TableCell>{new Date(a.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                          </DialogHeader>
                          <p>This will permanently delete the application.</p>
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No applications found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
