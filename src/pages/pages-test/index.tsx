// import { Grid, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';

type TestPageProps = {
    title: string;
    body: string;
}

export const getServerSideProps: GetServerSideProps<TestPageProps> = async () => {

    return { props: { title: 'Test', body: 'Hello World' } };
    /*
    const num = Math.floor(Math.random()*100);
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${num}`, 
    );
    const { title, body } = await res.json();
    return { props: { title, body } };
    */
  };

export default function TestPage({ title, body }: TestPageProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )

/*
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h3">Test Route</Typography>
            <Typography variant="h4">{title}</Typography>
            <Typography>{body}</Typography>
        </Grid>
    </Grid>
  )
  */
}
