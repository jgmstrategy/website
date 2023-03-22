import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import styles from '../styles/Home.module.css';
import InsightCarousel from '../components/InsightCarousel';
import ClientCareerDoubleBox from '../components/ClientCareerDoubleBox';

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
              <Box sx={{
                fontWeight: 500, fontSize: 48, paddingBottom: '1rem'
              }}>
                Make your next move with us
              </Box>
              <Box sx={{ fontWeight: 300, fontSize: 20, paddingBottom: '2rem' }}>
                Want to know how we can help you propel your business? Let&apos;s chat.
              </Box>
              <Link href='/contact'>
                <Button variant='outlined'>
                  Let&apos;s Get In Touch <KeyboardDoubleArrowRightIcon />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </main>
      <ClientCareerDoubleBox />
    </>
  );
}
