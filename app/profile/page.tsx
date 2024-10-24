'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    coverUrl: '',
  });
  const [userBooks, setUserBooks] = useState([
    {
      category: 'Currently Reading',
      books: [
        {
          title: 'Sample Book 1',
          author: 'Author Name',
          coverUrl: '/api/placeholder/160/200',
        },
        {
          title: 'Sample Book 2',
          author: 'Another Author',
          coverUrl: '/api/placeholder/160/200',
        },
      ],
    },
    {
      category: 'Want to Read',
      books: [
        {
          title: 'Sample Book 3',
          author: 'Third Author',
          coverUrl: '/api/placeholder/160/200',
        },
      ],
    },
  ]);

  // Mock authentication check - replace with your actual auth logic
  const isAuthenticated = true; // Replace with real auth check

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.coverUrl) {
      setUserBooks((prevBooks) => [
        ...prevBooks,
        {
          category: 'User Added',
          books: [newBook],
        },
      ]);
      setNewBook({ title: '', author: '', coverUrl: '' });
    }
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gray-500" />
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-bold">Usernames Books</h1>
                <p className="text-gray-600">Joined 2024 • 42 books</p>
              </div>

              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Edit className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Share Profile
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                Edit Books
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Add Book Form */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Add a New Book</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Book Title"
                value={newBook.title}
                onChange={(e) =>
                  setNewBook({ ...newBook, title: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Author"
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Cover URL"
                value={newBook.coverUrl}
                onChange={(e) =>
                  setNewBook({ ...newBook, coverUrl: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <button
                onClick={handleAddBook}
                className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Add Book
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Book Collections */}
        {userBooks.map((section, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{section.category}</h2>
              <button className="text-blue-500 hover:underline">See all</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {section.books.map((book, bookIndex) => (
                <Card
                  key={bookIndex}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-2">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-medium truncate">{book.title}</h3>
                    <p className="text-sm text-gray-600 truncate">
                      {book.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
