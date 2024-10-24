'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, X } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleBooks = [
    {
      title: 'Norweigian wood',
      author: 'Haruki',
      description: 'Trauma love',
      coverUrl:
        'https://m.media-amazon.com/images/I/41cCa3CPpJL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'Bhagvad',
      author: 'God',
      description: 'philo',
      coverUrl:
        'https://m.media-amazon.com/images/I/81HR0LQ5ZmL._UF1000,1000_QL80_.jpg',
    },
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      console.log('Liked book:', sampleBooks[currentIndex].title);
    } else {
      console.log('Passed on book:', sampleBooks[currentIndex].title);
    }

    if (currentIndex < sampleBooks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Discover Books</h1>
          <BookOpen className="h-6 w-6" />
        </div>

        {/* Profile Link */}
        <div className="flex justify-end mb-4">
          <a href="/profile" className="text-blue-500 hover:underline">
            Go to Profile
          </a>
        </div>

        {/* Book Card */}
        <Card className="w-full bg-white shadow-xl">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={sampleBooks[currentIndex]?.coverUrl}
                alt="Book cover"
                className="w-full h-96 object-cover rounded-t-lg"
              />

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                <h2 className="text-xl font-bold text-white">
                  {sampleBooks[currentIndex]?.title}
                </h2>
                <p className="text-white/90">
                  {sampleBooks[currentIndex]?.author}
                </p>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-600">
                {sampleBooks[currentIndex]?.description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => handleSwipe('left')}
            className="p-4 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
          >
            <X className="h-8 w-8 text-red-500" />
          </button>

          <button
            onClick={() => handleSwipe('right')}
            className="p-4 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
          >
            <Heart className="h-8 w-8 text-green-500" />
          </button>
        </div>
      </div>
    </main>
  );
}
