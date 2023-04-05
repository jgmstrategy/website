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
            <Container>
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
        <Box>
          <Stack direction='row' spacing={2}>
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
        </Box>
        <Typography>{props.tagline}</Typography>
        <Typography>Expertise Categories</Typography>
        <Box sx={{ paddingBottom: '2rem' }}>
          {
            props.expertise.map(({ name, href }) => (
              <Link href={href} key={name}>
                <Chip label={name} clickable />
              </Link>
            ))
          }
        </Box>
        <Divider textAlign='left'>A little more about {props.name}</Divider>
        <Container sx={{ paddingBottom: '2rem' }}>
          {props.children}
        </Container>
        <Divider>Education</Divider>
        <Box sx={{ paddingBottom: '2rem' }}>
          <Stack>
            {
              props.education.map(({ school, degree }) => (
                <Box key={degree}>
                  <Typography>{school}</Typography>
                  <Typography>{degree}</Typography>
                </Box>
              ))
            }
          </Stack>
        </Box>
      </Container>
    </>
  );
}