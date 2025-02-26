import React from 'react';
import { useBookContext } from '../context/BookContext';
import QuestionForm from './QuestionForm';
import BookPreview from './BookPreview';

const BookCreator: React.FC = () => {
    const { bookGenerated } = useBookContext();

    return (
    <>
    {!bookGenerated ? <QuestionForm /> : <BookPreview />}
    </>
);
};

export default BookCreator;