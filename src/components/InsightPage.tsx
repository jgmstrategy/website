import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type InsightPageProps = {
  title: string;
  image: string;
  description: string;
  subheader: string;
}

export default function InsightPage(props: PropsWithChildren<InsightPageProps>) {
  return (
    <>
      <Head>
        <title>
          {props.title} | JGM Strategy Consulting
        </title>
        <meta name='description' content={props.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '25rem', overflow: 'visible' }}>
        <Image
          src={props.image}
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask' style={{ overflow: 'visible' }}>
          <div
            className='d-flex align-items-end justify-content-center h-100 py-4'
            style={{ marginTop: '5rem' }}
          >
            <Paper elevation={6} sx={{ bottom: 0 }}>
              <Card sx={{ minWidth: 275, bottom: 0 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    {props.subheader}
                  </Typography>
                  <Typography variant='h5' component='div' className='pb-3'>
                    {props.title}
                  </Typography>
                  <Typography variant='body1'>
                    <b>{props.description}</b>
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <Container maxWidth='md' sx={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
        <p>Currently the list of authors is unavailable, but we hope to display that soon</p>
        <p>Currently the date of publication is unavailable, but we hope to display that soon</p>
        <p>We hope to have share buttons for you soon</p>
        {props.children}
      </Container>
    </>
  );
}