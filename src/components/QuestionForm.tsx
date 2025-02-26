import React from 'react';
import { useBookContext } from '../context/BookContext';
import ProgressBar from './ProgressBar';
import { BookAnswers } from '../types/book';

const QuestionForm: React.FC = () => {
  const { 
    step, 
    questions, 
    answers, 
    handleInputChange, 
    nextStep, 
    prevStep, 
    generateBook 
  } = useBookContext();
  
  const currentQuestions = questions[step];
  
  return (
    <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full border border-pink-100">
      <ProgressBar />
      
      <h2 className="text-2xl font-bold mb-2 text-pink-700">{currentQuestions.title}</h2>
      <p className="text-gray-600 mb-6">{currentQuestions.subtitle}</p>
      
      {currentQuestions.inputs.map((input, index) => (
        <div key={index} className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            {input.label}
          </label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
            rows={4}
            value={answers[input.field]}
            onChange={(e) => handleInputChange(input.field, e.target.value)}
            placeholder="Share your story..."
          />
        </div>
      ))}
      
      <div className="flex justify-between mt-8">
        {step > 0 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition flex items-center"
          >
            <span className="mr-1">←</span> Back
          </button>
        )}
        
        {step < questions.length - 1 ? (
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition ml-auto flex items-center"
          >
            Continue <span className="ml-1">→</span>
          </button>
        ) : (
          <button
            onClick={generateBook}
            className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition ml-auto flex items-center"
          >
            Create Your Book <span className="ml-1">✨</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;