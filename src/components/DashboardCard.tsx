import { Card, CardContent, Typography } from '@mui/material';


export type DashboardCardProps = {
    title: string;
    value: string|number;
}

export function DashboardCard(props:DashboardCardProps) {

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary">
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.value}
                </Typography>
            </CardContent>
        </Card>
    )
}