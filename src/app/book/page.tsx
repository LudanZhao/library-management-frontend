"use client";

import { useEffect, useState } from "react";
import { fetchBooks, searchBooks, deleteBook } from "@/utils/api";
import { Book } from "@/types/book";
import Link from "next/link";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await fetchBooks();
    setBooks(data);
  };

  const handleSearch = async () => {
    const data = await searchBooks(title, author);
    setBooks(data);
  };

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    loadBooks();
  };

  const handleClear = () => {
    setAuthor("");
    setTitle("");
    loadBooks();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <Link href="/book/new">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add New Book
        </button>
      </Link>
      <p className="text-lg text-gray-700 mb-4">
        Search books by title or author
      </p>

      {/* Search Inputs */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author..."
          className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition-all duration-300"
        >
          Clear
        </button>
      </div>
      <ul className="mt-4">
        {books.map((book) => (
          <li key={book.id} className="border p-4 mb-2 flex justify-between">
            <Link href={`/book/${book.id}`}>
              <span className="cursor-pointer text-blue-600">{book.title}</span>
            </Link>
            <button
              onClick={() => handleDelete(book.id!)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
