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

export default function ApplicationsTable({ initialData }: { initialData: any[] }) {
  const [applications, setApplications] = useState(initialData || [])

  // ✅ Delete
  const handleDelete = async (id: number) => {
    await api.delete(`/applications/${id}`)
    setApplications(applications.filter((a) => a.id !== id))
  }

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle>All Applications</CardTitle>
      </CardHeader>

      <CardContent>
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
                    {/* Delete Confirmation */}
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
      </CardContent>
    </Card>
  )
}
