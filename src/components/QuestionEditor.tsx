import { useState } from 'react';
import { Typography, TextField, Button, ButtonGroup, Grid, Select, MenuItem, FormControl, InputLabel, Box, Divider, Checkbox, FormControlLabel, Card, CardHeader } from '@mui/material';
import { Answer, Language, Question } from '@/types/Question';
import { MultiLangTextField } from './MultiLangTextField';
import { useRouter } from 'next/navigation';

export type QuestionEditorType = {
    question: Question;
    onSave: (q:Question) => void;
}

export const QuestionEditor = ({ question, onSave }:QuestionEditorType) => {
    
    const [editedQuestion, setEditedQuestion] = useState(question);
    const router = useRouter();

    const handleSave = () => {
        onSave(editedQuestion);
    };

    const allLangs: Language[] = ['de', 'en'];
    const [currentLanguage, setCurrentLanguage] = useState<Language>('de');

    const handleQuestionChange = (lang: Language, text: string) => {

        const oldQuestion = structuredClone(editedQuestion);
        const translation = oldQuestion.translations.find(t => t.lang === lang);
        if(translation) {
            translation.text = text;
        } else {
            oldQuestion.translations.push({
                lang, 
                text,
            });
        }

        setEditedQuestion(oldQuestion);
    }

    const handleAnswerChange = (i: number, lang: Language, text: string) => {
        
        const oldQuestion = structuredClone(editedQuestion);
        if(!oldQuestion.answers[i]) {
            console.log('answer index', i, 'not found!');
            return;
        }

        const answer = oldQuestion.answers[i];
        const translation = answer.translations.find(t => t.lang === lang);
        if(translation) {
            translation.text = text;
        } else {
            answer.translations.push({
                lang, 
                text,
            });
        }

        setEditedQuestion(oldQuestion);
    };

    return (
        <div>

                    

            {/* LANGUAGE TOGGLE */}
            
            <ButtonGroup sx={{my: 2}}>
                {allLangs.map((language) => (
                    <Button
                        key={language}
                        variant={language === currentLanguage ? 'contained' : 'outlined'}
                        onClick={() => setCurrentLanguage(language)}
                        size={'small'}
                    >
                        {language}
                    </Button>
                ))}
            </ButtonGroup>

            <Card sx={{ p: 2, mb: 2 }}>

                <Typography gutterBottom>{`Frage`}</Typography>

                <Grid container spacing={2}>
                    {/* QUESTION ID */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="id"
                            label="ID"
                            value={editedQuestion.id}
                            fullWidth
                            margin="normal"
                            disabled
                        />
                    </Grid>
                    {/* QUESTION TYPE */}
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Fragetyp</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Fragetyp"
                                value={editedQuestion.type}
                                >
                                <MenuItem value={'1-in-4'}>1-in-4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* QUESTION */}
                    <Grid item xs={12}>
                        <MultiLangTextField 
                            currentLanguage={currentLanguage} 
                            label="Frage" 
                            translations={editedQuestion.translations} 
                            onChange={(lang, val) => handleQuestionChange(lang, val)} 
                            />
                    </Grid>
                </Grid>
            </Card>

            <Grid container spacing={2}>

                {/* ANSWER INPUTS */}
                {editedQuestion.answers.map((answer, i) => (
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 2 }}>
                            
                            <Typography gutterBottom>{`Antwort ${convertNumberToLetter(i)}`}</Typography>
                            
                            {/* <Grid container spacing={2}>
                                <Grid item xs={12} md={8}> */}
                                    <MultiLangTextField 
                                        currentLanguage={currentLanguage} 
                                        label={`${convertNumberToLetter(i)}`}
                                        translations={answer.translations} 
                                        onChange={(lang, val) => handleAnswerChange(i, lang, val)} 
                                        />
                                {/* </Grid>
                                <Grid item xs={12} md={4}> */}
                                    <FormControlLabel 
                                        label={<Typography sx={{fontSize: '0.875rem'}}>correct answer</Typography>}
                                        control={<Checkbox 
                                            size={'small'} 
                                            checked={answer.isCorrect}
                                            />} />
                                {/* </Grid>
                            </Grid> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                <Button onClick={() => router.push('/questions')}>
                    Abbrechen
                </Button>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Speichern
                </Button>
            </Box>
        </div>
    );
};

function convertNumberToLetter(number:number) {
    const asciiOffset = 65; // ASCII-Code für 'A'
  
    if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
      throw new Error('Ungültige Eingabe. Die Zahl muss eine positive Ganzzahl sein.');
    }
  
    return String.fromCharCode(number + asciiOffset);
  }