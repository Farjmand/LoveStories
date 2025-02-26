import React from 'react';
import { useBookContext } from '../context/BookContext';

const ProgressBar: React.FC = () => {
  const { step, questions } = useBookContext();
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        {questions.map((_, index) => (
          <div 
            key={index} 
            className={`w-8 h-8 rounded-full flex items-center justify-center
              ${index <= step ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-500'}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div 
          className="bg-pink-600 h-2 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(step / (questions.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;