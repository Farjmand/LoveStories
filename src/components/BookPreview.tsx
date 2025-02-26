
import React from 'react';
import { useBookContext } from '../context/BookContext';
import BookCover from './BookCover';
import { BookSectionProps } from '../types/book';

const BookPreview: React.FC = () => {
  const { answers, resetBook } = useBookContext();
  
  return (
    <div className="bg-white rounded-lg p-8 shadow-xl max-w-2xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-pink-700">Your Love Story Book</h2>
        <button 
          onClick={() => window.print()} 
          className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition flex items-center"
        >
          <span className="mr-2">🖨️</span> Print Book
        </button>
      </div>
      
      <div className="border-2 border-pink-100 rounded-lg overflow-hidden shadow-md">
        <BookCover />
        
        <div className="p-8">
          <BookSection
            number={1}
            title="How We Met"
            content={answers.howMet}
          />
          
          <BookSection
            number={2}
            title="Our First Date"
            content={answers.firstDate}
          />
          
          <BookSection
            number={3}
            title="Our Favorite Memory"
            content={answers.favoriteMemory}
          />
          
          <BookSection
            number={4}
            title="Challenges We've Overcome"
            content={answers.challenges}
          />
          
          <BookSection
            number={5}
            title="What Makes Us Special"
            content={answers.relationship}
          />
          
          <BookSection
            number={6}
            title="Our Future Together"
            content={answers.future}
          />
          
          <div className="text-center mt-12 border-t border-pink-100 pt-8">
            <p className="italic text-gray-600">
              "Love is our true destiny. We do not find the meaning of life by ourselves alone - we find it with another."
            </p>
            <p className="text-pink-700 mt-2">— Thomas Merton</p>
            <p className="mt-6 text-gray-500">Created with love on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          onClick={resetBook} 
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Start Over
        </button>
        
        <button 
          onClick={() => window.print()} 
          className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
        >
          Print Book
        </button>
      </div>
    </div>
  );
};


const BookSection: React.FC<BookSectionProps> = ({ number, title, content }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-pink-700 mb-3 flex items-center">
      <span className="w-8 h-8 bg-pink-700 text-white rounded-full inline-flex items-center justify-center mr-2">{number}</span>
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed pl-10">{content || "Your story here..."}</p>
  </div>
);

export default BookPreview;