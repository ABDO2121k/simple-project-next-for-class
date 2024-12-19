import BookCard from "@/components/myComponents/book-card";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { Book } from "@/types";
import { Ghost } from "lucide-react";
import Link from "next/link";

async function getBooks() {
  const books = await prisma.book.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return books;
}

export default async function Page() {
  const books = await getBooks();

  if (!books.length) {
    return (
      <div className="mt-16 flex flex-col items-center gap-2">
        <Ghost className="h-8 w-8 text-zinc-800" />
        <h3 className="font-semibold text-xl">Pretty empty around here</h3>
        <p>Let&apos;s create your first Book.</p>
        <Link className={cn(buttonVariants())} href="/create">
          Create a Book{" "}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        {" "}
        <h1 className="text-3xl font-bold mb-6">Book Library</h1>
        <Link href="/create" className={cn(buttonVariants())}>
          Create a Book
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
