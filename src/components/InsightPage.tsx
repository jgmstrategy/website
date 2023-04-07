import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { people, PeopleOption } from '@/constants/people';

type InsightPageProps = {
  title: string;
  image: string;
  description: string;
  subheader: string;
  authors: Array<PeopleOption>;
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
        <Box
          sx={{
            paddingY: '1rem'
          }}
        >
          <Stack direction='row' spacing={2} alignItems='center'>
            <Typography>Published by:</Typography>
            {
              props.authors.map((author) => (
                <Box key={author}>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <Avatar alt='' src={people[author].avatar ? people[author].avatar : ''} />
                    <Typography>{people[author].name}</Typography>
                  </Stack>
                </Box>
              ))
            }
          </Stack>
        </Box>
        <Typography
          sx={{
            paddingY: '1rem'
          }}
        >
          We hope to display the date of publication here for you soon.
        </Typography>
        <Typography
          sx={{
            paddingY: '1rem'
          }}
        >
          We hope to have share buttons here for you soon.
        </Typography>
        {props.children}
      </Container>
    </>
  );
}