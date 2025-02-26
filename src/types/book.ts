    
    export interface InputField {
        label: string;
        field: keyof BookAnswers;
    }


    export interface Question {
        title: string;
        subtitle: string;
        inputs: InputField[];
    }

    export interface BookAnswers {
        person1Name: string;
        person2Name: string;
        howMet: string;
        firstDate: string;
        favoriteMemory: string;
        challenges: string;
        relationship: string;
        future: string;
    }


    export interface BookContextType {
        step: number;
        answers: BookAnswers;
        bookGenerated: boolean;
        questions: Question[];
        handleInputChange: (field: keyof BookAnswers, value: string) => void;
        nextStep: () => void;
        prevStep: () => void;
        generateBook: () => void;
        resetBook: () => void;
    }


    export interface BookSectionProps {
        number: number;
        title: string;
        content: string;
    }