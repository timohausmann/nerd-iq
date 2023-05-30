import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { ToggleDarkMode } from './DarkModeContext';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/navigation';

type LayoutDrawerProps = {
    drawerWidth: number,
}

/**
 * 
 * @see https://mui.com/material-ui/react-drawer/#ResponsiveDrawer.tsx
 */
export function LayoutDrawer({drawerWidth}:LayoutDrawerProps) {

    const container = typeof window !== 'undefined' ? () => window.document.body : undefined;
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const mainNav = [
        {
            label: 'Dashboard',
            url: '/',
            icon: <HomeIcon />,
        },
        {
            label: 'Fragen',
            url: '/questions',
            icon: <HelpIcon />,
        },
    ]

    const drawer = (
        <div>
            <Toolbar>
                <img src="/logo-nightcafe.jpg" alt="Nerd IQ Logo" width="32" height="32" style={{marginRight: '1rem'}} />
                <Typography variant="h6" noWrap component="div">
                    Nerd IQ HQ
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {mainNav.map((nav, index) => (
                    <ListItem key={nav.label} disablePadding>
                        <ListItemButton onClick={() => router.push(nav.url)}>
                            <ListItemIcon>
                                {nav.icon}
                            </ListItemIcon>
                            <ListItemText primary={nav.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ToggleDarkMode />
                {['Settings', 'Logout'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );



    return (
        <Box>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}
