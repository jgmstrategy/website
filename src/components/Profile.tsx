import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { expertiseType } from '@/constants/categories';
import styles from '../styles/Profile.module.css';

type educationType = {
  school: string;
  degree: string;
};

type ProfileProps = {
  name: string;
  image?: string;
  title: string;
  email?: string;
  location?: string;
  linkedin?: string;
  tagline: string;
  expertise: Array<expertiseType>;
  education: Array<educationType>;
};

export default function Profile(props: PropsWithChildren<ProfileProps>) {
  return (
    <>
      <Head>
        <title>{props.name} • JGM Strategy Consulting</title>
      </Head>
      <Box
        className={styles.backgroundBox + ' w-100 d-block d-sm-none'}
        sx={{
          paddingTop: '2rem',
          height: 500
        }}
      >
        <Grid container sx={{ height: 1, width: 1 }}>
          <Grid item sx={{ height: 0.2, width: 1 }} xs={12} sm={4} md={6}>
            <Container className='text-center'>
              <Typography
                style={{
                  fontSize: 50
                }}
              >
                {props.name}
              </Typography>
              <Typography
                style={{
                  fontSize: 20
                }}
              >
                {props.title}
                {
                  props.location && ' • ' + props.location
                }
              </Typography>
            </Container>
          </Grid>
          <Grid item sx={{ height: 0.8 }} xs={12} sm={8} md={6}>
            <Box
              className='h-100'
              sx={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {
                props.image ? (
                  <Image src={props.image} alt='' fill style={{ objectFit: 'contain' }} />
                ) : (
                  <Typography>Image Not Available</Typography>
                )
              }
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        className={styles.backgroundBox + ' w-100 d-none d-sm-block'}
        sx={{
          paddingTop: '2rem',
          height: 500
        }}
      >
        <Grid container sx={{ height: 1, width: 1 }}>
          <Grid item sx={{ height: 1 }} xs={12} sm={8} md={6}>
            <Box
              className='h-100'
              sx={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {
                props.image ? (
                  <Image src={props.image} alt='' fill style={{ objectFit: 'contain' }} />
                ) : (
                  <Typography>Image Not Available</Typography>
                )
              }
            </Box>
          </Grid>
          <Grid item sx={{ height: 1, width: 1 }} xs={12} sm={4} md={6}>
            <Box>
              <Typography
                style={{
                  fontSize: 48
                }}
              >
                {props.name}
              </Typography>
              <Typography
                style={{
                  fontSize: 28
                }}
              >
                {props.title}
              </Typography>
              {
                props.location && (
                  <Typography>{props.location}</Typography>
                )
              }
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Container sx={{ paddingY: '2rem' }}>
        <Box sx={{ paddingBottom: '1rem' }}>
          <Typography>
            {props.tagline} To get in touch with this individual, click one of the buttons below:
          </Typography>
        </Box>
        <Stack direction='row' spacing={1}>
          {
            props.email && (
              <Link href={'mailto:' + props.email}>
                <IconButton
                  aria-label='email'
                  size='large'
                  sx={{
                    border: '1px solid'
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Link>
            )
          }
          {
            props.linkedin && (
              <Link href={props.linkedin} target='_blank'>
                <IconButton
                  aria-label='linkedin'
                  size='large'
                  color='primary'
                  sx={{
                    border: '1px solid'
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Link>
            )
          }
        </Stack>
      </Container>
      <Container sx={{ paddingY: '1rem' }}>
        <Stack direction='row' spacing={2}>
          <Box sx={{ paddingBottom: '1rem' }}>
            <Typography>Their expertise lies in the following:</Typography>
          </Box>
          <Box sx={{ paddingBottom: '2rem' }}>
            {
              props.expertise.map(({ name, href }) => (
                <Link href={href} key={href}>
                  <Chip label={name} clickable sx={{ margin: '5px' }} />
                </Link>
              ))
            }
          </Box>
        </Stack>
        <Divider textAlign='left'>A little more about {props.name}</Divider>
        <Container sx={{ paddingY: '2rem' }} maxWidth='md'>
          {props.children}
        </Container>
        <Divider>Education</Divider>
        <Container sx={{ paddingBottom: '2rem' }} maxWidth='md'>
          <Stack spacing={3}>
            {
              props.education.map(({ school, degree }) => (
                <Box key={degree}>
                  <Typography sx={{ fontWeight: 500 }}>{school}</Typography>
                  <Typography sx={{ fontWeight: 350, fontStyle: 'italic' }}>{degree}</Typography>
                </Box>
              ))
            }
          </Stack>
        </Container>
      </Container>
    </>
  );
}