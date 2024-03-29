import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function ClientCareerDoubleBox() {
  return (
    <Grid container sx={{ backgroundColor: '#009688', color: 'white' }} columns={2}>
      <Grid item xs={2} md={1} sx={{ padding: '3rem', textAlign: 'center' }}>
        <Box sx={{ fontSize: 32, paddingBottom: '2rem' }}>How can we help you?</Box>
        <Link href='/contact'>
          <Button variant='contained' sx={{ backgroundColor: '#212121' }}>
            Start Building With Us
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2} md={1} sx={{ padding: '3rem', textAlign: 'center' }}>
        <Box sx={{ fontSize: 32, paddingBottom: '2rem' }}>Want to join us?</Box>
        <Link href='/careers'>
          <Button variant='contained' sx={{ backgroundColor: '#212121' }}>
            Jumpstart Your Career
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}