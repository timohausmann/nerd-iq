export type Language = 'de'|'en';

export type QuestionType = '1-in-4';

export type Translation = {
    lang: Language;
    text: string;
};

export type Answer = {
    id: string|null;
    isCorrect: boolean;
    translations: Translation[];
};

export type Question = {
    id: string|null;
    translations: Translation[];
    type: QuestionType;
    answers: Answer[];
}