'use client';

import { useState } from 'react';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleBooks = [
    {
      title: 'Norwegian Wood',
      author: 'Haruki Murakami',
      description: 'Gogol navigates the complexities of his identity...',
      coverUrl:
        'https://m.media-amazon.com/images/I/41cCa3CPpJL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'The Hole',
      author: 'Hiroko Oyamada',
      description: 'A woman, navigating her new isolated life...',
      coverUrl:
        'https://m.media-amazon.com/images/I/81HR0LQ5ZmL._UF1000,1000_QL80_.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Feed For Anjali friend</h1>
        <div className="flex gap-2">
          <button className="bg-gray-200 px-3 py-1 rounded">Community</button>
          <button className="bg-gray-200 px-3 py-1 rounded">My Friends</button>
        </div>
      </div>

      {/* Book List */}
      <div className="space-y-4">
        {sampleBooks.map((book, index) => (
          <div key={index} className="flex bg-white shadow p-4 rounded-lg">
            <img
              src={book.coverUrl}
              alt="Book cover"
              className="w-24 h-36 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-gray-600 mt-2">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
