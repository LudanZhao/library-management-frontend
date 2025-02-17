"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBookById, fetchBookInsights } from "@/utils/api";
import { Book } from "@/types/book";
import Link from "next/link";

export default function BookDetails() {
  const pathname = usePathname();
  const id = pathname?.split("/")[2];

  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    isbn: "",
    publicationYear: "",
    description: "",
  });
  const [insights, setInsights] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadBook();
    }
  }, [id]);

  const loadBook = async () => {
    const data = await fetchBookById(Number(id));
    setBook(data);
  };

  const getInsights = async () => {
    const response = await fetchBookInsights(Number(id));
    setInsights(response.aiInsights);
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Publication Year: {book.publicationYear}</p>
      <p>Description: {book.description}</p>
      <Link href={`/book/${id}/edit`}>
        <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded">
          Edit
        </button>
      </Link>
      <button
        onClick={getInsights}
        className="bg-green-500 text-white px-4 py-2 mt-4"
      >
        Get AI Insights
      </button>
      {insights && <p className="mt-4 bg-gray-100 p-2">{insights}</p>}
    </div>
  );
}
