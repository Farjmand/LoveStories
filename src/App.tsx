import React from 'react';
import { BookProvider } from './context/BookContext';
import BookCreator from './components/BookCreator';

const App: React.FC = () => {
  return (
    <BookProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-700 mb-3">Your Love Story Book</h1>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 bg-pink-300"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-pink-300"></span>
          </div>
          <p className="text-gray-600">Create a beautiful keepsake of your relationship journey to cherish forever</p>
        </div>
        
        <BookCreator />
      </div>
    </BookProvider>
  );
};

export default App;