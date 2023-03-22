import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ClientCareerDoubleBox from '../../components/ClientCareerDoubleBox';
import ProfileFeature from '../../components/ProfileFeature';

const profiles = [
  {
    name: 'Jason Estabillo',
    role: 'Founding Partner',
    image: '/about/jason.jpg',
    href: '/about/jason-estabillo'
  },
  {
    name: 'Gideon Tong',
    role: 'Founding Partner',
    image: '/about/gideon.jpg',
    href: '/about/gideon-tong'
  },
  {
    name: 'Maxwell Chang',
    role: 'Founding Partner',
    image: '/about/maxwell.jpg',
    href: '/about/maxwell-chang'
  }
];

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
            <Typography
              sx={{
                fontSize: 42,
                fontWeight: 800,
                marginBottom: '1rem'
              }}
            >Our Leadership</Typography>
            <Typography>
              JGM Strategy Consulting is run by leaders with world-class experience.
            </Typography>
          </Stack>
        </Box>
        <Grid
          container
          justifyContent='center'
          spacing={2}
          sx={{
            marginY: '2rem'
          }}
        >
          {
            profiles.map(({ name, role, image, href }) => (
              <ProfileFeature
                key={name}
                name={name}
                role={role}
                image={image}
                href={href}
              />
            ))
          }
        </Grid>
        <Container maxWidth='sm' sx={{ paddingY: '2rem' }}>
          <Typography
            sx={{
              fontSize: '22px',
              textAlign: 'center',
            }}
          >
            We are a global consultancy firm and we bring the energy and acceleration
            to every client relationship. Our leaders achieve results that build
            out capabilities and focus on opportunities.
          </Typography>
        </Container>
      </Container>
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
              <CardContent sx={{ color: 'white' }}>
                <Typography
                  variant='h5'
                  component='div'
                  className='pb-3'
                  sx={{
                    fontSize: 48
                  }}
                >
                  By the Numbers
                </Typography>
                <Typography variant='body1'>
                  Hear it from the experts. We&apos;re seeing the big picture here.
                </Typography>
              </CardContent>
            </Paper>
          </div>
        </div>
      </div>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <Typography>Cool image or video placeholder</Typography>
        <Typography>What we specialize/our expertise in placeholder</Typography>
        <Typography>Links to things in our industries</Typography>
        <Typography>Our purpose placeholder</Typography>
      </Container>
      <ClientCareerDoubleBox />
    </>
  );
}