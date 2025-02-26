import React, { createContext, ReactNode, useContext, useState } from "react";
import { BookAnswers, BookContextType, Question } from "../types/book";

const questionsData: Question[] = [
{
    title: "Let's Start Your Love Story",
    subtitle: "First, let's get to know who this book is about",
    inputs: [
    { label: "Your Name", field: "person1Name" },
    { label: "Your Partner's Name", field: "person2Name" },
    ],
},
{
    title: "The Beginning",
    subtitle: "Every great love story has a beginning...",
    inputs: [
    { label: "How did you two meet?", field: "howMet" },
    { label: "Tell us about your first date", field: "firstDate" },
    ],
},
{
    title: "Your Journey Together",
    subtitle: "The moments that have shaped your relationship",
    inputs: [
    {
        label: "What's your favorite memory together?",
        field: "favoriteMemory",
    },
    {
        label: "What challenges have you overcome together?",
        field: "challenges",
    },
    ],
},
{
    title: "Your Love Today & Tomorrow",
    subtitle: "The present and future of your story",
    inputs: [
    { label: "What makes your relationship special?", field: "relationship" },
    { label: "What are your hopes for the future?", field: "future" },
    ],
},
];

const BookContext = createContext<BookContextType | undefined>(undefined);


export const useBookContext = (): BookContextType => {
    const context = useContext(BookContext);
    if (context === undefined) {
    throw new Error("useBookContext must be used within a BookProvider");
    }
    return context;
};

interface BookProviderProps {
    children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
    const [step, setStep] = useState<number>(0);
    const [answers, setAnswers] = useState<BookAnswers>({
        person1Name: "",
        person2Name: "",
        howMet: "",
        firstDate: "",
        favoriteMemory: "",
        challenges: "",
        relationship: "",
        future: "",
    });
    const [bookGenerated, setBookGenerated] = useState<boolean>(false);

    const handleInputChange = (field: keyof BookAnswers, value: string): void => {
    setAnswers((prev) => ({
    ...prev,
    [field]: value,
    }));
};

const nextStep = (): void => {
    setStep((prev) => prev + 1);
};

const prevStep = (): void => {
    setStep((prev) => prev - 1);
};

const generateBook = (): void => {
    setBookGenerated(true);
};

const resetBook = (): void => {
    setBookGenerated(false);
    setStep(0);
};

const value: BookContextType = {
    step,
    answers,
    bookGenerated,
    questions: questionsData,
    handleInputChange,
    nextStep,
    prevStep,
    generateBook,
    resetBook,
};

return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
