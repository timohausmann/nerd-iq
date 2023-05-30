import { Box, Fab, Typography } from '@mui/material';
import { QuestionsTable } from '@/components/QuestionsTable';
import { questions } from '@/_mock/question';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

export default function PageQuestions() {

    const router = useRouter();

    return (
        <Box>
            <Typography variant="h4">Questions</Typography>
            <QuestionsTable questions={questions} />

            <Fab 
                color="primary" 
                onClick={() => router.push('/questions/new')}
                sx={{
                    position: 'fixed',
                    right: '1.5rem',
                    bottom: '1.5rem',
                    zIndex: 100,
                }}
                >
                <AddIcon />
            </Fab>
        </Box>
    )
}
