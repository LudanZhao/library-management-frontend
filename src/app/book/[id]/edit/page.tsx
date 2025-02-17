"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { fetchBookById, updateBook } from "@/utils/api";
import { Book } from "@/types/book";

export default function EditBookPage() {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname?.split("/")[2];
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    isbn: "",
    publicationYear: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      fetchBookById(Number(id)).then(setBook);
    }
  }, [id]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await updateBook(Number(id), book);
    router.push("/book");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-full"
        />
        <input
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          className="border p-2 w-full"
        />
        <input
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          placeholder="ISBN"
          className="border p-2 w-full"
        />
        <input
          name="publicationYear"
          type="number"
          value={book.publicationYear || ""}
          onChange={handleChange}
          placeholder="Year"
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}
