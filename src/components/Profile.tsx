import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { expertiseType } from '@/constants/categories';

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
      <Container sx={{ paddingY: '2rem' }}>
        <Box
          sx={{
            height: 750,
            width: 600,
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
        <Typography>{props.name}</Typography>
        <Typography>{props.title}</Typography>
        {
          props.location && (
            <Typography>{props.location}</Typography>
          )
        }
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