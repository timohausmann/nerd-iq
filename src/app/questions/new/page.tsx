'use client';

import { Box, Typography } from '@mui/material';
import { QuestionEditor } from '@/components/QuestionEditor';
import { questions } from '@/_mock/question';
import { Question } from '@/types/Question';

export type QuestionsEditType = {
    // question: Question
    params: { 
        questionId: string 
    }
}

export default function QuestionsEdit() {

    const question:Question = {
        id: null,
        translations: [],
        answers: [
            { id: null, translations: [], isCorrect: false },
            { id: null, translations: [], isCorrect: false },
            { id: null, translations: [], isCorrect: false },
            { id: null, translations: [], isCorrect: false },
        ],
        type: '1-in-4',
    };

    return (
        <Box>
            <Typography variant="h5">Neue Frage</Typography>
            <QuestionEditor question={question} onSave={() => {}} />
        </Box>
    )
}
