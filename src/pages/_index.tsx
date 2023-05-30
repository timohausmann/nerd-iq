import { Grid, Typography } from '@mui/material';
import { DashboardCard } from '@/components/DashboardCard';

export default function Home() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h4">Welcome to Nerd IQ Headquarters (Page)</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <DashboardCard title={'Anzahl Fragen'} value={999} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <DashboardCard title={'Anzahl Fragetypen'} value={9} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <DashboardCard title={'Anzahl Tags'} value={99} />
        </Grid>
    </Grid>
  )
}
