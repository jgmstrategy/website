import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type ProfileProps = {
  name: string;
};

export default function Profile({ name }: ProfileProps) {
  return (
    <Container sx={{ paddingY: '2rem' }}>
      <Typography>This page is under construction and will be available soon</Typography>
      <Typography>{ name }</Typography>
      <Typography>Role title</Typography>
      <Typography>Location</Typography>
      <Typography>Contact buttons</Typography>
      <Typography>Profile picture</Typography>
      <Typography>Short description</Typography>
      <Typography>Expertise categories</Typography>
      <Typography>Long description</Typography>
    </Container>
  );
}