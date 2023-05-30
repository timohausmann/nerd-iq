import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Question, Translation } from '@/types/Question';
import Link from 'next/link';

export type QuestionsTableProps = {
    questions: Question[]
}

export const QuestionsTable = ({ questions }: QuestionsTableProps) => {

    const lang = 'de';

    const getTranslationText = (translations: Translation[]) => {
        if (!translations?.length) return '';
        const translation = translations.find((t) => t.lang === lang) || translations[0];
        return translation.text;
        
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {/* <TableCell></TableCell> */}
                    <TableCell>ID</TableCell>
                    <TableCell>Question</TableCell>
                    <TableCell>Question Type</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {questions.map((question) => (
                    <TableRow key={question.id}>
                        {/* <TableCell>
                            <Checkbox />
                        </TableCell> */}
                        <TableCell>
                            <Link href={`/questions/edit/${question.id}`}>
                                {question.id}
                            </Link>
                        </TableCell>
                        <TableCell><Typography>{getTranslationText(question.translations)}</Typography></TableCell>
                        <TableCell>{question.type}</TableCell>
                        <TableCell>
                            <Link href={`/questions/edit/${question.id}`}>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};