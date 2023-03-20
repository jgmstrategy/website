import Head from 'next/head';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ClientCareerDoubleBox from '../components/ClientCareerDoubleBox';

export default function Sustainability() {
  return (
    <>
      <Head>
        <title>Keeping the world green at JGM Strategy Consulting</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '40rem', overflow: 'hidden' }}>
        <Image
          src='/windmills.jpg'
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask'>
          <div className='d-flex align-items-center h-100 ps-4'>
            <Paper elevation={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    Keeping Earth Clean
                  </Typography>
                  <Typography variant='h5' component='div' className='pb-3'>
                    Sustainability
                  </Typography>
                  <Typography variant='body2'>
                    It doesn&apos;t just stop at our words.
                    <br />
                    We are working hard every day to
                    <br />
                    make sure the earth is somewhere we
                    <br />
                    want to live.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <p>
          At JGM Strategy, we are committed to working towards a more sustainable earth by
          integrating sustainable practices into our consulting services and advising our clients
          on ways to reduce their environmental impact while maintaining profitability. We believe
          that sustainable practices not only benefit the planet, but also lead to long-term
          business success and societal well-being. By promoting sustainability, we aim to create a
          healthier, more equitable, and more prosperous future for all.
        </p>
        <p>
          We hope to be able to publish an exact report on how we are doing in this regard soon.
        </p>
      </Container>
      <ClientCareerDoubleBox />
    </>
  );
}