# Next.js Library Management Frontend

This is a **Next.js frontend application** for managing books, connected to a Spring Boot backend API. It allows users to view books, edit books, delete books, search by title/author, and fetch AI-generated insights.

---

## Features

**List Books**: Fetch and display books from the backend API

**Book Details Page**: View detailed book information

**Search Functionality**: Filter books by title or author

**AI Insights**: Get AI-generated insights for a book

**Styled with Tailwind CSS** for a modern UI

---

## Tech Stack

- **Next.js 13+** (React framework for SSR & CSR)
- **React Hooks** (useState, useEffect, useRouter)
- **Tailwind CSS** (for styling)
- **Axios** (for backend communication)
- **TypeScript**

---

## Setup & Run Locally

### Clone the Repository

```bash
git clone https://github.com/LudanZhao/library-management-frontend
```

### Install Dependencies

```bash
npm install  # or yarn install
```

### Run the Application

```bash
npm run dev  # or yarn dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## Pages & Functionality

### Home Page (Entry Page)

- Simple UI with a **"Go to library"** button

### Books List Page (`/books`)

- Fetches and displays books from the backend (`GET /books`)
- Allows searching books by title/author (`GET /books/search?title=X&author=Y`)
- Has a **"Clear"** button to reset search

### Book Details Page (`/books/[id]`)

- Displays full book details (`GET /books/{id}`)
- Provides an option to fetch AI insights (`GET /books/{id}/ai-insights`)
- Shows loading states while fetching data

---

## API Integration

- Uses `Axios` to communicate with the backend API.

---

## License

This project is licensed under **MIT License**.
