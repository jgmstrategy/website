import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Box } from '@mui/material';

import Navigation from './components/Navigation';
import InsightCarousel from './components/InsightCarousel';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <InsightCarousel />
      </Box>
      <main className={styles.main}>
      </main>
      <Footer />
    </>
  );
}
