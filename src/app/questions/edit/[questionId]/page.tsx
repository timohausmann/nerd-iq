'use client';

import { Box, Typography } from '@mui/material';
import { Question } from '@/types/Question';
import { QuestionEditor } from '@/components/QuestionEditor';
import { questions } from '@/_mock/question';

export type QuestionsEditType = {
    // question: Question
    params: { 
        questionId: string 
    }
}

export default function QuestionsEdit({ params }: QuestionsEditType) {

    const question = questions.find(q => q.id === params.questionId);

    if(!question) {
        return (
            <Typography variant="h4">Question not found: {params.questionId}</Typography>
        )
    }

    return (
        <Box>
            <Typography variant="h4">Frage bearbeiten</Typography>
            <QuestionEditor question={question} onSave={() => {}} />
        </Box>
    )
}
