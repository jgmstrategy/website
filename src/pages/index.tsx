import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import InsightCarousel from '../components/InsightCarousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>JGM Strategy Consulting: Premier logistics and operations</title>
        <meta name='description' content='JGM Strategy Consulting is a logistics and premiere consulting firm. We provide leadership on strategy, logistics, and operations across all industries.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <InsightCarousel />
      </Box>
      <main className={styles.main}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Paper elevation={6} sx={{ position: 'relative', overflow: 'hidden', height: 300 }}>
                <Image src='/engine.jpg' alt='' fill style={{ objectFit: 'cover' }} />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ fontWeight: 500, fontSize: 48, paddingBottom: '1rem' }}>Make your next move with us</Box>
              <Box sx={{ fontWeight: 300, fontSize: 20, paddingBottom: '2rem' }}>Want to know how we can help you propel your business? Let&apos;s chat.</Box>
              <Button variant='outlined'>Let&apos;s Get In Touch <KeyboardDoubleArrowRightIcon /></Button>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Grid container sx={{ backgroundColor: '#009688', color: 'white' }}>
        <Grid item xs={6} sx={{ padding: '3rem', textAlign: 'center' }}>
          <Box sx={{ fontSize: 32, paddingBottom: '2rem' }}>How can we help you?</Box>
          <Button variant='contained' sx={{ backgroundColor: '#ffc400' }}>Start Building With Us</Button>
        </Grid>
        <Grid item xs={6} sx={{ padding: '3rem', textAlign: 'center' }}>
          <Box sx={{ fontSize: 32, paddingBottom: '2rem' }}>Want to join us?</Box>
          <Link href='/careers'>
            <Button variant='contained' sx={{ backgroundColor: '#ffc400' }}>Jumpstart Your Career</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
