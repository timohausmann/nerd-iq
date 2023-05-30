import { Inter } from 'next/font/google'
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { LayoutDrawer } from '@/components/LayoutDrawer';
import { useState, useMemo } from 'react';
import { DarkModeWrapper } from '@/components/DarkModeContext';

const inter = Inter({ subsets: ['latin'] });

export function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    const drawerWidth = 240;

    return (
        <DarkModeWrapper>
            <Box sx={{ 
                display: 'flex',
                height: '100%',
                // bgcolor: 'grey.100',
            }}>
                <LayoutDrawer drawerWidth={drawerWidth} />
                <Box
                    component="main"
                    sx={{ 
                        flexGrow: 1, 
                        p: 3, 
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />
                    
                    {children}
                </Box>
            </Box>
        </DarkModeWrapper>
    )
}