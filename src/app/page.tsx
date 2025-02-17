import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the library
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          This is the home page of library management application.
        </p>

        <div className="space-x-4">
          <Link href="/book/">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
              Go to library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
