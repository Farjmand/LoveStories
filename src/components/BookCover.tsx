import React from 'react';
import { useBookContext } from '../context/BookContext';

const BookCover: React.FC = () => {
  const { answers } = useBookContext();
  
  return (
    <div className="relative bg-gradient-to-r from-pink-700 to-purple-800 p-8 rounded-lg text-center text-white mb-8">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMyLjIgMCA0LTEuOCA0LTRzLTEuOC00LTQtNC00IDEuOC00IDQgMS44IDQgNCA0em0wLTJjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNCAzNGMtMi4yIDAtNC0xLjgtNC00czEuOC00IDQtNCA0IDEuOCA0IDQtMS44IDQtNCA0em0wLTJjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00MCAyMnYtNGwtMTEuMiA2LjRMMTggMThsLTQgMi4ydjRsMTAuOCA2LjJMNDAgMjJ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]"></div>
      <div className="mb-4">
        <span className="inline-block w-16 h-1 bg-pink-300"></span>
        <span className="inline-block w-4 h-1 ml-1 bg-pink-300"></span>
        <span className="inline-block w-8 h-1 ml-1 bg-pink-300"></span>
      </div>
      <h1 className="text-4xl font-bold mb-2">The Story of Us</h1>
      <h2 className="text-xl mb-4">
        {answers.person1Name || "___"} & {answers.person2Name || "___"}
      </h2>
      <div className="mt-4">
        <span className="inline-block w-8 h-1 bg-pink-300"></span>
        <span className="inline-block w-16 h-1 ml-1 bg-pink-300"></span>
        <span className="inline-block w-4 h-1 ml-1 bg-pink-300"></span>
      </div>
    </div>
  );
};

export default BookCover;