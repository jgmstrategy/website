import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { insights, insightType } from '@/constants/insights';

function InsightFeatureBox({ name, href, desc, image }: insightType) {
  return (
    <Grid item xs={4}>
      <Link href={href}>
        <Paper sx={{ padding: '1rem', margin: '1rem' }} elevation={1}>
          <Stack direction='row' justifyContent='space-between'>
            <Box
              width={1}
              sx={{
                height: 100,
                position: 'relative',
                marginY: '1rem'
              }}
            >
              <Image src={image} alt='' fill />
            </Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
                paddingBottom: '1rem'
              }}
            >
              {name}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: 14
            }}
          >
            {desc}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
}

export default function Insights() {
  return (
    <>
      <Head>
        <title>Expert insights by JGM Strategy Consulting</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='bg-image' style={{ height: '50rem', overflow: 'hidden' }}>
        <Image
          src='/water.jpg'
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask'>
          <div className='d-flex align-items-center h-100 p-4'>
            <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <Card sx={{ minWidth: 275, backgroundColor: 'transparent' }}>
                <CardContent sx={{ color: 'white' }}>
                  <Typography
                    variant='h5'
                    component='div'
                    className='pb-3'
                    sx={{
                      fontSize: 48
                    }}
                  >
                    Insights
                  </Typography>
                  <Typography variant='body1'>
                    Hear it from the experts. We&apos;re seeing the big picture here.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <Container maxWidth='lg' sx={{ paddingTop: '3rem' }}>
        <Typography>
          We hope to display recommended and featured insights here soon. For now, you can browse
          a list of all the insights below.
        </Typography>
      </Container>
      <Container maxWidth='lg' sx={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
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
              insights.map((insight) => InsightFeatureBox(insight))
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
}