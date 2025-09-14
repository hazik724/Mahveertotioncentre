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

export default function ContactsTable({ initialData }: { initialData: any[] }) {
  const [contacts, setContacts] = useState(initialData || [])

  // ✅ Delete contact
  const handleDelete = async (id: number) => {
    await api.delete(`/contacts/${id}`)
    setContacts(contacts.filter((c) => c.id !== id))
  }

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle>All Contact Messages</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.phone || "—"}</TableCell>
                  {/* Truncated preview */}
                  <TableCell className="max-w-xs truncate">{c.message}</TableCell>
                  <TableCell>{new Date(c.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right space-x-2">
                    {/* View full message */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">View</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Message from {c.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-2">
                          <p><strong>Email:</strong> {c.email}</p>
                          <p><strong>Phone:</strong> {c.phone || "—"}</p>
                          <p className="mt-4 whitespace-pre-wrap">{c.message}</p>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Delete Confirmation */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Are you sure?</DialogTitle>
                        </DialogHeader>
                        <p>This will permanently delete the contact message.</p>
                        <div className="flex justify-end gap-2 mt-4">
                          <Button variant="outline">Cancel</Button>
                          <Button
                            variant="destructive"
                            onClick={() => handleDelete(c.id)}
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
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
