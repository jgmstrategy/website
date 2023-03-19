import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Box } from '@mui/material';

import InsightCarousel from '../components/InsightCarousel';

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
      </main>
    </>
  );
}
