"use client";
import { deleteBook } from "@/action";
import { BookCardProps } from "@/types";
import React, { useState } from "react";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, author, year, genre, imageUrl, id } = book;
  const [deletingBook, setDeletingBook] = useState("");
  const handleDelete = async () => {
    setDeletingBook(id);
    await deleteBook(id);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-700">Author: {author}</p>
      <p className="text-gray-600">Year: {year}</p>
      <p className="text-gray-600">Genre: {genre}</p>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-md mt-2"
        onClick={handleDelete}
        disabled={deletingBook === id}
      >
        {deletingBook === id ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default BookCard;
