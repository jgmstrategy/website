import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
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
    <Container sx={{ paddingY: '2rem' }}>
      <Typography>A photo of each person will be available soon.</Typography>
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
      <Box>
        {
          props.expertise.map(({ name, href }) => (
            <Link href={href} key={name}>
              <Chip label={name} clickable />
            </Link>
          ))
        }
      </Box>
      <Container>
        {props.children}
      </Container>
      <Typography>Education</Typography>
      <Box>
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
  );
}