import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ClientCareerDoubleBox from '../components/ClientCareerDoubleBox';

const imageWidth = 270;
const imageHeight = 135;

const profiles = [
  {
    name: 'Jason Estabillo',
    role: 'Founding Partner',
    image: '/about/jason.jpg'
  },
  {
    name: 'Gideon Tong',
    role: 'Founding Partner',
    image: '/about/gideon.jpg'
  },
  {
    name: 'Maxwell Chang',
    role: 'Founding Partner',
    image: '/about/maxwell.jpg'
  }
];

type ProfileFeatureProps = {
  name: string;
  role: string;
  image: string;
};

function ProfileFeature({ name, role, image }: ProfileFeatureProps) {
  return (
    <Stack>
      <Image src={image} width={imageWidth} height={imageHeight} alt='' />
      <Typography>{role}</Typography>
      <Typography>{name}</Typography>
    </Stack>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About JGM Strategy Consulting</title>
        <meta name='description' content='Learn about the key members at JGM Strategy' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '40rem', overflow: 'hidden' }}>
        <Image
          src='/rubiks.jpg'
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
                    Key Members
                  </Typography>
                  <Typography variant='h5' component='div' className='pb-3'>
                    About Us
                  </Typography>
                  <Typography variant='body2'>
                    This is where we champion the
                    <br />
                    next generation of leaders to
                    <br />
                    make the impossible possible.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <Box justifyContent='center' className='d-flex'>
          <Stack alignItems='center'>
            <Typography>Our Leadership</Typography>
            <Typography>
              JGM Strategy Consulting is run by leaders with world-class experience.
            </Typography>
            <Typography>
              Profile images are currently temporary while this page is under construction.
            </Typography>
          </Stack>
        </Box>
        <Grid
          container
          justifyContent='center'
          spacing={2}
          sx={{
            marginY: '1rem',
            border: '1px solid',
            borderRadius: 1
          }}
        >
          {
            profiles.map(({ name, role, image }) => (
              <Grid key={name} item>
                <ProfileFeature
                  name={name}
                  role={role}
                  image={image}
                />
              </Grid>
            ))
          }
        </Grid>
        <h3>We are a global consultancy text placeholder</h3>
        <h3>Cool numbers</h3>
        <p>Cool image or video placeholder</p>
        <h3>What we specialize/our expertise in placeholder</h3>
        <p>Links to things in our industries</p>
        <h3>Our purpose placeholder</h3>
      </Container>
      <ClientCareerDoubleBox />
    </>
  );
}