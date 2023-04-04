import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type ProfileProps = {
  name: string;
  title: string;
  location?: string;
  linkedin?: string;
};

export default function Profile(props: ProfileProps) {
  return (
    <Container sx={{ paddingY: '2rem' }}>
      <Typography>This page is under construction and will be available soon.</Typography>
      <Typography>{props.name}</Typography>
      <Typography>{props.title}</Typography>
      {
        location && (
          <Typography>{props.location}</Typography>
        )
      }
      <Box>
        <Stack direction='row'>
          {
            props.linkedin && (
              <Link href={props.linkedin} target='_blank'>
                <IconButton aria-label='linkedin' size='large' color='primary'>
                  <LinkedInIcon />
                </IconButton>
              </Link>
            )
          }
        </Stack>
      </Box>
      <Typography>Profile picture</Typography>
      <Typography>Short description</Typography>
      <Typography>Expertise categories</Typography>
      <Typography>Long description</Typography>
    </Container>
  );
}