"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { createBook } from "@/action";
import { useState } from "react";

const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold mb-6">Create Book</h1>
              <Link
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  })
                )}
                href="/"
              >
                Back to Home
              </Link>
            </div>
          </CardTitle>
          <CardDescription>Create your book here</CardDescription>
        </CardHeader>
        <form
          action={(e: FormData) => {
            setLoading(true);
            createBook(e);
          }}
        >
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Title of Book" name="title" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="author">Author</Label>
                <Input id="author" placeholder="Author of Book" name="author" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="isbn">ISBN</Label>
                <Input id="isbn" placeholder="ISBN of Book" name="isbn" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="year">Year</Label>
                <Input id="year" placeholder="Year" type="number" name="year" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="genre">Genre</Label>
                <Input id="genre" placeholder="Genre" name="genre" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image Url</Label>
                <Input
                  id="image"
                  placeholder="image Url of Book"
                  type="url"
                  name="imageUrl"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Resumer</Label>
                <Textarea
                  id="description"
                  placeholder="Description of Book"
                  name="resumer"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating Book..." : "Create Book"}
            </Button>
          </CardFooter>{" "}
        </form>
      </Card>
    </div>
  );
};

export default CreateBook;
