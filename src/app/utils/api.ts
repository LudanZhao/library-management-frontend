import axios from "axios";
import { Book } from "../types/book";

const API_BASE_URL = "http://localhost:8080/books";

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const searchBooks = async (
  title: string,
  author: string
): Promise<Book[]> => {
  const params = new URLSearchParams();
  if (title) params.append("title", title);
  if (author) params.append("author", author);
  const response = await axios.get(
    `${API_BASE_URL}/search?${params.toString()}`
  );
  return response.data;
};

export const fetchBookById = async (id: number): Promise<Book> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createBook = async (book: Book): Promise<Book> => {
  const response = await axios.post(API_BASE_URL, book);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};

export const fetchBookInsights = async (
  id: number
): Promise<{ aiInsights: string }> => {
  const response = await axios.get(`${API_BASE_URL}/${id}/ai-insights`);
  return response.data;
};

export const updateBook = async (id: number, book: Book): Promise<Book> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, book);
  return response.data;
};
