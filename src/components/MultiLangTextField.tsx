import React, { useState } from 'react';
import { TextField, ButtonGroup, Button } from '@mui/material';
import { Language, Translation } from '@/types/Question';

export type MultiLangTextFieldProps = {
    label: string;
    currentLanguage: Language,
    translations: Translation[];
    onChange: (currentLanguage: Language, value: string) => void;
}

export const MultiLangTextField = ({ label, translations, currentLanguage, onChange }: MultiLangTextFieldProps) => {

    const val = translations.find(t => t.lang === currentLanguage)?.text;
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(currentLanguage, event.target.value);
    };

    return (
        <div>
            <TextField
                value={val || ''}
                onChange={handleTextChange}
                fullWidth
                margin="normal"
                label={`${label} (${currentLanguage.toLocaleUpperCase()})`}
            />
        </div>
    );
};