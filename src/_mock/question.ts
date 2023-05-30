import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        id: 'question1',
        translations: [
            {
                lang: 'de',
                text: 'Was ist die Hauptstadt von Deutschland?',
            },
        ],
        type: '1-in-4',
        answers: [
            {
                id: 'answer1',
                isCorrect: true,
                translations: [
                    {
                        lang: 'de',
                        text: 'Berlin',
                    },
                ],
            },
            {
                id: 'answer2',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: 'München',
                    },
                ],
            },
            {
                id: 'answer3',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: 'Hamburg',
                    },
                ],
            },
            {
                id: 'answer4',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: 'Köln',
                    },
                ],
            },
        ],
    },
    {
        id: 'question2',
        translations: [
            {
                lang: 'de',
                text: 'Was ist die Antwort auf das ultimative Frage nach dem Leben, dem Universum und dem ganzen Rest?',
            },
        ],
        type: '1-in-4',
        answers: [
            {
                id: 'answer5',
                isCorrect: true,
                translations: [
                    {
                        lang: 'de',
                        text: '42',
                    },
                ],
            },
            {
                id: 'answer6',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: '48',
                    },
                ],
            },
            {
                id: 'answer7',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: '11',
                    },
                ],
            },
            {
                id: 'answer8',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: '24',
                    },
                ],
            },
        ],
    },
    {
        id: 'question3',
        translations: [
            {
                lang: 'de',
                text: 'Was ist die Hauptstadt von Frankreich?',
            },
        ],
        type: '1-in-4',
        answers: [
            {
                id: 'answer9',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: 'Berlin',
                    },
                ],
            },
            {
                id: 'answer10',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: 'München',
                    },
                ],
            },
            {
                id: 'answer11',
                isCorrect: true,
                translations: [
                    {
                        lang: 'de',
                        text: 'Paris',
                    },
                ],
            },
            {
                id: 'answer12',
                isCorrect: false,
                translations: [
                    {
                        lang: 'de',
                        text: 'Köln',
                    },
                ],
            },
        ],
    },
    // Weitere Fragen hinzufügen
];