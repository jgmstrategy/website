import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import CategoryBox from '../../components/CategoryBox';
import ClientCareerDoubleBox from '../../components/ClientCareerDoubleBox';
import { industries } from '../../constants/categories';

export default function Industries() {
  return (
    <>
      <Head>
        <title>Industries serviced by JGM Strategy Consulting</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container maxWidth='md' sx={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <h1>Industries</h1>
        <p>
          We service nearly every industry and have experiences with all kinds of unique challenges.
          Need opportunities explored in unique ways? We can open doors you have not seen before.
        </p>
        <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>Explore Each Industry</h3>
        <p style={{ textAlign: 'center' }}><em>Please find what is most relevant to you</em></p>
        <Divider variant='middle' sx={{ marginTop: '1rem', marginBottom: '1rem' }} />
        <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              paddingTop: '2rem'
            }}
          >
            {
              industries.map((industry) => CategoryBox(industry))
            }
          </Grid>
        </Box>
      </Container>
      <ClientCareerDoubleBox />
    </>
  );
}