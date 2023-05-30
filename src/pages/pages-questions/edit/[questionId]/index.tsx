import { Box, Typography } from '@mui/material';
import { Question } from '@/types/Question';
import { QuestionEditor } from '@/components/QuestionEditor';
import { questions } from '@/_mock/question';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

/*
export type QuestionsEditType = {
    // question: Question
    params: { 
        questionId: string 
    }
}*/

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { questionId: 'question1' } },
        { params: { questionId: 'question2' } },
        { params: { questionId: 'question3' } },
      ],
      fallback: true, // false or "blocking"
    };
};

export const getStaticProps: GetStaticProps<{
    question: Question|undefined;
  }> = async ({params}) => {
    
    const filePath = path.join(process.cwd(), '/src/_mock/question.json');
    const jsonData = await fsPromises.readFile(filePath);
    // @ts-ignore
    const objectData = JSON.parse(jsonData) as Question[];
    const question = objectData?.find(q => q.id === params?.questionId);
    
    return { props: { question } };
  };


  type Props = {
    question: Question
}

export default function PageQuestionsEdit({ question }: Props) {

    const router = useRouter();

    // const question = questions.find(q => q.id === router.query.questionId);

    if(!question) {
        return (
            <Typography variant="h4">Question not found: {router.query.questionId}</Typography>
        )
    }

    return (
        <Box>
            <Typography variant="h4">Frage bearbeiten</Typography>
            <QuestionEditor question={question} onSave={() => {}} />
        </Box>
    )
}
