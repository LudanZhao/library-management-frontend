"use client";

import { useState } from "react";
import { createBook } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function NewBook() {
  const router = useRouter();
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publicationYear: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createBook(book);
    router.push("/book");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          name="isbn"
          placeholder="ISBN"
          value={book.isbn}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="publicationYear"
          type="number"
          placeholder="Year"
          value={book.publicationYear}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
