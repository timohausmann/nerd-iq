'use client'

import { useTheme, ThemeProvider, createTheme, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { useState, useMemo, createContext, PropsWithChildren } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import { text } from 'stream/consumers';

export const DarkModeContext = createContext({ toggleColorMode: () => {} });

export function DarkModeWrapper({children}:PropsWithChildren) {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), []);
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            background: {
                default: mode === 'light' ? '#f5f5f5' : '#121212',
            },
        },
    }), [mode]);

    return (
        <DarkModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
}


export function ToggleDarkMode() {

    const theme = useTheme();
    const ctx = useContext(DarkModeContext);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ctx.toggleColorMode}>
                <ListItemIcon>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </ListItemIcon>
                <ListItemText primary={'Dark Mode'} />
            </ListItemButton>
        </ListItem>
    )
}