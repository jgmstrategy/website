import Head from 'next/head';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Insights() {
  return (
    <>
      <Head>
        <title>Expert insights by JGM Strategy Consulting</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '50rem', overflow: 'hidden' }}>
        <Image
          src='/water.jpg'
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask'>
          <div className='d-flex align-items-center h-100 p-4'>
            <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <Card sx={{ minWidth: 275, backgroundColor: 'transparent' }}>
                <CardContent sx={{ color: 'white' }}>
                  <Typography
                    variant='h5'
                    component='div'
                    className='pb-3'
                    sx={{
                      fontSize: 48
                    }}
                  >
                    Insights
                  </Typography>
                  <Typography variant='body1'>
                    Hear it from the experts. We&apos;re seeing the big picture here.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <Container>
        <p>We hope to display recommended insights soon</p>
        <p>We hope to feature a global or annual overview here soon</p>
        <p>We hope to display a carousel of new insights here soon</p>
        <p>We hope to display a grid of the recent insights here soon</p>
      </Container>
    </>
  );
}