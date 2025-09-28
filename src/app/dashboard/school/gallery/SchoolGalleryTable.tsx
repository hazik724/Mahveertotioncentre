"use client";

import { useState } from "react";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function SchoolGalleryTable({
  initialData,
}: {
  initialData: any[];
}) {
  const [gallery, setGallery] = useState(initialData || []);
  const [newTitle, setNewTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // ✅ Upload new file
  const handleAdd = async () => {
    if (!file || !newTitle) return alert("Title and file required");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", newTitle);

    const res = await api.post("/school/gallery", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setGallery([res.data, ...gallery]);
    setNewTitle("");
    setFile(null);
  };

  // ✅ Delete
  const handleDelete = async (id: number) => {
    await api.delete(`/school/gallery/${id}`);
    setGallery(gallery.filter((g) => g.id !== id));
  };

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>School Gallery</CardTitle>

          {/* Add Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Item</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Gallery Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="file">File</Label>
                  <input
                    id="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="mt-2"
                  />
                </div>
                <Button onClick={handleAdd} className="w-full">
                  Upload
                </Button>
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
              <TableHead>Preview</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gallery.map((g) => (
              <TableRow key={g.id}>
                <TableCell>{g.title}</TableCell>
                <TableCell>
                  {g.url.endsWith(".mp4") ? (
                    <video
                      src={g.url}
                      width={100}
                      controls
                    />
                  ) : (
                    <img
                        src={g.url}
                        alt={g.title}
                        className="w-24 h-24 object-cover rounded-md shadow-sm"
                        />
                  )}
                </TableCell>
                <TableCell>
                  {new Date(g.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(g.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
